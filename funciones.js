//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO

function calcularDisponibilidad(ingresos, egresos){
    let valorInicial = 0
    let calcularValor = ingresos - egresos
    if (calcularValor < valorInicial ){
        return valorInicial
    }
    return calcularValor
}

