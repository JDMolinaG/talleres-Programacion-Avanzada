let mensaje = 'el plano que se consiguio fue el '
let error = 'Pilas, plano falso'
let robarPlanos = (idPlano,despegar) =>idPlano>0 && idPlano<=10 ? (
     mensaje += idPlano,
    despegar(null,mensaje)
):(
    despegar(error,null)
) 
robarPlanos(4,function(error,mensaje){
    error ? (
        console.log(error),
        console.log('no pudimos despegar')
    ):(
        console.log(mensaje),
        console.log('si pudimos despegar')
    ) 
})
// -------------------------------------------------------------------------------------

// Taller 2 ejercicio 2

let datos = {}
let manejoFuerza = 'La actividad asignada fue Manejo de la fuerza'
let manejoSable = 'La actividad asignada fue Manejo del sable de luz'
let asociarDatos = (nombre,planeta,edad,estatura,actividad) => {
    datos.Nombre = nombre
    datos.Planeta = planeta
    datos.Edad = edad
    datos.Estatura = estatura
    edad<=15 ? actividad(null,manejoFuerza):actividad(manejoSable,null)
    console.log(datos) 
}
asociarDatos('BELL ZETTIFAR','mineral Elphrona',42,170,function(manejoFuerza,manejoSable){
    manejoFuerza ? console.log(manejoFuerza):console.log(manejoSable)
})