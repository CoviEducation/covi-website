$(document).ready(function() {
  // Based on parent div width calculate
  // resize and move hexagons accordingly

  hexagonWidthToHeightRatio = 0.8660254037;

  transformHexagons = function(){
    // console.log("\n");
    windowWidth = $(window).width();
    // console.log("Window Width:" + windowWidth);

    if (windowWidth < 610) {
      // console.log("Narrow view");
      width = windowWidth;
    } else {
      // console.log("Wide view");
      width = windowWidth * .5;
    }

    // width = width + 'px';

    // Resize hex and content columns
    $("#hexagon-column").css('width',width).css('height',$(window).height());
    $("#content-column").css('width',width);
    // console.log("HexagonColumn (" + $("#hexagon-column").width() + ") & Content Column(" + $("#content-column").width() + ")" + "");
    // console.log("SUM WIDTH: " + ($("#hexagon-column").width() + $("#content-column").width()));

    // Resize Hexagons
    hexSectionWidth = width * 0.9;
    $("#hexagons").width(hexSectionWidth);
    hexWidth = 0.4 * hexSectionWidth;
    hexHeight = hexWidth * hexagonWidthToHeightRatio;
    $(".hexagon").width(hexWidth).height(hexHeight);

    // Reposition
    // Logo's Position
    topRoot = 150; // $("#tps-logo").position().top + $("#tps-logo img").height() + 25 + .05*hexHeight;
    leftRoot = hexWidth * .9; // $("#tps-logo").position().left + $("#tps-logo img").width() + 25 + .05*hexWidth;

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
    transformHexagons();
    resizePictureFrames($(".profile-picture-frame").width());
  });

  transformHexagons();
  resizePictureFrames($(".profile-picture-frame").width());
});

