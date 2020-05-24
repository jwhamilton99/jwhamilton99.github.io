//Happy Pride Month!
var d = new Date();
if(d.getMonth() == 5) {
	window.onload = function(e) {
		var colors = ["#ff0066","#ff9933","#ffff33","#66ff33","#00ffff","#ff4dd2","rainbow"];
		var color1 = colors[Math.floor(Math.random()*(colors.length))];
		var gradString = "";
		if(color1 == "rainbow") {
			gradString = "linear-gradient(to bottom left, "+colors[0]+","+colors[1]+","+colors[2]+","+colors[3]+","+colors[4]+","+colors[5]+")";
			document.body.style.setProperty("--background-end-position-x","100%");
		} else {
			var color2 = color1;
			while(color2 == color1 || color2 == "rainbow") {
				color2 = colors[Math.floor(Math.random()*(colors.length))];
			}
			if(color2 == "rainbow" || color2 == color1) {
				c++;
			}
			gradString = "linear-gradient(to bottom left, "+color1+","+color2+","+color1+","+color2+","+color1+")";
		}
	
		document.body.style.setProperty("--link-gradient", gradString);
	}
}