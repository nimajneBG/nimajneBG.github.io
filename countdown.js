const pruefungen = [
    new Date("2024-04-17 09:00"),
    new Date("2024-04-18 09:00"),
    new Date("2024-04-19 09:00"),
    new Date("2024-04-22 09:00"),
    new Date("2024-04-25 09:00"),
    new Date("2024-04-26 09:00"),
    new Date("2024-05-02 09:00"),
    new Date("2024-05-03 09:00"),
    new Date("2024-05-06 09:00"),
    new Date("2024-05-07 09:00"),
    new Date("2024-05-08 09:00"),
    new Date('2024-06-10 10:00'),
]

// Globals
var index = -1
var passed = false

// A bit cursed but works in dev
try { var jsConfetti = new JSConfetti() }
catch { 
    console.warn('Unable to load JSConfetti')
    var jsConfetti = { addConfetti: () => console.log('Imagine confetti 🎉🎊') } 
}

const $ = id => document.getElementById(id)

const days = $('days')
const hours = $('hours')
const minutes = $('minutes')
const seconds = $('seconds')

const termin = $('termin')
const select = $('dehdeu')
const sign = $('sign')
const muend = $('muend-termin')

const t = d => Math.floor(d).toString().padStart(2, '0')

function refresh() {
    let d = pruefungen[index] - new Date()
    if (d < 0 && !passed) { 
       changeSign(true)
    }
    d = Math.abs(d)
    days.innerHTML = t(d / (1000 * 60 * 60 * 24))
    hours.innerHTML = t((d / (1000 * 60 * 60)) % 24)
    minutes.innerHTML = t((d / 1000 / 60) % 60)
    seconds.innerHTML = t((d / 1000) % 60)
}

function updateDateText() {
    termin.innerHTML = pruefungen[index].toLocaleString()
}

function findNextTest() {
    const now = new Date()
    for (let i = 0; i < pruefungen.length; i++) {
        if ((pruefungen[i] - now) > 0) {
            index = i
            break
        }
    }
    // Select last exam if all are over
    changeSign((index === -1))
    if (index === -1) { index = pruefungen.length - 1 }
    
    toggleMuend(index == (pruefungen.length - 1))
    
    console.log(`Prüfung i=${index} automatisch als nächste festgelegt`)
    select.value = index
    updateDateText()
}

select.onchange = () => {
    console.log('Fach manuell geändert')
    if (select.value == -1) {   // automatische Auswahl des nächsten Termins
        localStorage.clear()
        findNextTest()
    } else {                    // termin explizit gewählt
        index = select.value
        writeI()
        changeSign(false)
        toggleMuend(index == (pruefungen.length - 1))
    }
    updateDateText()
    refresh()
}

muend.onchange = () => {
    pruefungen[pruefungen.length - 1] = new Date(muend.value)
    // TODO: Write date to localStorage, or just trust the browser to remember
    refresh()
}

function toggleMuend(x) {
    muend.style.display = (x) ? 'inline-block' : 'none'
    termin.style.display = (x) ? 'none' : 'inline'
}

function readI() {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.has('fach')) {    // Reading from URL Parmeters
        let i = Number(urlParams.get('fach'))
        if (i >= 0 && i <= pruefungen.length) { 
            index = i 
            console.log(`Prüfung i=${index} aus URL Parametern ausgelesen`)
        }
    } 
    if (index === -1) {             // Reading from Local Storage
        const i = localStorage.getItem('index')
        if (!i) { 
            console.debug('Keine ausgewählte Prüfung aus localStorage ausgelesen')
            return findNextTest() 
        }
        index = Number(i)
        console.log(`Prüfung i=${index} aus Local Storage ausgelesen`)
        if ((pruefungen[index] - new Date()) < 0) {
            changeSign(true)
        }
    }
    select.value = index
    updateDateText()
    toggleMuend(index == (pruefungen.length - 1))
}

function writeI() {
    localStorage.setItem('index', index)
}

function changeSign(state) {
    passed = state
    sign.style.display = (state) ? 'inline' : 'none'
    if (state) { jsConfetti.addConfetti() }
}

// Main entry point
readI()
refresh()
setInterval(refresh, 1000)

