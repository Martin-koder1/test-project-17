// Submit knappen
const submitBtn = document.querySelector('#submit-btn');

//personalia Elementer
const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');

// land element
const countryInput = document.querySelector('#country');

function submit(event) {
    event.preventDefault();

    const name = nameInput.value;
    const surname = surnameInput.value;
    const country = countryInput.value;
}

submitBtn.addEventListener('click', submit);