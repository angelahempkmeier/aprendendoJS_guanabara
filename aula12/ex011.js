var idade = 22
console.log(`Você tem ${idade} anos`)
if(idade < 16) {
    console.log('Não vota')
}else if(idade < 18 || idade > 65) { //idade >= 16 && idade < 18 - basta idade < 18 pra ser vdd, pq se a idade nao é menor q 16, ela vai ser c ctz maior q 16...
    console.log('Voto opcional')
}else{
        console.log('Voto obrigatório')
}
