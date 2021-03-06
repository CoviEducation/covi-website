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
    raw = $(location).attr('href').match(/#(\w*)/);
    if (raw == null) {
      match = "home";
    } else {
      match = $(location).attr('href').match(/#(\w*)/)[1];
    }
    change_page( match );
  }

  function isValidPage(target){
    validPages = ['home', 'about', 'tilt', 'scihive', 'shareyourscience', 'archive', 'team', 'beeclub'];
    return ( $.inArray(target,validPages) > -1 );
  }

  function change_page(target){
    // Production vs. Local
    // var root = "/tps";
    root = ""

    if (!isValidPage(target)) { target = "home"; }
    window.location.replace(window.location.origin + root + "/#" + target);
    hideTabloids();
    $("#content-column").load(root + "/html/contents/" + target + ".html");
    $('html, body').animate({ scrollTop: $("#content-column").offset().top }, 300);
  }

  //  Tabloids
  function change_tabloid(target){
    // Production vs. Local
    // var root = "/tps";
    root = ""

    hideTabloids();
    $("#tabloid-container").load(root + "/html/tabloids/" + target + ".html");
    $("#tabloid-container").removeClass("hidden");
    $('html, body').animate({ scrollTop: $("#tabloid-container").offset().top }, 2000);
  }

  $('#content-column').click( function(data){
    if (data.toElement.className == "tabloid-button"){
      change_tabloid(data.toElement.dataset.target);
    }
  });

  $('.join-button').click( function(data){
    change_tabloid(data.toElement.dataset.target);
  });

  function hideTabloids(){
    $("#tabloid-container").addClass("hidden");
  }
});
