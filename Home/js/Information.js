
function Information(selector){
	this.ele=$(selector).get(0);;
	this.clickAction()
}

Information.prototype.clickAction=function(){
	var oSelf=this;
	$(oSelf.ele).find('.list7 li').on({
		click:function(){
			$(this).addClass('select2').siblings().removeClass();
			var index=$(this).index();
			$(oSelf.ele).find('div').removeClass().eq(index).addClass('show');
		}
	})
}

