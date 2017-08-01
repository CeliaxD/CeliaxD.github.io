var rand = function(start, end) {
    var n = end - start + 1;
    var r = Math.random() * n;
    var f = Math.floor(r);
    return f + start;
}

// 遊戲次數計數器
var time = 0

//檢查錢夠不夠
var verify = function() {

    if (money >= 800) {
        HappyEnding();
    }
}


// 夢結局
var dream = function() {
    $('body').empty()
        // <div class="container text-center">
    $('body').attr({ 'id': 'theEnd1' })
    $div = $('<div>').attr({ 'id': 'div1', 'class': 'container text-center' })
    $('body').append($div);
    $end = $('<p>')
    $end.append("<br>" + "因為愛麗絲最後只賺了" + money + "萬元，付不出贖金" + "<br>" + "紅心皇后準備將紅心騎士斬首，並派了一群紙牌士兵要把愛麗絲趕出去，" + "<br>" + "在一片混亂中，愛麗絲赫然驚醒，發現自己坐在大樹下，姐姐正在喚她回家" + "<br>" + "「啊，原來是一場夢啊」愛麗絲心想" + "<br>" + "「還不快點回家，就要被媽媽罵囉」" + "<br>" + "「吶，姊姊，我跟你說，我剛剛做了一個好詭異的惡夢......」" + "<br>");
    $('#div1').append($end)
    $restart = $('<button>').attr({ 'id': 'restart', 'type': 'button', 'class': 'btn btn-primary' });
    $restart.append("重玩一次");
    $('#div1').append($restart);
    $('#restart').on('click', function() {
        location.reload();
    })
}

//HappyEnding
var HappyEnding = function() {
    $('body').empty()
        // <div class="container text-center">
    $('body').attr({ 'id': 'theEnd' })
    $div = $('<div>').attr({ 'id': 'div2', 'class': 'container text-center' })
    $('body').append($div);
    $end = $('<p>')
    $end.append("<br>" + "「哼！竟然賺到了" + money + "萬元是嗎？" + "這次就先放過你們吧！」" + "<br>" + "紅心皇后招手示意手下釋放紅心騎士後，便不甘心地轉身離去" + "<br>" + "愛麗絲上前攙扶甫受驚嚇的騎士，帶騎士到花園休息" + "<br>" + "「感謝你的救命之恩」紅心騎士說道，並以高跪姿托起愛麗絲的手，欲獻上一個吻以示感激" + "<br>" + "愛麗絲心跳加速，赫然驚醒，發現自己坐在大樹下，姐姐正在喚她回家" + "<br>" + "「啊，原來是一場夢啊」愛麗絲心想" + "<br>" + "「還不快點回家，就要被媽媽罵囉」" + "<br>" + "「吶，姊姊，我跟你說，我剛剛做了一個好美的夢......」" + "<br>");
    $('#div2').append($end)
    $restart = $('<button>').attr({ 'id': 'restart', 'type': 'button', 'class': 'btn btn-primary' });
    $restart.append("重玩一次");
    $('#div2').append($restart);
    $('#restart').on('click', function() {
        location.reload();
    })


}

//葫蘆
var FullHouse = function(card) {

    //var card = [];
    var A = rand(1, 13)
    var B = rand(1, 13)
    for (; A == B;) {
        B = rand(1, 13)
    }
    console.log(A + "," + B)
        //AAA
    AAA = []
    for (i = 0; i < 4; i++) {
        AAA.push((A - 1) * 4 + i + 1)
    }
    for (var i = 1; i <= 10; i++) {
        var r = rand(1, 4) - 1;
        var t = AAA[0];
        AAA[0] = AAA[r];
        AAA[r] = t;
    }
    for (var i = 0; i < 3; i++) {
        card.push(AAA[i]);
    }

    //BB
    BB = []
    for (i = 0; i < 4; i++) {
        BB.push((B - 1) * 4 + i + 1)
    }
    for (var i = 1; i <= 10; i++) {
        var r = rand(1, 4) - 1;
        var t = BB[0];
        BB[0] = BB[r];
        BB[r] = t;
    }
    for (var i = 0; i < 2; i++) {
        card.push(BB[i]);
    }

}


