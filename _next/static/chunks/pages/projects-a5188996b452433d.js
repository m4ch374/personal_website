(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{7670:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return c(812)}])},8893:function(a,b,c){"use strict";var d=c(5893);c(7294);var e=function(a){var b=a.children,c=a.className;return(0,d.jsx)("div",{className:"pt-3 pb-[80px] min-w-[100%] grid grid-flow-row place-items-center ".concat(c),children:b})};b.Z=e},6898:function(a,b,c){"use strict";var d=c(5893);c(7294);var e=function(){return(0,d.jsx)("div",{className:"absolute -left-[130px] top-0 translate-y-1/4 bg-[#313131] text-white pr-2 pl-1 rounded-md scale-0 group-hover:scale-100 transition-transform duration-[50ms] ease-in-out ",children:(0,d.jsx)("span",{children:" \uD83D\uDEABUnavailable :( "})})},f=function(a){var b=a.children,c=a.href,f=a.avalible,g=void 0===f||f,h=a.className;return(0,d.jsxs)("div",{className:"".concat(h," group"),children:[(0,d.jsx)("a",{className:"text-2xl \n        bg-purple-400  \n        px-5 \n        py-2 \n        rounded-lg \n        transition-colors \n        duration-200 \n        hover:bg-purple-500\n        ".concat(g?"cursor-pointer":"cursor-not-allowed"),href:c,target:"_blank",rel:"noreferrer",children:b}),g?void 0:(0,d.jsx)(e,{})]})};b.Z=f},7152:function(a,b,c){"use strict";var d=c(5893);c(7294);var e=c(5824),f=function(a){var b=a.title,c=a.children,f=a.className;return(0,d.jsxs)(e.Z,{className:f,children:[(0,d.jsx)("span",{className:"text-3xl font-bold underline decoration-slate-400/50 underline-offset-[7px] decoration-[4px]",children:b}),(0,d.jsxs)("div",{className:"pt-2 text-lg",children:[" ",c," "]})]})};b.Z=f},5824:function(a,b,c){"use strict";var d=c(5893);c(7294);var e=function(a){var b=a.className,c=a.children;return(0,d.jsx)("div",{className:"min-w-0 \n      w-[400px] \n      lg:w-[680px] \n      grid \n      grid-flow-row \n      transition-all\n      duration-200\n      ease-in-out\n      ".concat(b),children:c})};b.Z=e},812:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return t}});var d=c(5893),e=c(9008),f=c.n(e),g=c(8893),h=c(7152),i=c(6898),j=c(7294),k=c(9557),l=c(684),m=c(5820),n=function(a){var b=a.setPopped,c=a.projectMeta,e=(0,k.Z)(),f="N/A"!==c.projectUrl;return(0,d.jsx)("div",{className:"fixed top-0 left-0 w-screen h-screen backdrop-blur-[20px] bg-[#1C1C1C] bg-opacity-30 z-[1000] flex items-center justify-center",onClick:function(){return b(!1)},children:(0,d.jsx)("div",{onClick:function(a){return a.stopPropagation()},children:(0,d.jsxs)(l.E.div,{variants:{hidden:{transform:"scale(0.3)",opacity:0},visible:{transform:"scale(1)",opacity:1,transition:{type:"spring",stiffness:500,damping:20}},exit:{transform:"scale(0.2)",opacity:0,transition:{type:"tween",duration:.2}}},initial:"hidden",animate:"visible",exit:"exit",className:"flex w-[400px] aspect-[3/4] flex-col lg:flex-row lg:w-[680px] lg:aspect-[10/6] bg-[#FFFDE3] rounded-xl place-items-start overflow-hidden",children:[(0,d.jsx)("div",{className:"w-full h-[160px] bg-cover lg:w-[350px] lg:h-full lg:bg-center",style:{backgroundImage:"url(".concat(e+c.thumbnail,")")}}),(0,d.jsx)("div",{className:"h-full relative flex-grow mr-8",children:(0,d.jsxs)("div",{className:"p-8 text-slate-800 grid grid-flow-row gap-2",children:[(0,d.jsxs)("span",{className:"text-3xl font-bold",children:[" ",decodeURI(c.name)," "]}),(0,d.jsxs)("span",{className:"text-xl",children:[" ",c.description,"  "]}),(0,d.jsx)("hr",{className:"border-gray-400/80"}),(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{className:"text-xl",children:" Features: "}),(0,d.jsx)("ul",{className:"list-disc pl-[30px] text-base font-sans",children:c.features.map(function(a){return(0,d.jsxs)("li",{children:[" ",a," "]},"key")})})]}),(0,d.jsxs)("div",{className:"absolute bottom-[5rem] text-base gap-4 inline-flex",children:[(0,d.jsx)("div",{children:(0,d.jsx)("span",{className:"bg-purple-600/90 text-purple-200 px-2 rounded-md font-bold",children:" Stack "})}),(0,d.jsxs)("span",{className:"font-sans text-base",children:[" ",c.stack.join(", ")," "]})]}),(0,d.jsx)(i.Z,{className:"absolute bottom-8 right-0",href:f?c.projectUrl:void 0,avalible:f,children:" Source → "})]})})]})})})},o=function(a){var b=a.projectDetail,c=(0,j.useState)(!1),e=c[0],f=c[1],g=(0,k.Z)();return(0,d.jsxs)("div",{className:"grid grid-flow-row place-items-center w-[40vw] lg:w-[270px]",children:[(0,d.jsx)("div",{className:"hover:scale-110 \n        transition-transform\n        duration-[350ms]\n        w-[44vw]\n        aspect-[3/2]\n        lg:w-full \n        bg-cover \n        bg-center\n        rounded-xl \n      ",style:{backgroundImage:"url(".concat(g+b.thumbnail,")")},onClick:function(){return f(!0)}}),(0,d.jsx)("span",{className:"text-base pt-5 text-center font-sans",children:b.description}),(0,d.jsx)(m.M,{initial:!1,mode:"popLayout",children:e?(0,d.jsx)(n,{setPopped:f,projectMeta:b}):void 0})]})},p=o,q=c(5824),r=JSON.parse('{"s":[{"thumbnail":"/mu_sick.png","name":"μsick Bot","description":"A Discord music bot coded in Python using Discord API","features":["Play music from youtube","A queuing system","Other fun commands"],"stack":["Python","Discord.py","FFmpeg","youtube-dl"],"projectUrl":"https://github.com/m4ch374/mu_sick_bot"},{"thumbnail":"/gta_cayo.png","name":"GTA Cayo ATM","description":"An application that exploits a bug found in GTA","features":["Cuts off GTA\'s access to the internet with a click of a button","Does not interfere with other application\'s acccess to the internet"],"stack":["C#",".NET","Windows Forms","WindowsFirewallHelper"],"projectUrl":"https://github.com/m4ch374/GTA_Cayo_ATM"},{"thumbnail":"/ascyee.png","name":"Ascyee","description":"Using Ascii characters to represent an image","features":["Convert an image to an Ascii art","I was bored....."],"stack":["C","uhh... also C"],"projectUrl":"https://github.com/m4ch374/ascyee"}],"o":[{"thumbnail":"/dungeon.png","name":"Dungeon Mania","description":"A Backend for a web game called Dungeon Mania","features":["An interactive game","Different types of enemies, bosses","Users could customize the character models"],"stack":["Java","Scintillia","JSON","GSON"],"projectUrl":"N/A"},{"thumbnail":"/seams.png","name":"UNSW Seams","description":"A backend for a chat webapp, basically a crappy Discord clone","features":["An online chatting platform","Group chats & DMs","Profile customisations & Metrics tracker"],"stack":["Python","Flask","JWT","JSON"],"projectUrl":"N/A"}]}'),s=function(){var a=r.s,b=r.o,c=(0,k.Z)();return(0,d.jsxs)("div",{children:[(0,d.jsxs)(f(),{children:[(0,d.jsx)("title",{children:" Projects "}),(0,d.jsx)("meta",{name:"Description",content:"Personal and University projects"}),(0,d.jsx)("meta",{httpEquiv:"Content-Security-Policy",content:"upgrade-insecure-requests"}),(0,d.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,d.jsxs)(g.Z,{className:"gap-10",children:[(0,d.jsx)("div",{className:"mt-[70px] relative w-[400px] h-[240px] lg:h-[280px] lg:w-[480px] bg-cover transition-all",style:{backgroundImage:"url(".concat(c,"/mountain.png)")}}),(0,d.jsx)(h.Z,{title:"Personal & University Projects",children:"These are my Personal & University Projects. As much as I would love to provide the source code for every project that I've made, I'm unable to provide the code for university projects as UNSW does not allow it."}),(0,d.jsx)(i.Z,{href:"https://github.com/m4ch374",children:" Github → "}),(0,d.jsx)("hr",{className:"w-[70vw] lg:w-[800px] border-gray-600/80"}),(0,d.jsxs)(q.Z,{children:[(0,d.jsx)("span",{className:"text-2xl",children:" Personal Projects "}),(0,d.jsx)("div",{className:"flex justify-center flex-wrap pt-3 gap-8",children:a.map(function(a){return(0,d.jsx)(p,{projectDetail:a},a.name)})})]}),(0,d.jsxs)(q.Z,{children:[(0,d.jsx)("span",{className:"text-2xl",children:" University Projects "}),(0,d.jsx)("div",{className:"flex justify-center pt-3 gap-8 flex-wrap",children:b.map(function(a){return(0,d.jsx)(p,{projectDetail:a},a.name)})})]})]})]})},t=s},9008:function(a,b,c){a.exports=c(5443)}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=7670)}),_N_E=a.O()}])