$(document).ready(function () {
    $("#animation-start").click(function () { 
        $("#negyzet").animate({
            marginLeft: '+=300px',
            width: '+=150px',
            fontSize: '30pt',
        } , 1000)
        .animate({
            marginTop: '+=200px',
            height: '+=100px',
            width: '-=250px',
        }, 1000)
        .animate({
            marginLeft: '-=300px',
            opacity: '0.4',
        }, 1000)
        .animate({
            marginTop: '-=200px',
            opacity: '1',
            fontSize: '12pt',
            width: '+=100px',
            height: '-=100px',
        }, 1000, function () {
            alert("VÉGE!");
        });
    });

    $("#p-hide").click(function () { 
        $("p").hide(function(){
            alert("Bekezdések elrejtve!");
        });
    });

    $('#toggle').click(function () { 
        $('#negyzet').slideUp().slideDown().animate({
            marginLeft: '+=300px',
        }, 1000);
    });
});