var four_of_a_kind = function(card) {

    //var card = [];
    var A = rand(1, 13)
    var B = rand(1, 13)
    for (; A == B;) {
        B = rand(1, 13)
    }
    console.log(A + "," + B)
        //AAAA
    AAAA = []
    for (i = 0; i < 4; i++) {
        AAAA.push((A - 1) * 4 + i + 1)
    }
    for (var i = 0; i < 4; i++) {
        card.push(AAAA[i]);
    }
    //B
    B1 = rand((B - 1) * 4 + 1, B * 4)
    card.push(B1);

}


//二胚
var TwoPair = function(card) {
    var A = rand(1, 13)
    var B = rand(1, 13)
    var C = rand(1, 13)
    console.log(A + "," + B + "," + C)
    for (; A == B || B == C || A == C;) {
        B = rand(1, 13)
        C = rand(1, 13)
    }
    //AA
    AA = []
    for (i = 0; i < 4; i++) {
        AA.push((A - 1) * 4 + i + 1)
    }
    for (var i = 1; i <= 10; i++) {
        var r = rand(1, 4) - 1;
        var t = AA[0];
        AA[0] = AA[r];
        AA[r] = t;
    }
    for (var i = 0; i < 2; i++) {
        card.push(AA[i]);
    }

    //BB
    BB = []
    for (i = 0; i < 4; i++) {
        BB.push((B - 1) * 4 + i + 1)
    }
    for (var i = 1; i <= 10; i++) {
        var r = rand(1, 4) - 1;
        var t = BB[0];
        BB[0] = BB[r];
        BB[r] = t;
    }
    for (var i = 0; i < 2; i++) {
        card.push(BB[i]);
    }

    //C
    C1 = rand((C - 1) * 4 + 1, C * 4)
    card.push(C1);

}

// 再來一次
var again = function() {
    $('#answer').empty();
    $deal = $('<button>').attr({ 'id': 'deal', 'type': 'button', 'class': 'btn btn-primary' });
    $deal.append("再來一次");
    $('#answer').append($deal);
    $('#deal').on('click', function() {
        whole();
    })
}


