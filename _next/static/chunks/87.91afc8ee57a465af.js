"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[87],{5087:function(e,n,t){t.r(n);var a=t(5893),i=t(7294),o=t(9477),l=t(9365),r=t(1217),u=t(3169),c=t(1477),s=function(){var e=(0,i.useRef)(null),n=null,t=(0,i.useCallback)(function(){var t=e.current;t&&(null==n||n.setSize(t.clientWidth,t.clientHeight))},[]);return(0,i.useEffect)(function(){var a=e.current,i=(0,u.Z)(),c=new o.Pa4(0,4,12),s=new o.Pa4(0,0,0),d=new o.Pa4(-2,-2,0);if(a){var f=a.clientWidth,p=a.clientHeight;(n=new o.CP7({antialias:!0,alpha:!0})).setSize(f,p),n.setPixelRatio(window.devicePixelRatio),n.outputEncoding=o.knz,a.appendChild(n.domElement);var v=new o.xsS,m=new o.cPb(40,f/p,1,1e3);m.position.set(c.x,c.y,c.z),m.lookAt(s);var w=new o.Mig(16777215,1);v.add(w);var E=new l.z(m,n.domElement);E.target=s,E.autoRotate=!0,E.autoRotateSpeed=1,E.enableDamping=!0,E.dampingFactor=.06;var h=null,g=function(){h=requestAnimationFrame(g),E.update(),null==n||n.render(v,m)};return addEventListener("resize",t),new r.E().load(i+"/model/laptop.glb",function(e){var n=e.scene;n.position.set(d.x,d.y,d.z),n.scale.setScalar(1),n.rotation.y+=11,v.add(n),g()},void 0,function(e){return console.error(e)}),function(){cancelAnimationFrame(h),null==n||n.domElement.remove(),null==n||n.dispose(),removeEventListener("resize",t)}}},[t]),(0,a.jsx)(c.Z,{containerRef:e})};n.default=s}}]);