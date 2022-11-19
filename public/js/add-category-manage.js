$(document).ready(function () {

    $('#add-new-category').each(function () {
        var $this = $(this);
        $this.on("click", function () {
            $.ajax({
                url: '/add-category', // here you put the url path that will retrive the page
                type: 'GET',
                contenttype: 'html',
                success: function (data) {
                    $("#main").html(data);
                }
            })
        });
    });

});