
let time = document.querySelector("#time");

setInterval(() => {
    let date = new Date();
    time.innerText = date.toLocaleTimeString();
}, 1000);