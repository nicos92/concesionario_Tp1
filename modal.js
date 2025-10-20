document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('#contacto form'); 
    const successModal = document.getElementById('successModal');
    const closeModalButton = successModal.querySelector('.close-button'); 

    if (contactForm && successModal && closeModalButton) {
        successModal.classList.remove('show');

        contactForm.addEventListener('submit', (event) => {
            localStorage.setItem('showSuccessModal', 'true');

            successModal.classList.add('show');
        });

        closeModalButton.addEventListener('click', () => {
            successModal.classList.remove('show');
        });


        successModal.addEventListener('click', (event) => {
            if (event.target === successModal) {
                successModal.classList.remove('show');
            }
        });

        if (localStorage.getItem('showSuccessModal') === 'true') {
            successModal.classList.add('show');
            localStorage.removeItem('showSuccessModal'); 
        }
        const okModalButton = successModal.querySelector('#okModalButton');

if (okModalButton) {
    okModalButton.addEventListener('click', () => {
        successModal.classList.remove('show');
    });
}
    }
});
