var bt=e=>{throw TypeError(e)};var nt=(e,t,r)=>t.has(e)||bt("Cannot "+r);var T=(e,t,r)=>(nt(e,t,"read from private field"),r?r.call(e):t.get(e)),Ve=(e,t,r)=>t.has(e)?bt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Se=(e,t,r,n)=>(nt(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),Ae=(e,t,r)=>(nt(e,t,"access private method"),r);import{S as nr,s as sr,q as Ot,v as ir,x as or,y as B,z as lr,A as ar,B as ur,w as te,C as cr,D as dr,E as fr,p as qe,e as Y,G as lt,H as b,i as ee,I as vr,J as Vt,K as mr,L as pr,f as Ut,M as J,N as hr,O as gr,P as yr,Q as St,d as ct,c as Z,o as x,a as V,T as br,n as dt,t as Te,_ as ft,U as at,V as Rt,W as Or,X as Vr,Y as Sr,Z as Re,$ as At,k as wt,m as Ar,h as Fe,a0 as we,F as $e,r as st,a1 as wr}from"./index-LbSba1Yl.js";import{u as Er,g as jr,a as Ir}from"./get-product-image.actions-DM2IMZp9.js";var ae,ue,W,se,ie,Le,ut,Mt,Cr=(Mt=class extends nr{constructor(t,r){super();Ve(this,ie);Ve(this,ae);Ve(this,ue);Ve(this,W);Ve(this,se);Se(this,ae,t),this.setOptions(r),this.bindMethods(),Ae(this,ie,Le).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var n;const r=this.options;this.options=T(this,ae).defaultMutationOptions(t),sr(this.options,r)||T(this,ae).getMutationCache().notify({type:"observerOptionsUpdated",mutation:T(this,W),observer:this}),r!=null&&r.mutationKey&&this.options.mutationKey&&Ot(r.mutationKey)!==Ot(this.options.mutationKey)?this.reset():((n=T(this,W))==null?void 0:n.state.status)==="pending"&&T(this,W).setOptions(this.options)}onUnsubscribe(){var t;this.hasListeners()||(t=T(this,W))==null||t.removeObserver(this)}onMutationUpdate(t){Ae(this,ie,Le).call(this),Ae(this,ie,ut).call(this,t)}getCurrentResult(){return T(this,ue)}reset(){var t;(t=T(this,W))==null||t.removeObserver(this),Se(this,W,void 0),Ae(this,ie,Le).call(this),Ae(this,ie,ut).call(this)}mutate(t,r){var n;return Se(this,se,r),(n=T(this,W))==null||n.removeObserver(this),Se(this,W,T(this,ae).getMutationCache().build(T(this,ae),this.options)),T(this,W).addObserver(this),T(this,W).execute(t)}},ae=new WeakMap,ue=new WeakMap,W=new WeakMap,se=new WeakMap,ie=new WeakSet,Le=function(){var r;const t=((r=T(this,W))==null?void 0:r.state)??ir();Se(this,ue,{...t,isPending:t.status==="pending",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset})},ut=function(t){or.batch(()=>{var r,n,o,l,v,p,u,d;if(T(this,se)&&this.hasListeners()){const f=T(this,ue).variables,A=T(this,ue).context;(t==null?void 0:t.type)==="success"?((n=(r=T(this,se)).onSuccess)==null||n.call(r,t.data,f,A),(l=(o=T(this,se)).onSettled)==null||l.call(o,t.data,null,f,A)):(t==null?void 0:t.type)==="error"&&((p=(v=T(this,se)).onError)==null||p.call(v,t.error,f,A),(d=(u=T(this,se)).onSettled)==null||d.call(u,void 0,t.error,f,A))}this.listeners.forEach(f=>{f(T(this,ue))})})},Mt);function _r(e,t){const r=Er(),n=B(()=>r.defaultMutationOptions(lr(e))),o=new Cr(r,n.value),l=ar(o.getCurrentResult()),v=o.subscribe(f=>{ur(l,f)}),p=(f,A)=>{o.mutate(f,A).catch(()=>{})};te(n,()=>{o.setOptions(n.value)}),cr(()=>{v()});const d=dr(l);return te(()=>l.error,f=>{if(f&&fr(n.value.throwOnError,[f]))throw f}),{...d,mutate:p,mutateAsync:l.mutate,reset:l.reset}}const Pr=async e=>{if(e==="create")return{id:"",title:"",price:0,description:"",slug:"",stock:0,sizes:[],gender:"",tags:[],images:[],user:{}};try{const{data:t}=await qe.get(`/products/${e}`);return console.log({data:t}),{...t,images:t.images.map(jr)}}catch(t){throw console.log(t),new Error("Product not found")}},Fr=async e=>{const t=e.id,r=await Mr(e.images??[]);return e.images=r,e=Nr(e),t&&t!==""?await Tr(t,e):await kr(e)},Nr=e=>{var r;const t=((r=e.images)==null?void 0:r.map(n=>n.startsWith("http")?n.split("/").pop()?n:"":n))??[];return delete e.id,delete e.user,e.images=t,e},Tr=async(e,t)=>{try{const{data:r}=await qe.patch(`/products/${e}`,t);return r}catch(r){throw console.log(r),new Error("Error updating product")}},kr=async e=>{try{const{data:t}=await qe.post("/products",e);return t}catch(t){throw console.log(t),new Error("Error creating product")}},Mr=async e=>{const t=e.filter(l=>l instanceof File),r=e.filter(l=>typeof l=="string"),n=t.map(async l=>{try{const v=new FormData;v.append("file",l);const{data:p}=await qe.post("/files/product",v);return p.secureUrl}catch(v){throw console.log(v),new Error("Error uploading image")}}),o=await Promise.all(n);return[...r,...o]};/**
  * vee-validate v4.15.0
  * (c) 2024 Abdelrahman Awad
  * @license MIT
  */function Q(e){return typeof e=="function"}function Ee(e){return e==null}const je=e=>e!==null&&!!e&&typeof e=="object"&&!Array.isArray(e);function vt(e){return Number(e)>=0}function Ur(e){return typeof e=="object"&&e!==null}function Rr(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function Et(e){if(!Ur(e)||Rr(e)!=="[object Object]")return!1;if(Object.getPrototypeOf(e)===null)return!0;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function ke(e,t){return Object.keys(t).forEach(r=>{if(Et(t[r])&&Et(e[r])){e[r]||(e[r]={}),ke(e[r],t[r]);return}e[r]=t[r]}),e}function ze(e){const t=e.split(".");if(!t.length)return"";let r=String(t[0]);for(let n=1;n<t.length;n++){if(vt(t[n])){r+=`[${t[n]}]`;continue}r+=`.${t[n]}`}return r}const $r={};function zr(e){return $r[e]}function jt(e,t,r){typeof r.value=="object"&&(r.value=E(r.value)),!r.enumerable||r.get||r.set||!r.configurable||!r.writable||t==="__proto__"?Object.defineProperty(e,t,r):e[t]=r.value}function E(e){if(typeof e!="object")return e;var t=0,r,n,o,l=Object.prototype.toString.call(e);if(l==="[object Object]"?o=Object.create(e.__proto__||null):l==="[object Array]"?o=Array(e.length):l==="[object Set]"?(o=new Set,e.forEach(function(v){o.add(E(v))})):l==="[object Map]"?(o=new Map,e.forEach(function(v,p){o.set(E(p),E(v))})):l==="[object Date]"?o=new Date(+e):l==="[object RegExp]"?o=new RegExp(e.source,e.flags):l==="[object DataView]"?o=new e.constructor(E(e.buffer)):l==="[object ArrayBuffer]"?o=e.slice(0):l.slice(-6)==="Array]"&&(o=new e.constructor(e)),o){for(n=Object.getOwnPropertySymbols(e);t<n.length;t++)jt(o,n[t],Object.getOwnPropertyDescriptor(e,n[t]));for(t=0,n=Object.getOwnPropertyNames(e);t<n.length;t++)Object.hasOwnProperty.call(o,r=n[t])&&o[r]===e[r]||jt(o,r,Object.getOwnPropertyDescriptor(e,r))}return o||e}const $t=Symbol("vee-validate-form"),Dr=Symbol("vee-validate-form-context"),Br=typeof window<"u";function Lr(e){return Q(e)&&!!e.__locatorRef}function ce(e){return!!e&&Q(e.parse)&&e.__type==="VVTypedSchema"}function zt(e){return!!e&&Q(e.validate)}function qr(e){return e==="checkbox"||e==="radio"}function Kr(e){return je(e)||Array.isArray(e)}function Wr(e){return Array.isArray(e)?e.length===0:je(e)&&Object.keys(e).length===0}function Ke(e){return/^\[.+\]$/i.test(e)}function Gr(e){return Dt(e)&&e.multiple}function Dt(e){return e.tagName==="SELECT"}function Hr(e){return Bt(e)&&e.target&&"submit"in e.target}function Bt(e){return e?!!(typeof Event<"u"&&Q(Event)&&e instanceof Event||e&&e.srcElement):!1}function de(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,n,o;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(n=r;n--!==0;)if(!de(e[n],t[n]))return!1;return!0}if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(n of e.entries())if(!t.has(n[0]))return!1;for(n of e.entries())if(!de(n[1],t.get(n[0])))return!1;return!0}if(Ct(e)&&Ct(t))return!(e.size!==t.size||e.name!==t.name||e.lastModified!==t.lastModified||e.type!==t.type);if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(n of e.entries())if(!t.has(n[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(r=e.length,r!=t.length)return!1;for(n=r;n--!==0;)if(e[n]!==t[n])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(o=Object.keys(e),r=o.length-It(e,o),r!==Object.keys(t).length-It(t,Object.keys(t)))return!1;for(n=r;n--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[n]))return!1;for(n=r;n--!==0;){var l=o[n];if(!de(e[l],t[l]))return!1}return!0}return e!==e&&t!==t}function It(e,t){let r=0;for(let o=t.length;o--!==0;){var n=t[o];e[n]===void 0&&r++}return r}function Ct(e){return Br?e instanceof File:!1}function mt(e){return Ke(e)?e.replace(/\[|\]/gi,""):e}function U(e,t,r){return e?Ke(t)?e[mt(t)]:(t||"").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((o,l)=>Kr(o)&&l in o?o[l]:r,e):r}function R(e,t,r){if(Ke(t)){e[mt(t)]=r;return}const n=t.split(/\.|\[(\d+)\]/).filter(Boolean);let o=e;for(let l=0;l<n.length;l++){if(l===n.length-1){o[n[l]]=r;return}(!(n[l]in o)||Ee(o[n[l]]))&&(o[n[l]]=vt(n[l+1])?[]:{}),o=o[n[l]]}}function it(e,t){if(Array.isArray(e)&&vt(t)){e.splice(Number(t),1);return}je(e)&&delete e[t]}function _t(e,t){if(Ke(t)){delete e[mt(t)];return}const r=t.split(/\.|\[(\d+)\]/).filter(Boolean);let n=e;for(let l=0;l<r.length;l++){if(l===r.length-1){it(n,r[l]);break}if(!(r[l]in n)||Ee(n[r[l]]))break;n=n[r[l]]}const o=r.map((l,v)=>U(e,r.slice(0,v).join(".")));for(let l=o.length-1;l>=0;l--)if(Wr(o[l])){if(l===0){it(e,r[0]);continue}it(o[l-1],r[l-1])}}function X(e){return Object.keys(e)}function Xr(e,t=void 0){const r=gr();return(r==null?void 0:r.provides[e])||yr(e,t)}function Pt(e,t=0){let r=null,n=[];return function(...o){return r&&clearTimeout(r),r=setTimeout(()=>{const l=e(...o);n.forEach(v=>v(l)),n=[]},t),new Promise(l=>n.push(l))}}function Yr(e,t){let r;return async function(...o){const l=e(...o);r=l;const v=await l;return l!==r?v:(r=void 0,t(v,o))}}function Qr({get:e,set:t}){const r=Y(E(e()));return te(e,n=>{de(n,r.value)||(r.value=E(n))},{deep:!0}),te(r,n=>{de(n,e())||t(E(n))},{deep:!0}),r}function Ft(e){return Array.isArray(e)?e:e?[e]:[]}function De(e,t){const r={};for(const n in e)t.includes(n)||(r[n]=e[n]);return r}function Jr(e){let t=null,r=[];return function(...n){const o=J(()=>{if(t!==o)return;const l=e(...n);r.forEach(v=>v(l)),r=[],t=null});return t=o,new Promise(l=>r.push(l))}}function ot(e){if(Lt(e))return e._value}function Lt(e){return"_value"in e}function Zr(e){return e.type==="number"||e.type==="range"?Number.isNaN(e.valueAsNumber)?e.value:e.valueAsNumber:e.value}function Nt(e){if(!Bt(e))return e;const t=e.target;if(qr(t.type)&&Lt(t))return ot(t);if(t.type==="file"&&t.files){const r=Array.from(t.files);return t.multiple?r:r[0]}if(Gr(t))return Array.from(t.options).filter(r=>r.selected&&!r.disabled).map(ot);if(Dt(t)){const r=Array.from(t.options).find(n=>n.selected);return r?ot(r):t.value}return Zr(t)}function xr(e){const t={};return Object.defineProperty(t,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),e?je(e)&&e._$$isNormalized?e:je(e)?Object.keys(e).reduce((r,n)=>{const o=en(e[n]);return e[n]!==!1&&(r[n]=Tt(o)),r},t):typeof e!="string"?t:e.split("|").reduce((r,n)=>{const o=tn(n);return o.name&&(r[o.name]=Tt(o.params)),r},t):t}function en(e){return e===!0?[]:Array.isArray(e)||je(e)?e:[e]}function Tt(e){const t=r=>typeof r=="string"&&r[0]==="@"?rn(r.slice(1)):r;return Array.isArray(e)?e.map(t):e instanceof RegExp?[e]:Object.keys(e).reduce((r,n)=>(r[n]=t(e[n]),r),{})}const tn=e=>{let t=[];const r=e.split(":")[0];return e.includes(":")&&(t=e.split(":").slice(1).join(":").split(",")),{name:r,params:t}};function rn(e){const t=r=>{var n;return(n=U(r,e))!==null&&n!==void 0?n:r[e]};return t.__locatorRef=e,t}const nn={generateMessage:({field:e})=>`${e} is not valid.`,bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0};let sn=Object.assign({},nn);const Ne=()=>sn;async function on(e,t,r={}){const n=r==null?void 0:r.bails,o={name:(r==null?void 0:r.name)||"{field}",rules:t,label:r==null?void 0:r.label,bails:n??!0,formData:(r==null?void 0:r.values)||{}},l=await ln(o,e);return Object.assign(Object.assign({},l),{valid:!l.errors.length})}async function ln(e,t){const r=e.rules;if(ce(r)||zt(r))return un(t,Object.assign(Object.assign({},e),{rules:r}));if(Q(r)||Array.isArray(r)){const p={field:e.label||e.name,name:e.name,label:e.label,form:e.formData,value:t},u=Array.isArray(r)?r:[r],d=u.length,f=[];for(let A=0;A<d;A++){const C=u[A],N=await C(t,p);if(!(typeof N!="string"&&!Array.isArray(N)&&N)){if(Array.isArray(N))f.push(...N);else{const G=typeof N=="string"?N:Kt(p);f.push(G)}if(e.bails)return{errors:f}}}return{errors:f}}const n=Object.assign(Object.assign({},e),{rules:xr(r)}),o=[],l=Object.keys(n.rules),v=l.length;for(let p=0;p<v;p++){const u=l[p],d=await cn(n,t,{name:u,params:n.rules[u]});if(d.error&&(o.push(d.error),e.bails))return{errors:o}}return{errors:o}}function an(e){return!!e&&e.name==="ValidationError"}function qt(e){return{__type:"VVTypedSchema",async parse(r,n){var o;try{return{output:await e.validate(r,{abortEarly:!1,context:(n==null?void 0:n.formData)||{}}),errors:[]}}catch(l){if(!an(l))throw l;if(!(!((o=l.inner)===null||o===void 0)&&o.length)&&l.errors.length)return{errors:[{path:l.path,errors:l.errors}]};const v=l.inner.reduce((p,u)=>{const d=u.path||"";return p[d]||(p[d]={errors:[],path:d}),p[d].errors.push(...u.errors),p},{});return{errors:Object.values(v)}}}}}async function un(e,t){const n=await(ce(t.rules)?t.rules:qt(t.rules)).parse(e,{formData:t.formData}),o=[];for(const l of n.errors)l.errors.length&&o.push(...l.errors);return{value:n.value,errors:o}}async function cn(e,t,r){const n=zr(r.name);if(!n)throw new Error(`No such validator '${r.name}' exists.`);const o=dn(r.params,e.formData),l={field:e.label||e.name,name:e.name,label:e.label,value:t,form:e.formData,rule:Object.assign(Object.assign({},r),{params:o})},v=await n(t,o,l);return typeof v=="string"?{error:v}:{error:v?void 0:Kt(l)}}function Kt(e){const t=Ne().generateMessage;return t?t(e):"Field is invalid"}function dn(e,t){const r=n=>Lr(n)?n(t):n;return Array.isArray(e)?e.map(r):Object.keys(e).reduce((n,o)=>(n[o]=r(e[o]),n),{})}async function fn(e,t){const n=await(ce(e)?e:qt(e)).parse(E(t),{formData:E(t)}),o={},l={};for(const v of n.errors){const p=v.errors,u=(v.path||"").replace(/\["(\d+)"\]/g,(d,f)=>`[${f}]`);o[u]={valid:!p.length,errors:p},p.length&&(l[u]=p[0])}return{valid:!n.errors.length,results:o,errors:l,values:n.value,source:"schema"}}async function vn(e,t,r){const o=X(e).map(async d=>{var f,A,C;const N=(f=r==null?void 0:r.names)===null||f===void 0?void 0:f[d],L=await on(U(t,d),e[d],{name:(N==null?void 0:N.name)||d,label:N==null?void 0:N.label,values:t,bails:(C=(A=r==null?void 0:r.bailsMap)===null||A===void 0?void 0:A[d])!==null&&C!==void 0?C:!0});return Object.assign(Object.assign({},L),{path:d})});let l=!0;const v=await Promise.all(o),p={},u={};for(const d of v)p[d.path]={valid:d.valid,errors:d.errors},d.valid||(l=!1,u[d.path]=d.errors[0]);return{valid:l,results:p,errors:u,source:"schema"}}let mn=0;const Be=["bails","fieldsCount","id","multiple","type","validate"];function Wt(e){const t=(e==null?void 0:e.initialValues)||{},r=Object.assign({},b(t)),n=ee(e==null?void 0:e.validationSchema);return n&&ce(n)&&Q(n.cast)?E(n.cast(r)||{}):E(r)}function pn(e){var t;const r=mn++,n=(e==null?void 0:e.name)||"Form";let o=0;const l=Y(!1),v=Y(!1),p=Y(0),u=[],d=lt(Wt(e)),f=Y([]),A=Y({}),C=Y({}),N=Jr(()=>{C.value=f.value.reduce((i,s)=>(i[ze(b(s.path))]=s,i),{})});function L(i,s){const a=M(i);if(!a){typeof i=="string"&&(A.value[ze(i)]=Ft(s));return}if(typeof i=="string"){const c=ze(i);A.value[c]&&delete A.value[c]}a.errors=Ft(s),a.valid=!a.errors.length}function G(i){X(i).forEach(s=>{L(s,i[s])})}e!=null&&e.initialErrors&&G(e.initialErrors);const fe=B(()=>{const i=f.value.reduce((s,a)=>(a.errors.length&&(s[b(a.path)]=a.errors),s),{});return Object.assign(Object.assign({},A.value),i)}),oe=B(()=>X(fe.value).reduce((i,s)=>{const a=fe.value[s];return a!=null&&a.length&&(i[s]=a[0]),i},{})),Ie=B(()=>f.value.reduce((i,s)=>(i[b(s.path)]={name:b(s.path)||"",label:s.label||""},i),{})),Ce=B(()=>f.value.reduce((i,s)=>{var a;return i[b(s.path)]=(a=s.bails)!==null&&a!==void 0?a:!0,i},{})),ve=Object.assign({},(e==null?void 0:e.initialErrors)||{}),y=(t=e==null?void 0:e.keepValuesOnUnmount)!==null&&t!==void 0?t:!1,{initialValues:m,originalInitialValues:O,setInitialValues:w}=gn(f,d,e),j=hn(f,d,O,oe),I=B(()=>f.value.reduce((i,s)=>{const a=U(d,b(s.path));return R(i,b(s.path),a),i},{})),_=e==null?void 0:e.validationSchema;function q(i,s){var a,c;const g=B(()=>U(m.value,b(i))),S=C.value[b(i)],h=(s==null?void 0:s.type)==="checkbox"||(s==null?void 0:s.type)==="radio";if(S&&h){S.multiple=!0;const H=o++;return Array.isArray(S.id)?S.id.push(H):S.id=[S.id,H],S.fieldsCount++,S.__flags.pendingUnmount[H]=!1,S}const F=B(()=>U(d,b(i))),k=b(i),z=pe.findIndex(H=>H===k);z!==-1&&pe.splice(z,1);const P=B(()=>{var H,Pe,xe,et;const tt=b(_);if(ce(tt))return(Pe=(H=tt.describe)===null||H===void 0?void 0:H.call(tt,b(i)).required)!==null&&Pe!==void 0?Pe:!1;const rt=b(s==null?void 0:s.schema);return ce(rt)&&(et=(xe=rt.describe)===null||xe===void 0?void 0:xe.call(rt).required)!==null&&et!==void 0?et:!1}),D=o++,K=lt({id:D,path:i,touched:!1,pending:!1,valid:!0,validated:!!(!((a=ve[k])===null||a===void 0)&&a.length),required:P,initialValue:g,errors:hr([]),bails:(c=s==null?void 0:s.bails)!==null&&c!==void 0?c:!1,label:s==null?void 0:s.label,type:(s==null?void 0:s.type)||"default",value:F,multiple:!1,__flags:{pendingUnmount:{[D]:!1},pendingReset:!1},fieldsCount:1,validate:s==null?void 0:s.validate,dirty:B(()=>!de(ee(F),ee(g)))});return f.value.push(K),C.value[k]=K,N(),oe.value[k]&&!ve[k]&&J(()=>{ye(k,{mode:"silent"})}),Vt(i)&&te(i,H=>{N();const Pe=E(F.value);C.value[H]=K,J(()=>{R(d,H,Pe)})}),K}const _e=Pt(gt,5),We=Pt(gt,5),Me=Yr(async i=>await(i==="silent"?_e():We()),(i,[s])=>{const a=X(ne.errorBag.value),g=[...new Set([...X(i.results),...f.value.map(S=>S.path),...a])].sort().reduce((S,h)=>{var F;const k=h,z=M(k)||Ge(k),P=((F=i.results[k])===null||F===void 0?void 0:F.errors)||[],D=b(z==null?void 0:z.path)||k,K=yn({errors:P,valid:!P.length},S.results[D]);return S.results[D]=K,K.valid||(S.errors[D]=K.errors[0]),z&&A.value[D]&&delete A.value[D],z?(z.valid=K.valid,s==="silent"||s==="validated-only"&&!z.validated||L(z,K.errors),S):(L(D,P),S)},{valid:i.valid,results:{},errors:{},source:i.source});return i.values&&(g.values=i.values,g.source=i.source),X(g.results).forEach(S=>{var h;const F=M(S);F&&s!=="silent"&&(s==="validated-only"&&!F.validated||L(F,(h=g.results[S])===null||h===void 0?void 0:h.errors))}),g});function me(i){f.value.forEach(i)}function M(i){const s=typeof i=="string"?ze(i):i;return typeof s=="string"?C.value[s]:s}function Ge(i){return f.value.filter(a=>i.startsWith(b(a.path))).reduce((a,c)=>a?c.path.length>a.path.length?c:a:c,void 0)}let pe=[],be;function $(i){return pe.push(i),be||(be=J(()=>{[...pe].sort().reverse().forEach(a=>{_t(d,a)}),pe=[],be=null})),be}function re(i){return function(a,c){return function(S){return S instanceof Event&&(S.preventDefault(),S.stopPropagation()),me(h=>h.touched=!0),l.value=!0,p.value++,Oe().then(h=>{const F=E(d);if(h.valid&&typeof a=="function"){const k=E(I.value);let z=i?k:F;return h.values&&(z=h.source==="schema"?h.values:Object.assign({},z,h.values)),a(z,{evt:S,controlledValues:k,setErrors:G,setFieldError:L,setTouched:Ye,setFieldTouched:Ue,setValues:He,setFieldValue:le,resetForm:Qe,resetField:pt})}!h.valid&&typeof c=="function"&&c({values:F,evt:S,errors:h.errors,results:h.results})}).then(h=>(l.value=!1,h),h=>{throw l.value=!1,h})}}}const ge=re(!1);ge.withControlled=re(!0);function Gt(i,s){const a=f.value.findIndex(g=>g.path===i&&(Array.isArray(g.id)?g.id.includes(s):g.id===s)),c=f.value[a];if(!(a===-1||!c)){if(J(()=>{ye(i,{mode:"silent",warn:!1})}),c.multiple&&c.fieldsCount&&c.fieldsCount--,Array.isArray(c.id)){const g=c.id.indexOf(s);g>=0&&c.id.splice(g,1),delete c.__flags.pendingUnmount[s]}(!c.multiple||c.fieldsCount<=0)&&(f.value.splice(a,1),ht(i),N(),delete C.value[i])}}function Ht(i){X(C.value).forEach(s=>{s.startsWith(i)&&delete C.value[s]}),f.value=f.value.filter(s=>!s.path.startsWith(i)),J(()=>{N()})}const ne={name:n,formId:r,values:d,controlledValues:I,errorBag:fe,errors:oe,schema:_,submitCount:p,meta:j,isSubmitting:l,isValidating:v,fieldArrays:u,keepValuesOnUnmount:y,validateSchema:ee(_)?Me:void 0,validate:Oe,setFieldError:L,validateField:ye,setFieldValue:le,setValues:He,setErrors:G,setFieldTouched:Ue,setTouched:Ye,resetForm:Qe,resetField:pt,handleSubmit:ge,useFieldModel:er,defineInputBinds:tr,defineComponentBinds:rr,defineField:Ze,stageInitialValue:Zt,unsetInitialValue:ht,setFieldInitialValue:Je,createPathState:q,getPathState:M,unsetPathValue:$,removePathState:Gt,initialValues:m,getAllPathStates:()=>f.value,destroyPath:Ht,isFieldTouched:Yt,isFieldDirty:Qt,isFieldValid:Jt};function le(i,s,a=!0){const c=E(s),g=typeof i=="string"?i:i.path;M(g)||q(g),R(d,g,c),a&&ye(g)}function Xt(i,s=!0){X(d).forEach(a=>{delete d[a]}),X(i).forEach(a=>{le(a,i[a],!1)}),s&&Oe()}function He(i,s=!0){ke(d,i),u.forEach(a=>a&&a.reset()),s&&Oe()}function Xe(i,s){const a=M(b(i))||q(i);return B({get(){return a.value},set(c){var g;const S=b(i);le(S,c,(g=b(s))!==null&&g!==void 0?g:!1)}})}function Ue(i,s){const a=M(i);a&&(a.touched=s)}function Yt(i){const s=M(i);return s?s.touched:f.value.filter(a=>a.path.startsWith(i)).some(a=>a.touched)}function Qt(i){const s=M(i);return s?s.dirty:f.value.filter(a=>a.path.startsWith(i)).some(a=>a.dirty)}function Jt(i){const s=M(i);return s?s.valid:f.value.filter(a=>a.path.startsWith(i)).every(a=>a.valid)}function Ye(i){if(typeof i=="boolean"){me(s=>{s.touched=i});return}X(i).forEach(s=>{Ue(s,!!i[s])})}function pt(i,s){var a;const c=s&&"value"in s?s.value:U(m.value,i),g=M(i);g&&(g.__flags.pendingReset=!0),Je(i,E(c),!0),le(i,c,!1),Ue(i,(a=s==null?void 0:s.touched)!==null&&a!==void 0?a:!1),L(i,(s==null?void 0:s.errors)||[]),J(()=>{g&&(g.__flags.pendingReset=!1)})}function Qe(i,s){let a=E(i!=null&&i.values?i.values:O.value);a=s!=null&&s.force?a:ke(O.value,a),a=ce(_)&&Q(_.cast)?_.cast(a):a,w(a,{force:s==null?void 0:s.force}),me(c=>{var g;c.__flags.pendingReset=!0,c.validated=!1,c.touched=((g=i==null?void 0:i.touched)===null||g===void 0?void 0:g[b(c.path)])||!1,le(b(c.path),U(a,b(c.path)),!1),L(b(c.path),void 0)}),s!=null&&s.force?Xt(a,!1):He(a,!1),G((i==null?void 0:i.errors)||{}),p.value=(i==null?void 0:i.submitCount)||0,J(()=>{Oe({mode:"silent"}),me(c=>{c.__flags.pendingReset=!1})})}async function Oe(i){const s=(i==null?void 0:i.mode)||"force";if(s==="force"&&me(h=>h.validated=!0),ne.validateSchema)return ne.validateSchema(s);v.value=!0;const a=await Promise.all(f.value.map(h=>h.validate?h.validate(i).then(F=>({key:b(h.path),valid:F.valid,errors:F.errors,value:F.value})):Promise.resolve({key:b(h.path),valid:!0,errors:[],value:void 0})));v.value=!1;const c={},g={},S={};for(const h of a)c[h.key]={valid:h.valid,errors:h.errors},h.value&&R(S,h.key,h.value),h.errors.length&&(g[h.key]=h.errors[0]);return{valid:a.every(h=>h.valid),results:c,errors:g,values:S,source:"fields"}}async function ye(i,s){var a;const c=M(i);if(c&&(s==null?void 0:s.mode)!=="silent"&&(c.validated=!0),_){const{results:g}=await Me((s==null?void 0:s.mode)||"validated-only");return g[i]||{errors:[],valid:!0}}return c!=null&&c.validate?c.validate(s):(!c&&(a=s==null?void 0:s.warn),Promise.resolve({errors:[],valid:!0}))}function ht(i){_t(m.value,i)}function Zt(i,s,a=!1){Je(i,s),R(d,i,s),a&&!(e!=null&&e.initialValues)&&R(O.value,i,E(s))}function Je(i,s,a=!1){R(m.value,i,E(s)),a&&R(O.value,i,E(s))}async function gt(){const i=ee(_);if(!i)return{valid:!0,results:{},errors:{},source:"none"};v.value=!0;const s=zt(i)||ce(i)?await fn(i,d):await vn(i,d,{names:Ie.value,bailsMap:Ce.value});return v.value=!1,s}const xt=ge((i,{evt:s})=>{Hr(s)&&s.target.submit()});vr(()=>{if(e!=null&&e.initialErrors&&G(e.initialErrors),e!=null&&e.initialTouched&&Ye(e.initialTouched),e!=null&&e.validateOnMount){Oe();return}ne.validateSchema&&ne.validateSchema("silent")}),Vt(_)&&te(_,()=>{var i;(i=ne.validateSchema)===null||i===void 0||i.call(ne,"validated-only")}),St($t,ne);function Ze(i,s){const a=Q(s)||s==null?void 0:s.label,c=M(b(i))||q(i,{label:a}),g=()=>Q(s)?s(De(c,Be)):s||{};function S(){var P;c.touched=!0,((P=g().validateOnBlur)!==null&&P!==void 0?P:Ne().validateOnBlur)&&ye(b(c.path))}function h(){var P;((P=g().validateOnInput)!==null&&P!==void 0?P:Ne().validateOnInput)&&J(()=>{ye(b(c.path))})}function F(){var P;((P=g().validateOnChange)!==null&&P!==void 0?P:Ne().validateOnChange)&&J(()=>{ye(b(c.path))})}const k=B(()=>{const P={onChange:F,onInput:h,onBlur:S};return Q(s)?Object.assign(Object.assign({},P),s(De(c,Be)).props||{}):s!=null&&s.props?Object.assign(Object.assign({},P),s.props(De(c,Be))):P});return[Xe(i,()=>{var P,D,K;return(K=(P=g().validateOnModelUpdate)!==null&&P!==void 0?P:(D=Ne())===null||D===void 0?void 0:D.validateOnModelUpdate)!==null&&K!==void 0?K:!0}),k]}function er(i){return Array.isArray(i)?i.map(s=>Xe(s,!0)):Xe(i)}function tr(i,s){const[a,c]=Ze(i,s);function g(){c.value.onBlur()}function S(F){const k=Nt(F);le(b(i),k,!1),c.value.onInput()}function h(F){const k=Nt(F);le(b(i),k,!1),c.value.onChange()}return B(()=>Object.assign(Object.assign({},c.value),{onBlur:g,onInput:S,onChange:h,value:a.value}))}function rr(i,s){const[a,c]=Ze(i,s),g=M(b(i));function S(h){a.value=h}return B(()=>{const h=Q(s)?s(De(g,Be)):s||{};return Object.assign({[h.model||"modelValue"]:a.value,[`onUpdate:${h.model||"modelValue"}`]:S},c.value)})}const yt=Object.assign(Object.assign({},ne),{values:mr(d),handleReset:()=>Qe(),submitForm:xt});return St(Dr,yt),yt}function hn(e,t,r,n){const o={touched:"some",pending:"some",valid:"every"},l=B(()=>!de(t,ee(r)));function v(){const u=e.value;return X(o).reduce((d,f)=>{const A=o[f];return d[f]=u[A](C=>C[f]),d},{})}const p=lt(v());return Ut(()=>{const u=v();p.touched=u.touched,p.valid=u.valid,p.pending=u.pending}),B(()=>Object.assign(Object.assign({initialValues:ee(r)},p),{valid:p.valid&&!X(n.value).length,dirty:l.value}))}function gn(e,t,r){const n=Wt(r),o=Y(n),l=Y(E(n));function v(p,u){u!=null&&u.force?(o.value=E(p),l.value=E(p)):(o.value=ke(E(o.value)||{},E(p)),l.value=ke(E(l.value)||{},E(p))),u!=null&&u.updateFields&&e.value.forEach(d=>{if(d.touched)return;const A=U(o.value,b(d.path));R(t,b(d.path),E(A))})}return{initialValues:o,originalInitialValues:l,setInitialValues:v}}function yn(e,t){return t?{valid:e.valid&&t.valid,errors:[...e.errors,...t.errors]}:e}function kt(e){const t=Xr($t,void 0),r=Y([]),n=()=>{},o={fields:r,remove:n,push:n,swap:n,insert:n,update:n,replace:n,prepend:n,move:n};if(!t||!ee(e))return o;const l=t.fieldArrays.find(y=>ee(y.path)===ee(e));if(l)return l;let v=0;function p(){return U(t==null?void 0:t.values,b(e),[])||[]}function u(){const y=p();Array.isArray(y)&&(r.value=y.map((m,O)=>f(m,O,r.value)),d())}u();function d(){const y=r.value.length;for(let m=0;m<y;m++){const O=r.value[m];O.isFirst=m===0,O.isLast=m===y-1}}function f(y,m,O){if(O&&!Ee(m)&&O[m])return O[m];const w=v++;return{key:w,value:Qr({get(){const I=U(t==null?void 0:t.values,b(e),[])||[],_=r.value.findIndex(q=>q.key===w);return _===-1?y:I[_]},set(I){const _=r.value.findIndex(q=>q.key===w);_!==-1&&oe(_,I)}}),isFirst:!1,isLast:!1}}function A(){d(),t==null||t.validate({mode:"silent"})}function C(y){const m=b(e),O=U(t==null?void 0:t.values,m);if(!O||!Array.isArray(O))return;const w=[...O];w.splice(y,1);const j=m+`[${y}]`;t.destroyPath(j),t.unsetInitialValue(j),R(t.values,m,w),r.value.splice(y,1),A()}function N(y){const m=E(y),O=b(e),w=U(t==null?void 0:t.values,O),j=Ee(w)?[]:w;if(!Array.isArray(j))return;const I=[...j];I.push(m),t.stageInitialValue(O+`[${I.length-1}]`,m),R(t.values,O,I),r.value.push(f(m)),A()}function L(y,m){const O=b(e),w=U(t==null?void 0:t.values,O);if(!Array.isArray(w)||!(y in w)||!(m in w))return;const j=[...w],I=[...r.value],_=j[y];j[y]=j[m],j[m]=_;const q=I[y];I[y]=I[m],I[m]=q,R(t.values,O,j),r.value=I,d()}function G(y,m){const O=E(m),w=b(e),j=U(t==null?void 0:t.values,w);if(!Array.isArray(j)||j.length<y)return;const I=[...j],_=[...r.value];I.splice(y,0,O),_.splice(y,0,f(O)),R(t.values,w,I),r.value=_,A()}function fe(y){const m=b(e);t.stageInitialValue(m,y),R(t.values,m,y),u(),A()}function oe(y,m){const O=b(e),w=U(t==null?void 0:t.values,O);!Array.isArray(w)||w.length-1<y||(R(t.values,`${O}[${y}]`,m),t==null||t.validate({mode:"validated-only"}))}function Ie(y){const m=E(y),O=b(e),w=U(t==null?void 0:t.values,O),j=Ee(w)?[]:w;if(!Array.isArray(j))return;const I=[m,...j];R(t.values,O,I),t.stageInitialValue(O+"[0]",m),r.value.unshift(f(m)),A()}function Ce(y,m){const O=b(e),w=U(t==null?void 0:t.values,O),j=Ee(w)?[]:[...w];if(!Array.isArray(w)||!(y in w)||!(m in w))return;const I=[...r.value],_=I[y];I.splice(y,1),I.splice(m,0,_);const q=j[y];j.splice(y,1),j.splice(m,0,q),R(t.values,O,j),r.value=I,A()}const ve={fields:r,remove:C,push:N,swap:L,insert:G,update:oe,replace:fe,prepend:Ie,move:Ce};return t.fieldArrays.push(Object.assign({path:e,reset:u},ve)),pr(()=>{const y=t.fieldArrays.findIndex(m=>b(m.path)===b(e));y>=0&&t.fieldArrays.splice(y,1)}),te(p,y=>{const m=r.value.map(O=>O.value);de(y,m)||u()}),ve}const bn=["type","value"],On={key:0,class:"text-red-400"},Vn=ct({__name:"CustomInput",props:{modelValue:{},error:{},type:{default:"text"}},emits:["update:modelValue","blur"],setup(e){return(t,r)=>(x(),Z("div",null,[V("input",{type:t.type,value:t.modelValue,onInput:r[0]||(r[0]=n=>{var o;return t.$emit("update:modelValue",((o=n.target)==null?void 0:o.value)??"")}),onBlur:r[1]||(r[1]=n=>t.$emit("blur")),id:"title",class:dt(["form-control",{"border-red-500":t.error}])},null,42,bn),t.error?(x(),Z("span",On,Te(t.error),1)):br("",!0)]))}}),Sn=ft(Vn,[["__scopeId","data-v-e5982066"]]),An=["type","value"],wn=ct({__name:"CustomTextArea",props:{modelValue:{},error:{},type:{default:"text"}},emits:["update:modelValue","blur"],setup(e){return(t,r)=>(x(),Z("div",null,[V("textarea",{type:t.type,value:t.modelValue,onInput:r[0]||(r[0]=n=>{var o;return t.$emit("update:modelValue",((o=n.target)==null?void 0:o.value)??"")}),onBlur:r[1]||(r[1]=n=>t.$emit("blur")),class:dt(["form-control",{"border-red-500":t.error}])},null,42,An),at(V("span",{class:"text-red-400"},Te(t.error),513),[[Rt,t.error]])]))}}),En=ft(wn,[["__scopeId","data-v-ad66e53b"]]),jn=Sr({title:Re().required("Este campo es super importante").min(3,"Mínimo de 3 letras!!!"),slug:Re().required(),description:Re().required(),price:At().required(),stock:At().required().min(1),gender:Re().required().oneOf(["men","women","kid"])}),In=ct({components:{CustomInput:Sn,CustomTextArea:En},props:{productId:{type:String,required:!0}},setup(e){const t=Or(),r=Vr(),{data:n,isError:o,isLoading:l,refetch:v}=Ir({queryKey:["product",e.productId],queryFn:()=>Pr(e.productId),retry:!1}),{mutate:p,isPending:u,isSuccess:d,data:f}=_r({mutationFn:Fr}),{values:A,defineField:C,errors:N,handleSubmit:L,resetForm:G,meta:fe}=pn({validationSchema:jn}),[oe,Ie]=C("title"),[Ce,ve]=C("slug"),[y,m]=C("description"),[O,w]=C("price"),[j,I]=C("stock"),[_,q]=C("gender"),{fields:_e,remove:We,push:Me}=kt("sizes"),{fields:me}=kt("images"),M=Y([]),Ge=L(async $=>{const re={...$,images:[...$.images,...M.value]};p(re)}),pe=$=>{const re=_e.value.map(ge=>ge.value);re.includes($)?We(re.indexOf($)):Me($)},be=$=>{const he=$.target.files;if(he&&he.length!==0)for(const ge of he)M.value.push(ge)};return Ut(()=>{if(o.value&&!l.value){t.replace("/admin/products");return}}),te(n,()=>{n&&G({values:n.value})},{deep:!0,immediate:!0}),te(d,$=>{$&&(r.success("Producto actualizado correctamente"),t.replace(`/admin/products/${f.value.id}`),G({values:f.value}),M.value=[])}),te(()=>e.productId,()=>{v()}),{values:A,errors:N,meta:fe,title:oe,titleAttrs:Ie,slug:Ce,slugAttrs:ve,description:y,descriptionAttrs:m,price:O,priceAttrs:w,stock:j,stockAttrs:I,gender:_,genderAttrs:q,sizes:_e,images:me,imageFiles:M,onFileChanged:be,isPending:u,allSizes:["XS","S","M","L","XL","XXL"],onSubmit:Ge,toggleSize:pe,hasSize:$=>_e.value.map(he=>he.value).includes($),temporalImageUrl:$=>URL.createObjectURL($)}}}),Cn={class:"bg-white px-5 py-2 rounded"},_n={class:"text-3xl"},Pn={class:"text-blue-500"},Fn={class:"first-col"},Nn={class:"mb-4"},Tn={class:"mb-4"},kn={class:"mb-4"},Mn={class:"flex flex-row gap-3"},Un={class:"mb-4 flex-1"},Rn={class:"mb-4 flex-1"},$n={class:"mb-4"},zn={class:"flex"},Dn=["onClick"],Bn={class:"first-col"},Ln={class:"flex p-2 overflow-x-auto space-x-8 w-full h-[265px] bg-gray-200 rounded"},qn=["src","alt"],Kn=["src"],Wn={class:"col-span-2 my-2"},Gn={class:"mb-4"},Hn={class:"my-4 text-right"},Xn=["disabled"];function Yn(e,t,r,n,o,l){const v=wt("CustomInput"),p=wt("CustomTextArea");return x(),Z($e,null,[V("div",Cn,[V("h1",_n,[t[8]||(t[8]=Ar(" Producto: ")),V("small",Pn,Te(e.title),1)]),t[9]||(t[9]=V("hr",{class:"my-4"},null,-1))]),V("form",{onSubmit:t[7]||(t[7]=(...u)=>e.onSubmit&&e.onSubmit(...u)),class:"grid grid-cols-1 sm:grid-cols-2 bg-white px-5 gap-5"},[V("div",Fn,[V("div",Nn,[t[10]||(t[10]=V("label",{for:"title",class:"form-label"},"Título",-1)),Fe(v,we({modelValue:e.title,"onUpdate:modelValue":t[0]||(t[0]=u=>e.title=u)},e.titleAttrs,{error:e.errors.title}),null,16,["modelValue","error"])]),V("div",Tn,[t[11]||(t[11]=V("label",{for:"slug",class:"form-label"},"Slug",-1)),Fe(v,we({modelValue:e.slug,"onUpdate:modelValue":t[1]||(t[1]=u=>e.slug=u)},e.slugAttrs,{error:e.errors.slug}),null,16,["modelValue","error"])]),V("div",kn,[t[12]||(t[12]=V("label",{for:"description",class:"form-label"},"Descripción",-1)),Fe(p,we({modelValue:e.description,"onUpdate:modelValue":t[2]||(t[2]=u=>e.description=u)},e.descriptionAttrs,{error:e.errors.description}),null,16,["modelValue","error"])]),V("div",Mn,[V("div",Un,[t[13]||(t[13]=V("label",{for:"price",class:"form-label"},"Precio",-1)),Fe(v,we({modelValue:e.price,"onUpdate:modelValue":t[3]||(t[3]=u=>e.price=u),modelModifiers:{number:!0}},e.priceAttrs,{error:e.errors.price}),null,16,["modelValue","error"])]),V("div",Rn,[t[14]||(t[14]=V("label",{for:"stock",class:"form-label"},"Inventario",-1)),Fe(v,we({modelValue:e.stock,"onUpdate:modelValue":t[4]||(t[4]=u=>e.stock=u),modelModifiers:{number:!0}},e.stockAttrs,{error:e.errors.stock}),null,16,["modelValue","error"])])]),V("div",$n,[t[15]||(t[15]=V("label",{for:"sizes",class:"form-label"},"Tallas",-1)),V("div",zn,[(x(!0),Z($e,null,st(e.allSizes,u=>(x(),Z("button",{key:u,onClick:d=>e.toggleSize(u),type:"button",class:dt(["p-2 rounded w-14 mr-2 flex-1",{"bg-blue-500 text-white":e.hasSize(u),"bg-blue-100":!e.hasSize(u)}])},Te(u),11,Dn))),128))])])]),V("div",Bn,[t[19]||(t[19]=V("label",{for:"stock",class:"form-label"},"Imágenes",-1)),V("div",Ln,[(x(!0),Z($e,null,st(e.images,u=>(x(),Z("div",{key:u.value,class:"flex-shrink-0"},[V("img",{src:u.value,alt:e.title,class:"w-[250px] h-[250px] rounded"},null,8,qn)]))),128)),(x(!0),Z($e,null,st(e.imageFiles,u=>(x(),Z("div",{key:u.name,class:"flex-shrink-0"},[V("img",{src:e.temporalImageUrl(u),class:"w-[250px] h-[250px] rounded"},null,8,Kn)]))),128))]),V("div",Wn,[t[16]||(t[16]=V("label",{for:"image",class:"form-label"},"Subir imagen",-1)),V("input",{multiple:"",type:"file",id:"image",class:"form-control",accept:"image/*",onChange:t[5]||(t[5]=(...u)=>e.onFileChanged&&e.onFileChanged(...u))},null,32)]),V("div",Gn,[t[18]||(t[18]=V("label",{for:"stock",class:"form-label"},"Género",-1)),at(V("select",we({"onUpdate:modelValue":t[6]||(t[6]=u=>e.gender=u)},e.genderAttrs,{class:"form-control"}),t[17]||(t[17]=[V("option",{value:""},"Seleccione",-1),V("option",{value:"kid"},"Niño",-1),V("option",{value:"women"},"Mujer",-1),V("option",{value:"men"},"Hombre",-1)]),16),[[wr,e.gender]]),at(V("span",{class:"text-red-400"},Te(e.errors.gender),513),[[Rt,e.errors.gender]])]),V("div",Hn,[V("button",{disabled:e.isPending,type:"submit",class:"disabled:bg-gray-300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}," Guardar ",8,Xn)])])],32)],64)}const xn=ft(In,[["render",Yn],["__scopeId","data-v-10a3cae9"]]);export{xn as default};
