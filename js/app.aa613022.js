(function(e){function t(t){for(var a,r,c=t[0],s=t[1],d=t[2],u=0,l=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&l.push(n[r][0]),n[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);h&&h(t);while(l.length)l.shift()();return o.push.apply(o,d||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],a=!0,r=1;r<i.length;r++){var c=i[r];0!==n[c]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=i[0]))}return e}var a={},r={app:0},n={app:0},o=[];function c(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"780f75b6","chunk-1f87ebb1":"d32c1914","chunk-2d2217da":"65bfe8b6","chunk-bf03434e":"15caed53","chunk-34b99916":"95d83471","chunk-7f492609":"9e53c706","chunk-2d0aa594":"6d163864","chunk-2d0aa7aa":"32ecb5db","chunk-2d0af879":"8d2433a4","chunk-2d0cc7fa":"177ac4c1","chunk-2d228915":"f3afdc9c","chunk-3ff9ee5e":"9287168b","chunk-d293ac06":"3af1eed8"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.e=function(e){var t=[],i={"chunk-34b99916":1,"chunk-7f492609":1,"chunk-3ff9ee5e":1};r[e]?t.push(r[e]):0!==r[e]&&i[e]&&t.push(r[e]=new Promise((function(t,i){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-1f87ebb1":"31d6cfe0","chunk-2d2217da":"31d6cfe0","chunk-bf03434e":"31d6cfe0","chunk-34b99916":"e6f2dd26","chunk-7f492609":"e6f2dd26","chunk-2d0aa594":"31d6cfe0","chunk-2d0aa7aa":"31d6cfe0","chunk-2d0af879":"31d6cfe0","chunk-2d0cc7fa":"31d6cfe0","chunk-2d228915":"31d6cfe0","chunk-3ff9ee5e":"9620b7d5","chunk-d293ac06":"31d6cfe0"}[e]+".css",n=s.p+a,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var d=o[c],u=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(u===a||u===n))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){d=l[c],u=d.getAttribute("data-href");if(u===a||u===n)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var a=t&&t.target&&t.target.src||n,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],h.parentNode.removeChild(h),i(o)},h.href=n;var m=document.getElementsByTagName("head")[0];m.appendChild(h)})).then((function(){r[e]=0})));var a=n[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,i){a=n[e]=[t,i]}));t.push(a[2]=o);var d,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var l=new Error;d=function(t){u.onerror=u.onload=null,clearTimeout(h);var i=n[e];if(0!==i){if(i){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,i[1](l)}n[e]=void 0}};var h=setTimeout((function(){d({type:"timeout",target:u})}),12e4);u.onerror=u.onload=d,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(i,a,function(t){return e[t]}.bind(null,a));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=t,d=d.slice();for(var l=0;l<d.length;l++)t(d[l]);var h=u;o.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("7a23"),r={class:"mdui-appbar mdui-appbar-fixed"},n={class:"mdui-toolbar mdui-color-theme"},o=Object(a["h"])("span",{class:"mdui-btn mdui-btn-icon","mdui-drawer":"{target: '#left-drawer'}"},[Object(a["h"])("i",{class:"mdui-icon material-icons"},"menu")],-1),c=Object(a["g"])("五十音助手"),s={class:"mdui-typo-title mdui-hidden-sm-down mdui-m-l-5"},d={class:"mdui-typo-headline mdui-hidden-md-up"},u=Object(a["h"])("div",{class:"mdui-toolbar-spacer mdui-hidden-sm-down"},null,-1),l={class:"mdui-drawer mdui-shadow-3",id:"left-drawer"},h={class:"mdui-list"},m={class:"mdui-list-item mdui-ripple"},g=Object(a["h"])("i",{class:"mdui-list-item-icon mdui-icon material-icons"},"home",-1),b=Object(a["g"])("主页"),p=Object(a["h"])("li",{class:"mdui-subheader-inset"},"学习",-1),f={class:"mdui-list-item mdui-ripple"},y=Object(a["h"])("i",{class:"mdui-list-item-icon mdui-icon material-icons"},"table_view",-1),O=Object(a["g"])("五十音图"),j=Object(a["h"])("li",{class:"mdui-subheader-inset"},"练习",-1),w={class:"mdui-list-item mdui-ripple"},v=Object(a["h"])("i",{class:"mdui-list-item-icon mdui-icon material-icons"},"follow_the_signs",-1),k=Object(a["g"])("普通模式"),z={class:"mdui-list-item mdui-ripple"},S=Object(a["h"])("i",{class:"mdui-list-item-icon mdui-icon material-icons"},"bolt",-1),x=Object(a["g"])("快速模式"),_={class:"mdui-list-item mdui-ripple"},V=Object(a["h"])("i",{class:"mdui-list-item-icon mdui-icon material-icons"},"self_improvement",-1),C=Object(a["g"])("禅模式"),N={class:"mdui-list-item mdui-ripple"},A=Object(a["h"])("i",{class:"mdui-list-item-icon mdui-icon material-icons"},"preview",-1),I=Object(a["g"])("复习模式"),T=Object(a["h"])("li",{class:"mdui-subheader-inset"},"个人",-1),J={class:"mdui-list-item mdui-ripple"},H=Object(a["h"])("i",{class:"mdui-list-item-icon mdui-icon material-icons"},"manage_accounts",-1),P=Object(a["g"])("个人中心"),E={class:"mdui-appbar"},M={class:"mdui-hidden-sm-down mdui-color-theme",style:{height:"192px",display:"flex","flex-direction":"column"}},R=Object(a["f"])('<div class="mdui-container mdui-typo" style="flex:auto;"><div class="mdui-row"><div class="mdui-col-md-5 mdui-col-sm-12"><h4 class="mdui-text-color-white">五十音助手<br></h4><p class="mdui-text-color-white-secondary mdui-typo-caption-opacity mdui-m-b-2"> 本站需使用如 Firefox 或 Chrome 等现代浏览器，方有完整浏览体验。如遇功能缺失，请更换您的浏览器再试。 </p></div></div></div>',1),F={style:{background:"rgba(0, 0, 0, 0.15)",flex:"none"},class:"mdui-p-y-1 mdui-typo"},$={class:"mdui-container"},q={class:"mdui-text-color-white-secondary",id:"copyright"},B=Object(a["h"])("span",{class:"mdui-text-color-theme-secondary mdui-m-l-1"},[Object(a["h"])("a",{target:"_blank",class:"mdui-text-color-white-secondary",href:"https://github.com/foldblade/gojuuon_helper"},"五十音助手")],-1),D={class:"mdui-bottom-nav mdui-color-white mdui-hidden-md-up mdui-bottom-nav-scroll-hide"},L=Object(a["h"])("i",{class:"mdui-icon material-icons"},"home",-1),U=Object(a["h"])("label",null,"主页",-1),Q=Object(a["h"])("i",{class:"mdui-icon material-icons"},"fitness_center",-1),G=Object(a["h"])("label",null,"练习",-1),K=Object(a["h"])("i",{class:"mdui-icon material-icons"},"manage_accounts",-1),W=Object(a["h"])("label",null,"个人中心",-1);function X(e,t,i,X,Y,Z){var ee=Object(a["y"])("router-link"),te=Object(a["y"])("router-view");return Object(a["r"])(),Object(a["d"])(a["a"],null,[Object(a["h"])("header",null,[Object(a["h"])("nav",r,[Object(a["h"])("div",n,[o,Object(a["h"])(ee,{to:"/",class:"mdui-typo-headline mdui-hidden-sm-down"},{default:Object(a["H"])((function(){return[c]})),_:1}),Object(a["h"])("span",s,Object(a["A"])(Y.appbarTitle),1),Object(a["h"])("span",d,Object(a["A"])(Y.appbarTitle),1),u])]),Object(a["h"])("div",l,[Object(a["h"])("ul",h,[Object(a["h"])("li",m,[g,Object(a["h"])(ee,{to:"/",class:"mdui-list-item-content"},{default:Object(a["H"])((function(){return[b]})),_:1})]),p,Object(a["h"])("li",f,[y,Object(a["h"])(ee,{to:"/table",class:"mdui-list-item-content"},{default:Object(a["H"])((function(){return[O]})),_:1})]),j,Object(a["h"])("li",w,[v,Object(a["h"])(ee,{to:"/practise/normal",class:"mdui-list-item-content"},{default:Object(a["H"])((function(){return[k]})),_:1})]),Object(a["h"])("li",z,[S,Object(a["h"])(ee,{to:"/practise/fast",class:"mdui-list-item-content"},{default:Object(a["H"])((function(){return[x]})),_:1})]),Object(a["h"])("li",_,[V,Object(a["h"])(ee,{to:"/practise/zen",class:"mdui-list-item-content"},{default:Object(a["H"])((function(){return[C]})),_:1})]),Object(a["h"])("li",N,[A,Object(a["h"])(ee,{to:"/practise/review",class:"mdui-list-item-content"},{default:Object(a["H"])((function(){return[I]})),_:1})]),T,Object(a["h"])("li",J,[H,Object(a["h"])(ee,{to:"/personalCenter",class:"mdui-list-item-content"},{default:Object(a["H"])((function(){return[P]})),_:1})])])])]),Object(a["h"])("main",null,[Object(a["h"])(te,{onUpdateAppbarTitle:Z.updateAppbarTitle},null,8,["onUpdateAppbarTitle"])]),Object(a["h"])("footer",null,[Object(a["h"])("div",E,[Object(a["h"])("div",M,[R,Object(a["h"])("div",F,[Object(a["h"])("div",$,[Object(a["h"])("span",q,"© "+Object(a["A"])(Z.updateCopyright()),1),B])])]),Object(a["h"])("div",D,[Object(a["h"])(ee,{to:"/",class:"mdui-ripple"},{default:Object(a["H"])((function(){return[L,U]})),_:1}),Object(a["h"])(ee,{to:"/#practice",class:"mdui-ripple"},{default:Object(a["H"])((function(){return[Q,G]})),_:1}),Object(a["h"])(ee,{to:"/personalCenter",class:"mdui-ripple"},{default:Object(a["H"])((function(){return[K,W]})),_:1})])])])],64)}var Y={name:"App",data:function(){return{appbarTitle:"",appbarSubtitle:""}},inject:["globalVariable"],created:function(){console.log("App created"),this.updateTitle("五十音助手")},mounted:function(){if(console.log("App mounted"),null!=localStorage.getItem("globalVariableVersion")){if(this.globalVariable.globalVariableVersion!=localStorage.getItem("globalVariableVersion")){var e=JSON.parse(localStorage.getItem("setting"));localStorage.setItem("pre_setting",JSON.stringify(e));var t=JSON.parse(localStorage.getItem("selectedOn"));localStorage.setItem("pre_selectedOn",JSON.stringify(t));var i=JSON.parse(localStorage.getItem("studyRecord"));localStorage.setItem("pre_studyRecord",JSON.stringify(i))}}else localStorage.setItem("globalVariableVersion",this.globalVariable.globalVariableVersion);null!=localStorage.getItem("setting")?this.globalVariable.setting=JSON.parse(localStorage.getItem("setting")):localStorage.setItem("setting",JSON.stringify(this.globalVariable.setting)),null!=localStorage.getItem("selectedOn")?this.globalVariable.selectedOn=JSON.parse(localStorage.getItem("selectedOn")):localStorage.setItem("selectedOn",JSON.stringify(this.globalVariable.selectedOn)),null!=localStorage.getItem("studyRecord")?this.globalVariable.studyRecord=JSON.parse(localStorage.getItem("studyRecord")):localStorage.setItem("studyRecord",JSON.stringify(this.globalVariable.studyRecord)),"auto"==this.globalVariable.setting.displayMode?document.querySelector("body").className="mdui-theme-layout-auto mdui-theme-primary-indigo mdui-theme-accent-pink mdui-drawer-body-left mdui-bottom-nav-fixed mdui-appbar-with-toolbar":"dark"==this.globalVariable.setting.displayMode?document.querySelector("body").className="mdui-theme-layout-dark mdui-theme-primary-indigo mdui-theme-accent-pink mdui-drawer-body-left mdui-bottom-nav-fixed mdui-appbar-with-toolbar":"light"==this.globalVariable.setting.displayMode&&(document.querySelector("body").className="mdui-theme-layout-light mdui-theme-primary-indigo mdui-theme-accent-pink mdui-drawer-body-left mdui-bottom-nav-fixed mdui-appbar-with-toolbar")},methods:{updateTitle:function(e){document.title=e},updateCopyright:function(){var e=new Date,t=e.getFullYear();return t},updateAppbarTitle:function(e){console.log(e),this.appbarTitle=e}}};i("7ca3");Y.render=X;var Z=Y,ee=i("9483");Object(ee["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});i("d3b7"),i("3ca3"),i("ddb0");var te=i("6c02"),ie=i("f3ec"),ae=i.n(ie),re=i("7b27"),ne=i.n(re),oe=i("d7f5"),ce=i.n(oe),se=i("a47f"),de=i.n(se),ue=i("cebf"),le=i.n(ue),he=i("a476"),me=i.n(he),ge={class:"mdui-container mdui-typo"},be=Object(a["h"])("div",{class:"mdui-row"},[Object(a["h"])("div",{class:"mdui-col-md-11 mdui-col-offset-md-1 mdui-col-sm-12 mdui-m-t-3"},[Object(a["h"])("div",{class:"mdui-typo-display-1"},"学习")])],-1),pe={class:"mdui-row"},fe={class:"mdui-col-md-4 mdui-col-offset-md-1 mdui-col-xs-6 mdui-m-y-2"},ye=Object(a["h"])("div",{class:"mdui-card-media"},[Object(a["h"])("img",{src:ae.a}),Object(a["h"])("div",{class:"mdui-card-media-covered mdui-card-media-covered-gradient"},[Object(a["h"])("div",{class:"mdui-card-primary"},[Object(a["h"])("div",{class:"mdui-card-primary-title"},"五十音图"),Object(a["h"])("div",{class:"mdui-card-primary-subtitle"},"五十音図")])])],-1),Oe=Object(a["h"])("div",{class:"mdui-row"},[Object(a["h"])("div",{class:"mdui-col-md-11 mdui-col-offset-md-1 mdui-col-sm-12 mdui-m-t-3"},[Object(a["h"])("div",{class:"mdui-typo-display-1",id:"practice"},"练习")])],-1),je={class:"mdui-row"},we={class:"mdui-col-md-4 mdui-col-offset-md-1 mdui-col-xs-6 mdui-m-y-2"},ve=Object(a["h"])("div",{class:"mdui-card-media"},[Object(a["h"])("img",{src:ne.a}),Object(a["h"])("div",{class:"mdui-card-media-covered mdui-card-media-covered-gradient"},[Object(a["h"])("div",{class:"mdui-card-primary"},[Object(a["h"])("div",{class:"mdui-card-primary-title"},"普通模式"),Object(a["h"])("div",{class:"mdui-card-primary-subtitle"},"レギュラーモード")])])],-1),ke={class:"mdui-col-md-4 mdui-col-offset-md-1 mdui-col-xs-6 mdui-m-y-2"},ze=Object(a["h"])("div",{class:"mdui-card-media"},[Object(a["h"])("img",{src:ce.a}),Object(a["h"])("div",{class:"mdui-card-media-covered mdui-card-media-covered-gradient"},[Object(a["h"])("div",{class:"mdui-card-primary"},[Object(a["h"])("div",{class:"mdui-card-primary-title"},"快速模式"),Object(a["h"])("div",{class:"mdui-card-primary-subtitle"},"クイックモード")])])],-1),Se={class:"mdui-col-md-4 mdui-col-offset-md-1 mdui-col-xs-6 mdui-m-y-2"},xe=Object(a["h"])("div",{class:"mdui-card-media"},[Object(a["h"])("img",{src:de.a}),Object(a["h"])("div",{class:"mdui-card-media-covered mdui-card-media-covered-gradient"},[Object(a["h"])("div",{class:"mdui-card-primary"},[Object(a["h"])("div",{class:"mdui-card-primary-title"},"禅模式"),Object(a["h"])("div",{class:"mdui-card-primary-subtitle"},"禅モード")])])],-1),_e={class:"mdui-col-md-4 mdui-col-offset-md-1 mdui-col-xs-6 mdui-m-y-2"},Ve=Object(a["h"])("div",{class:"mdui-card-media"},[Object(a["h"])("img",{src:le.a}),Object(a["h"])("div",{class:"mdui-card-media-covered mdui-card-media-covered-gradient"},[Object(a["h"])("div",{class:"mdui-card-primary"},[Object(a["h"])("div",{class:"mdui-card-primary-title"},"复习模式"),Object(a["h"])("div",{class:"mdui-card-primary-subtitle"},"復習モード")])])],-1),Ce=Object(a["h"])("div",{class:"mdui-row"},[Object(a["h"])("div",{class:"mdui-col-md-11 mdui-col-offset-md-1 mdui-col-sm-12 mdui-m-t-3"},[Object(a["h"])("div",{class:"mdui-typo-display-1"},"个人")])],-1),Ne={class:"mdui-row"},Ae={class:"mdui-col-md-4 mdui-col-offset-md-1 mdui-col-xs-6 mdui-m-y-2"},Ie=Object(a["h"])("div",{class:"mdui-card-media"},[Object(a["h"])("img",{src:me.a}),Object(a["h"])("div",{class:"mdui-card-media-covered mdui-card-media-covered-gradient"},[Object(a["h"])("div",{class:"mdui-card-primary"},[Object(a["h"])("div",{class:"mdui-card-primary-title"},"个人中心"),Object(a["h"])("div",{class:"mdui-card-primary-subtitle"},"センター")])])],-1);function Te(e,t,i,r,n,o){var c=this;return Object(a["r"])(),Object(a["d"])("div",ge,[be,Object(a["h"])("div",pe,[Object(a["h"])("div",fe,[Object(a["h"])("div",{class:"mdui-card mdui-hoverable mdui-ripple",onClick:t[1]||(t[1]=function(e){return c.$router.push("/table")})},[ye])])]),Oe,Object(a["h"])("div",je,[Object(a["h"])("div",we,[Object(a["h"])("div",{class:"mdui-card mdui-hoverable mdui-ripple",onClick:t[2]||(t[2]=function(e){return c.$router.push("/practise/normal")})},[ve])]),Object(a["h"])("div",ke,[Object(a["h"])("div",{class:"mdui-card mdui-hoverable mdui-ripple",onClick:t[3]||(t[3]=function(e){return c.$router.push("/practise/fast")})},[ze])]),Object(a["h"])("div",Se,[Object(a["h"])("div",{class:"mdui-card mdui-hoverable mdui-ripple",onClick:t[4]||(t[4]=function(e){return c.$router.push("/practise/zen")})},[xe])]),Object(a["h"])("div",_e,[Object(a["h"])("div",{class:"mdui-card mdui-hoverable mdui-ripple",onClick:t[5]||(t[5]=function(e){return c.$router.push("/practise/review")})},[Ve])])]),Ce,Object(a["h"])("div",Ne,[Object(a["h"])("div",Ae,[Object(a["h"])("div",{class:"mdui-card mdui-hoverable mdui-ripple",onClick:t[6]||(t[6]=function(e){return c.$router.push("/personalCenter")})},[Ie])])])])}var Je={name:"Home",created:function(){this.$emit("updateAppbarTitle","主页")}};Je.render=Te;var He=Je,Pe=[{path:"/",name:"Home",component:He},{path:"/table",name:"Table",component:function(){return i.e("about").then(i.bind(null,"3f0e"))}},{path:"/practise",name:"Practise",component:function(){return i.e("chunk-2d0aa7aa").then(i.bind(null,"10d9"))},redirect:"/practise/normal",children:[{path:"normal",component:function(){return Promise.all([i.e("chunk-1f87ebb1"),i.e("chunk-bf03434e"),i.e("chunk-34b99916")]).then(i.bind(null,"24c4"))}},{path:"fast",component:function(){return Promise.all([i.e("chunk-1f87ebb1"),i.e("chunk-2d2217da")]).then(i.bind(null,"cb27"))}},{path:"zen",component:function(){return Promise.all([i.e("chunk-1f87ebb1"),i.e("chunk-bf03434e"),i.e("chunk-7f492609")]).then(i.bind(null,"465b"))}},{path:"review",component:function(){return i.e("chunk-2d0cc7fa").then(i.bind(null,"4dd8"))}}]},{path:"/personalCenter",name:"PersonalCenter",component:function(){return i.e("chunk-2d0aa594").then(i.bind(null,"1142"))},redirect:"/personalCenter/center",children:[{path:"center",component:function(){return i.e("chunk-2d0af879").then(i.bind(null,"0f5b"))}},{path:"setting",component:function(){return i.e("chunk-2d228915").then(i.bind(null,"da79"))}},{path:"about",component:function(){return i.e("chunk-d293ac06").then(i.bind(null,"0d26"))}},{path:"studyStatus",component:function(){return i.e("chunk-3ff9ee5e").then(i.bind(null,"7e37"))}}]}],Ee=Object(te["a"])({history:Object(te["b"])("/"),routes:Pe}),Me=Ee,Re=i("5502"),Fe=Object(Re["a"])({state:{},mutations:{},actions:{},modules:{}}),$e={lines:["a","k","s","t","n","h","m","y","r","w","-"],hiragana:{a:["あ","い","う","え","お"],k:["か","き","く","け","こ"],s:["さ","し","す","せ","そ"],t:["た","ち","つ","て","と"],n:["な","に","ぬ","ね","の"],h:["は","ひ","ふ","へ","ほ"],m:["ま","み","む","め","も"],y:["や","(い)","ゆ","(え)","よ"],r:["ら","り","る","れ","ろ"],w:["わ","(い)","(う)","(え)","を"],"-":["ん"]},katakana:{a:["ア","イ","ウ","エ","オ"],k:["カ","キ","ク","ケ","コ"],s:["サ","シ","ス","セ","ソ"],t:["タ","チ","ツ","テ","ト"],n:["ナ","ニ","ヌ","ネ","ノ"],h:["ハ","ヒ","フ","ヘ","ホ"],m:["マ","ミ","ム","メ","モ"],y:["ヤ","(イ)","ユ","(エ)","ヨ"],r:["ラ","リ","ル","レ","ロ"],w:["ワ","(イ)","(ウ)","(エ)","ヲ"],"-":["ン"]},"hepburn-romanization":{a:["a","i","u","e","o"],k:["ka","ki","ku","ke","ko"],s:["sa","shi","su","se","so"],t:["ta","chi","tsu","te","to"],n:["na","ni","nu","ne","no"],h:["ha","hi","fu","he","ho"],m:["ma","mi","mu","me","mo"],y:["ya","(i)","yu","(e)","yo"],r:["ra","ri","ru","re","ro"],w:["wa","(i)","(u)","(e)","o"],"-":["n"]},"kunrei-shiki-romanization":{a:["a","i","u","e","o"],k:["ka","ki","ku","ke","ko"],s:["sa","si","su","se","so"],t:["ta","ti","tu","te","to"],n:["na","ni","nu","ne","no"],h:["ha","hi","hu","he","ho"],m:["ma","mi","mu","me","mo"],y:["ya","(i)","yu","(e)","yo"],r:["ra","ri","ru","re","ro"],w:["wa","(i)","(u)","(e)","o"],"-":["n"]}},qe={lines:["g","z","d","b","p"],hiragana:{g:["が","ぎ","ぐ","げ","ご"],z:["ざ","じ","ず","ぜ","ぞ"],d:["だ","ぢ","づ","で","ど"],b:["ば","び","ぶ","べ","ぼ"],p:["ぱ","ぴ","ぷ","ぺ","ぽ"]},katakana:{g:["ガ","ギ","グ","ゲ","ゴ"],z:["ザ","ジ","ズ","ゼ","ゾ"],d:["ダ","ヂ","ヅ","デ","ド"],b:["バ","ビ","ブ","ベ","ボ"],p:["パ","ピ","プ","ペ","ポ"]},"hepburn-romanization":{g:["ga","gi","gu","ge","go"],z:["za","ji","zu","ze","zo"],d:["da","ji","zu","de","do"],b:["ba","bi","bu","be","bo"],p:["pa","pi","pu","pe","po"]},"kunrei-shiki-romanization":{g:["ga","gi","gu","ge","go"],z:["za","zi","zu","ze","zo"],d:["da","zi","zu","de","do"],b:["ba","bi","bu","be","bo"],p:["pa","pi","pu","pe","po"]}},Be={lines:["k","s","t","n","h","m","r","g","z","b","p"],hiragana:{k:["きゃ","きゅ","きょ"],s:["しゃ","しゅ","しょ"],t:["ちゃ","ちゅ","ちょ"],n:["にゃ","にゅ","にょ"],h:["ひゃ","ひゅ","ひょ"],m:["みゃ","みゅ","みょ"],r:["りゃ","りゅ","りょ"],g:["ぎゃ","ぎゅ","ぎょ"],z:["じゃ","じゅ","じょ"],b:["びゃ","びゅ","びょ"],p:["ぴゃ","ぴゅ","ぴょ"]},katakana:{k:["キャ","キュ","キョ"],s:["シャ","シュ","ショ"],t:["チャ","チュ","チョ"],n:["ニャ","ニュ","ニョ"],h:["ヒャ","ヒュ","ヒョ"],m:["ミャ","ミュ","ミョ"],r:["リャ","リュ","リョ"],g:["ギャ","ギュ","ギョ"],z:["ジャ","ジュ","ジョ"],b:["ビャ","ビュ","ビョ"],p:["ピャ","ピュ","ピョ"]},"hepburn-romanization":{k:["kya","kyu","kyo"],s:["sha","shu","sho"],t:["cha","chu","cho"],n:["nya","nyu","nyo"],h:["hya","hyu","hyo"],m:["mya","myu","myo"],r:["rya","ryu","ryo"],g:["gya","gyu","gyo"],z:["ja","ju","jo"],b:["bya","byu","byo"],p:["pya","pyu","pyo"]},"kunrei-shiki-romanization":{k:["kya","kyu","kyo"],s:["sya","syu","syo"],t:["tya","tyu","tyo"],n:["nya","nyu","nyo"],h:["hya","hyu","hyo"],m:["mya","myu","myo"],r:["rya","ryu","ryo"],g:["gya","gyu","gyo"],z:["zya","zyu","zyo"],b:["bya","byu","byo"],p:["pya","pyu","pyo"]}},De={seion:$e,dakuon:qe,youon:Be},Le={volume:.6,bgVolume:.6,zenBg:"../audio/鹿威.m4a",romanization:"hepburn-romanization",displayMode:"auto",from:"hiragana",to:"katakana"},Ue=Le,Qe={s:{lines:["a","k","s","t","n","h","m","y","r","w","-"],a:{0:!1,1:!1,2:!1,3:!1,4:!1},k:{0:!1,1:!1,2:!1,3:!1,4:!1},s:{0:!1,1:!1,2:!1,3:!1,4:!1},t:{0:!1,1:!1,2:!1,3:!1,4:!1},n:{0:!1,1:!1,2:!1,3:!1,4:!1},h:{0:!1,1:!1,2:!1,3:!1,4:!1},m:{0:!1,1:!1,2:!1,3:!1,4:!1},y:{0:!1,2:!1,4:!1},r:{0:!1,1:!1,2:!1,3:!1,4:!1},w:{0:!1,4:!1},"-":{0:!1}},d:{lines:["g","z","d","b","p"],g:{0:!1,1:!1,2:!1,3:!1,4:!1},z:{0:!1,1:!1,2:!1,3:!1,4:!1},d:{0:!1,1:!1,2:!1,3:!1,4:!1},b:{0:!1,1:!1,2:!1,3:!1,4:!1},p:{0:!1,1:!1,2:!1,3:!1,4:!1}},y:{lines:["k","s","t","n","h","m","r","g","z","b","p"],k:{0:!1,1:!1,2:!1},s:{0:!1,1:!1,2:!1},t:{0:!1,1:!1,2:!1},n:{0:!1,1:!1,2:!1},h:{0:!1,1:!1,2:!1},m:{0:!1,1:!1,2:!1},r:{0:!1,1:!1,2:!1},g:{0:!1,1:!1,2:!1},z:{0:!1,1:!1,2:!1},b:{0:!1,1:!1,2:!1},p:{0:!1,1:!1,2:!1}}},Ge=Qe,Ke={s:{lines:["a","k","s","t","n","h","m","y","r","w","-"],a:{0:{right:0,wrong:0,hesitate:0},1:{right:0,wrong:0,hesitate:0},2:{right:0,wrong:0,hesitate:0},3:{right:0,wrong:0,hesitate:0},4:{right:0,wrong:0,hesitate:0}},k:{0:{right:0,wrong:0,hesitate:0},1:{right:0,wrong:0,hesitate:0},2:{right:0,wrong:0,hesitate:0},3:{right:0,wrong:0,hesitate:0},4:{right:0,wrong:0,hesitate:0}},s:{0:{right:0,wrong:0,hesitate:0},1:{right:0,wrong:0,hesitate:0},2:{right:0,wrong:0,hesitate:0},3:{right:0,wrong:0,hesitate:0},4:{right:0,wrong:0,hesitate:0}},t:{0:{right:0,wrong:0,hesitate:0},1:{right:0,wrong:0,hesitate:0},2:{right:0,wrong:0,hesitate:0},3:{right:0,wrong:0,hesitate:0},4:{right:0,wrong:0,hesitate:0}},n:{0:{right:0,wrong:0,hesitate:0},1:{right:0,wrong:0,hesitate:0},2:{right:0,wrong:0,hesitate:0},3:{right:0,wrong:0,hesitate:0},4:{right:0,wrong:0,hesitate:0}},h:{0:{right:0,wrong:0,hesitate:0},1:{right:0,wrong:0,hesitate:0},2:{right:0,wrong:0,hesitate:0},3:{right:0,wrong:0,hesitate:0},4:{right:0,wrong:0,hesitate:0}},m:{0:{right:0,wrong:0,hesitate:0},1:{right:0,wrong:0,hesitate:0},2:{right:0,wrong:0,hesitate:0},3:{right:0,wrong:0,hesitate:0},4:{right:0,wrong:0,hesitate:0}},y:{0:{right:0,wrong:0,hesitate:0},2:{right:0,wrong:0,hesitate:0},4:{right:0,wrong:0,hesitate:0}},r:{0:{right:0,wrong:0,hesitate:0},1:{right:0,wrong:0,hesitate:0},2:{right:0,wrong:0,hesitate:0},3:{right:0,wrong:0,hesitate:0},4:{right:0,wrong:0,hesitate:0}},w:{0:{right:0,wrong:0,hesitate:0},4:{right:0,wrong:0,hesitate:0}},"-":{0:{right:0,wrong:0,hesitate:0}}},d:{lines:["g","z","d","b","p"],g:{0:{right:0,wrong:0,hesitate:0},1:{right:0,wrong:0,hesitate:0},2:{right:0,wrong:0,hesitate:0},3:{right:0,wrong:0,hesitate:0},4:{right:0,wrong:0,hesitate:0}},z:{0:{right:0,wrong:0,hesitate:0},1:{right:0,wrong:0,hesitate:0},2:{right:0,wrong:0,hesitate:0},3:{right:0,wrong:0,hesitate:0},4:{right:0,wrong:0,hesitate:0}},d:{0:{right:0,wrong:0,hesitate:0},1:{right:0,wrong:0,hesitate:0},2:{right:0,wrong:0,hesitate:0},3:{right:0,wrong:0,hesitate:0},4:{right:0,wrong:0,hesitate:0}},b:{0:{right:0,wrong:0,hesitate:0},1:{right:0,wrong:0,hesitate:0},2:{right:0,wrong:0,hesitate:0},3:{right:0,wrong:0,hesitate:0},4:{right:0,wrong:0,hesitate:0}},p:{0:{right:0,wrong:0,hesitate:0},1:{right:0,wrong:0,hesitate:0},2:{right:0,wrong:0,hesitate:0},3:{right:0,wrong:0,hesitate:0},4:{right:0,wrong:0,hesitate:0}}},y:{lines:["k","s","t","n","h","m","r","g","z","b","p"],k:{0:{right:0,wrong:0,hesitate:0},1:{right:0,wrong:0,hesitate:0},2:{right:0,wrong:0,hesitate:0}},s:{0:{right:0,wrong:0,hesitate:0},1:{right:0,wrong:0,hesitate:0},2:{right:0,wrong:0,hesitate:0}},t:{0:{right:0,wrong:0,hesitate:0},1:{right:0,wrong:0,hesitate:0},2:{right:0,wrong:0,hesitate:0}},n:{0:{right:0,wrong:0,hesitate:0},1:{right:0,wrong:0,hesitate:0},2:{right:0,wrong:0,hesitate:0}},h:{0:{right:0,wrong:0,hesitate:0},1:{right:0,wrong:0,hesitate:0},2:{right:0,wrong:0,hesitate:0}},m:{0:{right:0,wrong:0,hesitate:0},1:{right:0,wrong:0,hesitate:0},2:{right:0,wrong:0,hesitate:0}},r:{0:{right:0,wrong:0,hesitate:0},1:{right:0,wrong:0,hesitate:0},2:{right:0,wrong:0,hesitate:0}},g:{0:{right:0,wrong:0,hesitate:0},1:{right:0,wrong:0,hesitate:0},2:{right:0,wrong:0,hesitate:0}},z:{0:{right:0,wrong:0,hesitate:0},1:{right:0,wrong:0,hesitate:0},2:{right:0,wrong:0,hesitate:0}},b:{0:{right:0,wrong:0,hesitate:0},1:{right:0,wrong:0,hesitate:0},2:{right:0,wrong:0,hesitate:0}},p:{0:{right:0,wrong:0,hesitate:0},1:{right:0,wrong:0,hesitate:0},2:{right:0,wrong:0,hesitate:0}}}},We=Ke,Xe="1.0.1",Ye="1.0.1",Ze={gojuuon:De,seion:$e,dakuon:qe,youon:Be,settingDefault:Le,setting:Ue,selectedOnDefault:Qe,selectedOn:Ge,studyRecordDefault:Ke,studyRecord:We,version:Xe,globalVariableVersion:Ye},et=i("8ceb");Object(a["c"])(Z).use(Fe).use(Me).provide("globalVariable",Ze).provide("mdui",et["a"]).mount("#app")},"7b27":function(e,t,i){e.exports=i.p+"img/mark-x-_eXhjCNyha8-unsplash.8a4bd0bb.jpg"},"7ca3":function(e,t,i){"use strict";i("e78b")},a476:function(e,t,i){e.exports=i.p+"img/sorasak-_UIN-pFfJ7c-unsplash.409bbdd8.jpg"},a47f:function(e,t,i){e.exports=i.p+"img/kari-shea-B8JFJWzAC9s-unsplash.9e709ebf.jpg"},cebf:function(e,t,i){e.exports=i.p+"img/danis-lou-jfZfdQtcH6k-unsplash.4fd991fc.jpg"},d7f5:function(e,t,i){e.exports=i.p+"img/joan-tran-MzfsoOm9GVQ-unsplash.1ddc5aff.jpg"},e78b:function(e,t,i){},f3ec:function(e,t,i){e.exports=i.p+"img/manuel-cosentino-n--CMLApjfI-unsplash.d2bc26f5.jpg"}});
//# sourceMappingURL=app.aa613022.js.map