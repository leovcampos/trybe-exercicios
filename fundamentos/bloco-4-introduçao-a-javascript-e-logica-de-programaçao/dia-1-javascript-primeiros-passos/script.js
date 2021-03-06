// 1.Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados.

const numbera = 1
const numberb = 100

console.log(numbera + numberb);
console.log(numbera - numberb);
console.log(numbera * numberb);
console.log(numbera / numberb);
console.log(numbera % numberb);

// 2.Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const a = 15;
const b = 3;

if(a > b){
    console.log(a)
}else{
    console.log(b)
}

// 3.Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const c = 10;
const d = 10;
const e = 10;

if(c > d && c > e){
    console.log(c)
}else if (d > c && d > e){
    console.log(d)
}else if(e > c && e > d){
    console.log(e)
}else{
    console.log("Números iguais")
}

// 4.Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const x = 0;

if(x > 0){
    console.log("Positive")
}else if(x < 0){
    console.log("Negative")
}else if(x === 0){
    console.log("x igual a " + x)
}else{
    console.log("Erro")
}

// 5.Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// .Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// .Um ângulo será considerado inválido se não tiver um valor positivo.

const ladoA = 60;
const ladoB = 60;
const ladoC = 60;

if(ladoA + ladoB + ladoC === 180){
    console.log("true");
}else if(ladoA < 0 || ladoB < 0 || ladoC < 0){
        console.log("Erro")
}else if(ladoA + ladoB + ladoC > 180 || ladoA + ladoB + ladoC < 180){
    console.log("false")
}

// 6.Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// .Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// .Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// .Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// .Exemplo: bisconst peça2 = peça.toLowerCase();
// hop (bispo) -> diagonals (diagonais)

const peça = "Cavalo";

switch (peça.toLowerCase()){
    case "bispo":
        console.log("diagonais");
        break;
    case "cavalo":
        console.log("movimento em L");
        break;
    case "torre":
        console.log("horizontais e verticais");
        break;
    default:
        console.log("Peça inexistente")
}

// 7.Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// .Porcentagem >= 90 -> A
// .Porcentagem >= 80 -> B
// .Porcentagem >= 70 -> C
// .Porcentagem >= 60 -> D
// .Porcentagem >= 50 -> E
// .Porcentagem < 50 -> F
// .O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.


const nota = 99;

if(nota >= 90){
    console.log("A")
}else if(nota >= 80){
    console.log("B")
}else if(nota >= 70){
    console.log("C")
}else if(nota >= 60){
    console.log("D")
}else if(nota >= 50){
    console.log("E")
}else if(nota < 50 && nota > 0){
    console.log("F")
}else if(nota < 0){
    console.log("Erro, encerrando programa.")
}

// 8.Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// .Bonus: use somente um if

const number1 = 10;
const number2 = 55;
const number3 = 13;

if(number1 % 2 == 0 || number2 % 2 == 0 || number3 % 2 == 0){
    console.log("true")
}else{
    console.log("false")
}

// 9.Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// .Bonus: use somente um if 

const number1 = 10;
const number2 = 55;
const number3 = 2;

if(number1 % 2 == 1 || number2 % 2 == 1 || number3 % 2 == 1){
    console.log("true")
}else{
    console.log("false")
}

// 10.Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// .Atente que, sobre o custo do produto, incide um imposto de 20%.
// .Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// .O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
//      .valorCustoTotal = valorCusto + impostoSobreOCusto
//      .lucro = valorVenda - valorCustoTotal (lucro de um produto)

const custoProduto = 20 + (10 * 0,2);
const valorDeVenda = 50;

let lucro = (valorDeVenda - custoProduto) * 1000;

if(valorDeVenda > 0 || custoProduto > 0){
    console.log(lucro)
}else{
    console.log("Erro")
}

// 11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% econst salarioBruto = 1000;

const salarioBruto = 1000;
let salarioBase;
let salarioLiquido;


if (salarioBruto <= 1556.94 && salarioBruto > 0){
    salarioBase = salarioBruto  - (salarioBruto * 0.08)
    console.log(salarioBase)
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92){
    salarioBase = salarioBruto - (salarioBruto * 0.09)
    console.log(salarioBase)
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82){
    salarioBase = salarioBruto - (salarioBruto * 0.11)
    console.log(salarioBase)
} else if (salarioBruto > 5189.82){
    salarioBase = salarioBruto - 570.88
    console.log(salarioBase)
} else {
    console.log("Salário não identificado")
}

if(salarioBase <= 1903.98 && salarioBase > 0){
    salarioLiquido = salarioBase;
    console.log(salarioLiquido);
} else if (salarioBase > 1903.98 && salarioBase <= 2826.66){
    salarioLiquido = salarioBase - ((salarioBase * 0.075) - 142.80);
    console.log(salarioLiquido);
} else if (salarioBase > 2826.66 && salarioBase <= 3751.05){
    salarioLiquido = salarioBase - ((salarioBase * 0.15) - 354.80);
    console.log(salarioLiquido);
} else if (salarioBase > 3751.05 && salarioBase <= 4664.68){
    salarioLiquido = salarioBase - ((salarioBase * 0.225) - 636.13);
    console.log(salarioLiquido);
} else{
    salarioLiquido = salarioBase - ((salarioBase * 0.275) - 869.36);
    console.log(salarioLiquido);
}