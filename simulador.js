//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular(){
    //Recuperar INGRESOS y Pasar a float
    let valorIngresos= document.getElementById("txtIngresos")
    let valorIngresosStr = valorIngresos.value;
    let valorIngresosFloat = parseFloat(valorIngresosStr);

    //Recuperar EGRESOS y Pasar a float
    let valorEgresos = document.getElementById("txtEgresos")
    let valorEgresosStr = valorEgresos.value;
    let valorEgresosFloat = parseFloat(valorEgresosStr);
    
    //Llamar a la funcion CalcularDisponiblidad 

    let total = calcularDisponibilidad(valorIngresosFloat, valorEgresosFloat);
    let totalValor = total.toFixed(2);
    let contenedorDisponible =document.getElementById("spnDisponible");
    contenedorDisponible.textContent = totalValor;

    //Llamar a la funcion CAlCULARCAPACIDADPAGO 

    let capturarCapacidadPago = calcularCapacidadPago(totalValor);
    let capacidadTotal = capturarCapacidadPago.toFixed(2);

    //capturar la caja de CAPACIDADPAGO y MOSTRAR EN PANTALLA

    let capacacidadPago = document.getElementById("spnCapacidadPago");
    capacacidadPago.textContent= capacidadTotal;
    
    //capturar la caja de MONTO SOLICITADO, PLAZO AÑOS, TASA ANUEAL

    let cajaMontoSolicitado = document.getElementById("txtMonto");
    let cajaPlazoAnios = document.getElementById("txtPlazo");
    let cajaTasaAnual = document.getElementById("txtTasaInteres");

    // string 

    let montoSolicitadoStr = cajaMontoSolicitado.value;
    let plazoAniosStr = cajaPlazoAnios.value;
    let tasaAnualStr = cajaTasaAnual.value;

    // string a entero

    let montoSolicitadoInt = parseInt(montoSolicitadoStr);
    let tasaAnualInt = parseInt(tasaAnualStr);
    let plazoAniosInt = parseInt(plazoAniosStr);
    

    //llamar a la funcion calcularInteresSimple y guardar en una variable

    let calculointeresSimple = calcularInteresSimple(montoSolicitadoInt,tasaAnualInt,plazoAniosInt,)
    let totalInteres = calculointeresSimple.toFixed(2)
    //capturar lblInteresValor 

    let interesValor = document.getElementById("spnInteresPagar");
    interesValor.textContent= totalInteres;
    
    //invocar a la funcion calcularTotalPagar
    let totalPagar = calcularTotalPagar(montoSolicitadoInt, calculointeresSimple)
    
    //capturar TotalPrestamo
    let spnTotalPrestamo = document.getElementById("spnTotalPrestamo")
    spnTotalPrestamo.textContent =totalPagar;

    //invocar a la funcion calcularCuotaMensual y mostrar en pantalla 
    let spnCuotaMensual = calcularCuotaMensual(totalPagar, plazoAniosInt)
    let cuotaMensualRedondeado = spnCuotaMensual.toFixed(2)
    let cuotaMensual = document.getElementById("spnCuotaMensual")
    cuotaMensual.textContent = cuotaMensualRedondeado;

    let spnEstadoCredito = aprobarCredito(capturarCapacidadPago, spnCuotaMensual)

    let capEstadoCredito = document.getElementById("spnEstadoCredito")
    
    if (spnEstadoCredito){
        capEstadoCredito.textContent = "CREDITO APROBADO"
    }else{
        capEstadoCredito.textContent = "CREDITO RECHAZADO"
    }
}