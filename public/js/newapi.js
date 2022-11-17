$(document).ready(function () {
  $("#btn-send").each(function () {
    var $this = $(this);
    $this.on("click", function () {
      const name = document.getElementById("inputname");
      const url = document.getElementById("inputurl");
      const category = document.getElementById("inputcat");
      const desc = document.getElementById("inputdesc");
      if (!Validate()) {
        return false;
      }
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
    });
  });
});

function Validate() {
  var flag = true;
  var error = "";
  //name
  if (name == "") {
    error += "api name cannot be blank\n";
    console.log(error);
    flag = false;
  } else if (Name.length <= 2) {
    error += "min 3 char\n";
    flag = false;
  } else {
    error += "all good\n";
  }
  //url
  if (url == "") {
    error += "url cannot be blank\n";
    console.log(error);
    flag = false;
  }
  // } else if (url.length <= 2) {
  //   error += "\n";
  //   flag = false;
  // }
  else {
    error += "all good\n";
  }
  //category
  if (category == "") {
    error += "category cannot be blank\n";
    console.log(error);
    flag = false;
  }
  // } else if (url.length <= 2) {
  //   error += "\n";
  //   flag = false;
  // }
  else {
    error += "all good\n";
  }

  //description
  if (description == "") {
    error += "description cannot be blank\n";
    console.log(error);
    flag = false;
  } else if (description.length <= 6) {
    error += "description must have min 6chars\n";
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
