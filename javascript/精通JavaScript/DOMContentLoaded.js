/**
 * DOMContentLoaded事件，该事件会在文档完全载入并解析后触发
 * Created by Administrator on 2016/12/28.
 */

//跨浏览器的DOMContentLoaded
if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', function () {
        document.removeEventListener('DOMContentLoaded', arguments.callee);
    })} else if (document.attachEvent) {
        document.attachEvent('onreadystatechange',function(){
          document.detachEvent('onreadystatechange',arguments.callee);
        })
    }

