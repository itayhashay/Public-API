$(document).ready(function () {

    $('#add-new-api').each(function () {
        var $this = $(this);
        $this.on("click", function () {
            $.ajax({
                url: '/add-api', // here you put the url path that will retrive the page
                type: 'GET',
                contenttype: 'html',
                success: function (data) {
                    $("#main").html(data);
                }
            })
        });
    });

});