emailjs.init('V6eYnsGn04wkPkfdj');

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    emailjs.sendForm('service_hit68cn', 'template_8uvocse', this)
        .then(() => {
            alert('Email sent!');
        }, (error) => {
            alert('Failed to send email. Error: ' + JSON.stringify(error));
        });
});