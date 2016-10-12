/* To get rid of the loading screen in this example,
 * press the down arrow key on your keyboard.
 * To re-preview the loading screen in this example,
 * press the up arrow key on your keyboard.
 */


$(document).ready(function() {
	// setTimeout(function(){
	// 	$('#loader').hide();
	// }, 3500);
	$(document).keydown(function(e) {
		switch (e.which) {
			case 38: // up arrow
				$('#loader').show();
				break;
			case 40: // down arrow
				$('#loader').hide();
				break;
		}
	});

});