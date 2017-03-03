/**
 * Created by Administrator on 2017/1/15.
 */
window.onload = function () {
    $.ajax({
        url:'http://192.168.20.144:9090/api/getsitenav',
        dataType:'jsonp',
        success: function (data) {
            //console.log(data);
            var html = template('web',data);
            //console.log(html);
            $('.nav').append(html);
        }
    })
}
