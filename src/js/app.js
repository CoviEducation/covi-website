document.addEventListener("DOMContentLoaded", function () {
  let active = document.getElementById(name);
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
});
