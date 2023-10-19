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

// const pizzeria = {
//     "jmeno uzivatele": "U Zofie",
//     hodnoceni_uzivatele: 4.3,
//     "adresa-uzivatele": {
//         ulice: "Belohorska",
//         cisloPopisne: 23,
//         PSC: "160 00",
//         mesto: "Praha",
//         test: {
//             polozka1: "Ja jsem polozka1",
//         },
//     },
//     nejPizza: "Hawaii",
// }

// document.body.innerHTML += "<p>" + pizzeria["jmeno uzivatele"] + "</p>"
// document.body.innerHTML += "<p>" + pizzeria.hodnoceni_uzivatele + "</p>"
// document.body.innerHTML += "<p>" + pizzeria["adresa-uzivatele"].PSC + "</p>"

const apartment = {
    type: 'rent',
    disposition: '3+1',
    area: {
      floorage: 100,
      balcony: 2,
      units: 'sqm',
    },
    city: 'Prague',
    district: 'Old Town',
    price: {
      rent: 28000,
      fees: {
        water: 1000,
        energy: 2500,
        services: 560,
      },
      currency: 'czk',
    },
    ownership: 'personal',
    condition: 'renovated',
    status: 'free',
    floor: 3,
  };

  const mesto = apartment.city
  const mestCast = apartment.district

  document.body.innerHTML += "<p>" + apartment.disposition + "</p>"
  document.body.innerHTML += "<p>" + apartment.price.rent + "</p>"
  document.body.innerHTML += "<p>Vymera bytu: "+ apartment.area.floorage + apartment.area.units +"</p>"
  document.body.innerHTML += "<p>" + mesto + "</p>"
  document.body.innerHTML += "<p>" + mestCast + "</p>"
  apartment.status = "taken"
  document.body.innerHTML += "<p>Stav inzeratu: "+ apartment.status +"</p>"


  //test
  
