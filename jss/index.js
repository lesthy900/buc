/* let num = parseInt(prompt("Ingresa un número para ver su tabla de multiplicar:"));
 */

/* let num = 2
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
} */

/* let numeroIngresado = parseInt( prompt('ingrese un numero'))
    const numeros = [ ]
     while ( numeroIngresado == 'number')  {
      numeros.push(numeroIngresado)
      numeroIngresado =parseInt( prompt('ingrese un numero' ))
}
console.log(numeros) */

/* let numero = parseInt(prompt("Ingresa un número:"));
let dividir = [ ];

for (let i = 1; i <= numero; i++) {
  if (numero % i === 0) {
    dividir.push(i);
  }
}

console.log(`los divisore de ${numero} son ${dividir} `); */


/* let misArray = ["lesty", "kimberly", "isamar", "milena", "ricardo", "alexis", "erlin", "gladys", "cheo", "juan"];
for (let i = 0; i < misArray.length; i++) {
  console.log(misArray[i]);
}
 */

/* 
let misArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < misArray.length; i++) {
  console.log(misArray[i] *2);
} */


const familia =[
    persona = {
        ciudad: "cali",
        nombre: "lesthy",
        edad: 23,
        apellido: "valencia",
        profecion:"estudiante"
    },
    persona2 = {
        ciudad: "canada",
        nombre: "kimberly",
        edad: 25,
        apellido: "valencia",
        profecion:"madre de familia"
    },
    persina3 = {
        ciudad: "buenaventura",
        nombre: "isamar",
        edad: 31,
        apellido: "valencia",
        profecion:"administradora"
    },
    persina4 = {
        ciudad: "cali",
        nombre: "alexis",
        edad: 15,
        apellido: "valencia",
        profecion:"estudiante"
    },
]
familia.forEach(persona => {
    console.log(`Hola, soy ${persona.nombre}, tengo ${persona.edad} años, vivo en ${persona.ciudad} y soy ${persona.profecion}.`);
  });



  const numeros = [2, 4, 5, 7, 9, 10, 11, 12, 14, 15];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 !== 0) {
    console.log(numeros[i]);
  }
}
