let contactForm = document.getElementById("message_form");

const submitForm = (event) => {

    event.preventDefault();
    grecaptcha.execute();
    let name = contactForm["name"].value;
    let phone = contactForm["phone"].value;
    let email = contactForm["email"].value;
    let subject = contactForm["subject"].value;
    let message = contactForm["message"].value;

    const params = {
        Name: name,
        Phone: phone,
        Subject: subject,
        Email: email,
        Message: message
    };
    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "https://localhost:7098",
            "Access-Control-Allow-Credentials": "true"
        },
        body: JSON.stringify(params)
    };


    // let form = new FormData();
    // form.append("name", name);
    // form.append("email", email);
    // form.append("Phone",  phone);
    // form.append("Subject", subject);    
    // form.append("message", message);
    // const options = {
    //     method: 'POST',
    //     body: form
    // };
    
let url = 'https://api-phoenix.azurewebsites.net/api/emailsender/ProfileContact';
    //url = 'https://localhost:7098/api/emailsender/ProfileContact';
    fetch(url, options)
        .then(res => {
            if (res.ok) {
                contactForm.reset();
            }
            });

   

}


contactForm.addEventListener("submit", submitForm);