$(document).ready(function() {
  $("#upload_form").on("submit", function(event){
    $("#url_container").hide("slow");
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

