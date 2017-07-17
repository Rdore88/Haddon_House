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

//update this with your js_form selector
  var form_id_js = "javascript_form";

  console.log(config.EMAIL_KEY);

  var data_js = {
      "access_token": config.EMAIL_KEY
  };

  function js_onSuccess() {
      // remove this to avoid redirect
      alert("Email Sent")
      window.location = "../html/contact.html" + "?message=Email+Successfully+Sent%21&isError=0";
  }

  function js_onError(error) {
      // remove this to avoid redirect
      alert("Please fill out form completely")
      window.location = "../html/contact.html" + "?message=Email+could+not+be+sent.&isError=1";
  }

  var sendButton = document.getElementById("js_send");

  function js_send() {
      sendButton.value='Sending…';
      sendButton.disabled=true;
      var request = new XMLHttpRequest();
      request.onreadystatechange = function() {
          if (request.readyState == 4 && request.status == 200) {
              js_onSuccess();
          } else
          if(request.readyState == 4) {
            console.log(request.response);
              js_onError(request.response);
          }
      };

      var subject = document.querySelector("#" + form_id_js + " [name='subject']").value;
      var message = document.querySelector("#" + form_id_js + " [name='text']").value;
      var email = document.querySelector("#" + form_id_js + " [name='reply_to']").value;
      data_js['subject'] = subject;
      data_js['text'] = message;
      data_js['reply_to'] = email;
      var params = toParams(data_js);

      request.open("POST", "https://postmail.invotes.com/send", true);
      request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      console.log(params);
      request.send(params);

      return false;
  }

  sendButton.onclick = js_send;

  function toParams(data_js) {
      var form_data = [];
      for ( var key in data_js ) {
          form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
      }

      return form_data.join("&");
  }

  var js_form = document.getElementById(form_id_js);
  js_form.addEventListener("submit", function (e) {
      e.preventDefault();
  });
