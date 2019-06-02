// 當文件已經全載入至記憶體時，開始執行程式
$(() => {

    $('#insert').on('click', function() {

        // 取得商品資料
        var data = {
            item: {
                name: $('#inputProductName').val(),
                price: Number($('#inputProductPrice').val()),
                count: +$('#inputProductCount').val(),
                image: $('#inputProductImage').val(),
            }
        }

        // 新增商品
        $.post('https://js.kchen.club/B05102016/insert', data, function(response) {
            if (response) {
                // 伺服器有回傳資料
                if (response.result) {
                    $('#message').text('新增成功')
                    console.log(response.item)
                    $('#dialog').modal('show')
                } else {
                    $('#message').text('新增失敗')
                    console.log(response.message)
                    $('#dialog').modal('show')
                }
            } else {
                $('#message').text('伺服器出錯')
                $('#dialog').modal('show')
            }
        })
    })
})





// $(document).ready(function() {


// })

// var newItem = (item) => {
//     $img = $('<img>').attr('class', 'image').attr('src', item.image)
//     $h3 = $('<h3>').attr('class', 'name').text(item.name)
//     $p = $('<p>').attr('class', 'price').text('NT$ ' + item.price)

//     $item = $('<div>').attr('class', 'item').append($img).append($h3).append($p)
//     $col = $('<div>').attr('class', 'col-*').append($item)

//     $('#product-list').append($col)
// }

// // 有n個商品
// var newPage = (n) {
//     var pageNum = n / 20
//     pageNum = (n % 20 == 0) ? pageNum : pageNum + 1

//     $('#page-number')
// }


// $('#query').on('click', function() {


//     $.get('https://js.kchen.club/B05102016/query', function(response) {
//         if (response) {
//             // 伺服器有回傳資料
//             if (response.result) {
//                 // $('#product-list').empty();
//                 // // 資料庫有回傳資料
//                 // var items = response.data
//                 // for (var i = 0; i < items.length; i++) {
//                 //     newItem(items[i])
//                 // }


//             } else {
//                 $('#message').text('查無相關資料')
//                 $('#dialog').modal('show')
//             }
//         } else {
//             $('#message').text('伺服器出錯')
//             $('#dialog').modal('show')
//         }

//         console.log(response)
//     }, "json")
// })