import{S as b,P,W as S,a as f,M as u,b as p,A as M,c as v,d as A,G as H,O,e as E,T as w}from"./vendor.59090762.js";const F=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}};F();const n=new b,d=new P(75,window.innerWidth/window.innerHeight,.1,1e3),a=new S({canvas:document.querySelector("#bg")});a.setPixelRatio(window.devicePixelRatio);a.setSize(window.innerWidth,window.innerHeight);d.position.setZ(30);a.render(n,d);const N=new f(2,24,24),j=new u({color:16763955}),C=new p(N,j);n.add(C);const G=new M(2236962),m=new v(16777215);m.position.set(0,0,0);n.add(m,G);const W=new A(m),q=new H(200,50);n.add(W,q);const z=new O(d,a.domElement);function R(){const c=new f(.25,24,24),r=new u({color:16777215}),o=new p(c,r),[s,e,t]=Array(3).fill().map(()=>E.randFloatSpread(1500));o.position.set(s,e,t),n.add(o)}Array(200).fill().forEach(R);function h(c,r,o,s,e,t,i){const L=new w().load(c),x=new w().load(r),l=new p(new f(o,s,e),new u({map:L,normalMap:x}));return l.position.z=t,l.position.setX(i),l}const T=h("/assets/Earth2.jpg","/assets/earthNormal.jpg",1,40,40,60,100);n.add(T);const g=h("/assets/Earth2.jpg","/assets/earthNormal.jpg",1,40,40,30,-30);n.add(g);function y(){requestAnimationFrame(y),g.rotation.y+=.1,z.update(),a.render(n,d)}y();
