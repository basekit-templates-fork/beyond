$(document).ready(function() {
	

	$(document).on("click", '#navigationheader a.pull', function(e) {
		$('body').toggleClass('navOpen');
    });
});