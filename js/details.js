"use strict";var reg=/id=(\d+)/;reg.test(location.search);var id=reg.exec(location.search)[1];function renderDet(a){$(".datail_view").html(' <div class="datail_left">\n    <ul>\n        <li class="tab_1 active"><img src="'+a.pic+'" alt=""></li>\n        <li class="tab_1"><img src="../images/detail_01.jpg" alt=""></li>\n        <li class="tab_1"><img src="../images/detail_02.jpg" alt=""></li>\n        <li class="tab_1"><img src="../images/detail_03.jpg" alt=""></li>\n        <li class="tab_1"><img src="../images/detail_04.jpg" alt=""></li>\n    </ul>\n</div>\n<div class="datail_middle">\n    <ul>\n        <li class="tab_2 active"><img src="'+a.pic+'" alt="">\n        <div class="mask"></div>\n            <div class="big">\n                <img src="'+a.pic+'" alt="" class="bigImg">\n            </div>\n        </li>\n        <li class="tab_2"><img src="../images/detail_01.jpg" alt=""></li>\n        <li class="tab_2"><img src="../images/detail_02.jpg" alt=""></li>\n        <li class="tab_2"><img src="../images/detail_03.jpg" alt=""></li>\n        <li class="tab_2"><img src="../images/detail_04.jpg" alt=""></li>\n    </ul>\n    \n</div>\n<div class="datail_right">\n    <h6>'+a.name+"</h6>\n    <p>"+a.englishName+"</p>\n    <span>￥"+a.price+'</span><br>\n    <div class="btn-group" role="group" aria-label="...">\n        <button type="button" class="btn btn-default">min</button>\n        <button type="button" class="btn btn-default">Middle</button>\n        <button type="button" class="btn btn-default">max</button>\n    </div>\n    <p>\n        <button class="buyBtn">立即购买</button>\n    </p>\n    <p>\n        <button class="addcarBtn">加入购物车</button><span></span>\n    </p>\n\n    <div class="details_con">\n        <p>\n            <i class="iconfont iconshoucang"></i><span>收藏</span>\n            <i class="iconfont iconfenxiang "></i><span>分享</span>\n            <span>发售时间</span>\n        </p>\n        <p>\n            <span>条形码：497619086264&nbsp;货号：4976219086264</span>\n        </p>\n        <p><span>所属作品：Monster Hunter</span></p>\n    </div>\n</div>')}console.log(id),$.ajax({url:"../api/getDetail.php",method:"get",data:{uid:id},dataType:"json",async:!0,success:function(a){renderDet(a.detail)},error:function(a){console.log(a)}}),$(".datail_view").on("mousemove",".tab_1",function(){$(this).addClass("active").siblings().removeClass(".active");var a=$(this).index();$(".datail_view").find(".tab_2").eq(a).addClass("active").siblings().removeClass("active")}),$(".datail_view").on("click",".buyBtn",function(){location.href="../html/car.html"}),$(".datail_view").on("click",".addcarBtn",function(){var a=getCookie("login");a||(location.href="../html/zhuce.html",localStorage.setItem("url","../html/detail.html?id="+id)),$.ajax({url:"../api/addCarData.php",type:"get",data:{username:a,uid:id},dataType:"json",async:!0,success:function(a){console.log(a)},error:function(a){console.log(a)}}),$(".datail_view").find(".addcarBtn").next().html("已添加到购物车啦");var i=setInterval(function(){$(".datail_view").find(".addcarBtn").next().html(""),clearInterval(i)},1200)}),$(".datail_view").on("mouseover",".tab_2",function(){$(".datail_view").find(".mask").show(),$(".datail_view").find(".big").show()}),$(".datail_view").on("mouseout",".tab_2",function(){$(".datail_view").find(".mask").hide(),$(".datail_view").find(".big").hide()}),$(".datail_view").on("mousemove",".tab_2",function(){var a=window.event,i=a.pageX-this.offsetLeft,t=a.pageY-this.offsetTop,n=i-$(".datail_view").find(".mask").width()/2,a=t-$(".datail_view").find(".mask").height()/2,i=$(".datail_view").find(".tab_2").width()-$(".datail_view").find(".mask").width();n<=0?n=0:i<=n&&(n=i),a<=0?a=0:i<=a&&(a=i),$(".datail_view").find(".mask").css("left",n+"px"),$(".datail_view").find(".mask").css("top",a+"px");t=$(".datail_view").find(".bigImg").width()-$(".datail_view").find(".big").width(),n=n*t/i,i=a*t/i;$(".datail_view").find(".bigImg").css("left",-n+"px"),$(".datail_view").find(".bigImg").css("top",-i+"px")});