// 當button被點到後，執行{}裡的東西
$('button').on('click', function() {

    var h = $('#height').val()
    var w = $('#weight').val()

    h = Number(h) / 100
    W = Number(w)

    bmi = w / (h ^ 2)

    $('#result').val(bmi)

    console.log('height:' + h)
    console.log('weight:' + w)
    console.log('bmi:' + bmi)

})