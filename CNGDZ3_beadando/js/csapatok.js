$(document).ready(function () {

    function closeTeam (){
        $(".icon-container").click(function () {
            $("#team-content").fadeOut(100, function () {
                $(this).remove();
            });
        });
    };
    
    function animatePilots(){
        $(".team-member").first().mouseenter(function () {
            $(this).animate({
                scale: '1.2',
                marginBottom: '40px',
                marginTop: '-40px'
            }, 500);
            $(".info").first().slideDown(500);
        });
        $(".member-container").first().mouseleave(function () {
            $(".team-member").first().animate({
                scale: '1',
                marginBottom: '0px',
                marginTop: '0px'
            }, 500);
            $(".info").first().slideUp(500);
        });
    
        $(".team-member").last().mouseenter(function () {
            $(this).animate({
                scale: '1.2',
                marginBottom: '40px',
                marginTop: '-40px'
            }, 500);
            $(".info").last().slideDown(500);
        });
        $(".member-container").last().mouseleave(function () {
            $(".team-member").last().animate({
                scale: '1',
                marginBottom: '0px',
                marginTop: '0px'
            }, 500);
            $(".info").last().slideUp(500);
        });
    };

    /* Mercedes csapat */
    
    $(".team-btn").first().click(function () {
        $("body").append(
            `<div id="team-content">
                <div class="member-container">
                    <figure>
                        <img class="team-member" src="kepek/csapattagok/hamilton.png" alt="Lewis Hamilton">
                        <figcaption class="member-caption"><h3>Lewis Hamilton</h3></figcaption>
                    </figure>
                    <article class="info">Lewis Hamilton a Forma-1 történetének egyik legsikeresebb és legkarizmatikusabb versenyzője. 1985. január 7-én született az angliai Stevenage-ben, és karrierje során számos rekordot megdöntött. Pályafutása 2007-ben kezdődött a McLaren csapatnál, ahol már az első évében második helyen végzett a világbajnokságban. 2008-ban megszerezte első világbajnoki címét, ezzel ő lett a legfiatalabb világbajnok abban az időben. Hamilton 2013-ban csatlakozott a Mercedes csapathoz, ahol karrierje igazán szárnyra kapott.</article>
                </div>
                <div class="member-container">
                    <figure>
                        <img class="team-member" src="kepek/csapattagok/russell.png" alt="George Russell">
                        <figcaption class="member-caption"><h3>George Russell</h3></figcaption>
                    </figure>
                    <article class="info">George Russell egy fiatal tehetséges brit autóversenyző, aki a Forma-1 világában gyorsan szerzett elismerést. 1998. február 15-én született a norfolki King's Lynn-ben. Karrierjét a gokartozásban kezdte, ahol számos bajnoki címet nyert, mielőtt a formaautós sorozatokban folytatta volna.2018-ban megnyerte a FIA Formula-2 bajnokságot, ami kiemelte őt a fiatal tehetségek közül, és lehetőséget biztosított számára a Forma-1-ben való bemutatkozásra. </article>
                </div>
                <div class="icon-container">
                    <img class="close-icon" src="kepek/icons/x-icon.png" alt="close">
                </div>
            </div>`
        );
        $(".info").hide();

        $("#team-content").hide().fadeIn(1000);

        closeTeam();
        animatePilots();
    });

    /* RedBull csapat */

    $(".team-btn:eq(1)").click(function () {
        $("body").append(
            `<div id="team-content">
                <div class="member-container">
                    <figure>
                        <img class="team-member" src="kepek/csapattagok/verstappen.png" alt="Max Verstappen">
                        <figcaption class="member-caption"><h3>Max Verstappen</h3></figcaption>
                    </figure>
                    <article class="info">Max Verstappen a Forma-1 egyik legtehetségesebb és legsikeresebb versenyzője, aki rendkívül fiatalon ért el kiemelkedő eredményeket. 1997. szeptember 30-án született a belga Hasseltben, de holland állampolgárságú, és apja, Jos Verstappen korábbi Forma-1-es pilóta révén korán megismerkedett az autóversenyzéssel.Verstappen 2015-ben, mindössze 17 évesen debütált a Forma-1-ben a Toro Rosso csapatnál, ezzel a sport történetének legfiatalabb versenyzője lett.</article>
                </div>
                <div class="member-container">
                    <figure>
                        <img class="team-member" src="kepek/csapattagok/perez.png" alt="Sergio Perez">
                        <figcaption class="member-caption"><h3>Sergio Perez</h3></figcaption>
                    </figure>
                    <article class="info">Sergio Pérez, közismert nevén "Checo", egy kiváló mexikói autóversenyző, aki a Forma-1-ben hosszú és eredményes karriert futott be. 1990. január 26-án született Guadalajarában, Mexikóban. Pályafutását a gokartozásban kezdte, majd a formaautós sorozatokban folytatta, mielőtt 2011-ben a Sauber csapatnál bemutatkozott a Forma-1-ben.Pérez gyorsan hírnevet szerzett, különösen az abroncsok kímélésében és a stratégiai érzékében mutatott tehetsége révén.</article>
                </div>
                <div class="icon-container">
                    <img class="close-icon" src="kepek/icons/x-icon.png" alt="close">
                </div>
            </div>`
        );
        $(".info").hide();

        $("#team-content").hide().fadeIn(1000);


        closeTeam();
        animatePilots();
    });

    /* Ferrari csapat */

    $(".team-btn:eq(2)").click(function () {
        $("body").append(
            `<div id="team-content">
                <div class="member-container">
                    <figure>
                        <img class="team-member" src="kepek/csapattagok/leclerc.png" alt="Charles Leclerc">
                        <figcaption class="member-caption"><h3>Charles Leclerc</h3></figcaption>
                    </figure>
                    <article class="info">Charles Leclerc egy tehetséges monacói autóversenyző, aki a Forma-1 egyik legígéretesebb fiatal pilótája. 1997. október 16-án született Monacóban. Leclerc pályafutását a gokartozásban kezdte, ahol több bajnoki címet is nyert, mielőtt áttért a formaautós versenyzésre. Gyorsan felhívta magára a figyelmet, és a Ferrari Driver Academy tagja lett. Leclerc 2016-ban megnyerte a GP3 sorozatot, majd 2017-ben a FIA Formula-2 bajnokságot is, ami kiemelte őt a feltörekvő tehetségek közül.</article>
                </div>
                <div class="member-container">
                    <figure>
                        <img class="team-member" src="kepek/csapattagok/sainz.png" alt="Carlos Sainz">
                        <figcaption class="member-caption"><h3>Carlos Sainz</h3></figcaption>
                    </figure>
                    <article class="info">Carlos Sainz Jr. egy kiváló spanyol autóversenyző, aki a Forma-1-ben elért sikereivel és tehetségével vált ismertté. 1994. szeptember 1-jén született Madridban, és édesapja, Carlos Sainz Sr., kétszeres ralivilágbajnok, révén korán kapcsolatba került az autósporttal. Sainz pályafutása a gokartozással kezdődött, majd a formaautós sorozatokban folytatódott, ahol kiemelkedő eredményeket ért el. 2015-ben debütált a Forma-1-ben a Toro Rosso csapatnál (most AlphaTauri), ahol csapattársa Max Verstappen volt. A Toro Rosso-nál eltöltött idő alatt Sainz megmutatta tehetségét és állandó pontszerzővé vált.</article>
                </div>
                <div class="icon-container">
                    <img class="close-icon" src="kepek/icons/x-icon.png" alt="close">
                </div>
            </div>`
        );
        $(".info").hide();

        $("#team-content").hide().fadeIn(1000);


        closeTeam();
        animatePilots();
    });

    /* McLaren csapat */

    $(".team-btn:eq(3)").click(function () {
        $("body").append(
            `<div id="team-content">
                <div class="member-container">
                    <figure>
                        <img class="team-member" src="kepek/csapattagok/norris.png" alt="Lando Norris">
                        <figcaption class="member-caption"><h3>Lando Norris</h3></figcaption>
                    </figure>
                    <article class="info">Lando Norris egy brit autóversenyző, aki fiatal kora ellenére máris lenyűgöző karriert épített a Forma-1-ben. 1999. november 13-án született Bristolban, Nagy-Britanniában. Norris gokartozással kezdte pályafutását, ahol gyorsan kiemelkedő eredményeket ért el. Ezt követően a formaautós sorozatokban is folytatta a sikersorozatot, és 2017-ben megnyerte az FIA Formula-3 Európa-bajnokságot. 2019-ben Norris a McLaren csapatánál debütált a Forma-1-ben, és már az első évében megmutatta tehetségét.</article>
                </div>
                <div class="member-container">
                    <figure>
                        <img class="team-member" src="kepek/csapattagok/piastri.png" alt="Oscar Piastri">
                        <figcaption class="member-caption"><h3>Oscar Piastri</h3></figcaption>
                    </figure>
                    <article class="info">Oscar Piastri egy tehetséges ausztrál autóversenyző, aki gyorsan felhívta magára a figyelmet a motorsport világában. 2001. április 6-án született Melbourne-ben, Ausztráliában. Pályafutását gokartozással kezdte, ahol számos bajnoki címet nyert, mielőtt a formaautós sorozatokban folytatta volna. Piastri karrierje során gyorsan lépkedett felfelé a ranglétrán. 2019-ben megnyerte a Formula Renault Eurocup bajnokságot, majd 2020-ban a FIA Formula-3 bajnokságot is megnyerte első nekifutásra.</article>
                </div>
                <div class="icon-container">
                    <img class="close-icon" src="kepek/icons/x-icon.png" alt="close">
                </div>
            </div>`
        );
        $(".info").hide();

        $("#team-content").hide().fadeIn(1000);

        closeTeam();
        animatePilots(); 
    });

    /* Form ellenőrzés */

    $("form").submit(function (e) {
        if ($("#name").val() === "") {
            e.preventDefault();
            if ($("#error-name").length === 0) {
                $("#name").css("border-color", "red");
                $("#name").after("<span id='error-name'>Nem adott meg nevet!</span>");
            };
        } else {
            $("#error-name").remove();
            $("#name").css("border-color", "black");
        };
        if ($("#fav-team option:selected").attr("id") === "default") {
            e.preventDefault();
            if ($("#error-fav-team").length === 0) {
                $("#fav-team").css("border-color", "red");
                $("#fav-team").after("<span id='error-fav-team'>Nem választott kedvenc csapatot!</span>");
            };
        } else {
            $("#error-fav-team").remove();
            $("#fav-team").css("border-color", "black");
        };
        if ($("input[name='is-follow']:checked").attr("id") !== "no") {
            if ($("input[name=fav-date]").val() === "") {
                e.preventDefault();
                if ($("#error-fav-date").length === 0) {
                    $("input[name=fav-date]").css("border-color", "red");
                    $("input[name=fav-date]").after("<span id='error-fav-date'>Nem adott meg kedvenc verseny dátumot!</span>");
                };
            } else {
                $("#error-fav-date").remove();
                $("input[name=fav-date]").css("border-color", "black");
            };
        } else {
            $("#error-fav-date").remove();
            $("input[name=fav-date]").css("border-color", "black");
        };
        if ($("input[name='sec']").prop('checked') === false) {
            e.preventDefault();
            if ($("#error-sec").length === 0) {
                $("input[name='sec']").css("box-shadow", "0px 0px 0px 1px rgba(255,0,0,1)");
                $("input[name='sec']").after("<br><span id='error-sec'>Pipálja be, ha helyesek az adatok!</span>");
            };
        } else {
            $("#error-sec").remove();
            $("input[name='sec']").css("box-shadow", "none");
        }
    });
});