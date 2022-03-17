function calculo_nota(media_parciales: number, examen_final: number, trabajo_final: number) {

    var clasificacion: number = 0.55 * media_parciales + 0.30 * examen_final + 0.15 * trabajo_final
    return clasificacion
}

function nombres_videojuegos(...nombres: string[]) {

    var videojuegos: string
    var re_mario = /^(mario)/
    for(let nombre of nombres) {

        if(nombre.match(re_mario)) {
            nombre = "Incumple con re"
            videojuegos += nombre + ","
        }
        else {
            videojuegos += nombre + ","
        }

    }

    var resultado = videojuegos.split(",")
    return resultado 

}

function factorial(numero: number) {
    var resultado: number = numero
    var i:number = numero

    
    while(i > 1) {
        var descuento = --numero;
        resultado = resultado * descuento
        i--
    } 
    return resultado
}

console.log("Prueba primera función que calcula nota: " + calculo_nota(8,7,4))
console.log("Prueba de la segunda función del array de videojuegos: " + nombres_videojuegos("mario Odisea", "Parchís", "Juego de las frutitas"))
console.log("Prueba de la tercera función que calcula factorial de un número: " + factorial(6))