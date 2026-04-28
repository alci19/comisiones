const VENTAS_BASE = 5;

/* =========================
   FUNCIONES DE ERROR
========================= */

function mostrarError(input, mensaje) {
    input.style.border = "2px solid red";

    let error = input.nextElementSibling;

    if (!error || !error.classList.contains("error-msg")) {
        error = document.createElement("small");
        error.classList.add("error-msg");
        error.style.color = "red";
        error.style.display = "block";
        error.style.marginBottom = "10px";
        input.parentNode.insertBefore(error, input.nextSibling);
    }

    error.textContent = mensaje;
}

function limpiarError(input) {
    input.style.border = "";

    let error = input.nextElementSibling;
    if (error && error.classList.contains("error-msg")) {
        error.remove();
    }
}

/* =========================
   VALIDACIONES POR CAMPO
========================= */

function validarSueldo() {
    let input = document.getElementById("txtSueldoBase");
    let valor = input.value.trim();

    limpiarError(input);

    if (valor === "") {
        mostrarError(input, "El salario base es obligatorio");
        return false;
    }

    let num = parseFloat(valor);

    if (isNaN(num)) {
        mostrarError(input, "Debe ser un número válido");
        return false;
    }

    if (num < 0) {
        mostrarError(input, "No puede ser negativo");
        return false;
    }

    if (num > 10000) {
        mostrarError(input, "Máximo permitido: 10000");
        return false;
    }

    return true;
}

function validarVentas() {
    let input = document.getElementById("txtVentas");
    let valor = input.value.trim();

    limpiarError(input);

    if (valor === "") {
        mostrarError(input, "El número de ventas es obligatorio");
        return false;
    }

    let num = parseFloat(valor);

    if (isNaN(num)) {
        mostrarError(input, "Debe ser un número");
        return false;
    }

    if (!Number.isInteger(num)) {
        mostrarError(input, "Debe ser un número entero");
        return false;
    }

    if (num < 0) {
        mostrarError(input, "No puede ser negativo");
        return false;
    }

    if (num > 1000) {
        mostrarError(input, "Máximo permitido: 1000");
        return false;
    }

    return true;
}

function validarPrecio() {
    let input = document.getElementById("txtPrecio");
    let valor = input.value.trim();

    limpiarError(input);

    if (valor === "") {
        mostrarError(input, "El precio es obligatorio");
        return false;
    }

    let num = parseFloat(valor);

    if (isNaN(num)) {
        mostrarError(input, "Debe ser un número válido");
        return false;
    }

    if (num <= 0) {
        mostrarError(input, "Debe ser mayor que 0");
        return false;
    }

    if (num > 10000) {
        mostrarError(input, "Máximo permitido: 10000");
        return false;
    }

    return true;
}

/* =========================
   VALIDAR TODO
========================= */

function validarFormulario() {
    let valido = true;

    if (!validarSueldo()) valido = false;
    if (!validarVentas()) valido = false;
    if (!validarPrecio()) valido = false;

    return valido;
}

/* =========================
   LÓGICA ORIGINAL
========================= */

function calcularComision(numeroVentas, precioProducto) {
    let comision = 0;

    if (numeroVentas > VENTAS_BASE) {
        let ventasExtra = numeroVentas - VENTAS_BASE;
        comision = ventasExtra * precioProducto * 0.1;
    }

    return comision;
}

function calcular() {

    // 🚫 BLOQUEA SI HAY ERRORES
    if (!validarFormulario()) {
        return;
    }

    let sueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarFloat("txtVentas");
    let precioProducto = recuperarFloat("txtPrecio");

    let comision = calcularComision(numeroVentas, precioProducto);
    let total = sueldoBase + comision;

    document.getElementById("spSueldoBase").textContent = `$${sueldoBase.toFixed(2)}`;
    document.getElementById("spComision").textContent = `$${comision.toFixed(2)}`;
    document.getElementById("spTotal").textContent = `$${total.toFixed(2)}`;
}