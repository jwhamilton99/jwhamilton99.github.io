//Happy Pride Month!

function setFlag() {
	var white = "#bfbfbf";
		var black = "#595959";
	
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
		var ace = [black,white,purple];
		var intersex = [yellow, purple];
		var trans = [lightBlue,lightPink+" 40%",white+" 50%",lightPink+" 60%",lightBlue];
		var genderfluid = [pink, white, purple, black, blue];
		var genderqueer = [purple, white, darkGreen];
		var poly = [pink, darkGreen, blue];
		var agender = [black, white, green, white, black];
		var aro = [darkGreen, green, white, black];
		var enby = [yellow, white, purple, black];
		var lesbian = [darkPurple, lightPurple, pink, white, lightPink, lightRed, darkRed];
		
		var flagStrings = ["Gay", "Bisexual", "Pansexual","Asexual","Intersex","Transgender","Genderfluid","Genderqueer","Polysexual","Agender","Aromantic","Nonbinary","Lesbian"];
		var flags = [trad, bi, pan, ace, intersex, trans, genderfluid, genderqueer, poly, agender, aro, enby, lesbian];
		var links = ["https://lgbt.wikia.org/wiki/Gay_and_Lesbian_Pride_Month","https://lgbt.wikia.org/wiki/Bisexuality","https://lgbt.wikia.org/wiki/Pansexuality","https://lgbt.wikia.org/wiki/Asexuality","https://lgbt.wikia.org/wiki/Intersexuality","https://gender.wikia.org/wiki/Transgender","https://gender.wikia.org/wiki/Gender_Fluid","https://gender.wikia.org/wiki/Genderqueer","https://lgbt.wikia.org/wiki/Polysexuality","https://gender.wikia.org/wiki/Agender","https://lgbt.wikia.org/wiki/Aromantic","https://gender.wikia.org/wiki/Non-binary","https://lgbt.wikia.org/wiki/Lesbian"];
		
		// document.body.style.setProperty("--background-end-position-x","100%");
		
		var flagIndex = Math.floor(Math.random()*flags.length)
		
		var flag = flags[flagIndex];
		
		if(document.getElementById("indexContent") != null) {
			if(flag == trad) {
				document.getElementById("indexContent").innerHTML+=" Happy <a href='"+links[0]+"'>Pride Month</a>!";
			} else {
				document.getElementById("indexContent").innerHTML+=" Happy <a href='"+links[flagIndex]+"'>"+flagStrings[flagIndex]+"</a> Pride!";
			}
		}
		
		var gradString = "linear-gradient(to bottom left, ";
		
		for(c in flag) {
			gradString+=(flag[c]+",");
		}
		
		gradString = (gradString.substring(0,gradString.length-1))+")";
	
		document.body.style.setProperty("--link-gradient", gradString);
		
		return flagStrings[flagIndex];
}

function pageLoaded() {
	var d = new Date();
	if(d.getMonth() == 5) {
		setFlag();
	}
}