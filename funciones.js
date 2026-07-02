//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO

function calcularDisponibilidad(ingresos, egresos){
    let valorInicial = 0
    let calcularValor = ingresos - egresos
    if (calcularValor < valorInicial ){
        return valorInicial
    }
    return calcularValor
}

function calcularCapacidadPago(montoDisponible){
    let capacaidadPago = montoDisponible * 0.5
    return capacaidadPago
}