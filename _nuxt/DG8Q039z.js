import{_ as A}from"./CHxDq0OV.js";import{_ as I}from"./ByZY0PE_.js";import{m as U,r as h,f as L,o as i,c as s,x as T,a,A as d,B as _,I as R,d as w,J as $,_ as z,F as M,u as S,C as D,b as H,t as x,w as J,v as P}from"./DwSVxhzH.js";import{u as W}from"./B2F4k2Ty.js";import{u as q}from"./Crg6w-NL.js";import"./DM9ldkcE.js";const G={key:1,class:"modal"},K={class:"modal-controls"},Q={class:"form-group"},X={class:"form-group"},Y={class:"form-group"},Z={class:"form-group"},ee={class:"target-selection"},te=["disabled"],ae=U({__name:"createHabitModal",emits:["selectionMade"],setup(E,{expose:f,emit:c}){const t=h({icon:"",title:"",isTracked:!0,targetType:"completions",targetValue:0}),p=h(!1),y=c;function v(){if(t.value.icon==""||t.value.title==""||t.value.targetValue==0){alert("Please fill out all fields.");return}const m={icon:t.value.icon,title:t.value.title,isTracked:t.value.isTracked,targetDurationSec:t.value.targetType==="duration"?t.value.targetValue:0,targetCompletions:t.value.targetType==="completions"?t.value.targetValue:0};y("selectionMade",m),g(),b()}function g(){t.value={icon:"",title:"",isTracked:!0,targetType:"completions",targetValue:0}}L(()=>t.value.isTracked,m=>{m||(t.value.targetType="duration")});function V(){p.value=!0}function b(){p.value=!1}return f({openModal:V,closeModal:b}),(m,e)=>(i(),s("div",null,[p.value?(i(),s("div",{key:0,class:"modal-overlay",onClick:b})):T("",!0),p.value?(i(),s("div",G,[e[13]||(e[13]=a("h2",{class:"modal-title"},"Create a New Habit",-1)),a("div",K,[a("div",Q,[e[7]||(e[7]=a("label",{for:"habit-icon"},"Icon (Emoji):",-1)),d(a("input",{id:"habit-icon",type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>t.value.icon=o),placeholder:"e.g., 💪"},null,512),[[_,t.value.icon]])]),a("div",X,[e[8]||(e[8]=a("label",{for:"habit-title"},"Title:",-1)),d(a("input",{id:"habit-title",type:"text","onUpdate:modelValue":e[1]||(e[1]=o=>t.value.title=o),placeholder:"Habit title"},null,512),[[_,t.value.title]])]),a("div",Y,[a("label",null,[d(a("input",{type:"checkbox","onUpdate:modelValue":e[2]||(e[2]=o=>t.value.isTracked=o)},null,512),[[R,t.value.isTracked]]),e[9]||(e[9]=w(" Track this habit "))])]),a("div",Z,[e[12]||(e[12]=a("label",null,"Target:",-1)),a("div",ee,[d(a("input",{type:"radio",value:"completions","onUpdate:modelValue":e[3]||(e[3]=o=>t.value.targetType=o),disabled:!t.value.isTracked},null,8,te),[[$,t.value.targetType]]),e[10]||(e[10]=a("label",null," Number of Completions ",-1)),d(a("input",{type:"radio",value:"duration","onUpdate:modelValue":e[4]||(e[4]=o=>t.value.targetType=o)},null,512),[[$,t.value.targetType]]),e[11]||(e[11]=a("label",null," Duration (Seconds) ",-1))]),t.value.targetType==="completions"?d((i(),s("input",{key:0,type:"number","onUpdate:modelValue":e[5]||(e[5]=o=>t.value.targetValue=o),placeholder:"Enter number of completions"},null,512)),[[_,t.value.targetValue]]):T("",!0),t.value.targetType==="duration"?d((i(),s("input",{key:1,type:"number","onUpdate:modelValue":e[6]||(e[6]=o=>t.value.targetValue=o),placeholder:"Enter duration in seconds"},null,512)),[[_,t.value.targetValue]]):T("",!0)])]),a("button",{class:"submit-button",onClick:v},"Create Habit")])):T("",!0)]))}}),oe=z(ae,[["__scopeId","data-v-33fe82d7"]]),le={class:"habit-tracker"},ne={class:"habits"},ie={class:"date-heading weekday"},se={class:"habit-info"},re={class:"habit-icon"},ge=U({__name:"index",setup(E){const f=W(),c=Object.fromEntries(Object.entries(f.habits.value).filter(([e,o])=>o.isTracked)),t=new Date,p=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],y=q();function v(e,o){const r=new Date(e);return r.setDate(r.getDate()-o),r}const g=h(null);function V(){g.value?g.value.openModal():console.error("CreateHabitModal is not available yet.")}const b=e=>{f.addHabit(e.icon,e.title,e.targetDurationSec,e.targetCompletions,e.isTracked)};function m(e,o){const r=c[e].targetDurationSec?"duration":"completions",k=v(t,o).toISOString().split("T")[0],l=r==="duration"?c[e].targetDurationSec:c[e].targetCompletions;let n=0;if(r==="duration"?n=Object.values(y.stats.value.habitLog).filter(u=>u.habitId===e&&u.date===k).reduce((u,B)=>u+B.durationSec,0):n=Object.values(y.stats.value.habitLog).filter(u=>u.habitId===e&&u.date===k).length,n===0)return{background:"#ccc"};const C=Math.min(n/l*100,100),N=Math.round(255*C/100),j=`rgb(${255-N}, 255, ${255-N})`,F=n>=l?"0 0 10px 2px rgba(0, 255, 0, 0.5)":"none",O=n>=l?"none":"1px solid #ddd";return{background:j,boxShadow:F,border:O}}return(e,o)=>{const r=A,k=I;return i(),s(M,null,[a("div",le,[a("div",{class:"header"},[o[1]||(o[1]=a("h1",null,"Habits",-1)),a("div",{class:"actions"},[a("button",{class:"create",onClick:V},"+"),o[0]||(o[0]=a("button",{class:"filter"},"☰",-1))])]),a("div",ne,[o[3]||(o[3]=a("div",{class:"habit-info"},null,-1)),(i(!0),s(M,null,S(Array.from({length:6},(l,n)=>n),l=>(i(),s("div",{class:"date-heading",key:l},[w(x(v(D(t),l).getDate()),1),o[2]||(o[2]=a("br",null,null,-1)),a("span",ie,x(p[v(D(t),l).getDay()]),1)]))),128))]),(i(!0),s(M,null,S(D(c),l=>(i(),s("div",{class:"habits",key:l.id},[a("div",se,[a("div",re,x(l.icon),1),H(r,{to:{name:"habits-id",params:{id:l.id}},class:"habit-name"},{default:J(()=>[w(x(l.title),1)]),_:2},1032,["to"])]),(i(!0),s(M,null,S(Array.from({length:6},(n,C)=>C),n=>(i(),s("div",{class:"day-entry",style:P(m(l.id,n)),key:n},null,4))),128))]))),128))]),H(oe,{ref_key:"createHabitModal",ref:g,onSelectionMade:b},null,512),H(k)],64)}}});export{ge as default};
