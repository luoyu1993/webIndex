/**
 * Created by linhang on 16/3/22.
 *
 * @@@ 调用方法：$("body").msgInfo({object});
 * @@@ 弹窗类别：mold : (number) 1=可消失弹窗，2=回调弹窗 3=自定义弹窗  4=Url按钮  5=加载等待
 * @@@ 标题信息：info : (number,string)
 * @@@ 副标题：explain : (number,string)
 * @@@ 消失时间：time : (number) 单位=毫秒
 * @@@ 图片地址：imgUrl : (number,string)
 * @@@ 正确和错误类目：alertType : (number) 1=正确  2=错误
 * @@@ 回调方法：callback : function(){alert("确认");}
 * @@@ Url地址：url : (string)
 * @@@ Url按钮名称：btnName : (string)
 * @@@ 删除加载等待窗口命令$("#loadBox").remove();
 *
 */
!(function(){
    $("head").append("<style type='text/css'>.sjk-mark{width:100%;height:100%;position:fixed;left:0;top:0;background:#000;opacity:.7;z-index:99999;}.sjk-title{font-size:18px;color:#575757;margin:40px 0 20px 0}.sjk-pic{margin-bottom:30px}.sjk-h1{font-size:24px;color:#575757;margin:40px 0 10px 0}.sjk-h2{font-size:16px;color:#797979;margin-bottom:20px}.sjk-h3{font-size:18px;color:#797979;width:58%;margin:20px auto 20px auto;line-height:28px}.sjk-btn a{width:120px;height:40px;line-height:40px;margin:0 5px;display:inline-block;border-radius:5px}.sjk-btn .sjk-btn-sure{background:#87b9f6;color:#FFF}.sjk-btn .sjk-btn-sure:hover{background:#78abe9}.sjk-btn .sjk-btn-cancel{background:#eee;color:#797979}.sjk-btn .sjk-btn-cancel:hover{background:#dfdede}.sjk-alert{background-color:#FFF;width:500px;padding:17px;border-radius:5px;text-align:center;position:fixed;left:50%;top:50%;margin-left:-256px;margin-top:-200px;overflow:hidden;z-index:100000}@media all and (max-width:540px){.sweet-alert{width:auto;margin-left:0;margin-right:0;left:15px;right:15px}}.sweet-alert h2{color:#575757;font-size:30px;text-align:center;font-weight:600;text-transform:none;position:relative}.sjk-alert .icon{width:80px;height:80px;border:4px solid gray;border-radius:50%;margin:20px auto;position:relative;box-sizing:content-box}.sjk-alert .icon.error{border-color:#F27474}.sjk-alert .icon.error .x-mark{position:relative;display:block}.sjk-alert .icon.error .line{position:absolute;height:5px;width:47px;background-color:#F27474;display:block;top:37px;border-radius:2px}.sjk-alert .icon.error .line.left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.sjk-alert .icon.error .line.right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}.sjk-alert .icon.warning{border-color:#F8BB86}.sjk-alert .icon.warning .body{position:absolute;width:5px;height:47px;left:50%;top:10px;border-radius:2px;margin-left:-2px;background-color:#F8BB86}.sjk-alert .icon.warning .dot{position:absolute;width:7px;height:7px;border-radius:50%;margin-left:-3px;left:50%;bottom:10px;background-color:#F8BB86}.sjk-alert .icon.msg_success{border-color:#A5DC86}.sjk-alert .icon.msg_success::before,.sweet-alert .icon.msg_success::after{content:'';border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;transform:rotate(45deg)}.sjk-alert .icon.msg_success::before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.sjk-alert .icon.msg_success::after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px}.sjk-alert .icon.msg_success .placeholder{width:80px;height:80px;border:4px solid rgba(165,220,134,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.sjk-alert .icon.msg_success .fix{width:5px;height:90px;background-color:#fff;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.sjk-alert .icon.msg_success .line{height:5px;background-color:#A5DC86;display:block;border-radius:2px;position:absolute;z-index:2}.sjk-alert .icon.msg_success .line.tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.sjk-alert .icon.msg_success .line.long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.animateSuccessTip{-webkit-animation:animateSuccessTip .75s;-moz-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.showSweetAlert{-webkit-animation:showSweetAlert .3s;-moz-animation:showSweetAlert .3s;animation:showSweetAlert .3s}@-webkit-keyframes showSweetAlert{0%{transform:scale(.7);-webkit-transform:scale(.7)}45%{transform:scale(1.05);-webkit-transform:scale(1.05)}80%{transform:scale(.95);-webkit-tranform:scale(.95)}100%{transform:scale(1);-webkit-transform:scale(1)}}@-moz-keyframes showSweetAlert{0%{transform:scale(.7);-webkit-transform:scale(.7)}45%{transform:scale(1.05);-webkit-transform:scale(1.05)}80%{transform:scale(.95);-webkit-tranform:scale(.95)}100%{transform:scale(1);-webkit-transform:scale(1)}}@keyframes showSweetAlert{0%{transform:scale(.7);-webkit-transform:scale(.7)}45%{transform:scale(1.05);-webkit-transform:scale(1.05)}80%{transform:scale(.95);-webkit-tranform:scale(.95)}100%{transform:scale(1);-webkit-transform:scale(1)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}100%{width:25px;left:14px;top:45px}}@-moz-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}100%{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}100%{width:25px;left:14px;top:45px}}.animateSuccessLong{-webkit-animation:animateSuccessLong .75s;-moz-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}100%{width:47px;right:8px;top:38px}}@-moz-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}100%{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}100%{width:47px;right:8px;top:38px}}.icon.msg_success.animate::after{-webkit-animation:rotatePlaceholder 4.25s ease-in;-moz-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}@-webkit-keyframes rotatePlaceholder{0%{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}5%{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}12%{transform:rotate(-405deg);-webkit-transform:rotate(-405deg)}100%{transform:rotate(-405deg);-webkit-transform:rotate(-405deg)}}@-moz-keyframes rotatePlaceholder{0%{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}5%{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}12%{transform:rotate(-405deg);-webkit-transform:rotate(-405deg)}100%{transform:rotate(-405deg);-webkit-transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}5%{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}12%{transform:rotate(-405deg);-webkit-transform:rotate(-405deg)}100%{transform:rotate(-405deg);-webkit-transform:rotate(-405deg)}}.animateErrorIcon{-webkit-animation:animateErrorIcon .5s;-moz-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}@-webkit-keyframes animateErrorIcon{0%{transform:rotateX(100deg);-webkit-transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);-webkit-transform:rotateX(0);opacity:1}}@-moz-keyframes animateErrorIcon{0%{transform:rotateX(100deg);-webkit-transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);-webkit-transform:rotateX(0);opacity:1}}@keyframes animateErrorIcon{0%{transform:rotateX(100deg);-webkit-transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);-webkit-transform:rotateX(0);opacity:1}}.animateXMark{-webkit-animation:animateXMark .5s;-moz-animation:animateXMark .5s;animation:animateXMark .5s}@-webkit-keyframes animateXMark{0%{transform:scale(.4);-webkit-transform:scale(.4);margin-top:26px;opacity:0}50%{transform:scale(.4);-webkit-transform:scale(.4);margin-top:26px;opacity:0}80%{transform:scale(1.15);-webkit-transform:scale(1.15);margin-top:-6px}100%{transform:scale(1);-webkit-transform:scale(1);margin-top:0;opacity:1}}@-moz-keyframes animateXMark{0%{transform:scale(.4);-webkit-transform:scale(.4);margin-top:26px;opacity:0}50%{transform:scale(.4);-webkit-transform:scale(.4);margin-top:26px;opacity:0}80%{transform:scale(1.15);-webkit-transform:scale(1.15);margin-top:-6px}100%{transform:scale(1);-webkit-transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{transform:scale(.4);-webkit-transform:scale(.4);margin-top:26px;opacity:0}50%{transform:scale(.4);-webkit-transform:scale(.4);margin-top:26px;opacity:0}80%{transform:scale(1.15);-webkit-transform:scale(1.15);margin-top:-6px}100%{transform:scale(1);-webkit-transform:scale(1);margin-top:0;opacity:1}}.icon.msg_success{border-color:#A5DC86}.icon.msg_success::after,.icon.msg_success::before{content:'';border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.icon.msg_success::before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.icon.msg_success::after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px}.icon.msg_success .placeholder{width:80px;height:80px;border:4px solid rgba(165,220,134,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.icon.msg_success .fix{width:5px;height:90px;background-color:#fff;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.icon.msg_success .line{height:5px;background-color:#A5DC86;display:block;border-radius:2px;position:absolute;z-index:2}.icon.msg_success .line.tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.icon.msg_success .line.long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.icon.msg_success.animate::after{-webkit-animation:rotatePlaceholder 4.25s ease-in;-moz-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}@keyframes rotatePlaceholder{0%{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}5%{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}12%{transform:rotate(-405deg);-webkit-transform:rotate(-405deg)}100%{transform:rotate(-405deg);-webkit-transform:rotate(-405deg)}}.load-box{width:400px;height:170px;position:fixed;top:50%;left:50%;margin-left:-200px;margin-top:-115px;z-index:1000;border-radius:5px;background:#FFF;text-align:center;padding-top:60px}.load-box .load-text{margin-top:20px;color:#777}.spinner{margin:10px auto 0 auto;width:50px;height:60px;text-align:center;font-size:10px}.spinner > div{border-radius:6px;height:100%;width:6px;display:inline-block;margin:0 2px;-webkit-animation:stretchdelay 1.0s infinite ease-in-out;animation:stretchdelay 1.0s infinite ease-in-out}.spinner .rect2{background:#87b9f6;-webkit-animation-delay:-1.0s;animation-delay:-1.0s}.spinner .rect3{background:#f67280;-webkit-animation-delay:-0.8s;animation-delay:-0.8s}.spinner .rect4{background:#fee261;-webkit-animation-delay:-0.6s;animation-delay:-0.6s}@-webkit-keyframes stretchdelay{0%,40%,100%{-webkit-transform:scaleY(0.5)}20%{-webkit-transform:scaleY(1.0)}}@keyframes stretchdelay{0%,40%,100%{transform:scaleY(0.5);-webkit-transform:scaleY(0.5)}20%{transform:scaleY(1.0);-webkit-transform:scaleY(1.0)}}</style>");
    $.fn.msgInfo  =  function (options) {
        var args = $.extend({
            time : 2000,
            alertType : 2,
            mold : 1,
            btnName : "点击前往"
        },options);
        var pointAlert = function () {};
        pointAlert.prototype = {
            correct : function(args){
                if(options.alertType==1){
                    var cHtml = '<div class="icon msg_success animate" style="display: block;">' +
                        '<span class="line tip animateSuccessTip"></span>' +
                        '<span class="line long animateSuccessLong"></span>' +
                        '<div class="placeholder"></div><div class="fix"></div></div>';
                }else{
                    var cHtml = '<div class="icon error animateErrorIcon" style="display: block;">' +
                        '<span class="x-mark animateXMark">' +
                        '<span class="line left"></span>' +
                        '<span class="line right"></span>' +
                        '</span></div>'
                }
                var htmlInfo = '<div class="sjk-mark"></div><div class="sjk-alert showSweetAlert visible" style="margin-top: -161px;">'+cHtml+'<div class="sjk-title">' + args.info + '</div></div>';
                $(document.body).append(htmlInfo);
                setTimeout(function () {
                    $(".sjk-alert,.sjk-mark").remove();
                }, args.time);
            },
            callMsg : function(args){
                var opts = {
                    htmlInfo : '<div class="sjk-mark"></div><div class="sjk-alert showSweetAlert visible" style="margin-top: -161px;"><div class="icon warning pulseWarning" style="display: block;">' +
                    '<span class="body pulseWarningIns"></span><span class="dot pulseWarningIns"></span></div>' +
                    '<div class="sjk-h1">'+args.info+'</div><div class="sjk-h2">'+args.explain+'</div>' +
                    '<div class="sjk-btn"><a href="javascript:void(0);" class="sjk-btn-cancel">取消</a>' +
                    '<a href="javascript:void(0);" class="sjk-btn-sure">确定</a> </div></div>',
                    callback: function(){}
                };
                $(document.body).append(opts.htmlInfo);
                $.extend(opts, args);
                $(document).one("click",".sjk-btn>a",function () {
                    var rc = $(this).attr("class");
                    if(rc=="sjk-btn-sure"){
                        opts.callback();
                        $(".sjk-alert,.sjk-mark").remove();
                    }else{
                        $(".sjk-alert,.sjk-mark").remove();
                    }
                });
            },
            hintBox : function(args){
                if(options.imgUrl){
                    var htmlInfo = '<div class="sjk-mark"></div>' +
                        '<div class="sjk-alert showSweetAlert visible" style="margin-top: -161px;">' +
                        '<div class="sjk-pic"><img src="'+args.imgUrl+'" width="80" height="80"></div><div class="sjk-h3">'+args.info+'</div>' +
                        '<div class="sjk-btn"><a href="javascript:void(0);" class="sjk-btn-sure">确定</a>' +
                        '</div></div>';
                }else{
                    var htmlInfo = '<div class="sjk-mark"></div>' +
                        '<div class="sjk-alert showSweetAlert visible" style="margin-top: -161px;">' +
                        '<div class="sjk-h3">'+args.info+'</div>' +
                        '<div class="sjk-btn"><a href="javascript:void(0);" class="sjk-btn-sure">确定</a>' +
                        '</div></div>';
                }
                $(document.body).append(htmlInfo);
                $(document).one("click",".sjk-btn>a",function () {
                    $(".sjk-alert,.sjk-mark").remove();
                });
            },
            urlBox : function(args){
                var htmlInfo = '<div class="sjk-mark"></div><div class="sjk-alert showSweetAlert visible" style="margin-top: -161px;"><div class="icon warning pulseWarning" style="display: block;">' +
                '<span class="body pulseWarningIns"></span><span class="dot pulseWarningIns"></span></div>' +
                '<div class="sjk-h2">'+args.info+'</div>' +
                '<div class="sjk-btn"><a href="'+args.url+'" class="sjk-btn-sure">'+args.btnName+'</a></div></div>';
                $(document.body).append(htmlInfo);
            },
            loadBox : function(args){
                var htmlInfo = '<div id="loadBox"><div class=sjk-mark></div><div class=load-box><div class=spinner><div class=rect2></div><div class=rect3></div><div class=rect4></div></div><div class=load-text>'+args.info+'</div></div></div>';
                $(document.body).append(htmlInfo);
            }
        };
        var mc = new pointAlert();
        switch (args.mold){
            case 1:
                mc.correct(args);
                break;
            case 2:
                mc.callMsg(args);
                break;
            case 3:
                mc.hintBox(args);
                break;
            case 4:
                mc.urlBox(args);
                break;
            case 5:
                mc.loadBox(args);
                break;
            default:
                alert("参数错误!");
        }
    }
})();