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
      };
    });
  });
});