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
    let totalValor = total.toFixed(2)
    let contenedorDisponible =document.getElementById("spnDisponible")
    contenedorDisponible.textContent = totalValor

}