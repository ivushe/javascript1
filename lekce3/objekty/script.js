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
    "jmeno uzivatele": "U Zofie",
    hodnoceni_uzivatele: 4.3,
    "adresa-uzivatele": {
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

document.body.innerHTML += "<p>" + pizzeria["jmeno uzivatele"] + "</p>"
document.body.innerHTML += "<p>" + pizzeria.hodnoceni_uzivatele + "</p>"
document.body.innerHTML += "<p>" + pizzeria["adresa-uzivatele"].PSC + "</p>"