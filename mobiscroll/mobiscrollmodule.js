define(function (require, exports, module) {
    require('jquery-1.11.1.min');
    require('mobiscroll.appframework');
    require('mobiscroll.core');
    require('mobiscroll.widget');
    require('mobiscroll.scroller');
    require('mobiscroll.util.datetime');
    require('mobiscroll.datetimebase');
    require('mobiscroll.widget.ios');
    require('mobiscroll.i18n.zh');

    /*obj为input输入框对象*/
    function mobiscrollmodule(Obj){
        var nowData=new Date();
            var opt= { 
                theme:'ios', //设置显示主题 
                mode:'scroller', //设置日期选择方式，这里用滚动
                display:'bottom', //设置控件出现方式及样式
                preset : 'datetime', //日期:年 月 日 时 分
                minDate: nowData, 
                maxDate:new Date(nowData.getFullYear(),nowData.getMonth(),nowData.getDate()+7,22,00),
                //dateFormat: 'yy-mm-dd', // 日期格式
                //dateOrder: 'yymmdd', //面板中日期排列格式
                stepMinute: 5, //设置分钟步长
                // yearText:'年', monthText:'月', dayText:'日', hourText:'时', minuteText:'分',
                lang:'zh' //设置控件语言};
            };
            Obj.mobiscroll(opt);
    }
    return {
        mobiscrollmodule:mobiscrollmodule
    };
}
    /*需要在index.html加载的css*/
    /*<link href="css/mobiscroll.animation.css" rel="stylesheet" type="text/css" />
    <link href="css/mobiscroll.widget.css" rel="stylesheet" type="text/css" />
    <link href="css/mobiscroll.widget.ios.css" rel="stylesheet" type="text/css" />
    <link href="css/mobiscroll.scroller.css" rel="stylesheet" type="text/css" />
    <link href="css/mobiscroll.scroller.ios.css" rel="stylesheet" type="text/css" />*/

    /*html里用input调用*/
    /*<input type="text" name="test" id="test" />*/