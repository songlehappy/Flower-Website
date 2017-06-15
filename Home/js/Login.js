/**
 * Created by Administrator on 2017/6/14 0014.
 */

function Login(selector){
    this.ele=$(selector).get(0);
    this.loginSuccess();
    this.quit();
}

Login.prototype.loginSuccess=function(){
    var oSelf=this;
    if($.cookie('identity')&&$.cookie('password')){
        $(oSelf.ele).find('li:eq(1),li:eq(2)').css('display','none');
        $(oSelf.ele).find('.loginsuccess').css('display','block');
        $(oSelf.ele).find('.loginsuccess p').eq(0).html($.cookie('identity'));
    }
}

Login.prototype.quit=function(){
    var oSelf=this;
    $(oSelf.ele).find('.loginsuccess').on({
        mouseenter:function(){
            $(this).css({
                height:45,
                border:'1px solid #ebebeb',
                borderTop:0,
                background:'#fff'
            });
        },
        mouseleave:function(){
            $(this).css({
                height:22,
                border:0,
                borderLeft:'1px solid #f8f8f8',
                borderRight:'1px solid #f8f8f8',
                background:0
            });
        }
    })
    $(oSelf.ele).find('.quit').on({
        click:function(){
            $.removeCookie('identity', { path: '/' });
            $.removeCookie('password', { path: '/' });
            history.go(0);
        }
    })
}