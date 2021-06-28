//Happy Pride Month!

function setFlag() {
		var blue = "#1a75ff";
		var lightBlue = "#3399ff";
		var purple = "#ff00ff";
		var lightPurple = "#bf4080";
		var darkPurple = "#cc0066";
		var yellow = "#ffff00";
		var pink = "#e6005c";
		var lightPink = "#ff4d88";
		var red = "#ff0066";
		var darkRed = "#cc0000";
		var lightRed = "#ff6666";
		var orange = "#ff9933";
		var green = "#66ff33";
		var darkGreen = "#33cc33";
		
		var trad = [red, orange, yellow, green, lightBlue, purple];
		var bi = [pink,purple,blue];
		var pan = [lightPink,yellow,lightBlue];
		var ace = [purple];
		var intersex = [yellow, purple];
		var trans = [lightBlue,lightPink,lightBlue];
		var genderfluid = [pink, purple, blue];
		var genderqueer = [purple, darkGreen];
		var poly = [pink, darkGreen, blue];
		var agender = [green];
		var aro = [darkGreen, green];
		var enby = [yellow, purple];
		var lesbian = [darkPurple, lightPurple, pink, lightPink, lightRed, darkRed];
		
		var flagStrings = ["Gay", "Bisexual", "Pansexual","Asexual","Intersex","Transgender","Genderfluid","Genderqueer","Polysexual","Agender","Aromantic","Nonbinary","Lesbian"];
		var flags = [trad, bi, pan, ace, intersex, trans, genderfluid, genderqueer, poly, agender, aro, enby, lesbian];
		var links = ["https://lgbt.wikia.org/wiki/Gay_and_Lesbian_Pride_Month","https://lgbt.wikia.org/wiki/Bisexuality","https://lgbt.wikia.org/wiki/Pansexuality","https://lgbt.wikia.org/wiki/Asexuality","https://lgbt.wikia.org/wiki/Intersexuality","https://gender.wikia.org/wiki/Transgender","https://gender.wikia.org/wiki/Gender_Fluid","https://gender.wikia.org/wiki/Genderqueer","https://lgbt.wikia.org/wiki/Polysexuality","https://gender.wikia.org/wiki/Agender","https://lgbt.wikia.org/wiki/Aromantic","https://gender.wikia.org/wiki/Non-binary","https://lgbt.wikia.org/wiki/Lesbian"];
		
		var flagIndex = Math.floor(Math.random()*flags.length)
		
		var flag = flags[flagIndex];
		
		var color = flag[0];
		
		if(flag.length < 1) {
			color = flag[Math.floor(Math.random()*flag.length)]
		}
		
		if(document.getElementById("indexContent") != null) {
			if(flag == trad) {
				document.getElementById("indexContent").innerHTML+=" Happy <a href='"+links[0]+"'>Pride Month</a>!";
			} else {
				document.getElementById("indexContent").innerHTML+=" Happy <a href='"+links[flagIndex]+"'>"+flagStrings[flagIndex]+"</a> Pride!";
			}
		}
	
		document.body.style.setProperty("--link-color", color);
		
		return flagStrings[flagIndex];
}

function pageLoaded() {
	var d = new Date();
	if(d.getMonth() == 5) {
		setFlag();
	}
}