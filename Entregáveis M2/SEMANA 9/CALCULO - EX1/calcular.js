function calcular()
{
    var num = Number.parseInt(document.getElementById("txtn").value)
    var res = document.getElementById("res")
    
    if (num % 2 == 0) //caso o número seja divisível por dois e não houver resto na divisão, quer dizer que o número é par 
    {
        res.innerHTML = "O número digitado por você é par!"
    }
    else //caso haja um resto, o número é ímpar  
    {
        res.innerHTML = "O número digitado por você é ímpar!"
    }
}