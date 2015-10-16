$(document).ready(function() {
  // Load
  router();

  // Click for Hexagons and Nav Links
  $("*[data-target~='content']").click(function(data){
    change_page( this.attributes["data-target"].value.replace("content ",""));
  });

  $("img[class~='tile']").click(function(data){
    change_page( this.attributes["data-target"].value.replace("content ",""));
  });

  function change_page(target){
    if (!validPage(target)) { target = "home"; }
    window.location.replace(window.location.origin + "/#" + target);
    $("#content_column").load("/html/contents/" + target + ".html");
  }

  function router(){
    var target = $(location).attr('href').match(/#(\w*)/);
    change_page(target[1]);
  }

  function validPage(target){
    validPages = ['home', 'about', 'tilt', 'scihive', 'shareyourscience', 'archive', 'team', 'beeclub'];
    return ($.inArray(target,validPages) > -1);
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
