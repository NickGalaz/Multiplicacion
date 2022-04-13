const num = parseInt(prompt("Ingresa un número"));

let main = (num) => {
    if (num >= 1 && num <= 20) {
        multiplicar(num);
        factorial(num);
    }
    else {
        alert("Número fuera de rango");
    }
}

let factorial = (num) => {
    let r=1
    let x=1
    for (let i = num; i > 0; i--) {
        console.log("Factorial de "+x+" es: "+r+" ");
        x=x+1;
        r*=i;
    }
}

let multiplicar = (num) => {
    for (let i = 0; i <= num; i++) {
        console.log(`${i} x ${num} = ${i * num}`);
    }
}

main(num);