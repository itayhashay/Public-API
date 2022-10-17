// for isar and ran
// this function adds ajax load more feature
$(document).ready(function () {
    $(".load-more").click(function () {
        alert("hello");
    })
});
        
//temp
// this function adds ajax to the navbar
$(document).ready(function () {
    $("ul li a").click(function () {
        // replace a div with another div ajax
        console.log($(this).find("span").text());
        if ($(this).find("span").text() == "Manage APIs") {
            // $("#main");
            // load_data("Ajax/manage-apis");
            
            // Ran Note
            // I want to replace the div with the manage apis div
            // currently i can't do it because the browser can
            // access only to public files

            // How the hell i do that? Ask Itay or Isar
        }
    })
});

const body = document.querySelector("body"),
    modeToggle = body.querySelector(".mode-toggle");
sidebar = body.querySelector("nav");
sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if (getStatus && getStatus === "close") {
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        localStorage.setItem("mode", "dark");
    } else {
        localStorage.setItem("mode", "light");
    }
});


sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if (sidebar.classList.contains("close")) {
        localStorage.setItem("status", "close");
    } else {
        localStorage.setItem("status", "open");
    }
})

// this function bolds the current page in the navbar
$(document).ready(function () {
    $('ul li a').click(function () {
        let spa = $('li a').find(".active-text");
        spa.removeClass("active-text");
        spa.addClass("link-name");
        $(this).find("span").removeClass("link-name");
        $(this).find("span").addClass("active-text");

        let ico = $('li a').find(".active-icon");
        ico.removeClass("active-icon");
        ico.addClass("non-active-icon");
        $(this).find("i").removeClass("non-active-icon");
        $(this).find("i").addClass("active-icon");

        $('li a').removeClass("active");
        $(this).addClass("active");
    });
});
