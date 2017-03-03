/**
 * Created by Administrator on 2017/1/13 0013.
 */

$(function() {
    $(function() {
        var img, text;
        entry($(".info>ul"), getQueryString("brandtitleid"));
        navRanking($(".info_nav_rank>ul"), getQueryString("brandtitleid"));

        review($(".review"), getQueryString("brandtitleid"));
        //imgRep($(".review>ul>li>a"),getQueryString("brandtitleid"));
    });

    function entry(dom, id) {
        $.ajax({
            url: "http://192.168.20.144:9090/api/getbrand",
            //url: "http://mmb.ittun.com/api/getbrand",
            data: { "brandtitleid": id },
            success: function(data) {
                var html = template("infoTep", data);
                //console.log(html);
                dom.html(html);
            }
        })
    }

    function entry(dom, id) {
        $.ajax({
            url: "http://192.168.20.144:9090/api/getbrand",
            //url: "http://mmb.ittun.com/api/getbrand",
            data: { "brandtitleid": id },
            success: function(data) {
                var html = template("infoTep", data);
                //console.log(html);
                dom.html(html);
            }
        })
    }




    function navRanking(dom, id) {
        $.ajax({
            url: "http://192.168.20.144:9090/api/getbrandproductlist",
            data: {
                "brandtitleid": id,
                pagesize: 4
            },
            success: function(data) {
                var html = template("nav_rank", data);
                //console.log(html);
                dom.html(html);
            }
        })
    }

    function navRanking(dom, id) {
        $.ajax({
            url: "http://192.168.20.144:9090/api/getbrandproductlist",
            pagesize: 4,
            data: { "brandtitleid": id },
            success: function(data) {
                var html = template("nav_rank", data);
                //console.log(html);
                dom.html(html);
            }
        })
    }

    function entry(dom, id) {
        $.ajax({
            url: "http://192.168.20.144:9090/api/getbrand",
            //url: "http://mmb.ittun.com/api/getbrand",
            data: { "brandtitleid": id },
            success: function(data) {
                var html = template("infoTep", data);
                //console.log(html);
                dom.html(html);
            }
        })
    }


    function navRanking(dom, id) {
        $.ajax({
            url: "http://192.168.20.144:9090/api/getbrandproductlist",
            data: { "brandtitleid": id, pagesize: 4 },
            success: function(data) {
                var html = template("nav_rank", data);
                //console.log(html);
                dom.html(html);
                img = data.result[0].productImg;
                text = data.result[0].productName;
                console.log(text);
            }
        })
    }


    function getQueryString(key) {
        var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
        var result = window.location.search.substr(1).match(reg);
        return result ? decodeURIComponent(result[2]) : null;
    }

    function getQueryString(key) {
        var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
        var result = window.location.search.substr(1).match(reg);
        return result ? decodeURIComponent(result[2]) : null;
    }

    function review(dom, id) {
        $.ajax({
            url: "http://192.168.20.144:9090/api/getproductcom",
            data: { "productid": id },
            success: function(data) {
                var html = template("review", data);
                //console.log(html);
                dom.html(html);
                $(".review .pic").html(img, text);
                $(".review .text").html(text);
            }
        })
    }



    function getQueryString(key) {
        var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
        var result = window.location.search.substr(1).match(reg);
        return result ? decodeURIComponent(result[2]) : null;
    }
})