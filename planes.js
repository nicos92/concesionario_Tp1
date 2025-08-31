document.addEventListener('DOMContentLoaded', () => {
    const consultarButtons = document.querySelectorAll('.btn-consultar');
    const consultaTextarea = document.getElementById('form-consulta');

    if (consultarButtons.length > 0 && consultaTextarea) {
        consultarButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const cardContent = event.target.closest('.card-content');
                if (cardContent) {
                    const titleElement = cardContent.querySelector('h3.card-title');
                    const descriptionElement = cardContent.querySelector('.card-description, .card-slogan');
                    
                    if (titleElement && descriptionElement) {
                        const titleText = titleElement.innerText.trim();
                        const descriptionText = descriptionElement.innerText.trim();
                        
                        let message = `Consulta sobre "${titleText}":\n\n${descriptionText}`;
                        
                        consultaTextarea.value = message;
                    }
                }
            });
        });
    }
});