/* Options for the lightbox plugin*/
$('.gallery a').lightbox({
    margin: 200,
});

/*Code for the search bar*/
$(document).ready(function(){
    $("search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#lightgallery a").filter(function() {
        $(this).toggle($(this).attr("data-caption").toLowerCase().indexOf(value) > -1)
      });
    });
  });
