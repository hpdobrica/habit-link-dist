import{_ as Oe}from"./CklaVo3d.js";import{a as Te}from"./C0WID0jv.js";import{m as _e,r as M,B as q,q as Be,g as Pe,H as Ue,o as Y,D as De,w as se,y as Ye,K as Fe,aI as xe,L as $e,s as ge,S as Ve,U as Q,e as we,J as f,c as Z,a as w,b as Ke,t as U,V as W,d as We}from"./BDOKz9Zs.js";import{H as Le}from"./BkI_4SxB.js";import{u as je}from"./Dgh6VozG.js";import{u as qe,a as ze}from"./DPJWLPsV.js";import"./Apea5fV0.js";const Ge=window.setInterval;var ae=1,z=2,G=4,J=8,X=16,de=32,ie=64,re=128,ve=256,me=512,he=1024,Ne=re|ie|X|J|G|z,S=1e3,y=60,L=60,I=24,pe=I*L*y*S,g=7,A=12,R=10,k=10,H=10,j=Math.ceil,_=Math.floor;function Me(e,a){var n=e.getTime();return e.setMonth(e.getMonth()+a),Math.round((e.getTime()-n)/pe)}function ce(e){var a=e.getTime(),n=new Date(a);return n.setMonth(e.getMonth()+1),Math.round((n.getTime()-a)/pe)}function Je(e){var a=e.getTime(),n=new Date(a);return n.setFullYear(e.getFullYear()+1),Math.round((n.getTime()-a)/pe)}function fe(e,a){if(a=a instanceof Date||a!==null&&isFinite(a)?new Date(+a):new Date,!e)return a;var n=+e.value||0;return n?(a.setTime(a.getTime()+n),a):(n=+e.milliseconds||0,n&&a.setMilliseconds(a.getMilliseconds()+n),n=+e.seconds||0,n&&a.setSeconds(a.getSeconds()+n),n=+e.minutes||0,n&&a.setMinutes(a.getMinutes()+n),n=+e.hours||0,n&&a.setHours(a.getHours()+n),n=+e.weeks||0,n&&(n*=g),n+=+e.days||0,n&&a.setDate(a.getDate()+n),n=+e.months||0,n&&a.setMonth(a.getMonth()+n),n=+e.millennia||0,n&&(n*=H),n+=+e.centuries||0,n&&(n*=k),n+=+e.decades||0,n&&(n*=R),n+=+e.years||0,n&&a.setFullYear(a.getFullYear()+n),a)}var be=0,Xe=1,Qe=2,Ze=3,en=4,nn=5,an=6,rn=7,on=8,un=9,Ce=10,ee,ne,oe,ue,te,E,Se;function tn(e,a){return Se(e)+(e===1?ee[a]:ne[a])}var Ee;function F(){}F.prototype.toString=function(e){var a=Ee(this),n=a.length;if(!n)return e?""+e:te;if(n===1)return a[0];var r=oe+a.pop();return a.join(ue)+r};F.prototype.toHTML=function(e,a){e=e||"span";var n=Ee(this),r=n.length;if(!r)return a=a||te,a&&"<"+e+">"+a+"</"+e+">";for(var i=0;i<r;i++)n[i]="<"+e+">"+n[i]+"</"+e+">";if(r===1)return n[0];var o=oe+n.pop();return n.join(ue)+o};F.prototype.addTo=function(e){return fe(this,e)};Ee=function(e){var a=[],n=e.millennia;return n&&a.push(E(n,Ce)),n=e.centuries,n&&a.push(E(n,un)),n=e.decades,n&&a.push(E(n,on)),n=e.years,n&&a.push(E(n,rn)),n=e.months,n&&a.push(E(n,an)),n=e.weeks,n&&a.push(E(n,nn)),n=e.days,n&&a.push(E(n,en)),n=e.hours,n&&a.push(E(n,Ze)),n=e.minutes,n&&a.push(E(n,Qe)),n=e.seconds,n&&a.push(E(n,Xe)),n=e.milliseconds,n&&a.push(E(n,be)),a};function ln(e,a){switch(a){case"seconds":if(e.seconds!==y||isNaN(e.minutes))return;e.minutes++,e.seconds=0;case"minutes":if(e.minutes!==L||isNaN(e.hours))return;e.hours++,e.minutes=0;case"hours":if(e.hours!==I||isNaN(e.days))return;e.days++,e.hours=0;case"days":if(e.days!==g||isNaN(e.weeks))return;e.weeks++,e.days=0;case"weeks":if(e.weeks!==ce(e.refMonth)/g||isNaN(e.months))return;e.months++,e.weeks=0;case"months":if(e.months!==A||isNaN(e.years))return;e.years++,e.months=0;case"years":if(e.years!==R||isNaN(e.decades))return;e.decades++,e.years=0;case"decades":if(e.decades!==k||isNaN(e.centuries))return;e.centuries++,e.decades=0;case"centuries":if(e.centuries!==H||isNaN(e.millennia))return;e.millennia++,e.centuries=0}}function T(e,a,n,r,i,o){return e[n]>=0&&(a+=e[n],delete e[n]),a/=i,a+1<=1?0:e[r]>=0?(e[r]=+(e[r]+a).toFixed(o),ln(e,r),0):a}function sn(e,a){var n=T(e,0,"milliseconds","seconds",S,a);if(n&&(n=T(e,n,"seconds","minutes",y,a),!!n&&(n=T(e,n,"minutes","hours",L,a),!!n&&(n=T(e,n,"hours","days",I,a),!!n&&(n=T(e,n,"days","weeks",g,a),!!n&&(n=T(e,n,"weeks","months",ce(e.refMonth)/g,a),!!n&&(n=T(e,n,"months","years",Je(e.refMonth)/ce(e.refMonth),a),!!n&&(n=T(e,n,"years","decades",R,a),!!n&&(n=T(e,n,"decades","centuries",k,a),!!n&&(n=T(e,n,"centuries","millennia",H,a),n))))))))))throw new Error("Fractional unit overflow")}function cn(e){var a;for(e.milliseconds<0?(a=j(-e.milliseconds/S),e.seconds-=a,e.milliseconds+=a*S):e.milliseconds>=S&&(e.seconds+=_(e.milliseconds/S),e.milliseconds%=S),e.seconds<0?(a=j(-e.seconds/y),e.minutes-=a,e.seconds+=a*y):e.seconds>=y&&(e.minutes+=_(e.seconds/y),e.seconds%=y),e.minutes<0?(a=j(-e.minutes/L),e.hours-=a,e.minutes+=a*L):e.minutes>=L&&(e.hours+=_(e.minutes/L),e.minutes%=L),e.hours<0?(a=j(-e.hours/I),e.days-=a,e.hours+=a*I):e.hours>=I&&(e.days+=_(e.hours/I),e.hours%=I);e.days<0;)e.months--,e.days+=Me(e.refMonth,1);e.days>=g&&(e.weeks+=_(e.days/g),e.days%=g),e.months<0?(a=j(-e.months/A),e.years-=a,e.months+=a*A):e.months>=A&&(e.years+=_(e.months/A),e.months%=A),e.years>=R&&(e.decades+=_(e.years/R),e.years%=R,e.decades>=k&&(e.centuries+=_(e.decades/k),e.decades%=k,e.centuries>=H&&(e.millennia+=_(e.centuries/H),e.centuries%=H)))}function fn(e,a,n,r){var i=0;!(a&he)||i>=n?(e.centuries+=e.millennia*H,delete e.millennia):e.millennia&&i++,!(a&me)||i>=n?(e.decades+=e.centuries*k,delete e.centuries):e.centuries&&i++,!(a&ve)||i>=n?(e.years+=e.decades*R,delete e.decades):e.decades&&i++,!(a&re)||i>=n?(e.months+=e.years*A,delete e.years):e.years&&i++,!(a&ie)||i>=n?(e.months&&(e.days+=Me(e.refMonth,e.months)),delete e.months,e.days>=g&&(e.weeks+=_(e.days/g),e.days%=g)):e.months&&i++,!(a&de)||i>=n?(e.days+=e.weeks*g,delete e.weeks):e.weeks&&i++,!(a&X)||i>=n?(e.hours+=e.days*I,delete e.days):e.days&&i++,!(a&J)||i>=n?(e.minutes+=e.hours*L,delete e.hours):e.hours&&i++,!(a&G)||i>=n?(e.seconds+=e.minutes*y,delete e.minutes):e.minutes&&i++,!(a&z)||i>=n?(e.milliseconds+=e.seconds*S,delete e.seconds):e.seconds&&i++,(!(a&ae)||i>=n)&&sn(e,r)}function Ie(e,a,n,r,i,o){var c=new Date;if(e.start=a=a||c,e.end=n=n||c,e.units=r,e.value=n.getTime()-a.getTime(),e.value<0){var u=n;n=a,a=u}e.refMonth=new Date(a.getFullYear(),a.getMonth(),15,12,0,0);try{e.millennia=0,e.centuries=0,e.decades=0,e.years=n.getFullYear()-a.getFullYear(),e.months=n.getMonth()-a.getMonth(),e.weeks=0,e.days=n.getDate()-a.getDate(),e.hours=n.getHours()-a.getHours(),e.minutes=n.getMinutes()-a.getMinutes(),e.seconds=n.getSeconds()-a.getSeconds(),e.milliseconds=n.getMilliseconds()-a.getMilliseconds(),cn(e),fn(e,r,i,o)}finally{delete e.refMonth}return e}function dn(e){return e&ae?S/30:e&z?S:e&G?S*y:e&J?S*y*L:e&X?S*y*L*I:S*y*L*I*g}function l(e,a,n,r,i){var o;n=+n||Ne,r=r>0?r:NaN,i=i>0?i<20?Math.round(i):20:0;var c=null;typeof e=="function"?(o=e,e=null):e instanceof Date||(e!==null&&isFinite(e)?e=new Date(+e):(typeof c=="object"&&(c=e),e=null));var u=null;if(typeof a=="function"?(o=a,a=null):a instanceof Date||(a!==null&&isFinite(a)?a=new Date(+a):(typeof a=="object"&&(u=a),a=null)),c&&(e=fe(c,a)),u&&(a=fe(u,e)),!e&&!a)return new F;if(!o)return Ie(new F,e,a,n,r,i);var t=dn(n),s,v=function(){o(Ie(new F,e,a,n,r,i),s)};return v(),s=Ge(v,t)}l.MILLISECONDS=ae;l.SECONDS=z;l.MINUTES=G;l.HOURS=J;l.DAYS=X;l.WEEKS=de;l.MONTHS=ie;l.YEARS=re;l.DECADES=ve;l.CENTURIES=me;l.MILLENNIA=he;l.DEFAULTS=Ne;l.ALL=he|me|ve|re|ie|de|X|J|G|z|ae;var vn=l.setFormat=function(e){if(e){if("singular"in e||"plural"in e){var a=e.singular||[];a.split&&(a=a.split("|"));var n=e.plural||[];n.split&&(n=n.split("|"));for(var r=be;r<=Ce;r++)ee[r]=a[r]||ee[r],ne[r]=n[r]||ne[r]}typeof e.last=="string"&&(oe=e.last),typeof e.delim=="string"&&(ue=e.delim),typeof e.empty=="string"&&(te=e.empty),typeof e.formatNumber=="function"&&(Se=e.formatNumber),typeof e.formatter=="function"&&(E=e.formatter)}},Ae=l.resetFormat=function(){ee=" millisecond| second| minute| hour| day| week| month| year| decade| century| millennium".split("|"),ne=" milliseconds| seconds| minutes| hours| days| weeks| months| years| decades| centuries| millennia".split("|"),oe=" and ",ue=", ",te="",Se=function(e){return e},E=tn};l.setLabels=function(e,a,n,r,i,o,c){vn({singular:e,plural:a,last:n,delim:r,empty:i,formatNumber:o,formatter:c})};l.resetLabels=Ae;Ae();const mn=()=>Te("timer-cache",()=>({})),hn=_e({__name:"countdown",props:{tag:{type:String,default:"div"},transform:{type:Function,default:e=>e},date:{type:Date,default:null,validator:e=>e.getTime()>=0},timerCacheId:{type:String,default:null}},setup(e,{expose:a}){const n=mn(),r=e;let i=null;const o=M({minutes:0,seconds:0}),c=M(Date.now()),u=M(0),t=M(null),s=M(null),v=M(null);function b(){v.value!==null&&(i=l(D=>{o.value=D},new Date(v.value),l.MINUTES|l.SECONDS,2))}function x(){t.value||(t.value=Date.now(),i!==null&&(clearInterval(i),i=null),v.value!==null&&(s.value=v.value-Date.now()))}function p(){t.value&&(u.value+=Date.now()-t.value,t.value=null,s.value!==null&&(v.value=Date.now()+s.value,s.value=null,b()))}function $(){t.value?p():x()}const V=q(()=>t.value?t.value-c.value-u.value:Date.now()-c.value-u.value),m=q(()=>t.value?u.value+(Date.now()-t.value):u.value),O=q(()=>r.transform({timespan:o.value,activeTime:V.value,pausedTime:m.value,pause:x,resume:p,togglePause:$}));function ye(){const D=Date.now();let B,K;return t.value?(B=t.value-c.value-u.value,K=u.value+(D-t.value)):(B=D-c.value-u.value,K=u.value),{activeTime:B,pausedTime:K}}return a({togglePause:$,pause:x,resume:p,getTimerValues:ye}),Be(()=>{n.value.timerCacheId!==r.timerCacheId&&(n.value={timerCacheId:r.timerCacheId,startTime:void 0}),n.value.startTime?(c.value=n.value.startTime,u.value=n.value.pausedTime||u.value,t.value=n.value.pauseStart||t.value,s.value=n.value.remainingMs||s.value,v.value=n.value.endTime||v.value,t.value&&s.value!==null?o.value=l(new Date(0),new Date(s.value),l.MINUTES|l.SECONDS,2):b()):(c.value=Date.now(),r.date&&(v.value=r.date.getTime()),b())}),Pe([c,u,t,s,v],()=>{if(n.value.timerCacheId!==r.timerCacheId){ge(()=>{n.value={timerCacheId:r.timerCacheId}});return}ge(()=>{n.value={timerCacheId:r.timerCacheId,startTime:c.value,pausedTime:u.value,pauseStart:t.value||void 0,remainingMs:s.value||void 0,endTime:v.value||void 0}})},{deep:!0}),Ue(()=>{i!==null&&clearInterval(i)}),(D,B)=>(Y(),De($e(e.tag),null,{default:se(()=>[Ye(D.$slots,"default",Fe(xe(O.value)))]),_:3}))}}),pn=()=>Te("routine-run-cache",()=>({})),Sn={key:0},En={key:1,class:"page"},yn={class:"top-bar"},gn={class:"routine-title"},wn={class:"timer-section"},Ln={class:"timer-icon"},In={class:"countdown-timer"},Tn={class:"total-duration"},_n={class:"action-buttons"},Dn={key:0,class:"next-habit-title"},Nn={key:1,class:"next-habit-title"},On=_e({__name:"run",async setup(e){let a,n;const r=Ve(),i=r.params.id;if(typeof i!="string")throw[a,n]=Q(()=>W("/")),await a,n(),new Error("wrong routine id");const o=r.params.routineLogId;if(typeof o!="string")throw[a,n]=Q(()=>W("/")),await a,n(),new Error("wrong routine log id");const c=je(),u=qe(),t=ze(),s=pn(),v=c.routines,b=c.routinesLoading,x=u.habitsLoading,p=q(()=>v.value[i]??null);we(()=>{!b.value&&!v.value[i]&&(alert("routine not found, about to navigate to home, if this is a mistake try going back and report the issue!"),W("/"))});const $=(h=new Date)=>{p.value.habitInstances[m.value]!=null&&(O.value=new Date(h),O.value.setSeconds(O.value.getSeconds()+p.value.habitInstances[m.value].durationSec),s.value.RoutineLogId=o,s.value.CurrentIndex=m.value)},V=M(null),m=M(0);let O=M(new Date);if(we(()=>{!b.value&&p.value&&(s.value.RoutineLogId!=null&&s.value.RoutineLogId!=o&&(s.value={}),s.value.CurrentIndex!=null&&(m.value=s.value.CurrentIndex),$())}),!([a,n]=Q(()=>t.getRoutineLog(o)),a=await a,n(),a))throw[a,n]=Q(()=>W("/routines/"+i)),await a,n(),new Error("routine log not found");const D=async h=>{const d=V.value;if(d==null)return;const P=d.getTimerValues();t.createHabitLog(p.value.habitInstances[m.value].habitId,h,P.activeTime/1e3,o),await B()||(m.value++,$())},B=async()=>p.value.habitInstances.length<=m.value+1?(s.value={},await W(`/routines/${i}/logs/${o}/complete`),!0):!1,K=()=>{const h=V.value;h!=null&&h.togglePause()},Re=q(()=>!(p.value.habitInstances.length<=m.value+1)),ke=h=>{const d={};let P=!1;h.timespan.value!=null&&(P=h.timespan.value<0);const N=h.timespan.minutes||0,C=h.timespan.seconds||0,le=P?`+${N<10?`0${N}`:N}`:N<10?`0${N}`:String(N),He=C<10?`0${C}`:String(C);return d.minutes=le,d.seconds=He,d};return(h,d)=>{const P=Oe,N=hn;return f(b)||f(x)?(Y(),Z("div",Sn,"Loading...")):(Y(),Z("div",En,[w("div",yn,[d[3]||(d[3]=w("div",{class:"placeholder"},null,-1)),Ke(P,{to:{name:"routines-id",params:{id:f(p).id}},class:"close-button"},{default:se(()=>d[2]||(d[2]=[We("X ")])),_:1},8,["to"])]),w("h1",gn,U(f(u).habits.value[f(p).habitInstances[f(m)].habitId].title),1),w("div",wn,[w("div",Ln,U(f(u).habits.value[f(p).habitInstances[f(m)].habitId].icon),1),(Y(),De(N,{date:f(O),transform:ke,"allow-negative":!0,key:f(m),timerCacheId:f(o)+"-"+f(m),ref_key:"countdownTimer",ref:V},{default:se(({minutes:C,seconds:le})=>[w("div",In,U(C)+":"+U(le),1)]),_:1},8,["date","timerCacheId"])),w("div",Tn,U(f(p).habitInstances[f(m)].durationSec)+"s",1)]),w("div",_n,[w("button",{class:"action-button pause-button",onClick:K},"⏸️"),w("button",{class:"action-button complete-button",onClick:d[0]||(d[0]=C=>D(("HabitStatus"in h?h.HabitStatus:f(Le)).Completed))},"✔️"),w("button",{class:"action-button skip-button",onClick:d[1]||(d[1]=C=>D(("HabitStatus"in h?h.HabitStatus:f(Le)).Skipped))},"⏭️")]),f(Re)?(Y(),Z("h3",Dn," Next habit ➡️ "+U(f(u).habits.value[f(p).habitInstances[f(m)+1].habitId].title),1)):(Y(),Z("h3",Nn,"This is the last one! 🏆")),d[4]||(d[4]=w("div",{class:"footer"}," Additional details can go here. ",-1))]))}}});export{On as default};
