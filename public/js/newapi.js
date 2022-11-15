const name = document.getElementById("inputname");
const url = document.getElementById("inputurl");
const category = document.getElementById("inputcat");
const desc = document.getElementById("inputdesc");
const send = document.getElementById("btn-send");

send.onclick = (submit) => {
  console.log(name.value);
  console.log(url.value);
  console.log(category.value);
  console.log(desc.value);
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
      console.log(data);
    },
  });
  return false;
  Validate();
};

function Validate() {
  const nameVal = name.value.trim();
  const urlVal = url.value.trim();
  const categoryVal = category.value.trim();
  const descVal = desc.value.trim();

  //name
  if (nameVal === "") {
    setErrorMsg(name, " name cannot be blank");
  } else if (nameVal.length <= 2) {
    setErrorMsg(name, "min 3 char");
  } else {
    setSuccessMsg(name);
  }

  //last name

  if (urlVal === "") {
    setErrorMsg(url, "url cannot be blank");
  } else if (urlVal.length <= 2) {
    setErrorMsg(url, "min 3 char");
  } else {
    setSuccessMsg(url);
  }

  //category
  if (categoryVal === "") {
    setErrorMsg(category, "category cannot be blank");
  } else if (!iscategory(categoryVal)) {
    setErrorMsg(category, "category is not valid");
  } else {
    setSuccessMsg(category);
  }

  //descval
  if (descVal === "") {
    setErrorMsg(descval, "descval cannot be blank");
  } else if (descvalVal.length <= 7) {
    setErrorMsg(descval, "min 8 char");
  } else {
    setSuccessMsg(descval);
  }
  SuccessMsg(nameVal);
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
