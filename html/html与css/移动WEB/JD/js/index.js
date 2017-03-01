/**
 * Created by Administrator on 2016/12/5.
 */

window.onload = function () {
    search()
    banner();
    downTime();
}
/*头部搜索区块*/
function search() {
    var headerBox = document.querySelector(".jd_header_box");
    var bannerBox = document.querySelector(".jd_banner");
    var height = bannerBox.offsetHeight;
    window.onscroll = function () {
        var top = document.body.scrollTop;
        if(top > height){
            opacity = 0.85
        }else{
            opacity = 0.85*(top/height)
        }
        headerBox.style.background = "rgba(201,21,35,"+ opacity +")"
    }

}

/*轮播图*/
function banner() {
    /*
     * 1.自动轮播
     * 2.点随着图片轮播做改变 对应上当前的图片的位置
     * 3.图片盒子能滑动
     * 4.当滑动的时候不超过一定的距离的时候 吸附回去
     * 5.当滑动的距离超过了一定距离的时候 图片相应的滚动 左或右
     * 一定的距离 就是1/3的图片宽度*/

    /*第一步*/
    /*轮播图大盒子*/
    var banner = document.querySelector(".jd_banner");
    /*图片宽度*/
    var width = banner.offsetWidth;
    /*img盒子*/
    var imgBox = banner.querySelector("ul:first-child");
    /*点盒子*/
    var pointBox = banner.querySelector("ul:last-child");
    /*所有的点*/
    var points = pointBox.querySelectorAll("li");
    /*第二步*/
    var index = 1;
    var timer = setInterval(function () {
        index++;
        /*通过translateX transition来实现动画*/
        transition(imgBox, "all .2s", -index * width);
    }, 3000);

    /*第三步*/
    /*动画结束 过渡结束 判断当前是第几张*/
    common.transitionEnd(imgBox, function () {
        if (index >= 9) {
            index = 1;
        } else if (index <= 0) {
            index = 8;
        }
        transition(imgBox, "none", -index * width);
        setpoint();
    });

    function transition(obj, string, distance) {
        obj.style.webkitTransition = string;
        /*兼容*/
        obj.style.transition = string;
        obj.style.webkitTransform = "translateX(" + distance + "px)";
        obj.style.transform = "translateX(" + distance + "px)";
    }

    /*去除过渡*/

    /*第四步*/
    function setpoint() {
        for (var i = 0; i < points.length; i++) {
            points[i].className = "none";
        }
        points[index - 1].className = "now";
    };

    /*第五步*/
    /*开始的X的坐标*/
    var startX = 0;
    /*移动的时候的X的坐标*/
    var moveX = 0;
    /*移动的距离*/
    var distanceX = 0;
    /*判断是否滑动*/
    var isMove = false;
    /*绑定事件*/
    imgBox.addEventListener("touchstart", function (event) {
        clearInterval(timer);
        startX = event.touches[0].clientX;
        console.dir(event);
    });
    imgBox.addEventListener("touchmove", function (event) {
        isMove = true;
        moveX = event.touches[0].clientX;
        distanceX = moveX - startX;
        transition(imgBox, "none", -index * width + distanceX);
    });
    imgBox.addEventListener("touchend", function () {
        if (Math.abs(distanceX) > (width / 3) && isMove) {
            if (distanceX > 0) {
                index--;
            } else {
                index++;
            }
            transition(imgBox, "all .2s", -index * width);
        } else {
            transition(imgBox, "all .2s", -index * width);
        }
        startX = 0;
        moveX = 0;
        distanceX = 0;
        isMove = false;
        clearInterval(timer);
        timer = setInterval(function () {
            index++;
            /*通过translateX transition来实现动画*/
            transition(imgBox, "all .2s", -index * width);
        }, 3000);
    });
}

/*倒计时*/
function downTime() {
    /*
     * 1.得到倒计时的时间 这里是固定的5小时
     * 2.每隔一秒 计算当前的时间格式
     * 渲染在页面中*/
    var time = 5 * 60 * 60;
    var skTime = document.querySelector(".time");
    var spans = skTime.querySelectorAll("span");
    var timer = setInterval(function () {
        time--;
        if (time < 0) {
            clearInterval(timer);
            return false;
        }
        var h = Math.floor(time / 3600);
        var m = Math.floor((time % 3600) / 60);
        var s = time % 60;
        spans[0].innerHTML = Math.floor(h / 10);
        spans[1].innerHTML = h % 10;

        spans[3].innerHTML = Math.floor(m / 10);
        spans[4].innerHTML = m % 10;

        spans[6].innerHTML = Math.floor(s / 10);
        spans[7].innerHTML = s % 10;
    }, 1000);
}