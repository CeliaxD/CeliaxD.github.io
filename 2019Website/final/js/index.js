    $('.hide').attr('style', 'height:' + $(window).height() + 'px;')
    $('#index').attr('style', "background: rgba(0,0,0,0.5);")

    var pageWidth = $(window).width();
    var rand = (start, end) => {
        var n = Math.abs(end - start) + 1 // 決定範圍           
        var r = Math.random() * n // 放大 n 倍           
        r = Math.floor(r) // 去除小數點        
        r = r + ((start <= end) ? start : end) // 做位移
        return r
    }

    // 共 5+1 =6 項
    var facts = ['蟑螂是很古老的生物，其起源最早可追溯至3億2千萬年前的石炭紀。',
        '有種蟑螂叫「中華真地鱉」，是沿用已久的中藥，主治月經閉止、乳汁不通、筋骨折傷、瘀血痛腫等病症。',
        '蟑螂的中樞神經不在頭部，牠的生命力十分頑強，就算被去除頭部後，也可持續活動約一星期長的時間才死去。',
        '蟑螂能攀爬牆面不掉落，是因為牠們的腳會分泌直徑微米級的油脂，靠油脂表面張力產生的毛細現象順利爬上爬下。',
        '昆蟲是外骨骼的動物，必須脫皮才能長大，德國蟑螂平均需經6-7次脫皮，才能成為成蟲。',
        '古巴蟑螂是綠色的哦！'
    ]


    $('#start').click(function() {
        $('.intro').empty()
        $('#index').removeAttr('style');

        // 前五個小知識隨機排順序+最後一個是古巴蟑螂
        var n = rand(10, 200)
        for (var i = 0; i < n; i++) {
            var r = rand(0, 4)
            var temp = facts[r]
            facts[r] = facts[0]
            facts[0] = temp
        }
        var f = 0

        var show_end = 1

        //遊戲結束
        var end = () => {
            // console.log(show_end)
            show_end = show_end + 1
            $("#AllRoach>#ground").remove()
            $('#index').attr('style', "background: rgba(0,0,0,0.5);")
            console.log('end動作')

            $h1 = $('<h1>').attr('id', 'end_title')
            $h5 = $('<h5>').attr('id', 'end_text')

            $review = $('<button>').attr('type', 'button').attr('class', 'btn btn-dark menu_btn').text('複習小知識')
                // <button type="button" class="btn btn-dark" id="start">Start</button>


            $again = $('<button>').attr('type', 'button').attr('class', 'btn btn-dark menu_btn').text('再玩一次')
            $again.click(function() {
                location.reload();
            })

            if (f > 5) {
                $h1.text('哇！你擊退了好多蟑螂！')
                $h5.text('還學到了許多蟑螂小知識！恭喜你成為蟑螂達人 :D')
            } else {
                $h1.text('你擊退了' + f + '隻蟑螂！')
                $h5.text('也學到了一些蟑螂小知識呢:D')
            }
            $('.intro').append($h1).append($h5).append($again).append($review)


            // REVIEW
            $('.modal-title').text('蟑螂小學堂')
            for (var i = 1; i <= f; i++) {
                $('#message').remove()
                console.log(i)
                $re_fact = $('<p>').text(i + '. ' + facts[i - 1])
                $('.modal-body').append($re_fact)
            }
            $review.click(function() {
                $('#dialog').modal('show')
            })


        }

        // 生成一般蟑螂
        var newRoach = () => {
            $("#AllRoach>#ground").remove()
            for (var i = 1; i <= 5; i++) {
                //生成蟑螂 並放上跑道
                let distance = rand(90, 110)
                $roach = $('<div>').attr('id', 'roach')
                $ground = $('<div>').attr('id', 'ground').attr('style', 'top:' + (30 + distance * (i - 1)) + 'px; position: absolute; ').append($roach)

                $('#AllRoach').append($ground)

                let temp = rand(1, 5);
                if (temp > 2) {
                    $roach.attr('class', 'toRight');
                    $roach.delay(rand(0, 300))
                    $roach.animate({
                        left: (pageWidth - 90)
                    }, (rand(2500, 2300) - 200 * f))
                    $roach.fadeOut(30)
                } else {
                    $roach.attr('class', 'toLeft').attr('style', 'left:' + (pageWidth - 120) + 'px;');
                    $roach.animate({
                        left: 0
                    }, (rand(2500, 2300) - 200 * f))
                    $roach.fadeOut(30)
                }


                //點擊蟑螂
                $roach.click(function() {

                    // $roach.attr('style', "cursor: url(./img/slipper_B.cur), auto;")
                    // setTimeout($roach.removeAttr('style').attr('style', "cursor: url(./img/slipper_A.cur), auto;"),
                    //     300);
                    if (f < 4) {
                        $(this).remove()
                        $('.modal-title').text('蟑螂小知識' + (f + 1))
                        $('#message').text(facts[f])
                        f = f + 1
                        $('#dialog').modal('show')


                    } else {
                        if (f = 4) {
                            $(this).remove()
                            $('.modal-title').text('蟑螂小知識' + (f + 1))
                            $('#message').text(facts[f])
                            f = f + 1
                            $('#dialog').modal('show')
                            $("#AllRoach>#ground").remove()
                        } else {}
                    }
                })
            }

        }



        //生成綠蟑螂
        var greenRoach = () => {
            $("#AllRoach>#ground").remove()
            for (var i = 1; i <= 4; i++) {
                //生成蟑螂 並放上跑道
                let distance = rand(90, 110)
                $greenRoach = $('<div>').attr('id', 'greenRoach')
                $ground = $('<div>').attr('id', 'ground').attr('style', 'top:' + distance * i + 'px; position: absolute; ').append($greenRoach)

                $('#AllRoach').append($ground)

                let temp = rand(1, 5);
                if (temp > 2) {
                    $greenRoach.attr('class', 'toRight');
                    $greenRoach.delay(rand(0, 300))
                    $greenRoach.animate({
                        left: (pageWidth - 90)
                    }, rand(1580, 1660))
                    $greenRoach.fadeOut(30)
                } else {
                    $greenRoach.attr('class', 'toLeft').attr('style', 'left:' + (pageWidth - 120) + 'px;');
                    $greenRoach.animate({
                        left: 0
                    }, rand(1580, 1660))
                    $greenRoach.fadeOut(30)
                }


                //點擊綠蟑螂，呼叫end
                $greenRoach.click(function() {
                    $(this).remove()
                    $('.modal-title').text('蟑螂小知識' + (f + 1))
                    $('#message').text(facts[f])
                    f = f + 1
                    $('#dialog').modal('show')

                    $('#modal-close').one("click", function() {

                        end()

                    })

                })
            }

        }

        // setInterval(function() { newRoach() }, 2500);

        var interval = setInterval(function() {
            if (f > 4) {
                clearInterval(interval);

                if (f > 5) {

                } else {
                    var interval2 = setInterval(function() {
                        if (f > 5) {
                            clearInterval(interval2);
                        } else {
                            greenRoach()
                            $("#ground >#AllRoach")
                        }
                    }, 2000);
                }


            } else {
                newRoach()
            }

        }, 2500);



    })
