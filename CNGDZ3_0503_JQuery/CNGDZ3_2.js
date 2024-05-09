$(document).ready(function(){
    $("#K1").click(function(){
        $("ul:first li:first").hide();
        $("ul:eq(1) li:first").hide();
    });

    $("#K2").click(function(){
        $("ul:first li:first").hide();
        $("ul:eq(1) li:first").hide();
        $("#K2").hide();
        $("a").attr("href", "");
    });

    $("#K3").click(function(){
        $("h2").hide();
        $("ul:first li:first").hide();
        $("ul:eq(1) li:first").hide();
        $("a").attr("href", "");
    });

    $("#K4").click(function(){
        $("ul:first li:first").hide();
        $("ul:eq(1) li:first").hide();
        $("a").text("");
        $("a").attr("href", "");
    });

    $("#K5").click(function(){
        $("ul:first li:first").hide();
        $("ul:eq(1) li:first").hide();
        $("a").attr("href", "");
        $("tr:odd").hide();
    });
});