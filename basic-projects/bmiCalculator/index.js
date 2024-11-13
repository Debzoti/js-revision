const form = document.querySelector("form");



form.addEventListener("submit", (e) => {
    e.preventDefault();
     console.log("form submitted");
     
    const height = document.getElementById("height");
    const weight = document.getElementById("weight");
    const result = document.getElementById("result");

    const h = parseInt(height.value);
    const w = parseInt(weight.value); 
    if (h === "" || w === "") {
        result.innerText = "Please provide valid input";
    } else {
        const bmi = (w / ((h * h) / 10000)).toFixed(2);
        result.innerText = `your BMI is ${bmi}`;
    }
    form.requestSubmit()
})