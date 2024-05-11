$(document).ready(function () {
    $("#RDjson").click(function () {
        $.getJSON("RM_orarendfull.json", function (data) {
            $('#stg').html('<h2>MISKOLCI EGYETEM</h2>');
            data.forEach(function(course) {
                $('#stg').append('<p><b>Cím: </b></p>' + course.cim.code + ' ' + course.cim.city + ' ' + course.cim.street + '</p>' );
                $('#stg').append('<p><b>Telefonszámok: </b></p>');
                for(i=0; i<course["phone number"].length; i++){
                    $('#stg').append('<li>' + course["phone number"][i].type+' '+course["phone number"][i].number + '</li>');
                }
                $('#stg').append('<p><h3>MI Órarend 2024 tavasz</h3><ul>');
                $('#stg').append('<p><b>Kurzusnév: </b>' + course.kurzusnev + '</p>');
                $('#stg').append('<p><b>Oktató: </b>' + course.oktato + '</p>');
                $('#stg').append('<p><b>Szak: </b>' + course.szak + '</p>');
                $('#stg').append('<b>Időpont:</b><br>&nbsp;&nbsp;Nap:&nbsp;' + course.idopont.nap + "<br> &nbsp; &nbspTól: &nbsp;" + course.idopont.tol + "<br>&nbsp;&nbsp;Ig: &nbsp;" + course.idopont.ig + "<br");
                $('#stg').append('<p><b>Helyszín: </b>' + course.helyszin + '</p>');
                $('#stg').append('<br>')
                $('#stg').append('<hr>')
                $('#stg').append('<br>')
            });
        });
    });
});