/* 1.Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
 . A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;
6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
7. Utilizando for , descubra qual o menor valor contido no array e imprima-o;
8. Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.*/

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

console.log(numbers);

for(let a = 0; a < numbers.length; a += 1){
    soma += numbers[a];
}
console.log(soma);

let media = 0;

for(let m = 0; m < numbers.length; m += 1){
    media = (soma += numbers[m]) / numbers.length
}
console.log(media)

if (media > 20){
    console.log("valor maior que 20")
}else {
    console.log("valor menor ou igual a 20")
}

let maior = 0;

for(let ma = 0; ma < numbers.length; ma += 1){
    if(numbers[ma] > maior){
        maior = numbers[ma]
    }
}
console.log(maior);

let impares = 0;

for (let im = 0; im < numbers.length; im += 1){
    if(numbers[im] % 2 === 1){
        impares += 1
    }
}

if(impares > 0){
    console.log(impares)
}else{
    console.log("nenhum valor ímpar encontrado")
}

let menor = numbers[0];

for(let me = 0; me < numbers.length; me += 1){
    if(numbers[me] < menor){
        menor = numbers[me]   
    }
}
console.log(menor);

let num = [];

for (let index = 0; index <= 25; index += 1){
    num.push(index);
}
console.log(num)

let divisao = [];

for (index = 0; index < num.length; index += 1){
    divisao.push(num[index] / 2)
}
console.log(divisao);*/