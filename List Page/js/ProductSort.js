
function ProductSort(selector){
	this.ele=$(selector).get(0);
	//存一次原始数据
	this.arr=$(this.ele).find('.product_show dl');
	this.oSort();
}


ProductSort.prototype.oSort=function(){
	var oSelf=this;
	$(oSelf.ele).find('.price_sort li').on({
		click:function(){
			$(oSelf.ele).find('dl').css('display','block');
			if($(this).attr('class')=='default'){
				$(this).attr('class','sort1').siblings().attr('class','default');
				$(oSelf.ele).find('.keyword_sort li').attr('class','keyword_default');
				if($(this).html()=='价格'){
					oSelf.priceUp();
				}	
			}else if($(this).attr('class')=='sort1'){
				$(this).attr('class','sort2');
				if($(this).html()=='价格'){
					oSelf.priceDown();
				}
			}else if($(this).attr('class')=='sort2'){
				$(this).attr('class','sort1');
				if($(this).html()=='价格'){
					oSelf.priceUp();
				}
			}
		}
	})
	$(oSelf.ele).find('.keyword_sort li').on({
		click:function(){
			if($(this).attr('class')=='keyword_default'){
				$(this).attr('class','keyword_change').siblings().attr('class','keyword_default');
				$(oSelf.ele).find('.price_sort li').attr('class','default');
				if($(this).html()=='香槟玫瑰'){
					oSelf.keywordSort('香槟');
				}else if($(this).html()=='粉玫瑰'){
					oSelf.keywordSort('粉');
				}else if($(this).html()=='全部'){
					$(oSelf.ele).find('dl').css('display','block');
					$(oSelf.ele).find('.product_show').empty().append(oSelf.arr);
				}
			}
		}
	})
}

ProductSort.prototype.priceDown=function(){
	var oSelf=this;
	var priceArr=$(oSelf.ele).find('.product_show dl').sort(function(a,b){
		return $(b).find('span').html().slice(1,4)-$(a).find('span').html().slice(1,4);
	});
	$(oSelf.ele).find('.product_show').empty().append(priceArr);
}

ProductSort.prototype.priceUp=function(){
	var oSelf=this;
	var priceArr=$(oSelf.ele).find('.product_show dl').sort(function(a,b){
		return $(a).find('span').html().slice(1,4)-$(b).find('span').html().slice(1,4);
	})
	$(oSelf.ele).find('.product_show').empty().append(priceArr);
}

ProductSort.prototype.keywordSort=function(word){
	var oSelf=this;
	$(oSelf.ele).find('dl').css('display','block');
	$(oSelf.ele).find('dl').each(function(){
		if($(this).find('dd a').html().indexOf(word)==-1){
            $(this).css('display','none');
		}
	})
	
}
