import{_ as L,e as O,c as p,f as w,d as S,S as _,g as k,n as g,h as m,a as x,b as y,i as I}from"./index-6983131b.js";import{S as j}from"./base-3665f77c-e6847211.js";var R=function(){function a(i,t,r){var o=this;this.type=i,this.handleMessage=t,this.protocol=r,this._disposeMessageListener=this.protocol.channelListen(function(e){return x(o,void 0,void 0,function(){var n,d,u,c,u;return y(this,function(l){switch(l.label){case 0:if(!(e.type===this.getTypeId()&&e.method))return[3,4];n=e,l.label=1;case 1:return l.trys.push([1,3,,4]),[4,this.handleMessage(n)];case 2:return d=l.sent(),u={type:this.getTypeId(),msgId:n.msgId,result:d},this.protocol.dispatch(u),[3,4];case 3:return c=l.sent(),u={type:this.getTypeId(),msgId:n.msgId,error:{message:c.message}},this.protocol.dispatch(u),[3,4];case 4:return[2]}})})})}return a.prototype.getTypeId=function(){return"protocol-"+this.type},a.prototype.dispose=function(){this._disposeMessageListener()},a}(),C=function(){function a(i,t){this.globalListeners={},this.globalListenersCount=0,this.channelListeners={},this.channelListenersCount=0,this.channelId=Math.floor(Math.random()*1e6),this.frameWindow=i.contentWindow,this.origin=t,this.globalListeners=[],this.channelListeners=[],this.eventListener=this.eventListener.bind(this),typeof window<"u"&&window.addEventListener("message",this.eventListener)}return a.prototype.cleanup=function(){window.removeEventListener("message",this.eventListener),this.globalListeners={},this.channelListeners={},this.globalListenersCount=0,this.channelListenersCount=0},a.prototype.register=function(){this.frameWindow&&this.frameWindow.postMessage({type:"register-frame",origin:document.location.origin,id:this.channelId},this.origin)},a.prototype.dispatch=function(i){this.frameWindow&&this.frameWindow.postMessage(p({$id:this.channelId,codesandbox:!0},i),this.origin)},a.prototype.globalListen=function(i){var t=this;if(typeof i!="function")return function(){};var r=this.globalListenersCount;return this.globalListeners[r]=i,this.globalListenersCount++,function(){delete t.globalListeners[r]}},a.prototype.channelListen=function(i){var t=this;if(typeof i!="function")return function(){};var r=this.channelListenersCount;return this.channelListeners[r]=i,this.channelListenersCount++,function(){delete t.channelListeners[r]}},a.prototype.eventListener=function(i){if(i.source===this.frameWindow){var t=i.data;t.codesandbox&&(Object.values(this.globalListeners).forEach(function(r){return r(t)}),t.$id===this.channelId&&Object.values(this.channelListeners).forEach(function(r){return r(t)}))}},a}(),P=50;function E(a,i){if(!a)return"static";var t=a.dependencies,r=t===void 0?{}:t,o=a.devDependencies,e=o===void 0?{}:o,n=m(m([],Object.keys(r),!0),Object.keys(e),!0),d=Object.keys(i),c=["@adonisjs/framework","@adonisjs/core"];if(n.some(function(s){return c.indexOf(s)>-1}))return"adonis";var u=["nuxt","nuxt-edge","nuxt-ts","nuxt-ts-edge","nuxt3"];if(n.some(function(s){return u.indexOf(s)>-1}))return"nuxt";if(n.indexOf("next")>-1)return"next";var l=["apollo-server","apollo-server-express","apollo-server-hapi","apollo-server-koa","apollo-server-lambda","apollo-server-micro"];if(n.some(function(s){return l.indexOf(s)>-1}))return"apollo";if(n.indexOf("mdx-deck")>-1)return"mdx-deck";if(n.indexOf("gridsome")>-1)return"gridsome";if(n.indexOf("vuepress")>-1)return"vuepress";if(n.indexOf("ember-cli")>-1)return"ember";if(n.indexOf("sapper")>-1)return"sapper";if(n.indexOf("gatsby")>-1)return"gatsby";if(n.indexOf("quasar")>-1)return"quasar";if(n.indexOf("@docusaurus/core")>-1)return"docusaurus";if(n.indexOf("remix")>-1)return"remix";if(n.indexOf("astro")>-1)return"node";if(d.some(function(s){return s.endsWith(".re")}))return"reason";var v=["parcel-bundler","parcel"];if(n.some(function(s){return v.indexOf(s)>-1}))return"parcel";var h=["@dojo/core","@dojo/framework"];if(n.some(function(s){return h.indexOf(s)>-1}))return"@dojo/cli-create-app";if(n.indexOf("@nestjs/core")>-1||n.indexOf("@nestjs/common")>-1)return"nest";if(n.indexOf("react-styleguidist")>-1)return"styleguidist";if(n.indexOf("react-scripts")>-1)return"create-react-app";if(n.indexOf("react-scripts-ts")>-1)return"create-react-app-typescript";if(n.indexOf("@angular/core")>-1)return"angular-cli";if(n.indexOf("preact-cli")>-1)return"preact-cli";if(n.indexOf("@sveltech/routify")>-1||n.indexOf("@roxi/routify")>-1||n.indexOf("vite")>-1||n.indexOf("@frontity/core")>-1)return"node";if(n.indexOf("svelte")>-1)return"svelte";if(n.indexOf("vue")>-1)return"vue-cli";if(n.indexOf("cx")>-1)return"cxjs";var f=["express","koa","nodemon","ts-node","@tensorflow/tfjs-node","webpack-dev-server","snowpack"];if(n.some(function(s){return f.indexOf(s)>-1})||Object.keys(r).length>=P)return"node"}var b,N="https://"+((b="2.0.26")===null||b===void 0?void 0:b.replace(/\./g,"-"))+"-sandpack.codesandbox.io/",U=function(a){L(i,a);function i(t,r,o){o===void 0&&(o={});var e=a.call(this,t,r,o)||this;if(e.getTranspilerContext=function(){return new Promise(function(d){var c=e.listen(function(u){u.type==="transpiler-context"&&(d(u.data),c())});e.dispatch({type:"get-transpiler-context"})})},e.bundlerURL=o.bundlerURL||N,e.bundlerState=void 0,e.errors=[],e.status="initializing",typeof t=="string"){e.selector=t;var n=document.querySelector(t);g(n,"The element '"+t+"' was not found"),e.element=n,e.iframe=document.createElement("iframe"),e.initializeElement()}else e.element=t,e.iframe=t;return e.iframe.getAttribute("sandbox")||(e.iframe.setAttribute("sandbox","allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"),e.iframe.setAttribute("allow","accelerometer; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi;")),e.setLocationURLIntoIFrame(),e.iframeProtocol=new C(e.iframe,e.bundlerURL),e.unsubscribeGlobalListener=e.iframeProtocol.globalListen(function(d){d.type!=="initialized"||!e.iframe.contentWindow||(e.iframeProtocol.register(),e.options.fileResolver&&(e.fileResolverProtocol=new R("fs",function(c){return x(e,void 0,void 0,function(){return y(this,function(u){if(c.method==="isFile")return[2,this.options.fileResolver.isFile(c.params[0])];if(c.method==="readFile")return[2,this.options.fileResolver.readFile(c.params[0])];throw new Error("Method not supported")})})},e.iframeProtocol)),e.updateSandbox(e.sandboxSetup,!0))}),e.unsubscribeChannelListener=e.iframeProtocol.channelListen(function(d){switch(d.type){case"start":{e.errors=[];break}case"status":{e.status=d.status;break}case"action":{d.action==="show-error"&&(e.errors=m(m([],e.errors,!0),[I(d)],!1));break}case"state":{e.bundlerState=d.state;break}}}),e}return i.prototype.setLocationURLIntoIFrame=function(){var t,r=this.options.startRoute?new URL(this.options.startRoute,this.bundlerURL).toString():this.bundlerURL;(t=this.iframe.contentWindow)===null||t===void 0||t.location.replace(r),this.iframe.src=r},i.prototype.destroy=function(){this.unsubscribeChannelListener(),this.unsubscribeGlobalListener(),this.iframeProtocol.cleanup()},i.prototype.updateOptions=function(t){O(this.options,t)||(this.options=t,this.updateSandbox())},i.prototype.updateSandbox=function(t,r){var o,e,n,d;t===void 0&&(t=this.sandboxSetup),this.sandboxSetup=p(p({},this.sandboxSetup),t);var c=this.getFiles(),u=Object.keys(c).reduce(function(h,f){var s;return p(p({},h),(s={},s[f]={code:c[f].code,path:f},s))},{}),l=JSON.parse(w(this.sandboxSetup.dependencies,this.sandboxSetup.devDependencies,this.sandboxSetup.entry));try{l=JSON.parse(c["/package.json"].code)}catch(h){console.error(S("could not parse package.json file: "+h.message))}var v=Object.keys(c).reduce(function(h,f){var s;return p(p({},h),(s={},s[f]={content:c[f].code,path:f},s))},{});this.dispatch({type:"compile",codesandbox:!0,version:3,isInitializationCompile:r,modules:u,reactDevTools:this.options.reactDevTools,externalResources:this.options.externalResources||[],hasFileResolver:Boolean(this.options.fileResolver),disableDependencyPreprocessing:this.sandboxSetup.disableDependencyPreprocessing,template:this.sandboxSetup.template||E(l,v),showOpenInCodeSandbox:(o=this.options.showOpenInCodeSandbox)!==null&&o!==void 0?o:!0,showErrorScreen:(e=this.options.showErrorScreen)!==null&&e!==void 0?e:!0,showLoadingScreen:(n=this.options.showLoadingScreen)!==null&&n!==void 0?n:!0,skipEval:this.options.skipEval||!1,clearConsoleDisabled:!this.options.clearConsoleOnFirstCompile,logLevel:(d=this.options.logLevel)!==null&&d!==void 0?d:_.Info,customNpmRegistries:this.options.customNpmRegistries})},i.prototype.dispatch=function(t){t.type==="refresh"&&this.setLocationURLIntoIFrame(),this.iframeProtocol.dispatch(t)},i.prototype.listen=function(t){return this.iframeProtocol.channelListen(t)},i.prototype.getCodeSandboxURL=function(){var t=this.getFiles(),r=Object.keys(t).reduce(function(o,e){var n;return p(p({},o),(n={},n[e.replace("/","")]={content:t[e].code,isBinary:!1},n))},{});return fetch("https://codesandbox.io/api/v1/sandboxes/define?json=1",{method:"POST",body:JSON.stringify({files:r}),headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(o){return o.json()}).then(function(o){return{sandboxId:o.sandbox_id,editorUrl:"https://codesandbox.io/s/"+o.sandbox_id,embedUrl:"https://codesandbox.io/embed/"+o.sandbox_id}})},i.prototype.getFiles=function(){var t=this.sandboxSetup;return t.files["/package.json"]===void 0?k(t.files,t.dependencies,t.devDependencies,t.entry):this.sandboxSetup.files},i.prototype.initializeElement=function(){this.iframe.style.border="0",this.iframe.style.width=this.options.width||"100%",this.iframe.style.height=this.options.height||"100%",this.iframe.style.overflow="hidden",g(this.element.parentNode,"The given iframe does not have a parent."),this.element.parentNode.replaceChild(this.iframe,this.element)},i}(j);export{U as SandpackRuntime};
