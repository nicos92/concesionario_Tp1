document.addEventListener('DOMContentLoaded', () => {
    const contactoForm = document.querySelector('#contacto form');
    const cartelModal = document.getElementById('successModal');
    const btncerrarModal = successModal.querySelector('.close-button');

    if (contactoForm && successModal && btncerrarModal) {
        cartelModal.classList.remove('show');

        contactoForm.addEventListener('submit', (event) => {
            localStorage.setItem('showSuccessModal', 'true');

            cartelModal.classList.add('show');
        });

        btncerrarModal.addEventListener('click', () => {
            cartelModal.classList.remove('show');
        });


        cartelModal.addEventListener('click', (event) => {
            if (event.target === cartelModal) {
                cartelModal.classList.remove('show');
            }
        });

        if (localStorage.getItem('showSuccessModal') === 'true') {
            cartelModal.classList.add('show');
            localStorage.removeItem('showSuccessModal');
        }
        const okModalButton = cartelModal.querySelector('#okModalButton');

        if (okModalButton) {
            okModalButton.addEventListener('click', () => {
                cartelModal.classList.remove('show');
            });
        }
    }
});
