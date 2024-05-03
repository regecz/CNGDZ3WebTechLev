<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>HTML5 űrlap - CNGDZ3</h1>

    <?php 
    
    echo ("<strong>Név: </strong>" . $_POST['nev'] . "<br><br>");

    echo ("<strong>PIN kód: </strong>" . $_POST['kod'] . "<br><br>");

    echo ("<strong>Gyümölcs: </strong>" . $_POST['gyumolcs'] . "<br><br>");

    echo ("<strong>Életkor: </strong>" . $_POST['eletkor'] . "<br><br>");
    
    echo ("<strong>Lábméret: </strong>" . $_POST['labmeret'] . "<br><br>");

    echo ("<strong>Önbizalom: </strong>" . $_POST['onbizalom'] . "<br><br>");
    
    ?>
    <a href="CNGDZ3_urlap.html">VISSZA</a>
    <br><br><br>
    <footer id="lablec" class="lablec">
        <p>Forrás: <a href="http://html5doctor.com/html5-forms-introduction-and-new-attributes" target="_blank">http://html5doctor.com/html5-forms-introduction-and-new-attributes</a></p>
        <p>Formátumok: <a href="http://html5pattern.com" target="_blank">http://html5pattern.com</a></p>
        <p>JavaScript REGEXP: <a href="http://www.w3schools.com/js/js_regecp.asp" target="_blank">http://www.w3schools.com/js/js_regecp.asp</a></p>
    </footer>
</body>
</html>