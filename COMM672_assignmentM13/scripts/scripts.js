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
// I felt like the original way without the closure made this run smoother, maybe I needed to add something to make it smoother, like the transitions? I thin kI got rid of it in CSS, it didn't seem to add anything but I could be wrong :[ //
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
