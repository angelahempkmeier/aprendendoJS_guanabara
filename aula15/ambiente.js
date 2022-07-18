let num = [5,8,2,9,3,8]
num.push(1)
console.log(`O nosso vetor é o ${num}`)
num.push(10)
//console.log(`O vetor em ordem crescente é ${num.sort()}`)
console.log(`O vetor tem o tamanho de ${num.length}`)
console.log(`O primeiro número do vetor é ${num[0]}`)

let pos = num.indexOf(87)
if(pos == -1){
    console.log(`O valor não foi encontrado`)
}else {
console.log(`O valor está na posicao ${pos}`)
}
