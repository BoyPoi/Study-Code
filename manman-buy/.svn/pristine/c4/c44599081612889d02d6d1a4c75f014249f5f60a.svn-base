<?php
    $categoryId = $_GET['categoryid'];
    $category = $_GET['category'];
    $pageid = $_GET['pageid'];
?>
<!doctype html>
<html lang="en">
<head>
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
    <meta charset="UTF-8">
    <title>比价搜索</title>
    <script src="./lib/less/less.min.js"></script>
    <link rel="stylesheet" href="./css/base.css"/>
    <link rel="shortcut icon" href="./images/logo.png"/>
    <link rel="stylesheet" type="text/css" href="./css/productlist.css">
</head>
<body>
<div class="top clearfix">
    <div class="fr appdown">
        <a href="javascript:history.go(-1);" title="app下载">
            <img src="./images/header_app.png" alt="app下载"/>
        </a>
    </div>
    <div class="fl logo">
        <a href="index.html" title="慢慢买比价网-手机版">
            <img src="./images/header_logo.png" alt="慢慢买比价网-手机版"/>
        </a>
    </div>
</div>
<form action="" method="">
    <div class="search">
        <div class="searchtext">
            <input type="text" placeholder="请输入你想要比价的商品"/>
        </div>
        <div class="searchbtn">
            <input type="submit" value="搜索"/>
        </div>
    </div>
</form>
<div id="product_list"></div>
<div id="pageNum" class="page clearfix">
	
</div>
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
<script type="text/html" id="product">
	<div class="productlist-title">
		<a href="index.html">首页></a>
		<a href="category.html">全部分类></a>
		<a href="#"><?php echo $category; ?>></a>
		<a href="" class="select">筛选</a>
	</div>
	{{if result}}
    	<div class="product-list">
    	    <ul>
    		    {{each result as value index}}
    		        <li>
    				    <a href="http://www.mmbuy.com/bijia.html?productid={{value.productId}}">
    					    <div class="pic">
    							{{#value.productImg}}
    						</div>
    						<div class="info">
    							<div class="tit">
    								{{value.productName}}
    							</div>
    							<div class="price">
    								<span>{{value.productPrice}}</span>
    							</div>
    							<div class="other">
    								<span>{{value.productQuote}}</span>
    								<span>{{value.productCom}}</span>
    							</div>
    						</div>
    					</a>
    				</li>
    			{{/each}}
    		</ul>
    	</div>
    {{/if}}
</script>
<script type="text/html" id="pageHtml">
	<div class="page clearfix">
    			<span class="w33">
    				{{if <?php echo $pageid ?><=1}}
    					<a href="http://www.mmbuy.com/productlist.php?categoryid=0&category=<?php echo $category ?>&pageid=1">
    						上一页
    					</a>
    				{{else}}
    					<a href="http://www.mmbuy.com/productlist.php?categoryid=0&category=<?php echo $category ?>&pageid=<?php echo ($pageid-1); ?>">
    						上一页
    					</a>
    				{{/if}}
    			</span>
    			<span class="w33">
    				<select id="selectPage" name="select">
    					
    				</select>
    			</span>
    			<span class="w33">
    				{{if <?php echo $pageid ?>>=3}}
    					<a href="http://www.mmbuy.com/productlist.php?categoryid=0&category=<?php echo $category ?>&pageid=1">
    						下一页
    					</a>
    				{{else}}
    					<a href="http://www.mmbuy.com/productlist.php?categoryid=0&category=<?php echo $category ?>&pageid=<?php echo ($pageid+1); ?>">
    						下一页
    					</a>
    				{{/if}}
    			</span>
    		</div>
</script>
<script type="text/javascript">
	$(function  () {
		$.ajax({
			url:"http://192.168.20.144:9090/api/getproductlist",
			data:{
				categoryid: <?php echo $categoryId; ?>,
				pageid: <?php echo $pageid; ?>
			},
			dataType:"json",
			success:function(data){
				console.log(data);
				var html = template("product",data);
				var pageHtml = template("pageHtml");
				$("#pageNum").html(pageHtml);
				$("#product_list").html(html);
				var htm = "",
					page = Math.ceil(data.totalCount/data.pagesize);
				for(var i=1;i<=page;i++){
					if(i == <?php echo $pageid ?>){
						htm += "<option value="+i+" selected >"+i+"/"+page+"</option>";
					} else {
						htm += "<option value="+i+" >"+i+"/"+page+"</option>";
					}
				}				     
			$("#selectPage").html(htm).on("change",function(){
					var pageId = $(this).val();
					console.log(pageId);
					window.location.href="http://www.mmbuy.com/productlist.php?categoryid="+<?php echo $categoryId;?>+"&category=<?php echo $category;?>"+"&pageid="+pageId;
				});
			}
		});
	})
</script>
</body>
</html>