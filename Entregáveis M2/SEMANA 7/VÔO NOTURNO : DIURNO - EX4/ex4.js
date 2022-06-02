function confirmar(){
    var quant = document.getElementById("txtnum").value
    var select = document.getElementById("select").value
    var res = document.getElementById("res")

    console.log(quant)
   
    if (select == "diurno")
        {
            var result = quant * 200
            res.innerHTML += `<p>${result}</p>`
        }
        else if (select == "diurno" && quant>=50)
        {
        var result = (quant * 120)
        res.innerHTML += `<p>${result}</p>`
        }
    else if (select == "noturno")
        {
        var result = (quant * 100)
        res.innerHTML += `<p>${result}</p>`
        }
    else if (select == "noturno" && quant>=50)
        {
        var result = (quant * 80)
        res.innerHTML += `<p>${result}</p>`
        }
    else
        {
            res.innerHTML = "ERRO!"
        }
}