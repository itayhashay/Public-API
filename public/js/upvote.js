$(document).ready(function () {

    $('.upvote').each(function () {
        var $this = $(this);
        $this.on("click", function () {
            var id = $(this).data('id')
            $.ajax({
                url: '/api/upvote/' + id, // here you put the url path that will retrive the page
                type: 'POST',
                contenttype: 'application/json',
                dataType: "json",
                data: {},
                success: ({ data }) => {
                    $("#" + data._id).html(data.upvotes);
                }
            })
        });
    });
    $('.bookmark').each(function () {
        var $this = $(this);
        $this.on("click", function () {
            var id = $(this).data('id')
            $.ajax({
                url: '/bookmark', // here you put the url path that will retrive the page
                type: 'POST',
                contenttype: 'application/json',
                dataType: "json",
                data: {
                    apiId: id
                },
                success: ({ data }) => {
                    $.ajax({
                        url: `/bookmarks`, // here you put the url path that will retrive the page
                        type: 'GET',
                        contenttype: 'html',
                        success: function (data) {
                            $("#main").html(data);
                        }
                    })
                }
            })
        });
    });
});