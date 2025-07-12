document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('#contacto form'); // Assuming the form is within the footer with id 'contacto'
    const successModal = document.getElementById('successModal');
    const closeModalButton = successModal.querySelector('.close-button'); // Assuming the close button has class 'close-button'

    if (contactForm && successModal && closeModalButton) {
        // Ensure the modal is hidden when the page loads using the 'show' class
        successModal.classList.remove('show');

        contactForm.addEventListener('submit', (event) => {
            //event.preventDefault(); // Prevent the default form submission
            localStorage.setItem('showSuccessModal', 'true');

            // In a real application, you would perform the form submission
            // here (e.g., using fetch or XMLHttpRequest) and only show the modal
            // on a successful response.

            // For now, just display the modal assuming success by adding the 'show' class
            successModal.classList.add('show');
        });

        closeModalButton.addEventListener('click', () => {
            // Hide the modal by removing the 'show' class
            successModal.classList.remove('show');
        });


        // Optional: Close the modal if the user clicks outside of the modal content
        successModal.addEventListener('click', (event) => {
            if (event.target === successModal) {
                // Hide the modal by removing the 'show' class
                successModal.classList.remove('show');
            }
        });

        // Check localStorage on page load and show modal if flag is set
        if (localStorage.getItem('showSuccessModal') === 'true') {
            successModal.classList.add('show');
            localStorage.removeItem('showSuccessModal'); // Remove the flag so it doesn't show again on subsequent loads
        }
    }
});
