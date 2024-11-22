// Submit knappen
const submitBtn = document.querySelector('#submit-btn');

//personalia Elementer
const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');

//hobby Eleementer
const fiskeElement = document.querySelector('#fiske')
const gamingElement = document.querySelector('#gaming')
const kodingElement = document.querySelector('#koding')

// land element
const countryInput = document.querySelector('#country');

function submit(event) {
    event.preventDefault();

    const name = nameInput.value;
    const surname = surnameInput.value;
    const country = countryInput.value;

submitBtn.addEventListener('click', submit);

const hobbyArray [];

if (fiskeElement.checked === true) {
    hobbyArray.push(fiskeElement.value)
}
if {gamingElement.checked === true} {
    hobbyArray.push(gamingElement.value)
}
if (kodingElement.checked === true) {
    hobbyArray.push(kodingElement.value)
}

}