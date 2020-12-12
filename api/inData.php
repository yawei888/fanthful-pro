<?php

    # 用户名 商品图片 价格等 
    $name = $_GET['name'];
    $englishName=$_GET['englishName'];
    $pic = $_GET['pic'];
    $price=$_GET['price'];
    $buyCount=$_GET['buyCount'];
    $uid=$_GET['uid'];


    // print_r($name);
    // print_r($pic)
    $con = mysqli_connect('localhost','root','123456','shihuo');
    $sql = "INSERT INTO `newdata` (`id`, `name`, `pic`,`englishName`,`price`,`buyCount`,`uid`) VALUES (NULL, '$name', '$pic','$englishName','$price','$buyCount','$uid')";
    $res = mysqli_query($con,$sql);
    if($res){
        print_r(1);
    }