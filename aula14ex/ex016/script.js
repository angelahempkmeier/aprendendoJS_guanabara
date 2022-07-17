function contar(){
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    var resultado = document.getElementById('res')

    //resultado.innerHTML = `${inicio}, ${fim}, ${passo}`
    /*for(var i = inicio; i<=fim; i=passo){
        resultado.innerHTML = `${i}`
    }*/

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        resultado.innerHTML = 'Impossível Contar'
        window.alert("[ERRO]Há dados faltando. Complete corretamente para prosseguir.")
        
    }else{
        resultado.innerHTML = 'Contando... <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        //resultado.innerHTML = `${i}, ${f}, ${p}`
        if (p==0){
            window.alert('PASSO INVÁLIDO! Considerando Passo 1')
            p = 1
        }
        if(i<f){
            for(var c = i; c<=f; c += p){
                resultado.innerHTML += `${c} \u{1F449}`
            }
        }else {
            for(var c = i; c>=f; c-= p){
                resultado.innerHTML += `${c} \u{1F449}`
            }
        }
        resultado.innerHTML += `\u{1F3c1}`
        
    }
}