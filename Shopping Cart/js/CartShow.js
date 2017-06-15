/**
 * Created by Administrator on 2017/6/11 0011.
 */

function CartShow(selector){
    this.ele=$(selector).get(0);
    this.show();
}

CartShow.prototype.show=function(){
	if($.cookie('product')){
		var arr=JSON.parse($.cookie('product'));
		for(var i=0;i<arr.length;i++){
			this.creatProduct(arr[i].img,arr[i].title,arr[i].price,arr[i].count);
		}
    }
}

CartShow.prototype.creatProduct=function(img,title,price,count){
	var product=$('<div class="product"><div class="product_select"></div><ul class="list5"><li class="first"><div class="product_img"><img/></div><p class="name"></p></li><li class="second"></li><li class="third"><span class="minus">-</span><input type="text" /><span class="plus">+</span></li><li class="fourth">删除</li></ul></div>').get(0);
	$(product).find('.product_img img').attr('src',img);
	$(product).find('.name').html(title);
	$(product).find('.second').html(price+'.00');
	$(product).find('.third input').val(count);
	$(this.ele).append($(product));
}