var whole = function() {
    if (time < 6) {
        time = time + 1
        console.log("time:" + time)
        var card = [];
        $('#Q').empty();
        $F = $('<h5>').append("我手上的這副牌，牌型是「葫蘆、鐵支、兩對」其中一種。如果猜對牌型的話，可以獲得100萬元");
        $('#Q').append($F);
        $('#data').empty()
        for (var i = 0; i < 5; i++) {
            $img = $('<img>').attr('src', './poker/back.png');
            $col = $('<div>').attr('class', 'col-2 text-center').append($img);
            $('#data').append($col);
        }


        $("#deal").detach();

        //三個按鈕
        // <button id="1" type="button" class="btn btn-primary>???</button>
        $1 = $('<button>').attr({ 'id': '1', 'type': 'button', 'class': 'btn btn-primary' });
        $2 = $('<button>').attr({ 'id': '2', 'type': 'button', 'class': 'btn btn-primary' });
        $3 = $('<button>').attr({ 'id': '3', 'type': 'button', 'class': 'btn btn-primary' });
        $1.append("葫蘆");
        $2.append("鐵支");
        $3.append("兩對");
        $('#answer').append($1, $2, $3);

        var pattern = rand(1, 3)
        console.log(pattern)
        switch (pattern) {
            case 1:
                FullHouse(card);
                break;
            case 2:
                four_of_a_kind(card);
                break;
            case 3:
                TwoPair(card);
                break;

        }

        // 敗
        var Lose = function() {
            $('#Q').empty();
            $F = $('<h5>').append("猜錯囉" + "<br>" + "真是可惜，哈哈哈哈哈");
            $('#Q').append($F);
            // 將撲克牌顯示在螢幕上
            $('#data').empty();
            for (var i = 0; i < card.length; i++) {
                $img = $('<img>').attr('src', './poker/pic' + card[i] + '.png');
                $col = $('<div>').attr('class', 'col-2 text-center').append($img);
                $('#data').append($col);
            }
            var money = $('#result').val()
            console.log(money)
            again();

        }

        //選擇不繼續
        var Stop = function() {
            $('#Q').empty();
            $F = $('<h5>').append("哼" + "<br>" + "你這個不敢賭的膽小鬼");
            $('#Q').append($F);
            // 將撲克牌顯示在螢幕上
            $('#data').empty();
            for (var i = 0; i < card.length; i++) {
                $img = $('<img>').attr('src', './poker/pic' + card[i] + '.png');
                $col = $('<div>').attr('class', 'col-2 text-center').append($img);
                $('#data').append($col);
            }
            again();
        }


        var YESorNO = function() {
            $('#answer').empty()
            $Y = $('<button>').attr({ 'id': 'Y', 'type': 'button', 'class': 'btn btn-primary' });
            $N = $('<button>').attr({ 'id': 'N', 'type': 'button', 'class': 'btn btn-primary' });
            $Y.append("是");
            $N.append("否");
            $('#answer').append($Y, $N);

            $('#Y').on('click', function() {
                $('#Y').detach();
                $('#N').detach();
            })

            $('#N').on('click', function() {
                $('#Y').detach();
                $('#N').detach();
                Stop();
            })
        }


        // 勝1
        var Win1 = function() {
            $('#Q').empty();
            $T = $('<h5>').append("你運氣滿好的嘛，要不要繼續猜呀？" + "<br>" + "這次若猜對了可以得到200萬元，但猜錯的話得扣50萬元");
            $('#Q').append($T);
            YESorNO();
        }

        //勝2
        var Win2 = function() {
            $('#Q').empty();
            $T = $('<h5>').append("你運氣滿好的嘛，要不要繼續猜呀？" + "<br>" + "這次若猜對了可以得到400萬元，但猜錯的話得扣250萬元");
            $('#Q').append($T);
            YESorNO();
        }


        var winEND = function() {
            $('#Q').empty();
            console.log("win")
            $winEND = $('<h5>').append("好吧" + "<br>" + "算你厲害");
            $('#Q').append($winEND);
            again();
        }

        //===================第二關===================//
        var roundTWO = function() {
            console.log("round 2")
            $('#Q').empty();
            $Q2 = $('<h5>').append("這次要猜的是，這副牌中，是花色為紅色的牌多，還是花色黑色的多呢？");
            $('#Q').append($Q2);

            //===================第三關===================//

            var THREE = function() {
                console.log("THREE")

                $('#Q').empty();
                $Q2 = $('<h5>').append("這次要猜的是，" + "<br>" +
                    "這副牌中，以下哪個數值的牌較多？");
                $('#Q').append($Q2);

                //生成兩個數字的選項
                $('#answer').empty()

                var A = Math.ceil(card[0] / 4)
                var B = Math.ceil(card[4] / 4)
                var C
                if (A > B) {
                    C = A
                    A = B
                    B = C
                }
                $A = $('<button>').attr({ 'id': 'A', 'type': 'button', 'class': 'btn btn-primary' });
                $B = $('<button>').attr({ 'id': 'B', 'type': 'button', 'class': 'btn btn-primary' });
                $A.append(A);
                $B.append(B);
                $('#answer').append($A, $B);
                $('#A').on('click', function() {
                    if (A == Math.ceil(card[0] / 4)) {
                        money = money + 400
                        $('#result').val(money)
                        verify()
                        winEND();
                    } else {
                        Lose();
                        money = money - 250
                        $('#result').val(money)
                    }
                })
                $('#B').on('click', function() {
                    if (B == Math.ceil(card[0] / 4)) {
                        money = money + 400
                        $('#result').val(money)
                        verify()
                        winEND();
                    } else {
                        Lose();
                        money = money - 250
                        $('#result').val(money)
                    }
                })

            }

            var THREE_TwoPair = function() {
                console.log("RoundTHREE2")
                    //生成兩個數字的選項
                var A = Math.ceil(card[0] / 4)
                var B = Math.ceil(card[3] / 4)

                var C = Math.ceil(card[4] / 4)
                var D = rand(1, 2)
                if (D = 1) {
                    D = A
                } else D = B
                var E
                if (C > D) {
                    E = C
                    C = D
                    D = E
                }
                $A = $('<button>').attr({ 'id': 'A', 'type': 'button', 'class': 'btn btn-primary' });
                $B = $('<button>').attr({ 'id': 'B', 'type': 'button', 'class': 'btn btn-primary' });
                $A.append(C);
                $B.append(D);
                $('#answer').append($A, $B);

                $('#A').on('click', function() {
                    if (C == Math.ceil(card[0] / 4)) {
                        money = money + 400
                        $('#result').val(money)
                        verify()
                        winEND();
                    } else {
                        Lose();
                        money = money - 250
                        $('#result').val(money)
                    }
                })

                $('#B').on('click', function() {
                    if (D == Math.ceil(card[0] / 4)) {
                        money = money + 400
                        $('#result').val(money)
                        verify()
                        winEND();
                    } else {
                        Lose();
                        money = money - 250
                        $('#result').val(money)
                    }
                })

            }

            var roundTHREE = function() {
                console.log("RoundTHREE")
                switch (pattern) {
                    case 1:
                        THREE();
                        break;
                    case 2:
                        THREE();
                        break;
                    case 3:
                        THREE_TwoPair();
                        break;
                }

            }


            //計算紅黑
            var red = 0
            var black = 0
            for (i = 0; i < 5; i++) {
                if (card[i] % 4 == 2 || card[i] % 4 == 3) {
                    red++;
                } else black++;
            }
            console.log("black:" + black)
            console.log("red:" + red)
            $R = $('<button>').attr({ 'id': 'R', 'type': 'button', 'class': 'btn btn-primary' });
            $B = $('<button>').attr({ 'id': 'B', 'type': 'button', 'class': 'btn btn-primary' });
            $R.append("紅色（紅心+方塊）");
            $B.append("黑色（黑桃+梅花）");
            $('#answer').append($R, $B);

            $('#R').on('click', function() {
                if (red > black) {
                    money = money + 200
                    $('#result').val(+money)
                    console.log(money)
                    verify()
                    Win2();
                    $('#Y').on('click', function() {
                        roundTHREE();
                    })
                } else {
                    money = money - 50
                    $('#result').val(+money)
                    console.log(money)
                    Lose();
                }
            })

            $('#B').on('click', function() {
                if (black > red) {
                    money = money + 200
                    $('#result').val(+money)
                    console.log(money)
                    verify()
                    Win2();
                    $('#Y').on('click', function() {
                        roundTHREE();
                    })
                } else {
                    money = money - 50
                    $('#result').val(+money)
                    console.log(money)
                    Lose();
                }
            })
        }


        // 按三個按鈕
        // 比較 要兩個等號!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        $('#1').on('click', function() {
            $('#Q').empty();
            if (pattern == 1) {
                Win1();
                money = money + 100
                $('#result').val(+money)
                console.log(money)
                verify()
                $('#Y').on('click', function() {
                    roundTWO();
                })
            } else {
                Lose();
            }
            $1.prop('disabled', true);
            $2.prop('disabled', true);
            $3.prop('disabled', true);
        })

        $('#2').on('click', function() {

            console.log(money)
            if (pattern == 2) {
                $('#Q').empty();
                money = money + 100
                $('#result').val(+money)
                verify()
                Win1();
                $('#Y').on('click', function() {
                    roundTWO();
                })
            } else {
                Lose();
            }
            $1.prop('disabled', true);
            $2.prop('disabled', true);
            $3.prop('disabled', true);
        })

        $('#3').on('click', function() {

            console.log(money)
            if (pattern == 3) {
                $('#Q').empty();
                money = money + 100
                $('#result').val(+money)
                verify()
                Win1();
                $('#Y').on('click', function() {
                    roundTWO();
                })
            } else {
                Lose();
            }
            $1.prop('disabled', true);
            $2.prop('disabled', true);
            $3.prop('disabled', true);
        })
    } else
        dream();

}


/* 開始囉~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
var money = 0
$('#result').val(money)
$('#deal').on('click', function() {

    whole();
})