function toggleMainNav() {
	$('#left ol').slideToggle();
}

function openSubwindow( id ) {
	if ($(this).hasClass( 'active' ))
		return;
	$('#left ul li.active').removeClass( 'active' );
	$(this).addClass( 'active' );
	// these were cool, you can uncomment these and
	// comment the rest, but I got tired of them quickly
	//$('.subwindow').fadeOut(200);
	//$('#'+id).fadeIn(200);
	$('.subwindow').hide();
	$('#'+id).show();
}

// on the load of the document
$(document).ready( function() {
	$('#left ul li').first().click();
});
