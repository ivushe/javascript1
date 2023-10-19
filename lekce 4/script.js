//document.body.innerHTML = "Michal".toUpperCase() //ZMENI SE VSECNY ZNAKY NA VELKE PISMENO
//length()// PRO POCET ZNAKU - NAPR FUNKCE OVERENI POCTU ZNAKU HESLA
//document.body.innerHTML = "Michal   ".trim()// odstraní mezery mezi znaky
//document.body.innerHTML = "Michal".slice(0,2) //vytahne Mi (ZACINA SE OD 0, neni to vcetne dvojky; 0-M 1-i 2-c se nevypise
//document.body.innerHTML = "Kristina".indexOf("s")//na jake pozici se nachazi s - vypise se 3

// --------------------- Interpolace retezcu`` ---------------------------

// const order = {
//     id: 37214,
//     product: 'pěnová matrace',
//     delivery: '21.8.2021',
// };
  
// document.body.innerHTML = `
// <h2>Detail objednavek</h2>
// <p>ID objednavky: ${order.id}</p>
// <p>Nazev produktu: ${order.product}</p>
// <p>Ocekavane dodani: ${order.delivery}</p>
// <p>Delka jmena produktu: ${order.product.length}</p>
// <p>Matematicka operace: ${10+12}</p>
//`

// -------------------------cviceni ---------------------

// const title = "Avengers"
// let pocetZnaku = title.length;
// document.body.innerHTML +=  pocetZnaku + "<br>"
// document.body.innerHTML +=  title.toUpperCase() + "<br>"
// document.body.innerHTML +=  title.slice(0,5) + "<br>"
// document.body.innerHTML +=  title.slice(pocetZnaku - 5, pocetZnaku) + "<br>"

//---------------------------- podminky ------------------

// const vek = 18
// const preference = "cervene"
// const naSklade = true
// const dostupne = false

// if (naSklade)
// {
//     document.body.innerHTML = "produkt je na sklade"
// }
//     else {document.body.innerHTML = "produkt neni na sklade"
//             }    


// if (vek >= 18) // v kulatych zarovkach ma byt vyraz jestli neco plati nebo ne
// {
//     document.body.innerHTML = `je ti vic nez 18, muzes nakupovat`}//kus kodu ktery se vykona pokud podminka bude true
//     if(preference === "cervene")
//     {  //=== tri rovnitka porovnavaji hodnoty i datove typy, dve rovnitka vynechavaji porovnani datoveho typu
//     document.body.innerHTML = `je ti vic nez 18, muzes nakupovat, tady je vyber cerveneho vina`
//     }

// else 
// {
//     document.body.innerHTML = `je ti mene nez 18, nemuzes nakupovat`
// }

// const znamka = 1

// if(znamka === 1) {
//     document.body.innerHTML += `vyborny` //misto else if se da pouzit vyraz switch .. case
// } else if(znamka === 2) {
//     document.body.innerHTML = `chvalitebny`
// } else if(znamka === 3) {
//     document.body.innerHTML = `dobry`
// } else if(znamka === 4) {
//     document.body.innerHTML = `dostatecny`
// } else {
//     document.body.innerHTML = `nedostatecny`
// }

// precist si https://kodim.cz/vyvoj-webu/js1/lekce/retezce-podminky/cteni-na-doma

// const jmeno =prompt("Zadejte sve jmeno:") 
// const heslo =prompt("Zadejte sve heslo:")
// const vek = Number(prompt("Zadejte svuj vek:"))

// if (vek>=65)
// {
//     document.body.innerHTML = `vek v poradku`
//     if (heslo.length<8)
//     {
//         document.body.innerHTML = `slabe heslo`
//     }

// } else {
//     document.body.innerHTML = `nizky vek`

// }

// const znamka = 5

// if(znamka !== 5) {
//     document.body.innerHTML += `vyborny`
// } else if(znamka === 2) {
//     document.body.innerHTML = `chvalitebny`
// } else if(znamka === 3) {
//     document.body.innerHTML = `dobry`
// } else if(znamka === 4) {
//     document.body.innerHTML = `dostatecny`
// } else if(znamka === 1) {
//     document.body.innerHTML = `nedostatecny`
// } else {
//     document.body.innerHTML += `spatne zadana znamka`
// }

// switch(znamka) {
//     case 1:
//         document.body.innerHTML += `vyborny`
//         break

//     case 2:
//         document.body.innerHTML += `chvalitebny`
//         break

//     default:
//         document.body.innerHTML += `spatne zadana znamka`
//         break
// }

//domaci ukol 1

 const krestniJmeno =prompt("Zadejte sve krestni jmeno bez  diakritiky:") 
 const prijmeni =prompt("Zadejte sve prijmeni bez diakritiky:")

 prvniCast = krestniJmeno.trim().slice(0,5)
 druhaCast = prijmeni.trim().slice(0,3)
 email = (prvniCast+druhaCast+"@fit.cvut.cz").toLowerCase()

 document.body.innerHTML = `
 <h2>Uzivatelsky e-mail</h2>
 <p>email: ${email}</p>
 `
// domaci ukol 2

const pocetTricek = prompt("Zadejte pocet kusu")

if (pocetTricek<50)
{
    document.body.innerHTML = `cena: ` + pocetTricek*300
}
else if (pocetTricek>=50 && pocetTricek<=200)
{
    document.body.innerHTML = `cena: ` + pocetTricek*250 
}
else if (pocetTricek>200 && pocetTricek<=500)
{
    document.body.innerHTML = `cena: ` + pocetTricek*200
}
else if (pocetTricek>500 && pocetTricek<=1000)
{
    document.body.innerHTML = `cena: ` + pocetTricek*150
}
else if (pocetTricek>1000)
{
    document.body.innerHTML = `cena: ` + pocetTricek*120
}
else 
{
    document.body.innerHTML += `nespravne zadany pocet tricek`
}