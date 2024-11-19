// Asegúrate de que el código se ejecute después de que el DOM se haya cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtén el contenedor del chatbot y el botón de cerrar
    const chatbotTrigger = document.getElementById('chatbotTrigger'); // Contenedor del avatar y el texto
    const chatbotWindow = document.getElementById('chatbotWindow');
    const closeChatbotBtn = document.getElementById('closeChatbot');

    // Mostrar el chatbot cuando se hace clic en el contenedor
    chatbotTrigger.addEventListener('click', function() {
        chatbotWindow.style.display = 'block'; // Muestra la ventana del chatbot
        chatbotTrigger.style.display = 'none'; // Oculta el contenedor de ayuda
    });

    // Cerrar el chatbot cuando se hace clic en la "X"
    closeChatbotBtn.addEventListener('click', function() {
        console.log('Cerrando el chatbot'); // Verifica que esta línea se ejecute
        chatbotWindow.style.display = 'none'; // Oculta la ventana del chatbot
        chatbotTrigger.style.display = 'flex'; // Muestra el contenedor de ayuda
    });

    // Funcionalidad para el menú de pestañas
    const tabs = document.querySelectorAll('.tab'); // Selecciona todas las pestañas
    const tabItems = document.querySelectorAll('.tab-item'); // Selecciona todos los elementos de contenido de las pestañas

    // Agrega el evento click a cada pestaña
    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault(); // Evita el comportamiento predeterminado del enlace

            // Remueve la clase "active" de todas las pestañas
            tabs.forEach(t => t.classList.remove('active'));
            tabItems.forEach(item => item.classList.remove('active'));

            // Agrega la clase "active" a la pestaña seleccionada
            tab.classList.add('active');

            // Muestra el contenido correspondiente
            const target = this.getAttribute('data-tab');
            document.getElementById(target).classList.add('active');
        });
    });

    // Activa la primera pestaña por defecto
    if (tabs.length > 0) {
        tabs[0].click(); // Simula un clic en la primera pestaña para activarla
    }

    // Verifica si los elementos se seleccionan correctamente
    console.log(chatbotTrigger, chatbotWindow, closeChatbotBtn);
});
document.getElementById('closeChatbot').onclick = function() {
    document.getElementById('chatbotWindow').style.display = 'none';
    resetChatbot(); // Reiniciar el chatbot al cerrar
};

function showContent(option) {
    const content = document.getElementById('content');
    const optionsList = document.getElementById('optionsList');
    const backButton = document.getElementById('backButton');

    optionsList.style.display = 'none'; // Ocultar opciones
    backButton.style.display = 'block'; // Mostrar botón de volver

    switch (option) {
        case 'opcion1':
            content.innerHTML = "<h3>Contacto</h3><p>Contacto: vin.promocion@toluca.tecnm.mx</p><p>Teléfono: 722 208 72 40 o 722 208 72 00 ext. 2221 </p><p>Ubicación: Edificio K, cubículos 9 y 10.</p>";
            break;
        case 'opcion2':
            content.innerHTML = "<h3>Preguntas Frecuentes</h3><p>Vuelva a leer los pasos 1, 2, 3, 4, 5, 6 y 7.</p><p>Si aún queda duda, volver a leerlos!!!!</p>";
            break;
        case 'opcion3':
            // Aquí agregamos el contenido con el ícono del video que redirige al video
            content.innerHTML = `
                <h3>Video 1:</h3>
                <p>Inicio del PR </p>  
                
                <div class='video-icon-container'>              
                <a href="https://www..com/video" target="_blank">
                    <img src="imagenes/VIDEO.png"  style="width: 40px; height: 40px; cursor: pointer;">
                </a>
                </div>
                <h3>Video 2:</h3>
                <p>Solicitud, Documentos y Procesos </p> 

                <div class='video-icon-container'>       
               
                <a href="https://www..com/video" target="_blank">
                    <img src="imagenes/VIDEO.png"  style="width: 40px; height: 40px; cursor: pointer;">
                </a>
                </div>

            `;
            break;
        case 'opcion4':
            content.innerHTML = `
            <h3>Interactivo</h3>

            <div class='video-icon-container'>
            <a href="https://prezi.com/p/edit/2b8heiln8uuh/">
                <img src="imagenes/presentacion.png"  style="width: 40px; height: 40px; cursor: pointer;">
            </a>
           </div>
            <h3>Pasos</h3>
            <div class='video-icon-container'>
            <a href="https://www.canva.com/design/DAGTIokftmQ/EC6sLAhTCuCBj_Yl9462bw/edit" target="_blank">
                <img src="imagenes/presentacion.png"  style="width: 40px; height: 40px; cursor: pointer;">
            </a>
           </div>
            
            
        
        `;            
        break;
    }

    content.style.display = 'block'; // Mostrar contenido
}

function goBack() {
    document.getElementById('content').style.display = 'none'; // Ocultar contenido
    document.getElementById('optionsList').style.display = 'block'; // Mostrar opciones
    document.getElementById('backButton').style.display = 'none'; // Ocultar botón de volver
}

function resetChatbot() {
    goBack(); // Regresar a las opciones al cerrar
}
// Mostrar/Ocultar el primer PDF y su información
document.getElementById('showPdfButton').addEventListener('click', function() {
    const pdfContainer1 = document.getElementById('pdfContainer1');
    const pdfViewer1 = pdfContainer1.querySelector('.pdf-viewer');
    const additionalInfo1 = pdfContainer1.querySelector('.additional-info');

    if (pdfViewer1.style.display === 'none') {
        pdfViewer1.style.display = 'block';  // Muestra el PDF
        additionalInfo1.style.display = 'block';  // Muestra la información adicional
    } else {
        pdfViewer1.style.display = 'none';  // Oculta el PDF
        additionalInfo1.style.display = 'none';  // Oculta la información adicional
    }
});

// Mostrar/Ocultar el segundo PDF y su información
document.getElementById('showPdfButton2').addEventListener('click', function() {
    const pdfContainer2 = document.getElementById('pdfContainer2');
    const pdfViewer2 = pdfContainer2.querySelector('.pdf-viewer');
    const additionalInfo2 = pdfContainer2.querySelector('.additional-info');

    if (pdfViewer2.style.display === 'none') {
        pdfViewer2.style.display = 'block';  // Muestra el PDF
        additionalInfo2.style.display = 'block';  // Muestra la información adicional
    } else {
        pdfViewer2.style.display = 'none';  // Oculta el PDF
        additionalInfo2.style.display = 'none';  // Oculta la información adicional
    }
});
