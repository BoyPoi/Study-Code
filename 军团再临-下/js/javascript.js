/**
 * Created by Administrator on 2016/11/15 0015.
 */
//默认 vengeance 亮起
//经过 vengeance havoc 亮起
//离开 vengeance havoc 灰色
//点击 vengeance 亮起 havoc 灰色
window.onload = function() {
    var menu1 = document.getElementById("menu1");
    var menu2 = document.getElementById("menu2");
    var vengeance1 = document.getElementById("menu1-vengeance");
    var havoc2 = document.getElementById("menu2-havoc");

    menu1.onclick = function() {
        menu1.style.backgroundPositionX = -1514 + "px";
        menu2.style.backgroundPositionX = -1171 + "px";
        vengeance1.style.display = "block";
        havoc2.style.display = "none";
    }
    menu2.onclick = function() {
            menu2.style.backgroundPositionX = -1697 + "px";
            menu1.style.backgroundPositionX = -1337 + "px";
            havoc2.style.display = "block";
            vengeance1.style.display = "none";
        }
        // 在li下面 动态创建current 2px白色边框 黑色透明
    var ul = vengeance1.children[0];
    var lis = ul.children;
    //var jie=ul.children[2];
    var jie = ul.getElementsByTagName("jie")
    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].onclick = function() {
            for (var j = 0; j < jie.length; j++) {
                jie[j].style.display = "none";
            }

            this.style.display = "block";
        }

    }


    //
    //
    //
    //
    //
    //
    //
    //for(var j=0;j<lis.length;j++){
    //    lis[j].onmouseover= function () {
    //        for(var k=0;k<lis.length;k++){
    //            lis[k].className="";
    //
    //        }
    //        this.className="jie";
    //    }
    //
    //}


    //for(var i=0;i<lis.length;i++){
    //    lis[i].onmouseover= function () {
    //
    //    }
    //}

}