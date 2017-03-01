/**
 * Created by Administrator on 2016/12/11.
 */

$(function () {
    banner();
    initTabs();
    $('[data-toggle="tooltip"]').tooltip()
});
/*动态响应式轮播图*/
function banner() {
    /*
     * 1、获取后台的轮播图  图片数据 （ajax）
     * 2、需要判断当前的屏幕尺寸是移动端还是非移动端
     * 3、把后台数据渲染成对应的html字符串 （字符串拼接 & 模板引擎）
     * 4、把渲染完成的html填充到对应的盒子里面  （.html()）
     * 5、在屏幕尺寸改变的时候需要重新渲染页面  （监听页面尺寸的改变）
     * */
    var myData = "";
    /*1、获取后台的轮播图路径*/
    var getData = function (callback) {
        if (myData) {
            callback && callback(myData)
            return false;
        }
        $.ajax({
            /*js是被html引用的 发出的请求是相对于html html相对于index.json 多了一层js文件夹
             * 相对路径的话  还需要加目录
             * */
            url: './js/index.json',
            data: {},
            type: 'get',
            dataType: 'json',
            success: function (data) {
                myData = data;
                callback && callback(myData)
            }
        });
    }

    /*渲染的方法*/
    var renderHtml = function () {
        getData(function (data) {
            var width = $(window).width();
            var isMobile = false;
            if (width < 768) {
                isMobile = true;
            }
            /*准备需要解析的数据*/
            /*我们需要两个模板*/
            var templatePoint = _.template($('#template_point').html());
            var templateImage = _.template($('#template_item').html());
            /*{model:data} 传入的数据  名字是model 数据是data*/
            var pointHtml = templatePoint({model: data});
            var imageData = {
                list: data,
                isMobile: isMobile
            }
            var imageHtml = templateImage({model: imageData});
            $(".carousel-indicators").html(pointHtml);
            $(".carousel-inner").html(imageHtml);
        });
    }
    $(window).on('resize', function () {
        renderHtml();
    }).trigger('resize');
    /*立即执行这个事件*/

    var startX = 0;
    var moveX = 0;
    var distanceX = 0;
    var isMove = false;
    $(".wjs_banner").on("touchstart", function (e) {
        startX = e.originalEvent.touches[0].clientX;
    });
    $(".wjs_banner").on("touchmove", function (e) {
        moveX = e.originalEvent.touches[0].clientX;
        distanceX = moveX - startX;
        isMove = true;
    });
    $(".wjs_banner").on("touchend", function (e) {
        if (Math.abs(distanceX) > 50) {
            if(distanceX < 0){
                $('.carousel').carousel('next');
            } else {
                $('.carousel').carousel('prev');
            }
        }

        /*参数重置*/
        startX = 0;
        moveX = 0;
        distanceX = 0;
        isMove = false;
    });
}

/*初始化tabs*/
function initTabs(){
    var ul = $('.wjs_product .nav-tabs');
    var lis = ul.find('li');
    var width = 0;
    $.each(lis,function(i,o){
        /*通过widh 只能获得内容的宽度*/
        /*innerwidth()  内容+内边距*/
        /*outerwidth()  内容+内边距+边框*/
        /*outherwidth(true) 内容+内边距+边框+外边距*/
        width += $(o).innerWidth();
    })
    ul.width(width);

    /*实现移动端的滑动*/
    itcast.iScroll({
        swipeDom:$('.wjs_product_tabsParent').get(0),
        swipeType:'x',
        swipeDistance:50
    });
}

