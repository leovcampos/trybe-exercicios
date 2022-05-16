const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (right_answers, student_answers) => {
    if (right_answers === student_answers) {
    return 1;
    }
    if (right_answers === 'N.A') {
    return 0;
    }   
    return -0.5
};

const total = (right_answers, student_answers, action) => {
    let cont = 0;
    for(let i = 0; i < right_answers.length; i += 1){
        const actionReturn = action(right_answers[i], student_answers[i]);
        cont += actionReturn;
    }
    return `Resultado: ${cont} pontos!`
}

console.log(total(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));