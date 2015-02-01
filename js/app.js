$(document) .ready(function() {
	$('.ryu-container') .mouseenter(function(){
		$('.ryu-still') .hide();
		$('.ryu-ready') .show();
	})
	.mouseleave(function(){
		$('.ryu-ready') .hide();
		$('.ryu-still') .show();
	})
	.mousedown(function() {
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').show().animate(
    	{'left': '700px'},
    800,
    function(){
    	$(this).hide();
    	$(this).css('left', '450px');
    }
    );
})
	.mouseup (function(){
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
});
function playHadouken () {
	$('#hadouken-sound')[0] .volume= 0.5;
	$('#hadouken-sound')[0] .load();
	$('#hadouken-sound')[0] .play();
}
