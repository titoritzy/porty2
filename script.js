$(document).ready(function() {
    // Menu Toggle Function
    $('#menu').click(function(){
        $('header').toggleClass('toggle');
    });

    // Window Scroll Function
    $(window).on('scroll', function(){
        $('header').removeClass('toggle');

        if ($(window).scrollTop() > 0) {
            $('.top').show();
        } else {
            $('.top').hide();
        }
    });

    // Smooth Scrolling to Anchors
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear');
    });

    // Form Submission Handling
    $('form').on('submit', function(e) {
        e.preventDefault();

        // Simulate submission success (replace this with your actual submission logic)
        // For demonstration purposes, we'll just show a message after 2 seconds
        setTimeout(function() {
            $('#submission-message').text('Submission successful!');
        }, 2000);
    });
});
