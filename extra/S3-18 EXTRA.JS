
let refrigeirante = "refrigeirante"
let macarrao = "macarrao"
let ervilha = "ervilha"
let arroz = "arroz"
let feijao = "feijao"
let vinho = "vinho"

let produto = prompt(`Qual é o seu produto?`)

if(produto == refrigeirante){
    let preco = parseFloat(prompt("Digite o valor do produto"))
    let quantidade = parseInt(prompt("Quantas unidades vai querer?"))
    let total = preco * quantidade
    let metade = total / 2
    let voce = metade
    let amigo = metade
    
    alert(`Seu produto é ${produto}, o valor é de ${preco} reais, a quantidade desejada é ${quantidade} unidades, o total a ser pago é de ${total} reais, mas voce vai pagar ${voce} e seu amigo: ${amigo}`)
}

if(produto == macarrao){
    let preco = parseFloat(prompt("Digite o valor do produto"))
    let quantidade = parseInt(prompt("Quantas unidades vai querer?"))
    let total = preco * quantidade
    let metade = total / 2
    let voce = metade
    let amigo = metade
    
    alert(`Seu produto é ${produto}, o valor é de ${preco} reais, a quantidade desejada é ${quantidade} unidades, o total a ser pago é de ${total} reais, mas voce vai pagar ${voce} e seu amigo: ${amigo}`)
}

if(produto == ervilha){
    let preco = parseFloat(prompt("Digite o valor do produto"))
    let quantidade = parseInt(prompt("Quantas unidades vai querer?"))
    let total = preco * quantidade
    let metade = total / 2
    let voce = metade
    let amigo = metade
    
    alert(`Seu produto é ${produto}, o valor é de ${preco} reais, a quantidade desejada é ${quantidade} unidades, o total a ser pago é de ${total} reais, mas voce vai pagar ${voce} e seu amigo: ${amigo}`)
}

if(produto == arroz){
    let preco = parseFloat(prompt("Digite o valor do produto"))
    let quantidade = parseInt(prompt("Quantas unidades vai querer?"))
    let total = preco * quantidade
    let metade = total / 2
    let voce = metade
    let amigo = metade
    
    alert(`Seu produto é ${produto}, o valor é de ${preco} reais, a quantidade desejada é ${quantidade} unidades, o total a ser pago é de ${total} reais, mas voce vai pagar ${voce} e seu amigo: ${amigo}`)
}

if(produto == feijao){
    let preco = parseFloat(prompt("Digite o valor do produto"))
    let quantidade = parseInt(prompt("Quantas unidades vai querer?"))
    let total = preco * quantidade
    let metade = total / 2
    let voce = metade
    let amigo = metade
    
    alert(`Seu produto é ${produto}, o valor é de ${preco} reais, a quantidade desejada é ${quantidade} unidades, o total a ser pago é de ${total} reais, mas voce vai pagar ${voce} e seu amigo: ${amigo}`)
}

if(produto == vinho){
    let preco = parseFloat(prompt("Digite o valor do produto"))
    let quantidade = parseInt(prompt("Quantas unidades vai querer?"))
    let total = preco * quantidade
    let metade = total / 2
    let voce = metade
    let amigo = metade
    
    alert(`Seu produto é ${produto}, o valor é de ${preco} reais, a quantidade desejada é ${quantidade} unidades, o total a ser pago é de ${total} reais, mas voce vai pagar ${voce} e seu amigo: ${amigo}`)
}

    else if(produto != refrigeirante && produto != macarrao && produto != ervilha && produto != arroz && produto != feijao && vinho != produto){
    alert(`Não temos esse produto`)
}
