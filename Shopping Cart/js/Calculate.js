/**
 * Created by Administrator on 2017/6/11 0011.
 */

function Calculate(selector){
    this.ele=$(selector).get(0);
    this.price();
    this.count();
    this.plus();
    this.minus();
    this.delete();
    this.singleAction();
}

Calculate.prototype.price=function(){
    var oSelf=this;
    var sum=0;
    $(oSelf.ele).find('.product_select').each(function(){
        sum+=($(this).parent().find('.second').html().slice(1,6)*1)*($(this).parent().find('.third input').val());        
    })
    $(oSelf.ele).find('.product_price b').html('¥'+sum+'.00');
}

Calculate.prototype.count=function(){
    var oSelf=this;
    var sum=0;
    $(oSelf.ele).find('.product_select').each(function(){
        sum+=$(this).parent().find('.third input').val()*1;
    })
    $(oSelf.ele).find('.product_num span').html(sum);
}

Calculate.prototype.plus=function(){
    var oSelf=this;
    $(oSelf.ele).find('.product .plus').each(function(index){
        $(this).on({
            click:function(){
                $(oSelf.ele).find('.product .third input').eq(index).val( $(oSelf.ele).find('.product .third input').eq(index).val()*1+1);
                oSelf.price();
                oSelf.count();
                var arr=JSON.parse($.cookie('product'));
                arr[index].count=arr[index].count*1+1;
                $.cookie('product',JSON.stringify(arr),{expires: 7,path:'/'});
            }
        })
    })
}

Calculate.prototype.minus=function(){
    var oSelf=this;
    $(oSelf.ele).find('.product .minus').each(function(index){
        $(this).on({
            click:function(){
            	//cookie数量减少操作
            	var arr=JSON.parse($.cookie('product'));
            	if(arr[index].count<=1){
            		arr[index].count=1;
            	}else{
            		arr[index].count=arr[index].count*1-1;
            	}
                $.cookie('product',JSON.stringify(arr),{expires: 7,path:'/'});
                //数量减少操作
                if($(oSelf.ele).find('.product .third input').eq(index).val()<=1){
                    $(oSelf.ele).find('.product .third input').eq(index).val(1);
                }else{
                    $(oSelf.ele).find('.product .third input').eq(index).val( $(oSelf.ele).find('.product .third input').eq(index).val()*1-1);
                }
                oSelf.price();
                oSelf.count(); 
            }
        })
    })
}


Calculate.prototype.delete=function(){
    var oSelf=this;
    //单个商品删除操作
    $(oSelf.ele).find('.fourth').on({
    	click:function(){
    		var index=$(this).parent().parent().index();
    		$(this).parent().parent().remove();
    		var arr=JSON.parse($.cookie('product'));
    		arr.splice(index,1);
    		$.cookie('product',JSON.stringify(arr),{expires: 7,path:'/'});
    		//重新计算价格和总数量
            oSelf.price();
            oSelf.count();
            //当商品全部删除时，全不选
            oSelf.allNoAction();
    	}
    })
      
    //全选和全不选操作
    $(oSelf.ele).find('.cart_top div').on({
        click:function(){
            if($(this).attr('class')=='cart_img_default'){
                $(this).attr('class','cart_img_change');
                $(oSelf.ele).find('.product_noselect').attr('class','product_select');
            }else if($(this).attr('class')=='cart_img_change'){
                $(this).attr('class','cart_img_default');
                $(oSelf.ele).find('.product_select').attr('class','product_noselect');
            }
            oSelf.price();
            oSelf.count();
        }
    })
    
    //删除选中商品
     $(oSelf.ele).find('.calculate p').on({
     	click:function(){
     		var indexArr=[];
     		$(oSelf.ele).find('.product').each(function(index){
     			if($(this).find('div').eq(0).attr('class')=='product_select'){
     				indexArr.push(index);
     				$(this).remove();
     			}
     		})
     		//删除选中商品的cookie
     		var arr=JSON.parse($.cookie('product'));
			for(var i=indexArr.length-1;i>=0;i--){
 				arr.splice(indexArr[i],1);
 			}
			$.cookie('product',JSON.stringify(arr),{expires: 7,path:'/'});
			//重新计算价格和总数量
     		oSelf.price();
            oSelf.count(); 
            //当商品全部删除时，全不选
            oSelf.allNoAction();
     	}
     })
}

//单个商品选中操作
Calculate.prototype.singleAction=function(){
	var oSelf=this;
	this.allAction();
	$(oSelf.ele).find('.product_select').each(function(){
        $(this).on({
            click:function(){
                if($(this).attr('class')=='product_select'){
                    $(this).attr('class','product_noselect');
                    $(oSelf.ele).find('.cart_top div').attr('class','cart_img_default');
                }else if($(this).attr('class')=='product_noselect'){
                    $(this).attr('class','product_select');
					oSelf.allAction();
                }
                oSelf.price();
                oSelf.count();
            }
        })
    })
}

//购物车为空，有商品加入购物车时，全选
Calculate.prototype.allAction=function(){
	var length=$(this.ele).find('.product_select').length+$(this.ele).find('.product_noselect').length;
	if(length>=1){
		if($(this.ele).find('.product_select').length==length){
	    	$(this.ele).find('.cart_top div').attr('class','cart_img_change');
	    }   
	}
}
//全不选
Calculate.prototype.allNoAction=function(){
	if($(this.ele).find('.fourth').length==0){
    	$(this.ele).find('.cart_top div').attr('class','cart_img_default');
    }
}





