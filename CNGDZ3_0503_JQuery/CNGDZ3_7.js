$(document).ready(function () {
    $("#add-text").click(function(){
        $('#doboz').append('Mérnökinformatikus');
    });

    $("#button").click(function(){
        $(this).prepend('<b>MI </b>');
    });

    $("#new-button").click(function(){
        $("a").after('<button>ME GEIK-MI</button>')
    });

    $("#header").click(function(){
        if ($("#subtitle").length) {
            $("#subtitle").before('<h2 id="title">jQuery feladat</h2>');
        } else {
            $("button").first().before('<h2 id="title">jQuery feladat</h2>');
        }
    });

    $("#add-subtitle").click(function(){
        if ($("#title").length) {
            $("#title").after('<h3 id="subtitle">HTML -Add elements</h3>');
        }else{
            $("button").first().before('<h3 id="subtitle">HTML -Add elements</h3>');
        }
    });

    $("#form-header").click(function(){
        $("form").prepend('<h2 id="form-title">ŰRLAP-CNGDZ3</h2>');
    })
});