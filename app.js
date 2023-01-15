// const honeyPot = document.querySelector('.my-form');


// if (honeyPot === undefin) return;



function sendMail() {

    var params = {
        name: document.getElementById('myName').value,
        email: document.getElementById('myEmail').value,
        message: document.getElementById('myMessage').value
    };
    const serviceID = 'service_kcezzzl';
    const templateID = 'template_kpsz1yl';






    emailjs
        .send(serviceID, templateID, params)
        .then(
            res => {

                document.getElementById('myName').value = '';
                document.getElementById('myEmail').value = '';
                document.getElementById('myMessage').value = '';
                const contact = document.querySelector('.contact-form-container');
                const msgSent = document.querySelector('.contact__message-sent');

                contact.style.display = "none";
                msgSent.style.display = "flex";

            })
        .catch((err) => console.log(err));
}


