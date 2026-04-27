function recuperarTexto(idComponente){
    let componente = document.getElementById(idComponente)
    let valor = componente.value;

    return valor;

}

function recuperarFloat(idcomponente){
    let valorTexto = recuperarTexto(idcomponente);
    let valorfloat = parseFloat(valorTexto);

    return valorfloat;

}