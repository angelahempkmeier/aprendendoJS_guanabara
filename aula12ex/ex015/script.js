function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){ //se o que tiver marcado for...
                gênero = 'Homem'
                if(idade <10){
                    img.setAttribute('src', 'menino.png')
                }else if(idade < 21){
                    img.setAttribute('src', 'hjovem.png')
                }else if(idade < 50){
                    img.setAttribute('src', 'adulto.png')
                }else {
                    img.setAttribute('src', 'idoso.png')
                }
        }else if(fsex[1].checked){
                gênero = 'Mulher'
                if(idade <10){
                    img.setAttribute('src', 'menina.png')
                }else if(idade < 21){
                    img.setAttribute('src', 'mjovem.png')
                }else if(idade < 50){
                    img.setAttribute('src', 'adulta.png')
                }else {
                    img.setAttribute('src', 'idosa.png')
                }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }

}