!function(){var e=["dataComponentType"];function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function l(e,t){if(null==e)return{};var l,i,a=function(e,t){if(null==e)return{};var l,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)l=n[i],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)l=n[i],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,i)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function n(e,l,i){var a;return a=function(e,l){if("object"!=t(e)||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var a=i.call(e,l||"default");if("object"!=t(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===l?String:Number)(e)}(l,"string"),(l="symbol"==t(a)?a:String(a))in e?Object.defineProperty(e,l,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[l]=i,e}System.register(["./index-legacy-8VWCknr3.js","./vuedraggable.umd-legacy-ZbhdgtNy.js","./set-legacy-AcdvikYQ.js","./index-legacy-3NG1yie7.js","./index-legacy-GWvoirZN.js","./el-button-legacy-H43ZmSNn.js","./el-select-legacy-7nN9VwGy.js","./_commonjsHelpers-legacy-QrT0Fenm.js","./isUndefined-legacy-CcmjYK8Y.js"],(function(t,i){"use strict";var o,r,d,u,s,c,p,f,m,g,y,b,v,h,_,I,x,w,T,E,D,C,R,L,N,O,k;return{setters:[function(e){o=e.c},function(e){r=e.D},function(e){d=e.c},function(e){u=e.d,s=e.i,c=e.w,p=e.c,f=e.m,m=e.r,g=e.o,y=e.a,b=e.b,v=e.p,h=e.n},function(e){_=e.C,I=e.R,x=e.A,w=e.D,T=e.T,E=e.I,D=e.S,C=e.a,R=e.E},function(e){L=e.E,N=e.c,O=e.d},function(e){k=e.E},null,null],execute:function(){var i,A=document.createElement("style");A.textContent='.el-icon-loading{-webkit-animation:rotating 2s linear infinite;animation:rotating 2s linear infinite}.el-icon--right{margin-left:5px}.el-icon--left{margin-right:5px}@-webkit-keyframes rotating{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes rotating{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.el-icon{--color:inherit;height:1em;width:1em;line-height:1em;display:inline-flex;justify-content:center;align-items:center;position:relative;fill:currentColor;color:var(--color);font-size:inherit}.el-icon.is-loading{-webkit-animation:rotating 2s linear infinite;animation:rotating 2s linear infinite}.el-icon svg{height:1em;width:1em}._subform_11t1l_1{display:flex;flex:auto;overflow:hidden}._subform_11t1l_1 ._col-label_11t1l_6{background:#f0f1f4;border:1px solid #e6e8ed;border-right:none;display:flex;height:35px;line-height:25px;padding:5px}._subform_11t1l_1 ._col-control_11t1l_15{background:#fff;border-left:1px solid #e6e8ed;border-bottom:1px solid #e6e8ed;height:40px;padding:2px 5px;position:relative;width:150px}._subform_11t1l_1 ._col-control_11t1l_15._row-num_11t1l_24{width:100%;text-align:center}._subform_11t1l_1 ._row-head_11t1l_28{width:68px}._subform-container_11t1l_31{display:flex;flex:auto;overflow:auto;z-index:1}._subform-item-list_11t1l_37{display:flex;flex-direction:row;flex:1;z-index:1}._subform-item-list_11t1l_37:empty{padding-right:0}._subform-item-list_11t1l_37:empty:after{flex:auto;display:flex;content:attr(data-tip);align-items:center;justify-content:center;padding:0 24px;border:1px solid #e6e8ed}._subform-item-list_11t1l_37:after{background:#fff;border:1px solid #e6e8ed;border-bottom-right-radius:3px;border-top-right-radius:3px;color:#838892;content:"";width:80px}._subform-item_11t1l_37{position:relative}._subform-item_11t1l_37:after{bottom:0;content:"";left:0;position:absolute;right:-1px;top:0}._subform-item_11t1l_37.active:after{border:1px dashed #00b899;z-index:2}._subform_11t1l_1 .subform-item-ghost{border:1px dashed rgba(24,144,255,.5)}._subform_11t1l_1 .subform-item-ghost.widget-item{padding:16px;width:150px;background-color:#fff}.form-design{background:#f5f6f8;height:100%;overflow-x:hidden;overflow-y:auto;padding:0;display:flex;flex-direction:row;overflow:hidden}.form-design-aside{flex:0 0 260px;background-color:#fff;display:flex;flex-direction:column}.form-design-aside .aside-content{display:flex;flex-direction:column;overflow:auto;flex:auto;height:0;padding:0 16px 24px}.form-design-content{flex:auto;margin:16px;overflow:auto;display:flex;flex-direction:column;background:#fff;width:0}.form-design-content-col{display:flex;flex-direction:column;flex:auto;overflow:auto;height:0}.form-design-settings-panel{flex:0 0 300px}.form-design-settings-panel .content{display:flex;flex-direction:column;overflow:auto;flex:auto;height:0;padding:0 16px 24px}.dnd-container{display:flex;flex-direction:column;background:#fff;flex:auto;padding:16px}.dnd-container:empty{padding-right:0}.dnd-container:empty:after{flex:auto;display:flex;content:attr(data-tip);align-items:center;justify-content:center}.dnd-item{position:relative;display:block;background-color:#fff;border:1px dashed transparent}.dnd-item-content{padding:16px;position:relative}.dnd-item:hover{background-color:rgba(24,144,255,.05)}.dnd-item.active{background-color:#e6f8f5}.dnd-item.active>.dnd-item-content>.dnd-item-mask>.field-button-group{display:block}.dnd-item-ghost{border:1px dashed var(--fx-primary-color-basic, rgba(24, 144, 255, .5))}.dnd-item-ghost.widget-item{padding:16px}.dnd-item-mask{position:absolute;left:0;right:0;top:0;bottom:0;text-align:right;background:transparent}.field-button-group{background:#fff;border-radius:24px;box-shadow:0 2px 4px rgba(0,0,0,.12);display:none;margin:0 5px;overflow:hidden;position:absolute;top:6px;right:0;white-space:nowrap;z-index:10;line-height:1}.field-button-group.active{display:block}.field-button-group i{text-align:center;line-height:26px;height:26px;width:30px;cursor:pointer}.field-button-group i.btn-delete:hover{background-color:#fdeeee;color:#eb5050}.field-button-group i:hover{background-color:#eaf2fd;color:#2f7deb}.field-button-group i+i{border-left:solid 1px #ebecee}.subform{height:60px;display:flex;z-index:1;flex:auto}.subform-list{display:flex;flex:auto;overflow:auto;width:0;padding-right:120px;border:solid 1px #ebecee}.subform-list .dnd-item{flex:0 0 160px}.subform-list:empty{padding-right:0}.subform-list:empty:after{display:flex;content:attr(data-tip);align-items:center;justify-content:center;width:160px;background:#fff}.subform-list:after{content:"";width:80px}.form-design-aside .widget-group-title{margin:16px 0}.form-design-aside .widget-group .widget-list{display:flex;flex-direction:row;gap:8px;flex-wrap:wrap;list-style:none;padding-left:0;margin-bottom:0;border-radius:.25rem}.form-design-aside .widget-group .widget-item{flex:0 0 calc(50% - 4px);cursor:move;padding:8px 10px;background:rgba(24,144,255,.05)}\n',document.head.appendChild(A);var M={typeId:"PROVINCE_CITY",typeName:"地址",config:{label:"地址",labelWidth:null,showLabel:!0,changeTag:!1,tag:"province-city",tagIcon:"input",defaultValue:void 0,showDefaultValue:!0,displayType:!0,required:!1,layout:"colFormItem",span:24},detailsValue:void 0,type:1,placeholder:void 0,readonly:!1,editable:!0,visibility:!0,conditionType:7,__slot__:{options:[{label:"省-市-区",value:1},{label:"省-市-区-详细地址",value:2}]}},P={typeId:"BUTTON",typeName:"按钮",config:{label:"按钮",showLabel:!1,changeTag:!0,labelWidth:null,tag:"el-button",tagIcon:"button",defaultValue:void 0,showDefaultValue:!1,showRegList:!1,required:void 0,showRequired:!1,regList:[],displayType:!1,span:24,layout:"colFormItem",url:void 0},__slot__:{default:"按钮"},btnAction:[],type:"primary",round:!1,size:"small",plain:!1,circle:!1,disabled:!1,editable:!0},V={typeId:"SELECT-MULTIPLE",typeName:"下拉复选框",config:{label:"下拉复选框",showLabel:!0,defaultValue:void 0,showDefaultValue:!1,labelWidth:null,tag:"el-select",tagIcon:"select",layout:"colFormItem",displayType:!0,span:24,required:!1,multiple:!0,changeTag:!0},__slot__:{options:[{label:"选项一",value:1},{label:"选项二",value:2}]},placeholder:"请选择",clearable:!0,filterable:!0,multiple:!0,readonly:!1,editable:!0,visibility:!0,optionsModel:0,linkValue:{},conditionType:6},F={typeId:"DIVIDER",typeName:"分割线",config:{label:"分割线",defaultValue:"",displayType:!0,showLabel:!0,showDefaultValue:!1,showRequired:!1,showClearable:!1,tag:"el-divider",tagIcon:"divider",layout:"colFormItem",required:void 0,changeTag:!1},color:void 0,notChild:!0},S={typeId:"LINKED_DATA",typeName:"关联数据",config:{label:"关联数据",labelWidth:null,showLabel:!0,changeTag:!0,tag:"my-form",tagIcon:"input",defaultValue:void 0,showDefaultValue:!1,displayType:!0,required:!1,layout:"colFormItem",span:24},showTitle:!0,linkList:[],linkedShowField:[],linkedFillRules:[],filterCond:[],readonly:!1,editable:!0,visibility:!0},U={typeId:"INPUT_MAP",typeName:"定位",config:{label:"定位",labelWidth:null,showLabel:!0,changeTag:!1,tag:"input-map",tagIcon:"input",showDefaultValue:!0,defaultValue:void 0,defaultValueType:0,defaultValueSource:{type:0,id:""},displayType:!0,required:!1,limitTargeting:!1,limitTargetingOpt:1,layout:"colFormItem",span:24,auto:""},placeholder:void 0,showLatitudeAndLongitude:!1,allowFineTuning:!1,readonly:!1,editable:!0,visibility:!0,fineTuningNum:0,conditionType:8},j={typeId:"NUMBER_INPUT",typeName:"数字",controls:!1,config:{label:"数字",showLabel:!0,changeTag:!0,labelWidth:null,tag:"el-input-number",tagIcon:"number",defaultValue:void 0,defaultValueType:0,defaultValueSource:{type:0,id:""},displayType:!0,span:24,layout:"colFormItem",required:!1,format:1,typeOption:[{label:"数值",value:1},{label:"百分比",value:2}],showDecimal:!1,showThousandsSeparator:!1,limitRange:!1},placeholder:"请输入",min:void 0,max:void 0,step:1,"step-strictly":!1,precision:void 0,"controls-position":"",readonly:!1,editable:!0,visibility:!0,conditionType:1},K={typeId:"MEMBER_RADIO",typeName:"成员单选",config:{label:"成员单选",labelWidth:null,showLabel:!0,changeTag:!0,tag:"dept-and-user",tagIcon:"input",showDefaultValue:!0,defaultValue:[],defaultValueType:0,defaultValueSource:{type:0,id:""},displayType:!0,required:!1,layout:"colFormItem",span:24,optionalRange:0,dept:1},__slot__:{default:"选择成员"},readonly:!1,editable:!0,visibility:!0,conditionType:10,listRange:[],optionalRange:0},q={typeId:"RADIO",typeName:"单选按钮组",config:{label:"单选按钮组",labelWidth:null,showLabel:!0,displayType:!0,tag:"el-radio-group",tagIcon:"radio",changeTag:!0,showDefaultValue:!1,defaultValue:void 0,layout:"colFormItem",span:24,optionType:"default",required:!1,border:!1},__slot__:{options:[{label:"选项一",value:1},{label:"选项二",value:2}]},size:"small",segment:"vertical",readonly:!1,editable:!0,visibility:!0,conditionType:3},z={typeId:"SELECT",typeName:"下拉框",config:{label:"下拉框",showLabel:!0,defaultValue:void 0,showDefaultValue:!1,labelWidth:null,tag:"el-select",tagIcon:"select",layout:"colFormItem",displayType:!0,span:24,required:!1,changeTag:!0},__slot__:{options:[{label:"选项一",value:1,checked:!1},{label:"选项二",value:2,checked:!1}]},placeholder:"请选择",clearable:!0,filterable:!0,multiple:!1,readonly:!1,editable:!0,visibility:!0,optionsModel:0,linkValue:{},conditionType:5,limitRepeat:0,repeatReminderText:"此项内容已存在，不允许重复提交"},H=n(n(n(n(n(n({typeId:"CHILD_FORM",typeName:"子表单",config:{label:"子表单",labelWidth:null,showLabel:!0,changeTag:!0,tag:"my-table",tagIcon:"input",showDefaultValue:!0,defaultValue:void 0,defaultValueType:0,defaultValueSource:{type:0,id:""},displayType:!0,required:void 0,showRequired:!1,layout:"rowFormItem"},children:[],tableList:[],__slot__:{dataList:[]}},"children",[]),"fieldDisplayRules",[]),"readonly",!1),"editable",!0),"visibility",!0),"notChild",!0),B=n(n({typeId:"TEXTAREA",typeName:"多行文本",config:{label:"多行文本",labelWidth:null,showLabel:!0,tag:"el-input",tagIcon:"textarea",defaultValue:"",defaultValueType:0,defaultValueSource:{type:0,id:""},displayType:!0,required:!1,layout:"colFormItem",span:24,changeTag:!0},type:"textarea",placeholder:"请输入",autosize:{minRows:3,maxRows:5},maxlength:null,"show-word-limit":!1,readonly:!1,editable:!0},"readonly",!1),"visibility",!0),W="BUTTON",G="SERIALNUMBER_INPUT",Y="INPUT",X="TEXTAREA",Q="NUMBER_INPUT",$="PROVINCE_CITY",Z="INPUT_MAP",J="UPLOAD-IMG",ee="UPLOAD-FILE",te="CHILD_FORM",le="QUERY_CHECK",ie="LINKED_DATA",ae="SIGN_PAD",ne="MEMBER_RADIO",oe="MEMBER_CHECK",re="DEPT_RADIO",de="DEPT_CHECK",ue="ROLE_RADIO",se="ROLE_CHECK",ce="DATE",pe="RADIO",fe="CHECKBOX",me="SELECT",ge="SELECT-MULTIPLE",ye="DIVIDER",be="button",ve="serialnumber",he="text",_e="textarea",Ie="number",xe="address",we="location",Te="uploadimg",Ee="uploadfile",De="subform",Ce="linkquery",Re="linkfield",Le="signature",Ne="memberradio",Oe="membercheck",ke="deptradio",Ae="deptcheck",Me="roleradio",Pe="rolecheck",Ve="datetime",Fe="radiogroup",Se="checkboxgroup",Ue="select",je="comboselect",Ke="divider",qe=te,ze=(n(n(n(n(n(n(n(n(n(n(i={},be,a(a({},P),{},{typeId:W})),ve,a(a({},{typeId:"SERIALNUMBER_INPUT",typeName:"流水号",config:{label:"流水号",labelWidth:null,showLabel:!0,changeTag:!0,tag:"el-input",tagIcon:"input",showDefaultValue:!1,defaultValue:"",displayType:!0,layout:"colFormItem",span:24},placeholder:"自动生成无需填写",__slot__:{},serialNumberRule:[{name:"自动计数",ruleType:"0",countDigits:5,fixedDigits:1,resetPeriod:"0",initialValue:1,dateFormatType:0,dateFormatStr:"yyyy-MM-dd",fixedCharacter:"num",vModel:"name",label:"5位数字,不自动重置"}],disabled:!0,visibility:!0,notChild:!0,onlyOne:!0}),{},{typeId:G})),he,a(a({},{typeId:"INPUT",typeName:"单行文本",config:{label:"单行文本",labelWidth:null,showLabel:!0,changeTag:!0,tag:"el-input",tagIcon:"input",defaultValue:"",defaultValueType:0,defaultValueSource:{type:0,id:""},displayType:!0,required:!1,layout:"colFormItem",span:24,format:"text",typeOption:[{label:"无",value:"text"},{label:"手机号码",value:"phoneNumber"},{label:"电话号码",value:"tel"},{label:"邮政编码",value:"zipCode"},{label:"身份证号码",value:"idNumber"},{label:"邮箱",value:"email"}]},placeholder:"请输入",readonly:!1,editable:!0,visibility:!0,limitRepeat:0,repeatReminderText:"此项内容已存在，不允许重复提交"}),{},{typeId:Y})),_e,a(a({},B),{},{typeId:X})),Ie,a(a({},j),{},{typeId:Q})),xe,a(a({},M),{},{typeId:$})),we,a(a({},U),{},{typeId:Z})),Te,a(a({},{typeId:"UPLOAD-IMG",typeName:"图片",config:{label:"图片",tag:"el-upload",tagIcon:"upload",layout:"colFormItem",showDefaultValue:!1,defaultValue:null,displayType:!0,showLabel:!0,showRegList:!1,labelWidth:null,required:!1,span:24,showTip:!1,changeTag:!0},expand:{limit:0,fileSize:10,sizeUnit:"MB"},setting:{onlyOne:!1,limit:!1},__slot__:{"list-type":!0},accept:"image/*","show-file-list":!1,name:"file","auto-upload":!0,"list-type":"picture",multiple:!0,drag:!0,readonly:!1,editable:!0,visibility:!0}),{},{typeId:J})),Ee,a(a({},{typeId:"UPLOAD-FILE",typeName:"附件",config:{label:"附件",tag:"el-upload",tagIcon:"upload",layout:"colFormItem",showDefaultValue:!1,defaultValue:null,displayType:!0,showLabel:!0,showRegList:!1,labelWidth:null,required:!1,span:24,showTip:!1,buttonText:"点击上传",changeTag:!0},expand:{limit:0,fileSize:10,sizeUnit:"MB",accept:""},setting:{onlyOne:!1,accept:"",limit:!1},__slot__:{"list-type":!0},"show-file-list":!1,name:"file","auto-upload":!0,"list-type":"text",multiple:!0,editable:!0,visibility:!0,readonly:!1}),{},{typeId:ee})),De,a(a({},H),{},{typeId:te})),n(n(n(n(n(n(n(n(n(n(i,Ce,a(a({},{typeId:"QUERY_CHECK",typeName:"关联查询",config:{layout:"colFormItem",label:"关联查询",labelWidth:null,showLabel:!0,changeTag:!0,tag:"my-form",tagIcon:"input",showDefaultValue:!1,displayType:!0,span:24,dbTable:""},linkList:[],filterCond:[],linkedShowField:[],dataNum:1,canAdd:!0,visibility:!0}),{},{typeId:le})),Re,a(a({},S),{},{typeId:ie})),Le,a(a({},{typeId:"SIGN_PAD",typeName:"手写签名",config:{label:"手写签名",defaultValue:"",showLabel:!0,showDefaultValue:!1,displayType:!0,showRequired:!0,showClearable:!1,showRegList:!1,tag:"sign-pad",tagIcon:"sign-pad",layout:"colFormItem",span:24,required:!1,changeTag:!1},color:"#000000",readonly:!1,editable:!0,visibility:!0}),{},{typeId:ae})),Ve,a(a({},{typeId:"DATE",typeName:"日期时间",config:{label:"日期时间",tag:"el-date-picker",tagIcon:"date",showDefaultValue:!0,defaultValue:null,defaultValueType:0,defaultValueSource:{type:0,id:""},displayType:!0,showLabel:!0,labelWidth:null,span:24,layout:"colFormItem",required:!1,changeTag:!0},placeholder:"请选择",type:"date",clearable:!0,format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",readonly:!1,editable:!0,visibility:!0,conditionType:2}),{},{typeId:ce})),Fe,a(a({},q),{},{typeId:pe})),Se,a(a({},{typeId:"CHECKBOX",typeName:"复选框组",config:{label:"复选框组",tag:"el-checkbox-group",tagIcon:"checkbox",defaultValue:[],showDefaultValue:!1,span:24,showLabel:!0,displayType:!0,labelWidth:null,layout:"colFormItem",optionType:"default",required:!1,changeTag:!0,border:!1},__slot__:{options:[{label:"选项一",value:1},{label:"选项二",value:2}]},size:"small",segment:"vertical",readonly:!1,editable:!0,visibility:!0,conditionType:4}),{},{typeId:fe})),Ue,a(a({},z),{},{typeId:me})),je,a(a({},V),{},{typeId:ge})),Ke,a(a({},F),{},{typeId:ye})),Ne,a(a({},K),{},{typeId:ne,typeName:"成员单选",config:a(a({},K.config),{},{label:"成员单选"})})),n(n(n(n(n(i,Oe,a(a({},K),{},{typeId:oe,typeName:"成员多选",config:a(a({},K.config),{},{label:"成员多选"})})),ke,a(a({},K),{},{typeId:re,typeName:"部门单选",config:a(a({},K.config),{},{label:"部门单选"})})),Ae,a(a({},K),{},{typeId:de,typeName:"部门多选",config:a(a({},K.config),{},{label:"部门多选"})})),Me,a(a({},K),{},{typeId:ue,typeName:"角色单选",config:a(a({},K.config),{},{label:"角色单选"})})),Pe,a(a({},K),{},{typeId:se,typeName:"角色多选",config:a(a({},K.config),{},{label:"角色多选"})}))),He=[ze[xe],ze[we],ze[Te],ze[Ee],ze[De],ze[Ce],ze[Re],ze[Le],ze[ve],ze[Ne],ze[Oe],ze[ke],ze[Ae],ze[Me],ze[Pe]],Be=[ze[he],ze[_e],ze[Ie],ze[Ve],ze[Fe],ze[Se],ze[Ue],ze[je],ze[Ke],ze[be]];function We(){var e=new Date-new Date("2022-07-01");e+=Math.ceil(1e3*Math.random());var t="ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz",l=t.split(""),i=[];do{var a=e%52;e=(e-a)/52,i.push(l[a])}while(e);return i.join("")}var Ge=u({setup:function(e,t){t.emit;var l=1,i=function(e){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return["field",We(),(new Date).getTime(),e+1].join("")}(l++);return a(a({},d(e)),{},{vModel:t})},n=[{key:"basic",label:"基础",items:Be},{key:"advanced",label:"高级",items:He}],u=s("FormDesignContext");return c((function(){return u.active}),(function(e){}),{immediate:!0,deep:!0}),function(){return p("div",null,[p("div",{class:"aside-content"},[n.map((function(e){return p("div",{class:"widget-group",key:e.key},[p("h4",{class:"widget-group-title"},[e.label]),p(r,f({tag:"div",list:e.items,itemKey:"name",class:"widget-list","ghost-class":"list-group-1",clone:i},{sort:!1,group:{name:"component",pull:"clone",put:!1},onMove:function(){return!1},onStart:function(e){},onEnd:function(e){u.select(e.item._underlying_vm_)},onClone:function(e){e.item,e.clone}}),{item:function(e){var t=e.element;return p("div",{class:o("widget-item",{})},[t.typeName])}})])}))])])}}}),Ye="_subform_11t1l_1",Xe="_col-label_11t1l_6",Qe="_col-control_11t1l_15",$e="_row-num_11t1l_24",Ze="_row-head_11t1l_28",Je="_subform-container_11t1l_31",et="_subform-item-list_11t1l_37",tt="_subform-item_11t1l_37",lt={checkboxgroup:_,radiogroup:I,address:x,datetime:w,text:T,textarea:T,number:E,select:D,comboselect:C,subform:u({props:{field:{type:Object,required:!0}},setup:function(e){var t=m(),l=s("FormDesignContext"),i=e.field.parentKey;return g((function(){t.value})),y((function(){})),c((function(){return e.field.children||[]}),(function(){}),{immediate:!0,deep:!0}),function(){return p("div",{class:Ye,ref:t},[p("div",{class:o(Ze),onClick:function(e){}},[p("div",{class:Xe},null),p("div",{class:o(Qe,$e)},[b("1")])]),p("div",{class:Je},[p(r,f({list:e.field.children||[],class:et,"ghost-class":"subform-item-ghost",componentData:{"data-tip":"从左侧拖拽来添加字段"},itemKey:"vModel"},{direction:"horizontal",group:{name:"subform",pull:!1,put:function(e,t,l){return l._underlying_vm_.typeId!==qe}},onChange:function(e){e.added&&(e.added.element.parentKey=i)}}),{item:function(t){var i,a,n=t.element,r=t.index;return p("div",{class:o(tt,{active:(null===(i=l.active)||void 0===i?void 0:i.value)===n}),onClick:function(e){e.preventDefault(),e.stopPropagation(),l.select(n)}},[p("div",{class:Xe},[n.config.label]),p("div",{class:Qe},[p(k,null,null)]),p("div",{class:"dnd-item-mask"},[p("div",{class:o("field-button-group",{active:(null===(a=l.active)||void 0===a?void 0:a.value)===n})},[p(L,{onClick:function(t){t.preventDefault(),t.stopPropagation(),l.duplicate(e.field.children||[],r,n)}},{default:function(){return[p(N,null,null)]}}),p(L,f({class:"btn-delete"},{onClick:function(t){t.preventDefault(),t.stopPropagation(),l.remove(e.field.children||[],r)}}),{default:function(){return[p(O,null,null)]}})])])])}})])])}}}),unknown:u({props:{dataComponentType:String},setup:function(t){var i=t.dataComponentType;l(t,e);return function(){return p("div",{class:"unknown-field",style:{padding:"var(--van-padding-md)",color:"var(--van-text-color-2)"}},[i,b("找不到对应的组件或者该组件不支持在移动端显示")])}}})},it={phoneNumber:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,tel:/^0\d{2,3}-\d{7,8}|\(?0\d{2,3}[)-]?\d{7,8}|\(?0\d{2,3}[)-]*\d{7,8}$/,zipCode:/^\d{6}$/,idNumber:/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/,email:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/};function at(e){var t=e.config,l=e.typeId,i=t||{},a=i.required,n=i.format,o=[];a&&o.push({required:!0,message:"必填项"});var r=function(e){var t=e.config,l=e.max,i=e.min,a=e.label||(null==t?void 0:t.label),n=function(e){return null==e?0:Number(e.toString().replace(/,/g,""))};return void 0!==l&&void 0!==i?{validator:function(e){return e<=l&&e>=i},message:"".concat(a," 在 ").concat(i," 到 ").concat(l," 之间"),formatter:n}:void 0!==l?{validator:function(e){return e<=l},message:"".concat(a," 不能大于 ").concat(l),formatter:n}:void 0!==i?{validator:function(e){return e>=i},message:"".concat(a," 不能小于 ").concat(i),formatter:n}:void 0}(e),d=function(e){switch(e){case"phoneNumber":return{pattern:it.phoneNumber,message:"手机号码格式错误"};case"tel":return{pattern:it.tel,message:"电话号码格式错误"};case"zipCode":return{pattern:it.zipCode,message:"邮政号码格式错误"};case"idNumber":return{pattern:it.idNumber,message:"身份证号码格式错误"};case"email":return{pattern:it.email,message:"邮箱格式错误"};case 1:return{validator:function(e){return!isNaN(e)},message:"格式错误",formatter:function(e){return null==e?"":Number(e.toString().replace(/,/g,""))}}}}(n);return r&&o.push(r),d&&o.push(d),"CHILD_FORM"===l&&a&&o.push({validator:function(e){return Array.isArray(e)&&e.length>0},message:"必填项"}),o}function nt(e){if(["QUERY_CHECK","LINKED_DATA"].includes(e.typeId)){var t=e.linkedShowField||[];return(e.linkList||[]).map((function(l){var i="QUERY_CHECK"!==e.typeId&&!t.some((function(e){return e.vModel==e.vModel}));return{id:l.id,typeId:l.typeId,vModel:l.vModel,label:l.label,selectShowOnly:i,parentId:e.parentKey||"1"}}))}}var ot=u({props:{items:{type:Array,required:!0},parent:{type:Object}},setup:function(e,t){t.emit;var l=m(!1),i=s("FormDesignContext");return c((function(){var e;return null===(e=i.active)||void 0===e?void 0:e.value}),(function(e){}),{immediate:!0,deep:!0}),function(){return p(r,f({tag:e.parent?"div":"form",list:e.items,itemKey:"vModel","ghost-class":"dnd-item-ghost"},{swapThreshold:.3,group:{name:"component",pull:!e.parent&&void 0},onMove:function(e){return!1},onStart:function(e){l.value=!0},onEnd:function(e){l.value=!1},onChange:function(t){t.added&&e.parent&&(t.added.element.parentKey=e.parent.id)}},{componentData:{"data-tip":"从左侧拖拽来添加字段"}}),{item:function(t){var l,n=t.element,r=t.index,d=lt[function(e){switch(e){case"INPUT":case"SERIALNUMBER_INPUT":return"text";case"TEXTAREA":return"textarea";case"NUMBER_INPUT":return"number";case"PROVINCE_CITY":return"address";case"INPUT_MAP":return"location";case"UPLOAD-IMG":case"UPLOAD-FILE":return"upload";case"CHILD_FORM":return"subform";case"QUERY_CHECK":return"linkquery";case"LINKED_DATA":return"linkfield";case"SIGN_PAD":return"signature";case"MEMBER_RADIO":case"MEMBER_CHECK":case"DEPT_RADIO":case"DEPT_CHECK":case"ROLE_RADIO":case"ROLE_CHECK":return"orgpickerinput";case"DATE":return"datetime";case"RADIO":return"radiogroup";case"CHECKBOX":return"checkboxgroup";case"SELECT":return"select";case"SELECT-MULTIPLE":return"comboselect";case"DIVIDER":return"divider";default:return"unknown"}}(n.typeId)];d=d||lt.unknown;var u=function(e){var t,l,i,n,o,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"editable",d=e.config,u={label:!1===(null==d?void 0:d.showLabel)?"":e.label||(null==d?void 0:d.label),placeholder:e.placeholder,disabled:"readonly"===r||!1===e.editable,readonly:"readonly"===r||!0===e.readonly,required:null==d?void 0:d.required,rules:at(e),"data-component-type":e.typeId,"data-component-name":e.typeName,"data-vmodel":e.vModel};switch(e.typeId){case"INPUT":return a(a({},u),{},{maxlength:e.maxLength});case"TEXTAREA":return a(a({},u),{},{rows:(null===(t=e.autosize)||void 0===t?void 0:t.minRows)||1,autosize:{maxHeight:(null===(l=e.autosize)||void 0===l?void 0:l.maxRows)&&24*(null===(i=e.autosize)||void 0===i?void 0:i.maxRows),minHeight:(null===(n=e.autosize)||void 0===n?void 0:n.minRows)&&24*(null===(o=e.autosize)||void 0===o?void 0:o.minRows)},maxlength:e.maxLength});case"NUMBER_INPUT":return a(a({},u),{},{showThousandsSeparator:e.showThousandsSeparator,precision:e.showDecimal?0:e.precision});case"DATE":return a(a({},u),{},{type:e.type,maxDate:e.maxDate,minDate:e.minDate});case"RADIO":return a(a({},u),{},{options:(e.__slot__.options||[]).map((function(e){return{value:e.label,label:e.label,isOther:e.isOther}})),direction:e.segment});case"CHECKBOX":return a(a({},u),{},{options:(e.__slot__.options||[]).map((function(e){return{value:e.label,label:e.label}})),direction:e.segment});case"SELECT":case"SELECT-MULTIPLE":return e.optionsModel,a(a({},u),{},{options:e.__slot__.options});case"INPUT_MAP":return a(a({},u),{},{showLatitudeAndLongitude:e.showLatitudeAndLongitude});case"PROVINCE_CITY":return a(a({},u),{},{type:e.type});case"UPLOAD-IMG":case"UPLOAD-FILE":var s,c,p;return a(a({},u),{},{color:e.color,fileSize:null===(s=e.expand)||void 0===s?void 0:s.fileSize,limit:(null===(c=e.expand)||void 0===c?void 0:c.limit)||10,sizeUnit:null===(p=e.expand)||void 0===p?void 0:p.sizeUnit});case"SIGN_PAD":return a(a({},u),{},{color:e.color});case"MEMBER_RADIO":return a(a({},u),{},{type:["USER"],multiple:!1});case"MEMBER_CHECK":return a(a({},u),{},{type:["USER"],multiple:!0});case"DEPT_RADIO":return a(a({},u),{},{type:["DIVISION"],multiple:!1});case"DEPT_CHECK":return a(a({},u),{},{type:["DIVISION"],multiple:!0});case"ROLE_RADIO":return a(a({},u),{},{type:["ROLE"],multiple:!1});case"ROLE_CHECK":return a(a({},u),{},{type:["ROLE"],multiple:!0});case"CHILD_FORM":return a(a({},u),{},{children:e.children,allowAdd:e.allowAdd||!0});case"QUERY_CHECK":return a(a({},u),{},{multiple:(e.dataNum||1)>1,linkFields:nt(e)});case"LINKED_DATA":return a(a({},u),{},{renderInTable:!!e.parentKey,formDesignerId:(null==d?void 0:d.dbTable)||"",filterCond:e.filterCond||[],linkFields:nt(e)});case"SERIALNUMBER_INPUT":return{"data-component-type":e.typeId,"data-component-name":e.typeName,"data-vmodel":e.vModel,label:e.label||(null==d?void 0:d.label),description:e.description,readonly:!0,disabled:!0};case"DIVIDER":return{"data-component-type":e.typeId,"data-component-name":e.typeName,"data-vmodel":e.vModel,label:e.label||(null==d?void 0:d.label),description:e.description};default:return{"data-component-type":e.typeId}}}(n,"editable");return p("div",{class:o("dnd-item",{active:(null===(l=i.active)||void 0===l?void 0:l.value)===n}),onClick:function(e){e.preventDefault(),e.stopPropagation(),i.select(n)}},[p("div",{class:o("dnd-item-content",n.typeId.toLowerCase())},[p(R,{label:n.label||n.config.label,required:!0,style:{marginBottom:0,"flex-direction":n.typeId===qe?"column":"row"}},{default:function(){return[p(d,u,null)]}}),p("div",{class:"dnd-item-mask"},[p("div",{class:"field-button-group"},[p(L,{onClick:function(t){t.preventDefault(),t.stopPropagation(),i.duplicate(e.items,r,n)}},{default:function(){return[p(N,null,null)]}}),p(L,f({class:"btn-delete"},{onClick:function(t){t.preventDefault(),i.remove(e.items,r)}}),{default:function(){return[p(O,null,null)]}})])])])])}})}}}),rt=u({props:{items:{type:Array,required:!0}},setup:function(e,t){t.emit;return function(){return p("div",{class:"form-design-content"},[p("div",{class:"form-design-content-col"},[p(ot,{items:e.items,class:o("dnd-container el-form el-form--default",{"el-form--label-left":!0})},null)])])}}}),dt=u({setup:function(e,t){t.emit;return function(){return p("div",{class:"form-design-settings-panel"},[b("设置面板")])}}});function ut(){var e=new Date-new Date("2022-07-01");e+=Math.ceil(1e3*Math.random());var t="ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz",l=t.split(""),i=[];do{var a=e%52;e=(e-a)/52,i.push(l[a])}while(e);return i.join("")}var st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return["field",ut(),(new Date).getTime(),e+1].join("")},ct=u({props:{config:{type:Object}},setup:function(e){var t,l=m((null===(t=e.config)||void 0===t?void 0:t.fields)||[]),i=m(),a=0;return v("FormDesignContext",{active:i,select:function(e){i.value=e},duplicate:function(e,t,l){var n=d(l),o=st(a++);n.vModel=o,n.children&&n.children.forEach((function(e){e.parentKey=o,e.vModel=st(a++)})),e.splice(t+1,0,n),h((function(){i.value=n}))},remove:function(e,t){i.value&&i.value===e[t]&&(i.value=void 0),e.splice(t,1)}}),c((function(){return i.value}),(function(e){}),{immediate:!0}),function(){return p("div",{class:o("form-design")},[p(Ge,{class:"form-design-aside"},null),p(rt,{items:l.value,class:"form-design-content"},null),p(dt,{class:"form-design-settings-panel"},null)])}}});t("default",u({props:{},setup:function(){var e=m({description:"",fields:[]});return function(){return p(ct,{config:e.value},null)}}}))}}}))}();
