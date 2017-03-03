<?php
	$productId = $_GET['productId'];
?>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
    <title>page</title>
    <link rel="shortcut icon" href="./images/logo.png" />
    <link rel="stylesheet" href="./css/base.css"/>
    <link rel="stylesheet" href="./css/page.css"/>
</head>
<body>
<div class="cabbageTop_box" id="cabbageTop">
    <div class="cabbageTop" style="background-color:#ff841d;">
        <a href="javascript:history.go(-1);" class="return_icon"></a>

        <h3 class="top_title">白菜价·淘宝内部劵</h3>
        <a href="index.html" class="App-download"><img src="images/header_app.png" alt="APP下载"/></a>
    </div>
</div>
<div class="container"></div>
<div class="foot">
    <div class="foottop clearfix">
        <a href="">登录</a>
        <a href="">注册</a>
        <a href="#" style="border: 0;width: 40%;"><img src="./images/top.jpg" alt=""/>返回顶部</a>
    </div>
    <div class="footbottom">
        <p>
            <a href="" style="color: red">手机APP下载</a>
            <a href="">慢慢买手机版</a> -- 掌上比价平台
        </p>

        <p>
            m.manmanbuy.com
        </p>
    </div>
</div>
<script src="lib/jquery.js"></script>
<script src="lib/template.js"></script>
<script type="text/html" id="container">
    {{if result}}
    {{each result as value index}}
     {{if (value.productId == <?php echo $productId; ?>)}}
    <div class="cu-content">
        <h3>{{value.productName}}</h3>
        <h4>{{value.productPinkage}}</h4>

        <div class="info">
            <span>{{value.productFrom}}</span>
            <span>{{value.productTime}}</span>
            <span>{{value.productTips}}</span>
        </div>
        <div class="content">
            <div class="picwarp">
                {{#value.productImgSm}}
            </div>
            <div class="conn">
                <div>
                    <p>{{value.productInfo}}</p>
                </div>
                <div>
                    <p>
                        {{value.productInfo2}}
                    </p>
                </div>
                <div>
                    {{#value.productImgLg}}
                </div>
            </div>
            <center>
                <div class="drop">
                    {{#value.productCity}}
                </div>
            </center>
        </div>
        <div class="buy">
            <a href="#">前往购买</a>
        </div>
        <div class="comment">
            {{#value.productComment}}
        </div>
    </div>
    {{/if}}
    {{/each}}
    {{/if}}
</script>
<script>
    $(function () {
        $.ajax({
            url: "http://192.168.20.144:9090/api/getmoneyctrlproduct",
            dataType: "json",
            data:{productid:<?php echo $productId; ?>},
            success: function (data) {
                var html = template('container', data);
                console.log(html);
                $(".container").html(html);
            }
        })
    })
</script>
</body>
</html>