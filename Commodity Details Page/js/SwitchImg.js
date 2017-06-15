
function SwitchImg(selector){
	this.ele=$(selector).get(0);
	this.oSwitch();
	this.enlarge();
}

SwitchImg.prototype.oSwitch=function(){
	var oSelf=this;
	$(oSelf.ele).find('.small_img img').on({
		click:function(){
			$(this).css('border','1px solid #ff5722');
			$(this).siblings().css('border','1px solid #eeeeee');
			var index=$(this).attr('src').slice(22,24);
			$(oSelf.ele).find('.box').css({
				background:'url(../Resource/img/big_'+index+'.jpg) no-repeat center',
				backgroundSize:'100%'
			});
			$(oSelf.ele).find('.enlarge').css({
				background:'#fff url(../Resource/img/big_'+index+'.jpg) no-repeat',
				backgroundSize:'400%'
			});
		}
	})
}

SwitchImg.prototype.enlarge=function(){
	var oSelf=this;
	$(oSelf.ele).find('.hide').on({
		'mouseenter mouseleave':function(){
			$(oSelf.ele).find('.select,.enlarge').toggle();
		},
		mousemove:function(oEvent){
			var left=oEvent.offsetX-$(oSelf.ele).find('.select').width()/2;
			var top=oEvent.offsetY-$(oSelf.ele).find('.select').height()/2;
			if(left<0){
				left=0;
			}else if(left>($(this).width()-$(oSelf.ele).find('.select').width())){
				left=$(this).width()-$(oSelf.ele).find('.select').width();
			}
			if(top<0){
				top=0;
			}else if(top>($(this).height()-$(oSelf.ele).find('.select').height())){
				top=$(this).height()-$(oSelf.ele).find('.select').height();
			}
			$(oSelf.ele).find('.select').css({
				left:left,
				top:top
			})
			var scale=$(this).width()/$(oSelf.ele).find('.select').width();
			$(oSelf.ele).find('.enlarge').css({
				backgroundPositionX:-scale*left,
				backgroundPositionY:-scale*top
			})
		}
	})
}
