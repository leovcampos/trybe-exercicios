const buttonSubmit = document.querySelector('#button-submit');
const form = document.querySelector('#form');


function submit(e){
    e.preventDefault();
}
buttonSubmit.addEventListener('click', submit);


function submitVerification (){    
    const checkSumit = document.querySelector('#images-agree');
    checkSumit.addEventListener('change', () => {
        if (checkSumit.checked === true){
            return buttonSubmit.disabled = false;
        } else{
            buttonSubmit.disabled = true;
        }
    })
}
submitVerification();


function lengthValidation (){   
    form.addEventListener('submit', (e) => {
        const name = document.querySelector('#complete-name');
        const email = document.querySelector('#email');
        const textArea = document.querySelector('#text-area'); 
        e.preventDefault();

        if(name.value.length < 10 || name.value.length > 40){
            return alert('Board inválido!');
        }
        if(email.value.length < 10 || email.value.length > 50){
            return alert('Board inválido!');
        }
        if(textArea.value.length === '' || textArea.value.length > 500){
            return alert('Board inválido!');
        }
        return alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    })
}
lengthValidation();

