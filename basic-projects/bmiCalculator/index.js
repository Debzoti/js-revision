const form = document.querySelector("form");


form.addEventListener("submit", (e) => {
    e.preventDefault();
     console.log("form submitted");
     const height = document.getElementById("height");
     const weight = document.getElementById("weight");
     const result = document.getElementById("result");
     
    const h = parseInt(height.value);
    const w = parseInt(weight.value); 
    if (h === "" || w === ""  || isNaN(h) || isNaN(w)
    ) {
        result.innerText = "Please provide valid input";
    } else {
        const bmi = (w / ((h * h) / 10000)).toFixed(2);
        result.innerText = `your BMI is ${bmi}`;
    }
    form.requestSubmit()
})
// assignment - based on output show the user if they are underweight, normal weight, overweight or obese
// usual info is that underweight = <18.5, normal weight = 18.5-24.9, overweight = 25-29.9, obese =>30  