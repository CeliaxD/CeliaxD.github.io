// 當文件已經全載入至記憶體時，開始執行程式
$(document).ready(function() {

    // 清空 product-list
    $('#product-list').empty();
    // $('#page').hide()

    var items = null
    var pageCount = 20
    var showItems = (page) => {
        if (items == null) return
        var start = (page - 1) * pageCount
        var end = start + pageCount - 1
        $('#product-list').empty();
        for (var i = start; i <= end; i++) {
            newItem(items[i])
        }
    }

    var newItem = (item) => {
        $img = $('<img>').attr('class', 'image').attr('src', item.image)
        $h3 = $('<h3>').attr('class', 'name').text(item.name)
        $p = $('<p>').attr('class', 'price').text('NT$ ' + item.price)
        $btn = $('<button>').attr('type', 'button').attr('class', 'btn' + ' btn-info' + ' btn-xs').attr('id', 'add_cart').text('加入購物車')

        $item = $('<div>').attr('class', 'item').append($img).append($h3).append($p).append($btn)
        $col = $('<div>').attr('class', 'col-*').append($item)

        $('#product-list').append($col)

    }


    var newPage = (n) => {
        var pageNum = n / 20
        pageNum = (n % 20 != 0) ? pageNum + 1 : pageNum

        $('#page-number').empty()

        $la = $('<a>').attr('class', 'page-link').attr('id', 'back').attr('href', '#').attr('tabindex', '-1').attr('aria-disabled', 'true').text('«')
        $lli = $('<li>').attr('class', 'page-item').append($la)
            // .addClass('disabled')

        $('#page-number').append($lli)



        // 插入分頁數字
        for (var i = 1; i <= pageNum; i++) {
            $a = $('<a>').attr('class', 'page-link').attr('id', 'numbers').attr('href', '#').text(i)

            $a.on('click', function() {

                var c = $(this).text()
                showItems(Number(c))

                console.log(c)
            })

            // var strActive = ((i == 1) ? ' active' : '')
            $li = $('<li>').attr('class', 'page-item').append($a)
            $('#page-number').append($li)

        }

        $("#add_cart").on('click', function() {
            console.log('加入購物車')
        })

        $ra = $('<a>').attr('class', 'page-link').attr('id', 'next').attr('href', '#').text('»')
        $rli = $('<li>').attr('class', 'page-item').append($ra)
        $('#page-number').append($rli)

        $('#next').on('click', function() {
            console.log(c)
        })



    }

    $("#cart").on('click', function() {
        console.log('購物車')
    })




    // showItems

    $.get('https://js.kchen.club/B05102016/query', function(response) {
        if (response) {
            // 伺服器有回傳資料
            if (response.result) {
                $('#product-list').empty();
                // 資料庫有回傳資料
                items = response.items

                // for (var i = 0; i < items.length; i++) {
                //     newItem(items[i])
                // }

                // 加了分頁效果，預設顯示第一頁
                showItems(1)

                // 顯示分頁和設定分頁的函式
                $('#page').show()
                newPage(items.length)

            } else {
                $('#message').text('查無相關資料')
                $('#dialog').modal('show')
            }
        } else {
            $('#message').text('伺服器出錯')
            $('#dialog').modal('show')
        }

        console.log(response)
    }, "json")


})