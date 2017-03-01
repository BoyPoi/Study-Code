/**
 * Created by Administrator on 2016/12/7.
 */

window.common = {};
common.transitionEnd = function (dom, callback) {
    if (dom && typeof dom == "object") {
        dom.addEventListener("webkitTransitionEnd", function () {
            callback && callback();
        });
        dom.addEventListener("transitionEnd", function () {
            callback && callback();
        });
    }
}

/*封装tap*/
common.tap = function(dom,callback){
    if (dom && typeof dom == "object") {
        var isMove = false;
        var startTime = 0;
        dom.addEventListener("touchstart",function(e){
            //console.time("tap")
            startTime = Date.now();
        });
        dom.addEventListener("touchmove",function(e){
            isMove = true;
        });
        dom.addEventListener("touchend",function(e){
            //console.timeEnd("tap");
            /*一般要求tap的响应时间小于150*/
            if(!isMove && (Date.now()-startTime < 150)){
                callback && callback(e);
            }
            isMove = false;
            startTime = 0;
        });
    }
}