//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular() {
    if (!validarFormulario()) {
    return;
}
    
    // Aquí continúa el cálculo del crédito

    //Recuperar INGRESOS y Pasar a float
    let valorIngresos = document.getElementById("txtIngresos")
    let valorIngresosStr = valorIngresos.value;
    let valorIngresosFloat = parseFloat(valorIngresosStr);

    //Recuperar EGRESOS y Pasar a float
    let valorEgresos = document.getElementById("txtEgresos")
    let valorEgresosStr = valorEgresos.value;
    let valorEgresosFloat = parseFloat(valorEgresosStr);

    //Llamar a la funcion CalcularDisponiblidad 

    let total = calcularDisponibilidad(valorIngresosFloat, valorEgresosFloat);
    let totalValor = total.toFixed(2);
    let contenedorDisponible = document.getElementById("spnDisponible");
    contenedorDisponible.textContent = totalValor;

    //Llamar a la funcion CAlCULARCAPACIDADPAGO 

    let capturarCapacidadPago = calcularCapacidadPago(totalValor);
    let capacidadTotal = capturarCapacidadPago.toFixed(2);

    //capturar la caja de CAPACIDADPAGO y MOSTRAR EN PANTALLA

    let capacacidadPago = document.getElementById("spnCapacidadPago");
    capacacidadPago.textContent = capacidadTotal;

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

    let calculointeresSimple = calcularInteresSimple(montoSolicitadoInt, tasaAnualInt, plazoAniosInt,)
    let totalInteres = calculointeresSimple.toFixed(2)
    //capturar lblInteresValor 

    let interesValor = document.getElementById("spnInteresPagar");
    interesValor.textContent = totalInteres;

    //invocar a la funcion calcularTotalPagar
    let totalPagar = calcularTotalPagar(montoSolicitadoInt, calculointeresSimple)

    //capturar TotalPrestamo
    let spnTotalPrestamo = document.getElementById("spnTotalPrestamo")
    spnTotalPrestamo.textContent = totalPagar;

    //invocar a la funcion calcularCuotaMensual y mostrar en pantalla 
    let spnCuotaMensual = calcularCuotaMensual(totalPagar, plazoAniosInt)
    let cuotaMensualRedondeado = spnCuotaMensual.toFixed(2)
    let cuotaMensual = document.getElementById("spnCuotaMensual")
    cuotaMensual.textContent = cuotaMensualRedondeado;

    let spnEstadoCredito = aprobarCredito(capturarCapacidadPago, spnCuotaMensual)

    let capEstadoCredito = document.getElementById("spnEstadoCredito")

    if (spnEstadoCredito) {
        capEstadoCredito.textContent = "CREDITO APROBADO"
    } else {
        capEstadoCredito.textContent = "CREDITO RECHAZADO"
    }
}
function validarInput(input, idError) {

    let valor = input.value;
    let error = document.getElementById(idError);

    error.textContent = "";

    if (valor == "") {
        error.textContent = "Este campo es obligatorio.";
        return false;
    }

    if (isNaN(valor)) {
        error.textContent = "Solo se permiten números.";
        return false;
    }

    if (valor.length > 5) {
        error.textContent = "Máximo 5 dígitos.";
        return false;
    }

    let numero = Number(valor);

    switch (input.id) {

        case "txtIngresos":
            if (numero <= 0) {
                error.textContent = "Los ingresos deben ser mayores a 0.";
                return false;
            }
            if (numero > 99999) {
                error.textContent = "Máximo permitido: 99999.";
                return false;
            }
            break;

        case "txtEgresos":
            if (numero < 0) {
                error.textContent = "Los egresos no pueden ser negativos.";
                return false;
            }
            if (numero > 99999) {
                error.textContent = "Máximo permitido: 99999.";
                return false;
            }
            break;

        case "txtMonto":
            if (numero < 100) {
                error.textContent = "El monto mínimo es 100.";
                return false;
            }
            if (numero > 99999) {
                error.textContent = "El monto máximo es 99999.";
                return false;
            }
            break;

        case "txtPlazo":
            if (numero < 1) {
                error.textContent = "El plazo mínimo es 1 año.";
                return false;
            }
            if (numero > 4) {
                error.textContent = "El plazo máximo es 4 años.";
                return false;
            }
            break;

        case "txtTasaInteres":
            if (numero <= 0) {
                error.textContent = "La tasa debe ser mayor a 0.";
                return false;
            }
            if (numero > 20) {
                error.textContent = "La tasa máxima es 20%.";
                return false;
            }
            break;
    }

    return true;
}
function validarFormulario(){

    let valido = true;

    if(!validarInput(document.getElementById("txtIngresos"), "error_txtIngresos")){
        valido = false;
    }

    if(!validarInput(document.getElementById("txtEgresos"), "error_txtEgresos")){
        valido = false;
    }

    if(!validarInput(document.getElementById("txtMonto"), "error_txtMonto")){
        valido = false;
    }

    if(!validarInput(document.getElementById("txtPlazo"), "error_txtPlazo")){
        valido = false;
    }

    if(!validarInput(document.getElementById("txtTasaInteres"), "error_txtTasaInteres")){
        valido = false;
    }

    return valido;
}