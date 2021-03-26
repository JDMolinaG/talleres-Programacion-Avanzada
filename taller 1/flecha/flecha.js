// ejercicio 1

let coordenadaFinalX  = 70;
let coordenadaFinalY = -50
let coordenadaIncialX = 0;
let coordenadaInicialY = 0;

let calcularDistancia = (xinicial,xfinal,yinicial,yfinal) => Math.sqrt((xfinal-xinicial)**2+(yfinal-yinicial)**2)

console.log(calcularDistancia(coordenadaIncialX,coordenadaFinalX,coordenadaInicialY,coordenadaFinalY))

// ----------------------------------------------------------------------------------------------------

// ejercicio 2

let nave1 = 'ARQ2555:Sara Bel-Sun ';
let nave2 = 'ARQ2556:Nodin Chavdri';
let nave3 = 'ARQ2557:Finn';
let nombrePilotos;

let nombreAsignado = nave => nombrePilotos = nave.split(':')[1]
console.log(nombreAsignado(nave1))

// ----------------------------------------------------------------------------------------------------

// ejercicio 3

let temperaturaMinima = 1
let temperaturaMaxima = 20

let calcularTemperatura = (tempMinima,tempMaxima) => (tempMinima+tempMaxima) / 2
console.log(calcularTemperatura(temperaturaMinima,temperaturaMaxima))