/*Code for the search bar*/
$(document).ready(function(){
  $("#search").on("keyup", function() {
    var value = $(this).val().toLowerCase();

    $(".gallery a").filter(function() {
      $(this).toggle($(this).attr("data-caption").toLowerCase().indexOf(value) > -1);
    });
  });
});

/* Options for the lightbox plugin*/
$('.gallery a').lightbox({
  margin: 200
});

