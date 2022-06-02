function calcular() {

    var numero_1 = document.getElementById('numero1').value; 
    var numero_2 = document.getElementById('numero2').value;
    var operacao = document.getElementById('operadores').value;
    var resultado = "";


    //as seguintes funções estão sendo utilizadas para identificar como será calculado o valor final, de acordo com o operador matemático selecionado
    
    if (operacao == "+") {           //soma     
        resultado = parseFloat(numero_1) + parseFloat(numero_2); } 

    else if (operacao == "-") {  //subtração
        resultado = parseFloat(numero_1) - parseFloat(numero_2);}

    else if (operacao == "*") { //produto
        resultado = parseFloat(numero_1) * parseFloat(numero_2);} 

    else if (operacao == "/") { //divisão
        resultado = parseFloat(numero_1) / parseFloat(numero_2);} 

    
    else if (operacao == "%") { //porcentagem
        resultado = parseFloat(numero_1) % parseFloat(numero_2);} 


    else if (operacao == "//") { //divisão
         resultado = parseInt(numero_1 / numero_2);} 

    else (resultado = "(Você não inseriu um operador!)"); //resposta que será dada caso haja um ELSE, de que um operador não foi adicionado

    document.getElementById('resposta').innerHTML = "O resultado encontrado para a conta é " + resultado;} //resposta que será dada
