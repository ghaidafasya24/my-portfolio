const btn = document.getElementById('button');

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'service_2dlij3r';
    const templateID = 'template_cw7cj7r';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Send Email';
            alert('Email berhasil terkirim!');

            // Clear the form inputs after successful send
            document.getElementById('contact-form').reset();
        }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
        });
});
