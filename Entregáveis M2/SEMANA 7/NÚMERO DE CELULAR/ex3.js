function verificar(){
    var numeros = document.getElementById("PhoneNumber").value
    var listaNumeros = numeros.split("");
    
    if (listaNumeros[0] == "(" && listaNumeros[3] == ")" && listaNumeros[9] == "-"){
        window.alert("Ótimo! O Número foi inserido corretamente")
    }
    else{
        window.alert("Por favor, insira o numero correto no formato: (DDD)XXXXX-XXXX")
    }
}