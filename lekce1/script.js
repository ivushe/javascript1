/* 
Toto je komentar
*/

// toto je taky komentar

document.body.innerHTML += "Hello world"  // innerHTML je funkce co umí překládat značky html - např h1, server zapnout vpravo dole GoLive (Liveserver)
document.body.innerHTML += "<h1> Hello world</h1>" + "<br>"
document.body.innerHTML += 10 +10 + "<br>"
document.body.innerHTML += 10 +10 + "<br>"
document.body.innerHTML += 10.1 + 10.5 + "<br>"
document.body.innerHTML += "Ahoj Uživateli" + " Iva" + "<br>"
document.body.innerHTML += Math.round(3.3)+"<br>"//zaokrouhlení
document.body.innerHTML += Math.floor(3.7)+"<br>"//zaokrouhlení dolu
document.body.innerHTML += Math.ceil(3.7)+"<br>"//zaokrouhlení nahoru
document.body.innerHTML += Math.random()+"<br>"

// proměnné - dokážou uchovávat hodnoty v různých datových typech

let jmeno = "Michal" //vytvor mi promenou s hodnotou michal
let vek = 26
let adresa = "Praha"

let hodnoceni = 9.5 // promenne se zakladaji tremi zpusoby
var jmeno2 = "" //var se pouzovalo pred nejnovejsi verzi javascriptu (bere se jako nebezpecna varianta nekdy)
const jmeno3= "" //vytvari konstantu = promenna jejich jmeno se nemuze menit
let sazba = 800
let pocetHodin = 160
let plat = pocetHodin * sazba // pozor na to, vypocet jede odshora dolu, kdyz dam promennou pod vypocet tak se tam neprojevi

jmeno = "Martin" //pozn.: snake case hadi notace pocet_hodin - pouziva se pro python

document.body.innerHTML += jmeno + "<br>" // promenna vs string
document.body.innerHTML += "jmeno" + "<br>"
document.body.innerHTML += plat

//ukol na kodim.cz sekce vyrazy a funkce