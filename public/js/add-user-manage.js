$(document).ready(function () {

    $('#add-new-user').each(function () {
        var $this = $(this);
        $this.on("click", function () {
            $.ajax({
                url: '/add-user', // here you put the url path that will retrive the page
                type: 'GET',
                contenttype: 'html',
                success: function (data) {
                    $("#main").html(data);
                }
            })
        });
    });

});