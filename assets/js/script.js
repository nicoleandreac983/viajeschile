$(document).ready(function(){
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

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
});