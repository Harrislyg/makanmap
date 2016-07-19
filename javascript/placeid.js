/* global $ */
var mapId;

$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: 'https://tolomakan.herokuapp.com/makans'
    }).done(function (response) {
        mapId = response[0].mapId
        console.log(mapId)
        geocodePlaceId(geocoder, map, infowindow)
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log('error ', errorThrown)
    })
})
