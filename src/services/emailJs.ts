import emailJs from '@emailjs/browser';
const publicKey = import.meta.env.PUBLIC_KEY_CONTACT_FORM

emailJs.init(publicKey);

const form = document.getElementById('contact-form') as HTMLFormElement;

if (form) {

    form.addEventListener('submit', async (element) => {
        element.preventDefault();

        const data = new FormData(form);
        const nameForm = data.get('name')?.toString();
        const emailForm = data.get('email')?.toString();
        const phoneForm = data.get('phone')?.toString();
        const messageForm = data.get('message')?.toString();

        const templateParams = {
            name: nameForm,
            email: emailForm,
            phone: phoneForm,
            message: messageForm,
        }

        emailJs.send('Contact_Web_Service', 'template_oxkq6sd', templateParams)
        .then(
            (response) => {
                if (response.status === 200) {
                    console.log('SUCCESS!', response.status, response.text);
                    form.reset();
                }
            }
        )
        .catch (
            (error) => {
                console.log('FAILED...', error);
            }
        )

    })

}


