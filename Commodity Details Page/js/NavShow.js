
function NavShow(selector){
	this.ele=$(selector).get(0);
	this.show();
}

NavShow.prototype.show=function(){
	$(this.ele).on({
		mouseenter:function(){
//			$(this).find('.banner_nav').show();
			$(this).css('height','484px');
		},
		mouseleave:function(){
//			$(this).find('.banner_nav').hide();
			$(this).css('height',35);
		}
	})
}
