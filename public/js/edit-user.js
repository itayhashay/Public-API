$(document).ready(function () {

  $('#btn-send').each(function () {
    var $this = $(this);
    $this.on("click", function () {
      const username = document.getElementById("username").value;
      const firstName = document.getElementById("firstname").value;
      const lastName = document.getElementById("lastname").value;
      const email = document.getElementById("emailAddr").value;
      const gender = document.getElementById("gender").value;
      const birthday = document.getElementById("birthday").value;
      const id = $(".id").data("id");
      data = {
        username,
        firstName,
        lastName,
        email
      }
      if (birthday != "")
        data["birthday"] = birthday;
      if (gender != "Gender")
        data["gender"] = gender == 1 ? "Male" : "Female";
      console.log(data);
      debugger;
      $.ajax({
        url: `/user/${id}`, // here you put the url path that will retrive the page
        type: "PUT",
        contenttype: "application/json",
        dataType: "json",
        data,
        success: ({ data }) => {
          console.log(data);
        }
      });
    });
  });

});