let numArray = [];


function getValues() {
    event.preventDefault();
    let numero = document.getElementById('numero').value;
    numArray.push(Number(numero));
    document.getElementById('numero').value = '';
    console.log(numArray);
    alert(numArray)
}


function calculo() 
{ 
    event.preventDefault();
    numArray.sort((a,b) => a-b);
    let valorFoco = document.getElementById('valorFoco').value;
}

    let display = document.getElementById('display');
    display.innerHTML += `<h1> ${numArray} </h1>`
    display.innerHTML += `<h1> O valor foco se encontra na posição ${valorFocoIndex} </h1>`