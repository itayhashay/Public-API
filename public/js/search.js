const source    = document.getElementById('search-box-input');
const name      = document.getElementById('Checkbox-name');
const category  = document.getElementById('Checkbox-category');
const upload_by = document.getElementById('Checkbox-uploadby');


source.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
        console.log(source.value)
        console.log(name.checked)
        location.href = '/?text='+source.value + "&name=" + name.checked + "&category=" + category.checked + "&uploadby=" + upload_by.checked;
    }
  });
