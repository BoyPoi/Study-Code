/**
 * Created by Administrator on 2017/1/13 0013.
 */
$(function(){
    rank($(".ranking_info>ul"));
});


function rank(dom){
    $.ajax({
        url:"http://192.168.20.144:9090/api/getbrandtitle",
        //url: "http://mmb.ittun.com/api/getbrandtitle",
        success:function(data){
            var html = template("ranking",data);
            //console.log(html);
            dom.html(html);
        }
    })
}