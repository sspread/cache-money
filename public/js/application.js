// $(document).ready(function() {
//   $("#upload_form").on("submit", function(event){
//     $("#url_container").hide("slow");
//     event.preventDefault();
//     var upload = $("#upload-form-image")[0].files[0];
//     // var formData = new FormData();
//     // formData.append('image', upload);
//     // var upload = $("#upload_form input[name=location]").serialize();
//     console.log(upload)
//     $.post("/upload", upload, function(serverResponse){
//       console.log(serverResponse);
//       var uploadUrl = "WORKED-HEROKU-APP/u/"+serverResponse;
//       $("#url_text_field").val(uploadUrl);
//       $("#url_container").show("slow");
//     })
//   });
// });
