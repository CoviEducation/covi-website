document.addEventListener("DOMContentLoaded", function () {
  var active = document.getElementById(name);
  function homeRoute(e){
    var name = window.location.hash.replace('#', '') || 'home';
    active && active.classList.remove('visible')
    active = document.getElementById(name+'-panel');
    active && active.classList.add('visible');
    e && e.preventDefault();
    e && e.stopPropagation();
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
