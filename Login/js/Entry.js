/**
 * Created by Administrator on 2017/6/10 0010.
 */

function Entry(selector){
    this.ele=$(selector).get(0);
    this.getCookie();
    this.check();
}
Entry.prototype.getCookie=function(){
    if($.cookie('identity')&&$.cookie('password')){
        $(this.ele).find('.identity').val($.cookie('identity'));
        $(this.ele).find('.password').val($.cookie('password'));
    }
}
Entry.prototype.check=function(){
    var oSelf=this;
    $(oSelf.ele).find('.btn').on({
        click:function(){
            $.ajax({
                type:"get",
                url:"php/Entry.php",
                async:true,
                dataType:'json',
                data:{
                    identity:$('.identity').val(),
                    password:$('.password').val()
                },
                success:function(data){
                    if(data.content=='用户名或密码错误'){
                        $('.info2 span').css('display','block');
                        $('.password').val('');
                    }else if(data.content=='登录成功'){
                        $('.info2 span').css('display','none');
                        alert(data.content);
                        if($('.checked').is(':checked')){
                            $.cookie('identity',$('.identity').val(),{expires: 7,path:'/'});
                            $.cookie('password',$('.password').val(),{expires: 7,path:'/'});
                        }
                        //从注册页面进入登录，登录成功后返回首页
                        if(document.referrer.indexOf('Register')!=-1){
                            location.href='../Home/index.html';
                        }else{
                            //其他页面进入登录，登录成功后，返回上一页
                            history.back();
                        }
                    }
                },
                error:function(xhr){
                    console.log(xhr.responseText);
                }
            });
        }
    })
}