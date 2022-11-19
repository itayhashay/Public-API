$(document).ready(function () {

  $('#btn-send').each(function () {
    var $this = $(this);
    $this.on("click", function () {
      const description = document.getElementById("desc").value;
      const id = $(".id").data("id");
      debugger;
      if (description != '') {
        $.ajax({
          url: `/category/${id}`, // here you put the url path that will retrive the page
          type: "PUT",
          contenttype: "application/json",
          dataType: "json",
          data: {
            description
          },
          success: ({ data }) => {
            console.log(data);
            location.assign('/');
          }
        });
      }
      else {
        $('#validation').text("Please fill all the empty inputs");
      }
      return false;
    });
  });

});