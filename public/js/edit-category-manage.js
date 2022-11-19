$(document).ready(function () {

    $('.edit-category').each(function () {
        var $this = $(this);
        $this.on("click", function () {
            var id = $(this).data('id');
            $.ajax({
                url: `/edit-category/${id}`, // here you put the url path that will retrive the page
                type: 'GET',
                contenttype: 'html',
                success: function (data) {
                    $("#main").html(data);
                }
            })
        });
    });

});