/**
 * Created by Administrator on 2016/12/8.
 */

window.onload = function () {
    deleteBox();
}


function deleteBox() {
    var win = document.querySelector(".jd_win");
    var box = win.querySelector(".win_box");
    var deleteBox = null;
    var deleteList = document.querySelectorAll(".deleteBox");
    for (var i = 0; i < deleteList.length; i++) {
        deleteList[i].onclick = function () {
            deleteBox = this;
            win.style.display = "block";
            box.classList.add("bounceInDown");
            var deleteUp = deleteBox.querySelector("span:first-child");
            deleteUp.style.webkittransition = "all 1s";
            deleteUp.style.transition = "all 1s";
            deleteUp.style.webkitTransform = "rotate(-20deg) translateY(2px)";
            deleteUp.style.transform = "rotate(-20deg) translateY(2px)";
            deleteUp.style.webkitTransformOrigin = " 0 5px";
            deleteUp.style.transformOrigin = " 0 5px";
        }
    }

    document.querySelector(".cancel").onclick = function () {
        win.style.display = "none";
        if(deleteBox){
            var deleteUp = deleteBox.querySelector("span:first-child");
            deleteUp.style.webkitTransform = "none";
            deleteUp.style.transform = "none";
        }
    }
}
