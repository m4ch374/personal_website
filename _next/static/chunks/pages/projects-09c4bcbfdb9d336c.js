(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{7670:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n(4724)}])},8893:function(e,t,n){"use strict";var r=n(5893);n(7294);var a=function(e){var t=e.children,n=e.className;return(0,r.jsx)("div",{className:"pt-3 pb-[80px] min-w-[100%] grid grid-flow-row place-items-center ".concat(n),children:t})};t.Z=a},6898:function(e,t,n){"use strict";var r=n(5893);n(7294);var a=function(){return(0,r.jsx)("div",{className:"absolute -left-[130px] top-0 translate-y-1/4 bg-[#313131] text-white pr-2 pl-1 rounded-md scale-0 group-hover:scale-100 transition-transform duration-[50ms] ease-in-out ",children:(0,r.jsx)("span",{children:" \uD83D\uDEABUnavailable :( "})})},s=function(e){var t=e.children,n=e.href,s=e.avalible,i=void 0===s||s,o=e.className;return(0,r.jsxs)("div",{className:"".concat(o," group"),children:[(0,r.jsx)("a",{className:"text-2xl \n        bg-[#84DFFF]\n        hover:bg-[#56d2ff]\n        dark:bg-purple-400  \n        dark:hover:bg-purple-500\n        px-5 \n        py-2 \n        rounded-lg \n        transition-colors \n        duration-200 \n        ".concat(i?"cursor-pointer":"cursor-not-allowed"),href:n,target:"_blank",rel:"noreferrer",children:t}),i?void 0:(0,r.jsx)(a,{})]})};t.Z=s},1477:function(e,t,n){"use strict";n.d(t,{X:function(){return s}});var r=n(5893);n(7294);var a=function(e){var t=e.containerRef,n=e.children;return(0,r.jsx)("div",{className:" grid place-items-center w-[366px] h-[240px] lg:h-[380px] lg:w-[580px] mt-[70px] bg-[#F9F3DF] dark:bg-[#1c1c1c] ",ref:t,children:n})},s=function(){return(0,r.jsx)(a,{children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{margin:"auto"},width:"50px",height:"50px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:(0,r.jsx)("circle",{cx:"50",cy:"50",fill:"none",stroke:"#85a2b6","stroke-width":"10",r:"35","stroke-dasharray":"164.93361431346415 56.97787143782138",children:(0,r.jsx)("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 50 50;360 50 50",keyTimes:"0;1"})})})})};t.Z=a},7152:function(e,t,n){"use strict";var r=n(5893);n(7294);var a=n(5824),s=function(e){var t=e.title,n=e.children,s=e.className;return(0,r.jsxs)(a.Z,{className:s,children:[(0,r.jsx)("span",{className:"text-3xl font-bold underline decoration-slate-400/50 underline-offset-[7px] decoration-[4px]",children:t}),(0,r.jsxs)("div",{className:"pt-2 text-lg",children:[" ",n," "]})]})};t.Z=s},5824:function(e,t,n){"use strict";var r=n(5893);n(7294);var a=function(e){var t=e.className,n=e.children;return(0,r.jsx)("div",{className:"min-w-0 \n      w-[400px] \n      lg:w-[680px] \n      grid \n      grid-flow-row \n      transition-all\n      duration-200\n      ease-in-out\n      ".concat(t),children:n})};t.Z=a},638:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6856).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=i.default,s=(null==t?void 0:t.suspense)?{}:{loading:function(e){return e.error,e.isLoading,e.pastDelay,null}};if(r(e,Promise)?s.loader=function(){return e}:"function"==typeof e?s.loader=e:"object"==typeof e&&(s=a({},s,e)),(s=a({},s,t)).suspense&&(delete s.ssr,delete s.loading),s.loadableGenerated&&delete(s=a({},s,s.loadableGenerated)).loadableGenerated,"boolean"==typeof s.ssr&&!s.suspense){if(!s.ssr)return delete s.ssr,o(n,s);delete s.ssr}return n(s)},t.noSSR=o;var a=n(6495).Z,s=n(2648).Z,i=(s(n(7294)),s(n(4302)));function o(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6319:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(2648).Z)(n(7294)).default.createContext(null);t.LoadableContext=r},4302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9658).Z,a=n(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(6495).Z,i=(0,n(2648).Z)(n(7294)),o=n(6319),l=n(7294).useSyncExternalStore,c=[],u=[],d=!1;function p(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(function(e){return n.loading=!1,n.loaded=e,e}).catch(function(e){throw n.loading=!1,n.error=e,e}),n}var f=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"==typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout(function(){e._update({pastDelay:!0})},n.delay)),"number"==typeof n.timeout&&(this._timeout=setTimeout(function(){e._update({timedOut:!0})},n.timeout))),this._res.promise.then(function(){e._update({}),e._clearTimeouts()}).catch(function(t){e._update({}),e._clearTimeouts()}),this._update({})}},{key:"_update",value:function(e){this._state=s({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(function(e){return e()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function h(e){return function(e,t){var n=function(){if(!h){var t=new f(e,p);h={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return h.promise()},r=function(){n();var e=i.default.useContext(o.LoadableContext);e&&Array.isArray(p.modules)&&p.modules.forEach(function(t){e(t)})},a=function(e,t){r();var n=l(h.subscribe,h.getCurrentValue,h.getCurrentValue);return i.default.useImperativeHandle(t,function(){return{retry:h.retry}},[]),i.default.useMemo(function(){var t;return n.loading||n.error?i.default.createElement(p.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:h.retry}):n.loaded?i.default.createElement((t=n.loaded)&&t.__esModule?t.default:t,e):null},[e,n])},c=function(e,t){return r(),i.default.createElement(p.lazy,s({},e,{ref:t}))},p=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);p.suspense&&(p.lazy=i.default.lazy(p.loader));var h=null;if(!d){var m=p.webpack?p.webpack():p.modules;m&&u.push(function(e){var t=!0,r=!1,a=void 0;try{for(var s,i=m[Symbol.iterator]();!(t=(s=i.next()).done);t=!0){var o=s.value;if(-1!==e.indexOf(o))return n()}}catch(l){r=!0,a=l}finally{try{t||null==i.return||i.return()}finally{if(r)throw a}}})}var x=p.suspense?c:a;return x.preload=function(){return n()},x.displayName="LoadableComponent",i.default.forwardRef(x)}(p,e)}function m(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then(function(){if(e.length)return m(e,t)})}h.preloadAll=function(){return new Promise(function(e,t){m(c).then(e,t)})},h.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(function(t){var n=function(){return d=!0,t()};m(u,e).then(n,n)})},window.__NEXT_PRELOADREADY=h.preloadReady,t.default=h},4724:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(5893),a=n(9008),s=n.n(a),i=n(8893),o=n(7152),l=n(6898),c=n(7294),u=n(3169),d=n(5820),p=n(8821),f=function(e){var t=e.children,n=e.togglePop;return(0,r.jsx)("div",{className:"fixed top-0 left-0 w-screen h-screen bg-[#d8d5d0] bg-opacity-50 backdrop-blur-[15px] dark:bg-[#1C1C1C] dark:bg-opacity-30 dark:backdrop-blur-[20px] z-[1000] flex items-center justify-center",onClick:n,children:(0,r.jsx)("div",{onClick:function(e){return e.stopPropagation()},children:t})})},h=function(e){var t=e.setPopped,n=e.projectMeta,a=(0,u.Z)(),s="N/A"!==n.projectUrl;return(0,r.jsx)(f,{togglePop:function(){return t(!1)},children:(0,r.jsxs)(p.E.div,{variants:{hidden:{transform:"scale(0.3)",opacity:0},visible:{transform:"scale(1)",opacity:1,transition:{type:"spring",stiffness:500,damping:20}},exit:{transform:"scale(0.2)",opacity:0,transition:{type:"tween",duration:.2}}},initial:"hidden",animate:"visible",exit:"exit",className:"flex w-[400px] aspect-[3/4] flex-col lg:flex-row lg:w-[680px] lg:aspect-[10/6] bg-[#FFFDE3] rounded-xl place-items-start overflow-hidden",children:[(0,r.jsx)("div",{className:"w-full h-[160px] bg-cover lg:w-[350px] lg:h-full lg:bg-center",style:{backgroundImage:"url(".concat(a+n.thumbnail,")")}}),(0,r.jsx)("div",{className:"h-full relative flex-grow mr-8",children:(0,r.jsxs)("div",{className:"p-8 text-slate-800 grid grid-flow-row gap-2",children:[(0,r.jsxs)("span",{className:"text-3xl font-bold",children:[" ",decodeURI(n.name)," "]}),(0,r.jsxs)("span",{className:"text-xl",children:[" ",n.description,"  "]}),(0,r.jsx)("hr",{className:"border-gray-400/80"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"text-xl",children:" Features: "}),(0,r.jsx)("ul",{className:"list-disc pl-[30px] text-base font-sans",children:n.features.map(function(e){return(0,r.jsxs)("li",{children:[" ",e," "]},"key")})})]}),(0,r.jsxs)("div",{className:"absolute bottom-[5rem] text-base gap-4 inline-flex",children:[(0,r.jsx)("div",{children:(0,r.jsx)("span",{className:"bg-purple-600/90 text-purple-200 px-2 rounded-md font-bold",children:" Stack "})}),(0,r.jsxs)("span",{className:"font-sans text-base",children:[" ",n.stack.join(", ")," "]})]}),(0,r.jsx)(l.Z,{className:"absolute bottom-8 right-0",href:s?n.projectUrl:void 0,avalible:s,children:" Source → "})]})})]})})},m=function(e){var t=e.projectDetail,n=(0,c.useState)(!1),a=n[0],s=n[1],i=(0,u.Z)();return(0,r.jsxs)("div",{className:"grid grid-flow-row place-items-center w-[40vw] lg:w-[270px]",children:[(0,r.jsx)("div",{className:"hover:scale-110 \n        transition-transform\n        duration-[350ms]\n        w-[44vw]\n        aspect-[3/2]\n        lg:w-full \n        bg-cover \n        bg-center\n        rounded-xl \n      ",style:{backgroundImage:"url(".concat(i+t.thumbnail,")")},onClick:function(){return s(!0)}}),(0,r.jsx)("span",{className:"text-base pt-5 text-center font-sans",children:t.description}),(0,r.jsx)(d.M,{initial:!1,mode:"popLayout",children:a?(0,r.jsx)(h,{setPopped:s,projectMeta:t}):void 0})]})},x=n(5824),v=JSON.parse('{"s":[{"thumbnail":"/mu_sick.png","name":"μsick Bot","description":"A Discord music bot coded in Python using Discord API","features":["Play music from youtube","A queuing system","Other fun commands"],"stack":["Python","Discord.py","FFmpeg","youtube-dl"],"projectUrl":"https://github.com/m4ch374/mu_sick_bot"},{"thumbnail":"/gta_cayo.png","name":"GTA Cayo ATM","description":"An application that exploits a bug found in GTA","features":["Cuts off GTA\'s access to the internet with a click of a button","Does not interfere with other application\'s acccess to the internet"],"stack":["C#",".NET","Windows Forms","WindowsFirewallHelper"],"projectUrl":"https://github.com/m4ch374/GTA_Cayo_ATM"},{"thumbnail":"/ascyee.png","name":"Ascyee","description":"Using Ascii characters to represent an image","features":["Convert an image to an Ascii art","I was bored....."],"stack":["C","uhh... also C"],"projectUrl":"https://github.com/m4ch374/ascyee"}],"o":[{"thumbnail":"/dungeon.png","name":"Dungeon Mania","description":"A Backend for a web game called Dungeon Mania","features":["An interactive game","Different types of enemies, bosses","Users could customize the character models"],"stack":["Java","Scintillia","JSON","GSON"],"projectUrl":"N/A"},{"thumbnail":"/seams.png","name":"UNSW Seams","description":"A backend for a chat webapp, basically a crappy Discord clone","features":["An online chatting platform","Group chats & DMs","Profile customisations & Metrics tracker"],"stack":["Python","Flask","JWT","JSON"],"projectUrl":"N/A"}]}'),g=n(5152),b=n.n(g),y=n(1477),j=function(){var e=v.s,t=v.o,a=b()(function(){return Promise.all([n.e(737),n.e(330),n.e(87)]).then(n.bind(n,5087))},{loadableGenerated:{webpack:function(){return[5087]}},loading:function(){return(0,r.jsx)(y.X,{})}});return(0,r.jsxs)("div",{children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:" Projects "}),(0,r.jsx)("meta",{name:"Description",content:"Personal and University projects"}),(0,r.jsx)("meta",{httpEquiv:"Content-Security-Policy",content:"upgrade-insecure-requests"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)(i.Z,{className:"gap-10",children:[(0,r.jsx)(a,{}),(0,r.jsx)(o.Z,{title:"Personal & University Projects",children:"These are some of my Personal & University Projects. As much as I would love to provide the source code for every project that I've made, the university won't be happy if I open sourced my university projects. Truly unfortunate :("}),(0,r.jsx)(l.Z,{href:"https://github.com/m4ch374",children:" Github → "}),(0,r.jsx)("hr",{className:"w-[70vw] lg:w-[800px] border-gray-600/80"}),(0,r.jsxs)(x.Z,{children:[(0,r.jsx)("span",{className:"text-2xl",children:" Personal Projects "}),(0,r.jsx)("div",{className:"flex justify-center flex-wrap pt-3 gap-8",children:e.map(function(e){return(0,r.jsx)(m,{projectDetail:e},e.name)})})]}),(0,r.jsxs)(x.Z,{children:[(0,r.jsx)("span",{className:"text-2xl",children:" University Projects "}),(0,r.jsx)("div",{className:"flex justify-center pt-3 gap-8 flex-wrap",children:t.map(function(e){return(0,r.jsx)(m,{projectDetail:e},e.name)})})]})]})]})}},5152:function(e,t,n){e.exports=n(638)},9008:function(e,t,n){e.exports=n(5443)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7670)}),_N_E=e.O()}]);