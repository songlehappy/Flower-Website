
function ScrollTop(selector){
	this.ele=$(selector).get(0);
	this.scroll();
}

ScrollTop.prototype.scroll=function(){
	$(this.ele).on({
		mouseenter:function(){
			$(this).find('div').css('background','#fc5416');
			$(this).find('p').animate({'right':35});
		},
		mouseleave:function(){
			$(this).find('div').css('background','#3b3b3b');
			$(this).find('p').animate({'right':-15});
		},
		click:function(){
			$('html,body').animate({'scrollTop':0});
		}
	})
}
