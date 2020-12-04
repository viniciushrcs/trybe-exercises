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
  
let dezDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let dezDaysList = document.querySelector('#days');

function addDays(daysArray){
    for (let index in daysArray){
        let day = daysArray[index];
        let daysList = document.createElement('li');
        daysList.innerHTML = day;
        daysList.className = 'day'
        dezDaysList.appendChild(daysList);

        if (day === 24 || day === 31){
            daysList.className += ' holiday'
        } else if (day === 4 || day === 11 || day === 18) {
            daysList.className += ' friday'
        } else if (day === 25){
            daysList.className += ' holiday friday'
        }
    }
}
addDays(dezDays);
