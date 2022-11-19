$(document).ready(function () {

  $('#btn-send').each(function () {
    var $this = $(this);
    $this.on("click", function () {
      const username = document.getElementById("username").value;
      const firstName = document.getElementById("firstname").value;
      const lastName = document.getElementById("lastname").value;
      const email = document.getElementById("emailAddr").value;
      let gender = document.getElementById("gender").value;
      let birthday = document.getElementById("birthday").value;
      const id = $(".id").data("id");
      data = {
        username,
        firstName,
        lastName,
        email
      }
      if (firstName != '' && email != '' && lastName != '') {
        if (birthday != "")
          data["birthday"] = birthday;
        if (gender != "Gender")
          data["gender"] = gender == 1 ? "Male" : "Female";
        $.ajax({
          url: `/user/${id}`, // here you put the url path that will retrive the page
          type: "PUT",
          contenttype: "application/json",
          dataType: "json",
          data,
          success: ({ data }) => {
            location.assign('/');
          }
        });
      } else {
        $('#validation').text("Please fill all the empty inputs");
      }

      return false;
    });
  });

});