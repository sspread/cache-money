$(document).ready(function() {

//Upload functions
  var baseUrl = "https://maps.googleapis.com/maps/api/geocode/json?";
  var apiKeyQuery = "&key=AIzaSyBiuGXmRpfN1Q3NT2S3_pYHCVT7kUzwaWA";


//Download functions
  var baseUrl = "https://maps.googleapis.com/maps/api/geocode/json?";
  var apiKeyQuery = "&key=AIzaSyBiuGXmRpfN1Q3NT2S3_pYHCVT7kUzwaWA";

  $(document).ready(checkCoords)


  function checkCoords(uploadBounds) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var currentLat = position.coords.latitude;
      var currentLng = position.coords.longitude;
      var firstResult = uploadBounds.results[0];
      var northeastLat = firstResult.geometry.bounds.northeast.lat;
      var northeastLng = firstResult.geometry.bounds.northeast.lng;
      var southwestLat = firstResult.geometry.bounds.southwest.lat;
      var southwestLng = firstResult.geometry.bounds.southwest.lng;
      if (currentLat <= northeastLat &&
          currentLat >= southwestLat &&
          currentLng <= northeastLng &&
          currentLng >= southwestLng) {
        return true
      } else {
      var coordsSerialized = currentLat + ", "+ currentLng;
      returnNeighborhood(coordsSerialized);
      }
    })
  }

    function returnNeighborhood(coordsSerialized) {
      $.get(baseUrl + coordsSerialized + apiKeyQuery, function(serverResponse){
      var neighborhood = serverResponse.results[4].formatted_address;
      return "You're in " + neighborhood + ". You can't download it."
      })
    }



});
