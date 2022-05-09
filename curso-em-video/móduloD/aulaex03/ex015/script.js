function verificar(){
    var data = new Date() //atriuindo a data do computador 
    var ano = data.getFullYear() //atribuindo o ano atual
    var fano = document.getElementById('txtano') //atribuindo o input txtano 
    var res = document.getElementById('res')    //atribuindo a div res
    
    if (fano.value.length == 0 || fano.value > ano) { //se o ano que o usuario digitar for 0 ou maior que o ano atual vai dar um erro
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex') //atribuindo os inputs radsex
        var idade = ano - Number(fano.value) //idade é o ano atual menos o ano que o usuario digitou
        var genero = ''
        var img = document.createElement('img') //criando um elemento de imagem pelo javascript
        img.setAttribute('id','foto') //atribuindo um id chamado foto no elemento
        
        if (fsex[0].checked) { //se o sexo marcado for o masculino ele vai atribuir Homem ao genero e mostrar a imagem correspondente
            genero = 'Homem'
            if (idade>=0 && idade<10) {
                //crianca
                img.setAttribute('src', 'fotocriancahomem.png') //atribuindo a foto correspondente ao elemento
            } else if (idade<21){
                //jovem
                img.setAttribute('src', 'fotojovemhomem.png')
            } else if (idade<50) {
                //adulto
                img.setAttribute('src', 'fotoadultohomem.png')
            } else {
                //idoso
                img.setAttribute('src', 'fotoidosohomem.png')
            }
        } else if (fsex[1].checked) { //se o sexo marcado for o feminino ele vai atribuir Mulher ao genero e mostrar a imagem correspondente
            genero = 'Mulher'
            if (idade>=0 && idade<10) {
                //crianca
                img.setAttribute('src', 'fotocriancamulher.png')
            } else if (idade<21){
                //jovem
                img.setAttribute('src', 'fotojovemmulher.png')
            } else if (idade<50) {
                //adulto
                img.setAttribute('src', 'fotoadultomulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'fotoidosomulher.png')
            }
        }
        res.style.textAlign = 'center' //colocando o texto da div no meio da página
        res.innerHTML = `Detectamos ${genero} com ${idade} anos` //mudando o texo da div 
        res.appendChild(img) //adicionar um elemento na div
    }
}