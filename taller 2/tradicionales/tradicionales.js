// Taller 2 ejercicio 1

function robarPlanos(idPlano,despegar){
    if(idPlano>0 && idPlano<=10){
        let mensaje = 'el plano que se consiguio fue el '+idPlano
        despegar(null,mensaje)
    }else{
        let error = 'Pilas, plano falso'
        despegar(error,null)
    }
}
robarPlanos(14,function(error,mensaje){
    if(error){
        console.log(error)
        console.log('no pudimos despegar')
    }else{
        console.log(mensaje)
        console.log('si pudimos despegar')
    }
})

// -------------------------------------------------------------------------------------

// Taller 2 ejercicio 2

let datos = {}
function asociarDatos(nombre,planeta,edad,estatura,actividad){
    datos.Nombre = nombre
    datos.Planeta = planeta
    datos.Edad = edad
    datos.Estatura = estatura

    if(edad<=15){
        let manejoFuerza = 'Manejo de la fuerza'
        actividad(null,manejoFuerza)
    }else{
        let manejoSable = 'Manejo del sable de luz'
        actividad(manejoSable,null)
    }
    console.log(datos) 
}
asociarDatos('BELL ZETTIFAR','mineral Elphrona',33,170,function(manejoFuerza,manejoSable){
    if(manejoFuerza){
        console.log(manejoFuerza)
    }else{
        console.log(manejoSable)
    }
})