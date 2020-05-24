//Happy Pride Month!
var d = new Date();
if(d.getMonth() == 5) {
	window.onload = function(e) {
		var colors = ["#ff0066","#ff9933","#ffff33","#66ff33","#00ffff","#ff4dd2","rainbow"];
		var color1 = colors[Math.floor(Math.random()*(colors.length))];
		var gradString = "";
		if(color1 == "rainbow") {
			gradString = "linear-gradient(to bottom left, ";
			for(var i = 0; i < colors.length-1; i++) {
				gradString+=(colors[i]+",");
			}
			gradString = (gradString.substring(0,gradString.length-1))+")";
			document.body.style.setProperty("--background-end-position-x","100%");
		} else {
			var color2 = color1;
			while(color2 == color1 || color2 == "rainbow") {
				color2 = colors[Math.floor(Math.random()*(colors.length))];
			}
			gradString = "linear-gradient(to bottom left, "+color1+","+color2+","+color1+","+color2+","+color1+")";
		}
	
		document.body.style.setProperty("--link-gradient", gradString);
	}
}