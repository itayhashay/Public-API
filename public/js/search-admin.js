const source2 = document.getElementById('search-box-input-admin');
const name2 = document.getElementById('Checkbox-name');
const category2 = document.getElementById('Checkbox-category');
const upload_by2 = document.getElementById('Checkbox-uploadby');


source2.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    location.href = '/admin?text=' + source2.value + "&name=" + name2.checked + "&category=" + category2.checked + "&uploadby=" + upload_by2.checked;
  }
});
