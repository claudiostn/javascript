function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor digite um número')
    } else {
        var n = Number(num.value)
        tab.innerHTML = ''
        for (c=1;c<=10;c++){
            var item = document.createElement('option') //cria um elemento do tipo option
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item) //adiciona o valor ao <select>
        }

    }

}