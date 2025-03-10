import{b as x,a as k,g as T,i as b,h as v,j as d,l as M,k as C,f as E}from"./ByPNV1YK.js";import{d as r}from"./Cb9qwsxW.js";import{bu as I}from"./XoIZNSvU.js";let w=null;const _=()=>(w||(w=O()),w),O=()=>{const e=x(),l=k();console.log("routineManager created");const p=async t=>{const n={id:T("routine"),title:t,habitInstances:[]};try{await r.routines.add(n),e.add(n)}catch(s){console.error("Failed to add habit:",s)}},f=async t=>e.get(t)||await b(t),m=async(t,a,n)=>{const s=e.get(t)||await b(t);if(!s)return;const c=s.habitInstances.filter(u=>u.habitId===a).length,o=`${a}-${c}`,h=l.getHabit(a)||await v(a),i=n.durationSec??h.targetDurationSec;if(i===void 0||i===0)throw new Error("NO_HABIT_DURATION");const F={habitInstanceId:o,habitId:a,durationSec:i,autoStart:n.autoStart??!0,autoComplete:n.autoComplete??!1},g=[...I(s.habitInstances.map(u=>I(u))),F];try{await r.transaction("rw",r.routines,r.habits,async()=>{await d(t,{habitInstances:g}),await M(a,t)}),e.update(t,{habitInstances:g}),l.linkHabitToRoutine(a,t)}catch(u){console.error("Failed to add habit instance:",u)}},y=async(t,a,n)=>{const s=e.get(t)||await b(t);if(!s)return;const c=s.habitInstances.findIndex(i=>i.habitInstanceId===a);if(c===-1)return;const o={...I(s.habitInstances[c]),...n},h=s.habitInstances.map(i=>i.habitInstanceId===a?o:i);try{await d(t,{habitInstances:h}),e.update(t,{habitInstances:h})}catch(i){console.error("Failed to update habit instance:",i)}},H=async(t,a)=>{const n=e.get(t)||await b(t);if(!n||n.habitInstances.findIndex(o=>o.habitInstanceId===a)===-1)return;const c=n.habitInstances.filter(o=>o.habitInstanceId!==a);try{await d(t,{habitInstances:c}),e.update(t,{habitInstances:c})}catch(o){console.error("Failed to remove habit instance:",o)}},R=async(t,a)=>{if(e.get(t)||await b(t))try{await d(t,{habitInstances:a}),e.update(t,{habitInstances:a})}catch(s){console.error("Failed to update habit instance:",s)}},S=async t=>{try{const a=await f(t);if(!a)return;r.transaction("rw",r.routines,r.habits,async()=>{await C(t),a.habitInstances.forEach(async n=>{await E(n.habitId,t)})}),e.remove(t),a.habitInstances.forEach(async n=>{l.unlinkHabitFromRoutine(n.habitId,t)})}catch(a){console.error("Failed to remove routine:",a)}};return{routines:e.routines,routinesLoading:e.routinesLoading,getRoutine:f,addRoutine:p,removeRoutine:S,addHabitInstanceToRoutine:m,updateHabitInstance:y,removeHabitInstance:H,reOrderHabitsInRoutine:R}};export{_ as u};
