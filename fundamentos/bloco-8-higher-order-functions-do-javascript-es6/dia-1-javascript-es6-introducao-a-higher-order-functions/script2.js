const numberCheck = (myNumber, number) => myNumber === number;

const lotery = (myNumber, callback) => {
    const number = Math.floor((Math.random() * 5) +1);

    return callback (myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
}

console.log(lotery(myNumber, numberCheck));