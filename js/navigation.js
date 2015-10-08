$(document).ready(function() {
  // Load
  $("#content_column").load("/html/contents/home.html");

  // Click for Hexagons and Nav Links
  $("*[data-target~='content']").click(function(data){
    // console.log("MENU NAV: " + this.attributes["data-target"].value);
    change_page( this.attributes["data-target"].value );
  });

  $("img[class~='tile']").click(function(data){
    //  console.log("HEX NAV: " + this.attributes["data-target"].value);
    change_page( this.attributes["data-target"].value );
  });

  // Tile hover behavior
  $(".heximage").hover( function(){
      $(this).children().toggleClass('hidden');
    }, function(){
      $(this).children().toggleClass('hidden');
    }
  );

  function change_page(target){
    raw_target = target.replace("content ", "");
    $("#content_column").load("/html/contents/" + raw_target + ".html");
  }

  // Tabloid Reveal/Scrollto
  $(".prettybutton").click(function(data){
    console.log("Clicking a tabloid button")
    target = this.attributes["data-target"].value;

    // Hide all other tabloids
    hideTabloids();

    // Reveal target tabloid
    $("#" + target).removeClass("hidden");

    // Scroll to target tabloid
    $('html, body').animate({
      scrollTop: $("#" + target).offset().top
      }, 2000);
  });

  hideTabloids = function(){
    $(".tabloid").addClass("hidden");
  }
});
