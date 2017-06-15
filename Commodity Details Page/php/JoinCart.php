<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/10 0010
 * Time: 下午 8:01
 */

header('Content-Type:text/json;charset=utf-8');

$img=$_GET['img'];
$title=$_GET['title'];
$price=$_GET['price'];
$count=$_GET['count'];

if(!file_exists('../../JSON/productmessage.json')){
    $arr=array();
}else{
    $arr=json_decode(file_get_contents('../../JSON/productmessage.json'));
}

class Product{
    public $img;
    public $title;
    public $price;
    public $count;
}

$product=new Product();
$product->img=$img;
$product->title=$title;
$product->price=$price;
$product->count=$count;

$exist=false;
foreach($arr as $item){
    if($item->title==$title){
        $exist=true;
        $item->count+=$count;
    }
}
if($exist==false){
    array_push($arr,$product);
}

if(file_put_contents('../../JSON/productmessage.json', json_encode($arr))){
    echo json_encode(array('content'=>'加入购物车成功'));
}else{
    echo json_encode(array('content'=>'加入购物车失败'));
}




