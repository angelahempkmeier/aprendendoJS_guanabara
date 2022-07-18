let num = [1,5,8,9,7]
for(let pos=0; pos <num.length;pos++){
    console.log(`A posicao ${pos} tem o valor ${num[pos]}`)
}

for(let pos in num) {
    console.log(num[pos])
}