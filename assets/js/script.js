// insira o seu codigo aqui
function multiplicar() {
    var n1 = document.getElementById('n1')
    var n2 = document.getElementById('n2')

    if(n1.value.length == 0 || n2.value.length == 0) {
        window.alert("Campo em branco, Digite um numero!")
    } else {
        var n1 = Number(n1.value)
        var n2 = Number(n2.value)
        var x = 0
        var r = 0
        var res = document.getElementById('resultado')
        res.innerHTML = `A tabuada do ${n1} é: <br />`

        do{
            r = n1 * x
            res.innerHTML += `${n1} x ${x} = ${r} <br />`
            x++
        } while (x <= n2)
    }
}