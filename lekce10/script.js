// let seconds = 0
// let minutes = 0


// setInterval(() => {
//     if(seconds === 60) {
//         seconds = 0
//         minutes++ // minutes = minutes + 1; minutes--
//     } else {
//         seconds++
//     }

//     // 00:01
//     document.body.innerHTML = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
// }, 1000)

const form = document.querySelector("#form")

form.addEventListener("submit", (e) => {
    const txtEl = document.querySelector("#elTxt")
    e.preventDefault()

    alert(`Vitej uzivateli, ${Number(txtEl.value) + 1}!`)
})