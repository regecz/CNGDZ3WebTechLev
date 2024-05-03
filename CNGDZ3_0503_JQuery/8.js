$(document).ready(function () {
    $("#RDjson").click(function () {
        $.getJSON("RM_orarend.json", function (data) {
            
            $('#stg').html('<h2>MISKOLCI EGYETEM</h2>');

            $('#stg').append('<p><b>Cím: </b></p>' + data.cim.code + ' ' + data.cim.city + ' ' + data.cim.street + '</p' );

            $('#stg').append('<p><b>Telefonszámok: </b></p>');

                for(i=0; i<["phone number"].length; i++){
                    $('#stg').append('<li>' + data["phone number"][i].type+' '+data["phone number"][i].number + '</li>');
                }
            
            $('#stg').append('<p><h3>MI Órarend 2024 tavasz</h3><ul>');

            $('#stg').append('<p><b>Kurzusnév: </b>' + data.kurzusnev + '</p>');
            $('#stg').append('<p><b>Oktató: </b>' + data.oktato + '</p>');
            $('#stg').append('<p><b>Szak: </b>' + data.szak + '</p>');
            $('#stg').append('<b>Időpont:</b><br>&nbsp;&nbsp;Nap:&nbsp;' + data.idopont.nap + "<br> &nbsp; &nbspTól: &nbsp;" + data.idopont.tol + "<br>&nbsp;&nbsp;Ig: &nbsp;" + data.idopont.ig + "<br");

            $('#stg').append('<p><b>Helyszín: </b>' + data.helyszin + '</p>');

        });
    });
});