System.register(["./index-legacy-3NG1yie7.js"],(function(e,o){"use strict";var t,r,i,l,n;return{setters:[function(e){t=e.d,r=e.r,i=e.c,l=e.b,n=e.m}],execute:function(){var o=document.createElement("style");o.textContent='.demo{width:800px;height:400px;overflow:auto;border:solid 1px #000;margin:auto;padding:10px}.demo-content{margin-top:16px}.subform{display:flex;overflow:hidden;flex:auto}.subform .col-label{background:#f0f1f4;border:1px solid #e6e8ed;border-right:none;display:flex;height:35px;line-height:25px;padding:5px}.subform .col-control{background:#fff;border-left:1px solid #e6e8ed;border-bottom:1px solid #e6e8ed;height:40px;line-height:40px;position:relative;width:150px}.subform .col-control.row-num{width:100%;text-align:center}.subform .row-head{width:68px}.subform .subform-container{display:flex;flex:auto;overflow:hidden;overflow:auto}.subform .subform-item-list{display:flex;flex-direction:row;flex:1;background-color:#fff;padding-right:80px}.subform .subform-item-list:empty{padding-right:0}.subform .subform-item-list:empty:after{flex:auto;display:flex;content:attr(data-tip);align-items:center;justify-content:center;padding:0 24px;border:1px solid #e6e8ed}.subform .subform-item-list:after{background:#fff;border:1px solid #e6e8ed;border-bottom-right-radius:3px;border-top-right-radius:3px;color:#838892;content:"";width:80px}.subform .subform-item{position:relative}.subform .subform-item:after{bottom:0;content:"";left:0;position:absolute;right:-1px;top:0;z-index:2}.subform .subform-item.active:after{border:1px dashed #00b899}\n',document.head.appendChild(o),e("default",t({setup:function(){var e=r(1),o=r(-1);return function(){return i("div",{class:"demo"},[i("div",null,[i("button",{onClick:function(){return e.value++}},[l("添加")]),i("button",{onClick:function(){e.value>0&&e.value--}},[l("减少")])]),i("div",{class:"demo-content"},[i("div",{class:"subform"},[i("div",{class:"row-head"},[i("div",{class:"col-label"},null),i("div",{class:"col-control row-num"},[l("1")])]),i("div",{class:"subform-container"},[i("div",n({class:"subform-item-list"},{"data-tip":"从左侧拖拽来添加字段"}),[new Array(e.value).fill(1).map((function(e,t){return i("div",{class:"subform-item"+(t==o.value?" active":""),onClick:function(){o.value=t}},[i("div",{class:"col-label"},[t]),i("div",{class:"col-control"},null)])}))])])])])])}}}))}}}));
