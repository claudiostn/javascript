function contagem(){
    var txti = document.getElementById('txtini')
    var txtf = document.getElementById('txtfim')
    var txtp = document.getElementById('txtpas')
    var res = document.getElementById('res')
    
    if (txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0) {
        res.innerHTML = 'Impossível contar.'
    } else {
        res.innerHTML = 'Contando: <br>'
        var ti = Number(txti.value)
        var tf = Number(txtf.value)
        var tp = Number(txtp.value)
        if(tp<=0){
            window.alert('Passo inválido! Considerando PASSO 1')
            tp = 1
        }
        if(ti < tf){
            //contagem crescente
            for (var c = ti; c <= tf ; c += tp){
                res.innerHTML += `${c} \u{1F449}` 
            }
        } else {
            //contagem decrescente
            for (var c = ti; c >= tf ; c -= tp){
                res.innerHTML += `${c} \u{1F449}` 
            }  
        }
        res.innerHTML += `\u{1F3C1}`
    }
    
}


