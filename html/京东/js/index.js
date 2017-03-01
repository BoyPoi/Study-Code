/**
 * Created by Administrator on 2016/11/1.
 */
var ad= document.getElementById("ad");
var a = ad.getElementsByTagName("a");
a[1].onclick = function () {
    a[0].className = "hide" ;
    a[1].className = "hide";
    //a[0].style.display = "none";
    //a[1].style.display = "none";

}

//搜索框
var txt = document.getElementById("txt");
var flag = true;
txt.onfocus = function() {
    if (this.value === "卡通手机壳" && flag===true) {
        this.value = "";
    }
}
txt.onblur = function(){
    if(this.value === ""){
        this.value = "卡通手机壳";
        flag = true;
    }else{
        flag = false;
    }
}

//主体滑动图
var domain = document.getElementById("domain");
var image = document.getElementById("image");
var ul = document.getElementById("list");
var lis = ul.getElementsByTagName("li");
var arrowsl = document.getElementById("arwl");
var arrowsr = document.getElementById("arwr");
var arrows = document.getElementById("arw");
var i = 1;
domain.onmouseover = function(){
    repleaceClassName(arrows,"hide","show");
}
domain.onmouseout = function(){
    repleaceClassName(arrows,"show","hide");
}
arrowsr.onclick = function(){
    if(i==lis.length){
        i=0;
    }
    i++;
    solider(lis,i);
}
arrowsl.onclick = function(){
    if(i==1){
        i=lis.length+1;
    }
    i--;
    solider(lis,i);
}
for(var j = 0;j<lis.length;j++){
    lis[j].value = j;
    lis[j].onmouseover = function(){
        console.log(this.value);
        i = this.value + 1;
        solider(lis,i);
    }
}
function solider(element,num){
    for(var i=0;i<element.length;i++){
        element[i].className = "";
    }
    element[num-1].className = "cruent";
    image.src = "image/jd"+num+"-tanner.jpg";
}
function repleaceClassName(element,oldStr,newStr){
    element.className = element.className.replace(oldStr,newStr);
}
function sold(){
    arrowsr.onclick();
    setTimeout("sold()",2000);
}
window.onload=sold();