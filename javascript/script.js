  // Initialize the map
  var geocoder, infowindow, map
  function initMap () {
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: {lat: 40.72, lng: -73.96}
    })
    geocoder = new google.maps.Geocoder
    infowindow = new google.maps.InfoWindow

    // document.getElementById('submit').addEventListene('click', function () {
    //   geocodePlaceId(geocoder, map, infowindow)
    // })
  }

  // This function is called when the user clicks the UI button requesting
  // a reverse geocode.
  function geocodePlaceId(geocoder, map, infowindow) {
    var placeId = mapId
    geocoder.geocode({'placeId': placeId}, function (results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        if (results[0]) {
          map.setZoom(11)
          map.setCenter(results[0].geometry.location)
          var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
          })
          infowindow.setContent(results[0].formatted_address)
          infowindow.open(map, marker)
        } else {
          window.alert('No results found')
        }
      } else {
        window.alert('Geocoder failed due to: ' + status)
      }
    })
  }
