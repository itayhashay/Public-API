$(document).ready(function () {

  $('#btn-send').each(function () {
    var $this = $(this);
    $this.on("click", function () {
      const name = document.getElementById("name").value;
      const description = document.getElementById("desc").value;
      data = {
        name,
        description
      }
      console.log(data);
      if (name != '' && description != '') {
        $.ajax({
          url: "/category", // here you put the url path that will retrive the page
          type: "POST",
          contenttype: "application/json",
          dataType: "json",
          data: {
            name,
            description
          },
          success: (data) => {
            if (data.isSuccess) {
              location.reload();
            } else {
              $('#validation').text(data.message);
              $('#name').val('');
              $('#desc').val('');
            }
          }
        });
      } else {
        $('#validation').text("Please fill all the inputs");
      }
      return false;
    });
  });

});