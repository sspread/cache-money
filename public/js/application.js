$(document).ready(function() {
  var baseUrl = "https://maps.googleapis.com/maps/api/geocode/json?";
  var apiKeyQuery = "&key=AIzaSyBiuGXmRpfN1Q3NT2S3_pYHCVT7kUzwaWA";

  $("#upload_form").on("submit", function(event){

    $("#url_container").hide("slow");

    event.preventDefault();

    var data = new FormData();
    var upload = $("#upload-form-image")[0].files[0];
    data.append('upload', upload);

    var address = $("#upload-form-location").val()
    var serializedAddress = address.serialize();
    var locationObject = $.get(baseUrl + serializedAddress + apiKeyQuery, function(serverResponse){
      return serverResponse
    });

    var returnCoords = function(locationObject) {
    var firstResult = locationObject.results[0];
    var northeastLat = firstResult.geometry.bounds.northeast.lat;
    var northeastLng = firstResult.geometry.bounds.northeast.lng;
    var southwestLat = firstResult.geometry.bounds.southwest.lat;
    var southwestLng = firstResult.geometry.bounds.southwest.lng;
    return northeastLat+","+northeastLng+","+southwestLat+","+southwestLng;
    }
    var bounds = returnCoords(locationObject);

    console.log(bounds);

    $.ajax({
      url: '/upload',
      data: data,
      contentType: false,
      processData: false,
      type: 'POST',
      success: function(serverResponse) {
        var uploadUrl = "/u/"+serverResponse;
        $("#url_text_field").val(uploadUrl);
        $("#url_container").show("slow");
      },
      error: function(serverResponse) {
        // $("INSERT CONTAINER ON INDEX.ERB").html("<h3>ERROR</h3>");
      }
    });

  });



  $("#download_button").on("click", function(event){
    url = {url: document.URL.match(/.{3}$/)[0]}
    console.log(url)
    $.ajax({
      url: '/u',
      data: url,
      type: 'DELETE',
      success: function(serverResponse) {
        $(".success").html("<h3>LOADED</h3>");
        $("#download_button").hide();
      },
      error: function(serverResponse) {
        $(".success").html("<h3>ERROR</h3>");
      }
    });
  });
});

