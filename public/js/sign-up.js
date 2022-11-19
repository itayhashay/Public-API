var error = "";

$("#sign-up-send")
  .unbind("click")
  .click(function () {
    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    let gender = document.getElementById("gender").value;
    const birthday = document.getElementById("birthday").value;

    if (firstName != '' && lastName != '' && username != '' && email != '' && gender != 'Gender' && birthday != '' && password != '') {
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
          birthday,
        },
        success: (data) => {
          if (data.isSuccess) {
            location.assign("/login");
          }
          else {
            $('#validation').text(data.message)
          }
        },
      });
    } else {
      $('#validation').text('Please fill all empty inputs')
    }

    return false;
    //addToCart($(this).attr("id"));
  });

//material contact form
$(".contact-form")
  .find(".form-control")
  .each(function () {
    var targetItem = $(this).parent();
    if ($(this).val()) {
      $(targetItem).find("label").css({
        top: "10px",
        fontSize: "14px",
      });
    }
  });
$(".contact-form")
  .find(".form-control")
  .focus(function () {
    $(this).parent(".input-block").addClass("focus");
    $(this).parent().find("label").animate(
      {
        top: "10px",
        fontSize: "14px",
      },
      300
    );
  });
