document.addEventListener("DOMContentLoaded", function () {
  var activePanel;
  var activeProjects;
  function homeRoute(e){
    var name = window.location.hash.replace('#', '') || 'home';
    activePanel && activePanel.classList.remove('visible')
    activePanel = document.getElementById(name+'-panel');
    activePanel && activePanel.classList.add('visible');

    activeProjects && activeProjects.classList.remove('visible')
    activeProjects = document.getElementById(name+'-projects');
    activeProjects && activeProjects.classList.add('visible');

    e && e.preventDefault();
    e && e.stopPropagation();
    document.body.scrollTop = 0;
  }
  window.addEventListener("hashchange", homeRoute, false);
  homeRoute();

  var button = document.getElementById('menubutton');
  var menu = document.getElementById('navmenu');

  button.addEventListener('click', function(e){
    button.classList.toggle('is-active');
    menu.classList.toggle('visible');
  })

});
