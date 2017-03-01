/**
 * Created by Administrator on 2016/7/29 0029.
 */
function highlightRows() {
    if (!document.getElementsByTagName)return false;
    var rows = document.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        rows[i].onmouseover = function () {
            this.style.fontWeight = "bold";
        }
        rows[i].onmouseout = function () {
            this.style.fontWeight = "normal";
        }
    }
}
addLoadEvent(highlightRows);