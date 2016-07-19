/* global $ */
var mapIds = []

$(document).ready(function () {
  $.ajax({
    type: 'GET',
    url: 'https://tolomakan.herokuapp.com/makans'
  }).done(function (response) {
    $.each(response, function (index, item) {
      mapIds.push(item)
      addMarker({lat: item.latitude, lng: item.longitude}, item)
      console.log(mapIds[index])
    })

  }).fail(function (jqXHR, textStatus, errorThrown) {
    console.log('error ', errorThrown)
  })
})
