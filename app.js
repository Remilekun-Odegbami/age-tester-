// query selector to get the values of the html elements
const btn = document.querySelector('.submit');
const output = document.querySelector('.output');


const checkAge = (e) => {
    // this prevents the form from refreshing
    e.preventDefault();    
    
    let dateInput= document.querySelector('#date').value;
    // the value of dateInput is converted into a date object
    dateInput = new Date(dateInput);

    // the year of the converted date is extracted
    dateInput = dateInput.getFullYear(); 

    // the current date is gotten so as to be able to check the users age
    const birthDate = new Date();
    const birthYear = birthDate.getFullYear();
    const age = birthYear - dateInput;
    
    const oldEnough = () => `Since you are ${age} years old, you can drink.`
    const notOldEnough = () => `Hey!!! You are ${age} years old. Go take yoghurt instead.`

        // the html div displays these messages
         if (age  < 18) {
            output.innerHTML = notOldEnough();
        } else if (age >= 18){
            output.innerHTML = oldEnough();
        } 
        else if(!dateInput) {
            alert('Enter a date');
            output.innerHTML = '';
        }
        // console.log(birthYear);
        // console.log(dateInput);    
    
}

btn.addEventListener('click', checkAge);