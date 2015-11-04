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

  // Routing and Page Changing
  function router(){
    change_page( $(location).attr('href').match(/#(\w*)/) );
  }

  function isValidPage(target){
    validPages = ['home', 'about', 'tilt', 'scihive', 'shareyourscience', 'archive', 'team', 'beeclub'];
    return ( $.inArray(target,validPages) > -1 );
  }

  function change_page(target){
    if (!isValidPage(target)) { target = "home"; }

    // // Production
    // window.location.replace(window.location.origin + "/tps/#" + target);
    // $("#content_column").load("/tps/html/contents/" + target + ".html");

    // Local
    window.location.replace(window.location.origin + "/#" + target);
    $("#content-column").load("/html/contents/" + target + ".html");
  }

  // Tabloid Reveal/Scrollto
  $(".tabloid-button").click(function(data){
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
