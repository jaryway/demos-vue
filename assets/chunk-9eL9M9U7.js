import{L as e}from"./chunk-gPNBXFDr.js";import"./chunk-djp9BluR.js";import{d as s,r as i,o as r,c as l}from"./index-xqoZKkrk.js";import"./chunk-4gQjN7DL.js";const f=s({setup(){const o=i();return r(()=>{const t=e.map(o.value,{minZoom:13,maxBoundsViscosity:.9,maxBounds:[[22.718233,113.64157],[22.7048,113.650367],[22.69835,113.63932],[22.711833,113.63042]]}),n=e.latLngBounds([[22.718233,113.64157],[22.7048,113.650367],[22.69835,113.63932],[22.711833,113.63042]]).getCenter();t.setView(n,18),t.on("tileloadstart",function(a){}),t.on("tileload",function(a){}),e.tileLayer("https://webst01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}",{maxZoom:18}).addTo(t)}),()=>l("div",{ref:o,style:{height:"845.75px",width:"1096.25px"}},null)}});export{f as default};
