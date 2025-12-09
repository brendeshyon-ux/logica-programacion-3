function obtenerNumero(){
let numero = Number(prompt("Ingresa un número:"));
while (isNaN(numero)|| numero < 0){
    alert("Número invalido, ingresa un número igual o mayor a cero");
    numero = Number(prompt("Ingresa un número:"))
}
return numero;
}

function calcularFactorial(n){
    let factorial = 1;
    for(let i = 1; i <= n; i++){
        factorial *= i;
    }
    return factorial;
}

let numero = obtenerNumero();
let resultado = calcularFactorial(numero);

console.log(" El factorial de " + numero + " es: " + resultado);

document.getElementById("resultado").innerText = " El factorial de " + numero + " es: " + resultado;