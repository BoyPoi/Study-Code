/**
 * Created by Administrator on 2016/7/29 0029.
 */
function stripeTable(){
    if (!document.getElementsByTagName)return false;
    var tables=document.getElementsByTagName("table");
    var odd,rows;
    for(var i=0;i<tables.length;i++){
        odd=false;
        var rows=tables[i].getElementsByTagName("tr");
        for(var j=0;j<rows.length;j++){
            if (odd==true){
                rows[j].style.backgroundColor="#ffc";
                odd=false;
            }else{
                odd=true;
            }
        }
    }
}
addLoadEvent(stripeTable);