(self["webpackChunkwayde"]=self["webpackChunkwayde"]||[]).push([[812],{4812:(e,l,a)=>{"use strict";a.r(l),a.d(l,{default:()=>j});var n=a(3673),t=a(8880),o=a(2323),i=a(7245),s=a.n(i),u=a(7598),r=a.n(u);const d=(0,n.HX)("data-v-5b991835");(0,n.dD)("data-v-5b991835");const m={class:"admin"},c={class:"admin-left"},p=(0,n.Wm)("img",{style:{width:"200px"},src:s(),alt:""},null,-1),g=(0,n.Wm)("div",{class:"text-h6"},"Admin Log in",-1),v={class:"q-py-md"},f=(0,n.Wm)("div",{class:"admin-right"},[(0,n.Wm)("img",{src:r(),alt:""})],-1);(0,n.Cn)();const w=d(((e,l,a,i,s,u)=>{const r=(0,n.up)("q-item-section"),w=(0,n.up)("q-item"),y=(0,n.up)("q-card-section"),W=(0,n.up)("q-input"),b=(0,n.up)("q-icon"),q=(0,n.up)("q-btn"),h=(0,n.up)("q-banner"),_=(0,n.up)("q-toggle"),Q=(0,n.up)("q-card"),Z=(0,n.up)("q-form");return(0,n.wg)(),(0,n.j4)("div",m,[(0,n.Wm)("div",c,[(0,n.Wm)(Z,{onSubmit:(0,t.iM)(i.onSubmit,["prevent"]),onReset:i.onReset,class:"my-form q-gutter-md q-"},{default:d((()=>[(0,n.Wm)(Q,{class:"my-card q-pa-md"},{default:d((()=>[(0,n.Wm)(w,{class:"qitem"},{default:d((()=>[(0,n.Wm)(r,{avatar:""},{default:d((()=>[p])),_:1}),(0,n.Wm)(r)])),_:1}),(0,n.Wm)(y,null,{default:d((()=>[g])),_:1}),(0,n.Wm)(y,null,{default:d((()=>[(0,n.Wm)(W,{outlined:"",modelValue:i.email,"onUpdate:modelValue":l[1]||(l[1]=e=>i.email=e),type:"email",label:"Email",hint:"Enter your email",required:""},null,8,["modelValue"]),(0,n.Wm)(W,{outlined:"",modelValue:i.password,"onUpdate:modelValue":l[3]||(l[3]=e=>i.password=e),type:i.isPwd?"password":"text",label:"Password",hint:"Enter your password",required:""},{append:d((()=>[(0,n.Wm)(b,{name:i.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:l[2]||(l[2]=e=>i.isPwd=!i.isPwd)},null,8,["name"])])),_:1},8,["modelValue","type"])])),_:1}),i.error?((0,n.wg)(),(0,n.j4)(y,{key:0},{default:d((()=>[(0,n.Wm)(h,{dense:"","inline-actions":"",class:"text-white bg-red"},{action:d((()=>[(0,n.Wm)(q,{onClick:i.closeBanner,round:"",icon:"fas fa-times",flat:"",color:"white"},null,8,["onClick"])])),default:d((()=>[(0,n.Uk)((0,o.zw)(i.error)+" ",1)])),_:1})])),_:1})):(0,n.kq)("",!0),(0,n.Wm)(y,null,{default:d((()=>[(0,n.Wm)(_,{modelValue:i.accept,"onUpdate:modelValue":l[4]||(l[4]=e=>i.accept=e),label:"I accept the license and terms"},null,8,["modelValue"]),(0,n.Wm)("div",v,[(0,n.Wm)(q,{loading:i.loading,label:"Log in",type:"submit",color:"primary"},null,8,["loading"]),(0,n.Wm)(q,{label:"Reset",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])])),_:1})])),_:1})])),_:1},8,["onSubmit","onReset"])]),f])}));var y=a(8825),W=a(1959),b=a(6940);const q=(0,W.iH)(null),h=(0,W.iH)(null),_=async(e,l)=>{q.value=null,h.value=!0;try{const a=await b.Q.signInWithEmailAndPassword(e,l);return q.value=null,h.value=!1,a}catch(a){q.value=a.message,h.value=!1}},Q=()=>(h.value=!1,{login:_,error:q,loading:h}),Z=Q;var k=a(9582);const C={setup(){const{login:e,error:l,loading:a}=Z(),n=(0,W.iH)(null),t=(0,W.iH)(null),o=(0,W.iH)(!0),i=(0,W.iH)(!1),s=(0,y.Z)(),u=(0,k.tv)(),r=async()=>{await e(n.value,t.value);l.value||(console.log("User logged in"),s.notify({color:"green-4",textColor:"white",icon:"face",message:"Logged in"}),n.value=null,t.value=null,i.value=!1,u.push({name:"AdminHome"}))},d=()=>{!0!==i.value?(console.log("You need to accept the license and terms first"),s.notify({color:"red-5",textColor:"white",icon:"warning",message:"You need to accept the license and terms first"})):r()},m=()=>{n.value=null,t.value=null,i.value=!1},c=()=>{l.value=null};return{email:n,password:t,isPwd:o,accept:i,onSubmit:d,onReset:m,error:l,closeBanner:c,loading:a}}};var V=a(5269),x=a(151),H=a(3414),I=a(2035),P=a(2165),S=a(5589),R=a(9808),U=a(4554),B=a(5607),E=a(8886),L=a(7518),A=a.n(L);C.render=w,C.__scopeId="data-v-5b991835";const j=C;A()(C,"components",{QForm:V.Z,QCard:x.Z,QItem:H.Z,QItemSection:I.Z,QBtn:P.Z,QCardSection:S.Z,QInput:R.Z,QIcon:U.Z,QBanner:B.Z,QToggle:E.Z})},7245:(e,l,a)=>{e.exports=a.p+"img/WayedNavIco.aeb239ef.png"},7598:(e,l,a)=>{e.exports=a.p+"img/adminLogin.42444f7d.svg"}}]);