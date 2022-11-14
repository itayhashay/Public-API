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
  // $.ajax({
  //     url: '/api' , // here you put the url path that will retrive the page
  //     type: 'POST',
  //     contenttype: 'application/json',
  //     dataType: "json",
  //     data: {},
  //     success: ({ data }) => {
  //         console.log(data)
  //     }
  // })
  return false;
};
