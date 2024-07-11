$(document).ready(function(){
    // para que funcionen los tooltips de boostrap
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    // funcion para al hacer click en los links (a) baje lnetamente (scroll smoth)
    $("a").on('click', function(event) {
        
        if (this.hash !== "") {
            
            event.preventDefault();

            
            var hash = this.hash;

            
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
               
                window.location.hash = hash;
            });
        } 
    });

    //hace que al presionar el boton enviar correo me aparezca una alerta con el mensaje el correo fue enviado exiotosamente...
    $("#enviarCorreo").click(function() {
        alert("El correo fue enviado correctamente.");
    });
});