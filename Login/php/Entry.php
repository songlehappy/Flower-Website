<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/10 0010
 * Time: 上午 11:37
 */

header('Content-Type:text/json;charset=utf-8');

$jsonString=json_decode(file_get_contents('../../Resource/JSON/usermessage.json'));

$identity=$_GET['identity'];
$password=$_GET['password'];

$a=false;
foreach ($jsonString as $item){
    if($item->identity==$identity&&$item->password==$password){
    	$a=true;
        die(json_encode(array('content'=>'登录成功')));
    }
}
if($a==false){
	 echo json_encode(array('content'=>'用户名或密码错误')); 
}
