import{d as o,o as u,c as d,bS as i,bT as a}from"./[name-J4RntX-I.js";import{U as c,s as l,L as t}from"./settings-chunk-T4Ns1YM7.js";const e=new c({...l,loadUserInfo:!0,filterProtocolClaims:!0,response_mode:"query"}),p=o({setup(){const r=i(),s=a();return u(()=>{if(t.setLogger(console),t.setLevel(t.INFO),r.query&&Object.keys(r.query).length>0){e.signinRedirectCallback().then(function(n){s.replace("private")});return}e.signinRedirect().then(n=>{}),e.events.addUserLoaded(function(n){}),e.events.addUserUnloaded(function(){}),e.events.addAccessTokenExpiring(function(){}),e.events.addSilentRenewError(function(n){}),e.events.addUserSignedIn(function(){}),e.events.addUserSignedOut(function(){})}),()=>d("div",null,null)}});export{p as default};
