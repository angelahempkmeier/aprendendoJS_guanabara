let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value)) //adicionei os valores no vetor
        let item = document.createElement('option') //criando isso aqui pra mostrar na tela
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item) //adiciona na lista
        res.innerHTML = ''
    }else{
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = '' //apaga numero
    num.focus() //volta com o cursor do mouse pra clicar
}

function finalizar(){
    if (valores.length == 0){
        alert('Adicione valores ao vetor antes de finalizar.')
    }else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            if(valores[pos]>maior){
                maior = valores[pos]
            }
            if(valores[pos]<menor){
                menor = valores[pos]
            }
            soma = soma + valores[pos]
        }
        media = soma/tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor é ${maior}</p>` 
        res.innerHTML += `<p>O menor valor é ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, o resultado é ${soma}</p>`
        res.innerHTML += ` <p> A média dos valores foi de ${media}</p>`

    }
}