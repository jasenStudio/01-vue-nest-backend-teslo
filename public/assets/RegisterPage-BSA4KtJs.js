import{d as w,j as g,X as x,e as r,G as y,k as v,c as k,o as N,a as o,U as n,ae as u,ag as R,h as C,l as I,m as V,F as S}from"./index-LbSba1Yl.js";const T={class:"mb-4"},U={class:"mb-4"},B={class:"mb-4"},F={class:"mt-6 text-blue-500 text-center"},M=w({__name:"RegisterPage",setup(E){const p=g(),b=x(),d=r(null),i=r(null),m=r(null),t=y({fullName:"",email:"",password:""}),c=async()=>{var l,s,f;if(t.email==="")return(l=d.value)==null?void 0:l.focus();if(t.password.length<6||t.password==="")return(s=m.value)==null?void 0:s.focus();if(t.fullName==="")return(f=i.value)==null?void 0:f.focus();console.log(t);const{ok:a,message:e}=await p.register(t.fullName,t.email,t.password);console.log({ok:a}),!a&&b.error("Error al registaar usuario",{timeout:2e3})};return(a,e)=>{const l=v("RouterLink");return N(),k(S,null,[e[9]||(e[9]=o("h1",{class:"text-2xl font-semibold mb-4"},"Nueva cuenta",-1)),o("form",{action:"#",method:"POST",onSubmit:R(c,["prevent"])},[o("div",T,[e[3]||(e[3]=o("label",{for:"name",class:"block text-gray-600"},"Nombre",-1)),n(o("input",{type:"text",id:"name",name:"name","onUpdate:modelValue":e[0]||(e[0]=s=>t.fullName=s),ref_key:"fullNameInputRef",ref:i,class:"w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",autocomplete:"off"},null,512),[[u,t.fullName]])]),o("div",U,[e[4]||(e[4]=o("label",{for:"email",class:"block text-gray-600"},"Correo electronico",-1)),n(o("input",{type:"email",id:"email",name:"email","onUpdate:modelValue":e[1]||(e[1]=s=>t.email=s),ref_key:"emailInputRef",ref:d,class:"w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",autocomplete:"off"},null,512),[[u,t.email]])]),o("div",B,[e[5]||(e[5]=o("label",{for:"password",class:"block text-gray-600"},"Contraseña",-1)),n(o("input",{type:"password",id:"password",name:"password","onUpdate:modelValue":e[2]||(e[2]=s=>t.password=s),ref_key:"passwordInputRef",ref:m,class:"w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",autocomplete:"off"},null,512),[[u,t.password]])]),e[6]||(e[6]=o("div",{class:"mb-6 text-blue-500"},[o("a",{href:"#",class:"hover:underline"},"¿Olvidaste de tu contraseña?")],-1)),e[7]||(e[7]=o("button",{type:"submit",class:"bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"}," Crear cuenta ",-1))],32),o("div",F,[C(l,{to:{name:"login"},class:"hover:underline"},{default:I(()=>e[8]||(e[8]=[V("Ya tienes cuentas")])),_:1})])],64)}}});export{M as default};
