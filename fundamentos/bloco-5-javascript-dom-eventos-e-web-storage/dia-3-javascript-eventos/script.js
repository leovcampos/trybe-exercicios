function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
//item 1

  function createDays(){
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    for (let i = 0; i < dezDaysList.length; i += 1){
      const elementLi = document.createElement('li');
      const ulDays = document.querySelector('#days')
      
      elementLi.className = 'day';
      elementLi.innerText = dezDaysList[i];
      ulDays.appendChild(elementLi);

      if(dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31){
          elementLi.className += ' holiday';
      }
      if(dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25){
          elementLi.className += ' friday';
      }
    }
}
createDays();

//item 2

function holidays (string, id){
  const buttonHoliday = document.createElement('button');
  buttonHoliday.id = id;
  buttonHoliday.innerText = string;
  document.querySelector('.buttons-container').appendChild(buttonHoliday);
}
holidays ('Feriado', 'btn-holiday');

//item 3

const holiday = document.querySelectorAll('.holiday');
const buttonH = document.querySelector('#btn-holiday');

buttonH.addEventListener('click', function(){
  for(let i = 0; i < holiday.length; i += 1){
    if (holiday[i].style.backgroundColor === 'orange'){
      holiday[i].style.backgroundColor = 'rgb(238,238,238)';
    } else {
      holiday[i].style.backgroundColor = 'orange';
      }
    }
})

//item 4

holidays ('Sexta-feira', 'btn-friday');

//item 5

const fridays = document.querySelectorAll('.friday');
const buttonF = document.querySelector('#btn-friday');

buttonF.addEventListener('click', function(){
  for (let i = 0; i < fridays.length; i += 1){
    if(fridays[i].innerText === 'Sextou'){
      fridays[i].innerText = parseInt(fridays[i].previousElementSibling.innerText) + 1;
    } else {
      fridays[i].innerText = 'Sextou';
    }
  }
})

//item 6







