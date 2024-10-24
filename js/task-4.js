const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const elements = event.currentTarget.elements;

    const userData = {
        email: elements.email.value,
        password: elements.password.value
    }
    
    event.target.reset();
    console.log(userData);
}

