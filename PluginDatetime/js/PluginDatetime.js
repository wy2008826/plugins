/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


var Plugin={
     plugdatetime:function ($dateTxt,type) {
//           var curr = new Date().getFullYear();
           var opt = {}
	   opt.time = {preset : type};
           opt.date = {preset : type};
           opt.datetime = { 
		preset : type, 
		minDate: new Date(2010,1,01,00,00), 
		maxDate: new Date(2020,12,31,24,59), 
		stepMinute: 1  
	   };
             $dateTxt.val('').scroller('destroy').scroller(
				$.extend(opt[type], 
					{ 
						theme: "sense-ui", 
						mode: "scroller", 
						display: "modal", 
						lang: "english",
						monthText: "月",
						dayText: "日",
						yearText: "年",
						hourText: "时",
						minuteText: "分",
						ampmText:"上午/下午",
						setText: '确定',
						cancelText: '取消',
						dateFormat: 'yy-mm-dd'
					}
				)
			);
        }
}