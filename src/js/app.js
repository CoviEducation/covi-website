document.addEventListener("DOMContentLoaded", function () {
  let active = document.getElementById(name);
  function homeRoute(){
    var name = window.location.hash.replace('#', '') || 'home';
    active && active.classList.remove('visible')
    active = document.getElementById(name+'-panel');
    active && active.classList.add('visible')
  }
  window.addEventListener("hashchange", homeRoute, false);
  homeRoute();
});
