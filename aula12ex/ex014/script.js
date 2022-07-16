function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    //hora = 20
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'manha.png'
        document.body.style.background = '#bc905a'
    }else if(hora < 18){
        //BOA TARDE
        img.src = 'tarde.png'
        document.body.style.background = '#622613'
    }else {
        //BOA NOITE
        img.src = 'noite.png'
        document.body.style.background = '#473f37'
    }

}
