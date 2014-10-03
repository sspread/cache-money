$(document).ready(function() {
  $("#upload_form").on("submit", function(event){
    $(".loading_sun").show();
    $("#url_container").animate({opacity: 0.0}, 350);
    event.preventDefault();
    var data = new FormData();
    var upload = $("#upload-form-image")[0].files[0];
    data.append('upload', upload);
    $.ajax({
      url: '/upload',
      data: data,
      contentType: false,
      processData: false,
      type: 'POST',
      success: function(serverResponse) {
        $(".loading_sun").hide();
        var uploadUrl = "cache-only.herokuapp.com/u/"+serverResponse;
        $("#url_text_field").val(uploadUrl);
        $("#url_container").animate({opacity: 1.0}, 500);
      },
      error: function(serverResponse) {
        $(".loading_sun").hide();
        $("#url_text_field").val("Upload failed. Try Again.");
        $("#url_container").animate({opacity: 1.0}, 500);
      }
    });
  });
  $("#download_button").on("click", function(event){
    url = {url: document.URL.match(/.{3}$/)[0]};
    console.log(url);
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

