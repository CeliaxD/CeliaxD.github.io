// 當button被點到後，執行{}裡的東西
$('button').on('click', function() {

    var t = $('#temparature').val()
    var f = $('#humidity').val()
    t = Number(t)
    f = Number(f) / 100
    T = t * 9 / 5 + 32

    //   DI = T - ( 0.55 - 0.55f ) ( T - 58 )
    DI = T - (0.55 - 0.55 * f) * (T - 58)


    $('#result').val((DI.toFixed(1)))

    $('#emoji_').empty();
    var $face = $('<i>')
    if (DI > 85) {
        $('#text').val("非常熱，極不舒適")

        $face.attr('class', 'em em-astonished')

    } else if (DI > 79) {
        $('#text').val("很熱，不舒適")

        $face.attr('class', 'em em-anguished')

    } else if (DI > 75) {
        $('#text').val("有點熱，不太舒適")

        $face.attr('class', 'em em-confused')

    } else if (DI > 70) {
        $('#text').val("偏暖，舒適")

        $face.attr('class', 'em em-relaxed')

    } else if (DI > 58) {
        $('#text').val("很舒適")

        $face.attr('class', 'em em-smiley')

    } else if (DI > 50) {
        $('#text').val("偏涼，舒適")

        $face.attr('class', 'em em-relaxed')

    } else if (DI > 38) {
        $('#text').val("有點冷，不太舒適")

        $face.attr('class', 'em em-confused')

    } else if (DI > 25) {
        $('#text').val("很冷，不舒適")

        $face.attr('class', 'em em-anguished')

    } else {
        $('#text').val("非常冷，極不舒適")

        $face.attr('class', 'em m-astonished')

    }

    $('#emoji_').append($face)

    if (DI > 85) {

    }



})