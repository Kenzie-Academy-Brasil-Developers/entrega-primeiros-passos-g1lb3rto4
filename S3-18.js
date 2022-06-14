const refrigeirante = "refrigeirante"
const macarrao = "Macarrão"
const ervilha = "Ervilha"
const arroz = "Arroz"
const feijao = "Feijão"
const vinho = "Vinho"

let quantidadeRefrigeirante = 3
let quantidadeMacarrao = 4
let quantidadeErvilha = 3
let quantidadeArroz = 3
let quantidadeFeijao = 2
let quantidadeVinho = 3

let valorRefrigeirante = 11.99
let valorMacarrao = 6.99
let valorErvilha = 6.99
let valorArroz = 22.99
let valorFeijao = 11.89
let valorVinho = 70.00


let totalRefrigeirante = valorRefrigeirante * quantidadeRefrigeirante
let totalMacarrao = valorMacarrao *quantidadeMacarrao
let totalErvilha = valorErvilha * quantidadeErvilha
let totalArroz = valorArroz * quantidadeArroz
let totalFeijao = valorFeijao * quantidadeFeijao
let totalVinho = valorVinho *  quantidadeVinho

let  totalCompras = totalRefrigeirante + totalMacarrao + totalErvilha + totalArroz + totalFeijao + totalVinho

let metade = totalCompras / 2

console.log("Total das compras:" + totalCompras)

if(totalCompras % 2 == 0){
    let voce = metade - totalVinho;
    let amigo = metade +  totalVinho;
    console.log(`Voce vai pagar ${voce} e seu amigo ${amigo}`)

  }else{
    let voce = metade;
    let amigo = metade;
    console.log(`Voce vai pagar ${voce} e seu amigo ${amigo}`)
  }

