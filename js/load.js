document.addEventListener('DOMContentLoaded', function () {
	onVisibleSpaceListener("animate", 
		el=>{
			$(el).css({'animation-play-state': 'running'});
		},
		el=>{
			$(el).css({'animation-play-state': 'paused'});
		}
	);
	onVisibleSpaceListener("container", 
		el=>{
			setTimeout(function() {
				$(el).addClass("visible");
			}, 200);
		},
		el=>{
			
		}
	);
	window_onscroll();
});