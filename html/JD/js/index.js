/**
 * Created by Administrator on 2016/11/1.
 */
var ad= document.getElementById("ad");
var a = ad.getElementsByTagName("a");
a[1].onclick = function () {
    a[0].style.visibility= "hidden" ;
}