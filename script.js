

function gerarTabuada() {
    let number = document.getElementById('inputNumero')
    let numberValue = Number(number.value)
    let resultado = document.getElementById('resultado')
    let n = numberValue
    let c = 1
    resultado.innerHTML =""//atribuir vazio a todo click faz o reset da tabuada
    while (c <= 10) {
        let conta = `${n} x ${c} = `+n*c
        c++
        resultado.innerHTML += conta + "<br>"
    }
} 
    


