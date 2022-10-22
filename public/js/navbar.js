// for isar and ran
// this function adds ajax load more feature
$(document).ready(function () {
    $(".load-more").click(function () {
        // prevent the default actions
        e.preventDefault();
        e.stopPropagation();
        
        alert("hello");
    })
});
        
//temp
// this function adds ajax to the navbar
$(document).ready(function () {
    $("ul li a").click(function (e) {
        // prevent the default actions
        e.preventDefault();
        e.stopPropagation();

        // page is the page to load
        var page = $(this).find("span").text();
        //print the page name
        console.log('loading the '+ $(this).find("span").text() + 'page using ajax');
        
        if (page == "Dashboard") {
            $.ajax( {
              url: '/dashboard',
              type: 'GET',
              contenttype: 'html',
                success: function(data) {
                    console.log(data);
                    $("#main").html(data);
                }  
            })
        }        
        if (page == "Manage APIs") {
            $.ajax( {
              url: '/manage-apis',
              type: 'GET',
              contenttype: 'html',
                success: function(data) {
                    console.log(data);
                    $("#main").html(data);
                }  
            })
        }
        if (page == "Manage Users") {
            $.ajax( {
              url: '/manage-users',
              type: 'GET',
              contenttype: 'html',
                success: function(data) {
                    console.log(data);
                    $("#main").html(data);
                }  
            })
        }
        if (page == "Manage Categories") {
            $.ajax( {
              url: '/manage-categories',
              type: 'GET',
              contenttype: 'html',
                success: function(data) {
                    console.log(data);
                    $("#main").html(data);
                }  
            })
        }
        
        // isar - here you'll need to add the ajax for the other pages (cards,profile,add api, etc)
        // here's an example:
        if (page == "Latest APIs") {  //here you need to specify the *exact* page name from the sidebar
            $.ajax( {
              url: '/latest-apis', // here you put the url path that will retrive the page
              type: 'GET',
              contenttype: 'html',
                success: function(data) {
                    console.log(data);
                    $("#main").html(data);
                }  
            })
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
