function toggleNav() {
    var x = document.getElementById("navi");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  } 

document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#slider', {
      type: 'loop',
      perPage: 3,
      focus: 'center',
      padding: {
          right: '5rem',
          left: '5rem',
      },
  } ).mount();
} );

$(".button").on("click", function() { 
  var modal = $(this).data("modal"); 
  $(modal).show();
});
$(".modal").on("click", function(e) { 
  var className = e.target.className; 
  if(className === "modal" || className === "close"){ 
    $(this).closest(".modal").hide();
  } 
});