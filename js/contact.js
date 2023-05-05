let contactForm = document.getElementById("message_form");

const submitForm = (event) => {

    event.preventDefault();
    grecaptcha.execute();
    let name = contactForm["name"];
    let phone = contactForm["phone"];
    let email = contactForm["email"];
    let subject = contactForm["subject"];
    let message = contactForm["message"];

    const params = {
        Name: name.value,
        Phone: phone.value,
        Subject: subject,
        Email: email.value,
        Message: message.value
    };
    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(params)
    };

    fetch('https://localhost:7098/api/emailsender/ProfileContact', options)


    contactForm.reset();

}


contactForm.addEventListener("submit", submitForm);