
function WeChatMall(selector){
	this.ele=$(selector).get(0);
	this.change();
}

WeChatMall.prototype.change=function(){
	var oSelf=this;
	$(oSelf.ele).find('.mall').on({
		mouseenter:function(){
			$(oSelf.ele).find('.code').show();
			$(this).find('.arrow').css('transform','rotate(180deg)')
			$(this).css({
				height:100,
				color:'red',
				background:'#fff',
				borderRight:'1px solid #ebebeb',
				borderLeft:'1px solid #ebebeb'
			})
		},
		mouseleave:function(){
			$(oSelf.ele).find('.code').hide();
			$(this).find('.arrow').css('transform','rotate(0)')
			$(this).css({
				height:23,
				color:'#686868',
				background:0,
				borderLeft:'1px solid #f8f8f8',
    			borderRight:'1px solid #f8f8f8'
			})
		}
	})
}
