/**
 * Created by Administrator on 2017/1/15.
 */
function getQueryString(key){
    var reg = new RegExp("(^|&)"+key+"=([^&]*)(&|$)");
    var result = window.location.search.substr(1).match(reg);
    return result?decodeURIComponent(result[2]):null;
}
$(function () {
    renderProduct($('.details'),getQueryString('productid'));
    function renderProduct(dom, id) {
        $.ajax({
            url: 'http://192.168.20.144:9090/api/getdiscountproduct',
            data: {'productid': id},
            success: function (data) {
                var html = template('template', data);
                console.log(html);
                dom.html(html);
            }
        })
    }
})