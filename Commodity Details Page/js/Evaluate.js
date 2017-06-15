
function Evaluate(selector){
	this.ele=$(selector).get(0);
	this.oSwitch();
}

Evaluate.prototype.oSwitch=function(){
	var oSelf=this;
	$(oSelf.ele).find('.list6 li').on({
		click:function(){
			$(this).addClass('select1').siblings().removeClass();
			var index=$(this).index();
			$(oSelf.ele).find('.select2').hide().eq(index).show();
		}
	})
}
