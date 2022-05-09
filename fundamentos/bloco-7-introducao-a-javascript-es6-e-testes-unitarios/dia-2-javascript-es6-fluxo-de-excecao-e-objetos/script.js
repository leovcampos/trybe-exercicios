// function sum() {
//     const value1 = document.getElementById('value1').value;
//     const value2 = document.getElementById('value2').value;
//     const result = parseInt(value1) + parseInt(value2);
//     document.getElementById('result').innerHTML = `Resultado: ${result}`;
//     document.getElementById('value1').value = '';
//     document.getElementById('value2').value = '';
//   }


const verifyImputs = (value1, value2) => {
    if ((value1 === '' || value2 === '') || (!isNaN(value1) || !isNaN(value2))){
        throw new Error('Digite dois números.')
    }
}

const sum = () => {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    const p = document.getElementById('result');
    try {
        const result = parseInt(value1) + parseInt(value2);
        verifyImputs(value1, value2);
        p.innerText = `Resultado: ${result}`;
        return p;
    } catch (error) {
    p.innerHTML = error.message;
    throw error.message;
    }
}

window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', sum);
}