$(document).ready(function() {
  // Based on parent div width calculate
  // resize and move hexagons accordingly

  hexagonWidthToHeightRatio = 0.8660254037;
  hexDiv = $("#hexagons");

  transformHexagons = function(divWidth){
    mywidth = .8*divWidth;

    hexWidth = 0.4 * mywidth;
    hexHeight = hexWidth * hexagonWidthToHeightRatio;

    // Resize
    // console.log( " DIV WIDTH (" + divWidth + ") | HEXAGON WIDTH (" + hexWidth + ") | HEXAGON HEIGHT (" + hexHeight + ")")
    $(".hexagon ").width(hexWidth).height(hexHeight);

    // Reposition
    // Logo's Position
    topRoot = $("#tps-logo").position().top + $("#tps-logo img").height() + 25 + .05*hexHeight;
    leftRoot = $("#tps-logo").position().left + $("#tps-logo img").width() + 25 + .05*hexWidth;

    // Horizontal
    middleColumnLeft = leftRoot;
    firstColumnLeft = middleColumnLeft - 3*hexWidth/4 - 1;
    lastColumnLeft = middleColumnLeft + 3*hexWidth/4 + 1;

    // Vertical
    firstRowSides   = topRoot;
    firstRowMiddle  = firstRowSides - hexHeight/2;
    secondRowSides  = firstRowSides + hexHeight;
    secondRowMiddle = firstRowMiddle + hexHeight;
    thirdRowMiddle  = secondRowMiddle + hexHeight;

    $("#hex1").css({top: firstRowSides,   left: firstColumnLeft});
    $("#hex2").css({top: firstRowMiddle,  left: middleColumnLeft});
    $("#hex3").css({top: firstRowSides,   left: lastColumnLeft});
    $("#hex4").css({top: secondRowSides,  left: firstColumnLeft});
    $("#hex5").css({top: secondRowMiddle, left: middleColumnLeft});
    $("#hex6").css({top: secondRowSides,  left: lastColumnLeft});
    $("#hex7").css({top: thirdRowMiddle,  left: middleColumnLeft});

  }

  resizePictureFrames = function(width){
    $(".profile-picture-frame").height( width );
  }

  // Listen to window resizing
  $(window).resize(function(){
    transformHexagons($("#hexagons").width());
    resizePictureFrames($(".profile-picture-frame").width());
  });

  transformHexagons($("#hexagons").width());
  resizePictureFrames($(".profile-picture-frame").width());
});

