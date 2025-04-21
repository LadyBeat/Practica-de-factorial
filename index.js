function factorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }   
    
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    
    return resultado;
}

function calcularFactorial() {
    const inputNumero = document.getElementById("numeroInput").value;
    const numero = Number(inputNumero);
    const resultadoElement = document.getElementById("resultado");
    
    
    if (isNaN(numero)) {
        resultadoElement.innerHTML = "Error: Por favor, ingresa un número válido.";
        document.getElementById("numeroInput").value = "";
        document.getElementById("numeroInput").focus();
        return;
    }
    
   
    if (!Number.isInteger(numero) || numero < 0) {
        resultadoElement.innerHTML = "Error: Por favor, ingresa un número entero positivo.";
        document.getElementById("numeroInput").value = "";
        document.getElementById("numeroInput").focus();
        return;
    }
    
    const resultadoFactorial = factorial(numero);
    resultadoElement.innerHTML = `El factorial de ${numero} es: <strong>${resultadoFactorial}</strong>`;
    console.log(`El factorial de ${numero} es: ${resultadoFactorial}`);
}

document.getElementById("numeroInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        calcularFactorial();
    }
});