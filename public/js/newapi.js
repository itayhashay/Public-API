$(document).ready(function () {
  $("#btn-send").each(function () {
    var $this = $(this);
    $this.on("click", function () {
      const name = document.getElementById("inputname");
      const url = document.getElementById("inputurl");
      const category = document.getElementById("inputcat");
      const desc = document.getElementById("inputdesc");
      if (name.value != '' && url.value != '' && desc.value != '') {
        $.ajax({
          url: "/api", // here you put the url path that will retrive the page
          type: "POST",
          contenttype: "application/json",
          dataType: "json",
          data: {
            name: name.value,
            description: desc.value,
            url: url.value,
            category: category.value,
          },
          success: ({ data }) => {
            location.assign('/');
          }
        });
      } else {
        $('#validation').text("Please fill all the empty inputs")
      }
      return false;
    });
  });
});