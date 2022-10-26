$(document).ready(function () {

    $('.upvote').each(function () {
        var $this = $(this);
        $this.on("click", function () {
            var id = $(this).data('id')
            console.log('/api/upvote/' + id);
            $.ajax({
                url: '/api/upvote/' + id, // here you put the url path that will retrive the page
                type: 'POST',
                contenttype: 'application/json',
                dataType: "json",
                data: {},
                success: ({ data }) => {
                    console.log(data)
                    $("#" + data._id).html(data.upvotes);
                }
            })
        });
    });

});
