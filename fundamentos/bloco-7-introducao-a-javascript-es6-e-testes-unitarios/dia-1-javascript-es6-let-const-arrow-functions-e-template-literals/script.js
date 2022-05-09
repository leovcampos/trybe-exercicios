// Exercicio parte | número 1

const testingScope = (escopo) => {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo!`
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
  }

  testingScope(true);

// Exercicio parte | número 2

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];
  //oddsAndEvens.sort((a, b) => a -b);
  console.log(`A ordem crescente deste array é ${oddsAndEvens.sort((a, b) => a -b)}`);

// Exercicio parte || número 1

const fatorial = n => n > 1 ? n * fatorial(n - 1) : n;
console.log(fatorial(3));

// Exercicio parte || número 2

longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

let bigger = ''

longestWord.split(' ').forEach(word => {
  if
})