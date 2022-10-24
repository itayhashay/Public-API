$(document).ready(function () {
    
    $('.upvote').each(function () {
        var $this = $(this);
        $this.on("click", function () {
            console.log($(this).data('id'));
            var id = $(this).data('id')
            $.ajax( {
                url: '/api/upvote/'+id, // here you put the url path that will retrive the page
                type: 'POST',
                contenttype: 'application/json',
                data: {} 
              })
        });
    });

});
