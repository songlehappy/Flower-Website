
function Register(selector){
	this.ele=$(selector).get(0);
    this.sign();
}

Register.prototype.getClass=function(){
    var oSelf=this;
    oSelf.flag=true;
    $(oSelf.ele).find('input').siblings('span').each(function(){
    	var code=$(this).attr('class');
        if(code!='success'){
            oSelf.flag=false;
        }
    })
}

Register.prototype.sign=function(){
	var oSelf=this;
	$(oSelf.ele).find('.btn').on({
		click:function(){
			oSelf.getClass();
            if(oSelf.flag&&$(oSelf.ele).find('.checked').is(':checked')){
				$.ajax({
					type:"get",
					url:"php/Register.php",
					async:true,
					dataType:'json',
					data:{
						identity:$('.identity').val(),
						password:$('.password').val()
					},
					success:function(data){
						alert(data.content);
						if(data.content=='注册成功'){
                            location.replace('../Login/index.html');
						}else if(data.content=='用户名存在'){
							location.reload();
						}
					},
					error:function(xhr){
						console.log(xhr.responseText);
					}
				});
            }
		}
	})
}

