// alert ('Leia com atenção ;)')

// function confirmar()
// {
// window.ActiveXObjectalert("oi")}

function getIdiomas() {
    var url = "/idiomas"

    var xhtpp = new XMLHttpRequest()
    xhtpp.open("get", url, false)
    xhtpp.send()

    var data = JSON.parse(xhtpp.responseText)

    console.log(data)
    data.forEach(row => {
        document.getElementById("idiomas").innerHTML += `<p>${row.Idioma}: ${row.Progresso}`
    });
}
getIdiomas()