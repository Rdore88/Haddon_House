var circles = document.getElementById('circles');
var widthQuery = window.matchMedia('(min-width: 900px)');

function superbCircle(){
  var outerDiv = document.createElement('div');
  var div = document.createElement('div');
  div.innerHTML = '<p>A</p>';
  outerDiv.className = 'circle-container';
  div.className = 'circle';
  var p = document.createElement('p');
  p.textContent = "Superb Value";
  outerDiv.appendChild(div);
  outerDiv.appendChild(p);
  circles.appendChild(outerDiv);
}

function locationCircle(){
  var outerDiv = document.createElement('div');
  var div = document.createElement('div');
  div.innerHTML = '<p>B</p>';
  outerDiv.className = 'circle-container';
  div.className = 'circle';
  var p = document.createElement('p');
  p.textContent = "Best In-town Location";
  outerDiv.appendChild(div);
  outerDiv.appendChild(p);
  circles.appendChild(outerDiv);
}

function gorgeusCircle(){
  var outerDiv = document.createElement('div');
  var div = document.createElement('div');
  div.innerHTML = '<p>C</p>';
  outerDiv.className = 'circle-container';
  div.className = 'circle';
  var p = document.createElement('p');
  p.textContent = "Gorgeus Interiors";
  outerDiv.appendChild(div);
  outerDiv.appendChild(p);
  circles.appendChild(outerDiv);
}

function addCircles(mediaQuery){
  console.log('Hello World');
  if (widthQuery.matches) {
    superbCircle();
    locationCircle();
    gorgeusCircle()
  } else {
    circles.innerHTML = '';
  }

}
window.onload = addCircles();
widthQuery.addListener(addCircles);
