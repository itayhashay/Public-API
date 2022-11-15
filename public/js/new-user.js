$(document).ready(function () {

  $('#btn-send').each(function () {
    var $this = $(this);
    $this.on("click", function () {
      const username = document.getElementById("username").value;
      const firstName = document.getElementById("firstname").value;
      const lastName = document.getElementById("lastname").value;
      const password = document.getElementById("password").value;
      const email = document.getElementById("emailAddr").value;
      const gender = document.getElementById("gender").value == 1 ? "Male" : "Female";
      const birthday = document.getElementById("birthday").value;
      data = {
        username,
        firstName,
        lastName,
        password,
        email,
        gender,
        birthday
      }
      console.log(data);
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
        success: ({ data }) => {
          console.log(data);
        }
      });
    });
  });

});