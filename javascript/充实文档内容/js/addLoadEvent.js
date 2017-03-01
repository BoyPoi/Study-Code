/**
 * Created by Administrator on 2016/7/27 0027.
 */
function addLoadEvent(func){
    var oldonload=window.onload;
    if(typeof window.onload!='function'){
        window.onload=func;}
    else{
        window.onload=function(){
            oldonload();
            func();
        }
    }
}