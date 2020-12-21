(function(e){function t(t){for(var r,a,l=t[0],c=t[1],u=t[2],d=0,f=[];d<l.length;d++)a=l[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);s&&s(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var c=n[l];0!==i[c]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/simon-game/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"150b":function(e,t,n){},"28e0":function(e,t,n){e.exports=n.p+"media/yellow_sound.376db41b.mp3"},"4a05":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),i=Object(r["e"])("h1",null,"Simon Says",-1),o={class:"game"},a={class:"game-board"},l={class:"game-table"},c={key:0,class:"message"},u={class:"level"},s=Object(r["e"])("h3",null,"Level:",-1),d=Object(r["e"])("label",{for:"easy"},"Easy",-1),f=Object(r["e"])("label",{for:"medium"},"Medium",-1),h=Object(r["e"])("label",{for:"hard"},"Hard",-1);function p(e,t,n,p,b,m){return Object(r["f"])(),Object(r["c"])(r["a"],null,[i,Object(r["e"])("div",o,[Object(r["e"])("div",a,[Object(r["e"])("div",{ref:"blueCorner",class:"corner blue-corner",onClick:t[1]||(t[1]=function(){return m.handleClick&&m.handleClick.apply(m,arguments)})},null,512),Object(r["e"])("div",{ref:"redCorner",class:"corner red-corner",onClick:t[2]||(t[2]=function(){return m.handleClick&&m.handleClick.apply(m,arguments)})},null,512),Object(r["e"])("div",{ref:"yellowCorner",class:"corner yellow-corner",onClick:t[3]||(t[3]=function(){return m.handleClick&&m.handleClick.apply(m,arguments)})},null,512),Object(r["e"])("div",{ref:"greenCorner",class:"corner green-corner",onClick:t[4]||(t[4]=function(){return m.handleClick&&m.handleClick.apply(m,arguments)})},null,512)]),Object(r["e"])("div",l,[Object(r["e"])("h2",null,"Round: "+Object(r["g"])(b.round),1),Object(r["e"])("button",{disabled:!b.gameOver,onClick:t[5]||(t[5]=function(){return m.startGame&&m.startGame.apply(m,arguments)})},"Start",8,["disabled"]),b.gameOver?(Object(r["f"])(),Object(r["c"])("div",c,Object(r["g"])(b.message),1)):Object(r["d"])("",!0),Object(r["e"])("div",u,[s,d,Object(r["i"])(Object(r["e"])("input",{"onUpdate:modelValue":t[6]||(t[6]=function(e){return b.delay=e}),value:1500,name:"level",id:"easy",type:"radio",disabled:!b.gameOver},null,8,["disabled"]),[[r["h"],b.delay]]),f,Object(r["i"])(Object(r["e"])("input",{"onUpdate:modelValue":t[7]||(t[7]=function(e){return b.delay=e}),value:1e3,name:"level",id:"medium",type:"radio",disabled:!b.gameOver},null,8,["disabled"]),[[r["h"],b.delay]]),h,Object(r["i"])(Object(r["e"])("input",{"onUpdate:modelValue":t[8]||(t[8]=function(e){return b.delay=e}),value:400,name:"level",id:"hard",type:"radio",disabled:!b.gameOver},null,8,["disabled"]),[[r["h"],b.delay]])])])])],64)}n("4160"),n("a15b"),n("d81d"),n("2ca0"),n("159b");var b=n("8785"),m=n("3835");function v(){var e=Object(b["a"])([""]);return v=function(){return e},e}function O(){var e=Object(b["a"])([""]);return O=function(){return e},e}var g=4,y={data:function(){return{round:1,level:"medium",corners:null,gameKit:[],userKit:[],delay:1e3,message:"",gameOver:!0,lockedClicks:!0}},methods:{handleClick:function(e){this.lockedClicks||(this.highlightCorner(e.target),this.userKit.push(e.target),this.checkUserClicks())},highlightCorner:function(e){e.classList.add("corner-lite"),e.sound.play(),setTimeout((function(){return e.classList.remove("corner-lite")}),300)},startGame:function(){this.gameOver=!1,this.addCase(),this.playKit()},addCase:function(){var e=Math.floor(Math.random()*g);this.gameKit.push(this.corners[e])},playKit:function(){var e=this,t=0;this.lockedClicks=!0,this.gameKit.forEach((function(n){setTimeout((function(){return e.highlightCorner(n)}),t),t+=e.delay})),setTimeout((function(){return e.lockedClicks=!1}),t)},checkUserClicks:function(){var e=this.kitsToString(),t=Object(m["a"])(e,2),n=t[0],r=t[1];n===r&&this.toNextRound(),n.startsWith(r)||this.finishGame()},kitsToString:function(){return[this.gameKit.map((function(e){return e.id})).join(O()),this.userKit.map((function(e){return e.id})).join(v())]},toNextRound:function(){var e=this;this.round+=1,this.addCase(),setTimeout((function(){return e.playKit()}),1e3),this.userKit=[]},finishGame:function(){this.message="Sorry, you lost after ".concat(this.round," rounds"),this.round=1,this.gameKit=[],this.userKit=[],this.lockedClicks=!0,this.gameOver=!0}},mounted:function(){this.corners=[this.$refs.blueCorner,this.$refs.redCorner,this.$refs.yellowCorner,this.$refs.greenCorner],this.corners.forEach((function(e,t){return e.id=t})),this.$refs.blueCorner.sound=new Audio(n("935c")),this.$refs.redCorner.sound=new Audio(n("e785")),this.$refs.yellowCorner.sound=new Audio(n("28e0")),this.$refs.greenCorner.sound=new Audio(n("ccad"))}};n("dad7");y.render=p;var j=y;n("150b");Object(r["b"])(j).mount("#app")},"935c":function(e,t,n){e.exports=n.p+"media/blue_sound.6f697ff8.mp3"},ccad:function(e,t,n){e.exports=n.p+"media/green_sound.4309c187.mp3"},dad7:function(e,t,n){"use strict";n("4a05")},e785:function(e,t,n){e.exports=n.p+"media/red_sound.6b171ef4.mp3"}});
//# sourceMappingURL=app.967767b7.js.map