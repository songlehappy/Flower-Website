
function Horizontal(selector){
	this.ele=$(selector).get(0);
	this.move();
}

Horizontal.prototype.move=function(){
	var oSelf=this;
	$(oSelf.ele).find('.kind').on({
		mouseenter:function(){
			//$(this).find('img').css('transform','translateX(-5px)');
			$(this).find('img').stop().animate({'left':'-5px'});
		},
		mouseleave:function(){
			//$(this).find('img').css('transform','translateX(0)');
			$(this).find('img').stop().animate({'left':'0'});
		}
	})
}
