"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[87],{5087:function(e,n,t){t.r(n);var a=t(5893),i=t(7294),o=t(9477),r=t(9365),l=t(1217),u=t(3169),c=t(1477),s=function(){var e=(0,i.useRef)(null),n=null,t=(0,i.useCallback)(function(){var t=e.current;t&&(null==n||n.setSize(t.clientWidth,t.clientHeight))},[]);return(0,i.useEffect)(function(){var a=e.current,i=(0,u.Z)(),c=new o.Pa4(0,4,12),s=new o.Pa4(0,0,0),d=new o.Pa4(-2,-2,0),p=new o.Pa4(10,10,10);if(a){var v=a.clientWidth,f=a.clientHeight;(n=new o.CP7({antialias:!0,alpha:!0})).setSize(v,f),n.setPixelRatio(window.devicePixelRatio),n.outputEncoding=o.knz,a.appendChild(n.domElement);var m=new o.xsS,w=new o.cPb(40,v/f,1,1e3);w.position.set(c.x,c.y,c.z),w.lookAt(s);var E=new o.Mig(16777215,1);m.add(E);var h=new o.cek(16777215,1);h.position.set(p.x,p.y,p.z),m.add(h);var z=new r.z(w,n.domElement);z.target=s,z.autoRotate=!0,z.autoRotateSpeed=1,z.enableDamping=!0,z.dampingFactor=.06;var g=null,k=function(){g=requestAnimationFrame(k),z.update(),null==n||n.render(m,w)};return addEventListener("resize",t),new l.E().load(i+"/model/laptop.glb",function(e){var n=e.scene;n.position.set(d.x,d.y,d.z),n.scale.setScalar(1),n.rotation.y+=11,m.add(n),k()},void 0,function(e){return console.error(e)}),function(){cancelAnimationFrame(g),null==n||n.domElement.remove(),null==n||n.dispose(),removeEventListener("resize",t)}}},[t]),(0,a.jsx)(c.Z,{containerRef:e})};n.default=s}}]);