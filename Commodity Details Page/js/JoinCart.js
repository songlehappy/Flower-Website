
function JoinCart(selector){
	this.ele=$(selector).get(0);
	this.dialogOpen();
	this.dialogClose();
	this.countChange();
	this.sum();
}

//数量增加
JoinCart.prototype.countChange=function(){
	var oSelf=this;
	$(oSelf.ele).find('.plus').on({
		click:function(){
			$(oSelf.ele).find('.count_show').val($(oSelf.ele).find('.count_show').val()*1+1);
		}
	})
    $(oSelf.ele).find('.minus').on({
        click:function(){
            if($(oSelf.ele).find('.count_show').val()*1<=1){
                $(oSelf.ele).find('.count_show').val(1);
			}else{
                $(oSelf.ele).find('.count_show').val($(oSelf.ele).find('.count_show').val()*1-1);
			}
        }
    })
}

//打开加入购物车对话框
JoinCart.prototype.dialogOpen=function(){
	var oSelf=this;
	$(oSelf.ele).find('.buy_list li').eq(1).on({
		click:function(){
			oSelf.saveCookie();
			$(oSelf.ele).find('.joinCart').show();	
			oSelf.sum();
			$(oSelf.ele).find('.dialog_item p span:eq(0)').html(oSelf.count);
			$(oSelf.ele).find('.dialog_item p span:eq(1)').html('¥'+oSelf.price);	
		}
	})
}
//关闭对话框
JoinCart.prototype.dialogClose=function(){
	var oSelf=this;
	$(oSelf.ele).find('.cart_dialog img').on({
		click:function(){
			$(oSelf.ele).find('.joinCart').hide();
		}
	})
	$(oSelf.ele).find('.dialog_item a').eq(1).on({
		click:function(){
			$(oSelf.ele).find('.joinCart').hide();
			return false;
		}
	})
	
}

//保存cookie
JoinCart.prototype.saveCookie=function(){
	var flag=false;
	var obj={};
	obj.img=$(this.ele).find('.small_img img').eq(0).attr('src');
	obj.title=$(this.ele).find('.present_title h1').html();
	obj.price=$(this.ele).find('.price b').html();
	obj.count=$(this.ele).find('.count_show').val();
	if(!$.cookie('product')){
		var arr=[];
	}else{
		var arr=JSON.parse($.cookie('product'));
		for(var i=0;i<arr.length;i++){
			if(obj.title==arr[i].title){
				arr[i].count=arr[i].count*1+obj.count*1;
				flag=true;
			}	
		}
	}
	if(flag==false){
		arr.push(obj);
	}
	$.cookie('product',JSON.stringify(arr),{expires: 7,path:'/'});
}

//计算加入购物车总数量和总价格，并显示到页面
JoinCart.prototype.sum=function(){
	this.count=0;
	this.price=0;
	if($.cookie('product')){
		var arr=JSON.parse($.cookie('product'));
		for(var i=0;i<arr.length;i++){
			this.count+=arr[i].count*1;
			this.price+=arr[i].price.slice(1)*1*arr[i].count*1;
		}
	}
	$('body').find('.list2 span').eq(0).html(this.count);
}
