$(document).ready(function () {
    $("h2").mouseleave(function () { 
        alert("A kurzor elhagyta a fejléc szövegéről!");
    });
    
    $("p").first().click(function () {
        $("p").first().hide();
    }); 

    $("p").last().dblclick(function () {
        $("p").last().hide();
    });

    $("button").mouseover(function () { 
        alert("A gomb felé húzta az egeret");
    });

    $("input").mousemove(function () { 
     $(this).css("border-color", "yellow");   
    });

    $("input").mouseleave(function () { 
        $(this).css("border-color", "blue");
    });

    $("input").focus(function () { 
        $(this).css("background-color", "red");
    });

    $("input").blur(function () { 
        $(this).css("background-color", "");
    });
});