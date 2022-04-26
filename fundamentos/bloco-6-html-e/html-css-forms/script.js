const buttonSubmit = document.querySelector('#button-submit');

function submit(e){
    e.preventDefault();
}
buttonSubmit.addEventListener('click', submit);