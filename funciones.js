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

function calcularInteresSimple(monto, tasa, plazoAnios){
    let valorInteres = (plazoAnios * monto * tasa)/100
    return valorInteres
}

function calcularTotalPagar(monto, interes){
    let calcularTotal = monto + interes
    let valorTotalPagar = calcularTotal + 100;
    return valorTotalPagar

}

function calcularCuotaMensual(total, plazoAnios){
    let mesesAnios = plazoAnios * 12 
    let pagarMensual = total / mesesAnios;
    return pagarMensual
}

function aprobarCredito(capacidadPago, cuotaMensual){
    if(capacidadPago > cuotaMensual){
        return true;
    }else{
        return false
    }

}