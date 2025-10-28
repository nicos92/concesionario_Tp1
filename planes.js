document.addEventListener('DOMContentLoaded', () => {
    const consultarBonotes = document.querySelectorAll('.btn-consultar');
    const consultaTextarea = document.getElementById('form-consulta');
    const txtnombre = document.getElementById('form-nombre');

    if (consultarBonotes.length > 0 && consultaTextarea) {
        consultarBonotes.forEach(button => {
            button.addEventListener('click', async (event) => {
                const contenido = event.target.closest('.card-content, .promocion-content');
                if (contenido) {
                    const titulo = contenido.querySelector('h3.card-title');
                    const descripcion = contenido.querySelectorAll('.card-description, .card-slogan');

                    if (titulo && descripcion.length > 0) {
                        const textoTitulo = titulo.innerText.trim();

                        let descriptionText = '';
                        descripcion.forEach(element => {
                            descriptionText += element.innerText.trim() + '\n';
                        });

                        let msj = `Consulta sobre "${textoTitulo}": ${descriptionText.trim()}`;

                        consultaTextarea.value = msj;
                        setTimeout(() => {
                            txtnombre.focus();
                        }, 100);
                        
                    }
                }
            });
        });
    }
});
