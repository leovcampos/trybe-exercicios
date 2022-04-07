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

