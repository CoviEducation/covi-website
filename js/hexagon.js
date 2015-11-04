$(document).ready(function() {
  // Based on parent div width calculate
  // resize and move hexagons accordingly

  hexagonWidthToHeightRatio = 0.8660254037;

  transformHexagons = function(){
    // console.log("\n");
    if ($(window).width() > 600) {
      // console.log("Wide view");
      width = 0.5 * $(window).width();
    } else {
      // console.log("Narrow view");
      width = $(window).width();
    }

    // Resize hex and content columns
    $("#hexagon-column").width(width).height($(window).height());
    $("#content-column").width(width);
    // console.log("Window - Width(" + $(window).width() + ") - Height(" + $(window).height() + ")");
    // console.log("HexagonColumn (" + $("#hexagon-column").width() + ") - Content Column(" + $("#content-column").width() + ")" + "");

    // Resize Hexagons
    hexSectionWidth = width * 0.9;
    $("#hexagons").width(hexSectionWidth);
    hexWidth = 0.4 * hexSectionWidth;
    hexHeight = hexWidth * hexagonWidthToHeightRatio;
    $(".hexagon").width(hexWidth).height(hexHeight);

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
    transformHexagons();
    resizePictureFrames($(".profile-picture-frame").width());
  });

  transformHexagons();
  resizePictureFrames($(".profile-picture-frame").width());
});

