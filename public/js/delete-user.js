$(document).ready(function () {

    $('.delete-user').each(function () {
        var $this = $(this);
        $this.on("click", function () {
            var id = $(this).data('id')
            console.log('/user/' + id);
            $.ajax({
                url: '/user/' + id, // here you put the url path that will retrive the page
                type: 'DELETE',
                contenttype: 'application/json',
                dataType: "json",
                data: {},
                success: ({ data }) => {
                    console.log(data)
                    location.reload();
                }
            })
        });
    });

});
