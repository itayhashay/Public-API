$(document).ready(function () {
    $('.edit-api').each(function () {
        var $this = $(this);
        $this.on("click", function () {
            var id = $(this).data('id')
            $.ajax({
                url: `/edit-api/${id}`, // here you put the url path that will retrive the page
                type: 'GET',
                contenttype: 'html',
                success: function (data) {
                    console.log(data);
                    $("#main").html(data);
                }
            })
        });
    });

});