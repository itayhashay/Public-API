// const form = document.getElementById("form");
const fname = document.getElementById("in-name");
const lname = document.getElementById("in-lname");
const uname = document.getElementById("in-uname");
const pass = document.getElementById("in-password");
const cpass = document.getElementById("in-cpassword");
const gender = document.getElementById("in-gender");
const date = document.getElementById("birthday");
const email = document.getElementById("in-email");
const send = document.getElementById("btn-send");

send.onclick = (submit) => {
  console.log(fname.value);
  console.log(lname.value);
  console.log(uname.value);
  console.log(pass.value);
  console.log(cpass.value);
  console.log(gender.value);
  console.log(date.value);
  console.log(email.value);

  // $.ajax({
  //   url: "/user", // here you put the url path that will retrive the page
  //   type: "POST",
  //   contenttype: "application/json",
  //   dataType: "json",
  //   data: {
  //   },
  //   success: ({ data }) => {
  //     console.log(data);
  //   },
  // });
  Validate();
  return false;
};

function Validate() {
  const fnameVal = fname.value.trim();
  const lnameVal = lname.value.trim();
  const unameVal = uname.value.trim();
  const passwordVal = pass.value.trim();
  const cpasswordVal = cpass.value.trim();
  const genderVal = gender.value.trim();
  const birthVal = date.value.trim();
  const emailVal = uname.value.trim();

  //fname
  if (fnameVal === "") {
    console.log("aa");
    setErrorMsg(fname, "first name cannot be blank");
  } else if (fnameVal.length <= 2) {
    setErrorMsg(fname, "min 3 char");
  } else {
    setSuccessMsg(fname);
  }

  //l name

  if (lnameVal === "") {
    setErrorMsg(lname, "last name cannot be blank");
  } else if (lnameVal.length <= 2) {
    setErrorMsg(lname, "min 3 char");
  } else {
    setSuccessMsg(lname);
  }

  //uname
  if (unameVal === "") {
    setErrorMsg(uname, "user name cannot be blank");
  } else if (!isuname(unameVal)) {
    setErrorMsg(uname, "user name is not valid");
  } else {
    setSuccessMsg(uname);
  }

  //password
  if (passwordVal === "") {
    setErrorMsg(pass, "password cannot be blank");
  } else if (passwordVal.length <= 7) {
    setErrorMsg(pass, "min 8 char");
  } else {
    setSuccessMsg(pass);
  }

  //confirm password
  if (cpasswordVal === "") {
    setErrorMsg(cpass, "confirm password cannot be blank");
  } else if (passwordVal != cpasswordVal) {
    setErrorMsg(cpass, "Not Matched!");
  } else {
    setSuccessMsg(cpass);
  }
  // SuccessMsg(fnameVal);
}

function setErrorMsg(input, errormsgs) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = errormsgs;
}

function setSuccessMsg(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
