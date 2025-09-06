document.addEventListener('DOMContentLoaded', () => {
    const consultarButtons = document.querySelectorAll('.btn-consultar');
    const consultaTextarea = document.getElementById('form-consulta');
    const txtnombre = document.getElementById('form-nombre');

    if (consultarButtons.length > 0 && consultaTextarea) {
        consultarButtons.forEach(button => {
            button.addEventListener('click', async (event) => {
                const content = event.target.closest('.card-content, .promocion-content');
                if (content) {
                    const titleElement = content.querySelector('h3.card-title');
                    const descriptionElements = content.querySelectorAll('.card-description, .card-slogan');
                    
                    if (titleElement && descriptionElements.length > 0) {
                        const titleText = titleElement.innerText.trim();
                        
                        let descriptionText = '';
                        descriptionElements.forEach(element => {
                            descriptionText += element.innerText.trim() + '\n';
                        });
                        
                        let message = `Consulta sobre "${titleText}":

${descriptionText.trim()}`; 
                        
                        consultaTextarea.value = message;
                        setTimeout(() => {
                            txtnombre.focus();
                        }, 100);
                        
                    }
                }
            });
        });
    }
});
