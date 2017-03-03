/**
 * Created by Administrator on 2017/1/15.
 */
window.onload = function () {
    $.ajax({
        url:'http://192.168.20.144:9090/api/getinlanddiscount',
        dataType:'json',
        success: function (data) {
            var html = template('template',data);
            $('.content').append(html);
        }
    })
}