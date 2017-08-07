$('#insert').on('click', function() {
    var data = {
        name: $('#InputProductName').val(),
        price: +$('#InputProductPrice').val(),
        count: +$('#InputProductCount').val(),
        image: $('#InputProductImage').val()
    }
    $.post("http://js2017-hw2.kchen.club/insert", data, function(response) {
        if (response) {
            if (response.result) {
                $('#message').text('新增成功');
            } else {
                $('#message').text('新增失敗 (' + response.data + ')');
            }
        } else {
            $('#message').text('新增失敗');
        }
        $('#dialog').modal('show');
        console.log(response);
    }, "json");
})


var keywords = $('#key').val()
var search

var $1
var $2

var right = []
var pageNumber = 1
var c = 0



$("#rowrow").empty();

$('#query').on('click', function() {

    $('#product-list').empty()

    $.get("http://js2017-hw2.kchen.club/query", function(response) {
        if (response) {

            var show = function() {

                $one = $('<div>').attr({ 'class': 'col-*' })
                $two = $('<div>').attr('class', 'item')
                $img = $('<img>').attr('src', response.data[right[i]].image);
                $name = $('<h3>').attr('class', 'title').append(response.data[right[i]].name)
                $price = $('<p>').attr('class', 'price').append("NT$ " + response.data[right[i]].price)
                $count = $("<p>").attr('class', 'count').append("數量：" + response.data[right[i]].count)

                $two.append($img)
                $two.append($name)
                $two.append($price)
                $two.append($count)
                $one.append($two)
                $('#product-list').append($one)

            }

            if (response.result) {

                c = 0
                right = []

                $("#rowrow").empty();
                $("#product-list").empty();

                $li = $("<li>").addClass("page-item");
                $a = $("<a>").attr({ 'class': 'page-link', "aria-label": "Previous", 'id': 'previous' })
                $span1 = $("<span>").attr("aria-hidden", "true").append("&laquo;");
                $span2 = $("<span>").addClass("sr-only").append("Previous");
                $a.append($span1);
                $a.append($span2);
                $li.append($a);
                $("#rowrow").append($li);

                keywords = $('#key').val()
                $1 = $('#money1').val()
                $2 = $('#money2').val()

                if ($1 != "" && $2 != "" && $1 == $2) {

                    alert("請輸入兩個相異的數字");
                }

                if ($2 < $1) {
                    b = $2
                    $2 = $1
                    $1 = b
                }

                //過濾
                for (i = 0; i < response.data.length; i++) {

                    search = response.data[i].name.search(keywords)


                    if ((search != -1) && (($1 == "" && $2 == "") || (($1 <= response.data[i].price) && (response.data[i].price <= $2)))) {
                        right.push(i)
                    }
                }

                //有符合條件的
                if (right.length != 0) {


                    //頁數按鈕
                    for (i = 0; i < Math.ceil(right.length / 15); i++) {
                        $li = $("<li>").attr({ 'class': "page-item", 'id': i + 1 });
                        $a = $("<a>").attr({ 'class': "page-link" });
                        $a.append(i + 1);
                        $li.append($a)
                        $("#rowrow").append($li);
                        $a.on('click', function() {
                            $("#product-list").empty();
                            $("#now").removeAttr('id').attr('id', pageNumber)
                            $(".page-link").removeAttr('id')
                                // $('#now').removeAttr('id').attr('id', pageNumber)

                            $(this).attr('id', 'now')
                            pageNumber = Number($(this).text());
                            for (i = (pageNumber - 1) * 15; i < pageNumber * 15; i++) {
                                show();
                            }
                        })

                    }

                    $('#1').attr('id', 'now')

                    for (i = 0; i < 15; i++) {

                        show();
                    }

                    //<li class="page-item">
                    //     <a class="page-link" href="#" aria-label="Next">
                    //         <span aria-hidden="true">&raquo;</span>
                    //         <span class="sr-only">Next</span>
                    //     </a>
                    // </li>

                    $li = $("<li>").attr('class', 'page-item')
                    $a = $("<a>").attr({ 'class': 'page-link', "aria-label": "Next", 'id': 'next' })
                    $span1 = $("<span>").attr("aria-hidden", "true").append("&raquo;");
                    $span2 = $("<span>").attr('class', 'sr-only').append("Next");
                    $a.append($span1);
                    $a.append($span2);
                    $li.append($a);
                    $("#rowrow").append($li);

                    $('#previous').on('click', function() {

                        if (pageNumber == 1) {

                        } else {
                            $("#product-list").empty();
                            $("#now").removeAttr('id').attr('id', pageNumber)
                            $('.page-link').removeAttr('id')
                            $('#' + pageNumber).removeAttr('id').attr('id', pageNumber)
                            $('#' + pageNumber)
                            $('#' + (pageNumber - 1)).removeAttr('id').attr('id', 'now')

                            pageNumber--
                            for (i = (pageNumber - 1) * 15; i < pageNumber * 15; i++) {
                                show();
                            }
                        }
                    })

                    $('#next').on('click', function() {

                        if (pageNumber == Math.ceil(right.length / 15)) {

                        } else {
                            $("#product-list").empty();
                            $('.page-link').removeAttr('id')
                            $("#now").removeAttr('id').attr('id', pageNumber)
                            $('#' + pageNumber).removeAttr('id').attr('id', pageNumber)
                            $('#' + pageNumber)
                            $('#' + (pageNumber + 1)).removeAttr('id').attr('id', 'now')

                            pageNumber++
                            for (i = (pageNumber - 1) * 15; i < pageNumber * 15; i++) {
                                show();
                            }
                        }
                    })
                } else {
                    console.log("fail")
                    $('#rowrow').empty()
                    $('#product-list').append('查詢失敗');
                }

            } else {
                console.log("fail")
                $('#product-list').append('查詢失敗');
            }

        } else {
            console.log("fail2")
            $('#product-list').text('查詢失敗');
        }
        console.log(response);
    }, "json");
})