(function(t){function e(e){for(var c,b,r=e[0],a=e[1],o=e[2],i=0,O=[];i<r.length;i++)b=r[i],Object.prototype.hasOwnProperty.call(n,b)&&n[b]&&O.push(n[b][0]),n[b]=0;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&(t[c]=a[c]);u&&u(e);while(O.length)O.shift()();return s.push.apply(s,o||[]),l()}function l(){for(var t,e=0;e<s.length;e++){for(var l=s[e],c=!0,r=1;r<l.length;r++){var a=l[r];0!==n[a]&&(c=!1)}c&&(s.splice(e--,1),t=b(b.s=l[0]))}return t}var c={},n={app:0},s=[];function b(e){if(c[e])return c[e].exports;var l=c[e]={i:e,l:!1,exports:{}};return t[e].call(l.exports,l,l.exports,b),l.l=!0,l.exports}b.m=t,b.c=c,b.d=function(t,e,l){b.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:l})},b.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},b.t=function(t,e){if(1&e&&(t=b(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var l=Object.create(null);if(b.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)b.d(l,c,function(e){return t[e]}.bind(null,c));return l},b.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return b.d(e,"a",e),e},b.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},b.p="/info/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],a=r.push.bind(r);r.push=e,r=r.slice();for(var o=0;o<r.length;o++)e(r[o]);var u=a;s.push([0,"chunk-vendors"]),l()})({0:function(t,e,l){t.exports=l("56d7")},"018c":function(t,e,l){},"1fd2":function(t,e,l){},2657:function(t,e,l){"use strict";l("37e9")},"37e9":function(t,e,l){},"3dbf":function(t,e,l){"use strict";l("1fd2")},"56d7":function(t,e,l){"use strict";l.r(e);var c=l("7a23");const n={class:"container-640 container"};function s(t,e,l,s,b,r){const a=Object(c["l"])("Header"),o=Object(c["l"])("Navbar"),u=Object(c["l"])("Footer");return Object(c["h"])(),Object(c["d"])("div",n,[Object(c["g"])(a),Object(c["g"])(o,{onMytab:r.getComponent},null,8,["onMytab"]),Object(c["g"])(c["b"],{name:"fade",mode:"out-in"},{default:Object(c["p"])(()=>[(Object(c["h"])(),Object(c["d"])(Object(c["m"])(b.myComponent)))]),_:1}),Object(c["g"])(u)])}l("ab8b");const b={class:"navbar"},r=Object(c["g"])("div",{class:"container-fluid justify-content-center"},[Object(c["g"])("h1",null,[Object(c["f"])("Info "),Object(c["g"])("small",null,"🎓"),Object(c["f"])(" Math")])],-1);function a(t,e){return Object(c["h"])(),Object(c["d"])("header",b,[r])}const o={};o.render=a;var u=o;const i=Object(c["r"])("data-v-74f0b8cf");Object(c["j"])("data-v-74f0b8cf");const O={class:"row"},j={class:"col-6 col-sm-3"},d={class:"col-6 col-sm-3"},g={class:"col-6 col-sm-3 mt-2 mt-sm-0"},p={class:"col-6 col-sm-3 mt-2 mt-sm-0"},h={class:"col-6 col-sm-3 mt-2"},m={class:"col-6 col-sm-3 mt-2"};Object(c["i"])();const f=i((t,e,l,n,s,b)=>(Object(c["h"])(),Object(c["d"])("nav",O,[Object(c["g"])("div",j,[Object(c["g"])("button",{class:["btn btn-block btn-light w-100",{"router-link-active":"Logic"===s.infoPage}],onClick:e[1]||(e[1]=t=>b.selectTab("Logic",t)),ref:"logic"}," Логика ",2)]),Object(c["g"])("div",d,[Object(c["g"])("button",{class:["btn btn-block btn-light w-100",{"router-link-active":"Step"===s.infoPage}],onClick:e[2]||(e[2]=t=>b.selectTab("Step",t)),ref:"step"}," Степени ",2)]),Object(c["g"])("div",g,[Object(c["g"])("button",{class:["btn btn-block btn-light w-100",{"router-link-active":"Ss"===s.infoPage}],onClick:e[3]||(e[3]=t=>b.selectTab("Ss",t)),ref:"ss"}," Перевод СС ",2)]),Object(c["g"])("div",p,[Object(c["g"])("button",{class:["btn btn-block btn-light w-100",{"router-link-active":"Algol"===s.infoPage}],onClick:e[4]||(e[4]=t=>b.selectTab("Algol",t)),ref:"algol"}," Алгоритмы ",2)]),Object(c["g"])("div",h,[Object(c["g"])("button",{class:["btn btn-block btn-light w-100",{"router-link-active":"Graph"===s.infoPage}],onClick:e[5]||(e[5]=t=>b.selectTab("Graph",t)),ref:"graph"}," Графы ",2)]),Object(c["g"])("div",m,[Object(c["g"])("button",{class:["btn btn-block btn-light w-100",{"router-link-active":"About"===s.infoPage}],onClick:e[6]||(e[6]=t=>b.selectTab("About",t)),ref:"about"}," О проекте ",2)])])));var v={data(){return{infoPage:localStorage.getItem("info-page")||"Logic"}},methods:{selectTab(t,e){this.$emit("mytab",t),this.$refs.logic.classList.remove("router-link-active"),this.$refs.ss.classList.remove("router-link-active"),this.$refs.step.classList.remove("router-link-active"),this.$refs.about.classList.remove("router-link-active"),this.$refs.algol.classList.remove("router-link-active"),this.$refs.graph.classList.remove("router-link-active"),e.target.classList.add("router-link-active"),localStorage.setItem("info-page",t)}}};l("3dbf");v.render=f,v.__scopeId="data-v-74f0b8cf";var S=v;const A=Object(c["r"])("data-v-9044ec16");Object(c["j"])("data-v-9044ec16");const k={class:"footer text-center border-top mt-3 pt-2 pb-2"},w=Object(c["g"])("small",null,[Object(c["f"])("© 2021 «Info 🎓 Math»  •   "),Object(c["g"])("a",{href:"https://github.com/mccrush/info",target:"_blank",title:"Fork on Github"},"Fork on Github")],-1);Object(c["i"])();const y=A((t,e)=>(Object(c["h"])(),Object(c["d"])("footer",k,[w])));l("f0c2");const x={};x.render=y,x.__scopeId="data-v-9044ec16";var N=x;const B={class:"row"},C={class:"col-12 pt-3"},T=Object(c["g"])("h4",null,"Обозначения",-1),M=Object(c["g"])("h4",null,"Таблицы истинности",-1),H=Object(c["g"])("h4",null,"Законы логики",-1),I=Object(c["g"])("h4",null,"Порядок выполнения логических операций",-1);function L(t,e,l,n,s,b){const r=Object(c["l"])("TableOboz"),a=Object(c["l"])("TableIst"),o=Object(c["l"])("TableZak"),u=Object(c["l"])("TablePor");return Object(c["h"])(),Object(c["d"])("div",B,[Object(c["g"])("div",C,[T,Object(c["g"])(r),M,Object(c["g"])(a),H,Object(c["g"])(o),I,Object(c["g"])(u)])])}const P={class:"table table-bordered table-striped table-hover text-start"},_=Object(c["g"])("thead",null,[Object(c["g"])("tr",null,[Object(c["g"])("td",{class:"w-75 ps-2"},[Object(c["g"])("strong",null,"Инверсия"),Object(c["f"])(" - логическое отрицание ")]),Object(c["g"])("td",{class:"ps-2"},[Object(c["f"])("¬ "),Object(c["g"])("span",{class:"overline"},"X")])])],-1),D=Object(c["g"])("tbody",null,[Object(c["g"])("tr",null,[Object(c["g"])("td",{class:"ps-2"},[Object(c["g"])("strong",null,"Конъюнкция"),Object(c["f"])(" - логическое умножение")]),Object(c["g"])("td",{class:"ps-2"},"∧ ∩ & •")]),Object(c["g"])("tr",null,[Object(c["g"])("td",{class:"ps-2"},[Object(c["g"])("strong",null,"Дизъюнкция"),Object(c["f"])(" - логическое сложение")]),Object(c["g"])("td",{class:"ps-2"},"∨ ∪ +")]),Object(c["g"])("tr",null,[Object(c["g"])("td",{class:"ps-2"},[Object(c["g"])("strong",null,"Импликация"),Object(c["f"])(" - логическое следование ")]),Object(c["g"])("td",{class:"ps-2"},"→ ⇒ ⊃")]),Object(c["g"])("tr",null,[Object(c["g"])("td",{class:"ps-2"},[Object(c["g"])("strong",null,"Эквивалентность"),Object(c["f"])(" - логическое равенство ")]),Object(c["g"])("td",{class:"ps-2"},"↔ ⇔ ∼ ≡")])],-1);function q(t,e){return Object(c["h"])(),Object(c["d"])("table",P,[_,D])}const F={};F.render=q;var U=F;const X={class:"row"},R={class:"col-12 col-sm-6 pe-sm-1"},V={class:"table table-bordered text-center"},E=Object(c["g"])("thead",null,[Object(c["g"])("tr",null,[Object(c["g"])("th",{class:"w-50"},"Конъюнкция"),Object(c["g"])("th",{class:"w-50"},"Дизъюнкция")])],-1),G={class:"p-2"},$={class:"p-2"},z={class:"col-12 col-sm-6 mt-2 mt-sm-0 ps-sm-1"},J={class:"table table-bordered text-center"},K=Object(c["g"])("thead",null,[Object(c["g"])("tr",null,[Object(c["g"])("th",{class:"w-50"},"Импликация"),Object(c["g"])("th",{class:"w-50"},"Эквивалентность")])],-1),Z={class:"p-2"},Q={class:"p-2"};function W(t,e,l,n,s,b){const r=Object(c["l"])("TableKon"),a=Object(c["l"])("TableDiz"),o=Object(c["l"])("TableIm"),u=Object(c["l"])("TableEq");return Object(c["h"])(),Object(c["d"])("div",X,[Object(c["g"])("div",R,[Object(c["g"])("table",V,[E,Object(c["g"])("tbody",null,[Object(c["g"])("tr",null,[Object(c["g"])("td",G,[Object(c["g"])(r)]),Object(c["g"])("td",$,[Object(c["g"])(a)])])])])]),Object(c["g"])("div",z,[Object(c["g"])("table",J,[K,Object(c["g"])("tbody",null,[Object(c["g"])("tr",null,[Object(c["g"])("td",Z,[Object(c["g"])(o)]),Object(c["g"])("td",Q,[Object(c["g"])(u)])])])])])])}const Y={class:"table table-bordered table-striped table-hover table-sm text-center mb-0"},tt=Object(c["g"])("thead",null,[Object(c["g"])("tr",null,[Object(c["g"])("th",{class:"w-25"},"A"),Object(c["g"])("th",{class:"w-25"},"B"),Object(c["g"])("th",{class:"w-50"},"A & B")])],-1),et=Object(c["g"])("tbody",null,[Object(c["g"])("tr",null,[Object(c["g"])("td",null,"0"),Object(c["g"])("td",null,"0"),Object(c["g"])("td",null,"0")]),Object(c["g"])("tr",null,[Object(c["g"])("td",null,"0"),Object(c["g"])("td",null,"1"),Object(c["g"])("td",null,"0")]),Object(c["g"])("tr",null,[Object(c["g"])("td",null,"1"),Object(c["g"])("td",null,"0"),Object(c["g"])("td",null,"0")]),Object(c["g"])("tr",null,[Object(c["g"])("td",null,"1"),Object(c["g"])("td",null,"1"),Object(c["g"])("td",null,"1")])],-1);function lt(t,e){return Object(c["h"])(),Object(c["d"])("table",Y,[tt,et])}const ct={};ct.render=lt;var nt=ct;const st={class:"table table-bordered table-striped table-hover table-sm text-center mb-0"},bt=Object(c["g"])("thead",null,[Object(c["g"])("tr",null,[Object(c["g"])("th",{class:"w-25"},"A"),Object(c["g"])("th",{class:"w-25"},"B"),Object(c["g"])("th",{class:"w-50"},"A v B")])],-1),rt=Object(c["g"])("tbody",null,[Object(c["g"])("tr",null,[Object(c["g"])("td",null,"0"),Object(c["g"])("td",null,"0"),Object(c["g"])("td",null,"0")]),Object(c["g"])("tr",null,[Object(c["g"])("td",null,"0"),Object(c["g"])("td",null,"1"),Object(c["g"])("td",null,"1")]),Object(c["g"])("tr",null,[Object(c["g"])("td",null,"1"),Object(c["g"])("td",null,"0"),Object(c["g"])("td",null,"1")]),Object(c["g"])("tr",null,[Object(c["g"])("td",null,"1"),Object(c["g"])("td",null,"1"),Object(c["g"])("td",null,"1")])],-1);function at(t,e){return Object(c["h"])(),Object(c["d"])("table",st,[bt,rt])}const ot={};ot.render=at;var ut=ot;const it={class:"table table-bordered table-striped table-hover table-sm text-center mb-0"},Ot=Object(c["g"])("thead",null,[Object(c["g"])("tr",null,[Object(c["g"])("th",{class:"w-25"},"A"),Object(c["g"])("th",{class:"w-25"},"B"),Object(c["g"])("th",{class:"w-50"},"A → B")])],-1),jt=Object(c["g"])("tbody",null,[Object(c["g"])("tr",null,[Object(c["g"])("td",null,"0"),Object(c["g"])("td",null,"0"),Object(c["g"])("td",null,"1")]),Object(c["g"])("tr",null,[Object(c["g"])("td",null,"0"),Object(c["g"])("td",null,"1"),Object(c["g"])("td",null,"1")]),Object(c["g"])("tr",null,[Object(c["g"])("td",null,"1"),Object(c["g"])("td",null,"0"),Object(c["g"])("td",null,"0")]),Object(c["g"])("tr",null,[Object(c["g"])("td",null,"1"),Object(c["g"])("td",null,"1"),Object(c["g"])("td",null,"1")])],-1);function dt(t,e){return Object(c["h"])(),Object(c["d"])("table",it,[Ot,jt])}const gt={};gt.render=dt;var pt=gt;const ht={class:"table table-bordered table-striped table-hover table-sm text-center mb-0"},mt=Object(c["g"])("thead",null,[Object(c["g"])("tr",null,[Object(c["g"])("th",{class:"w-25"},"A"),Object(c["g"])("th",{class:"w-25"},"B"),Object(c["g"])("th",{class:"w-50"},"A ↔ B")])],-1),ft=Object(c["g"])("tbody",null,[Object(c["g"])("tr",null,[Object(c["g"])("td",null,"0"),Object(c["g"])("td",null,"0"),Object(c["g"])("td",null,"1")]),Object(c["g"])("tr",null,[Object(c["g"])("td",null,"0"),Object(c["g"])("td",null,"1"),Object(c["g"])("td",null,"0")]),Object(c["g"])("tr",null,[Object(c["g"])("td",null,"1"),Object(c["g"])("td",null,"0"),Object(c["g"])("td",null,"0")]),Object(c["g"])("tr",null,[Object(c["g"])("td",null,"1"),Object(c["g"])("td",null,"1"),Object(c["g"])("td",null,"1")])],-1);function vt(t,e){return Object(c["h"])(),Object(c["d"])("table",ht,[mt,ft])}const St={};St.render=vt;var At=St,kt={components:{TableKon:nt,TableDiz:ut,TableIm:pt,TableEq:At}};kt.render=W;var wt=kt;const yt={class:"row"},xt={class:"table table-bordered table-striped table-hover table-sm text-center"};function Nt(t,e,l,n,s,b){return Object(c["h"])(),Object(c["d"])("div",yt,[(Object(c["h"])(!0),Object(c["d"])(c["a"],null,Object(c["k"])(s.zacons,(t,e)=>(Object(c["h"])(),Object(c["d"])("div",{key:"id"+e,class:"col-12 col-sm-6 pe-sm-1"},[Object(c["g"])("table",xt,[Object(c["g"])("thead",null,[Object(c["g"])("tr",null,[Object(c["g"])("th",null,Object(c["n"])(t.title),1)])]),Object(c["g"])("tbody",null,[Object(c["g"])("tr",null,[Object(c["g"])("td",{innerHTML:t.text},null,8,["innerHTML"])])])])]))),128))])}var Bt=[{title:"Закон противоречия",text:'A &amp; <span class="overline">A</span> = 0'},{title:"Закон исключающего третьего",text:'A &or; <span class="overline">A</span> = 1'},{title:"Закон двойного отрицания",text:'<span class="duble-border">A</span> = A'},{title:"Закон идемпотентности (тавтологии)",text:'<div class="row">\n    <div class="col-6 pe-0">A &amp; A = A</div>\n    <div class="col-6 ps-0">A &or; A = A</div>\n    </div>'},{title:"Закон де Моргана",text:'<span class="overline">A &amp; B</span> = <span class="overline">A</span> &or; <span class="overline">B</span><br /><span class="overline">A &or; B</span> = <span class="overline">A</span> &amp; <span class="overline">B</span>'},{title:"Закон склеивания",text:'(A &or; B) &amp; (A &or; <span class="overline">B</span>) = A<br />\n    (A &amp; B) &or; (A &amp; <span class="overline">B</span>) = A'},{title:"Отрицание импликации",text:'<span class="overline">A &rarr; B</span> = A &amp; <span class="overline">B</span>'},{title:"Устранение импликации",text:'A &rarr; B =<span class="overline">A</span> &or; B'},{title:"Замены эквивалентности",text:'A &harr; B = (A &amp; B) &or; (<span class="overline">A</span> &amp; <span class="overline">B</span>)<br />\n    A &harr; B = (<span class="overline">A</span> &or; B) &amp; (A &or; <span class="overline">B</span>)'},{title:"Свойства констант",text:'<div class="row">\n    <div class="col-6 pe-0">A &amp; 1 = A<br />A &amp; 0 = 0</div>\n    <div class="col-6 ps-0">A &or; 1 = 1<br />A &or; 0 = A</div>\n    </div>'},{title:"Закон коммутативности (переместительный)",text:"A &amp; B = B &amp; A<br />A &or; B = B &or; A"},{title:"Закон ассоциативности (сочетательный)",text:"(A &amp; B) &amp; C = A &amp; (B &amp; C)<br />(A &or; B) &or; C = A &or; (B &or; C)"},{title:"Закон дистрибутивности (распределительный)",text:"(A &amp; B) &or; C = (A &or; C) &amp; (B &or; C)<br />(A &or; B) &amp; C = (A &amp; C) &or; (B &amp; C)"},{title:"Законы поглащения",text:'A &amp; (A &or; B) = A<br />\n    A &or; (A &amp; B) = A<br />\n    A &amp; (<span class="overline">A</span> &or; B) = A &amp; B<br />\n    A &or; (<span class="overline">A</span> &amp; B) = A &or; B'}],Ct={data(){return{zacons:Bt}}};Ct.render=Nt;var Tt=Ct;const Mt={class:"table table-bordered table-striped table-hover text-center"},Ht=Object(c["g"])("thead",null,[Object(c["g"])("tr",null,[Object(c["g"])("th",null,"0"),Object(c["g"])("td",null,"( )"),Object(c["g"])("td",{class:"text-start ps-2 w-75"},"действия в скобках")])],-1),It=Object(c["g"])("tbody",null,[Object(c["g"])("tr",null,[Object(c["g"])("th",null,"1"),Object(c["g"])("td",null,[Object(c["g"])("span",{class:"overline"},"X")]),Object(c["g"])("td",{class:"text-start ps-2"},"инверсия (отрицание)")]),Object(c["g"])("tr",null,[Object(c["g"])("th",null,"2"),Object(c["g"])("td",null,"&"),Object(c["g"])("td",{class:"text-start ps-2"},"конъюнкция")]),Object(c["g"])("tr",null,[Object(c["g"])("th",null,"3"),Object(c["g"])("td",null,"v"),Object(c["g"])("td",{class:"text-start ps-2"},"дизъюнкция")]),Object(c["g"])("tr",null,[Object(c["g"])("th",null,"4"),Object(c["g"])("td",null,"→"),Object(c["g"])("td",{class:"text-start ps-2"},"импликация (следование)")]),Object(c["g"])("tr",null,[Object(c["g"])("th",null,"5"),Object(c["g"])("td",null,"↔"),Object(c["g"])("td",{class:"text-start ps-2"},"эквивалентность")])],-1);function Lt(t,e){return Object(c["h"])(),Object(c["d"])("table",Mt,[Ht,It])}const Pt={};Pt.render=Lt;var _t=Pt,Dt={components:{TableOboz:U,TableIst:wt,TableZak:Tt,TablePor:_t}};l("c9e6");Dt.render=L;var qt=Dt;const Ft={class:"row"},Ut={class:"col-12 pt-3"},Xt=Object(c["g"])("h4",null,"Перевод СС",-1),Rt=Object(c["g"])("p",null," Калькулятор перевода целых чисел между различными системами счисления ",-1),Vt=Object(c["g"])("hr",null,null,-1);function Et(t,e,l,n,s,b){const r=Object(c["l"])("CalcSS");return Object(c["h"])(),Object(c["d"])("div",Ft,[Object(c["g"])("div",Ut,[Xt,Rt,Vt,Object(c["g"])(r)])])}const Gt=Object(c["r"])("data-v-4f3eb5f2");Object(c["j"])("data-v-4f3eb5f2");const $t={class:"row"},zt={class:"col-12 col-sm-6"},Jt=Object(c["g"])("br",null,null,-1),Kt=Object(c["g"])("p",{class:"mb-2"},"Исходная система счисления",-1),Zt={class:"rounded border pb-2 w-100"},Qt={class:"col-12 col-sm-6 mt-2 mt-sm-0"},Wt={class:"d-none d-sm-block"},Yt={class:"input-group"},te=Object(c["g"])("br",null,null,-1),ee=Object(c["g"])("p",{class:"mb-2"},"Перевести в систему счисления",-1),le={class:"rounded border pb-2 w-100"},ce={class:"d-block d-sm-none mt-4"},ne=Object(c["g"])("label",{for:"resultNum",class:"form-label"},"Результат",-1),se={class:"input-group"},be={class:"col-12"},re=Object(c["g"])("br",null,null,-1),ae={key:0,class:"accordion",id:"accordionFlushExample"},oe={class:"accordion-item"},ue={class:"accordion-header",id:"flush-headingOne"},ie={key:0},Oe={key:1},je={id:"flush-collapseOne",class:"accordion-collapse collapse","aria-labelledby":"flush-headingOne","data-bs-parent":"#accordionFlushExample"},de={class:"accordion-body"},ge=Object(c["g"])("p",{class:"mb-0"},[Object(c["g"])("strong",null,"1. Переведем число в десятичную СС")],-1),pe=Object(c["f"])(" = "),he={key:0},me={class:"mb-0"},fe=Object(c["f"])(" 2. Переведем "),ve=Object(c["g"])("sub",null,"10",-1),Se=Object(c["f"])(" в нужную нам СС"),Ae=Object(c["f"])(" Целая часть числа находится делением на основание новой СС"),ke=Object(c["g"])("br",null,null,-1),we=Object(c["f"])(" Записываем последнюю целую часть от деления + остатки от деления начиная с последнего "),ye=Object(c["g"])("br",null,null,-1),xe=Object(c["g"])("p",{class:"mb-0"},[Object(c["g"])("strong",null," 3. Результат")],-1);Object(c["i"])();const Ne=Gt((t,e,l,n,s,b)=>(Object(c["h"])(),Object(c["d"])("div",$t,[Object(c["g"])("div",zt,[Object(c["q"])(Object(c["g"])("input",{type:"text",id:"inputNum",class:"form-control",placeholder:"Исходное число","onUpdate:modelValue":e[1]||(e[1]=t=>s.inputNum=t),onInput:e[2]||(e[2]=(...t)=>b.calculate&&b.calculate(...t))},null,544),[[c["o"],s.inputNum,void 0,{trim:!0}]]),Object(c["g"])("div",{id:"inputNumHelp",class:"form-text",innerHTML:s.inputNumHelp},null,8,["innerHTML"]),Jt,Kt,Object(c["g"])("div",Zt,[(Object(c["h"])(),Object(c["d"])(c["a"],null,Object(c["k"])(15,t=>Object(c["g"])("div",{class:"d-inline-flex justify-content-around mt-2 w-25",key:"id"+t},[Object(c["g"])("button",{class:["input-ss btn btn-outline-dark w-75",{"activ-in-ss":s.inputSS==t+1}],onClick:e=>b.selectInputSS(t+1)},Object(c["n"])(t+1),11,["onClick"])])),64)),Object(c["q"])(Object(c["g"])("input",{type:"text",class:"form-control d-inline-flex border-warning text-center w-20 ms-2","onUpdate:modelValue":e[3]||(e[3]=t=>s.inputSS=t),onInput:e[4]||(e[4]=(...t)=>b.calculate&&b.calculate(...t)),title:"MAX 36",onFocus:e[5]||(e[5]=(...t)=>b.checkOffInSS&&b.checkOffInSS(...t))},null,544),[[c["o"],s.inputSS,void 0,{trim:!0}]])])]),Object(c["g"])("div",Qt,[Object(c["g"])("div",Wt,[Object(c["g"])("div",Yt,[Object(c["q"])(Object(c["g"])("input",{type:"text",id:"resultNum",class:"form-control","onUpdate:modelValue":e[6]||(e[6]=t=>s.resultNum=t),"aria-describedby":"button-addon2"},null,512),[[c["o"],s.resultNum]]),Object(c["g"])("button",{class:"btn btn-outline-secondary",id:"button-addon2",onClick:e[7]||(e[7]=t=>b.copyInBuffer(t)),title:"Скопировать в буфер"}," Копировать ")]),Object(c["g"])("div",{id:"resultNumHelp",class:"form-text",innerHTML:s.resultNumHelp},null,8,["innerHTML"])]),te,ee,Object(c["g"])("div",le,[(Object(c["h"])(),Object(c["d"])(c["a"],null,Object(c["k"])(15,t=>Object(c["g"])("div",{class:"d-inline-flex justify-content-around me-0 mt-2 w-25",key:"idr"+t},[Object(c["g"])("button",{class:["result-ss btn btn-outline-dark w-75",{"activ-res-ss":s.resultSS==t+1}],onClick:e=>b.selectResultSS(t+1)},Object(c["n"])(t+1),11,["onClick"])])),64)),Object(c["q"])(Object(c["g"])("input",{type:"text",class:"form-control d-inline-flex border-warning text-center w-20 ms-2","onUpdate:modelValue":e[8]||(e[8]=t=>s.resultSS=t),onInput:e[9]||(e[9]=(...t)=>b.calculate&&b.calculate(...t)),title:"MAX 36",onFocus:e[10]||(e[10]=(...t)=>b.checkOffResSS&&b.checkOffResSS(...t))},null,544),[[c["o"],s.resultSS,void 0,{trim:!0}]])]),Object(c["g"])("div",ce,[ne,Object(c["g"])("div",se,[Object(c["q"])(Object(c["g"])("input",{type:"text",id:"resultNum",class:"form-control","onUpdate:modelValue":e[11]||(e[11]=t=>s.resultNum=t),"aria-describedby":"button-addon2"},null,512),[[c["o"],s.resultNum]]),Object(c["g"])("button",{class:"btn btn-outline-secondary",id:"button-addon2",onClick:e[12]||(e[12]=t=>b.copyInBuffer(t)),title:"Скопировать в буфер"}," Копировать ")])])]),Object(c["g"])("div",be,[re,s.resultNum?(Object(c["h"])(),Object(c["d"])("div",ae,[Object(c["g"])("div",oe,[Object(c["g"])("h2",ue,[Object(c["g"])("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseOne","aria-expanded":"false","aria-controls":"flush-collapseOne",onClick:e[13]||(e[13]=t=>s.showResh=!s.showResh)},[s.showResh?(Object(c["h"])(),Object(c["d"])("span",Oe,"Скрыть решение")):(Object(c["h"])(),Object(c["d"])("span",ie,"Показать решение"))])]),Object(c["g"])("div",je,[Object(c["g"])("div",de,[ge,Object(c["g"])("p",null,[Object(c["g"])("code",null,[Object(c["f"])(Object(c["n"])(s.inputNum),1),Object(c["g"])("sub",null,Object(c["n"])(s.inputSS),1),pe,Object(c["g"])("span",{innerHTML:s.reshDecStr},null,8,["innerHTML"])])]),10!==s.resultSS?(Object(c["h"])(),Object(c["d"])("div",he,[Object(c["g"])("p",me,[Object(c["g"])("strong",null,[fe,Object(c["g"])("code",null,[Object(c["f"])(Object(c["n"])(s.reshDec),1),ve]),Se])]),Object(c["g"])("p",null,[Ae,ke,Object(c["g"])("code",null,[Object(c["g"])("span",{innerHTML:s.reshSSStr},null,8,["innerHTML"])])]),Object(c["g"])("p",null,[we,ye,Object(c["g"])("code",null,Object(c["n"])(s.resultNum),1)]),xe,Object(c["g"])("p",null,[Object(c["g"])("code",null,[Object(c["f"])(Object(c["n"])(s.inputNum),1),Object(c["g"])("sub",null,Object(c["n"])(s.inputSS),1),Object(c["f"])(" = "+Object(c["n"])(s.resultNum),1),Object(c["g"])("sub",null,Object(c["n"])(s.resultSS),1)])])])):Object(c["e"])("",!0)])])])])):Object(c["e"])("",!0)])])));l("7b17");var Be={data(){return{inputNum:"",resultNum:"",inputSS:"10",resultSS:"10",inputNumHelp:"Введите число",resultNumHelp:"Результат",showResh:!1,reshDecStr:"",reshDec:"",reshSSStr:""}},methods:{copyInBuffer(t){const e=t.target.previousSibling;e.focus(),e.select(),document.execCommand("copy")&&console.log("Результат скопирован в буфер")},checkOffInSS(){let t=document.querySelectorAll(".input-ss");for(let e=0;e<t.length;e++)t[e].classList.remove("activ-in-ss")},checkOffResSS(){let t=document.querySelectorAll(".result-ss");for(let e=0;e<t.length;e++)t[e].classList.remove("activ-res-ss")},selectInputSS(t){this.inputSS=t,this.calculate()},selectResultSS(t){this.resultSS=t,this.calculate()},calculate(){if(this.inputSS>36&&(alert("Основание СС не может быть больше 36"),this.inputSS=""),this.resultSS>36&&(alert("Основание СС не может быть больше 36"),this.resultSS=""),this.inputNum){this.inputNum=this.inputNum.toUpperCase(),this.inputNumHelp=this.inputNum+"<sub>"+this.inputSS+"</sub>";let t=[],e=this.inputNum.split("");e.forEach(l=>{Number.isInteger(+l)?t.push(+l):t.push(this.getNumber(l));for(let c=0;c<t.length;c++){if(t[c]>=this.inputSS&&this.inputSS<11){this.inputNumHelp="<code>Цифры "+e[c]+" нет в "+this.inputSS+"-ой CC</code>";break}if(t[c]>this.inputSS){this.inputNumHelp="<code>Цифры "+e[c]+" нет в "+this.inputSS+"-ой CC</code>";break}}});let l=parseInt(this.inputNum,this.inputSS).toString(+this.resultSS);"NaN"!==l&&(this.resultNum=l.toUpperCase(),this.resultNumHelp=this.resultNum+"<sub>"+this.resultSS+"</sub>",this.reshenie())}else this.resultNum="",this.inputNumHelp="Введите число",this.resultNumHelp="Результат"},reshenie(){this.reshDecStr="",this.reshSSStr="",this.inputNum.split("").forEach((t,e,l)=>{this.reshDecStr+=t+"•10<sup>"+(l.length-(e+1))+"</sup> + "}),this.reshDec=parseInt(this.inputNum,this.inputSS).toString(10),this.reshDecStr=this.reshDecStr.substr(0,this.reshDecStr.length-2)+" = "+this.reshDec+"<sub>10</sub>";let t=this.reshDec,e="";while(t>=this.resultSS)e+=t%this.resultSS,this.reshSSStr+=t+" &divide; "+this.resultSS+" = "+Math.trunc(t/this.resultSS)+", остаток "+t%this.resultSS+"<br>",t=Math.trunc(t/this.resultSS);e+=t;e.split("").reverse().join("")},getNumber(t){return t.charCodeAt(0)-54}}};l("da45");Be.render=Ne,Be.__scopeId="data-v-4f3eb5f2";var Ce=Be,Te={components:{CalcSS:Ce}};Te.render=Et;var Me=Te;const He={class:"row"},Ie={class:"col-12 pt-4"},Le=Object(c["g"])("h4",null,"Степени чисел",-1),Pe={class:"row"},_e={class:"col-12 col-sm-6"},De=Object(c["g"])("div",{id:"resultNumHelp",class:"form-text mb-3"},[Object(c["f"])(" Введите число "),Object(c["g"])("small",{title:"MAX 99"},"(MAX 99)")],-1),qe={class:"d-block d-sm-none"},Fe=Object(c["g"])("div",{id:"resultNumHelp",class:"form-text mb-3"},[Object(c["f"])(" Введите степень "),Object(c["g"])("strong",null,"n"),Object(c["f"])("  "),Object(c["g"])("small",{title:"MAX 99"},"(MAX 99)")],-1),Ue={class:"table table-bordered table-striped table-hover table-sm"},Xe=Object(c["g"])("th",{class:"w-50"},"n",-1),Re=Object(c["g"])("sup",null,"n",-1),Ve={class:"col-12 col-sm-6"},Ee={class:"d-none d-sm-block"},Ge=Object(c["g"])("div",{id:"resultNumHelp",class:"form-text mb-3"},[Object(c["f"])(" Введите степень "),Object(c["g"])("strong",null,"n"),Object(c["f"])("  "),Object(c["g"])("small",{title:"MAX 99"},"(MAX 99)")],-1),$e={class:"table table-bordered table-striped table-hover table-sm"},ze=Object(c["g"])("th",{class:"w-50"},"n",-1),Je=Object(c["g"])("sup",null,"n",-1);function Ke(t,e,l,n,s,b){return Object(c["h"])(),Object(c["d"])("div",He,[Object(c["g"])("div",Ie,[Le,Object(c["g"])("div",Pe,[Object(c["g"])("div",_e,[Object(c["q"])(Object(c["g"])("input",{type:"number",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=t=>s.inputNum=t),min:"1",max:"99",step:"1"},null,512),[[c["o"],s.inputNum,void 0,{number:!0}]]),De,Object(c["g"])("div",qe,[Object(c["q"])(Object(c["g"])("input",{type:"number",class:"form-control","onUpdate:modelValue":e[2]||(e[2]=t=>s.inputStep=t),min:"1",max:"99",step:"1"},null,512),[[c["o"],s.inputStep,void 0,{number:!0}]]),Fe]),Object(c["g"])("table",Ue,[Object(c["g"])("thead",null,[Object(c["g"])("tr",null,[Xe,Object(c["g"])("th",null,[Object(c["f"])(Object(c["n"])(s.inputNum),1),Re])])]),Object(c["g"])("tbody",null,[(Object(c["h"])(!0),Object(c["d"])(c["a"],null,Object(c["k"])(b.podStep1,t=>(Object(c["h"])(),Object(c["d"])("tr",{key:t+"id"},[Object(c["g"])("td",null,Object(c["n"])(t),1),Object(c["g"])("td",null,Object(c["n"])(Math.pow(s.inputNum,t).toLocaleString()),1)]))),128))])])]),Object(c["g"])("div",Ve,[Object(c["g"])("div",Ee,[Object(c["q"])(Object(c["g"])("input",{type:"number",class:"form-control","onUpdate:modelValue":e[3]||(e[3]=t=>s.inputStep=t),min:"1",max:"99",step:"1"},null,512),[[c["o"],s.inputStep,void 0,{number:!0}]]),Ge]),Object(c["g"])("table",$e,[Object(c["g"])("thead",null,[Object(c["g"])("tr",null,[ze,Object(c["g"])("th",null,[Object(c["f"])(Object(c["n"])(s.inputNum),1),Je])])]),Object(c["g"])("tbody",null,[(Object(c["h"])(!0),Object(c["d"])(c["a"],null,Object(c["k"])(b.podStep1,t=>(Object(c["h"])(),Object(c["d"])("tr",{key:t+"id"},[Object(c["g"])("td",null,Object(c["n"])(t+b.podStep1),1),Object(c["g"])("td",null,Object(c["n"])(Math.pow(s.inputNum,t+b.podStep1).toLocaleString()),1)]))),128))])])])])])])}var Ze={data(){return{inputNum:2,inputStep:16}},computed:{podStep1(){return this.inputStep%2===0?this.inputStep/2:Math.trunc(this.inputStep/2)+1}}};Ze.render=Ke;var Qe=Ze;const We={class:"row"},Ye=Object(c["g"])("div",{class:"col-12 pt-3"},[Object(c["g"])("h4",null,"О проекте"),Object(c["g"])("p",null,[Object(c["g"])("strong",null,"Info 🎓 Math"),Object(c["f"])(" — это справочник по некоторым разделам Информатики и Математики, который можно использовать при подготовке к экзаменам ")]),Object(c["g"])("p",null,[Object(c["f"])(" Это "),Object(c["g"])("abbr",{title:"Открытое программное обеспечение",class:"initialism"},"Open source"),Object(c["f"])(" проект, и каждый желающий может внести изменения в справочник на "),Object(c["g"])("a",{href:"https://github.com/mccrush/info",target:"_blank",title:"Fork on Github"},"Github")])],-1);function tl(t,e){return Object(c["h"])(),Object(c["d"])("div",We,[Ye])}const el={};el.render=tl;var ll=el;const cl={class:"row"},nl=Object(c["g"])("div",{class:"col-12 pt-3"},[Object(c["g"])("h4",null,"Алгоритмы"),Object(c["g"])("p",null,[Object(c["g"])("strong",null,"Алгоритм"),Object(c["f"])(" — конечная совокупность точно заданных правил решения некоторого класса задач или набор инструкций, описывающих порядок действий исполнителя для решения определённой задачи ")]),Object(c["g"])("h5",null,[Object(c["f"])("Свойства алгоритмов "),Object(c["g"])("small",null,"(блок в разработке)")]),Object(c["g"])("h5",null,[Object(c["f"])("Обозначение блок-схем "),Object(c["g"])("small",null,"(блок в разработке)")])],-1);function sl(t,e){return Object(c["h"])(),Object(c["d"])("div",cl,[nl])}const bl={};bl.render=sl;var rl=bl;const al={class:"row"},ol=Object(c["g"])("div",{class:"col-12 pt-3"},[Object(c["g"])("h4",null,"Графы"),Object(c["g"])("p",null,[Object(c["g"])("strong",null,"Граф"),Object(c["f"])(" — математическая абстракция реальной системы объектов любой природы, обладающих парными связями. Граф как математический объект есть совокупность двух множеств — множества самих объектов, называемого множеством вершин и множеством их парных связей, называемой множеством рёбер ")]),Object(c["g"])("h5",null,[Object(c["f"])("Характеристики графов "),Object(c["g"])("small",null,"(блок в разработке)")])],-1);function ul(t,e){return Object(c["h"])(),Object(c["d"])("div",al,[ol])}const il={};il.render=ul;var Ol=il,jl={name:"App",components:{Header:u,Navbar:S,Footer:N,Logic:qt,Ss:Me,Step:Qe,About:ll,Algol:rl,Graph:Ol},data(){return{myComponent:localStorage.getItem("info-page")||"Logic"}},methods:{getComponent(t){this.myComponent=t}}};l("2657");jl.render=s;var dl=jl,gl=l("9483");let pl;Object(gl["a"])("/info/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}}),pl||(pl=Object(c["c"])(dl).mount("#app"))},"6d33":function(t,e,l){},"7e73":function(t,e,l){},c9e6:function(t,e,l){"use strict";l("7e73")},da45:function(t,e,l){"use strict";l("018c")},f0c2:function(t,e,l){"use strict";l("6d33")}});