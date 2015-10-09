$(document).ready(function() {
  // Based on parent div width calculate
  // resize and move hexagons accordingly

  min_width = 3;
  widthToHeightRatio = 0.8660254037; // h = wthr * w


  transformHexagons = function(divWidth){
    // Transform divwidth to hexwidth
    // width of hexwidth = 4a
    // divwidth = 10a
    // hexwdith = 4a
    // hexwidth = .4 divwidth
    // Subtract margins?

    // should this number scale?
    mywidth = divwidth - 160;

    hexWidth = 0.4 * mywidth;
    hexHeight = hexWidth * widthToHeightRatio;

    // console.log( " DIV WIDTH (" + divWidth + ") | HEXAGON WIDTH (" + hexWidth + ") | HEXAGON HEIGHT (" + hexHeight + ")")
    $(".hexagon ")
      .width(hexWidth)
      .height(hexHeight);
  }

  // Listen to window resizing
  $(window).resize(function(){
    divwidth = $(".hexagons").width();
    transformHexagons(divwidth);
  });
});

