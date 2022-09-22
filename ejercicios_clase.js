let res;
res = prompt("Desa realizar un ejercicio?");

while (res === "si") {

    let ejercicio = prompt("ingresa el ejercicio que quiera realizar: ");

    let num, num1, num2, suma;

    let a, b, c;
    let d = 0, mayor = 0;

    switch (ejercicio) {

        case '1':
            {
                num = parseInt(prompt("ingresa el primer numero: "));
                num1 = parseInt(prompt("ingresa el segundo numero: "));
                num2 = parseInt(prompt("ingresa el tercer numero: "));

                suma = num + num1 + num2
                alert("El promedio de los tres numeros es: " + suma / 3);
                break;
            }

        case '2':
            {
                a = parseInt(prompt("ingresa el primer numero: "));
                b = parseInt(prompt("ingresa el segundo numero: "));
                c = parseInt(prompt("ingresa el tercer numero: "));

                if (a > b) {
                    d = a;
                }
                else {
                    d = b;
                }
                if (d > c) {
                    mayor = d;
                }
                else {
                    mayor = c;
                }
                alert("El mayor de los numeros es: " + mayor);
                break;
            }

        case '3':
            {
                let sumatotal = num + num1 + num2 + a + b + c;
                let restatotal = num - num1 - num2 - a - b - c;

                alert("El total de la suma es: " + sumatotal);
                alert("El total de la resta es: " + restatotal);
                break;
            }

        case '4':
            {
                let n, acum=0;
                n = parseInt(prompt("ingresa un numero: "));
                while (n != 0) {

                    acum = acum + n;
                    n = parseInt(prompt("ingresa un numero: "));
                }
                alert("el total acumulado es: " + acum)
                break; 

            }
        default:
            {
                console.log("No ha ingresado ningun numero de ejercicio correcto ")
            }
    }
    res = prompt("Desa otro ejercicio?");
}