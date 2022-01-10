import{S as ae,i as oe,s as ne,e as E,j as R,c as T,a as y,l as D,d as k,b as n,O as K,f as W,H as f,P as V,Q as X,R as le,T as se,U as re,V as ie,W as x,X as de,t as ue,N as ce,g as _e,Y as fe,o as he,p as me,n as pe,Z as ve,_ as $,m as be,$ as ge,I as ke}from"../../chunks/vendor-a5e9be6b.js";function C(d,{pending:t,error:e,result:a}){let h;async function j(m){const c=h={};m.preventDefault();const v=new FormData(d);t&&t(v,d);try{const r=await fetch(d.action,{method:d.method,headers:{accept:"application/json"},body:v});if(c!==h)return;r.ok?a(r,d):e?e(r,null,d):console.error(await r.text())}catch(r){if(e)e(null,r,d);else throw r}}return d.addEventListener("submit",j),{destroy(){d.removeEventListener("submit",j)}}}function ee(d,t,e){const a=d.slice();return a[6]=t[e],a[7]=t,a[8]=e,a}function te(d,t){let e,a,h,j,m,c,v,r,o,p,_,b,N,O,M,s,i,l,q,F,U,B,H,I,L,A=ke,w,Q,Y;function Z(...g){return t[3](t[6],t[7],t[8],...g)}function z(){return t[4](t[6],t[7],t[8])}function G(){return t[5](t[6])}return{key:d,first:null,c(){e=E("div"),a=E("form"),h=E("input"),m=R(),c=E("button"),p=R(),_=E("form"),b=E("input"),O=R(),M=E("button"),i=R(),l=E("form"),q=E("button"),H=R(),this.h()},l(g){e=T(g,"DIV",{class:!0});var u=y(e);a=T(u,"FORM",{action:!0,method:!0});var P=y(a);h=T(P,"INPUT",{type:!0,name:!0,class:!0}),m=D(P),c=T(P,"BUTTON",{class:!0,"aria-label":!0}),y(c).forEach(k),P.forEach(k),p=D(u),_=T(u,"FORM",{class:!0,action:!0,method:!0});var S=y(_);b=T(S,"INPUT",{"aria-label":!0,type:!0,name:!0,class:!0}),O=D(S),M=T(S,"BUTTON",{class:!0,"aria-label":!0}),y(M).forEach(k),S.forEach(k),i=D(u),l=T(u,"FORM",{action:!0,method:!0});var J=y(l);q=T(J,"BUTTON",{class:!0,"aria-label":!0}),y(q).forEach(k),J.forEach(k),H=D(u),u.forEach(k),this.h()},h(){n(h,"type","hidden"),n(h,"name","done"),h.value=j=t[6].done?"":"true",n(h,"class","svelte-dmxqmd"),n(c,"class","toggle svelte-dmxqmd"),n(c,"aria-label",v="Mark todo as "+(t[6].done?"not done":"done")),n(a,"action",r="/todos/"+t[6].uid+".json?_method=patch"),n(a,"method","post"),n(b,"aria-label","Edit todo"),n(b,"type","text"),n(b,"name","text"),b.value=N=t[6].text,n(b,"class","svelte-dmxqmd"),n(M,"class","save svelte-dmxqmd"),n(M,"aria-label","Save todo"),n(_,"class","text svelte-dmxqmd"),n(_,"action",s="/todos/"+t[6].uid+".json?_method=patch"),n(_,"method","post"),n(q,"class","delete svelte-dmxqmd"),n(q,"aria-label","Delete todo"),q.disabled=F=t[6].pending_delete,n(l,"action",U="/todos/"+t[6].uid+".json?_method=delete"),n(l,"method","post"),n(e,"class","todo svelte-dmxqmd"),K(e,"done",t[6].done),this.first=e},m(g,u){W(g,e,u),f(e,a),f(a,h),f(a,m),f(a,c),f(e,p),f(e,_),f(_,b),f(_,O),f(_,M),f(e,i),f(e,l),f(l,q),f(e,H),w=!0,Q||(Y=[V(o=C.call(null,a,{pending:Z,result:t[1]})),V(C.call(null,_,{result:t[1]})),V(B=C.call(null,l,{pending:z,result:G}))],Q=!0)},p(g,u){t=g,(!w||u&1&&j!==(j=t[6].done?"":"true"))&&(h.value=j),(!w||u&1&&v!==(v="Mark todo as "+(t[6].done?"not done":"done")))&&n(c,"aria-label",v),(!w||u&1&&r!==(r="/todos/"+t[6].uid+".json?_method=patch"))&&n(a,"action",r),o&&X(o.update)&&u&1&&o.update.call(null,{pending:Z,result:t[1]}),(!w||u&1&&N!==(N=t[6].text)&&b.value!==N)&&(b.value=N),(!w||u&1&&s!==(s="/todos/"+t[6].uid+".json?_method=patch"))&&n(_,"action",s),(!w||u&1&&F!==(F=t[6].pending_delete))&&(q.disabled=F),(!w||u&1&&U!==(U="/todos/"+t[6].uid+".json?_method=delete"))&&n(l,"action",U),B&&X(B.update)&&u&1&&B.update.call(null,{pending:z,result:G}),u&1&&K(e,"done",t[6].done)},r(){L=e.getBoundingClientRect()},f(){le(e),A(),se(e,L)},a(){A(),A=re(e,L,ve,{duration:200})},i(g){w||(g&&ie(()=>{I||(I=x(e,$,{start:.7},!0)),I.run(1)}),w=!0)},o(g){g&&(I||(I=x(e,$,{start:.7},!1)),I.run(0)),w=!1},d(g){g&&k(e),g&&I&&I.end(),Q=!1,de(Y)}}}function je(d){let t,e,a,h,j,m,c,v,r,o=[],p=new Map,_,b,N,O=d[0];const M=s=>s[6].uid;for(let s=0;s<O.length;s+=1){let i=ee(d,O,s),l=M(i);p.set(l,o[s]=te(l,i))}return{c(){t=R(),e=E("div"),a=E("h1"),h=ue("Todos"),j=R(),m=E("form"),c=E("input"),r=R();for(let s=0;s<o.length;s+=1)o[s].c();this.h()},l(s){ce('[data-svelte="svelte-181o7gf"]',document.head).forEach(k),t=D(s),e=T(s,"DIV",{class:!0});var l=y(e);a=T(l,"H1",{});var q=y(a);h=_e(q,"Todos"),q.forEach(k),j=D(l),m=T(l,"FORM",{class:!0,action:!0,method:!0});var F=y(m);c=T(F,"INPUT",{name:!0,"aria-label":!0,placeholder:!0,class:!0}),F.forEach(k),r=D(l);for(let U=0;U<o.length;U+=1)o[U].l(l);l.forEach(k),this.h()},h(){document.title="Todos",n(c,"name","text"),n(c,"aria-label","Add todo"),n(c,"placeholder","+ tap to add a todo"),n(c,"class","svelte-dmxqmd"),n(m,"class","new svelte-dmxqmd"),n(m,"action","/todos.json"),n(m,"method","post"),n(e,"class","todos svelte-dmxqmd")},m(s,i){W(s,t,i),W(s,e,i),f(e,a),f(a,h),f(e,j),f(e,m),f(m,c),f(e,r);for(let l=0;l<o.length;l+=1)o[l].m(e,null);_=!0,b||(N=V(v=C.call(null,m,{result:d[2]})),b=!0)},p(s,[i]){if(v&&X(v.update)&&i&1&&v.update.call(null,{result:s[2]}),i&3){O=s[0],be();for(let l=0;l<o.length;l+=1)o[l].r();o=fe(o,i,M,1,s,O,p,e,ge,te,null,ee);for(let l=0;l<o.length;l+=1)o[l].a();he()}},i(s){if(!_){for(let i=0;i<O.length;i+=1)me(o[i]);_=!0}},o(s){for(let i=0;i<o.length;i+=1)pe(o[i]);_=!1},d(s){s&&k(t),s&&k(e);for(let i=0;i<o.length;i+=1)o[i].d();b=!1,N()}}}const qe=async({fetch:d})=>{const t=await d("/todos.json");if(t.ok)return{props:{todos:await t.json()}};const{message:e}=await t.json();return{error:new Error(e)}};function Ee(d,t,e){let{todos:a}=t;async function h(r){const o=await r.json();e(0,a=a.map(p=>p.uid===o.uid?o:p))}const j=async(r,o)=>{const p=await r.json();e(0,a=[...a,p]),o.reset()},m=(r,o,p,_)=>{e(0,o[p].done=!!_.get("done"),a)},c=(r,o,p)=>e(0,o[p].pending_delete=!0,a),v=r=>{e(0,a=a.filter(o=>o.uid!==r.uid))};return d.$$set=r=>{"todos"in r&&e(0,a=r.todos)},[a,h,j,m,c,v]}class we extends ae{constructor(t){super();oe(this,t,Ee,je,ne,{todos:0})}}export{we as default,qe as load};
