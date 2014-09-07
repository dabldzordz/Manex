// JavaScript Document

function initialize() {
  var myLatlng = new google.maps.LatLng(53.130484,18.1215265);
  var mapOptions = {
    zoom: 12,
    center: myLatlng
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h3 id="firstHeading" class="firstHeading">MANEX</h3>'+
      '<div id="bodyContent">'+
      '<p>Fordońska 246' +
	  '<br/>85-766 Bydgoszcz'
	  '</p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString,
	  position: myLatlng,
	  map: map
	  
  });

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Manex galwanizernia'
	   
  });
  
}

google.maps.event.addDomListener(window, 'load', initialize);
