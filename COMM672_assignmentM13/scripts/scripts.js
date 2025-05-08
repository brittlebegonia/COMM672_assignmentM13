// BACK TO TOP //
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            $('#backToTopBtn').fadeIn();
        } else {
            $('#backToTopBtn').fadeOut();
        }
    })
})
// ACCORDIAN //
$(document).ready(function() {
    $('.accordion-header').click(function() {
        if ($(this).next('.accordion-content').is(':visible')) {
            $(this).next('.accordion-content').slideUp();
        } else {
            $('.accordion-content').slideUp();
            $(this).next('.accordion-content').slideDown();
        }
    });
})
// MODAL //
$(document).ready(function() {
    //Open Modal
    $('.about-block').click(function() {
        var targetModal = $(this).data("target");
        $(targetModal).show();
    })

    //Close Modal
    $('.close-btn').click(function() {
        $(this).closest('.modal').hide();
    })
})