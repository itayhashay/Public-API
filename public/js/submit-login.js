const email = document.getElementById("in-email");
const password = document.getElementById("in-password");
const send = document.getElementById("btn-send1");

send.onclick = (submit) => {
  console.log(email.value);
  console.log(password.value);
    // $.ajax({
    //   url: "/api", // here you put the url path that will retrive the page
    //   type: "POST",
    //   contenttype: "application/json",
    //   dataType: "json",
    //   data: {
    //     email: email.value,
    //     password: password.value,
    //   },
    //   success: ({ data }) => {
    //     console.log(data);
    //   },
    // });
  return false;
};
