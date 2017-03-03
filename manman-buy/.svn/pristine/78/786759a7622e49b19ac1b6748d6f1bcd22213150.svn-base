/**
 * Created by Administrator on 2017/1/15.
 */
window.onload = function () {
    $.ajax({
        url:'http://192.168.20.144:9090/api/getmoneyctrl',
        dataType:'jsonp',
        success: function (data) {
            console.log(data);
            var html = template('template',data);
            console.log(html);
            $('.content').append(html);
            $.each($(".review"), function(i, e) {
                $(e).html('<i></i>' + /\d{1,}/.exec((data.result[i].productComCount)));
            });
        }
    })
}