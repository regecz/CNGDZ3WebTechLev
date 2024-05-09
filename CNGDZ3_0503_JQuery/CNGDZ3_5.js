$(document).ready(function () {
    $("input").focus(function () { 
        $(this).css("background-color", "aqua");
    });



    $("button").click(function (event) {
        event.preventDefault();

        var a = parseInt($("#A").val());
        var b = parseInt($("#B").val());
        var result = 0;

        switch ($("input[name='operation']:checked").attr('id')) {
            case 'multiply':
                result = a * b;
                break;

            case 'divide':
                result = a / b;
                break;

            case 'add':
                result = a + b;
                break; 
            
            case 'subtract':
                result= a - b;
                break;
        
            default:
                alert("Nem választottál műveletet!");
        }
        $("#result").html(`<b>${result}</b>`);
    });
});