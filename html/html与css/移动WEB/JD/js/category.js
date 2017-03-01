/**
 * Created by Administrator on 2016/12/7.
 */
window.onload = function () {
    leftSwipe();
    rightSwipe()
};

/*左菜单*/
function leftSwipe() {
    /*1.菜单滑动起来
     * 2.当滑动到一定的距离的时候不能滑动
     * 3.当触摸结束的时候 需要判断是否在定位区间  否则吸附回去  定位回去
     * 4.点击菜单的时候改变当前样式
     * 点击菜单的时候 定位到当前的那个菜单的顶部*/
    var parentBox = document.querySelector(".jd_category_left");
    var childBox = parentBox.querySelector("ul");
    var parentHeight = parentBox.offsetHeight;
    var childHeight = childBox.offsetHeight;
    var maxY = 0;
    var minY = parentHeight - childHeight;
    var distance = 100;
    var maxSwipe = maxY + distance;
    var minSwipe = minY - distance;
    var startY = 0;
    var moveY = 0;
    var distanceY = 0;
    var isMove = false;
    var currY = 0;
    /*记录当前的定位，相当于轮播图中的index*/

    childBox.addEventListener("touchstart", function (e) {
        isMove = true;
        startY = e.touches[0].clientY;
    });
    childBox.addEventListener("touchmove", function (e) {
        moveY = e.touches[0].clientY;
        distanceY = moveY - startY;
        if ((currY + distanceY) < maxSwipe && (currY + distanceY) > minSwipe) {
            /*清除过渡*/
            transition(childBox, "none", currY + distanceY);
            /*设置定位*/
        }
    });
    childBox.addEventListener("touchend", function (e) {
        /*记录当前的位置 上一次当前的定位+这一次改变的定位*/
        if ((currY + distanceY) > maxY) {
            currY = maxY;
            transition(childBox, "all .2s", currY);
        } else if ((currY + distanceY) < minY) {
            currY = minY;
            transition(childBox, "all .2s", currY);
        } else {
            currY = currY + distanceY;
        }
        startY = 0;
        moveY = 0;
        distanceY = 0;
        isMove = false;
    });

    var lis = childBox.querySelectorAll("li")
    common.tap(childBox, function (e) {
        for (var i = 0; i < lis.length; i++) {
            lis[i].index = i;
            lis[i].className = "";
        }
        var li = e.target.parentNode;
        li.className = "now";
        var translateY = -li.index*50;
        if(translateY > minY){
            currY = translateY;
            transition(childBox,"all .2s",currY);
        } else {
            currY = minY;
            transition(childBox,"all .2s",currY);
        }
    });

    function transition(obj, string, distance) {
        obj.style.webkitTransition = string;
        /*兼容*/
        obj.style.transition = string;
        obj.style.webkitTransform = "translateY(" + distance + "px)";
        obj.style.transform = "translateY(" + distance + "px)";
    }
}

/*右侧内容*/
function rightSwipe() {
    itcast.iScroll({
        swipeDom:document.querySelector(".jd_category_right"),
        swipeType:'y',
        swipeDistance:100
    })
}