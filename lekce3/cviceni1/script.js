const sazba =Number (prompt("Zadejte svou hodinovou sazbu:"))
const pocetHodin =Number (prompt("Zadejte pocet hodin:"))
const pocetDni =Number (prompt("Zadejte pocet dni:"))

let plat=sazba*pocetHodin*pocetDni

document.body.innerHTML += "<p>Vase hruba mzda: "+ plat +"</p>"
