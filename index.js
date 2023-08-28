const form = document.querySelector("form");
const card_1 = document.querySelector(".card-1");
const card_2 = document.querySelector(".card-2");
const emailInput = document.getElementById('email-input');
const confirm = document.getElementById('confirm-message');
const dismiss = document.getElementById('dismiss-message');
const validEmail = document.getElementById('valid-email');
const invalidEmail = document.getElementById('invalid-email');

// function for validatine email //

function validateEmail (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

form.addEventListener("submit", (e) => {

    e.preventDefault();

    let inputValue = emailInput.value;

    if (inputValue.length === 0) {
        invalidEmail.innerText = "Empty Field";
        invalidEmail.classList.add('error');
        emailInput.classList.add('error');
    } else {
        if(validateEmail(inputValue)) {
            invalidEmail.classList.remove('error');
            emailInput.classList.remove('error');
            card_1.classList.add('hide');
            card_2.classList.remove('hide');
            validEmail.innerText = inputValue;
        } else {
            invalidEmail.innerText = "Valid email required";
            invalidEmail.classList.add('error');
            emailInput.classList.add('error');
        }
    }
})

dismiss.addEventListener("click", (e) => {
    e.preventDefault();
    card_1.classList.remove("hide");
    card_2.classList.add("hide");
})
