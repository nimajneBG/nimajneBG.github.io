//Auch unter: https://www.w3schools.com/code/tryit.asp?filename=G34FOD64URT3

//Variabeln
var Zahlen = "1234567890";
var BuchstabenG = "QWERTZUIOPÜASDFGHJKLÖÄYXCVBNM";
var BuchstabenK = "qwertzuiopüasdfghjklöäyxcvbnm";
var Sonderzeichen = "!§$%&/()=?<>|,.;;-_{[]}@€^°+#*'ß";
var Passwort;
var list;
var safety = 0;
var max = 0;
var popupB = document.getElementById("poupBackground");
var pop1 = document.getElementById("popup1");
var pop2 = document.getElementById("popup2");
var zufall;
var slide = document.getElementById("number");
var outSlide = document.getElementById("zeichen");

function create() {
	//Variabeln
	var check1 = document.getElementById("check1").checked;
	var check2 = document.getElementById("check2").checked;
	var check3 = document.getElementById("check3").checked;
	var check4 = document.getElementById("check4").checked;
	var anzahlZeichen = Number(slide.value);
	Passwort = "";
	list = "";

	if (check1 == true) {
		list += BuchstabenG;
	}
	if (check2 == true) {
		list += BuchstabenK;
	}
	if

	//Erstellen
	for (var i = 0; i < anzahlZeichen; i++) {

	}

	//Ausgabe
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
//Zeichen anzeigen
outSlide.innerHTML = slide.value;

slide.oninput = function() {
	outSlide.innerHTML = this.value;;
}
