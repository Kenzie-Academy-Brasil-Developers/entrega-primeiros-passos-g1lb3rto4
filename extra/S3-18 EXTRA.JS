let produto = (prompt("Digite o nome do produto"))
let preco = parseFloat(prompt("Digite o valor do produto"))
let quantidade = parseInt(prompt("Quantas unidades vai querer?"))
let total = preco * quantidade

alert(`Seu produto é ${produto}, o valor é de ${preco} reais, a quantidade desejada é ${quantidade} unidades, o total a ser pago é de ${total} reais`)