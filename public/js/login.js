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
});
