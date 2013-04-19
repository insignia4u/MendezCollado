function initialize() {
  var latlng = new google.maps.LatLng(-26.8247908, -65.204435);
  var settings = {
    zoom: 15,
    center: latlng,
    mapTypeControl: true,
    mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
    navigationControl: true,
    navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
    mapTypeId: google.maps.MapTypeId.ROADMAP};
  var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
  var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h6 id="firstHeading" class="firstHeading">Centro Radiológico</h6>'+
    '<div id="bodyContent">'+
    '<p>Muñecas 444 San Miguel de Tucumán</p>'+
    '</div>'+
    '</div>';
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var companyImage = new google.maps.MarkerImage('assets/marker.png',
    new google.maps.Size(100,50),
    new google.maps.Point(0,0),
    new google.maps.Point(50,50)
  );


  var companyPos = new google.maps.LatLng(-26.8247908, -65.204435);

  var companyMarker = new google.maps.Marker({
    position: companyPos,
    map: map,
    icon: companyImage,
    title:"Mendez Collado",
    zIndex: 3});


  google.maps.event.addListener(companyMarker, 'click', function() {
    infowindow.open(map,companyMarker);
  });
}