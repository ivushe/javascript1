//alert ("ahoj svete") // dialogove okno (oznameni) ahoj svete
// const jmeno = prompt("Zadej jmeno", "Jan Novak") //dialogove okno s textovym radkem

// document.body.innerHTML += "<p>"+jmeno+"</p>" //po vyplneni promptu se propise do html
// document.body.innerHTML += "<p>" + vek + "</p>"

// const vyplata =Number(prompt("Zadej vyplatu:")) //obalení funkcí number = převede to do datového typu number ze stringu
// const odmena = Number(prompt("Zadej odmenu:"))

// document.body.innerHTML += "<p>Vyplata: "+ vyplata +"</p>"
// document.body.innerHTML += "<p>Vyplata s odmenou: "+(vyplata+odmena) +"</p>"

 const jmeno =prompt("Zadejte sve jmeno:") 
 const vek = Number(prompt("Zadejte svuj vek:"))

document.body.innerHTML += "<p>Jmeno: "+ jmeno +"</p>"
document.body.innerHTML += "<p>vek: "+ vek +"</p>"