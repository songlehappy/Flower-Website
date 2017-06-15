
function Carousel(selector){
	this.ele=$(selector).get(0);
	this.count=0;
	this.auto();
	this.tag();
}

Carousel.prototype.auto=function(){
	var oSelf=this;
	var timer=setInterval(function(){
		++oSelf.count;
		oSelf.change();
	},3000);
	$(oSelf.ele).on({
		mouseenter:function(){
			clearInterval(timer);
		},
		mouseleave:function(){
			timer=setInterval(function(){
				++oSelf.count;
				oSelf.change();
			},3000);
		}
	})
}

Carousel.prototype.tag=function(){
	var oSelf=this;
	$(oSelf.ele).find('.list6 li').on({
		click:function(){
			$(this).addClass('select1').siblings().removeClass();
			var index=$(this).index();
			$(oSelf.ele).find('.list5 li').stop().animate({'opacity':0}).eq(index).stop().animate({'opacity':1});
		}
	})
}

Carousel.prototype.change=function(){
	var oSelf=this;
	if(oSelf.count>2){
		oSelf.count=0;
	}
	$(oSelf.ele).find('.list5 li').stop().animate({'opacity':0}).eq(oSelf.count).stop().animate({'opacity':1});
	$(oSelf.ele).find('.list6 li').removeClass().eq(oSelf.count).addClass('select1');
}
