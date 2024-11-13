const body = document.querySelector("body");
const card = document.querySelector(".card");
const btns = document.querySelectorAll(".btn");

//console.log(btns);
const arr = new Array()
arr.push(body.style.backgroundColor)
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        
        if (btn.id == "random") {
            const color = Math.floor(Math.random() * 16777215).toString(16);
            body.style.backgroundColor = "#" + color;
            arr.push(body.style.backgroundColor)
        }else{
        body.style.backgroundColor = btn.id;
        arr.push(body.style.backgroundColor)
        }
        if (btn.id == "previous") {
            body.style.backgroundColor = `${arr[arr.length-3]}`
            console.log(arr);
            
        }
        const div = document.createElement("div");
        div.innerHTML = `<h2>${body.style.backgroundColor}</h2>`
        card.appendChild(div)
        
       

})})




