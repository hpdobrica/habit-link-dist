import{a as g,g as L}from"./BpQMLT4q.js";import{d as s}from"./CAFlqnyI.js";import{S as y}from"./BGq74tXb.js";const m=()=>{const i=g("habit-logs",()=>({})),o=g("routine-logs",()=>({})),l=g("stats-loading",()=>!0),c=async()=>{l.value=!0;try{const e=await s.habitLogs.toArray(),d=await s.routineLogs.toArray();Object.assign(i.value,Object.fromEntries(e.map(t=>[t.id,t]))),Object.assign(o.value,Object.fromEntries(d.map(t=>[t.id,t])))}catch(e){console.error("Failed to load stats:",e)}finally{l.value=!1}};return console.debug("stats init scheduled"),y(async()=>{console.debug("stats init started");try{await c()}catch(e){console.error("stats init error",e)}console.debug("stats init finished")}),{habitLogs:i,routineLogs:o,loadStats:c,statsLoading:l}},v=()=>{const{habitLogs:i,routineLogs:o,loadStats:l,statsLoading:c}=m();return{habitLogs:i,routineLogs:o,statsLoading:c,createRoutineLog:async(t,u=[])=>{let n=L("routinelog");const a={id:n,routineId:t,date:new Date().toISOString().split("T")[0],habitLogIds:u};return await s.routineLogs.add(a),o.value[n]=a,n},createHabitLog:async(t,u,n,a,h=new Date().toISOString().split("T")[0])=>{let r=L("habitlog");const b={id:r,habitId:t,status:u,durationSec:n,asPartOfRoutineLog:a,date:h};return s.transaction("rw",s.habitLogs,s.routineLogs,async()=>{a!==null&&await s.routineLogs.where("id").equals(a).modify(f=>{f.habitLogIds.push(r)}),await s.habitLogs.add(b)}),a!==null&&o.value[a].habitLogIds.push(r),i.value[r]=b,r}}};export{v as u};
