// const adresa = {
//     ulice: "Opletalova",
//     cisloPopisne: 42,
//     PSC: 110000, 
//     mesto: "Praha",
// }

// document.body.innerHTML += "<p>" + adresa.cisloPopisne + "</p>"
// document.body.innerHTML += "<p>" + adresa.PSC + "</p>"
// document.body.innerHTML += "<p>" + adresa.mesto + "</p>"
// document.body.innerHTML += "<p>" + adresa.ulice + "</p>"

// adresa.ulice = "Belohorska"

// document.body.innerHTML += "<p>" + adresa.ulice + "</p>"

const pizzeria = {
    jmeno: "U Zofie",
    hodnoceni: 4.3,
    adresa: {
        ulice: "Belohorska",
        cisloPopisne: 23,
        PSC: "160 00",
        mesto: "Praha",
        test: {
            polozka1: "Ja jsem polozka1",
        },
    },
    nejPizza: "Hawaii",
}

document.body.innerHTML += "<p>" + pizzeria.jmeno + "</p>"
document.body.innerHTML += "<p>" + pizzeria.hodnoceni + "</p>"
document.body.innerHTML += "<p>" + pizzeria.adresa.test.polozka1 + "</p>"