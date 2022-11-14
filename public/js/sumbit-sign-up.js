const name = document.getElementById("in-name");
const url = document.getElementById("in-url");
const category = document.getElementById("Checkbox-category");
const desc = document.getElementById("in-desc");
const send = document.getElementById("btn-send");

send.onclick = (submit) => {
  console.log(name.value());

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
