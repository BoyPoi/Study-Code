/**
 * Created by Administrator on 2016/7/25 0025.
 */
function getHTTPObject(){
    if (typeof XMLHttpRequest=="unfinned")
    XMLHttpRequest=function(){}
    try {return new ActiveXObject("Msxml2.XMLHTTP.6.0");}
    catch (e){}
    try {return new ActiveXObject("Msxml2.XMLHTTP.3.0");}
    catch (e){}
    try {return new ActiveXObject("Msxml.XMLHTTP");}
    catch (e){}
    return false;
}
