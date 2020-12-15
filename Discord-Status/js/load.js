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
	
	InitializeLocalWebSocket();
});

var socket = new WebSocket("ws://127.0.0.1:48655/");

function InitializeLocalWebSocket() {
	var open_app = document.getElementById("open_app");
	
	socket.onopen = function() {
		console.log("[LocalWS] Opened");
		
		socket.send(JSON.stringify([
		{
			"cmd": "IsStarted"
		}
		]));
	};

	socket.onclose = function(event) {
		if (event.wasClean) {
			console.log('[LocalWS] Closed clean');
		} else {
			console.log('[LocalWS] Closed');
		}
		open_app.setAttribute("onclick", "window.open('discordstatus://');");
		console.log(event.code + ' ' + event.reason);
	};

	socket.onmessage = function(event) {
		var resp = JSON.parse(event.data);
		
		for (var i = 0; i < resp.length; i++)
		{
			var item = resp[i];
			switch (item["cmd"])
			{
				case "IsStarted":
					if (item["IsStarted"])
					{
						console.log("Application is opened");
						open_app.setAttribute("onclick", "socket.send(\"[{\\\"cmd\\\":\\\"Window\\\",\\\"Value\\\":\\\"Normalize\\\"}]\")");
					}
					break;
			}
		}
		
		console.log(resp);
	};

	socket.onerror = function(error) {
		console.log(error.message);
	};
}