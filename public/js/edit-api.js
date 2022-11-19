$(document).ready(function () {

  $('#btn-send').each(function () {
    var $this = $(this);
    $this.on("click", function () {
      const name = document.getElementById("inputname").value;
      const url = document.getElementById("inputurl").value;
      const category = document.getElementById("inputcat").value;
      const desc = document.getElementById("inputdesc").value;
      const id = $(".id").data("id");
      if (name != '' && url != '' && desc != '') {
        $.ajax({
          url: `/api/${id}`, // here you put the url path that will retrive the page
          type: "PUT",
          contenttype: "application/json",
          dataType: "json",
          data: {
            name: name,
            description: desc,
            url: url,
            category: category
          },
          success: ({ data }) => {
            console.log(data);
            location.assign('/')
          }
        });
      } else {
        $('#validation').text("Please fill all the empty inputs");
      }
      return false;
    });
  });

});