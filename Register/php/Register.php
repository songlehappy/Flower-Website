<?php

header('Content-Type:text/json;charset=utf-8');

$identity=$_GET['identity'];
$password=$_GET['password'];

if(!file_exists('../../Resource/JSON/usermessage.json')){
	$arr=array();
}else{
	$arr=json_decode(file_get_contents('../../Resource/JSON/usermessage.json'));
}

class Person{
	public $identity;
	public $password;
}
$person=new Person();
$person->identity=$identity;
$person->password=$password;

$exist=false;
foreach($arr as $item){
	if($item->identity==$identity){
		$exist=true;
		die(json_encode(array('content'=>'用户名存在')));
	}
}

if($exist==false){
	array_push($arr,$person);
}

if(file_put_contents('../../Resource/JSON/usermessage.json', json_encode($arr))){
	echo json_encode(array('content'=>'注册成功'));
}else{
	echo json_encode(array('content'=>'数据保存失败'));
}

?>