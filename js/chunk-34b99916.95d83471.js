(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34b99916"],{1148:function(t,e,i){"use strict";var s=i("a691"),o=i("1d80");t.exports=function(t){var e=String(o(this)),i="",c=s(t);if(c<0||c==1/0)throw RangeError("Wrong number of repetitions");for(;c>0;(c>>>=1)&&(e+=e))1&c&&(i+=e);return i}},"24c4":function(t,e,i){"use strict";i.r(e);i("b680");var s=i("7a23"),o={class:"mdui-container-fluid"},c={class:"mdui-row"},n={class:"mdui-col-xs-12"},r=Object(s["h"])("i",{class:"mdui-icon material-icons mdui-typo-body-1-opacity"},"checklist",-1),a={class:"mdui-typo-body-1-opacity mdui-m-x-1"},l=Object(s["h"])("i",{class:"mdui-icon material-icons mdui-typo-body-1-opacity"},"timer",-1),u={class:"mdui-typo-body-1-opacity mdui-m-x-1"},d=Object(s["h"])("div",{class:"mdui-float-right"},[Object(s["h"])("button",{class:"mdui-btn mdui-btn-icon mdui-ripple","mdui-dialog":"{target: '#helpDialog'}","mdui-tooltip":"{content: '帮助'}"},[Object(s["h"])("i",{class:"mdui-icon material-icons"},"help")]),Object(s["h"])("button",{class:"mdui-btn mdui-btn-icon mdui-ripple","mdui-dialog":"{target: '#gojuuonSelectorDialog'}","mdui-tooltip":"{content: '选择练习内容'}"},[Object(s["h"])("i",{class:"mdui-icon material-icons"},"fact_check")])],-1),h={class:"mdui-container mdui-typo"},m={class:"mdui-row"},b={class:"mdui-col-xs-12 mdui-col-lg-6 mdui-col-offset-lg-3 mdui-col-md-8 mdui-col-offset-md-2 mdui-col-sm-10 mdui-col-offset-sm-1 test-area"},f=Object(s["h"])("div",{class:"mdui-typo-body-1-opacity mdui-text-center"}," 选择内容，然后进行练习。 ",-1),O={class:"mdui-col-xs-12 mdui-text-center mdui-m-y-2 mdui-typo"},p=Object(s["h"])("i",{class:"mdui-icon material-icons"},"play_arrow ",-1),j=Object(s["h"])("div",{class:"mdui-typo-body-1-opacity mdui-m-y-1"},"开始练习",-1),y=Object(s["h"])("hr",null,null,-1),g={class:"mdui-row"},v={class:"mdui-typo-body-1-opacity mdui-text-center"},w=Object(s["h"])("i",{class:"mdui-icon material-icons mdui-m-y-1",style:{"font-size":"4rem"}},"celebration ",-1),x=Object(s["h"])("div",{class:"mdui-typo-body-1-opacity mdui-m-y-1"}," 恭喜完成练习！ ",-1),Q={class:"mdui-typo-body-2-opacity mdui-m-y-1"},k={class:"mdui-col-xs-12 mdui-text-center mdui-m-y-2 mdui-typo"},C=Object(s["h"])("i",{class:"mdui-icon material-icons"},"refresh",-1),q=Object(s["h"])("div",{class:"mdui-typo-body-1-opacity mdui-m-y-1"},"再来一组",-1),P=Object(s["h"])("div",{class:"mdui-dialog",id:"helpDialog"},[Object(s["h"])("div",{class:"mdui-dialog-title"},"什么是普通模式？"),Object(s["h"])("div",{class:"mdui-dialog-content"},[Object(s["h"])("div",{class:"mdui-container mdui-typo"},[Object(s["h"])("div",{class:"row"},[Object(s["h"])("div",{class:"mdui-col-xs-12 mdui-m-y-1"},[Object(s["h"])("p",{class:"mdui-typo-body-2-opacity",style:{"text-indent":"2em"}}," 普通模式是普通的练习模式。每一道题目都会有限定时间，您需要在限定时间内完成答题。回答结果将会被记录。 ")])])])]),Object(s["h"])("div",{class:"mdui-dialog-actions"},[Object(s["h"])("button",{class:"mdui-btn mdui-ripple","mdui-dialog-confirm":""},"确定")])],-1);function S(t,e,i,S,T,V){var A=Object(s["y"])("PractiseQuestionCard"),F=Object(s["y"])("PractiseOptionCard"),M=Object(s["y"])("GojuuonSelectorDialog");return Object(s["r"])(),Object(s["d"])(s["a"],null,[Object(s["h"])("div",o,[Object(s["h"])("div",c,[Object(s["h"])("div",{class:["mdui-progress",{"mdui-invisible":T.newToHere||T.done}]},[Object(s["h"])("div",{class:"mdui-progress-determinate mdui-color-theme-accent",style:[{opacity:"1"},{width:T.timerProcess/6*100+"%"}]},null,4)],2),Object(s["h"])("div",n,[Object(s["h"])("div",{class:["mdui-float-left mdui-m-y-1",{"mdui-invisible":T.newToHere||T.done}]},[r,Object(s["h"])("span",a,Object(s["A"])(T.rightCount+T.wrongCount)+" / "+Object(s["A"])(t.test.totalQuestions.length),1),l,Object(s["h"])("span",u,Object(s["A"])((6-T.timerProcess).toFixed(2))+"s",1)],2),d])])]),Object(s["h"])("div",h,[Object(s["h"])("div",m,[Object(s["h"])("div",b,[T.newToHere?(Object(s["r"])(),Object(s["d"])(s["a"],{key:0},[f,Object(s["h"])("div",O,[Object(s["h"])("button",{class:"mdui-btn mdui-btn-icon mdui-btn-raised mdui-color-theme-accent mdui-ripple",onClick:e[1]||(e[1]=function(t){return V.prepareQuestions()})},[p]),j])],64)):(Object(s["r"])(),Object(s["d"])(s["a"],{key:1},[T.refresh?(Object(s["r"])(),Object(s["d"])(s["a"],{key:0},[Object(s["h"])(A,{questionOn:t.test.question,fontStyle:" font-weight: 200"},null,8,["questionOn"]),y,Object(s["h"])("div",g,[(Object(s["r"])(!0),Object(s["d"])(s["a"],null,Object(s["x"])(t.test.options,(function(e,i){return Object(s["r"])(),Object(s["d"])(F,{key:i,optionOn:e,fontStyle:"font-weight: 200",onClick:function(t){return V.click(e)},answer:t.test.question,selected:T.selected},null,8,["optionOn","onClick","answer","selected"])})),128))])],64)):(Object(s["r"])(),Object(s["d"])(s["a"],{key:1},[],64)),T.done?(Object(s["r"])(),Object(s["d"])(s["a"],{key:2},[Object(s["h"])("div",v,[w,x,Object(s["h"])("div",Q," 正确："+Object(s["A"])(T.rightCount)+" 错误："+Object(s["A"])(T.wrongCount),1)]),Object(s["h"])("div",k,[Object(s["h"])("button",{class:"mdui-btn mdui-btn-icon mdui-btn-raised mdui-color-theme-accent mdui-ripple",onClick:e[2]||(e[2]=function(t){return V.prepareQuestions()})},[C]),q])],64)):Object(s["e"])("",!0)],64))])])]),P,Object(s["h"])(M)],64)}var T=i("2909"),V=(i("caad"),i("ac1f"),i("1276"),i("8ceb")),A=i("4a4d"),F=i("16e2"),M=i("90a3"),I={data:function(){return{newToHere:!0,clicked:!1,selected:"",refresh:!1,done:!1,rightCount:0,wrongCount:0,timer:null,timerProcess:0}},mounted:function(){V["a"].mutation(),this.$emit("updateAppbarTitle","普通模式")},inject:["globalVariable"],components:{GojuuonSelectorDialog:A["a"],PractiseOptionCard:F["a"],PractiseQuestionCard:M["a"]},methods:{shuffle:function(t){for(var e=t.length-1;e>=0;e--){var i=Math.floor(Math.random()*(e+1)),s=t[i];t[i]=t[e],t[e]=s}return t},prepareQuestions:function(){var t=[];for(var e in this.done=!1,this.rightCount=0,this.wrongCount=0,this.globalVariable.selectedOn)for(var i=0;i<=this.globalVariable.selectedOn[e]["lines"].length;i++){var s=this.globalVariable.selectedOn[e]["lines"][i];if(s)for(var o in this.globalVariable.selectedOn[e][s])this.globalVariable.selectedOn[e][s][o]&&t.push(e+"_"+s+"_"+o)}this.test.totalQuestions=this.shuffle(t),this.test.questionsQuery=Object(T["a"])(this.test.totalQuestions),this.nextQuestion()},nextQuestion:function(){var t=this;if(this.selected="",V["a"].mutation(),0==this.test.totalQuestions.length)V["a"].alert("你还没有选择学习内容！请先选择后再进行学习。","空空如也");else if(this.newToHere=!1,this.test.questionsQuery.length>0){this.test.question=this.test.questionsQuery[0],this.test.questionsQuery.shift(),this.test.questionsQuery=Object(T["a"])(this.test.questionsQuery);var e=[];e.push(this.test.question);for(var i=0;i<3;i++){var s=this.test.totalQuestions[Math.floor(Math.random()*this.test.totalQuestions.length)];while(e.includes(s))s=this.test.totalQuestions[Math.floor(Math.random()*this.test.totalQuestions.length)];e.push(s)}this.test.options=Object(T["a"])(this.shuffle(e)),console.log(this.test.question,this.test.options),this.refresh=!0,null==this.timer&&(this.timer=setInterval((function(){t.timerProcess+=.04,t.timerProcess>6&&(t.timerProcess=0,clearInterval(t.timer),t.timer=null,t.click("N/A"))}),40))}else this.refresh=!1,this.done=!0,V["a"].alert("恭喜您完成一组练习。","完成")},click:function(t){var e=this;clearInterval(this.timer),this.timer=null;var i=this.test.question.split("_");this.clicked=!0,this.selected=t,t==this.test.question?(this.rightCount++,this.globalVariable["studyRecord"][i[0]][i[1]][i[2]]["right"]++):(this.wrongCount++,this.globalVariable["studyRecord"][i[0]][i[1]][i[2]]["wrong"]++),localStorage.setItem("studyRecord",JSON.stringify(this.globalVariable.studyRecord)),setTimeout((function(){e.clicked=!1,e.refresh=!1,e.timerProcess=0,e.$nextTick((function(){e.nextQuestion()}))}),2e3)}},setup:function(){var t=Object(s["w"])({question:"",options:[],questionsQuery:[],totalQuestions:[]});return{test:t}}};i("90cc");I.render=S;e["default"]=I},"408a":function(t,e,i){var s=i("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=s(t))throw TypeError("Incorrect invocation");return+t}},"90cc":function(t,e,i){"use strict";i("f154")},b680:function(t,e,i){"use strict";var s=i("23e7"),o=i("a691"),c=i("408a"),n=i("1148"),r=i("d039"),a=1..toFixed,l=Math.floor,u=function(t,e,i){return 0===e?i:e%2===1?u(t,e-1,i*t):u(t*t,e/2,i)},d=function(t){var e=0,i=t;while(i>=4096)e+=12,i/=4096;while(i>=2)e+=1,i/=2;return e},h=function(t,e,i){var s=-1,o=i;while(++s<6)o+=e*t[s],t[s]=o%1e7,o=l(o/1e7)},m=function(t,e){var i=6,s=0;while(--i>=0)s+=t[i],t[i]=l(s/e),s=s%e*1e7},b=function(t){var e=6,i="";while(--e>=0)if(""!==i||0===e||0!==t[e]){var s=String(t[e]);i=""===i?s:i+n.call("0",7-s.length)+s}return i},f=a&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r((function(){a.call({})}));s({target:"Number",proto:!0,forced:f},{toFixed:function(t){var e,i,s,r,a=c(this),l=o(t),f=[0,0,0,0,0,0],O="",p="0";if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(a!=a)return"NaN";if(a<=-1e21||a>=1e21)return String(a);if(a<0&&(O="-",a=-a),a>1e-21)if(e=d(a*u(2,69,1))-69,i=e<0?a*u(2,-e,1):a/u(2,e,1),i*=4503599627370496,e=52-e,e>0){h(f,0,i),s=l;while(s>=7)h(f,1e7,0),s-=7;h(f,u(10,s,1),0),s=e-1;while(s>=23)m(f,1<<23),s-=23;m(f,1<<s),h(f,1,1),m(f,2),p=b(f)}else h(f,0,i),h(f,1<<-e,0),p=b(f)+n.call("0",l);return l>0?(r=p.length,p=O+(r<=l?"0."+n.call("0",l-r)+p:p.slice(0,r-l)+"."+p.slice(r-l))):p=O+p,p}})},f154:function(t,e,i){}}]);
//# sourceMappingURL=chunk-34b99916.95d83471.js.map