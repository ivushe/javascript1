// //const email = prompt("Zadej e-mail")
// //<p>${email} - ${validator.isEmail(email)}</p>

// document.body.innerHTML = `
// <p>michal@michal.cz - ${validator.isEmail("michal@michal.cz")}</p>
// <p>@. - ${validator.isEmail("@.")}</p>
// <p>qlqwkjeklqw - ${validator.isEmail("qlqwkjeklqw")}</p>
// <p>@neco.neco - ${validator.isEmail("@neco.neco")}</p>
// <p>e@e.ee - ${validator.isEmail("e@e.ee")}</p>

// `

// const date =  dayjs()

// document.body.innerHTML = `
// <p>dnes je - ${dayjs().format("DD.MM.")}</p>
// <p>aktualni rok - ${dayjs().format("YYYY")}</p>
// <p>aktualni DATUM - ${date.format("DD.MM.YYYY")}</p>
// `

// const stedryDen = dayjs("2023-12-24")
// const dnes = dayjs()

// if(dnes.isAfter(stedryDen)) {
//     document.body.innerHTML = "Musis pockat na pristi rok"
// } else { 
//     document.body.innerHTML = "Brzy prijde jeziseeeek"
// }

// document.body.innerHTML = `
// <h2 >Validace emailu</h2>
// <p id="msg" class="msg">není zadán žádný email</p>
// `;
// const message = document.querySelector("#msg")
// const email = prompt("Zadej email:")

// if (validator.isEmail(email)) {
//     message.innerHTML = `Email ${email} je OK`
//     message.classList.add("msg--valid")
// } else {
//     message.innerHTML = `Email ${email} je neplatný`
//     message.classList.add("msg--invalid")
// }

function mojePrvniFunkce(cislo, cislo2) {
    return cislo * 2
}

const mojeDruhaFunkce = function (cislo, cislo2) {
    return cislo * 2
}

const mojeTretiFunkce = (cislo, cislo2) => cislo * 2 //arrow funkce je nejnovejsi varianta zapisu

const mojeCtvrtaFunkce = (cislo, cislo2) => {
    return cislo * 2
}

const validaceVeku = vek => {
    if (vek >= 18) {
        return true
    } else {
        return false
    }
}

document.body.innerHTML = `
    <p>${mojePrvniFunkce(10)}</p>
    <p>${mojeDruhaFunkce(10)}</p>
    <p>${mojeTretiFunkce(10)}</p>
    <p>${validaceVeku(20)}</p>
`