$(document).ready(function () {
  $("#open").click(function () {
    $(".model-container").css("transform", "scale(1)");
  });
  $("#close").click(function () {
    $(".model-container").css("transform", "scale(0)");
  });
  document
    .querySelectorAll(".input-container[data-error].input")
    .forEach((inpEl) => {
      inpEl.addEventListener("input", () =>
        inpEl.parentElement.removeAttribute("data-error")
      );
    });

  $('#btn-send').unbind('click').click(function () {
    debugger;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    $.ajax({
      url: "/user/login", // here you put the url path that will retrive the page
      type: "POST",
      contenttype: "application/json",
      dataType: "json",
      data: {
        username,
        password
      },
      success: ({ data }) => {
        debugger;
        console.log(data);
        if (data.loggedIn) {
          document.cookie = `username=${data.username}`;
          document.cookie = `type=${data.userType}`;
          location.assign("/");
        } else {
          location.reload();
        }
      }
    });
    return false;
    //addToCart($(this).attr("id"));
  });
});
