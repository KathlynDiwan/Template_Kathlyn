//comentando em js 

function  ex1() {        //criar uma função

//criando uma mensagem de aviso em alert 
alert('Você vai descobrir os valores');

var v0 = document.getElementById ('v0').value; //representa a velocidade inicial - o get é o valor que iremos inserir na via web 
const g = 10; //aceleração gravitacional 10m/sˆ2

var //adicionar nova varrável que vai indicar o cálculo 

aAltura = v0 * v0/2 * g;  //função que foi dada que representa a altura máxima --> tive um pouco de dificuldade para representar o v0ˆ2/2g
document.getElementById('vem').innerHTML = "ALTURA MÁXIMA = " +  aAltura; 
console.log ("ALTURA MÁXIMA = " + aAltura)
alert ("ALTURA MÁXIMA = " + aAltura); 


tSubida = v0/g; //função que foi dada que representa o tempo de subida
document.getElementById('vem').innerHTML =  "TEMPO DE SUBIDA = " + tSubida; //propriedade de 'colocar no html' 
console.log ("TEMPO DE SUBIDA = " + tSubida); 
alert ("TEMPO DE SUBIDA = " + tSubida); 

}
