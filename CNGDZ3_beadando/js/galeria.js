$(document).ready(function () {
    $('.controller.play').hide();
    $('.controller.play').click(function () {
        if ($('#video').get(0).paused) {
            $('#video').get(0).play();
            $('.controller.play').hide();
            $('.controller.pause').show();
        }
    });

    $('.controller.pause').click(function () {
        if (!$('#video').get(0).paused) {
            $('#video').get(0).pause();
            $('.controller.play').show();
            $('.controller.pause').hide();
        }
    });

    $('#range-container').css("width", "0px");
    $('#controller-container').mouseenter(function () {
        $('#range-container').stop();
        $('#range-container').animate({
            width: "10vw"
        });
    });

    $('.controller.volume.unmute').hide();
    $('.controller.volume').click(function () {
        if ($('#video').get(0).muted) {
            $('#video').get(0).muted = false;
            $('.controller.volume.mute').hide();
            $('.controller.volume.unmute').show();
            $('#video').get(0).volume = ($('#volume-range').val() / 100);
        } else {
            $('#video').get(0).muted = true;
            $('.controller.volume.mute').show();
            $('.controller.volume.unmute').hide();
        }
    });

    $('#controller-container').mouseleave(function () {
        $('#range-container').stop();
        $('#range-container').animate({
            width: "0px"
        });
    });

    $('#volume-range').on('input', function () {
        $('#video').get(0).muted = false;
        $('.controller.volume.mute').hide();
        $('.controller.volume.unmute').show();
        $('#video').get(0).volume = ($('#volume-range').val() / 100);
    });

    $('#video').on('ended', function () {
        $('.controller.play').show();
        $('.controller.pause').hide();
    });

    /* Képek */

    $('.img-slide2, .img-slide3, .img-slide4').hide();
    $('.status.1').css("background-color", "#000");

    let imgCounter = 1;
    let intervalId;

    function nextImage() {
        $(`.img-slide${imgCounter}`).fadeOut();
        $(`.status.${imgCounter}`).css("background-color", "#A8A8A8");
        imgCounter++;
        if (imgCounter > 4) {
            imgCounter = 1;
        }
        $(`.img-slide${imgCounter}`).fadeIn();
        $(`.status.${imgCounter}`).css("background-color", "#000");
    };

    intervalId = setInterval(nextImage, 5000);

    $('.arrow-right').click(function () {
        nextImage();
        clearInterval(intervalId);
        intervalId = setInterval(nextImage, 5000);
    });

    $('.arrow-left').click(function () {
        $(`.img-slide${imgCounter}`).fadeOut();
        $(`.status.${imgCounter}`).css("background-color", "#A8A8A8");
        imgCounter--;
        if (imgCounter < 1) {
            imgCounter = 4;
        }
        $(`.img-slide${imgCounter}`).fadeIn();
        $(`.status.${imgCounter}`).css("background-color", "#000");
        clearInterval(intervalId);
        intervalId = setInterval(nextImage, 5000);
    });

});