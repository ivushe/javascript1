const nadpis = document.querySelector("h1")
const odstavec = document.querySelector("#odstavec2")
const obrazek = document.querySelector("#kote")
nadpis.textContent = "Tento nadpis jsem zmenil pomoci JavaScriptu"
//nadpis.style.color = "Yellow"
nadpis.style.backgroundColor = "red"

nadpis.classList.add("modra")
nadpis.classList.remove("vetsi-font")

odstavec.style.backgroundColor = "orange"

obrazek.src = "https://www.peliskydog.cz/user/articles/images/jak-vybrat-stene.jpg"

obrazek.alt = "stene"
//doplnit style.css