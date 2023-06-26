var Leo = window.document.getElementById("leo")
var Samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("bruna")

var setaDireita = window.document.getElementById("setaDireita")
var setaEsquerda = window.document.getElementById("setaEsquerda")

function RolarParaDireita() {
    Leo.style = "display:none"
    Samantha.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex"
}

function RolarParaEsquerda() {
    Leo.style = "display:flex"
    Samantha.style = "display:none"
    setaDireita.style = "display:flex"
    setaEsquerda.style = "display:none"
}


