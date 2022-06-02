function somar(){ //função de soma 
    var entrada = Number (document.getElementById("quantidade").value);
    entrada = entrada + 1  

    document.getElementById("quantidade").value = String(entrada)
}

function subtrair(){ //função de subtração
    var entrada = Number (document.getElementById("quantidade").value);
    entrada = entrada - 1  

    document.getElementById("quantidade").value = String(entrada)
}