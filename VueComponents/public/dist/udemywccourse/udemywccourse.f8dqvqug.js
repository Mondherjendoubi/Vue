/*! Built with http://stenciljs.com */
(function(window,document,Context,namespace,hydratedCssClass,components,resourcesUrl){"use strict";
(function(s){s&&(resourcesUrl=s.getAttribute('data-resources-url'))})(document.querySelector("script[data-namespace='udemywccourse']"));
function t(t,e){return"sc-"+t.t+(e&&e!==O?"-"+e:"")}function e(t,e){return t+(e?"-h":"-s")}function n(e,n,o,i){let c=o.t+i.mode,f=o[c];if((2===o.e||1===o.e&&!e.o.n)&&(i["s-sc"]=f?t(o,i.mode):t(o)),f||(f=o[c=o.t+O]),f){let t=n.i.head;if(n.n)if(1===o.e)t=i.shadowRoot;else{let e=i;for(;e=n.c(e);)if(e.host&&e.host.shadowRoot){t=e.host.shadowRoot;break}}let r=e.f.get(t);if(r||e.f.set(t,r={}),!r[c]){let e;{e=f.content.cloneNode(!0),r[c]=!0;const o=t.querySelectorAll("[data-styles]");n.r(t,e,o.length&&o[o.length-1].nextSibling||t.firstChild)}}}}function o(t,e,n,o="boolean"==typeof n){const i=e!==(e=e.replace(/^xlink\:?/,""));null==n||o&&(!n||"false"===n)?i?t.removeAttributeNS(A,N(e)):t.removeAttribute(e):"function"!=typeof n&&(n=o?"":n.toString(),i?t.setAttributeNS(A,N(e),n):t.setAttribute(e,n))}function i(t,e,n,i,r,s,l){if("class"!==n||s)if("style"===n){for(const t in i)r&&null!=r[t]||(/-/.test(t)?e.style.removeProperty(t):e.style[t]="");for(const t in r)i&&r[t]===i[t]||(/-/.test(t)?e.style.setProperty(t,r[t]):e.style[t]=r[t])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in e)if("list"!==n&&"type"!==n&&!s&&(n in e||-1!==["object","function"].indexOf(typeof r)&&null!==r)){const i=t.s(e);i&&i.l&&i.l[n]?(f(e,n,r),l&&i.l[n].u&&o(e,i.l[n].a,r,4===i.l[n].p)):"ref"!==n&&(f(e,n,null==r?"":r),null!=r&&!1!==r||t.o.d(e,n))}else null!=r&&"key"!==n?o(e,n,r):(s||t.o.v(e,n)&&(null==r||!1===r))&&t.o.d(e,n);else n=N(n)in e?N(n.substring(2)):N(n[2])+n.substring(3),r?r!==i&&t.o.m(e,n,r):t.o.b(e,n);else if(i!==r){const t=c(i),n=c(r),o=t.filter(t=>!n.includes(t)),f=c(e.className).filter(t=>!o.includes(t)),s=n.filter(e=>!t.includes(e)&&!f.includes(e));f.push(...s),e.className=f.join(" ")}}function c(t){return null==t||""===t?[]:t.trim().split(/\s+/)}function f(t,e,n){try{t[e]=n}catch(t){}}function r(t,e,n,o,c){const f=11===n.y.nodeType&&n.y.host?n.y.host:n.y,r=e&&e.vattrs||x,s=n.vattrs||x;for(c in r)s&&null!=s[c]||null==r[c]||i(t,f,c,r[c],void 0,o,n.w);for(c in s)c in r&&s[c]===("value"===c||"checked"===c?f[c]:r[c])||i(t,f,c,r[c],s[c],o,n.w)}function s(t,e){function n(i,c,f,s,l,p,y,h,w){if(h=c.vchildren[f],u||(d=!0,"slot"===h.vtag&&(a&&e.g(s,a+"-s"),h.vchildren?h.M=!0:h.k=!0)),E(h.vtext))h.y=e.C(h.vtext);else if(h.k)h.y=e.C("");else{if(p=h.y=R||"svg"===h.vtag?e.j("http://www.w3.org/2000/svg",h.vtag):e.O(h.M?"slot-fb":h.vtag),t.x(p)&&t.W.delete(b),R="svg"===h.vtag||"foreignObject"!==h.vtag&&R,r(t,null,h,R),E(a)&&p["s-si"]!==a&&e.g(p,p["s-si"]=a),h.vchildren)for(l=0;l<h.vchildren.length;++l)(y=n(i,h,l,p))&&e.N(p,y);"svg"===h.vtag&&(R=!1)}return h.y["s-hn"]=m,(h.M||h.k)&&(h.y["s-sr"]=!0,h.y["s-cr"]=v,h.y["s-sn"]=h.vname||"",(w=i&&i.vchildren&&i.vchildren[f])&&w.vtag===h.vtag&&i.y&&o(i.y)),h.y}function o(n,i,c,f){t.S=!0;const r=e.A(n);for(c=r.length-1;c>=0;c--)(f=r[c])["s-hn"]!==m&&f["s-ol"]&&(e.R(f),e.r(l(f),f,s(f)),e.R(f["s-ol"]),f["s-ol"]=null,d=!0),i&&o(f,i);t.S=!1}function i(t,o,i,c,f,r,l,u){const a=t["s-cr"];for((l=a&&e.c(a)||t).shadowRoot&&e.T(l)===m&&(l=l.shadowRoot);f<=r;++f)c[f]&&(u=E(c[f].vtext)?e.C(c[f].vtext):n(null,i,f,t))&&(c[f].y=u,e.r(l,u,s(o)))}function c(t,n,i,c){for(;n<=i;++n)E(t[n])&&(c=t[n].y,p=!0,c["s-ol"]?e.R(c["s-ol"]):o(c,!0),e.R(c))}function f(t,e){return t.vtag===e.vtag&&t.vkey===e.vkey&&("slot"!==t.vtag||t.vname===e.vname)}function s(t){return t&&t["s-ol"]?t["s-ol"]:t}function l(t){return e.c(t["s-ol"]?t["s-ol"]:t)}let u,a,p,d,v,m,b;const y=[];return function h(w,g,$,M,k,C,j,O,x,W,N,S){if(b=w,m=e.T(b),v=b["s-cr"],u=M,a=b["s-sc"],d=p=!1,function u(a,p,d){const v=p.y=a.y,m=a.vchildren,b=p.vchildren;R=p.y&&E(e.L(p.y))&&void 0!==p.y.ownerSVGElement,R="svg"===p.vtag||"foreignObject"!==p.vtag&&R,E(p.vtext)?(d=v["s-cr"])?e.D(e.c(d),p.vtext):a.vtext!==p.vtext&&e.D(v,p.vtext):("slot"!==p.vtag&&r(t,a,p,R),E(m)&&E(b)?function y(t,r,a,p,d,v,m,b){let y=0,h=0,w=r.length-1,g=r[0],$=r[w],M=p.length-1,k=p[0],C=p[M];for(;y<=w&&h<=M;)if(null==g)g=r[++y];else if(null==$)$=r[--w];else if(null==k)k=p[++h];else if(null==C)C=p[--M];else if(f(g,k))u(g,k),g=r[++y],k=p[++h];else if(f($,C))u($,C),$=r[--w],C=p[--M];else if(f(g,C))"slot"!==g.vtag&&"slot"!==C.vtag||o(e.c(g.y)),u(g,C),e.r(t,g.y,e.I($.y)),g=r[++y],C=p[--M];else if(f($,k))"slot"!==g.vtag&&"slot"!==C.vtag||o(e.c($.y)),u($,k),e.r(t,$.y,g.y),$=r[--w],k=p[++h];else{for(d=null,v=y;v<=w;++v)if(r[v]&&E(r[v].vkey)&&r[v].vkey===k.vkey){d=v;break}E(d)?((b=r[d]).vtag!==k.vtag?m=n(r&&r[h],a,d,t):(u(b,k),r[d]=void 0,m=b.y),k=p[++h]):(m=n(r&&r[h],a,h,t),k=p[++h]),m&&e.r(l(g.y),m,s(g.y))}y>w?i(t,null==p[M+1]?null:p[M+1].y,a,p,h,M):h>M&&c(r,y,w)}(v,m,p,b):E(b)?(E(a.vtext)&&e.D(v,""),i(v,null,p,b,0,b.length-1)):E(m)&&c(m,0,m.length-1)),R&&"svg"===p.vtag&&(R=!1)}(g,$),d){for(function t(n,o,i,c,f,r,s,l,u,a){for(f=0,r=(o=e.A(n)).length;f<r;f++){if((i=o[f])["s-sr"]&&(c=i["s-cr"]))for(l=e.A(e.c(c)),u=i["s-sn"],s=l.length-1;s>=0;s--)(c=l[s])["s-cn"]||c["s-nr"]||c["s-hn"]===i["s-hn"]||((3===(a=e.P(c))||8===a)&&""===u||1===a&&null===e.q(c,"slot")&&""===u||1===a&&e.q(c,"slot")===u)&&(y.some(t=>t.B===c)||(p=!0,c["s-sn"]=u,y.push({F:i,B:c})));1===e.P(i)&&t(i)}}($.y),j=0;j<y.length;j++)(O=y[j]).B["s-ol"]||((x=e.C(""))["s-nr"]=O.B,e.r(e.c(O.B),O.B["s-ol"]=x,O.B));for(t.S=!0,j=0;j<y.length;j++){for(O=y[j],N=e.c(O.F),S=e.I(O.F),x=O.B["s-ol"];x=e.H(x);)if((W=x["s-nr"])&&W&&W["s-sn"]===O.B["s-sn"]&&N===e.c(W)&&(W=e.I(W))&&W&&!W["s-nr"]){S=W;break}(!S&&N!==e.c(O.B)||e.I(O.B)!==S)&&O.B!==S&&(e.R(O.B),e.r(N,O.B,S))}t.S=!1}return p&&function t(n,o,i,c,f,r,s,l){for(c=0,f=(i=e.A(n)).length;c<f;c++)if(o=i[c],1===e.P(o)){if(o["s-sr"])for(s=o["s-sn"],o.hidden=!1,r=0;r<f;r++)if(i[r]["s-hn"]!==o["s-hn"])if(l=e.P(i[r]),""!==s){if(1===l&&s===e.q(i[r],"slot")){o.hidden=!0;break}}else if(1===l||3===l&&""!==e.U(i[r]).trim()){o.hidden=!0;break}t(o)}}($.y),y.length=0,$}}function l(t,e){t&&(t.vattrs&&t.vattrs.ref&&t.vattrs.ref(e?null:t.y),t.vchildren&&t.vchildren.forEach(t=>{l(t,e)}))}function u(t,e,n,o,i){const c=t.P(e);let f,r,s,l;if(i&&1===c){(r=t.q(e,j))&&(s=r.split("."))[0]===o&&((l={}).vtag=t.T(l.y=e),n.vchildren||(n.vchildren=[]),n.vchildren[s[1]]=l,n=l,i=""!==s[2]);for(let c=0;c<e.childNodes.length;c++)u(t,e.childNodes[c],n,o,i)}else 3===c&&(f=e.previousSibling)&&8===t.P(f)&&"s"===(s=t.U(f).split("."))[0]&&s[1]===o&&((l={vtext:t.U(e)}).y=e,n.vchildren||(n.vchildren=[]),n.vchildren[s[2]]=l)}function a(t,e){let n,o,i=null,c=!1,f=!1;for(var r=arguments.length;r-- >2;)T.push(arguments[r]);for(;T.length>0;){let e=T.pop();if(e&&void 0!==e.pop)for(r=e.length;r--;)T.push(e[r]);else"boolean"==typeof e&&(e=null),(f="function"!=typeof t)&&(null==e?e="":"number"==typeof e?e=String(e):"string"!=typeof e&&(f=!1)),f&&c?i[i.length-1].vtext+=e:null===i?i=[f?{vtext:e}:e]:i.push(f?{vtext:e}:e),c=f}if(null!=e){if(e.className&&(e.class=e.className),"object"==typeof e.class){for(r in e.class)e.class[r]&&T.push(r);e.class=T.join(" "),T.length=0}null!=e.key&&(n=e.key),null!=e.name&&(o=e.name)}return"function"==typeof t?t(e,i||[],L):{vtag:t,vchildren:i,vtext:void 0,vattrs:e,vkey:n,vname:o,y:void 0,w:!1}}function p(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}}function d(t){const[e,n,,o,i,c]=t,f={color:{a:"color"}};if(o)for(let t=0;t<o.length;t++){const e=o[t];f[e[0]]={Q:e[1],u:!!e[2],a:"string"==typeof e[3]?e[3]:e[3]?e[0]:0,p:e[4]}}return{t:e,Z:n,l:Object.assign({},f),e:i,z:c?c.map(v):void 0}}function v(t){return{G:t[0],J:t[1],K:!!t[2],V:!!t[3],X:!!t[4]}}function m(t,e){if(E(e)&&"object"!=typeof e&&"function"!=typeof e){if(t===Boolean||4===t)return"false"!==e&&(""===e||!!e);if(t===Number||8===t)return parseFloat(e);if(t===String||2===t)return e.toString()}return e}function b(t,e,n){t.Y.add(e),t._.has(e)||(t._.set(e,!0),t.tt?t.queue.write(()=>y(t,e,n)):t.queue.tick(()=>y(t,e,n)))}async function y(t,n,o,i,c,f){if(t._.delete(n),!t.et.has(n)){if(c=t.nt.get(n)){if(c)try{c.componentWillUpdate&&await c.componentWillUpdate()}catch(e){t.ot(e,5,n)}}else{if((f=t.it.get(n))&&!f["s-rn"])return void(f["s-rc"]=f["s-rc"]||[]).push(()=>{y(t,n,o)});if(c=function r(t,e,n,o,i,c,f,s){try{i=new(c=t.s(e).ct),function l(t,e,n,o,i,c){t.ft.set(o,n),t.rt.has(n)||t.rt.set(n,{}),Object.entries(Object.assign({color:{type:String}},e.properties,{mode:{type:String}})).forEach(([e,f])=>{(function r(t,e,n,o,i,c,f,s,l){if(e.type||e.state){const r=t.rt.get(n);e.state||(!e.attr||void 0!==r[i]&&""!==r[i]||(s=c&&c.st)&&E(l=s[e.attr])&&(r[i]=m(e.type,l)),n.hasOwnProperty(i)&&(void 0===r[i]&&(r[i]=m(e.type,n[i])),"mode"!==i&&delete n[i])),o.hasOwnProperty(i)&&void 0===r[i]&&(r[i]=o[i]),e.watchCallbacks&&(r[D+i]=e.watchCallbacks.slice()),g(o,i,function u(e){return(e=t.rt.get(t.ft.get(this)))&&e[i]},function a(n,o){(o=t.ft.get(this))&&(e.state||e.mutable)&&h(t,o,i,n,f)})}else e.elementRef&&w(o,i,n)})(t,f,n,o,e,i,c)})}(t,c,e,i,n,o),function u(t,e,n){if(e){const o=t.ft.get(n);e.forEach(e=>{n[e.method]={emit:n=>t.lt(o,e.name,{bubbles:e.bubbles,composed:e.composed,cancelable:e.cancelable,detail:n})}})}}(t,c.events,i);try{if(f=t.ut.get(e)){for(s=0;s<f.length;s+=2)i[f[s]](f[s+1]);t.ut.delete(e)}}catch(n){t.ot(n,2,e)}}catch(n){i={},t.ot(n,7,e,!0)}return t.nt.set(e,i),i}(t,n,t.pt.get(n),o))try{c.componentWillLoad&&await c.componentWillLoad()}catch(e){t.ot(e,3,n)}}(function s(t,n,o,i,c){try{const c=n.ct.host,f=n.ct.encapsulation,r="shadow"===f&&t.o.n;let s,l=o;if(s=function f(t,e,n){return t&&Object.keys(t).forEach(o=>{t[o].reflectToAttr&&((n=n||{})[o]=e[o])}),n}(n.ct.properties,i),r&&(l=o.shadowRoot),!o["s-rn"]){t.dt(t,t.o,n,o);const i=o["s-sc"];i&&(t.o.g(o,e(i,!0)),"scoped"===f&&t.o.g(o,e(i)))}if(i.render||i.hostData||c||s){t.vt=!0;const e=i.render&&i.render();let n;n=i.hostData&&i.hostData(),s&&(n=n?Object.assign(n,s):s),t.vt=!1;const c=t.mt.get(o)||{};c.y=l;const u=a(null,n,e);u.w=!0,t.mt.set(o,t.render(o,c,u,r,f))}o["s-rn"]=!0,o["s-rc"]&&(o["s-rc"].forEach(t=>t()),o["s-rc"]=null)}catch(e){t.vt=!1,t.ot(e,8,o,!0)}})(t,t.s(n),n,c),n["s-init"]()}}function h(t,e,n,o,i,c){let f=t.rt.get(e);f||t.rt.set(e,f={});const r=f[n];if(o!==r&&(f[n]=o,c=t.nt.get(e))){{const t=f[D+n];if(t)for(let e=0;e<t.length;e++)try{c[t[e]].call(c,o,r,n)}catch(t){}}!t.vt&&e["s-rn"]&&b(t,e,i)}}function w(t,e,n){Object.defineProperty(t,e,{configurable:!0,value:n})}function g(t,e,n,o){Object.defineProperty(t,e,{configurable:!0,get:n,set:o})}function $(t,e,n,o,i,c){if(t.Y.delete(e),(i=t.it.get(e))&&((o=i["s-ld"])&&((n=o.indexOf(e))>-1&&o.splice(n,1),o.length||i["s-init"]&&i["s-init"]()),t.it.delete(e)),t.bt.length&&!t.Y.size)for(;c=t.bt.shift();)c()}function M(t,e,n,o,i){if(n.connectedCallback=function(){(function n(t,e,o,i){t.yt.has(o)||(t.yt.set(o,!0),function c(t,e){const n=t.s(e);n.z&&n.z.forEach(n=>{n.K||t.o.m(e,n.G,function o(t,e,n,i){return o=>{(i=t.nt.get(e))?i[n](o):((i=t.ut.get(e)||[]).push(n,o),t.ut.set(e,i))}}(t,e,n.J),n.X,n.V)})}(t,o)),t.et.delete(o),t.ht.has(o)||(o["s-id"]||(o["s-id"]=t.wt()),t.gt=!0,t.Y.add(o),t.ht.set(o,!0),function f(t,e,n){for(n=e;n=t.o.L(n);)if(t.x(n)){t.W.has(e)||(t.it.set(e,n),(n["s-ld"]=n["s-ld"]||[]).push(e));break}}(t,o),t.queue.tick(()=>{t.pt.set(o,function n(t,e,o,i,c){return o.mode||(o.mode=t.$t(o)),o["s-cr"]||t.q(o,C)||t.n&&1===e.e||(o["s-cr"]=t.C(""),o["s-cr"]["s-cn"]=!0,t.r(o,o["s-cr"],t.A(o)[0])),t.n||1!==e.e||(o.shadowRoot=o),1===e.e&&t.n&&!o.shadowRoot&&t.Mt(o,{mode:"open"}),i={kt:o["s-id"],st:{}},e.l&&Object.keys(e.l).forEach(n=>{(c=e.l[n].a)&&(i.st[c]=t.q(o,c))}),i}(t.o,e,o)),t.Ct(e,o)}))})(t,e,this)},n.disconnectedCallback=function(){(function e(t,n,o){if(!t.S&&function i(t,e){for(;e;){if(!t.c(e))return 9!==t.P(e);e=t.c(e)}}(t.o,n)){t.et.set(n,!0),$(t,n),l(t.mt.get(n),!0),t.o.b(n),t.yt.delete(n);{const e=t.nt.get(n);e&&e.componentDidUnload&&e.componentDidUnload()}[t.it,t.jt,t.pt].forEach(t=>t.delete(n))}})(t,this)},n["s-init"]=function(){(function e(t,n,o,i,c,f,r){if((c=t.nt.get(n))&&!t.et.has(n)&&(!n["s-ld"]||!n["s-ld"].length)){t.W.set(n,!0),(r=t.Ot.has(n))||(t.Ot.set(n,!0),n["s-ld"]=void 0,t.o.g(n,o));try{l(t.mt.get(n)),(f=t.jt.get(n))&&(f.forEach(t=>t(n)),t.jt.delete(n)),!r&&c.componentDidLoad?c.componentDidLoad():r&&c.componentDidUpdate&&c.componentDidUpdate()}catch(e){t.ot(e,4,n)}$(t,n)}})(t,this,o)},n.forceUpdate=function(){b(t,this,i)},e.l){const o=Object.entries(e.l);{let t={};o.forEach(([e,{a:n}])=>{n&&(t[n]=e)}),t=Object.assign({},t),n.attributeChangedCallback=function(e,n,o){(function i(t,e,n,o){const i=t[N(n)];i&&(e[i]=o)})(t,this,e,o)}}(function c(t,e,n,o){e.forEach(([e,i])=>{const c=i.Q;3&c?g(n,e,function n(){return(t.rt.get(this)||{})[e]},function n(c){h(t,this,e,m(i.p,c),o)}):32===c&&w(n,e,S)})})(t,o,n,i)}}function k(t,e,n,o){return function(){const i=arguments;return function c(t,e,n){let o=e[n];const i=t.i.body;return i?(o||(o=i.querySelector(n)),o||(o=e[n]=t.O(n),t.N(i,o)),o.componentOnReady()):Promise.resolve()}(t,e,n).then(t=>t[o].apply(t,i))}}const C="ssrv",j="ssrc",O="$",x={},W={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},E=t=>null!=t,N=t=>t.toLowerCase(),S=()=>{},A="http://www.w3.org/1999/xlink";let R=!1;const T=[],L={forEach:(t,e)=>{t.forEach((t,n,o)=>e(p(t),n,o))},map:(t,e)=>t.map((t,n,o)=>(function i(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}})(e(p(t),n,o)))},D="wc-";(function I(t,e,o,i,c,f,r){function l(t,e){const n=t.t;o.customElements.get(n)||(M(j,v[n]=t,e.prototype,f,p),e.observedAttributes=Object.values(t.l).map(t=>t.a).filter(t=>!!t),o.customElements.define(t.t,e))}const p=o.performance,v={html:{}},m={},y=o[t]=o[t]||{},h=function w(t,e,n){t.ael||(t.ael=((t,e,n,o)=>t.addEventListener(e,n,o)),t.rel=((t,e,n,o)=>t.removeEventListener(e,n,o)));const o=new WeakMap,i={i:n,n:!!n.documentElement.attachShadow,xt:!1,P:t=>t.nodeType,O:t=>n.createElement(t),j:(t,e)=>n.createElementNS(t,e),C:t=>n.createTextNode(t),Wt:t=>n.createComment(t),r:(t,e,n)=>t.insertBefore(e,n),R:t=>t.remove(),N:(t,e)=>t.appendChild(e),g:(t,e)=>{t.classList.add(e)},A:t=>t.childNodes,c:t=>t.parentNode,I:t=>t.nextSibling,H:t=>t.previousSibling,T:t=>N(t.nodeName),U:t=>t.textContent,D:(t,e)=>t.textContent=e,q:(t,e)=>t.getAttribute(e),Et:(t,e,n)=>t.setAttribute(e,n),Nt:(t,e,n,o)=>t.setAttributeNS(e,n,o),d:(t,e)=>t.removeAttribute(e),v:(t,e)=>t.hasAttribute(e),$t:e=>e.getAttribute("mode")||(t.Context||{}).mode,St:(t,o)=>"child"===o?t.firstElementChild:"parent"===o?i.L(t):"body"===o?n.body:"document"===o?n:"window"===o?e:t,m:(e,n,c,f,r,s,l,u)=>{const a=n;let p=e,d=o.get(e);if(d&&d[a]&&d[a](),"string"==typeof s?p=i.St(e,s):"object"==typeof s?p=s:(u=n.split(":")).length>1&&(p=i.St(e,u[0]),n=u[1]),!p)return;let v=c;(u=n.split(".")).length>1&&(n=u[0],v=(t=>{t.keyCode===W[u[1]]&&c(t)})),l=i.xt?{capture:!!f,passive:!!r}:!!f,t.ael(p,n,v,l),d||o.set(e,d={}),d[a]=(()=>{p&&t.rel(p,n,v,l),d[a]=null})},b:(t,e)=>{const n=o.get(t);n&&(e?n[e]&&n[e]():Object.keys(n).forEach(t=>{n[t]&&n[t]()}))},At:(t,n,o)=>{const i=new e.CustomEvent(n,o);return t&&t.dispatchEvent(i),i},L:(t,e)=>(e=i.c(t))&&11===i.P(e)?e.host:e,Mt:(t,e)=>t.attachShadow(e)};try{e.addEventListener("e",null,Object.defineProperty({},"passive",{get:()=>i.xt=!0}))}catch(t){}return i}(y,o,i);e.isServer=e.isPrerender=!(e.isClient=!0),e.window=o,e.location=o.location,e.document=i,e.resourcesUrl=e.publicPath=c,e.enableListener=((t,e,n,o,i)=>(function c(t,e,n,o,i,f){if(e){const c=t.ft.get(e),r=t.s(c);if(r&&r.z)if(o){const o=r.z.find(t=>t.G===n);o&&t.o.m(c,n,t=>e[o.J](t),o.X,void 0===f?o.V:!!f,i)}else t.o.b(c,n)}})(j,t,e,n,o,i)),e.emit=((t,n,o)=>h.At(t,e.eventNameFn?e.eventNameFn(n):n,o)),y.h=a,y.Context=e;const g=o["s-defined"]=o["s-defined"]||{};let $=0;const j={o:h,Rt:l,lt:e.emit,s:t=>v[h.T(t)],Tt:t=>e[t],isClient:!0,x:t=>!(!g[h.T(t)]&&!j.s(t)),wt:()=>t+$++,ot:(t,e,n)=>void 0,Lt:t=>(function e(t,n,o){return{create:k(t,n,o,"create"),componentOnReady:k(t,n,o,"componentOnReady")}})(h,m,t),queue:e.queue=function x(t,e){function n(e){return n=>{e.push(n),v||(v=!0,t.raf(c))}}function o(t){for(let e=0;e<t.length;e++)try{t[e](f())}catch(t){}t.length=0}function i(t,e){let n,o=0;for(;o<t.length&&(n=f())<e;)try{t[o++](n)}catch(t){}o===t.length?t.length=0:0!==o&&t.splice(0,o)}function c(){d++,o(u);const e=r?f()+7*Math.ceil(d*(1/22)):Infinity;i(a,e),i(p,e),a.length>0&&(p.push(...a),a.length=0),(v=u.length+a.length+p.length>0)?t.raf(c):d=0}const f=()=>e.performance.now(),r=!1!==t.asyncQueue,s=Promise.resolve(),l=[],u=[],a=[],p=[];let d=0,v=!1;return t.raf||(t.raf=e.requestAnimationFrame.bind(e)),{tick(t){l.push(t),1===l.length&&s.then(()=>o(l))},read:n(u),write:n(a)}}(y,o),Ct:function E(t,e,n){if(t.ct)b(j,e,p);else{const n="string"==typeof t.Z?t.Z:t.Z[e.mode],o=!h.n;import(c+n+(o?".sc":"")+".entry.js").then(n=>{try{t.ct=n[(t=>N(t).split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""))(t.t)],function o(t,e,n,i,c,f){if(i){const n=e.t+(c||O);if(!e[n]){const o=t.O("template");e[n]=o,o.innerHTML=`<style>${i}</style>`,t.N(t.i.head,o)}}}(h,t,t.e,t.ct.style,t.ct.styleMode),b(j,e,p)}catch(e){t.ct=class{}}},t=>void 0)}},vt:!1,tt:!1,S:!1,dt:n,it:new WeakMap,f:new WeakMap,ht:new WeakMap,yt:new WeakMap,Ot:new WeakMap,W:new WeakMap,ft:new WeakMap,pt:new WeakMap,nt:new WeakMap,et:new WeakMap,_:new WeakMap,jt:new WeakMap,ut:new WeakMap,mt:new WeakMap,rt:new WeakMap,Y:new Set,bt:[]};y.onReady=(()=>new Promise(t=>j.queue.write(()=>j.Y.size?j.bt.push(t):t()))),j.render=s(j,h);const S=h.i.documentElement;return S["s-ld"]=[],S["s-rn"]=!0,S["s-init"]=(()=>{j.W.set(S,y.loaded=j.tt=!0),h.At(o,"appload",{detail:{namespace:t}})}),function A(t,e,n){const o=n.querySelectorAll(`[${C}]`),i=o.length;let c,f,r,s,l,a;if(i>0)for(t.W.set(n,!0),s=0;s<i;s++)for(c=o[s],f=e.q(c,C),(r={}).vtag=e.T(r.y=c),t.mt.set(c,r),l=0,a=c.childNodes.length;l<a;l++)u(e,c.childNodes[l],r,f,!0)}(j,h,S),r.map(d).forEach(t=>l(t,class extends HTMLElement{})),j.gt||S["s-init"](),function R(t,e,n,o,i,c){if(e.componentOnReady=((e,n)=>{if(!e.nodeName.includes("-"))return n(null),!1;const o=t.s(e);if(o)if(t.W.has(e))n(e);else{const o=t.jt.get(e)||[];o.push(n),t.jt.set(e,o)}return!!o}),i){for(c=i.length-1;c>=0;c--)e.componentOnReady(i[c][0],i[c][1])&&i.splice(c,1);for(c=0;c<o.length;c++)if(!n[o[c]].componentOnReady)return;for(c=0;c<i.length;c++)i[c][1](null);i.length=0}}(j,y,o,o["s-apps"],o["s-cr"]),y.initialized=!0,j})(namespace,Context,window,document,resourcesUrl,hydratedCssClass,components);
})(window,document,{},"UdemyWCCourse","hydrated",[["accordion-component","dzj45xe8",1,[["backgroundColor",2,1,"background-color",2],["hoverBackgroundColor",2,1,"hover-background-color",2],["itemHead",2,1,"item-head",2]],1],["body-item","egx8wr79",1,0,1],["body-table","f8svjdn6",1,[["numberColumn",2,1,"number-column",8]],1],["btn-exp","n7ojt3mz",1,[["colorButton",2,1,"color-button",2],["colorInput",16],["content",2,1,1,2],["fontColor",2,1,"font-color",2],["fontColorInput",16]],1],["card-comp","dnexha8o",1,[["cardBackButtonColor",2,1,"card-back-button-color",2],["cardBackButtonColorFont",2,1,"card-back-button-color-font",2],["cardBackButtonColorFontInput",16],["cardBackButtonColorInput",16],["cardBackColor",2,1,"card-back-color",2],["cardFrontColor",2,1,"card-front-color",2],["colorBack",16],["colorFront",16],["colorSpan",16],["price",2,1,1,2],["spanColorInput",2,1,"span-color-input",2],["title",2,1,1,2],["url",2,1,1,2]],1],["drop-down","pvowqnkz",1,[["backgroundColor",2,1,"background-color",2]],1],["drop-link","2ki5o2ut",1,[["backgroundColor",2,1,"background-color",2]],1],["ft-box","ovnouu3l",1,[["cardColor",2,1,"card-color",2],["color",16],["title",2,1,1,2]],1],["gif-comp","y031nkeg",1,[["url",2,1,1,2]],1],["grid-comp","dylyuhyn",1,[["columnType",2,1,"column-type",2]],1],["head-item","6dgfqwcw",1,0,1],["head-table","shjztnmj",1,[["numberColumn",2,1,"number-column",8]],1],["modal-comp","vrlsyggz",1,0,1],["nav-comp","1ykwmand",1,[["url",2,1,1,2]],1],["sr-comp","dylyuhyn",1,[["gifArray",16],["idSymbol",16],["navSelected",2,1,"nav-selected",2],["searchInput",16],["searchInputValid",16],["searchSymbol",2,1,"search-symbol",2]],1],["story-comp","u7ijplvq",1,[["captionInput",16],["captionStory",2,1,"caption-story",2],["colorStory",2,1,"color-story",2],["colorStoryInput",16],["fontColor",2,1,"font-color",2],["fontColorInput",16],["titleInput",16],["titleStory",2,1,"title-story",2],["url",2,1,1,2]],1],["table-comp","lnn5ldfz",1,0,1],["uc-spinner","hj3agmew",1,0,1],["uc-stock-finder","papqimpg",1,[["loading",16],["searchResults",16]],1],["uc-stock-price","vv84eeht",1,[["el",64],["error",16],["fetchedPrice",16],["loading",16],["stockInputValid",16],["stockSymbol",2,1,"stock-symbol",2],["stockUserInput",16]],1,[["body:ucSymbolSelected","onStockSymbolSelected"]]]]);