function caixa() {
    alert('oi');
    var total = document.getElementById('valor').value; 
    var notas;

    //dividir o total pelas notas de 10 - apenas a parte inteira 
    //contnuar a divisão com o restante --> % e dividir com as próximas cedulas 
    //dividir novamente o restante da divisão com as cedulas de 5 e dividir com as de 1 
   
   
    notas = parseInt(total / 100);
    document.getElementById('vem').innerHTML += '<br></br>NOTAS DE 10:' + notas;
    notas = total % 100
    
    notas = parseInt(notas / 50);
    document.getElementById('vem').innerHTML += '<br></br>NOTAS DE 5:' + notas;
    notas = parseInt(notas / 20);
    notas = parseInt(notas / 10);
    document.getElementById('vem').innerHTML += '<br></br>NOTAS DE 1:' + notas;
    document.getElementById('vem').innerHTML += '<br></br>NOTAS DE 1:' + notas;
    notas = parseInt(notas / 5);
    document.getElementById('vem').innerHTML += '<br></br>NOTAS DE 5:' + notas;
    notas = parseInt(notas / 1);
    document.getElementById('vem').innerHTML += '<br></br>NOTAS DE 1:' + notas;
    

    

}