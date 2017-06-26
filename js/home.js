var circles = document.getElementById('circles');
var widthQuery = window.matchMedia('(min-width: 900px)');

function addCircles(mediaQuery){
  console.log('Hello World');
  if (widthQuery.matches) {
    var p = document.createElement('p');
    p.textContent = "Hello World";
    circles.appendChild(p);
  } else {
    circles.innerHTML = '';
  }

}
window.onload = addCircles();
widthQuery.addListener(addCircles);
