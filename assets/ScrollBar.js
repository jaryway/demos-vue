import{d as r,r as c,c as l,b as s,m as t}from"./index.js";const n=r({setup(){var a=c(1),o=c(-1);return()=>l("div",{class:"demo"},[l("div",null,[l("button",{onClick:()=>a.value++},[s("添加")]),l("button",{onClick:()=>{a.value>0&&a.value--}},[s("减少")])]),l("div",{class:"demo-content"},[l("div",{class:"subform"},[l("div",{class:"row-head"},[l("div",{class:"col-label"},null),l("div",{class:"col-control row-num"},[s("1")])]),l("div",{class:"subform-container"},[l("div",t({class:"subform-item-list"},{"data-tip":"从左侧拖拽来添加字段"}),[new Array(a.value).fill(1).map((u,e)=>l("div",{class:"subform-item"+(e==o.value?" active":""),onClick:()=>{o.value=e}},[l("div",{class:"col-label"},[e]),l("div",{class:"col-control"},null)]))])])])])])}});export{n as default};
