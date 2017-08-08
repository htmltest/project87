$(document).ready(function() {
    $('#home-family-video').each(function() {
        var curVideo = $(this)[0];
        $('#paper-family-play').click(function(e) {
            $('body').addClass('videoplay');
            curVideo.play();
            e.preventDefault();
        });
        curVideo.addEventListener('ended', function() {
            $('body').removeClass('videoplay');
        });
    });

    $(window).on('load resize scroll', function() {
        $('.home-family-play').css({'margin-top': -$(window).scrollTop()});
    });
});