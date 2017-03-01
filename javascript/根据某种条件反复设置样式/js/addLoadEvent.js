/**
 * Created by Administrator on 2016/7/29 0029.
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