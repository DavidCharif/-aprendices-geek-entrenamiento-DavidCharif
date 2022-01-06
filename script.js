// Extracion del DOM
let currencyInput = document.getElementById("currencyInput");
let currencyOutput = document.getElementById("currencyOutput");
let container = document.getElementById("result");
// Arrays info
let moneda = ['Elige tu Moneda','Dolar','Peso Mexicano','Peso Colombiano','Euro','Libra Esterlina'];
let dic =  {"Dolar":1,"Peso Mexicano":0.049,"Peso Colombiano":0.00025,"Euro":1.13, "Libra Esterlina":1.36}
// Fragmentos y contenido Dinamico
let alert = document.createElement("p")
let fragmentInput = new DocumentFragment();
let fragmentOutput = new DocumentFragment();
// Se recorre el primer array y se adjuntan los elementos DOM
moneda.forEach((text) => {
    let option = document.createElement("OPTION")
    option.innerHTML = text;
    option.setAttribute("value",text);
    fragmentInput.appendChild(option)
    })
moneda.forEach((text) => {
    let option = document.createElement("OPTION")
    option.innerHTML = text;
    option.setAttribute("value",text);
    fragmentOutput.appendChild(option)
    })
// Se agregan al DOM
currencyInput.appendChild(fragmentInput) 
currencyOutput.appendChild(fragmentOutput)

// Con la funcion se tomara el dolar como referencia de las monedas para su cambio
let convertirFunc = () => {
    let inputBox = document.getElementById("input1").value
    let numberInput = parseInt(inputBox,10);
    let dolarizedInput;
    let inputConverted;
    if(isNaN(numberInput) || numberInput <= 0){
        
        alert.textContent = "Error de validacion";
        container.appendChild(alert)
        return console.log("Error validacion")
        } else {
        alert.textContent = ""
    }
   
    if(currencyInput.value === "Elige tu Moneda" || currencyOutput.value === "Elige tu Moneda"){
        alert.textContent = "Select a currency"
        container.appendChild(alert)
        return console.log("Select a currency")
    } else {
        if(currencyInput != "Dolar"){
              
            dolarizedInput = numberInput * dic[currencyInput.value];
        } else {
            dolarizedInput = numberInput;
        }}
        console.log(`dolarizedInput`, dolarizedInput)
        console.log(`dic[currencyOutput]`, dic[currencyOutput.value])
        inputConverted = dolarizedInput / dic[currencyOutput.value]
       
        alert.textContent = `${numberInput} en ${currencyInput.value} convertidos es $${inputConverted.toFixed(2)} ${currencyOutput.value}s`
        container.appendChild(alert)
        // number input
        //Numero a convertir segun el input
        //
    
    
    console.log(dic[currencyInput.value])
    console.log(dic[currencyOutput.value])
    
}



