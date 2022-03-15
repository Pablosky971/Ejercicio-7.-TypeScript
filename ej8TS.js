function calculo_nota(media_parciales, examen_final, trabajo_final) {
    var clasificacion = 0.55 * media_parciales + 0.30 * examen_final + 0.15 * trabajo_final;
    return clasificacion;
}
function nombres_videojuegos() {
    var nombres = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nombres[_i] = arguments[_i];
    }
    var videojuegos;
    var re_mario = /^(mario)/;
    for (var _a = 0, nombres_1 = nombres; _a < nombres_1.length; _a++) {
        var nombre = nombres_1[_a];
        if (nombre.match(re_mario)) {
            continue;
        }
        else {
            videojuegos += nombre + ",";
        }
    }
    var resultado = videojuegos.split(",");
    return resultado;
}
function factorial(numero) {
    var resultado;
    var i = 0;
    while (i <= numero) {
        var descuento = --numero;
        resultado *= descuento;
        i++;
    }
    return resultado;
}
console.log("Prueba primera función que calcula nota: " + calculo_nota(10, 10, 10));
console.log("Prueba de la segunda función del array de videojuegos" + nombres_videojuegos("mario Odisea", "Parchís", "Juego de las frutitas"));
console.log("Prueba de la tercera función que calcula factorial de un número" + factorial(6));
