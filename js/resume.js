/**
 * Created by zhangdl on 2017-06-05.
 */
//$(window).load(function(){
//    console.log(111);
//});

$(function(){
    function slider(){
        var dvWidth=$("#slider").width();
        console.log(dvWidth);
        var index=$(".uu li").index();
        console.log(index);
        var f= false;
        //右边按钮
        $("#pages").children("a:last").click(function(){
            if(f==false){
                f =true;
                if(index == $(".uu li").length-1){
                    index=0;
                    $(".uu").offset({"left": (-index*dvWidth)});
                    $('.uu').css("left", -index*dvWidth);
                }
                index++;
                $(".uu").animate({"left":-index*dvWidth},function(){
                    f=false;
                });
            }
        });
        //左边按钮
        $("#pages").children("a:first").click(function(){
            if(f == false){
                f =true;
                if(index==0){
                    index=$(".uu li").length-1;
                    $('.uu').css("left",-index*dvWidth);
                }
                index--;
                $(".uu").animate({"left": -index*dvWidth} , function(){
                    f = false;
                });
            }
        });
    }
    slider();
    //自动播放
    function aotu(){
        var setId=setInterval(function () {
            $("#pages").children("a:last").click();
        },2000);
        $("#slider").mouseenter(function () {
            $("#pages").css("opacity",1);
            clearInterval(setId);
        }).mouseleave(function () {
            $("#pages").css("opacity",0);
            setId=setInterval(function () {
                $("#pages").children("a:last").click();
            },2000);
        });
    }
    aotu();
});