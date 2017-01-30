$(document).on('page:load', function() { //document.ready doesn't fire after the page is already rendered
											   // User turbolinks:load which fires as long as page is loaded
  toggleComments()

});


function toggleComments() {
	$('#comments-toggle').click(function(event){
		event.preventDefault();
		$("#comments").fadeToggle("slow");
	})
}

