$(document).ready(function () {
    $("#p-hide").click(function () { 
        $("p").hide();
    });

    $("#p-show").click(function () {
        $("p").show();
    });

    $("#p-toggle").click(function () {
        $("p").toggle();
    });
    
    $("#opacity-low").click(function () { 
        $("form").css("opacity", "0.1")
    });

    $("#opacity-mid").click(function () { 
        $("form").css("opacity", "0.5")
    });

    $("#opacity-higher").click(function () { 
        $("form").css("opacity", "0.8")
    });

    $("#form-hide").click(function () {
        $("form").hide();
    });

    $("#form-show").click(function () {
        $("form").show();
    });

    $("#form-toggle").click(function () {
        $("form").toggle();
    });
});