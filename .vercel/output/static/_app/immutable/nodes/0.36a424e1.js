import{s as S,c as T,u as j,g as q,d as w,n as L}from"../chunks/scheduler.4b895fe1.js";import{S as z,i as D,g as d,s as x,h as m,j as E,x as H,c as A,f as c,k as C,a as b,y as h,d as N,t as O,m as R,n as V}from"../chunks/index.bbdfbc60.js";function B(i){let t,s="Log in";return{c(){t=d("a"),t.textContent=s,this.h()},l(l){t=m(l,"A",{href:!0,"data-svelte-h":!0}),H(t)!=="svelte-17438o0"&&(t.textContent=s),this.h()},h(){C(t,"href","/auth")},m(l,n){b(l,t,n)},p:L,d(l){l&&c(t)}}}function F(i){let t,s=i[0].email+"",l;return{c(){t=d("a"),l=R(s),this.h()},l(n){t=m(n,"A",{href:!0});var a=E(t);l=V(a,s),a.forEach(c),this.h()},h(){C(t,"href","/profile")},m(n,a){b(n,t,a),h(t,l)},p:L,d(n){n&&c(t)}}}function G(i){let t,s,l='<a href="/">Optimeese</a>',n,a,_,f="Home",k,v,u;function M(e,o){return e[0]?F:B}let p=M(i)(i);const g=i[3].default,r=T(g,i,i[2],null);return{c(){t=d("header"),s=d("h1"),s.innerHTML=l,n=x(),a=d("nav"),_=d("a"),_.textContent=f,k=x(),p.c(),v=x(),r&&r.c(),this.h()},l(e){t=m(e,"HEADER",{class:!0});var o=E(t);s=m(o,"H1",{"data-svelte-h":!0}),H(s)!=="svelte-1ul2acr"&&(s.innerHTML=l),n=A(o),a=m(o,"NAV",{});var y=E(a);_=m(y,"A",{href:!0,"data-svelte-h":!0}),H(_)!=="svelte-5a0zws"&&(_.textContent=f),k=A(y),p.l(y),y.forEach(c),o.forEach(c),v=A(e),r&&r.l(e),this.h()},h(){C(_,"href","/"),C(t,"class","svelte-10ae8")},m(e,o){b(e,t,o),h(t,s),h(t,n),h(t,a),h(a,_),h(a,k),p.m(a,null),b(e,v,o),r&&r.m(e,o),u=!0},p(e,[o]){p.p(e,o),r&&r.p&&(!u||o&4)&&j(r,g,e,e[2],u?w(g,e[2],o,null):q(e[2]),null)},i(e){u||(N(r,e),u=!0)},o(e){O(r,e),u=!1},d(e){e&&(c(t),c(v)),p.d(),r&&r.d(e)}}}function I(i,t,s){let{$$slots:l={},$$scope:n}=t,{data:a}=t;const{user:_}=a;return i.$$set=f=>{"data"in f&&s(1,a=f.data),"$$scope"in f&&s(2,n=f.$$scope)},[_,a,n,l]}class Q extends z{constructor(t){super(),D(this,t,I,G,S,{data:1})}}export{Q as component};