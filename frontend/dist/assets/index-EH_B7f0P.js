(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))d(u);new MutationObserver(u=>{for(const p of u)if(p.type==="childList")for(const h of p.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&d(h)}).observe(document,{childList:!0,subtree:!0});function s(u){const p={};return u.integrity&&(p.integrity=u.integrity),u.referrerPolicy&&(p.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?p.credentials="include":u.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function d(u){if(u.ep)return;u.ep=!0;const p=s(u);fetch(u.href,p)}})();function G0(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Xo={exports:{}},ca={},Ko={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vu;function X0(){if(Vu)return he;Vu=1;var a=Symbol.for("react.element"),l=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),h=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.iterator;function y(w){return w===null||typeof w!="object"?null:(w=g&&w[g]||w["@@iterator"],typeof w=="function"?w:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,I={};function A(w,$,le){this.props=w,this.context=$,this.refs=I,this.updater=le||C}A.prototype.isReactComponent={},A.prototype.setState=function(w,$){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,$,"setState")},A.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function M(){}M.prototype=A.prototype;function z(w,$,le){this.props=w,this.context=$,this.refs=I,this.updater=le||C}var W=z.prototype=new M;W.constructor=z,_(W,A.prototype),W.isPureReactComponent=!0;var F=Array.isArray,D=Object.prototype.hasOwnProperty,G={current:null},ne={key:!0,ref:!0,__self:!0,__source:!0};function de(w,$,le){var H,K={},ie=null,ke=null;if($!=null)for(H in $.ref!==void 0&&(ke=$.ref),$.key!==void 0&&(ie=""+$.key),$)D.call($,H)&&!ne.hasOwnProperty(H)&&(K[H]=$[H]);var Ce=arguments.length-2;if(Ce===1)K.children=le;else if(1<Ce){for(var Le=Array(Ce),dt=0;dt<Ce;dt++)Le[dt]=arguments[dt+2];K.children=Le}if(w&&w.defaultProps)for(H in Ce=w.defaultProps,Ce)K[H]===void 0&&(K[H]=Ce[H]);return{$$typeof:a,type:w,key:ie,ref:ke,props:K,_owner:G.current}}function X(w,$){return{$$typeof:a,type:w.type,key:$,ref:w.ref,props:w.props,_owner:w._owner}}function ce(w){return typeof w=="object"&&w!==null&&w.$$typeof===a}function pe(w){var $={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(le){return $[le]})}var fe=/\/+/g;function ye(w,$){return typeof w=="object"&&w!==null&&w.key!=null?pe(""+w.key):$.toString(36)}function Se(w,$,le,H,K){var ie=typeof w;(ie==="undefined"||ie==="boolean")&&(w=null);var ke=!1;if(w===null)ke=!0;else switch(ie){case"string":case"number":ke=!0;break;case"object":switch(w.$$typeof){case a:case l:ke=!0}}if(ke)return ke=w,K=K(ke),w=H===""?"."+ye(ke,0):H,F(K)?(le="",w!=null&&(le=w.replace(fe,"$&/")+"/"),Se(K,$,le,"",function(dt){return dt})):K!=null&&(ce(K)&&(K=X(K,le+(!K.key||ke&&ke.key===K.key?"":(""+K.key).replace(fe,"$&/")+"/")+w)),$.push(K)),1;if(ke=0,H=H===""?".":H+":",F(w))for(var Ce=0;Ce<w.length;Ce++){ie=w[Ce];var Le=H+ye(ie,Ce);ke+=Se(ie,$,le,Le,K)}else if(Le=y(w),typeof Le=="function")for(w=Le.call(w),Ce=0;!(ie=w.next()).done;)ie=ie.value,Le=H+ye(ie,Ce++),ke+=Se(ie,$,le,Le,K);else if(ie==="object")throw $=String(w),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return ke}function je(w,$,le){if(w==null)return w;var H=[],K=0;return Se(w,H,"","",function(ie){return $.call(le,ie,K++)}),H}function Ne(w){if(w._status===-1){var $=w._result;$=$(),$.then(function(le){(w._status===0||w._status===-1)&&(w._status=1,w._result=le)},function(le){(w._status===0||w._status===-1)&&(w._status=2,w._result=le)}),w._status===-1&&(w._status=0,w._result=$)}if(w._status===1)return w._result.default;throw w._result}var xe={current:null},k={transition:null},R={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:k,ReactCurrentOwner:G};function P(){throw Error("act(...) is not supported in production builds of React.")}return he.Children={map:je,forEach:function(w,$,le){je(w,function(){$.apply(this,arguments)},le)},count:function(w){var $=0;return je(w,function(){$++}),$},toArray:function(w){return je(w,function($){return $})||[]},only:function(w){if(!ce(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},he.Component=A,he.Fragment=s,he.Profiler=u,he.PureComponent=z,he.StrictMode=d,he.Suspense=f,he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,he.act=P,he.cloneElement=function(w,$,le){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var H=_({},w.props),K=w.key,ie=w.ref,ke=w._owner;if($!=null){if($.ref!==void 0&&(ie=$.ref,ke=G.current),$.key!==void 0&&(K=""+$.key),w.type&&w.type.defaultProps)var Ce=w.type.defaultProps;for(Le in $)D.call($,Le)&&!ne.hasOwnProperty(Le)&&(H[Le]=$[Le]===void 0&&Ce!==void 0?Ce[Le]:$[Le])}var Le=arguments.length-2;if(Le===1)H.children=le;else if(1<Le){Ce=Array(Le);for(var dt=0;dt<Le;dt++)Ce[dt]=arguments[dt+2];H.children=Ce}return{$$typeof:a,type:w.type,key:K,ref:ie,props:H,_owner:ke}},he.createContext=function(w){return w={$$typeof:h,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:p,_context:w},w.Consumer=w},he.createElement=de,he.createFactory=function(w){var $=de.bind(null,w);return $.type=w,$},he.createRef=function(){return{current:null}},he.forwardRef=function(w){return{$$typeof:b,render:w}},he.isValidElement=ce,he.lazy=function(w){return{$$typeof:v,_payload:{_status:-1,_result:w},_init:Ne}},he.memo=function(w,$){return{$$typeof:x,type:w,compare:$===void 0?null:$}},he.startTransition=function(w){var $=k.transition;k.transition={};try{w()}finally{k.transition=$}},he.unstable_act=P,he.useCallback=function(w,$){return xe.current.useCallback(w,$)},he.useContext=function(w){return xe.current.useContext(w)},he.useDebugValue=function(){},he.useDeferredValue=function(w){return xe.current.useDeferredValue(w)},he.useEffect=function(w,$){return xe.current.useEffect(w,$)},he.useId=function(){return xe.current.useId()},he.useImperativeHandle=function(w,$,le){return xe.current.useImperativeHandle(w,$,le)},he.useInsertionEffect=function(w,$){return xe.current.useInsertionEffect(w,$)},he.useLayoutEffect=function(w,$){return xe.current.useLayoutEffect(w,$)},he.useMemo=function(w,$){return xe.current.useMemo(w,$)},he.useReducer=function(w,$,le){return xe.current.useReducer(w,$,le)},he.useRef=function(w){return xe.current.useRef(w)},he.useState=function(w){return xe.current.useState(w)},he.useSyncExternalStore=function(w,$,le){return xe.current.useSyncExternalStore(w,$,le)},he.useTransition=function(){return xe.current.useTransition()},he.version="18.3.1",he}var Qu;function Pl(){return Qu||(Qu=1,Ko.exports=X0()),Ko.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qu;function K0(){if(qu)return ca;qu=1;var a=Pl(),l=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,u=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function h(b,f,x){var v,g={},y=null,C=null;x!==void 0&&(y=""+x),f.key!==void 0&&(y=""+f.key),f.ref!==void 0&&(C=f.ref);for(v in f)d.call(f,v)&&!p.hasOwnProperty(v)&&(g[v]=f[v]);if(b&&b.defaultProps)for(v in f=b.defaultProps,f)g[v]===void 0&&(g[v]=f[v]);return{$$typeof:l,type:b,key:y,ref:C,props:g,_owner:u.current}}return ca.Fragment=s,ca.jsx=h,ca.jsxs=h,ca}var Yu;function J0(){return Yu||(Yu=1,Xo.exports=K0()),Xo.exports}var n=J0(),N=Pl();const Fe=G0(N);var Mi={},Jo={exports:{}},lt={},Zo={exports:{}},el={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gu;function Z0(){return Gu||(Gu=1,(function(a){function l(k,R){var P=k.length;k.push(R);e:for(;0<P;){var w=P-1>>>1,$=k[w];if(0<u($,R))k[w]=R,k[P]=$,P=w;else break e}}function s(k){return k.length===0?null:k[0]}function d(k){if(k.length===0)return null;var R=k[0],P=k.pop();if(P!==R){k[0]=P;e:for(var w=0,$=k.length,le=$>>>1;w<le;){var H=2*(w+1)-1,K=k[H],ie=H+1,ke=k[ie];if(0>u(K,P))ie<$&&0>u(ke,K)?(k[w]=ke,k[ie]=P,w=ie):(k[w]=K,k[H]=P,w=H);else if(ie<$&&0>u(ke,P))k[w]=ke,k[ie]=P,w=ie;else break e}}return R}function u(k,R){var P=k.sortIndex-R.sortIndex;return P!==0?P:k.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;a.unstable_now=function(){return p.now()}}else{var h=Date,b=h.now();a.unstable_now=function(){return h.now()-b}}var f=[],x=[],v=1,g=null,y=3,C=!1,_=!1,I=!1,A=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function W(k){for(var R=s(x);R!==null;){if(R.callback===null)d(x);else if(R.startTime<=k)d(x),R.sortIndex=R.expirationTime,l(f,R);else break;R=s(x)}}function F(k){if(I=!1,W(k),!_)if(s(f)!==null)_=!0,Ne(D);else{var R=s(x);R!==null&&xe(F,R.startTime-k)}}function D(k,R){_=!1,I&&(I=!1,M(de),de=-1),C=!0;var P=y;try{for(W(R),g=s(f);g!==null&&(!(g.expirationTime>R)||k&&!pe());){var w=g.callback;if(typeof w=="function"){g.callback=null,y=g.priorityLevel;var $=w(g.expirationTime<=R);R=a.unstable_now(),typeof $=="function"?g.callback=$:g===s(f)&&d(f),W(R)}else d(f);g=s(f)}if(g!==null)var le=!0;else{var H=s(x);H!==null&&xe(F,H.startTime-R),le=!1}return le}finally{g=null,y=P,C=!1}}var G=!1,ne=null,de=-1,X=5,ce=-1;function pe(){return!(a.unstable_now()-ce<X)}function fe(){if(ne!==null){var k=a.unstable_now();ce=k;var R=!0;try{R=ne(!0,k)}finally{R?ye():(G=!1,ne=null)}}else G=!1}var ye;if(typeof z=="function")ye=function(){z(fe)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,je=Se.port2;Se.port1.onmessage=fe,ye=function(){je.postMessage(null)}}else ye=function(){A(fe,0)};function Ne(k){ne=k,G||(G=!0,ye())}function xe(k,R){de=A(function(){k(a.unstable_now())},R)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(k){k.callback=null},a.unstable_continueExecution=function(){_||C||(_=!0,Ne(D))},a.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<k?Math.floor(1e3/k):5},a.unstable_getCurrentPriorityLevel=function(){return y},a.unstable_getFirstCallbackNode=function(){return s(f)},a.unstable_next=function(k){switch(y){case 1:case 2:case 3:var R=3;break;default:R=y}var P=y;y=R;try{return k()}finally{y=P}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(k,R){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var P=y;y=k;try{return R()}finally{y=P}},a.unstable_scheduleCallback=function(k,R,P){var w=a.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?w+P:w):P=w,k){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=P+$,k={id:v++,callback:R,priorityLevel:k,startTime:P,expirationTime:$,sortIndex:-1},P>w?(k.sortIndex=P,l(x,k),s(f)===null&&k===s(x)&&(I?(M(de),de=-1):I=!0,xe(F,P-w))):(k.sortIndex=$,l(f,k),_||C||(_=!0,Ne(D))),k},a.unstable_shouldYield=pe,a.unstable_wrapCallback=function(k){var R=y;return function(){var P=y;y=R;try{return k.apply(this,arguments)}finally{y=P}}}})(el)),el}var Xu;function e1(){return Xu||(Xu=1,Zo.exports=Z0()),Zo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ku;function t1(){if(Ku)return lt;Ku=1;var a=Pl(),l=e1();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,u={};function p(e,t){h(e,t),h(e+"Capture",t)}function h(e,t){for(u[e]=t,e=0;e<t.length;e++)d.add(t[e])}var b=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},g={};function y(e){return f.call(g,e)?!0:f.call(v,e)?!1:x.test(e)?g[e]=!0:(v[e]=!0,!1)}function C(e,t,r,i){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _(e,t,r,i){if(t===null||typeof t>"u"||C(e,t,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function I(e,t,r,i,o,c,m){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=c,this.removeEmptyString=m}var A={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){A[e]=new I(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];A[t]=new I(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){A[e]=new I(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){A[e]=new I(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){A[e]=new I(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){A[e]=new I(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){A[e]=new I(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){A[e]=new I(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){A[e]=new I(e,5,!1,e.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function z(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(M,z);A[t]=new I(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(M,z);A[t]=new I(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(M,z);A[t]=new I(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){A[e]=new I(e,1,!1,e.toLowerCase(),null,!1,!1)}),A.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){A[e]=new I(e,1,!1,e.toLowerCase(),null,!0,!0)});function W(e,t,r,i){var o=A.hasOwnProperty(t)?A[t]:null;(o!==null?o.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_(t,r,o,i)&&(r=null),i||o===null?y(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,i=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,i?e.setAttributeNS(i,t,r):e.setAttribute(t,r))))}var F=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),G=Symbol.for("react.portal"),ne=Symbol.for("react.fragment"),de=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),ce=Symbol.for("react.provider"),pe=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),ye=Symbol.for("react.suspense"),Se=Symbol.for("react.suspense_list"),je=Symbol.for("react.memo"),Ne=Symbol.for("react.lazy"),xe=Symbol.for("react.offscreen"),k=Symbol.iterator;function R(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var P=Object.assign,w;function $(e){if(w===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);w=t&&t[1]||""}return`
`+w+e}var le=!1;function H(e,t){if(!e||le)return"";le=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(O){var i=O}Reflect.construct(e,[],t)}else{try{t.call()}catch(O){i=O}e.call(t.prototype)}else{try{throw Error()}catch(O){i=O}e()}}catch(O){if(O&&i&&typeof O.stack=="string"){for(var o=O.stack.split(`
`),c=i.stack.split(`
`),m=o.length-1,j=c.length-1;1<=m&&0<=j&&o[m]!==c[j];)j--;for(;1<=m&&0<=j;m--,j--)if(o[m]!==c[j]){if(m!==1||j!==1)do if(m--,j--,0>j||o[m]!==c[j]){var S=`
`+o[m].replace(" at new "," at ");return e.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",e.displayName)),S}while(1<=m&&0<=j);break}}}finally{le=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?$(e):""}function K(e){switch(e.tag){case 5:return $(e.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return e=H(e.type,!1),e;case 11:return e=H(e.type.render,!1),e;case 1:return e=H(e.type,!0),e;default:return""}}function ie(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ne:return"Fragment";case G:return"Portal";case X:return"Profiler";case de:return"StrictMode";case ye:return"Suspense";case Se:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pe:return(e.displayName||"Context")+".Consumer";case ce:return(e._context.displayName||"Context")+".Provider";case fe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case je:return t=e.displayName||null,t!==null?t:ie(e.type)||"Memo";case Ne:t=e._payload,e=e._init;try{return ie(e(t))}catch{}}return null}function ke(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(t);case 8:return t===de?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ce(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Le(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function dt(e){var t=Le(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,c=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(m){i=""+m,c.call(this,m)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(m){i=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ka(e){e._valueTracker||(e._valueTracker=dt(e))}function Kl(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),i="";return e&&(i=Le(e)?e.checked?"true":"false":e.value),e=i,e!==r?(t.setValue(e),!0):!1}function Sa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ns(e,t){var r=t.checked;return P({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Jl(e,t){var r=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;r=Ce(t.value!=null?t.value:r),e._wrapperState={initialChecked:i,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Zl(e,t){t=t.checked,t!=null&&W(e,"checked",t,!1)}function rs(e,t){Zl(e,t);var r=Ce(t.value),i=t.type;if(r!=null)i==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?as(e,t.type,r):t.hasOwnProperty("defaultValue")&&as(e,t.type,Ce(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ec(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function as(e,t,r){(t!=="number"||Sa(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Sr=Array.isArray;function Un(e,t,r,i){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&i&&(e[r].defaultSelected=!0)}else{for(r=""+Ce(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,i&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function is(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return P({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function tc(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(s(92));if(Sr(r)){if(1<r.length)throw Error(s(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Ce(r)}}function nc(e,t){var r=Ce(t.value),i=Ce(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),i!=null&&(e.defaultValue=""+i)}function rc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ac(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ss(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ac(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Na,ic=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,i,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,i,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Na=Na||document.createElement("div"),Na.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Na.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Nr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Cr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zp=["Webkit","ms","Moz","O"];Object.keys(Cr).forEach(function(e){Zp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Cr[t]=Cr[e]})});function sc(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Cr.hasOwnProperty(e)&&Cr[e]?(""+t).trim():t+"px"}function oc(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var i=r.indexOf("--")===0,o=sc(r,t[r],i);r==="float"&&(r="cssFloat"),i?e.setProperty(r,o):e[r]=o}}var eh=P({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function os(e,t){if(t){if(eh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function ls(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cs=null;function ds(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var us=null,Wn=null,Hn=null;function lc(e){if(e=Yr(e)){if(typeof us!="function")throw Error(s(280));var t=e.stateNode;t&&(t=Ya(t),us(e.stateNode,e.type,t))}}function cc(e){Wn?Hn?Hn.push(e):Hn=[e]:Wn=e}function dc(){if(Wn){var e=Wn,t=Hn;if(Hn=Wn=null,lc(e),t)for(e=0;e<t.length;e++)lc(t[e])}}function uc(e,t){return e(t)}function fc(){}var fs=!1;function mc(e,t,r){if(fs)return e(t,r);fs=!0;try{return uc(e,t,r)}finally{fs=!1,(Wn!==null||Hn!==null)&&(fc(),dc())}}function Er(e,t){var r=e.stateNode;if(r===null)return null;var i=Ya(r);if(i===null)return null;r=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(s(231,t,typeof r));return r}var ms=!1;if(b)try{var zr={};Object.defineProperty(zr,"passive",{get:function(){ms=!0}}),window.addEventListener("test",zr,zr),window.removeEventListener("test",zr,zr)}catch{ms=!1}function th(e,t,r,i,o,c,m,j,S){var O=Array.prototype.slice.call(arguments,3);try{t.apply(r,O)}catch(V){this.onError(V)}}var Pr=!1,Ca=null,Ea=!1,ps=null,nh={onError:function(e){Pr=!0,Ca=e}};function rh(e,t,r,i,o,c,m,j,S){Pr=!1,Ca=null,th.apply(nh,arguments)}function ah(e,t,r,i,o,c,m,j,S){if(rh.apply(this,arguments),Pr){if(Pr){var O=Ca;Pr=!1,Ca=null}else throw Error(s(198));Ea||(Ea=!0,ps=O)}}function jn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function pc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function hc(e){if(jn(e)!==e)throw Error(s(188))}function ih(e){var t=e.alternate;if(!t){if(t=jn(e),t===null)throw Error(s(188));return t!==e?null:e}for(var r=e,i=t;;){var o=r.return;if(o===null)break;var c=o.alternate;if(c===null){if(i=o.return,i!==null){r=i;continue}break}if(o.child===c.child){for(c=o.child;c;){if(c===r)return hc(o),e;if(c===i)return hc(o),t;c=c.sibling}throw Error(s(188))}if(r.return!==i.return)r=o,i=c;else{for(var m=!1,j=o.child;j;){if(j===r){m=!0,r=o,i=c;break}if(j===i){m=!0,i=o,r=c;break}j=j.sibling}if(!m){for(j=c.child;j;){if(j===r){m=!0,r=c,i=o;break}if(j===i){m=!0,i=c,r=o;break}j=j.sibling}if(!m)throw Error(s(189))}}if(r.alternate!==i)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?e:t}function gc(e){return e=ih(e),e!==null?xc(e):null}function xc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=xc(e);if(t!==null)return t;e=e.sibling}return null}var vc=l.unstable_scheduleCallback,yc=l.unstable_cancelCallback,sh=l.unstable_shouldYield,oh=l.unstable_requestPaint,De=l.unstable_now,lh=l.unstable_getCurrentPriorityLevel,hs=l.unstable_ImmediatePriority,bc=l.unstable_UserBlockingPriority,za=l.unstable_NormalPriority,ch=l.unstable_LowPriority,wc=l.unstable_IdlePriority,Pa=null,Lt=null;function dh(e){if(Lt&&typeof Lt.onCommitFiberRoot=="function")try{Lt.onCommitFiberRoot(Pa,e,void 0,(e.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:mh,uh=Math.log,fh=Math.LN2;function mh(e){return e>>>=0,e===0?32:31-(uh(e)/fh|0)|0}var _a=64,Aa=4194304;function _r(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function La(e,t){var r=e.pendingLanes;if(r===0)return 0;var i=0,o=e.suspendedLanes,c=e.pingedLanes,m=r&268435455;if(m!==0){var j=m&~o;j!==0?i=_r(j):(c&=m,c!==0&&(i=_r(c)))}else m=r&~o,m!==0?i=_r(m):c!==0&&(i=_r(c));if(i===0)return 0;if(t!==0&&t!==i&&(t&o)===0&&(o=i&-i,c=t&-t,o>=c||o===16&&(c&4194240)!==0))return t;if((i&4)!==0&&(i|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)r=31-jt(t),o=1<<r,i|=e[r],t&=~o;return i}function ph(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hh(e,t){for(var r=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,c=e.pendingLanes;0<c;){var m=31-jt(c),j=1<<m,S=o[m];S===-1?((j&r)===0||(j&i)!==0)&&(o[m]=ph(j,t)):S<=t&&(e.expiredLanes|=j),c&=~j}}function gs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function jc(){var e=_a;return _a<<=1,(_a&4194240)===0&&(_a=64),e}function xs(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Ar(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-jt(t),e[t]=r}function gh(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-jt(r),c=1<<o;t[o]=0,i[o]=-1,e[o]=-1,r&=~c}}function vs(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var i=31-jt(r),o=1<<i;o&t|e[i]&t&&(e[i]|=t),r&=~o}}var Ee=0;function kc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Sc,ys,Nc,Cc,Ec,bs=!1,Ma=[],Jt=null,Zt=null,en=null,Lr=new Map,Mr=new Map,tn=[],xh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zc(e,t){switch(e){case"focusin":case"focusout":Jt=null;break;case"dragenter":case"dragleave":Zt=null;break;case"mouseover":case"mouseout":en=null;break;case"pointerover":case"pointerout":Lr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mr.delete(t.pointerId)}}function Ir(e,t,r,i,o,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:r,eventSystemFlags:i,nativeEvent:c,targetContainers:[o]},t!==null&&(t=Yr(t),t!==null&&ys(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function vh(e,t,r,i,o){switch(t){case"focusin":return Jt=Ir(Jt,e,t,r,i,o),!0;case"dragenter":return Zt=Ir(Zt,e,t,r,i,o),!0;case"mouseover":return en=Ir(en,e,t,r,i,o),!0;case"pointerover":var c=o.pointerId;return Lr.set(c,Ir(Lr.get(c)||null,e,t,r,i,o)),!0;case"gotpointercapture":return c=o.pointerId,Mr.set(c,Ir(Mr.get(c)||null,e,t,r,i,o)),!0}return!1}function Pc(e){var t=kn(e.target);if(t!==null){var r=jn(t);if(r!==null){if(t=r.tag,t===13){if(t=pc(r),t!==null){e.blockedOn=t,Ec(e.priority,function(){Nc(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ia(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=js(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var i=new r.constructor(r.type,r);cs=i,r.target.dispatchEvent(i),cs=null}else return t=Yr(r),t!==null&&ys(t),e.blockedOn=r,!1;t.shift()}return!0}function _c(e,t,r){Ia(e)&&r.delete(t)}function yh(){bs=!1,Jt!==null&&Ia(Jt)&&(Jt=null),Zt!==null&&Ia(Zt)&&(Zt=null),en!==null&&Ia(en)&&(en=null),Lr.forEach(_c),Mr.forEach(_c)}function Tr(e,t){e.blockedOn===t&&(e.blockedOn=null,bs||(bs=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,yh)))}function Fr(e){function t(o){return Tr(o,e)}if(0<Ma.length){Tr(Ma[0],e);for(var r=1;r<Ma.length;r++){var i=Ma[r];i.blockedOn===e&&(i.blockedOn=null)}}for(Jt!==null&&Tr(Jt,e),Zt!==null&&Tr(Zt,e),en!==null&&Tr(en,e),Lr.forEach(t),Mr.forEach(t),r=0;r<tn.length;r++)i=tn[r],i.blockedOn===e&&(i.blockedOn=null);for(;0<tn.length&&(r=tn[0],r.blockedOn===null);)Pc(r),r.blockedOn===null&&tn.shift()}var Bn=F.ReactCurrentBatchConfig,Ta=!0;function bh(e,t,r,i){var o=Ee,c=Bn.transition;Bn.transition=null;try{Ee=1,ws(e,t,r,i)}finally{Ee=o,Bn.transition=c}}function wh(e,t,r,i){var o=Ee,c=Bn.transition;Bn.transition=null;try{Ee=4,ws(e,t,r,i)}finally{Ee=o,Bn.transition=c}}function ws(e,t,r,i){if(Ta){var o=js(e,t,r,i);if(o===null)Ds(e,t,i,Fa,r),zc(e,i);else if(vh(o,e,t,r,i))i.stopPropagation();else if(zc(e,i),t&4&&-1<xh.indexOf(e)){for(;o!==null;){var c=Yr(o);if(c!==null&&Sc(c),c=js(e,t,r,i),c===null&&Ds(e,t,i,Fa,r),c===o)break;o=c}o!==null&&i.stopPropagation()}else Ds(e,t,i,null,r)}}var Fa=null;function js(e,t,r,i){if(Fa=null,e=ds(i),e=kn(e),e!==null)if(t=jn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=pc(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fa=e,null}function Ac(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lh()){case hs:return 1;case bc:return 4;case za:case ch:return 16;case wc:return 536870912;default:return 16}default:return 16}}var nn=null,ks=null,Oa=null;function Lc(){if(Oa)return Oa;var e,t=ks,r=t.length,i,o="value"in nn?nn.value:nn.textContent,c=o.length;for(e=0;e<r&&t[e]===o[e];e++);var m=r-e;for(i=1;i<=m&&t[r-i]===o[c-i];i++);return Oa=o.slice(e,1<i?1-i:void 0)}function Ra(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Da(){return!0}function Mc(){return!1}function ut(e){function t(r,i,o,c,m){this._reactName=r,this._targetInst=o,this.type=i,this.nativeEvent=c,this.target=m,this.currentTarget=null;for(var j in e)e.hasOwnProperty(j)&&(r=e[j],this[j]=r?r(c):c[j]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Da:Mc,this.isPropagationStopped=Mc,this}return P(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Da)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Da)},persist:function(){},isPersistent:Da}),t}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ss=ut(Vn),Or=P({},Vn,{view:0,detail:0}),jh=ut(Or),Ns,Cs,Rr,$a=P({},Or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Rr&&(Rr&&e.type==="mousemove"?(Ns=e.screenX-Rr.screenX,Cs=e.screenY-Rr.screenY):Cs=Ns=0,Rr=e),Ns)},movementY:function(e){return"movementY"in e?e.movementY:Cs}}),Ic=ut($a),kh=P({},$a,{dataTransfer:0}),Sh=ut(kh),Nh=P({},Or,{relatedTarget:0}),Es=ut(Nh),Ch=P({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0}),Eh=ut(Ch),zh=P({},Vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ph=ut(zh),_h=P({},Vn,{data:0}),Tc=ut(_h),Ah={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ih(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Mh[e])?!!t[e]:!1}function zs(){return Ih}var Th=P({},Or,{key:function(e){if(e.key){var t=Ah[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ra(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zs,charCode:function(e){return e.type==="keypress"?Ra(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ra(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fh=ut(Th),Oh=P({},$a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fc=ut(Oh),Rh=P({},Or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zs}),Dh=ut(Rh),$h=P({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uh=ut($h),Wh=P({},$a,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hh=ut(Wh),Bh=[9,13,27,32],Ps=b&&"CompositionEvent"in window,Dr=null;b&&"documentMode"in document&&(Dr=document.documentMode);var Vh=b&&"TextEvent"in window&&!Dr,Oc=b&&(!Ps||Dr&&8<Dr&&11>=Dr),Rc=" ",Dc=!1;function $c(e,t){switch(e){case"keyup":return Bh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qn=!1;function Qh(e,t){switch(e){case"compositionend":return Uc(t);case"keypress":return t.which!==32?null:(Dc=!0,Rc);case"textInput":return e=t.data,e===Rc&&Dc?null:e;default:return null}}function qh(e,t){if(Qn)return e==="compositionend"||!Ps&&$c(e,t)?(e=Lc(),Oa=ks=nn=null,Qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Oc&&t.locale!=="ko"?null:t.data;default:return null}}var Yh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Yh[e.type]:t==="textarea"}function Hc(e,t,r,i){cc(i),t=Va(t,"onChange"),0<t.length&&(r=new Ss("onChange","change",null,r,i),e.push({event:r,listeners:t}))}var $r=null,Ur=null;function Gh(e){od(e,0)}function Ua(e){var t=Kn(e);if(Kl(t))return e}function Xh(e,t){if(e==="change")return t}var Bc=!1;if(b){var _s;if(b){var As="oninput"in document;if(!As){var Vc=document.createElement("div");Vc.setAttribute("oninput","return;"),As=typeof Vc.oninput=="function"}_s=As}else _s=!1;Bc=_s&&(!document.documentMode||9<document.documentMode)}function Qc(){$r&&($r.detachEvent("onpropertychange",qc),Ur=$r=null)}function qc(e){if(e.propertyName==="value"&&Ua(Ur)){var t=[];Hc(t,Ur,e,ds(e)),mc(Gh,t)}}function Kh(e,t,r){e==="focusin"?(Qc(),$r=t,Ur=r,$r.attachEvent("onpropertychange",qc)):e==="focusout"&&Qc()}function Jh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ua(Ur)}function Zh(e,t){if(e==="click")return Ua(t)}function e0(e,t){if(e==="input"||e==="change")return Ua(t)}function t0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kt=typeof Object.is=="function"?Object.is:t0;function Wr(e,t){if(kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var o=r[i];if(!f.call(t,o)||!kt(e[o],t[o]))return!1}return!0}function Yc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gc(e,t){var r=Yc(e);e=0;for(var i;r;){if(r.nodeType===3){if(i=e+r.textContent.length,e<=t&&i>=t)return{node:r,offset:t-e};e=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Yc(r)}}function Xc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Xc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Kc(){for(var e=window,t=Sa();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Sa(e.document)}return t}function Ls(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function n0(e){var t=Kc(),r=e.focusedElem,i=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Xc(r.ownerDocument.documentElement,r)){if(i!==null&&Ls(r)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,c=Math.min(i.start,o);i=i.end===void 0?c:Math.min(i.end,o),!e.extend&&c>i&&(o=i,i=c,c=o),o=Gc(r,c);var m=Gc(r,i);o&&m&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==m.node||e.focusOffset!==m.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),c>i?(e.addRange(t),e.extend(m.node,m.offset)):(t.setEnd(m.node,m.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var r0=b&&"documentMode"in document&&11>=document.documentMode,qn=null,Ms=null,Hr=null,Is=!1;function Jc(e,t,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Is||qn==null||qn!==Sa(i)||(i=qn,"selectionStart"in i&&Ls(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Hr&&Wr(Hr,i)||(Hr=i,i=Va(Ms,"onSelect"),0<i.length&&(t=new Ss("onSelect","select",null,t,r),e.push({event:t,listeners:i}),t.target=qn)))}function Wa(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Yn={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionend:Wa("Transition","TransitionEnd")},Ts={},Zc={};b&&(Zc=document.createElement("div").style,"AnimationEvent"in window||(delete Yn.animationend.animation,delete Yn.animationiteration.animation,delete Yn.animationstart.animation),"TransitionEvent"in window||delete Yn.transitionend.transition);function Ha(e){if(Ts[e])return Ts[e];if(!Yn[e])return e;var t=Yn[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Zc)return Ts[e]=t[r];return e}var ed=Ha("animationend"),td=Ha("animationiteration"),nd=Ha("animationstart"),rd=Ha("transitionend"),ad=new Map,id="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rn(e,t){ad.set(e,t),p(t,[e])}for(var Fs=0;Fs<id.length;Fs++){var Os=id[Fs],a0=Os.toLowerCase(),i0=Os[0].toUpperCase()+Os.slice(1);rn(a0,"on"+i0)}rn(ed,"onAnimationEnd"),rn(td,"onAnimationIteration"),rn(nd,"onAnimationStart"),rn("dblclick","onDoubleClick"),rn("focusin","onFocus"),rn("focusout","onBlur"),rn(rd,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),s0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));function sd(e,t,r){var i=e.type||"unknown-event";e.currentTarget=r,ah(i,t,void 0,e),e.currentTarget=null}function od(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var i=e[r],o=i.event;i=i.listeners;e:{var c=void 0;if(t)for(var m=i.length-1;0<=m;m--){var j=i[m],S=j.instance,O=j.currentTarget;if(j=j.listener,S!==c&&o.isPropagationStopped())break e;sd(o,j,O),c=S}else for(m=0;m<i.length;m++){if(j=i[m],S=j.instance,O=j.currentTarget,j=j.listener,S!==c&&o.isPropagationStopped())break e;sd(o,j,O),c=S}}}if(Ea)throw e=ps,Ea=!1,ps=null,e}function Pe(e,t){var r=t[Vs];r===void 0&&(r=t[Vs]=new Set);var i=e+"__bubble";r.has(i)||(ld(t,e,2,!1),r.add(i))}function Rs(e,t,r){var i=0;t&&(i|=4),ld(r,e,i,t)}var Ba="_reactListening"+Math.random().toString(36).slice(2);function Vr(e){if(!e[Ba]){e[Ba]=!0,d.forEach(function(r){r!=="selectionchange"&&(s0.has(r)||Rs(r,!1,e),Rs(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ba]||(t[Ba]=!0,Rs("selectionchange",!1,t))}}function ld(e,t,r,i){switch(Ac(t)){case 1:var o=bh;break;case 4:o=wh;break;default:o=ws}r=o.bind(null,t,r,e),o=void 0,!ms||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),i?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function Ds(e,t,r,i,o){var c=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var m=i.tag;if(m===3||m===4){var j=i.stateNode.containerInfo;if(j===o||j.nodeType===8&&j.parentNode===o)break;if(m===4)for(m=i.return;m!==null;){var S=m.tag;if((S===3||S===4)&&(S=m.stateNode.containerInfo,S===o||S.nodeType===8&&S.parentNode===o))return;m=m.return}for(;j!==null;){if(m=kn(j),m===null)return;if(S=m.tag,S===5||S===6){i=c=m;continue e}j=j.parentNode}}i=i.return}mc(function(){var O=c,V=ds(r),Q=[];e:{var B=ad.get(e);if(B!==void 0){var J=Ss,ee=e;switch(e){case"keypress":if(Ra(r)===0)break e;case"keydown":case"keyup":J=Fh;break;case"focusin":ee="focus",J=Es;break;case"focusout":ee="blur",J=Es;break;case"beforeblur":case"afterblur":J=Es;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=Ic;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=Sh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=Dh;break;case ed:case td:case nd:J=Eh;break;case rd:J=Uh;break;case"scroll":J=jh;break;case"wheel":J=Hh;break;case"copy":case"cut":case"paste":J=Ph;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=Fc}var te=(t&4)!==0,$e=!te&&e==="scroll",L=te?B!==null?B+"Capture":null:B;te=[];for(var E=O,T;E!==null;){T=E;var Y=T.stateNode;if(T.tag===5&&Y!==null&&(T=Y,L!==null&&(Y=Er(E,L),Y!=null&&te.push(Qr(E,Y,T)))),$e)break;E=E.return}0<te.length&&(B=new J(B,ee,null,r,V),Q.push({event:B,listeners:te}))}}if((t&7)===0){e:{if(B=e==="mouseover"||e==="pointerover",J=e==="mouseout"||e==="pointerout",B&&r!==cs&&(ee=r.relatedTarget||r.fromElement)&&(kn(ee)||ee[Dt]))break e;if((J||B)&&(B=V.window===V?V:(B=V.ownerDocument)?B.defaultView||B.parentWindow:window,J?(ee=r.relatedTarget||r.toElement,J=O,ee=ee?kn(ee):null,ee!==null&&($e=jn(ee),ee!==$e||ee.tag!==5&&ee.tag!==6)&&(ee=null)):(J=null,ee=O),J!==ee)){if(te=Ic,Y="onMouseLeave",L="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(te=Fc,Y="onPointerLeave",L="onPointerEnter",E="pointer"),$e=J==null?B:Kn(J),T=ee==null?B:Kn(ee),B=new te(Y,E+"leave",J,r,V),B.target=$e,B.relatedTarget=T,Y=null,kn(V)===O&&(te=new te(L,E+"enter",ee,r,V),te.target=T,te.relatedTarget=$e,Y=te),$e=Y,J&&ee)t:{for(te=J,L=ee,E=0,T=te;T;T=Gn(T))E++;for(T=0,Y=L;Y;Y=Gn(Y))T++;for(;0<E-T;)te=Gn(te),E--;for(;0<T-E;)L=Gn(L),T--;for(;E--;){if(te===L||L!==null&&te===L.alternate)break t;te=Gn(te),L=Gn(L)}te=null}else te=null;J!==null&&cd(Q,B,J,te,!1),ee!==null&&$e!==null&&cd(Q,$e,ee,te,!0)}}e:{if(B=O?Kn(O):window,J=B.nodeName&&B.nodeName.toLowerCase(),J==="select"||J==="input"&&B.type==="file")var re=Xh;else if(Wc(B))if(Bc)re=e0;else{re=Jh;var se=Kh}else(J=B.nodeName)&&J.toLowerCase()==="input"&&(B.type==="checkbox"||B.type==="radio")&&(re=Zh);if(re&&(re=re(e,O))){Hc(Q,re,r,V);break e}se&&se(e,B,O),e==="focusout"&&(se=B._wrapperState)&&se.controlled&&B.type==="number"&&as(B,"number",B.value)}switch(se=O?Kn(O):window,e){case"focusin":(Wc(se)||se.contentEditable==="true")&&(qn=se,Ms=O,Hr=null);break;case"focusout":Hr=Ms=qn=null;break;case"mousedown":Is=!0;break;case"contextmenu":case"mouseup":case"dragend":Is=!1,Jc(Q,r,V);break;case"selectionchange":if(r0)break;case"keydown":case"keyup":Jc(Q,r,V)}var oe;if(Ps)e:{switch(e){case"compositionstart":var ue="onCompositionStart";break e;case"compositionend":ue="onCompositionEnd";break e;case"compositionupdate":ue="onCompositionUpdate";break e}ue=void 0}else Qn?$c(e,r)&&(ue="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ue="onCompositionStart");ue&&(Oc&&r.locale!=="ko"&&(Qn||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&Qn&&(oe=Lc()):(nn=V,ks="value"in nn?nn.value:nn.textContent,Qn=!0)),se=Va(O,ue),0<se.length&&(ue=new Tc(ue,e,null,r,V),Q.push({event:ue,listeners:se}),oe?ue.data=oe:(oe=Uc(r),oe!==null&&(ue.data=oe)))),(oe=Vh?Qh(e,r):qh(e,r))&&(O=Va(O,"onBeforeInput"),0<O.length&&(V=new Tc("onBeforeInput","beforeinput",null,r,V),Q.push({event:V,listeners:O}),V.data=oe))}od(Q,t)})}function Qr(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Va(e,t){for(var r=t+"Capture",i=[];e!==null;){var o=e,c=o.stateNode;o.tag===5&&c!==null&&(o=c,c=Er(e,r),c!=null&&i.unshift(Qr(e,c,o)),c=Er(e,t),c!=null&&i.push(Qr(e,c,o))),e=e.return}return i}function Gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cd(e,t,r,i,o){for(var c=t._reactName,m=[];r!==null&&r!==i;){var j=r,S=j.alternate,O=j.stateNode;if(S!==null&&S===i)break;j.tag===5&&O!==null&&(j=O,o?(S=Er(r,c),S!=null&&m.unshift(Qr(r,S,j))):o||(S=Er(r,c),S!=null&&m.push(Qr(r,S,j)))),r=r.return}m.length!==0&&e.push({event:t,listeners:m})}var o0=/\r\n?/g,l0=/\u0000|\uFFFD/g;function dd(e){return(typeof e=="string"?e:""+e).replace(o0,`
`).replace(l0,"")}function Qa(e,t,r){if(t=dd(t),dd(e)!==t&&r)throw Error(s(425))}function qa(){}var $s=null,Us=null;function Ws(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hs=typeof setTimeout=="function"?setTimeout:void 0,c0=typeof clearTimeout=="function"?clearTimeout:void 0,ud=typeof Promise=="function"?Promise:void 0,d0=typeof queueMicrotask=="function"?queueMicrotask:typeof ud<"u"?function(e){return ud.resolve(null).then(e).catch(u0)}:Hs;function u0(e){setTimeout(function(){throw e})}function Bs(e,t){var r=t,i=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(i===0){e.removeChild(o),Fr(t);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=o}while(r);Fr(t)}function an(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function fd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Xn=Math.random().toString(36).slice(2),Mt="__reactFiber$"+Xn,qr="__reactProps$"+Xn,Dt="__reactContainer$"+Xn,Vs="__reactEvents$"+Xn,f0="__reactListeners$"+Xn,m0="__reactHandles$"+Xn;function kn(e){var t=e[Mt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Dt]||r[Mt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=fd(e);e!==null;){if(r=e[Mt])return r;e=fd(e)}return t}e=r,r=e.parentNode}return null}function Yr(e){return e=e[Mt]||e[Dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function Ya(e){return e[qr]||null}var Qs=[],Jn=-1;function sn(e){return{current:e}}function _e(e){0>Jn||(e.current=Qs[Jn],Qs[Jn]=null,Jn--)}function ze(e,t){Jn++,Qs[Jn]=e.current,e.current=t}var on={},Ke=sn(on),rt=sn(!1),Sn=on;function Zn(e,t){var r=e.type.contextTypes;if(!r)return on;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var o={},c;for(c in r)o[c]=t[c];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function at(e){return e=e.childContextTypes,e!=null}function Ga(){_e(rt),_e(Ke)}function md(e,t,r){if(Ke.current!==on)throw Error(s(168));ze(Ke,t),ze(rt,r)}function pd(e,t,r){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var o in i)if(!(o in t))throw Error(s(108,ke(e)||"Unknown",o));return P({},r,i)}function Xa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||on,Sn=Ke.current,ze(Ke,e),ze(rt,rt.current),!0}function hd(e,t,r){var i=e.stateNode;if(!i)throw Error(s(169));r?(e=pd(e,t,Sn),i.__reactInternalMemoizedMergedChildContext=e,_e(rt),_e(Ke),ze(Ke,e)):_e(rt),ze(rt,r)}var $t=null,Ka=!1,qs=!1;function gd(e){$t===null?$t=[e]:$t.push(e)}function p0(e){Ka=!0,gd(e)}function ln(){if(!qs&&$t!==null){qs=!0;var e=0,t=Ee;try{var r=$t;for(Ee=1;e<r.length;e++){var i=r[e];do i=i(!0);while(i!==null)}$t=null,Ka=!1}catch(o){throw $t!==null&&($t=$t.slice(e+1)),vc(hs,ln),o}finally{Ee=t,qs=!1}}return null}var er=[],tr=0,Ja=null,Za=0,gt=[],xt=0,Nn=null,Ut=1,Wt="";function Cn(e,t){er[tr++]=Za,er[tr++]=Ja,Ja=e,Za=t}function xd(e,t,r){gt[xt++]=Ut,gt[xt++]=Wt,gt[xt++]=Nn,Nn=e;var i=Ut;e=Wt;var o=32-jt(i)-1;i&=~(1<<o),r+=1;var c=32-jt(t)+o;if(30<c){var m=o-o%5;c=(i&(1<<m)-1).toString(32),i>>=m,o-=m,Ut=1<<32-jt(t)+o|r<<o|i,Wt=c+e}else Ut=1<<c|r<<o|i,Wt=e}function Ys(e){e.return!==null&&(Cn(e,1),xd(e,1,0))}function Gs(e){for(;e===Ja;)Ja=er[--tr],er[tr]=null,Za=er[--tr],er[tr]=null;for(;e===Nn;)Nn=gt[--xt],gt[xt]=null,Wt=gt[--xt],gt[xt]=null,Ut=gt[--xt],gt[xt]=null}var ft=null,mt=null,Me=!1,St=null;function vd(e,t){var r=wt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function yd(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ft=e,mt=an(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ft=e,mt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Nn!==null?{id:Ut,overflow:Wt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=wt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,ft=e,mt=null,!0):!1;default:return!1}}function Xs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ks(e){if(Me){var t=mt;if(t){var r=t;if(!yd(e,t)){if(Xs(e))throw Error(s(418));t=an(r.nextSibling);var i=ft;t&&yd(e,t)?vd(i,r):(e.flags=e.flags&-4097|2,Me=!1,ft=e)}}else{if(Xs(e))throw Error(s(418));e.flags=e.flags&-4097|2,Me=!1,ft=e}}}function bd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ft=e}function ei(e){if(e!==ft)return!1;if(!Me)return bd(e),Me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ws(e.type,e.memoizedProps)),t&&(t=mt)){if(Xs(e))throw wd(),Error(s(418));for(;t;)vd(e,t),t=an(t.nextSibling)}if(bd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){mt=an(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}mt=null}}else mt=ft?an(e.stateNode.nextSibling):null;return!0}function wd(){for(var e=mt;e;)e=an(e.nextSibling)}function nr(){mt=ft=null,Me=!1}function Js(e){St===null?St=[e]:St.push(e)}var h0=F.ReactCurrentBatchConfig;function Gr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(s(309));var i=r.stateNode}if(!i)throw Error(s(147,e));var o=i,c=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===c?t.ref:(t=function(m){var j=o.refs;m===null?delete j[c]:j[c]=m},t._stringRef=c,t)}if(typeof e!="string")throw Error(s(284));if(!r._owner)throw Error(s(290,e))}return e}function ti(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function jd(e){var t=e._init;return t(e._payload)}function kd(e){function t(L,E){if(e){var T=L.deletions;T===null?(L.deletions=[E],L.flags|=16):T.push(E)}}function r(L,E){if(!e)return null;for(;E!==null;)t(L,E),E=E.sibling;return null}function i(L,E){for(L=new Map;E!==null;)E.key!==null?L.set(E.key,E):L.set(E.index,E),E=E.sibling;return L}function o(L,E){return L=gn(L,E),L.index=0,L.sibling=null,L}function c(L,E,T){return L.index=T,e?(T=L.alternate,T!==null?(T=T.index,T<E?(L.flags|=2,E):T):(L.flags|=2,E)):(L.flags|=1048576,E)}function m(L){return e&&L.alternate===null&&(L.flags|=2),L}function j(L,E,T,Y){return E===null||E.tag!==6?(E=Bo(T,L.mode,Y),E.return=L,E):(E=o(E,T),E.return=L,E)}function S(L,E,T,Y){var re=T.type;return re===ne?V(L,E,T.props.children,Y,T.key):E!==null&&(E.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===Ne&&jd(re)===E.type)?(Y=o(E,T.props),Y.ref=Gr(L,E,T),Y.return=L,Y):(Y=Ni(T.type,T.key,T.props,null,L.mode,Y),Y.ref=Gr(L,E,T),Y.return=L,Y)}function O(L,E,T,Y){return E===null||E.tag!==4||E.stateNode.containerInfo!==T.containerInfo||E.stateNode.implementation!==T.implementation?(E=Vo(T,L.mode,Y),E.return=L,E):(E=o(E,T.children||[]),E.return=L,E)}function V(L,E,T,Y,re){return E===null||E.tag!==7?(E=In(T,L.mode,Y,re),E.return=L,E):(E=o(E,T),E.return=L,E)}function Q(L,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Bo(""+E,L.mode,T),E.return=L,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case D:return T=Ni(E.type,E.key,E.props,null,L.mode,T),T.ref=Gr(L,null,E),T.return=L,T;case G:return E=Vo(E,L.mode,T),E.return=L,E;case Ne:var Y=E._init;return Q(L,Y(E._payload),T)}if(Sr(E)||R(E))return E=In(E,L.mode,T,null),E.return=L,E;ti(L,E)}return null}function B(L,E,T,Y){var re=E!==null?E.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return re!==null?null:j(L,E,""+T,Y);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case D:return T.key===re?S(L,E,T,Y):null;case G:return T.key===re?O(L,E,T,Y):null;case Ne:return re=T._init,B(L,E,re(T._payload),Y)}if(Sr(T)||R(T))return re!==null?null:V(L,E,T,Y,null);ti(L,T)}return null}function J(L,E,T,Y,re){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return L=L.get(T)||null,j(E,L,""+Y,re);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case D:return L=L.get(Y.key===null?T:Y.key)||null,S(E,L,Y,re);case G:return L=L.get(Y.key===null?T:Y.key)||null,O(E,L,Y,re);case Ne:var se=Y._init;return J(L,E,T,se(Y._payload),re)}if(Sr(Y)||R(Y))return L=L.get(T)||null,V(E,L,Y,re,null);ti(E,Y)}return null}function ee(L,E,T,Y){for(var re=null,se=null,oe=E,ue=E=0,Qe=null;oe!==null&&ue<T.length;ue++){oe.index>ue?(Qe=oe,oe=null):Qe=oe.sibling;var we=B(L,oe,T[ue],Y);if(we===null){oe===null&&(oe=Qe);break}e&&oe&&we.alternate===null&&t(L,oe),E=c(we,E,ue),se===null?re=we:se.sibling=we,se=we,oe=Qe}if(ue===T.length)return r(L,oe),Me&&Cn(L,ue),re;if(oe===null){for(;ue<T.length;ue++)oe=Q(L,T[ue],Y),oe!==null&&(E=c(oe,E,ue),se===null?re=oe:se.sibling=oe,se=oe);return Me&&Cn(L,ue),re}for(oe=i(L,oe);ue<T.length;ue++)Qe=J(oe,L,ue,T[ue],Y),Qe!==null&&(e&&Qe.alternate!==null&&oe.delete(Qe.key===null?ue:Qe.key),E=c(Qe,E,ue),se===null?re=Qe:se.sibling=Qe,se=Qe);return e&&oe.forEach(function(xn){return t(L,xn)}),Me&&Cn(L,ue),re}function te(L,E,T,Y){var re=R(T);if(typeof re!="function")throw Error(s(150));if(T=re.call(T),T==null)throw Error(s(151));for(var se=re=null,oe=E,ue=E=0,Qe=null,we=T.next();oe!==null&&!we.done;ue++,we=T.next()){oe.index>ue?(Qe=oe,oe=null):Qe=oe.sibling;var xn=B(L,oe,we.value,Y);if(xn===null){oe===null&&(oe=Qe);break}e&&oe&&xn.alternate===null&&t(L,oe),E=c(xn,E,ue),se===null?re=xn:se.sibling=xn,se=xn,oe=Qe}if(we.done)return r(L,oe),Me&&Cn(L,ue),re;if(oe===null){for(;!we.done;ue++,we=T.next())we=Q(L,we.value,Y),we!==null&&(E=c(we,E,ue),se===null?re=we:se.sibling=we,se=we);return Me&&Cn(L,ue),re}for(oe=i(L,oe);!we.done;ue++,we=T.next())we=J(oe,L,ue,we.value,Y),we!==null&&(e&&we.alternate!==null&&oe.delete(we.key===null?ue:we.key),E=c(we,E,ue),se===null?re=we:se.sibling=we,se=we);return e&&oe.forEach(function(Y0){return t(L,Y0)}),Me&&Cn(L,ue),re}function $e(L,E,T,Y){if(typeof T=="object"&&T!==null&&T.type===ne&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case D:e:{for(var re=T.key,se=E;se!==null;){if(se.key===re){if(re=T.type,re===ne){if(se.tag===7){r(L,se.sibling),E=o(se,T.props.children),E.return=L,L=E;break e}}else if(se.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===Ne&&jd(re)===se.type){r(L,se.sibling),E=o(se,T.props),E.ref=Gr(L,se,T),E.return=L,L=E;break e}r(L,se);break}else t(L,se);se=se.sibling}T.type===ne?(E=In(T.props.children,L.mode,Y,T.key),E.return=L,L=E):(Y=Ni(T.type,T.key,T.props,null,L.mode,Y),Y.ref=Gr(L,E,T),Y.return=L,L=Y)}return m(L);case G:e:{for(se=T.key;E!==null;){if(E.key===se)if(E.tag===4&&E.stateNode.containerInfo===T.containerInfo&&E.stateNode.implementation===T.implementation){r(L,E.sibling),E=o(E,T.children||[]),E.return=L,L=E;break e}else{r(L,E);break}else t(L,E);E=E.sibling}E=Vo(T,L.mode,Y),E.return=L,L=E}return m(L);case Ne:return se=T._init,$e(L,E,se(T._payload),Y)}if(Sr(T))return ee(L,E,T,Y);if(R(T))return te(L,E,T,Y);ti(L,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,E!==null&&E.tag===6?(r(L,E.sibling),E=o(E,T),E.return=L,L=E):(r(L,E),E=Bo(T,L.mode,Y),E.return=L,L=E),m(L)):r(L,E)}return $e}var rr=kd(!0),Sd=kd(!1),ni=sn(null),ri=null,ar=null,Zs=null;function eo(){Zs=ar=ri=null}function to(e){var t=ni.current;_e(ni),e._currentValue=t}function no(e,t,r){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===r)break;e=e.return}}function ir(e,t){ri=e,Zs=ar=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(it=!0),e.firstContext=null)}function vt(e){var t=e._currentValue;if(Zs!==e)if(e={context:e,memoizedValue:t,next:null},ar===null){if(ri===null)throw Error(s(308));ar=e,ri.dependencies={lanes:0,firstContext:e}}else ar=ar.next=e;return t}var En=null;function ro(e){En===null?En=[e]:En.push(e)}function Nd(e,t,r,i){var o=t.interleaved;return o===null?(r.next=r,ro(t)):(r.next=o.next,o.next=r),t.interleaved=r,Ht(e,i)}function Ht(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var cn=!1;function ao(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dn(e,t,r){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(be&2)!==0){var o=i.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),i.pending=t,Ht(e,r)}return o=i.interleaved,o===null?(t.next=t,ro(i)):(t.next=o.next,o.next=t),i.interleaved=t,Ht(e,r)}function ai(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,vs(e,r)}}function Ed(e,t){var r=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var o=null,c=null;if(r=r.firstBaseUpdate,r!==null){do{var m={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};c===null?o=c=m:c=c.next=m,r=r.next}while(r!==null);c===null?o=c=t:c=c.next=t}else o=c=t;r={baseState:i.baseState,firstBaseUpdate:o,lastBaseUpdate:c,shared:i.shared,effects:i.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function ii(e,t,r,i){var o=e.updateQueue;cn=!1;var c=o.firstBaseUpdate,m=o.lastBaseUpdate,j=o.shared.pending;if(j!==null){o.shared.pending=null;var S=j,O=S.next;S.next=null,m===null?c=O:m.next=O,m=S;var V=e.alternate;V!==null&&(V=V.updateQueue,j=V.lastBaseUpdate,j!==m&&(j===null?V.firstBaseUpdate=O:j.next=O,V.lastBaseUpdate=S))}if(c!==null){var Q=o.baseState;m=0,V=O=S=null,j=c;do{var B=j.lane,J=j.eventTime;if((i&B)===B){V!==null&&(V=V.next={eventTime:J,lane:0,tag:j.tag,payload:j.payload,callback:j.callback,next:null});e:{var ee=e,te=j;switch(B=t,J=r,te.tag){case 1:if(ee=te.payload,typeof ee=="function"){Q=ee.call(J,Q,B);break e}Q=ee;break e;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=te.payload,B=typeof ee=="function"?ee.call(J,Q,B):ee,B==null)break e;Q=P({},Q,B);break e;case 2:cn=!0}}j.callback!==null&&j.lane!==0&&(e.flags|=64,B=o.effects,B===null?o.effects=[j]:B.push(j))}else J={eventTime:J,lane:B,tag:j.tag,payload:j.payload,callback:j.callback,next:null},V===null?(O=V=J,S=Q):V=V.next=J,m|=B;if(j=j.next,j===null){if(j=o.shared.pending,j===null)break;B=j,j=B.next,B.next=null,o.lastBaseUpdate=B,o.shared.pending=null}}while(!0);if(V===null&&(S=Q),o.baseState=S,o.firstBaseUpdate=O,o.lastBaseUpdate=V,t=o.shared.interleaved,t!==null){o=t;do m|=o.lane,o=o.next;while(o!==t)}else c===null&&(o.shared.lanes=0);_n|=m,e.lanes=m,e.memoizedState=Q}}function zd(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],o=i.callback;if(o!==null){if(i.callback=null,i=r,typeof o!="function")throw Error(s(191,o));o.call(i)}}}var Xr={},It=sn(Xr),Kr=sn(Xr),Jr=sn(Xr);function zn(e){if(e===Xr)throw Error(s(174));return e}function io(e,t){switch(ze(Jr,t),ze(Kr,e),ze(It,Xr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ss(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ss(t,e)}_e(It),ze(It,t)}function sr(){_e(It),_e(Kr),_e(Jr)}function Pd(e){zn(Jr.current);var t=zn(It.current),r=ss(t,e.type);t!==r&&(ze(Kr,e),ze(It,r))}function so(e){Kr.current===e&&(_e(It),_e(Kr))}var Ie=sn(0);function si(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var oo=[];function lo(){for(var e=0;e<oo.length;e++)oo[e]._workInProgressVersionPrimary=null;oo.length=0}var oi=F.ReactCurrentDispatcher,co=F.ReactCurrentBatchConfig,Pn=0,Te=null,We=null,Be=null,li=!1,Zr=!1,ea=0,g0=0;function Je(){throw Error(s(321))}function uo(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!kt(e[r],t[r]))return!1;return!0}function fo(e,t,r,i,o,c){if(Pn=c,Te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oi.current=e===null||e.memoizedState===null?b0:w0,e=r(i,o),Zr){c=0;do{if(Zr=!1,ea=0,25<=c)throw Error(s(301));c+=1,Be=We=null,t.updateQueue=null,oi.current=j0,e=r(i,o)}while(Zr)}if(oi.current=ui,t=We!==null&&We.next!==null,Pn=0,Be=We=Te=null,li=!1,t)throw Error(s(300));return e}function mo(){var e=ea!==0;return ea=0,e}function Tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Te.memoizedState=Be=e:Be=Be.next=e,Be}function yt(){if(We===null){var e=Te.alternate;e=e!==null?e.memoizedState:null}else e=We.next;var t=Be===null?Te.memoizedState:Be.next;if(t!==null)Be=t,We=e;else{if(e===null)throw Error(s(310));We=e,e={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},Be===null?Te.memoizedState=Be=e:Be=Be.next=e}return Be}function ta(e,t){return typeof t=="function"?t(e):t}function po(e){var t=yt(),r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var i=We,o=i.baseQueue,c=r.pending;if(c!==null){if(o!==null){var m=o.next;o.next=c.next,c.next=m}i.baseQueue=o=c,r.pending=null}if(o!==null){c=o.next,i=i.baseState;var j=m=null,S=null,O=c;do{var V=O.lane;if((Pn&V)===V)S!==null&&(S=S.next={lane:0,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),i=O.hasEagerState?O.eagerState:e(i,O.action);else{var Q={lane:V,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null};S===null?(j=S=Q,m=i):S=S.next=Q,Te.lanes|=V,_n|=V}O=O.next}while(O!==null&&O!==c);S===null?m=i:S.next=j,kt(i,t.memoizedState)||(it=!0),t.memoizedState=i,t.baseState=m,t.baseQueue=S,r.lastRenderedState=i}if(e=r.interleaved,e!==null){o=e;do c=o.lane,Te.lanes|=c,_n|=c,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ho(e){var t=yt(),r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var i=r.dispatch,o=r.pending,c=t.memoizedState;if(o!==null){r.pending=null;var m=o=o.next;do c=e(c,m.action),m=m.next;while(m!==o);kt(c,t.memoizedState)||(it=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),r.lastRenderedState=c}return[c,i]}function _d(){}function Ad(e,t){var r=Te,i=yt(),o=t(),c=!kt(i.memoizedState,o);if(c&&(i.memoizedState=o,it=!0),i=i.queue,go(Id.bind(null,r,i,e),[e]),i.getSnapshot!==t||c||Be!==null&&Be.memoizedState.tag&1){if(r.flags|=2048,na(9,Md.bind(null,r,i,o,t),void 0,null),Ve===null)throw Error(s(349));(Pn&30)!==0||Ld(r,t,o)}return o}function Ld(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Te.updateQueue,t===null?(t={lastEffect:null,stores:null},Te.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Md(e,t,r,i){t.value=r,t.getSnapshot=i,Td(t)&&Fd(e)}function Id(e,t,r){return r(function(){Td(t)&&Fd(e)})}function Td(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!kt(e,r)}catch{return!0}}function Fd(e){var t=Ht(e,1);t!==null&&zt(t,e,1,-1)}function Od(e){var t=Tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:e},t.queue=e,e=e.dispatch=y0.bind(null,Te,e),[t.memoizedState,e]}function na(e,t,r,i){return e={tag:e,create:t,destroy:r,deps:i,next:null},t=Te.updateQueue,t===null?(t={lastEffect:null,stores:null},Te.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(i=r.next,r.next=e,e.next=i,t.lastEffect=e)),e}function Rd(){return yt().memoizedState}function ci(e,t,r,i){var o=Tt();Te.flags|=e,o.memoizedState=na(1|t,r,void 0,i===void 0?null:i)}function di(e,t,r,i){var o=yt();i=i===void 0?null:i;var c=void 0;if(We!==null){var m=We.memoizedState;if(c=m.destroy,i!==null&&uo(i,m.deps)){o.memoizedState=na(t,r,c,i);return}}Te.flags|=e,o.memoizedState=na(1|t,r,c,i)}function Dd(e,t){return ci(8390656,8,e,t)}function go(e,t){return di(2048,8,e,t)}function $d(e,t){return di(4,2,e,t)}function Ud(e,t){return di(4,4,e,t)}function Wd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hd(e,t,r){return r=r!=null?r.concat([e]):null,di(4,4,Wd.bind(null,t,e),r)}function xo(){}function Bd(e,t){var r=yt();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&uo(t,i[1])?i[0]:(r.memoizedState=[e,t],e)}function Vd(e,t){var r=yt();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&uo(t,i[1])?i[0]:(e=e(),r.memoizedState=[e,t],e)}function Qd(e,t,r){return(Pn&21)===0?(e.baseState&&(e.baseState=!1,it=!0),e.memoizedState=r):(kt(r,t)||(r=jc(),Te.lanes|=r,_n|=r,e.baseState=!0),t)}function x0(e,t){var r=Ee;Ee=r!==0&&4>r?r:4,e(!0);var i=co.transition;co.transition={};try{e(!1),t()}finally{Ee=r,co.transition=i}}function qd(){return yt().memoizedState}function v0(e,t,r){var i=pn(e);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},Yd(e))Gd(t,r);else if(r=Nd(e,t,r,i),r!==null){var o=nt();zt(r,e,i,o),Xd(r,t,i)}}function y0(e,t,r){var i=pn(e),o={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(Yd(e))Gd(t,o);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var m=t.lastRenderedState,j=c(m,r);if(o.hasEagerState=!0,o.eagerState=j,kt(j,m)){var S=t.interleaved;S===null?(o.next=o,ro(t)):(o.next=S.next,S.next=o),t.interleaved=o;return}}catch{}finally{}r=Nd(e,t,o,i),r!==null&&(o=nt(),zt(r,e,i,o),Xd(r,t,i))}}function Yd(e){var t=e.alternate;return e===Te||t!==null&&t===Te}function Gd(e,t){Zr=li=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Xd(e,t,r){if((r&4194240)!==0){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,vs(e,r)}}var ui={readContext:vt,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},b0={readContext:vt,useCallback:function(e,t){return Tt().memoizedState=[e,t===void 0?null:t],e},useContext:vt,useEffect:Dd,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ci(4194308,4,Wd.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ci(4194308,4,e,t)},useInsertionEffect:function(e,t){return ci(4,2,e,t)},useMemo:function(e,t){var r=Tt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var i=Tt();return t=r!==void 0?r(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=v0.bind(null,Te,e),[i.memoizedState,e]},useRef:function(e){var t=Tt();return e={current:e},t.memoizedState=e},useState:Od,useDebugValue:xo,useDeferredValue:function(e){return Tt().memoizedState=e},useTransition:function(){var e=Od(!1),t=e[0];return e=x0.bind(null,e[1]),Tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var i=Te,o=Tt();if(Me){if(r===void 0)throw Error(s(407));r=r()}else{if(r=t(),Ve===null)throw Error(s(349));(Pn&30)!==0||Ld(i,t,r)}o.memoizedState=r;var c={value:r,getSnapshot:t};return o.queue=c,Dd(Id.bind(null,i,c,e),[e]),i.flags|=2048,na(9,Md.bind(null,i,c,r,t),void 0,null),r},useId:function(){var e=Tt(),t=Ve.identifierPrefix;if(Me){var r=Wt,i=Ut;r=(i&~(1<<32-jt(i)-1)).toString(32)+r,t=":"+t+"R"+r,r=ea++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=g0++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},w0={readContext:vt,useCallback:Bd,useContext:vt,useEffect:go,useImperativeHandle:Hd,useInsertionEffect:$d,useLayoutEffect:Ud,useMemo:Vd,useReducer:po,useRef:Rd,useState:function(){return po(ta)},useDebugValue:xo,useDeferredValue:function(e){var t=yt();return Qd(t,We.memoizedState,e)},useTransition:function(){var e=po(ta)[0],t=yt().memoizedState;return[e,t]},useMutableSource:_d,useSyncExternalStore:Ad,useId:qd,unstable_isNewReconciler:!1},j0={readContext:vt,useCallback:Bd,useContext:vt,useEffect:go,useImperativeHandle:Hd,useInsertionEffect:$d,useLayoutEffect:Ud,useMemo:Vd,useReducer:ho,useRef:Rd,useState:function(){return ho(ta)},useDebugValue:xo,useDeferredValue:function(e){var t=yt();return We===null?t.memoizedState=e:Qd(t,We.memoizedState,e)},useTransition:function(){var e=ho(ta)[0],t=yt().memoizedState;return[e,t]},useMutableSource:_d,useSyncExternalStore:Ad,useId:qd,unstable_isNewReconciler:!1};function Nt(e,t){if(e&&e.defaultProps){t=P({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function vo(e,t,r,i){t=e.memoizedState,r=r(i,t),r=r==null?t:P({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var fi={isMounted:function(e){return(e=e._reactInternals)?jn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var i=nt(),o=pn(e),c=Bt(i,o);c.payload=t,r!=null&&(c.callback=r),t=dn(e,c,o),t!==null&&(zt(t,e,o,i),ai(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var i=nt(),o=pn(e),c=Bt(i,o);c.tag=1,c.payload=t,r!=null&&(c.callback=r),t=dn(e,c,o),t!==null&&(zt(t,e,o,i),ai(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=nt(),i=pn(e),o=Bt(r,i);o.tag=2,t!=null&&(o.callback=t),t=dn(e,o,i),t!==null&&(zt(t,e,i,r),ai(t,e,i))}};function Kd(e,t,r,i,o,c,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,c,m):t.prototype&&t.prototype.isPureReactComponent?!Wr(r,i)||!Wr(o,c):!0}function Jd(e,t,r){var i=!1,o=on,c=t.contextType;return typeof c=="object"&&c!==null?c=vt(c):(o=at(t)?Sn:Ke.current,i=t.contextTypes,c=(i=i!=null)?Zn(e,o):on),t=new t(r,c),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fi,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=c),t}function Zd(e,t,r,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,i),t.state!==e&&fi.enqueueReplaceState(t,t.state,null)}function yo(e,t,r,i){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs={},ao(e);var c=t.contextType;typeof c=="object"&&c!==null?o.context=vt(c):(c=at(t)?Sn:Ke.current,o.context=Zn(e,c)),o.state=e.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(vo(e,t,c,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&fi.enqueueReplaceState(o,o.state,null),ii(e,r,o,i),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function or(e,t){try{var r="",i=t;do r+=K(i),i=i.return;while(i);var o=r}catch(c){o=`
Error generating stack: `+c.message+`
`+c.stack}return{value:e,source:t,stack:o,digest:null}}function bo(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function wo(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var k0=typeof WeakMap=="function"?WeakMap:Map;function eu(e,t,r){r=Bt(-1,r),r.tag=3,r.payload={element:null};var i=t.value;return r.callback=function(){yi||(yi=!0,Fo=i),wo(e,t)},r}function tu(e,t,r){r=Bt(-1,r),r.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var o=t.value;r.payload=function(){return i(o)},r.callback=function(){wo(e,t)}}var c=e.stateNode;return c!==null&&typeof c.componentDidCatch=="function"&&(r.callback=function(){wo(e,t),typeof i!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var m=t.stack;this.componentDidCatch(t.value,{componentStack:m!==null?m:""})}),r}function nu(e,t,r){var i=e.pingCache;if(i===null){i=e.pingCache=new k0;var o=new Set;i.set(t,o)}else o=i.get(t),o===void 0&&(o=new Set,i.set(t,o));o.has(r)||(o.add(r),e=O0.bind(null,e,t,r),t.then(e,e))}function ru(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function au(e,t,r,i,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Bt(-1,1),t.tag=2,dn(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var S0=F.ReactCurrentOwner,it=!1;function tt(e,t,r,i){t.child=e===null?Sd(t,null,r,i):rr(t,e.child,r,i)}function iu(e,t,r,i,o){r=r.render;var c=t.ref;return ir(t,o),i=fo(e,t,r,i,c,o),r=mo(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Vt(e,t,o)):(Me&&r&&Ys(t),t.flags|=1,tt(e,t,i,o),t.child)}function su(e,t,r,i,o){if(e===null){var c=r.type;return typeof c=="function"&&!Ho(c)&&c.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=c,ou(e,t,c,i,o)):(e=Ni(r.type,null,i,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,(e.lanes&o)===0){var m=c.memoizedProps;if(r=r.compare,r=r!==null?r:Wr,r(m,i)&&e.ref===t.ref)return Vt(e,t,o)}return t.flags|=1,e=gn(c,i),e.ref=t.ref,e.return=t,t.child=e}function ou(e,t,r,i,o){if(e!==null){var c=e.memoizedProps;if(Wr(c,i)&&e.ref===t.ref)if(it=!1,t.pendingProps=i=c,(e.lanes&o)!==0)(e.flags&131072)!==0&&(it=!0);else return t.lanes=e.lanes,Vt(e,t,o)}return jo(e,t,r,i,o)}function lu(e,t,r){var i=t.pendingProps,o=i.children,c=e!==null?e.memoizedState:null;if(i.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ze(cr,pt),pt|=r;else{if((r&1073741824)===0)return e=c!==null?c.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ze(cr,pt),pt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=c!==null?c.baseLanes:r,ze(cr,pt),pt|=i}else c!==null?(i=c.baseLanes|r,t.memoizedState=null):i=r,ze(cr,pt),pt|=i;return tt(e,t,o,r),t.child}function cu(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function jo(e,t,r,i,o){var c=at(r)?Sn:Ke.current;return c=Zn(t,c),ir(t,o),r=fo(e,t,r,i,c,o),i=mo(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Vt(e,t,o)):(Me&&i&&Ys(t),t.flags|=1,tt(e,t,r,o),t.child)}function du(e,t,r,i,o){if(at(r)){var c=!0;Xa(t)}else c=!1;if(ir(t,o),t.stateNode===null)pi(e,t),Jd(t,r,i),yo(t,r,i,o),i=!0;else if(e===null){var m=t.stateNode,j=t.memoizedProps;m.props=j;var S=m.context,O=r.contextType;typeof O=="object"&&O!==null?O=vt(O):(O=at(r)?Sn:Ke.current,O=Zn(t,O));var V=r.getDerivedStateFromProps,Q=typeof V=="function"||typeof m.getSnapshotBeforeUpdate=="function";Q||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(j!==i||S!==O)&&Zd(t,m,i,O),cn=!1;var B=t.memoizedState;m.state=B,ii(t,i,m,o),S=t.memoizedState,j!==i||B!==S||rt.current||cn?(typeof V=="function"&&(vo(t,r,V,i),S=t.memoizedState),(j=cn||Kd(t,r,j,i,B,S,O))?(Q||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(t.flags|=4194308)):(typeof m.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=S),m.props=i,m.state=S,m.context=O,i=j):(typeof m.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{m=t.stateNode,Cd(e,t),j=t.memoizedProps,O=t.type===t.elementType?j:Nt(t.type,j),m.props=O,Q=t.pendingProps,B=m.context,S=r.contextType,typeof S=="object"&&S!==null?S=vt(S):(S=at(r)?Sn:Ke.current,S=Zn(t,S));var J=r.getDerivedStateFromProps;(V=typeof J=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(j!==Q||B!==S)&&Zd(t,m,i,S),cn=!1,B=t.memoizedState,m.state=B,ii(t,i,m,o);var ee=t.memoizedState;j!==Q||B!==ee||rt.current||cn?(typeof J=="function"&&(vo(t,r,J,i),ee=t.memoizedState),(O=cn||Kd(t,r,O,i,B,ee,S)||!1)?(V||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(i,ee,S),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(i,ee,S)),typeof m.componentDidUpdate=="function"&&(t.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof m.componentDidUpdate!="function"||j===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||j===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=ee),m.props=i,m.state=ee,m.context=S,i=O):(typeof m.componentDidUpdate!="function"||j===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||j===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),i=!1)}return ko(e,t,r,i,c,o)}function ko(e,t,r,i,o,c){cu(e,t);var m=(t.flags&128)!==0;if(!i&&!m)return o&&hd(t,r,!1),Vt(e,t,c);i=t.stateNode,S0.current=t;var j=m&&typeof r.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&m?(t.child=rr(t,e.child,null,c),t.child=rr(t,null,j,c)):tt(e,t,j,c),t.memoizedState=i.state,o&&hd(t,r,!0),t.child}function uu(e){var t=e.stateNode;t.pendingContext?md(e,t.pendingContext,t.pendingContext!==t.context):t.context&&md(e,t.context,!1),io(e,t.containerInfo)}function fu(e,t,r,i,o){return nr(),Js(o),t.flags|=256,tt(e,t,r,i),t.child}var So={dehydrated:null,treeContext:null,retryLane:0};function No(e){return{baseLanes:e,cachePool:null,transitions:null}}function mu(e,t,r){var i=t.pendingProps,o=Ie.current,c=!1,m=(t.flags&128)!==0,j;if((j=m)||(j=e!==null&&e.memoizedState===null?!1:(o&2)!==0),j?(c=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ze(Ie,o&1),e===null)return Ks(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(m=i.children,e=i.fallback,c?(i=t.mode,c=t.child,m={mode:"hidden",children:m},(i&1)===0&&c!==null?(c.childLanes=0,c.pendingProps=m):c=Ci(m,i,0,null),e=In(e,i,r,null),c.return=t,e.return=t,c.sibling=e,t.child=c,t.child.memoizedState=No(r),t.memoizedState=So,e):Co(t,m));if(o=e.memoizedState,o!==null&&(j=o.dehydrated,j!==null))return N0(e,t,m,i,j,o,r);if(c){c=i.fallback,m=t.mode,o=e.child,j=o.sibling;var S={mode:"hidden",children:i.children};return(m&1)===0&&t.child!==o?(i=t.child,i.childLanes=0,i.pendingProps=S,t.deletions=null):(i=gn(o,S),i.subtreeFlags=o.subtreeFlags&14680064),j!==null?c=gn(j,c):(c=In(c,m,r,null),c.flags|=2),c.return=t,i.return=t,i.sibling=c,t.child=i,i=c,c=t.child,m=e.child.memoizedState,m=m===null?No(r):{baseLanes:m.baseLanes|r,cachePool:null,transitions:m.transitions},c.memoizedState=m,c.childLanes=e.childLanes&~r,t.memoizedState=So,i}return c=e.child,e=c.sibling,i=gn(c,{mode:"visible",children:i.children}),(t.mode&1)===0&&(i.lanes=r),i.return=t,i.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=i,t.memoizedState=null,i}function Co(e,t){return t=Ci({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mi(e,t,r,i){return i!==null&&Js(i),rr(t,e.child,null,r),e=Co(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function N0(e,t,r,i,o,c,m){if(r)return t.flags&256?(t.flags&=-257,i=bo(Error(s(422))),mi(e,t,m,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(c=i.fallback,o=t.mode,i=Ci({mode:"visible",children:i.children},o,0,null),c=In(c,o,m,null),c.flags|=2,i.return=t,c.return=t,i.sibling=c,t.child=i,(t.mode&1)!==0&&rr(t,e.child,null,m),t.child.memoizedState=No(m),t.memoizedState=So,c);if((t.mode&1)===0)return mi(e,t,m,null);if(o.data==="$!"){if(i=o.nextSibling&&o.nextSibling.dataset,i)var j=i.dgst;return i=j,c=Error(s(419)),i=bo(c,i,void 0),mi(e,t,m,i)}if(j=(m&e.childLanes)!==0,it||j){if(i=Ve,i!==null){switch(m&-m){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(i.suspendedLanes|m))!==0?0:o,o!==0&&o!==c.retryLane&&(c.retryLane=o,Ht(e,o),zt(i,e,o,-1))}return Wo(),i=bo(Error(s(421))),mi(e,t,m,i)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=R0.bind(null,e),o._reactRetry=t,null):(e=c.treeContext,mt=an(o.nextSibling),ft=t,Me=!0,St=null,e!==null&&(gt[xt++]=Ut,gt[xt++]=Wt,gt[xt++]=Nn,Ut=e.id,Wt=e.overflow,Nn=t),t=Co(t,i.children),t.flags|=4096,t)}function pu(e,t,r){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),no(e.return,t,r)}function Eo(e,t,r,i,o){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:o}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=i,c.tail=r,c.tailMode=o)}function hu(e,t,r){var i=t.pendingProps,o=i.revealOrder,c=i.tail;if(tt(e,t,i.children,r),i=Ie.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pu(e,r,t);else if(e.tag===19)pu(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(ze(Ie,i),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&si(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),Eo(t,!1,o,r,c);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&si(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}Eo(t,!0,r,null,c);break;case"together":Eo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function pi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),_n|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,r=gn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=gn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function C0(e,t,r){switch(t.tag){case 3:uu(t),nr();break;case 5:Pd(t);break;case 1:at(t.type)&&Xa(t);break;case 4:io(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,o=t.memoizedProps.value;ze(ni,i._currentValue),i._currentValue=o;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(ze(Ie,Ie.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?mu(e,t,r):(ze(Ie,Ie.current&1),e=Vt(e,t,r),e!==null?e.sibling:null);ze(Ie,Ie.current&1);break;case 19:if(i=(r&t.childLanes)!==0,(e.flags&128)!==0){if(i)return hu(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ze(Ie,Ie.current),i)break;return null;case 22:case 23:return t.lanes=0,lu(e,t,r)}return Vt(e,t,r)}var gu,zo,xu,vu;gu=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},zo=function(){},xu=function(e,t,r,i){var o=e.memoizedProps;if(o!==i){e=t.stateNode,zn(It.current);var c=null;switch(r){case"input":o=ns(e,o),i=ns(e,i),c=[];break;case"select":o=P({},o,{value:void 0}),i=P({},i,{value:void 0}),c=[];break;case"textarea":o=is(e,o),i=is(e,i),c=[];break;default:typeof o.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=qa)}os(r,i);var m;r=null;for(O in o)if(!i.hasOwnProperty(O)&&o.hasOwnProperty(O)&&o[O]!=null)if(O==="style"){var j=o[O];for(m in j)j.hasOwnProperty(m)&&(r||(r={}),r[m]="")}else O!=="dangerouslySetInnerHTML"&&O!=="children"&&O!=="suppressContentEditableWarning"&&O!=="suppressHydrationWarning"&&O!=="autoFocus"&&(u.hasOwnProperty(O)?c||(c=[]):(c=c||[]).push(O,null));for(O in i){var S=i[O];if(j=o!=null?o[O]:void 0,i.hasOwnProperty(O)&&S!==j&&(S!=null||j!=null))if(O==="style")if(j){for(m in j)!j.hasOwnProperty(m)||S&&S.hasOwnProperty(m)||(r||(r={}),r[m]="");for(m in S)S.hasOwnProperty(m)&&j[m]!==S[m]&&(r||(r={}),r[m]=S[m])}else r||(c||(c=[]),c.push(O,r)),r=S;else O==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,j=j?j.__html:void 0,S!=null&&j!==S&&(c=c||[]).push(O,S)):O==="children"?typeof S!="string"&&typeof S!="number"||(c=c||[]).push(O,""+S):O!=="suppressContentEditableWarning"&&O!=="suppressHydrationWarning"&&(u.hasOwnProperty(O)?(S!=null&&O==="onScroll"&&Pe("scroll",e),c||j===S||(c=[])):(c=c||[]).push(O,S))}r&&(c=c||[]).push("style",r);var O=c;(t.updateQueue=O)&&(t.flags|=4)}},vu=function(e,t,r,i){r!==i&&(t.flags|=4)};function ra(e,t){if(!Me)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,i=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,i|=o.subtreeFlags&14680064,i|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,i|=o.subtreeFlags,i|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=i,e.childLanes=r,t}function E0(e,t,r){var i=t.pendingProps;switch(Gs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return at(t.type)&&Ga(),Ze(t),null;case 3:return i=t.stateNode,sr(),_e(rt),_e(Ke),lo(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(ei(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,St!==null&&(Do(St),St=null))),zo(e,t),Ze(t),null;case 5:so(t);var o=zn(Jr.current);if(r=t.type,e!==null&&t.stateNode!=null)xu(e,t,r,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(s(166));return Ze(t),null}if(e=zn(It.current),ei(t)){i=t.stateNode,r=t.type;var c=t.memoizedProps;switch(i[Mt]=t,i[qr]=c,e=(t.mode&1)!==0,r){case"dialog":Pe("cancel",i),Pe("close",i);break;case"iframe":case"object":case"embed":Pe("load",i);break;case"video":case"audio":for(o=0;o<Br.length;o++)Pe(Br[o],i);break;case"source":Pe("error",i);break;case"img":case"image":case"link":Pe("error",i),Pe("load",i);break;case"details":Pe("toggle",i);break;case"input":Jl(i,c),Pe("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!c.multiple},Pe("invalid",i);break;case"textarea":tc(i,c),Pe("invalid",i)}os(r,c),o=null;for(var m in c)if(c.hasOwnProperty(m)){var j=c[m];m==="children"?typeof j=="string"?i.textContent!==j&&(c.suppressHydrationWarning!==!0&&Qa(i.textContent,j,e),o=["children",j]):typeof j=="number"&&i.textContent!==""+j&&(c.suppressHydrationWarning!==!0&&Qa(i.textContent,j,e),o=["children",""+j]):u.hasOwnProperty(m)&&j!=null&&m==="onScroll"&&Pe("scroll",i)}switch(r){case"input":ka(i),ec(i,c,!0);break;case"textarea":ka(i),rc(i);break;case"select":case"option":break;default:typeof c.onClick=="function"&&(i.onclick=qa)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{m=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ac(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=m.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=m.createElement(r,{is:i.is}):(e=m.createElement(r),r==="select"&&(m=e,i.multiple?m.multiple=!0:i.size&&(m.size=i.size))):e=m.createElementNS(e,r),e[Mt]=t,e[qr]=i,gu(e,t,!1,!1),t.stateNode=e;e:{switch(m=ls(r,i),r){case"dialog":Pe("cancel",e),Pe("close",e),o=i;break;case"iframe":case"object":case"embed":Pe("load",e),o=i;break;case"video":case"audio":for(o=0;o<Br.length;o++)Pe(Br[o],e);o=i;break;case"source":Pe("error",e),o=i;break;case"img":case"image":case"link":Pe("error",e),Pe("load",e),o=i;break;case"details":Pe("toggle",e),o=i;break;case"input":Jl(e,i),o=ns(e,i),Pe("invalid",e);break;case"option":o=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},o=P({},i,{value:void 0}),Pe("invalid",e);break;case"textarea":tc(e,i),o=is(e,i),Pe("invalid",e);break;default:o=i}os(r,o),j=o;for(c in j)if(j.hasOwnProperty(c)){var S=j[c];c==="style"?oc(e,S):c==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,S!=null&&ic(e,S)):c==="children"?typeof S=="string"?(r!=="textarea"||S!=="")&&Nr(e,S):typeof S=="number"&&Nr(e,""+S):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(u.hasOwnProperty(c)?S!=null&&c==="onScroll"&&Pe("scroll",e):S!=null&&W(e,c,S,m))}switch(r){case"input":ka(e),ec(e,i,!1);break;case"textarea":ka(e),rc(e);break;case"option":i.value!=null&&e.setAttribute("value",""+Ce(i.value));break;case"select":e.multiple=!!i.multiple,c=i.value,c!=null?Un(e,!!i.multiple,c,!1):i.defaultValue!=null&&Un(e,!!i.multiple,i.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=qa)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ze(t),null;case 6:if(e&&t.stateNode!=null)vu(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(s(166));if(r=zn(Jr.current),zn(It.current),ei(t)){if(i=t.stateNode,r=t.memoizedProps,i[Mt]=t,(c=i.nodeValue!==r)&&(e=ft,e!==null))switch(e.tag){case 3:Qa(i.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qa(i.nodeValue,r,(e.mode&1)!==0)}c&&(t.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[Mt]=t,t.stateNode=i}return Ze(t),null;case 13:if(_e(Ie),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Me&&mt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)wd(),nr(),t.flags|=98560,c=!1;else if(c=ei(t),i!==null&&i.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[Mt]=t}else nr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ze(t),c=!1}else St!==null&&(Do(St),St=null),c=!0;if(!c)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ie.current&1)!==0?He===0&&(He=3):Wo())),t.updateQueue!==null&&(t.flags|=4),Ze(t),null);case 4:return sr(),zo(e,t),e===null&&Vr(t.stateNode.containerInfo),Ze(t),null;case 10:return to(t.type._context),Ze(t),null;case 17:return at(t.type)&&Ga(),Ze(t),null;case 19:if(_e(Ie),c=t.memoizedState,c===null)return Ze(t),null;if(i=(t.flags&128)!==0,m=c.rendering,m===null)if(i)ra(c,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(m=si(e),m!==null){for(t.flags|=128,ra(c,!1),i=m.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=r,r=t.child;r!==null;)c=r,e=i,c.flags&=14680066,m=c.alternate,m===null?(c.childLanes=0,c.lanes=e,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=m.childLanes,c.lanes=m.lanes,c.child=m.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=m.memoizedProps,c.memoizedState=m.memoizedState,c.updateQueue=m.updateQueue,c.type=m.type,e=m.dependencies,c.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ze(Ie,Ie.current&1|2),t.child}e=e.sibling}c.tail!==null&&De()>dr&&(t.flags|=128,i=!0,ra(c,!1),t.lanes=4194304)}else{if(!i)if(e=si(m),e!==null){if(t.flags|=128,i=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),ra(c,!0),c.tail===null&&c.tailMode==="hidden"&&!m.alternate&&!Me)return Ze(t),null}else 2*De()-c.renderingStartTime>dr&&r!==1073741824&&(t.flags|=128,i=!0,ra(c,!1),t.lanes=4194304);c.isBackwards?(m.sibling=t.child,t.child=m):(r=c.last,r!==null?r.sibling=m:t.child=m,c.last=m)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=De(),t.sibling=null,r=Ie.current,ze(Ie,i?r&1|2:r&1),t):(Ze(t),null);case 22:case 23:return Uo(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&(t.mode&1)!==0?(pt&1073741824)!==0&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function z0(e,t){switch(Gs(t),t.tag){case 1:return at(t.type)&&Ga(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sr(),_e(rt),_e(Ke),lo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return so(t),null;case 13:if(_e(Ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));nr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _e(Ie),null;case 4:return sr(),null;case 10:return to(t.type._context),null;case 22:case 23:return Uo(),null;case 24:return null;default:return null}}var hi=!1,et=!1,P0=typeof WeakSet=="function"?WeakSet:Set,Z=null;function lr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){Oe(e,t,i)}else r.current=null}function Po(e,t,r){try{r()}catch(i){Oe(e,t,i)}}var yu=!1;function _0(e,t){if($s=Ta,e=Kc(),Ls(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var o=i.anchorOffset,c=i.focusNode;i=i.focusOffset;try{r.nodeType,c.nodeType}catch{r=null;break e}var m=0,j=-1,S=-1,O=0,V=0,Q=e,B=null;t:for(;;){for(var J;Q!==r||o!==0&&Q.nodeType!==3||(j=m+o),Q!==c||i!==0&&Q.nodeType!==3||(S=m+i),Q.nodeType===3&&(m+=Q.nodeValue.length),(J=Q.firstChild)!==null;)B=Q,Q=J;for(;;){if(Q===e)break t;if(B===r&&++O===o&&(j=m),B===c&&++V===i&&(S=m),(J=Q.nextSibling)!==null)break;Q=B,B=Q.parentNode}Q=J}r=j===-1||S===-1?null:{start:j,end:S}}else r=null}r=r||{start:0,end:0}}else r=null;for(Us={focusedElem:e,selectionRange:r},Ta=!1,Z=t;Z!==null;)if(t=Z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Z=e;else for(;Z!==null;){t=Z;try{var ee=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ee!==null){var te=ee.memoizedProps,$e=ee.memoizedState,L=t.stateNode,E=L.getSnapshotBeforeUpdate(t.elementType===t.type?te:Nt(t.type,te),$e);L.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var T=t.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(Y){Oe(t,t.return,Y)}if(e=t.sibling,e!==null){e.return=t.return,Z=e;break}Z=t.return}return ee=yu,yu=!1,ee}function aa(e,t,r){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&e)===e){var c=o.destroy;o.destroy=void 0,c!==void 0&&Po(t,r,c)}o=o.next}while(o!==i)}}function gi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var i=r.create;r.destroy=i()}r=r.next}while(r!==t)}}function _o(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function bu(e){var t=e.alternate;t!==null&&(e.alternate=null,bu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Mt],delete t[qr],delete t[Vs],delete t[f0],delete t[m0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wu(e){return e.tag===5||e.tag===3||e.tag===4}function ju(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ao(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=qa));else if(i!==4&&(e=e.child,e!==null))for(Ao(e,t,r),e=e.sibling;e!==null;)Ao(e,t,r),e=e.sibling}function Lo(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Lo(e,t,r),e=e.sibling;e!==null;)Lo(e,t,r),e=e.sibling}var qe=null,Ct=!1;function un(e,t,r){for(r=r.child;r!==null;)ku(e,t,r),r=r.sibling}function ku(e,t,r){if(Lt&&typeof Lt.onCommitFiberUnmount=="function")try{Lt.onCommitFiberUnmount(Pa,r)}catch{}switch(r.tag){case 5:et||lr(r,t);case 6:var i=qe,o=Ct;qe=null,un(e,t,r),qe=i,Ct=o,qe!==null&&(Ct?(e=qe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):qe.removeChild(r.stateNode));break;case 18:qe!==null&&(Ct?(e=qe,r=r.stateNode,e.nodeType===8?Bs(e.parentNode,r):e.nodeType===1&&Bs(e,r),Fr(e)):Bs(qe,r.stateNode));break;case 4:i=qe,o=Ct,qe=r.stateNode.containerInfo,Ct=!0,un(e,t,r),qe=i,Ct=o;break;case 0:case 11:case 14:case 15:if(!et&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){o=i=i.next;do{var c=o,m=c.destroy;c=c.tag,m!==void 0&&((c&2)!==0||(c&4)!==0)&&Po(r,t,m),o=o.next}while(o!==i)}un(e,t,r);break;case 1:if(!et&&(lr(r,t),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(j){Oe(r,t,j)}un(e,t,r);break;case 21:un(e,t,r);break;case 22:r.mode&1?(et=(i=et)||r.memoizedState!==null,un(e,t,r),et=i):un(e,t,r);break;default:un(e,t,r)}}function Su(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new P0),t.forEach(function(i){var o=D0.bind(null,e,i);r.has(i)||(r.add(i),i.then(o,o))})}}function Et(e,t){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var o=r[i];try{var c=e,m=t,j=m;e:for(;j!==null;){switch(j.tag){case 5:qe=j.stateNode,Ct=!1;break e;case 3:qe=j.stateNode.containerInfo,Ct=!0;break e;case 4:qe=j.stateNode.containerInfo,Ct=!0;break e}j=j.return}if(qe===null)throw Error(s(160));ku(c,m,o),qe=null,Ct=!1;var S=o.alternate;S!==null&&(S.return=null),o.return=null}catch(O){Oe(o,t,O)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Nu(t,e),t=t.sibling}function Nu(e,t){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Et(t,e),Ft(e),i&4){try{aa(3,e,e.return),gi(3,e)}catch(te){Oe(e,e.return,te)}try{aa(5,e,e.return)}catch(te){Oe(e,e.return,te)}}break;case 1:Et(t,e),Ft(e),i&512&&r!==null&&lr(r,r.return);break;case 5:if(Et(t,e),Ft(e),i&512&&r!==null&&lr(r,r.return),e.flags&32){var o=e.stateNode;try{Nr(o,"")}catch(te){Oe(e,e.return,te)}}if(i&4&&(o=e.stateNode,o!=null)){var c=e.memoizedProps,m=r!==null?r.memoizedProps:c,j=e.type,S=e.updateQueue;if(e.updateQueue=null,S!==null)try{j==="input"&&c.type==="radio"&&c.name!=null&&Zl(o,c),ls(j,m);var O=ls(j,c);for(m=0;m<S.length;m+=2){var V=S[m],Q=S[m+1];V==="style"?oc(o,Q):V==="dangerouslySetInnerHTML"?ic(o,Q):V==="children"?Nr(o,Q):W(o,V,Q,O)}switch(j){case"input":rs(o,c);break;case"textarea":nc(o,c);break;case"select":var B=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!c.multiple;var J=c.value;J!=null?Un(o,!!c.multiple,J,!1):B!==!!c.multiple&&(c.defaultValue!=null?Un(o,!!c.multiple,c.defaultValue,!0):Un(o,!!c.multiple,c.multiple?[]:"",!1))}o[qr]=c}catch(te){Oe(e,e.return,te)}}break;case 6:if(Et(t,e),Ft(e),i&4){if(e.stateNode===null)throw Error(s(162));o=e.stateNode,c=e.memoizedProps;try{o.nodeValue=c}catch(te){Oe(e,e.return,te)}}break;case 3:if(Et(t,e),Ft(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{Fr(t.containerInfo)}catch(te){Oe(e,e.return,te)}break;case 4:Et(t,e),Ft(e);break;case 13:Et(t,e),Ft(e),o=e.child,o.flags&8192&&(c=o.memoizedState!==null,o.stateNode.isHidden=c,!c||o.alternate!==null&&o.alternate.memoizedState!==null||(To=De())),i&4&&Su(e);break;case 22:if(V=r!==null&&r.memoizedState!==null,e.mode&1?(et=(O=et)||V,Et(t,e),et=O):Et(t,e),Ft(e),i&8192){if(O=e.memoizedState!==null,(e.stateNode.isHidden=O)&&!V&&(e.mode&1)!==0)for(Z=e,V=e.child;V!==null;){for(Q=Z=V;Z!==null;){switch(B=Z,J=B.child,B.tag){case 0:case 11:case 14:case 15:aa(4,B,B.return);break;case 1:lr(B,B.return);var ee=B.stateNode;if(typeof ee.componentWillUnmount=="function"){i=B,r=B.return;try{t=i,ee.props=t.memoizedProps,ee.state=t.memoizedState,ee.componentWillUnmount()}catch(te){Oe(i,r,te)}}break;case 5:lr(B,B.return);break;case 22:if(B.memoizedState!==null){zu(Q);continue}}J!==null?(J.return=B,Z=J):zu(Q)}V=V.sibling}e:for(V=null,Q=e;;){if(Q.tag===5){if(V===null){V=Q;try{o=Q.stateNode,O?(c=o.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"):(j=Q.stateNode,S=Q.memoizedProps.style,m=S!=null&&S.hasOwnProperty("display")?S.display:null,j.style.display=sc("display",m))}catch(te){Oe(e,e.return,te)}}}else if(Q.tag===6){if(V===null)try{Q.stateNode.nodeValue=O?"":Q.memoizedProps}catch(te){Oe(e,e.return,te)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===e)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===e)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===e)break e;V===Q&&(V=null),Q=Q.return}V===Q&&(V=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:Et(t,e),Ft(e),i&4&&Su(e);break;case 21:break;default:Et(t,e),Ft(e)}}function Ft(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(wu(r)){var i=r;break e}r=r.return}throw Error(s(160))}switch(i.tag){case 5:var o=i.stateNode;i.flags&32&&(Nr(o,""),i.flags&=-33);var c=ju(e);Lo(e,c,o);break;case 3:case 4:var m=i.stateNode.containerInfo,j=ju(e);Ao(e,j,m);break;default:throw Error(s(161))}}catch(S){Oe(e,e.return,S)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function A0(e,t,r){Z=e,Cu(e)}function Cu(e,t,r){for(var i=(e.mode&1)!==0;Z!==null;){var o=Z,c=o.child;if(o.tag===22&&i){var m=o.memoizedState!==null||hi;if(!m){var j=o.alternate,S=j!==null&&j.memoizedState!==null||et;j=hi;var O=et;if(hi=m,(et=S)&&!O)for(Z=o;Z!==null;)m=Z,S=m.child,m.tag===22&&m.memoizedState!==null?Pu(o):S!==null?(S.return=m,Z=S):Pu(o);for(;c!==null;)Z=c,Cu(c),c=c.sibling;Z=o,hi=j,et=O}Eu(e)}else(o.subtreeFlags&8772)!==0&&c!==null?(c.return=o,Z=c):Eu(e)}}function Eu(e){for(;Z!==null;){var t=Z;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:et||gi(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!et)if(r===null)i.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:Nt(t.type,r.memoizedProps);i.componentDidUpdate(o,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var c=t.updateQueue;c!==null&&zd(t,c,i);break;case 3:var m=t.updateQueue;if(m!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}zd(t,m,r)}break;case 5:var j=t.stateNode;if(r===null&&t.flags&4){r=j;var S=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":S.autoFocus&&r.focus();break;case"img":S.src&&(r.src=S.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var O=t.alternate;if(O!==null){var V=O.memoizedState;if(V!==null){var Q=V.dehydrated;Q!==null&&Fr(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}et||t.flags&512&&_o(t)}catch(B){Oe(t,t.return,B)}}if(t===e){Z=null;break}if(r=t.sibling,r!==null){r.return=t.return,Z=r;break}Z=t.return}}function zu(e){for(;Z!==null;){var t=Z;if(t===e){Z=null;break}var r=t.sibling;if(r!==null){r.return=t.return,Z=r;break}Z=t.return}}function Pu(e){for(;Z!==null;){var t=Z;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{gi(4,t)}catch(S){Oe(t,r,S)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var o=t.return;try{i.componentDidMount()}catch(S){Oe(t,o,S)}}var c=t.return;try{_o(t)}catch(S){Oe(t,c,S)}break;case 5:var m=t.return;try{_o(t)}catch(S){Oe(t,m,S)}}}catch(S){Oe(t,t.return,S)}if(t===e){Z=null;break}var j=t.sibling;if(j!==null){j.return=t.return,Z=j;break}Z=t.return}}var L0=Math.ceil,xi=F.ReactCurrentDispatcher,Mo=F.ReactCurrentOwner,bt=F.ReactCurrentBatchConfig,be=0,Ve=null,Ue=null,Ye=0,pt=0,cr=sn(0),He=0,ia=null,_n=0,vi=0,Io=0,sa=null,st=null,To=0,dr=1/0,Qt=null,yi=!1,Fo=null,fn=null,bi=!1,mn=null,wi=0,oa=0,Oo=null,ji=-1,ki=0;function nt(){return(be&6)!==0?De():ji!==-1?ji:ji=De()}function pn(e){return(e.mode&1)===0?1:(be&2)!==0&&Ye!==0?Ye&-Ye:h0.transition!==null?(ki===0&&(ki=jc()),ki):(e=Ee,e!==0||(e=window.event,e=e===void 0?16:Ac(e.type)),e)}function zt(e,t,r,i){if(50<oa)throw oa=0,Oo=null,Error(s(185));Ar(e,r,i),((be&2)===0||e!==Ve)&&(e===Ve&&((be&2)===0&&(vi|=r),He===4&&hn(e,Ye)),ot(e,i),r===1&&be===0&&(t.mode&1)===0&&(dr=De()+500,Ka&&ln()))}function ot(e,t){var r=e.callbackNode;hh(e,t);var i=La(e,e===Ve?Ye:0);if(i===0)r!==null&&yc(r),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(r!=null&&yc(r),t===1)e.tag===0?p0(Au.bind(null,e)):gd(Au.bind(null,e)),d0(function(){(be&6)===0&&ln()}),r=null;else{switch(kc(i)){case 1:r=hs;break;case 4:r=bc;break;case 16:r=za;break;case 536870912:r=wc;break;default:r=za}r=Du(r,_u.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function _u(e,t){if(ji=-1,ki=0,(be&6)!==0)throw Error(s(327));var r=e.callbackNode;if(ur()&&e.callbackNode!==r)return null;var i=La(e,e===Ve?Ye:0);if(i===0)return null;if((i&30)!==0||(i&e.expiredLanes)!==0||t)t=Si(e,i);else{t=i;var o=be;be|=2;var c=Mu();(Ve!==e||Ye!==t)&&(Qt=null,dr=De()+500,Ln(e,t));do try{T0();break}catch(j){Lu(e,j)}while(!0);eo(),xi.current=c,be=o,Ue!==null?t=0:(Ve=null,Ye=0,t=He)}if(t!==0){if(t===2&&(o=gs(e),o!==0&&(i=o,t=Ro(e,o))),t===1)throw r=ia,Ln(e,0),hn(e,i),ot(e,De()),r;if(t===6)hn(e,i);else{if(o=e.current.alternate,(i&30)===0&&!M0(o)&&(t=Si(e,i),t===2&&(c=gs(e),c!==0&&(i=c,t=Ro(e,c))),t===1))throw r=ia,Ln(e,0),hn(e,i),ot(e,De()),r;switch(e.finishedWork=o,e.finishedLanes=i,t){case 0:case 1:throw Error(s(345));case 2:Mn(e,st,Qt);break;case 3:if(hn(e,i),(i&130023424)===i&&(t=To+500-De(),10<t)){if(La(e,0)!==0)break;if(o=e.suspendedLanes,(o&i)!==i){nt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Hs(Mn.bind(null,e,st,Qt),t);break}Mn(e,st,Qt);break;case 4:if(hn(e,i),(i&4194240)===i)break;for(t=e.eventTimes,o=-1;0<i;){var m=31-jt(i);c=1<<m,m=t[m],m>o&&(o=m),i&=~c}if(i=o,i=De()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*L0(i/1960))-i,10<i){e.timeoutHandle=Hs(Mn.bind(null,e,st,Qt),i);break}Mn(e,st,Qt);break;case 5:Mn(e,st,Qt);break;default:throw Error(s(329))}}}return ot(e,De()),e.callbackNode===r?_u.bind(null,e):null}function Ro(e,t){var r=sa;return e.current.memoizedState.isDehydrated&&(Ln(e,t).flags|=256),e=Si(e,t),e!==2&&(t=st,st=r,t!==null&&Do(t)),e}function Do(e){st===null?st=e:st.push.apply(st,e)}function M0(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var o=r[i],c=o.getSnapshot;o=o.value;try{if(!kt(c(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function hn(e,t){for(t&=~Io,t&=~vi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-jt(t),i=1<<r;e[r]=-1,t&=~i}}function Au(e){if((be&6)!==0)throw Error(s(327));ur();var t=La(e,0);if((t&1)===0)return ot(e,De()),null;var r=Si(e,t);if(e.tag!==0&&r===2){var i=gs(e);i!==0&&(t=i,r=Ro(e,i))}if(r===1)throw r=ia,Ln(e,0),hn(e,t),ot(e,De()),r;if(r===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mn(e,st,Qt),ot(e,De()),null}function $o(e,t){var r=be;be|=1;try{return e(t)}finally{be=r,be===0&&(dr=De()+500,Ka&&ln())}}function An(e){mn!==null&&mn.tag===0&&(be&6)===0&&ur();var t=be;be|=1;var r=bt.transition,i=Ee;try{if(bt.transition=null,Ee=1,e)return e()}finally{Ee=i,bt.transition=r,be=t,(be&6)===0&&ln()}}function Uo(){pt=cr.current,_e(cr)}function Ln(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,c0(r)),Ue!==null)for(r=Ue.return;r!==null;){var i=r;switch(Gs(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ga();break;case 3:sr(),_e(rt),_e(Ke),lo();break;case 5:so(i);break;case 4:sr();break;case 13:_e(Ie);break;case 19:_e(Ie);break;case 10:to(i.type._context);break;case 22:case 23:Uo()}r=r.return}if(Ve=e,Ue=e=gn(e.current,null),Ye=pt=t,He=0,ia=null,Io=vi=_n=0,st=sa=null,En!==null){for(t=0;t<En.length;t++)if(r=En[t],i=r.interleaved,i!==null){r.interleaved=null;var o=i.next,c=r.pending;if(c!==null){var m=c.next;c.next=o,i.next=m}r.pending=i}En=null}return e}function Lu(e,t){do{var r=Ue;try{if(eo(),oi.current=ui,li){for(var i=Te.memoizedState;i!==null;){var o=i.queue;o!==null&&(o.pending=null),i=i.next}li=!1}if(Pn=0,Be=We=Te=null,Zr=!1,ea=0,Mo.current=null,r===null||r.return===null){He=1,ia=t,Ue=null;break}e:{var c=e,m=r.return,j=r,S=t;if(t=Ye,j.flags|=32768,S!==null&&typeof S=="object"&&typeof S.then=="function"){var O=S,V=j,Q=V.tag;if((V.mode&1)===0&&(Q===0||Q===11||Q===15)){var B=V.alternate;B?(V.updateQueue=B.updateQueue,V.memoizedState=B.memoizedState,V.lanes=B.lanes):(V.updateQueue=null,V.memoizedState=null)}var J=ru(m);if(J!==null){J.flags&=-257,au(J,m,j,c,t),J.mode&1&&nu(c,O,t),t=J,S=O;var ee=t.updateQueue;if(ee===null){var te=new Set;te.add(S),t.updateQueue=te}else ee.add(S);break e}else{if((t&1)===0){nu(c,O,t),Wo();break e}S=Error(s(426))}}else if(Me&&j.mode&1){var $e=ru(m);if($e!==null){($e.flags&65536)===0&&($e.flags|=256),au($e,m,j,c,t),Js(or(S,j));break e}}c=S=or(S,j),He!==4&&(He=2),sa===null?sa=[c]:sa.push(c),c=m;do{switch(c.tag){case 3:c.flags|=65536,t&=-t,c.lanes|=t;var L=eu(c,S,t);Ed(c,L);break e;case 1:j=S;var E=c.type,T=c.stateNode;if((c.flags&128)===0&&(typeof E.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(fn===null||!fn.has(T)))){c.flags|=65536,t&=-t,c.lanes|=t;var Y=tu(c,j,t);Ed(c,Y);break e}}c=c.return}while(c!==null)}Tu(r)}catch(re){t=re,Ue===r&&r!==null&&(Ue=r=r.return);continue}break}while(!0)}function Mu(){var e=xi.current;return xi.current=ui,e===null?ui:e}function Wo(){(He===0||He===3||He===2)&&(He=4),Ve===null||(_n&268435455)===0&&(vi&268435455)===0||hn(Ve,Ye)}function Si(e,t){var r=be;be|=2;var i=Mu();(Ve!==e||Ye!==t)&&(Qt=null,Ln(e,t));do try{I0();break}catch(o){Lu(e,o)}while(!0);if(eo(),be=r,xi.current=i,Ue!==null)throw Error(s(261));return Ve=null,Ye=0,He}function I0(){for(;Ue!==null;)Iu(Ue)}function T0(){for(;Ue!==null&&!sh();)Iu(Ue)}function Iu(e){var t=Ru(e.alternate,e,pt);e.memoizedProps=e.pendingProps,t===null?Tu(e):Ue=t,Mo.current=null}function Tu(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=E0(r,t,pt),r!==null){Ue=r;return}}else{if(r=z0(r,t),r!==null){r.flags&=32767,Ue=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{He=6,Ue=null;return}}if(t=t.sibling,t!==null){Ue=t;return}Ue=t=e}while(t!==null);He===0&&(He=5)}function Mn(e,t,r){var i=Ee,o=bt.transition;try{bt.transition=null,Ee=1,F0(e,t,r,i)}finally{bt.transition=o,Ee=i}return null}function F0(e,t,r,i){do ur();while(mn!==null);if((be&6)!==0)throw Error(s(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var c=r.lanes|r.childLanes;if(gh(e,c),e===Ve&&(Ue=Ve=null,Ye=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||bi||(bi=!0,Du(za,function(){return ur(),null})),c=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||c){c=bt.transition,bt.transition=null;var m=Ee;Ee=1;var j=be;be|=4,Mo.current=null,_0(e,r),Nu(r,e),n0(Us),Ta=!!$s,Us=$s=null,e.current=r,A0(r),oh(),be=j,Ee=m,bt.transition=c}else e.current=r;if(bi&&(bi=!1,mn=e,wi=o),c=e.pendingLanes,c===0&&(fn=null),dh(r.stateNode),ot(e,De()),t!==null)for(i=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],i(o.value,{componentStack:o.stack,digest:o.digest});if(yi)throw yi=!1,e=Fo,Fo=null,e;return(wi&1)!==0&&e.tag!==0&&ur(),c=e.pendingLanes,(c&1)!==0?e===Oo?oa++:(oa=0,Oo=e):oa=0,ln(),null}function ur(){if(mn!==null){var e=kc(wi),t=bt.transition,r=Ee;try{if(bt.transition=null,Ee=16>e?16:e,mn===null)var i=!1;else{if(e=mn,mn=null,wi=0,(be&6)!==0)throw Error(s(331));var o=be;for(be|=4,Z=e.current;Z!==null;){var c=Z,m=c.child;if((Z.flags&16)!==0){var j=c.deletions;if(j!==null){for(var S=0;S<j.length;S++){var O=j[S];for(Z=O;Z!==null;){var V=Z;switch(V.tag){case 0:case 11:case 15:aa(8,V,c)}var Q=V.child;if(Q!==null)Q.return=V,Z=Q;else for(;Z!==null;){V=Z;var B=V.sibling,J=V.return;if(bu(V),V===O){Z=null;break}if(B!==null){B.return=J,Z=B;break}Z=J}}}var ee=c.alternate;if(ee!==null){var te=ee.child;if(te!==null){ee.child=null;do{var $e=te.sibling;te.sibling=null,te=$e}while(te!==null)}}Z=c}}if((c.subtreeFlags&2064)!==0&&m!==null)m.return=c,Z=m;else e:for(;Z!==null;){if(c=Z,(c.flags&2048)!==0)switch(c.tag){case 0:case 11:case 15:aa(9,c,c.return)}var L=c.sibling;if(L!==null){L.return=c.return,Z=L;break e}Z=c.return}}var E=e.current;for(Z=E;Z!==null;){m=Z;var T=m.child;if((m.subtreeFlags&2064)!==0&&T!==null)T.return=m,Z=T;else e:for(m=E;Z!==null;){if(j=Z,(j.flags&2048)!==0)try{switch(j.tag){case 0:case 11:case 15:gi(9,j)}}catch(re){Oe(j,j.return,re)}if(j===m){Z=null;break e}var Y=j.sibling;if(Y!==null){Y.return=j.return,Z=Y;break e}Z=j.return}}if(be=o,ln(),Lt&&typeof Lt.onPostCommitFiberRoot=="function")try{Lt.onPostCommitFiberRoot(Pa,e)}catch{}i=!0}return i}finally{Ee=r,bt.transition=t}}return!1}function Fu(e,t,r){t=or(r,t),t=eu(e,t,1),e=dn(e,t,1),t=nt(),e!==null&&(Ar(e,1,t),ot(e,t))}function Oe(e,t,r){if(e.tag===3)Fu(e,e,r);else for(;t!==null;){if(t.tag===3){Fu(t,e,r);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(fn===null||!fn.has(i))){e=or(r,e),e=tu(t,e,1),t=dn(t,e,1),e=nt(),t!==null&&(Ar(t,1,e),ot(t,e));break}}t=t.return}}function O0(e,t,r){var i=e.pingCache;i!==null&&i.delete(t),t=nt(),e.pingedLanes|=e.suspendedLanes&r,Ve===e&&(Ye&r)===r&&(He===4||He===3&&(Ye&130023424)===Ye&&500>De()-To?Ln(e,0):Io|=r),ot(e,t)}function Ou(e,t){t===0&&((e.mode&1)===0?t=1:(t=Aa,Aa<<=1,(Aa&130023424)===0&&(Aa=4194304)));var r=nt();e=Ht(e,t),e!==null&&(Ar(e,t,r),ot(e,r))}function R0(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Ou(e,r)}function D0(e,t){var r=0;switch(e.tag){case 13:var i=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(s(314))}i!==null&&i.delete(t),Ou(e,r)}var Ru;Ru=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||rt.current)it=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return it=!1,C0(e,t,r);it=(e.flags&131072)!==0}else it=!1,Me&&(t.flags&1048576)!==0&&xd(t,Za,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;pi(e,t),e=t.pendingProps;var o=Zn(t,Ke.current);ir(t,r),o=fo(null,t,i,e,o,r);var c=mo();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,at(i)?(c=!0,Xa(t)):c=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ao(t),o.updater=fi,t.stateNode=o,o._reactInternals=t,yo(t,i,e,r),t=ko(null,t,i,!0,c,r)):(t.tag=0,Me&&c&&Ys(t),tt(null,t,o,r),t=t.child),t;case 16:i=t.elementType;e:{switch(pi(e,t),e=t.pendingProps,o=i._init,i=o(i._payload),t.type=i,o=t.tag=U0(i),e=Nt(i,e),o){case 0:t=jo(null,t,i,e,r);break e;case 1:t=du(null,t,i,e,r);break e;case 11:t=iu(null,t,i,e,r);break e;case 14:t=su(null,t,i,Nt(i.type,e),r);break e}throw Error(s(306,i,""))}return t;case 0:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:Nt(i,o),jo(e,t,i,o,r);case 1:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:Nt(i,o),du(e,t,i,o,r);case 3:e:{if(uu(t),e===null)throw Error(s(387));i=t.pendingProps,c=t.memoizedState,o=c.element,Cd(e,t),ii(t,i,null,r);var m=t.memoizedState;if(i=m.element,c.isDehydrated)if(c={element:i,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){o=or(Error(s(423)),t),t=fu(e,t,i,r,o);break e}else if(i!==o){o=or(Error(s(424)),t),t=fu(e,t,i,r,o);break e}else for(mt=an(t.stateNode.containerInfo.firstChild),ft=t,Me=!0,St=null,r=Sd(t,null,i,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(nr(),i===o){t=Vt(e,t,r);break e}tt(e,t,i,r)}t=t.child}return t;case 5:return Pd(t),e===null&&Ks(t),i=t.type,o=t.pendingProps,c=e!==null?e.memoizedProps:null,m=o.children,Ws(i,o)?m=null:c!==null&&Ws(i,c)&&(t.flags|=32),cu(e,t),tt(e,t,m,r),t.child;case 6:return e===null&&Ks(t),null;case 13:return mu(e,t,r);case 4:return io(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=rr(t,null,i,r):tt(e,t,i,r),t.child;case 11:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:Nt(i,o),iu(e,t,i,o,r);case 7:return tt(e,t,t.pendingProps,r),t.child;case 8:return tt(e,t,t.pendingProps.children,r),t.child;case 12:return tt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(i=t.type._context,o=t.pendingProps,c=t.memoizedProps,m=o.value,ze(ni,i._currentValue),i._currentValue=m,c!==null)if(kt(c.value,m)){if(c.children===o.children&&!rt.current){t=Vt(e,t,r);break e}}else for(c=t.child,c!==null&&(c.return=t);c!==null;){var j=c.dependencies;if(j!==null){m=c.child;for(var S=j.firstContext;S!==null;){if(S.context===i){if(c.tag===1){S=Bt(-1,r&-r),S.tag=2;var O=c.updateQueue;if(O!==null){O=O.shared;var V=O.pending;V===null?S.next=S:(S.next=V.next,V.next=S),O.pending=S}}c.lanes|=r,S=c.alternate,S!==null&&(S.lanes|=r),no(c.return,r,t),j.lanes|=r;break}S=S.next}}else if(c.tag===10)m=c.type===t.type?null:c.child;else if(c.tag===18){if(m=c.return,m===null)throw Error(s(341));m.lanes|=r,j=m.alternate,j!==null&&(j.lanes|=r),no(m,r,t),m=c.sibling}else m=c.child;if(m!==null)m.return=c;else for(m=c;m!==null;){if(m===t){m=null;break}if(c=m.sibling,c!==null){c.return=m.return,m=c;break}m=m.return}c=m}tt(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,i=t.pendingProps.children,ir(t,r),o=vt(o),i=i(o),t.flags|=1,tt(e,t,i,r),t.child;case 14:return i=t.type,o=Nt(i,t.pendingProps),o=Nt(i.type,o),su(e,t,i,o,r);case 15:return ou(e,t,t.type,t.pendingProps,r);case 17:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:Nt(i,o),pi(e,t),t.tag=1,at(i)?(e=!0,Xa(t)):e=!1,ir(t,r),Jd(t,i,o),yo(t,i,o,r),ko(null,t,i,!0,e,r);case 19:return hu(e,t,r);case 22:return lu(e,t,r)}throw Error(s(156,t.tag))};function Du(e,t){return vc(e,t)}function $0(e,t,r,i){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wt(e,t,r,i){return new $0(e,t,r,i)}function Ho(e){return e=e.prototype,!(!e||!e.isReactComponent)}function U0(e){if(typeof e=="function")return Ho(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fe)return 11;if(e===je)return 14}return 2}function gn(e,t){var r=e.alternate;return r===null?(r=wt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Ni(e,t,r,i,o,c){var m=2;if(i=e,typeof e=="function")Ho(e)&&(m=1);else if(typeof e=="string")m=5;else e:switch(e){case ne:return In(r.children,o,c,t);case de:m=8,o|=8;break;case X:return e=wt(12,r,t,o|2),e.elementType=X,e.lanes=c,e;case ye:return e=wt(13,r,t,o),e.elementType=ye,e.lanes=c,e;case Se:return e=wt(19,r,t,o),e.elementType=Se,e.lanes=c,e;case xe:return Ci(r,o,c,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ce:m=10;break e;case pe:m=9;break e;case fe:m=11;break e;case je:m=14;break e;case Ne:m=16,i=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=wt(m,r,t,o),t.elementType=e,t.type=i,t.lanes=c,t}function In(e,t,r,i){return e=wt(7,e,i,t),e.lanes=r,e}function Ci(e,t,r,i){return e=wt(22,e,i,t),e.elementType=xe,e.lanes=r,e.stateNode={isHidden:!1},e}function Bo(e,t,r){return e=wt(6,e,null,t),e.lanes=r,e}function Vo(e,t,r){return t=wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function W0(e,t,r,i,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xs(0),this.expirationTimes=xs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xs(0),this.identifierPrefix=i,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Qo(e,t,r,i,o,c,m,j,S){return e=new W0(e,t,r,j,S),t===1?(t=1,c===!0&&(t|=8)):t=0,c=wt(3,null,null,t),e.current=c,c.stateNode=e,c.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ao(c),e}function H0(e,t,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:G,key:i==null?null:""+i,children:e,containerInfo:t,implementation:r}}function $u(e){if(!e)return on;e=e._reactInternals;e:{if(jn(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(at(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var r=e.type;if(at(r))return pd(e,r,t)}return t}function Uu(e,t,r,i,o,c,m,j,S){return e=Qo(r,i,!0,e,o,c,m,j,S),e.context=$u(null),r=e.current,i=nt(),o=pn(r),c=Bt(i,o),c.callback=t??null,dn(r,c,o),e.current.lanes=o,Ar(e,o,i),ot(e,i),e}function Ei(e,t,r,i){var o=t.current,c=nt(),m=pn(o);return r=$u(r),t.context===null?t.context=r:t.pendingContext=r,t=Bt(c,m),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=dn(o,t,m),e!==null&&(zt(e,o,m,c),ai(e,o,m)),m}function zi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Wu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function qo(e,t){Wu(e,t),(e=e.alternate)&&Wu(e,t)}function B0(){return null}var Hu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Yo(e){this._internalRoot=e}Pi.prototype.render=Yo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));Ei(e,t,null,null)},Pi.prototype.unmount=Yo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;An(function(){Ei(null,e,null,null)}),t[Dt]=null}};function Pi(e){this._internalRoot=e}Pi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Cc();e={blockedOn:null,target:e,priority:t};for(var r=0;r<tn.length&&t!==0&&t<tn[r].priority;r++);tn.splice(r,0,e),r===0&&Pc(e)}};function Go(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _i(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Bu(){}function V0(e,t,r,i,o){if(o){if(typeof i=="function"){var c=i;i=function(){var O=zi(m);c.call(O)}}var m=Uu(t,i,e,0,null,!1,!1,"",Bu);return e._reactRootContainer=m,e[Dt]=m.current,Vr(e.nodeType===8?e.parentNode:e),An(),m}for(;o=e.lastChild;)e.removeChild(o);if(typeof i=="function"){var j=i;i=function(){var O=zi(S);j.call(O)}}var S=Qo(e,0,!1,null,null,!1,!1,"",Bu);return e._reactRootContainer=S,e[Dt]=S.current,Vr(e.nodeType===8?e.parentNode:e),An(function(){Ei(t,S,r,i)}),S}function Ai(e,t,r,i,o){var c=r._reactRootContainer;if(c){var m=c;if(typeof o=="function"){var j=o;o=function(){var S=zi(m);j.call(S)}}Ei(t,m,e,o)}else m=V0(r,t,e,o,i);return zi(m)}Sc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=_r(t.pendingLanes);r!==0&&(vs(t,r|1),ot(t,De()),(be&6)===0&&(dr=De()+500,ln()))}break;case 13:An(function(){var i=Ht(e,1);if(i!==null){var o=nt();zt(i,e,1,o)}}),qo(e,1)}},ys=function(e){if(e.tag===13){var t=Ht(e,134217728);if(t!==null){var r=nt();zt(t,e,134217728,r)}qo(e,134217728)}},Nc=function(e){if(e.tag===13){var t=pn(e),r=Ht(e,t);if(r!==null){var i=nt();zt(r,e,t,i)}qo(e,t)}},Cc=function(){return Ee},Ec=function(e,t){var r=Ee;try{return Ee=e,t()}finally{Ee=r}},us=function(e,t,r){switch(t){case"input":if(rs(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var i=r[t];if(i!==e&&i.form===e.form){var o=Ya(i);if(!o)throw Error(s(90));Kl(i),rs(i,o)}}}break;case"textarea":nc(e,r);break;case"select":t=r.value,t!=null&&Un(e,!!r.multiple,t,!1)}},uc=$o,fc=An;var Q0={usingClientEntryPoint:!1,Events:[Yr,Kn,Ya,cc,dc,$o]},la={findFiberByHostInstance:kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},q0={bundleType:la.bundleType,version:la.version,rendererPackageName:la.rendererPackageName,rendererConfig:la.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:F.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=gc(e),e===null?null:e.stateNode},findFiberByHostInstance:la.findFiberByHostInstance||B0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Li=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Li.isDisabled&&Li.supportsFiber)try{Pa=Li.inject(q0),Lt=Li}catch{}}return lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q0,lt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Go(t))throw Error(s(200));return H0(e,t,null,r)},lt.createRoot=function(e,t){if(!Go(e))throw Error(s(299));var r=!1,i="",o=Hu;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Qo(e,1,!1,null,null,r,!1,i,o),e[Dt]=t.current,Vr(e.nodeType===8?e.parentNode:e),new Yo(t)},lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=gc(t),e=e===null?null:e.stateNode,e},lt.flushSync=function(e){return An(e)},lt.hydrate=function(e,t,r){if(!_i(t))throw Error(s(200));return Ai(null,e,t,!0,r)},lt.hydrateRoot=function(e,t,r){if(!Go(e))throw Error(s(405));var i=r!=null&&r.hydratedSources||null,o=!1,c="",m=Hu;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(m=r.onRecoverableError)),t=Uu(t,null,e,1,r??null,o,!1,c,m),e[Dt]=t.current,Vr(e),i)for(e=0;e<i.length;e++)r=i[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new Pi(t)},lt.render=function(e,t,r){if(!_i(t))throw Error(s(200));return Ai(null,e,t,!1,r)},lt.unmountComponentAtNode=function(e){if(!_i(e))throw Error(s(40));return e._reactRootContainer?(An(function(){Ai(null,null,e,!1,function(){e._reactRootContainer=null,e[Dt]=null})}),!0):!1},lt.unstable_batchedUpdates=$o,lt.unstable_renderSubtreeIntoContainer=function(e,t,r,i){if(!_i(r))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return Ai(e,t,r,!1,i)},lt.version="18.3.1-next-f1338f8080-20240426",lt}var Ju;function n1(){if(Ju)return Jo.exports;Ju=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),Jo.exports=t1(),Jo.exports}var Zu;function r1(){if(Zu)return Mi;Zu=1;var a=n1();return Mi.createRoot=a.createRoot,Mi.hydrateRoot=a.hydrateRoot,Mi}var a1=r1();const i1=`
*{box-sizing:border-box}body{margin:0;font-family:Inter,Arial,sans-serif;background:#f6f8fb;color:#14213d}button,input,select,textarea{font:inherit}button{cursor:pointer;border:0}.nav{position:sticky;top:0;z-index:10;display:flex;align-items:center;justify-content:space-between;padding:14px clamp(18px,4vw,56px);background:rgba(255,255,255,.94);backdrop-filter:blur(14px);border-bottom:1px solid #dfe7ef}.brand{display:flex;align-items:center;gap:10px;background:transparent;color:#14213d;text-align:left}.brand strong{display:block}.brand small{display:block;color:#64748b}.brand-mark{display:grid;place-items:center;width:42px;height:42px;border-radius:8px;background:#0f766e;color:#fff;font-weight:800}.nav-links{display:flex;align-items:center;gap:6px}.nav-links button,.section-head button,.text-btn{background:transparent;color:#334155;padding:10px 12px;border-radius:8px}.nav-links .active,.filters button:first-child,.segmented .active{background:#e7f5f3;color:#0f766e}.pill,.primary,.secondary{display:inline-flex;align-items:center;justify-content:center;gap:8px;border-radius:8px;padding:12px 16px;font-weight:700}.pill,.primary{background:#0f766e;color:#fff}.secondary{background:#f59e0b;color:#111827}.hero{padding:72px clamp(18px,5vw,72px) 34px;background:linear-gradient(120deg,#e7f5f3 0%,#fff 54%,#fff4dc 100%)}.hero-content{max-width:820px}.eyebrow{color:#0f766e;font-weight:800;text-transform:uppercase;font-size:.78rem;letter-spacing:0}.hero h1,.page h1,.portal-main h1{font-size:clamp(2.2rem,5vw,4.8rem);line-height:1.02;margin:10px 0 18px}.hero-text,.page-head p{font-size:1.08rem;line-height:1.75;color:#475569;max-width:780px}.hero-actions{display:flex;gap:12px;flex-wrap:wrap;margin:24px 0}.hero-panel{margin-top:34px;display:grid;gap:18px;max-width:880px}.search{display:flex;align-items:center;gap:10px;background:#fff;border:1px solid #dce6ee;border-radius:8px;padding:13px 14px;box-shadow:0 12px 26px rgba(15,23,42,.08)}.search input{border:0;outline:0;width:100%;background:transparent}.stat-grid,.dashboard-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:14px}.stat,.info-block,.verify-card,.list-panel{background:#fff;border:1px solid #dfe7ef;border-radius:8px;padding:20px;box-shadow:0 12px 26px rgba(15,23,42,.06)}.stat strong{display:block;font-size:2rem;color:#0f766e}.stat span,.card p,.info-block p,.mini-card span{color:#64748b;line-height:1.6}.section,.page{padding:42px clamp(18px,5vw,72px)}.section-head{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:18px}.section h2{font-size:1.6rem;margin:0}.card-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:18px}.card,.mini-card{background:#fff;border:1px solid #dfe7ef;border-radius:8px;padding:20px;min-height:190px;display:flex;flex-direction:column;align-items:flex-start;gap:10px;box-shadow:0 12px 26px rgba(15,23,42,.06)}.card svg,.mini-card svg{color:#0f766e}.card h3,.info-block h3{margin:4px 0;font-size:1.15rem}.card button,.list-row button{margin-top:auto;background:#e7f5f3;color:#0f766e;border-radius:8px;padding:10px 12px;font-weight:700}.course span,.product span,.verified{display:inline-block;background:#fff4dc;color:#92400e;border-radius:8px;padding:6px 9px;font-size:.82rem;font-weight:800}.product strong{font-size:1.45rem}.product div{display:flex;gap:8px;margin-top:auto}.icon-btn{display:grid;place-items:center;width:42px;height:42px;border-radius:8px;background:#0f766e;color:#fff}.page{min-height:70vh}.page-head{margin-bottom:28px}.filters{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:18px}.filters button{padding:10px 13px;border-radius:8px;background:#fff;color:#334155;border:1px solid #dfe7ef}.two-col{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:16px}.form{display:grid;gap:12px;max-width:660px}.form input,.form select,.form textarea,.auth-box input{width:100%;padding:13px 14px;border:1px solid #d7e2ea;border-radius:8px;background:#fff;outline:0}.list-row{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid #e5edf3}.portal-bg{min-height:100vh;display:grid;place-items:center;background:linear-gradient(135deg,#e7f5f3,#fff4dc)}.auth-box{width:min(430px,92vw);background:#fff;border:1px solid #dfe7ef;border-radius:8px;padding:28px;box-shadow:0 18px 42px rgba(15,23,42,.12)}.center{justify-content:center;margin:0 auto 18px}.segmented{display:grid;grid-template-columns:1fr 1fr;gap:6px;background:#eef4f7;padding:5px;border-radius:8px;margin-bottom:14px}.segmented button{border-radius:8px;padding:10px;background:transparent}.auth-box .primary{width:100%;margin-top:10px}.text-btn{width:100%;margin-top:8px}.portal{min-height:100vh;display:grid;grid-template-columns:260px 1fr;background:#f6f8fb}.portal aside{background:#10243f;color:#fff;padding:18px;display:flex;flex-direction:column;gap:8px}.portal aside .brand{color:#fff;margin-bottom:16px}.portal aside button{text-align:left;background:rgba(255,255,255,.08);color:#fff;border-radius:8px;padding:12px}.portal-main{padding:30px clamp(18px,4vw,54px)}.portal-main h1{font-size:2rem}.topbar{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:20px}.rules{line-height:1.9;color:#475569}.verify-card{max-width:560px;text-align:center}.verify-card svg{color:#0f766e}.floating{position:fixed;right:18px;bottom:18px;display:grid;gap:8px}.floating button{width:46px;height:46px;border-radius:8px;background:#0f766e;color:#fff;display:grid;place-items:center;box-shadow:0 12px 24px rgba(15,118,110,.28)}footer{display:flex;justify-content:space-between;gap:18px;flex-wrap:wrap;padding:32px clamp(18px,5vw,72px);background:#10243f;color:#fff}footer p{color:#cbd5e1}footer button{background:rgba(255,255,255,.1);color:#fff;border-radius:8px;padding:10px 12px;margin-left:8px}.table{width:100%;border-collapse:collapse;background:#fff;border:1px solid #dfe7ef;border-radius:8px;overflow:hidden}.table th,.table td{text-align:left;padding:13px;border-bottom:1px solid #edf2f7}.modal{background:#fff;border:1px solid #dfe7ef;border-radius:8px;padding:20px}.mobile-only{display:none}@media(max-width:760px){.mobile-only{display:grid}.nav-links{display:none;position:absolute;top:70px;left:14px;right:14px;flex-direction:column;align-items:stretch;background:#fff;border:1px solid #dfe7ef;border-radius:8px;padding:10px}.nav-links.open{display:flex}.nav-links button{width:100%;justify-content:center}.hero{padding-top:44px}.portal{grid-template-columns:1fr}.portal aside{position:static}.list-row{grid-template-columns:1fr}.hero h1,.page h1{font-size:2.35rem}}
`;function s1(){return n.jsx("style",{children:i1})}/*!
 * Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */function dl(a,l){(l==null||l>a.length)&&(l=a.length);for(var s=0,d=Array(l);s<l;s++)d[s]=a[s];return d}function o1(a){if(Array.isArray(a))return a}function l1(a){if(Array.isArray(a))return dl(a)}function c1(a,l){if(!(a instanceof l))throw new TypeError("Cannot call a class as a function")}function d1(a,l){for(var s=0;s<l.length;s++){var d=l[s];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,Zf(d.key),d)}}function u1(a,l,s){return l&&d1(a.prototype,l),Object.defineProperty(a,"prototype",{writable:!1}),a}function Ri(a,l){var s=typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(!s){if(Array.isArray(a)||(s=_l(a))||l){s&&(a=s);var d=0,u=function(){};return{s:u,n:function(){return d>=a.length?{done:!0}:{done:!1,value:a[d++]}},e:function(f){throw f},f:u}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var p,h=!0,b=!1;return{s:function(){s=s.call(a)},n:function(){var f=s.next();return h=f.done,f},e:function(f){b=!0,p=f},f:function(){try{h||s.return==null||s.return()}finally{if(b)throw p}}}}function me(a,l,s){return(l=Zf(l))in a?Object.defineProperty(a,l,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[l]=s,a}function f1(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function m1(a,l){var s=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(s!=null){var d,u,p,h,b=[],f=!0,x=!1;try{if(p=(s=s.call(a)).next,l===0){if(Object(s)!==s)return;f=!1}else for(;!(f=(d=p.call(s)).done)&&(b.push(d.value),b.length!==l);f=!0);}catch(v){x=!0,u=v}finally{try{if(!f&&s.return!=null&&(h=s.return(),Object(h)!==h))return}finally{if(x)throw u}}return b}}function p1(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h1(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ef(a,l){var s=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);l&&(d=d.filter(function(u){return Object.getOwnPropertyDescriptor(a,u).enumerable})),s.push.apply(s,d)}return s}function q(a){for(var l=1;l<arguments.length;l++){var s=arguments[l]!=null?arguments[l]:{};l%2?ef(Object(s),!0).forEach(function(d){me(a,d,s[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(s)):ef(Object(s)).forEach(function(d){Object.defineProperty(a,d,Object.getOwnPropertyDescriptor(s,d))})}return a}function Gi(a,l){return o1(a)||m1(a,l)||_l(a,l)||p1()}function _t(a){return l1(a)||f1(a)||_l(a)||h1()}function g1(a,l){if(typeof a!="object"||!a)return a;var s=a[Symbol.toPrimitive];if(s!==void 0){var d=s.call(a,l);if(typeof d!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(a)}function Zf(a){var l=g1(a,"string");return typeof l=="symbol"?l:l+""}function Hi(a){"@babel/helpers - typeof";return Hi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},Hi(a)}function _l(a,l){if(a){if(typeof a=="string")return dl(a,l);var s={}.toString.call(a).slice(8,-1);return s==="Object"&&a.constructor&&(s=a.constructor.name),s==="Map"||s==="Set"?Array.from(a):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?dl(a,l):void 0}}var tf=function(){},Al={},em={},tm=null,nm={mark:tf,measure:tf};try{typeof window<"u"&&(Al=window),typeof document<"u"&&(em=document),typeof MutationObserver<"u"&&(tm=MutationObserver),typeof performance<"u"&&(nm=performance)}catch{}var x1=Al.navigator||{},nf=x1.userAgent,rf=nf===void 0?"":nf,vn=Al,Ae=em,af=tm,Ii=nm;vn.document;var Kt=!!Ae.documentElement&&!!Ae.head&&typeof Ae.addEventListener=="function"&&typeof Ae.createElement=="function",rm=~rf.indexOf("MSIE")||~rf.indexOf("Trident/"),tl,v1=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,y1=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,am={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},b1={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},im=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],Xe="classic",xa="duotone",sm="sharp",om="sharp-duotone",lm="chisel",cm="etch",dm="graphite",um="jelly",fm="jelly-duo",mm="jelly-fill",pm="notdog",hm="notdog-duo",gm="slab",xm="slab-press",vm="thumbprint",ym="utility",bm="utility-duo",wm="utility-fill",jm="whiteboard",w1="Classic",j1="Duotone",k1="Sharp",S1="Sharp Duotone",N1="Chisel",C1="Etch",E1="Graphite",z1="Jelly",P1="Jelly Duo",_1="Jelly Fill",A1="Notdog",L1="Notdog Duo",M1="Slab",I1="Slab Press",T1="Thumbprint",F1="Utility",O1="Utility Duo",R1="Utility Fill",D1="Whiteboard",km=[Xe,xa,sm,om,lm,cm,dm,um,fm,mm,pm,hm,gm,xm,vm,ym,bm,wm,jm];tl={},me(me(me(me(me(me(me(me(me(me(tl,Xe,w1),xa,j1),sm,k1),om,S1),lm,N1),cm,C1),dm,E1),um,z1),fm,P1),mm,_1),me(me(me(me(me(me(me(me(me(tl,pm,A1),hm,L1),gm,M1),xm,I1),vm,T1),ym,F1),bm,O1),wm,R1),jm,D1);var $1={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},U1={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},W1=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),H1={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},Sm=["fak","fa-kit","fakd","fa-kit-duotone"],sf={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},B1=["kit"],V1="kit",Q1="kit-duotone",q1="Kit",Y1="Kit Duotone";me(me({},V1,q1),Q1,Y1);var G1={kit:{"fa-kit":"fak"}},X1={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},K1={kit:{fak:"fa-kit"}},of={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},nl,Ti={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},J1=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],Z1="classic",eg="duotone",tg="sharp",ng="sharp-duotone",rg="chisel",ag="etch",ig="graphite",sg="jelly",og="jelly-duo",lg="jelly-fill",cg="notdog",dg="notdog-duo",ug="slab",fg="slab-press",mg="thumbprint",pg="utility",hg="utility-duo",gg="utility-fill",xg="whiteboard",vg="Classic",yg="Duotone",bg="Sharp",wg="Sharp Duotone",jg="Chisel",kg="Etch",Sg="Graphite",Ng="Jelly",Cg="Jelly Duo",Eg="Jelly Fill",zg="Notdog",Pg="Notdog Duo",_g="Slab",Ag="Slab Press",Lg="Thumbprint",Mg="Utility",Ig="Utility Duo",Tg="Utility Fill",Fg="Whiteboard";nl={},me(me(me(me(me(me(me(me(me(me(nl,Z1,vg),eg,yg),tg,bg),ng,wg),rg,jg),ag,kg),ig,Sg),sg,Ng),og,Cg),lg,Eg),me(me(me(me(me(me(me(me(me(nl,cg,zg),dg,Pg),ug,_g),fg,Ag),mg,Lg),pg,Mg),hg,Ig),gg,Tg),xg,Fg);var Og="kit",Rg="kit-duotone",Dg="Kit",$g="Kit Duotone";me(me({},Og,Dg),Rg,$g);var Ug={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},Wg={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},ul={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},Hg=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],Nm=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(J1,Hg),Bg=["solid","regular","light","thin","duotone","brands","semibold"],Cm=[1,2,3,4,5,6,7,8,9,10],Vg=Cm.concat([11,12,13,14,15,16,17,18,19,20]),Qg=["aw","fw","pull-left","pull-right"],qg=[].concat(_t(Object.keys(Wg)),Bg,Qg,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",Ti.GROUP,Ti.SWAP_OPACITY,Ti.PRIMARY,Ti.SECONDARY]).concat(Cm.map(function(a){return"".concat(a,"x")})).concat(Vg.map(function(a){return"w-".concat(a)})),Yg={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Gt="___FONT_AWESOME___",fl=16,Em="fa",zm="svg-inline--fa",On="data-fa-i2svg",ml="data-fa-pseudo-element",Gg="data-fa-pseudo-element-pending",Ll="data-prefix",Ml="data-icon",lf="fontawesome-i2svg",Xg="async",Kg=["HTML","HEAD","STYLE","SCRIPT"],Pm=["::before","::after",":before",":after"],_m=(function(){try{return!0}catch{return!1}})();function va(a){return new Proxy(a,{get:function(s,d){return d in s?s[d]:s[Xe]}})}var Am=q({},am);Am[Xe]=q(q(q(q({},{"fa-duotone":"duotone"}),am[Xe]),sf.kit),sf["kit-duotone"]);var Jg=va(Am),pl=q({},H1);pl[Xe]=q(q(q(q({},{duotone:"fad"}),pl[Xe]),of.kit),of["kit-duotone"]);var cf=va(pl),hl=q({},ul);hl[Xe]=q(q({},hl[Xe]),K1.kit);var Il=va(hl),gl=q({},Ug);gl[Xe]=q(q({},gl[Xe]),G1.kit);va(gl);var Zg=v1,Lm="fa-layers-text",e2=y1,t2=q({},$1);va(t2);var n2=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],rl=b1,r2=[].concat(_t(B1),_t(qg)),fa=vn.FontAwesomeConfig||{};function a2(a){var l=Ae.querySelector("script["+a+"]");if(l)return l.getAttribute(a)}function i2(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}if(Ae&&typeof Ae.querySelector=="function"){var s2=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];s2.forEach(function(a){var l=Gi(a,2),s=l[0],d=l[1],u=i2(a2(s));u!=null&&(fa[d]=u)})}var Mm={styleDefault:"solid",familyDefault:Xe,cssPrefix:Em,replacementClass:zm,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};fa.familyPrefix&&(fa.cssPrefix=fa.familyPrefix);var xr=q(q({},Mm),fa);xr.autoReplaceSvg||(xr.observeMutations=!1);var ae={};Object.keys(Mm).forEach(function(a){Object.defineProperty(ae,a,{enumerable:!0,set:function(s){xr[a]=s,ma.forEach(function(d){return d(ae)})},get:function(){return xr[a]}})});Object.defineProperty(ae,"familyPrefix",{enumerable:!0,set:function(l){xr.cssPrefix=l,ma.forEach(function(s){return s(ae)})},get:function(){return xr.cssPrefix}});vn.FontAwesomeConfig=ae;var ma=[];function o2(a){return ma.push(a),function(){ma.splice(ma.indexOf(a),1)}}var fr=fl,Ot={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function l2(a){if(!(!a||!Kt)){var l=Ae.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=a;for(var s=Ae.head.childNodes,d=null,u=s.length-1;u>-1;u--){var p=s[u],h=(p.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(h)>-1&&(d=p)}return Ae.head.insertBefore(l,d),a}}var c2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function df(){for(var a=12,l="";a-- >0;)l+=c2[Math.random()*62|0];return l}function br(a){for(var l=[],s=(a||[]).length>>>0;s--;)l[s]=a[s];return l}function Tl(a){return a.classList?br(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(l){return l})}function Im(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function d2(a){return Object.keys(a||{}).reduce(function(l,s){return l+"".concat(s,'="').concat(Im(a[s]),'" ')},"").trim()}function Xi(a){return Object.keys(a||{}).reduce(function(l,s){return l+"".concat(s,": ").concat(a[s].trim(),";")},"")}function Fl(a){return a.size!==Ot.size||a.x!==Ot.x||a.y!==Ot.y||a.rotate!==Ot.rotate||a.flipX||a.flipY}function u2(a){var l=a.transform,s=a.containerWidth,d=a.iconWidth,u={transform:"translate(".concat(s/2," 256)")},p="translate(".concat(l.x*32,", ").concat(l.y*32,") "),h="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),b="rotate(".concat(l.rotate," 0 0)"),f={transform:"".concat(p," ").concat(h," ").concat(b)},x={transform:"translate(".concat(d/2*-1," -256)")};return{outer:u,inner:f,path:x}}function f2(a){var l=a.transform,s=a.width,d=s===void 0?fl:s,u=a.height,p=u===void 0?fl:u,h="";return rm?h+="translate(".concat(l.x/fr-d/2,"em, ").concat(l.y/fr-p/2,"em) "):h+="translate(calc(-50% + ".concat(l.x/fr,"em), calc(-50% + ").concat(l.y/fr,"em)) "),h+="scale(".concat(l.size/fr*(l.flipX?-1:1),", ").concat(l.size/fr*(l.flipY?-1:1),") "),h+="rotate(".concat(l.rotate,"deg) "),h}var m2=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function Tm(){var a=Em,l=zm,s=ae.cssPrefix,d=ae.replacementClass,u=m2;if(s!==a||d!==l){var p=new RegExp("\\.".concat(a,"\\-"),"g"),h=new RegExp("\\--".concat(a,"\\-"),"g"),b=new RegExp("\\.".concat(l),"g");u=u.replace(p,".".concat(s,"-")).replace(h,"--".concat(s,"-")).replace(b,".".concat(d))}return u}var uf=!1;function al(){ae.autoAddCss&&!uf&&(l2(Tm()),uf=!0)}var p2={mixout:function(){return{dom:{css:Tm,insertCss:al}}},hooks:function(){return{beforeDOMElementCreation:function(){al()},beforeI2svg:function(){al()}}}},Xt=vn||{};Xt[Gt]||(Xt[Gt]={});Xt[Gt].styles||(Xt[Gt].styles={});Xt[Gt].hooks||(Xt[Gt].hooks={});Xt[Gt].shims||(Xt[Gt].shims=[]);var Pt=Xt[Gt],Fm=[],Om=function(){Ae.removeEventListener("DOMContentLoaded",Om),Bi=1,Fm.map(function(l){return l()})},Bi=!1;Kt&&(Bi=(Ae.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ae.readyState),Bi||Ae.addEventListener("DOMContentLoaded",Om));function h2(a){Kt&&(Bi?setTimeout(a,0):Fm.push(a))}function ya(a){var l=a.tag,s=a.attributes,d=s===void 0?{}:s,u=a.children,p=u===void 0?[]:u;return typeof a=="string"?Im(a):"<".concat(l," ").concat(d2(d),">").concat(p.map(ya).join(""),"</").concat(l,">")}function ff(a,l,s){if(a&&a[l]&&a[l][s])return{prefix:l,iconName:s,icon:a[l][s]}}var il=function(l,s,d,u){var p=Object.keys(l),h=p.length,b=s,f,x,v;for(d===void 0?(f=1,v=l[p[0]]):(f=0,v=d);f<h;f++)x=p[f],v=b(v,l[x],x,l);return v};function Rm(a){return _t(a).length!==1?null:a.codePointAt(0).toString(16)}function mf(a){return Object.keys(a).reduce(function(l,s){var d=a[s],u=!!d.icon;return u?l[d.iconName]=d.icon:l[s]=d,l},{})}function xl(a,l){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},d=s.skipHooks,u=d===void 0?!1:d,p=mf(l);typeof Pt.hooks.addPack=="function"&&!u?Pt.hooks.addPack(a,mf(l)):Pt.styles[a]=q(q({},Pt.styles[a]||{}),p),a==="fas"&&xl("fa",l)}var ha=Pt.styles,g2=Pt.shims,Dm=Object.keys(Il),x2=Dm.reduce(function(a,l){return a[l]=Object.keys(Il[l]),a},{}),Ol=null,$m={},Um={},Wm={},Hm={},Bm={};function v2(a){return~r2.indexOf(a)}function y2(a,l){var s=l.split("-"),d=s[0],u=s.slice(1).join("-");return d===a&&u!==""&&!v2(u)?u:null}var Vm=function(){var l=function(p){return il(ha,function(h,b,f){return h[f]=il(b,p,{}),h},{})};$m=l(function(u,p,h){if(p[3]&&(u[p[3]]=h),p[2]){var b=p[2].filter(function(f){return typeof f=="number"});b.forEach(function(f){u[f.toString(16)]=h})}return u}),Um=l(function(u,p,h){if(u[h]=h,p[2]){var b=p[2].filter(function(f){return typeof f=="string"});b.forEach(function(f){u[f]=h})}return u}),Bm=l(function(u,p,h){var b=p[2];return u[h]=h,b.forEach(function(f){u[f]=h}),u});var s="far"in ha||ae.autoFetchSvg,d=il(g2,function(u,p){var h=p[0],b=p[1],f=p[2];return b==="far"&&!s&&(b="fas"),typeof h=="string"&&(u.names[h]={prefix:b,iconName:f}),typeof h=="number"&&(u.unicodes[h.toString(16)]={prefix:b,iconName:f}),u},{names:{},unicodes:{}});Wm=d.names,Hm=d.unicodes,Ol=Ki(ae.styleDefault,{family:ae.familyDefault})};o2(function(a){Ol=Ki(a.styleDefault,{family:ae.familyDefault})});Vm();function Rl(a,l){return($m[a]||{})[l]}function b2(a,l){return(Um[a]||{})[l]}function Tn(a,l){return(Bm[a]||{})[l]}function Qm(a){return Wm[a]||{prefix:null,iconName:null}}function w2(a){var l=Hm[a],s=Rl("fas",a);return l||(s?{prefix:"fas",iconName:s}:null)||{prefix:null,iconName:null}}function yn(){return Ol}var qm=function(){return{prefix:null,iconName:null,rest:[]}};function j2(a){var l=Xe,s=Dm.reduce(function(d,u){return d[u]="".concat(ae.cssPrefix,"-").concat(u),d},{});return km.forEach(function(d){(a.includes(s[d])||a.some(function(u){return x2[d].includes(u)}))&&(l=d)}),l}function Ki(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=l.family,d=s===void 0?Xe:s,u=Jg[d][a];if(d===xa&&!a)return"fad";var p=cf[d][a]||cf[d][u],h=a in Pt.styles?a:null,b=p||h||null;return b}function k2(a){var l=[],s=null;return a.forEach(function(d){var u=y2(ae.cssPrefix,d);u?s=u:d&&l.push(d)}),{iconName:s,rest:l}}function pf(a){return a.sort().filter(function(l,s,d){return d.indexOf(l)===s})}var hf=Nm.concat(Sm);function Ji(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=l.skipLookups,d=s===void 0?!1:s,u=null,p=pf(a.filter(function(C){return hf.includes(C)})),h=pf(a.filter(function(C){return!hf.includes(C)})),b=p.filter(function(C){return u=C,!im.includes(C)}),f=Gi(b,1),x=f[0],v=x===void 0?null:x,g=j2(p),y=q(q({},k2(h)),{},{prefix:Ki(v,{family:g})});return q(q(q({},y),E2({values:a,family:g,styles:ha,config:ae,canonical:y,givenPrefix:u})),S2(d,u,y))}function S2(a,l,s){var d=s.prefix,u=s.iconName;if(a||!d||!u)return{prefix:d,iconName:u};var p=l==="fa"?Qm(u):{},h=Tn(d,u);return u=p.iconName||h||u,d=p.prefix||d,d==="far"&&!ha.far&&ha.fas&&!ae.autoFetchSvg&&(d="fas"),{prefix:d,iconName:u}}var N2=km.filter(function(a){return a!==Xe||a!==xa}),C2=Object.keys(ul).filter(function(a){return a!==Xe}).map(function(a){return Object.keys(ul[a])}).flat();function E2(a){var l=a.values,s=a.family,d=a.canonical,u=a.givenPrefix,p=u===void 0?"":u,h=a.styles,b=h===void 0?{}:h,f=a.config,x=f===void 0?{}:f,v=s===xa,g=l.includes("fa-duotone")||l.includes("fad"),y=x.familyDefault==="duotone",C=d.prefix==="fad"||d.prefix==="fa-duotone";if(!v&&(g||y||C)&&(d.prefix="fad"),(l.includes("fa-brands")||l.includes("fab"))&&(d.prefix="fab"),!d.prefix&&N2.includes(s)){var _=Object.keys(b).find(function(A){return C2.includes(A)});if(_||x.autoFetchSvg){var I=W1.get(s).defaultShortPrefixId;d.prefix=I,d.iconName=Tn(d.prefix,d.iconName)||d.iconName}}return(d.prefix==="fa"||p==="fa")&&(d.prefix=yn()||"fas"),d}var z2=(function(){function a(){c1(this,a),this.definitions={}}return u1(a,[{key:"add",value:function(){for(var s=this,d=arguments.length,u=new Array(d),p=0;p<d;p++)u[p]=arguments[p];var h=u.reduce(this._pullDefinitions,{});Object.keys(h).forEach(function(b){s.definitions[b]=q(q({},s.definitions[b]||{}),h[b]),xl(b,h[b]);var f=Il[Xe][b];f&&xl(f,h[b]),Vm()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(s,d){var u=d.prefix&&d.iconName&&d.icon?{0:d}:d;return Object.keys(u).map(function(p){var h=u[p],b=h.prefix,f=h.iconName,x=h.icon,v=x[2];s[b]||(s[b]={}),v.length>0&&v.forEach(function(g){typeof g=="string"&&(s[b][g]=x)}),s[b][f]=x}),s}}])})(),gf=[],pr={},gr={},P2=Object.keys(gr);function _2(a,l){var s=l.mixoutsTo;return gf=a,pr={},Object.keys(gr).forEach(function(d){P2.indexOf(d)===-1&&delete gr[d]}),gf.forEach(function(d){var u=d.mixout?d.mixout():{};if(Object.keys(u).forEach(function(h){typeof u[h]=="function"&&(s[h]=u[h]),Hi(u[h])==="object"&&Object.keys(u[h]).forEach(function(b){s[h]||(s[h]={}),s[h][b]=u[h][b]})}),d.hooks){var p=d.hooks();Object.keys(p).forEach(function(h){pr[h]||(pr[h]=[]),pr[h].push(p[h])})}d.provides&&d.provides(gr)}),s}function vl(a,l){for(var s=arguments.length,d=new Array(s>2?s-2:0),u=2;u<s;u++)d[u-2]=arguments[u];var p=pr[a]||[];return p.forEach(function(h){l=h.apply(null,[l].concat(d))}),l}function Rn(a){for(var l=arguments.length,s=new Array(l>1?l-1:0),d=1;d<l;d++)s[d-1]=arguments[d];var u=pr[a]||[];u.forEach(function(p){p.apply(null,s)})}function bn(){var a=arguments[0],l=Array.prototype.slice.call(arguments,1);return gr[a]?gr[a].apply(null,l):void 0}function yl(a){a.prefix==="fa"&&(a.prefix="fas");var l=a.iconName,s=a.prefix||yn();if(l)return l=Tn(s,l)||l,ff(Ym.definitions,s,l)||ff(Pt.styles,s,l)}var Ym=new z2,A2=function(){ae.autoReplaceSvg=!1,ae.observeMutations=!1,Rn("noAuto")},L2={i2svg:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Kt?(Rn("beforeI2svg",l),bn("pseudoElements2svg",l),bn("i2svg",l)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=l.autoReplaceSvgRoot;ae.autoReplaceSvg===!1&&(ae.autoReplaceSvg=!0),ae.observeMutations=!0,h2(function(){I2({autoReplaceSvgRoot:s}),Rn("watch",l)})}},M2={icon:function(l){if(l===null)return null;if(Hi(l)==="object"&&l.prefix&&l.iconName)return{prefix:l.prefix,iconName:Tn(l.prefix,l.iconName)||l.iconName};if(Array.isArray(l)&&l.length===2){var s=l[1].indexOf("fa-")===0?l[1].slice(3):l[1],d=Ki(l[0]);return{prefix:d,iconName:Tn(d,s)||s}}if(typeof l=="string"&&(l.indexOf("".concat(ae.cssPrefix,"-"))>-1||l.match(Zg))){var u=Ji(l.split(" "),{skipLookups:!0});return{prefix:u.prefix||yn(),iconName:Tn(u.prefix,u.iconName)||u.iconName}}if(typeof l=="string"){var p=yn();return{prefix:p,iconName:Tn(p,l)||l}}}},ht={noAuto:A2,config:ae,dom:L2,parse:M2,library:Ym,findIconDefinition:yl,toHtml:ya},I2=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=l.autoReplaceSvgRoot,d=s===void 0?Ae:s;(Object.keys(Pt.styles).length>0||ae.autoFetchSvg)&&Kt&&ae.autoReplaceSvg&&ht.dom.i2svg({node:d})};function Zi(a,l){return Object.defineProperty(a,"abstract",{get:l}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(d){return ya(d)})}}),Object.defineProperty(a,"node",{get:function(){if(Kt){var d=Ae.createElement("div");return d.innerHTML=a.html,d.children}}}),a}function T2(a){var l=a.children,s=a.main,d=a.mask,u=a.attributes,p=a.styles,h=a.transform;if(Fl(h)&&s.found&&!d.found){var b=s.width,f=s.height,x={x:b/f/2,y:.5};u.style=Xi(q(q({},p),{},{"transform-origin":"".concat(x.x+h.x/16,"em ").concat(x.y+h.y/16,"em")}))}return[{tag:"svg",attributes:u,children:l}]}function F2(a){var l=a.prefix,s=a.iconName,d=a.children,u=a.attributes,p=a.symbol,h=p===!0?"".concat(l,"-").concat(ae.cssPrefix,"-").concat(s):p;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:q(q({},u),{},{id:h}),children:d}]}]}function O2(a){var l=["aria-label","aria-labelledby","title","role"];return l.some(function(s){return s in a})}function Dl(a){var l=a.icons,s=l.main,d=l.mask,u=a.prefix,p=a.iconName,h=a.transform,b=a.symbol,f=a.maskId,x=a.extra,v=a.watchable,g=v===void 0?!1:v,y=d.found?d:s,C=y.width,_=y.height,I=[ae.replacementClass,p?"".concat(ae.cssPrefix,"-").concat(p):""].filter(function(D){return x.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(x.classes).join(" "),A={children:[],attributes:q(q({},x.attributes),{},{"data-prefix":u,"data-icon":p,class:I,role:x.attributes.role||"img",viewBox:"0 0 ".concat(C," ").concat(_)})};!O2(x.attributes)&&!x.attributes["aria-hidden"]&&(A.attributes["aria-hidden"]="true"),g&&(A.attributes[On]="");var M=q(q({},A),{},{prefix:u,iconName:p,main:s,mask:d,maskId:f,transform:h,symbol:b,styles:q({},x.styles)}),z=d.found&&s.found?bn("generateAbstractMask",M)||{children:[],attributes:{}}:bn("generateAbstractIcon",M)||{children:[],attributes:{}},W=z.children,F=z.attributes;return M.children=W,M.attributes=F,b?F2(M):T2(M)}function xf(a){var l=a.content,s=a.width,d=a.height,u=a.transform,p=a.extra,h=a.watchable,b=h===void 0?!1:h,f=q(q({},p.attributes),{},{class:p.classes.join(" ")});b&&(f[On]="");var x=q({},p.styles);Fl(u)&&(x.transform=f2({transform:u,width:s,height:d}),x["-webkit-transform"]=x.transform);var v=Xi(x);v.length>0&&(f.style=v);var g=[];return g.push({tag:"span",attributes:f,children:[l]}),g}function R2(a){var l=a.content,s=a.extra,d=q(q({},s.attributes),{},{class:s.classes.join(" ")}),u=Xi(s.styles);u.length>0&&(d.style=u);var p=[];return p.push({tag:"span",attributes:d,children:[l]}),p}var sl=Pt.styles;function bl(a){var l=a[0],s=a[1],d=a.slice(4),u=Gi(d,1),p=u[0],h=null;return Array.isArray(p)?h={tag:"g",attributes:{class:"".concat(ae.cssPrefix,"-").concat(rl.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ae.cssPrefix,"-").concat(rl.SECONDARY),fill:"currentColor",d:p[0]}},{tag:"path",attributes:{class:"".concat(ae.cssPrefix,"-").concat(rl.PRIMARY),fill:"currentColor",d:p[1]}}]}:h={tag:"path",attributes:{fill:"currentColor",d:p}},{found:!0,width:l,height:s,icon:h}}var D2={found:!1,width:512,height:512};function $2(a,l){!_m&&!ae.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(l,'" is missing.'))}function wl(a,l){var s=l;return l==="fa"&&ae.styleDefault!==null&&(l=yn()),new Promise(function(d,u){if(s==="fa"){var p=Qm(a)||{};a=p.iconName||a,l=p.prefix||l}if(a&&l&&sl[l]&&sl[l][a]){var h=sl[l][a];return d(bl(h))}$2(a,l),d(q(q({},D2),{},{icon:ae.showMissingIcons&&a?bn("missingIconAbstract")||{}:{}}))})}var vf=function(){},jl=ae.measurePerformance&&Ii&&Ii.mark&&Ii.measure?Ii:{mark:vf,measure:vf},ua='FA "7.2.0"',U2=function(l){return jl.mark("".concat(ua," ").concat(l," begins")),function(){return Gm(l)}},Gm=function(l){jl.mark("".concat(ua," ").concat(l," ends")),jl.measure("".concat(ua," ").concat(l),"".concat(ua," ").concat(l," begins"),"".concat(ua," ").concat(l," ends"))},$l={begin:U2,end:Gm},Di=function(){};function yf(a){var l=a.getAttribute?a.getAttribute(On):null;return typeof l=="string"}function W2(a){var l=a.getAttribute?a.getAttribute(Ll):null,s=a.getAttribute?a.getAttribute(Ml):null;return l&&s}function H2(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(ae.replacementClass)}function B2(){if(ae.autoReplaceSvg===!0)return $i.replace;var a=$i[ae.autoReplaceSvg];return a||$i.replace}function V2(a){return Ae.createElementNS("http://www.w3.org/2000/svg",a)}function Q2(a){return Ae.createElement(a)}function Xm(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=l.ceFn,d=s===void 0?a.tag==="svg"?V2:Q2:s;if(typeof a=="string")return Ae.createTextNode(a);var u=d(a.tag);Object.keys(a.attributes||[]).forEach(function(h){u.setAttribute(h,a.attributes[h])});var p=a.children||[];return p.forEach(function(h){u.appendChild(Xm(h,{ceFn:d}))}),u}function q2(a){var l=" ".concat(a.outerHTML," ");return l="".concat(l,"Font Awesome fontawesome.com "),l}var $i={replace:function(l){var s=l[0];if(s.parentNode)if(l[1].forEach(function(u){s.parentNode.insertBefore(Xm(u),s)}),s.getAttribute(On)===null&&ae.keepOriginalSource){var d=Ae.createComment(q2(s));s.parentNode.replaceChild(d,s)}else s.remove()},nest:function(l){var s=l[0],d=l[1];if(~Tl(s).indexOf(ae.replacementClass))return $i.replace(l);var u=new RegExp("".concat(ae.cssPrefix,"-.*"));if(delete d[0].attributes.id,d[0].attributes.class){var p=d[0].attributes.class.split(" ").reduce(function(b,f){return f===ae.replacementClass||f.match(u)?b.toSvg.push(f):b.toNode.push(f),b},{toNode:[],toSvg:[]});d[0].attributes.class=p.toSvg.join(" "),p.toNode.length===0?s.removeAttribute("class"):s.setAttribute("class",p.toNode.join(" "))}var h=d.map(function(b){return ya(b)}).join(`
`);s.setAttribute(On,""),s.innerHTML=h}};function bf(a){a()}function Km(a,l){var s=typeof l=="function"?l:Di;if(a.length===0)s();else{var d=bf;ae.mutateApproach===Xg&&(d=vn.requestAnimationFrame||bf),d(function(){var u=B2(),p=$l.begin("mutate");a.map(u),p(),s()})}}var Ul=!1;function Jm(){Ul=!0}function kl(){Ul=!1}var Vi=null;function wf(a){if(af&&ae.observeMutations){var l=a.treeCallback,s=l===void 0?Di:l,d=a.nodeCallback,u=d===void 0?Di:d,p=a.pseudoElementsCallback,h=p===void 0?Di:p,b=a.observeMutationsRoot,f=b===void 0?Ae:b;Vi=new af(function(x){if(!Ul){var v=yn();br(x).forEach(function(g){if(g.type==="childList"&&g.addedNodes.length>0&&!yf(g.addedNodes[0])&&(ae.searchPseudoElements&&h(g.target),s(g.target)),g.type==="attributes"&&g.target.parentNode&&ae.searchPseudoElements&&h([g.target],!0),g.type==="attributes"&&yf(g.target)&&~n2.indexOf(g.attributeName))if(g.attributeName==="class"&&W2(g.target)){var y=Ji(Tl(g.target)),C=y.prefix,_=y.iconName;g.target.setAttribute(Ll,C||v),_&&g.target.setAttribute(Ml,_)}else H2(g.target)&&u(g.target)})}}),Kt&&Vi.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Y2(){Vi&&Vi.disconnect()}function G2(a){var l=a.getAttribute("style"),s=[];return l&&(s=l.split(";").reduce(function(d,u){var p=u.split(":"),h=p[0],b=p.slice(1);return h&&b.length>0&&(d[h]=b.join(":").trim()),d},{})),s}function X2(a){var l=a.getAttribute("data-prefix"),s=a.getAttribute("data-icon"),d=a.innerText!==void 0?a.innerText.trim():"",u=Ji(Tl(a));return u.prefix||(u.prefix=yn()),l&&s&&(u.prefix=l,u.iconName=s),u.iconName&&u.prefix||(u.prefix&&d.length>0&&(u.iconName=b2(u.prefix,a.innerText)||Rl(u.prefix,Rm(a.innerText))),!u.iconName&&ae.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(u.iconName=a.firstChild.data)),u}function K2(a){var l=br(a.attributes).reduce(function(s,d){return s.name!=="class"&&s.name!=="style"&&(s[d.name]=d.value),s},{});return l}function J2(){return{iconName:null,prefix:null,transform:Ot,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function jf(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},s=X2(a),d=s.iconName,u=s.prefix,p=s.rest,h=K2(a),b=vl("parseNodeAttributes",{},a),f=l.styleParser?G2(a):[];return q({iconName:d,prefix:u,transform:Ot,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:p,styles:f,attributes:h}},b)}var Z2=Pt.styles;function Zm(a){var l=ae.autoReplaceSvg==="nest"?jf(a,{styleParser:!1}):jf(a);return~l.extra.classes.indexOf(Lm)?bn("generateLayersText",a,l):bn("generateSvgReplacementMutation",a,l)}function ex(){return[].concat(_t(Sm),_t(Nm))}function kf(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Kt)return Promise.resolve();var s=Ae.documentElement.classList,d=function(g){return s.add("".concat(lf,"-").concat(g))},u=function(g){return s.remove("".concat(lf,"-").concat(g))},p=ae.autoFetchSvg?ex():im.concat(Object.keys(Z2));p.includes("fa")||p.push("fa");var h=[".".concat(Lm,":not([").concat(On,"])")].concat(p.map(function(v){return".".concat(v,":not([").concat(On,"])")})).join(", ");if(h.length===0)return Promise.resolve();var b=[];try{b=br(a.querySelectorAll(h))}catch{}if(b.length>0)d("pending"),u("complete");else return Promise.resolve();var f=$l.begin("onTree"),x=b.reduce(function(v,g){try{var y=Zm(g);y&&v.push(y)}catch(C){_m||C.name==="MissingIcon"&&console.error(C)}return v},[]);return new Promise(function(v,g){Promise.all(x).then(function(y){Km(y,function(){d("active"),d("complete"),u("pending"),typeof l=="function"&&l(),f(),v()})}).catch(function(y){f(),g(y)})})}function tx(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Zm(a).then(function(s){s&&Km([s],l)})}function nx(a){return function(l){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},d=(l||{}).icon?l:yl(l||{}),u=s.mask;return u&&(u=(u||{}).icon?u:yl(u||{})),a(d,q(q({},s),{},{mask:u}))}}var rx=function(l){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},d=s.transform,u=d===void 0?Ot:d,p=s.symbol,h=p===void 0?!1:p,b=s.mask,f=b===void 0?null:b,x=s.maskId,v=x===void 0?null:x,g=s.classes,y=g===void 0?[]:g,C=s.attributes,_=C===void 0?{}:C,I=s.styles,A=I===void 0?{}:I;if(l){var M=l.prefix,z=l.iconName,W=l.icon;return Zi(q({type:"icon"},l),function(){return Rn("beforeDOMElementCreation",{iconDefinition:l,params:s}),Dl({icons:{main:bl(W),mask:f?bl(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:M,iconName:z,transform:q(q({},Ot),u),symbol:h,maskId:v,extra:{attributes:_,styles:A,classes:y}})})}},ax={mixout:function(){return{icon:nx(rx)}},hooks:function(){return{mutationObserverCallbacks:function(s){return s.treeCallback=kf,s.nodeCallback=tx,s}}},provides:function(l){l.i2svg=function(s){var d=s.node,u=d===void 0?Ae:d,p=s.callback,h=p===void 0?function(){}:p;return kf(u,h)},l.generateSvgReplacementMutation=function(s,d){var u=d.iconName,p=d.prefix,h=d.transform,b=d.symbol,f=d.mask,x=d.maskId,v=d.extra;return new Promise(function(g,y){Promise.all([wl(u,p),f.iconName?wl(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var _=Gi(C,2),I=_[0],A=_[1];g([s,Dl({icons:{main:I,mask:A},prefix:p,iconName:u,transform:h,symbol:b,maskId:x,extra:v,watchable:!0})])}).catch(y)})},l.generateAbstractIcon=function(s){var d=s.children,u=s.attributes,p=s.main,h=s.transform,b=s.styles,f=Xi(b);f.length>0&&(u.style=f);var x;return Fl(h)&&(x=bn("generateAbstractTransformGrouping",{main:p,transform:h,containerWidth:p.width,iconWidth:p.width})),d.push(x||p.icon),{children:d,attributes:u}}}},ix={mixout:function(){return{layer:function(s){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=d.classes,p=u===void 0?[]:u;return Zi({type:"layer"},function(){Rn("beforeDOMElementCreation",{assembler:s,params:d});var h=[];return s(function(b){Array.isArray(b)?b.map(function(f){h=h.concat(f.abstract)}):h=h.concat(b.abstract)}),[{tag:"span",attributes:{class:["".concat(ae.cssPrefix,"-layers")].concat(_t(p)).join(" ")},children:h}]})}}}},sx={mixout:function(){return{counter:function(s){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};d.title;var u=d.classes,p=u===void 0?[]:u,h=d.attributes,b=h===void 0?{}:h,f=d.styles,x=f===void 0?{}:f;return Zi({type:"counter",content:s},function(){return Rn("beforeDOMElementCreation",{content:s,params:d}),R2({content:s.toString(),extra:{attributes:b,styles:x,classes:["".concat(ae.cssPrefix,"-layers-counter")].concat(_t(p))}})})}}}},ox={mixout:function(){return{text:function(s){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=d.transform,p=u===void 0?Ot:u,h=d.classes,b=h===void 0?[]:h,f=d.attributes,x=f===void 0?{}:f,v=d.styles,g=v===void 0?{}:v;return Zi({type:"text",content:s},function(){return Rn("beforeDOMElementCreation",{content:s,params:d}),xf({content:s,transform:q(q({},Ot),p),extra:{attributes:x,styles:g,classes:["".concat(ae.cssPrefix,"-layers-text")].concat(_t(b))}})})}}},provides:function(l){l.generateLayersText=function(s,d){var u=d.transform,p=d.extra,h=null,b=null;if(rm){var f=parseInt(getComputedStyle(s).fontSize,10),x=s.getBoundingClientRect();h=x.width/f,b=x.height/f}return Promise.resolve([s,xf({content:s.innerHTML,width:h,height:b,transform:u,extra:p,watchable:!0})])}}},ep=new RegExp('"',"ug"),Sf=[1105920,1112319],Nf=q(q(q(q({},{FontAwesome:{normal:"fas",400:"fas"}}),U1),Yg),X1),Sl=Object.keys(Nf).reduce(function(a,l){return a[l.toLowerCase()]=Nf[l],a},{}),lx=Object.keys(Sl).reduce(function(a,l){var s=Sl[l];return a[l]=s[900]||_t(Object.entries(s))[0][1],a},{});function cx(a){var l=a.replace(ep,"");return Rm(_t(l)[0]||"")}function dx(a){var l=a.getPropertyValue("font-feature-settings").includes("ss01"),s=a.getPropertyValue("content"),d=s.replace(ep,""),u=d.codePointAt(0),p=u>=Sf[0]&&u<=Sf[1],h=d.length===2?d[0]===d[1]:!1;return p||h||l}function ux(a,l){var s=a.replace(/^['"]|['"]$/g,"").toLowerCase(),d=parseInt(l),u=isNaN(d)?"normal":d;return(Sl[s]||{})[u]||lx[s]}function Cf(a,l){var s="".concat(Gg).concat(l.replace(":","-"));return new Promise(function(d,u){if(a.getAttribute(s)!==null)return d();var p=br(a.children),h=p.filter(function(G){return G.getAttribute(ml)===l})[0],b=vn.getComputedStyle(a,l),f=b.getPropertyValue("font-family"),x=f.match(e2),v=b.getPropertyValue("font-weight"),g=b.getPropertyValue("content");if(h&&!x)return a.removeChild(h),d();if(x&&g!=="none"&&g!==""){var y=b.getPropertyValue("content"),C=ux(f,v),_=cx(y),I=x[0].startsWith("FontAwesome"),A=dx(b),M=Rl(C,_),z=M;if(I){var W=w2(_);W.iconName&&W.prefix&&(M=W.iconName,C=W.prefix)}if(M&&!A&&(!h||h.getAttribute(Ll)!==C||h.getAttribute(Ml)!==z)){a.setAttribute(s,z),h&&a.removeChild(h);var F=J2(),D=F.extra;D.attributes[ml]=l,wl(M,C).then(function(G){var ne=Dl(q(q({},F),{},{icons:{main:G,mask:qm()},prefix:C,iconName:z,extra:D,watchable:!0})),de=Ae.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?a.insertBefore(de,a.firstChild):a.appendChild(de),de.outerHTML=ne.map(function(X){return ya(X)}).join(`
`),a.removeAttribute(s),d()}).catch(u)}else d()}else d()})}function fx(a){return Promise.all([Cf(a,"::before"),Cf(a,"::after")])}function mx(a){return a.parentNode!==document.head&&!~Kg.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(ml)&&(!a.parentNode||a.parentNode.tagName!=="svg")}var px=function(l){return!!l&&Pm.some(function(s){return l.includes(s)})},hx=function(l){if(!l)return[];var s=new Set,d=l.split(/,(?![^()]*\))/).map(function(f){return f.trim()});d=d.flatMap(function(f){return f.includes("(")?f:f.split(",").map(function(x){return x.trim()})});var u=Ri(d),p;try{for(u.s();!(p=u.n()).done;){var h=p.value;if(px(h)){var b=Pm.reduce(function(f,x){return f.replace(x,"")},h);b!==""&&b!=="*"&&s.add(b)}}}catch(f){u.e(f)}finally{u.f()}return s};function Ef(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Kt){var s;if(l)s=a;else if(ae.searchPseudoElementsFullScan)s=a.querySelectorAll("*");else{var d=new Set,u=Ri(document.styleSheets),p;try{for(u.s();!(p=u.n()).done;){var h=p.value;try{var b=Ri(h.cssRules),f;try{for(b.s();!(f=b.n()).done;){var x=f.value,v=hx(x.selectorText),g=Ri(v),y;try{for(g.s();!(y=g.n()).done;){var C=y.value;d.add(C)}}catch(I){g.e(I)}finally{g.f()}}}catch(I){b.e(I)}finally{b.f()}}catch(I){ae.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(h.href," (").concat(I.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(I){u.e(I)}finally{u.f()}if(!d.size)return;var _=Array.from(d).join(", ");try{s=a.querySelectorAll(_)}catch{}}return new Promise(function(I,A){var M=br(s).filter(mx).map(fx),z=$l.begin("searchPseudoElements");Jm(),Promise.all(M).then(function(){z(),kl(),I()}).catch(function(){z(),kl(),A()})})}}var gx={hooks:function(){return{mutationObserverCallbacks:function(s){return s.pseudoElementsCallback=Ef,s}}},provides:function(l){l.pseudoElements2svg=function(s){var d=s.node,u=d===void 0?Ae:d;ae.searchPseudoElements&&Ef(u)}}},zf=!1,xx={mixout:function(){return{dom:{unwatch:function(){Jm(),zf=!0}}}},hooks:function(){return{bootstrap:function(){wf(vl("mutationObserverCallbacks",{}))},noAuto:function(){Y2()},watch:function(s){var d=s.observeMutationsRoot;zf?kl():wf(vl("mutationObserverCallbacks",{observeMutationsRoot:d}))}}}},Pf=function(l){var s={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return l.toLowerCase().split(" ").reduce(function(d,u){var p=u.toLowerCase().split("-"),h=p[0],b=p.slice(1).join("-");if(h&&b==="h")return d.flipX=!0,d;if(h&&b==="v")return d.flipY=!0,d;if(b=parseFloat(b),isNaN(b))return d;switch(h){case"grow":d.size=d.size+b;break;case"shrink":d.size=d.size-b;break;case"left":d.x=d.x-b;break;case"right":d.x=d.x+b;break;case"up":d.y=d.y-b;break;case"down":d.y=d.y+b;break;case"rotate":d.rotate=d.rotate+b;break}return d},s)},vx={mixout:function(){return{parse:{transform:function(s){return Pf(s)}}}},hooks:function(){return{parseNodeAttributes:function(s,d){var u=d.getAttribute("data-fa-transform");return u&&(s.transform=Pf(u)),s}}},provides:function(l){l.generateAbstractTransformGrouping=function(s){var d=s.main,u=s.transform,p=s.containerWidth,h=s.iconWidth,b={transform:"translate(".concat(p/2," 256)")},f="translate(".concat(u.x*32,", ").concat(u.y*32,") "),x="scale(".concat(u.size/16*(u.flipX?-1:1),", ").concat(u.size/16*(u.flipY?-1:1),") "),v="rotate(".concat(u.rotate," 0 0)"),g={transform:"".concat(f," ").concat(x," ").concat(v)},y={transform:"translate(".concat(h/2*-1," -256)")},C={outer:b,inner:g,path:y};return{tag:"g",attributes:q({},C.outer),children:[{tag:"g",attributes:q({},C.inner),children:[{tag:d.icon.tag,children:d.icon.children,attributes:q(q({},d.icon.attributes),C.path)}]}]}}}},ol={x:0,y:0,width:"100%",height:"100%"};function _f(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||l)&&(a.attributes.fill="black"),a}function yx(a){return a.tag==="g"?a.children:[a]}var bx={hooks:function(){return{parseNodeAttributes:function(s,d){var u=d.getAttribute("data-fa-mask"),p=u?Ji(u.split(" ").map(function(h){return h.trim()})):qm();return p.prefix||(p.prefix=yn()),s.mask=p,s.maskId=d.getAttribute("data-fa-mask-id"),s}}},provides:function(l){l.generateAbstractMask=function(s){var d=s.children,u=s.attributes,p=s.main,h=s.mask,b=s.maskId,f=s.transform,x=p.width,v=p.icon,g=h.width,y=h.icon,C=u2({transform:f,containerWidth:g,iconWidth:x}),_={tag:"rect",attributes:q(q({},ol),{},{fill:"white"})},I=v.children?{children:v.children.map(_f)}:{},A={tag:"g",attributes:q({},C.inner),children:[_f(q({tag:v.tag,attributes:q(q({},v.attributes),C.path)},I))]},M={tag:"g",attributes:q({},C.outer),children:[A]},z="mask-".concat(b||df()),W="clip-".concat(b||df()),F={tag:"mask",attributes:q(q({},ol),{},{id:z,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,M]},D={tag:"defs",children:[{tag:"clipPath",attributes:{id:W},children:yx(y)},F]};return d.push(D,{tag:"rect",attributes:q({fill:"currentColor","clip-path":"url(#".concat(W,")"),mask:"url(#".concat(z,")")},ol)}),{children:d,attributes:u}}}},wx={provides:function(l){var s=!1;vn.matchMedia&&(s=vn.matchMedia("(prefers-reduced-motion: reduce)").matches),l.missingIconAbstract=function(){var d=[],u={fill:"currentColor"},p={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};d.push({tag:"path",attributes:q(q({},u),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var h=q(q({},p),{},{attributeName:"opacity"}),b={tag:"circle",attributes:q(q({},u),{},{cx:"256",cy:"364",r:"28"}),children:[]};return s||b.children.push({tag:"animate",attributes:q(q({},p),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:q(q({},h),{},{values:"1;0;1;1;0;1;"})}),d.push(b),d.push({tag:"path",attributes:q(q({},u),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:s?[]:[{tag:"animate",attributes:q(q({},h),{},{values:"1;0;0;0;0;1;"})}]}),s||d.push({tag:"path",attributes:q(q({},u),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:q(q({},h),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:d}}}},jx={hooks:function(){return{parseNodeAttributes:function(s,d){var u=d.getAttribute("data-fa-symbol"),p=u===null?!1:u===""?!0:u;return s.symbol=p,s}}}},kx=[p2,ax,ix,sx,ox,gx,xx,vx,bx,wx,jx];_2(kx,{mixoutsTo:ht});ht.noAuto;var vr=ht.config;ht.library;ht.dom;var tp=ht.parse;ht.findIconDefinition;ht.toHtml;var Sx=ht.icon;ht.layer;ht.text;ht.counter;function Nx(a){return a=a-0,a===a}function np(a){return Nx(a)?a:(a=a.replace(/[_-]+(.)?/g,(l,s)=>s?s.toUpperCase():""),a.charAt(0).toLowerCase()+a.slice(1))}var Cx=(a,l)=>Fe.createElement("stop",{key:`${l}-${a.offset}`,offset:a.offset,stopColor:a.color,...a.opacity!==void 0&&{stopOpacity:a.opacity}});function Ex(a){return a.charAt(0).toUpperCase()+a.slice(1)}var mr=new Map,zx=1e3;function Px(a){if(mr.has(a))return mr.get(a);const l={};let s=0;const d=a.length;for(;s<d;){const u=a.indexOf(";",s),p=u===-1?d:u,h=a.slice(s,p).trim();if(h){const b=h.indexOf(":");if(b>0){const f=h.slice(0,b).trim(),x=h.slice(b+1).trim();if(f&&x){const v=np(f);l[v.startsWith("webkit")?Ex(v):v]=x}}}s=p+1}if(mr.size===zx){const u=mr.keys().next().value;u&&mr.delete(u)}return mr.set(a,l),l}function rp(a,l,s={}){if(typeof l=="string")return l;const d=(l.children||[]).map(g=>{let y=g;return("fill"in s||s.gradientFill)&&g.tag==="path"&&"fill"in g.attributes&&(y={...g,attributes:{...g.attributes,fill:void 0}}),rp(a,y)}),u=l.attributes||{},p={};for(const[g,y]of Object.entries(u))switch(!0){case g==="class":{p.className=y;break}case g==="style":{p.style=Px(String(y));break}case g.startsWith("aria-"):case g.startsWith("data-"):{p[g.toLowerCase()]=y;break}default:p[np(g)]=y}const{style:h,role:b,"aria-label":f,gradientFill:x,...v}=s;if(h&&(p.style=p.style?{...p.style,...h}:h),b&&(p.role=b),f&&(p["aria-label"]=f,p["aria-hidden"]="false"),x){p.fill=`url(#${x.id})`;const{type:g,stops:y=[],...C}=x;d.unshift(a(g==="linear"?"linearGradient":"radialGradient",{...C,id:x.id},y.map(Cx)))}return a(l.tag,{...p,...v},...d)}var _x=rp.bind(null,Fe.createElement),Af=(a,l)=>{const s=N.useId();return a||(l?s:void 0)},Ax=class{constructor(a="react-fontawesome"){this.enabled=!1;let l=!1;try{l=typeof process<"u"&&!1}catch{}this.scope=a,this.enabled=l}log(...a){this.enabled&&console.log(`[${this.scope}]`,...a)}warn(...a){this.enabled&&console.warn(`[${this.scope}]`,...a)}error(...a){this.enabled&&console.error(`[${this.scope}]`,...a)}},Lx="searchPseudoElementsFullScan"in vr&&typeof vr.searchPseudoElementsFullScan=="boolean"?"7.0.0":"6.0.0",Mx=Number.parseInt(Lx)>=7,Ix=()=>Mx,pa="fa",qt={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},Tx={left:"fa-pull-left",right:"fa-pull-right"},Fx={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},Ox={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},Yt={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function Rx(a){const l=vr.cssPrefix||vr.familyPrefix||pa;return l===pa?a:a.replace(new RegExp(String.raw`(?<=^|\s)${pa}-`,"g"),`${l}-`)}function Dx(a){const{beat:l,fade:s,beatFade:d,bounce:u,shake:p,spin:h,spinPulse:b,spinReverse:f,pulse:x,fixedWidth:v,inverse:g,border:y,flip:C,size:_,rotation:I,pull:A,swapOpacity:M,rotateBy:z,widthAuto:W,className:F}=a,D=[];return F&&D.push(...F.split(" ")),l&&D.push(qt.beat),s&&D.push(qt.fade),d&&D.push(qt.beatFade),u&&D.push(qt.bounce),p&&D.push(qt.shake),h&&D.push(qt.spin),f&&D.push(qt.spinReverse),b&&D.push(qt.spinPulse),x&&D.push(qt.pulse),v&&D.push(Yt.fixedWidth),g&&D.push(Yt.inverse),y&&D.push(Yt.border),C===!0&&D.push(Yt.flip),(C==="horizontal"||C==="both")&&D.push(Yt.flipHorizontal),(C==="vertical"||C==="both")&&D.push(Yt.flipVertical),_!=null&&D.push(Ox[_]),I!=null&&I!==0&&D.push(Fx[I]),A!=null&&D.push(Tx[A]),M&&D.push(Yt.swapOpacity),Ix()?(z&&D.push(Yt.rotateBy),W&&D.push(Yt.widthAuto),(vr.cssPrefix||vr.familyPrefix||pa)===pa?D:D.map(Rx)):D}var $x=a=>typeof a=="object"&&"icon"in a&&!!a.icon;function Lf(a){if(a)return $x(a)?a:tp.icon(a)}function Ux(a){return Object.keys(a)}var Mf=new Ax("FontAwesomeIcon"),ap={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},Wx=new Set(Object.keys(ap)),U=Fe.forwardRef((a,l)=>{const s={...ap,...a},{icon:d,mask:u,symbol:p,title:h,titleId:b,maskId:f,transform:x}=s,v=Af(f,!!u),g=Af(b,!!h),y=Lf(d);if(!y)return Mf.error("Icon lookup is undefined",d),null;const C=Dx(s),_=typeof x=="string"?tp.transform(x):x,I=Lf(u),A=Sx(y,{...C.length>0&&{classes:C},..._&&{transform:_},...I&&{mask:I},symbol:p,title:h,titleId:g,maskId:v});if(!A)return Mf.error("Could not find icon",y),null;const{abstract:M}=A,z={ref:l};for(const W of Ux(s))Wx.has(W)||(z[W]=s[W]);return _x(M[0],z)});U.displayName="FontAwesomeIcon";/*!
 * Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */var Wl={prefix:"fas",iconName:"rotate",icon:[512,512,[128260,"sync-alt"],"f2f1","M480.1 192l7.9 0c13.3 0 24-10.7 24-24l0-144c0-9.7-5.8-18.5-14.8-22.2S477.9 .2 471 7L419.3 58.8C375 22.1 318 0 256 0 127 0 20.3 95.4 2.6 219.5 .1 237 12.2 253.2 29.7 255.7s33.7-9.7 36.2-27.1C79.2 135.5 159.3 64 256 64 300.4 64 341.2 79 373.7 104.3L327 151c-6.9 6.9-8.9 17.2-5.2 26.2S334.3 192 344 192l136.1 0zm29.4 100.5c2.5-17.5-9.7-33.7-27.1-36.2s-33.7 9.7-36.2 27.1c-13.3 93-93.4 164.5-190.1 164.5-44.4 0-85.2-15-117.7-40.3L185 361c6.9-6.9 8.9-17.2 5.2-26.2S177.7 320 168 320L24 320c-13.3 0-24 10.7-24 24L0 488c0 9.7 5.8 18.5 14.8 22.2S34.1 511.8 41 505l51.8-51.8C137 489.9 194 512 256 512 385 512 491.7 416.6 509.4 292.5z"]},Hx={prefix:"fas",iconName:"gears",icon:[640,512,["cogs"],"f085","M415.9 210.5c12.2-3.3 25 2.5 30.5 13.8L465 261.9c10.3 1.4 20.4 4.2 29.9 8.1l35-23.3c10.5-7 24.4-5.6 33.3 3.3l19.2 19.2c8.9 8.9 10.3 22.9 3.3 33.3l-23.3 34.9c1.9 4.7 3.6 9.6 5 14.7 1.4 5.1 2.3 10.1 3 15.2l37.7 18.6c11.3 5.6 17.1 18.4 13.8 30.5l-7 26.2c-3.3 12.1-14.6 20.3-27.2 19.5l-42-2.7c-6.3 8.1-13.6 15.6-21.9 22l2.7 41.9c.8 12.6-7.4 24-19.5 27.2l-26.2 7c-12.2 3.3-24.9-2.5-30.5-13.8l-18.6-37.6c-10.3-1.4-20.4-4.2-29.9-8.1l-35 23.3c-10.5 7-24.4 5.6-33.3-3.3l-19.2-19.2c-8.9-8.9-10.3-22.8-3.3-33.3l23.3-35c-1.9-4.7-3.6-9.6-5-14.7s-2.3-10.2-3-15.2l-37.7-18.6c-11.3-5.6-17-18.4-13.8-30.5l7-26.2c3.3-12.1 14.6-20.3 27.2-19.5l41.9 2.7c6.3-8.1 13.6-15.6 21.9-22l-2.7-41.8c-.8-12.6 7.4-24 19.5-27.2l26.2-7zM448.4 340a44 44 0 1 0 .1 88 44 44 0 1 0 -.1-88zM224.9-45.5l26.2 7c12.1 3.3 20.3 14.7 19.5 27.2l-2.7 41.8c8.3 6.4 15.6 13.8 21.9 22l42-2.7c12.5-.8 23.9 7.4 27.2 19.5l7 26.2c3.2 12.1-2.5 24.9-13.8 30.5l-37.7 18.6c-.7 5.1-1.7 10.2-3 15.2s-3.1 10-5 14.7l23.3 35c7 10.5 5.6 24.4-3.3 33.3L307.3 262c-8.9 8.9-22.8 10.3-33.3 3.3L239 242c-9.5 3.9-19.6 6.7-29.9 8.1l-18.6 37.6c-5.6 11.3-18.4 17-30.5 13.8l-26.2-7c-12.2-3.3-20.3-14.7-19.5-27.2l2.7-41.9c-8.3-6.4-15.6-13.8-21.9-22l-42 2.7c-12.5 .8-23.9-7.4-27.2-19.5l-7-26.2c-3.2-12.1 2.5-24.9 13.8-30.5l37.7-18.6c.7-5.1 1.7-10.1 3-15.2 1.4-5.1 3-10 5-14.7L55.1 46.5c-7-10.5-5.6-24.4 3.3-33.3L77.6-6c8.9-8.9 22.8-10.3 33.3-3.3l35 23.3c9.5-3.9 19.6-6.7 29.9-8.1l18.6-37.6c5.6-11.3 18.3-17 30.5-13.8zM192.4 84a44 44 0 1 0 0 88 44 44 0 1 0 0-88z"]},Bx={prefix:"fas",iconName:"file-arrow-down",icon:[384,512,["file-download"],"f56d","M0 64C0 28.7 28.7 0 64 0L213.5 0c17 0 33.3 6.7 45.3 18.7L365.3 125.3c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm208-5.5l0 93.5c0 13.3 10.7 24 24 24L325.5 176 208 58.5zM175 441c9.4 9.4 24.6 9.4 33.9 0l64-64c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-23 23 0-86.1c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 86.1-23-23c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64z"]},Vx={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"]},Nl={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"]},Qx={prefix:"fas",iconName:"ban",icon:[512,512,[128683,"cancel"],"f05e","M367.2 412.5L99.5 144.8c-22.4 31.4-35.5 69.8-35.5 111.2 0 106 86 192 192 192 41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3c22.4-31.4 35.5-69.8 35.5-111.2 0-106-86-192-192-192-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"]},Qi={prefix:"fas",iconName:"key",icon:[512,512,[128273],"f084","M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0 160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"]},ip={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6-46.8 43.5-78.1 95.4-93 131.1-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.7-8.4-1 10.9-.1 22.1 2.9 33.2 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-12.2-45.7-55.5-74.8-101.1-70.8 5.3 9.3 8.4 20.1 8.4 31.7z"]},$n={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"]},qx={prefix:"fas",iconName:"clipboard-check",icon:[384,512,[],"f46c","M256 0c23.7 0 44.4 12.9 55.4 32l8.6 0c35.3 0 64 28.7 64 64l0 352c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l8.6 0C83.6 12.9 104.3 0 128 0L256 0zm26.9 212.6c-10.7-7.8-25.7-5.4-33.5 5.3l-85.6 117.7-26.5-27.4c-9.2-9.5-24.4-9.8-33.9-.6s-9.8 24.4-.6 33.9l46.4 48c4.9 5.1 11.8 7.8 18.9 7.3s13.6-4.1 17.8-9.8L288.2 246.1c7.8-10.7 5.4-25.7-5.3-33.5zM136 64c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L136 64z"]},ba={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},Yx={prefix:"fas",iconName:"book",icon:[448,512,[128212],"f02d","M384 512L96 512c-53 0-96-43-96-96L0 96C0 43 43 0 96 0L400 0c26.5 0 48 21.5 48 48l0 288c0 20.9-13.4 38.7-32 45.3l0 66.7c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0zM96 384c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0 0-64-256 0zm32-232c0 13.3 10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0c-13.3 0-24 10.7-24 24zm24 72c-13.3 0-24 10.7-24 24s10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0z"]},Hl={prefix:"fas",iconName:"paper-plane",icon:[576,512,[61913],"f1d8","M536.4-26.3c9.8-3.5 20.6-1 28 6.3s9.8 18.2 6.3 28l-178 496.9c-5 13.9-18.1 23.1-32.8 23.1-14.2 0-27-8.6-32.3-21.7l-64.2-158c-4.5-11-2.5-23.6 5.2-32.6l94.5-112.4c5.1-6.1 4.7-15-.9-20.6s-14.6-6-20.6-.9L229.2 276.1c-9.1 7.6-21.6 9.6-32.6 5.2L38.1 216.8c-13.1-5.3-21.7-18.1-21.7-32.3 0-14.7 9.2-27.8 23.1-32.8l496.9-178z"]},Gx={prefix:"fas",iconName:"print",icon:[512,512,[128424,128438,9113],"f02f","M64 64C64 28.7 92.7 0 128 0L341.5 0c17 0 33.3 6.7 45.3 18.7l42.5 42.5c12 12 18.7 28.3 18.7 45.3l0 37.5-384 0 0-80zM0 256c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 96c0 17.7-14.3 32-32 32l-32 0 0 64c0 35.3-28.7 64-64 64l-256 0c-35.3 0-64-28.7-64-64l0-64-32 0c-17.7 0-32-14.3-32-32l0-96zM128 416l0 32 256 0 0-96-256 0 0 64zM456 272a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"]},Xx={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M320 16a104 104 0 1 1 0 208 104 104 0 1 1 0-208zM96 88a72 72 0 1 1 0 144 72 72 0 1 1 0-144zM0 416c0-70.7 57.3-128 128-128 12.8 0 25.2 1.9 36.9 5.4-32.9 36.8-52.9 85.4-52.9 138.6l0 16c0 11.4 2.4 22.2 6.7 32L32 480c-17.7 0-32-14.3-32-32l0-32zm521.3 64c4.3-9.8 6.7-20.6 6.7-32l0-16c0-53.2-20-101.8-52.9-138.6 11.7-3.5 24.1-5.4 36.9-5.4 70.7 0 128 57.3 128 128l0 32c0 17.7-14.3 32-32 32l-86.7 0zM472 160a72 72 0 1 1 144 0 72 72 0 1 1 -144 0zM160 432c0-88.4 71.6-160 160-160s160 71.6 160 160l0 16c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-16z"]},Kx={prefix:"fas",iconName:"certificate",icon:[576,512,[],"f0a3","M239.2-8c-6.1-6.2-15-8.7-23.4-6.4S200.9-5.6 198.8 2.8L183.5 63c-1.1 4.4-5.6 7-9.9 5.7L113.8 51.9c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l16.9 59.8c1.2 4.3-1.4 8.8-5.7 9.9L35.1 166.5c-8.4 2.1-15 8.7-17.3 17.1s.2 17.3 6.4 23.4l44.5 43.3c3.2 3.1 3.2 8.3 0 11.5L24.3 305.1c-6.2 6.1-8.7 15-6.4 23.4s8.9 14.9 17.3 17.1l60.2 15.3c4.4 1.1 7 5.6 5.7 9.9L84.2 430.5c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l59.8-16.9c4.3-1.2 8.8 1.4 9.9 5.7l15.3 60.2c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l43.3-44.5c3.1-3.2 8.3-3.2 11.5 0L337.3 520c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3L393.1 449c1.1-4.4 5.6-7 9.9-5.7l59.8 16.9c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-16.9-59.8c-1.2-4.3 1.4-8.8 5.7-9.9l60.2-15.3c8.4-2.1 15-8.7 17.3-17.1s-.2-17.4-6.4-23.4l-44.5-43.3c-3.2-3.1-3.2-8.3 0-11.5l44.5-43.3c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-60.2-15.3c-4.4-1.1-7-5.6-5.7-9.9l16.9-59.8c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1L403 68.8c-4.3 1.2-8.8-1.4-9.9-5.7L377.8 2.8c-2.1-8.4-8.7-15-17.1-17.3s-17.3 .2-23.4 6.4L294 36.5c-3.1 3.2-8.3 3.2-11.5 0L239.2-8z"]},Jx={prefix:"fas",iconName:"video",icon:[576,512,["video-camera"],"f03d","M96 64c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L96 64zM464 336l73.5 58.8c4.2 3.4 9.4 5.2 14.8 5.2 13.1 0 23.7-10.6 23.7-23.7l0-240.6c0-13.1-10.6-23.7-23.7-23.7-5.4 0-10.6 1.8-14.8 5.2L464 176 464 336z"]},sp={prefix:"fas",iconName:"file-import",icon:[384,512,["arrow-right-to-file"],"f56f","M64 0C28.7 0 0 28.7 0 64l0 240 182.1 0-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l72 72c9.4 9.4 9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-182.1 0 0 96c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-277.5c0-17-6.7-33.3-18.7-45.3L258.7 18.7C246.7 6.7 230.5 0 213.5 0L64 0zM325.5 176L232 176c-13.3 0-24-10.7-24-24L208 58.5 325.5 176z"]},Zx={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c9.4-9.4 24.6-9.4 33.9 0l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9z"]},op={prefix:"fas",iconName:"box-open",icon:[640,512,[],"f49e","M560.3 237.2c10.4 11.8 28.3 14.4 41.8 5.5 14.7-9.8 18.7-29.7 8.9-44.4l-48-72c-2.8-4.2-6.6-7.7-11.1-10.2L351.4 4.7c-19.3-10.7-42.8-10.7-62.2 0L88.8 116c-5.4 3-9.7 7.4-12.6 12.8L27.7 218.7c-12.6 23.4-3.8 52.5 19.6 65.1l33 17.7 0 53.3c0 23 12.4 44.3 32.4 55.7l176 99.7c19.6 11.1 43.5 11.1 63.1 0l176-99.7c20.1-11.4 32.4-32.6 32.4-55.7l0-117.5zm-240-9.8L170.2 144 320.3 60.6 470.4 144 320.3 227.4zm-41.5 50.2l-21.3 46.2-165.8-88.8 25.4-47.2 161.7 89.8z"]},lp={prefix:"fas",iconName:"sun",icon:[576,512,[9728],"f185","M288-32c8.4 0 16.3 4.4 20.6 11.7L364.1 72.3 468.9 46c8.2-2 16.9 .4 22.8 6.3S500 67 498 75.1l-26.3 104.7 92.7 55.5c7.2 4.3 11.7 12.2 11.7 20.6s-4.4 16.3-11.7 20.6L471.7 332.1 498 436.8c2 8.2-.4 16.9-6.3 22.8S477 468 468.9 466l-104.7-26.3-55.5 92.7c-4.3 7.2-12.2 11.7-20.6 11.7s-16.3-4.4-20.6-11.7L211.9 439.7 107.2 466c-8.2 2-16.8-.4-22.8-6.3S76 445 78 436.8l26.2-104.7-92.6-55.5C4.4 272.2 0 264.4 0 256s4.4-16.3 11.7-20.6L104.3 179.9 78 75.1c-2-8.2 .3-16.8 6.3-22.8S99 44 107.2 46l104.7 26.2 55.5-92.6 1.8-2.6c4.5-5.7 11.4-9.1 18.8-9.1zm0 144a144 144 0 1 0 0 288 144 144 0 1 0 0-288zm0 240a96 96 0 1 1 0-192 96 96 0 1 1 0 192z"]},ev={prefix:"fas",iconName:"network-wired",icon:[576,512,[],"f6ff","M248 88l80 0 0 48-80 0 0-48zm-8-56c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l16 0 0 32-224 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0 0 32-16 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-16 0 0-32 192 0 0 32-16 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-16 0 0-32 96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-224 0 0-32 16 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-96 0zM448 376l8 0 0 48-80 0 0-48 72 0zm-256 0l8 0 0 48-80 0 0-48 72 0z"]},tv={prefix:"fas",iconName:"file-circle-question",icon:[576,512,[],"e4ef","M96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l180 0c-22.7-31.5-36-70.2-36-112 0-100.6 77.4-183.2 176-191.3l0-38.1c0-17-6.7-33.3-18.7-45.3L290.7 18.7C278.7 6.7 262.5 0 245.5 0L96 0zM357.5 176L264 176c-13.3 0-24-10.7-24-24L240 58.5 357.5 176zM432 544a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm0-100a20 20 0 1 1 0 40 20 20 0 1 1 0-40zm0-100c-11.6 0-21.3 8.2-23.5 19.2-1.8 8.7-10.2 14.3-18.9 12.5s-14.3-10.2-12.5-18.9c5.2-25.6 27.8-44.8 54.9-44.8 30.9 0 56 25.1 56 56 0 19.8-11.7 37.8-29.8 45.9l-10.4 4.6c-1.2 7.7-7.8 13.5-15.8 13.5-8.8 0-16-7.2-16-16 0-11.2 6.6-21.3 16.8-25.9l12.4-5.5c6.6-2.9 10.8-9.4 10.8-16.6 0-13.3-10.7-24-24-24z"]},nv={prefix:"fas",iconName:"cloud",icon:[576,512,[9729],"f0c2","M0 336c0 79.5 64.5 144 144 144l304 0c70.7 0 128-57.3 128-128 0-51.6-30.5-96.1-74.5-116.3 6.7-13.1 10.5-28 10.5-43.7 0-53-43-96-96-96-17.7 0-34.2 4.8-48.4 13.1-24.1-45.8-72.2-77.1-127.6-77.1-79.5 0-144 64.5-144 144 0 8 .7 15.9 1.9 23.5-56.9 19.2-97.9 73.1-97.9 136.5z"]},Bl={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"]},rv={prefix:"fas",iconName:"circle-question",icon:[512,512,[62108,"question-circle"],"f059","M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm0-336c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},cp={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M505 273c9.4-9.4 9.4-24.6 0-33.9L361 95c-6.9-6.9-17.2-8.9-26.2-5.2S320 102.3 320 112l0 80-112 0c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48l112 0 0 80c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2L505 273zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"]},av={prefix:"fas",iconName:"play",icon:[448,512,[9654],"f04b","M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"]},dp={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"]},Ui={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144,62470,"user-alt","user-large"],"f007","M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"]},up={prefix:"fas",iconName:"gauge-high",icon:[512,512,[62461,"tachometer-alt","tachometer-alt-fast"],"f625","M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 416c35.3 0 64-28.7 64-64 0-16.2-6-31.1-16-42.3l69.5-138.9c5.9-11.9 1.1-26.3-10.7-32.2s-26.3-1.1-32.2 10.7L261.1 288.2c-1.7-.1-3.4-.2-5.1-.2-35.3 0-64 28.7-64 64s28.7 64 64 64zM176 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm352-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},iv={prefix:"fas",iconName:"arrow-right",icon:[512,512,[8594],"f061","M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},sv={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"]},fp={prefix:"fas",iconName:"file-lines",icon:[384,512,[128441,128462,61686,"file-alt","file-text"],"f15c","M0 64C0 28.7 28.7 0 64 0L213.5 0c17 0 33.3 6.7 45.3 18.7L365.3 125.3c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm208-5.5l0 93.5c0 13.3 10.7 24 24 24L325.5 176 208 58.5zM120 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"]},ov={prefix:"fas",iconName:"file-invoice",icon:[384,512,[],"f570","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-277.5c0-17-6.7-33.3-18.7-45.3L258.7 18.7C246.7 6.7 230.5 0 213.5 0L64 0zM325.5 176L232 176c-13.3 0-24-10.7-24-24L208 58.5 325.5 176zM64 384l0-64c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 416c-17.7 0-32-14.3-32-32zM88 64l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24S74.7 64 88 64zm0 96l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]},mp={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zM374 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L221.1 315.2 169 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.8 7.5 18.8 7s13.4-4.1 17.5-9.8L379.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z"]},pp=mp,qi={prefix:"fas",iconName:"moon",icon:[512,512,[127769,9214],"f186","M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z"]},hp={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"]},lv={prefix:"fas",iconName:"inbox",icon:[512,512,[],"f01c","M91.8 32C59.9 32 32.9 55.4 28.4 86.9L.6 281.2c-.4 3-.6 6-.6 9.1L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-125.7c0-3-.2-6.1-.6-9.1L483.6 86.9C479.1 55.4 452.1 32 420.2 32L91.8 32zm0 64l328.5 0 27.4 192-59.9 0c-12.1 0-23.2 6.8-28.6 17.7l-14.3 28.6c-5.4 10.8-16.5 17.7-28.6 17.7l-120.4 0c-12.1 0-23.2-6.8-28.6-17.7l-14.3-28.6c-5.4-10.8-16.5-17.7-28.6-17.7L64.3 288 91.8 96z"]},cv={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M256 0c14.7 0 28.2 8.1 35.2 21l216 400c6.7 12.4 6.4 27.4-.8 39.5S486.1 480 472 480L40 480c-14.1 0-27.2-7.4-34.4-19.5s-7.5-27.1-.8-39.5l216-400c7-12.9 20.5-21 35.2-21zm0 352a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.5 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z"]},dv={prefix:"fas",iconName:"graduation-cap",icon:[576,512,[127891,"mortar-board"],"f19d","M48 195.8l209.2 86.1c9.8 4 20.2 6.1 30.8 6.1s21-2.1 30.8-6.1l242.4-99.8c9-3.7 14.8-12.4 14.8-22.1s-5.8-18.4-14.8-22.1L318.8 38.1C309 34.1 298.6 32 288 32s-21 2.1-30.8 6.1L14.8 137.9C5.8 141.6 0 150.3 0 160L0 456c0 13.3 10.7 24 24 24s24-10.7 24-24l0-260.2zm48 71.7L96 384c0 53 86 96 192 96s192-43 192-96l0-116.6-142.9 58.9c-15.6 6.4-32.2 9.7-49.1 9.7s-33.5-3.3-49.1-9.7L96 267.4z"]},Cl={prefix:"fas",iconName:"lock",icon:[384,512,[128274],"f023","M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z"]},uv={prefix:"fas",iconName:"rotate-left",icon:[512,512,["rotate-back","rotate-backward","undo-alt"],"f2ea","M24 192l144 0c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-46.7-46.7c75.3-58.6 184.3-53.3 253.5 15.9 75 75 75 196.5 0 271.5s-196.5 75-271.5 0c-10.2-10.2-19-21.3-26.4-33-9.5-14.9-29.3-19.3-44.2-9.8s-19.3 29.3-9.8 44.2C49.7 408.7 61.4 423.5 75 437 175 537 337 537 437 437S537 175 437 75C342.8-19.3 193.3-24.7 92.7 58.8L41 7C34.1 .2 23.8-1.9 14.8 1.8S0 14.3 0 24L0 168c0 13.3 10.7 24 24 24z"]},wr={prefix:"fas",iconName:"award",icon:[448,512,[],"f559","M245.9-25.9c-13.4-8.2-30.3-8.2-43.7 0-24.4 14.9-39.5 18.9-68.1 18.3-15.7-.4-30.3 8.1-37.9 21.9-13.7 25.1-24.8 36.2-49.9 49.9-13.8 7.5-22.2 22.2-21.9 37.9 .7 28.6-3.4 43.7-18.3 68.1-8.2 13.4-8.2 30.3 0 43.7 14.9 24.4 18.9 39.5 18.3 68.1-.4 15.7 8.1 30.3 21.9 37.9 22.1 12.1 33.3 22.1 45.1 41.5L42.7 458.5c-5.9 11.9-1.1 26.3 10.7 32.2l86 43c11.5 5.7 25.5 1.4 31.7-9.8l52.8-95.1 52.8 95.1c6.2 11.2 20.2 15.6 31.7 9.8l86-43c11.9-5.9 16.7-20.3 10.7-32.2l-48.6-97.2c11.7-19.4 23-29.4 45.1-41.5 13.8-7.5 22.2-22.2 21.9-37.9-.7-28.6 3.4-43.7 18.3-68.1 8.2-13.4 8.2-30.3 0-43.7-14.9-24.4-18.9-39.5-18.3-68.1 .4-15.7-8.1-30.3-21.9-37.9-25.1-13.7-36.2-24.8-49.9-49.9-7.5-13.8-22.2-22.2-37.9-21.9-28.6 .7-43.7-3.4-68.1-18.3zM224 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"]},Vl={prefix:"fas",iconName:"shield-halved",icon:[512,512,["shield-alt"],"f3ed","M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z"]},es={prefix:"fas",iconName:"arrow-left",icon:[512,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},Rt={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"]},fv={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z"]},gp={prefix:"fas",iconName:"eye-slash",icon:[576,512,[],"f070","M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM204.5 138.7c23.5-16.8 52.4-26.7 83.5-26.7 79.5 0 144 64.5 144 144 0 31.1-9.9 59.9-26.7 83.5l-34.7-34.7c12.7-21.4 17-47.7 10.1-73.7-13.7-51.2-66.4-81.6-117.6-67.9-8.6 2.3-16.7 5.7-24 10l-34.7-34.7zM325.3 395.1c-11.9 3.2-24.4 4.9-37.3 4.9-79.5 0-144-64.5-144-144 0-12.9 1.7-25.4 4.9-37.3L69.4 139.2c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6l-64.2-64.2z"]},mv={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[512,512,["external-link"],"f08e","M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0-201.4 201.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3 448 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 96C35.8 96 0 131.8 0 176L0 432c0 44.2 35.8 80 80 80l256 0c44.2 0 80-35.8 80-80l0-80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 80c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l80 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 96z"]},pv={prefix:"fas",iconName:"pen-nib",icon:[512,512,[10001],"f5ad","M368.5 18.3l-50.1 50.1 125.3 125.3 50.1-50.1c21.9-21.9 21.9-57.3 0-79.2L447.7 18.3c-21.9-21.9-57.3-21.9-79.2 0zM279.3 97.2l-.5 .1-144.1 43.2c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-2.9 8.7-1.9 18.2 2.5 26L161.7 316.4c-1.1-4-1.6-8.1-1.6-12.4 0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48c-4.3 0-8.5-.6-12.4-1.6L40.3 505.7c7.8 4.4 17.2 5.4 26 2.5l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1 .1-.5-135.5-135.5z"]},hv={prefix:"fas",iconName:"microchip",icon:[512,512,[],"f2db","M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c-35.3 0-64 28.7-64 64l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0c0 35.3 28.7 64 64 64l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40c35.3 0 64-28.7 64-64l40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0c0-35.3-28.7-64-64-64l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40zM160 128l192 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-192c0-17.7 14.3-32 32-32zm16 48l0 160 160 0 0-160-160 0z"]},gv={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"]},xv={prefix:"fas",iconName:"list-check",icon:[512,512,["tasks"],"f0ae","M133.8 36.3c10.9 7.6 13.5 22.6 5.9 33.4l-56 80c-4.1 5.8-10.5 9.5-17.6 10.1S52 158 47 153L7 113C-2.3 103.6-2.3 88.4 7 79S31.6 69.7 41 79l19.8 19.8 39.6-56.6c7.6-10.9 22.6-13.5 33.4-5.9zm0 160c10.9 7.6 13.5 22.6 5.9 33.4l-56 80c-4.1 5.8-10.5 9.5-17.6 10.1S52 318 47 313L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l19.8 19.8 39.6-56.6c7.6-10.9 22.6-13.5 33.4-5.9zM224 96c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32zM64 376a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"]},wa={prefix:"fas",iconName:"book-open",icon:[512,512,[128214,128366],"f518","M256 141.3l0 309.3 .5-.2C311.1 427.7 369.7 416 428.8 416l19.2 0 0-320-19.2 0c-42.2 0-84.1 8.4-123.1 24.6-16.8 7-33.4 13.9-49.7 20.7zM230.9 61.5L256 72 281.1 61.5C327.9 42 378.1 32 428.8 32L464 32c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-35.2 0c-50.7 0-100.9 10-147.7 29.5l-12.8 5.3c-7.9 3.3-16.7 3.3-24.6 0l-12.8-5.3C184.1 490 133.9 480 83.2 480L48 480c-26.5 0-48-21.5-48-48L0 80C0 53.5 21.5 32 48 32l35.2 0c50.7 0 100.9 10 147.7 29.5z"]},vv={prefix:"fas",iconName:"list-ul",icon:[512,512,["list-dots"],"f0ca","M48 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM48 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM96 256a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]},xp={prefix:"fas",iconName:"layer-group",icon:[512,512,[],"f5fd","M232.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 149.8C5.4 145.8 0 137.3 0 128s5.4-17.9 13.9-21.8L232.5 5.2zM48.1 218.4l164.3 75.9c27.7 12.8 59.6 12.8 87.3 0l164.3-75.9 34.1 15.8c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 277.8C5.4 273.8 0 265.3 0 256s5.4-17.9 13.9-21.8l34.1-15.8zM13.9 362.2l34.1-15.8 164.3 75.9c27.7 12.8 59.6 12.8 87.3 0l164.3-75.9 34.1 15.8c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 405.8C5.4 401.8 0 393.3 0 384s5.4-17.9 13.9-21.8z"]},yr={prefix:"fas",iconName:"cart-shopping",icon:[640,512,[128722,"shopping-cart"],"f07a","M24-16C10.7-16 0-5.3 0 8S10.7 32 24 32l45.3 0c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1L456 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-255.9 0c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3 303.6 0c30.8 0 57.2-21.9 62.9-52.2L568.9 69.9C572.6 50.2 557.5 32 537.4 32l-412.7 0-.4-2c-4.8-26.6-28-46-55.1-46L24-16zM208 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm224 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]};/*!
 * Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */var yv={prefix:"fab",iconName:"facebook-f",icon:[320,512,[],"f39e","M80 299.3l0 212.7 116 0 0-212.7 86.5 0 18-97.8-104.5 0 0-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2l0-88.7C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4l0 42.1-66 0 0 97.8 66 0z"]},bv={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z"]},wv={prefix:"fab",iconName:"tiktok",icon:[448,512,[],"e07b","M448.5 209.9c-44 .1-87-13.6-122.8-39.2l0 178.7c0 33.1-10.1 65.4-29 92.6s-45.6 48-76.6 59.6-64.8 13.5-96.9 5.3-60.9-25.9-82.7-50.8-35.3-56-39-88.9 2.9-66.1 18.6-95.2 40-52.7 69.6-67.7 62.9-20.5 95.7-16l0 89.9c-15-4.7-31.1-4.6-46 .4s-27.9 14.6-37 27.3-14 28.1-13.9 43.9 5.2 31 14.5 43.7 22.4 22.1 37.4 26.9 31.1 4.8 46-.1 28-14.4 37.2-27.1 14.2-28.1 14.2-43.8l0-349.4 88 0c-.1 7.4 .6 14.9 1.9 22.2 3.1 16.3 9.4 31.9 18.7 45.7s21.3 25.6 35.2 34.6c19.9 13.1 43.2 20.1 67 20.1l0 87.4z"]},jv={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},vp={prefix:"fab",iconName:"whatsapp",icon:[448,512,[],"f232","M380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480 117.7 449.1c32.4 17.7 68.9 27 106.1 27l.1 0c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zM325.1 300.5c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z"]},kv={prefix:"fab",iconName:"linkedin-in",icon:[448,512,[],"f0e1","M100.3 448l-92.9 0 0-299.1 92.9 0 0 299.1zM53.8 108.1C24.1 108.1 0 83.5 0 53.8 0 39.5 5.7 25.9 15.8 15.8s23.8-15.8 38-15.8 27.9 5.7 38 15.8 15.8 23.8 15.8 38c0 29.7-24.1 54.3-53.8 54.3zM447.9 448l-92.7 0 0-145.6c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7l0 148.1-92.8 0 0-299.1 89.1 0 0 40.8 1.3 0c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3l0 164.3-.1 0z"]},Sv={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103l0-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"]};function Nv({goTo:a}){const l=()=>{window.open("https://wa.me/250799579034?text=Hello%20Stekora%20Tech","_blank")};return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
        :root {
          --blue: #3b82f6;
          --richblue: #003366;
          --richgreen: #006400;
        }

        .floating-actions {
          position: fixed;
          right: 1.25rem;
          bottom: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.75rem;
          z-index: 60;
        }

        .fab-button {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.6rem 1.1rem;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          font-size: 0.8rem;
          font-weight: 600;
          color: #fff;
          background: var(--blue);
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.16);
          white-space: nowrap;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .fab-button:hover {
          background: var(--richblue);
          color: #ffffff;
          transform: translateY(-2px);
        }

        .fab-button span.icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.16);
          font-size: 0.9rem;
        }

        .fab-button.secondary {
          background: var(--blue);
        }

        .fab-button.secondary:hover {
          background: var(--richblue);
          color: #ffffff;
          transform: translateY(-2px);
        }

        .fab-button.whatsapp {
          width: 48px;
          height: 48px;
          padding: 0;
          border-radius: 50%;
          justify-content: center;
          background: #25d366;
        }

        .fab-button.whatsapp:hover {
          background: var(--richgreen);
          color: #ffffff;
          transform: translateY(-2px);
        }

        .fab-button.whatsapp span.icon {
          width: auto;
          height: auto;
          background: none;
          font-size: 1.2rem;
        }

        @media (max-width: 480px) {
          .floating-actions {
            right: 0.75rem;
            bottom: 0.9rem;
            gap: 0.55rem;
          }

          .fab-button {
            padding: 0.5rem 0.9rem;
            font-size: 0.75rem;
          }

          .fab-button.whatsapp {
            width: 46px;
            height: 46px;
            padding: 0;
          }
        }
      `}),n.jsxs("div",{className:"floating-actions",children:[n.jsxs("button",{className:"fab-button",onClick:()=>a("/apply-services"),children:[n.jsx("span",{className:"icon",children:n.jsx(U,{icon:ov})}),n.jsx("span",{children:"Apply for Services"})]}),n.jsxs("button",{className:"fab-button secondary",onClick:()=>a("/study"),children:[n.jsx("span",{className:"icon",children:n.jsx(U,{icon:Yx})}),n.jsx("span",{children:"Apply for Study"})]}),n.jsx("button",{className:"fab-button whatsapp",onClick:l,"aria-label":"WhatsApp",children:n.jsx("span",{className:"icon",children:n.jsx(U,{icon:vp})})})]})]})}const Cv="/assets/logoo-CbfLrW-F.png";function Ev(){return n.jsxs(n.Fragment,{children:[n.jsxs("footer",{className:"footer",children:[n.jsxs("div",{className:"footer-container",children:[n.jsxs("div",{className:"footer-col",children:[n.jsxs("div",{className:"logo-area",children:[n.jsx("img",{src:Cv,alt:"Stekora Tech logo",className:"footer-logo"}),n.jsxs("div",{children:[n.jsx("div",{className:"footer-brand",children:"Stekora Tech"}),n.jsx("div",{className:"tag",children:"where ideas become digital solutions"})]})]}),n.jsx("p",{className:"desc",children:"Stekora Tech provides modern IT services from custom web applications to automation and embedded systems helping businesses turn technical ideas into reliable digital products."}),n.jsxs("div",{className:"social",children:[n.jsx("span",{children:n.jsx(U,{icon:yv})}),n.jsx("span",{children:n.jsx(U,{icon:Sv})}),n.jsx("a",{href:"https://instagram.com/stekoratech",target:"_blank",rel:"noreferrer",children:n.jsx(U,{icon:jv})}),n.jsx("a",{href:"https://www.tiktok.com/stekoratech",target:"_blank",rel:"noreferrer",children:n.jsx(U,{icon:wv})}),n.jsx("span",{children:n.jsx(U,{icon:kv})})]})]}),n.jsxs("div",{className:"footer-col",children:[n.jsx("h3",{children:"Contact Us"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx(U,{icon:hp})," Phone: ",n.jsx("span",{children:"+250 799579034"})]}),n.jsxs("li",{children:[n.jsx(U,{icon:Nl})," Email: ",n.jsx("span",{children:"info@stekoratech.com"})]}),n.jsxs("li",{children:[n.jsx(U,{icon:gv})," Location: ",n.jsx("span",{children:"Musanze, Rwanda"})]}),n.jsxs("li",{className:"social-text",children:["Social: ",n.jsx("span",{children:"LinkedIn, GitHub, Instagram"})]})]})]}),n.jsxs("div",{className:"footer-col",children:[n.jsx("h3",{children:"Support"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Help & FAQs"}),n.jsx("li",{children:"Project Support"}),n.jsx("li",{children:"Service Level & Maintenance"}),n.jsx("li",{children:"Contact Support: info@stekoratech.com"})]})]})]}),n.jsxs("div",{className:"copyright",children:["© ",new Date().getFullYear()," Stekora Tech. All rights reserved."]})]}),n.jsx("style",{children:`
      :root{
      --richblue:#003366;
      --palegray:#f5f5f5;
      --lightgray:#9ca3af;
      --blue:#3b82f6
      }
        .footer {
          background: #1f2d3a;
          color: #d1d5db;
          margin-top: 40px;
          font-family: Arial, Helvetica, sans-serif;
        }

        .footer-container {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          padding: 50px 20px;
        }

        .footer-col h3 {
          color: white;
          margin: 0 0 15px;
        }

        .logo-area {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 15px;
        }

        .footer-logo {
          height: 80px;
          width: 80px;
          border-radius: 40px;
          object-fit: contain;
        }

        .footer-brand {
          color: white;
          font-weight: bold;
        }

        .tag {
          font-size: 12px;
          color: #9ca3af;
        }

        .desc {
          font-size: 14px;
          margin: 15px 0;
          line-height: 1.6;
        }

        .social {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .social span,
        .social a {
          background: white;
          color: var(--blue);
          padding: 10px;
          min-width: 46px;
          min-height: 46px;
          border-radius: 6px;
          cursor: pointer;
          text-align: center;
          text-decoration: none;
          font-size: 25px;
          font-weight: 700;
        }

        .footer ul li svg {
          margin-right: 10px;
          color: var(--blue);
        }

        .footer ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer ul li {
          margin-bottom: 10px;
          font-size: 14px;
          line-height: 1.5;
        }

        .footer ul li span {
          color: white;
        }

        .copyright {
          text-align: center;
          border-top: 1px solid #2c3e50;
          padding: 15px;
          font-size: 12px;
          color: #9ca3af;
          margin-left: 20px;
        }

        @media (max-width: 900px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
        }
      `})]})}const zv="/assets/logo-Cwf0LtIx.png";function Pv(a){try{const l=a.split(".")[1];if(!l)return null;const s=l.replace(/-/g,"+").replace(/_/g,"/"),d=decodeURIComponent(window.atob(s).split("").map(u=>`%${u.charCodeAt(0).toString(16).padStart(2,"0")}`).join(""));return JSON.parse(d)}catch(l){return console.error("Failed to decode authentication token",l),null}}function If(a){if(!a)return!1;const l=Pv(a);if(!l||!l.exp)return!1;const s=Math.floor(Date.now()/1e3);return l.exp>s}function _v(){localStorage.removeItem("studentToken"),localStorage.removeItem("studentName"),localStorage.removeItem("studentCourseName"),localStorage.removeItem("studentExpiresAt"),localStorage.removeItem("token"),localStorage.removeItem("adminName"),localStorage.removeItem("adminExpiresAt")}function Tf(){const a=localStorage.getItem("studentToken"),l=localStorage.getItem("token"),s=If(a),d=If(l);return a&&!s&&(localStorage.removeItem("studentToken"),localStorage.removeItem("studentName"),localStorage.removeItem("studentCourseName"),localStorage.removeItem("studentExpiresAt")),l&&!d&&(localStorage.removeItem("token"),localStorage.removeItem("adminName"),localStorage.removeItem("adminExpiresAt")),s||d}function Av({route:a,goTo:l,menuOpen:s,setMenuOpen:d,cartCount:u=0}){const[p,h]=N.useState(()=>Tf()),b=()=>d(!1),f=g=>{l(g),b()},x=()=>{_v(),h(!1),window.dispatchEvent(new Event("stekora-auth-changed")),f("/")};N.useEffect(()=>{const g=()=>{h(Tf())};g(),window.addEventListener("storage",g),window.addEventListener("focus",g),window.addEventListener("stekora-auth-changed",g);const y=window.setInterval(g,6e4);return()=>{window.removeEventListener("storage",g),window.removeEventListener("focus",g),window.removeEventListener("stekora-auth-changed",g),window.clearInterval(y)}},[a]);const v=[["/","Home"],["/services","Services"],["/study","Courses"],["/jobs","Jobs"],["/about","About"],["/contact","Request a Service"]];return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
        :root { --richblue:#003366; --palegray:#f5f5f5; }
        .header{width:100%;background-color:var(--palegray);border-bottom:1px solid var(--richblue);position:sticky;top:0;z-index:50;font-family:'Inter',sans-serif}
        .header-container{max-width:72rem;margin:0 auto;display:flex;justify-content:space-between;align-items:center;padding:.75rem 1rem;position:relative}
        .logo-button{display:flex;align-items:center;gap:.75rem;background:none;border:none;cursor:pointer;padding:0}
        .logo-button img{height:3.25rem;width:3.25rem;object-fit:contain;border-radius:.5rem;border:1px solid var(--richblue);background:var(--palegray)}
        .brand-name{font-weight:1000;color:var(--richblue);text-align:left; font-size:1.55rem;}.brand-tagline{font-size:10px;color:var(--richblue)}
        .header-links{display:flex;align-items:center;gap:1rem}
        .header-links button{font-size:.875rem;font-weight:500;color:var(--richblue);padding:.25rem .5rem;background:transparent;border:none;cursor:pointer}
        .header-links button.active{border-bottom:2px solid var(--richblue)}
        .header-links .shop-link{font-weight:600;border:1px solid var(--richblue);padding:.35rem .75rem;border-radius:999px}
        .header-links .shop-link.active{border-bottom:1px solid var(--richblue);background:rgba(0,51,102,.06)}
        .cart-nav-btn{position:relative;display:inline-flex!important;align-items:center;gap:.45rem}
        .cart-count{min-width:20px;height:20px;border-radius:999px;background:#ef4444;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:900;padding:0 .3rem}
        .mobile-menu-button{display:none;background:none;border:none;font-size:1.6rem;cursor:pointer;color:var(--richblue)}
        @media(max-width:768px){.mobile-menu-button{display:block}.header-links{display:${s?"flex":"none"};flex-direction:column;align-items:flex-start;position:absolute;top:100%;right:1rem;background:var(--palegray);border:1px solid var(--richblue);border-radius:.75rem;padding:.75rem;width:220px;gap:.75rem}.header-links button{width:100%;text-align:left}}
      `}),n.jsx("header",{className:"header",children:n.jsxs("div",{className:"header-container",children:[n.jsxs("button",{className:"logo-button",onClick:()=>f("/"),children:[n.jsx("img",{src:zv,alt:"Stekora Tech logo"}),n.jsxs("div",{children:[n.jsx("div",{className:"brand-name",children:"Stekora Tech"}),n.jsx("div",{className:"brand-tagline",children:"where ideas become digital solutions"})]})]}),n.jsx("button",{className:"mobile-menu-button",onClick:()=>d(!s),children:s?"✕":"☰"}),n.jsxs("nav",{className:"header-links",children:[v.map(([g,y])=>n.jsx("button",{className:a===g?"active":"",onClick:()=>f(g),children:y},g)),n.jsx("button",{className:`shop-link ${a==="/shop"?"active":""}`,onClick:()=>f("/shop"),children:"Shop"}),n.jsxs("button",{className:`shop-link cart-nav-btn ${a==="/cart"?"active":""}`,onClick:()=>f("/cart"),children:[n.jsx(U,{icon:yr})," Cart",u>0&&n.jsx("span",{className:"cart-count",children:u})]}),p?n.jsx("button",{className:"shop-link",onClick:x,children:"Logout"}):n.jsx("button",{className:`shop-link ${a==="/login"?"active":""}`,onClick:()=>f("/login"),children:"Login"})]})]})})]})}function Lv({route:a,goTo:l,menuOpen:s,setMenuOpen:d,cartCount:u,children:p}){return n.jsxs(n.Fragment,{children:[n.jsx(Av,{route:a,goTo:l,menuOpen:s,setMenuOpen:d,cartCount:u}),p,n.jsx(Ev,{goTo:l}),n.jsx(Nv,{goTo:l})]})}const Mv="/assets/code-yjPexsHE.jpeg",Iv="/assets/crestline-CJx3iG0J.png",Tv=[{name:"Steven",role:"CEO & Founder",bio:"Leads overall vision, projects and partnerships.",icon:Ui},{name:"Tabitha",role:"Chief Technology Officer",bio:"Oversees technology choices and engineering quality.",icon:Ui},{name:"Stekora Team",role:"Developers & Mentors",bio:"Collaborate on client work and student projects.",icon:Ui}],Fv=[{name:"Code Rwanda Tech",logo:Mv,website:"https://coderwanda.net.rw/"},{name:"Crestline Journeys",logo:Iv,website:"https://www.crestjourneys.com/"}];function Ov(){return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
        :root {
          --richblue: #003366;
          --palegray: #f5f5f5;
          --lightgray: #9ca3af;
        }

        .about-page {
          background: var(--palegray);
          min-height: 100vh;
          padding: 3rem 1rem;
        }

        .about-container {
          max-width: 72rem;
          margin: 0 auto;
        }

        .about-top {
          display: grid;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .about-box {
          background: #ffffff;
          border-radius: 0.75rem;
          padding: 1.5rem 1.7rem;
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.05);
        }

        .about-box h3 {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--richblue);
          margin: 0 0 0.6rem;
        }

        .about-box p {
          font-size: 0.85rem;
          color: #4b5563;
          line-height: 1.6;
          margin: 0;
        }

        .team-section {
          background: #fbfbfb;
          border-radius: 1.5rem;
          padding: 2.5rem 2rem;
          text-align: center;
          margin-bottom: 3rem;
        }

        .team-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--richblue);
          margin: 0 0 0.5rem;
        }

        .team-sub {
          font-size: 0.9rem;
          color: #4b5563;
          max-width: 40rem;
          margin: 0 auto 2rem;
          line-height: 1.7;
        }

        .team-grid {
          display: grid;
          gap: 1.5rem;
        }

        .team-card {
          background: #ffffff;
          border-radius: 1.25rem;
          padding: 1.8rem 1.4rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.8rem;
        }

        .team-avatar {
          width: 86px;
          height: 86px;
          border-radius: 50%;
          border: 3px solid #22c55e;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8fafc;
          overflow: hidden;
        }

        .team-avatar-icon {
          font-size: 2rem;
          color: var(--richblue);
        }

        .team-name {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--richblue);
        }

        .team-role {
          font-size: 0.8rem;
          color: #6b7280;
        }

        .team-bio {
          font-size: 0.8rem;
          color: #9ca3af;
          line-height: 1.5;
        }

        .partners-strip {
          margin-top: 1rem;
          padding: 2rem 1rem 0;
          text-align: center;
        }

        .partners-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--richblue);
          margin-bottom: 1.5rem;
        }

        .partners-logos {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
          align-items: center;
        }

        .partner-card {
          display: inline-flex;
          align-items: center;
          gap: 0.7rem;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 999px;
          padding: 0.75rem 1.2rem;
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.05);
          text-decoration: none;
          cursor: pointer;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .partner-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
          border-color: var(--richblue);
        }

        .partner-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #e7f5f3;
          color: #0f766e;
          overflow: hidden;
          flex-shrink: 0;
        }

        .partner-icon img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .partner-fontawesome-icon {
          font-size: 1rem;
          color: #0f766e;
        }

        .partner-name {
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 0.85rem;
          font-weight: 700;
          color: #4b5563;
        }

        .external-icon {
          font-size: 0.8rem;
          color: #9ca3af;
          transition:
            transform 0.25s ease,
            color 0.25s ease;
        }

        .partner-card:hover .partner-name,
        .partner-card:hover .external-icon {
          color: var(--richblue);
        }

        .partner-card:hover .external-icon {
          transform: translate(2px, -2px);
        }

        @media (min-width: 768px) {
          .about-top {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .team-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 480px) {
          .team-section {
            padding: 2rem 1.2rem;
          }

          .partner-card {
            width: 100%;
            justify-content: center;
          }
        }
      `}),n.jsx("div",{className:"about-page",children:n.jsxs("div",{className:"about-container",children:[n.jsxs("div",{className:"about-top",children:[n.jsxs("div",{className:"about-box",children:[n.jsx("h3",{children:"Our Vision"}),n.jsx("p",{children:"To be a reliable technology partner to our clients, delivering modern digital solutions for both local and international needs."})]}),n.jsxs("div",{className:"about-box",children:[n.jsx("h3",{children:"Our Mission"}),n.jsx("p",{children:"To solve business challenges with innovative software, embedded systems and research while empowering young talent through practical innovation and mentorship."})]}),n.jsxs("div",{className:"about-box",children:[n.jsx("h3",{children:"Strategic Driving Lines"}),n.jsx("p",{children:"Continuous quality improvement, strong customer support and partnerships that help us deliver reliable products and services to every client we serve."})]})]}),n.jsxs("section",{className:"team-section",children:[n.jsx("h2",{className:"team-title",children:"Our Awesome Team Of Engineers & Staff"}),n.jsx("p",{className:"team-sub",children:"Stekora Tech works with skilled professionals and partners to deliver software and electronics solutions in Rwanda and beyond."}),n.jsx("div",{className:"team-grid",children:Tv.map(a=>n.jsxs("div",{className:"team-card",children:[n.jsx("div",{className:"team-avatar",children:n.jsx(U,{icon:a.icon,className:"team-avatar-icon"})}),n.jsx("div",{className:"team-name",children:a.name}),n.jsx("div",{className:"team-role",children:a.role}),n.jsx("div",{className:"team-bio",children:a.bio})]},a.name))}),n.jsxs("div",{className:"partners-strip",children:[n.jsx("div",{className:"partners-label",children:"Our Partners"}),n.jsx("div",{className:"partners-logos",children:Fv.map(a=>n.jsxs("a",{className:"partner-card",href:a.website,target:"_blank",rel:"noopener noreferrer","aria-label":`Visit ${a.name} website`,children:[n.jsx("div",{className:"partner-icon",children:a.logo?n.jsx("img",{src:a.logo,alt:a.name}):n.jsx(U,{icon:a.icon,className:"partner-fontawesome-icon"})}),n.jsx("span",{className:"partner-name",children:a.name}),n.jsx(U,{icon:mv,className:"external-icon"})]},a.name))})]})]})]})})]})}function ct(a){if(!a)return"";if(a.startsWith("http://")||a.startsWith("https://"))return a;const l="https://stekoratech.com/api",s=a.replace(/^\/+/,"");return`${l}/${s}`}const Ff=a=>`${Number(a||0).toLocaleString("en-RW")} RWF`;function Rv({cart:a,updateCartQuantity:l,removeFromCart:s,clearCart:d,goTo:u}){const p=a.reduce((h,b)=>h+Number(b.price||0)*Number(b.quantity||1),0);return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
        .cart-page{min-height:100vh;background:#f5f5f5;padding:2.5rem 1rem;color:#003366}
        .cart-container{max-width:72rem;margin:0 auto}
        .cart-head{display:flex;justify-content:space-between;align-items:center;gap:1rem;flex-wrap:wrap;margin-bottom:1.5rem}
        .cart-head h1{margin:0;font-size:2rem}
        .cart-clear{border:0;border-radius:8px;background:#fee2e2;color:#991b1b;padding:.7rem 1rem;font-weight:800;cursor:pointer}
        .cart-grid{display:grid;gap:1rem}
        .cart-item{display:grid;grid-template-columns:90px 1fr auto;gap:1rem;align-items:center;background:#fff;border:1px solid #e2e8f0;border-radius:14px;padding:1rem}
        .cart-item img{width:90px;height:75px;object-fit:contain;border-radius:10px;background:#f1f5f9}
        .cart-item h2{font-size:1rem;margin:0 0 .35rem}
        .cart-price{font-weight:900}
        .cart-controls{display:flex;align-items:center;gap:.45rem;flex-wrap:wrap;justify-content:flex-end}
        .cart-controls button{border:0;border-radius:8px;width:36px;height:36px;cursor:pointer;background:#e7f5f3;color:#0f766e}
        .cart-controls .remove{background:#fee2e2;color:#991b1b}
        .cart-summary{margin-top:1.5rem;background:#fff;border-radius:14px;padding:1.25rem;border:1px solid #e2e8f0;display:flex;justify-content:space-between;align-items:center;gap:1rem;flex-wrap:wrap}
        .cart-total{font-size:1.35rem;font-weight:900}
        .cart-checkout{border:0;background:#003366;color:white;border-radius:8px;padding:.8rem 1.2rem;font-weight:800;cursor:pointer}
        .cart-empty{background:#fff;border:1px dashed #94a3b8;border-radius:14px;padding:2rem;text-align:center}
        @media(max-width:620px){.cart-item{grid-template-columns:70px 1fr}.cart-item img{width:70px;height:65px}.cart-controls{grid-column:1/-1;justify-content:flex-start}}
      `}),n.jsx("div",{className:"cart-page",children:n.jsxs("div",{className:"cart-container",children:[n.jsxs("div",{className:"cart-head",children:[n.jsx("h1",{children:"Your Cart"}),a.length>0&&n.jsx("button",{className:"cart-clear",onClick:d,children:"Clear cart"})]}),a.length===0?n.jsxs("div",{className:"cart-empty",children:[n.jsx("h2",{children:"Your cart is empty"}),n.jsx("button",{className:"cart-checkout",onClick:()=>u("/shop"),children:"Continue shopping"})]}):n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"cart-grid",children:a.map(h=>n.jsxs("article",{className:"cart-item",children:[h.image_url?n.jsx("img",{src:ct(h.image_url),alt:h.title}):n.jsx("div",{}),n.jsxs("div",{children:[n.jsx("h2",{children:h.title}),n.jsx("div",{className:"cart-price",children:Ff(h.price)})]}),n.jsxs("div",{className:"cart-controls",children:[n.jsx("button",{type:"button","aria-label":"Reduce quantity",onClick:()=>l(h.id,h.quantity-1),children:n.jsx(U,{icon:Vx})}),n.jsx("strong",{children:h.quantity}),n.jsx("button",{type:"button","aria-label":"Increase quantity",onClick:()=>l(h.id,h.quantity+1),children:n.jsx(U,{icon:Rt})}),n.jsx("button",{type:"button",className:"remove","aria-label":"Remove product",onClick:()=>s(h.id),children:n.jsx(U,{icon:$n})})]})]},h.id))}),n.jsxs("div",{className:"cart-summary",children:[n.jsxs("div",{className:"cart-total",children:["Total: ",Ff(p)]}),n.jsx("button",{className:"cart-checkout",type:"button",onClick:()=>u("/checkout"),children:"Request order"})]})]})]})})]})}class ja{constructor(l=0,s="Network Error"){this.status=l,this.text=s}}const Dv=()=>{if(!(typeof localStorage>"u"))return{get:a=>Promise.resolve(localStorage.getItem(a)),set:(a,l)=>Promise.resolve(localStorage.setItem(a,l)),remove:a=>Promise.resolve(localStorage.removeItem(a))}},Ge={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:Dv()},Ql=a=>a?typeof a=="string"?{publicKey:a}:a.toString()==="[object Object]"?a:{}:{},$v=(a,l="https://api.emailjs.com")=>{if(!a)return;const s=Ql(a);Ge.publicKey=s.publicKey,Ge.blockHeadless=s.blockHeadless,Ge.storageProvider=s.storageProvider,Ge.blockList=s.blockList,Ge.limitRate=s.limitRate,Ge.origin=s.origin||l},yp=async(a,l,s={})=>{const d=await fetch(Ge.origin+a,{method:"POST",headers:s,body:l}),u=await d.text(),p=new ja(d.status,u);if(d.ok)return p;throw p},bp=(a,l,s)=>{if(!a||typeof a!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!l||typeof l!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s||typeof s!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},Uv=a=>{if(a&&a.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},wp=a=>a.webdriver||!a.languages||a.languages.length===0,jp=()=>new ja(451,"Unavailable For Headless Browser"),Wv=(a,l)=>{if(!Array.isArray(a))throw"The BlockList list has to be an array";if(typeof l!="string")throw"The BlockList watchVariable has to be a string"},Hv=a=>{var l;return!((l=a.list)!=null&&l.length)||!a.watchVariable},Bv=(a,l)=>a instanceof FormData?a.get(l):a[l],kp=(a,l)=>{if(Hv(a))return!1;Wv(a.list,a.watchVariable);const s=Bv(l,a.watchVariable);return typeof s!="string"?!1:a.list.includes(s)},Sp=()=>new ja(403,"Forbidden"),Vv=(a,l)=>{if(typeof a!="number"||a<0)throw"The LimitRate throttle has to be a positive number";if(l&&typeof l!="string")throw"The LimitRate ID has to be a non-empty string"},Qv=async(a,l,s)=>{const d=Number(await s.get(a)||0);return l-Date.now()+d},Np=async(a,l,s)=>{if(!l.throttle||!s)return!1;Vv(l.throttle,l.id);const d=l.id||a;return await Qv(d,l.throttle,s)>0?!0:(await s.set(d,Date.now().toString()),!1)},Cp=()=>new ja(429,"Too Many Requests"),qv=async(a,l,s,d)=>{const u=Ql(d),p=u.publicKey||Ge.publicKey,h=u.blockHeadless||Ge.blockHeadless,b=u.storageProvider||Ge.storageProvider,f={...Ge.blockList,...u.blockList},x={...Ge.limitRate,...u.limitRate};return h&&wp(navigator)?Promise.reject(jp()):(bp(p,a,l),Uv(s),s&&kp(f,s)?Promise.reject(Sp()):await Np(location.pathname,x,b)?Promise.reject(Cp()):yp("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:p,service_id:a,template_id:l,template_params:s}),{"Content-type":"application/json"}))},Yv=a=>{if(!a||a.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},Gv=a=>typeof a=="string"?document.querySelector(a):a,Xv=async(a,l,s,d)=>{const u=Ql(d),p=u.publicKey||Ge.publicKey,h=u.blockHeadless||Ge.blockHeadless,b=Ge.storageProvider||u.storageProvider,f={...Ge.blockList,...u.blockList},x={...Ge.limitRate,...u.limitRate};if(h&&wp(navigator))return Promise.reject(jp());const v=Gv(s);bp(p,a,l),Yv(v);const g=new FormData(v);return kp(f,g)?Promise.reject(Sp()):await Np(location.pathname,x,b)?Promise.reject(Cp()):(g.append("lib_version","4.4.1"),g.append("service_id",a),g.append("template_id",l),g.append("user_id",p),yp("/api/v1.0/email/send-form",g))},Of={init:$v,send:qv,sendForm:Xv,EmailJSResponseStatus:ja},Rf="service_frh0uy9",Kv="template_79mv8j5",Df="template_p22fgwk",$f="tpobsHJa0Mf-RZHrl",Jv=a=>new Promise(l=>window.setTimeout(l,a));function Zv(){const[a,l]=N.useState({name:"",email:"",phone:"",service:"",message:""}),[s,d]=N.useState(!1),[u,p]=N.useState({type:"",message:""}),h=f=>{l({...a,[f.target.name]:f.target.value})},b=async f=>{f.preventDefault(),p({type:"",message:""}),d(!0);try{const x=`ST-${Date.now().toString(36).toUpperCase()}`,v=new Date().toLocaleString("en-RW",{dateStyle:"medium",timeStyle:"short"}),g={name:a.name.trim(),email:a.email.trim(),to_email:a.email.trim(),customer_email:a.email.trim(),customer_name:a.name.trim(),phone:a.phone.trim()||"Not provided",service:a.service,message:a.message.trim(),reply_to:a.email.trim(),request_id:x,submitted_date:v};await Of.send(Rf,Kv,g,{publicKey:$f});let y=null;try{await Jv(2e3),await Of.send(Rf,Df,g,{publicKey:$f})}catch(C){y=C,console.error("EmailJS customer confirmation failed",C)}if(y){const C=(y==null?void 0:y.text)||(y==null?void 0:y.message)||"the confirmation template was rejected";p({type:"warning",message:`Your request reached Stekora Tech, but customer template ${Df} failed: ${C}`})}else p({type:"success",message:"Thank you! Your request was sent and a confirmation email is on its way."});l({name:"",email:"",phone:"",service:"",message:""})}catch(x){console.error("EmailJS contact request failed",x);const v=(x==null?void 0:x.text)||(x==null?void 0:x.message)||"EmailJS rejected the request. Check the service and template settings.";p({type:"error",message:`We could not send your request: ${v}`})}finally{d(!1)}};return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
        :root {
          --richblue: #003366;
          --palegray: #f5f5f5;
          --lightgray: #9ca3af;
          --yellow: #facc15;
        }

        .contact-page {
          background: var(--palegray);
          min-height: 100vh;
          padding: 3rem 1rem;
        }

        .contact-container {
          max-width: 60rem;
          margin: 0 auto;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .contact-header h1 {
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--richblue);
          margin: 0;
        }

        .contact-header p {
          color: #555;
          max-width: 40rem;
          margin: 0.75rem auto 0;
          font-size: 0.95rem;
          line-height: 1.7;
        }

        .contact-card {
          background: #fff;
          border-radius: 1.2rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          padding: 2.5rem;
        }

        .form-grid {
          display: grid;
          gap: 1.25rem;
          margin-bottom: 1.25rem;
        }

        @media (min-width: 640px) {
          .form-grid.two {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .form-group {
          margin-bottom: 1.25rem;
        }

        .form-group label {
          display: block;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 0.3rem;
          color: var(--richblue);
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 0.65rem 0.75rem;
          border-radius: 0.6rem;
          border: 1px solid var(--lightgray);
          font-size: 0.85rem;
          outline: none;
          background: #fff;
        }

        .form-group textarea {
          resize: none;
          min-height: 120px;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: var(--richblue);
          box-shadow: 0 0 0 3px rgba(0, 51, 102, 0.12);
        }

        .submit-btn {
          margin-top: 0.5rem;
          background: var(--blue);
          color: #fff;
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 0.7rem;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .submit-btn:hover {
          background: #00264d;
        }

        .submit-btn:disabled {
          cursor: wait;
          opacity: 0.68;
        }

        .contact-status {
          margin: 1rem 0 0;
          padding: 0.8rem 1rem;
          border-radius: 0.6rem;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .contact-status.success {
          border: 1px solid #86efac;
          background: #dcfce7;
          color: #166534;
        }

        .contact-status.error {
          border: 1px solid #fca5a5;
          background: #fee2e2;
          color: #991b1b;
        }

        .contact-status.warning {
        
          background: #fef9c3;
          color: #854d0e;
        }

        .badge {
          display: inline-block;
          background: var(--blue);
          color:white;
          font-size: 0.7rem;
          padding: 0.25rem 0.6rem;
          border-radius: 999px;
          font-weight: 600;
          margin-bottom: 0.6rem;
        }
      `}),n.jsx("div",{className:"contact-page",children:n.jsxs("div",{className:"contact-container",children:[n.jsxs("div",{className:"contact-header",children:[n.jsx("span",{className:"badge",children:"Trusted Company"}),n.jsx("h1",{children:"Request a Service Today"}),n.jsx("p",{children:"Need a website, mobile app, IoT system or custom IT solution? Fill in the form below and our team will get back to you."})]}),n.jsx("div",{className:"contact-card",children:n.jsxs("form",{onSubmit:b,children:[n.jsxs("div",{className:"form-grid two",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Full Name"}),n.jsx("input",{type:"text",name:"name",required:!0,value:a.name,onChange:h,placeholder:"enter your full name"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Email Address"}),n.jsx("input",{type:"email",name:"email",required:!0,value:a.email,onChange:h,placeholder:"enter your email address"})]})]}),n.jsxs("div",{className:"form-grid two",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Phone"}),n.jsx("input",{type:"text",name:"phone",value:a.phone,onChange:h,placeholder:"enter your phone number"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Service Needed"}),n.jsxs("select",{name:"service",required:!0,value:a.service,onChange:h,children:[n.jsx("option",{value:"",children:"Select a service"}),n.jsx("option",{children:"Website Development"}),n.jsx("option",{children:"Mobile App Development"}),n.jsx("option",{children:"IoT / Embedded Systems"}),n.jsx("option",{children:"Automation & Integration"}),n.jsx("option",{children:"Networking / CCTV"}),n.jsx("option",{children:"Graphic Design"}),n.jsx("option",{children:"Other services"})]})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Write a message"}),n.jsx("textarea",{name:"message",placeholder:"write us a message...",required:!0,value:a.message,onChange:h})]}),n.jsxs("button",{className:"submit-btn",type:"submit",disabled:s,children:[n.jsx(U,{icon:Hl}),s?"Sending...":"Submit Request"]}),u.message&&n.jsx("p",{className:`contact-status ${u.type}`,role:"status",children:u.message})]})})]})})]})}const e3="stekora-auth-change";function t3(a){var l;ql(!1),localStorage.setItem("token",a.token),localStorage.setItem("adminName",((l=a.user)==null?void 0:l.name)||"Admin"),Yl()}function n3(a){var l;ql(!1),localStorage.setItem("studentToken",a.token),(l=a.student)!=null&&l.full_name&&localStorage.setItem("studentName",a.student.full_name),Yl()}function ql(a=!0){localStorage.removeItem("token"),localStorage.removeItem("adminName"),localStorage.removeItem("studentToken"),localStorage.removeItem("studentName"),localStorage.removeItem("studentCourseName"),a&&Yl()}function Yl(){window.dispatchEvent(new Event(e3))}const r3="https://stekoratech.com/api".replace(/\/$/,"");async function ve(a,l={}){const s=a.startsWith("/")?a:`/${a}`,u={...l.body instanceof FormData?{}:{"Content-Type":"application/json"},...l.headers||{}},p=await fetch(`${r3}${s}`,{...l,headers:u}),b=(p.headers.get("content-type")||"").includes("application/json")?await p.json():await p.text();if(!p.ok){if(p.status===401){ql();const x=window.location.hash.replace("#","")||"/";(x.startsWith("/admin")||x.startsWith("/student"))&&(window.location.hash="/login")}const f=typeof b=="object"&&(b!=null&&b.message)?b.message:typeof b=="string"&&b?b:`API request failed: ${p.status}`;throw new Error(f)}return b}function jr(){return ve("/courses")}function Fn(a){return ve(`/courses/${a}/modules`)}function a3(a){return ve("/courses",{method:"POST",body:a instanceof FormData?a:JSON.stringify(a)})}function i3(a,l){return ve(`/courses/${a}`,{method:"PUT",body:l instanceof FormData?l:JSON.stringify(l)})}function s3(a){return ve(`/courses/${a}`,{method:"DELETE"})}function Ep(a,l){return ve(`/courses/${a}/modules`,{method:"POST",body:JSON.stringify(l)})}function zp(a){return ve(`/courses/modules/${a}`,{method:"DELETE"})}function o3(a){return ve(`/courses/modules/${a}/materials`)}function l3(a,l){return ve(`/courses/modules/${a}/materials`,{method:"POST",body:l instanceof FormData?l:JSON.stringify(l)})}function c3(a,l){return ve(`/courses/materials/${a}`,{method:"PUT",body:l instanceof FormData?l:JSON.stringify(l)})}function d3(a){return ve(`/courses/materials/${a}`,{method:"DELETE"})}function u3(a){return ve(`/courses/modules/${a}/quiz`)}function f3(a,l){return ve(`/courses/modules/${a}/quiz`,{method:"POST",body:JSON.stringify(l)})}function m3(a){return ve(`/courses/quiz/${a}`,{method:"DELETE"})}const p3="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWwAAACKCAMAAAC5K4CgAAABIFBMVEUzR1v////5h1oAwKcAw6k0Qlj/ymwmQVoqQFYiPFIrO096g43U1de7vMAgOVD/y2w1OVMiiYI0PlcmfnsKtqARqJcWQVsvXmgZnpAjP1rVelrsg1oxSl0qcHIePVqfimJbXF2qk2TzwWpzbl+0lmNDT1wWNlkfkogRr5vRrmgwUGDBoGXktmntwWvJqWeXg2G6o2ZsZl2Jf2E1LU8A07P/gFjMbFkrZ22+cFoAM1kTMUoALlmFd2CssrgAKUTy8/SJkZtuUlrqdFlRWFz/1G2cpK1FVmdibnxOXW3b3uAAIT+cjmNVTVt+VVpnUFrZcVmkYlmzZFrDalmNYlp+XVpLTFuvbFoAIlgAGVcAH1ecZlqCiZIAETVrdoJEU1w4J0sEAsoeAAAM70lEQVR4nO2dDXuayBbHh6rDeEXwJTGhG1ERMRbQa7K52ViJtpZE07Tb3b3t9l43vd//W9wZ0LwJZhkxvmR+Tx5BkIT8Hc+cOefMCACDwWAwGAwGg8FgMBgMBoPBYDAYi3JwsOo7eAmgd9dY6nefPl0XwOfPq76bbefk1wIovD95j7f/+ldh1Xez1fBffj25xmJ/KYCTayb2cimcvPv190Lh/W9fv5wAJvZSQZ9OlM8nxIycvP/EzMhyISqfnHwhZqRwwMReLp9P3n2+/u0Ei81j5ZnYy6TwO3ZFUA3b7S+IPPudib1ECq66BVTg754xXjJ7iURu1ffwUnjz83F+/4HamcSq7mW7SSQSROx6guzhp3gDMjt7TO0lkMjW97DYe6eJXLFezCXye/ViphjP7q36xraQXGy3vnvw83H9EP8UY/lM/LAeP83Gdoub27RRYQLyO6sgxX3ggaLwsoz3Ae8dU3xfHx2JfDyTy+GWnd3NxLP5/Z3j+OnxbvY4vrlmpAD++GXCv/18P1NVBwg/tPWGJhmGAmC5rKomANCwlKXeWSIfyyQ8sXNY7HwxEz/N7GYzGys2//X1qzu+zajNH6l/DvSm8b2qvjVN0JaUlvWn1P5uaPyHyrJvLhHfze5jM5I9PN7fyR+6Yh/Wj2P7pxupduGPVw/wadqND03FtCwLKmZLPlOr5lHtg2WpDeUDWLIZwdT3T0E9d5pP5PL72UQi+yaRP03s1TdS7Mdav/LJjtX+A7sN7TsY6GaL50smRMqH9veyDD7Uln+DxOHLAdfr81y/yf7y/3L0fH6k9U+zZqQrqRaoWVAqnWGxAZAMha9CCNvPIvYWUXj9UOvXPvLxfI14HjUkA5lEULBXgr2RGnFOnv1+N5ppw/527T1ngajlwX/ztP7MRF4+EyvyX6b1MzARe/kOHGMq9qwH8swkImXF/0wgAWIjng66T0juoJiPkOK6yu0rNq+UWyUaWm2FD38PuXw8HouQeGxNAyd+YittE9JiVkO73olTLHU8QrDeGyO20oJQbWo0NFUIW2HVzu3G4sW9CKnH4vm1VHtWbDIQ13hFprDYsiJrUKqGtCSZw9jOcaQdZDxWX8v08KzYugUrZ9S/T69AVQ93CRE7Q/0H/dgYsfkuVD1D4NN05/yiqSOiq7Abrmm/YLGxIajIZAuqswD59nVooqgnMs9X216GTK5ATQZheMFiKwYkUVTSS/pwNNVRaXdreF/+0S2TgGAX94xWmejPH0EjXBe5WWInk/TXBoldk6DZeAz2CH9MXqVJEJsLbHOgpCmojF+tqnAbxEYk94TIhxQhsvF+bo+IaUekvq8AsbFkjbfKY9424JFrPbC6akNVFUVVDVUayAY0znTTfZc2XGw0HjoIOM4FSg6d1OUl6F+g1BChPj4ijp3L4Ui4oQ4kBYnd8pNs0urdXtT8KkkJIMGaCat6E3ZlXXON9YaL3eF6aZFL2xy65NICZyPu8rzndHr4CLBHzmjc69nUhiRIbKxmbRbr1tOQVKiaim7ijYT4CjQHbdX1sDdebOfK6fX7XF8Qzq9GWOzhufu033PsniOeC+kO9X0FdpCqKs2iWpMOkq9asIG3tQY02zxAFsQ23CQO9saLPRadnuM4l0KaiA244V9EbHzk5iolcJ2oxS6R1ltrWLM0bhOUvK67kiq67poww7I094C/AZrHmondT15wdr+HUpyT5uwOJ9icA7h0v5dM230ume6No7PZfAka7hBwpnskBP4efM5r9PjNqmywn520LwEapoUUElOCI9jiUHD6N8mLtDAWL9PCTfIg7URns9EAd3r0iRtUg9Ig3OVrJbZXdCSKxOMTO4KdRGKSuH3uEfchSS+OT2wEm2GZIirtwssmbGxNbCQp0HsefvjFs1Vodf2tyFOgrgXVsLewvmIDMVKt/cTmsYcHoUoDvs76EfZTscZiL8hjg+ObFlNaphScjFEDz0iSWQpfI7W1Yl/0H3mJ/glfXpd9hjQuoAI1EHRS1imM/baK3RlxI/DADoUuZSAh1Ggr/LZW7B7Hcan7jTtAbD6wDzwrQe0s8CyNF7NcsdE/VsU5EZu7P+D0t9mgZczEV2/jrOps7HWKUaqtmc3GA8EVM7pT27eUoUJdyQBhJaSXvfVic3fxbx+x9SaEjSOfpNjTHJFLw2aLl2tGLlKr4sY1I72LOwdwVmy5BGH1jLL8TG/jth3Skiy5g0SrwrXZ6c49Z9unbgTCLr27IVehFPKSbfZGxg887dmo35EXlwa8PEuws8FPp59OsmMh2FaxUUq4eJivDCxlUKo+5WX3Cvkmbp7shV2VrmG0vXh2Kawfvq1iA/Q4NRyYqdH8BuzSXV5Aa5CRuVJqaOSiBjnpGusNz9QslQCxSfq8MlMRXFFh2TMWColVGQp+MYSWggVWS5oXyGZiBxNcymDMeiRnt9n1qmRhp4XHnWlJhW2lCVs6PlnZ/ITvUplTyjBHbNSWzC5UZQV7LpbUJnlLInaJiT2XIDPSltTW0WNaqtSemBHTtdFyhSTVFVIYVTGgRMqlmNjBBHaQDd/BeHOqI18xum6Rn0Gas2Jg0SW3EHAdxUbJZ1jP4G/g5/q5pQxKqznLvVkFvOf6TTbYUayUp6UM6+b6icMeN4z0D1AyO6hpTTK2flHWOYMaWZ4Mahrem/X3WbbY5w4eNqfWoWn7BKIgbNMm17Ho5TUbriNRIPGgm464Iu7lambFVjSoDhSqGY2IVwZq6ERO5GI/mFMzdGNv3EhYFfbcECvxNLRqmYaqRpyTkNpgsQ//l4mSe2In0yuLY094KnlgLJA8COmKeGLHdiIldt9mj9x/WUivinvVav5psbJmUtWNmFqbKi0WOffE7thE7JtOckXMjWcTkKxTJXx1mcLUE5u9GykPxAYdkhlbV29kPnzo2WBPsVSbTUgejLiLSG+ZkoAiHUUP4m0JVt4GnqWpZSBm5DgXIQdY7IfTqTvnC0gUHb5i692G37wDD6jCwHNqoxt+cnAuizvI/QjZicXXc9E/H7ERIFEmOrDnF/4eEjsRd4/xfUq/nUzGQ26XlnQn6Lm7yNt35+klb6fp0eAntgXV0g+qhPKgpUKL4lb2I5V7J0up9XB8M+7c2H0RDW2HPLNTIhD7+JHM2JscJg+UavsUwxvQArRdoAwsCk8bPGWFM/VYLOPt7cVj+cwTr6a0IWjMjcjEsFG6wznCGD9zOOdc6DmcfTXq2ZwNOGd0M+ScdI9uEtOs2D8kOFggNjLwwtqR4a5pkdknYpO9nCv2claCQimuc9VL922uw6Uvz8fcecfpAQ6IN1xnZF+lRwgfxhv8hlxStW2/CUxNN+rn52oHN3h+6ojoRtio31wOsoQ8dp3z3h7uTffd3ejXbyFid3ppx3FEgNt0ivur0+8dcEi8xGI7HXt0dWFzfWGEX0AXsQ1KHgBZM2fR7mScKD8tZaiY5pEXmQ09NW8eud3A1aPi2ajVxmakI2I50/bFKNWzU5yADcj5qNfvpf/q2Z30aIgPOzecY48iMiMTsXX/ZaJuo0wHhkmie1hko+bFrqA3pS98pmYeuXrwUlDRr8N/aSdBpy+kD0QyKW/cSwlOBw/38WPSSSVTjntYvBEEOisSmPCtQrXafkxVhZM1iWQy16OhKE28URVsetTqEXQTlNGKDXIHbwIAS3ClScwIiSLeEbEDwl2Jrhcoeus04J8kiU4jd4YeDXOy6/qMZ6ffK2Uw2xAiXoJtE1ax5l1F90qpIhZ7zvKKEf4RP9CY0ucIJrhupOmzBEbzrpTBKqmqIpO6EamMr9HOzhqUpQy35MCi657lonwHZqrHFibIZg8k2PznY7DRGExe1cCDzBYvlyQSwcYNHTYbXj6MWuxcIrvw6n47+bX+ZqbAUoaKb63f7cw7pfuRhK6V9ke3osFd5KhKt5KOC5E6tuhaivj6tZY7uIq13JqlfK+UwctSIm9JNOVHqws8c16iCMHmcllPqeJCZNdcbr+l5rz6bL+1b+f0wtN16M7MsEvN4T7QVemwmFlw8cQcCSDGyBAztA7Pgk92XYWt0JOQbtFb02UB/zaJIhm4HBZz4GBhEglP7jfU/8Ay8Znm0cUuBh5806CctWDohj3NQS7aO07tNqG+lpbEr5ShAqGlUS3prFlQ0sJ+LPAoMcoAq/u+ree3vPmWMnSD1wJ4CrUb3gTlitmIOV3LItaAxcrl6scKDR+rc9drDWLBftGHaMSJmqC5635zxZ6GSuqXw5p8wcTLYPLVKUzs52Ai9rt1KBjaegq/uGK/Zk37GUCTb4N8DeZ9hy8jGvhXE17P+Q5fRjQUvr16yOx3+DIio/DTI7WZ2Mvkkdo+3+HLiIyJRzKBDXCWS+H6l9vW/dPXVd/N1lMoTKMarF0zGAwGg8FgMBgMBoPBYDAYDAbjpfN/6tnDKXhzEO0AAAAASUVORK5CYII=",h3="/assets/fullstack-CoYPai_u.jpg",Pp="/assets/iot-DqMEWA_d.jpg",_p="/assets/Photoshop-CRwZ8T3a.jpg",Uf=[],Wf=[h3,p3,Pp,_p],g3=a=>a.name||a.title||"Untitled Course",x3=a=>{var l;return((l=a.category)==null?void 0:l.trim())||"Uncategorized"},v3=(a,l)=>a.image?ct(a.image):a.image_url?ct(a.image_url):Wf[l%Wf.length];function y3(){const[a,l]=N.useState([]),[s,d]=N.useState("All"),[u,p]=N.useState(null),[h,b]=N.useState([]),[f,x]=N.useState(!0),[v,g]=N.useState(!1);N.useEffect(()=>{async function M(){try{const z=await jr();l(z.length?z:Uf)}catch(z){console.error(z),l(Uf)}finally{x(!1)}}M()},[]),N.useEffect(()=>{if(!u)return;const M=z=>{z.key==="Escape"&&A()};return window.addEventListener("keydown",M),()=>window.removeEventListener("keydown",M)},[u]);const y=N.useMemo(()=>a.map((M,z)=>({...M,name:g3(M),category:x3(M),image:v3(M,z)})),[a]),C=N.useMemo(()=>["All",...[...new Set(y.map(z=>z.category))]],[y]),_=y.filter(M=>s==="All"||M.category===s),I=async M=>{p(M),b([]),g(!0);try{const W=(await Fn(M.id)).map(F=>F.title).filter(Boolean);b(W)}catch(z){console.error(z),b([])}finally{g(!1)}},A=()=>{p(null),b([])};return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
        :root {
          --blue: #3b82f6;
          --richblue: #003366;
          --palegray: #f5f5f5;
          --lightgray: #9ca3af;
        
        }

        .courses-page {
          min-height: 100vh;
          background: #f5f5f5;
          padding: 4.25rem 1rem 5rem;
          color: #003366;
        }

        .courses-container {
          width: min(1180px, 100%);
          margin: 0 auto;
        }

        .course-tabs {
          display: flex;
          gap: 0.6rem;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: 3.2rem;
        }

        .course-tab {
          border: 0;
          border-radius: 999px;
          background: #e8eef6;
          color: #003366;
          min-height: 44px;
          padding: 0 1.2rem;
          font-size: 0.96rem;
          font-weight: 600;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .course-tab:hover {
          transform: translateY(-1px);
        }

        .course-tab.active {
          background: var(--blue);
          color: #ffffff;
        }

        .courses-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.35rem;
        }

        .course-card {
          background: #ffffff;
          border: 1px solid rgba(0, 51, 102, 0.14);
          border-radius: 8px;
          overflow: hidden;
          display: flex;
          min-height: 390px;
          flex-direction: column;
          box-shadow: 0 10px 24px rgba(0, 51, 102, 0.06);
        }

        .course-image {
          width: 100%;
          height: 190px;
          object-fit: cover;
          background: #dbe6f3;
        }

        .course-body {
          padding: 1.25rem 1.2rem 1.15rem;
          display: flex;
          flex: 1;
          flex-direction: column;
        }

        .course-category {
          color: var(--blue);
          font-size: 0.82rem;
          font-weight: 800;
          text-transform: uppercase;
          margin-bottom: 0.65rem;
        }

        .course-title {
          margin: 0;
          color: #001f3f;
          font-size: 1rem;
          font-weight: 800;
          line-height: 1.35;
        }

        .course-summary {
          margin: 0.7rem 0 1rem;
          color: #526175;
          font-size: 0.9rem;
          line-height: 1.48;
        }

        .course-footer {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .course-count {
          color: #526175;
          font-size: 0.96rem;
        }

        .course-learn {
          border: 1px solid var(--blue);
          background: var(--blue);
          color: #ffffff;
          border-radius: 999px;
          font-size: 0.9rem;
          font-weight: 800;
          cursor: pointer;
          padding: 0.65rem 1rem;
          min-width: 112px;
        }

        .course-learn:hover {
          background: var(--richblue);
          border-color: #22d3ee;
        }

        .course-empty {
          grid-column: 1 / -1;
          color: #526175;
          background: #ffffff;
          border: 1px solid rgba(0, 51, 102, 0.14);
          border-radius: 12px;
          padding: 1.2rem;
        }

        .course-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 80;
          background: rgba(0, 31, 63, 0.58);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .course-modal {
          width: min(720px, 100%);
          max-height: min(86vh, 760px);
          overflow: auto;
          background: #ffffff;
          border-radius: 8px;
          box-shadow: 0 24px 60px rgba(0, 31, 63, 0.28);
        }

        .course-modal-top {
          padding: 1.35rem 1.45rem 1.15rem;
          border-bottom: 1px solid rgba(0, 51, 102, 0.12);
        }

        .course-modal-kicker {
          color:var(--blue);
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          margin-bottom: 0.35rem;
        }

        .course-modal-title-row {
          display: flex;
          gap: 1rem;
          justify-content: space-between;
        }

        .course-modal h2 {
          margin: 0;
          color: #001f3f;
          font-size: 1.55rem;
        }

        .course-modal-close {
          border: 1px solid rgba(0, 51, 102, 0.18);
          background: #f5f5f5;
          color: #003366;
          width: 36px;
          height: 36px;
          border-radius: 999px;
          font-size: 1.25rem;
          cursor: pointer;
        }

        .course-modal-meta {
          display: flex;
          gap: 0.8rem;
          margin-top: 0.75rem;
          color: #526175;
          font-size: 0.8rem;
        }

        .course-modal-content {
          padding: 1.35rem 1.45rem 1.5rem;
          display: grid;
          gap: 1.35rem;
        }

        .course-modal-section h3 {
          margin: 0 0 0.6rem;
          color: #001f3f;
          font-size: 1rem;
        }

        .course-modal-section p {
          margin: 0;
          color: #526175;
          line-height: 1.65;
        }

        .curriculum-list {
          margin: 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 0.65rem;
        }

        .curriculum-list li {
          border: 1px solid rgba(0, 51, 102, 0.15);
          border-radius: 8px;
          padding: 0.75rem 0.9rem;
          color: #003366;
          background: #f8fbff;
          font-size: 0.92rem;
        }

        @media (max-width: 1020px) {
          .courses-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 700px) {
          .courses-page {
            padding-top: 2.2rem;
          }

          .course-tabs {
            margin-bottom: 1.5rem;
          }

          .courses-grid {
            grid-template-columns: 1fr;
          }

          .course-card {
            min-height: auto;
          }

          .course-image {
            height: 180px;
          }

          .course-modal h2 {
            font-size: 1.25rem;
          }
        }
      `}),n.jsx("div",{className:"courses-page",children:n.jsxs("div",{className:"courses-container",children:[n.jsx("div",{className:"course-tabs",children:C.map(M=>n.jsx("button",{type:"button",className:`course-tab ${s===M?"active":""}`,onClick:()=>d(M),children:M},M))}),n.jsxs("div",{className:"courses-grid",children:[f&&n.jsx("div",{className:"course-empty",children:"Loading courses..."}),!f&&_.map(M=>{const z=M.description||"A practical Stekora Tech course built around real learning units.";return n.jsxs("article",{className:"course-card",children:[n.jsx("img",{className:"course-image",src:M.image,alt:M.name}),n.jsxs("div",{className:"course-body",children:[n.jsx("div",{className:"course-category",children:M.category}),n.jsx("h2",{className:"course-title",children:M.name}),n.jsxs("p",{className:"course-summary",children:[z.slice(0,118),z.length>118?"...":""]}),n.jsxs("div",{className:"course-footer",children:[n.jsxs("span",{className:"course-count",children:[M.modules_count||M.module_count||M.lessons||0," Lessons"]}),n.jsx("button",{type:"button",className:"course-learn",onClick:()=>I(M),children:"Learn More"})]})]})]},M.id||M.name)}),!f&&_.length===0&&n.jsx("div",{className:"course-empty",children:"No courses found in this category."})]}),u&&n.jsx("div",{className:"course-modal-backdrop",onClick:A,children:n.jsxs("section",{className:"course-modal",onClick:M=>M.stopPropagation(),children:[n.jsxs("div",{className:"course-modal-top",children:[n.jsx("div",{className:"course-modal-kicker",children:u.category}),n.jsxs("div",{className:"course-modal-title-row",children:[n.jsx("h2",{children:u.name}),n.jsx("button",{type:"button",className:"course-modal-close",onClick:A,children:"×"})]}),n.jsxs("div",{className:"course-modal-meta",children:[n.jsxs("span",{children:[h.length," Lessons"]}),n.jsx("span",{children:"Free"})]})]}),n.jsxs("div",{className:"course-modal-content",children:[n.jsxs("div",{className:"course-modal-section",children:[n.jsx("h3",{children:"About this course"}),n.jsx("p",{children:u.description||"This course gives students practical skills through guided lessons, project work, and clear learning units."})]}),n.jsxs("div",{className:"course-modal-section",children:[n.jsx("h3",{children:"Curriculum"}),v?n.jsx("p",{children:"Loading curriculum..."}):h.length>0?n.jsx("ul",{className:"curriculum-list",children:h.map((M,z)=>n.jsx("li",{children:M},`${M}-${z}`))}):n.jsx("p",{children:"No module has been uploaded for this course yet."})]})]})]})})]})})]})}function Gl(){return ve("/products")}function b3(a){return ve(`/products/${a}`)}function w3(a){return ve("/products",{method:"POST",body:a instanceof FormData?a:JSON.stringify(a)})}function j3(a,l){return ve(`/products/${a}`,{method:"PUT",body:l instanceof FormData?l:JSON.stringify(l)})}function k3(a){return ve(`/products/${a}`,{method:"DELETE"})}const S3=a=>`${Number(a||0).toLocaleString("en-RW")} RWF`;function Xl({product:a,goTo:l,onClose:s,autoCloseDelay:d=3500}){if(N.useEffect(()=>{if(!a)return;const b=window.setTimeout(s,d);return()=>window.clearTimeout(b)},[a,s,d]),!a)return null;const u=a.title||a.name||"Product",p=a.image_url?ct(a.image_url):a.image||"",h=b=>{s(),l(b)};return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
        .mini-cart-popup-layer{position:fixed;inset:0;z-index:120;pointer-events:none}
        .mini-cart-popup{position:absolute;top:82px;right:18px;width:min(340px,calc(100vw - 32px));background:#fff;border:1px solid #dbe3ec;border-radius:14px;box-shadow:0 18px 45px rgba(15,23,42,.2);padding:.85rem;color:#003366;pointer-events:auto;animation:miniCartSlideIn .22s ease-out}
        .mini-cart-popup-head{display:flex;align-items:center;justify-content:space-between;gap:.75rem;margin-bottom:.7rem}
        .mini-cart-popup-title{display:inline-flex;align-items:center;gap:.5rem;font-size:.88rem;font-weight:900;color:#166534}
        .mini-cart-popup-close{width:30px;height:30px;border:0;border-radius:999px;background:#f1f5f9;color:#475569;cursor:pointer;display:inline-flex;align-items:center;justify-content:center}
        .mini-cart-popup-product{display:grid;grid-template-columns:66px minmax(0,1fr);gap:.75rem;align-items:center}
        .mini-cart-popup-image,.mini-cart-popup-placeholder{width:66px;height:58px;border-radius:9px;background:#f8fafc;border:1px solid #e2e8f0}
        .mini-cart-popup-image{object-fit:contain}
        .mini-cart-popup-placeholder{display:inline-flex;align-items:center;justify-content:center;color:#94a3b8}
        .mini-cart-popup-name{margin:0 0 .25rem;font-size:.9rem;font-weight:850;line-height:1.35;color:#003366;overflow-wrap:anywhere}
        .mini-cart-popup-price{font-size:.83rem;font-weight:900;color:#0f766e}
        .mini-cart-popup-actions{display:grid;grid-template-columns:1fr 1fr;gap:.55rem;margin-top:.8rem}
        .mini-cart-popup-actions button{border:0;border-radius:8px;padding:.62rem .7rem;font-size:.78rem;font-weight:850;cursor:pointer}
        .mini-cart-view-btn{background:#e7f5f3;color:#0f766e}
        .mini-cart-checkout-btn{background:#003366;color:#fff}
        @keyframes miniCartSlideIn{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}
        @media(max-width:600px){
          .mini-cart-popup{top:72px;right:8px;width:min(300px,calc(100vw - 16px));padding:.72rem;border-radius:12px}
          .mini-cart-popup-product{grid-template-columns:56px minmax(0,1fr);gap:.6rem}
          .mini-cart-popup-image,.mini-cart-popup-placeholder{width:56px;height:50px}
          .mini-cart-popup-name{font-size:.82rem}
          .mini-cart-popup-price{font-size:.76rem}
          .mini-cart-popup-actions{gap:.45rem;margin-top:.65rem}
          .mini-cart-popup-actions button{padding:.55rem .6rem;font-size:.72rem}
        }
      `}),n.jsx("div",{className:"mini-cart-popup-layer","aria-live":"polite",children:n.jsxs("aside",{className:"mini-cart-popup",children:[n.jsxs("div",{className:"mini-cart-popup-head",children:[n.jsxs("div",{className:"mini-cart-popup-title",children:[n.jsx(U,{icon:yr}),"Added to cart"]}),n.jsx("button",{type:"button",className:"mini-cart-popup-close",onClick:s,"aria-label":"Close cart notification",children:n.jsx(U,{icon:sv})})]}),n.jsxs("div",{className:"mini-cart-popup-product",children:[p?n.jsx("img",{src:p,alt:u,className:"mini-cart-popup-image"}):n.jsx("div",{className:"mini-cart-popup-placeholder",children:n.jsx(U,{icon:yr})}),n.jsxs("div",{children:[n.jsx("p",{className:"mini-cart-popup-name",children:u}),n.jsx("div",{className:"mini-cart-popup-price",children:S3(a.price)})]})]}),n.jsxs("div",{className:"mini-cart-popup-actions",children:[n.jsx("button",{type:"button",className:"mini-cart-view-btn",onClick:()=>h("/cart"),children:"View cart"}),n.jsx("button",{type:"button",className:"mini-cart-checkout-btn",onClick:()=>h("/checkout"),children:"Checkout"})]})]})})]})}const N3="/assets/mukunzi--14O5N_H.png",C3="/assets/uzii-BgGMvJWO.png",E3="/assets/freightQ-CoiWoPAu.png",z3="/assets/camera-CrcSHxgF.png",Ap="/assets/iot-DqMEWA_d.jpg",P3=[N3,C3],_3=[E3,z3],Hf=[Pp,Ap],Bf="Where ideas become digital solutions";function A3({goTo:a,addToCart:l}){const[s,d]=N.useState(0),[u,p]=N.useState(typeof window<"u"?window.innerWidth<=600:!1),[h,b]=N.useState([]),[f,x]=N.useState(!0),[v,g]=N.useState(""),[y,C]=N.useState(0),[_,I]=N.useState(""),[A,M]=N.useState(null),z=u?_3:P3;N.useEffect(()=>{const F=()=>{p(window.innerWidth<=600),d(0)};return window.addEventListener("resize",F),()=>window.removeEventListener("resize",F)},[]),N.useEffect(()=>{const F=setInterval(()=>d(D=>(D+1)%z.length),4e3);return()=>clearInterval(F)},[z.length]),N.useEffect(()=>{let F;return y<Bf.length?F=window.setTimeout(()=>{g(D=>D+Bf.charAt(y)),C(D=>D+1)},80):F=window.setTimeout(()=>{g(""),C(0)},2e3),()=>window.clearTimeout(F)},[y]),N.useEffect(()=>{async function F(){try{const D=await Gl(),G=Array.isArray(D)?D:D.products||[];b(G.slice(0,3))}catch(D){console.error(D),b([])}finally{x(!1)}}F()},[]);const W=F=>{l(F),M(F),I(`${F.title||"Product"} added to cart.`),window.setTimeout(()=>I(""),2200)};return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
        :root {
          --richblue: #003366;
          --palegray: #f5f5f5;
          --lightgray: #9ca3af;
          --blue: #3b82f6;
        }

        .home-page {
          background: var(--palegray);
          color: var(--richblue);
          min-height: 100vh;
          overflow-x: hidden;
        }

        .ad-slider {
          position: relative;
          width: 100%;
          height: 150px;
          overflow: hidden;
          background: #dbeafe;
        }

        .ad-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          z-index: 1;
        }

        .ad-slide.active {
          opacity: 1;
          z-index: 2;
        }

        .ad-slide img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: fill;
        }

        .ad-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.4);
          color: #fff;
          border: 0;
          font-size: 1.5rem;
          padding: 0.3rem 0.6rem;
          cursor: pointer;
          border-radius: 50%;
          z-index: 5;
        }

        .ad-arrow.left {
          left: 1rem;
        }

        .ad-arrow.right {
          right: 1rem;
        }

        .ad-dots {
          position: absolute;
          bottom: 0.75rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.4rem;
          z-index: 6;
        }

        .ad-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          border: 0;
          background: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          padding: 0;
        }

        .ad-dot.active {
          background: yellow;
        }

        .home-container {
          max-width: 72rem;
          margin: 0 auto;
          padding: 2.5rem 1rem;
        }

        .hero-section {
          display: grid;
          gap: 2rem;
          grid-template-columns: 1fr;
          margin-bottom: 2.5rem;
          align-items: center;
        }

        .hero-pretitle {
          text-transform: uppercase;
          letter-spacing: 4px;
          font-weight: 700;
          font-size: 1.875rem;
          color: var(--blue);
          margin-bottom: 0.75rem;
        }

        .hero-title {
          font-size: 2.25rem;
          font-weight: 700;
          line-height: 1.3;
          margin: 0;
          color: var(--blue);
        }

        .hero-description {
          margin-top: 0.75rem;
          font-size: 0.95rem;
          line-height: 1.65;
          color: var(--richblue);
        }

        .home-contact-btn {
          display: inline-block;
          margin-top: 1rem;
          background: var(--blue);
          color: #fff;
          font-weight: 500;
          padding: 0.75rem 2rem;
          border-radius: 0.5rem;
          border: 0;
          cursor: pointer;
        }

        .hero-image {
          width: 100%;
          height: 220px;
          border-radius: 1rem;
          object-fit: cover;
          border: 1px solid var(--richblue);
        }

        .featured-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .search-input {
          padding: 0.7rem 0.85rem;
          border-radius: 0.5rem;
          border: 1px solid var(--lightgray);
          font-size: 0.85rem;
          width: 100%;
          max-width: 400px;
          background: #fff;
        }

        .products-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        .home-product-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 1rem;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06);
          padding: 1rem;
          min-height: 380px;
          display: flex;
          flex-direction: column;
          gap: 0.95rem;
        }

        .home-product-card img {
          width: 100%;
          height: 170px;
          object-fit: contain;
          border-radius: 0.75rem;
        }

        .home-product-body {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.6rem;
          flex: 1;
        }

        .home-product-tag {
          background: #fff4dc;
          color: #92400e;
          border-radius: 8px;
          padding: 6px 9px;
          font-size: 0.82rem;
          font-weight: 800;
        }

        .home-product-title {
          margin: 0;
          font-size: 1.1rem;
        }

        .home-product-description {
          margin: 0;
          color: #64748b;
          line-height: 1.55;
          font-size: 0.9rem;
        }

        .home-product-price {
          font-size: 1.45rem;
        }

        .home-product-actions {
          display: flex;
          gap: 8px;
          margin-top: auto;
        }

        .home-product-actions button {
          background: #e7f5f3;
          color: #0f766e;
          border: 0;
          border-radius: 8px;
          padding: 10px 12px;
          font-weight: 700;
          cursor: pointer;
        }

        .cart-icon-btn {
          width: 46px;
          height: 46px;
        }

        .no-products {
          font-size: 0.875rem;
          color: var(--lightgray);
          background: #dfe4ea;
          border: 1px dashed var(--richblue);
          border-radius: 0.75rem;
          padding: 1.5rem;
          grid-column: 1 / -1;
        }

        .home-notice {
          background: #dcfce7;
          color: #166534;
          border: 1px solid #86efac;
          border-radius: 8px;
          padding: 0.7rem 1rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        @media (min-width: 640px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 768px) {
          .hero-section {
            grid-template-columns: repeat(2, 1fr);
          }

          .hero-image {
            height: 320px;
          }
        }

        @media (min-width: 1024px) {
          .products-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 600px) {
          .ad-slider {
            height: 100px;
            background: var(--palegray);
            margin-bottom: -3.5rem;
          }

          .ad-slide img {
            background-size: 100% 100%;
            background-position: 100% top;
            width: 100%;
            margin-top: -12px;
            object-fit: contain;
          }

          .ad-arrow {
            font-size: 1rem;
            padding: 0.15rem 0.35rem;
            margin-top: -0.6rem;
          }

          .ad-arrow.left {
            left: 0.5rem;
          }

          .ad-arrow.right {
            right: 0.5rem;
          }

          .ad-dots {
            bottom: 0.45rem;
          }

          .ad-dot {
            width: 6px;
            height: 6px;
            margin-top: -1.8rem;
          }

          .home-container {
            padding: 2rem 1rem;
          }

          .hero-section {
            text-align: center;
            padding: 0 1rem;
            gap: 1.2rem;
          }

          .hero-pretitle {
            font-size: 1.35rem;
            letter-spacing: 5px;
          }

          .hero-title {
            font-size: 1.7rem;
          }

          .hero-description {
            font-size: 0.9rem;
          }

          .hero-image {
            display: none;
          }

          .home-contact-btn {
            padding: 0.7rem 1.8rem;
          }

          .featured-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .search-input {
            max-width: 100%;
          }
        }

        @media (max-width: 400px) {
          .ad-slider {
            height: 100px;
            background: var(--palegray);
            margin-bottom: -3.5rem;
          }

          .ad-slide img {
            background-size: 100% 100%;
            background-position: 100% top;
            width: 100%;
            margin-top: -20px;
            object-fit: contain;
          }

          .ad-arrow {
            font-size: 1rem;
            padding: 0.15rem 0.35rem;
            margin-top: -1.3rem;
          }

          .ad-dot {
            width: 6px;
            height: 6px;
            margin-top: -2.8rem;
          }

          .hero-title {
            font-size: 1.55rem;
          }

          .hero-pretitle {
            font-size: 1.2rem;
          }
        }
      `}),n.jsx(Xl,{product:A,goTo:a,onClose:()=>M(null)}),n.jsxs("div",{className:"home-page",children:[n.jsxs("div",{className:"ad-slider",children:[z.map((F,D)=>n.jsx("div",{className:`ad-slide ${D===s?"active":""}`,children:n.jsx("img",{src:F,alt:`Advertisement banner ${D+1}`})},`${F}-${D}`)),n.jsx("button",{className:"ad-arrow left",onClick:()=>d(F=>(F-1+z.length)%z.length),children:"‹"}),n.jsx("button",{className:"ad-arrow right",onClick:()=>d(F=>(F+1)%z.length),children:"›"}),n.jsx("div",{className:"ad-dots",children:z.map((F,D)=>n.jsx("button",{className:`ad-dot ${D===s?"active":""}`,onClick:()=>d(D)},`${F}-dot-${D}`))})]}),n.jsxs("div",{className:"home-container",children:[n.jsxs("section",{className:"hero-section",children:[n.jsxs("div",{children:[n.jsx("p",{className:"hero-pretitle",children:"Stekora Tech"}),n.jsxs("h1",{className:"hero-title",children:[v,n.jsx("span",{"aria-hidden":"true",children:"|"})]}),n.jsx("p",{className:"hero-description",children:"We are an IT services studio delivering web applications, embedded systems and automation. From concept to deployment, we help you design, build and manage reliable digital products."}),n.jsx("button",{className:"home-contact-btn",onClick:()=>a("/contact"),children:"Request a Services"})]}),n.jsx("img",{src:Ap,alt:"Stekora Tech electronics workspace",className:"hero-image"})]}),n.jsxs("section",{children:[_&&n.jsx("div",{className:"home-notice",children:_}),n.jsxs("div",{className:"featured-header",children:[n.jsxs("div",{children:[n.jsx("h2",{children:"Product On Lowest Price"}),n.jsx("span",{children:"Good quality and reliability"})]}),n.jsx("input",{type:"text",className:"search-input",placeholder:"Search products...",value:"",readOnly:!0,onClick:()=>a("/shop"),onFocus:()=>a("/shop")})]}),n.jsxs("div",{className:"products-grid",children:[f&&n.jsx("p",{className:"no-products",children:"Loading products..."}),!f&&h.map((F,D)=>{const G=F.name||F.title||"Product",ne=F.price?`${F.price} RWF`:"Contact us",de=F.image||(F.image_url?ct(F.image_url):"")||Hf[D%Hf.length];return n.jsxs("div",{className:"home-product-card",children:[n.jsx("img",{src:de,alt:G}),n.jsxs("div",{className:"home-product-body",children:[n.jsx("span",{className:"home-product-tag",children:F.category||"Product"}),n.jsx("h3",{className:"home-product-title",children:G}),n.jsx("p",{className:"home-product-description",children:F.description||"Quality Stekora Tech product or service package."}),n.jsxs("p",{children:["Rating ",F.rating||"4.8"]}),n.jsx("strong",{className:"home-product-price",children:ne}),n.jsxs("div",{className:"home-product-actions",children:[n.jsx("button",{onClick:()=>a(`/product/${F.id}`),children:"Details"}),n.jsx("button",{className:"cart-icon-btn",onClick:()=>W(F),"aria-label":`Add ${G} to cart`,children:n.jsx(U,{icon:yr})})]})]})]},F.id||G)}),!f&&h.length===0&&n.jsx("p",{className:"no-products",children:"No product posted yet. Please check the shop again soon."})]})]})]})]})]})}function L3(){return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
        :root {
          --richblue: #003366;
          --palegray: #f5f5f5;
          --lightgray: #9ca3af;
        }

        .jobs-page {
          min-height: 70vh;
          background-color: var(--palegray);
          color: var(--richblue);
        }

        .jobs-container {
          max-width: 72rem;
          margin: 0 auto;
          padding: 2.5rem 1rem;
        }

        .jobs-title {
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 0.5rem;
        }

        .jobs-subtitle {
          font-size: 0.875rem;
          color: var(--lightgray);
          margin: 0 0 1.5rem;
          line-height: 1.7;
          max-width: 46rem;
        }

        .job-box {
          border: 1px dashed var(--richblue);
          background-color: rgba(0, 51, 102, 0.1);
          padding: 1.5rem;
          border-radius: 1rem;
        }

        .job-box h2 {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0 0 0.25rem;
          color: var(--richblue);
        }

        .job-box p {
          font-size: 0.75rem;
          margin: 0 0 0.75rem;
          color: var(--lightgray);
          line-height: 1.7;
        }

        .job-box p.email {
          color: var(--richblue);
          margin-bottom: 0;
          font-weight: 600;
        }
      `}),n.jsx("div",{className:"jobs-page",children:n.jsxs("div",{className:"jobs-container",children:[n.jsx("h1",{className:"jobs-title",children:"Jobs & Opportunities"}),n.jsx("p",{className:"jobs-subtitle",children:"We collaborate with developers, designers and hardware enthusiasts on IT and electronics projects."}),n.jsxs("div",{className:"job-box",children:[n.jsx("h2",{children:"No open positions right now"}),n.jsx("p",{children:"We're always happy to see strong portfolios. You can still send your CV and GitHub/LinkedIn, and we'll keep you in mind for future IT projects."}),n.jsx("p",{className:"email",children:"Email: info@stekoratech.com"})]})]})})]})}function M3(a){return ve("/auth/student/login",{method:"POST",body:JSON.stringify(a)})}function I3(a){return ve("/auth/admin/login",{method:"POST",body:JSON.stringify(a)})}function T3(a){return ve("/auth/admin/password",{method:"PATCH",headers:{Authorization:`Bearer ${localStorage.getItem("token")||""}`},body:JSON.stringify(a)})}function F3(a){return ve("/auth/student/password",{method:"PATCH",headers:{Authorization:`Bearer ${localStorage.getItem("studentToken")||""}`},body:JSON.stringify(a)})}function wn(a,l={}){const s=localStorage.getItem("studentToken");return ve(a,{...l,headers:{Authorization:`Bearer ${s}`,...l.headers}})}function O3(a){return ve("/students/register",{method:"POST",body:JSON.stringify(a)})}function R3(){return wn("/students/dashboard")}function D3(a){return wn(`/students/courses/${a}/start`,{method:"POST",body:JSON.stringify({})})}function $3(a,l){return wn(`/students/courses/${a}/modules/${l}`)}function U3(a){return wn(`/students/modules/${a}/assessment`)}function W3(a,l){return wn(`/students/modules/${a}/assessment`,{method:"POST",body:JSON.stringify({answers:l})})}function H3(a){return wn(`/students/courses/${a}/final-exam`)}function B3(a,l){return wn(`/students/courses/${a}/final-exam`,{method:"POST",body:JSON.stringify({answers:l})})}function V3(){return wn("/students/certificates")}function Q3({goTo:a}){const[l,s]=N.useState("login"),[d,u]=N.useState("student"),[p,h]=N.useState({email:"",password:""}),[b,f]=N.useState({full_name:"",email:"",phone:"",password:""}),[x,v]=N.useState(!1),[g,y]=N.useState(!1),C=M=>{h({...p,[M.target.name]:M.target.value})},_=M=>{f({...b,[M.target.name]:M.target.value})},I=async M=>{M.preventDefault(),v(!0);try{if(d==="student"){const z=await M3(p);n3(z),alert("Logged in successfully."),a("/student")}else{const z=await I3(p);t3(z),alert("Admin logged in."),a("/admin")}}catch(z){console.error(z),alert(z.message||"Login failed")}finally{v(!1)}},A=async M=>{M.preventDefault(),y(!0);try{await O3(b),alert("Registration successful. Please login."),h({email:b.email,password:""}),f({full_name:"",email:"",phone:"",password:""}),s("login"),u("student")}catch(z){console.error(z),alert(z.message||"Registration failed")}finally{y(!1)}};return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
        :root {
          --auth-primary: #003366;
          --auth-accent: #22d3ee;
          --auth-deep: #001f3f;
          --auth-line: rgba(255, 255, 255, 0.5);
        }

        .auth-page {
          min-height: 100vh;
          background: #f5f5f5;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 5rem 1rem 2.5rem;
          overflow: hidden;
        }

        .auth-back {
          position: fixed;
          top: 1rem;
          left: 1rem;
          z-index: 10;
          border: 1px solid rgba(0, 51, 102, 0.25);
          background: rgba(255, 255, 255, 0.86);
          color: var(--auth-primary);
          border-radius: 999px;
          padding: 0.55rem 0.95rem;
          font-weight: 700;
          cursor: pointer;
          backdrop-filter: blur(10px);
        }

        .auth-shell {
          width: min(960px, 100%);
          min-height: 560px;
          position: relative;
          overflow: hidden;
          background: var(--auth-deep);
          border: 1px solid rgba(34, 211, 238, 0.58);
          box-shadow: 0 0 30px rgba(0, 51, 102, 0.32), 0 0 18px rgba(34, 211, 238, 0.22);
          isolation: isolate;
          animation: authShellIn 0.7s ease both;
        }

        .auth-shell::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(115deg, transparent 0 38%, rgba(34, 211, 238, 0.08) 38% 39%, transparent 39%),
            radial-gradient(circle at 18% 20%, rgba(34, 211, 238, 0.16), transparent 18rem);
          pointer-events: none;
        }

        .auth-form-box {
          position: absolute;
          top: 0;
          width: 50%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2.5rem 3rem;
          transition: transform 0.75s ease, opacity 0.75s ease, filter 0.75s ease;
          z-index: 2;
        }

        .auth-form-box.login {
          left: 0;
        }

        .auth-form-box.register {
          right: 0;
          transform: translateX(120%);
          opacity: 0;
          filter: blur(10px);
        }

        .auth-shell.show-register .auth-form-box.login {
          transform: translateX(-120%);
          opacity: 0;
          filter: blur(10px);
        }

        .auth-shell.show-register .auth-form-box.register {
          transform: translateX(0);
          opacity: 1;
          filter: blur(0);
        }

        .auth-card {
          width: 100%;
          color: #ffffff;
        }

        .auth-title {
          margin: 0 0 0.45rem;
          color: #ffffff;
          font-size: 1.8rem;
          font-weight: 800;
          text-align: center;
        }

        .auth-sub {
          margin: 0 0 1.2rem;
          color: rgba(255, 255, 255, 0.72);
          font-size: 0.86rem;
          line-height: 1.5;
          text-align: center;
        }

        .auth-mode-row {
          display: flex;
          gap: 0.55rem;
          margin-bottom: 1rem;
        }

        .auth-mode-btn {
          flex: 1;
          border: 1px solid rgba(34, 211, 238, 0.3);
          border-radius: 999px;
          background: transparent;
          color: rgba(255, 255, 255, 0.82);
          padding: 0.52rem 0.75rem;
          cursor: pointer;
          transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
        }

        .auth-mode-btn.active {
          background: rgba(34, 211, 238, 0.16);
          border-color: rgba(34, 211, 238, 0.72);
          color: #ffffff;
        }

        .auth-form-group {
          position: relative;
        }

        .auth-form-group label {
          display: block;
          color: rgba(255, 255, 255, 0.78);
          font-size: 0.78rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .auth-form-group input {
          width: 100%;
          border: 0;
          border-bottom: 2px solid var(--auth-line);
          border-radius: 0;
          background: transparent;
          color: #ffffff;
          outline: none;
          padding: 0.72rem 2.1rem 0.72rem 0;
          font-size: 0.9rem;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .auth-form-group input:focus {
          border-color: var(--auth-accent);
          box-shadow: 0 10px 16px -16px rgba(34, 211, 238, 0.95);
        }

        .auth-form-group input::placeholder {
          color: rgba(255, 255, 255, 0.44);
        }

        .input-icon {
          position: absolute;
          right: 0.1rem;
          bottom: 0.78rem;
          color: rgba(255, 255, 255, 0.62);
          font-size: 0.95rem;
        }

        .auth-btn {
          width: 100%;
          margin-top: 1.35rem;
          border: 1px solid rgba(34, 211, 238, 0.45);
          border-radius: 999px;
          background: linear-gradient(135deg, var(--auth-primary), var(--auth-accent));
          color: #ffffff;
          box-shadow: 0 8px 20px rgba(34, 211, 238, 0.2), inset 0 -8px 14px rgba(0, 31, 63, 0.22);
          cursor: pointer;
          font-size: 0.92rem;
          font-weight: 800;
          padding: 0.78rem 1rem;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .auth-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 12px 26px rgba(34, 211, 238, 0.28), inset 0 -8px 14px rgba(0, 31, 63, 0.2);
        }

        .auth-footer {
          margin-top: 1rem;
          color: rgba(255, 255, 255, 0.72);
          font-size: 0.8rem;
          text-align: center;
        }

        .auth-link-button {
          border: 0;
          background: transparent;
          color: var(--auth-accent);
          cursor: pointer;
          font-weight: 800;
          padding: 0.15rem 0.2rem;
        }

        .auth-welcome-panel {
          position: absolute;
          top: 0;
          width: 50%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem;
          color: #ffffff;
          background:
            linear-gradient(135deg, rgba(0, 51, 102, 0.94), rgba(34, 211, 238, 0.72)),
            radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.2), transparent 14rem);
          transition: transform 0.75s ease, opacity 0.75s ease, filter 0.75s ease;
          z-index: 1;
        }

        .auth-welcome-panel::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(132deg, transparent 0 46%, rgba(0, 31, 63, 0.78) 46% 100%);
        }

        .auth-welcome-panel.login-side {
          right: 0;
        }

        .auth-welcome-panel.register-side {
          left: 0;
          transform: translateX(-120%);
          opacity: 0;
          filter: blur(10px);
        }

        .auth-shell.show-register .auth-welcome-panel.login-side {
          transform: translateX(120%);
          opacity: 0;
          filter: blur(10px);
        }

        .auth-shell.show-register .auth-welcome-panel.register-side {
          transform: translateX(0);
          opacity: 1;
          filter: blur(0);
        }

        .auth-welcome-content {
          position: relative;
          z-index: 1;
          max-width: 18rem;
          text-align: center;
        }

        .auth-welcome-content h2 {
          margin: 0 0 0.7rem;
          font-size: 2rem;
          line-height: 1.1;
          font-weight: 900;
          letter-spacing: 0;
        }

        .auth-welcome-content p {
          margin: 0;
          color: rgba(255, 255, 255, 0.82);
          font-size: 0.93rem;
          line-height: 1.65;
        }

        @keyframes authShellIn {
          from { opacity: 0; transform: translateY(18px) scale(0.98); filter: blur(8px); }
          to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }

        @media (max-width: 800px) {
          .auth-page {
            align-items: flex-start;
          }

          .auth-shell {
            min-height: 760px;
          }

          .auth-form-box,
          .auth-welcome-panel {
            width: 100%;
          }

          .auth-form-box {
            height: 70%;
            bottom: 0;
            top: auto;
            padding: 2rem 1.5rem;
          }

          .auth-form-box.login,
          .auth-form-box.register {
            left: 0;
            right: auto;
          }

          .auth-form-box.register {
            transform: translateX(120%);
          }

          .auth-welcome-panel {
            height: 30%;
            top: 0;
            padding: 1.6rem;
          }

          .auth-welcome-panel.login-side,
          .auth-welcome-panel.register-side {
            left: 0;
            right: auto;
          }

          .auth-welcome-panel.register-side {
            transform: translateX(-120%);
          }
        }
      `}),n.jsxs("div",{className:"auth-page",children:[n.jsx("button",{type:"button",className:"auth-back",onClick:()=>a("/"),children:"Back"}),n.jsxs("div",{className:`auth-shell ${l==="register"?"show-register":""}`,children:[n.jsx("div",{className:"auth-form-box login",children:n.jsxs("div",{className:"auth-card",children:[n.jsx("h1",{className:"auth-title",children:d==="student"?"Student Login":"Admin Login"}),n.jsx("p",{className:"auth-sub",children:d==="student"?"Access your dashboard, courses, and progress.":"Manage courses, modules, materials, and students."}),n.jsxs("div",{className:"auth-mode-row",children:[n.jsx("button",{type:"button",onClick:()=>u("student"),className:`auth-mode-btn ${d==="student"?"active":""}`,children:"Student"}),n.jsx("button",{type:"button",onClick:()=>u("admin"),className:`auth-mode-btn ${d==="admin"?"active":""}`,children:"Admin"})]}),n.jsxs("form",{onSubmit:I,children:[n.jsxs("div",{className:"auth-form-group",children:[n.jsx("label",{children:d==="student"?"Email":"Username"}),n.jsx("input",{type:d==="student"?"email":"text",name:"email",required:!0,value:p.email,onChange:C}),n.jsx("span",{className:"input-icon",children:n.jsx(U,{icon:Nl})})]}),n.jsxs("div",{className:"auth-form-group",style:{marginTop:"0.95rem"},children:[n.jsx("label",{children:"Password"}),n.jsx("input",{type:"password",name:"password",required:!0,value:p.password,onChange:C}),n.jsx("span",{className:"input-icon",children:n.jsx(U,{icon:Cl})})]}),n.jsx("button",{className:"auth-btn",type:"submit",children:x?"Logging in...":"Login"})]}),n.jsxs("div",{className:"auth-footer",children:["Do not have an account?"," ",n.jsx("button",{type:"button",className:"auth-link-button",onClick:()=>s("register"),children:"Sign Up"})]})]})}),n.jsx("div",{className:"auth-form-box register",children:n.jsxs("div",{className:"auth-card",children:[n.jsx("h1",{className:"auth-title",children:"Create Account"}),n.jsx("p",{className:"auth-sub",children:"Register once, then you can join and manage multiple courses."}),n.jsxs("form",{onSubmit:A,children:[n.jsxs("div",{className:"auth-form-group",children:[n.jsx("label",{children:"Full Name"}),n.jsx("input",{type:"text",name:"full_name",required:!0,value:b.full_name,onChange:_}),n.jsx("span",{className:"input-icon",children:n.jsx(U,{icon:Ui})})]}),n.jsxs("div",{className:"auth-form-group",style:{marginTop:"0.85rem"},children:[n.jsx("label",{children:"Email"}),n.jsx("input",{type:"email",name:"email",required:!0,value:b.email,onChange:_}),n.jsx("span",{className:"input-icon",children:n.jsx(U,{icon:Nl})})]}),n.jsxs("div",{className:"auth-form-group",style:{marginTop:"0.85rem"},children:[n.jsx("label",{children:"Phone"}),n.jsx("input",{type:"text",name:"phone",required:!0,value:b.phone,onChange:_}),n.jsx("span",{className:"input-icon",children:n.jsx(U,{icon:hp})})]}),n.jsxs("div",{className:"auth-form-group",style:{marginTop:"0.85rem"},children:[n.jsx("label",{children:"Password"}),n.jsx("input",{type:"password",name:"password",required:!0,value:b.password,onChange:_}),n.jsx("span",{className:"input-icon",children:n.jsx(U,{icon:Cl})})]}),n.jsx("button",{className:"auth-btn",type:"submit",children:g?"Creating account...":"Register"})]}),n.jsxs("div",{className:"auth-footer",children:["Already have an account?"," ",n.jsx("button",{type:"button",className:"auth-link-button",onClick:()=>s("login"),children:"Sign In"})]})]})}),n.jsx("div",{className:"auth-welcome-panel login-side",children:n.jsxs("div",{className:"auth-welcome-content",children:[n.jsx("h2",{children:"WELCOME BACK!"}),n.jsx("p",{children:"We are happy to have you with us again. Continue learning, building, and tracking your progress."})]})}),n.jsx("div",{className:"auth-welcome-panel register-side",children:n.jsxs("div",{className:"auth-welcome-content",children:[n.jsx("h2",{children:"WELCOME!"}),n.jsx("p",{children:"Create your Stekora Tech account and keep your services, courses, and support in one place."})]})})]})]})]})}function q3({productId:a,addToCart:l,goTo:s}){const[d,u]=N.useState(null),[p,h]=N.useState(!0),[b,f]=N.useState(""),[x,v]=N.useState(null);return N.useEffect(()=>{async function g(){try{h(!0),f(""),u(await b3(a))}catch(y){console.error(y),f(y.message||"Failed to load product")}finally{h(!1)}}g()},[a]),n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
        .product-details-page{min-height:100vh;background:#f5f5f5;padding:2.5rem 1rem;color:#003366}
        .product-details-container{max-width:68rem;margin:0 auto}
        .product-back{border:0;background:transparent;color:#003366;font-weight:800;cursor:pointer;margin-bottom:1rem}
        .product-details-card{display:grid;grid-template-columns:1fr;gap:2rem;background:#fff;border-radius:18px;padding:1.5rem;border:1px solid #e2e8f0;box-shadow:0 16px 36px rgba(15,23,42,.08)}
        .product-details-image{width:100%;height:360px;object-fit:contain;border-radius:14px;background:#f1f5f9}
        .product-details-badge{display:inline-block;background:#fff4dc;color:#92400e;border-radius:999px;padding:.4rem .75rem;font-size:.8rem;font-weight:800}
        .product-details-title{font-size:2rem;margin:.8rem 0 .5rem}
        .product-details-price{font-size:1.8rem;font-weight:900;margin:1rem 0}
        .product-details-text{color:#526175;line-height:1.75;white-space:pre-wrap}
        .product-details-stock{font-weight:800;margin:.8rem 0}
        .product-details-actions{display:flex;gap:.75rem;flex-wrap:wrap;margin-top:1.2rem}
        .product-details-actions button{border:0;border-radius:9px;padding:.8rem 1.1rem;font-weight:800;cursor:pointer}
        .product-add-cart{background:#003366;color:#fff}.product-contact{background:#e7f5f3;color:#0f766e}
        @media(min-width:760px){.product-details-card{grid-template-columns:1fr 1fr}.product-details-image{height:100%;min-height:420px}}
      `}),n.jsx(Xl,{product:x,goTo:s,onClose:()=>v(null)}),n.jsx("div",{className:"product-details-page",children:n.jsxs("div",{className:"product-details-container",children:[n.jsxs("button",{className:"product-back",onClick:()=>s("/shop"),children:[n.jsx(U,{icon:es})," Back to shop"]}),p&&n.jsx("p",{children:"Loading product..."}),b&&n.jsx("p",{children:b}),!p&&!b&&d&&n.jsxs("article",{className:"product-details-card",children:[n.jsx("div",{children:d.image_url&&n.jsx("img",{className:"product-details-image",src:ct(d.image_url),alt:d.title})}),n.jsxs("div",{children:[n.jsx("span",{className:"product-details-badge",children:d.category||"Product"}),n.jsx("h1",{className:"product-details-title",children:d.title}),n.jsx("p",{className:"product-details-text",children:d.description}),n.jsxs("div",{className:"product-details-price",children:["R",Number(d.price||0).toFixed(2)]}),n.jsx("div",{className:"product-details-stock",children:"Stock available"}),d.full_description&&n.jsxs(n.Fragment,{children:[n.jsx("h3",{children:"Full details"}),n.jsx("p",{className:"product-details-text",children:d.full_description})]}),d.specifications&&n.jsxs(n.Fragment,{children:[n.jsx("h3",{children:"Specifications"}),n.jsx("p",{className:"product-details-text",children:d.specifications})]}),n.jsx("div",{className:"product-details-actions",children:n.jsxs("button",{className:"product-add-cart",onClick:()=>{l(d),v(d)},children:[n.jsx(U,{icon:yr})," Add to cart"]})})]})]})]})})]})}const Y3="/assets/web-CNkSwHlc.jpg",G3="/assets/internet_of_things-DznkTOlq.jpg",X3="/assets/automation-B_NT-eam.jpg",K3="/assets/camera-Bgqatu1H.jpg",J3="/assets/network-7wtnhT_7.jpg",Z3=[{icon:nv,title:"Web & Cloud Development",desc:"Modern web apps, dashboards and APIs with secure admin panels and scalable infrastructure.",image:Y3,details:"We design and build responsive websites, business dashboards, booking systems, admin portals, APIs, and cloud-ready applications. Our work includes planning the user flow, developing the frontend and backend, connecting databases, securing accounts, and preparing the system so it can grow with your business."},{icon:hv,title:"Embedded & IoT Prototyping",desc:"From Arduino and microcontrollers to production-ready hardware integrations.",image:G3,details:"We help turn hardware ideas into working prototypes using microcontrollers, sensors, displays, relays, and connected devices. This includes circuit planning, firmware programming, device testing, data collection, and connecting IoT devices to web dashboards or mobile-friendly monitoring tools."},{icon:Hx,title:"Automation & Integration",desc:"Connect systems, automate workflows, and build custom internal tools for your team.",image:X3,details:"We automate repetitive business tasks and connect separate systems so information moves faster with fewer mistakes. This can include custom forms, reports, notifications, data sync, stock or client tracking tools, and integrations between websites, databases, spreadsheets, and third-party platforms."},{icon:Jx,title:"CCTV Installation & Smart Surveillance",desc:"Professional camera installation, monitoring setup, access control, and smart security systems for homes and businesses.",image:K3,details:"We plan and install CCTV systems for homes, shops, offices, and business sites. Our service can include camera placement, cabling, DVR/NVR setup, mobile viewing, recording configuration, access control support, troubleshooting, and guidance on keeping your surveillance system reliable."},{icon:ev,title:"Networking, Computer Maintenance & IT Support",desc:"Network setup, troubleshooting, computer repairs, software support, upgrades, and reliable ongoing technical assistance.",image:J3,details:"We set up and maintain office and home networks, troubleshoot internet and Wi-Fi issues, repair and optimize computers, install software, upgrade systems, remove common technical blockers, and provide ongoing support so your devices and team can keep working smoothly."},{icon:pv,title:"Graphic Design & Digital Solutions",desc:"Clean brand visuals, promotional designs, digital content, websites, and business tools that help your work look professional.",image:_p,details:"We create clean digital designs for brands, social media, posters, flyers, business profiles, product promotions, and online campaigns. We also support digital business tools like landing pages, simple websites, forms, and branded content that helps your work look professional."}];function e4(){const[a,l]=N.useState(null);return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
        :root {
          --bg-gray: #f5f5f5;
          --yellow: #facc15;
          --blue: #3b82f6;
          --richblue: #003366;
          --text-dark: #0f172a;
          --text-muted: #64748b;
        }

        .services-section {
          background-color: var(--bg-gray);
          padding: 3.5rem 1rem;
          min-height: 70vh;
        }

        .services-container {
          max-width: 72rem;
          margin: 0 auto;
        }

        .services-title {
          font-size: 1.875rem;
          font-weight: 700;
          color: var(--text-dark);
          margin: 0 0 0.5rem;
        }

        .services-subtitle {
          font-size: 0.875rem;
          color: var(--text-muted);
          margin: 0 0 2.5rem;
          max-width: 40rem;
          line-height: 1.7;
        }

        .services-grid {
          display: grid;
          gap: 1.5rem;
        }

        .service-card {
          background: #ffffff;
          border-radius: 0.5rem;
          padding: 2rem;
          text-align: center;
          border-top: 4px solid var(--blue);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 35px rgba(0, 0, 0, 0.12);
        }

        .service-icon {
          font-size: 2rem;
          color: var(--blue);
          margin-bottom: 1rem;
        }

        .service-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text-dark);
          margin: 0 0 0.75rem;
        }

        .service-desc {
          font-size: 0.875rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
        }

        .service-learn-btn {
          margin-top: 1.25rem;
          border: none;
          border-radius: 999px;
          background: var(--blue);
          color: #ffffff;
          cursor: pointer;
          font-size: 0.85rem;
          font-weight: 700;
          padding: 0.7rem 1.15rem;
          transition: background 0.25s ease, transform 0.25s ease;
        }

        .service-learn-btn:hover {
          background: var(--richblue);
          color: #ffffff;
          transform: translateY(-1px);
        }

        .service-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 80;
          background: rgba(0, 31, 63, 0.56);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .service-modal {
          width: min(620px, 100%);
          background: #ffffff;
          border-radius: 0.5rem;
          border: 1px solid rgba(34, 211, 238, 0.35);
          box-shadow: 0 24px 60px rgba(0, 31, 63, 0.28);
          overflow: hidden;
        }

        .service-modal-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          background: var(--richblue);
          color: #ffffff;
          padding: 1.35rem 1.5rem;
        }

        .service-modal-title {
          margin: 0;
          font-size: 1.25rem;
          font-weight: 800;
          line-height: 1.25;
        }

        .service-modal-close {
          width: 34px;
          height: 34px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.35);
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
          cursor: pointer;
          font-size: 1.25rem;
          line-height: 1;
          flex: 0 0 auto;
        }

        .service-modal-image {
          width: 100%;
          aspect-ratio: 16 / 8;
          object-fit: cover;
          display: block;
          background: #e2e8f0;
        }

        .service-modal-body {
          padding: 1.5rem;
        }

        .service-modal-icon {
          color: #22d3ee;
          font-size: 1.6rem;
          margin-bottom: 0.9rem;
        }

        .service-modal-text {
          margin: 0;
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.7;
        }

        @media (min-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}),n.jsx("section",{className:"services-section",children:n.jsxs("div",{className:"services-container",children:[n.jsx("h1",{className:"services-title",children:"IT Services"}),n.jsx("p",{className:"services-subtitle",children:"Stekora Tech delivers end-to-end IT solutions tailored to your projects."}),n.jsx("div",{className:"services-grid",children:Z3.map(s=>n.jsxs("div",{className:"service-card",children:[n.jsx(U,{icon:s.icon,className:"service-icon"}),n.jsx("h2",{className:"service-title",children:s.title}),n.jsx("p",{className:"service-desc",children:s.desc}),n.jsx("button",{type:"button",className:"service-learn-btn",onClick:()=>l(s),children:"Learn More"})]},s.title))})]})}),a&&n.jsx("div",{className:"service-modal-backdrop",role:"presentation",onClick:()=>l(null),children:n.jsxs("section",{className:"service-modal",role:"dialog","aria-modal":"true","aria-labelledby":"service-modal-title",onClick:s=>s.stopPropagation(),children:[n.jsxs("div",{className:"service-modal-header",children:[n.jsx("h2",{className:"service-modal-title",id:"service-modal-title",children:a.title}),n.jsx("button",{type:"button",className:"service-modal-close","aria-label":"Close service details",onClick:()=>l(null),children:"×"})]}),n.jsx("img",{className:"service-modal-image",src:a.image,alt:""}),n.jsxs("div",{className:"service-modal-body",children:[n.jsx(U,{icon:a.icon,className:"service-modal-icon"}),n.jsx("p",{className:"service-modal-text",children:a.details})]})]})})]})}function t4({goTo:a,addToCart:l}){const[s,d]=N.useState([]),[u,p]=N.useState(!0),[h,b]=N.useState(""),[f,x]=N.useState(""),[v,g]=N.useState(""),[y,C]=N.useState(null);N.useEffect(()=>{async function M(){try{p(!0),b("");const z=await Gl(),W=Array.isArray(z)?z:z.products||[];d(W)}catch(z){console.error(z),b("Failed to load products")}finally{p(!1)}}M()},[]);const _=s.filter(M=>{const z=M.name||M.title||"",W=M.description||"",F=f.trim().toLowerCase();return z.toLowerCase().includes(F)||W.toLowerCase().includes(F)}),I=M=>{if(typeof l!="function"){g("Cart is currently unavailable."),window.setTimeout(()=>g(""),2200);return}l(M),C(M),g(`${M.title||M.name||"Product"} added to cart.`),window.setTimeout(()=>{g("")},2200)},A=M=>{typeof a=="function"&&a(`/product/${M}`)};return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
        :root {
          --richblue: #003366;
          --palegray: #f5f5f5;
          --lightgray: #9ca3af;
        }

        .shop-page {
          min-height: 100vh;
          background-color: var(--palegray);
          color: var(--richblue);
        }

        .shop-container {
          max-width: 72rem;
          margin: 0 auto;
          padding: 2.5rem 1rem;
        }

        .shop-title {
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 1rem;
        }

        .shop-search-input {
          padding: 0.5rem 0.75rem;
          border-radius: 0.5rem;
          border: 1px solid var(--lightgray);
          background: #ffffff;
          color: var(--richblue);
          font-size: 0.85rem;
          outline: none;
          width: 100%;
          max-width: 400px;
          margin-bottom: 2rem;
          box-sizing: border-box;
        }

        .shop-search-input:focus {
          border-color: var(--richblue);
        }

        .products-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          align-items: stretch;
        }

        .shop-product-card {
          background: #ffffff;
          border: 1px solid rgba(0, 51, 102, 0.14);
          border-radius: 0.75rem;
          padding: 1.25rem;
          box-shadow: 0 10px 24px rgba(0, 51, 102, 0.06);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          min-width: 0;
          overflow: hidden;
        }

        .shop-product-image-wrapper {
          width: 100%;
          height: 230px;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          border-radius: 0.75rem;
          border: 1px solid #dbe3ec;
          background: #f8fafc;
          padding: 0.75rem;
          box-sizing: border-box;
        }

        .shop-product-image {
          display: block;
          width: 100%;
          height: 100%;
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          object-position: center;
          border-radius: 0.5rem;
        }

        .shop-product-image-placeholder {
          width: 100%;
          height: 230px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 0.75rem;
          border: 1px dashed #cbd5e1;
          background: #f8fafc;
          color: #94a3b8;
          font-size: 0.85rem;
        }

        .shop-product-badge {
          align-self: flex-start;
          background: #fff4dc;
          color: #92400e;
          border-radius: 999px;
          padding: 0.35rem 0.65rem;
          font-size: 0.75rem;
          font-weight: 800;
        }

        .shop-product-title {
          margin: 0;
          color: var(--richblue);
          font-size: 1.1rem;
          overflow-wrap: anywhere;
        }

        .shop-product-desc {
          margin: 0;
          color: #64748b;
          line-height: 1.6;
          font-size: 0.9rem;
          overflow-wrap: anywhere;
        }

        .shop-product-price {
          color: var(--richblue);
          font-size: 1.4rem;
        }

        .shop-product-actions {
          display: flex;
          gap: 0.6rem;
          margin-top: auto;
        }

        .shop-product-actions button {
          border: 0;
          background: #e7f5f3;
          color: #0f766e;
          border-radius: 8px;
          padding: 0.65rem 0.8rem;
          font-weight: 800;
          cursor: pointer;
          transition:
            transform 0.2s ease,
            background-color 0.2s ease;
        }

        .shop-product-actions button:hover {
          background: #d5efeb;
          transform: translateY(-1px);
        }

        .shop-product-actions .cart-btn {
          width: 42px;
          height: 42px;
          padding: 0;
          display: inline-flex;
          justify-content: center;
          align-items: center;
        }

        .status-text {
          font-size: 0.9rem;
          color: var(--lightgray);
          text-align: center;
          margin-top: 2rem;
        }

        .shop-notice {
          background: #dcfce7;
          color: #166534;
          border: 1px solid #86efac;
          border-radius: 8px;
          padding: 0.75rem 1rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .shop-empty-panel {
          background: #dfe4ea;
          border: 1px dashed var(--richblue);
          border-radius: 0.75rem;
          padding: 2rem;
          color: var(--richblue);
        }

        .shop-empty-panel h2 {
          margin-top: 0;
        }

        .shop-no-results {
          font-size: 0.9rem;
          color: var(--lightgray);
        }

        @media (min-width: 640px) {
          .products-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 900px) {
          .products-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 480px) {
          .shop-container {
            padding: 2rem 0.8rem;
          }

          .shop-product-card {
            padding: 1rem;
          }

          .shop-product-image-wrapper,
          .shop-product-image-placeholder {
            height: 210px;
          }

          .shop-product-actions {
            width: 100%;
          }

          .shop-product-actions > button:first-child {
            flex: 1;
          }
        }
      `}),n.jsx(Xl,{product:y,goTo:a,onClose:()=>C(null)}),n.jsx("div",{className:"shop-page",children:n.jsxs("div",{className:"shop-container",children:[n.jsx("h1",{className:"shop-title",children:"Shop"}),n.jsx("input",{type:"text",className:"shop-search-input",placeholder:"Search products...",value:f,onChange:M=>x(M.target.value)}),v&&n.jsx("div",{className:"shop-notice",children:v}),u&&n.jsx("p",{className:"status-text",children:"Loading products..."}),h&&n.jsx("p",{className:"status-text",children:h}),!u&&!h&&_.length>0&&n.jsx("div",{className:"products-grid",children:_.map(M=>{const z=M.name||M.title||"Product",W=M.price!==void 0&&M.price!==null&&M.price!==""?`${Number(M.price).toLocaleString("en-RW",{minimumFractionDigits:2,maximumFractionDigits:2})} RWF`:"Contact us",F=M.image_url?ct(M.image_url):"";return n.jsxs("article",{className:"shop-product-card",children:[F?n.jsx("div",{className:"shop-product-image-wrapper",children:n.jsx("img",{className:"shop-product-image",src:F,alt:z,loading:"lazy",onError:D=>{D.currentTarget.style.display="none",D.currentTarget.parentElement.innerHTML='<span style="color:#94a3b8;font-size:0.85rem;">Image unavailable</span>'}})}):n.jsx("div",{className:"shop-product-image-placeholder",children:"No product image"}),n.jsx("span",{className:"shop-product-badge",children:M.category||"Product"}),n.jsx("h2",{className:"shop-product-title",children:z}),n.jsx("p",{className:"shop-product-desc",children:M.description||"Quality Stekora Tech product or service package."}),n.jsx("strong",{className:"shop-product-price",children:W}),n.jsxs("div",{className:"shop-product-actions",children:[n.jsx("button",{type:"button",onClick:()=>A(M.id),children:"Details"}),n.jsx("button",{type:"button",className:"cart-btn",onClick:()=>I(M),"aria-label":`Add ${z} to cart`,title:"Add to cart",children:n.jsx(U,{icon:yr})})]})]},M.id||z)})}),!u&&!h&&s.length===0&&n.jsxs("div",{className:"shop-empty-panel",children:[n.jsx("h2",{children:"No product posted yet"}),n.jsx("p",{children:"We're preparing products and services for the shop. Please check back soon."}),n.jsx("span",{children:"Email: info@stekoratech.com"})]}),!u&&!h&&s.length>0&&_.length===0&&n.jsxs("p",{className:"shop-no-results",children:["No matching products found for"," ",n.jsx("span",{style:{color:"#003366"},children:f})]})]})})]})}var n4=Object.defineProperty,Yi=Object.getOwnPropertySymbols,Lp=Object.prototype.hasOwnProperty,Mp=Object.prototype.propertyIsEnumerable,Vf=(a,l,s)=>l in a?n4(a,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[l]=s,El=(a,l)=>{for(var s in l||(l={}))Lp.call(l,s)&&Vf(a,s,l[s]);if(Yi)for(var s of Yi(l))Mp.call(l,s)&&Vf(a,s,l[s]);return a},zl=(a,l)=>{var s={};for(var d in a)Lp.call(a,d)&&l.indexOf(d)<0&&(s[d]=a[d]);if(a!=null&&Yi)for(var d of Yi(a))l.indexOf(d)<0&&Mp.call(a,d)&&(s[d]=a[d]);return s};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var Dn;(a=>{const l=class ge{constructor(f,x,v,g){if(this.version=f,this.errorCorrectionLevel=x,this.modules=[],this.isFunction=[],f<ge.MIN_VERSION||f>ge.MAX_VERSION)throw new RangeError("Version value out of range");if(g<-1||g>7)throw new RangeError("Mask value out of range");this.size=f*4+17;let y=[];for(let _=0;_<this.size;_++)y.push(!1);for(let _=0;_<this.size;_++)this.modules.push(y.slice()),this.isFunction.push(y.slice());this.drawFunctionPatterns();const C=this.addEccAndInterleave(v);if(this.drawCodewords(C),g==-1){let _=1e9;for(let I=0;I<8;I++){this.applyMask(I),this.drawFormatBits(I);const A=this.getPenaltyScore();A<_&&(g=I,_=A),this.applyMask(I)}}u(0<=g&&g<=7),this.mask=g,this.applyMask(g),this.drawFormatBits(g),this.isFunction=[]}static encodeText(f,x){const v=a.QrSegment.makeSegments(f);return ge.encodeSegments(v,x)}static encodeBinary(f,x){const v=a.QrSegment.makeBytes(f);return ge.encodeSegments([v],x)}static encodeSegments(f,x,v=1,g=40,y=-1,C=!0){if(!(ge.MIN_VERSION<=v&&v<=g&&g<=ge.MAX_VERSION)||y<-1||y>7)throw new RangeError("Invalid value");let _,I;for(_=v;;_++){const W=ge.getNumDataCodewords(_,x)*8,F=h.getTotalBits(f,_);if(F<=W){I=F;break}if(_>=g)throw new RangeError("Data too long")}for(const W of[ge.Ecc.MEDIUM,ge.Ecc.QUARTILE,ge.Ecc.HIGH])C&&I<=ge.getNumDataCodewords(_,W)*8&&(x=W);let A=[];for(const W of f){s(W.mode.modeBits,4,A),s(W.numChars,W.mode.numCharCountBits(_),A);for(const F of W.getData())A.push(F)}u(A.length==I);const M=ge.getNumDataCodewords(_,x)*8;u(A.length<=M),s(0,Math.min(4,M-A.length),A),s(0,(8-A.length%8)%8,A),u(A.length%8==0);for(let W=236;A.length<M;W^=253)s(W,8,A);let z=[];for(;z.length*8<A.length;)z.push(0);return A.forEach((W,F)=>z[F>>>3]|=W<<7-(F&7)),new ge(_,x,z,y)}getModule(f,x){return 0<=f&&f<this.size&&0<=x&&x<this.size&&this.modules[x][f]}getModules(){return this.modules}drawFunctionPatterns(){for(let v=0;v<this.size;v++)this.setFunctionModule(6,v,v%2==0),this.setFunctionModule(v,6,v%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const f=this.getAlignmentPatternPositions(),x=f.length;for(let v=0;v<x;v++)for(let g=0;g<x;g++)v==0&&g==0||v==0&&g==x-1||v==x-1&&g==0||this.drawAlignmentPattern(f[v],f[g]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(f){const x=this.errorCorrectionLevel.formatBits<<3|f;let v=x;for(let y=0;y<10;y++)v=v<<1^(v>>>9)*1335;const g=(x<<10|v)^21522;u(g>>>15==0);for(let y=0;y<=5;y++)this.setFunctionModule(8,y,d(g,y));this.setFunctionModule(8,7,d(g,6)),this.setFunctionModule(8,8,d(g,7)),this.setFunctionModule(7,8,d(g,8));for(let y=9;y<15;y++)this.setFunctionModule(14-y,8,d(g,y));for(let y=0;y<8;y++)this.setFunctionModule(this.size-1-y,8,d(g,y));for(let y=8;y<15;y++)this.setFunctionModule(8,this.size-15+y,d(g,y));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let f=this.version;for(let v=0;v<12;v++)f=f<<1^(f>>>11)*7973;const x=this.version<<12|f;u(x>>>18==0);for(let v=0;v<18;v++){const g=d(x,v),y=this.size-11+v%3,C=Math.floor(v/3);this.setFunctionModule(y,C,g),this.setFunctionModule(C,y,g)}}drawFinderPattern(f,x){for(let v=-4;v<=4;v++)for(let g=-4;g<=4;g++){const y=Math.max(Math.abs(g),Math.abs(v)),C=f+g,_=x+v;0<=C&&C<this.size&&0<=_&&_<this.size&&this.setFunctionModule(C,_,y!=2&&y!=4)}}drawAlignmentPattern(f,x){for(let v=-2;v<=2;v++)for(let g=-2;g<=2;g++)this.setFunctionModule(f+g,x+v,Math.max(Math.abs(g),Math.abs(v))!=1)}setFunctionModule(f,x,v){this.modules[x][f]=v,this.isFunction[x][f]=!0}addEccAndInterleave(f){const x=this.version,v=this.errorCorrectionLevel;if(f.length!=ge.getNumDataCodewords(x,v))throw new RangeError("Invalid argument");const g=ge.NUM_ERROR_CORRECTION_BLOCKS[v.ordinal][x],y=ge.ECC_CODEWORDS_PER_BLOCK[v.ordinal][x],C=Math.floor(ge.getNumRawDataModules(x)/8),_=g-C%g,I=Math.floor(C/g);let A=[];const M=ge.reedSolomonComputeDivisor(y);for(let W=0,F=0;W<g;W++){let D=f.slice(F,F+I-y+(W<_?0:1));F+=D.length;const G=ge.reedSolomonComputeRemainder(D,M);W<_&&D.push(0),A.push(D.concat(G))}let z=[];for(let W=0;W<A[0].length;W++)A.forEach((F,D)=>{(W!=I-y||D>=_)&&z.push(F[W])});return u(z.length==C),z}drawCodewords(f){if(f.length!=Math.floor(ge.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let x=0;for(let v=this.size-1;v>=1;v-=2){v==6&&(v=5);for(let g=0;g<this.size;g++)for(let y=0;y<2;y++){const C=v-y,I=(v+1&2)==0?this.size-1-g:g;!this.isFunction[I][C]&&x<f.length*8&&(this.modules[I][C]=d(f[x>>>3],7-(x&7)),x++)}}u(x==f.length*8)}applyMask(f){if(f<0||f>7)throw new RangeError("Mask value out of range");for(let x=0;x<this.size;x++)for(let v=0;v<this.size;v++){let g;switch(f){case 0:g=(v+x)%2==0;break;case 1:g=x%2==0;break;case 2:g=v%3==0;break;case 3:g=(v+x)%3==0;break;case 4:g=(Math.floor(v/3)+Math.floor(x/2))%2==0;break;case 5:g=v*x%2+v*x%3==0;break;case 6:g=(v*x%2+v*x%3)%2==0;break;case 7:g=((v+x)%2+v*x%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[x][v]&&g&&(this.modules[x][v]=!this.modules[x][v])}}getPenaltyScore(){let f=0;for(let y=0;y<this.size;y++){let C=!1,_=0,I=[0,0,0,0,0,0,0];for(let A=0;A<this.size;A++)this.modules[y][A]==C?(_++,_==5?f+=ge.PENALTY_N1:_>5&&f++):(this.finderPenaltyAddHistory(_,I),C||(f+=this.finderPenaltyCountPatterns(I)*ge.PENALTY_N3),C=this.modules[y][A],_=1);f+=this.finderPenaltyTerminateAndCount(C,_,I)*ge.PENALTY_N3}for(let y=0;y<this.size;y++){let C=!1,_=0,I=[0,0,0,0,0,0,0];for(let A=0;A<this.size;A++)this.modules[A][y]==C?(_++,_==5?f+=ge.PENALTY_N1:_>5&&f++):(this.finderPenaltyAddHistory(_,I),C||(f+=this.finderPenaltyCountPatterns(I)*ge.PENALTY_N3),C=this.modules[A][y],_=1);f+=this.finderPenaltyTerminateAndCount(C,_,I)*ge.PENALTY_N3}for(let y=0;y<this.size-1;y++)for(let C=0;C<this.size-1;C++){const _=this.modules[y][C];_==this.modules[y][C+1]&&_==this.modules[y+1][C]&&_==this.modules[y+1][C+1]&&(f+=ge.PENALTY_N2)}let x=0;for(const y of this.modules)x=y.reduce((C,_)=>C+(_?1:0),x);const v=this.size*this.size,g=Math.ceil(Math.abs(x*20-v*10)/v)-1;return u(0<=g&&g<=9),f+=g*ge.PENALTY_N4,u(0<=f&&f<=2568888),f}getAlignmentPatternPositions(){if(this.version==1)return[];{const f=Math.floor(this.version/7)+2,x=this.version==32?26:Math.ceil((this.version*4+4)/(f*2-2))*2;let v=[6];for(let g=this.size-7;v.length<f;g-=x)v.splice(1,0,g);return v}}static getNumRawDataModules(f){if(f<ge.MIN_VERSION||f>ge.MAX_VERSION)throw new RangeError("Version number out of range");let x=(16*f+128)*f+64;if(f>=2){const v=Math.floor(f/7)+2;x-=(25*v-10)*v-55,f>=7&&(x-=36)}return u(208<=x&&x<=29648),x}static getNumDataCodewords(f,x){return Math.floor(ge.getNumRawDataModules(f)/8)-ge.ECC_CODEWORDS_PER_BLOCK[x.ordinal][f]*ge.NUM_ERROR_CORRECTION_BLOCKS[x.ordinal][f]}static reedSolomonComputeDivisor(f){if(f<1||f>255)throw new RangeError("Degree out of range");let x=[];for(let g=0;g<f-1;g++)x.push(0);x.push(1);let v=1;for(let g=0;g<f;g++){for(let y=0;y<x.length;y++)x[y]=ge.reedSolomonMultiply(x[y],v),y+1<x.length&&(x[y]^=x[y+1]);v=ge.reedSolomonMultiply(v,2)}return x}static reedSolomonComputeRemainder(f,x){let v=x.map(g=>0);for(const g of f){const y=g^v.shift();v.push(0),x.forEach((C,_)=>v[_]^=ge.reedSolomonMultiply(C,y))}return v}static reedSolomonMultiply(f,x){if(f>>>8||x>>>8)throw new RangeError("Byte out of range");let v=0;for(let g=7;g>=0;g--)v=v<<1^(v>>>7)*285,v^=(x>>>g&1)*f;return u(v>>>8==0),v}finderPenaltyCountPatterns(f){const x=f[1];u(x<=this.size*3);const v=x>0&&f[2]==x&&f[3]==x*3&&f[4]==x&&f[5]==x;return(v&&f[0]>=x*4&&f[6]>=x?1:0)+(v&&f[6]>=x*4&&f[0]>=x?1:0)}finderPenaltyTerminateAndCount(f,x,v){return f&&(this.finderPenaltyAddHistory(x,v),x=0),x+=this.size,this.finderPenaltyAddHistory(x,v),this.finderPenaltyCountPatterns(v)}finderPenaltyAddHistory(f,x){x[0]==0&&(f+=this.size),x.pop(),x.unshift(f)}};l.MIN_VERSION=1,l.MAX_VERSION=40,l.PENALTY_N1=3,l.PENALTY_N2=3,l.PENALTY_N3=40,l.PENALTY_N4=10,l.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],l.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],a.QrCode=l;function s(b,f,x){if(f<0||f>31||b>>>f)throw new RangeError("Value out of range");for(let v=f-1;v>=0;v--)x.push(b>>>v&1)}function d(b,f){return(b>>>f&1)!=0}function u(b){if(!b)throw new Error("Assertion error")}const p=class Re{constructor(f,x,v){if(this.mode=f,this.numChars=x,this.bitData=v,x<0)throw new RangeError("Invalid argument");this.bitData=v.slice()}static makeBytes(f){let x=[];for(const v of f)s(v,8,x);return new Re(Re.Mode.BYTE,f.length,x)}static makeNumeric(f){if(!Re.isNumeric(f))throw new RangeError("String contains non-numeric characters");let x=[];for(let v=0;v<f.length;){const g=Math.min(f.length-v,3);s(parseInt(f.substring(v,v+g),10),g*3+1,x),v+=g}return new Re(Re.Mode.NUMERIC,f.length,x)}static makeAlphanumeric(f){if(!Re.isAlphanumeric(f))throw new RangeError("String contains unencodable characters in alphanumeric mode");let x=[],v;for(v=0;v+2<=f.length;v+=2){let g=Re.ALPHANUMERIC_CHARSET.indexOf(f.charAt(v))*45;g+=Re.ALPHANUMERIC_CHARSET.indexOf(f.charAt(v+1)),s(g,11,x)}return v<f.length&&s(Re.ALPHANUMERIC_CHARSET.indexOf(f.charAt(v)),6,x),new Re(Re.Mode.ALPHANUMERIC,f.length,x)}static makeSegments(f){return f==""?[]:Re.isNumeric(f)?[Re.makeNumeric(f)]:Re.isAlphanumeric(f)?[Re.makeAlphanumeric(f)]:[Re.makeBytes(Re.toUtf8ByteArray(f))]}static makeEci(f){let x=[];if(f<0)throw new RangeError("ECI assignment value out of range");if(f<128)s(f,8,x);else if(f<16384)s(2,2,x),s(f,14,x);else if(f<1e6)s(6,3,x),s(f,21,x);else throw new RangeError("ECI assignment value out of range");return new Re(Re.Mode.ECI,0,x)}static isNumeric(f){return Re.NUMERIC_REGEX.test(f)}static isAlphanumeric(f){return Re.ALPHANUMERIC_REGEX.test(f)}getData(){return this.bitData.slice()}static getTotalBits(f,x){let v=0;for(const g of f){const y=g.mode.numCharCountBits(x);if(g.numChars>=1<<y)return 1/0;v+=4+y+g.bitData.length}return v}static toUtf8ByteArray(f){f=encodeURI(f);let x=[];for(let v=0;v<f.length;v++)f.charAt(v)!="%"?x.push(f.charCodeAt(v)):(x.push(parseInt(f.substring(v+1,v+3),16)),v+=2);return x}};p.NUMERIC_REGEX=/^[0-9]*$/,p.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,p.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let h=p;a.QrSegment=p})(Dn||(Dn={}));(a=>{(l=>{const s=class{constructor(u,p){this.ordinal=u,this.formatBits=p}};s.LOW=new s(0,1),s.MEDIUM=new s(1,0),s.QUARTILE=new s(2,3),s.HIGH=new s(3,2),l.Ecc=s})(a.QrCode||(a.QrCode={}))})(Dn||(Dn={}));(a=>{(l=>{const s=class{constructor(u,p){this.modeBits=u,this.numBitsCharCount=p}numCharCountBits(u){return this.numBitsCharCount[Math.floor((u+7)/17)]}};s.NUMERIC=new s(1,[10,12,14]),s.ALPHANUMERIC=new s(2,[9,11,13]),s.BYTE=new s(4,[8,16,16]),s.KANJI=new s(8,[8,10,12]),s.ECI=new s(7,[0,0,0]),l.Mode=s})(a.QrSegment||(a.QrSegment={}))})(Dn||(Dn={}));var hr=Dn;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var r4={L:hr.QrCode.Ecc.LOW,M:hr.QrCode.Ecc.MEDIUM,Q:hr.QrCode.Ecc.QUARTILE,H:hr.QrCode.Ecc.HIGH},Ip=128,Tp="L",Fp="#FFFFFF",Op="#000000",Rp=!1,Dp=1,a4=4,i4=0,s4=.1;function $p(a,l=0){const s=[];return a.forEach(function(d,u){let p=null;d.forEach(function(h,b){if(!h&&p!==null){s.push(`M${p+l} ${u+l}h${b-p}v1H${p+l}z`),p=null;return}if(b===d.length-1){if(!h)return;p===null?s.push(`M${b+l},${u+l} h1v1H${b+l}z`):s.push(`M${p+l},${u+l} h${b+1-p}v1H${p+l}z`);return}h&&p===null&&(p=b)})}),s.join("")}function Up(a,l){return a.slice().map((s,d)=>d<l.y||d>=l.y+l.h?s:s.map((u,p)=>p<l.x||p>=l.x+l.w?u:!1))}function o4(a,l,s,d){if(d==null)return null;const u=a.length+s*2,p=Math.floor(l*s4),h=u/l,b=(d.width||p)*h,f=(d.height||p)*h,x=d.x==null?a.length/2-b/2:d.x*h,v=d.y==null?a.length/2-f/2:d.y*h,g=d.opacity==null?1:d.opacity;let y=null;if(d.excavate){let _=Math.floor(x),I=Math.floor(v),A=Math.ceil(b+x-_),M=Math.ceil(f+v-I);y={x:_,y:I,w:A,h:M}}const C=d.crossOrigin;return{x,y:v,h:f,w:b,excavation:y,opacity:g,crossOrigin:C}}function l4(a,l){return l!=null?Math.max(Math.floor(l),0):a?a4:i4}function Wp({value:a,level:l,minVersion:s,includeMargin:d,marginSize:u,imageSettings:p,size:h,boostLevel:b}){let f=Fe.useMemo(()=>{const _=(Array.isArray(a)?a:[a]).reduce((I,A)=>(I.push(...hr.QrSegment.makeSegments(A)),I),[]);return hr.QrCode.encodeSegments(_,r4[l],s,void 0,void 0,b)},[a,l,s,b]);const{cells:x,margin:v,numCells:g,calculatedImageSettings:y}=Fe.useMemo(()=>{let C=f.getModules();const _=l4(d,u),I=C.length+_*2,A=o4(C,h,_,p);return{cells:C,margin:_,numCells:I,calculatedImageSettings:A}},[f,h,p,d,u]);return{qrcode:f,margin:v,cells:x,numCells:g,calculatedImageSettings:y}}var c4=(function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0})(),d4=Fe.forwardRef(function(l,s){const d=l,{value:u,size:p=Ip,level:h=Tp,bgColor:b=Fp,fgColor:f=Op,includeMargin:x=Rp,minVersion:v=Dp,boostLevel:g,marginSize:y,imageSettings:C}=d,I=zl(d,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:A}=I,M=zl(I,["style"]),z=C==null?void 0:C.src,W=Fe.useRef(null),F=Fe.useRef(null),D=Fe.useCallback(Se=>{W.current=Se,typeof s=="function"?s(Se):s&&(s.current=Se)},[s]),[G,ne]=Fe.useState(!1),{margin:de,cells:X,numCells:ce,calculatedImageSettings:pe}=Wp({value:u,level:h,minVersion:v,boostLevel:g,includeMargin:x,marginSize:y,imageSettings:C,size:p});Fe.useEffect(()=>{if(W.current!=null){const Se=W.current,je=Se.getContext("2d");if(!je)return;let Ne=X;const xe=F.current,k=pe!=null&&xe!==null&&xe.complete&&xe.naturalHeight!==0&&xe.naturalWidth!==0;k&&pe.excavation!=null&&(Ne=Up(X,pe.excavation));const R=window.devicePixelRatio||1;Se.height=Se.width=p*R;const P=p/ce*R;je.scale(P,P),je.fillStyle=b,je.fillRect(0,0,ce,ce),je.fillStyle=f,c4?je.fill(new Path2D($p(Ne,de))):X.forEach(function(w,$){w.forEach(function(le,H){le&&je.fillRect(H+de,$+de,1,1)})}),pe&&(je.globalAlpha=pe.opacity),k&&je.drawImage(xe,pe.x+de,pe.y+de,pe.w,pe.h)}}),Fe.useEffect(()=>{ne(!1)},[z]);const fe=El({height:p,width:p},A);let ye=null;return z!=null&&(ye=Fe.createElement("img",{src:z,key:z,style:{display:"none"},onLoad:()=>{ne(!0)},ref:F,crossOrigin:pe==null?void 0:pe.crossOrigin})),Fe.createElement(Fe.Fragment,null,Fe.createElement("canvas",El({style:fe,height:p,width:p,ref:D,role:"img"},M)),ye)});d4.displayName="QRCodeCanvas";var Hp=Fe.forwardRef(function(l,s){const d=l,{value:u,size:p=Ip,level:h=Tp,bgColor:b=Fp,fgColor:f=Op,includeMargin:x=Rp,minVersion:v=Dp,boostLevel:g,title:y,marginSize:C,imageSettings:_}=d,I=zl(d,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:A,cells:M,numCells:z,calculatedImageSettings:W}=Wp({value:u,level:h,minVersion:v,boostLevel:g,includeMargin:x,marginSize:C,imageSettings:_,size:p});let F=M,D=null;_!=null&&W!=null&&(W.excavation!=null&&(F=Up(M,W.excavation)),D=Fe.createElement("image",{href:_.src,height:W.h,width:W.w,x:W.x+A,y:W.y+A,preserveAspectRatio:"none",opacity:W.opacity,crossOrigin:W.crossOrigin}));const G=$p(F,A);return Fe.createElement("svg",El({height:p,width:p,viewBox:`0 0 ${z} ${z}`,ref:s,role:"img"},I),!!y&&Fe.createElement("title",null,y),Fe.createElement("path",{fill:b,d:`M0,0 h${z}v${z}H0z`,shapeRendering:"crispEdges"}),Fe.createElement("path",{fill:f,d:G,shapeRendering:"crispEdges"}),D)});Hp.displayName="QRCodeSVG";const u4="/assets/certificate-template-XksKyxt5.png";function f4(a){return a?new Date(a).toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"}):""}function Bp({studentName:a,courseName:l,certificateCode:s,issuedDate:d,verificationUrl:u}){return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
        .stekora-certificate {
          position: relative;
          width: 100%;
          height: 100%;
          aspect-ratio: 1448 / 1086;
          container-type: inline-size;
          overflow: hidden;
          background: #ffffff;
          color: #0b2857;
          font-family: Arial, Helvetica, sans-serif;
        }

        .stekora-certificate-template {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: fill;
          user-select: none;
          pointer-events: none;
        }

        .stekora-certificate-name,
        .stekora-certificate-course,
        .stekora-certificate-date,
        .stekora-certificate-id,
        .stekora-certificate-motto,
        .stekora-certificate-qr {
          position: absolute;
          z-index: 2;
        }

        .stekora-certificate-name {
          top: 40.2%;
          left: 24.3%;
          width: 51.4%;
          height: 7.4%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #c68b09;
          font-family: "Bookman Old Style", "Segoe Script", cursive;
          font-size: 4.55cqw;
          font-weight: 400;
          line-height: 1;
          text-align: center;
          text-transform: capitalize;
          white-space: nowrap;
        }

        .stekora-certificate-course {
          top: 54.6%;
          left: 24.5%;
          width: 51%;
          min-height: 5%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #102f68;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 2.75cqw;
          font-weight: 800;
          line-height: 1.1;
          text-align: center;
        }

        .stekora-certificate-date {
          top: 72.4%;
          left: 19.5%;
          width: 13.5%;
          color: #102a58;
          font-size: 1.58cqw;
          font-weight: 500;
          text-align: center;
          white-space: nowrap;
        }

        .stekora-certificate-id {
          top: 72.9%;
          left: 61.3%;
          width: 15.3%;
          color: #102a58;
          font-size: 1.50cqw;
          font-weight: 500;
          overflow-wrap: anywhere;
          text-align: center;
          white-space: nowrap;
        }

        .stekora-certificate-motto {
          top: 72.1%;
          left: 38%;
          width: 18.7%;
          height: 10.8%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #102a58;
          font-size: 1.22cqw;
          font-weight: 700;
          line-height: 1.45;
          text-align: center;
          white-space: pre-line;
        }

        .stekora-certificate-qr {
          top: 66.4%;
          left: 80.25%;
          width: 8.2%;
          aspect-ratio: 1;
          display: grid;
          place-items: center;
          padding: 0.35%;
          background: #ffffff;
        }

        .stekora-certificate-qr svg {
          width: 100%;
          height: 100%;
        }

        @media print {
  html, body {
    width: 100%;
    height: 100%;
    margin: 0 !important;
    padding: 0 !important;
    background: white !important;
  }

  body * {
    visibility: hidden !important;
  }

  .stekora-certificate-print,
  .stekora-certificate-print * {
    visibility: visible !important;
  }

  .stekora-certificate-print {
    position: fixed !important;
    inset: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    aspect-ratio: auto !important;
    margin: 0 !important;
    padding: 0 !important;
    box-shadow: none !important;
    overflow: hidden !important;
  }

  .stekora-certificate-template {
    width: 100% !important;
    height: 100% !important;
    object-fit: fill !important;
  }

  @page {
    size: A4 landscape;
    margin: 0;
  }

        }
      `}),n.jsxs("div",{className:"stekora-certificate stekora-certificate-print",children:[n.jsx("img",{className:"stekora-certificate-template",src:u4,alt:""}),n.jsx("div",{className:"stekora-certificate-name",children:a}),n.jsx("div",{className:"stekora-certificate-course",children:l}),n.jsx("div",{className:"stekora-certificate-date",children:f4(d)}),n.jsx("div",{className:"stekora-certificate-id",children:s}),n.jsx("div",{className:"stekora-certificate-motto",children:`KEEP LEARNING
KEEP BUILDING
THE FUTURE`}),n.jsx("div",{className:"stekora-certificate-qr",children:n.jsx(Hp,{value:u,level:"M",marginSize:0})})]})]})}function m4(a){return ve(`/final-exam/questions/${a}`)}function p4(a,l){return ve(`/final-exam/questions/${a}`,{method:"POST",body:JSON.stringify(l)})}function h4(a){return ve(`/final-exam/questions/${a}`,{method:"DELETE"})}function Vp(){return ve("/final-exam/submissions")}function Qp(a,l){return ve(`/final-exam/submissions/${a}/review`,{method:"PATCH",body:JSON.stringify(l)})}function qp(a){return ve(`/final-exam/submissions/${a}/certificate`,{method:"POST",body:JSON.stringify({})})}function g4(a){return ve(`/final-exam/certificate/${a}`)}function x4({code:a}){const[l,s]=N.useState(null),[d,u]=N.useState(!0),[p,h]=N.useState("");N.useEffect(()=>{b()},[a]);async function b(){if(!a){h("Certificate code is missing"),u(!1);return}try{u(!0),h("");const f=await g4(a);s(f)}catch(f){console.error(f),h(f.message||"Certificate not found")}finally{u(!1)}}return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
        .verify-certificate-page {
          min-height: 100vh;
          padding: 2rem 1rem 4rem;
          background: #f4f6f9;
        }

        .verify-certificate-container {
          width: min(1180px, 100%);
          margin: 0 auto;
        }

        .verify-certificate-status {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1rem;
          padding: 1rem 1.15rem;
          border: 1px solid #dce4ed;
          border-radius: 8px;
          background: #ffffff;
          color: #10243f;
          flex-wrap: wrap;
        }

        .verify-certificate-result {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-weight: 900;
        }

        .verify-certificate-result.verified svg {
          color: #16a34a;
        }

        .verify-certificate-result.invalid svg {
          color: #dc2626;
        }

        .verify-certificate-print-button {
          min-height: 42px;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: 0;
          border-radius: 7px;
          padding: 0 0.85rem;
          background: #003366;
          color: #ffffff;
          cursor: pointer;
          font-weight: 800;
        }

        .verify-certificate-message {
          padding: 1rem;
          border: 1px dashed #94a3b8;
          border-radius: 8px;
          background: #ffffff;
          color: #64748b;
        }
      `}),n.jsx("main",{className:"verify-certificate-page",children:n.jsxs("div",{className:"verify-certificate-container",children:[d&&n.jsx("div",{className:"verify-certificate-message",children:"Checking certificate..."}),!d&&p&&n.jsx("div",{className:"verify-certificate-status",children:n.jsxs("div",{className:"verify-certificate-result invalid",children:[n.jsx(U,{icon:Zx}),p]})}),!d&&l&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"verify-certificate-status",children:[n.jsxs("div",{className:"verify-certificate-result verified",children:[n.jsx(U,{icon:mp}),"Verified certificate issued by Stekora Tech"]}),n.jsxs("button",{className:"verify-certificate-print-button",type:"button",onClick:()=>window.print(),children:[n.jsx(U,{icon:Gx}),"Print / Download PDF"]})]}),n.jsx(Bp,{studentName:l.studentName,courseName:l.courseName,certificateCode:l.certificateCode,issuedDate:l.issuedDate,verificationUrl:`${window.location.origin}${window.location.pathname}#/certificate/${l.certificateCode}`})]})]})})]})}const Qf=[["Overview","/admin",up,"Main"],["Courses","/admin/courses",wa,"Learning"],["Modules","/admin/modules",xp,"Learning"],["Materials","/admin/materials",fp,"Learning"],["Assessments","/admin/assessments",qx,"Learning"],["Final Exam","/admin/final-exam",dv,"Learning"],["Submissions","/admin/exam-submissions",lv,"Management"],["Students","/admin/students",Xx,"Management"],["Products","/admin/products",op,"Shop"],["Certificates","/admin/certificates",wr,"Management"],["Settings","/admin/settings",Bl,"System"]];function v4(){return window.location.hash.replace("#","")||"/admin"}function y4(){const a=v4(),l=d=>{window.location.hash=d},s=()=>{localStorage.removeItem("token"),localStorage.removeItem("adminName"),window.location.hash="/login"};return n.jsxs("aside",{className:"admin-sidebar",children:[n.jsxs("div",{className:"admin-sidebar-brand",children:[n.jsx("span",{className:"admin-sidebar-mark",children:"ST"}),n.jsxs("span",{children:[n.jsx("strong",{children:"Stekora Tech"}),n.jsx("small",{children:"Admin Account"})]})]}),n.jsxs("nav",{className:"admin-sidebar-nav",children:[Qf.map(([d,u,p,h],b)=>{const f=b>0?Qf[b-1][3]:null;return n.jsxs("div",{className:"admin-sidebar-item",children:[h!==f&&n.jsx("span",{className:"admin-sidebar-group",children:h}),n.jsxs("button",{type:"button",className:a===u?"active":"",onClick:()=>l(u),children:[n.jsx("span",{className:"admin-sidebar-icon",children:n.jsx(U,{icon:p})}),n.jsx("span",{children:d})]})]},d)}),n.jsx("div",{className:"admin-sidebar-item admin-sidebar-logout",children:n.jsxs("button",{type:"button",onClick:s,children:[n.jsx("span",{className:"admin-sidebar-icon",children:n.jsx(U,{icon:cp})}),n.jsx("span",{children:"Logout"})]})})]})]})}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b4=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Yp=(...a)=>a.filter((l,s,d)=>!!l&&l.trim()!==""&&d.indexOf(l)===s).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var w4={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j4=N.forwardRef(({color:a="currentColor",size:l=24,strokeWidth:s=2,absoluteStrokeWidth:d,className:u="",children:p,iconNode:h,...b},f)=>N.createElement("svg",{ref:f,...w4,width:l,height:l,stroke:a,strokeWidth:d?Number(s)*24/Number(l):s,className:Yp("lucide",u),...b},[...h.map(([x,v])=>N.createElement(x,v)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=(a,l)=>{const s=N.forwardRef(({className:d,...u},p)=>N.createElement(j4,{ref:p,iconNode:l,className:Yp(`lucide-${b4(a)}`,d),...u}));return s.displayName=`${a}`,s};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k4=Gp("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S4=Gp("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);function N4({placeholder:a}){return n.jsxs("label",{className:"search",children:[n.jsx(S4,{size:18}),n.jsx("input",{placeholder:a})]})}function C4({title:a}){return n.jsxs("div",{className:"topbar",children:[n.jsx("h1",{children:a}),n.jsx(N4,{placeholder:"Search admin data..."})]})}const ga="stekora-portal-theme-change";function ts(a){return localStorage.getItem(`stekora-${a}-theme`)||"light"}function Xp(a,l){localStorage.setItem(`stekora-${a}-theme`,l),window.dispatchEvent(new CustomEvent(ga,{detail:{accountType:a,theme:l}}))}function At({title:a,children:l}){const[s,d]=N.useState(()=>ts("admin"));return N.useEffect(()=>{const u=p=>{var h;((h=p.detail)==null?void 0:h.accountType)==="admin"&&d(p.detail.theme)};return window.addEventListener(ga,u),()=>window.removeEventListener(ga,u)},[]),n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
        .admin-portal {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 260px minmax(0, 1fr);
          background: #f4f6f9;
          color: #10243f;
        }

        .portal .admin-sidebar {
          min-height: 100vh;
          padding: 0;
          gap: 0;
          overflow-y: auto;
          background: #1f334d;
          color: #ffffff;
        }

        .admin-sidebar-brand {
          min-height: 82px;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.15rem;
          border-bottom: 1px solid rgba(255,255,255,0.12);
        }

        .admin-sidebar-brand > span:last-child {
          min-width: 0;
          display: grid;
          gap: 0.15rem;
        }

        .admin-sidebar-brand strong {
          color: #ffffff;
          font-size: 0.98rem;
        }

        .admin-sidebar-brand small {
          color: #b8c8dc;
          font-size: 0.72rem;
        }

        .admin-sidebar-mark {
          width: 42px;
          height: 42px;
          flex: 0 0 42px;
          display: grid;
          place-items: center;
          border-radius: 8px;
          background: #22d3ee;
          color: #003366;
          font-weight: 900;
        }

        .admin-sidebar-nav {
          display: grid;
          gap: 0.25rem;
          padding: 0.8rem;
        }

        .admin-sidebar-item {
          display: grid;
          gap: 0.3rem;
        }

        .admin-sidebar-group {
          padding: 0.85rem 0.75rem 0.3rem;
          color: #8fb3dc;
          font-size: 0.68rem;
          font-weight: 800;
          text-transform: uppercase;
        }

        .portal .admin-sidebar-nav button {
          width: 100%;
          min-height: 46px;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0 0.75rem;
          border: 0;
          border-radius: 7px;
          background: transparent;
          color: #ffffff;
          text-align: left;
          font-weight: 700;
          transition: background 0.18s ease, color 0.18s ease;
        }

        .portal .admin-sidebar-nav button:hover,
        .portal .admin-sidebar-nav button.active {
          background: rgba(255,255,255,0.14);
        }

        .portal .admin-sidebar-nav button.active {
          box-shadow: inset 3px 0 #22d3ee;
        }

        .admin-sidebar-icon {
          width: 28px;
          height: 28px;
          flex: 0 0 28px;
          display: grid;
          place-items: center;
          border-radius: 6px;
          background: rgba(255,255,255,0.09);
          color: #bcecf5;
        }

        .admin-sidebar-nav button.active .admin-sidebar-icon {
          background: #22d3ee;
          color: #003366;
        }

        .admin-sidebar-logout {
          margin-top: 0.8rem;
          padding-top: 0.8rem;
          border-top: 1px solid rgba(255,255,255,0.12);
        }

        .admin-portal-main {
          min-width: 0;
          padding: 0;
        }

        .admin-portal-main .topbar {
          min-height: 82px;
          margin: 0;
          padding: 0 2rem;
          background: #ffffff;
          border-bottom: 1px solid #d9e1ea;
        }

        .admin-portal-main .topbar h1 {
          margin: 0;
          font-size: 1.3rem;
        }

        .admin-portal-content {
          padding: 1.8rem;
        }

        .admin-portal.dark-mode {
          background: #0f172a;
          color: #e5edf7;
        }

        .admin-portal.dark-mode .admin-portal-main,
        .admin-portal.dark-mode .admin-portal-content,
        .admin-portal.dark-mode [class$="-page"],
        .admin-portal.dark-mode [class$="-container"] {
          background-color: #0f172a !important;
          color: #e5edf7;
        }

        .admin-portal.dark-mode .topbar,
        .admin-portal.dark-mode .modal,
        .admin-portal.dark-mode form,
        .admin-portal.dark-mode .table,
        .admin-portal.dark-mode article,
        .admin-portal.dark-mode [class*="panel"],
        .admin-portal.dark-mode [class*="card"],
        .admin-portal.dark-mode [class*="modal"] {
          background-color: #182337 !important;
          color: #e5edf7 !important;
          border-color: #334155 !important;
        }

        .admin-portal.dark-mode h1,
        .admin-portal.dark-mode h2,
        .admin-portal.dark-mode h3,
        .admin-portal.dark-mode label,
        .admin-portal.dark-mode th,
        .admin-portal.dark-mode td {
          color: #e5edf7 !important;
        }

        .admin-portal.dark-mode p,
        .admin-portal.dark-mode small,
        .admin-portal.dark-mode span {
          border-color: #334155;
        }

        .admin-portal.dark-mode input,
        .admin-portal.dark-mode select,
        .admin-portal.dark-mode textarea {
          background: #111c2e !important;
          color: #f8fafc !important;
          border-color: #475569 !important;
        }

        .admin-portal.dark-mode input::placeholder,
        .admin-portal.dark-mode textarea::placeholder {
          color: #94a3b8;
        }

        .admin-portal.dark-mode .table tr,
        .admin-portal.dark-mode .table td,
        .admin-portal.dark-mode .table th {
          background-color: #182337 !important;
          border-color: #334155 !important;
        }

        .admin-portal.dark-mode .settings-section,
        .admin-portal.dark-mode [class*="-table-wrap"] {
          background: #182337 !important;
          color: #e5edf7 !important;
          border-color: #334155 !important;
          box-shadow: none !important;
        }

        .admin-portal.dark-mode .settings-heading h2,
        .admin-portal.dark-mode .settings-heading p,
        .admin-portal.dark-mode .theme-options strong,
        .admin-portal.dark-mode .theme-options small {
          color: #e5edf7 !important;
        }

        .admin-portal.dark-mode .settings-heading p,
        .admin-portal.dark-mode .theme-options small {
          color: #a9b8cc !important;
        }

        .admin-portal.dark-mode .theme-options button {
          background: #111c2e !important;
          color: #e5edf7 !important;
          border-color: #475569 !important;
        }

        .admin-portal.dark-mode .theme-options button.selected {
          background: #123047 !important;
          border-color: #22d3ee !important;
        }

        .admin-portal.dark-mode .password-field {
          background: #111c2e !important;
          border-color: #475569 !important;
        }

        .admin-portal.dark-mode table,
        .admin-portal.dark-mode table[class*="-table"] {
          background: #182337 !important;
          color: #e5edf7 !important;
          border-color: #334155 !important;
        }

        .admin-portal.dark-mode table thead tr,
        .admin-portal.dark-mode table thead th {
          background: #202b3a !important;
          color: #f8fafc !important;
          border-color: #475569 !important;
        }

        .admin-portal.dark-mode table tbody tr,
        .admin-portal.dark-mode table tbody tr:nth-child(odd),
        .admin-portal.dark-mode table tbody tr:nth-child(even),
        .admin-portal.dark-mode table tbody td {
          background: #182337 !important;
          color: #dce6f3 !important;
          border-color: #334155 !important;
        }

        .admin-portal.dark-mode table tbody tr:nth-child(even),
        .admin-portal.dark-mode table tbody tr:nth-child(even) td {
          background: #111c2e !important;
        }

        .admin-portal.dark-mode table tbody tr:hover,
        .admin-portal.dark-mode table tbody tr:hover td {
          background: #22334b !important;
        }

        @media (max-width: 760px) {
          .admin-portal {
            grid-template-columns: 1fr;
          }

          .portal .admin-sidebar {
            min-height: auto;
          }

          .admin-sidebar-nav {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .admin-sidebar-group {
            display: none;
          }

          .admin-sidebar-logout {
            margin-top: 0;
            padding-top: 0;
            border-top: 0;
          }

          .admin-portal-main .topbar,
          .admin-portal-content {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}),n.jsxs("div",{className:`portal admin-portal ${s==="dark"?"dark-mode":""}`,children:[n.jsx(y4,{}),n.jsxs("section",{className:"portal-main admin-portal-main",children:[n.jsx(C4,{title:a}),n.jsx("div",{className:"admin-portal-content",children:l})]})]})]})}const Wi={question_type:"mcq",question:"",option_a:"",option_b:"",option_c:"",option_d:"",correct_option:"A",marks:1};function E4(a){return a.title||a.name||"Untitled course"}function ll(){return[{...Wi},{...Wi},{...Wi}]}function z4(){const[a,l]=N.useState([]),[s,d]=N.useState([]),[u,p]=N.useState([]),[h,b]=N.useState(""),[f,x]=N.useState(""),[v,g]=N.useState(ll()),[y,C]=N.useState(!1),[_,I]=N.useState(""),[A,M]=N.useState(!0),[z,W]=N.useState(!1),[F,D]=N.useState("");N.useEffect(()=>{de()},[]),N.useEffect(()=>{h?X(h):(d([]),x(""))},[h]),N.useEffect(()=>{f?ce(f):p([])},[f]);const G=s.find(k=>String(k.id)===String(f)),ne=N.useMemo(()=>{const k=_.trim().toLowerCase();return k?u.filter(R=>[R.id,R.question,R.question_type,R.correct_answer,R.marks].some(P=>String(P||"").toLowerCase().includes(k))):u},[u,_]);async function de(){var k;try{M(!0),D("");const R=await jr(),P=Array.isArray(R)?R:[];l(P),b((k=P[0])!=null&&k.id?String(P[0].id):"")}catch(R){console.error(R),D(R.message||"Failed to load courses")}finally{M(!1)}}async function X(k){var R;try{D("");const P=await Fn(k),w=Array.isArray(P)?P:[];d(w),x((R=w[0])!=null&&R.id?String(w[0].id):"")}catch(P){console.error(P),D(P.message||"Failed to load modules")}}async function ce(k){try{D("");const R=await u3(k);p(Array.isArray(R)?R:[])}catch(R){console.error(R),D(R.message||"Failed to load assessment questions")}}function pe(){g(u.length>0?u.map(k=>({question_type:k.question_type||"mcq",question:k.question||"",option_a:k.option_a||"",option_b:k.option_b||"",option_c:k.option_c||"",option_d:k.option_d||"",correct_option:k.correct_option||k.correct_answer||"A",marks:k.marks||1})):ll()),C(!0)}function fe(){g(ll()),C(!1)}function ye(k,R,P){g(w=>w.map(($,le)=>le===k?{...$,[R]:P}:$))}function Se(){g(k=>[...k,{...Wi}])}function je(k){if(v.length<=3){alert("Assessment must have at least 3 questions");return}g(R=>R.filter((P,w)=>w!==k))}async function Ne(k){if(k.preventDefault(),!f){alert("Please choose a module first");return}const R=v.map(w=>({question_type:w.question_type,question:w.question.trim(),option_a:w.option_a.trim(),option_b:w.option_b.trim(),option_c:w.option_c.trim(),option_d:w.option_d.trim(),correct_option:w.correct_option,marks:Number(w.marks||1)}));if(R.length<3){alert("Assessment must have at least 3 questions");return}if(R.some(w=>w.question?w.question_type==="open"?!1:!w.option_a||!w.option_b||!w.correct_option:!0)){alert("Each MCQ needs a question, option A, option B, and correct answer");return}W(!0);try{await f3(f,{questions:R}),alert("Assessment saved"),fe(),await ce(f)}catch(w){console.error(w),alert(w.message||"Failed to save assessment")}finally{W(!1)}}async function xe(k){if(window.confirm("Delete this question?"))try{await m3(k),await ce(f)}catch(R){console.error(R),alert(R.message||"Failed to delete question")}}return n.jsxs(At,{title:"Assessments",children:[n.jsx("style",{children:`
        .admin-assessments-page {
          display: grid;
          gap: 1.65rem;
          padding: 0.25rem 0;
        }

        .admin-assessments-actions-bar {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .admin-assessments-big-btn {
          border: 0;
          border-radius: 8px;
          min-height: 60px;
          padding: 0 1.5rem;
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          color: #ffffff;
          background: linear-gradient(135deg, #0ea5e9, #0284c7);
          font-size: 1.05rem;
          font-weight: 800;
          cursor: pointer;
          box-shadow: 0 12px 24px rgba(2, 132, 199, 0.16);
        }

        .admin-assessments-big-btn.green {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          box-shadow: 0 12px 24px rgba(22, 163, 74, 0.16);
        }

        .admin-assessments-panel {
          background: #ffffff;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 18px 42px rgba(15, 23, 42, 0.13);
          border: 1px solid #e2e8f0;
        }

        .admin-assessments-header {
          padding: 1.55rem 1.7rem 0.8rem;
          background: #ffffff;
        }

        .admin-assessments-header h2 {
          margin: 0 0 0.45rem;
          color: #10243f;
          font-size: 1.15rem;
        }

        .admin-assessments-header p {
          margin: 0;
          color: #64748b;
          font-size: 0.92rem;
        }

        .admin-assessments-select-row {
          display: flex;
          gap: 0.85rem;
          flex-wrap: wrap;
          padding: 0.4rem 1.7rem 1.35rem;
        }

        .admin-assessments-field {
          display: grid;
          gap: 0.35rem;
          color: #334155;
          font-size: 0.82rem;
          font-weight: 800;
        }

        .admin-assessments-select,
        .admin-assessments-input,
        .admin-assessments-textarea {
          width: 100%;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 0.75rem 0.85rem;
          color: #10243f;
          background: #ffffff;
          outline: none;
          font: inherit;
        }

        .admin-assessments-select {
          min-width: 210px;
          height: 52px;
        }

        .admin-assessments-textarea {
          min-height: 86px;
          resize: vertical;
        }

        .admin-assessments-toolbar {
          min-height: 92px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.25rem 1.45rem;
          background: #ffffff;
          flex-wrap: wrap;
          border-top: 1px solid #edf2f7;
        }

        .admin-assessments-count,
        .admin-assessments-search-wrap {
          color: #10243f;
          font-weight: 800;
        }

        .admin-assessments-search-wrap {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .admin-assessments-search {
          width: min(310px, 52vw);
          height: 52px;
          border: 1px solid #aeb7c2;
          border-radius: 8px;
          padding: 0.65rem 0.8rem;
          outline: none;
          font-size: 0.95rem;
          background: #ffffff;
        }

        .admin-assessments-table-wrap {
          overflow-x: auto;
        }

        .admin-assessments-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          background: #fff;
        }

        .admin-assessments-table th,
        .admin-assessments-table td {
          text-align: left;
          border-bottom: 1px solid #d7dde5;
          border-right: 1px solid #d7dde5;
          padding: 0.95rem 0.85rem;
          vertical-align: middle;
          font-size: 0.98rem;
          color: #0f172a;
        }

        .admin-assessments-table th {
          position: relative;
          background: #20262c;
          color: #ffffff;
          white-space: nowrap;
          font-weight: 900;
          font-size: 1rem;
        }

        .admin-assessments-table th::after {
          content: "";
          position: absolute;
          right: 0.65rem;
          top: 50%;
          width: 0;
          height: 0;
          border-left: 0.32rem solid transparent;
          border-right: 0.32rem solid transparent;
          border-bottom: 0.55rem solid rgba(255, 255, 255, 0.22);
          transform: translateY(-70%);
        }

        .admin-assessments-table tbody tr:nth-child(odd) {
          background: #f1f1f1;
        }

        .admin-assessment-action {
          border: 0;
          border-radius: 6px;
          min-width: 92px;
          min-height: 38px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 700;
          margin-right: 0.4rem;
        }

        .admin-assessment-action.edit {
          background: #ffc107;
          color: #0f172a;
        }

        .admin-assessment-action.delete {
          background: #ff3f4f;
          color: #ffffff;
        }

        .admin-assessments-empty {
          color: #64748b;
          margin: 1rem;
          padding: 1rem;
          border: 1px dashed #94a3b8;
          border-radius: 8px;
          background: #f8fafc;
        }

        .admin-assessments-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          background: rgba(15, 23, 42, 0.55);
        }

        .admin-assessments-modal {
          width: min(980px, 100%);
          max-height: calc(100vh - 2rem);
          overflow-y: auto;
          background: #ffffff;
          border-radius: 14px;
          border: 1px solid #dfe7ef;
          box-shadow: 0 24px 64px rgba(15, 23, 42, 0.22);
        }

        .admin-assessments-modal-head {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.35rem 1.7rem 0.5rem;
        }

        .admin-assessments-close {
          border: 0;
          background: #e8eef6;
          color: #003366;
          border-radius: 999px;
          width: 36px;
          height: 36px;
          cursor: pointer;
          font-size: 1.2rem;
          font-weight: 900;
        }

        .admin-assessments-form {
          display: grid;
          gap: 1rem;
          padding: 0.4rem 1.7rem 1.4rem;
        }

        .admin-assessment-question-card {
          border: 1px solid #dbe3ec;
          border-radius: 10px;
          padding: 1rem;
          display: grid;
          gap: 0.75rem;
          background: #f8fafc;
        }

        .admin-assessment-question-head {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          align-items: center;
          color: #10243f;
          font-weight: 900;
        }

        .admin-assessment-options-grid {
          display: grid;
          gap: 0.75rem;
        }

        .admin-assessments-form-actions {
          display: flex;
          gap: 0.65rem;
          flex-wrap: wrap;
        }

        .admin-assessments-primary,
        .admin-assessments-secondary,
        .admin-assessments-danger {
          border: 0;
          border-radius: 8px;
          min-height: 48px;
          padding: 0 1.15rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.55rem;
          cursor: pointer;
          font-size: 0.95rem;
          font-weight: 800;
        }

        .admin-assessments-primary {
          background: #003366;
          color: #ffffff;
        }

        .admin-assessments-secondary {
          background: #e8eef6;
          color: #003366;
        }

        .admin-assessments-danger {
          background: #fee2e2;
          color: #991b1b;
        }

        @media (min-width: 760px) {
          .admin-assessment-options-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .admin-assessments-select-row,
          .admin-assessments-header,
          .admin-assessments-form {
            padding-left: 1.2rem;
            padding-right: 1.2rem;
          }

          .admin-assessments-search-wrap {
            width: 100%;
            align-items: flex-start;
            flex-direction: column;
          }

          .admin-assessments-search {
            width: 100%;
          }
        }
      `}),n.jsxs("div",{className:"admin-assessments-page",children:[n.jsxs("div",{className:"admin-assessments-actions-bar",children:[n.jsxs("button",{className:"admin-assessments-big-btn green",type:"button",onClick:pe,children:[n.jsx(U,{icon:rv}),"Add Assessment"]}),n.jsxs("button",{className:"admin-assessments-big-btn",type:"button",onClick:()=>window.location.hash="/admin/modules",children:[n.jsx(U,{icon:Rt}),"Add Module"]})]}),n.jsxs("section",{className:"admin-assessments-panel",children:[n.jsxs("div",{className:"admin-assessments-header",children:[n.jsx("h2",{children:"Module Assessments"}),n.jsxs("p",{children:["Choose a course and module, then create at least three questions. Pass mark is 60%.",G?` Current module: ${G.title}.`:""]})]}),n.jsxs("div",{className:"admin-assessments-select-row",children:[n.jsxs("label",{className:"admin-assessments-field",children:["Course",n.jsxs("select",{className:"admin-assessments-select",value:h,onChange:k=>b(k.target.value),disabled:A||a.length===0,children:[a.length===0&&n.jsx("option",{value:"",children:"No courses yet"}),a.map(k=>n.jsx("option",{value:k.id,children:E4(k)},k.id))]})]}),n.jsxs("label",{className:"admin-assessments-field",children:["Module",n.jsxs("select",{className:"admin-assessments-select",value:f,onChange:k=>x(k.target.value),disabled:s.length===0,children:[s.length===0&&n.jsx("option",{value:"",children:"No modules yet"}),s.map(k=>n.jsx("option",{value:k.id,children:k.title},k.id))]})]})]}),n.jsxs("div",{className:"admin-assessments-toolbar",children:[n.jsxs("div",{className:"admin-assessments-count",children:["Showing ",n.jsx("strong",{children:ne.length})," of ",n.jsx("strong",{children:u.length})," questions"]}),n.jsxs("label",{className:"admin-assessments-search-wrap",children:["Search questions:",n.jsx("input",{className:"admin-assessments-search",type:"search",value:_,onChange:k=>I(k.target.value)})]})]}),F&&n.jsx("div",{className:"admin-assessments-empty",children:F}),A&&n.jsx("div",{className:"admin-assessments-empty",children:"Loading courses..."}),!A&&a.length===0&&n.jsx("div",{className:"admin-assessments-empty",children:"No courses yet."}),!A&&a.length>0&&s.length===0&&n.jsx("div",{className:"admin-assessments-empty",children:"No modules yet. Create modules first."}),!A&&f&&u.length===0&&n.jsx("div",{className:"admin-assessments-empty",children:"No assessment questions have been saved for this module yet."}),!A&&f&&u.length>0&&n.jsx("div",{className:"admin-assessments-table-wrap",children:n.jsxs("table",{className:"admin-assessments-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"ID"}),n.jsx("th",{children:"Question"}),n.jsx("th",{children:"Type"}),n.jsx("th",{children:"Correct"}),n.jsx("th",{children:"Marks"}),n.jsx("th",{children:"Actions"})]})}),n.jsx("tbody",{children:ne.map(k=>n.jsxs("tr",{children:[n.jsx("td",{children:k.id}),n.jsx("td",{children:k.question}),n.jsx("td",{children:k.question_type}),n.jsx("td",{children:k.correct_answer||"Manual"}),n.jsx("td",{children:k.marks}),n.jsxs("td",{children:[n.jsxs("button",{className:"admin-assessment-action edit",type:"button",onClick:pe,children:[n.jsx(U,{icon:ba}),"Edit"]}),n.jsxs("button",{className:"admin-assessment-action delete",type:"button",onClick:()=>xe(k.id),children:[n.jsx(U,{icon:$n}),"Delete"]})]})]},k.id))})]})})]}),y&&n.jsx("div",{className:"admin-assessments-modal-backdrop",role:"presentation",onClick:fe,children:n.jsxs("section",{className:"admin-assessments-modal",role:"dialog","aria-modal":"true",onClick:k=>k.stopPropagation(),children:[n.jsxs("div",{className:"admin-assessments-modal-head",children:[n.jsxs("div",{className:"admin-assessments-header",children:[n.jsx("h2",{children:"Section Assessment"}),n.jsx("p",{children:"Save all questions for the selected module. This replaces the current assessment for that module."})]}),n.jsx("button",{className:"admin-assessments-close",type:"button",onClick:fe,"aria-label":"Close assessment form",children:"x"})]}),n.jsxs("form",{className:"admin-assessments-form",onSubmit:Ne,children:[v.map((k,R)=>n.jsxs("div",{className:"admin-assessment-question-card",children:[n.jsxs("div",{className:"admin-assessment-question-head",children:[n.jsxs("span",{children:["Question ",R+1]}),v.length>3&&n.jsx("button",{className:"admin-assessments-danger",type:"button",onClick:()=>je(R),children:"Remove"})]}),n.jsxs("label",{className:"admin-assessments-field",children:["Question type",n.jsxs("select",{className:"admin-assessments-select",value:k.question_type,onChange:P=>ye(R,"question_type",P.target.value),children:[n.jsx("option",{value:"mcq",children:"Multiple Choice"}),n.jsx("option",{value:"open",children:"Open Answer"})]})]}),n.jsxs("label",{className:"admin-assessments-field",children:["Question",n.jsx("textarea",{className:"admin-assessments-textarea",value:k.question,onChange:P=>ye(R,"question",P.target.value),placeholder:"Write question..."})]}),k.question_type==="mcq"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"admin-assessment-options-grid",children:["a","b","c","d"].map(P=>n.jsxs("label",{className:"admin-assessments-field",children:["Option ",P.toUpperCase(),n.jsx("input",{className:"admin-assessments-input",value:k[`option_${P}`],onChange:w=>ye(R,`option_${P}`,w.target.value)})]},P))}),n.jsxs("label",{className:"admin-assessments-field",children:["Correct answer",n.jsxs("select",{className:"admin-assessments-select",value:k.correct_option,onChange:P=>ye(R,"correct_option",P.target.value),children:[n.jsx("option",{value:"A",children:"A"}),n.jsx("option",{value:"B",children:"B"}),n.jsx("option",{value:"C",children:"C"}),n.jsx("option",{value:"D",children:"D"})]})]})]}),n.jsxs("label",{className:"admin-assessments-field",children:["Marks",n.jsx("input",{className:"admin-assessments-input",type:"number",min:"1",value:k.marks,onChange:P=>ye(R,"marks",P.target.value)})]})]},`question-${R}`)),n.jsxs("div",{className:"admin-assessments-form-actions",children:[n.jsxs("button",{className:"admin-assessments-secondary",type:"button",onClick:Se,children:[n.jsx(U,{icon:Rt}),"Add Question"]}),n.jsx("button",{className:"admin-assessments-primary",type:"submit",disabled:z,children:z?"Saving...":"Save Assessment"}),n.jsx("button",{className:"admin-assessments-secondary",type:"button",onClick:fe,children:"Cancel"})]})]})]})})]})]})}function P4({columns:a,rows:l}){return n.jsxs("table",{className:"table",children:[n.jsx("thead",{children:n.jsx("tr",{children:a.map(s=>n.jsx("th",{children:s},s))})}),n.jsx("tbody",{children:l.map(s=>n.jsx("tr",{children:a.map(d=>n.jsx("td",{children:s[d.toLowerCase()]},d))},s.id))})]})}function _4(){return n.jsxs(At,{title:"Certificates",children:[n.jsx(P4,{columns:["Student","Course","Code","Status"],rows:[{id:1,student:"Sample Student",course:"Web Development",code:"STK-2026-001",status:"verified"}]}),n.jsxs("div",{className:"list-panel",children:[n.jsx("button",{className:"primary",children:"Open Verification Link"}),n.jsx("button",{children:"Revoke Certificate"})]})]})}const qf={title:"",category:"Development",description:"",image_url:"",image:null,modules:[""]};function Fi(a){return a.title||a.name||"Untitled course"}function A4(){const[a,l]=N.useState([]),[s,d]=N.useState(qf),[u,p]=N.useState(null),[h,b]=N.useState(!1),[f,x]=N.useState(""),[v,g]=N.useState(!0),[y,C]=N.useState(!1),[_,I]=N.useState(""),[A,M]=N.useState(null),[z,W]=N.useState([]),[F,D]=N.useState(""),[G,ne]=N.useState(!1);N.useEffect(()=>{X()},[]);const de=N.useMemo(()=>{const H=f.trim().toLowerCase();return H?a.filter(K=>[K.id,Fi(K),K.category,K.description].some(ie=>String(ie||"").toLowerCase().includes(H))):a},[a,f]);async function X(){try{g(!0),I("");const H=await jr();l(Array.isArray(H)?H:[])}catch(H){console.error(H),I(H.message||"Failed to load courses")}finally{g(!1)}}function ce(){d(qf),p(null)}function pe(){ce(),b(!0)}function fe(){ce(),b(!1)}function ye(H){p(H.id),d({title:Fi(H),category:H.category||"Development",description:H.description||"",image_url:H.image_url||"",image:null,modules:[""]}),b(!0)}function Se(H){d({...s,[H.target.name]:H.target.value})}function je(H,K){d({...s,modules:s.modules.map((ie,ke)=>ke===H?K:ie)})}function Ne(){d({...s,modules:[...s.modules,""]})}function xe(H){d({...s,modules:s.modules.filter((K,ie)=>ie!==H)})}async function k(H){if(H.preventDefault(),y)return;const K=s.title.trim();if(!K){alert("Course title is required");return}C(!0);try{const ie=new FormData;ie.append("title",K),ie.append("category",s.category.trim()),ie.append("description",s.description.trim()),ie.append("image_url",s.image_url.trim()),ie.append("modules",JSON.stringify(s.modules.map(ke=>ke.trim()).filter(Boolean))),s.image&&ie.append("image",s.image),u?(await i3(u,ie),alert("Course updated")):(await a3(ie),alert("Course created")),fe(),await X()}catch(ie){console.error(ie),alert(ie.message||"Failed to save course")}finally{C(!1)}}async function R(H){if(window.confirm("Delete this course?"))try{await s3(H),u===H&&ce(),await X()}catch(K){console.error(K),alert(K.message||"Failed to delete course")}}async function P(H){M(H),D(""),W([]),ne(!0);try{const K=await Fn(H.id);W(Array.isArray(K)?K:[])}catch(K){console.error(K),alert(K.message||"Failed to load curriculum")}finally{ne(!1)}}function w(){M(null),W([]),D("")}async function $(H){if(H.preventDefault(),!(!A||!F.trim()))try{await Ep(A.id,{title:F.trim()}),D("");const K=await Fn(A.id);W(Array.isArray(K)?K:[]),await X()}catch(K){console.error(K),alert(K.message||"Failed to add module")}}async function le(H){if(window.confirm("Delete this module?"))try{await zp(H);const K=await Fn(A.id);W(Array.isArray(K)?K:[]),await X()}catch(K){console.error(K),alert(K.message||"Failed to delete module")}}return n.jsxs(At,{title:"Public Courses",children:[n.jsx("style",{children:`
        .admin-courses-page {
          display: grid;
          gap: 1.65rem;
          padding: 0.25rem 0;
        }

        .admin-courses-actions-bar {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .admin-courses-big-btn {
          border: 0;
          border-radius: 8px;
          min-height: 60px;
          padding: 0 1.5rem;
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          color: #ffffff;
          background: linear-gradient(135deg, #0ea5e9, #0284c7);
          font-size: 1.05rem;
          font-weight: 800;
          cursor: pointer;
          box-shadow: 0 12px 24px rgba(2, 132, 199, 0.16);
        }

        .admin-courses-big-btn.green {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          box-shadow: 0 12px 24px rgba(22, 163, 74, 0.16);
        }

        .admin-courses-panel {
          background: #ffffff;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 18px 42px rgba(15, 23, 42, 0.13);
          border: 1px solid #e2e8f0;
        }

        .admin-courses-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.55rem 1.7rem 1rem;
          background: #ffffff;
          flex-wrap: wrap;
        }

        .admin-courses-header h2 {
          margin: 0 0 0.45rem;
          color: #10243f;
          font-size: 1.15rem;
        }

        .admin-courses-header p {
          margin: 0;
          color: #64748b;
          font-size: 0.92rem;
        }

        .admin-courses-toolbar {
          min-height: 92px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.25rem 1.45rem;
          background: #ffffff;
          flex-wrap: wrap;
        }

        .admin-courses-count {
          color: #10243f;
          font-weight: 800;
        }

        .admin-courses-search-wrap {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.35rem;
          color: #10243f;
          font-size: 1rem;
          font-weight: 800;
        }

        .admin-courses-search {
          width: min(310px, 52vw);
          height: 52px;
          border: 1px solid #aeb7c2;
          border-radius: 8px;
          padding: 0.65rem 0.8rem;
          outline: none;
          font-size: 0.95rem;
          background: #ffffff;
        }

        .admin-courses-table-wrap {
          overflow-x: auto;
        }

        .admin-courses-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          background: #fff;
        }

        .admin-courses-table th,
        .admin-courses-table td {
          text-align: left;
          border-bottom: 1px solid #d7dde5;
          border-right: 1px solid #d7dde5;
          padding: 0.95rem 0.85rem;
          vertical-align: middle;
          font-size: 0.98rem;
          color: #0f172a;
        }

        .admin-courses-table th {
          position: relative;
          background: #20262c;
          color: #ffffff;
          white-space: nowrap;
          font-weight: 900;
          font-size: 1rem;
        }

        .admin-courses-table th::after {
          content: "";
          position: absolute;
          right: 0.65rem;
          top: 50%;
          width: 0;
          height: 0;
          border-left: 0.32rem solid transparent;
          border-right: 0.32rem solid transparent;
          border-bottom: 0.55rem solid rgba(255, 255, 255, 0.22);
          transform: translateY(-70%);
        }

        .admin-courses-table th:last-child,
        .admin-courses-table td:last-child {
          border-right: none;
        }

        .admin-courses-table tbody tr:nth-child(odd) {
          background: #f1f1f1;
        }

        .admin-courses-table tbody tr:nth-child(even) {
          background: #ffffff;
        }

        .admin-courses-image {
          width: 66px;
          height: 44px;
          border-radius: 6px;
          object-fit: cover;
          border: 1px solid #dbe3ec;
          background: #f1f5f9;
        }

        .admin-courses-row-actions {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.45rem;
        }

        .admin-course-action {
          border: 0;
          border-radius: 6px;
          min-width: 104px;
          min-height: 38px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 700;
        }

        .admin-course-action.edit {
          background: #ffc107;
          color: #0f172a;
        }

        .admin-course-action.curriculum {
          background: #22d3ee;
          color: #052f3f;
        }

        .admin-course-action.delete {
          background: #ff3f4f;
          color: #ffffff;
        }

        .admin-courses-empty {
          color: #64748b;
          margin: 1rem;
          padding: 1rem;
          border: 1px dashed #94a3b8;
          border-radius: 8px;
          background: #f8fafc;
        }

        .admin-courses-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          background: rgba(15, 23, 42, 0.55);
        }

        .admin-courses-modal {
          width: min(720px, 100%);
          max-height: calc(100vh - 2rem);
          overflow-y: auto;
          background: #ffffff;
          border-radius: 10px;
          border: 1px solid #dfe7ef;
          box-shadow: 0 24px 64px rgba(15, 23, 42, 0.22);
          padding: 1.35rem;
        }

        .admin-courses-modal-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .admin-courses-modal-head h2 {
          margin: 0;
          color: #10243f;
          font-size: 1.1rem;
        }

        .admin-courses-close {
          border: 0;
          background: #e8eef6;
          color: #003366;
          border-radius: 999px;
          width: 34px;
          height: 34px;
          cursor: pointer;
          font-size: 1.2rem;
          font-weight: 900;
        }

        .admin-courses-form {
          display: grid;
          gap: 0.9rem;
        }

        .admin-courses-grid {
          display: grid;
          gap: 0.9rem;
        }

        .admin-courses-form label {
          display: grid;
          gap: 0.35rem;
          color: #334155;
          font-size: 0.82rem;
          font-weight: 800;
        }

        .admin-courses-form input,
        .admin-courses-form select,
        .admin-courses-form textarea {
          width: 100%;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 0.75rem 0.85rem;
          font: inherit;
          outline: none;
        }

        .admin-courses-form textarea {
          min-height: 104px;
          resize: vertical;
        }

        .admin-courses-file-input {
          background: #f8fafc;
          cursor: pointer;
        }

        .admin-courses-help {
          color: #64748b;
          font-size: 0.78rem;
          line-height: 1.5;
        }

        .admin-courses-preview {
          width: 100%;
          aspect-ratio: 16 / 9;
          object-fit: cover;
          border: 1px solid #dbe3ec;
          border-radius: 8px;
          background: #f1f5f9;
        }

        .admin-courses-module-drafts {
          display: grid;
          gap: 0.55rem;
        }

        .admin-courses-module-row {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .admin-courses-module-row input {
          flex: 1;
        }

        .admin-courses-small-btn {
          border: 0;
          border-radius: 8px;
          padding: 0.65rem 0.8rem;
          background: #e8eef6;
          color: #003366;
          cursor: pointer;
          font-weight: 800;
        }

        .admin-courses-actions {
          display: flex;
          gap: 0.65rem;
          flex-wrap: wrap;
        }

        .admin-courses-primary,
        .admin-courses-secondary,
        .admin-courses-danger {
          border: 0;
          border-radius: 8px;
          padding: 0.7rem 1rem;
          font-weight: 800;
          cursor: pointer;
        }

        .admin-courses-primary {
          background: #003366;
          color: #ffffff;
        }

        .admin-courses-secondary {
          background: #e8eef6;
          color: #003366;
        }

        .admin-courses-danger {
          background: #fee2e2;
          color: #991b1b;
        }

        .admin-courses-module-list {
          list-style: none;
          padding: 0;
          margin: 1rem 0 0;
          display: grid;
          gap: 0.55rem;
        }

        .admin-courses-module-list li {
          border: 1px solid #dbe3ec;
          border-radius: 8px;
          background: #f8fafc;
          padding: 0.7rem 0.8rem;
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          align-items: center;
        }

        @media (min-width: 760px) {
          .admin-courses-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .admin-courses-search-wrap {
            width: 100%;
            align-items: flex-start;
            flex-direction: column;
          }

          .admin-courses-search {
            width: 100%;
          }

          .admin-courses-header {
            padding: 1.2rem;
          }
        }
      `}),n.jsxs("div",{className:"admin-courses-page",children:[n.jsxs("div",{className:"admin-courses-actions-bar",children:[n.jsxs("button",{className:"admin-courses-big-btn green",type:"button",onClick:pe,children:[n.jsx(U,{icon:wa}),"Add public course"]}),n.jsxs("button",{className:"admin-courses-big-btn",type:"button",onClick:pe,children:[n.jsx(U,{icon:Rt}),"New Course"]}),n.jsxs("button",{className:"admin-courses-big-btn",type:"button",onClick:()=>alert("Excel import will be added after upload support."),children:[n.jsx(U,{icon:sp}),"Import Courses (Excel)"]})]}),n.jsxs("section",{className:"admin-courses-panel",children:[n.jsxs("div",{className:"admin-courses-header",children:[n.jsxs("div",{children:[n.jsx("h2",{children:"Public Courses"}),n.jsx("p",{children:"Manage the courses that appear on the public study page."})]}),n.jsx("button",{className:"admin-courses-primary",type:"button",onClick:pe,children:"Add public course"})]}),n.jsxs("div",{className:"admin-courses-toolbar",children:[n.jsxs("div",{className:"admin-courses-count",children:["Showing ",n.jsx("strong",{children:de.length})," of ",n.jsx("strong",{children:a.length})," public courses"]}),n.jsxs("label",{className:"admin-courses-search-wrap",children:["Search courses:",n.jsx("input",{className:"admin-courses-search",type:"search",value:f,onChange:H=>x(H.target.value)})]})]}),v&&n.jsx("div",{className:"admin-courses-empty",children:"Loading courses..."}),_&&n.jsx("div",{className:"admin-courses-empty",children:_}),!v&&!_&&a.length===0&&n.jsx("div",{className:"admin-courses-empty",children:"No courses in the database yet."}),!v&&!_&&a.length>0&&n.jsx("div",{className:"admin-courses-table-wrap",children:n.jsxs("table",{className:"admin-courses-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"ID"}),n.jsx("th",{children:"Image"}),n.jsx("th",{children:"Name"}),n.jsx("th",{children:"Category"}),n.jsx("th",{children:"Description"}),n.jsx("th",{children:"Lessons"}),n.jsx("th",{children:"Actions"})]})}),n.jsx("tbody",{children:de.map(H=>n.jsxs("tr",{children:[n.jsx("td",{children:H.id}),n.jsx("td",{children:H.image_url?n.jsx("img",{className:"admin-courses-image",src:ct(H.image_url),alt:""}):"No image"}),n.jsx("td",{children:Fi(H)}),n.jsx("td",{children:H.category||"Uncategorized"}),n.jsx("td",{children:H.description||"No description"}),n.jsx("td",{children:H.modules_count||H.module_count||0}),n.jsx("td",{children:n.jsxs("div",{className:"admin-courses-row-actions",children:[n.jsxs("button",{className:"admin-course-action edit",type:"button",onClick:()=>ye(H),children:[n.jsx(U,{icon:ba}),"Edit"]}),n.jsxs("button",{className:"admin-course-action curriculum",type:"button",onClick:()=>P(H),children:[n.jsx(U,{icon:vv}),"Curriculum"]}),n.jsxs("button",{className:"admin-course-action delete",type:"button",onClick:()=>R(H.id),children:[n.jsx(U,{icon:$n}),"Delete"]})]})})]},H.id))})]})})]}),h&&n.jsx("div",{className:"admin-courses-modal-backdrop",role:"presentation",onClick:fe,children:n.jsxs("section",{className:"admin-courses-modal",role:"dialog","aria-modal":"true",onClick:H=>H.stopPropagation(),children:[n.jsxs("div",{className:"admin-courses-modal-head",children:[n.jsx("h2",{children:u?"Edit public course":"Add public course"}),n.jsx("button",{className:"admin-courses-close",type:"button",onClick:fe,"aria-label":"Close course form",children:"x"})]}),n.jsxs("form",{className:"admin-courses-form",onSubmit:k,children:[n.jsxs("div",{className:"admin-courses-grid",children:[n.jsxs("label",{children:["Course title",n.jsx("input",{name:"title",value:s.title,onChange:Se,required:!0})]}),n.jsxs("label",{children:["Category",n.jsxs("select",{name:"category",value:s.category,onChange:Se,children:[n.jsx("option",{children:"Development"}),n.jsx("option",{children:"Backend"}),n.jsx("option",{children:"IoT"}),n.jsx("option",{children:"Design"}),n.jsx("option",{children:"Security"}),n.jsx("option",{children:"Infrastructure"})]})]}),n.jsxs("label",{children:["Course image",n.jsx("input",{className:"admin-courses-file-input",type:"file",accept:"image/*",onChange:H=>{var K;return d({...s,image:((K=H.target.files)==null?void 0:K[0])||null})}}),n.jsx("span",{className:"admin-courses-help",children:"Choose an image from your computer."})]})]}),(s.image||s.image_url)&&n.jsx("img",{className:"admin-courses-preview",src:s.image?URL.createObjectURL(s.image):ct(s.image_url),alt:"Course preview"}),n.jsxs("label",{children:["Description",n.jsx("textarea",{name:"description",value:s.description,onChange:Se})]}),!u&&n.jsxs("label",{children:["First curriculum modules",n.jsxs("div",{className:"admin-courses-module-drafts",children:[s.modules.map((H,K)=>n.jsxs("div",{className:"admin-courses-module-row",children:[n.jsx("input",{value:H,onChange:ie=>je(K,ie.target.value),placeholder:`Module ${K+1}`}),s.modules.length>1&&n.jsx("button",{className:"admin-courses-small-btn",type:"button",onClick:()=>xe(K),children:"Remove"})]},`module-${K}`)),n.jsx("button",{className:"admin-courses-small-btn",type:"button",onClick:Ne,children:"Add module"})]})]}),n.jsxs("div",{className:"admin-courses-actions",children:[n.jsx("button",{className:"admin-courses-primary",type:"submit",disabled:y,children:y?"Saving...":u?"Update Course":"Save Course"}),n.jsx("button",{className:"admin-courses-secondary",type:"button",onClick:fe,children:"Cancel"})]})]})]})}),A&&n.jsx("div",{className:"admin-courses-modal-backdrop",role:"presentation",onClick:w,children:n.jsxs("section",{className:"admin-courses-modal",role:"dialog","aria-modal":"true",onClick:H=>H.stopPropagation(),children:[n.jsxs("div",{className:"admin-courses-modal-head",children:[n.jsxs("h2",{children:["Curriculum: ",Fi(A)]}),n.jsx("button",{className:"admin-courses-close",type:"button",onClick:w,"aria-label":"Close curriculum",children:"x"})]}),n.jsxs("form",{className:"admin-courses-form",onSubmit:$,children:[n.jsxs("label",{children:["Module title",n.jsx("input",{value:F,onChange:H=>D(H.target.value),placeholder:"Introduction"})]}),n.jsxs("div",{className:"admin-courses-actions",children:[n.jsx("button",{className:"admin-courses-primary",type:"submit",children:"Add Module"}),n.jsx("button",{className:"admin-courses-secondary",type:"button",onClick:w,children:"Done"})]})]}),G&&n.jsx("div",{className:"admin-courses-empty",children:"Loading curriculum..."}),!G&&z.length===0&&n.jsx("div",{className:"admin-courses-empty",children:"No modules have been added for this course yet."}),!G&&z.length>0&&n.jsx("ul",{className:"admin-courses-module-list",children:z.map(H=>n.jsxs("li",{children:[n.jsxs("span",{children:[H.order_number,". ",H.title]}),n.jsx("button",{className:"admin-courses-danger",type:"button",onClick:()=>le(H.id),children:"Delete"})]},H.id))})]})})]})]})}function L4(){const[a,l]=N.useState([]),[s,d]=N.useState(""),[u,p]=N.useState(!0),[h,b]=N.useState("");N.useEffect(()=>{x()},[]);const f=N.useMemo(()=>{const y=s.trim().toLowerCase();return y?a.filter(C=>[C.id,C.student_name,C.student_email,C.course_title,C.status,C.score].some(_=>String(_||"").toLowerCase().includes(y))):a},[a,s]);async function x(){try{p(!0),b("");const y=await Vp();l(Array.isArray(y)?y:[])}catch(y){console.error(y),b(y.message||"Failed to load exam submissions")}finally{p(!1)}}async function v(y,C){const _=window.prompt("Enter the student's total score percentage",y.score||0);if(_===null)return;const I=Number(_);if(!Number.isFinite(I)||I<0||I>100){alert("Enter a score between 0 and 100");return}try{await Qp(y.id,{score:I,status:C,allow_reexam:C==="rejected"}),await x()}catch(A){console.error(A),alert(A.message||"Failed to review submission")}}async function g(y){if(Number(y.score||0)<60&&y.status!=="approved"){alert("Approve a competent student before assigning a certificate");return}try{const C=await qp(y.id);alert(`Certificate: ${C.certificateCode}`),await x()}catch(C){console.error(C),alert(C.message||"Failed to assign certificate")}}return n.jsxs(At,{title:"Exam Submissions",children:[n.jsx("style",{children:`
        .admin-submissions-page {
          display: grid;
          gap: 1.2rem;
        }

        .admin-data-panel {
          overflow: hidden;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          box-shadow: 0 14px 34px rgba(15,23,42,0.1);
        }

        .admin-data-toolbar {
          min-height: 88px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.2rem 1.4rem;
          flex-wrap: wrap;
        }

        .admin-data-count,
        .admin-data-search {
          color: #10243f;
          font-weight: 800;
        }

        .admin-data-tools,
        .admin-data-search {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .admin-data-search input {
          width: min(280px, 50vw);
          height: 46px;
          border: 1px solid #aeb7c2;
          border-radius: 7px;
          padding: 0.6rem 0.75rem;
          font: inherit;
        }

        .admin-refresh-button {
          min-height: 46px;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          border: 0;
          border-radius: 7px;
          padding: 0 0.9rem;
          background: #003366;
          color: #ffffff;
          cursor: pointer;
          font-weight: 800;
        }

        .admin-live-table-wrap {
          overflow-x: auto;
        }

        .admin-live-table {
          width: 100%;
          border-collapse: collapse;
        }

        .admin-live-table th,
        .admin-live-table td {
          padding: 0.9rem 0.8rem;
          border-right: 1px solid #d7dde5;
          border-bottom: 1px solid #d7dde5;
          text-align: left;
          vertical-align: middle;
        }

        .admin-live-table th {
          background: #20262c;
          color: #ffffff;
          white-space: nowrap;
        }

        .admin-live-table tbody tr:nth-child(odd) {
          background: #f1f1f1;
        }

        .admin-row-actions {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
        }

        .admin-row-action {
          min-height: 36px;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          border: 0;
          border-radius: 6px;
          padding: 0 0.65rem;
          cursor: pointer;
          font-weight: 800;
        }

        .admin-row-action.approve { background: #22c55e; color: #ffffff; }
        .admin-row-action.reexam { background: #ff3f4f; color: #ffffff; }
        .admin-row-action.certificate { background: #22d3ee; color: #052f3f; }

        .admin-data-message {
          margin: 1rem;
          padding: 1rem;
          border: 1px dashed #94a3b8;
          border-radius: 8px;
          color: #64748b;
        }
      `}),n.jsx("div",{className:"admin-submissions-page",children:n.jsxs("section",{className:"admin-data-panel",children:[n.jsxs("div",{className:"admin-data-toolbar",children:[n.jsxs("div",{className:"admin-data-count",children:["Showing ",f.length," of ",a.length," submissions"]}),n.jsxs("div",{className:"admin-data-tools",children:[n.jsxs("label",{className:"admin-data-search",children:["Search:",n.jsx("input",{type:"search",value:s,onChange:y=>d(y.target.value)})]}),n.jsxs("button",{className:"admin-refresh-button",type:"button",onClick:x,children:[n.jsx(U,{icon:Wl}),"Refresh"]})]})]}),u&&n.jsx("div",{className:"admin-data-message",children:"Loading submissions..."}),h&&n.jsx("div",{className:"admin-data-message",children:h}),!u&&!h&&a.length===0&&n.jsx("div",{className:"admin-data-message",children:"No final exam submissions found."}),!u&&!h&&a.length>0&&n.jsx("div",{className:"admin-live-table-wrap",children:n.jsxs("table",{className:"admin-live-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"ID"}),n.jsx("th",{children:"Student"}),n.jsx("th",{children:"Email"}),n.jsx("th",{children:"Course"}),n.jsx("th",{children:"Status"}),n.jsx("th",{children:"Score"}),n.jsx("th",{children:"Certificate"}),n.jsx("th",{children:"Submitted"}),n.jsx("th",{children:"Actions"})]})}),n.jsx("tbody",{children:f.map(y=>n.jsxs("tr",{children:[n.jsx("td",{children:y.id}),n.jsx("td",{children:y.student_name}),n.jsx("td",{children:y.student_email}),n.jsx("td",{children:y.course_title}),n.jsx("td",{children:y.status}),n.jsxs("td",{children:[y.score||0,"%"]}),n.jsx("td",{children:y.certificate_code||"Not assigned"}),n.jsx("td",{children:new Date(y.created_at).toLocaleString()}),n.jsx("td",{children:n.jsxs("div",{className:"admin-row-actions",children:[n.jsxs("button",{className:"admin-row-action approve",type:"button",onClick:()=>v(y,"approved"),children:[n.jsx(U,{icon:dp})," Approve"]}),n.jsxs("button",{className:"admin-row-action reexam",type:"button",onClick:()=>v(y,"rejected"),children:[n.jsx(U,{icon:uv})," Re-exam"]}),n.jsxs("button",{className:"admin-row-action certificate",type:"button",onClick:()=>g(y),children:[n.jsx(U,{icon:wr})," Certificate"]})]})})]},y.id))})]})})]})})]})}const Kp={question_type:"mcq",question:"",option_a:"",option_b:"",option_c:"",option_d:"",correct_option:"A",marks:1};function Yf(a){return a.title||a.name||"Untitled course"}function cl(){return[{...Kp}]}function M4(){const[a,l]=N.useState([]),[s,d]=N.useState(""),[u,p]=N.useState([]),[h,b]=N.useState([]),[f,x]=N.useState(cl()),[v,g]=N.useState(!1),[y,C]=N.useState(""),[_,I]=N.useState(!0),[A,M]=N.useState(!1),[z,W]=N.useState("");N.useEffect(()=>{G(),de()},[]),N.useEffect(()=>{s?ne(s):p([])},[s]);const F=a.find(k=>String(k.id)===String(s)),D=N.useMemo(()=>{const k=y.trim().toLowerCase();return k?h.filter(R=>[R.id,R.student_name,R.student_email,R.course_title,R.status,R.score,R.certificate_code].some(P=>String(P||"").toLowerCase().includes(k))):h},[h,y]);async function G(){var k;try{I(!0),W("");const R=await jr(),P=Array.isArray(R)?R:[];l(P),d((k=P[0])!=null&&k.id?String(P[0].id):"")}catch(R){console.error(R),W(R.message||"Failed to load courses")}finally{I(!1)}}async function ne(k){try{W("");const R=await m4(k);p(Array.isArray(R)?R:[])}catch(R){console.error(R),W(R.message||"Failed to load final exam questions")}}async function de(){try{const k=await Vp();b(Array.isArray(k)?k:[])}catch(k){console.error(k)}}function X(){x(u.length>0?u.map(k=>({question_type:k.question_type||k.type||"mcq",question:k.question||"",option_a:k.option_a||"",option_b:k.option_b||"",option_c:k.option_c||"",option_d:k.option_d||"",correct_option:k.correct_option||k.correct_answer||"A",marks:k.marks||1})):cl()),g(!0)}function ce(){x(cl()),g(!1)}function pe(k,R,P){x(w=>w.map(($,le)=>le===k?{...$,[R]:P}:$))}function fe(){x(k=>[...k,{...Kp}])}function ye(k){if(f.length<=1){alert("Final exam needs at least one question");return}x(R=>R.filter((P,w)=>w!==k))}async function Se(k){if(k.preventDefault(),!s){alert("Please select a course first");return}const R=f.map(w=>({question_type:w.question_type,question:w.question.trim(),option_a:w.option_a.trim(),option_b:w.option_b.trim(),option_c:w.option_c.trim(),option_d:w.option_d.trim(),correct_option:w.correct_option,marks:Number(w.marks||1)}));if(R.some(w=>w.question?w.question_type==="open"?!1:!w.option_a||!w.option_b||!w.correct_option:!0)){alert("Each MCQ needs a question, option A, option B, and correct answer");return}M(!0);try{await p4(s,{questions:R}),alert("Final exam questions saved"),ce(),await ne(s)}catch(w){console.error(w),alert(w.message||"Failed to save final exam questions")}finally{M(!1)}}async function je(k){if(window.confirm("Delete this final exam question?"))try{await h4(k),await ne(s)}catch(R){console.error(R),alert(R.message||"Failed to delete question")}}async function Ne(k,R){const P=window.prompt("Enter total score percent",k.score||0);if(P!==null)try{await Qp(k.id,{score:Number(P),status:R,allow_reexam:R==="rejected"}),await de()}catch(w){console.error(w),alert(w.message||"Failed to review submission")}}async function xe(k){try{const R=await qp(k);alert(`Certificate assigned: ${R.certificateCode}`),await de()}catch(R){console.error(R),alert(R.message||"Failed to assign certificate")}}return n.jsxs(At,{title:"Final Exam & Certificates",children:[n.jsx("style",{children:`
        .admin-exam-page {
          display: grid;
          gap: 1.65rem;
          padding: 0.25rem 0;
        }

        .admin-exam-actions-bar {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .admin-exam-big-btn {
          border: 0;
          border-radius: 8px;
          min-height: 60px;
          padding: 0 1.5rem;
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          color: #ffffff;
          background: linear-gradient(135deg, #0ea5e9, #0284c7);
          font-size: 1.05rem;
          font-weight: 800;
          cursor: pointer;
          box-shadow: 0 12px 24px rgba(2, 132, 199, 0.16);
        }

        .admin-exam-big-btn.green {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          box-shadow: 0 12px 24px rgba(22, 163, 74, 0.16);
        }

        .admin-exam-panel {
          background: #ffffff;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 18px 42px rgba(15, 23, 42, 0.13);
          border: 1px solid #e2e8f0;
        }

        .admin-exam-header {
          padding: 1.55rem 1.7rem 0.8rem;
          background: #ffffff;
        }

        .admin-exam-header h2 {
          margin: 0 0 0.45rem;
          color: #10243f;
          font-size: 1.15rem;
        }

        .admin-exam-header p {
          margin: 0;
          color: #64748b;
          font-size: 0.92rem;
        }

        .admin-exam-controls {
          display: flex;
          gap: 0.85rem;
          flex-wrap: wrap;
          align-items: flex-end;
          padding: 0.4rem 1.7rem 1.35rem;
        }

        .admin-exam-field {
          display: grid;
          gap: 0.35rem;
          color: #334155;
          font-size: 0.82rem;
          font-weight: 800;
        }

        .admin-exam-select,
        .admin-exam-input,
        .admin-exam-textarea {
          width: 100%;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 0.75rem 0.85rem;
          color: #10243f;
          background: #ffffff;
          outline: none;
          font: inherit;
        }

        .admin-exam-select {
          min-width: 270px;
          height: 52px;
        }

        .admin-exam-textarea {
          min-height: 86px;
          resize: vertical;
        }

        .admin-exam-primary,
        .admin-exam-secondary,
        .admin-exam-danger {
          border: 0;
          border-radius: 8px;
          min-height: 48px;
          padding: 0 1.15rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.55rem;
          cursor: pointer;
          font-size: 0.95rem;
          font-weight: 800;
        }

        .admin-exam-primary {
          background: #003366;
          color: #ffffff;
        }

        .admin-exam-secondary {
          background: #e8eef6;
          color: #003366;
        }

        .admin-exam-danger {
          background: #fee2e2;
          color: #991b1b;
        }

        .admin-exam-toolbar {
          min-height: 92px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.25rem 1.45rem;
          background: #ffffff;
          flex-wrap: wrap;
          border-top: 1px solid #edf2f7;
        }

        .admin-exam-count,
        .admin-exam-search-wrap {
          color: #10243f;
          font-weight: 800;
        }

        .admin-exam-search-wrap {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .admin-exam-search {
          width: min(310px, 52vw);
          height: 52px;
          border: 1px solid #aeb7c2;
          border-radius: 8px;
          padding: 0.65rem 0.8rem;
          outline: none;
          font-size: 0.95rem;
          background: #ffffff;
        }

        .admin-exam-table-wrap {
          overflow-x: auto;
        }

        .admin-exam-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          background: #fff;
        }

        .admin-exam-table th,
        .admin-exam-table td {
          text-align: left;
          border-bottom: 1px solid #d7dde5;
          border-right: 1px solid #d7dde5;
          padding: 0.95rem 0.85rem;
          vertical-align: middle;
          font-size: 0.98rem;
          color: #0f172a;
        }

        .admin-exam-table th {
          position: relative;
          background: #20262c;
          color: #ffffff;
          white-space: nowrap;
          font-weight: 900;
          font-size: 1rem;
        }

        .admin-exam-table th::after {
          content: "";
          position: absolute;
          right: 0.65rem;
          top: 50%;
          width: 0;
          height: 0;
          border-left: 0.32rem solid transparent;
          border-right: 0.32rem solid transparent;
          border-bottom: 0.55rem solid rgba(255, 255, 255, 0.22);
          transform: translateY(-70%);
        }

        .admin-exam-table tbody tr:nth-child(odd) {
          background: #f1f1f1;
        }

        .admin-exam-action {
          border: 0;
          border-radius: 6px;
          min-height: 36px;
          padding: 0 0.7rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          cursor: pointer;
          font-size: 0.85rem;
          font-weight: 800;
          margin: 0.15rem;
        }

        .admin-exam-action.edit {
          background: #ffc107;
          color: #0f172a;
        }

        .admin-exam-action.delete {
          background: #ff3f4f;
          color: #ffffff;
        }

        .admin-exam-action.pass {
          background: #22c55e;
          color: #ffffff;
        }

        .admin-exam-action.cert {
          background: #22d3ee;
          color: #052f3f;
        }

        .admin-exam-empty {
          color: #64748b;
          margin: 1rem;
          padding: 1rem;
          border: 1px dashed #94a3b8;
          border-radius: 8px;
          background: #f8fafc;
        }

        .admin-exam-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          background: rgba(15, 23, 42, 0.55);
        }

        .admin-exam-modal {
          width: min(980px, 100%);
          max-height: calc(100vh - 2rem);
          overflow-y: auto;
          background: #ffffff;
          border-radius: 14px;
          border: 1px solid #dfe7ef;
          box-shadow: 0 24px 64px rgba(15, 23, 42, 0.22);
        }

        .admin-exam-modal-head {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.35rem 1.7rem 0.5rem;
        }

        .admin-exam-close {
          border: 0;
          background: #e8eef6;
          color: #003366;
          border-radius: 999px;
          width: 36px;
          height: 36px;
          cursor: pointer;
          font-size: 1.2rem;
          font-weight: 900;
        }

        .admin-exam-form {
          display: grid;
          gap: 1rem;
          padding: 0.4rem 1.7rem 1.4rem;
        }

        .admin-exam-question-card {
          border: 1px solid #dbe3ec;
          border-radius: 10px;
          padding: 1rem;
          display: grid;
          gap: 0.75rem;
          background: #f8fafc;
        }

        .admin-exam-question-head {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          align-items: center;
          color: #10243f;
          font-weight: 900;
        }

        .admin-exam-options-grid {
          display: grid;
          gap: 0.75rem;
        }

        .admin-exam-form-actions {
          display: flex;
          gap: 0.65rem;
          flex-wrap: wrap;
        }

        @media (min-width: 760px) {
          .admin-exam-options-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .admin-exam-controls,
          .admin-exam-header,
          .admin-exam-form {
            padding-left: 1.2rem;
            padding-right: 1.2rem;
          }

          .admin-exam-search-wrap {
            width: 100%;
            align-items: flex-start;
            flex-direction: column;
          }

          .admin-exam-search {
            width: 100%;
          }
        }
      `}),n.jsxs("div",{className:"admin-exam-page",children:[n.jsxs("div",{className:"admin-exam-actions-bar",children:[n.jsxs("button",{className:"admin-exam-big-btn green",type:"button",onClick:X,children:[n.jsx(U,{icon:tv}),"Add Final Exam"]}),n.jsxs("button",{className:"admin-exam-big-btn",type:"button",onClick:de,children:[n.jsx(U,{icon:Wl}),"Refresh"]})]}),n.jsxs("section",{className:"admin-exam-panel",children:[n.jsxs("div",{className:"admin-exam-header",children:[n.jsx("h2",{children:"Final Exam Questions"}),n.jsxs("p",{children:["Set final exam questions separately from student grading. Supports MCQ and open questions.",F?` Current course: ${Yf(F)}.`:""]})]}),n.jsxs("div",{className:"admin-exam-controls",children:[n.jsxs("label",{className:"admin-exam-field",children:["Course",n.jsxs("select",{className:"admin-exam-select",value:s,onChange:k=>d(k.target.value),disabled:_||a.length===0,children:[a.length===0&&n.jsx("option",{value:"",children:"No courses yet"}),a.map(k=>n.jsx("option",{value:k.id,children:Yf(k)},k.id))]})]}),n.jsxs("button",{className:"admin-exam-primary",type:"button",onClick:X,children:[n.jsx(U,{icon:Rt}),"Add/Edit Questions"]})]}),z&&n.jsx("div",{className:"admin-exam-empty",children:z}),_&&n.jsx("div",{className:"admin-exam-empty",children:"Loading courses..."}),!_&&s&&u.length===0&&n.jsx("div",{className:"admin-exam-empty",children:"Select a course above to create or edit its final exam questions."}),!_&&s&&u.length>0&&n.jsx("div",{className:"admin-exam-table-wrap",children:n.jsxs("table",{className:"admin-exam-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"ID"}),n.jsx("th",{children:"Question"}),n.jsx("th",{children:"Type"}),n.jsx("th",{children:"Correct"}),n.jsx("th",{children:"Marks"}),n.jsx("th",{children:"Actions"})]})}),n.jsx("tbody",{children:u.map(k=>n.jsxs("tr",{children:[n.jsx("td",{children:k.id}),n.jsx("td",{children:k.question}),n.jsx("td",{children:k.question_type}),n.jsx("td",{children:k.correct_answer||"Manual"}),n.jsx("td",{children:k.marks}),n.jsxs("td",{children:[n.jsxs("button",{className:"admin-exam-action edit",type:"button",onClick:X,children:[n.jsx(U,{icon:ba}),"Edit"]}),n.jsxs("button",{className:"admin-exam-action delete",type:"button",onClick:()=>je(k.id),children:[n.jsx(U,{icon:$n}),"Delete"]})]})]},k.id))})]})})]}),n.jsxs("section",{className:"admin-exam-panel",children:[n.jsxs("div",{className:"admin-exam-header",children:[n.jsx("h2",{children:"Final Exam Grading & Submissions"}),n.jsx("p",{children:"Review answers, allow re-exam for failed students, and assign certificates only to competent students."})]}),n.jsxs("div",{className:"admin-exam-toolbar",children:[n.jsxs("div",{className:"admin-exam-count",children:["Showing ",n.jsx("strong",{children:D.length})," of ",n.jsx("strong",{children:h.length})," submissions"]}),n.jsxs("label",{className:"admin-exam-search-wrap",children:["Search submissions:",n.jsx("input",{className:"admin-exam-search",type:"search",value:y,onChange:k=>C(k.target.value)})]}),n.jsx("button",{className:"admin-exam-primary",type:"button",onClick:de,children:"Refresh"})]}),h.length===0?n.jsx("div",{className:"admin-exam-empty",children:"No final exam submissions found."}):n.jsx("div",{className:"admin-exam-table-wrap",children:n.jsxs("table",{className:"admin-exam-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"ID"}),n.jsx("th",{children:"Student"}),n.jsx("th",{children:"Email"}),n.jsx("th",{children:"Course"}),n.jsx("th",{children:"Status"}),n.jsx("th",{children:"Total Score"}),n.jsx("th",{children:"Certificate"}),n.jsx("th",{children:"Re-exam"}),n.jsx("th",{children:"Submitted"}),n.jsx("th",{children:"Actions"})]})}),n.jsx("tbody",{children:D.map(k=>n.jsxs("tr",{children:[n.jsx("td",{children:k.id}),n.jsx("td",{children:k.student_name}),n.jsx("td",{children:k.student_email}),n.jsx("td",{children:k.course_title}),n.jsx("td",{children:k.status}),n.jsxs("td",{children:[k.score||0,"%"]}),n.jsx("td",{children:k.certificate_code||"Not assigned"}),n.jsx("td",{children:k.allow_reexam?"Yes":"No"}),n.jsx("td",{children:k.created_at?new Date(k.created_at).toLocaleDateString():"-"}),n.jsxs("td",{children:[n.jsx("button",{className:"admin-exam-action pass",type:"button",onClick:()=>Ne(k,"approved"),children:"Approve"}),n.jsx("button",{className:"admin-exam-action delete",type:"button",onClick:()=>Ne(k,"rejected"),children:"Re-exam"}),n.jsxs("button",{className:"admin-exam-action cert",type:"button",onClick:()=>xe(k.id),children:[n.jsx(U,{icon:wr}),"Certificate"]})]})]},k.id))})]})})]}),v&&n.jsx("div",{className:"admin-exam-modal-backdrop",role:"presentation",onClick:ce,children:n.jsxs("section",{className:"admin-exam-modal",role:"dialog","aria-modal":"true",onClick:k=>k.stopPropagation(),children:[n.jsxs("div",{className:"admin-exam-modal-head",children:[n.jsxs("div",{className:"admin-exam-header",children:[n.jsx("h2",{children:"Final Exam Questions"}),n.jsx("p",{children:"Saving replaces all final exam questions for the selected course."})]}),n.jsx("button",{className:"admin-exam-close",type:"button",onClick:ce,"aria-label":"Close final exam form",children:"x"})]}),n.jsxs("form",{className:"admin-exam-form",onSubmit:Se,children:[f.map((k,R)=>n.jsxs("div",{className:"admin-exam-question-card",children:[n.jsxs("div",{className:"admin-exam-question-head",children:[n.jsxs("span",{children:["Question ",R+1]}),f.length>1&&n.jsx("button",{className:"admin-exam-danger",type:"button",onClick:()=>ye(R),children:"Remove"})]}),n.jsxs("label",{className:"admin-exam-field",children:["Question type",n.jsxs("select",{className:"admin-exam-select",value:k.question_type,onChange:P=>pe(R,"question_type",P.target.value),children:[n.jsx("option",{value:"mcq",children:"Multiple Choice"}),n.jsx("option",{value:"open",children:"Open Answer"})]})]}),n.jsxs("label",{className:"admin-exam-field",children:["Question",n.jsx("textarea",{className:"admin-exam-textarea",value:k.question,onChange:P=>pe(R,"question",P.target.value),placeholder:"Write final exam question..."})]}),k.question_type==="mcq"&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"admin-exam-options-grid",children:["a","b","c","d"].map(P=>n.jsxs("label",{className:"admin-exam-field",children:["Option ",P.toUpperCase(),n.jsx("input",{className:"admin-exam-input",value:k[`option_${P}`],onChange:w=>pe(R,`option_${P}`,w.target.value)})]},P))}),n.jsxs("label",{className:"admin-exam-field",children:["Correct answer",n.jsxs("select",{className:"admin-exam-select",value:k.correct_option,onChange:P=>pe(R,"correct_option",P.target.value),children:[n.jsx("option",{value:"A",children:"A"}),n.jsx("option",{value:"B",children:"B"}),n.jsx("option",{value:"C",children:"C"}),n.jsx("option",{value:"D",children:"D"})]})]})]}),n.jsxs("label",{className:"admin-exam-field",children:["Marks",n.jsx("input",{className:"admin-exam-input",type:"number",min:"1",value:k.marks,onChange:P=>pe(R,"marks",P.target.value)})]})]},`exam-question-${R}`)),n.jsxs("div",{className:"admin-exam-form-actions",children:[n.jsxs("button",{className:"admin-exam-secondary",type:"button",onClick:fe,children:[n.jsx(U,{icon:Rt}),"Add Question"]}),n.jsx("button",{className:"admin-exam-primary",type:"submit",disabled:A,children:A?"Saving...":"Save Final Exam"}),n.jsx("button",{className:"admin-exam-secondary",type:"button",onClick:ce,children:"Cancel"})]})]})]})})]})]})}const Gf={title:"",type:"section",content:"",youtube_url:"",file_url:"",file:null};function I4(a){return a.title||a.name||"Untitled course"}function Xf(a){return a.youtube_url?"Video":a.file_url?"File":"Section"}function T4(){const[a,l]=N.useState([]),[s,d]=N.useState([]),[u,p]=N.useState([]),[h,b]=N.useState(""),[f,x]=N.useState(""),[v,g]=N.useState(Gf),[y,C]=N.useState(null),[_,I]=N.useState(!1),[A,M]=N.useState(""),[z,W]=N.useState(!0),[F,D]=N.useState(!1),[G,ne]=N.useState("");N.useEffect(()=>{ce()},[]),N.useEffect(()=>{h?pe(h):(d([]),x(""))},[h]),N.useEffect(()=>{f?fe(f):p([])},[f]);const de=s.find(P=>String(P.id)===String(f)),X=N.useMemo(()=>{const P=A.trim().toLowerCase();return P?u.filter(w=>[w.id,w.title,w.content,w.youtube_url,w.file_url,Xf(w)].some($=>String($||"").toLowerCase().includes(P))):u},[u,A]);async function ce(){var P;try{W(!0),ne("");const w=await jr(),$=Array.isArray(w)?w:[];l($),b((P=$[0])!=null&&P.id?String($[0].id):"")}catch(w){console.error(w),ne(w.message||"Failed to load courses")}finally{W(!1)}}async function pe(P){var w;try{ne("");const $=await Fn(P),le=Array.isArray($)?$:[];d(le),x((w=le[0])!=null&&w.id?String(le[0].id):"")}catch($){console.error($),ne($.message||"Failed to load modules")}}async function fe(P){try{ne("");const w=await o3(P);p(Array.isArray(w)?w:[])}catch(w){console.error(w),ne(w.message||"Failed to load materials")}}function ye(){g(Gf),C(null)}function Se(){ye(),I(!0)}function je(){ye(),I(!1)}function Ne(P){g({...v,[P.target.name]:P.target.value})}function xe(P){C(P.id),g({title:P.title||"",type:P.youtube_url?"video":P.file_url?"file":"section",content:P.content||"",youtube_url:P.youtube_url||"",file_url:P.file_url||"",file:null}),I(!0)}async function k(P){if(P.preventDefault(),!f){alert("Please choose a module first");return}if(!v.title.trim()){alert("Section title is required");return}D(!0);try{const w=new FormData;w.append("title",v.title.trim()),w.append("content",v.content.trim()),w.append("youtube_url",v.type==="video"?v.youtube_url.trim():""),w.append("file_url",v.type==="file"?v.file_url.trim():""),v.type==="file"&&v.file&&w.append("file",v.file),y?(await c3(y,w),alert("Material updated")):(await l3(f,w),alert("Material saved")),ye(),I(!1),await fe(f)}catch(w){console.error(w),alert(w.message||"Failed to save material")}finally{D(!1)}}async function R(P){if(window.confirm("Delete this material?"))try{await d3(P),y===P&&ye(),await fe(f)}catch(w){console.error(w),alert(w.message||"Failed to delete material")}}return n.jsxs(At,{title:"Materials",children:[n.jsx("style",{children:`
        .admin-materials-page {
          display: grid;
          gap: 1.65rem;
          padding: 0.25rem 0;
        }

        .admin-materials-actions-bar {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .admin-materials-big-btn {
          border: 0;
          border-radius: 8px;
          min-height: 60px;
          padding: 0 1.5rem;
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          color: #ffffff;
          background: linear-gradient(135deg, #0ea5e9, #0284c7);
          font-size: 1.05rem;
          font-weight: 800;
          cursor: pointer;
          box-shadow: 0 12px 24px rgba(2, 132, 199, 0.16);
        }

        .admin-materials-big-btn.green {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          box-shadow: 0 12px 24px rgba(22, 163, 74, 0.16);
        }

        .admin-materials-list-panel {
          background: #ffffff;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 18px 42px rgba(15, 23, 42, 0.13);
          border: 1px solid #e2e8f0;
        }

        .admin-materials-header {
          padding: 1.55rem 1.7rem 0.8rem;
          background: #ffffff;
        }

        .admin-materials-header h2 {
          margin: 0 0 0.45rem;
          color: #10243f;
          font-size: 1.15rem;
        }

        .admin-materials-header p {
          margin: 0;
          color: #64748b;
          font-size: 0.92rem;
        }

        .admin-materials-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          background: rgba(15, 23, 42, 0.55);
        }

        .admin-materials-modal {
          width: min(920px, 100%);
          max-height: calc(100vh - 2rem);
          overflow-y: auto;
          background: #ffffff;
          border-radius: 14px;
          border: 1px solid #dfe7ef;
          box-shadow: 0 24px 64px rgba(15, 23, 42, 0.22);
        }

        .admin-materials-modal-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.35rem 1.7rem 0.5rem;
        }

        .admin-materials-close {
          border: 0;
          background: #e8eef6;
          color: #003366;
          border-radius: 999px;
          width: 36px;
          height: 36px;
          cursor: pointer;
          font-size: 1.2rem;
          font-weight: 900;
        }

        .admin-materials-form {
          display: grid;
          gap: 0.85rem;
          padding: 0.4rem 1.7rem 1.4rem;
        }

        .admin-materials-select-row {
          display: flex;
          gap: 0.85rem;
          flex-wrap: wrap;
        }

        .admin-materials-field {
          display: grid;
          gap: 0.35rem;
          color: #334155;
          font-size: 0.82rem;
          font-weight: 800;
        }

        .admin-materials-select,
        .admin-materials-input,
        .admin-materials-textarea {
          width: 100%;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 0.75rem 0.85rem;
          color: #10243f;
          background: #ffffff;
          outline: none;
          font: inherit;
        }

        .admin-materials-select {
          min-width: 170px;
          height: 52px;
        }

        .admin-materials-input {
          min-height: 52px;
        }

        .admin-materials-textarea {
          min-height: 128px;
          resize: vertical;
        }

        .admin-materials-select:focus,
        .admin-materials-input:focus,
        .admin-materials-textarea:focus,
        .admin-materials-search:focus {
          border-color: #0ea5e9;
          box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.14);
        }

        .admin-materials-primary,
        .admin-materials-secondary {
          border: 0;
          border-radius: 8px;
          min-height: 48px;
          padding: 0 1.15rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.55rem;
          cursor: pointer;
          font-size: 0.95rem;
          font-weight: 800;
        }

        .admin-materials-primary {
          background: #003366;
          color: #ffffff;
        }

        .admin-materials-secondary {
          background: #e8eef6;
          color: #003366;
        }

        .admin-materials-form-actions {
          display: flex;
          gap: 0.65rem;
          flex-wrap: wrap;
        }

        .admin-materials-toolbar {
          min-height: 92px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.25rem 1.45rem;
          background: #ffffff;
          flex-wrap: wrap;
        }

        .admin-materials-count {
          color: #10243f;
          font-weight: 800;
        }

        .admin-materials-search-wrap {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.35rem;
          color: #10243f;
          font-size: 1rem;
          font-weight: 800;
        }

        .admin-materials-search {
          width: min(310px, 52vw);
          height: 52px;
          border: 1px solid #aeb7c2;
          border-radius: 8px;
          padding: 0.65rem 0.8rem;
          outline: none;
          font-size: 0.95rem;
          background: #ffffff;
        }

        .admin-materials-table-wrap {
          overflow-x: auto;
        }

        .admin-materials-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          background: #fff;
        }

        .admin-materials-table th,
        .admin-materials-table td {
          text-align: left;
          border-bottom: 1px solid #d7dde5;
          border-right: 1px solid #d7dde5;
          padding: 0.95rem 0.85rem;
          vertical-align: middle;
          font-size: 0.98rem;
          color: #0f172a;
        }

        .admin-materials-table th {
          position: relative;
          background: #20262c;
          color: #ffffff;
          white-space: nowrap;
          font-weight: 900;
          font-size: 1rem;
        }

        .admin-materials-table th::after {
          content: "";
          position: absolute;
          right: 0.65rem;
          top: 50%;
          width: 0;
          height: 0;
          border-left: 0.32rem solid transparent;
          border-right: 0.32rem solid transparent;
          border-bottom: 0.55rem solid rgba(255, 255, 255, 0.22);
          transform: translateY(-70%);
        }

        .admin-materials-table th:last-child,
        .admin-materials-table td:last-child {
          border-right: none;
        }

        .admin-materials-table tbody tr:nth-child(odd) {
          background: #f1f1f1;
        }

        .admin-materials-table tbody tr:nth-child(even) {
          background: #ffffff;
        }

        .admin-materials-row-actions {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.45rem;
        }

        .admin-material-action {
          border: 0;
          border-radius: 6px;
          min-width: 92px;
          min-height: 38px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 700;
        }

        .admin-material-action.edit {
          background: #ffc107;
          color: #0f172a;
        }

        .admin-material-action.delete {
          background: #ff3f4f;
          color: #ffffff;
        }

        .admin-materials-link {
          color: #003366;
          font-weight: 800;
          text-decoration: none;
        }

        .admin-materials-empty {
          color: #64748b;
          margin: 1rem;
          padding: 1rem;
          border: 1px dashed #94a3b8;
          border-radius: 8px;
          background: #f8fafc;
        }

        @media (max-width: 760px) {
          .admin-materials-form,
          .admin-materials-header {
            padding-left: 1.2rem;
            padding-right: 1.2rem;
          }

          .admin-materials-select-row {
            flex-direction: column;
          }

          .admin-materials-search-wrap {
            width: 100%;
            align-items: flex-start;
            flex-direction: column;
          }

          .admin-materials-search {
            width: 100%;
          }
        }
      `}),n.jsxs("div",{className:"admin-materials-page",children:[n.jsxs("div",{className:"admin-materials-actions-bar",children:[n.jsxs("button",{className:"admin-materials-big-btn green",type:"button",onClick:Se,children:[n.jsx(U,{icon:fp}),"Add Material"]}),n.jsxs("button",{className:"admin-materials-big-btn",type:"button",onClick:()=>window.location.hash="/admin/modules",children:[n.jsx(U,{icon:Rt}),"Add Module"]})]}),n.jsxs("section",{className:"admin-materials-list-panel",children:[n.jsxs("div",{className:"admin-materials-toolbar",children:[n.jsxs("div",{className:"admin-materials-count",children:["Showing ",n.jsx("strong",{children:X.length})," of ",n.jsx("strong",{children:u.length})," materials"]}),n.jsxs("label",{className:"admin-materials-search-wrap",children:["Search materials:",n.jsx("input",{className:"admin-materials-search",type:"search",value:A,onChange:P=>M(P.target.value)})]})]}),G&&n.jsx("div",{className:"admin-materials-empty",children:G}),z&&n.jsx("div",{className:"admin-materials-empty",children:"Loading courses..."}),!z&&a.length===0&&n.jsx("div",{className:"admin-materials-empty",children:"No courses yet. Create a public course first."}),!z&&a.length>0&&s.length===0&&n.jsx("div",{className:"admin-materials-empty",children:"No modules yet. Create modules for this course first."}),!z&&f&&u.length===0&&n.jsx("div",{className:"admin-materials-empty",children:"No materials have been saved for this module yet."}),!z&&f&&u.length>0&&n.jsx("div",{className:"admin-materials-table-wrap",children:n.jsxs("table",{className:"admin-materials-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"ID"}),n.jsx("th",{children:"Title"}),n.jsx("th",{children:"Module"}),n.jsx("th",{children:"Type"}),n.jsx("th",{children:"Link/File"}),n.jsx("th",{children:"Actions"})]})}),n.jsx("tbody",{children:X.map(P=>n.jsxs("tr",{children:[n.jsx("td",{children:P.id}),n.jsx("td",{children:P.title}),n.jsx("td",{children:P.module_title||(de==null?void 0:de.title)||"Module"}),n.jsx("td",{children:Xf(P)}),n.jsxs("td",{children:[P.youtube_url&&n.jsx("a",{className:"admin-materials-link",href:P.youtube_url,target:"_blank",rel:"noreferrer",children:"Open video"}),P.file_url&&n.jsx("a",{className:"admin-materials-link",href:ct(P.file_url),target:"_blank",rel:"noreferrer",children:"Open file"}),!P.youtube_url&&!P.file_url&&"Paragraph"]}),n.jsx("td",{children:n.jsxs("div",{className:"admin-materials-row-actions",children:[n.jsxs("button",{className:"admin-material-action edit",type:"button",onClick:()=>xe(P),children:[n.jsx(U,{icon:ba}),"Edit"]}),n.jsxs("button",{className:"admin-material-action delete",type:"button",onClick:()=>R(P.id),children:[n.jsx(U,{icon:$n}),"Delete"]})]})})]},P.id))})]})})]}),_&&n.jsx("div",{className:"admin-materials-modal-backdrop",role:"presentation",onClick:je,children:n.jsxs("section",{className:"admin-materials-modal",role:"dialog","aria-modal":"true",onClick:P=>P.stopPropagation(),children:[n.jsxs("div",{className:"admin-materials-modal-head",children:[n.jsxs("div",{className:"admin-materials-header",children:[n.jsx("h2",{children:y?"Edit Material":"Sections, Notes & Videos"}),n.jsxs("p",{children:["Choose a course and module, then add student learning content.",de?` Current module: ${de.title}.`:""]})]}),n.jsx("button",{className:"admin-materials-close",type:"button",onClick:je,"aria-label":"Close material form",children:"x"})]}),n.jsxs("form",{className:"admin-materials-form",onSubmit:k,children:[n.jsxs("div",{className:"admin-materials-select-row",children:[n.jsxs("label",{className:"admin-materials-field",children:["Course",n.jsxs("select",{className:"admin-materials-select",value:h,onChange:P=>{b(P.target.value),ye()},disabled:z||a.length===0,children:[a.length===0&&n.jsx("option",{value:"",children:"No courses yet"}),a.map(P=>n.jsx("option",{value:P.id,children:I4(P)},P.id))]})]}),n.jsxs("label",{className:"admin-materials-field",children:["Module",n.jsxs("select",{className:"admin-materials-select",value:f,onChange:P=>{x(P.target.value),ye()},disabled:s.length===0,children:[s.length===0&&n.jsx("option",{value:"",children:"No modules yet"}),s.map(P=>n.jsx("option",{value:P.id,children:P.title},P.id))]})]})]}),n.jsxs("label",{className:"admin-materials-field",children:["Section title",n.jsx("input",{className:"admin-materials-input",name:"title",value:v.title,onChange:Ne,placeholder:"Section title"})]}),n.jsxs("label",{className:"admin-materials-field",children:["Material type",n.jsxs("select",{className:"admin-materials-select",name:"type",value:v.type,onChange:Ne,children:[n.jsx("option",{value:"section",children:"Section / Paragraph"}),n.jsx("option",{value:"video",children:"YouTube Video"}),n.jsx("option",{value:"file",children:"File Upload"})]})]}),v.type==="video"&&n.jsxs("label",{className:"admin-materials-field",children:["YouTube link",n.jsx("input",{className:"admin-materials-input",name:"youtube_url",value:v.youtube_url,onChange:Ne,placeholder:"https://youtube.com/..."})]}),v.type==="file"&&n.jsxs("label",{className:"admin-materials-field",children:["File",n.jsx("input",{className:"admin-materials-input",type:"file",onChange:P=>{var w;return g({...v,file:((w=P.target.files)==null?void 0:w[0])||null})}})]}),n.jsxs("label",{className:"admin-materials-field",children:["Paragraph / notes",n.jsx("textarea",{className:"admin-materials-textarea",name:"content",value:v.content,onChange:Ne,placeholder:"Write section paragraphs here..."})]}),n.jsxs("div",{className:"admin-materials-form-actions",children:[n.jsxs("button",{className:"admin-materials-primary",type:"submit",disabled:F,children:[n.jsx(U,{icon:Rt}),F?"Saving...":y?"Update Material":"Save Material"]}),n.jsx("button",{className:"admin-materials-secondary",type:"button",onClick:je,children:"Cancel"})]})]})]})})]})]})}function Kf(a){return a.title||a.name||"Untitled course"}function F4(){const[a,l]=N.useState([]),[s,d]=N.useState(""),[u,p]=N.useState([]),[h,b]=N.useState(""),[f,x]=N.useState(""),[v,g]=N.useState(!0),[y,C]=N.useState(!1),[_,I]=N.useState("");N.useEffect(()=>{z()},[]),N.useEffect(()=>{s?W(s):p([])},[s]);const A=a.find(G=>String(G.id)===String(s)),M=N.useMemo(()=>{const G=f.trim().toLowerCase();return G?u.filter(ne=>[ne.id,ne.title,ne.order_number,ne.materials_count].some(de=>String(de||"").toLowerCase().includes(G))):u},[u,f]);async function z(){try{g(!0),I("");const G=await jr(),ne=Array.isArray(G)?G:[];l(ne),d(de=>{var X;return de||((X=ne[0])!=null&&X.id?String(ne[0].id):"")})}catch(G){console.error(G),I(G.message||"Failed to load courses")}finally{g(!1)}}async function W(G){try{C(!0),I("");const ne=await Fn(G);p(Array.isArray(ne)?ne:[])}catch(ne){console.error(ne),I(ne.message||"Failed to load modules")}finally{C(!1)}}async function F(G){if(G.preventDefault(),!s){alert("Please choose a course first");return}if(!h.trim()){alert("Module title is required");return}try{await Ep(s,{title:h.trim()}),b(""),await W(s)}catch(ne){console.error(ne),alert(ne.message||"Failed to add module")}}async function D(G){if(window.confirm("Delete this module?"))try{await zp(G),await W(s)}catch(ne){console.error(ne),alert(ne.message||"Failed to delete module")}}return n.jsxs(At,{title:"Curriculum",children:[n.jsx("style",{children:`
        .admin-modules-page {
          display: grid;
          gap: 1.65rem;
          padding: 0.25rem 0;
        }

        .admin-modules-actions-bar {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .admin-modules-big-btn {
          border: 0;
          border-radius: 8px;
          min-height: 60px;
          padding: 0 1.5rem;
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          color: #ffffff;
          background: linear-gradient(135deg, #0ea5e9, #0284c7);
          font-size: 1.05rem;
          font-weight: 800;
          cursor: pointer;
          box-shadow: 0 12px 24px rgba(2, 132, 199, 0.16);
        }

        .admin-modules-big-btn.green {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          box-shadow: 0 12px 24px rgba(22, 163, 74, 0.16);
        }

        .admin-modules-panel {
          background: #ffffff;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 18px 42px rgba(15, 23, 42, 0.13);
          border: 1px solid #e2e8f0;
        }

        .admin-modules-header {
          padding: 1.55rem 1.7rem 0.75rem;
          background: #ffffff;
        }

        .admin-modules-header h2 {
          margin: 0 0 0.45rem;
          color: #10243f;
          font-size: 1.15rem;
        }

        .admin-modules-header p {
          margin: 0;
          color: #64748b;
          font-size: 0.92rem;
        }

        .admin-modules-form {
          display: flex;
          align-items: flex-end;
          gap: 0.85rem;
          padding: 0.5rem 1.7rem 1.35rem;
          flex-wrap: wrap;
        }

        .admin-modules-field {
          display: grid;
          gap: 0.35rem;
          color: #334155;
          font-size: 0.82rem;
          font-weight: 800;
        }

        .admin-modules-select,
        .admin-modules-input {
          width: min(270px, 82vw);
          height: 52px;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 0.65rem 0.8rem;
          color: #10243f;
          background: #ffffff;
          outline: none;
          font-size: 0.95rem;
        }

        .admin-modules-select:focus,
        .admin-modules-input:focus,
        .admin-modules-search:focus {
          border-color: #0ea5e9;
          box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.14);
        }

        .admin-modules-primary {
          border: 0;
          border-radius: 8px;
          min-height: 52px;
          padding: 0 1.2rem;
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          background: #003366;
          color: #ffffff;
          cursor: pointer;
          font-size: 0.95rem;
          font-weight: 800;
        }

        .admin-modules-toolbar {
          min-height: 92px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.25rem 1.45rem;
          background: #ffffff;
          flex-wrap: wrap;
        }

        .admin-modules-count {
          color: #10243f;
          font-weight: 800;
        }

        .admin-modules-search-wrap {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.35rem;
          color: #10243f;
          font-size: 1rem;
          font-weight: 800;
        }

        .admin-modules-search {
          width: min(310px, 52vw);
          height: 52px;
          border: 1px solid #aeb7c2;
          border-radius: 8px;
          padding: 0.65rem 0.8rem;
          outline: none;
          font-size: 0.95rem;
          background: #ffffff;
        }

        .admin-modules-table-wrap {
          overflow-x: auto;
        }

        .admin-modules-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          background: #fff;
        }

        .admin-modules-table th,
        .admin-modules-table td {
          text-align: left;
          border-bottom: 1px solid #d7dde5;
          border-right: 1px solid #d7dde5;
          padding: 0.95rem 0.85rem;
          vertical-align: middle;
          font-size: 0.98rem;
          color: #0f172a;
        }

        .admin-modules-table th {
          position: relative;
          background: #20262c;
          color: #ffffff;
          white-space: nowrap;
          font-weight: 900;
          font-size: 1rem;
        }

        .admin-modules-table th::after {
          content: "";
          position: absolute;
          right: 0.65rem;
          top: 50%;
          width: 0;
          height: 0;
          border-left: 0.32rem solid transparent;
          border-right: 0.32rem solid transparent;
          border-bottom: 0.55rem solid rgba(255, 255, 255, 0.22);
          transform: translateY(-70%);
        }

        .admin-modules-table th:last-child,
        .admin-modules-table td:last-child {
          border-right: none;
        }

        .admin-modules-table tbody tr:nth-child(odd) {
          background: #f1f1f1;
        }

        .admin-modules-table tbody tr:nth-child(even) {
          background: #ffffff;
        }

        .admin-module-action {
          border: 0;
          border-radius: 6px;
          min-width: 96px;
          min-height: 38px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 700;
        }

        .admin-module-action.delete {
          background: #ff3f4f;
          color: #ffffff;
        }

        .admin-modules-empty {
          color: #64748b;
          margin: 1rem;
          padding: 1rem;
          border: 1px dashed #94a3b8;
          border-radius: 8px;
          background: #f8fafc;
        }

        @media (max-width: 760px) {
          .admin-modules-form {
            align-items: stretch;
            flex-direction: column;
            padding: 0.5rem 1.2rem 1.2rem;
          }

          .admin-modules-select,
          .admin-modules-input,
          .admin-modules-primary {
            width: 100%;
          }

          .admin-modules-search-wrap {
            width: 100%;
            align-items: flex-start;
            flex-direction: column;
          }

          .admin-modules-search {
            width: 100%;
          }

          .admin-modules-header {
            padding: 1.2rem;
          }
        }
      `}),n.jsxs("div",{className:"admin-modules-page",children:[n.jsxs("div",{className:"admin-modules-actions-bar",children:[n.jsxs("button",{className:"admin-modules-big-btn green",type:"button",onClick:()=>{var G;return(G=document.querySelector(".admin-modules-input"))==null?void 0:G.focus()},children:[n.jsx(U,{icon:xp}),"Add Module"]}),n.jsxs("button",{className:"admin-modules-big-btn",type:"button",onClick:()=>window.location.hash="/admin/courses",children:[n.jsx(U,{icon:wa}),"Public Courses"]})]}),n.jsxs("section",{className:"admin-modules-panel",children:[n.jsxs("div",{className:"admin-modules-header",children:[n.jsx("h2",{children:"Modules per Course"}),n.jsxs("p",{children:["Choose a public course, add learning modules, and remove old curriculum units.",A?` Current course: ${Kf(A)}.`:""]})]}),n.jsxs("form",{className:"admin-modules-form",onSubmit:F,children:[n.jsxs("label",{className:"admin-modules-field",children:["Course",n.jsxs("select",{className:"admin-modules-select",value:s,onChange:G=>d(G.target.value),disabled:v||a.length===0,children:[a.length===0&&n.jsx("option",{value:"",children:"No courses yet"}),a.map(G=>n.jsx("option",{value:G.id,children:Kf(G)},G.id))]})]}),n.jsxs("label",{className:"admin-modules-field",children:["Module title",n.jsx("input",{className:"admin-modules-input",value:h,onChange:G=>b(G.target.value),placeholder:"Module title"})]}),n.jsxs("button",{className:"admin-modules-primary",type:"submit",children:[n.jsx(U,{icon:Rt}),"Add module"]})]}),n.jsxs("div",{className:"admin-modules-toolbar",children:[n.jsxs("div",{className:"admin-modules-count",children:["Showing ",n.jsx("strong",{children:M.length})," of ",n.jsx("strong",{children:u.length})," modules"]}),n.jsxs("label",{className:"admin-modules-search-wrap",children:["Search modules:",n.jsx("input",{className:"admin-modules-search",type:"search",value:f,onChange:G=>x(G.target.value)})]})]}),_&&n.jsx("div",{className:"admin-modules-empty",children:_}),v&&n.jsx("div",{className:"admin-modules-empty",children:"Loading courses..."}),!v&&a.length===0&&n.jsx("div",{className:"admin-modules-empty",children:"No public courses yet. Create a course first, then add modules here."}),y&&n.jsx("div",{className:"admin-modules-empty",children:"Loading modules..."}),!v&&!y&&s&&u.length===0&&n.jsx("div",{className:"admin-modules-empty",children:"No modules have been added for this course yet."}),!v&&!y&&s&&u.length>0&&n.jsx("div",{className:"admin-modules-table-wrap",children:n.jsxs("table",{className:"admin-modules-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"ID"}),n.jsx("th",{children:"Title"}),n.jsx("th",{children:"Order"}),n.jsx("th",{children:"Materials"}),n.jsx("th",{children:"Actions"})]})}),n.jsx("tbody",{children:M.map(G=>n.jsxs("tr",{children:[n.jsx("td",{children:G.id}),n.jsx("td",{children:G.title}),n.jsx("td",{children:G.order_number}),n.jsx("td",{children:G.materials_count||0}),n.jsx("td",{children:n.jsxs("button",{className:"admin-module-action delete",type:"button",onClick:()=>D(G.id),children:[n.jsx(U,{icon:$n}),"Delete"]})})]},G.id))})]})})]})]})]})}function O4({children:a}){return n.jsx("div",{className:"card-grid",children:a})}function Oi({label:a,value:l}){return n.jsxs("article",{className:"stat",children:[n.jsx("strong",{children:l}),n.jsx("span",{children:a})]})}const R4=["Courses","Modules","Materials","Assessments","Final Exam","Exam Submissions","Students","Products","Certificates"];function D4(){return n.jsxs(At,{title:"Admin Dashboard",children:[n.jsxs("div",{className:"dashboard-grid",children:[n.jsx(Oi,{label:"Students",value:"128"}),n.jsx(Oi,{label:"Courses",value:"4"}),n.jsx(Oi,{label:"Submissions",value:"23"}),n.jsx(Oi,{label:"Certificates",value:"41"})]}),n.jsx(O4,{children:R4.map(a=>n.jsxs("div",{className:"mini-card",children:[n.jsx(k4,{size:20}),n.jsx("strong",{children:a}),n.jsxs("span",{children:["Manage ",a.toLowerCase()]})]},a))})]})}const Jf={title:"",description:"",full_description:"",category:"Product",price:"",discount:"0",stock_quantity:"0",specifications:"",image_url:"",image:null};function $4(){const[a,l]=N.useState([]),[s,d]=N.useState(Jf),[u,p]=N.useState(null),[h,b]=N.useState(!1),[f,x]=N.useState(""),[v,g]=N.useState(!0),[y,C]=N.useState(!1),[_,I]=N.useState("");N.useEffect(()=>{M()},[]);const A=N.useMemo(()=>{const X=f.trim().toLowerCase();return X?a.filter(ce=>[ce.title,ce.description,ce.full_description,ce.category,ce.price,ce.discount,ce.stock_quantity,ce.specifications].some(pe=>String(pe||"").toLowerCase().includes(X))):a},[a,f]);async function M(){try{g(!0),I("");const X=await Gl();l(Array.isArray(X)?X:[])}catch(X){console.error(X),I(X.message||"Failed to load products")}finally{g(!1)}}function z(X){d(ce=>({...ce,[X.target.name]:X.target.value}))}function W(){d(Jf),p(null)}function F(){W(),b(!0)}function D(){W(),b(!1)}function G(X){p(X.id),d({title:X.title||"",description:X.description||"",full_description:X.full_description||"",category:X.category||"Product",price:X.price??"",discount:X.discount??"0",stock_quantity:X.stock_quantity??"0",specifications:X.specifications||"",image_url:X.image_url||"",image:null}),b(!0)}async function ne(X){if(X.preventDefault(),y)return;const ce=s.title.trim(),pe=String(s.price??"").trim();if(!ce||!pe){alert("Product title and price are required");return}C(!0);try{const fe=new FormData;fe.append("title",ce),fe.append("description",s.description.trim()),fe.append("full_description",s.full_description.trim()),fe.append("category",s.category.trim()||"Product"),fe.append("price",pe),fe.append("discount",s.discount||0),fe.append("stock_quantity",s.stock_quantity||0),fe.append("specifications",s.specifications.trim()),fe.append("image_url",s.image_url.trim()),s.image&&fe.append("image",s.image),u?(await j3(u,fe),alert("Product updated")):(await w3(fe),alert("Product created")),D(),await M()}catch(fe){console.error(fe),alert(fe.message||"Failed to save product")}finally{C(!1)}}async function de(X){if(window.confirm("Delete this product?"))try{await k3(X),u===X&&W(),await M()}catch(ce){console.error(ce),alert(ce.message||"Failed to delete product")}}return n.jsxs(At,{title:"Products",children:[n.jsx("style",{children:`
        .admin-products-page{display:grid;gap:1.65rem;padding:.25rem 0}.admin-products-actions-bar{display:flex;align-items:center;gap:1rem;flex-wrap:wrap}.admin-products-big-btn{border:0;border-radius:8px;min-height:60px;padding:0 1.5rem;display:inline-flex;align-items:center;gap:1rem;color:#fff;background:linear-gradient(135deg,#0ea5e9,#0284c7);font-size:1.05rem;font-weight:800;cursor:pointer}.admin-products-big-btn.green{background:linear-gradient(135deg,#22c55e,#16a34a)}.admin-products-panel{background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 18px 42px rgba(15,23,42,.13);border:1px solid #e2e8f0}.admin-products-toolbar{min-height:92px;display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1.25rem 1.45rem;flex-wrap:wrap}.admin-products-search{width:min(250px,52vw);height:52px;border:1px solid #aeb7c2;border-radius:8px;padding:.65rem .8rem}.admin-products-table-wrap{overflow-x:auto}.admin-products-table{width:100%;border-collapse:collapse}.admin-products-table th,.admin-products-table td{text-align:left;border-bottom:1px solid #d7dde5;padding:.85rem;vertical-align:top}.admin-products-table th{background:#20262c;color:#fff}.admin-products-table tbody tr:nth-child(odd){background:#f1f1f1}.admin-products-image{width:64px;height:44px;border-radius:6px;object-fit:cover}.admin-products-row-actions{display:flex;flex-direction:column;gap:.45rem}.admin-product-action{border:0;border-radius:6px;min-width:86px;min-height:38px;font-weight:700;cursor:pointer}.admin-product-action.edit{background:#ffc107}.admin-product-action.delete{background:#ff3f4f;color:#fff}.admin-products-empty{color:#64748b;margin:1rem;padding:1rem;border:1px dashed #94a3b8;border-radius:8px}.admin-products-modal-backdrop{position:fixed;inset:0;z-index:100;display:flex;align-items:center;justify-content:center;padding:1rem;background:rgba(15,23,42,.55)}.admin-products-modal{width:min(760px,100%);max-height:calc(100vh - 2rem);overflow-y:auto;background:#fff;border-radius:10px;padding:1.35rem}.admin-products-modal-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem}.admin-products-close{border:0;background:#e8eef6;color:#003366;border-radius:999px;width:34px;height:34px;cursor:pointer;font-size:1.2rem}.admin-products-form{display:grid;gap:.9rem}.admin-products-grid{display:grid;gap:.9rem}.admin-products-form label{display:grid;gap:.35rem;color:#334155;font-size:.82rem;font-weight:800}.admin-products-form input,.admin-products-form textarea{width:100%;border:1px solid #cbd5e1;border-radius:8px;padding:.75rem .85rem;font:inherit}.admin-products-form textarea{min-height:92px;resize:vertical}.admin-products-preview{width:100%;aspect-ratio:16/9;object-fit:cover;border-radius:8px}.admin-products-actions{display:flex;gap:.65rem}.admin-products-primary,.admin-products-secondary{border:0;border-radius:8px;padding:.7rem 1rem;font-weight:800;cursor:pointer}.admin-products-primary{background:#003366;color:#fff}.admin-products-secondary{background:#e8eef6;color:#003366}@media(min-width:760px){.admin-products-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
      `}),n.jsxs("div",{className:"admin-products-page",children:[n.jsxs("div",{className:"admin-products-actions-bar",children:[n.jsxs("button",{className:"admin-products-big-btn green",type:"button",onClick:F,children:[n.jsx(U,{icon:op})," Add Product"]}),n.jsxs("button",{className:"admin-products-big-btn",type:"button",onClick:F,children:[n.jsx(U,{icon:Rt})," New Item"]}),n.jsxs("button",{className:"admin-products-big-btn",type:"button",onClick:()=>alert("Excel import will be added after upload support."),children:[n.jsx(U,{icon:sp})," Import Products (Excel)"]})]}),n.jsxs("section",{className:"admin-products-panel",children:[n.jsxs("div",{className:"admin-products-toolbar",children:[n.jsxs("div",{children:[n.jsx("strong",{children:A.length})," of ",n.jsx("strong",{children:a.length})," products"]}),n.jsxs("label",{children:["Search products: ",n.jsx("input",{className:"admin-products-search",type:"search",value:f,onChange:X=>x(X.target.value)})]})]}),v&&n.jsx("div",{className:"admin-products-empty",children:"Loading products..."}),_&&n.jsx("div",{className:"admin-products-empty",children:_}),!v&&!_&&a.length===0&&n.jsx("div",{className:"admin-products-empty",children:"No products in the database yet."}),!v&&!_&&a.length>0&&n.jsx("div",{className:"admin-products-table-wrap",children:n.jsxs("table",{className:"admin-products-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"ID"}),n.jsx("th",{children:"Image"}),n.jsx("th",{children:"Title"}),n.jsx("th",{children:"Category"}),n.jsx("th",{children:"Price"}),n.jsx("th",{children:"Stock"}),n.jsx("th",{children:"Description"}),n.jsx("th",{children:"Actions"})]})}),n.jsx("tbody",{children:A.map(X=>n.jsxs("tr",{children:[n.jsx("td",{children:X.id}),n.jsx("td",{children:X.image_url?n.jsx("img",{className:"admin-products-image",src:ct(X.image_url),alt:""}):"No image"}),n.jsx("td",{children:X.title}),n.jsx("td",{children:X.category||"Product"}),n.jsxs("td",{children:["R",X.price]}),n.jsx("td",{children:X.stock_quantity??0}),n.jsx("td",{children:X.description||"No description"}),n.jsx("td",{children:n.jsxs("div",{className:"admin-products-row-actions",children:[n.jsxs("button",{className:"admin-product-action edit",onClick:()=>G(X),children:[n.jsx(U,{icon:ba})," Edit"]}),n.jsxs("button",{className:"admin-product-action delete",onClick:()=>de(X.id),children:[n.jsx(U,{icon:$n})," Delete"]})]})})]},X.id))})]})})]}),h&&n.jsx("div",{className:"admin-products-modal-backdrop",onClick:D,children:n.jsxs("section",{className:"admin-products-modal",onClick:X=>X.stopPropagation(),children:[n.jsxs("div",{className:"admin-products-modal-head",children:[n.jsx("h2",{children:u?"Edit product":"Add product"}),n.jsx("button",{className:"admin-products-close",type:"button",onClick:D,children:"×"})]}),n.jsxs("form",{className:"admin-products-form",onSubmit:ne,children:[n.jsxs("div",{className:"admin-products-grid",children:[n.jsxs("label",{children:["Product title",n.jsx("input",{name:"title",value:s.title,onChange:z,required:!0})]}),n.jsxs("label",{children:["Category",n.jsx("input",{name:"category",value:s.category,onChange:z})]}),n.jsxs("label",{children:["Price",n.jsx("input",{name:"price",type:"number",min:"0",step:"0.01",value:s.price,onChange:z,required:!0})]}),n.jsxs("label",{children:["Discount",n.jsx("input",{name:"discount",type:"number",min:"0",step:"0.01",value:s.discount,onChange:z})]}),n.jsxs("label",{children:["Stock quantity",n.jsx("input",{name:"stock_quantity",type:"number",min:"0",step:"1",value:s.stock_quantity,onChange:z})]}),n.jsxs("label",{children:["Product image",n.jsx("input",{type:"file",accept:"image/*",onChange:X=>{var ce;return d({...s,image:((ce=X.target.files)==null?void 0:ce[0])||null})}})]})]}),(s.image||s.image_url)&&n.jsx("img",{className:"admin-products-preview",src:s.image?URL.createObjectURL(s.image):ct(s.image_url),alt:"Product preview"}),n.jsxs("label",{children:["Short description",n.jsx("textarea",{name:"description",value:s.description,onChange:z})]}),n.jsxs("label",{children:["Full product details",n.jsx("textarea",{name:"full_description",value:s.full_description,onChange:z})]}),n.jsxs("label",{children:["Specifications",n.jsx("textarea",{name:"specifications",value:s.specifications,onChange:z,placeholder:`Example:
Brand: ...
Model: ...
Warranty: ...`})]}),n.jsxs("div",{className:"admin-products-actions",children:[n.jsx("button",{className:"admin-products-primary",type:"submit",disabled:y,children:y?"Saving...":u?"Update Product":"Save Product"}),n.jsx("button",{className:"admin-products-secondary",type:"button",onClick:D,children:"Cancel"})]})]})]})})]})]})}function U4(){const[a,l]=N.useState(()=>ts("admin")),[s,d]=N.useState({currentPassword:"",newPassword:"",confirmPassword:""}),[u,p]=N.useState(!1),[h,b]=N.useState({type:"",text:""}),[f,x]=N.useState(!1),v=y=>{l(y),Xp("admin",y)},g=async y=>{if(y.preventDefault(),b({type:"",text:""}),s.newPassword!==s.confirmPassword){b({type:"error",text:"New passwords do not match."});return}x(!0);try{const C=await T3({currentPassword:s.currentPassword,newPassword:s.newPassword});b({type:"success",text:C.message}),d({currentPassword:"",newPassword:"",confirmPassword:""})}catch(C){b({type:"error",text:C.message})}finally{x(!1)}};return n.jsxs(At,{title:"Settings",children:[n.jsx("style",{children:W4}),n.jsxs("div",{className:"account-settings",children:[n.jsxs("section",{className:"settings-section",children:[n.jsxs("div",{className:"settings-heading",children:[n.jsx("span",{className:"settings-heading-icon",children:n.jsx(U,{icon:qi})}),n.jsxs("div",{children:[n.jsx("h2",{children:"Appearance"}),n.jsx("p",{children:"Choose how your admin account looks on this device."})]})]}),n.jsxs("div",{className:"theme-options",children:[n.jsxs("button",{className:a==="light"?"selected":"",onClick:()=>v("light"),children:[n.jsx(U,{icon:lp}),n.jsxs("span",{children:[n.jsx("strong",{children:"Light mode"}),n.jsx("small",{children:"Bright and clean interface"})]})]}),n.jsxs("button",{className:a==="dark"?"selected":"",onClick:()=>v("dark"),children:[n.jsx(U,{icon:qi}),n.jsxs("span",{children:[n.jsx("strong",{children:"Dark mode"}),n.jsx("small",{children:"Comfortable in low light"})]})]})]})]}),n.jsxs("section",{className:"settings-section",children:[n.jsxs("div",{className:"settings-heading",children:[n.jsx("span",{className:"settings-heading-icon",children:n.jsx(U,{icon:Vl})}),n.jsxs("div",{children:[n.jsx("h2",{children:"Change password"}),n.jsx("p",{children:"Confirm your current password before setting a new one."})]})]}),n.jsxs("form",{className:"password-form",onSubmit:g,children:[["currentPassword","newPassword","confirmPassword"].map(y=>n.jsxs("label",{children:[y==="currentPassword"?"Current password":y==="newPassword"?"New password":"Confirm new password",n.jsxs("span",{className:"password-field",children:[n.jsx(U,{icon:Qi}),n.jsx("input",{type:u?"text":"password",value:s[y],minLength:y==="currentPassword"?void 0:8,required:!0,onChange:C=>d({...s,[y]:C.target.value})})]})]},y)),n.jsxs("div",{className:"password-actions",children:[n.jsxs("label",{className:"show-passwords",children:[n.jsx("input",{type:"checkbox",checked:u,onChange:y=>p(y.target.checked)}),n.jsx(U,{icon:u?gp:ip}),"Show passwords"]}),n.jsxs("button",{className:"settings-save",disabled:f,children:[n.jsx(U,{icon:Qi}),f?"Saving...":"Update Password"]})]}),h.text&&n.jsx("p",{className:`settings-message ${h.type}`,children:h.text})]})]}),n.jsxs("section",{className:"settings-section",children:[n.jsxs("div",{className:"settings-heading",children:[n.jsx("span",{className:"settings-heading-icon",children:n.jsx(U,{icon:Bl})}),n.jsxs("div",{children:[n.jsx("h2",{children:"Company profile"}),n.jsx("p",{children:"Public contact information used across Stekora Tech."})]})]}),n.jsxs("form",{className:"company-settings-form",children:[n.jsxs("label",{children:["Company name",n.jsx("input",{defaultValue:"Stekora Tech Academy"})]}),n.jsxs("label",{children:["Public email",n.jsx("input",{type:"email",placeholder:"info@stekora.tech"})]}),n.jsxs("label",{children:["Phone number",n.jsx("input",{type:"tel",placeholder:"+250 ..."})]}),n.jsx("button",{className:"settings-save",type:"button",children:"Save Company Settings"})]})]})]})]})}const W4=`
  .account-settings { max-width: 920px; display: grid; gap: 1.25rem; }
  .settings-section { background: #fff; border: 1px solid #d9e1ea; border-radius: 8px; padding: 1.5rem; }
  .settings-heading { display: flex; gap: 0.9rem; align-items: flex-start; margin-bottom: 1.35rem; }
  .settings-heading-icon { width: 42px; height: 42px; flex: 0 0 42px; display: grid; place-items: center; border-radius: 8px; background: #e1f8fc; color: #003366; }
  .settings-heading h2 { margin: 0 0 0.25rem; font-size: 1.15rem; }
  .settings-heading p { margin: 0; color: #64748b; font-size: 0.88rem; }
  .theme-options { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.9rem; }
  .theme-options button { min-height: 82px; display: flex; align-items: center; gap: 0.9rem; padding: 1rem; border: 2px solid #d9e1ea; border-radius: 8px; background: transparent; color: inherit; text-align: left; }
  .theme-options button > svg { font-size: 1.4rem; color: #64748b; }
  .theme-options button.selected { border-color: #22d3ee; background: rgba(34,211,238,0.08); }
  .theme-options button.selected > svg { color: #0891b2; }
  .theme-options span { display: grid; gap: 0.2rem; }
  .theme-options small { color: #64748b; }
  .password-form { max-width: 650px; display: grid; gap: 1rem; background: transparent !important; }
  .password-form > label { display: grid; gap: 0.4rem; font-weight: 700; font-size: 0.86rem; }
  .password-field { display: flex; align-items: center; gap: 0.7rem; padding: 0 0.9rem; border: 1px solid #cbd5e1; border-radius: 8px; background: #fff; }
  .password-field svg { color: #64748b; }
  .password-field input { width: 100%; min-height: 46px; padding: 0; border: 0 !important; outline: 0; background: transparent !important; color: inherit; }
  .password-actions { display: flex; justify-content: space-between; align-items: center; gap: 1rem; flex-wrap: wrap; }
  .show-passwords { display: flex !important; grid-auto-flow: column; align-items: center; gap: 0.5rem !important; color: #475569; font-weight: 600 !important; }
  .show-passwords input { width: 16px; height: 16px; }
  .settings-save { min-height: 44px; display: inline-flex; align-items: center; gap: 0.55rem; padding: 0 1rem; border-radius: 8px; background: #003f78; color: #fff; font-weight: 800; }
  .settings-save:disabled { opacity: 0.65; cursor: wait; }
  .settings-message { margin: 0; padding: 0.8rem 0.9rem; border-radius: 8px; font-weight: 700; font-size: 0.86rem; }
  .settings-message.success { background: #dcfce7; color: #166534; }
  .settings-message.error { background: #fee2e2; color: #991b1b; }
  .company-settings-form { max-width: 650px; display: grid; gap: 1rem; background: transparent !important; }
  .company-settings-form label { display: grid; gap: 0.4rem; color: inherit; font-size: 0.86rem; font-weight: 700; }
  .company-settings-form input { min-height: 46px; padding: 0 0.9rem; border: 1px solid #cbd5e1; border-radius: 8px; }
  .company-settings-form .settings-save { justify-self: start; }
  @media (max-width: 620px) { .theme-options { grid-template-columns: 1fr; } }
`;function H4(){return ve("/admin/students")}function B4(a,l){return ve(`/admin/students/${a}/status`,{method:"PATCH",body:JSON.stringify({status:l})})}function V4(){const[a,l]=N.useState([]),[s,d]=N.useState(""),[u,p]=N.useState(!0),[h,b]=N.useState("");N.useEffect(()=>{x()},[]);const f=N.useMemo(()=>{const g=s.trim().toLowerCase();return g?a.filter(y=>[y.id,y.full_name,y.email,y.phone,y.status].some(C=>String(C||"").toLowerCase().includes(g))):a},[a,s]);async function x(){try{p(!0),b("");const g=await H4();l(Array.isArray(g)?g:[])}catch(g){console.error(g),b(g.message||"Failed to load students")}finally{p(!1)}}async function v(g){const y=g.status==="active"?"blocked":"active",C=y==="blocked"?"Block this student account?":"Activate this student account?";if(window.confirm(C))try{await B4(g.id,y),await x()}catch(_){console.error(_),alert(_.message||"Failed to update student")}}return n.jsxs(At,{title:"Students",children:[n.jsx("style",{children:`
        .admin-students-panel {
          overflow: hidden;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          box-shadow: 0 14px 34px rgba(15,23,42,0.1);
        }

        .admin-students-toolbar {
          min-height: 88px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.2rem 1.4rem;
          flex-wrap: wrap;
          color: #10243f;
          font-weight: 800;
        }

        .admin-students-tools,
        .admin-students-search {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .admin-students-search input {
          width: min(280px, 50vw);
          height: 46px;
          border: 1px solid #aeb7c2;
          border-radius: 7px;
          padding: 0.6rem 0.75rem;
          font: inherit;
        }

        .admin-students-refresh {
          min-height: 46px;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          border: 0;
          border-radius: 7px;
          padding: 0 0.9rem;
          background: #003366;
          color: #ffffff;
          cursor: pointer;
          font-weight: 800;
        }

        .admin-students-table-wrap {
          overflow-x: auto;
        }

        .admin-students-table {
          width: 100%;
          border-collapse: collapse;
        }

        .admin-students-table th,
        .admin-students-table td {
          padding: 0.9rem 0.8rem;
          border-right: 1px solid #d7dde5;
          border-bottom: 1px solid #d7dde5;
          text-align: left;
          vertical-align: middle;
        }

        .admin-students-table th {
          background: #20262c;
          color: #ffffff;
          white-space: nowrap;
        }

        .admin-students-table tbody tr:nth-child(odd) {
          background: #f1f1f1;
        }

        .admin-student-status {
          display: inline-block;
          padding: 0.3rem 0.55rem;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 900;
        }

        .admin-student-status.active {
          background: #dcfce7;
          color: #166534;
        }

        .admin-student-status.blocked {
          background: #fee2e2;
          color: #991b1b;
        }

        .admin-student-action {
          min-height: 36px;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          border: 0;
          border-radius: 6px;
          padding: 0 0.7rem;
          cursor: pointer;
          font-weight: 800;
        }

        .admin-student-action.block {
          background: #ff3f4f;
          color: #ffffff;
        }

        .admin-student-action.activate {
          background: #22c55e;
          color: #ffffff;
        }

        .admin-students-message {
          margin: 1rem;
          padding: 1rem;
          border: 1px dashed #94a3b8;
          border-radius: 8px;
          color: #64748b;
        }
      `}),n.jsxs("section",{className:"admin-students-panel",children:[n.jsxs("div",{className:"admin-students-toolbar",children:[n.jsxs("div",{children:["Showing ",f.length," of ",a.length," students"]}),n.jsxs("div",{className:"admin-students-tools",children:[n.jsxs("label",{className:"admin-students-search",children:["Search:",n.jsx("input",{type:"search",value:s,onChange:g=>d(g.target.value)})]}),n.jsxs("button",{className:"admin-students-refresh",type:"button",onClick:x,children:[n.jsx(U,{icon:Wl}),"Refresh"]})]})]}),u&&n.jsx("div",{className:"admin-students-message",children:"Loading students..."}),h&&n.jsx("div",{className:"admin-students-message",children:h}),!u&&!h&&a.length===0&&n.jsx("div",{className:"admin-students-message",children:"No student accounts have been created yet."}),!u&&!h&&a.length>0&&n.jsx("div",{className:"admin-students-table-wrap",children:n.jsxs("table",{className:"admin-students-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"ID"}),n.jsx("th",{children:"Name"}),n.jsx("th",{children:"Email"}),n.jsx("th",{children:"Phone"}),n.jsx("th",{children:"Started"}),n.jsx("th",{children:"Completed"}),n.jsx("th",{children:"Certificates"}),n.jsx("th",{children:"Status"}),n.jsx("th",{children:"Registered"}),n.jsx("th",{children:"Action"})]})}),n.jsx("tbody",{children:f.map(g=>n.jsxs("tr",{children:[n.jsx("td",{children:g.id}),n.jsx("td",{children:g.full_name}),n.jsx("td",{children:g.email}),n.jsx("td",{children:g.phone||"-"}),n.jsx("td",{children:g.courses_started||0}),n.jsx("td",{children:g.courses_completed||0}),n.jsx("td",{children:g.certificates_count||0}),n.jsx("td",{children:n.jsx("span",{className:`admin-student-status ${g.status}`,children:g.status})}),n.jsx("td",{children:new Date(g.created_at).toLocaleDateString()}),n.jsx("td",{children:n.jsxs("button",{className:`admin-student-action ${g.status==="active"?"block":"activate"}`,type:"button",onClick:()=>v(g),children:[n.jsx(U,{icon:g.status==="active"?Qx:dp}),g.status==="active"?"Block":"Activate"]})})]},g.id))})]})})]})]})}const Q4=[["Dashboard","/student",up],["My Courses","/student",wa],["Certificates","/student/certificates",wr],["Settings","/student/settings",Bl]];function q4(){return window.location.hash.replace("#","")||"/student"}function Y4(){const a=q4();function l(d){window.location.hash=d}function s(){localStorage.removeItem("studentToken"),localStorage.removeItem("studentName"),localStorage.removeItem("studentCourseName"),window.location.hash="/login"}return n.jsxs("aside",{className:"student-sidebar",children:[n.jsxs("div",{className:"student-sidebar-brand",children:[n.jsx("span",{className:"student-sidebar-mark",children:"ST"}),n.jsxs("span",{children:[n.jsx("strong",{children:"Stekora Tech"}),n.jsx("small",{children:"Student Account"})]})]}),n.jsxs("nav",{className:"student-sidebar-nav",children:[Q4.map(([d,u,p])=>n.jsxs("button",{type:"button",className:a===u||u==="/student"&&a.startsWith("/student/course/")?"active":"",onClick:()=>l(u),children:[n.jsx(U,{icon:p}),d]},d)),n.jsxs("button",{type:"button",onClick:s,children:[n.jsx(U,{icon:cp}),"Logout"]})]})]})}function kr({title:a,children:l}){const[s,d]=N.useState(()=>ts("student"));return N.useEffect(()=>{const u=p=>{var h;((h=p.detail)==null?void 0:h.accountType)==="student"&&d(p.detail.theme)};return window.addEventListener(ga,u),()=>window.removeEventListener(ga,u)},[]),n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
        .student-portal {
          min-height: 100vh;
          display: flex;
          background: #f4f6f9;
          color: #10243f;
        }

        .student-sidebar {
          width: 250px;
          flex: 0 0 250px;
          background: #1f334d;
          color: #ffffff;
        }

        .student-sidebar-brand {
          min-height: 82px;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.15rem;
          border-bottom: 1px solid rgba(255,255,255,0.12);
        }

        .student-sidebar-brand span:last-child {
          display: grid;
          gap: 0.15rem;
        }

        .student-sidebar-brand small {
          color: #b8c8dc;
          font-size: 0.72rem;
        }

        .student-sidebar-mark {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 8px;
          background: #22d3ee;
          color: #003366;
          font-weight: 900;
        }

        .student-sidebar-nav {
          display: grid;
          gap: 0.35rem;
          padding: 1rem 0.8rem;
        }

        .student-sidebar-nav button {
          min-height: 46px;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          border: 0;
          border-radius: 7px;
          padding: 0 0.8rem;
          background: transparent;
          color: #ffffff;
          cursor: pointer;
          text-align: left;
          font-weight: 700;
        }

        .student-sidebar-nav button.active,
        .student-sidebar-nav button:hover {
          background: rgba(255,255,255,0.14);
        }

        .student-portal-main {
          min-width: 0;
          flex: 1;
        }

        .student-portal-topbar {
          min-height: 82px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0 2rem;
          background: #ffffff;
          border-bottom: 1px solid #d9e1ea;
        }

        .student-portal-topbar h1 {
          margin: 0;
          color: #10243f;
          font-size: 1.3rem;
        }

        .student-portal-role {
          color: #64748b;
          font-size: 0.85rem;
        }

        .student-portal-content {
          padding: 1.8rem;
        }

        .student-portal.dark-mode {
          background: #0f172a;
          color: #e5edf7;
        }

        .student-portal.dark-mode .student-portal-main,
        .student-portal.dark-mode .student-portal-content,
        .student-portal.dark-mode [class$="-page"],
        .student-portal.dark-mode [class$="-container"] {
          background-color: #0f172a !important;
          color: #e5edf7;
        }

        .student-portal.dark-mode .student-portal-topbar,
        .student-portal.dark-mode .modal,
        .student-portal.dark-mode form,
        .student-portal.dark-mode article,
        .student-portal.dark-mode [class*="panel"],
        .student-portal.dark-mode [class*="card"],
        .student-portal.dark-mode [class*="modal"] {
          background-color: #182337 !important;
          color: #e5edf7 !important;
          border-color: #334155 !important;
        }

        .student-portal.dark-mode h1,
        .student-portal.dark-mode h2,
        .student-portal.dark-mode h3,
        .student-portal.dark-mode label {
          color: #e5edf7 !important;
        }

        .student-portal.dark-mode input,
        .student-portal.dark-mode select,
        .student-portal.dark-mode textarea {
          background: #111c2e !important;
          color: #f8fafc !important;
          border-color: #475569 !important;
        }

        .student-portal.dark-mode input::placeholder,
        .student-portal.dark-mode textarea::placeholder {
          color: #94a3b8;
        }

        .student-portal.dark-mode .student-settings-section {
          background: #182337 !important;
          color: #e5edf7 !important;
          border-color: #334155 !important;
          box-shadow: none !important;
        }

        .student-portal.dark-mode .student-settings-heading h2,
        .student-portal.dark-mode .student-theme-options strong {
          color: #e5edf7 !important;
        }

        .student-portal.dark-mode .student-settings-heading p,
        .student-portal.dark-mode .student-theme-options small {
          color: #a9b8cc !important;
        }

        .student-portal.dark-mode .student-theme-options button {
          background: #111c2e !important;
          color: #e5edf7 !important;
          border-color: #475569 !important;
        }

        .student-portal.dark-mode .student-theme-options button.selected {
          background: #123047 !important;
          border-color: #22d3ee !important;
        }

        .student-portal.dark-mode .student-password-field {
          background: #111c2e !important;
          border-color: #475569 !important;
        }

        .student-portal.dark-mode table,
        .student-portal.dark-mode table thead tr,
        .student-portal.dark-mode table thead th,
        .student-portal.dark-mode table tbody tr,
        .student-portal.dark-mode table tbody td {
          background: #182337 !important;
          color: #e5edf7 !important;
          border-color: #334155 !important;
        }

        .student-portal.dark-mode table tbody tr:nth-child(even),
        .student-portal.dark-mode table tbody tr:nth-child(even) td {
          background: #111c2e !important;
        }

        @media (max-width: 760px) {
          .student-portal {
            flex-direction: column;
          }

          .student-sidebar {
            width: 100%;
            flex-basis: auto;
          }

          .student-sidebar-nav {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .student-portal-topbar,
          .student-portal-content {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}),n.jsxs("div",{className:`student-portal ${s==="dark"?"dark-mode":""}`,children:[n.jsx(Y4,{}),n.jsxs("main",{className:"student-portal-main",children:[n.jsxs("header",{className:"student-portal-topbar",children:[n.jsx("h1",{children:a}),n.jsx("span",{className:"student-portal-role",children:localStorage.getItem("studentName")||"Student"})]}),n.jsx("div",{className:"student-portal-content",children:l})]})]})]})}function G4({courseId:a}){var I,A,M;const[l,s]=N.useState(null),[d,u]=N.useState({}),[p,h]=N.useState(null),[b,f]=N.useState(!0),[x,v]=N.useState(!1),[g,y]=N.useState("");N.useEffect(()=>{C()},[a]);async function C(){try{f(!0),y("");const z=await H3(a);s(z)}catch(z){console.error(z),y(z.message||"Failed to load final exam")}finally{f(!1)}}async function _(z){if(z.preventDefault(),l.questions.some(F=>!String(d[F.id]||"").trim())){alert("Please answer every final exam question");return}try{v(!0);const F=await B3(a,l.questions.map(D=>({question_id:D.id,answer:d[D.id]})));h(F)}catch(F){console.error(F),alert(F.message||"Failed to submit final exam")}finally{v(!1)}}return n.jsxs(kr,{title:"Final Exam",children:[n.jsx("style",{children:`
        .student-final-shell {
          width: min(900px, 100%);
          margin: 0 auto;
          display: grid;
          gap: 1rem;
        }

        .student-final-card {
          background: #ffffff;
          border: 1px solid #dce4ed;
          border-radius: 8px;
          padding: 1.2rem;
        }

        .student-final-card h2,
        .student-final-card h3 {
          margin: 0 0 0.5rem;
          color: #10243f;
        }

        .student-final-card p {
          margin: 0;
          color: #64748b;
          line-height: 1.6;
        }

        .student-final-form {
          display: grid;
          gap: 1rem;
        }

        .student-final-options {
          display: grid;
          gap: 0.55rem;
          margin-top: 0.8rem;
        }

        .student-final-option {
          min-height: 46px;
          display: flex;
          align-items: center;
          gap: 0.65rem;
          border: 1px solid #dce4ed;
          border-radius: 7px;
          padding: 0.6rem 0.75rem;
        }

        .student-final-textarea {
          width: 100%;
          min-height: 110px;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 0.75rem;
          font: inherit;
          resize: vertical;
        }

        .student-final-actions {
          display: flex;
          justify-content: space-between;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .student-final-button {
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: 0;
          border-radius: 7px;
          padding: 0 0.9rem;
          background: #003366;
          color: #ffffff;
          cursor: pointer;
          font-weight: 800;
        }

        .student-final-button.secondary {
          background: #e8eef6;
          color: #003366;
        }

        .student-final-message {
          padding: 1rem;
          border: 1px dashed #94a3b8;
          border-radius: 8px;
          background: #ffffff;
          color: #64748b;
        }
      `}),n.jsxs("div",{className:"student-final-shell",children:[b&&n.jsx("div",{className:"student-final-message",children:"Loading final exam..."}),g&&n.jsx("div",{className:"student-final-message",children:g}),l&&!l.unlocked&&n.jsxs("section",{className:"student-final-card",children:[n.jsx("h2",{children:"Final exam locked"}),n.jsxs("p",{children:["Complete every course module first. You completed ",l.completed_modules," of ",l.total_modules," modules."]})]}),l&&l.unlocked&&!l.can_attempt&&n.jsxs("section",{className:"student-final-card",children:[n.jsx("h2",{children:"Final exam already submitted"}),n.jsxs("p",{children:["Status: ",(I=l.latest_attempt)==null?void 0:I.status,". Score: ",((A=l.latest_attempt)==null?void 0:A.score)||0,"%. Wait for admin review or re-exam permission."]})]}),l&&l.can_attempt&&l.questions.length===0&&n.jsx("div",{className:"student-final-message",children:"The admin has not uploaded final exam questions yet."}),l&&l.can_attempt&&l.questions.length>0&&!p&&n.jsxs(n.Fragment,{children:[n.jsxs("section",{className:"student-final-card",children:[n.jsx("h2",{children:(M=l.course)==null?void 0:M.title}),n.jsx("p",{children:"Answer every question. Multiple-choice answers are scored automatically; open answers are reviewed by the admin."})]}),n.jsxs("form",{className:"student-final-form",onSubmit:_,children:[l.questions.map((z,W)=>n.jsxs("section",{className:"student-final-card",children:[n.jsxs("h3",{children:[W+1,". ",z.question," (",z.marks," marks)"]}),z.question_type==="mcq"?n.jsx("div",{className:"student-final-options",children:Object.entries(z.options||{}).filter(([,F])=>F).map(([F,D])=>n.jsxs("label",{className:"student-final-option",children:[n.jsx("input",{type:"radio",name:`exam-${z.id}`,value:F,checked:d[z.id]===F,onChange:G=>u({...d,[z.id]:G.target.value})}),n.jsxs("strong",{children:[F,"."]})," ",D]},F))}):n.jsx("textarea",{className:"student-final-textarea",value:d[z.id]||"",onChange:F=>u({...d,[z.id]:F.target.value}),placeholder:"Write your answer..."})]},z.id)),n.jsxs("div",{className:"student-final-actions",children:[n.jsxs("button",{className:"student-final-button secondary",type:"button",onClick:()=>window.location.hash="/student",children:[n.jsx(U,{icon:es}),"Dashboard"]}),n.jsxs("button",{className:"student-final-button",type:"submit",disabled:x,children:[n.jsx(U,{icon:Hl}),x?"Submitting...":"Submit Final Exam"]})]})]})]}),p&&n.jsxs("section",{className:"student-final-card",children:[n.jsx("h2",{children:"Final exam submitted"}),n.jsxs("p",{children:["Automatic score: ",p.auto_score,"%. Your submission is waiting for admin review and certificate approval."]})]})]})]})}function X4({courseId:a,moduleId:l}){const[s,d]=N.useState(null),[u,p]=N.useState({}),[h,b]=N.useState(null),[f,x]=N.useState(!0),[v,g]=N.useState(!1),[y,C]=N.useState("");N.useEffect(()=>{_()},[l]);async function _(){try{x(!0),C("");const A=await U3(l);d(A)}catch(A){console.error(A),C(A.message||"Failed to load assessment")}finally{x(!1)}}async function I(A){if(A.preventDefault(),s.questions.some(z=>!String(u[z.id]||"").trim())){alert("Please answer every question");return}try{g(!0);const z=await W3(l,s.questions.map(W=>({question_id:W.id,answer:u[W.id]})));b(z)}catch(z){console.error(z),alert(z.message||"Failed to submit assessment")}finally{g(!1)}}return n.jsxs(kr,{title:"Module Assessment",children:[n.jsx("style",{children:`
        .student-assessment-shell {
          width: min(850px, 100%);
          margin: 0 auto;
          display: grid;
          gap: 1rem;
        }

        .student-assessment-intro,
        .student-assessment-question,
        .student-assessment-result {
          background: #ffffff;
          border: 1px solid #dce4ed;
          border-radius: 8px;
          padding: 1.2rem;
        }

        .student-assessment-intro h2,
        .student-assessment-question h3 {
          margin: 0 0 0.45rem;
          color: #10243f;
        }

        .student-assessment-intro p {
          margin: 0;
          color: #64748b;
        }

        .student-assessment-form {
          display: grid;
          gap: 1rem;
        }

        .student-assessment-options {
          display: grid;
          gap: 0.55rem;
          margin-top: 0.8rem;
        }

        .student-assessment-option {
          min-height: 46px;
          display: flex;
          align-items: center;
          gap: 0.65rem;
          border: 1px solid #dce4ed;
          border-radius: 7px;
          padding: 0.6rem 0.75rem;
          cursor: pointer;
        }

        .student-assessment-answer {
          width: 100%;
          min-height: 100px;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 0.75rem;
          font: inherit;
          resize: vertical;
        }

        .student-assessment-actions {
          display: flex;
          justify-content: space-between;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .student-assessment-button {
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: 0;
          border-radius: 7px;
          padding: 0 0.9rem;
          background: #003366;
          color: #ffffff;
          cursor: pointer;
          font-weight: 800;
        }

        .student-assessment-button.secondary {
          background: #e8eef6;
          color: #003366;
        }

        .student-assessment-result {
          text-align: center;
        }

        .student-assessment-result strong {
          display: block;
          margin: 0.5rem 0;
          color: #003366;
          font-size: 2rem;
        }

        .student-assessment-message {
          padding: 1rem;
          border: 1px dashed #94a3b8;
          border-radius: 8px;
          background: #ffffff;
          color: #64748b;
        }
      `}),n.jsxs("div",{className:"student-assessment-shell",children:[f&&n.jsx("div",{className:"student-assessment-message",children:"Loading assessment..."}),y&&n.jsx("div",{className:"student-assessment-message",children:y}),s&&s.questions.length===0&&n.jsx("div",{className:"student-assessment-message",children:"The admin has not added assessment questions yet."}),s&&s.questions.length>0&&!h&&n.jsxs(n.Fragment,{children:[n.jsxs("section",{className:"student-assessment-intro",children:[n.jsx("h2",{children:s.module.title}),n.jsxs("p",{children:[s.questions.length," questions · Pass mark ",s.pass_mark,"%"]})]}),n.jsxs("form",{className:"student-assessment-form",onSubmit:I,children:[s.questions.map((A,M)=>n.jsxs("section",{className:"student-assessment-question",children:[n.jsxs("h3",{children:[M+1,". ",A.question]}),A.question_type==="mcq"?n.jsx("div",{className:"student-assessment-options",children:Object.entries(A.options||{}).filter(([,z])=>z).map(([z,W])=>n.jsxs("label",{className:"student-assessment-option",children:[n.jsx("input",{type:"radio",name:`question-${A.id}`,value:z,checked:u[A.id]===z,onChange:F=>p({...u,[A.id]:F.target.value})}),n.jsxs("strong",{children:[z,"."]})," ",W]},z))}):n.jsx("textarea",{className:"student-assessment-answer",value:u[A.id]||"",onChange:z=>p({...u,[A.id]:z.target.value}),placeholder:"Write your answer..."})]},A.id)),n.jsxs("div",{className:"student-assessment-actions",children:[n.jsxs("button",{className:"student-assessment-button secondary",type:"button",onClick:()=>window.location.hash=`/student/course/${a}/module/${l}`,children:[n.jsx(U,{icon:es}),"Back to Module"]}),n.jsxs("button",{className:"student-assessment-button",type:"submit",disabled:v,children:[n.jsx(U,{icon:Hl}),v?"Submitting...":"Submit Assessment"]})]})]})]}),h&&n.jsxs("section",{className:"student-assessment-result",children:[n.jsx(U,{icon:pp,size:"2x"}),n.jsxs("strong",{children:[h.score,"%"]}),n.jsx("p",{children:h.passed?"You passed this module assessment.":"You need 60% to pass. Review the lesson and try again."}),h.passed?n.jsx("button",{className:"student-assessment-button",type:"button",onClick:()=>window.location.hash=`/student/course/${a}/module/${l}`,children:"Return to Module"}):n.jsx("button",{className:"student-assessment-button",type:"button",onClick:()=>{p({}),b(null)},children:"Retry Assessment"})]})]})]})}function K4(){const[a,l]=N.useState([]),[s,d]=N.useState(!0),[u,p]=N.useState(""),[h,b]=N.useState(null);N.useEffect(()=>{f()},[]);async function f(){try{d(!0),p("");const x=await V3();l(Array.isArray(x)?x:[])}catch(x){console.error(x),p(x.message||"Failed to load certificates")}finally{d(!1)}}return n.jsxs(kr,{title:"My Certificates",children:[n.jsx("style",{children:`
        .student-certificates-grid {
          display: grid;
          gap: 1rem;
        }

        .student-certificate-card {
          background: #ffffff;
          border: 1px solid #dce4ed;
          border-top: 5px solid #facc15;
          border-radius: 8px;
          padding: 1.3rem;
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);
        }

        .student-certificate-icon {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border-radius: 8px;
          background: #fef3c7;
          color: #92400e;
          margin-bottom: 0.8rem;
        }

        .student-certificate-card h2 {
          margin: 0 0 0.45rem;
          color: #10243f;
          font-size: 1.15rem;
        }

        .student-certificate-meta {
          display: grid;
          gap: 0.45rem;
          color: #64748b;
          font-size: 0.88rem;
        }

        .student-certificate-code {
          color: #003366;
          font-weight: 900;
        }

        .student-certificate-button {
          min-height: 42px;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 1rem;
          border: 0;
          border-radius: 7px;
          padding: 0 0.85rem;
          background: #003366;
          color: #ffffff;
          cursor: pointer;
          font-weight: 800;
        }

        .student-certificate-message {
          padding: 1rem;
          border: 1px dashed #94a3b8;
          border-radius: 8px;
          background: #ffffff;
          color: #64748b;
        }

        .student-certificate-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          background: rgba(15, 23, 42, 0.72);
        }

        .student-certificate-modal {
          width: min(1180px, 100%);
          max-height: calc(100vh - 2rem);
          overflow: auto;
          background: #ffffff;
          border-radius: 8px;
          padding: 1rem;
        }

        .student-certificate-modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 0.65rem;
          margin-bottom: 0.8rem;
        }

        @media (min-width: 760px) {
          .student-certificates-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
      `}),s&&n.jsx("div",{className:"student-certificate-message",children:"Loading certificates..."}),u&&n.jsx("div",{className:"student-certificate-message",children:u}),!s&&!u&&a.length===0&&n.jsx("div",{className:"student-certificate-message",children:"No certificate has been assigned yet. Complete the course and wait for final exam approval."}),n.jsx("section",{className:"student-certificates-grid",children:a.map(x=>n.jsxs("article",{className:"student-certificate-card",children:[n.jsx("div",{className:"student-certificate-icon",children:n.jsx(U,{icon:wr,size:"lg"})}),n.jsx("h2",{children:x.course_title}),n.jsxs("div",{className:"student-certificate-meta",children:[n.jsx("span",{className:"student-certificate-code",children:x.certificate_code}),n.jsxs("span",{children:[n.jsx(U,{icon:Vl})," Status: ",x.status]}),n.jsxs("span",{children:["Issued: ",new Date(x.issued_date).toLocaleDateString()]})]}),n.jsxs("button",{className:"student-certificate-button",type:"button",onClick:()=>b(x),children:[n.jsx(U,{icon:Kx}),"View Certificate"]})]},x.id))}),h&&n.jsx("div",{className:"student-certificate-modal-backdrop",role:"presentation",onClick:()=>b(null),children:n.jsxs("section",{className:"student-certificate-modal",role:"dialog","aria-modal":"true",onClick:x=>x.stopPropagation(),children:[n.jsxs("div",{className:"student-certificate-modal-actions",children:[n.jsx("button",{className:"student-certificate-button",type:"button",onClick:()=>window.print(),children:"Print / Download PDF"}),n.jsx("button",{className:"student-certificate-button",type:"button",onClick:()=>b(null),children:"Close"})]}),n.jsx(Bp,{studentName:h.student_name||localStorage.getItem("studentName")||"Student",courseName:h.course_title,certificateCode:h.certificate_code,issuedDate:h.issued_date,verificationUrl:`${window.location.origin}${window.location.pathname}#/certificate/${h.certificate_code}`})]})})]})}function J4(){const[a,l]=N.useState(null),[s,d]=N.useState(!0),[u,p]=N.useState(""),[h,b]=N.useState(null);N.useEffect(()=>{f()},[]);async function f(){var g;if(!localStorage.getItem("studentToken")){window.location.hash="/login";return}try{d(!0),p("");const y=await R3();l(y),(g=y.student)!=null&&g.full_name&&localStorage.setItem("studentName",y.student.full_name)}catch(y){console.error(y),p(y.message||"Failed to load student dashboard")}finally{d(!1)}}async function x(g){var C;const y=(C=g.modules)==null?void 0:C[0];if(y)try{b(g.id),await D3(g.id),window.location.hash=`/student/course/${g.id}/module/${y.id}`}catch(_){console.error(_),alert(_.message||"Failed to start course")}finally{b(null)}}function v(g){var C,_;const y=((C=g.modules)==null?void 0:C.find(I=>!Number(I.completed)))||((_=g.modules)==null?void 0:_[0]);y&&(window.location.hash=`/student/course/${g.id}/module/${y.id}`)}return n.jsxs(kr,{title:"Student Dashboard",children:[n.jsx("style",{children:`
        .student-dashboard-summary {
          display: grid;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .student-summary-card {
          background: #ffffff;
          border: 1px solid #dce4ed;
          border-radius: 8px;
          padding: 1.15rem;
        }

        .student-summary-card strong {
          display: block;
          color: #003366;
          font-size: 1.35rem;
          margin-top: 0.3rem;
        }

        .student-course-grid {
          display: grid;
          gap: 1.1rem;
        }

        .student-course-card {
          overflow: hidden;
          display: flex;
          flex-direction: column;
          min-height: 350px;
          background: #ffffff;
          border: 1px solid #dce4ed;
          border-radius: 8px;
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);
        }

        .student-course-image {
          width: 100%;
          height: 180px;
          object-fit: cover;
          background: #dbe6f3;
        }

        .student-course-body {
          flex: 1;
          padding: 1rem;
        }

        .student-course-category {
          color: #0891b2;
          font-size: 0.75rem;
          font-weight: 900;
          text-transform: uppercase;
        }

        .student-course-body h2 {
          margin: 0.45rem 0;
          color: #10243f;
          font-size: 1.1rem;
        }

        .student-course-body p {
          margin: 0;
          color: #64748b;
          line-height: 1.55;
          font-size: 0.88rem;
        }

        .student-course-progress {
          height: 8px;
          margin-top: 1rem;
          overflow: hidden;
          border-radius: 999px;
          background: #e2e8f0;
        }

        .student-course-progress span {
          display: block;
          height: 100%;
          background: #22c55e;
        }

        .student-course-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          padding: 0.85rem 1rem;
          border-top: 1px solid #e2e8f0;
          flex-wrap: wrap;
        }

        .student-course-footer small {
          color: #64748b;
          font-weight: 700;
        }

        .student-course-actions {
          display: flex;
          gap: 0.45rem;
          flex-wrap: wrap;
        }

        .student-course-button {
          min-height: 38px;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          border: 0;
          border-radius: 7px;
          padding: 0 0.8rem;
          background: #3b82f6;
          color: #ffffff;
          cursor: pointer;
          font-weight: 800;
        }

        .student-course-button.green {
          background: #16a34a;
        }

        .student-course-button.gold {
          background: #facc15;
          color: #10243f;
        }

        .student-page-message {
          padding: 1rem;
          border: 1px dashed #94a3b8;
          border-radius: 8px;
          background: #ffffff;
          color: #64748b;
        }

        @media (min-width: 700px) {
          .student-dashboard-summary {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .student-course-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 1180px) {
          .student-course-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
      `}),s&&n.jsx("div",{className:"student-page-message",children:"Loading your courses..."}),u&&n.jsx("div",{className:"student-page-message",children:u}),a&&n.jsxs(n.Fragment,{children:[n.jsxs("section",{className:"student-dashboard-summary",children:[n.jsxs("div",{className:"student-summary-card",children:["Available courses",n.jsx("strong",{children:a.courses.length})]}),n.jsxs("div",{className:"student-summary-card",children:["Courses completed",n.jsx("strong",{children:a.courses.filter(g=>g.status==="completed").length})]}),n.jsxs("div",{className:"student-summary-card",children:["Certificates",n.jsx("strong",{children:a.certificates_count||0})]})]}),a.courses.length===0?n.jsx("div",{className:"student-page-message",children:"No courses have been posted by the admin yet."}):n.jsx("section",{className:"student-course-grid",children:a.courses.map(g=>n.jsxs("article",{className:"student-course-card",children:[g.image_url?n.jsx("img",{className:"student-course-image",src:ct(g.image_url),alt:g.name}):n.jsx("div",{className:"student-course-image"}),n.jsxs("div",{className:"student-course-body",children:[n.jsx("div",{className:"student-course-category",children:g.category||"Course"}),n.jsx("h2",{children:g.name}),n.jsx("p",{children:g.description||"Practical learning modules created by Stekora Tech."}),n.jsx("div",{className:"student-course-progress",children:n.jsx("span",{style:{width:`${g.progress}%`}})})]}),n.jsxs("footer",{className:"student-course-footer",children:[n.jsxs("small",{children:[g.completed_modules,"/",g.modules_count," modules · ",g.progress,"%"]}),n.jsx("div",{className:"student-course-actions",children:g.modules_count===0?n.jsx("span",{className:"student-page-message",children:"Waiting for modules"}):g.status==="not_started"?n.jsxs("button",{className:"student-course-button",type:"button",onClick:()=>x(g),children:[n.jsx(U,{icon:av}),h===g.id?"Starting...":"Start"]}):g.status==="completed"?n.jsxs(n.Fragment,{children:[n.jsxs("button",{className:"student-course-button green",type:"button",onClick:()=>window.location.hash=`/student/course/${g.id}/final-exam`,children:[n.jsx(U,{icon:pp}),"Final Exam"]}),n.jsxs("button",{className:"student-course-button gold",type:"button",onClick:()=>window.location.hash="/student/certificates",children:[n.jsx(U,{icon:wr}),"Certificate"]})]}):n.jsxs("button",{className:"student-course-button green",type:"button",onClick:()=>v(g),children:[n.jsx(U,{icon:wa}),"Continue"]})})]})]},g.id))})]})]})}const Z4="https://www.youtube.com/@stekoratech?sub_confirmation=1";function ey(a){if(!a)return"";const l=a.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([^?&/]+)/i);return l?`https://www.youtube.com/embed/${l[1]}`:a}function ty({courseId:a,moduleId:l}){var A,M;const[s,d]=N.useState(null),[u,p]=N.useState(!0),[h,b]=N.useState(""),[f,x]=N.useState(localStorage.getItem("stekoraYoutubeSubscribed")==="yes");N.useEffect(()=>{v()},[a,l]);async function v(){try{p(!0),b("");const z=await $3(a,l);d(z)}catch(z){console.error(z),b(z.message||"Failed to load module")}finally{p(!1)}}function g(){window.open(Z4,"_blank","noopener,noreferrer")}function y(){localStorage.setItem("stekoraYoutubeSubscribed","yes"),x(!0)}const C=((A=s==null?void 0:s.modules)==null?void 0:A.findIndex(z=>Number(z.id)===Number(l)))??-1,_=C>0?s.modules[C-1]:null,I=C>=0?s.modules[C+1]:null;return n.jsxs(kr,{title:((M=s==null?void 0:s.module)==null?void 0:M.course_title)||"Course Module",children:[n.jsx("style",{children:`
        .student-module-shell {
          display: grid;
          gap: 1rem;
        }

        .student-module-header,
        .student-material-card {
          background: #ffffff;
          border: 1px solid #dce4ed;
          border-radius: 8px;
          padding: 1.2rem;
        }

        .student-module-header h2,
        .student-material-card h3 {
          margin: 0 0 0.5rem;
          color: #10243f;
        }

        .student-module-header p,
        .student-material-card p {
          margin: 0;
          color: #526175;
          line-height: 1.7;
          white-space: pre-wrap;
        }

        .student-module-status {
          display: inline-block;
          margin-top: 0.8rem;
          padding: 0.35rem 0.65rem;
          border-radius: 999px;
          background: #e8eef6;
          color: #003366;
          font-size: 0.78rem;
          font-weight: 800;
        }

        .student-material-video {
          width: 100%;
          aspect-ratio: 16 / 9;
          border: 0;
          border-radius: 8px;
          background: #0f172a;
        }

        .student-video-lock {
          min-height: 300px;
          display: grid;
          place-items: center;
          padding: 1.25rem;
          border-radius: 8px;
          background:
            linear-gradient(rgba(3, 15, 31, 0.82), rgba(3, 15, 31, 0.9)),
            #10243f;
          color: #ffffff;
          text-align: center;
        }

        .student-video-lock-content {
          width: min(430px, 100%);
          display: grid;
          justify-items: center;
          gap: 0.75rem;
        }

        .student-video-lock-content p {
          color: #dbeafe;
        }

        .student-video-subscribe,
        .student-video-confirm {
          min-height: 42px;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: 0;
          border-radius: 7px;
          padding: 0 0.9rem;
          color: #ffffff;
          cursor: pointer;
          font-weight: 800;
        }

        .student-video-subscribe {
          background: #ef4444;
        }

        .student-video-confirm {
          background: #22c55e;
        }

        .student-file-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.8rem;
          color: #003366;
          font-weight: 800;
          text-decoration: none;
        }

        .student-module-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .student-module-action-group {
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
        }

        .student-module-button {
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: 0;
          border-radius: 7px;
          padding: 0 0.9rem;
          background: #003366;
          color: #ffffff;
          cursor: pointer;
          font-weight: 800;
        }

        .student-module-button.secondary {
          background: #e8eef6;
          color: #003366;
        }

        .student-module-button.green {
          background: #16a34a;
        }

        .student-module-message {
          padding: 1rem;
          border: 1px dashed #94a3b8;
          border-radius: 8px;
          background: #ffffff;
          color: #64748b;
        }
      `}),u&&n.jsx("div",{className:"student-module-message",children:"Loading module..."}),h&&n.jsx("div",{className:"student-module-message",children:h}),s&&n.jsxs("div",{className:"student-module-shell",children:[n.jsxs("section",{className:"student-module-header",children:[n.jsxs("h2",{children:["Module ",s.module.order_number,": ",s.module.title]}),n.jsx("p",{children:s.module.category||"Course learning module"}),n.jsx("span",{className:"student-module-status",children:Number(s.module.completed)?"Completed":s.latest_grade?`Latest score: ${s.latest_grade.score}%`:"In progress"})]}),s.materials.length===0&&n.jsx("div",{className:"student-module-message",children:"The admin has not uploaded learning material for this module yet."}),s.materials.map(z=>n.jsxs("article",{className:"student-material-card",children:[n.jsx("h3",{children:z.title}),z.content&&n.jsx("p",{children:z.content}),z.youtube_url&&f&&n.jsx("iframe",{className:"student-material-video",src:ey(z.youtube_url),title:z.title,allowFullScreen:!0}),z.youtube_url&&!f&&n.jsx("div",{className:"student-video-lock",children:n.jsxs("div",{className:"student-video-lock-content",children:[n.jsx(U,{icon:Cl,size:"2x"}),n.jsx("strong",{children:"Subscribe free to watch this video"}),n.jsx("p",{children:"Open the Stekora Tech YouTube channel, subscribe, then confirm below."}),n.jsxs("button",{className:"student-video-subscribe",type:"button",onClick:g,children:[n.jsx(U,{icon:bv}),"Subscribe"]}),n.jsx("button",{className:"student-video-confirm",type:"button",onClick:y,children:"I Have Subscribed"})]})}),z.file_url&&n.jsxs("a",{className:"student-file-link",href:ct(z.file_url),target:"_blank",rel:"noreferrer",children:[n.jsx(U,{icon:Bx}),"Open learning file"]})]},z.id)),n.jsxs("section",{className:"student-module-actions",children:[n.jsxs("div",{className:"student-module-action-group",children:[_&&n.jsxs("button",{className:"student-module-button secondary",type:"button",onClick:()=>window.location.hash=`/student/course/${a}/module/${_.id}`,children:[n.jsx(U,{icon:es}),"Previous"]}),I&&Number(s.module.completed)===1&&n.jsxs("button",{className:"student-module-button secondary",type:"button",onClick:()=>window.location.hash=`/student/course/${a}/module/${I.id}`,children:["Next",n.jsx(U,{icon:iv})]})]}),s.has_assessment?n.jsxs("button",{className:"student-module-button green",type:"button",onClick:()=>window.location.hash=`/student/course/${a}/module/${l}/assessment`,children:[n.jsx(U,{icon:xv}),"Take Assessment"]}):n.jsx("span",{className:"student-module-message",children:"Waiting for the admin to add this module assessment."})]})]})]})}function ny(){const[a,l]=N.useState(()=>ts("student")),[s,d]=N.useState({currentPassword:"",newPassword:"",confirmPassword:""}),[u,p]=N.useState(!1),[h,b]=N.useState({type:"",text:""}),[f,x]=N.useState(!1),v=y=>{l(y),Xp("student",y)},g=async y=>{if(y.preventDefault(),b({type:"",text:""}),s.newPassword!==s.confirmPassword){b({type:"error",text:"New passwords do not match."});return}x(!0);try{const C=await F3({currentPassword:s.currentPassword,newPassword:s.newPassword});b({type:"success",text:C.message}),d({currentPassword:"",newPassword:"",confirmPassword:""})}catch(C){b({type:"error",text:C.message})}finally{x(!1)}};return n.jsxs(kr,{title:"Settings",children:[n.jsx("style",{children:ry}),n.jsxs("div",{className:"student-account-settings",children:[n.jsxs("section",{className:"student-settings-section",children:[n.jsxs("div",{className:"student-settings-heading",children:[n.jsx("span",{children:n.jsx(U,{icon:qi})}),n.jsxs("div",{children:[n.jsx("h2",{children:"Appearance"}),n.jsx("p",{children:"Choose how your learning account looks on this device."})]})]}),n.jsxs("div",{className:"student-theme-options",children:[n.jsxs("button",{className:a==="light"?"selected":"",onClick:()=>v("light"),children:[n.jsx(U,{icon:lp}),n.jsxs("span",{children:[n.jsx("strong",{children:"Light mode"}),n.jsx("small",{children:"Bright and clean interface"})]})]}),n.jsxs("button",{className:a==="dark"?"selected":"",onClick:()=>v("dark"),children:[n.jsx(U,{icon:qi}),n.jsxs("span",{children:[n.jsx("strong",{children:"Dark mode"}),n.jsx("small",{children:"Comfortable in low light"})]})]})]})]}),n.jsxs("section",{className:"student-settings-section",children:[n.jsxs("div",{className:"student-settings-heading",children:[n.jsx("span",{children:n.jsx(U,{icon:Vl})}),n.jsxs("div",{children:[n.jsx("h2",{children:"Change password"}),n.jsx("p",{children:"Use your current password to protect this change."})]})]}),n.jsxs("form",{className:"student-password-form",onSubmit:g,children:[["currentPassword","newPassword","confirmPassword"].map(y=>n.jsxs("label",{children:[y==="currentPassword"?"Current password":y==="newPassword"?"New password":"Confirm new password",n.jsxs("span",{className:"student-password-field",children:[n.jsx(U,{icon:Qi}),n.jsx("input",{type:u?"text":"password",value:s[y],minLength:y==="currentPassword"?void 0:8,required:!0,onChange:C=>d({...s,[y]:C.target.value})})]})]},y)),n.jsxs("div",{className:"student-password-actions",children:[n.jsxs("label",{className:"student-show-passwords",children:[n.jsx("input",{type:"checkbox",checked:u,onChange:y=>p(y.target.checked)}),n.jsx(U,{icon:u?gp:ip})," Show passwords"]}),n.jsxs("button",{className:"student-settings-save",disabled:f,children:[n.jsx(U,{icon:Qi})," ",f?"Saving...":"Update Password"]})]}),h.text&&n.jsx("p",{className:`student-settings-message ${h.type}`,children:h.text})]})]})]})]})}const ry=`
  .student-account-settings { max-width: 920px; display: grid; gap: 1.25rem; }
  .student-settings-section { background: #fff; border: 1px solid #d9e1ea; border-radius: 8px; padding: 1.5rem; }
  .student-settings-heading { display: flex; gap: 0.9rem; align-items: flex-start; margin-bottom: 1.35rem; }
  .student-settings-heading > span { width: 42px; height: 42px; flex: 0 0 42px; display: grid; place-items: center; border-radius: 8px; background: #e1f8fc; color: #003366; }
  .student-settings-heading h2 { margin: 0 0 0.25rem; font-size: 1.15rem; }
  .student-settings-heading p { margin: 0; color: #64748b; font-size: 0.88rem; }
  .student-theme-options { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.9rem; }
  .student-theme-options button { min-height: 82px; display: flex; align-items: center; gap: 0.9rem; padding: 1rem; border: 2px solid #d9e1ea; border-radius: 8px; background: transparent; color: inherit; text-align: left; }
  .student-theme-options button > svg { font-size: 1.4rem; color: #64748b; }
  .student-theme-options button.selected { border-color: #22d3ee; background: rgba(34,211,238,0.08); }
  .student-theme-options button.selected > svg { color: #0891b2; }
  .student-theme-options span { display: grid; gap: 0.2rem; }
  .student-theme-options small { color: #64748b; }
  .student-password-form { max-width: 650px; display: grid; gap: 1rem; background: transparent !important; }
  .student-password-form > label { display: grid; gap: 0.4rem; font-weight: 700; font-size: 0.86rem; }
  .student-password-field { display: flex; align-items: center; gap: 0.7rem; padding: 0 0.9rem; border: 1px solid #cbd5e1; border-radius: 8px; background: #fff; }
  .student-password-field svg { color: #64748b; }
  .student-password-field input { width: 100%; min-height: 46px; padding: 0; border: 0 !important; outline: 0; background: transparent !important; color: inherit; }
  .student-password-actions { display: flex; justify-content: space-between; align-items: center; gap: 1rem; flex-wrap: wrap; }
  .student-show-passwords { display: flex !important; grid-auto-flow: column; align-items: center; gap: 0.5rem !important; color: #475569; font-weight: 600 !important; }
  .student-show-passwords input { width: 16px; height: 16px; }
  .student-settings-save { min-height: 44px; display: inline-flex; align-items: center; gap: 0.55rem; padding: 0 1rem; border-radius: 8px; background: #003f78; color: #fff; font-weight: 800; }
  .student-settings-save:disabled { opacity: 0.65; cursor: wait; }
  .student-settings-message { margin: 0; padding: 0.8rem 0.9rem; border-radius: 8px; font-weight: 700; font-size: 0.86rem; }
  .student-settings-message.success { background: #dcfce7; color: #166534; }
  .student-settings-message.error { background: #fee2e2; color: #991b1b; }
  @media (max-width: 620px) { .student-theme-options { grid-template-columns: 1fr; } }
`;function ay(){return ve("/payment-settings")}const iy="/assets/MTN_logo-DGCywDXQ.jpg",da=a=>`${Number(a||0).toLocaleString("en-RW")} RWF`;function sy({cart:a,goTo:l}){const[s,d]=N.useState(null),[u,p]=N.useState(!0),[h,b]=N.useState(""),[f,x]=N.useState(!1),[v,g]=N.useState({full_name:"",phone:"",location:"",delivery_method:"pickup"}),y=N.useMemo(()=>a.reduce((F,D)=>F+Number(D.price||0)*Number(D.quantity||1),0),[a]);N.useEffect(()=>{async function F(){try{p(!0),b("");const D=await ay();d(D)}catch(D){console.error(D),b(D.message||"Failed to load payment information")}finally{p(!1)}}F()},[]);const C=s?`*182*1*1*${s.momo_number}*${Math.round(y)}#`:"",I=`
Hello Stekora Tech,

I have paid for the following order:

${a.map(F=>`- ${F.title} x${F.quantity}: ${da(Number(F.price||0)*F.quantity)}`).join(`
`)}

Total: ${da(y)}

Customer name: ${v.full_name||"Not provided"}
Phone: ${v.phone||"Not provided"}
Location: ${v.location||"Not provided"}
Delivery method: ${v.delivery_method==="delivery"?"Delivery":"Pickup"}

I will attach the Mobile Money payment screenshot here.
`.trim(),A=s?`https://wa.me/${s.whatsapp_number}?text=${encodeURIComponent(I)}`:"#";async function M(){try{await navigator.clipboard.writeText(C),x(!0),window.setTimeout(()=>{x(!1)},2e3)}catch(F){console.error("Failed to copy payment code",F),alert(`Copy this payment code: ${C}`)}}function z(F){g(D=>({...D,[F.target.name]:F.target.value}))}function W(){if(!v.full_name.trim()){alert("Please enter your full name");return}if(!v.phone.trim()){alert("Please enter your phone number");return}if(v.delivery_method==="delivery"&&!v.location.trim()){alert("Please enter your delivery location");return}window.open(A,"_blank","noopener,noreferrer")}return a.length===0?n.jsxs("div",{style:{minHeight:"70vh",padding:"3rem 1rem",background:"#f5f5f5",textAlign:"center",color:"#003366"},children:[n.jsx("h1",{children:"Your cart is empty"}),n.jsx("button",{type:"button",onClick:()=>l("/shop"),style:{border:0,borderRadius:"8px",padding:"0.8rem 1.2rem",background:"#003366",color:"#ffffff",fontWeight:800,cursor:"pointer"},children:"Return to shop"})]}):n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
        .checkout-page {
          min-height: 100vh;
          background: #f5f5f5;
          color: #003366;
          padding: 2.5rem 1rem;
        }

        .checkout-container {
          max-width: 72rem;
          margin: 0 auto;
        }

        .checkout-title {
          margin: 0 0 1.5rem;
          font-size: 2rem;
        }

        .checkout-layout {
          display: grid;
          gap: 1.5rem;
        }

        .checkout-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 1.4rem;
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.07);
        }

        .checkout-card h2 {
          margin: 0 0 1rem;
          font-size: 1.15rem;
        }

        .payment-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .mtn-payment-logo {
          width: 48px;
          height: 34px;
          object-fit: contain;
          border-radius: 6px;
          background: #ffcc00;
          border: 1px solid #f2b900;
          padding: 0.15rem;
          flex-shrink: 0;
        }

        .checkout-items {
          display: grid;
          gap: 0.75rem;
        }

        .checkout-item {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 0.75rem;
        }

        .checkout-total {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          margin-top: 1rem;
          font-size: 1.2rem;
          font-weight: 900;
        }

        .checkout-form {
          display: grid;
          gap: 1rem;
        }

        .checkout-field {
          display: grid;
          gap: 0.4rem;
          font-size: 0.85rem;
          font-weight: 800;
        }

        .checkout-field input,
        .checkout-field select {
          width: 100%;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 0.75rem 0.85rem;
          font: inherit;
          outline: none;
          background: #ffffff;
          box-sizing: border-box;
        }

        .checkout-field input:focus,
        .checkout-field select:focus {
          border-color: #003366;
          box-shadow: 0 0 0 3px rgba(0, 51, 102, 0.1);
        }

        .payment-box {
          background: #eefbfe;
          border: 1px solid #bae6fd;
          border-radius: 12px;
          padding: 1rem;
          display: grid;
          gap: 0.8rem;
        }

        .payment-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .payment-label {
          color: #64748b;
          font-size: 0.85rem;
          font-weight: 700;
        }

        .payment-value {
          color: #003366;
          font-weight: 900;
        }

        .payment-code {
          background: #003366;
          color: #ffffff;
          border-radius: 10px;
          padding: 1rem;
          font-size: 1.05rem;
          font-weight: 900;
          word-break: break-all;
          text-align: center;
        }

        .copy-payment-btn {
          border: 0;
          border-radius: 8px;
          background: #e7f5f3;
          color: #0f766e;
          padding: 0.75rem 1rem;
          font-weight: 800;
          cursor: pointer;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 0.55rem;
        }

        .copy-payment-btn:hover {
          background: #d3eeea;
        }

        .checkout-note {
          margin-top: 1rem;
          background: #fff8dc;
          border: 1px solid #f2d56b;
          border-left: 5px solid #f59e0b;
          border-radius: 10px;
          padding: 1rem;
          color: #713f12;
          line-height: 1.7;
          font-size: 0.9rem;
        }

        .checkout-note-title {
          display: flex;
          gap: 0.55rem;
          align-items: center;
          font-weight: 900;
          margin-bottom: 0.45rem;
        }

        .whatsapp-btn {
          width: 100%;
          margin-top: 1rem;
          border: 0;
          border-radius: 10px;
          padding: 0.9rem 1rem;
          background: #16a34a;
          color: #ffffff;
          font-size: 0.95rem;
          font-weight: 900;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
        }

        .whatsapp-btn:hover {
          background: #15803d;
        }

        .checkout-status {
          background: #ffffff;
          border: 1px dashed #94a3b8;
          border-radius: 12px;
          padding: 1rem;
        }

        @media (min-width: 850px) {
          .checkout-layout {
            grid-template-columns:
              minmax(0, 1fr)
              minmax(320px, 0.8fr);
          }
        }

        @media (max-width: 480px) {
          .checkout-page {
            padding: 2rem 0.8rem;
          }

          .checkout-card {
            padding: 1rem;
          }

          .checkout-title {
            font-size: 1.55rem;
          }

          .payment-title {
            align-items: flex-start;
          }

          .mtn-payment-logo {
            width: 44px;
            height: 32px;
          }

          .checkout-item {
            flex-direction: column;
            gap: 0.35rem;
          }

          .payment-row {
            align-items: flex-start;
            flex-direction: column;
            gap: 0.25rem;
          }
        }
      `}),n.jsx("div",{className:"checkout-page",children:n.jsxs("div",{className:"checkout-container",children:[n.jsx("h1",{className:"checkout-title",children:"Complete Your Order"}),n.jsxs("div",{className:"checkout-layout",children:[n.jsxs("div",{children:[n.jsxs("section",{className:"checkout-card",children:[n.jsx("h2",{children:"Customer information"}),n.jsxs("div",{className:"checkout-form",children:[n.jsxs("label",{className:"checkout-field",children:["Full name",n.jsx("input",{type:"text",name:"full_name",value:v.full_name,onChange:z,placeholder:"Enter your full name",required:!0})]}),n.jsxs("label",{className:"checkout-field",children:["Phone number",n.jsx("input",{type:"tel",name:"phone",value:v.phone,onChange:z,placeholder:"Example: 0780000000",required:!0})]}),n.jsxs("label",{className:"checkout-field",children:["How will you receive the product?",n.jsxs("select",{name:"delivery_method",value:v.delivery_method,onChange:z,children:[n.jsx("option",{value:"pickup",children:"I will pick it up"}),n.jsx("option",{value:"delivery",children:"Deliver it to me"})]})]}),v.delivery_method==="delivery"&&n.jsxs("label",{className:"checkout-field",children:["Delivery location",n.jsx("input",{type:"text",name:"location",value:v.location,onChange:z,placeholder:"District, sector or clear address",required:!0})]})]})]}),n.jsxs("section",{className:"checkout-card",style:{marginTop:"1.5rem"},children:[n.jsx("h2",{children:"Your order"}),n.jsx("div",{className:"checkout-items",children:a.map(F=>n.jsxs("div",{className:"checkout-item",children:[n.jsxs("span",{children:[F.title," × ",F.quantity]}),n.jsx("strong",{children:da(Number(F.price||0)*F.quantity)})]},F.id))}),n.jsxs("div",{className:"checkout-total",children:[n.jsx("span",{children:"Total"}),n.jsx("span",{children:da(y)})]})]})]}),n.jsxs("section",{className:"checkout-card",children:[n.jsxs("h2",{className:"payment-title",children:[n.jsx("img",{src:iy,alt:"MTN Mobile Money logo",className:"mtn-payment-logo"}),n.jsx("span",{children:"MTN Mobile Money Payment"})]}),u&&n.jsx("div",{className:"checkout-status",children:"Loading payment information..."}),h&&n.jsx("div",{className:"checkout-status",children:h}),!u&&!h&&s&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"payment-box",children:[n.jsxs("div",{className:"payment-row",children:[n.jsx("span",{className:"payment-label",children:"Mobile Money Number"}),n.jsx("span",{className:"payment-value",children:s.momo_number})]}),n.jsxs("div",{className:"payment-row",children:[n.jsx("span",{className:"payment-label",children:"Registered Number Name"}),n.jsx("span",{className:"payment-value",children:s.momo_account_name})]}),n.jsxs("div",{className:"payment-row",children:[n.jsx("span",{className:"payment-label",children:"Amount To Pay"}),n.jsx("span",{className:"payment-value",children:da(y)})]}),n.jsx("div",{className:"payment-code",children:C}),n.jsxs("button",{type:"button",className:"copy-payment-btn",onClick:M,children:[n.jsx(U,{icon:fv}),f?"Payment code copied":"Copy payment code"]})]}),n.jsxs("div",{className:"checkout-note",children:[n.jsxs("div",{className:"checkout-note-title",children:[n.jsx(U,{icon:cv}),"NOTE:"]}),"After completing the payment, immediately send the payment screenshot to Stekora Tech through WhatsApp using the button below.",n.jsx("br",{}),n.jsx("br",{}),"You may pick up the product from Stekora Tech, or we can deliver it to your location. The customer is responsible for paying the delivery fee."]}),n.jsxs("button",{type:"button",className:"whatsapp-btn",onClick:W,children:[n.jsx(U,{icon:vp}),"Send payment screenshot on WhatsApp"]})]})]})]})]})})]})}const Jp="stekoraCart";function oy(){try{const a=JSON.parse(localStorage.getItem(Jp)||"[]");return Array.isArray(a)?a:[]}catch{return[]}}function ly(){const[a,l]=N.useState(window.location.hash.replace("#","")||"/"),[s,d]=N.useState(!1),[u,p]=N.useState(oy);N.useEffect(()=>{const _=()=>l(window.location.hash.replace("#","")||"/");return window.addEventListener("hashchange",_),()=>window.removeEventListener("hashchange",_)},[]),N.useEffect(()=>{localStorage.setItem(Jp,JSON.stringify(u))},[u]);const h=_=>{window.location.hash=_,l(_),d(!1),window.scrollTo({top:0,behavior:"smooth"})},b=_=>{p(I=>{const A=Number(_.id);return I.find(z=>Number(z.id)===A)?I.map(z=>Number(z.id)===A?{...z,quantity:z.quantity+1}:z):[...I,{..._,id:A,quantity:1}]})},f=(_,I)=>{if(I<=0){p(A=>A.filter(M=>Number(M.id)!==Number(_)));return}p(A=>A.map(M=>Number(M.id)===Number(_)?{...M,quantity:I}:M))},x=_=>p(I=>I.filter(A=>Number(A.id)!==Number(_))),v=()=>p([]),g=u.reduce((_,I)=>_+I.quantity,0),y=N.useMemo(()=>{const _=a.match(/^\/product\/(\d+)$/),I=a.match(/^\/student\/course\/(\d+)\/module\/(\d+)$/),A=a.match(/^\/student\/course\/(\d+)\/module\/(\d+)\/assessment$/),M=a.match(/^\/student\/course\/(\d+)\/final-exam$/);return a.startsWith("/certificate/")?n.jsx(x4,{code:a.split("/").pop()}):_?n.jsx(q3,{productId:_[1],addToCart:b,goTo:h}):a==="/services"?n.jsx(e4,{}):a==="/study"?n.jsx(y3,{}):a==="/jobs"?n.jsx(L3,{}):a==="/about"?n.jsx(Ov,{}):a==="/contact"||a==="/apply-services"?n.jsx(Zv,{}):a==="/shop"?n.jsx(t4,{goTo:h,addToCart:b}):a==="/cart"?n.jsx(Rv,{cart:u,updateCartQuantity:f,removeFromCart:x,clearCart:v,goTo:h}):a==="/login"?n.jsx(Q3,{goTo:h}):a==="/student"?n.jsx(J4,{}):A?n.jsx(X4,{courseId:A[1],moduleId:A[2]}):I?n.jsx(ty,{courseId:I[1],moduleId:I[2]}):M?n.jsx(G4,{courseId:M[1]}):a==="/student/certificates"?n.jsx(K4,{}):a==="/student/settings"?n.jsx(ny,{}):a==="/admin/courses"?n.jsx(A4,{}):a==="/admin/modules"?n.jsx(F4,{}):a==="/admin/materials"?n.jsx(T4,{}):a==="/admin/assessments"?n.jsx(z4,{}):a==="/admin/final-exam"?n.jsx(M4,{}):a==="/admin/exam-submissions"?n.jsx(L4,{}):a==="/admin/students"?n.jsx(V4,{}):a==="/admin/products"?n.jsx($4,{}):a==="/admin/certificates"?n.jsx(_4,{}):a==="/admin/settings"?n.jsx(U4,{}):a==="/admin"?n.jsx(D4,{}):a==="/checkout"?n.jsx(sy,{cart:u,goTo:h}):n.jsx(A3,{goTo:h,addToCart:b})},[a,u]),C=!a.startsWith("/student")&&!a.startsWith("/admin")&&a!=="/login";return n.jsxs(n.Fragment,{children:[n.jsx(s1,{}),C?n.jsx(Lv,{route:a,goTo:h,menuOpen:s,setMenuOpen:d,cartCount:g,children:n.jsx("main",{children:y})}):n.jsx("main",{children:y})]})}a1.createRoot(document.getElementById("root")).render(n.jsx(Fe.StrictMode,{children:n.jsx(ly,{})}));
