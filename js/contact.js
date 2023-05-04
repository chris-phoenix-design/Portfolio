let contactForm = document.getElementById("contact_form");

async function submitForm(event) {
    debugger;
    event.preventDefault();
    let name = contactForm["name"];
    let phone = contactForm["phone"];
    let email = contactForm["email"];
    let subject = contactForm["subject"];
    let message = contactForm["message"];

    var recaptcharesponse = grecaptcha.getResponse();
    if (recaptcharesponse.length != 0) {

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

        let response = await fetch('', options);
        if (response.ok) {
            contactForm.reset();
        } else {
            contactForm.reset();
        }

    }
}


contactForm.addEventListener("submit", submitForm);