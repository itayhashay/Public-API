const source    = document.getElementById('search-box-input');
const name      = document.getElementById('Checkbox-name');
const category  = document.getElementById('Checkbox-category');
const upload_by = document.getElementById('Checkbox-uploadby');

const inputHandler = function(e) {
  //result.innerHTML = e.target.value;
  console.log(source.value)
  console.log(name.checked)

  $.ajax({
    url: '/api/search?text='+source.value + "&name=" + name.checked + "&category=" + category.checked + "&uploadby=" + upload_by.checked, // here you put the url path that will retrive the page
    type: 'GET',
    contenttype: 'application/json',
    dataType: "json",
    data: {},
    success: ({ data }) => {
        console.log(data)
        $.ajax({
            url: '/', // here you put the url path that will retrive the page
            type: 'GET',
            contenttype: 'application/json',
            dataType: "json",
            data: {},
            success: ({ data }) => {
                location.href = '/';
            }
            })
        }
    })

}

source.addEventListener('input', inputHandler);
source.addEventListener('propertychange', inputHandler); // for IE8
// Firefox/Edge18-/IE9+ don’t fire on <select><option>
// source.addEventListener('change', inputHandler); 