var map, input, autocomplete, infowindow, marker

function initMap() {


    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 1.378950,
            lng: 103.841401
        },
        zoom: 13
    })

    input = document.getElementById('pac-input')

    autocomplete = new google.maps.places.Autocomplete(input)
    autocomplete.bindTo('bounds', map)

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input)

    geocoder = new google.maps.Geocoder

    infowindow = new google.maps.InfoWindow()
    marker = new google.maps.Marker({
        map: map
    })
    marker.addListener('click', function() {
        infowindow.open(map, marker)

    })

    autocomplete.addListener('place_changed', function() {
        infowindow.close()
        var place = autocomplete.getPlace()
        if (!place.geometry) {
            return
        }

        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport)

        } else {
            map.setCenter(place.geometry.location)
            map.setZoom(17)
        }

        // Set the position of the marker using the place ID and location.
        marker.setPlace({
            placeId: place.place_id,
            location: place.geometry.location
        })
        marker.setVisible(true)

        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
            'Place ID: ' + place.place_id + '<br>' +
            place.formatted_address)
        infowindow.open(map, marker)
    })
}

function addMarker(location, item) {
    var infowindow = new google.maps.InfoWindow({
        content: item.name
    })
    var marker = new google.maps.Marker({
            position: location,
            map: map
        })
        // infowindow.setContent(item.name)
    infowindow.open(map, marker)
}
