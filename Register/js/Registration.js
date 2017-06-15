
function Registration(selector){
	this.ele=$(selector).get(0);
	this.identityCheck();
	this.passwordCheck();
	this.confirmCheck();
	this.codeCheck();
	this.codeShow();
	this.changeCode();
}

Registration.prototype.check=function(select){
	var oSelf=this;
	$(oSelf.ele).find(select).on({
		focus:function(){
			$(this).siblings('span').css('display','block');
		},
		blur:function(){
			if($(this).val()==''){
				$(this).siblings('span').css('display','none');
			}
		}
	})
}

Registration.prototype.identityCheck=function(){
	var oSelf=this;
	oSelf.check('.identity');
	$(oSelf.ele).find('.identity').on({
		change:function(){
			if(!/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test($(this).val())&&!/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/.test($(this).val())){
				$(this).siblings('span').html('用户名只能用邮箱注册');
				$(this).siblings('span').attr('class','false');
			}else{
				$(this).siblings('span').attr('class','success');
				$(this).siblings('span').html('验证通过');
			}
		}
	})	
}

Registration.prototype.passwordCheck=function(){
	var oSelf=this;
	oSelf.check('.password');
	$(oSelf.ele).find('.password').on({
		change:function(){
			if(!/^\S{6,20}$/.test($(this).val())){
				$(oSelf.ele).find('.info1_list').css('display','none');
				$(this).siblings('span').html('密码长度只能在6-20位字符之间');
				$(this).siblings('span').attr('class','false');
			}else if(/^\S{6,10}$/.test($(this).val())){
				$(oSelf.ele).find('.info1_list').css('display','block');
				$(oSelf.ele).find('.info1_list span').removeClass().eq(0).addClass('safe');
				$(this).siblings('span').attr('class','success');
				$(this).siblings('span').html('密码可用');
			}else if(/^\S{11,15}$/.test($(this).val())){
				$(oSelf.ele).find('.info1_list').css('display','block');
				$(oSelf.ele).find('.info1_list span').removeClass().eq(1).addClass('safe');
				$(this).siblings('span').attr('class','success');
				$(this).siblings('span').html('密码可用');
			}else{
				$(oSelf.ele).find('.info1_list').css('display','block');
				$(oSelf.ele).find('.info1_list span').removeClass().eq(2).addClass('safe');
				$(this).siblings('span').attr('class','success');
				$(this).siblings('span').html('密码可用');
			}
		}
	})
}

Registration.prototype.confirmCheck=function(){
	var oSelf=this;
	oSelf.check('.confirm');
	$(oSelf.ele).find('.confirm').on({
		change:function(){
			if($(this).val()!=$(oSelf.ele).find('.password').val()){
				$(this).siblings('span').html('两次输入密码不一致');
				$(this).siblings('span').attr('class','false');
			}else{
				$(this).siblings('span').attr('class','success');
				$(this).siblings('span').html('密码输入正确');
			}
		}
	})
}

Registration.prototype.codeCheck=function(){
	var oSelf=this;
	oSelf.check('.code');
	$(oSelf.ele).find('.code').on({
		change:function(){
			if($(this).val()!=$(oSelf.ele).find('.codeshow').html()){
				$(this).siblings('span').html('验证码错误');
				oSelf.changeCode();
				$(this).siblings('span').attr('class','false');
			}else{
				$(this).siblings('span').attr('class','success');
				$(this).siblings('span').html('验证码输入正确');
			}
		}
	})
}

Registration.prototype.codeShow=function(){
	var oSelf=this;
	$(oSelf.ele).find('.changeCode a').on({
		click:function(){
			oSelf.changeCode();
			return false;
		}
	})
}

Registration.prototype.changeCode=function(){
	var arr=[0,1,2,3,4,5,6,7,8,9];
	var sum='';
	for(var i=0;i<4;i++){
		sum+=arr[Math.floor(Math.random()*10)];
	}
	$(this.ele).find('.codeshow').html(sum);
}