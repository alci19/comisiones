const VENTAS_BASE = 5;

function calcularComision(numeroVentas, precioProducto) {
    let comision = 0;

    if (numeroVentas > VENTAS_BASE) {
        let ventasExtra = numeroVentas - VENTAS_BASE;
        comision = ventasExtra * precioProducto * 0.1;
    }

    return comision;
}

function calcular() {

    // Obtener elementos
    let componenteSueldoBase = document.getElementById("txtSueldoBase");
    let componenteVenta = document.getElementById("txtVentas");
    let componentePrecio = document.getElementById("txtPrecio");

    // Obtener valores
    let sueldoBase = parseFloat(componenteSueldoBase.value);
    let numeroVentas = parseFloat(componenteVenta.value);
    let precioProducto = parseFloat(componentePrecio.value);

    // Validación básica
    if (isNaN(sueldoBase) || isNaN(numeroVentas) || isNaN(precioProducto)) {
        alert("Por favor ingresa todos los valores correctamente");
        return;
    }

    let comision = calcularComision(numeroVentas, precioProducto);
    let total = sueldoBase + comision;

    // Mostrar resultados
    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");

    spSueldoBase.textContent = sueldoBase;
    spComision.textContent = comision;
    spTotal.textContent = total;
}