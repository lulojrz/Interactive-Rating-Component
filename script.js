const buttons = document.querySelectorAll(".button-container button");
const container = document.getElementById("container");
const first = document.getElementById("first");
const second = document.getElementById("second");
const submit = document.getElementById("btn-submit");
const text = document.getElementById("number");

buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault()
        const value = btn.value;
        console.log(value)
        text.textContent = `You selected ${value} out of 5`

    })
})

submit.addEventListener("click",(e) => {
    e.preventDefault()
    first.style.display = "none"
    second.style.display = "flex"
})

