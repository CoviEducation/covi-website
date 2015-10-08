$(document).ready(function() {
  // Based on parent div width calculate
  // resize and move hexagons accordingly

  transformHexagons = function(){
    min_width = 3;
    widthToHeightRatio = 12;
  }

  // Listen to window resizing
  $(window).resize(function(){

    console.log("WINDOW HEIGHT: " + $(window).height());
    console.log("WINDOW WIDTH " + $(window).width());

    console.log("PARENT DIV HEIGHT: " + $("#hexagon-column").height());
    console.log("PARENT DIV WIDTH: " + $("#hexagon-column").width());
  });
});
