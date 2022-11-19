$(document).ready(function () {

  $('#btn-send').each(function () {
    var $this = $(this);
    $this.on("click", function () {
      const username = document.getElementById("username").value;
      const firstName = document.getElementById("firstname").value;
      const lastName = document.getElementById("lastname").value;
      const password = document.getElementById("password").value;
      const email = document.getElementById("emailAddr").value;
      let gender = document.getElementById("gender").value;
      const birthday = document.getElementById("birthday").value;
      debugger;

      if (username != '' && email != '' && gender != 'Gender' && birthday != '' && password != '' && lastName != '' && firstName != '') {
        gender = gender == 1 ? "Male" : "Female";
        $.ajax({
          url: "/user", // here you put the url path that will retrive the page
          type: "POST",
          contenttype: "application/json",
          dataType: "json",
          data: {
            username,
            firstName,
            lastName,
            password,
            email,
            gender,
            birthday
          },
          success: (data) => {
            if (data.isSuccess) {
              console.log(data);
              location.assign('/');
            } else {
              $('#validation').text(data.message);
            }
          }
        });
      } else {
        $('#validation').text("Please fill all the empty inputs");
      }
      return false;
    });
  });

});