var map;
const home = {lat: 33.768188, lng: -84.372292};
const ponceMarket = {lat: 33.772008, lng: -84.366988}

console.log("https://maps.googleapis.com/maps/api/js?key=" + config.MAPS_KEY+ "initMap");

var googleAPI = document.createElement('script');
googleAPI.type = 'text/javascript';
googleAPI.src = "https://maps.googleapis.com/maps/api/js?key=" + config.MAPS_KEY+ "&callback=initMap";
document.querySelector('head').appendChild(googleAPI);

function initMap(){
  map = new google.maps.Map(document.querySelector('#map'), {
    center: home,
    zoom: 14
  });
  var homeMarker = new google.maps.Marker({
    position: home,
    map: map,
    title: "Haddon House"
  });

  var ponceMarketMarker = new google.maps.Marker({
    position: ponceMarket,
    map: map,
    title: "Ponce City Market"
  });
}
console.log("connected");
