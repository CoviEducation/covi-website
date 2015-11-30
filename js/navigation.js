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

    window.location.replace(window.location.origin + "/#" + target);
    hideTabloids();
    $("#content-column").load("/html/contents/" + target + ".html");

  }

  change_tabloid = function(target){
    hideTabloids();
    $("#tabloid-container").load("/html/tabloids/" + target + ".html");
    $("#tabloid-container").removeClass("hidden");
  }

  // Tabloid Reveal/Scrollto
  $('#content-column').click( function(data){
    console.log("HEYYYO LMAo");
    if (data.toElement.className == "tabloid-button"){
      change_tabloid(data.toElement.dataset.target);
    }
  });

  function hideTabloids(){
    $("#tabloid-container").addClass("hidden");
  }
});
