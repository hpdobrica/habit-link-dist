import{_ as st}from"./q149jBvq.js";import{m as et,r as N,C as s,q as it,g as lt,o as k,L as at,w as q,y as ut,M as rt,N as ct,O as vt,A as dt,B as V,c as F,a as l,b as mt,D as n,t as E,E as C,d as ft}from"./DfAVtV7A.js";import{u as ht,a as pt}from"./CrJ98uCf.js";import{u as bt,H as J}from"./xc3_skDN.js";import{u as gt}from"./ChdpkMBv.js";import"./BkulSrJ3.js";const $=1e3,K="abort",Q="end",W="progress",Z="start",tt="visibilitychange",wt=et({__name:"countdown",props:{autoStart:{type:Boolean,default:!0},emitEvents:{type:Boolean,default:!0},interval:{type:Number,default:1e3,validator:u=>u>=0},now:{type:Function,default:()=>Date.now()},tag:{type:String,default:"div"},time:{type:Number,default:0,validator:u=>u>=0},date:{type:Date,default:null,validator:u=>u.getTime()>=0},transform:{type:Function,default:u=>u},withYears:{type:Boolean,default:!1},allowNegative:{type:Boolean,default:!1}},emits:[K,Q,W,Z],setup(u,{expose:r,emit:c}){const D=60*$,m=60*D,h=24*m,x=365*h,e=u,I=c,a=N(!1),f=N(0),t=N(0),p=N(0),v=s(()=>{var g;return((g=e.date)==null?void 0:g.getTime())-e.now()||e.time}),w=s(()=>e.withYears?Math.floor(t.value/x):0),M=s(()=>e.withYears?Math.floor(t.value%x/h):Math.floor(t.value/h)),R=s(()=>Math.floor(t.value%h/m)),L=s(()=>Math.floor(t.value%m/D)),B=s(()=>Math.floor(t.value%D/$)),H=s(()=>Math.floor(t.value%$)),_=s(()=>e.withYears?M.value+w.value*365:M.value),o=s(()=>Math.floor(t.value/m)),S=s(()=>Math.floor(t.value/D)),y=s(()=>Math.floor(t.value/$));it(()=>{t.value=v.value,f.value=e.now()+v.value,e.autoStart&&b(),document.addEventListener(tt,z)}),lt(()=>{document.removeEventListener(tt,z),d()});const b=()=>{a.value||(a.value=!0,e.autoStart||(t.value=v.value,f.value=e.now()+v.value),e.emitEvents&&I(Z),document.visibilityState==="visible"&&i())},i=()=>{if(!a.value)return;const g=Math.min(t.value,e.interval);if(e.allowNegative||g>0){let A,O;const X=T=>{A||(A=T),O||(O=T);const j=T-A;j>=g||j+(T-O)/2>=g?Y():p.value=requestAnimationFrame(X),O=T};p.value=requestAnimationFrame(X)}else e.allowNegative||(console.log("calling end from continue"),U())},d=()=>{cancelAnimationFrame(p.value)},Y=()=>{a.value&&(G(),e.emitEvents&&(e.allowNegative||t.value>0)&&I(W,{years:w.value,days:M.value,hours:R.value,minutes:L.value,seconds:B.value,milliseconds:H.value,totalDays:_.value,totalHours:o.value,totalMinutes:S.value,totalSeconds:y.value,totalMilliseconds:t.value}),i())},P=()=>{a.value&&(d(),a.value=!1,e.emitEvents&&I(K))},U=()=>{console.log("countdown ended"),a.value&&(d(),t.value=0,a.value=!1,e.emitEvents&&I(Q))},G=()=>{a.value&&(e.allowNegative?t.value=f.value-e.now():t.value=Math.max(0,f.value-e.now()))},ot=()=>{d(),t.value=v.value,f.value=e.now()+v.value,a.value=!1,b()},z=()=>{switch(document.visibilityState){case"visible":G(),i();break;case"hidden":d();break}},nt=s(()=>e.transform({years:w.value,days:M.value,hours:R.value,minutes:L.value,seconds:B.value,milliseconds:H.value,totalDays:_.value,totalHours:o.value,totalMinutes:S.value,totalSeconds:y.value,totalMilliseconds:t.value}));return r({start:b,pause:d,abort:P,end:U,restart:ot}),(g,A)=>(k(),at(vt(u.tag),null,{default:q(()=>[ut(g.$slots,"default",rt(ct(nt.value)))]),_:3}))}}),_t={class:"page"},St={class:"top-bar"},It={class:"routine-title"},Mt={class:"timer-section"},yt={class:"timer-icon"},Et={class:"countdown-timer"},Nt={class:"total-duration"},Dt={key:0,class:"next-habit-title"},Lt={key:1,class:"next-habit-title"},Ht=et({__name:"run",async setup(u){let r,c;const m=dt().params.id;if(typeof m!="string")throw[r,c]=V(()=>C("/")),await r,c(),new Error("wrong routine id");ht();const h=bt(),x=pt(),e=gt(),I={id:"routine-null",title:"",habitInstances:[]},a=s(()=>x.value[m]||I);if(!a)throw[r,c]=V(()=>C("/")),await r,c(),new Error("wrong routine id");if(!a.value)throw[r,c]=V(()=>C("/")),await r,c(),new Error("wrong routine id");if(a.value.id==="routine-null")throw[r,c]=V(()=>C("/")),await r,c(),new Error("wrong routine id");const f=()=>{p.value=new Date,p.value.setSeconds(p.value.getSeconds()+a.value.habitInstances[t.value].durationSec),v=new Date},t=N(0);let p=N(new Date),v=new Date;f();const w=h.createRoutineLog(m),M=()=>{const o=Math.abs((new Date().getTime()-v.getTime())/1e3);h.createHabitLog(a.value.habitInstances[t.value].habitId,J.Completed,o,w),t.value++,L(),f()},R=()=>{const o=Math.abs((new Date().getTime()-v.getTime())/1e3);h.createHabitLog(a.value.habitInstances[t.value].habitId,J.Skipped,o,w),t.value++,L(),f()},L=async()=>{console.log(a.value.habitInstances.length,t.value),a.value.habitInstances.length<=t.value&&await C(`/routines/${m}/complete/${w}`)},B=s(()=>!(a.value.habitInstances.length<=t.value+1)),H=_=>{const o={},{totalSeconds:S}=_,y=S<0,b=Math.abs(S),i=Math.floor(b/60),d=b%60,Y=y?`-${i<10?`0${i}`:i}`:i<10?`0${i}`:String(i),P=d<10?`0${d}`:String(d);return o.minutes=Y,o.seconds=P,o};return(_,o)=>{const S=st,y=wt;return k(),F("div",_t,[l("div",St,[o[1]||(o[1]=l("div",{class:"placeholder"},null,-1)),mt(S,{to:{name:"routines-id",params:{id:n(a).id}},class:"close-button"},{default:q(()=>o[0]||(o[0]=[ft("X")])),_:1},8,["to"])]),l("h1",It,E(n(e).habits.value[n(a).habitInstances[n(t)].habitId].title),1),l("div",Mt,[l("div",yt,E(n(e).habits.value[n(a).habitInstances[n(t)].habitId].icon),1),(k(),at(y,{date:n(p),transform:H,"allow-negative":!0,key:n(t)},{default:q(({minutes:b,seconds:i})=>[l("div",Et,E(b)+":"+E(i),1)]),_:1},8,["date"])),l("div",Nt,E(n(a).habitInstances[n(t)].durationSec)+"s",1)]),l("div",{class:"action-buttons"},[o[2]||(o[2]=l("button",{class:"action-button pause-button"},"⏸️",-1)),l("button",{class:"action-button complete-button",onClick:M},"✔️"),l("button",{class:"action-button skip-button",onClick:R},"⏭️")]),n(B)?(k(),F("h3",Dt," Next habit ➡️ "+E(n(e).habits.value[n(a).habitInstances[n(t)+1].habitId].title),1)):(k(),F("h3",Lt,"This is the last one! 🏆")),o[3]||(o[3]=l("div",{class:"footer"}," Additional details can go here. ",-1))])}}});export{Ht as default};
