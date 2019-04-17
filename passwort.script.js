//Auch unter: https://www.w3schools.com/code/tryit.asp?filename=G34FOD64URT3 

var Zahlen = "1234567890";
var BuchstabenG = "QWERTZUIOPÜASDFGHJKLÖÄYXCVBNM";
var BuchstabenK = "qwertzuiopüasdfghjklöäyxcvbnm";
var Sonderzeichen = "!§$%&/()=?<>|,.;;-_{[]}\@€^°+#*'ß";
var Passwort = "Fehler!";
var list = "fehler";
var safety = 0;
var max = 0;
var popupB = document.getElementById("poupBackground");
var pop1 = document.getElementById("popup1");
var pop2 = document.getElementById("popup2");

function create(z1) {
	//Variabeln
	var check1 = document.getElementById("check1").checked;
	var check2 = document.getElementById("check2").checked;
	var check3 = document.getElementById("check3").checked;
	var check4 = document.getElementById("check4").checked;
	var number = document.getElementById("number").value;
	number = Number(number);
	var i = 1;
	console.log(z1);
	var zufall;
	
	//Logik
	if (check1 === true && check2 === false && check3 === false && check4 === false) { //1
		list = BuchstabenG;
		safety = 0;
	}else if(check1 === true && check2 === true && check3 === false && check4 === false) { //2
		list = BuchstabenG + BuchstabenK;
		safety = 1;
	}else if(check1 === true && check2 === true && check3 === true && check4 === false) { //3
		list = BuchstabenG + BuchstabenK + Sonderzeichen;
		safety = 2;
	}else if(check1 === true && check2 === true && check3 === true && check4 === true) { //4
		list = BuchstabenG + BuchstabenK + Sonderzeichen + Zahlen;
		safety = 3;
	}else if(check1 === false && check2 === true && check3 === false && check4 === false) { //5
		list = BuchstabenK;
		safety = 1;
	}else if(check1 === false && check2 === true && check3 === true && check4 === false) { //6
		list = BuchstabenK + Sonderzeichen;
		safety = 3;
	}else if(check1 === false && check2 === true && check3 === true && check4 === true) { //7
		list = BuchstabenK + Sonderzeichen + Zahlen;
		safety = 3;
	}else if(check1 === false && check2 === false && check3 === true && check4 === false) { //8
		list = Sonderzeichen;
		safety = 2;
	}else if(check1 === true && check2 === false && check3 === true && check4 === false) { //9
		list = BuchstabenG + Sonderzeichen;
		safety = 3;
	}else if(check1 === true && check2 === false && check3 === true && check4 === true) { //10
		list = BuchstabenG + Sonderzeichen + Zahlen;
		safety = 3;
	}else if(check1 === false && check2 === false && check3 === true && check4 === true) { //11
		list = Sonderzeichen + Zahlen;
		safety = 3;
	}else if(check1 === false && check2 === false && check3 === false && check4 === true) { //12
		list = Zahlen;
		safety = 1;
	}else if(check1 === true && check2 === true && check3 === false && check4 === true) { //13
		list = BuchstabenG + BuchstabenK + Zahlen;
		safety = 3;
	}else if(check1 === false && check2 === true && check3 === false && check4 === true) { //14
		list = BuchstabenK + Zahlen;
		safety = 2;
	}else if(check1 === true && check2 === false && check3 === false && check4 === true) { //15
		list = BuchstabenG + Zahlen;
		safety = 2;
	}else {
       	popupB.style.display = "block";
		pop2.style.display = "block";
        return 0;
    }
	
	if (number <=  0) {
  		popupB.style.display = "block";
		pop2.style.display = "block";
		document.getElementById("fail").innerHTML = "Es muss min. 1 Zeichen sein"
		return 0;
    }

	max = list.length - 1;
	myFunction(list, check1, check2, check3, check4, max, number);
	var PW;
	//erstellen
	for (i=0;i <= number;i++) {
		zufall = getRandomInt(max);
		console.log(zufall);
		if(i === 1) {
			PW = list.charAt(zufall);
		}else {
           	PW += list.charAt(zufall);
		}
	}
	document.getElementById("bnt1").innerHTML = "Neu Generieren!";
	popupB.style.display = "block";
	pop1.style.display = "block";
	document.getElementById("inPW").value = PW;
	
}
		
//Kopieren
function copyPW() {
	var copyText = document.getElementById("inPW");
	copyText.select();
	document.execCommand("copy");
	console.log("Kopiert");
}
		
//Zufall
function getRandomInt(max) {
	var x = Math.floor(Math.random() * Math.floor(max));
	var y = x + 1;
	return y;
}
//Ausgabe
function myFunction(list, c1, c2, c3, c4, a1, a2) {
	console.log(c1, c2, c3, c4);
	console.log(list);
	console.log(a1);
	console.log(a2);
}
//Popup schließen
window.onclick = function(event) {
	if (event.target == popupB) {
		popupB.style.display = "none";
		pop1.style.display = "none";
		pop2.style.display = "none";
	}
}

document.getElementById("close1").onclick = function() {
	popupB.style.display = "none";
	pop1.style.display = "none";
}
document.getElementById("close2").onclick = function() {
	popupB.style.display = "none";
	pop2.style.display = "none";
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
		document.getElementById("bnt4").style.display = "block";
	} else {
		document.getElementById("bnt4").style.display = "none";
	}
}
function topFunc() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}