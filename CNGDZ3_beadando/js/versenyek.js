$(document).ready(function () {

    $.getJSON('./data/rank.json', function (data) {
        let firstPlace = data[0];
        let secondPlace = data[1];
        let thirdPlace = data[2];

        $('.top-racer:eq(0)').attr('src', secondPlace.imgSrc);
        $('.top-racer:eq(0)').attr('alt', secondPlace.name);
        $('.name:eq(0)').text(secondPlace.name);
        $('.rank:eq(0)').text(`Helyezés: #${secondPlace.position}`);
        $('.team:eq(0)').text(`Csapat: ${secondPlace.team}`);
        $('.points:eq(0)').text(`Pontszám: ${secondPlace.points}`);

        $('.top-racer:eq(1)').attr('src', firstPlace.imgSrc);
        $('.top-racer:eq(0)').attr('alt', secondPlace.name);
        $('.name:eq(1)').text(firstPlace.name);
        $('.rank:eq(1)').text(`Helyezés: #${firstPlace.position}`);
        $('.team:eq(1)').text(`Csapat: ${firstPlace.team}`);
        $('.points:eq(1)').text(`Pontszám: ${firstPlace.points}`);

        $('.top-racer:eq(2)').attr('src', thirdPlace.imgSrc);
        $('.top-racer:eq(0)').attr('alt', secondPlace.name);
        $('.name:eq(2)').text(thirdPlace.name);
        $('.rank:eq(2)').text(`Helyezés: #${thirdPlace.position}`);
        $('.team:eq(2)').text(`Csapat: ${thirdPlace.team}`);
        $('.points:eq(2)').text(`Pontszám: ${thirdPlace.points}`);

        $('figure').hide().fadeIn(1000);
        $('.top-racer:even').css('transform', 'scale(0.6)');
    });

    $('button').click(function () {
        $('#stg').html('<h2 style="text-align:center">Formula-1 helyezések</h2><br>');
        $('#stg').append('<table></table>');
        $('#stg').append('<thead><tr class="rank-tr"><th>Helyezés</th><th>Név</th><th>Csapat</th><th>Pontszám</th></tr></thead>')
        $('#stg').append('<tbody id="rank-body"></tbody>)');
        $.getJSON('./data/rank.json', function (data) {
            data.forEach(racer => {
                $('#rank-body').append(`<tr><td>#${racer.position}</td><td><div class="racer-container"><img class="table-img" src="${racer.imgSrc}" alt="${racer.name}"><b>${racer.name}</b></div></td><td>${racer.team}</td><td>${racer.points}</td></tr>`);
            });
        });
    });

});