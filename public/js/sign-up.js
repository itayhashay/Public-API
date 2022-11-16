var error = "";

function Validate() {
  const firstName = document.getElementById("firstname").value;
  const lastName = document.getElementById("lastname").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;
  const gender =
    document.getElementById("gender").value == 1 ? "Male" : "Female";
  const birthday = document.getElementById("birthday").value;
  var flag = true;
  if (firstName == "") {
    error += "first name cannot be blank\n";
    console.log(error);
    flag = false;
  } else if (firstName.length <= 2) {
    error += "min 3 char\n";
    flag = false;
  } else {
    error += "all good\n";
  }
  if (!flag) {
    var message = document.getElementById("message");
    message.style = "visibility:visible";
    message.innerText = error;
  }
  return flag;
}

$("#sign-up-send")
  .unbind("click")
  .click(function () {
    debugger;
    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const gender =
      document.getElementById("gender").value == 1 ? "Male" : "Female";
    const birthday = document.getElementById("birthday").value;

    if (!Validate()) {
      return false;
    }

    data = {
      username,
      firstName,
      lastName,
      password,
      email,
      gender,
      birthday,
    };
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
        birthday,
      },
      success: ({ data }) => {
        console.log(data);
        location.assign("/login");
      },
    });

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
