//© by Benjamin Grau

//Variabeln
var zeichen = { grossbuchstaben: "QWERTZUIOPÜASDFGHJKLÖÄYXCVBNM", kleinbuchstaben: "qwertzuiopüasdfghjklöäyxcvbnm", sonderzeichen: "!§$%&/()=?<>|,.;;-_{[]}@€^°+#*'~€²³ß", zahlen: "1234567890" };
var passwort;
var list;
var safety = 0;
var max = 0;
var popupB = document.getElementById("poupBackground");
var pop1 = document.getElementById("popup1");
var pop2 = document.getElementById("popup2");
var zufall;
var slide = document.getElementById("number");
var outSlide = document.getElementById("zeichen");
var bnt1 = document.getElementById("bnt1");
var bnt3 = document.getElementById("bnt3");

bnt1.onclick = function() {create()}
bnt3.onclick = function() {create()}

function create() {
	//Variabeln
	var check1 = document.getElementById("check1").checked;
	var check2 = document.getElementById("check2").checked;
	var check3 = document.getElementById("check3").checked;
	var check4 = document.getElementById("check4").checked;
	var anzahlZeichen = Number(slide.value);
	passwort = "";
	list = "";

	if (check1 == true) {
		list += zeichen.grossbuchstaben;
	}
	if (check2 == true) {
		list += zeichen.kleinbuchstaben;
	}
	if (check3 == true) {
		list += zeichen.sonderzeichen;
	}
	if (check4 == true) {
		list += zeichen.zahlen;
	}

	//Fehlererkennung
	if (check1 == false && check2 == false && check3 == false && check4 == false) {
		console.warn("Fehler; Es muss midesten eine Zeichengruppe ausgewählt sein");
		return;
	}else if (anzahlZeichen < 1) {
		console.warn("Fehler; Das Passwort muss mindesten ein Zeichen lang sein");
		return;
	}

	//Erstellen
	for (var i = 0; i < anzahlZeichen; i++) {
		max = list.length;
		zufall = Random(max);
		passwort += list.charAt(zufall);
	}

	//Ausgabe
	bnt1.innerHTML = "Neu Generieren!";
	popupB.style.display = "block";
	pop1.style.display = "block";
	document.getElementById("inPW").value = passwort;

}

//Kopieren
function copyPW() {
	var copyText = document.getElementById("inPW");
	copyText.select();
	document.execCommand("copy");
	console.log("Kopiert");
}

//Zufall
function Random(max) {
	var x = Math.floor(Math.random() * Math.floor(max));
	return x;
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

window.onscroll = function() {
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
