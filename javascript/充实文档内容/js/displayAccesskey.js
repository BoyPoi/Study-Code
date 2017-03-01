/**
 * Created by Administrator on 2016/7/27 0027.
 */
function displayAccesskeys(){
    if (!document.getElementsByTagName||!document.createElement||!document.createTextNode)return false;
    var links=document.getElementsByTagName("a");
    var akeys=new Array();
    for(var i=0;i<links.length;i++){
        var current_links=links[i];
        if(!current_links.getAttribute("accesskey"))continue;
        var key=current_links.getAttribute("accesskey");
        var text=current_links.lastChild.nodeValue;
        akeys[key]=text;
    }
    var list=document.createElement("ul");
    for(key in akeys){
        var text=akeys[i];
        var str=key+":"+text;
        var item=document.createElement("li");
        var item_text=document.createTextNode(str);
        item.appendChild(item_text);
        list.appendChild(item);
    }
    var header=document.createElement("h3");
    var header_text=document.createTextNode("Accesskeys");
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(list);
}
addLoadEvent(displayAccesskeys);