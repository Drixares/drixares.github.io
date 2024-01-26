const formName = document.getElementById('formName');
const formEmail = document.getElementById('formEmail');
const formMessage = document.getElementById('formMessage');
const submitButton = document.querySelector('.formBtn');
const submitButtonText = document.querySelector('.formBtn .button--text')
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const templateParams = {
        name: formName.value,
        email: formEmail.value,
        message: formMessage.value,
    }

    submitButton.classList.add('loading');

    // these IDs from the previous steps
    emailjs.send('contact_service', 'contact_form', templateParams)
    .then(function() {
        submitButton.classList.remove('loading');
        submitButton.classList.add('success');
        submitButtonText.innerHTML = "Email envoyé !"
        form.reset()

    }, function(error) {
            submitButton.classList.remove('loading');
            submitButton.classList.add('error');
            submitButtonText.innerHTML = `Erreur : ${error.status}`
        });
    
})

