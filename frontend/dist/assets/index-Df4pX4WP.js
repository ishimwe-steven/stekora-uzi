(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))d(u);new MutationObserver(u=>{for(const h of u)if(h.type==="childList")for(const y of h.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&d(y)}).observe(document,{childList:!0,subtree:!0});function s(u){const h={};return u.integrity&&(h.integrity=u.integrity),u.referrerPolicy&&(h.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?h.credentials="include":u.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function d(u){if(u.ep)return;u.ep=!0;const h=s(u);fetch(u.href,h)}})();function R1(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Qo={exports:{}},la={},Yo={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Du;function D1(){if(Du)return he;Du=1;var a=Symbol.for("react.element"),l=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),y=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function v(w){return w===null||typeof w!="object"?null:(w=x&&w[x]||w["@@iterator"],typeof w=="function"?w:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,F={};function _(w,O,le){this.props=w,this.context=O,this.refs=F,this.updater=le||N}_.prototype.isReactComponent={},_.prototype.setState=function(w,O){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,O,"setState")},_.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function R(){}R.prototype=_.prototype;function M(w,O,le){this.props=w,this.context=O,this.refs=F,this.updater=le||N}var D=M.prototype=new R;D.constructor=M,A(D,_.prototype),D.isPureReactComponent=!0;var V=Array.isArray,q=Object.prototype.hasOwnProperty,G={current:null},re={key:!0,ref:!0,__self:!0,__source:!0};function de(w,O,le){var U,K={},ie=null,ke=null;if(O!=null)for(U in O.ref!==void 0&&(ke=O.ref),O.key!==void 0&&(ie=""+O.key),O)q.call(O,U)&&!re.hasOwnProperty(U)&&(K[U]=O[U]);var Ce=arguments.length-2;if(Ce===1)K.children=le;else if(1<Ce){for(var _e=Array(Ce),ct=0;ct<Ce;ct++)_e[ct]=arguments[ct+2];K.children=_e}if(w&&w.defaultProps)for(U in Ce=w.defaultProps,Ce)K[U]===void 0&&(K[U]=Ce[U]);return{$$typeof:a,type:w,key:ie,ref:ke,props:K,_owner:G.current}}function X(w,O){return{$$typeof:a,type:w.type,key:O,ref:w.ref,props:w.props,_owner:w._owner}}function fe(w){return typeof w=="object"&&w!==null&&w.$$typeof===a}function pe(w){var O={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(le){return O[le]})}var me=/\/+/g;function ve(w,O){return typeof w=="object"&&w!==null&&w.key!=null?pe(""+w.key):O.toString(36)}function Se(w,O,le,U,K){var ie=typeof w;(ie==="undefined"||ie==="boolean")&&(w=null);var ke=!1;if(w===null)ke=!0;else switch(ie){case"string":case"number":ke=!0;break;case"object":switch(w.$$typeof){case a:case l:ke=!0}}if(ke)return ke=w,K=K(ke),w=U===""?"."+ve(ke,0):U,V(K)?(le="",w!=null&&(le=w.replace(me,"$&/")+"/"),Se(K,O,le,"",function(ct){return ct})):K!=null&&(fe(K)&&(K=X(K,le+(!K.key||ke&&ke.key===K.key?"":(""+K.key).replace(me,"$&/")+"/")+w)),O.push(K)),1;if(ke=0,U=U===""?".":U+":",V(w))for(var Ce=0;Ce<w.length;Ce++){ie=w[Ce];var _e=U+ve(ie,Ce);ke+=Se(ie,O,le,_e,K)}else if(_e=v(w),typeof _e=="function")for(w=_e.call(w),Ce=0;!(ie=w.next()).done;)ie=ie.value,_e=U+ve(ie,Ce++),ke+=Se(ie,O,le,_e,K);else if(ie==="object")throw O=String(w),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.");return ke}function je(w,O,le){if(w==null)return w;var U=[],K=0;return Se(w,U,"","",function(ie){return O.call(le,ie,K++)}),U}function Ne(w){if(w._status===-1){var O=w._result;O=O(),O.then(function(le){(w._status===0||w._status===-1)&&(w._status=1,w._result=le)},function(le){(w._status===0||w._status===-1)&&(w._status=2,w._result=le)}),w._status===-1&&(w._status=0,w._result=O)}if(w._status===1)return w._result.default;throw w._result}var xe={current:null},k={transition:null},T={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:k,ReactCurrentOwner:G};function E(){throw Error("act(...) is not supported in production builds of React.")}return he.Children={map:je,forEach:function(w,O,le){je(w,function(){O.apply(this,arguments)},le)},count:function(w){var O=0;return je(w,function(){O++}),O},toArray:function(w){return je(w,function(O){return O})||[]},only:function(w){if(!fe(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},he.Component=_,he.Fragment=s,he.Profiler=u,he.PureComponent=M,he.StrictMode=d,he.Suspense=f,he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,he.act=E,he.cloneElement=function(w,O,le){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var U=A({},w.props),K=w.key,ie=w.ref,ke=w._owner;if(O!=null){if(O.ref!==void 0&&(ie=O.ref,ke=G.current),O.key!==void 0&&(K=""+O.key),w.type&&w.type.defaultProps)var Ce=w.type.defaultProps;for(_e in O)q.call(O,_e)&&!re.hasOwnProperty(_e)&&(U[_e]=O[_e]===void 0&&Ce!==void 0?Ce[_e]:O[_e])}var _e=arguments.length-2;if(_e===1)U.children=le;else if(1<_e){Ce=Array(_e);for(var ct=0;ct<_e;ct++)Ce[ct]=arguments[ct+2];U.children=Ce}return{$$typeof:a,type:w.type,key:K,ref:ie,props:U,_owner:ke}},he.createContext=function(w){return w={$$typeof:y,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:h,_context:w},w.Consumer=w},he.createElement=de,he.createFactory=function(w){var O=de.bind(null,w);return O.type=w,O},he.createRef=function(){return{current:null}},he.forwardRef=function(w){return{$$typeof:b,render:w}},he.isValidElement=fe,he.lazy=function(w){return{$$typeof:g,_payload:{_status:-1,_result:w},_init:Ne}},he.memo=function(w,O){return{$$typeof:p,type:w,compare:O===void 0?null:O}},he.startTransition=function(w){var O=k.transition;k.transition={};try{w()}finally{k.transition=O}},he.unstable_act=E,he.useCallback=function(w,O){return xe.current.useCallback(w,O)},he.useContext=function(w){return xe.current.useContext(w)},he.useDebugValue=function(){},he.useDeferredValue=function(w){return xe.current.useDeferredValue(w)},he.useEffect=function(w,O){return xe.current.useEffect(w,O)},he.useId=function(){return xe.current.useId()},he.useImperativeHandle=function(w,O,le){return xe.current.useImperativeHandle(w,O,le)},he.useInsertionEffect=function(w,O){return xe.current.useInsertionEffect(w,O)},he.useLayoutEffect=function(w,O){return xe.current.useLayoutEffect(w,O)},he.useMemo=function(w,O){return xe.current.useMemo(w,O)},he.useReducer=function(w,O,le){return xe.current.useReducer(w,O,le)},he.useRef=function(w){return xe.current.useRef(w)},he.useState=function(w){return xe.current.useState(w)},he.useSyncExternalStore=function(w,O,le){return xe.current.useSyncExternalStore(w,O,le)},he.useTransition=function(){return xe.current.useTransition()},he.version="18.3.1",he}var Uu;function Nl(){return Uu||(Uu=1,Yo.exports=D1()),Yo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $u;function U1(){if($u)return la;$u=1;var a=Nl(),l=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,u=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function y(b,f,p){var g,x={},v=null,N=null;p!==void 0&&(v=""+p),f.key!==void 0&&(v=""+f.key),f.ref!==void 0&&(N=f.ref);for(g in f)d.call(f,g)&&!h.hasOwnProperty(g)&&(x[g]=f[g]);if(b&&b.defaultProps)for(g in f=b.defaultProps,f)x[g]===void 0&&(x[g]=f[g]);return{$$typeof:l,type:b,key:v,ref:N,props:x,_owner:u.current}}return la.Fragment=s,la.jsx=y,la.jsxs=y,la}var Wu;function $1(){return Wu||(Wu=1,Qo.exports=U1()),Qo.exports}var r=$1(),z=Nl();const Fe=R1(z);var Li={},qo={exports:{}},lt={},Go={exports:{}},Xo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hu;function W1(){return Hu||(Hu=1,(function(a){function l(k,T){var E=k.length;k.push(T);e:for(;0<E;){var w=E-1>>>1,O=k[w];if(0<u(O,T))k[w]=T,k[E]=O,E=w;else break e}}function s(k){return k.length===0?null:k[0]}function d(k){if(k.length===0)return null;var T=k[0],E=k.pop();if(E!==T){k[0]=E;e:for(var w=0,O=k.length,le=O>>>1;w<le;){var U=2*(w+1)-1,K=k[U],ie=U+1,ke=k[ie];if(0>u(K,E))ie<O&&0>u(ke,K)?(k[w]=ke,k[ie]=E,w=ie):(k[w]=K,k[U]=E,w=U);else if(ie<O&&0>u(ke,E))k[w]=ke,k[ie]=E,w=ie;else break e}}return T}function u(k,T){var E=k.sortIndex-T.sortIndex;return E!==0?E:k.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;a.unstable_now=function(){return h.now()}}else{var y=Date,b=y.now();a.unstable_now=function(){return y.now()-b}}var f=[],p=[],g=1,x=null,v=3,N=!1,A=!1,F=!1,_=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(k){for(var T=s(p);T!==null;){if(T.callback===null)d(p);else if(T.startTime<=k)d(p),T.sortIndex=T.expirationTime,l(f,T);else break;T=s(p)}}function V(k){if(F=!1,D(k),!A)if(s(f)!==null)A=!0,Ne(q);else{var T=s(p);T!==null&&xe(V,T.startTime-k)}}function q(k,T){A=!1,F&&(F=!1,R(de),de=-1),N=!0;var E=v;try{for(D(T),x=s(f);x!==null&&(!(x.expirationTime>T)||k&&!pe());){var w=x.callback;if(typeof w=="function"){x.callback=null,v=x.priorityLevel;var O=w(x.expirationTime<=T);T=a.unstable_now(),typeof O=="function"?x.callback=O:x===s(f)&&d(f),D(T)}else d(f);x=s(f)}if(x!==null)var le=!0;else{var U=s(p);U!==null&&xe(V,U.startTime-T),le=!1}return le}finally{x=null,v=E,N=!1}}var G=!1,re=null,de=-1,X=5,fe=-1;function pe(){return!(a.unstable_now()-fe<X)}function me(){if(re!==null){var k=a.unstable_now();fe=k;var T=!0;try{T=re(!0,k)}finally{T?ve():(G=!1,re=null)}}else G=!1}var ve;if(typeof M=="function")ve=function(){M(me)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,je=Se.port2;Se.port1.onmessage=me,ve=function(){je.postMessage(null)}}else ve=function(){_(me,0)};function Ne(k){re=k,G||(G=!0,ve())}function xe(k,T){de=_(function(){k(a.unstable_now())},T)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(k){k.callback=null},a.unstable_continueExecution=function(){A||N||(A=!0,Ne(q))},a.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<k?Math.floor(1e3/k):5},a.unstable_getCurrentPriorityLevel=function(){return v},a.unstable_getFirstCallbackNode=function(){return s(f)},a.unstable_next=function(k){switch(v){case 1:case 2:case 3:var T=3;break;default:T=v}var E=v;v=T;try{return k()}finally{v=E}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(k,T){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var E=v;v=k;try{return T()}finally{v=E}},a.unstable_scheduleCallback=function(k,T,E){var w=a.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?w+E:w):E=w,k){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=E+O,k={id:g++,callback:T,priorityLevel:k,startTime:E,expirationTime:O,sortIndex:-1},E>w?(k.sortIndex=E,l(p,k),s(f)===null&&k===s(p)&&(F?(R(de),de=-1):F=!0,xe(V,E-w))):(k.sortIndex=O,l(f,k),A||N||(A=!0,Ne(q))),k},a.unstable_shouldYield=pe,a.unstable_wrapCallback=function(k){var T=v;return function(){var E=v;v=T;try{return k.apply(this,arguments)}finally{v=E}}}})(Xo)),Xo}var Bu;function H1(){return Bu||(Bu=1,Go.exports=W1()),Go.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vu;function B1(){if(Vu)return lt;Vu=1;var a=Nl(),l=H1();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,u={};function h(e,t){y(e,t),y(e+"Capture",t)}function y(e,t){for(u[e]=t,e=0;e<t.length;e++)d.add(t[e])}var b=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},x={};function v(e){return f.call(x,e)?!0:f.call(g,e)?!1:p.test(e)?x[e]=!0:(g[e]=!0,!1)}function N(e,t,n,i){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function A(e,t,n,i){if(t===null||typeof t>"u"||N(e,t,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function F(e,t,n,i,o,c,m){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=c,this.removeEmptyString=m}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_[e]=new F(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];_[t]=new F(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){_[e]=new F(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_[e]=new F(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_[e]=new F(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){_[e]=new F(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){_[e]=new F(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){_[e]=new F(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){_[e]=new F(e,5,!1,e.toLowerCase(),null,!1,!1)});var R=/[\-:]([a-z])/g;function M(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(R,M);_[t]=new F(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(R,M);_[t]=new F(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(R,M);_[t]=new F(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){_[e]=new F(e,1,!1,e.toLowerCase(),null,!1,!1)}),_.xlinkHref=new F("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){_[e]=new F(e,1,!1,e.toLowerCase(),null,!0,!0)});function D(e,t,n,i){var o=_.hasOwnProperty(t)?_[t]:null;(o!==null?o.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(A(t,n,o,i)&&(n=null),i||o===null?v(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,i=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,i?e.setAttributeNS(i,t,n):e.setAttribute(t,n))))}var V=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,q=Symbol.for("react.element"),G=Symbol.for("react.portal"),re=Symbol.for("react.fragment"),de=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),fe=Symbol.for("react.provider"),pe=Symbol.for("react.context"),me=Symbol.for("react.forward_ref"),ve=Symbol.for("react.suspense"),Se=Symbol.for("react.suspense_list"),je=Symbol.for("react.memo"),Ne=Symbol.for("react.lazy"),xe=Symbol.for("react.offscreen"),k=Symbol.iterator;function T(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var E=Object.assign,w;function O(e){if(w===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);w=t&&t[1]||""}return`
`+w+e}var le=!1;function U(e,t){if(!e||le)return"";le=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(I){var i=I}Reflect.construct(e,[],t)}else{try{t.call()}catch(I){i=I}e.call(t.prototype)}else{try{throw Error()}catch(I){i=I}e()}}catch(I){if(I&&i&&typeof I.stack=="string"){for(var o=I.stack.split(`
`),c=i.stack.split(`
`),m=o.length-1,j=c.length-1;1<=m&&0<=j&&o[m]!==c[j];)j--;for(;1<=m&&0<=j;m--,j--)if(o[m]!==c[j]){if(m!==1||j!==1)do if(m--,j--,0>j||o[m]!==c[j]){var S=`
`+o[m].replace(" at new "," at ");return e.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",e.displayName)),S}while(1<=m&&0<=j);break}}}finally{le=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?O(e):""}function K(e){switch(e.tag){case 5:return O(e.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return e=U(e.type,!1),e;case 11:return e=U(e.type.render,!1),e;case 1:return e=U(e.type,!0),e;default:return""}}function ie(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case re:return"Fragment";case G:return"Portal";case X:return"Profiler";case de:return"StrictMode";case ve:return"Suspense";case Se:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pe:return(e.displayName||"Context")+".Consumer";case fe:return(e._context.displayName||"Context")+".Provider";case me:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case je:return t=e.displayName||null,t!==null?t:ie(e.type)||"Memo";case Ne:t=e._payload,e=e._init;try{return ie(e(t))}catch{}}return null}function ke(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(t);case 8:return t===de?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ce(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _e(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ct(e){var t=_e(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,c=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(m){i=""+m,c.call(this,m)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(m){i=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wa(e){e._valueTracker||(e._valueTracker=ct(e))}function Vl(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=_e(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function ja(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ji(e,t){var n=t.checked;return E({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ql(e,t){var n=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;n=Ce(t.value!=null?t.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Yl(e,t){t=t.checked,t!=null&&D(e,"checked",t,!1)}function Zi(e,t){Yl(e,t);var n=Ce(t.value),i=t.type;if(n!=null)i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?es(e,t.type,n):t.hasOwnProperty("defaultValue")&&es(e,t.type,Ce(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ql(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function es(e,t,n){(t!=="number"||ja(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var kr=Array.isArray;function Un(e,t,n,i){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Ce(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,i&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ts(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return E({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Gl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(s(92));if(kr(n)){if(1<n.length)throw Error(s(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ce(n)}}function Xl(e,t){var n=Ce(t.value),i=Ce(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),i!=null&&(e.defaultValue=""+i)}function Kl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Jl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ns(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Jl(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ka,Zl=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,i,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,i,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ka=ka||document.createElement("div"),ka.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ka.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Sr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Nr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wp=["Webkit","ms","Moz","O"];Object.keys(Nr).forEach(function(e){Wp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Nr[t]=Nr[e]})});function ec(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Nr.hasOwnProperty(e)&&Nr[e]?(""+t).trim():t+"px"}function tc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var i=n.indexOf("--")===0,o=ec(n,t[n],i);n==="float"&&(n="cssFloat"),i?e.setProperty(n,o):e[n]=o}}var Hp=E({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rs(e,t){if(t){if(Hp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function as(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var is=null;function ss(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var os=null,$n=null,Wn=null;function nc(e){if(e=Yr(e)){if(typeof os!="function")throw Error(s(280));var t=e.stateNode;t&&(t=Qa(t),os(e.stateNode,e.type,t))}}function rc(e){$n?Wn?Wn.push(e):Wn=[e]:$n=e}function ac(){if($n){var e=$n,t=Wn;if(Wn=$n=null,nc(e),t)for(e=0;e<t.length;e++)nc(t[e])}}function ic(e,t){return e(t)}function sc(){}var ls=!1;function oc(e,t,n){if(ls)return e(t,n);ls=!0;try{return ic(e,t,n)}finally{ls=!1,($n!==null||Wn!==null)&&(sc(),ac())}}function Cr(e,t){var n=e.stateNode;if(n===null)return null;var i=Qa(n);if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var cs=!1;if(b)try{var Er={};Object.defineProperty(Er,"passive",{get:function(){cs=!0}}),window.addEventListener("test",Er,Er),window.removeEventListener("test",Er,Er)}catch{cs=!1}function Bp(e,t,n,i,o,c,m,j,S){var I=Array.prototype.slice.call(arguments,3);try{t.apply(n,I)}catch(W){this.onError(W)}}var zr=!1,Sa=null,Na=!1,ds=null,Vp={onError:function(e){zr=!0,Sa=e}};function Qp(e,t,n,i,o,c,m,j,S){zr=!1,Sa=null,Bp.apply(Vp,arguments)}function Yp(e,t,n,i,o,c,m,j,S){if(Qp.apply(this,arguments),zr){if(zr){var I=Sa;zr=!1,Sa=null}else throw Error(s(198));Na||(Na=!0,ds=I)}}function jn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function lc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cc(e){if(jn(e)!==e)throw Error(s(188))}function qp(e){var t=e.alternate;if(!t){if(t=jn(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,i=t;;){var o=n.return;if(o===null)break;var c=o.alternate;if(c===null){if(i=o.return,i!==null){n=i;continue}break}if(o.child===c.child){for(c=o.child;c;){if(c===n)return cc(o),e;if(c===i)return cc(o),t;c=c.sibling}throw Error(s(188))}if(n.return!==i.return)n=o,i=c;else{for(var m=!1,j=o.child;j;){if(j===n){m=!0,n=o,i=c;break}if(j===i){m=!0,i=o,n=c;break}j=j.sibling}if(!m){for(j=c.child;j;){if(j===n){m=!0,n=c,i=o;break}if(j===i){m=!0,i=c,n=o;break}j=j.sibling}if(!m)throw Error(s(189))}}if(n.alternate!==i)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function dc(e){return e=qp(e),e!==null?uc(e):null}function uc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=uc(e);if(t!==null)return t;e=e.sibling}return null}var fc=l.unstable_scheduleCallback,mc=l.unstable_cancelCallback,Gp=l.unstable_shouldYield,Xp=l.unstable_requestPaint,De=l.unstable_now,Kp=l.unstable_getCurrentPriorityLevel,us=l.unstable_ImmediatePriority,pc=l.unstable_UserBlockingPriority,Ca=l.unstable_NormalPriority,Jp=l.unstable_LowPriority,hc=l.unstable_IdlePriority,Ea=null,_t=null;function Zp(e){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(Ea,e,void 0,(e.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:nh,eh=Math.log,th=Math.LN2;function nh(e){return e>>>=0,e===0?32:31-(eh(e)/th|0)|0}var za=64,Pa=4194304;function Pr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Aa(e,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,o=e.suspendedLanes,c=e.pingedLanes,m=n&268435455;if(m!==0){var j=m&~o;j!==0?i=Pr(j):(c&=m,c!==0&&(i=Pr(c)))}else m=n&~o,m!==0?i=Pr(m):c!==0&&(i=Pr(c));if(i===0)return 0;if(t!==0&&t!==i&&(t&o)===0&&(o=i&-i,c=t&-t,o>=c||o===16&&(c&4194240)!==0))return t;if((i&4)!==0&&(i|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)n=31-wt(t),o=1<<n,i|=e[n],t&=~o;return i}function rh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ah(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,c=e.pendingLanes;0<c;){var m=31-wt(c),j=1<<m,S=o[m];S===-1?((j&n)===0||(j&i)!==0)&&(o[m]=rh(j,t)):S<=t&&(e.expiredLanes|=j),c&=~j}}function fs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function gc(){var e=za;return za<<=1,(za&4194240)===0&&(za=64),e}function ms(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ar(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-wt(t),e[t]=n}function ih(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-wt(n),c=1<<o;t[o]=0,i[o]=-1,e[o]=-1,n&=~c}}function ps(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-wt(n),o=1<<i;o&t|e[i]&t&&(e[i]|=t),n&=~o}}var Ee=0;function xc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var vc,hs,yc,bc,wc,gs=!1,La=[],Jt=null,Zt=null,en=null,Lr=new Map,_r=new Map,tn=[],sh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jc(e,t){switch(e){case"focusin":case"focusout":Jt=null;break;case"dragenter":case"dragleave":Zt=null;break;case"mouseover":case"mouseout":en=null;break;case"pointerover":case"pointerout":Lr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_r.delete(t.pointerId)}}function Mr(e,t,n,i,o,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:c,targetContainers:[o]},t!==null&&(t=Yr(t),t!==null&&hs(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function oh(e,t,n,i,o){switch(t){case"focusin":return Jt=Mr(Jt,e,t,n,i,o),!0;case"dragenter":return Zt=Mr(Zt,e,t,n,i,o),!0;case"mouseover":return en=Mr(en,e,t,n,i,o),!0;case"pointerover":var c=o.pointerId;return Lr.set(c,Mr(Lr.get(c)||null,e,t,n,i,o)),!0;case"gotpointercapture":return c=o.pointerId,_r.set(c,Mr(_r.get(c)||null,e,t,n,i,o)),!0}return!1}function kc(e){var t=kn(e.target);if(t!==null){var n=jn(t);if(n!==null){if(t=n.tag,t===13){if(t=lc(n),t!==null){e.blockedOn=t,wc(e.priority,function(){yc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _a(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);is=i,n.target.dispatchEvent(i),is=null}else return t=Yr(n),t!==null&&hs(t),e.blockedOn=n,!1;t.shift()}return!0}function Sc(e,t,n){_a(e)&&n.delete(t)}function lh(){gs=!1,Jt!==null&&_a(Jt)&&(Jt=null),Zt!==null&&_a(Zt)&&(Zt=null),en!==null&&_a(en)&&(en=null),Lr.forEach(Sc),_r.forEach(Sc)}function Ir(e,t){e.blockedOn===t&&(e.blockedOn=null,gs||(gs=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,lh)))}function Tr(e){function t(o){return Ir(o,e)}if(0<La.length){Ir(La[0],e);for(var n=1;n<La.length;n++){var i=La[n];i.blockedOn===e&&(i.blockedOn=null)}}for(Jt!==null&&Ir(Jt,e),Zt!==null&&Ir(Zt,e),en!==null&&Ir(en,e),Lr.forEach(t),_r.forEach(t),n=0;n<tn.length;n++)i=tn[n],i.blockedOn===e&&(i.blockedOn=null);for(;0<tn.length&&(n=tn[0],n.blockedOn===null);)kc(n),n.blockedOn===null&&tn.shift()}var Hn=V.ReactCurrentBatchConfig,Ma=!0;function ch(e,t,n,i){var o=Ee,c=Hn.transition;Hn.transition=null;try{Ee=1,xs(e,t,n,i)}finally{Ee=o,Hn.transition=c}}function dh(e,t,n,i){var o=Ee,c=Hn.transition;Hn.transition=null;try{Ee=4,xs(e,t,n,i)}finally{Ee=o,Hn.transition=c}}function xs(e,t,n,i){if(Ma){var o=vs(e,t,n,i);if(o===null)Ts(e,t,i,Ia,n),jc(e,i);else if(oh(o,e,t,n,i))i.stopPropagation();else if(jc(e,i),t&4&&-1<sh.indexOf(e)){for(;o!==null;){var c=Yr(o);if(c!==null&&vc(c),c=vs(e,t,n,i),c===null&&Ts(e,t,i,Ia,n),c===o)break;o=c}o!==null&&i.stopPropagation()}else Ts(e,t,i,null,n)}}var Ia=null;function vs(e,t,n,i){if(Ia=null,e=ss(i),e=kn(e),e!==null)if(t=jn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=lc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ia=e,null}function Nc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kp()){case us:return 1;case pc:return 4;case Ca:case Jp:return 16;case hc:return 536870912;default:return 16}default:return 16}}var nn=null,ys=null,Ta=null;function Cc(){if(Ta)return Ta;var e,t=ys,n=t.length,i,o="value"in nn?nn.value:nn.textContent,c=o.length;for(e=0;e<n&&t[e]===o[e];e++);var m=n-e;for(i=1;i<=m&&t[n-i]===o[c-i];i++);return Ta=o.slice(e,1<i?1-i:void 0)}function Fa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Oa(){return!0}function Ec(){return!1}function dt(e){function t(n,i,o,c,m){this._reactName=n,this._targetInst=o,this.type=i,this.nativeEvent=c,this.target=m,this.currentTarget=null;for(var j in e)e.hasOwnProperty(j)&&(n=e[j],this[j]=n?n(c):c[j]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Oa:Ec,this.isPropagationStopped=Ec,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oa)},persist:function(){},isPersistent:Oa}),t}var Bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bs=dt(Bn),Fr=E({},Bn,{view:0,detail:0}),uh=dt(Fr),ws,js,Or,Ra=E({},Fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ss,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Or&&(Or&&e.type==="mousemove"?(ws=e.screenX-Or.screenX,js=e.screenY-Or.screenY):js=ws=0,Or=e),ws)},movementY:function(e){return"movementY"in e?e.movementY:js}}),zc=dt(Ra),fh=E({},Ra,{dataTransfer:0}),mh=dt(fh),ph=E({},Fr,{relatedTarget:0}),ks=dt(ph),hh=E({},Bn,{animationName:0,elapsedTime:0,pseudoElement:0}),gh=dt(hh),xh=E({},Bn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vh=dt(xh),yh=E({},Bn,{data:0}),Pc=dt(yh),bh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jh[e])?!!t[e]:!1}function Ss(){return kh}var Sh=E({},Fr,{key:function(e){if(e.key){var t=bh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ss,charCode:function(e){return e.type==="keypress"?Fa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nh=dt(Sh),Ch=E({},Ra,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ac=dt(Ch),Eh=E({},Fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ss}),zh=dt(Eh),Ph=E({},Bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ah=dt(Ph),Lh=E({},Ra,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_h=dt(Lh),Mh=[9,13,27,32],Ns=b&&"CompositionEvent"in window,Rr=null;b&&"documentMode"in document&&(Rr=document.documentMode);var Ih=b&&"TextEvent"in window&&!Rr,Lc=b&&(!Ns||Rr&&8<Rr&&11>=Rr),_c=" ",Mc=!1;function Ic(e,t){switch(e){case"keyup":return Mh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vn=!1;function Th(e,t){switch(e){case"compositionend":return Tc(t);case"keypress":return t.which!==32?null:(Mc=!0,_c);case"textInput":return e=t.data,e===_c&&Mc?null:e;default:return null}}function Fh(e,t){if(Vn)return e==="compositionend"||!Ns&&Ic(e,t)?(e=Cc(),Ta=ys=nn=null,Vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lc&&t.locale!=="ko"?null:t.data;default:return null}}var Oh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Oh[e.type]:t==="textarea"}function Oc(e,t,n,i){rc(i),t=Ha(t,"onChange"),0<t.length&&(n=new bs("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Dr=null,Ur=null;function Rh(e){td(e,0)}function Da(e){var t=Xn(e);if(Vl(t))return e}function Dh(e,t){if(e==="change")return t}var Rc=!1;if(b){var Cs;if(b){var Es="oninput"in document;if(!Es){var Dc=document.createElement("div");Dc.setAttribute("oninput","return;"),Es=typeof Dc.oninput=="function"}Cs=Es}else Cs=!1;Rc=Cs&&(!document.documentMode||9<document.documentMode)}function Uc(){Dr&&(Dr.detachEvent("onpropertychange",$c),Ur=Dr=null)}function $c(e){if(e.propertyName==="value"&&Da(Ur)){var t=[];Oc(t,Ur,e,ss(e)),oc(Rh,t)}}function Uh(e,t,n){e==="focusin"?(Uc(),Dr=t,Ur=n,Dr.attachEvent("onpropertychange",$c)):e==="focusout"&&Uc()}function $h(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Da(Ur)}function Wh(e,t){if(e==="click")return Da(t)}function Hh(e,t){if(e==="input"||e==="change")return Da(t)}function Bh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jt=typeof Object.is=="function"?Object.is:Bh;function $r(e,t){if(jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var o=n[i];if(!f.call(t,o)||!jt(e[o],t[o]))return!1}return!0}function Wc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hc(e,t){var n=Wc(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wc(n)}}function Bc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vc(){for(var e=window,t=ja();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ja(e.document)}return t}function zs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Vh(e){var t=Vc(),n=e.focusedElem,i=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Bc(n.ownerDocument.documentElement,n)){if(i!==null&&zs(n)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,c=Math.min(i.start,o);i=i.end===void 0?c:Math.min(i.end,o),!e.extend&&c>i&&(o=i,i=c,c=o),o=Hc(n,c);var m=Hc(n,i);o&&m&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==m.node||e.focusOffset!==m.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),c>i?(e.addRange(t),e.extend(m.node,m.offset)):(t.setEnd(m.node,m.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qh=b&&"documentMode"in document&&11>=document.documentMode,Qn=null,Ps=null,Wr=null,As=!1;function Qc(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;As||Qn==null||Qn!==ja(i)||(i=Qn,"selectionStart"in i&&zs(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Wr&&$r(Wr,i)||(Wr=i,i=Ha(Ps,"onSelect"),0<i.length&&(t=new bs("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Qn)))}function Ua(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Yn={animationend:Ua("Animation","AnimationEnd"),animationiteration:Ua("Animation","AnimationIteration"),animationstart:Ua("Animation","AnimationStart"),transitionend:Ua("Transition","TransitionEnd")},Ls={},Yc={};b&&(Yc=document.createElement("div").style,"AnimationEvent"in window||(delete Yn.animationend.animation,delete Yn.animationiteration.animation,delete Yn.animationstart.animation),"TransitionEvent"in window||delete Yn.transitionend.transition);function $a(e){if(Ls[e])return Ls[e];if(!Yn[e])return e;var t=Yn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Yc)return Ls[e]=t[n];return e}var qc=$a("animationend"),Gc=$a("animationiteration"),Xc=$a("animationstart"),Kc=$a("transitionend"),Jc=new Map,Zc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rn(e,t){Jc.set(e,t),h(t,[e])}for(var _s=0;_s<Zc.length;_s++){var Ms=Zc[_s],Yh=Ms.toLowerCase(),qh=Ms[0].toUpperCase()+Ms.slice(1);rn(Yh,"on"+qh)}rn(qc,"onAnimationEnd"),rn(Gc,"onAnimationIteration"),rn(Xc,"onAnimationStart"),rn("dblclick","onDoubleClick"),rn("focusin","onFocus"),rn("focusout","onBlur"),rn(Kc,"onTransitionEnd"),y("onMouseEnter",["mouseout","mouseover"]),y("onMouseLeave",["mouseout","mouseover"]),y("onPointerEnter",["pointerout","pointerover"]),y("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hr));function ed(e,t,n){var i=e.type||"unknown-event";e.currentTarget=n,Yp(i,t,void 0,e),e.currentTarget=null}function td(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],o=i.event;i=i.listeners;e:{var c=void 0;if(t)for(var m=i.length-1;0<=m;m--){var j=i[m],S=j.instance,I=j.currentTarget;if(j=j.listener,S!==c&&o.isPropagationStopped())break e;ed(o,j,I),c=S}else for(m=0;m<i.length;m++){if(j=i[m],S=j.instance,I=j.currentTarget,j=j.listener,S!==c&&o.isPropagationStopped())break e;ed(o,j,I),c=S}}}if(Na)throw e=ds,Na=!1,ds=null,e}function Pe(e,t){var n=t[$s];n===void 0&&(n=t[$s]=new Set);var i=e+"__bubble";n.has(i)||(nd(t,e,2,!1),n.add(i))}function Is(e,t,n){var i=0;t&&(i|=4),nd(n,e,i,t)}var Wa="_reactListening"+Math.random().toString(36).slice(2);function Br(e){if(!e[Wa]){e[Wa]=!0,d.forEach(function(n){n!=="selectionchange"&&(Gh.has(n)||Is(n,!1,e),Is(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wa]||(t[Wa]=!0,Is("selectionchange",!1,t))}}function nd(e,t,n,i){switch(Nc(t)){case 1:var o=ch;break;case 4:o=dh;break;default:o=xs}n=o.bind(null,t,n,e),o=void 0,!cs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),i?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ts(e,t,n,i,o){var c=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var m=i.tag;if(m===3||m===4){var j=i.stateNode.containerInfo;if(j===o||j.nodeType===8&&j.parentNode===o)break;if(m===4)for(m=i.return;m!==null;){var S=m.tag;if((S===3||S===4)&&(S=m.stateNode.containerInfo,S===o||S.nodeType===8&&S.parentNode===o))return;m=m.return}for(;j!==null;){if(m=kn(j),m===null)return;if(S=m.tag,S===5||S===6){i=c=m;continue e}j=j.parentNode}}i=i.return}oc(function(){var I=c,W=ss(n),B=[];e:{var $=Jc.get(e);if($!==void 0){var J=bs,ee=e;switch(e){case"keypress":if(Fa(n)===0)break e;case"keydown":case"keyup":J=Nh;break;case"focusin":ee="focus",J=ks;break;case"focusout":ee="blur",J=ks;break;case"beforeblur":case"afterblur":J=ks;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=zc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=mh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=zh;break;case qc:case Gc:case Xc:J=gh;break;case Kc:J=Ah;break;case"scroll":J=uh;break;case"wheel":J=_h;break;case"copy":case"cut":case"paste":J=vh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=Ac}var te=(t&4)!==0,Ue=!te&&e==="scroll",P=te?$!==null?$+"Capture":null:$;te=[];for(var C=I,L;C!==null;){L=C;var Y=L.stateNode;if(L.tag===5&&Y!==null&&(L=Y,P!==null&&(Y=Cr(C,P),Y!=null&&te.push(Vr(C,Y,L)))),Ue)break;C=C.return}0<te.length&&($=new J($,ee,null,n,W),B.push({event:$,listeners:te}))}}if((t&7)===0){e:{if($=e==="mouseover"||e==="pointerover",J=e==="mouseout"||e==="pointerout",$&&n!==is&&(ee=n.relatedTarget||n.fromElement)&&(kn(ee)||ee[Rt]))break e;if((J||$)&&($=W.window===W?W:($=W.ownerDocument)?$.defaultView||$.parentWindow:window,J?(ee=n.relatedTarget||n.toElement,J=I,ee=ee?kn(ee):null,ee!==null&&(Ue=jn(ee),ee!==Ue||ee.tag!==5&&ee.tag!==6)&&(ee=null)):(J=null,ee=I),J!==ee)){if(te=zc,Y="onMouseLeave",P="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(te=Ac,Y="onPointerLeave",P="onPointerEnter",C="pointer"),Ue=J==null?$:Xn(J),L=ee==null?$:Xn(ee),$=new te(Y,C+"leave",J,n,W),$.target=Ue,$.relatedTarget=L,Y=null,kn(W)===I&&(te=new te(P,C+"enter",ee,n,W),te.target=L,te.relatedTarget=Ue,Y=te),Ue=Y,J&&ee)t:{for(te=J,P=ee,C=0,L=te;L;L=qn(L))C++;for(L=0,Y=P;Y;Y=qn(Y))L++;for(;0<C-L;)te=qn(te),C--;for(;0<L-C;)P=qn(P),L--;for(;C--;){if(te===P||P!==null&&te===P.alternate)break t;te=qn(te),P=qn(P)}te=null}else te=null;J!==null&&rd(B,$,J,te,!1),ee!==null&&Ue!==null&&rd(B,Ue,ee,te,!0)}}e:{if($=I?Xn(I):window,J=$.nodeName&&$.nodeName.toLowerCase(),J==="select"||J==="input"&&$.type==="file")var ne=Dh;else if(Fc($))if(Rc)ne=Hh;else{ne=$h;var se=Uh}else(J=$.nodeName)&&J.toLowerCase()==="input"&&($.type==="checkbox"||$.type==="radio")&&(ne=Wh);if(ne&&(ne=ne(e,I))){Oc(B,ne,n,W);break e}se&&se(e,$,I),e==="focusout"&&(se=$._wrapperState)&&se.controlled&&$.type==="number"&&es($,"number",$.value)}switch(se=I?Xn(I):window,e){case"focusin":(Fc(se)||se.contentEditable==="true")&&(Qn=se,Ps=I,Wr=null);break;case"focusout":Wr=Ps=Qn=null;break;case"mousedown":As=!0;break;case"contextmenu":case"mouseup":case"dragend":As=!1,Qc(B,n,W);break;case"selectionchange":if(Qh)break;case"keydown":case"keyup":Qc(B,n,W)}var oe;if(Ns)e:{switch(e){case"compositionstart":var ce="onCompositionStart";break e;case"compositionend":ce="onCompositionEnd";break e;case"compositionupdate":ce="onCompositionUpdate";break e}ce=void 0}else Vn?Ic(e,n)&&(ce="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ce="onCompositionStart");ce&&(Lc&&n.locale!=="ko"&&(Vn||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&Vn&&(oe=Cc()):(nn=W,ys="value"in nn?nn.value:nn.textContent,Vn=!0)),se=Ha(I,ce),0<se.length&&(ce=new Pc(ce,e,null,n,W),B.push({event:ce,listeners:se}),oe?ce.data=oe:(oe=Tc(n),oe!==null&&(ce.data=oe)))),(oe=Ih?Th(e,n):Fh(e,n))&&(I=Ha(I,"onBeforeInput"),0<I.length&&(W=new Pc("onBeforeInput","beforeinput",null,n,W),B.push({event:W,listeners:I}),W.data=oe))}td(B,t)})}function Vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ha(e,t){for(var n=t+"Capture",i=[];e!==null;){var o=e,c=o.stateNode;o.tag===5&&c!==null&&(o=c,c=Cr(e,n),c!=null&&i.unshift(Vr(e,c,o)),c=Cr(e,t),c!=null&&i.push(Vr(e,c,o))),e=e.return}return i}function qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function rd(e,t,n,i,o){for(var c=t._reactName,m=[];n!==null&&n!==i;){var j=n,S=j.alternate,I=j.stateNode;if(S!==null&&S===i)break;j.tag===5&&I!==null&&(j=I,o?(S=Cr(n,c),S!=null&&m.unshift(Vr(n,S,j))):o||(S=Cr(n,c),S!=null&&m.push(Vr(n,S,j)))),n=n.return}m.length!==0&&e.push({event:t,listeners:m})}var Xh=/\r\n?/g,Kh=/\u0000|\uFFFD/g;function ad(e){return(typeof e=="string"?e:""+e).replace(Xh,`
`).replace(Kh,"")}function Ba(e,t,n){if(t=ad(t),ad(e)!==t&&n)throw Error(s(425))}function Va(){}var Fs=null,Os=null;function Rs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ds=typeof setTimeout=="function"?setTimeout:void 0,Jh=typeof clearTimeout=="function"?clearTimeout:void 0,id=typeof Promise=="function"?Promise:void 0,Zh=typeof queueMicrotask=="function"?queueMicrotask:typeof id<"u"?function(e){return id.resolve(null).then(e).catch(e1)}:Ds;function e1(e){setTimeout(function(){throw e})}function Us(e,t){var n=t,i=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(i===0){e.removeChild(o),Tr(t);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=o}while(n);Tr(t)}function an(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function sd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Gn=Math.random().toString(36).slice(2),Mt="__reactFiber$"+Gn,Qr="__reactProps$"+Gn,Rt="__reactContainer$"+Gn,$s="__reactEvents$"+Gn,t1="__reactListeners$"+Gn,n1="__reactHandles$"+Gn;function kn(e){var t=e[Mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Rt]||n[Mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=sd(e);e!==null;){if(n=e[Mt])return n;e=sd(e)}return t}e=n,n=e.parentNode}return null}function Yr(e){return e=e[Mt]||e[Rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function Qa(e){return e[Qr]||null}var Ws=[],Kn=-1;function sn(e){return{current:e}}function Ae(e){0>Kn||(e.current=Ws[Kn],Ws[Kn]=null,Kn--)}function ze(e,t){Kn++,Ws[Kn]=e.current,e.current=t}var on={},Ke=sn(on),rt=sn(!1),Sn=on;function Jn(e,t){var n=e.type.contextTypes;if(!n)return on;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var o={},c;for(c in n)o[c]=t[c];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function at(e){return e=e.childContextTypes,e!=null}function Ya(){Ae(rt),Ae(Ke)}function od(e,t,n){if(Ke.current!==on)throw Error(s(168));ze(Ke,t),ze(rt,n)}function ld(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var o in i)if(!(o in t))throw Error(s(108,ke(e)||"Unknown",o));return E({},n,i)}function qa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||on,Sn=Ke.current,ze(Ke,e),ze(rt,rt.current),!0}function cd(e,t,n){var i=e.stateNode;if(!i)throw Error(s(169));n?(e=ld(e,t,Sn),i.__reactInternalMemoizedMergedChildContext=e,Ae(rt),Ae(Ke),ze(Ke,e)):Ae(rt),ze(rt,n)}var Dt=null,Ga=!1,Hs=!1;function dd(e){Dt===null?Dt=[e]:Dt.push(e)}function r1(e){Ga=!0,dd(e)}function ln(){if(!Hs&&Dt!==null){Hs=!0;var e=0,t=Ee;try{var n=Dt;for(Ee=1;e<n.length;e++){var i=n[e];do i=i(!0);while(i!==null)}Dt=null,Ga=!1}catch(o){throw Dt!==null&&(Dt=Dt.slice(e+1)),fc(us,ln),o}finally{Ee=t,Hs=!1}}return null}var Zn=[],er=0,Xa=null,Ka=0,ht=[],gt=0,Nn=null,Ut=1,$t="";function Cn(e,t){Zn[er++]=Ka,Zn[er++]=Xa,Xa=e,Ka=t}function ud(e,t,n){ht[gt++]=Ut,ht[gt++]=$t,ht[gt++]=Nn,Nn=e;var i=Ut;e=$t;var o=32-wt(i)-1;i&=~(1<<o),n+=1;var c=32-wt(t)+o;if(30<c){var m=o-o%5;c=(i&(1<<m)-1).toString(32),i>>=m,o-=m,Ut=1<<32-wt(t)+o|n<<o|i,$t=c+e}else Ut=1<<c|n<<o|i,$t=e}function Bs(e){e.return!==null&&(Cn(e,1),ud(e,1,0))}function Vs(e){for(;e===Xa;)Xa=Zn[--er],Zn[er]=null,Ka=Zn[--er],Zn[er]=null;for(;e===Nn;)Nn=ht[--gt],ht[gt]=null,$t=ht[--gt],ht[gt]=null,Ut=ht[--gt],ht[gt]=null}var ut=null,ft=null,Me=!1,kt=null;function fd(e,t){var n=bt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function md(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ut=e,ft=an(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ut=e,ft=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Nn!==null?{id:Ut,overflow:$t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=bt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ut=e,ft=null,!0):!1;default:return!1}}function Qs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ys(e){if(Me){var t=ft;if(t){var n=t;if(!md(e,t)){if(Qs(e))throw Error(s(418));t=an(n.nextSibling);var i=ut;t&&md(e,t)?fd(i,n):(e.flags=e.flags&-4097|2,Me=!1,ut=e)}}else{if(Qs(e))throw Error(s(418));e.flags=e.flags&-4097|2,Me=!1,ut=e}}}function pd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ut=e}function Ja(e){if(e!==ut)return!1;if(!Me)return pd(e),Me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Rs(e.type,e.memoizedProps)),t&&(t=ft)){if(Qs(e))throw hd(),Error(s(418));for(;t;)fd(e,t),t=an(t.nextSibling)}if(pd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ft=an(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ft=null}}else ft=ut?an(e.stateNode.nextSibling):null;return!0}function hd(){for(var e=ft;e;)e=an(e.nextSibling)}function tr(){ft=ut=null,Me=!1}function qs(e){kt===null?kt=[e]:kt.push(e)}var a1=V.ReactCurrentBatchConfig;function qr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(s(309));var i=n.stateNode}if(!i)throw Error(s(147,e));var o=i,c=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===c?t.ref:(t=function(m){var j=o.refs;m===null?delete j[c]:j[c]=m},t._stringRef=c,t)}if(typeof e!="string")throw Error(s(284));if(!n._owner)throw Error(s(290,e))}return e}function Za(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function gd(e){var t=e._init;return t(e._payload)}function xd(e){function t(P,C){if(e){var L=P.deletions;L===null?(P.deletions=[C],P.flags|=16):L.push(C)}}function n(P,C){if(!e)return null;for(;C!==null;)t(P,C),C=C.sibling;return null}function i(P,C){for(P=new Map;C!==null;)C.key!==null?P.set(C.key,C):P.set(C.index,C),C=C.sibling;return P}function o(P,C){return P=gn(P,C),P.index=0,P.sibling=null,P}function c(P,C,L){return P.index=L,e?(L=P.alternate,L!==null?(L=L.index,L<C?(P.flags|=2,C):L):(P.flags|=2,C)):(P.flags|=1048576,C)}function m(P){return e&&P.alternate===null&&(P.flags|=2),P}function j(P,C,L,Y){return C===null||C.tag!==6?(C=Uo(L,P.mode,Y),C.return=P,C):(C=o(C,L),C.return=P,C)}function S(P,C,L,Y){var ne=L.type;return ne===re?W(P,C,L.props.children,Y,L.key):C!==null&&(C.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===Ne&&gd(ne)===C.type)?(Y=o(C,L.props),Y.ref=qr(P,C,L),Y.return=P,Y):(Y=ki(L.type,L.key,L.props,null,P.mode,Y),Y.ref=qr(P,C,L),Y.return=P,Y)}function I(P,C,L,Y){return C===null||C.tag!==4||C.stateNode.containerInfo!==L.containerInfo||C.stateNode.implementation!==L.implementation?(C=$o(L,P.mode,Y),C.return=P,C):(C=o(C,L.children||[]),C.return=P,C)}function W(P,C,L,Y,ne){return C===null||C.tag!==7?(C=In(L,P.mode,Y,ne),C.return=P,C):(C=o(C,L),C.return=P,C)}function B(P,C,L){if(typeof C=="string"&&C!==""||typeof C=="number")return C=Uo(""+C,P.mode,L),C.return=P,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case q:return L=ki(C.type,C.key,C.props,null,P.mode,L),L.ref=qr(P,null,C),L.return=P,L;case G:return C=$o(C,P.mode,L),C.return=P,C;case Ne:var Y=C._init;return B(P,Y(C._payload),L)}if(kr(C)||T(C))return C=In(C,P.mode,L,null),C.return=P,C;Za(P,C)}return null}function $(P,C,L,Y){var ne=C!==null?C.key:null;if(typeof L=="string"&&L!==""||typeof L=="number")return ne!==null?null:j(P,C,""+L,Y);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case q:return L.key===ne?S(P,C,L,Y):null;case G:return L.key===ne?I(P,C,L,Y):null;case Ne:return ne=L._init,$(P,C,ne(L._payload),Y)}if(kr(L)||T(L))return ne!==null?null:W(P,C,L,Y,null);Za(P,L)}return null}function J(P,C,L,Y,ne){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return P=P.get(L)||null,j(C,P,""+Y,ne);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case q:return P=P.get(Y.key===null?L:Y.key)||null,S(C,P,Y,ne);case G:return P=P.get(Y.key===null?L:Y.key)||null,I(C,P,Y,ne);case Ne:var se=Y._init;return J(P,C,L,se(Y._payload),ne)}if(kr(Y)||T(Y))return P=P.get(L)||null,W(C,P,Y,ne,null);Za(C,Y)}return null}function ee(P,C,L,Y){for(var ne=null,se=null,oe=C,ce=C=0,Qe=null;oe!==null&&ce<L.length;ce++){oe.index>ce?(Qe=oe,oe=null):Qe=oe.sibling;var we=$(P,oe,L[ce],Y);if(we===null){oe===null&&(oe=Qe);break}e&&oe&&we.alternate===null&&t(P,oe),C=c(we,C,ce),se===null?ne=we:se.sibling=we,se=we,oe=Qe}if(ce===L.length)return n(P,oe),Me&&Cn(P,ce),ne;if(oe===null){for(;ce<L.length;ce++)oe=B(P,L[ce],Y),oe!==null&&(C=c(oe,C,ce),se===null?ne=oe:se.sibling=oe,se=oe);return Me&&Cn(P,ce),ne}for(oe=i(P,oe);ce<L.length;ce++)Qe=J(oe,P,ce,L[ce],Y),Qe!==null&&(e&&Qe.alternate!==null&&oe.delete(Qe.key===null?ce:Qe.key),C=c(Qe,C,ce),se===null?ne=Qe:se.sibling=Qe,se=Qe);return e&&oe.forEach(function(xn){return t(P,xn)}),Me&&Cn(P,ce),ne}function te(P,C,L,Y){var ne=T(L);if(typeof ne!="function")throw Error(s(150));if(L=ne.call(L),L==null)throw Error(s(151));for(var se=ne=null,oe=C,ce=C=0,Qe=null,we=L.next();oe!==null&&!we.done;ce++,we=L.next()){oe.index>ce?(Qe=oe,oe=null):Qe=oe.sibling;var xn=$(P,oe,we.value,Y);if(xn===null){oe===null&&(oe=Qe);break}e&&oe&&xn.alternate===null&&t(P,oe),C=c(xn,C,ce),se===null?ne=xn:se.sibling=xn,se=xn,oe=Qe}if(we.done)return n(P,oe),Me&&Cn(P,ce),ne;if(oe===null){for(;!we.done;ce++,we=L.next())we=B(P,we.value,Y),we!==null&&(C=c(we,C,ce),se===null?ne=we:se.sibling=we,se=we);return Me&&Cn(P,ce),ne}for(oe=i(P,oe);!we.done;ce++,we=L.next())we=J(oe,P,ce,we.value,Y),we!==null&&(e&&we.alternate!==null&&oe.delete(we.key===null?ce:we.key),C=c(we,C,ce),se===null?ne=we:se.sibling=we,se=we);return e&&oe.forEach(function(O1){return t(P,O1)}),Me&&Cn(P,ce),ne}function Ue(P,C,L,Y){if(typeof L=="object"&&L!==null&&L.type===re&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case q:e:{for(var ne=L.key,se=C;se!==null;){if(se.key===ne){if(ne=L.type,ne===re){if(se.tag===7){n(P,se.sibling),C=o(se,L.props.children),C.return=P,P=C;break e}}else if(se.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===Ne&&gd(ne)===se.type){n(P,se.sibling),C=o(se,L.props),C.ref=qr(P,se,L),C.return=P,P=C;break e}n(P,se);break}else t(P,se);se=se.sibling}L.type===re?(C=In(L.props.children,P.mode,Y,L.key),C.return=P,P=C):(Y=ki(L.type,L.key,L.props,null,P.mode,Y),Y.ref=qr(P,C,L),Y.return=P,P=Y)}return m(P);case G:e:{for(se=L.key;C!==null;){if(C.key===se)if(C.tag===4&&C.stateNode.containerInfo===L.containerInfo&&C.stateNode.implementation===L.implementation){n(P,C.sibling),C=o(C,L.children||[]),C.return=P,P=C;break e}else{n(P,C);break}else t(P,C);C=C.sibling}C=$o(L,P.mode,Y),C.return=P,P=C}return m(P);case Ne:return se=L._init,Ue(P,C,se(L._payload),Y)}if(kr(L))return ee(P,C,L,Y);if(T(L))return te(P,C,L,Y);Za(P,L)}return typeof L=="string"&&L!==""||typeof L=="number"?(L=""+L,C!==null&&C.tag===6?(n(P,C.sibling),C=o(C,L),C.return=P,P=C):(n(P,C),C=Uo(L,P.mode,Y),C.return=P,P=C),m(P)):n(P,C)}return Ue}var nr=xd(!0),vd=xd(!1),ei=sn(null),ti=null,rr=null,Gs=null;function Xs(){Gs=rr=ti=null}function Ks(e){var t=ei.current;Ae(ei),e._currentValue=t}function Js(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function ar(e,t){ti=e,Gs=rr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(it=!0),e.firstContext=null)}function xt(e){var t=e._currentValue;if(Gs!==e)if(e={context:e,memoizedValue:t,next:null},rr===null){if(ti===null)throw Error(s(308));rr=e,ti.dependencies={lanes:0,firstContext:e}}else rr=rr.next=e;return t}var En=null;function Zs(e){En===null?En=[e]:En.push(e)}function yd(e,t,n,i){var o=t.interleaved;return o===null?(n.next=n,Zs(t)):(n.next=o.next,o.next=n),t.interleaved=n,Wt(e,i)}function Wt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var cn=!1;function eo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ye&2)!==0){var o=i.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),i.pending=t,Wt(e,n)}return o=i.interleaved,o===null?(t.next=t,Zs(i)):(t.next=o.next,o.next=t),i.interleaved=t,Wt(e,n)}function ni(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,ps(e,n)}}function wd(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var o=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var m={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};c===null?o=c=m:c=c.next=m,n=n.next}while(n!==null);c===null?o=c=t:c=c.next=t}else o=c=t;n={baseState:i.baseState,firstBaseUpdate:o,lastBaseUpdate:c,shared:i.shared,effects:i.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ri(e,t,n,i){var o=e.updateQueue;cn=!1;var c=o.firstBaseUpdate,m=o.lastBaseUpdate,j=o.shared.pending;if(j!==null){o.shared.pending=null;var S=j,I=S.next;S.next=null,m===null?c=I:m.next=I,m=S;var W=e.alternate;W!==null&&(W=W.updateQueue,j=W.lastBaseUpdate,j!==m&&(j===null?W.firstBaseUpdate=I:j.next=I,W.lastBaseUpdate=S))}if(c!==null){var B=o.baseState;m=0,W=I=S=null,j=c;do{var $=j.lane,J=j.eventTime;if((i&$)===$){W!==null&&(W=W.next={eventTime:J,lane:0,tag:j.tag,payload:j.payload,callback:j.callback,next:null});e:{var ee=e,te=j;switch($=t,J=n,te.tag){case 1:if(ee=te.payload,typeof ee=="function"){B=ee.call(J,B,$);break e}B=ee;break e;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=te.payload,$=typeof ee=="function"?ee.call(J,B,$):ee,$==null)break e;B=E({},B,$);break e;case 2:cn=!0}}j.callback!==null&&j.lane!==0&&(e.flags|=64,$=o.effects,$===null?o.effects=[j]:$.push(j))}else J={eventTime:J,lane:$,tag:j.tag,payload:j.payload,callback:j.callback,next:null},W===null?(I=W=J,S=B):W=W.next=J,m|=$;if(j=j.next,j===null){if(j=o.shared.pending,j===null)break;$=j,j=$.next,$.next=null,o.lastBaseUpdate=$,o.shared.pending=null}}while(!0);if(W===null&&(S=B),o.baseState=S,o.firstBaseUpdate=I,o.lastBaseUpdate=W,t=o.shared.interleaved,t!==null){o=t;do m|=o.lane,o=o.next;while(o!==t)}else c===null&&(o.shared.lanes=0);An|=m,e.lanes=m,e.memoizedState=B}}function jd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],o=i.callback;if(o!==null){if(i.callback=null,i=n,typeof o!="function")throw Error(s(191,o));o.call(i)}}}var Gr={},It=sn(Gr),Xr=sn(Gr),Kr=sn(Gr);function zn(e){if(e===Gr)throw Error(s(174));return e}function to(e,t){switch(ze(Kr,t),ze(Xr,e),ze(It,Gr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ns(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ns(t,e)}Ae(It),ze(It,t)}function ir(){Ae(It),Ae(Xr),Ae(Kr)}function kd(e){zn(Kr.current);var t=zn(It.current),n=ns(t,e.type);t!==n&&(ze(Xr,e),ze(It,n))}function no(e){Xr.current===e&&(Ae(It),Ae(Xr))}var Ie=sn(0);function ai(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ro=[];function ao(){for(var e=0;e<ro.length;e++)ro[e]._workInProgressVersionPrimary=null;ro.length=0}var ii=V.ReactCurrentDispatcher,io=V.ReactCurrentBatchConfig,Pn=0,Te=null,We=null,Be=null,si=!1,Jr=!1,Zr=0,i1=0;function Je(){throw Error(s(321))}function so(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jt(e[n],t[n]))return!1;return!0}function oo(e,t,n,i,o,c){if(Pn=c,Te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ii.current=e===null||e.memoizedState===null?c1:d1,e=n(i,o),Jr){c=0;do{if(Jr=!1,Zr=0,25<=c)throw Error(s(301));c+=1,Be=We=null,t.updateQueue=null,ii.current=u1,e=n(i,o)}while(Jr)}if(ii.current=ci,t=We!==null&&We.next!==null,Pn=0,Be=We=Te=null,si=!1,t)throw Error(s(300));return e}function lo(){var e=Zr!==0;return Zr=0,e}function Tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Te.memoizedState=Be=e:Be=Be.next=e,Be}function vt(){if(We===null){var e=Te.alternate;e=e!==null?e.memoizedState:null}else e=We.next;var t=Be===null?Te.memoizedState:Be.next;if(t!==null)Be=t,We=e;else{if(e===null)throw Error(s(310));We=e,e={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},Be===null?Te.memoizedState=Be=e:Be=Be.next=e}return Be}function ea(e,t){return typeof t=="function"?t(e):t}function co(e){var t=vt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var i=We,o=i.baseQueue,c=n.pending;if(c!==null){if(o!==null){var m=o.next;o.next=c.next,c.next=m}i.baseQueue=o=c,n.pending=null}if(o!==null){c=o.next,i=i.baseState;var j=m=null,S=null,I=c;do{var W=I.lane;if((Pn&W)===W)S!==null&&(S=S.next={lane:0,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null}),i=I.hasEagerState?I.eagerState:e(i,I.action);else{var B={lane:W,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null};S===null?(j=S=B,m=i):S=S.next=B,Te.lanes|=W,An|=W}I=I.next}while(I!==null&&I!==c);S===null?m=i:S.next=j,jt(i,t.memoizedState)||(it=!0),t.memoizedState=i,t.baseState=m,t.baseQueue=S,n.lastRenderedState=i}if(e=n.interleaved,e!==null){o=e;do c=o.lane,Te.lanes|=c,An|=c,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function uo(e){var t=vt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var i=n.dispatch,o=n.pending,c=t.memoizedState;if(o!==null){n.pending=null;var m=o=o.next;do c=e(c,m.action),m=m.next;while(m!==o);jt(c,t.memoizedState)||(it=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,i]}function Sd(){}function Nd(e,t){var n=Te,i=vt(),o=t(),c=!jt(i.memoizedState,o);if(c&&(i.memoizedState=o,it=!0),i=i.queue,fo(zd.bind(null,n,i,e),[e]),i.getSnapshot!==t||c||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,ta(9,Ed.bind(null,n,i,o,t),void 0,null),Ve===null)throw Error(s(349));(Pn&30)!==0||Cd(n,t,o)}return o}function Cd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Te.updateQueue,t===null?(t={lastEffect:null,stores:null},Te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ed(e,t,n,i){t.value=n,t.getSnapshot=i,Pd(t)&&Ad(e)}function zd(e,t,n){return n(function(){Pd(t)&&Ad(e)})}function Pd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jt(e,n)}catch{return!0}}function Ad(e){var t=Wt(e,1);t!==null&&Et(t,e,1,-1)}function Ld(e){var t=Tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:e},t.queue=e,e=e.dispatch=l1.bind(null,Te,e),[t.memoizedState,e]}function ta(e,t,n,i){return e={tag:e,create:t,destroy:n,deps:i,next:null},t=Te.updateQueue,t===null?(t={lastEffect:null,stores:null},Te.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e)),e}function _d(){return vt().memoizedState}function oi(e,t,n,i){var o=Tt();Te.flags|=e,o.memoizedState=ta(1|t,n,void 0,i===void 0?null:i)}function li(e,t,n,i){var o=vt();i=i===void 0?null:i;var c=void 0;if(We!==null){var m=We.memoizedState;if(c=m.destroy,i!==null&&so(i,m.deps)){o.memoizedState=ta(t,n,c,i);return}}Te.flags|=e,o.memoizedState=ta(1|t,n,c,i)}function Md(e,t){return oi(8390656,8,e,t)}function fo(e,t){return li(2048,8,e,t)}function Id(e,t){return li(4,2,e,t)}function Td(e,t){return li(4,4,e,t)}function Fd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Od(e,t,n){return n=n!=null?n.concat([e]):null,li(4,4,Fd.bind(null,t,e),n)}function mo(){}function Rd(e,t){var n=vt();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&so(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Dd(e,t){var n=vt();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&so(t,i[1])?i[0]:(e=e(),n.memoizedState=[e,t],e)}function Ud(e,t,n){return(Pn&21)===0?(e.baseState&&(e.baseState=!1,it=!0),e.memoizedState=n):(jt(n,t)||(n=gc(),Te.lanes|=n,An|=n,e.baseState=!0),t)}function s1(e,t){var n=Ee;Ee=n!==0&&4>n?n:4,e(!0);var i=io.transition;io.transition={};try{e(!1),t()}finally{Ee=n,io.transition=i}}function $d(){return vt().memoizedState}function o1(e,t,n){var i=pn(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Wd(e))Hd(t,n);else if(n=yd(e,t,n,i),n!==null){var o=nt();Et(n,e,i,o),Bd(n,t,i)}}function l1(e,t,n){var i=pn(e),o={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wd(e))Hd(t,o);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var m=t.lastRenderedState,j=c(m,n);if(o.hasEagerState=!0,o.eagerState=j,jt(j,m)){var S=t.interleaved;S===null?(o.next=o,Zs(t)):(o.next=S.next,S.next=o),t.interleaved=o;return}}catch{}finally{}n=yd(e,t,o,i),n!==null&&(o=nt(),Et(n,e,i,o),Bd(n,t,i))}}function Wd(e){var t=e.alternate;return e===Te||t!==null&&t===Te}function Hd(e,t){Jr=si=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bd(e,t,n){if((n&4194240)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,ps(e,n)}}var ci={readContext:xt,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},c1={readContext:xt,useCallback:function(e,t){return Tt().memoizedState=[e,t===void 0?null:t],e},useContext:xt,useEffect:Md,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,oi(4194308,4,Fd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return oi(4194308,4,e,t)},useInsertionEffect:function(e,t){return oi(4,2,e,t)},useMemo:function(e,t){var n=Tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var i=Tt();return t=n!==void 0?n(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=o1.bind(null,Te,e),[i.memoizedState,e]},useRef:function(e){var t=Tt();return e={current:e},t.memoizedState=e},useState:Ld,useDebugValue:mo,useDeferredValue:function(e){return Tt().memoizedState=e},useTransition:function(){var e=Ld(!1),t=e[0];return e=s1.bind(null,e[1]),Tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=Te,o=Tt();if(Me){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),Ve===null)throw Error(s(349));(Pn&30)!==0||Cd(i,t,n)}o.memoizedState=n;var c={value:n,getSnapshot:t};return o.queue=c,Md(zd.bind(null,i,c,e),[e]),i.flags|=2048,ta(9,Ed.bind(null,i,c,n,t),void 0,null),n},useId:function(){var e=Tt(),t=Ve.identifierPrefix;if(Me){var n=$t,i=Ut;n=(i&~(1<<32-wt(i)-1)).toString(32)+n,t=":"+t+"R"+n,n=Zr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=i1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},d1={readContext:xt,useCallback:Rd,useContext:xt,useEffect:fo,useImperativeHandle:Od,useInsertionEffect:Id,useLayoutEffect:Td,useMemo:Dd,useReducer:co,useRef:_d,useState:function(){return co(ea)},useDebugValue:mo,useDeferredValue:function(e){var t=vt();return Ud(t,We.memoizedState,e)},useTransition:function(){var e=co(ea)[0],t=vt().memoizedState;return[e,t]},useMutableSource:Sd,useSyncExternalStore:Nd,useId:$d,unstable_isNewReconciler:!1},u1={readContext:xt,useCallback:Rd,useContext:xt,useEffect:fo,useImperativeHandle:Od,useInsertionEffect:Id,useLayoutEffect:Td,useMemo:Dd,useReducer:uo,useRef:_d,useState:function(){return uo(ea)},useDebugValue:mo,useDeferredValue:function(e){var t=vt();return We===null?t.memoizedState=e:Ud(t,We.memoizedState,e)},useTransition:function(){var e=uo(ea)[0],t=vt().memoizedState;return[e,t]},useMutableSource:Sd,useSyncExternalStore:Nd,useId:$d,unstable_isNewReconciler:!1};function St(e,t){if(e&&e.defaultProps){t=E({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function po(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:E({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var di={isMounted:function(e){return(e=e._reactInternals)?jn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=nt(),o=pn(e),c=Ht(i,o);c.payload=t,n!=null&&(c.callback=n),t=dn(e,c,o),t!==null&&(Et(t,e,o,i),ni(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=nt(),o=pn(e),c=Ht(i,o);c.tag=1,c.payload=t,n!=null&&(c.callback=n),t=dn(e,c,o),t!==null&&(Et(t,e,o,i),ni(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=nt(),i=pn(e),o=Ht(n,i);o.tag=2,t!=null&&(o.callback=t),t=dn(e,o,i),t!==null&&(Et(t,e,i,n),ni(t,e,i))}};function Vd(e,t,n,i,o,c,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,c,m):t.prototype&&t.prototype.isPureReactComponent?!$r(n,i)||!$r(o,c):!0}function Qd(e,t,n){var i=!1,o=on,c=t.contextType;return typeof c=="object"&&c!==null?c=xt(c):(o=at(t)?Sn:Ke.current,i=t.contextTypes,c=(i=i!=null)?Jn(e,o):on),t=new t(n,c),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=di,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=c),t}function Yd(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&di.enqueueReplaceState(t,t.state,null)}function ho(e,t,n,i){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},eo(e);var c=t.contextType;typeof c=="object"&&c!==null?o.context=xt(c):(c=at(t)?Sn:Ke.current,o.context=Jn(e,c)),o.state=e.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(po(e,t,c,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&di.enqueueReplaceState(o,o.state,null),ri(e,n,o,i),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function sr(e,t){try{var n="",i=t;do n+=K(i),i=i.return;while(i);var o=n}catch(c){o=`
Error generating stack: `+c.message+`
`+c.stack}return{value:e,source:t,stack:o,digest:null}}function go(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function xo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var f1=typeof WeakMap=="function"?WeakMap:Map;function qd(e,t,n){n=Ht(-1,n),n.tag=3,n.payload={element:null};var i=t.value;return n.callback=function(){xi||(xi=!0,_o=i),xo(e,t)},n}function Gd(e,t,n){n=Ht(-1,n),n.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var o=t.value;n.payload=function(){return i(o)},n.callback=function(){xo(e,t)}}var c=e.stateNode;return c!==null&&typeof c.componentDidCatch=="function"&&(n.callback=function(){xo(e,t),typeof i!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var m=t.stack;this.componentDidCatch(t.value,{componentStack:m!==null?m:""})}),n}function Xd(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new f1;var o=new Set;i.set(t,o)}else o=i.get(t),o===void 0&&(o=new Set,i.set(t,o));o.has(n)||(o.add(n),e=C1.bind(null,e,t,n),t.then(e,e))}function Kd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Jd(e,t,n,i,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ht(-1,1),t.tag=2,dn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var m1=V.ReactCurrentOwner,it=!1;function tt(e,t,n,i){t.child=e===null?vd(t,null,n,i):nr(t,e.child,n,i)}function Zd(e,t,n,i,o){n=n.render;var c=t.ref;return ar(t,o),i=oo(e,t,n,i,c,o),n=lo(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Bt(e,t,o)):(Me&&n&&Bs(t),t.flags|=1,tt(e,t,i,o),t.child)}function eu(e,t,n,i,o){if(e===null){var c=n.type;return typeof c=="function"&&!Do(c)&&c.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=c,tu(e,t,c,i,o)):(e=ki(n.type,null,i,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,(e.lanes&o)===0){var m=c.memoizedProps;if(n=n.compare,n=n!==null?n:$r,n(m,i)&&e.ref===t.ref)return Bt(e,t,o)}return t.flags|=1,e=gn(c,i),e.ref=t.ref,e.return=t,t.child=e}function tu(e,t,n,i,o){if(e!==null){var c=e.memoizedProps;if($r(c,i)&&e.ref===t.ref)if(it=!1,t.pendingProps=i=c,(e.lanes&o)!==0)(e.flags&131072)!==0&&(it=!0);else return t.lanes=e.lanes,Bt(e,t,o)}return vo(e,t,n,i,o)}function nu(e,t,n){var i=t.pendingProps,o=i.children,c=e!==null?e.memoizedState:null;if(i.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ze(lr,mt),mt|=n;else{if((n&1073741824)===0)return e=c!==null?c.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ze(lr,mt),mt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=c!==null?c.baseLanes:n,ze(lr,mt),mt|=i}else c!==null?(i=c.baseLanes|n,t.memoizedState=null):i=n,ze(lr,mt),mt|=i;return tt(e,t,o,n),t.child}function ru(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function vo(e,t,n,i,o){var c=at(n)?Sn:Ke.current;return c=Jn(t,c),ar(t,o),n=oo(e,t,n,i,c,o),i=lo(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Bt(e,t,o)):(Me&&i&&Bs(t),t.flags|=1,tt(e,t,n,o),t.child)}function au(e,t,n,i,o){if(at(n)){var c=!0;qa(t)}else c=!1;if(ar(t,o),t.stateNode===null)fi(e,t),Qd(t,n,i),ho(t,n,i,o),i=!0;else if(e===null){var m=t.stateNode,j=t.memoizedProps;m.props=j;var S=m.context,I=n.contextType;typeof I=="object"&&I!==null?I=xt(I):(I=at(n)?Sn:Ke.current,I=Jn(t,I));var W=n.getDerivedStateFromProps,B=typeof W=="function"||typeof m.getSnapshotBeforeUpdate=="function";B||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(j!==i||S!==I)&&Yd(t,m,i,I),cn=!1;var $=t.memoizedState;m.state=$,ri(t,i,m,o),S=t.memoizedState,j!==i||$!==S||rt.current||cn?(typeof W=="function"&&(po(t,n,W,i),S=t.memoizedState),(j=cn||Vd(t,n,j,i,$,S,I))?(B||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(t.flags|=4194308)):(typeof m.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=S),m.props=i,m.state=S,m.context=I,i=j):(typeof m.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{m=t.stateNode,bd(e,t),j=t.memoizedProps,I=t.type===t.elementType?j:St(t.type,j),m.props=I,B=t.pendingProps,$=m.context,S=n.contextType,typeof S=="object"&&S!==null?S=xt(S):(S=at(n)?Sn:Ke.current,S=Jn(t,S));var J=n.getDerivedStateFromProps;(W=typeof J=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(j!==B||$!==S)&&Yd(t,m,i,S),cn=!1,$=t.memoizedState,m.state=$,ri(t,i,m,o);var ee=t.memoizedState;j!==B||$!==ee||rt.current||cn?(typeof J=="function"&&(po(t,n,J,i),ee=t.memoizedState),(I=cn||Vd(t,n,I,i,$,ee,S)||!1)?(W||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(i,ee,S),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(i,ee,S)),typeof m.componentDidUpdate=="function"&&(t.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof m.componentDidUpdate!="function"||j===e.memoizedProps&&$===e.memoizedState||(t.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||j===e.memoizedProps&&$===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=ee),m.props=i,m.state=ee,m.context=S,i=I):(typeof m.componentDidUpdate!="function"||j===e.memoizedProps&&$===e.memoizedState||(t.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||j===e.memoizedProps&&$===e.memoizedState||(t.flags|=1024),i=!1)}return yo(e,t,n,i,c,o)}function yo(e,t,n,i,o,c){ru(e,t);var m=(t.flags&128)!==0;if(!i&&!m)return o&&cd(t,n,!1),Bt(e,t,c);i=t.stateNode,m1.current=t;var j=m&&typeof n.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&m?(t.child=nr(t,e.child,null,c),t.child=nr(t,null,j,c)):tt(e,t,j,c),t.memoizedState=i.state,o&&cd(t,n,!0),t.child}function iu(e){var t=e.stateNode;t.pendingContext?od(e,t.pendingContext,t.pendingContext!==t.context):t.context&&od(e,t.context,!1),to(e,t.containerInfo)}function su(e,t,n,i,o){return tr(),qs(o),t.flags|=256,tt(e,t,n,i),t.child}var bo={dehydrated:null,treeContext:null,retryLane:0};function wo(e){return{baseLanes:e,cachePool:null,transitions:null}}function ou(e,t,n){var i=t.pendingProps,o=Ie.current,c=!1,m=(t.flags&128)!==0,j;if((j=m)||(j=e!==null&&e.memoizedState===null?!1:(o&2)!==0),j?(c=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ze(Ie,o&1),e===null)return Ys(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(m=i.children,e=i.fallback,c?(i=t.mode,c=t.child,m={mode:"hidden",children:m},(i&1)===0&&c!==null?(c.childLanes=0,c.pendingProps=m):c=Si(m,i,0,null),e=In(e,i,n,null),c.return=t,e.return=t,c.sibling=e,t.child=c,t.child.memoizedState=wo(n),t.memoizedState=bo,e):jo(t,m));if(o=e.memoizedState,o!==null&&(j=o.dehydrated,j!==null))return p1(e,t,m,i,j,o,n);if(c){c=i.fallback,m=t.mode,o=e.child,j=o.sibling;var S={mode:"hidden",children:i.children};return(m&1)===0&&t.child!==o?(i=t.child,i.childLanes=0,i.pendingProps=S,t.deletions=null):(i=gn(o,S),i.subtreeFlags=o.subtreeFlags&14680064),j!==null?c=gn(j,c):(c=In(c,m,n,null),c.flags|=2),c.return=t,i.return=t,i.sibling=c,t.child=i,i=c,c=t.child,m=e.child.memoizedState,m=m===null?wo(n):{baseLanes:m.baseLanes|n,cachePool:null,transitions:m.transitions},c.memoizedState=m,c.childLanes=e.childLanes&~n,t.memoizedState=bo,i}return c=e.child,e=c.sibling,i=gn(c,{mode:"visible",children:i.children}),(t.mode&1)===0&&(i.lanes=n),i.return=t,i.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function jo(e,t){return t=Si({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ui(e,t,n,i){return i!==null&&qs(i),nr(t,e.child,null,n),e=jo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function p1(e,t,n,i,o,c,m){if(n)return t.flags&256?(t.flags&=-257,i=go(Error(s(422))),ui(e,t,m,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(c=i.fallback,o=t.mode,i=Si({mode:"visible",children:i.children},o,0,null),c=In(c,o,m,null),c.flags|=2,i.return=t,c.return=t,i.sibling=c,t.child=i,(t.mode&1)!==0&&nr(t,e.child,null,m),t.child.memoizedState=wo(m),t.memoizedState=bo,c);if((t.mode&1)===0)return ui(e,t,m,null);if(o.data==="$!"){if(i=o.nextSibling&&o.nextSibling.dataset,i)var j=i.dgst;return i=j,c=Error(s(419)),i=go(c,i,void 0),ui(e,t,m,i)}if(j=(m&e.childLanes)!==0,it||j){if(i=Ve,i!==null){switch(m&-m){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(i.suspendedLanes|m))!==0?0:o,o!==0&&o!==c.retryLane&&(c.retryLane=o,Wt(e,o),Et(i,e,o,-1))}return Ro(),i=go(Error(s(421))),ui(e,t,m,i)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=E1.bind(null,e),o._reactRetry=t,null):(e=c.treeContext,ft=an(o.nextSibling),ut=t,Me=!0,kt=null,e!==null&&(ht[gt++]=Ut,ht[gt++]=$t,ht[gt++]=Nn,Ut=e.id,$t=e.overflow,Nn=t),t=jo(t,i.children),t.flags|=4096,t)}function lu(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Js(e.return,t,n)}function ko(e,t,n,i,o){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:o}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=i,c.tail=n,c.tailMode=o)}function cu(e,t,n){var i=t.pendingProps,o=i.revealOrder,c=i.tail;if(tt(e,t,i.children,n),i=Ie.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lu(e,n,t);else if(e.tag===19)lu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(ze(Ie,i),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ai(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ko(t,!1,o,n,c);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ai(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ko(t,!0,n,null,c);break;case"together":ko(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Bt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),An|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=gn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function h1(e,t,n){switch(t.tag){case 3:iu(t),tr();break;case 5:kd(t);break;case 1:at(t.type)&&qa(t);break;case 4:to(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,o=t.memoizedProps.value;ze(ei,i._currentValue),i._currentValue=o;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(ze(Ie,Ie.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?ou(e,t,n):(ze(Ie,Ie.current&1),e=Bt(e,t,n),e!==null?e.sibling:null);ze(Ie,Ie.current&1);break;case 19:if(i=(n&t.childLanes)!==0,(e.flags&128)!==0){if(i)return cu(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ze(Ie,Ie.current),i)break;return null;case 22:case 23:return t.lanes=0,nu(e,t,n)}return Bt(e,t,n)}var du,So,uu,fu;du=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},So=function(){},uu=function(e,t,n,i){var o=e.memoizedProps;if(o!==i){e=t.stateNode,zn(It.current);var c=null;switch(n){case"input":o=Ji(e,o),i=Ji(e,i),c=[];break;case"select":o=E({},o,{value:void 0}),i=E({},i,{value:void 0}),c=[];break;case"textarea":o=ts(e,o),i=ts(e,i),c=[];break;default:typeof o.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Va)}rs(n,i);var m;n=null;for(I in o)if(!i.hasOwnProperty(I)&&o.hasOwnProperty(I)&&o[I]!=null)if(I==="style"){var j=o[I];for(m in j)j.hasOwnProperty(m)&&(n||(n={}),n[m]="")}else I!=="dangerouslySetInnerHTML"&&I!=="children"&&I!=="suppressContentEditableWarning"&&I!=="suppressHydrationWarning"&&I!=="autoFocus"&&(u.hasOwnProperty(I)?c||(c=[]):(c=c||[]).push(I,null));for(I in i){var S=i[I];if(j=o!=null?o[I]:void 0,i.hasOwnProperty(I)&&S!==j&&(S!=null||j!=null))if(I==="style")if(j){for(m in j)!j.hasOwnProperty(m)||S&&S.hasOwnProperty(m)||(n||(n={}),n[m]="");for(m in S)S.hasOwnProperty(m)&&j[m]!==S[m]&&(n||(n={}),n[m]=S[m])}else n||(c||(c=[]),c.push(I,n)),n=S;else I==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,j=j?j.__html:void 0,S!=null&&j!==S&&(c=c||[]).push(I,S)):I==="children"?typeof S!="string"&&typeof S!="number"||(c=c||[]).push(I,""+S):I!=="suppressContentEditableWarning"&&I!=="suppressHydrationWarning"&&(u.hasOwnProperty(I)?(S!=null&&I==="onScroll"&&Pe("scroll",e),c||j===S||(c=[])):(c=c||[]).push(I,S))}n&&(c=c||[]).push("style",n);var I=c;(t.updateQueue=I)&&(t.flags|=4)}},fu=function(e,t,n,i){n!==i&&(t.flags|=4)};function na(e,t){if(!Me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags&14680064,i|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags,i|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function g1(e,t,n){var i=t.pendingProps;switch(Vs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return at(t.type)&&Ya(),Ze(t),null;case 3:return i=t.stateNode,ir(),Ae(rt),Ae(Ke),ao(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Ja(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,kt!==null&&(To(kt),kt=null))),So(e,t),Ze(t),null;case 5:no(t);var o=zn(Kr.current);if(n=t.type,e!==null&&t.stateNode!=null)uu(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(s(166));return Ze(t),null}if(e=zn(It.current),Ja(t)){i=t.stateNode,n=t.type;var c=t.memoizedProps;switch(i[Mt]=t,i[Qr]=c,e=(t.mode&1)!==0,n){case"dialog":Pe("cancel",i),Pe("close",i);break;case"iframe":case"object":case"embed":Pe("load",i);break;case"video":case"audio":for(o=0;o<Hr.length;o++)Pe(Hr[o],i);break;case"source":Pe("error",i);break;case"img":case"image":case"link":Pe("error",i),Pe("load",i);break;case"details":Pe("toggle",i);break;case"input":Ql(i,c),Pe("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!c.multiple},Pe("invalid",i);break;case"textarea":Gl(i,c),Pe("invalid",i)}rs(n,c),o=null;for(var m in c)if(c.hasOwnProperty(m)){var j=c[m];m==="children"?typeof j=="string"?i.textContent!==j&&(c.suppressHydrationWarning!==!0&&Ba(i.textContent,j,e),o=["children",j]):typeof j=="number"&&i.textContent!==""+j&&(c.suppressHydrationWarning!==!0&&Ba(i.textContent,j,e),o=["children",""+j]):u.hasOwnProperty(m)&&j!=null&&m==="onScroll"&&Pe("scroll",i)}switch(n){case"input":wa(i),ql(i,c,!0);break;case"textarea":wa(i),Kl(i);break;case"select":case"option":break;default:typeof c.onClick=="function"&&(i.onclick=Va)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{m=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Jl(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=m.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=m.createElement(n,{is:i.is}):(e=m.createElement(n),n==="select"&&(m=e,i.multiple?m.multiple=!0:i.size&&(m.size=i.size))):e=m.createElementNS(e,n),e[Mt]=t,e[Qr]=i,du(e,t,!1,!1),t.stateNode=e;e:{switch(m=as(n,i),n){case"dialog":Pe("cancel",e),Pe("close",e),o=i;break;case"iframe":case"object":case"embed":Pe("load",e),o=i;break;case"video":case"audio":for(o=0;o<Hr.length;o++)Pe(Hr[o],e);o=i;break;case"source":Pe("error",e),o=i;break;case"img":case"image":case"link":Pe("error",e),Pe("load",e),o=i;break;case"details":Pe("toggle",e),o=i;break;case"input":Ql(e,i),o=Ji(e,i),Pe("invalid",e);break;case"option":o=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},o=E({},i,{value:void 0}),Pe("invalid",e);break;case"textarea":Gl(e,i),o=ts(e,i),Pe("invalid",e);break;default:o=i}rs(n,o),j=o;for(c in j)if(j.hasOwnProperty(c)){var S=j[c];c==="style"?tc(e,S):c==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,S!=null&&Zl(e,S)):c==="children"?typeof S=="string"?(n!=="textarea"||S!=="")&&Sr(e,S):typeof S=="number"&&Sr(e,""+S):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(u.hasOwnProperty(c)?S!=null&&c==="onScroll"&&Pe("scroll",e):S!=null&&D(e,c,S,m))}switch(n){case"input":wa(e),ql(e,i,!1);break;case"textarea":wa(e),Kl(e);break;case"option":i.value!=null&&e.setAttribute("value",""+Ce(i.value));break;case"select":e.multiple=!!i.multiple,c=i.value,c!=null?Un(e,!!i.multiple,c,!1):i.defaultValue!=null&&Un(e,!!i.multiple,i.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Va)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ze(t),null;case 6:if(e&&t.stateNode!=null)fu(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(s(166));if(n=zn(Kr.current),zn(It.current),Ja(t)){if(i=t.stateNode,n=t.memoizedProps,i[Mt]=t,(c=i.nodeValue!==n)&&(e=ut,e!==null))switch(e.tag){case 3:Ba(i.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ba(i.nodeValue,n,(e.mode&1)!==0)}c&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Mt]=t,t.stateNode=i}return Ze(t),null;case 13:if(Ae(Ie),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Me&&ft!==null&&(t.mode&1)!==0&&(t.flags&128)===0)hd(),tr(),t.flags|=98560,c=!1;else if(c=Ja(t),i!==null&&i.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[Mt]=t}else tr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ze(t),c=!1}else kt!==null&&(To(kt),kt=null),c=!0;if(!c)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ie.current&1)!==0?He===0&&(He=3):Ro())),t.updateQueue!==null&&(t.flags|=4),Ze(t),null);case 4:return ir(),So(e,t),e===null&&Br(t.stateNode.containerInfo),Ze(t),null;case 10:return Ks(t.type._context),Ze(t),null;case 17:return at(t.type)&&Ya(),Ze(t),null;case 19:if(Ae(Ie),c=t.memoizedState,c===null)return Ze(t),null;if(i=(t.flags&128)!==0,m=c.rendering,m===null)if(i)na(c,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(m=ai(e),m!==null){for(t.flags|=128,na(c,!1),i=m.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)c=n,e=i,c.flags&=14680066,m=c.alternate,m===null?(c.childLanes=0,c.lanes=e,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=m.childLanes,c.lanes=m.lanes,c.child=m.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=m.memoizedProps,c.memoizedState=m.memoizedState,c.updateQueue=m.updateQueue,c.type=m.type,e=m.dependencies,c.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ze(Ie,Ie.current&1|2),t.child}e=e.sibling}c.tail!==null&&De()>cr&&(t.flags|=128,i=!0,na(c,!1),t.lanes=4194304)}else{if(!i)if(e=ai(m),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),na(c,!0),c.tail===null&&c.tailMode==="hidden"&&!m.alternate&&!Me)return Ze(t),null}else 2*De()-c.renderingStartTime>cr&&n!==1073741824&&(t.flags|=128,i=!0,na(c,!1),t.lanes=4194304);c.isBackwards?(m.sibling=t.child,t.child=m):(n=c.last,n!==null?n.sibling=m:t.child=m,c.last=m)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=De(),t.sibling=null,n=Ie.current,ze(Ie,i?n&1|2:n&1),t):(Ze(t),null);case 22:case 23:return Oo(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&(t.mode&1)!==0?(mt&1073741824)!==0&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function x1(e,t){switch(Vs(t),t.tag){case 1:return at(t.type)&&Ya(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ir(),Ae(rt),Ae(Ke),ao(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return no(t),null;case 13:if(Ae(Ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));tr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ae(Ie),null;case 4:return ir(),null;case 10:return Ks(t.type._context),null;case 22:case 23:return Oo(),null;case 24:return null;default:return null}}var mi=!1,et=!1,v1=typeof WeakSet=="function"?WeakSet:Set,Z=null;function or(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Oe(e,t,i)}else n.current=null}function No(e,t,n){try{n()}catch(i){Oe(e,t,i)}}var mu=!1;function y1(e,t){if(Fs=Ma,e=Vc(),zs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var o=i.anchorOffset,c=i.focusNode;i=i.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var m=0,j=-1,S=-1,I=0,W=0,B=e,$=null;t:for(;;){for(var J;B!==n||o!==0&&B.nodeType!==3||(j=m+o),B!==c||i!==0&&B.nodeType!==3||(S=m+i),B.nodeType===3&&(m+=B.nodeValue.length),(J=B.firstChild)!==null;)$=B,B=J;for(;;){if(B===e)break t;if($===n&&++I===o&&(j=m),$===c&&++W===i&&(S=m),(J=B.nextSibling)!==null)break;B=$,$=B.parentNode}B=J}n=j===-1||S===-1?null:{start:j,end:S}}else n=null}n=n||{start:0,end:0}}else n=null;for(Os={focusedElem:e,selectionRange:n},Ma=!1,Z=t;Z!==null;)if(t=Z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Z=e;else for(;Z!==null;){t=Z;try{var ee=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ee!==null){var te=ee.memoizedProps,Ue=ee.memoizedState,P=t.stateNode,C=P.getSnapshotBeforeUpdate(t.elementType===t.type?te:St(t.type,te),Ue);P.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var L=t.stateNode.containerInfo;L.nodeType===1?L.textContent="":L.nodeType===9&&L.documentElement&&L.removeChild(L.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(Y){Oe(t,t.return,Y)}if(e=t.sibling,e!==null){e.return=t.return,Z=e;break}Z=t.return}return ee=mu,mu=!1,ee}function ra(e,t,n){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&e)===e){var c=o.destroy;o.destroy=void 0,c!==void 0&&No(t,n,c)}o=o.next}while(o!==i)}}function pi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==t)}}function Co(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function pu(e){var t=e.alternate;t!==null&&(e.alternate=null,pu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Mt],delete t[Qr],delete t[$s],delete t[t1],delete t[n1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function hu(e){return e.tag===5||e.tag===3||e.tag===4}function gu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Eo(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Va));else if(i!==4&&(e=e.child,e!==null))for(Eo(e,t,n),e=e.sibling;e!==null;)Eo(e,t,n),e=e.sibling}function zo(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(zo(e,t,n),e=e.sibling;e!==null;)zo(e,t,n),e=e.sibling}var Ye=null,Nt=!1;function un(e,t,n){for(n=n.child;n!==null;)xu(e,t,n),n=n.sibling}function xu(e,t,n){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(Ea,n)}catch{}switch(n.tag){case 5:et||or(n,t);case 6:var i=Ye,o=Nt;Ye=null,un(e,t,n),Ye=i,Nt=o,Ye!==null&&(Nt?(e=Ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ye.removeChild(n.stateNode));break;case 18:Ye!==null&&(Nt?(e=Ye,n=n.stateNode,e.nodeType===8?Us(e.parentNode,n):e.nodeType===1&&Us(e,n),Tr(e)):Us(Ye,n.stateNode));break;case 4:i=Ye,o=Nt,Ye=n.stateNode.containerInfo,Nt=!0,un(e,t,n),Ye=i,Nt=o;break;case 0:case 11:case 14:case 15:if(!et&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){o=i=i.next;do{var c=o,m=c.destroy;c=c.tag,m!==void 0&&((c&2)!==0||(c&4)!==0)&&No(n,t,m),o=o.next}while(o!==i)}un(e,t,n);break;case 1:if(!et&&(or(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(j){Oe(n,t,j)}un(e,t,n);break;case 21:un(e,t,n);break;case 22:n.mode&1?(et=(i=et)||n.memoizedState!==null,un(e,t,n),et=i):un(e,t,n);break;default:un(e,t,n)}}function vu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new v1),t.forEach(function(i){var o=z1.bind(null,e,i);n.has(i)||(n.add(i),i.then(o,o))})}}function Ct(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var o=n[i];try{var c=e,m=t,j=m;e:for(;j!==null;){switch(j.tag){case 5:Ye=j.stateNode,Nt=!1;break e;case 3:Ye=j.stateNode.containerInfo,Nt=!0;break e;case 4:Ye=j.stateNode.containerInfo,Nt=!0;break e}j=j.return}if(Ye===null)throw Error(s(160));xu(c,m,o),Ye=null,Nt=!1;var S=o.alternate;S!==null&&(S.return=null),o.return=null}catch(I){Oe(o,t,I)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)yu(t,e),t=t.sibling}function yu(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ct(t,e),Ft(e),i&4){try{ra(3,e,e.return),pi(3,e)}catch(te){Oe(e,e.return,te)}try{ra(5,e,e.return)}catch(te){Oe(e,e.return,te)}}break;case 1:Ct(t,e),Ft(e),i&512&&n!==null&&or(n,n.return);break;case 5:if(Ct(t,e),Ft(e),i&512&&n!==null&&or(n,n.return),e.flags&32){var o=e.stateNode;try{Sr(o,"")}catch(te){Oe(e,e.return,te)}}if(i&4&&(o=e.stateNode,o!=null)){var c=e.memoizedProps,m=n!==null?n.memoizedProps:c,j=e.type,S=e.updateQueue;if(e.updateQueue=null,S!==null)try{j==="input"&&c.type==="radio"&&c.name!=null&&Yl(o,c),as(j,m);var I=as(j,c);for(m=0;m<S.length;m+=2){var W=S[m],B=S[m+1];W==="style"?tc(o,B):W==="dangerouslySetInnerHTML"?Zl(o,B):W==="children"?Sr(o,B):D(o,W,B,I)}switch(j){case"input":Zi(o,c);break;case"textarea":Xl(o,c);break;case"select":var $=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!c.multiple;var J=c.value;J!=null?Un(o,!!c.multiple,J,!1):$!==!!c.multiple&&(c.defaultValue!=null?Un(o,!!c.multiple,c.defaultValue,!0):Un(o,!!c.multiple,c.multiple?[]:"",!1))}o[Qr]=c}catch(te){Oe(e,e.return,te)}}break;case 6:if(Ct(t,e),Ft(e),i&4){if(e.stateNode===null)throw Error(s(162));o=e.stateNode,c=e.memoizedProps;try{o.nodeValue=c}catch(te){Oe(e,e.return,te)}}break;case 3:if(Ct(t,e),Ft(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Tr(t.containerInfo)}catch(te){Oe(e,e.return,te)}break;case 4:Ct(t,e),Ft(e);break;case 13:Ct(t,e),Ft(e),o=e.child,o.flags&8192&&(c=o.memoizedState!==null,o.stateNode.isHidden=c,!c||o.alternate!==null&&o.alternate.memoizedState!==null||(Lo=De())),i&4&&vu(e);break;case 22:if(W=n!==null&&n.memoizedState!==null,e.mode&1?(et=(I=et)||W,Ct(t,e),et=I):Ct(t,e),Ft(e),i&8192){if(I=e.memoizedState!==null,(e.stateNode.isHidden=I)&&!W&&(e.mode&1)!==0)for(Z=e,W=e.child;W!==null;){for(B=Z=W;Z!==null;){switch($=Z,J=$.child,$.tag){case 0:case 11:case 14:case 15:ra(4,$,$.return);break;case 1:or($,$.return);var ee=$.stateNode;if(typeof ee.componentWillUnmount=="function"){i=$,n=$.return;try{t=i,ee.props=t.memoizedProps,ee.state=t.memoizedState,ee.componentWillUnmount()}catch(te){Oe(i,n,te)}}break;case 5:or($,$.return);break;case 22:if($.memoizedState!==null){ju(B);continue}}J!==null?(J.return=$,Z=J):ju(B)}W=W.sibling}e:for(W=null,B=e;;){if(B.tag===5){if(W===null){W=B;try{o=B.stateNode,I?(c=o.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"):(j=B.stateNode,S=B.memoizedProps.style,m=S!=null&&S.hasOwnProperty("display")?S.display:null,j.style.display=ec("display",m))}catch(te){Oe(e,e.return,te)}}}else if(B.tag===6){if(W===null)try{B.stateNode.nodeValue=I?"":B.memoizedProps}catch(te){Oe(e,e.return,te)}}else if((B.tag!==22&&B.tag!==23||B.memoizedState===null||B===e)&&B.child!==null){B.child.return=B,B=B.child;continue}if(B===e)break e;for(;B.sibling===null;){if(B.return===null||B.return===e)break e;W===B&&(W=null),B=B.return}W===B&&(W=null),B.sibling.return=B.return,B=B.sibling}}break;case 19:Ct(t,e),Ft(e),i&4&&vu(e);break;case 21:break;default:Ct(t,e),Ft(e)}}function Ft(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(hu(n)){var i=n;break e}n=n.return}throw Error(s(160))}switch(i.tag){case 5:var o=i.stateNode;i.flags&32&&(Sr(o,""),i.flags&=-33);var c=gu(e);zo(e,c,o);break;case 3:case 4:var m=i.stateNode.containerInfo,j=gu(e);Eo(e,j,m);break;default:throw Error(s(161))}}catch(S){Oe(e,e.return,S)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function b1(e,t,n){Z=e,bu(e)}function bu(e,t,n){for(var i=(e.mode&1)!==0;Z!==null;){var o=Z,c=o.child;if(o.tag===22&&i){var m=o.memoizedState!==null||mi;if(!m){var j=o.alternate,S=j!==null&&j.memoizedState!==null||et;j=mi;var I=et;if(mi=m,(et=S)&&!I)for(Z=o;Z!==null;)m=Z,S=m.child,m.tag===22&&m.memoizedState!==null?ku(o):S!==null?(S.return=m,Z=S):ku(o);for(;c!==null;)Z=c,bu(c),c=c.sibling;Z=o,mi=j,et=I}wu(e)}else(o.subtreeFlags&8772)!==0&&c!==null?(c.return=o,Z=c):wu(e)}}function wu(e){for(;Z!==null;){var t=Z;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:et||pi(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!et)if(n===null)i.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:St(t.type,n.memoizedProps);i.componentDidUpdate(o,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var c=t.updateQueue;c!==null&&jd(t,c,i);break;case 3:var m=t.updateQueue;if(m!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}jd(t,m,n)}break;case 5:var j=t.stateNode;if(n===null&&t.flags&4){n=j;var S=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":S.autoFocus&&n.focus();break;case"img":S.src&&(n.src=S.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var I=t.alternate;if(I!==null){var W=I.memoizedState;if(W!==null){var B=W.dehydrated;B!==null&&Tr(B)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}et||t.flags&512&&Co(t)}catch($){Oe(t,t.return,$)}}if(t===e){Z=null;break}if(n=t.sibling,n!==null){n.return=t.return,Z=n;break}Z=t.return}}function ju(e){for(;Z!==null;){var t=Z;if(t===e){Z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Z=n;break}Z=t.return}}function ku(e){for(;Z!==null;){var t=Z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pi(4,t)}catch(S){Oe(t,n,S)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var o=t.return;try{i.componentDidMount()}catch(S){Oe(t,o,S)}}var c=t.return;try{Co(t)}catch(S){Oe(t,c,S)}break;case 5:var m=t.return;try{Co(t)}catch(S){Oe(t,m,S)}}}catch(S){Oe(t,t.return,S)}if(t===e){Z=null;break}var j=t.sibling;if(j!==null){j.return=t.return,Z=j;break}Z=t.return}}var w1=Math.ceil,hi=V.ReactCurrentDispatcher,Po=V.ReactCurrentOwner,yt=V.ReactCurrentBatchConfig,ye=0,Ve=null,$e=null,qe=0,mt=0,lr=sn(0),He=0,aa=null,An=0,gi=0,Ao=0,ia=null,st=null,Lo=0,cr=1/0,Vt=null,xi=!1,_o=null,fn=null,vi=!1,mn=null,yi=0,sa=0,Mo=null,bi=-1,wi=0;function nt(){return(ye&6)!==0?De():bi!==-1?bi:bi=De()}function pn(e){return(e.mode&1)===0?1:(ye&2)!==0&&qe!==0?qe&-qe:a1.transition!==null?(wi===0&&(wi=gc()),wi):(e=Ee,e!==0||(e=window.event,e=e===void 0?16:Nc(e.type)),e)}function Et(e,t,n,i){if(50<sa)throw sa=0,Mo=null,Error(s(185));Ar(e,n,i),((ye&2)===0||e!==Ve)&&(e===Ve&&((ye&2)===0&&(gi|=n),He===4&&hn(e,qe)),ot(e,i),n===1&&ye===0&&(t.mode&1)===0&&(cr=De()+500,Ga&&ln()))}function ot(e,t){var n=e.callbackNode;ah(e,t);var i=Aa(e,e===Ve?qe:0);if(i===0)n!==null&&mc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(n!=null&&mc(n),t===1)e.tag===0?r1(Nu.bind(null,e)):dd(Nu.bind(null,e)),Zh(function(){(ye&6)===0&&ln()}),n=null;else{switch(xc(i)){case 1:n=us;break;case 4:n=pc;break;case 16:n=Ca;break;case 536870912:n=hc;break;default:n=Ca}n=Mu(n,Su.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Su(e,t){if(bi=-1,wi=0,(ye&6)!==0)throw Error(s(327));var n=e.callbackNode;if(dr()&&e.callbackNode!==n)return null;var i=Aa(e,e===Ve?qe:0);if(i===0)return null;if((i&30)!==0||(i&e.expiredLanes)!==0||t)t=ji(e,i);else{t=i;var o=ye;ye|=2;var c=Eu();(Ve!==e||qe!==t)&&(Vt=null,cr=De()+500,_n(e,t));do try{S1();break}catch(j){Cu(e,j)}while(!0);Xs(),hi.current=c,ye=o,$e!==null?t=0:(Ve=null,qe=0,t=He)}if(t!==0){if(t===2&&(o=fs(e),o!==0&&(i=o,t=Io(e,o))),t===1)throw n=aa,_n(e,0),hn(e,i),ot(e,De()),n;if(t===6)hn(e,i);else{if(o=e.current.alternate,(i&30)===0&&!j1(o)&&(t=ji(e,i),t===2&&(c=fs(e),c!==0&&(i=c,t=Io(e,c))),t===1))throw n=aa,_n(e,0),hn(e,i),ot(e,De()),n;switch(e.finishedWork=o,e.finishedLanes=i,t){case 0:case 1:throw Error(s(345));case 2:Mn(e,st,Vt);break;case 3:if(hn(e,i),(i&130023424)===i&&(t=Lo+500-De(),10<t)){if(Aa(e,0)!==0)break;if(o=e.suspendedLanes,(o&i)!==i){nt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ds(Mn.bind(null,e,st,Vt),t);break}Mn(e,st,Vt);break;case 4:if(hn(e,i),(i&4194240)===i)break;for(t=e.eventTimes,o=-1;0<i;){var m=31-wt(i);c=1<<m,m=t[m],m>o&&(o=m),i&=~c}if(i=o,i=De()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*w1(i/1960))-i,10<i){e.timeoutHandle=Ds(Mn.bind(null,e,st,Vt),i);break}Mn(e,st,Vt);break;case 5:Mn(e,st,Vt);break;default:throw Error(s(329))}}}return ot(e,De()),e.callbackNode===n?Su.bind(null,e):null}function Io(e,t){var n=ia;return e.current.memoizedState.isDehydrated&&(_n(e,t).flags|=256),e=ji(e,t),e!==2&&(t=st,st=n,t!==null&&To(t)),e}function To(e){st===null?st=e:st.push.apply(st,e)}function j1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var o=n[i],c=o.getSnapshot;o=o.value;try{if(!jt(c(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function hn(e,t){for(t&=~Ao,t&=~gi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-wt(t),i=1<<n;e[n]=-1,t&=~i}}function Nu(e){if((ye&6)!==0)throw Error(s(327));dr();var t=Aa(e,0);if((t&1)===0)return ot(e,De()),null;var n=ji(e,t);if(e.tag!==0&&n===2){var i=fs(e);i!==0&&(t=i,n=Io(e,i))}if(n===1)throw n=aa,_n(e,0),hn(e,t),ot(e,De()),n;if(n===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mn(e,st,Vt),ot(e,De()),null}function Fo(e,t){var n=ye;ye|=1;try{return e(t)}finally{ye=n,ye===0&&(cr=De()+500,Ga&&ln())}}function Ln(e){mn!==null&&mn.tag===0&&(ye&6)===0&&dr();var t=ye;ye|=1;var n=yt.transition,i=Ee;try{if(yt.transition=null,Ee=1,e)return e()}finally{Ee=i,yt.transition=n,ye=t,(ye&6)===0&&ln()}}function Oo(){mt=lr.current,Ae(lr)}function _n(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Jh(n)),$e!==null)for(n=$e.return;n!==null;){var i=n;switch(Vs(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ya();break;case 3:ir(),Ae(rt),Ae(Ke),ao();break;case 5:no(i);break;case 4:ir();break;case 13:Ae(Ie);break;case 19:Ae(Ie);break;case 10:Ks(i.type._context);break;case 22:case 23:Oo()}n=n.return}if(Ve=e,$e=e=gn(e.current,null),qe=mt=t,He=0,aa=null,Ao=gi=An=0,st=ia=null,En!==null){for(t=0;t<En.length;t++)if(n=En[t],i=n.interleaved,i!==null){n.interleaved=null;var o=i.next,c=n.pending;if(c!==null){var m=c.next;c.next=o,i.next=m}n.pending=i}En=null}return e}function Cu(e,t){do{var n=$e;try{if(Xs(),ii.current=ci,si){for(var i=Te.memoizedState;i!==null;){var o=i.queue;o!==null&&(o.pending=null),i=i.next}si=!1}if(Pn=0,Be=We=Te=null,Jr=!1,Zr=0,Po.current=null,n===null||n.return===null){He=1,aa=t,$e=null;break}e:{var c=e,m=n.return,j=n,S=t;if(t=qe,j.flags|=32768,S!==null&&typeof S=="object"&&typeof S.then=="function"){var I=S,W=j,B=W.tag;if((W.mode&1)===0&&(B===0||B===11||B===15)){var $=W.alternate;$?(W.updateQueue=$.updateQueue,W.memoizedState=$.memoizedState,W.lanes=$.lanes):(W.updateQueue=null,W.memoizedState=null)}var J=Kd(m);if(J!==null){J.flags&=-257,Jd(J,m,j,c,t),J.mode&1&&Xd(c,I,t),t=J,S=I;var ee=t.updateQueue;if(ee===null){var te=new Set;te.add(S),t.updateQueue=te}else ee.add(S);break e}else{if((t&1)===0){Xd(c,I,t),Ro();break e}S=Error(s(426))}}else if(Me&&j.mode&1){var Ue=Kd(m);if(Ue!==null){(Ue.flags&65536)===0&&(Ue.flags|=256),Jd(Ue,m,j,c,t),qs(sr(S,j));break e}}c=S=sr(S,j),He!==4&&(He=2),ia===null?ia=[c]:ia.push(c),c=m;do{switch(c.tag){case 3:c.flags|=65536,t&=-t,c.lanes|=t;var P=qd(c,S,t);wd(c,P);break e;case 1:j=S;var C=c.type,L=c.stateNode;if((c.flags&128)===0&&(typeof C.getDerivedStateFromError=="function"||L!==null&&typeof L.componentDidCatch=="function"&&(fn===null||!fn.has(L)))){c.flags|=65536,t&=-t,c.lanes|=t;var Y=Gd(c,j,t);wd(c,Y);break e}}c=c.return}while(c!==null)}Pu(n)}catch(ne){t=ne,$e===n&&n!==null&&($e=n=n.return);continue}break}while(!0)}function Eu(){var e=hi.current;return hi.current=ci,e===null?ci:e}function Ro(){(He===0||He===3||He===2)&&(He=4),Ve===null||(An&268435455)===0&&(gi&268435455)===0||hn(Ve,qe)}function ji(e,t){var n=ye;ye|=2;var i=Eu();(Ve!==e||qe!==t)&&(Vt=null,_n(e,t));do try{k1();break}catch(o){Cu(e,o)}while(!0);if(Xs(),ye=n,hi.current=i,$e!==null)throw Error(s(261));return Ve=null,qe=0,He}function k1(){for(;$e!==null;)zu($e)}function S1(){for(;$e!==null&&!Gp();)zu($e)}function zu(e){var t=_u(e.alternate,e,mt);e.memoizedProps=e.pendingProps,t===null?Pu(e):$e=t,Po.current=null}function Pu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=g1(n,t,mt),n!==null){$e=n;return}}else{if(n=x1(n,t),n!==null){n.flags&=32767,$e=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{He=6,$e=null;return}}if(t=t.sibling,t!==null){$e=t;return}$e=t=e}while(t!==null);He===0&&(He=5)}function Mn(e,t,n){var i=Ee,o=yt.transition;try{yt.transition=null,Ee=1,N1(e,t,n,i)}finally{yt.transition=o,Ee=i}return null}function N1(e,t,n,i){do dr();while(mn!==null);if((ye&6)!==0)throw Error(s(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var c=n.lanes|n.childLanes;if(ih(e,c),e===Ve&&($e=Ve=null,qe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||vi||(vi=!0,Mu(Ca,function(){return dr(),null})),c=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||c){c=yt.transition,yt.transition=null;var m=Ee;Ee=1;var j=ye;ye|=4,Po.current=null,y1(e,n),yu(n,e),Vh(Os),Ma=!!Fs,Os=Fs=null,e.current=n,b1(n),Xp(),ye=j,Ee=m,yt.transition=c}else e.current=n;if(vi&&(vi=!1,mn=e,yi=o),c=e.pendingLanes,c===0&&(fn=null),Zp(n.stateNode),ot(e,De()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],i(o.value,{componentStack:o.stack,digest:o.digest});if(xi)throw xi=!1,e=_o,_o=null,e;return(yi&1)!==0&&e.tag!==0&&dr(),c=e.pendingLanes,(c&1)!==0?e===Mo?sa++:(sa=0,Mo=e):sa=0,ln(),null}function dr(){if(mn!==null){var e=xc(yi),t=yt.transition,n=Ee;try{if(yt.transition=null,Ee=16>e?16:e,mn===null)var i=!1;else{if(e=mn,mn=null,yi=0,(ye&6)!==0)throw Error(s(331));var o=ye;for(ye|=4,Z=e.current;Z!==null;){var c=Z,m=c.child;if((Z.flags&16)!==0){var j=c.deletions;if(j!==null){for(var S=0;S<j.length;S++){var I=j[S];for(Z=I;Z!==null;){var W=Z;switch(W.tag){case 0:case 11:case 15:ra(8,W,c)}var B=W.child;if(B!==null)B.return=W,Z=B;else for(;Z!==null;){W=Z;var $=W.sibling,J=W.return;if(pu(W),W===I){Z=null;break}if($!==null){$.return=J,Z=$;break}Z=J}}}var ee=c.alternate;if(ee!==null){var te=ee.child;if(te!==null){ee.child=null;do{var Ue=te.sibling;te.sibling=null,te=Ue}while(te!==null)}}Z=c}}if((c.subtreeFlags&2064)!==0&&m!==null)m.return=c,Z=m;else e:for(;Z!==null;){if(c=Z,(c.flags&2048)!==0)switch(c.tag){case 0:case 11:case 15:ra(9,c,c.return)}var P=c.sibling;if(P!==null){P.return=c.return,Z=P;break e}Z=c.return}}var C=e.current;for(Z=C;Z!==null;){m=Z;var L=m.child;if((m.subtreeFlags&2064)!==0&&L!==null)L.return=m,Z=L;else e:for(m=C;Z!==null;){if(j=Z,(j.flags&2048)!==0)try{switch(j.tag){case 0:case 11:case 15:pi(9,j)}}catch(ne){Oe(j,j.return,ne)}if(j===m){Z=null;break e}var Y=j.sibling;if(Y!==null){Y.return=j.return,Z=Y;break e}Z=j.return}}if(ye=o,ln(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(Ea,e)}catch{}i=!0}return i}finally{Ee=n,yt.transition=t}}return!1}function Au(e,t,n){t=sr(n,t),t=qd(e,t,1),e=dn(e,t,1),t=nt(),e!==null&&(Ar(e,1,t),ot(e,t))}function Oe(e,t,n){if(e.tag===3)Au(e,e,n);else for(;t!==null;){if(t.tag===3){Au(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(fn===null||!fn.has(i))){e=sr(n,e),e=Gd(t,e,1),t=dn(t,e,1),e=nt(),t!==null&&(Ar(t,1,e),ot(t,e));break}}t=t.return}}function C1(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),t=nt(),e.pingedLanes|=e.suspendedLanes&n,Ve===e&&(qe&n)===n&&(He===4||He===3&&(qe&130023424)===qe&&500>De()-Lo?_n(e,0):Ao|=n),ot(e,t)}function Lu(e,t){t===0&&((e.mode&1)===0?t=1:(t=Pa,Pa<<=1,(Pa&130023424)===0&&(Pa=4194304)));var n=nt();e=Wt(e,t),e!==null&&(Ar(e,t,n),ot(e,n))}function E1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Lu(e,n)}function z1(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(s(314))}i!==null&&i.delete(t),Lu(e,n)}var _u;_u=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||rt.current)it=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return it=!1,h1(e,t,n);it=(e.flags&131072)!==0}else it=!1,Me&&(t.flags&1048576)!==0&&ud(t,Ka,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;fi(e,t),e=t.pendingProps;var o=Jn(t,Ke.current);ar(t,n),o=oo(null,t,i,e,o,n);var c=lo();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,at(i)?(c=!0,qa(t)):c=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,eo(t),o.updater=di,t.stateNode=o,o._reactInternals=t,ho(t,i,e,n),t=yo(null,t,i,!0,c,n)):(t.tag=0,Me&&c&&Bs(t),tt(null,t,o,n),t=t.child),t;case 16:i=t.elementType;e:{switch(fi(e,t),e=t.pendingProps,o=i._init,i=o(i._payload),t.type=i,o=t.tag=A1(i),e=St(i,e),o){case 0:t=vo(null,t,i,e,n);break e;case 1:t=au(null,t,i,e,n);break e;case 11:t=Zd(null,t,i,e,n);break e;case 14:t=eu(null,t,i,St(i.type,e),n);break e}throw Error(s(306,i,""))}return t;case 0:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:St(i,o),vo(e,t,i,o,n);case 1:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:St(i,o),au(e,t,i,o,n);case 3:e:{if(iu(t),e===null)throw Error(s(387));i=t.pendingProps,c=t.memoizedState,o=c.element,bd(e,t),ri(t,i,null,n);var m=t.memoizedState;if(i=m.element,c.isDehydrated)if(c={element:i,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){o=sr(Error(s(423)),t),t=su(e,t,i,n,o);break e}else if(i!==o){o=sr(Error(s(424)),t),t=su(e,t,i,n,o);break e}else for(ft=an(t.stateNode.containerInfo.firstChild),ut=t,Me=!0,kt=null,n=vd(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(tr(),i===o){t=Bt(e,t,n);break e}tt(e,t,i,n)}t=t.child}return t;case 5:return kd(t),e===null&&Ys(t),i=t.type,o=t.pendingProps,c=e!==null?e.memoizedProps:null,m=o.children,Rs(i,o)?m=null:c!==null&&Rs(i,c)&&(t.flags|=32),ru(e,t),tt(e,t,m,n),t.child;case 6:return e===null&&Ys(t),null;case 13:return ou(e,t,n);case 4:return to(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=nr(t,null,i,n):tt(e,t,i,n),t.child;case 11:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:St(i,o),Zd(e,t,i,o,n);case 7:return tt(e,t,t.pendingProps,n),t.child;case 8:return tt(e,t,t.pendingProps.children,n),t.child;case 12:return tt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(i=t.type._context,o=t.pendingProps,c=t.memoizedProps,m=o.value,ze(ei,i._currentValue),i._currentValue=m,c!==null)if(jt(c.value,m)){if(c.children===o.children&&!rt.current){t=Bt(e,t,n);break e}}else for(c=t.child,c!==null&&(c.return=t);c!==null;){var j=c.dependencies;if(j!==null){m=c.child;for(var S=j.firstContext;S!==null;){if(S.context===i){if(c.tag===1){S=Ht(-1,n&-n),S.tag=2;var I=c.updateQueue;if(I!==null){I=I.shared;var W=I.pending;W===null?S.next=S:(S.next=W.next,W.next=S),I.pending=S}}c.lanes|=n,S=c.alternate,S!==null&&(S.lanes|=n),Js(c.return,n,t),j.lanes|=n;break}S=S.next}}else if(c.tag===10)m=c.type===t.type?null:c.child;else if(c.tag===18){if(m=c.return,m===null)throw Error(s(341));m.lanes|=n,j=m.alternate,j!==null&&(j.lanes|=n),Js(m,n,t),m=c.sibling}else m=c.child;if(m!==null)m.return=c;else for(m=c;m!==null;){if(m===t){m=null;break}if(c=m.sibling,c!==null){c.return=m.return,m=c;break}m=m.return}c=m}tt(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,i=t.pendingProps.children,ar(t,n),o=xt(o),i=i(o),t.flags|=1,tt(e,t,i,n),t.child;case 14:return i=t.type,o=St(i,t.pendingProps),o=St(i.type,o),eu(e,t,i,o,n);case 15:return tu(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:St(i,o),fi(e,t),t.tag=1,at(i)?(e=!0,qa(t)):e=!1,ar(t,n),Qd(t,i,o),ho(t,i,o,n),yo(null,t,i,!0,e,n);case 19:return cu(e,t,n);case 22:return nu(e,t,n)}throw Error(s(156,t.tag))};function Mu(e,t){return fc(e,t)}function P1(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(e,t,n,i){return new P1(e,t,n,i)}function Do(e){return e=e.prototype,!(!e||!e.isReactComponent)}function A1(e){if(typeof e=="function")return Do(e)?1:0;if(e!=null){if(e=e.$$typeof,e===me)return 11;if(e===je)return 14}return 2}function gn(e,t){var n=e.alternate;return n===null?(n=bt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ki(e,t,n,i,o,c){var m=2;if(i=e,typeof e=="function")Do(e)&&(m=1);else if(typeof e=="string")m=5;else e:switch(e){case re:return In(n.children,o,c,t);case de:m=8,o|=8;break;case X:return e=bt(12,n,t,o|2),e.elementType=X,e.lanes=c,e;case ve:return e=bt(13,n,t,o),e.elementType=ve,e.lanes=c,e;case Se:return e=bt(19,n,t,o),e.elementType=Se,e.lanes=c,e;case xe:return Si(n,o,c,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fe:m=10;break e;case pe:m=9;break e;case me:m=11;break e;case je:m=14;break e;case Ne:m=16,i=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=bt(m,n,t,o),t.elementType=e,t.type=i,t.lanes=c,t}function In(e,t,n,i){return e=bt(7,e,i,t),e.lanes=n,e}function Si(e,t,n,i){return e=bt(22,e,i,t),e.elementType=xe,e.lanes=n,e.stateNode={isHidden:!1},e}function Uo(e,t,n){return e=bt(6,e,null,t),e.lanes=n,e}function $o(e,t,n){return t=bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function L1(e,t,n,i,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ms(0),this.expirationTimes=ms(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ms(0),this.identifierPrefix=i,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Wo(e,t,n,i,o,c,m,j,S){return e=new L1(e,t,n,j,S),t===1?(t=1,c===!0&&(t|=8)):t=0,c=bt(3,null,null,t),e.current=c,c.stateNode=e,c.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},eo(c),e}function _1(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:G,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}function Iu(e){if(!e)return on;e=e._reactInternals;e:{if(jn(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(at(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var n=e.type;if(at(n))return ld(e,n,t)}return t}function Tu(e,t,n,i,o,c,m,j,S){return e=Wo(n,i,!0,e,o,c,m,j,S),e.context=Iu(null),n=e.current,i=nt(),o=pn(n),c=Ht(i,o),c.callback=t??null,dn(n,c,o),e.current.lanes=o,Ar(e,o,i),ot(e,i),e}function Ni(e,t,n,i){var o=t.current,c=nt(),m=pn(o);return n=Iu(n),t.context===null?t.context=n:t.pendingContext=n,t=Ht(c,m),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=dn(o,t,m),e!==null&&(Et(e,o,m,c),ni(e,o,m)),m}function Ci(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ho(e,t){Fu(e,t),(e=e.alternate)&&Fu(e,t)}function M1(){return null}var Ou=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bo(e){this._internalRoot=e}Ei.prototype.render=Bo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));Ni(e,t,null,null)},Ei.prototype.unmount=Bo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ln(function(){Ni(null,e,null,null)}),t[Rt]=null}};function Ei(e){this._internalRoot=e}Ei.prototype.unstable_scheduleHydration=function(e){if(e){var t=bc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tn.length&&t!==0&&t<tn[n].priority;n++);tn.splice(n,0,e),n===0&&kc(e)}};function Vo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ru(){}function I1(e,t,n,i,o){if(o){if(typeof i=="function"){var c=i;i=function(){var I=Ci(m);c.call(I)}}var m=Tu(t,i,e,0,null,!1,!1,"",Ru);return e._reactRootContainer=m,e[Rt]=m.current,Br(e.nodeType===8?e.parentNode:e),Ln(),m}for(;o=e.lastChild;)e.removeChild(o);if(typeof i=="function"){var j=i;i=function(){var I=Ci(S);j.call(I)}}var S=Wo(e,0,!1,null,null,!1,!1,"",Ru);return e._reactRootContainer=S,e[Rt]=S.current,Br(e.nodeType===8?e.parentNode:e),Ln(function(){Ni(t,S,n,i)}),S}function Pi(e,t,n,i,o){var c=n._reactRootContainer;if(c){var m=c;if(typeof o=="function"){var j=o;o=function(){var S=Ci(m);j.call(S)}}Ni(t,m,e,o)}else m=I1(n,t,e,o,i);return Ci(m)}vc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pr(t.pendingLanes);n!==0&&(ps(t,n|1),ot(t,De()),(ye&6)===0&&(cr=De()+500,ln()))}break;case 13:Ln(function(){var i=Wt(e,1);if(i!==null){var o=nt();Et(i,e,1,o)}}),Ho(e,1)}},hs=function(e){if(e.tag===13){var t=Wt(e,134217728);if(t!==null){var n=nt();Et(t,e,134217728,n)}Ho(e,134217728)}},yc=function(e){if(e.tag===13){var t=pn(e),n=Wt(e,t);if(n!==null){var i=nt();Et(n,e,t,i)}Ho(e,t)}},bc=function(){return Ee},wc=function(e,t){var n=Ee;try{return Ee=e,t()}finally{Ee=n}},os=function(e,t,n){switch(t){case"input":if(Zi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var o=Qa(i);if(!o)throw Error(s(90));Vl(i),Zi(i,o)}}}break;case"textarea":Xl(e,n);break;case"select":t=n.value,t!=null&&Un(e,!!n.multiple,t,!1)}},ic=Fo,sc=Ln;var T1={usingClientEntryPoint:!1,Events:[Yr,Xn,Qa,rc,ac,Fo]},oa={findFiberByHostInstance:kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},F1={bundleType:oa.bundleType,version:oa.version,rendererPackageName:oa.rendererPackageName,rendererConfig:oa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:V.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=dc(e),e===null?null:e.stateNode},findFiberByHostInstance:oa.findFiberByHostInstance||M1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ai=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ai.isDisabled&&Ai.supportsFiber)try{Ea=Ai.inject(F1),_t=Ai}catch{}}return lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T1,lt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vo(t))throw Error(s(200));return _1(e,t,null,n)},lt.createRoot=function(e,t){if(!Vo(e))throw Error(s(299));var n=!1,i="",o=Ou;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Wo(e,1,!1,null,null,n,!1,i,o),e[Rt]=t.current,Br(e.nodeType===8?e.parentNode:e),new Bo(t)},lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=dc(t),e=e===null?null:e.stateNode,e},lt.flushSync=function(e){return Ln(e)},lt.hydrate=function(e,t,n){if(!zi(t))throw Error(s(200));return Pi(null,e,t,!0,n)},lt.hydrateRoot=function(e,t,n){if(!Vo(e))throw Error(s(405));var i=n!=null&&n.hydratedSources||null,o=!1,c="",m=Ou;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onRecoverableError!==void 0&&(m=n.onRecoverableError)),t=Tu(t,null,e,1,n??null,o,!1,c,m),e[Rt]=t.current,Br(e),i)for(e=0;e<i.length;e++)n=i[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ei(t)},lt.render=function(e,t,n){if(!zi(t))throw Error(s(200));return Pi(null,e,t,!1,n)},lt.unmountComponentAtNode=function(e){if(!zi(e))throw Error(s(40));return e._reactRootContainer?(Ln(function(){Pi(null,null,e,!1,function(){e._reactRootContainer=null,e[Rt]=null})}),!0):!1},lt.unstable_batchedUpdates=Fo,lt.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!zi(n))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return Pi(e,t,n,!1,i)},lt.version="18.3.1-next-f1338f8080-20240426",lt}var Qu;function V1(){if(Qu)return qo.exports;Qu=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),qo.exports=B1(),qo.exports}var Yu;function Q1(){if(Yu)return Li;Yu=1;var a=V1();return Li.createRoot=a.createRoot,Li.hydrateRoot=a.hydrateRoot,Li}var Y1=Q1();const q1=`
*{box-sizing:border-box}body{margin:0;font-family:Inter,Arial,sans-serif;background:#f6f8fb;color:#14213d}button,input,select,textarea{font:inherit}button{cursor:pointer;border:0}.nav{position:sticky;top:0;z-index:10;display:flex;align-items:center;justify-content:space-between;padding:14px clamp(18px,4vw,56px);background:rgba(255,255,255,.94);backdrop-filter:blur(14px);border-bottom:1px solid #dfe7ef}.brand{display:flex;align-items:center;gap:10px;background:transparent;color:#14213d;text-align:left}.brand strong{display:block}.brand small{display:block;color:#64748b}.brand-mark{display:grid;place-items:center;width:42px;height:42px;border-radius:8px;background:#0f766e;color:#fff;font-weight:800}.nav-links{display:flex;align-items:center;gap:6px}.nav-links button,.section-head button,.text-btn{background:transparent;color:#334155;padding:10px 12px;border-radius:8px}.nav-links .active,.filters button:first-child,.segmented .active{background:#e7f5f3;color:#0f766e}.pill,.primary,.secondary{display:inline-flex;align-items:center;justify-content:center;gap:8px;border-radius:8px;padding:12px 16px;font-weight:700}.pill,.primary{background:#0f766e;color:#fff}.secondary{background:#f59e0b;color:#111827}.hero{padding:72px clamp(18px,5vw,72px) 34px;background:linear-gradient(120deg,#e7f5f3 0%,#fff 54%,#fff4dc 100%)}.hero-content{max-width:820px}.eyebrow{color:#0f766e;font-weight:800;text-transform:uppercase;font-size:.78rem;letter-spacing:0}.hero h1,.page h1,.portal-main h1{font-size:clamp(2.2rem,5vw,4.8rem);line-height:1.02;margin:10px 0 18px}.hero-text,.page-head p{font-size:1.08rem;line-height:1.75;color:#475569;max-width:780px}.hero-actions{display:flex;gap:12px;flex-wrap:wrap;margin:24px 0}.hero-panel{margin-top:34px;display:grid;gap:18px;max-width:880px}.search{display:flex;align-items:center;gap:10px;background:#fff;border:1px solid #dce6ee;border-radius:8px;padding:13px 14px;box-shadow:0 12px 26px rgba(15,23,42,.08)}.search input{border:0;outline:0;width:100%;background:transparent}.stat-grid,.dashboard-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:14px}.stat,.info-block,.verify-card,.list-panel{background:#fff;border:1px solid #dfe7ef;border-radius:8px;padding:20px;box-shadow:0 12px 26px rgba(15,23,42,.06)}.stat strong{display:block;font-size:2rem;color:#0f766e}.stat span,.card p,.info-block p,.mini-card span{color:#64748b;line-height:1.6}.section,.page{padding:42px clamp(18px,5vw,72px)}.section-head{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:18px}.section h2{font-size:1.6rem;margin:0}.card-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:18px}.card,.mini-card{background:#fff;border:1px solid #dfe7ef;border-radius:8px;padding:20px;min-height:190px;display:flex;flex-direction:column;align-items:flex-start;gap:10px;box-shadow:0 12px 26px rgba(15,23,42,.06)}.card svg,.mini-card svg{color:#0f766e}.card h3,.info-block h3{margin:4px 0;font-size:1.15rem}.card button,.list-row button{margin-top:auto;background:#e7f5f3;color:#0f766e;border-radius:8px;padding:10px 12px;font-weight:700}.course span,.product span,.verified{display:inline-block;background:#fff4dc;color:#92400e;border-radius:8px;padding:6px 9px;font-size:.82rem;font-weight:800}.product strong{font-size:1.45rem}.product div{display:flex;gap:8px;margin-top:auto}.icon-btn{display:grid;place-items:center;width:42px;height:42px;border-radius:8px;background:#0f766e;color:#fff}.page{min-height:70vh}.page-head{margin-bottom:28px}.filters{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:18px}.filters button{padding:10px 13px;border-radius:8px;background:#fff;color:#334155;border:1px solid #dfe7ef}.two-col{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:16px}.form{display:grid;gap:12px;max-width:660px}.form input,.form select,.form textarea,.auth-box input{width:100%;padding:13px 14px;border:1px solid #d7e2ea;border-radius:8px;background:#fff;outline:0}.list-row{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid #e5edf3}.portal-bg{min-height:100vh;display:grid;place-items:center;background:linear-gradient(135deg,#e7f5f3,#fff4dc)}.auth-box{width:min(430px,92vw);background:#fff;border:1px solid #dfe7ef;border-radius:8px;padding:28px;box-shadow:0 18px 42px rgba(15,23,42,.12)}.center{justify-content:center;margin:0 auto 18px}.segmented{display:grid;grid-template-columns:1fr 1fr;gap:6px;background:#eef4f7;padding:5px;border-radius:8px;margin-bottom:14px}.segmented button{border-radius:8px;padding:10px;background:transparent}.auth-box .primary{width:100%;margin-top:10px}.text-btn{width:100%;margin-top:8px}.portal{min-height:100vh;display:grid;grid-template-columns:260px 1fr;background:#f6f8fb}.portal aside{background:#10243f;color:#fff;padding:18px;display:flex;flex-direction:column;gap:8px}.portal aside .brand{color:#fff;margin-bottom:16px}.portal aside button{text-align:left;background:rgba(255,255,255,.08);color:#fff;border-radius:8px;padding:12px}.portal-main{padding:30px clamp(18px,4vw,54px)}.portal-main h1{font-size:2rem}.topbar{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:20px}.rules{line-height:1.9;color:#475569}.verify-card{max-width:560px;text-align:center}.verify-card svg{color:#0f766e}.floating{position:fixed;right:18px;bottom:18px;display:grid;gap:8px}.floating button{width:46px;height:46px;border-radius:8px;background:#0f766e;color:#fff;display:grid;place-items:center;box-shadow:0 12px 24px rgba(15,118,110,.28)}footer{display:flex;justify-content:space-between;gap:18px;flex-wrap:wrap;padding:32px clamp(18px,5vw,72px);background:#10243f;color:#fff}footer p{color:#cbd5e1}footer button{background:rgba(255,255,255,.1);color:#fff;border-radius:8px;padding:10px 12px;margin-left:8px}.table{width:100%;border-collapse:collapse;background:#fff;border:1px solid #dfe7ef;border-radius:8px;overflow:hidden}.table th,.table td{text-align:left;padding:13px;border-bottom:1px solid #edf2f7}.modal{background:#fff;border:1px solid #dfe7ef;border-radius:8px;padding:20px}.mobile-only{display:none}@media(max-width:760px){.mobile-only{display:grid}.nav-links{display:none;position:absolute;top:70px;left:14px;right:14px;flex-direction:column;align-items:stretch;background:#fff;border:1px solid #dfe7ef;border-radius:8px;padding:10px}.nav-links.open{display:flex}.nav-links button{width:100%;justify-content:center}.hero{padding-top:44px}.portal{grid-template-columns:1fr}.portal aside{position:static}.list-row{grid-template-columns:1fr}.hero h1,.page h1{font-size:2.35rem}}
`;function G1(){return r.jsx("style",{children:q1})}/*!
 * Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */function sl(a,l){(l==null||l>a.length)&&(l=a.length);for(var s=0,d=Array(l);s<l;s++)d[s]=a[s];return d}function X1(a){if(Array.isArray(a))return a}function K1(a){if(Array.isArray(a))return sl(a)}function J1(a,l){if(!(a instanceof l))throw new TypeError("Cannot call a class as a function")}function Z1(a,l){for(var s=0;s<l.length;s++){var d=l[s];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,Hf(d.key),d)}}function e0(a,l,s){return l&&Z1(a.prototype,l),Object.defineProperty(a,"prototype",{writable:!1}),a}function Fi(a,l){var s=typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(!s){if(Array.isArray(a)||(s=Cl(a))||l){s&&(a=s);var d=0,u=function(){};return{s:u,n:function(){return d>=a.length?{done:!0}:{done:!1,value:a[d++]}},e:function(f){throw f},f:u}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var h,y=!0,b=!1;return{s:function(){s=s.call(a)},n:function(){var f=s.next();return y=f.done,f},e:function(f){b=!0,h=f},f:function(){try{y||s.return==null||s.return()}finally{if(b)throw h}}}}function ue(a,l,s){return(l=Hf(l))in a?Object.defineProperty(a,l,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[l]=s,a}function t0(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function n0(a,l){var s=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(s!=null){var d,u,h,y,b=[],f=!0,p=!1;try{if(h=(s=s.call(a)).next,l===0){if(Object(s)!==s)return;f=!1}else for(;!(f=(d=h.call(s)).done)&&(b.push(d.value),b.length!==l);f=!0);}catch(g){p=!0,u=g}finally{try{if(!f&&s.return!=null&&(y=s.return(),Object(y)!==y))return}finally{if(p)throw u}}return b}}function r0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function a0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qu(a,l){var s=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);l&&(d=d.filter(function(u){return Object.getOwnPropertyDescriptor(a,u).enumerable})),s.push.apply(s,d)}return s}function Q(a){for(var l=1;l<arguments.length;l++){var s=arguments[l]!=null?arguments[l]:{};l%2?qu(Object(s),!0).forEach(function(d){ue(a,d,s[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(s)):qu(Object(s)).forEach(function(d){Object.defineProperty(a,d,Object.getOwnPropertyDescriptor(s,d))})}return a}function Qi(a,l){return X1(a)||n0(a,l)||Cl(a,l)||r0()}function Pt(a){return K1(a)||t0(a)||Cl(a)||a0()}function i0(a,l){if(typeof a!="object"||!a)return a;var s=a[Symbol.toPrimitive];if(s!==void 0){var d=s.call(a,l);if(typeof d!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(a)}function Hf(a){var l=i0(a,"string");return typeof l=="symbol"?l:l+""}function Ui(a){"@babel/helpers - typeof";return Ui=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},Ui(a)}function Cl(a,l){if(a){if(typeof a=="string")return sl(a,l);var s={}.toString.call(a).slice(8,-1);return s==="Object"&&a.constructor&&(s=a.constructor.name),s==="Map"||s==="Set"?Array.from(a):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?sl(a,l):void 0}}var Gu=function(){},El={},Bf={},Vf=null,Qf={mark:Gu,measure:Gu};try{typeof window<"u"&&(El=window),typeof document<"u"&&(Bf=document),typeof MutationObserver<"u"&&(Vf=MutationObserver),typeof performance<"u"&&(Qf=performance)}catch{}var s0=El.navigator||{},Xu=s0.userAgent,Ku=Xu===void 0?"":Xu,vn=El,Le=Bf,Ju=Vf,_i=Qf;vn.document;var Kt=!!Le.documentElement&&!!Le.head&&typeof Le.addEventListener=="function"&&typeof Le.createElement=="function",Yf=~Ku.indexOf("MSIE")||~Ku.indexOf("Trident/"),Ko,o0=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,l0=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,qf={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},c0={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Gf=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],Xe="classic",ha="duotone",Xf="sharp",Kf="sharp-duotone",Jf="chisel",Zf="etch",em="graphite",tm="jelly",nm="jelly-duo",rm="jelly-fill",am="notdog",im="notdog-duo",sm="slab",om="slab-press",lm="thumbprint",cm="utility",dm="utility-duo",um="utility-fill",fm="whiteboard",d0="Classic",u0="Duotone",f0="Sharp",m0="Sharp Duotone",p0="Chisel",h0="Etch",g0="Graphite",x0="Jelly",v0="Jelly Duo",y0="Jelly Fill",b0="Notdog",w0="Notdog Duo",j0="Slab",k0="Slab Press",S0="Thumbprint",N0="Utility",C0="Utility Duo",E0="Utility Fill",z0="Whiteboard",mm=[Xe,ha,Xf,Kf,Jf,Zf,em,tm,nm,rm,am,im,sm,om,lm,cm,dm,um,fm];Ko={},ue(ue(ue(ue(ue(ue(ue(ue(ue(ue(Ko,Xe,d0),ha,u0),Xf,f0),Kf,m0),Jf,p0),Zf,h0),em,g0),tm,x0),nm,v0),rm,y0),ue(ue(ue(ue(ue(ue(ue(ue(ue(Ko,am,b0),im,w0),sm,j0),om,k0),lm,S0),cm,N0),dm,C0),um,E0),fm,z0);var P0={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},A0={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},L0=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),_0={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},pm=["fak","fa-kit","fakd","fa-kit-duotone"],Zu={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},M0=["kit"],I0="kit",T0="kit-duotone",F0="Kit",O0="Kit Duotone";ue(ue({},I0,F0),T0,O0);var R0={kit:{"fa-kit":"fak"}},D0={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},U0={kit:{fak:"fa-kit"}},ef={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Jo,Mi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},$0=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],W0="classic",H0="duotone",B0="sharp",V0="sharp-duotone",Q0="chisel",Y0="etch",q0="graphite",G0="jelly",X0="jelly-duo",K0="jelly-fill",J0="notdog",Z0="notdog-duo",eg="slab",tg="slab-press",ng="thumbprint",rg="utility",ag="utility-duo",ig="utility-fill",sg="whiteboard",og="Classic",lg="Duotone",cg="Sharp",dg="Sharp Duotone",ug="Chisel",fg="Etch",mg="Graphite",pg="Jelly",hg="Jelly Duo",gg="Jelly Fill",xg="Notdog",vg="Notdog Duo",yg="Slab",bg="Slab Press",wg="Thumbprint",jg="Utility",kg="Utility Duo",Sg="Utility Fill",Ng="Whiteboard";Jo={},ue(ue(ue(ue(ue(ue(ue(ue(ue(ue(Jo,W0,og),H0,lg),B0,cg),V0,dg),Q0,ug),Y0,fg),q0,mg),G0,pg),X0,hg),K0,gg),ue(ue(ue(ue(ue(ue(ue(ue(ue(Jo,J0,xg),Z0,vg),eg,yg),tg,bg),ng,wg),rg,jg),ag,kg),ig,Sg),sg,Ng);var Cg="kit",Eg="kit-duotone",zg="Kit",Pg="Kit Duotone";ue(ue({},Cg,zg),Eg,Pg);var Ag={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},Lg={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},ol={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},_g=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],hm=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat($0,_g),Mg=["solid","regular","light","thin","duotone","brands","semibold"],gm=[1,2,3,4,5,6,7,8,9,10],Ig=gm.concat([11,12,13,14,15,16,17,18,19,20]),Tg=["aw","fw","pull-left","pull-right"],Fg=[].concat(Pt(Object.keys(Lg)),Mg,Tg,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",Mi.GROUP,Mi.SWAP_OPACITY,Mi.PRIMARY,Mi.SECONDARY]).concat(gm.map(function(a){return"".concat(a,"x")})).concat(Ig.map(function(a){return"w-".concat(a)})),Og={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},qt="___FONT_AWESOME___",ll=16,xm="fa",vm="svg-inline--fa",On="data-fa-i2svg",cl="data-fa-pseudo-element",Rg="data-fa-pseudo-element-pending",zl="data-prefix",Pl="data-icon",tf="fontawesome-i2svg",Dg="async",Ug=["HTML","HEAD","STYLE","SCRIPT"],ym=["::before","::after",":before",":after"],bm=(function(){try{return!0}catch{return!1}})();function ga(a){return new Proxy(a,{get:function(s,d){return d in s?s[d]:s[Xe]}})}var wm=Q({},qf);wm[Xe]=Q(Q(Q(Q({},{"fa-duotone":"duotone"}),qf[Xe]),Zu.kit),Zu["kit-duotone"]);var $g=ga(wm),dl=Q({},_0);dl[Xe]=Q(Q(Q(Q({},{duotone:"fad"}),dl[Xe]),ef.kit),ef["kit-duotone"]);var nf=ga(dl),ul=Q({},ol);ul[Xe]=Q(Q({},ul[Xe]),U0.kit);var Al=ga(ul),fl=Q({},Ag);fl[Xe]=Q(Q({},fl[Xe]),R0.kit);ga(fl);var Wg=o0,jm="fa-layers-text",Hg=l0,Bg=Q({},P0);ga(Bg);var Vg=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Zo=c0,Qg=[].concat(Pt(M0),Pt(Fg)),da=vn.FontAwesomeConfig||{};function Yg(a){var l=Le.querySelector("script["+a+"]");if(l)return l.getAttribute(a)}function qg(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}if(Le&&typeof Le.querySelector=="function"){var Gg=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Gg.forEach(function(a){var l=Qi(a,2),s=l[0],d=l[1],u=qg(Yg(s));u!=null&&(da[d]=u)})}var km={styleDefault:"solid",familyDefault:Xe,cssPrefix:xm,replacementClass:vm,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};da.familyPrefix&&(da.cssPrefix=da.familyPrefix);var gr=Q(Q({},km),da);gr.autoReplaceSvg||(gr.observeMutations=!1);var ae={};Object.keys(km).forEach(function(a){Object.defineProperty(ae,a,{enumerable:!0,set:function(s){gr[a]=s,ua.forEach(function(d){return d(ae)})},get:function(){return gr[a]}})});Object.defineProperty(ae,"familyPrefix",{enumerable:!0,set:function(l){gr.cssPrefix=l,ua.forEach(function(s){return s(ae)})},get:function(){return gr.cssPrefix}});vn.FontAwesomeConfig=ae;var ua=[];function Xg(a){return ua.push(a),function(){ua.splice(ua.indexOf(a),1)}}var ur=ll,Ot={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Kg(a){if(!(!a||!Kt)){var l=Le.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=a;for(var s=Le.head.childNodes,d=null,u=s.length-1;u>-1;u--){var h=s[u],y=(h.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(y)>-1&&(d=h)}return Le.head.insertBefore(l,d),a}}var Jg="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function rf(){for(var a=12,l="";a-- >0;)l+=Jg[Math.random()*62|0];return l}function vr(a){for(var l=[],s=(a||[]).length>>>0;s--;)l[s]=a[s];return l}function Ll(a){return a.classList?vr(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(l){return l})}function Sm(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Zg(a){return Object.keys(a||{}).reduce(function(l,s){return l+"".concat(s,'="').concat(Sm(a[s]),'" ')},"").trim()}function Yi(a){return Object.keys(a||{}).reduce(function(l,s){return l+"".concat(s,": ").concat(a[s].trim(),";")},"")}function _l(a){return a.size!==Ot.size||a.x!==Ot.x||a.y!==Ot.y||a.rotate!==Ot.rotate||a.flipX||a.flipY}function e2(a){var l=a.transform,s=a.containerWidth,d=a.iconWidth,u={transform:"translate(".concat(s/2," 256)")},h="translate(".concat(l.x*32,", ").concat(l.y*32,") "),y="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),b="rotate(".concat(l.rotate," 0 0)"),f={transform:"".concat(h," ").concat(y," ").concat(b)},p={transform:"translate(".concat(d/2*-1," -256)")};return{outer:u,inner:f,path:p}}function t2(a){var l=a.transform,s=a.width,d=s===void 0?ll:s,u=a.height,h=u===void 0?ll:u,y="";return Yf?y+="translate(".concat(l.x/ur-d/2,"em, ").concat(l.y/ur-h/2,"em) "):y+="translate(calc(-50% + ".concat(l.x/ur,"em), calc(-50% + ").concat(l.y/ur,"em)) "),y+="scale(".concat(l.size/ur*(l.flipX?-1:1),", ").concat(l.size/ur*(l.flipY?-1:1),") "),y+="rotate(".concat(l.rotate,"deg) "),y}var n2=`:root, :host {
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
}`;function Nm(){var a=xm,l=vm,s=ae.cssPrefix,d=ae.replacementClass,u=n2;if(s!==a||d!==l){var h=new RegExp("\\.".concat(a,"\\-"),"g"),y=new RegExp("\\--".concat(a,"\\-"),"g"),b=new RegExp("\\.".concat(l),"g");u=u.replace(h,".".concat(s,"-")).replace(y,"--".concat(s,"-")).replace(b,".".concat(d))}return u}var af=!1;function el(){ae.autoAddCss&&!af&&(Kg(Nm()),af=!0)}var r2={mixout:function(){return{dom:{css:Nm,insertCss:el}}},hooks:function(){return{beforeDOMElementCreation:function(){el()},beforeI2svg:function(){el()}}}},Gt=vn||{};Gt[qt]||(Gt[qt]={});Gt[qt].styles||(Gt[qt].styles={});Gt[qt].hooks||(Gt[qt].hooks={});Gt[qt].shims||(Gt[qt].shims=[]);var zt=Gt[qt],Cm=[],Em=function(){Le.removeEventListener("DOMContentLoaded",Em),$i=1,Cm.map(function(l){return l()})},$i=!1;Kt&&($i=(Le.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Le.readyState),$i||Le.addEventListener("DOMContentLoaded",Em));function a2(a){Kt&&($i?setTimeout(a,0):Cm.push(a))}function xa(a){var l=a.tag,s=a.attributes,d=s===void 0?{}:s,u=a.children,h=u===void 0?[]:u;return typeof a=="string"?Sm(a):"<".concat(l," ").concat(Zg(d),">").concat(h.map(xa).join(""),"</").concat(l,">")}function sf(a,l,s){if(a&&a[l]&&a[l][s])return{prefix:l,iconName:s,icon:a[l][s]}}var tl=function(l,s,d,u){var h=Object.keys(l),y=h.length,b=s,f,p,g;for(d===void 0?(f=1,g=l[h[0]]):(f=0,g=d);f<y;f++)p=h[f],g=b(g,l[p],p,l);return g};function zm(a){return Pt(a).length!==1?null:a.codePointAt(0).toString(16)}function of(a){return Object.keys(a).reduce(function(l,s){var d=a[s],u=!!d.icon;return u?l[d.iconName]=d.icon:l[s]=d,l},{})}function ml(a,l){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},d=s.skipHooks,u=d===void 0?!1:d,h=of(l);typeof zt.hooks.addPack=="function"&&!u?zt.hooks.addPack(a,of(l)):zt.styles[a]=Q(Q({},zt.styles[a]||{}),h),a==="fas"&&ml("fa",l)}var ma=zt.styles,i2=zt.shims,Pm=Object.keys(Al),s2=Pm.reduce(function(a,l){return a[l]=Object.keys(Al[l]),a},{}),Ml=null,Am={},Lm={},_m={},Mm={},Im={};function o2(a){return~Qg.indexOf(a)}function l2(a,l){var s=l.split("-"),d=s[0],u=s.slice(1).join("-");return d===a&&u!==""&&!o2(u)?u:null}var Tm=function(){var l=function(h){return tl(ma,function(y,b,f){return y[f]=tl(b,h,{}),y},{})};Am=l(function(u,h,y){if(h[3]&&(u[h[3]]=y),h[2]){var b=h[2].filter(function(f){return typeof f=="number"});b.forEach(function(f){u[f.toString(16)]=y})}return u}),Lm=l(function(u,h,y){if(u[y]=y,h[2]){var b=h[2].filter(function(f){return typeof f=="string"});b.forEach(function(f){u[f]=y})}return u}),Im=l(function(u,h,y){var b=h[2];return u[y]=y,b.forEach(function(f){u[f]=y}),u});var s="far"in ma||ae.autoFetchSvg,d=tl(i2,function(u,h){var y=h[0],b=h[1],f=h[2];return b==="far"&&!s&&(b="fas"),typeof y=="string"&&(u.names[y]={prefix:b,iconName:f}),typeof y=="number"&&(u.unicodes[y.toString(16)]={prefix:b,iconName:f}),u},{names:{},unicodes:{}});_m=d.names,Mm=d.unicodes,Ml=qi(ae.styleDefault,{family:ae.familyDefault})};Xg(function(a){Ml=qi(a.styleDefault,{family:ae.familyDefault})});Tm();function Il(a,l){return(Am[a]||{})[l]}function c2(a,l){return(Lm[a]||{})[l]}function Tn(a,l){return(Im[a]||{})[l]}function Fm(a){return _m[a]||{prefix:null,iconName:null}}function d2(a){var l=Mm[a],s=Il("fas",a);return l||(s?{prefix:"fas",iconName:s}:null)||{prefix:null,iconName:null}}function yn(){return Ml}var Om=function(){return{prefix:null,iconName:null,rest:[]}};function u2(a){var l=Xe,s=Pm.reduce(function(d,u){return d[u]="".concat(ae.cssPrefix,"-").concat(u),d},{});return mm.forEach(function(d){(a.includes(s[d])||a.some(function(u){return s2[d].includes(u)}))&&(l=d)}),l}function qi(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=l.family,d=s===void 0?Xe:s,u=$g[d][a];if(d===ha&&!a)return"fad";var h=nf[d][a]||nf[d][u],y=a in zt.styles?a:null,b=h||y||null;return b}function f2(a){var l=[],s=null;return a.forEach(function(d){var u=l2(ae.cssPrefix,d);u?s=u:d&&l.push(d)}),{iconName:s,rest:l}}function lf(a){return a.sort().filter(function(l,s,d){return d.indexOf(l)===s})}var cf=hm.concat(pm);function Gi(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=l.skipLookups,d=s===void 0?!1:s,u=null,h=lf(a.filter(function(N){return cf.includes(N)})),y=lf(a.filter(function(N){return!cf.includes(N)})),b=h.filter(function(N){return u=N,!Gf.includes(N)}),f=Qi(b,1),p=f[0],g=p===void 0?null:p,x=u2(h),v=Q(Q({},f2(y)),{},{prefix:qi(g,{family:x})});return Q(Q(Q({},v),g2({values:a,family:x,styles:ma,config:ae,canonical:v,givenPrefix:u})),m2(d,u,v))}function m2(a,l,s){var d=s.prefix,u=s.iconName;if(a||!d||!u)return{prefix:d,iconName:u};var h=l==="fa"?Fm(u):{},y=Tn(d,u);return u=h.iconName||y||u,d=h.prefix||d,d==="far"&&!ma.far&&ma.fas&&!ae.autoFetchSvg&&(d="fas"),{prefix:d,iconName:u}}var p2=mm.filter(function(a){return a!==Xe||a!==ha}),h2=Object.keys(ol).filter(function(a){return a!==Xe}).map(function(a){return Object.keys(ol[a])}).flat();function g2(a){var l=a.values,s=a.family,d=a.canonical,u=a.givenPrefix,h=u===void 0?"":u,y=a.styles,b=y===void 0?{}:y,f=a.config,p=f===void 0?{}:f,g=s===ha,x=l.includes("fa-duotone")||l.includes("fad"),v=p.familyDefault==="duotone",N=d.prefix==="fad"||d.prefix==="fa-duotone";if(!g&&(x||v||N)&&(d.prefix="fad"),(l.includes("fa-brands")||l.includes("fab"))&&(d.prefix="fab"),!d.prefix&&p2.includes(s)){var A=Object.keys(b).find(function(_){return h2.includes(_)});if(A||p.autoFetchSvg){var F=L0.get(s).defaultShortPrefixId;d.prefix=F,d.iconName=Tn(d.prefix,d.iconName)||d.iconName}}return(d.prefix==="fa"||h==="fa")&&(d.prefix=yn()||"fas"),d}var x2=(function(){function a(){J1(this,a),this.definitions={}}return e0(a,[{key:"add",value:function(){for(var s=this,d=arguments.length,u=new Array(d),h=0;h<d;h++)u[h]=arguments[h];var y=u.reduce(this._pullDefinitions,{});Object.keys(y).forEach(function(b){s.definitions[b]=Q(Q({},s.definitions[b]||{}),y[b]),ml(b,y[b]);var f=Al[Xe][b];f&&ml(f,y[b]),Tm()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(s,d){var u=d.prefix&&d.iconName&&d.icon?{0:d}:d;return Object.keys(u).map(function(h){var y=u[h],b=y.prefix,f=y.iconName,p=y.icon,g=p[2];s[b]||(s[b]={}),g.length>0&&g.forEach(function(x){typeof x=="string"&&(s[b][x]=p)}),s[b][f]=p}),s}}])})(),df=[],mr={},hr={},v2=Object.keys(hr);function y2(a,l){var s=l.mixoutsTo;return df=a,mr={},Object.keys(hr).forEach(function(d){v2.indexOf(d)===-1&&delete hr[d]}),df.forEach(function(d){var u=d.mixout?d.mixout():{};if(Object.keys(u).forEach(function(y){typeof u[y]=="function"&&(s[y]=u[y]),Ui(u[y])==="object"&&Object.keys(u[y]).forEach(function(b){s[y]||(s[y]={}),s[y][b]=u[y][b]})}),d.hooks){var h=d.hooks();Object.keys(h).forEach(function(y){mr[y]||(mr[y]=[]),mr[y].push(h[y])})}d.provides&&d.provides(hr)}),s}function pl(a,l){for(var s=arguments.length,d=new Array(s>2?s-2:0),u=2;u<s;u++)d[u-2]=arguments[u];var h=mr[a]||[];return h.forEach(function(y){l=y.apply(null,[l].concat(d))}),l}function Rn(a){for(var l=arguments.length,s=new Array(l>1?l-1:0),d=1;d<l;d++)s[d-1]=arguments[d];var u=mr[a]||[];u.forEach(function(h){h.apply(null,s)})}function bn(){var a=arguments[0],l=Array.prototype.slice.call(arguments,1);return hr[a]?hr[a].apply(null,l):void 0}function hl(a){a.prefix==="fa"&&(a.prefix="fas");var l=a.iconName,s=a.prefix||yn();if(l)return l=Tn(s,l)||l,sf(Rm.definitions,s,l)||sf(zt.styles,s,l)}var Rm=new x2,b2=function(){ae.autoReplaceSvg=!1,ae.observeMutations=!1,Rn("noAuto")},w2={i2svg:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Kt?(Rn("beforeI2svg",l),bn("pseudoElements2svg",l),bn("i2svg",l)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=l.autoReplaceSvgRoot;ae.autoReplaceSvg===!1&&(ae.autoReplaceSvg=!0),ae.observeMutations=!0,a2(function(){k2({autoReplaceSvgRoot:s}),Rn("watch",l)})}},j2={icon:function(l){if(l===null)return null;if(Ui(l)==="object"&&l.prefix&&l.iconName)return{prefix:l.prefix,iconName:Tn(l.prefix,l.iconName)||l.iconName};if(Array.isArray(l)&&l.length===2){var s=l[1].indexOf("fa-")===0?l[1].slice(3):l[1],d=qi(l[0]);return{prefix:d,iconName:Tn(d,s)||s}}if(typeof l=="string"&&(l.indexOf("".concat(ae.cssPrefix,"-"))>-1||l.match(Wg))){var u=Gi(l.split(" "),{skipLookups:!0});return{prefix:u.prefix||yn(),iconName:Tn(u.prefix,u.iconName)||u.iconName}}if(typeof l=="string"){var h=yn();return{prefix:h,iconName:Tn(h,l)||l}}}},pt={noAuto:b2,config:ae,dom:w2,parse:j2,library:Rm,findIconDefinition:hl,toHtml:xa},k2=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=l.autoReplaceSvgRoot,d=s===void 0?Le:s;(Object.keys(zt.styles).length>0||ae.autoFetchSvg)&&Kt&&ae.autoReplaceSvg&&pt.dom.i2svg({node:d})};function Xi(a,l){return Object.defineProperty(a,"abstract",{get:l}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(d){return xa(d)})}}),Object.defineProperty(a,"node",{get:function(){if(Kt){var d=Le.createElement("div");return d.innerHTML=a.html,d.children}}}),a}function S2(a){var l=a.children,s=a.main,d=a.mask,u=a.attributes,h=a.styles,y=a.transform;if(_l(y)&&s.found&&!d.found){var b=s.width,f=s.height,p={x:b/f/2,y:.5};u.style=Yi(Q(Q({},h),{},{"transform-origin":"".concat(p.x+y.x/16,"em ").concat(p.y+y.y/16,"em")}))}return[{tag:"svg",attributes:u,children:l}]}function N2(a){var l=a.prefix,s=a.iconName,d=a.children,u=a.attributes,h=a.symbol,y=h===!0?"".concat(l,"-").concat(ae.cssPrefix,"-").concat(s):h;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Q(Q({},u),{},{id:y}),children:d}]}]}function C2(a){var l=["aria-label","aria-labelledby","title","role"];return l.some(function(s){return s in a})}function Tl(a){var l=a.icons,s=l.main,d=l.mask,u=a.prefix,h=a.iconName,y=a.transform,b=a.symbol,f=a.maskId,p=a.extra,g=a.watchable,x=g===void 0?!1:g,v=d.found?d:s,N=v.width,A=v.height,F=[ae.replacementClass,h?"".concat(ae.cssPrefix,"-").concat(h):""].filter(function(q){return p.classes.indexOf(q)===-1}).filter(function(q){return q!==""||!!q}).concat(p.classes).join(" "),_={children:[],attributes:Q(Q({},p.attributes),{},{"data-prefix":u,"data-icon":h,class:F,role:p.attributes.role||"img",viewBox:"0 0 ".concat(N," ").concat(A)})};!C2(p.attributes)&&!p.attributes["aria-hidden"]&&(_.attributes["aria-hidden"]="true"),x&&(_.attributes[On]="");var R=Q(Q({},_),{},{prefix:u,iconName:h,main:s,mask:d,maskId:f,transform:y,symbol:b,styles:Q({},p.styles)}),M=d.found&&s.found?bn("generateAbstractMask",R)||{children:[],attributes:{}}:bn("generateAbstractIcon",R)||{children:[],attributes:{}},D=M.children,V=M.attributes;return R.children=D,R.attributes=V,b?N2(R):S2(R)}function uf(a){var l=a.content,s=a.width,d=a.height,u=a.transform,h=a.extra,y=a.watchable,b=y===void 0?!1:y,f=Q(Q({},h.attributes),{},{class:h.classes.join(" ")});b&&(f[On]="");var p=Q({},h.styles);_l(u)&&(p.transform=t2({transform:u,width:s,height:d}),p["-webkit-transform"]=p.transform);var g=Yi(p);g.length>0&&(f.style=g);var x=[];return x.push({tag:"span",attributes:f,children:[l]}),x}function E2(a){var l=a.content,s=a.extra,d=Q(Q({},s.attributes),{},{class:s.classes.join(" ")}),u=Yi(s.styles);u.length>0&&(d.style=u);var h=[];return h.push({tag:"span",attributes:d,children:[l]}),h}var nl=zt.styles;function gl(a){var l=a[0],s=a[1],d=a.slice(4),u=Qi(d,1),h=u[0],y=null;return Array.isArray(h)?y={tag:"g",attributes:{class:"".concat(ae.cssPrefix,"-").concat(Zo.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ae.cssPrefix,"-").concat(Zo.SECONDARY),fill:"currentColor",d:h[0]}},{tag:"path",attributes:{class:"".concat(ae.cssPrefix,"-").concat(Zo.PRIMARY),fill:"currentColor",d:h[1]}}]}:y={tag:"path",attributes:{fill:"currentColor",d:h}},{found:!0,width:l,height:s,icon:y}}var z2={found:!1,width:512,height:512};function P2(a,l){!bm&&!ae.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(l,'" is missing.'))}function xl(a,l){var s=l;return l==="fa"&&ae.styleDefault!==null&&(l=yn()),new Promise(function(d,u){if(s==="fa"){var h=Fm(a)||{};a=h.iconName||a,l=h.prefix||l}if(a&&l&&nl[l]&&nl[l][a]){var y=nl[l][a];return d(gl(y))}P2(a,l),d(Q(Q({},z2),{},{icon:ae.showMissingIcons&&a?bn("missingIconAbstract")||{}:{}}))})}var ff=function(){},vl=ae.measurePerformance&&_i&&_i.mark&&_i.measure?_i:{mark:ff,measure:ff},ca='FA "7.2.0"',A2=function(l){return vl.mark("".concat(ca," ").concat(l," begins")),function(){return Dm(l)}},Dm=function(l){vl.mark("".concat(ca," ").concat(l," ends")),vl.measure("".concat(ca," ").concat(l),"".concat(ca," ").concat(l," begins"),"".concat(ca," ").concat(l," ends"))},Fl={begin:A2,end:Dm},Oi=function(){};function mf(a){var l=a.getAttribute?a.getAttribute(On):null;return typeof l=="string"}function L2(a){var l=a.getAttribute?a.getAttribute(zl):null,s=a.getAttribute?a.getAttribute(Pl):null;return l&&s}function _2(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(ae.replacementClass)}function M2(){if(ae.autoReplaceSvg===!0)return Ri.replace;var a=Ri[ae.autoReplaceSvg];return a||Ri.replace}function I2(a){return Le.createElementNS("http://www.w3.org/2000/svg",a)}function T2(a){return Le.createElement(a)}function Um(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=l.ceFn,d=s===void 0?a.tag==="svg"?I2:T2:s;if(typeof a=="string")return Le.createTextNode(a);var u=d(a.tag);Object.keys(a.attributes||[]).forEach(function(y){u.setAttribute(y,a.attributes[y])});var h=a.children||[];return h.forEach(function(y){u.appendChild(Um(y,{ceFn:d}))}),u}function F2(a){var l=" ".concat(a.outerHTML," ");return l="".concat(l,"Font Awesome fontawesome.com "),l}var Ri={replace:function(l){var s=l[0];if(s.parentNode)if(l[1].forEach(function(u){s.parentNode.insertBefore(Um(u),s)}),s.getAttribute(On)===null&&ae.keepOriginalSource){var d=Le.createComment(F2(s));s.parentNode.replaceChild(d,s)}else s.remove()},nest:function(l){var s=l[0],d=l[1];if(~Ll(s).indexOf(ae.replacementClass))return Ri.replace(l);var u=new RegExp("".concat(ae.cssPrefix,"-.*"));if(delete d[0].attributes.id,d[0].attributes.class){var h=d[0].attributes.class.split(" ").reduce(function(b,f){return f===ae.replacementClass||f.match(u)?b.toSvg.push(f):b.toNode.push(f),b},{toNode:[],toSvg:[]});d[0].attributes.class=h.toSvg.join(" "),h.toNode.length===0?s.removeAttribute("class"):s.setAttribute("class",h.toNode.join(" "))}var y=d.map(function(b){return xa(b)}).join(`
`);s.setAttribute(On,""),s.innerHTML=y}};function pf(a){a()}function $m(a,l){var s=typeof l=="function"?l:Oi;if(a.length===0)s();else{var d=pf;ae.mutateApproach===Dg&&(d=vn.requestAnimationFrame||pf),d(function(){var u=M2(),h=Fl.begin("mutate");a.map(u),h(),s()})}}var Ol=!1;function Wm(){Ol=!0}function yl(){Ol=!1}var Wi=null;function hf(a){if(Ju&&ae.observeMutations){var l=a.treeCallback,s=l===void 0?Oi:l,d=a.nodeCallback,u=d===void 0?Oi:d,h=a.pseudoElementsCallback,y=h===void 0?Oi:h,b=a.observeMutationsRoot,f=b===void 0?Le:b;Wi=new Ju(function(p){if(!Ol){var g=yn();vr(p).forEach(function(x){if(x.type==="childList"&&x.addedNodes.length>0&&!mf(x.addedNodes[0])&&(ae.searchPseudoElements&&y(x.target),s(x.target)),x.type==="attributes"&&x.target.parentNode&&ae.searchPseudoElements&&y([x.target],!0),x.type==="attributes"&&mf(x.target)&&~Vg.indexOf(x.attributeName))if(x.attributeName==="class"&&L2(x.target)){var v=Gi(Ll(x.target)),N=v.prefix,A=v.iconName;x.target.setAttribute(zl,N||g),A&&x.target.setAttribute(Pl,A)}else _2(x.target)&&u(x.target)})}}),Kt&&Wi.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function O2(){Wi&&Wi.disconnect()}function R2(a){var l=a.getAttribute("style"),s=[];return l&&(s=l.split(";").reduce(function(d,u){var h=u.split(":"),y=h[0],b=h.slice(1);return y&&b.length>0&&(d[y]=b.join(":").trim()),d},{})),s}function D2(a){var l=a.getAttribute("data-prefix"),s=a.getAttribute("data-icon"),d=a.innerText!==void 0?a.innerText.trim():"",u=Gi(Ll(a));return u.prefix||(u.prefix=yn()),l&&s&&(u.prefix=l,u.iconName=s),u.iconName&&u.prefix||(u.prefix&&d.length>0&&(u.iconName=c2(u.prefix,a.innerText)||Il(u.prefix,zm(a.innerText))),!u.iconName&&ae.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(u.iconName=a.firstChild.data)),u}function U2(a){var l=vr(a.attributes).reduce(function(s,d){return s.name!=="class"&&s.name!=="style"&&(s[d.name]=d.value),s},{});return l}function $2(){return{iconName:null,prefix:null,transform:Ot,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function gf(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},s=D2(a),d=s.iconName,u=s.prefix,h=s.rest,y=U2(a),b=pl("parseNodeAttributes",{},a),f=l.styleParser?R2(a):[];return Q({iconName:d,prefix:u,transform:Ot,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:h,styles:f,attributes:y}},b)}var W2=zt.styles;function Hm(a){var l=ae.autoReplaceSvg==="nest"?gf(a,{styleParser:!1}):gf(a);return~l.extra.classes.indexOf(jm)?bn("generateLayersText",a,l):bn("generateSvgReplacementMutation",a,l)}function H2(){return[].concat(Pt(pm),Pt(hm))}function xf(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Kt)return Promise.resolve();var s=Le.documentElement.classList,d=function(x){return s.add("".concat(tf,"-").concat(x))},u=function(x){return s.remove("".concat(tf,"-").concat(x))},h=ae.autoFetchSvg?H2():Gf.concat(Object.keys(W2));h.includes("fa")||h.push("fa");var y=[".".concat(jm,":not([").concat(On,"])")].concat(h.map(function(g){return".".concat(g,":not([").concat(On,"])")})).join(", ");if(y.length===0)return Promise.resolve();var b=[];try{b=vr(a.querySelectorAll(y))}catch{}if(b.length>0)d("pending"),u("complete");else return Promise.resolve();var f=Fl.begin("onTree"),p=b.reduce(function(g,x){try{var v=Hm(x);v&&g.push(v)}catch(N){bm||N.name==="MissingIcon"&&console.error(N)}return g},[]);return new Promise(function(g,x){Promise.all(p).then(function(v){$m(v,function(){d("active"),d("complete"),u("pending"),typeof l=="function"&&l(),f(),g()})}).catch(function(v){f(),x(v)})})}function B2(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Hm(a).then(function(s){s&&$m([s],l)})}function V2(a){return function(l){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},d=(l||{}).icon?l:hl(l||{}),u=s.mask;return u&&(u=(u||{}).icon?u:hl(u||{})),a(d,Q(Q({},s),{},{mask:u}))}}var Q2=function(l){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},d=s.transform,u=d===void 0?Ot:d,h=s.symbol,y=h===void 0?!1:h,b=s.mask,f=b===void 0?null:b,p=s.maskId,g=p===void 0?null:p,x=s.classes,v=x===void 0?[]:x,N=s.attributes,A=N===void 0?{}:N,F=s.styles,_=F===void 0?{}:F;if(l){var R=l.prefix,M=l.iconName,D=l.icon;return Xi(Q({type:"icon"},l),function(){return Rn("beforeDOMElementCreation",{iconDefinition:l,params:s}),Tl({icons:{main:gl(D),mask:f?gl(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:R,iconName:M,transform:Q(Q({},Ot),u),symbol:y,maskId:g,extra:{attributes:A,styles:_,classes:v}})})}},Y2={mixout:function(){return{icon:V2(Q2)}},hooks:function(){return{mutationObserverCallbacks:function(s){return s.treeCallback=xf,s.nodeCallback=B2,s}}},provides:function(l){l.i2svg=function(s){var d=s.node,u=d===void 0?Le:d,h=s.callback,y=h===void 0?function(){}:h;return xf(u,y)},l.generateSvgReplacementMutation=function(s,d){var u=d.iconName,h=d.prefix,y=d.transform,b=d.symbol,f=d.mask,p=d.maskId,g=d.extra;return new Promise(function(x,v){Promise.all([xl(u,h),f.iconName?xl(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var A=Qi(N,2),F=A[0],_=A[1];x([s,Tl({icons:{main:F,mask:_},prefix:h,iconName:u,transform:y,symbol:b,maskId:p,extra:g,watchable:!0})])}).catch(v)})},l.generateAbstractIcon=function(s){var d=s.children,u=s.attributes,h=s.main,y=s.transform,b=s.styles,f=Yi(b);f.length>0&&(u.style=f);var p;return _l(y)&&(p=bn("generateAbstractTransformGrouping",{main:h,transform:y,containerWidth:h.width,iconWidth:h.width})),d.push(p||h.icon),{children:d,attributes:u}}}},q2={mixout:function(){return{layer:function(s){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=d.classes,h=u===void 0?[]:u;return Xi({type:"layer"},function(){Rn("beforeDOMElementCreation",{assembler:s,params:d});var y=[];return s(function(b){Array.isArray(b)?b.map(function(f){y=y.concat(f.abstract)}):y=y.concat(b.abstract)}),[{tag:"span",attributes:{class:["".concat(ae.cssPrefix,"-layers")].concat(Pt(h)).join(" ")},children:y}]})}}}},G2={mixout:function(){return{counter:function(s){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};d.title;var u=d.classes,h=u===void 0?[]:u,y=d.attributes,b=y===void 0?{}:y,f=d.styles,p=f===void 0?{}:f;return Xi({type:"counter",content:s},function(){return Rn("beforeDOMElementCreation",{content:s,params:d}),E2({content:s.toString(),extra:{attributes:b,styles:p,classes:["".concat(ae.cssPrefix,"-layers-counter")].concat(Pt(h))}})})}}}},X2={mixout:function(){return{text:function(s){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=d.transform,h=u===void 0?Ot:u,y=d.classes,b=y===void 0?[]:y,f=d.attributes,p=f===void 0?{}:f,g=d.styles,x=g===void 0?{}:g;return Xi({type:"text",content:s},function(){return Rn("beforeDOMElementCreation",{content:s,params:d}),uf({content:s,transform:Q(Q({},Ot),h),extra:{attributes:p,styles:x,classes:["".concat(ae.cssPrefix,"-layers-text")].concat(Pt(b))}})})}}},provides:function(l){l.generateLayersText=function(s,d){var u=d.transform,h=d.extra,y=null,b=null;if(Yf){var f=parseInt(getComputedStyle(s).fontSize,10),p=s.getBoundingClientRect();y=p.width/f,b=p.height/f}return Promise.resolve([s,uf({content:s.innerHTML,width:y,height:b,transform:u,extra:h,watchable:!0})])}}},Bm=new RegExp('"',"ug"),vf=[1105920,1112319],yf=Q(Q(Q(Q({},{FontAwesome:{normal:"fas",400:"fas"}}),A0),Og),D0),bl=Object.keys(yf).reduce(function(a,l){return a[l.toLowerCase()]=yf[l],a},{}),K2=Object.keys(bl).reduce(function(a,l){var s=bl[l];return a[l]=s[900]||Pt(Object.entries(s))[0][1],a},{});function J2(a){var l=a.replace(Bm,"");return zm(Pt(l)[0]||"")}function Z2(a){var l=a.getPropertyValue("font-feature-settings").includes("ss01"),s=a.getPropertyValue("content"),d=s.replace(Bm,""),u=d.codePointAt(0),h=u>=vf[0]&&u<=vf[1],y=d.length===2?d[0]===d[1]:!1;return h||y||l}function ex(a,l){var s=a.replace(/^['"]|['"]$/g,"").toLowerCase(),d=parseInt(l),u=isNaN(d)?"normal":d;return(bl[s]||{})[u]||K2[s]}function bf(a,l){var s="".concat(Rg).concat(l.replace(":","-"));return new Promise(function(d,u){if(a.getAttribute(s)!==null)return d();var h=vr(a.children),y=h.filter(function(G){return G.getAttribute(cl)===l})[0],b=vn.getComputedStyle(a,l),f=b.getPropertyValue("font-family"),p=f.match(Hg),g=b.getPropertyValue("font-weight"),x=b.getPropertyValue("content");if(y&&!p)return a.removeChild(y),d();if(p&&x!=="none"&&x!==""){var v=b.getPropertyValue("content"),N=ex(f,g),A=J2(v),F=p[0].startsWith("FontAwesome"),_=Z2(b),R=Il(N,A),M=R;if(F){var D=d2(A);D.iconName&&D.prefix&&(R=D.iconName,N=D.prefix)}if(R&&!_&&(!y||y.getAttribute(zl)!==N||y.getAttribute(Pl)!==M)){a.setAttribute(s,M),y&&a.removeChild(y);var V=$2(),q=V.extra;q.attributes[cl]=l,xl(R,N).then(function(G){var re=Tl(Q(Q({},V),{},{icons:{main:G,mask:Om()},prefix:N,iconName:M,extra:q,watchable:!0})),de=Le.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?a.insertBefore(de,a.firstChild):a.appendChild(de),de.outerHTML=re.map(function(X){return xa(X)}).join(`
`),a.removeAttribute(s),d()}).catch(u)}else d()}else d()})}function tx(a){return Promise.all([bf(a,"::before"),bf(a,"::after")])}function nx(a){return a.parentNode!==document.head&&!~Ug.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(cl)&&(!a.parentNode||a.parentNode.tagName!=="svg")}var rx=function(l){return!!l&&ym.some(function(s){return l.includes(s)})},ax=function(l){if(!l)return[];var s=new Set,d=l.split(/,(?![^()]*\))/).map(function(f){return f.trim()});d=d.flatMap(function(f){return f.includes("(")?f:f.split(",").map(function(p){return p.trim()})});var u=Fi(d),h;try{for(u.s();!(h=u.n()).done;){var y=h.value;if(rx(y)){var b=ym.reduce(function(f,p){return f.replace(p,"")},y);b!==""&&b!=="*"&&s.add(b)}}}catch(f){u.e(f)}finally{u.f()}return s};function wf(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Kt){var s;if(l)s=a;else if(ae.searchPseudoElementsFullScan)s=a.querySelectorAll("*");else{var d=new Set,u=Fi(document.styleSheets),h;try{for(u.s();!(h=u.n()).done;){var y=h.value;try{var b=Fi(y.cssRules),f;try{for(b.s();!(f=b.n()).done;){var p=f.value,g=ax(p.selectorText),x=Fi(g),v;try{for(x.s();!(v=x.n()).done;){var N=v.value;d.add(N)}}catch(F){x.e(F)}finally{x.f()}}}catch(F){b.e(F)}finally{b.f()}}catch(F){ae.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(y.href," (").concat(F.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(F){u.e(F)}finally{u.f()}if(!d.size)return;var A=Array.from(d).join(", ");try{s=a.querySelectorAll(A)}catch{}}return new Promise(function(F,_){var R=vr(s).filter(nx).map(tx),M=Fl.begin("searchPseudoElements");Wm(),Promise.all(R).then(function(){M(),yl(),F()}).catch(function(){M(),yl(),_()})})}}var ix={hooks:function(){return{mutationObserverCallbacks:function(s){return s.pseudoElementsCallback=wf,s}}},provides:function(l){l.pseudoElements2svg=function(s){var d=s.node,u=d===void 0?Le:d;ae.searchPseudoElements&&wf(u)}}},jf=!1,sx={mixout:function(){return{dom:{unwatch:function(){Wm(),jf=!0}}}},hooks:function(){return{bootstrap:function(){hf(pl("mutationObserverCallbacks",{}))},noAuto:function(){O2()},watch:function(s){var d=s.observeMutationsRoot;jf?yl():hf(pl("mutationObserverCallbacks",{observeMutationsRoot:d}))}}}},kf=function(l){var s={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return l.toLowerCase().split(" ").reduce(function(d,u){var h=u.toLowerCase().split("-"),y=h[0],b=h.slice(1).join("-");if(y&&b==="h")return d.flipX=!0,d;if(y&&b==="v")return d.flipY=!0,d;if(b=parseFloat(b),isNaN(b))return d;switch(y){case"grow":d.size=d.size+b;break;case"shrink":d.size=d.size-b;break;case"left":d.x=d.x-b;break;case"right":d.x=d.x+b;break;case"up":d.y=d.y-b;break;case"down":d.y=d.y+b;break;case"rotate":d.rotate=d.rotate+b;break}return d},s)},ox={mixout:function(){return{parse:{transform:function(s){return kf(s)}}}},hooks:function(){return{parseNodeAttributes:function(s,d){var u=d.getAttribute("data-fa-transform");return u&&(s.transform=kf(u)),s}}},provides:function(l){l.generateAbstractTransformGrouping=function(s){var d=s.main,u=s.transform,h=s.containerWidth,y=s.iconWidth,b={transform:"translate(".concat(h/2," 256)")},f="translate(".concat(u.x*32,", ").concat(u.y*32,") "),p="scale(".concat(u.size/16*(u.flipX?-1:1),", ").concat(u.size/16*(u.flipY?-1:1),") "),g="rotate(".concat(u.rotate," 0 0)"),x={transform:"".concat(f," ").concat(p," ").concat(g)},v={transform:"translate(".concat(y/2*-1," -256)")},N={outer:b,inner:x,path:v};return{tag:"g",attributes:Q({},N.outer),children:[{tag:"g",attributes:Q({},N.inner),children:[{tag:d.icon.tag,children:d.icon.children,attributes:Q(Q({},d.icon.attributes),N.path)}]}]}}}},rl={x:0,y:0,width:"100%",height:"100%"};function Sf(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||l)&&(a.attributes.fill="black"),a}function lx(a){return a.tag==="g"?a.children:[a]}var cx={hooks:function(){return{parseNodeAttributes:function(s,d){var u=d.getAttribute("data-fa-mask"),h=u?Gi(u.split(" ").map(function(y){return y.trim()})):Om();return h.prefix||(h.prefix=yn()),s.mask=h,s.maskId=d.getAttribute("data-fa-mask-id"),s}}},provides:function(l){l.generateAbstractMask=function(s){var d=s.children,u=s.attributes,h=s.main,y=s.mask,b=s.maskId,f=s.transform,p=h.width,g=h.icon,x=y.width,v=y.icon,N=e2({transform:f,containerWidth:x,iconWidth:p}),A={tag:"rect",attributes:Q(Q({},rl),{},{fill:"white"})},F=g.children?{children:g.children.map(Sf)}:{},_={tag:"g",attributes:Q({},N.inner),children:[Sf(Q({tag:g.tag,attributes:Q(Q({},g.attributes),N.path)},F))]},R={tag:"g",attributes:Q({},N.outer),children:[_]},M="mask-".concat(b||rf()),D="clip-".concat(b||rf()),V={tag:"mask",attributes:Q(Q({},rl),{},{id:M,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,R]},q={tag:"defs",children:[{tag:"clipPath",attributes:{id:D},children:lx(v)},V]};return d.push(q,{tag:"rect",attributes:Q({fill:"currentColor","clip-path":"url(#".concat(D,")"),mask:"url(#".concat(M,")")},rl)}),{children:d,attributes:u}}}},dx={provides:function(l){var s=!1;vn.matchMedia&&(s=vn.matchMedia("(prefers-reduced-motion: reduce)").matches),l.missingIconAbstract=function(){var d=[],u={fill:"currentColor"},h={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};d.push({tag:"path",attributes:Q(Q({},u),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var y=Q(Q({},h),{},{attributeName:"opacity"}),b={tag:"circle",attributes:Q(Q({},u),{},{cx:"256",cy:"364",r:"28"}),children:[]};return s||b.children.push({tag:"animate",attributes:Q(Q({},h),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Q(Q({},y),{},{values:"1;0;1;1;0;1;"})}),d.push(b),d.push({tag:"path",attributes:Q(Q({},u),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:s?[]:[{tag:"animate",attributes:Q(Q({},y),{},{values:"1;0;0;0;0;1;"})}]}),s||d.push({tag:"path",attributes:Q(Q({},u),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Q(Q({},y),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:d}}}},ux={hooks:function(){return{parseNodeAttributes:function(s,d){var u=d.getAttribute("data-fa-symbol"),h=u===null?!1:u===""?!0:u;return s.symbol=h,s}}}},fx=[r2,Y2,q2,G2,X2,ix,sx,ox,cx,dx,ux];y2(fx,{mixoutsTo:pt});pt.noAuto;var xr=pt.config;pt.library;pt.dom;var Vm=pt.parse;pt.findIconDefinition;pt.toHtml;var mx=pt.icon;pt.layer;pt.text;pt.counter;function px(a){return a=a-0,a===a}function Qm(a){return px(a)?a:(a=a.replace(/[_-]+(.)?/g,(l,s)=>s?s.toUpperCase():""),a.charAt(0).toLowerCase()+a.slice(1))}var hx=(a,l)=>Fe.createElement("stop",{key:`${l}-${a.offset}`,offset:a.offset,stopColor:a.color,...a.opacity!==void 0&&{stopOpacity:a.opacity}});function gx(a){return a.charAt(0).toUpperCase()+a.slice(1)}var fr=new Map,xx=1e3;function vx(a){if(fr.has(a))return fr.get(a);const l={};let s=0;const d=a.length;for(;s<d;){const u=a.indexOf(";",s),h=u===-1?d:u,y=a.slice(s,h).trim();if(y){const b=y.indexOf(":");if(b>0){const f=y.slice(0,b).trim(),p=y.slice(b+1).trim();if(f&&p){const g=Qm(f);l[g.startsWith("webkit")?gx(g):g]=p}}}s=h+1}if(fr.size===xx){const u=fr.keys().next().value;u&&fr.delete(u)}return fr.set(a,l),l}function Ym(a,l,s={}){if(typeof l=="string")return l;const d=(l.children||[]).map(x=>{let v=x;return("fill"in s||s.gradientFill)&&x.tag==="path"&&"fill"in x.attributes&&(v={...x,attributes:{...x.attributes,fill:void 0}}),Ym(a,v)}),u=l.attributes||{},h={};for(const[x,v]of Object.entries(u))switch(!0){case x==="class":{h.className=v;break}case x==="style":{h.style=vx(String(v));break}case x.startsWith("aria-"):case x.startsWith("data-"):{h[x.toLowerCase()]=v;break}default:h[Qm(x)]=v}const{style:y,role:b,"aria-label":f,gradientFill:p,...g}=s;if(y&&(h.style=h.style?{...h.style,...y}:y),b&&(h.role=b),f&&(h["aria-label"]=f,h["aria-hidden"]="false"),p){h.fill=`url(#${p.id})`;const{type:x,stops:v=[],...N}=p;d.unshift(a(x==="linear"?"linearGradient":"radialGradient",{...N,id:p.id},v.map(hx)))}return a(l.tag,{...h,...g},...d)}var yx=Ym.bind(null,Fe.createElement),Nf=(a,l)=>{const s=z.useId();return a||(l?s:void 0)},bx=class{constructor(a="react-fontawesome"){this.enabled=!1;let l=!1;try{l=typeof process<"u"&&!1}catch{}this.scope=a,this.enabled=l}log(...a){this.enabled&&console.log(`[${this.scope}]`,...a)}warn(...a){this.enabled&&console.warn(`[${this.scope}]`,...a)}error(...a){this.enabled&&console.error(`[${this.scope}]`,...a)}},wx="searchPseudoElementsFullScan"in xr&&typeof xr.searchPseudoElementsFullScan=="boolean"?"7.0.0":"6.0.0",jx=Number.parseInt(wx)>=7,kx=()=>jx,fa="fa",Qt={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},Sx={left:"fa-pull-left",right:"fa-pull-right"},Nx={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},Cx={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},Yt={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function Ex(a){const l=xr.cssPrefix||xr.familyPrefix||fa;return l===fa?a:a.replace(new RegExp(String.raw`(?<=^|\s)${fa}-`,"g"),`${l}-`)}function zx(a){const{beat:l,fade:s,beatFade:d,bounce:u,shake:h,spin:y,spinPulse:b,spinReverse:f,pulse:p,fixedWidth:g,inverse:x,border:v,flip:N,size:A,rotation:F,pull:_,swapOpacity:R,rotateBy:M,widthAuto:D,className:V}=a,q=[];return V&&q.push(...V.split(" ")),l&&q.push(Qt.beat),s&&q.push(Qt.fade),d&&q.push(Qt.beatFade),u&&q.push(Qt.bounce),h&&q.push(Qt.shake),y&&q.push(Qt.spin),f&&q.push(Qt.spinReverse),b&&q.push(Qt.spinPulse),p&&q.push(Qt.pulse),g&&q.push(Yt.fixedWidth),x&&q.push(Yt.inverse),v&&q.push(Yt.border),N===!0&&q.push(Yt.flip),(N==="horizontal"||N==="both")&&q.push(Yt.flipHorizontal),(N==="vertical"||N==="both")&&q.push(Yt.flipVertical),A!=null&&q.push(Cx[A]),F!=null&&F!==0&&q.push(Nx[F]),_!=null&&q.push(Sx[_]),R&&q.push(Yt.swapOpacity),kx()?(M&&q.push(Yt.rotateBy),D&&q.push(Yt.widthAuto),(xr.cssPrefix||xr.familyPrefix||fa)===fa?q:q.map(Ex)):q}var Px=a=>typeof a=="object"&&"icon"in a&&!!a.icon;function Cf(a){if(a)return Px(a)?a:Vm.icon(a)}function Ax(a){return Object.keys(a)}var Ef=new bx("FontAwesomeIcon"),qm={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},Lx=new Set(Object.keys(qm)),H=Fe.forwardRef((a,l)=>{const s={...qm,...a},{icon:d,mask:u,symbol:h,title:y,titleId:b,maskId:f,transform:p}=s,g=Nf(f,!!u),x=Nf(b,!!y),v=Cf(d);if(!v)return Ef.error("Icon lookup is undefined",d),null;const N=zx(s),A=typeof p=="string"?Vm.transform(p):p,F=Cf(u),_=mx(v,{...N.length>0&&{classes:N},...A&&{transform:A},...F&&{mask:F},symbol:h,title:y,titleId:x,maskId:g});if(!_)return Ef.error("Could not find icon",v),null;const{abstract:R}=_,M={ref:l};for(const D of Ax(s))Lx.has(D)||(M[D]=s[D]);return yx(R[0],M)});H.displayName="FontAwesomeIcon";/*!
 * Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */var Rl={prefix:"fas",iconName:"rotate",icon:[512,512,[128260,"sync-alt"],"f2f1","M480.1 192l7.9 0c13.3 0 24-10.7 24-24l0-144c0-9.7-5.8-18.5-14.8-22.2S477.9 .2 471 7L419.3 58.8C375 22.1 318 0 256 0 127 0 20.3 95.4 2.6 219.5 .1 237 12.2 253.2 29.7 255.7s33.7-9.7 36.2-27.1C79.2 135.5 159.3 64 256 64 300.4 64 341.2 79 373.7 104.3L327 151c-6.9 6.9-8.9 17.2-5.2 26.2S334.3 192 344 192l136.1 0zm29.4 100.5c2.5-17.5-9.7-33.7-27.1-36.2s-33.7 9.7-36.2 27.1c-13.3 93-93.4 164.5-190.1 164.5-44.4 0-85.2-15-117.7-40.3L185 361c6.9-6.9 8.9-17.2 5.2-26.2S177.7 320 168 320L24 320c-13.3 0-24 10.7-24 24L0 488c0 9.7 5.8 18.5 14.8 22.2S34.1 511.8 41 505l51.8-51.8C137 489.9 194 512 256 512 385 512 491.7 416.6 509.4 292.5z"]},_x={prefix:"fas",iconName:"gears",icon:[640,512,["cogs"],"f085","M415.9 210.5c12.2-3.3 25 2.5 30.5 13.8L465 261.9c10.3 1.4 20.4 4.2 29.9 8.1l35-23.3c10.5-7 24.4-5.6 33.3 3.3l19.2 19.2c8.9 8.9 10.3 22.9 3.3 33.3l-23.3 34.9c1.9 4.7 3.6 9.6 5 14.7 1.4 5.1 2.3 10.1 3 15.2l37.7 18.6c11.3 5.6 17.1 18.4 13.8 30.5l-7 26.2c-3.3 12.1-14.6 20.3-27.2 19.5l-42-2.7c-6.3 8.1-13.6 15.6-21.9 22l2.7 41.9c.8 12.6-7.4 24-19.5 27.2l-26.2 7c-12.2 3.3-24.9-2.5-30.5-13.8l-18.6-37.6c-10.3-1.4-20.4-4.2-29.9-8.1l-35 23.3c-10.5 7-24.4 5.6-33.3-3.3l-19.2-19.2c-8.9-8.9-10.3-22.8-3.3-33.3l23.3-35c-1.9-4.7-3.6-9.6-5-14.7s-2.3-10.2-3-15.2l-37.7-18.6c-11.3-5.6-17-18.4-13.8-30.5l7-26.2c3.3-12.1 14.6-20.3 27.2-19.5l41.9 2.7c6.3-8.1 13.6-15.6 21.9-22l-2.7-41.8c-.8-12.6 7.4-24 19.5-27.2l26.2-7zM448.4 340a44 44 0 1 0 .1 88 44 44 0 1 0 -.1-88zM224.9-45.5l26.2 7c12.1 3.3 20.3 14.7 19.5 27.2l-2.7 41.8c8.3 6.4 15.6 13.8 21.9 22l42-2.7c12.5-.8 23.9 7.4 27.2 19.5l7 26.2c3.2 12.1-2.5 24.9-13.8 30.5l-37.7 18.6c-.7 5.1-1.7 10.2-3 15.2s-3.1 10-5 14.7l23.3 35c7 10.5 5.6 24.4-3.3 33.3L307.3 262c-8.9 8.9-22.8 10.3-33.3 3.3L239 242c-9.5 3.9-19.6 6.7-29.9 8.1l-18.6 37.6c-5.6 11.3-18.4 17-30.5 13.8l-26.2-7c-12.2-3.3-20.3-14.7-19.5-27.2l2.7-41.9c-8.3-6.4-15.6-13.8-21.9-22l-42 2.7c-12.5 .8-23.9-7.4-27.2-19.5l-7-26.2c-3.2-12.1 2.5-24.9 13.8-30.5l37.7-18.6c.7-5.1 1.7-10.1 3-15.2 1.4-5.1 3-10 5-14.7L55.1 46.5c-7-10.5-5.6-24.4 3.3-33.3L77.6-6c8.9-8.9 22.8-10.3 33.3-3.3l35 23.3c9.5-3.9 19.6-6.7 29.9-8.1l18.6-37.6c5.6-11.3 18.3-17 30.5-13.8zM192.4 84a44 44 0 1 0 0 88 44 44 0 1 0 0-88z"]},Mx={prefix:"fas",iconName:"file-arrow-down",icon:[384,512,["file-download"],"f56d","M0 64C0 28.7 28.7 0 64 0L213.5 0c17 0 33.3 6.7 45.3 18.7L365.3 125.3c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm208-5.5l0 93.5c0 13.3 10.7 24 24 24L325.5 176 208 58.5zM175 441c9.4 9.4 24.6 9.4 33.9 0l64-64c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-23 23 0-86.1c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 86.1-23-23c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64z"]},wl={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"]},Ix={prefix:"fas",iconName:"ban",icon:[512,512,[128683,"cancel"],"f05e","M367.2 412.5L99.5 144.8c-22.4 31.4-35.5 69.8-35.5 111.2 0 106 86 192 192 192 41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3c22.4-31.4 35.5-69.8 35.5-111.2 0-106-86-192-192-192-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"]},Hi={prefix:"fas",iconName:"key",icon:[512,512,[128273],"f084","M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0 160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"]},Gm={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6-46.8 43.5-78.1 95.4-93 131.1-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.7-8.4-1 10.9-.1 22.1 2.9 33.2 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-12.2-45.7-55.5-74.8-101.1-70.8 5.3 9.3 8.4 20.1 8.4 31.7z"]},yr={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"]},Tx={prefix:"fas",iconName:"clipboard-check",icon:[384,512,[],"f46c","M256 0c23.7 0 44.4 12.9 55.4 32l8.6 0c35.3 0 64 28.7 64 64l0 352c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l8.6 0C83.6 12.9 104.3 0 128 0L256 0zm26.9 212.6c-10.7-7.8-25.7-5.4-33.5 5.3l-85.6 117.7-26.5-27.4c-9.2-9.5-24.4-9.8-33.9-.6s-9.8 24.4-.6 33.9l46.4 48c4.9 5.1 11.8 7.8 18.9 7.3s13.6-4.1 17.8-9.8L288.2 246.1c7.8-10.7 5.4-25.7-5.3-33.5zM136 64c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L136 64z"]},va={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},Fx={prefix:"fas",iconName:"book",icon:[448,512,[128212],"f02d","M384 512L96 512c-53 0-96-43-96-96L0 96C0 43 43 0 96 0L400 0c26.5 0 48 21.5 48 48l0 288c0 20.9-13.4 38.7-32 45.3l0 66.7c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0zM96 384c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0 0-64-256 0zm32-232c0 13.3 10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0c-13.3 0-24 10.7-24 24zm24 72c-13.3 0-24 10.7-24 24s10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0z"]},Dl={prefix:"fas",iconName:"paper-plane",icon:[576,512,[61913],"f1d8","M536.4-26.3c9.8-3.5 20.6-1 28 6.3s9.8 18.2 6.3 28l-178 496.9c-5 13.9-18.1 23.1-32.8 23.1-14.2 0-27-8.6-32.3-21.7l-64.2-158c-4.5-11-2.5-23.6 5.2-32.6l94.5-112.4c5.1-6.1 4.7-15-.9-20.6s-14.6-6-20.6-.9L229.2 276.1c-9.1 7.6-21.6 9.6-32.6 5.2L38.1 216.8c-13.1-5.3-21.7-18.1-21.7-32.3 0-14.7 9.2-27.8 23.1-32.8l496.9-178z"]},Ox={prefix:"fas",iconName:"print",icon:[512,512,[128424,128438,9113],"f02f","M64 64C64 28.7 92.7 0 128 0L341.5 0c17 0 33.3 6.7 45.3 18.7l42.5 42.5c12 12 18.7 28.3 18.7 45.3l0 37.5-384 0 0-80zM0 256c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 96c0 17.7-14.3 32-32 32l-32 0 0 64c0 35.3-28.7 64-64 64l-256 0c-35.3 0-64-28.7-64-64l0-64-32 0c-17.7 0-32-14.3-32-32l0-96zM128 416l0 32 256 0 0-96-256 0 0 64zM456 272a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"]},Rx={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M320 16a104 104 0 1 1 0 208 104 104 0 1 1 0-208zM96 88a72 72 0 1 1 0 144 72 72 0 1 1 0-144zM0 416c0-70.7 57.3-128 128-128 12.8 0 25.2 1.9 36.9 5.4-32.9 36.8-52.9 85.4-52.9 138.6l0 16c0 11.4 2.4 22.2 6.7 32L32 480c-17.7 0-32-14.3-32-32l0-32zm521.3 64c4.3-9.8 6.7-20.6 6.7-32l0-16c0-53.2-20-101.8-52.9-138.6 11.7-3.5 24.1-5.4 36.9-5.4 70.7 0 128 57.3 128 128l0 32c0 17.7-14.3 32-32 32l-86.7 0zM472 160a72 72 0 1 1 144 0 72 72 0 1 1 -144 0zM160 432c0-88.4 71.6-160 160-160s160 71.6 160 160l0 16c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-16z"]},Dx={prefix:"fas",iconName:"certificate",icon:[576,512,[],"f0a3","M239.2-8c-6.1-6.2-15-8.7-23.4-6.4S200.9-5.6 198.8 2.8L183.5 63c-1.1 4.4-5.6 7-9.9 5.7L113.8 51.9c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l16.9 59.8c1.2 4.3-1.4 8.8-5.7 9.9L35.1 166.5c-8.4 2.1-15 8.7-17.3 17.1s.2 17.3 6.4 23.4l44.5 43.3c3.2 3.1 3.2 8.3 0 11.5L24.3 305.1c-6.2 6.1-8.7 15-6.4 23.4s8.9 14.9 17.3 17.1l60.2 15.3c4.4 1.1 7 5.6 5.7 9.9L84.2 430.5c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l59.8-16.9c4.3-1.2 8.8 1.4 9.9 5.7l15.3 60.2c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l43.3-44.5c3.1-3.2 8.3-3.2 11.5 0L337.3 520c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3L393.1 449c1.1-4.4 5.6-7 9.9-5.7l59.8 16.9c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-16.9-59.8c-1.2-4.3 1.4-8.8 5.7-9.9l60.2-15.3c8.4-2.1 15-8.7 17.3-17.1s-.2-17.4-6.4-23.4l-44.5-43.3c-3.2-3.1-3.2-8.3 0-11.5l44.5-43.3c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-60.2-15.3c-4.4-1.1-7-5.6-5.7-9.9l16.9-59.8c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1L403 68.8c-4.3 1.2-8.8-1.4-9.9-5.7L377.8 2.8c-2.1-8.4-8.7-15-17.1-17.3s-17.3 .2-23.4 6.4L294 36.5c-3.1 3.2-8.3 3.2-11.5 0L239.2-8z"]},Ux={prefix:"fas",iconName:"video",icon:[576,512,["video-camera"],"f03d","M96 64c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L96 64zM464 336l73.5 58.8c4.2 3.4 9.4 5.2 14.8 5.2 13.1 0 23.7-10.6 23.7-23.7l0-240.6c0-13.1-10.6-23.7-23.7-23.7-5.4 0-10.6 1.8-14.8 5.2L464 176 464 336z"]},Xm={prefix:"fas",iconName:"file-import",icon:[384,512,["arrow-right-to-file"],"f56f","M64 0C28.7 0 0 28.7 0 64l0 240 182.1 0-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l72 72c9.4 9.4 9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-182.1 0 0 96c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-277.5c0-17-6.7-33.3-18.7-45.3L258.7 18.7C246.7 6.7 230.5 0 213.5 0L64 0zM325.5 176L232 176c-13.3 0-24-10.7-24-24L208 58.5 325.5 176z"]},$x={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c9.4-9.4 24.6-9.4 33.9 0l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9z"]},Km={prefix:"fas",iconName:"box-open",icon:[640,512,[],"f49e","M560.3 237.2c10.4 11.8 28.3 14.4 41.8 5.5 14.7-9.8 18.7-29.7 8.9-44.4l-48-72c-2.8-4.2-6.6-7.7-11.1-10.2L351.4 4.7c-19.3-10.7-42.8-10.7-62.2 0L88.8 116c-5.4 3-9.7 7.4-12.6 12.8L27.7 218.7c-12.6 23.4-3.8 52.5 19.6 65.1l33 17.7 0 53.3c0 23 12.4 44.3 32.4 55.7l176 99.7c19.6 11.1 43.5 11.1 63.1 0l176-99.7c20.1-11.4 32.4-32.6 32.4-55.7l0-117.5zm-240-9.8L170.2 144 320.3 60.6 470.4 144 320.3 227.4zm-41.5 50.2l-21.3 46.2-165.8-88.8 25.4-47.2 161.7 89.8z"]},Jm={prefix:"fas",iconName:"sun",icon:[576,512,[9728],"f185","M288-32c8.4 0 16.3 4.4 20.6 11.7L364.1 72.3 468.9 46c8.2-2 16.9 .4 22.8 6.3S500 67 498 75.1l-26.3 104.7 92.7 55.5c7.2 4.3 11.7 12.2 11.7 20.6s-4.4 16.3-11.7 20.6L471.7 332.1 498 436.8c2 8.2-.4 16.9-6.3 22.8S477 468 468.9 466l-104.7-26.3-55.5 92.7c-4.3 7.2-12.2 11.7-20.6 11.7s-16.3-4.4-20.6-11.7L211.9 439.7 107.2 466c-8.2 2-16.8-.4-22.8-6.3S76 445 78 436.8l26.2-104.7-92.6-55.5C4.4 272.2 0 264.4 0 256s4.4-16.3 11.7-20.6L104.3 179.9 78 75.1c-2-8.2 .3-16.8 6.3-22.8S99 44 107.2 46l104.7 26.2 55.5-92.6 1.8-2.6c4.5-5.7 11.4-9.1 18.8-9.1zm0 144a144 144 0 1 0 0 288 144 144 0 1 0 0-288zm0 240a96 96 0 1 1 0-192 96 96 0 1 1 0 192z"]},Wx={prefix:"fas",iconName:"network-wired",icon:[576,512,[],"f6ff","M248 88l80 0 0 48-80 0 0-48zm-8-56c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l16 0 0 32-224 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0 0 32-16 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-16 0 0-32 192 0 0 32-16 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-16 0 0-32 96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-224 0 0-32 16 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-96 0zM448 376l8 0 0 48-80 0 0-48 72 0zm-256 0l8 0 0 48-80 0 0-48 72 0z"]},Hx={prefix:"fas",iconName:"file-circle-question",icon:[576,512,[],"e4ef","M96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l180 0c-22.7-31.5-36-70.2-36-112 0-100.6 77.4-183.2 176-191.3l0-38.1c0-17-6.7-33.3-18.7-45.3L290.7 18.7C278.7 6.7 262.5 0 245.5 0L96 0zM357.5 176L264 176c-13.3 0-24-10.7-24-24L240 58.5 357.5 176zM432 544a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm0-100a20 20 0 1 1 0 40 20 20 0 1 1 0-40zm0-100c-11.6 0-21.3 8.2-23.5 19.2-1.8 8.7-10.2 14.3-18.9 12.5s-14.3-10.2-12.5-18.9c5.2-25.6 27.8-44.8 54.9-44.8 30.9 0 56 25.1 56 56 0 19.8-11.7 37.8-29.8 45.9l-10.4 4.6c-1.2 7.7-7.8 13.5-15.8 13.5-8.8 0-16-7.2-16-16 0-11.2 6.6-21.3 16.8-25.9l12.4-5.5c6.6-2.9 10.8-9.4 10.8-16.6 0-13.3-10.7-24-24-24z"]},Bx={prefix:"fas",iconName:"cloud",icon:[576,512,[9729],"f0c2","M0 336c0 79.5 64.5 144 144 144l304 0c70.7 0 128-57.3 128-128 0-51.6-30.5-96.1-74.5-116.3 6.7-13.1 10.5-28 10.5-43.7 0-53-43-96-96-96-17.7 0-34.2 4.8-48.4 13.1-24.1-45.8-72.2-77.1-127.6-77.1-79.5 0-144 64.5-144 144 0 8 .7 15.9 1.9 23.5-56.9 19.2-97.9 73.1-97.9 136.5z"]},Ul={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"]},Vx={prefix:"fas",iconName:"circle-question",icon:[512,512,[62108,"question-circle"],"f059","M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm0-336c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},Zm={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M505 273c9.4-9.4 9.4-24.6 0-33.9L361 95c-6.9-6.9-17.2-8.9-26.2-5.2S320 102.3 320 112l0 80-112 0c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48l112 0 0 80c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2L505 273zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"]},Qx={prefix:"fas",iconName:"play",icon:[448,512,[9654],"f04b","M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"]},ep={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"]},Yx={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144,62470,"user-alt","user-large"],"f007","M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"]},tp={prefix:"fas",iconName:"gauge-high",icon:[512,512,[62461,"tachometer-alt","tachometer-alt-fast"],"f625","M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 416c35.3 0 64-28.7 64-64 0-16.2-6-31.1-16-42.3l69.5-138.9c5.9-11.9 1.1-26.3-10.7-32.2s-26.3-1.1-32.2 10.7L261.1 288.2c-1.7-.1-3.4-.2-5.1-.2-35.3 0-64 28.7-64 64s28.7 64 64 64zM176 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm352-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},qx={prefix:"fas",iconName:"arrow-right",icon:[512,512,[8594],"f061","M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},np={prefix:"fas",iconName:"file-lines",icon:[384,512,[128441,128462,61686,"file-alt","file-text"],"f15c","M0 64C0 28.7 28.7 0 64 0L213.5 0c17 0 33.3 6.7 45.3 18.7L365.3 125.3c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm208-5.5l0 93.5c0 13.3 10.7 24 24 24L325.5 176 208 58.5zM120 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"]},Gx={prefix:"fas",iconName:"file-invoice",icon:[384,512,[],"f570","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-277.5c0-17-6.7-33.3-18.7-45.3L258.7 18.7C246.7 6.7 230.5 0 213.5 0L64 0zM325.5 176L232 176c-13.3 0-24-10.7-24-24L208 58.5 325.5 176zM64 384l0-64c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 416c-17.7 0-32-14.3-32-32zM88 64l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24S74.7 64 88 64zm0 96l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]},rp={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zM374 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L221.1 315.2 169 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.8 7.5 18.8 7s13.4-4.1 17.5-9.8L379.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z"]},ap=rp,Bi={prefix:"fas",iconName:"moon",icon:[512,512,[127769,9214],"f186","M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z"]},ip={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"]},Xx={prefix:"fas",iconName:"inbox",icon:[512,512,[],"f01c","M91.8 32C59.9 32 32.9 55.4 28.4 86.9L.6 281.2c-.4 3-.6 6-.6 9.1L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-125.7c0-3-.2-6.1-.6-9.1L483.6 86.9C479.1 55.4 452.1 32 420.2 32L91.8 32zm0 64l328.5 0 27.4 192-59.9 0c-12.1 0-23.2 6.8-28.6 17.7l-14.3 28.6c-5.4 10.8-16.5 17.7-28.6 17.7l-120.4 0c-12.1 0-23.2-6.8-28.6-17.7l-14.3-28.6c-5.4-10.8-16.5-17.7-28.6-17.7L64.3 288 91.8 96z"]},Kx={prefix:"fas",iconName:"graduation-cap",icon:[576,512,[127891,"mortar-board"],"f19d","M48 195.8l209.2 86.1c9.8 4 20.2 6.1 30.8 6.1s21-2.1 30.8-6.1l242.4-99.8c9-3.7 14.8-12.4 14.8-22.1s-5.8-18.4-14.8-22.1L318.8 38.1C309 34.1 298.6 32 288 32s-21 2.1-30.8 6.1L14.8 137.9C5.8 141.6 0 150.3 0 160L0 456c0 13.3 10.7 24 24 24s24-10.7 24-24l0-260.2zm48 71.7L96 384c0 53 86 96 192 96s192-43 192-96l0-116.6-142.9 58.9c-15.6 6.4-32.2 9.7-49.1 9.7s-33.5-3.3-49.1-9.7L96 267.4z"]},jl={prefix:"fas",iconName:"lock",icon:[384,512,[128274],"f023","M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z"]},Jx={prefix:"fas",iconName:"rotate-left",icon:[512,512,["rotate-back","rotate-backward","undo-alt"],"f2ea","M24 192l144 0c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-46.7-46.7c75.3-58.6 184.3-53.3 253.5 15.9 75 75 75 196.5 0 271.5s-196.5 75-271.5 0c-10.2-10.2-19-21.3-26.4-33-9.5-14.9-29.3-19.3-44.2-9.8s-19.3 29.3-9.8 44.2C49.7 408.7 61.4 423.5 75 437 175 537 337 537 437 437S537 175 437 75C342.8-19.3 193.3-24.7 92.7 58.8L41 7C34.1 .2 23.8-1.9 14.8 1.8S0 14.3 0 24L0 168c0 13.3 10.7 24 24 24z"]},br={prefix:"fas",iconName:"award",icon:[448,512,[],"f559","M245.9-25.9c-13.4-8.2-30.3-8.2-43.7 0-24.4 14.9-39.5 18.9-68.1 18.3-15.7-.4-30.3 8.1-37.9 21.9-13.7 25.1-24.8 36.2-49.9 49.9-13.8 7.5-22.2 22.2-21.9 37.9 .7 28.6-3.4 43.7-18.3 68.1-8.2 13.4-8.2 30.3 0 43.7 14.9 24.4 18.9 39.5 18.3 68.1-.4 15.7 8.1 30.3 21.9 37.9 22.1 12.1 33.3 22.1 45.1 41.5L42.7 458.5c-5.9 11.9-1.1 26.3 10.7 32.2l86 43c11.5 5.7 25.5 1.4 31.7-9.8l52.8-95.1 52.8 95.1c6.2 11.2 20.2 15.6 31.7 9.8l86-43c11.9-5.9 16.7-20.3 10.7-32.2l-48.6-97.2c11.7-19.4 23-29.4 45.1-41.5 13.8-7.5 22.2-22.2 21.9-37.9-.7-28.6 3.4-43.7 18.3-68.1 8.2-13.4 8.2-30.3 0-43.7-14.9-24.4-18.9-39.5-18.3-68.1 .4-15.7-8.1-30.3-21.9-37.9-25.1-13.7-36.2-24.8-49.9-49.9-7.5-13.8-22.2-22.2-37.9-21.9-28.6 .7-43.7-3.4-68.1-18.3zM224 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"]},$l={prefix:"fas",iconName:"shield-halved",icon:[512,512,["shield-alt"],"f3ed","M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z"]},Wl={prefix:"fas",iconName:"arrow-left",icon:[512,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},Xt={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"]},sp={prefix:"fas",iconName:"eye-slash",icon:[576,512,[],"f070","M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM204.5 138.7c23.5-16.8 52.4-26.7 83.5-26.7 79.5 0 144 64.5 144 144 0 31.1-9.9 59.9-26.7 83.5l-34.7-34.7c12.7-21.4 17-47.7 10.1-73.7-13.7-51.2-66.4-81.6-117.6-67.9-8.6 2.3-16.7 5.7-24 10l-34.7-34.7zM325.3 395.1c-11.9 3.2-24.4 4.9-37.3 4.9-79.5 0-144-64.5-144-144 0-12.9 1.7-25.4 4.9-37.3L69.4 139.2c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6l-64.2-64.2z"]},Zx={prefix:"fas",iconName:"pen-nib",icon:[512,512,[10001],"f5ad","M368.5 18.3l-50.1 50.1 125.3 125.3 50.1-50.1c21.9-21.9 21.9-57.3 0-79.2L447.7 18.3c-21.9-21.9-57.3-21.9-79.2 0zM279.3 97.2l-.5 .1-144.1 43.2c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-2.9 8.7-1.9 18.2 2.5 26L161.7 316.4c-1.1-4-1.6-8.1-1.6-12.4 0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48c-4.3 0-8.5-.6-12.4-1.6L40.3 505.7c7.8 4.4 17.2 5.4 26 2.5l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1 .1-.5-135.5-135.5z"]},ev={prefix:"fas",iconName:"microchip",icon:[512,512,[],"f2db","M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c-35.3 0-64 28.7-64 64l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0c0 35.3 28.7 64 64 64l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40c35.3 0 64-28.7 64-64l40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0c0-35.3-28.7-64-64-64l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40zM160 128l192 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-192c0-17.7 14.3-32 32-32zm16 48l0 160 160 0 0-160-160 0z"]},tv={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"]},nv={prefix:"fas",iconName:"list-check",icon:[512,512,["tasks"],"f0ae","M133.8 36.3c10.9 7.6 13.5 22.6 5.9 33.4l-56 80c-4.1 5.8-10.5 9.5-17.6 10.1S52 158 47 153L7 113C-2.3 103.6-2.3 88.4 7 79S31.6 69.7 41 79l19.8 19.8 39.6-56.6c7.6-10.9 22.6-13.5 33.4-5.9zm0 160c10.9 7.6 13.5 22.6 5.9 33.4l-56 80c-4.1 5.8-10.5 9.5-17.6 10.1S52 318 47 313L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l19.8 19.8 39.6-56.6c7.6-10.9 22.6-13.5 33.4-5.9zM224 96c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32zM64 376a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"]},ya={prefix:"fas",iconName:"book-open",icon:[512,512,[128214,128366],"f518","M256 141.3l0 309.3 .5-.2C311.1 427.7 369.7 416 428.8 416l19.2 0 0-320-19.2 0c-42.2 0-84.1 8.4-123.1 24.6-16.8 7-33.4 13.9-49.7 20.7zM230.9 61.5L256 72 281.1 61.5C327.9 42 378.1 32 428.8 32L464 32c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-35.2 0c-50.7 0-100.9 10-147.7 29.5l-12.8 5.3c-7.9 3.3-16.7 3.3-24.6 0l-12.8-5.3C184.1 490 133.9 480 83.2 480L48 480c-26.5 0-48-21.5-48-48L0 80C0 53.5 21.5 32 48 32l35.2 0c50.7 0 100.9 10 147.7 29.5z"]},rv={prefix:"fas",iconName:"list-ul",icon:[512,512,["list-dots"],"f0ca","M48 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM48 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM96 256a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]},op={prefix:"fas",iconName:"layer-group",icon:[512,512,[],"f5fd","M232.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 149.8C5.4 145.8 0 137.3 0 128s5.4-17.9 13.9-21.8L232.5 5.2zM48.1 218.4l164.3 75.9c27.7 12.8 59.6 12.8 87.3 0l164.3-75.9 34.1 15.8c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 277.8C5.4 273.8 0 265.3 0 256s5.4-17.9 13.9-21.8l34.1-15.8zM13.9 362.2l34.1-15.8 164.3 75.9c27.7 12.8 59.6 12.8 87.3 0l164.3-75.9 34.1 15.8c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 405.8C5.4 401.8 0 393.3 0 384s5.4-17.9 13.9-21.8z"]},lp={prefix:"fas",iconName:"cart-shopping",icon:[640,512,[128722,"shopping-cart"],"f07a","M24-16C10.7-16 0-5.3 0 8S10.7 32 24 32l45.3 0c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1L456 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-255.9 0c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3 303.6 0c30.8 0 57.2-21.9 62.9-52.2L568.9 69.9C572.6 50.2 557.5 32 537.4 32l-412.7 0-.4-2c-4.8-26.6-28-46-55.1-46L24-16zM208 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm224 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]};/*!
 * Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */var av={prefix:"fab",iconName:"facebook-f",icon:[320,512,[],"f39e","M80 299.3l0 212.7 116 0 0-212.7 86.5 0 18-97.8-104.5 0 0-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2l0-88.7C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4l0 42.1-66 0 0 97.8 66 0z"]},iv={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z"]},sv={prefix:"fab",iconName:"tiktok",icon:[448,512,[],"e07b","M448.5 209.9c-44 .1-87-13.6-122.8-39.2l0 178.7c0 33.1-10.1 65.4-29 92.6s-45.6 48-76.6 59.6-64.8 13.5-96.9 5.3-60.9-25.9-82.7-50.8-35.3-56-39-88.9 2.9-66.1 18.6-95.2 40-52.7 69.6-67.7 62.9-20.5 95.7-16l0 89.9c-15-4.7-31.1-4.6-46 .4s-27.9 14.6-37 27.3-14 28.1-13.9 43.9 5.2 31 14.5 43.7 22.4 22.1 37.4 26.9 31.1 4.8 46-.1 28-14.4 37.2-27.1 14.2-28.1 14.2-43.8l0-349.4 88 0c-.1 7.4 .6 14.9 1.9 22.2 3.1 16.3 9.4 31.9 18.7 45.7s21.3 25.6 35.2 34.6c19.9 13.1 43.2 20.1 67 20.1l0 87.4z"]},ov={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},lv={prefix:"fab",iconName:"whatsapp",icon:[448,512,[],"f232","M380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480 117.7 449.1c32.4 17.7 68.9 27 106.1 27l.1 0c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zM325.1 300.5c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z"]},cv={prefix:"fab",iconName:"linkedin-in",icon:[448,512,[],"f0e1","M100.3 448l-92.9 0 0-299.1 92.9 0 0 299.1zM53.8 108.1C24.1 108.1 0 83.5 0 53.8 0 39.5 5.7 25.9 15.8 15.8s23.8-15.8 38-15.8 27.9 5.7 38 15.8 15.8 23.8 15.8 38c0 29.7-24.1 54.3-53.8 54.3zM447.9 448l-92.7 0 0-145.6c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7l0 148.1-92.8 0 0-299.1 89.1 0 0 40.8 1.3 0c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3l0 164.3-.1 0z"]},dv={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103l0-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"]};function uv({goTo:a}){const l=()=>{window.open("https://wa.me/250799579034?text=Hello%20Stekora%20Tech","_blank")};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"floating-actions",children:[r.jsxs("button",{className:"fab-button",onClick:()=>a("/apply-services"),children:[r.jsx("span",{className:"icon",children:r.jsx(H,{icon:Gx})}),r.jsx("span",{children:"Apply for Services"})]}),r.jsxs("button",{className:"fab-button secondary",onClick:()=>a("/study"),children:[r.jsx("span",{className:"icon",children:r.jsx(H,{icon:Fx})}),r.jsx("span",{children:"Apply for Study"})]}),r.jsx("button",{className:"fab-button whatsapp",onClick:l,"aria-label":"WhatsApp",children:r.jsx("span",{className:"icon",children:r.jsx(H,{icon:lv})})})]})]})}const fv="/assets/logoo-CbfLrW-F.png";function mv(){return r.jsxs(r.Fragment,{children:[r.jsxs("footer",{className:"footer",children:[r.jsxs("div",{className:"footer-container",children:[r.jsxs("div",{className:"footer-col",children:[r.jsxs("div",{className:"logo-area",children:[r.jsx("img",{src:fv,alt:"Stekora Tech logo",className:"footer-logo"}),r.jsxs("div",{children:[r.jsx("div",{className:"footer-brand",children:"Stekora Tech"}),r.jsx("div",{className:"tag",children:"where ideas become digital solutions"})]})]}),r.jsx("p",{className:"desc",children:"Stekora Tech provides modern IT services from custom web applications to automation and embedded systems helping businesses turn technical ideas into reliable digital products."}),r.jsxs("div",{className:"social",children:[r.jsx("span",{children:r.jsx(H,{icon:av})}),r.jsx("span",{children:r.jsx(H,{icon:dv})}),r.jsx("a",{href:"https://instagram.com/stekoratech",target:"_blank",rel:"noreferrer",children:r.jsx(H,{icon:ov})}),r.jsx("a",{href:"https://www.tiktok.com/stekoratech",target:"_blank",rel:"noreferrer",children:r.jsx(H,{icon:sv})}),r.jsx("span",{children:r.jsx(H,{icon:cv})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h3",{children:"Contact Us"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx(H,{icon:ip})," Phone: ",r.jsx("span",{children:"+250 799579034"})]}),r.jsxs("li",{children:[r.jsx(H,{icon:wl})," Email: ",r.jsx("span",{children:"stekoratech@gmail.com"})]}),r.jsxs("li",{children:[r.jsx(H,{icon:tv})," Location: ",r.jsx("span",{children:"Musanze, Rwanda"})]}),r.jsxs("li",{className:"social-text",children:["Social: ",r.jsx("span",{children:"LinkedIn, GitHub, Instagram"})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h3",{children:"Support"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Help & FAQs"}),r.jsx("li",{children:"Project Support"}),r.jsx("li",{children:"Service Level & Maintenance"}),r.jsx("li",{children:"Contact Support: support@stekoratech.com"})]})]})]}),r.jsxs("div",{className:"copyright",children:["© ",new Date().getFullYear()," Stekora Tech. All rights reserved."]})]}),r.jsx("style",{children:`
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
          color: black;
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
          color: #f59e0b;
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
      `})]})}const pv="/assets/logo-Cwf0LtIx.png";function hv({route:a,goTo:l,menuOpen:s,setMenuOpen:d}){const[u,h]=z.useState(!!(localStorage.getItem("studentToken")||localStorage.getItem("token"))),y=()=>d(!1),b=g=>{l(g),y()},f=()=>{localStorage.removeItem("studentToken"),localStorage.removeItem("studentName"),localStorage.removeItem("studentCourseName"),localStorage.removeItem("token"),h(!1),b("/")},p=[["/","Home"],["/services","Services"],["/study","Courses"],["/jobs","Jobs"],["/about","About"],["/contact","Contact"]];return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        :root {
          --richblue: #003366;
          --palegray: #f5f5f5;
        }

        .header {
          width: 100%;
          background-color: var(--palegray);
          border-bottom: 1px solid var(--richblue);
          position: sticky;
          top: 0;
          z-index: 50;
          font-family: 'Inter', sans-serif;
        }

        .header-container {
          max-width: 72rem;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1rem;
          position: relative;
        }

        .logo-button {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .logo-button img {
          height: 3.25rem;
          width: 3.25rem;
          object-fit: contain;
          border-radius: 0.5rem;
          border: 1px solid var(--richblue);
          background: var(--palegray);
        }

        .brand-name {
          font-weight: 600;
          color: var(--richblue);
          text-align: left;
        }

        .brand-tagline {
          font-size: 10px;
          color: var(--richblue);
        }

        .header-links {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .header-links button {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--richblue);
          text-decoration: none;
          padding: 0.25rem 0.5rem;
          background: transparent;
          border: none;
          cursor: pointer;
        }

        .header-links button.active {
          border-bottom: 2px solid var(--richblue);
        }

        .header-links .shop-link {
          font-weight: 600;
          border: 1px solid var(--richblue);
          padding: 0.35rem 0.75rem;
          border-radius: 999px;
        }

        .header-links .shop-link.active {
          border-bottom: 1px solid var(--richblue);
          background: rgba(0, 51, 102, 0.06);
        }

        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          font-size: 1.6rem;
          cursor: pointer;
          color: var(--richblue);
        }

        @media (max-width: 768px) {
          .mobile-menu-button {
            display: block;
          }

          .header-links {
            display: ${s?"flex":"none"};
            flex-direction: column;
            align-items: flex-start;
            position: absolute;
            top: 100%;
            right: 1rem;
            background: var(--palegray);
            border: 1px solid var(--richblue);
            border-radius: 0.75rem;
            padding: 0.75rem;
            width: 220px;
            gap: 0.75rem;
          }

          .header-links button {
            width: 100%;
            text-align: left;
          }
        }
      `}),r.jsx("header",{className:"header",children:r.jsxs("div",{className:"header-container",children:[r.jsxs("button",{className:"logo-button",onClick:()=>b("/"),children:[r.jsx("img",{src:pv,alt:"Stekora Tech logo"}),r.jsxs("div",{children:[r.jsx("div",{className:"brand-name",children:"Stekora Tech"}),r.jsx("div",{className:"brand-tagline",children:"where ideas become digital solutions"})]})]}),r.jsx("button",{className:"mobile-menu-button",onClick:()=>d(!s),children:s?"✕":"☰"}),r.jsxs("nav",{className:"header-links",children:[p.map(([g,x])=>r.jsx("button",{className:a===g?"active":"",onClick:()=>b(g),children:x},g)),r.jsx("button",{className:`shop-link ${a==="/shop"?"active":""}`,onClick:()=>b("/shop"),children:"Shop"}),u?r.jsx("button",{className:"shop-link",onClick:f,children:"Logout"}):r.jsx("button",{className:`shop-link ${a==="/login"?"active":""}`,onClick:()=>b("/login"),children:"Login"})]})]})})]})}function gv({route:a,goTo:l,menuOpen:s,setMenuOpen:d,children:u}){return r.jsxs(r.Fragment,{children:[r.jsx(hv,{route:a,goTo:l,menuOpen:s,setMenuOpen:d}),u,r.jsx(mv,{goTo:l}),r.jsx(uv,{goTo:l})]})}const xv="/assets/code-yjPexsHE.jpeg",vv="/assets/crestline-CJx3iG0J.png",yv=[{name:"Steven",role:"CEO & Founder",bio:"Leads overall vision, projects and partnerships.",photo:""},{name:"Tabitha",role:"Chief Technology Officer",bio:"Oversees technology choices and engineering quality.",photo:""},{name:"Stekora Team",role:"Developers & Mentors",bio:"Collaborate on client work and student projects.",photo:""}],bv=[{name:"Code Rwanda Tech",logo:xv,website:"https://coderwanda.net.rw/"},{name:"Crestline Journeys",logo:vv,website:"https://www.crestjourneys.com/"},{name:"Nadev Solution",icon:"👤",website:"https://stekoratech.com/#/about"}];function wv(){return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
          font-size: 2.2rem;
          color: #9ca3af;
          background: #f8fafc;
          overflow: hidden;
        }

        .team-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
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
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
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
          font-size: 1.2rem;
          overflow: hidden;
          flex-shrink: 0;
        }

        .partner-icon img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .partner-name {
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 0.85rem;
          font-weight: 700;
          color: #4b5563;
        }

        .external-icon {
          font-size: 0.85rem;
          color: #9ca3af;
        }

        .partner-card:hover .partner-name,
        .partner-card:hover .external-icon {
          color: var(--richblue);
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
      `}),r.jsx("div",{className:"about-page",children:r.jsxs("div",{className:"about-container",children:[r.jsxs("div",{className:"about-top",children:[r.jsxs("div",{className:"about-box",children:[r.jsx("h3",{children:"Our Vision"}),r.jsx("p",{children:"To be a reliable technology partner to our clients, delivering modern digital solutions for both local and international needs."})]}),r.jsxs("div",{className:"about-box",children:[r.jsx("h3",{children:"Our Mission"}),r.jsx("p",{children:"To solve business challenges with innovative software, embedded systems and research while empowering young talent through practical innovation and mentorship."})]}),r.jsxs("div",{className:"about-box",children:[r.jsx("h3",{children:"Strategic Driving Lines"}),r.jsx("p",{children:"Continuous quality improvement, strong customer support and partnerships that help us deliver reliable products and services to every client we serve."})]})]}),r.jsxs("section",{className:"team-section",children:[r.jsx("h2",{className:"team-title",children:"Our Awesome Team Of Engineers & Staff"}),r.jsx("p",{className:"team-sub",children:"Stekora Tech works with skilled professionals and partners to deliver software and electronics solutions in Rwanda and beyond."}),r.jsx("div",{className:"team-grid",children:yv.map(a=>r.jsxs("div",{className:"team-card",children:[r.jsx("div",{className:"team-avatar",children:a.photo?r.jsx("img",{src:a.photo,alt:a.name}):r.jsx("span",{children:"👤"})}),r.jsx("div",{className:"team-name",children:a.name}),r.jsx("div",{className:"team-role",children:a.role}),r.jsx("div",{className:"team-bio",children:a.bio})]},a.name))}),r.jsxs("div",{className:"partners-strip",children:[r.jsx("div",{className:"partners-label",children:"Our Partners"}),r.jsx("div",{className:"partners-logos",children:bv.map(a=>r.jsxs("a",{className:"partner-card",href:a.website,target:"_blank",rel:"noopener noreferrer","aria-label":`Visit ${a.name} website`,children:[r.jsx("div",{className:"partner-icon",children:a.logo?r.jsx("img",{src:a.logo,alt:a.name}):r.jsx("span",{children:a.icon})}),r.jsx("span",{className:"partner-name",children:a.name}),r.jsx("span",{className:"external-icon",children:"↗"})]},a.name))})]})]})]})})]})}class ba{constructor(l=0,s="Network Error"){this.status=l,this.text=s}}const jv=()=>{if(!(typeof localStorage>"u"))return{get:a=>Promise.resolve(localStorage.getItem(a)),set:(a,l)=>Promise.resolve(localStorage.setItem(a,l)),remove:a=>Promise.resolve(localStorage.removeItem(a))}},Ge={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:jv()},Hl=a=>a?typeof a=="string"?{publicKey:a}:a.toString()==="[object Object]"?a:{}:{},kv=(a,l="https://api.emailjs.com")=>{if(!a)return;const s=Hl(a);Ge.publicKey=s.publicKey,Ge.blockHeadless=s.blockHeadless,Ge.storageProvider=s.storageProvider,Ge.blockList=s.blockList,Ge.limitRate=s.limitRate,Ge.origin=s.origin||l},cp=async(a,l,s={})=>{const d=await fetch(Ge.origin+a,{method:"POST",headers:s,body:l}),u=await d.text(),h=new ba(d.status,u);if(d.ok)return h;throw h},dp=(a,l,s)=>{if(!a||typeof a!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!l||typeof l!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s||typeof s!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},Sv=a=>{if(a&&a.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},up=a=>a.webdriver||!a.languages||a.languages.length===0,fp=()=>new ba(451,"Unavailable For Headless Browser"),Nv=(a,l)=>{if(!Array.isArray(a))throw"The BlockList list has to be an array";if(typeof l!="string")throw"The BlockList watchVariable has to be a string"},Cv=a=>{var l;return!((l=a.list)!=null&&l.length)||!a.watchVariable},Ev=(a,l)=>a instanceof FormData?a.get(l):a[l],mp=(a,l)=>{if(Cv(a))return!1;Nv(a.list,a.watchVariable);const s=Ev(l,a.watchVariable);return typeof s!="string"?!1:a.list.includes(s)},pp=()=>new ba(403,"Forbidden"),zv=(a,l)=>{if(typeof a!="number"||a<0)throw"The LimitRate throttle has to be a positive number";if(l&&typeof l!="string")throw"The LimitRate ID has to be a non-empty string"},Pv=async(a,l,s)=>{const d=Number(await s.get(a)||0);return l-Date.now()+d},hp=async(a,l,s)=>{if(!l.throttle||!s)return!1;zv(l.throttle,l.id);const d=l.id||a;return await Pv(d,l.throttle,s)>0?!0:(await s.set(d,Date.now().toString()),!1)},gp=()=>new ba(429,"Too Many Requests"),Av=async(a,l,s,d)=>{const u=Hl(d),h=u.publicKey||Ge.publicKey,y=u.blockHeadless||Ge.blockHeadless,b=u.storageProvider||Ge.storageProvider,f={...Ge.blockList,...u.blockList},p={...Ge.limitRate,...u.limitRate};return y&&up(navigator)?Promise.reject(fp()):(dp(h,a,l),Sv(s),s&&mp(f,s)?Promise.reject(pp()):await hp(location.pathname,p,b)?Promise.reject(gp()):cp("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:h,service_id:a,template_id:l,template_params:s}),{"Content-type":"application/json"}))},Lv=a=>{if(!a||a.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},_v=a=>typeof a=="string"?document.querySelector(a):a,Mv=async(a,l,s,d)=>{const u=Hl(d),h=u.publicKey||Ge.publicKey,y=u.blockHeadless||Ge.blockHeadless,b=Ge.storageProvider||u.storageProvider,f={...Ge.blockList,...u.blockList},p={...Ge.limitRate,...u.limitRate};if(y&&up(navigator))return Promise.reject(fp());const g=_v(s);dp(h,a,l),Lv(g);const x=new FormData(g);return mp(f,x)?Promise.reject(pp()):await hp(location.pathname,p,b)?Promise.reject(gp()):(x.append("lib_version","4.4.1"),x.append("service_id",a),x.append("template_id",l),x.append("user_id",h),cp("/api/v1.0/email/send-form",x))},zf={init:kv,send:Av,sendForm:Mv,EmailJSResponseStatus:ba},Pf="service_5vr8sqf",Iv="template_79mv8j5",Af="template_p22fgwk",Lf="tpobsHJa0Mf-RZHrl",Tv=a=>new Promise(l=>window.setTimeout(l,a));function Fv(){const[a,l]=z.useState({name:"",email:"",phone:"",service:"",message:""}),[s,d]=z.useState(!1),[u,h]=z.useState({type:"",message:""}),y=f=>{l({...a,[f.target.name]:f.target.value})},b=async f=>{f.preventDefault(),h({type:"",message:""}),d(!0);try{const p=`ST-${Date.now().toString(36).toUpperCase()}`,g=new Date().toLocaleString("en-RW",{dateStyle:"medium",timeStyle:"short"}),x={name:a.name.trim(),email:a.email.trim(),to_email:a.email.trim(),customer_email:a.email.trim(),customer_name:a.name.trim(),phone:a.phone.trim()||"Not provided",service:a.service,message:a.message.trim(),reply_to:a.email.trim(),request_id:p,submitted_date:g};await zf.send(Pf,Iv,x,{publicKey:Lf});let v=null;try{await Tv(2e3),await zf.send(Pf,Af,x,{publicKey:Lf})}catch(N){v=N,console.error("EmailJS customer confirmation failed",N)}if(v){const N=(v==null?void 0:v.text)||(v==null?void 0:v.message)||"the confirmation template was rejected";h({type:"warning",message:`Your request reached Stekora Tech, but customer template ${Af} failed: ${N}`})}else h({type:"success",message:"Thank you! Your request was sent and a confirmation email is on its way."});l({name:"",email:"",phone:"",service:"",message:""})}catch(p){console.error("EmailJS contact request failed",p);const g=(p==null?void 0:p.text)||(p==null?void 0:p.message)||"EmailJS rejected the request. Check the service and template settings.";h({type:"error",message:`We could not send your request: ${g}`})}finally{d(!1)}};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
          background: var(--richblue);
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
          border: 1px solid #facc15;
          background: #fef9c3;
          color: #854d0e;
        }

        .badge {
          display: inline-block;
          background: var(--yellow);
          color: #000;
          font-size: 0.7rem;
          padding: 0.25rem 0.6rem;
          border-radius: 999px;
          font-weight: 600;
          margin-bottom: 0.6rem;
        }
      `}),r.jsx("div",{className:"contact-page",children:r.jsxs("div",{className:"contact-container",children:[r.jsxs("div",{className:"contact-header",children:[r.jsx("span",{className:"badge",children:"Contact Us"}),r.jsx("h1",{children:"Request a Project / Job"}),r.jsx("p",{children:"Need a website, mobile app, IoT system or custom IT solution? Fill in the form below and our team will get back to you."})]}),r.jsx("div",{className:"contact-card",children:r.jsxs("form",{onSubmit:b,children:[r.jsxs("div",{className:"form-grid two",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Full Name"}),r.jsx("input",{type:"text",name:"name",required:!0,value:a.name,onChange:y,placeholder:"enter your full name"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Email Address"}),r.jsx("input",{type:"email",name:"email",required:!0,value:a.email,onChange:y,placeholder:"enter your email address"})]})]}),r.jsxs("div",{className:"form-grid two",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Phone"}),r.jsx("input",{type:"text",name:"phone",value:a.phone,onChange:y,placeholder:"enter your phone number"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Service Needed"}),r.jsxs("select",{name:"service",required:!0,value:a.service,onChange:y,children:[r.jsx("option",{value:"",children:"Select a service"}),r.jsx("option",{children:"Website Development"}),r.jsx("option",{children:"Mobile App Development"}),r.jsx("option",{children:"IoT / Embedded Systems"}),r.jsx("option",{children:"Automation & Integration"}),r.jsx("option",{children:"Networking / CCTV"}),r.jsx("option",{children:"Graphic Design"}),r.jsx("option",{children:"Other services"})]})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Write a message"}),r.jsx("textarea",{name:"message",placeholder:"write us a message...",required:!0,value:a.message,onChange:y})]}),r.jsxs("button",{className:"submit-btn",type:"submit",disabled:s,children:[r.jsx(H,{icon:Dl}),s?"Sending...":"Submit Request"]}),u.message&&r.jsx("p",{className:`contact-status ${u.type}`,role:"status",children:u.message})]})})]})})]})}const Ov="https://stekoratech.com/api";async function be(a,l={}){const s=l.body instanceof FormData,d=await fetch(`${Ov}${a}`,{...l,headers:s?{...l.headers}:{"Content-Type":"application/json",...l.headers}});if(!d.ok){const u=await d.json().catch(()=>({}));throw new Error(u.message||`API request failed: ${d.status}`)}return d.json()}function wr(){return be("/courses")}function Fn(a){return be(`/courses/${a}/modules`)}function Rv(a){return be("/courses",{method:"POST",body:a instanceof FormData?a:JSON.stringify(a)})}function Dv(a,l){return be(`/courses/${a}`,{method:"PUT",body:l instanceof FormData?l:JSON.stringify(l)})}function Uv(a){return be(`/courses/${a}`,{method:"DELETE"})}function xp(a,l){return be(`/courses/${a}/modules`,{method:"POST",body:JSON.stringify(l)})}function vp(a){return be(`/courses/modules/${a}`,{method:"DELETE"})}function $v(a){return be(`/courses/modules/${a}/materials`)}function Wv(a,l){return be(`/courses/modules/${a}/materials`,{method:"POST",body:l instanceof FormData?l:JSON.stringify(l)})}function Hv(a,l){return be(`/courses/materials/${a}`,{method:"PUT",body:l instanceof FormData?l:JSON.stringify(l)})}function Bv(a){return be(`/courses/materials/${a}`,{method:"DELETE"})}function Vv(a){return be(`/courses/modules/${a}/quiz`)}function Qv(a,l){return be(`/courses/modules/${a}/quiz`,{method:"POST",body:JSON.stringify(l)})}function Yv(a){return be(`/courses/quiz/${a}`,{method:"DELETE"})}const qv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWwAAACKCAMAAAC5K4CgAAABIFBMVEUzR1v////5h1oAwKcAw6k0Qlj/ymwmQVoqQFYiPFIrO096g43U1de7vMAgOVD/y2w1OVMiiYI0PlcmfnsKtqARqJcWQVsvXmgZnpAjP1rVelrsg1oxSl0qcHIePVqfimJbXF2qk2TzwWpzbl+0lmNDT1wWNlkfkogRr5vRrmgwUGDBoGXktmntwWvJqWeXg2G6o2ZsZl2Jf2E1LU8A07P/gFjMbFkrZ22+cFoAM1kTMUoALlmFd2CssrgAKUTy8/SJkZtuUlrqdFlRWFz/1G2cpK1FVmdibnxOXW3b3uAAIT+cjmNVTVt+VVpnUFrZcVmkYlmzZFrDalmNYlp+XVpLTFuvbFoAIlgAGVcAH1ecZlqCiZIAETVrdoJEU1w4J0sEAsoeAAAM70lEQVR4nO2dDXuayBbHh6rDeEXwJTGhG1ERMRbQa7K52ViJtpZE07Tb3b3t9l43vd//W9wZ0LwJZhkxvmR+Tx5BkIT8Hc+cOefMCACDwWAwGAwGg8FgMBgMBoPBYDAYi3JwsOo7eAmgd9dY6nefPl0XwOfPq76bbefk1wIovD95j7f/+ldh1Xez1fBffj25xmJ/KYCTayb2cimcvPv190Lh/W9fv5wAJvZSQZ9OlM8nxIycvP/EzMhyISqfnHwhZqRwwMReLp9P3n2+/u0Ei81j5ZnYy6TwO3ZFUA3b7S+IPPudib1ECq66BVTg754xXjJ7iURu1ffwUnjz83F+/4HamcSq7mW7SSQSROx6guzhp3gDMjt7TO0lkMjW97DYe6eJXLFezCXye/ViphjP7q36xraQXGy3vnvw83H9EP8UY/lM/LAeP83Gdoub27RRYQLyO6sgxX3ggaLwsoz3Ae8dU3xfHx2JfDyTy+GWnd3NxLP5/Z3j+OnxbvY4vrlmpAD++GXCv/18P1NVBwg/tPWGJhmGAmC5rKomANCwlKXeWSIfyyQ8sXNY7HwxEz/N7GYzGys2//X1qzu+zajNH6l/DvSm8b2qvjVN0JaUlvWn1P5uaPyHyrJvLhHfze5jM5I9PN7fyR+6Yh/Wj2P7pxupduGPVw/wadqND03FtCwLKmZLPlOr5lHtg2WpDeUDWLIZwdT3T0E9d5pP5PL72UQi+yaRP03s1TdS7Mdav/LJjtX+A7sN7TsY6GaL50smRMqH9veyDD7Uln+DxOHLAdfr81y/yf7y/3L0fH6k9U+zZqQrqRaoWVAqnWGxAZAMha9CCNvPIvYWUXj9UOvXPvLxfI14HjUkA5lEULBXgr2RGnFOnv1+N5ppw/527T1ngajlwX/ztP7MRF4+EyvyX6b1MzARe/kOHGMq9qwH8swkImXF/0wgAWIjng66T0juoJiPkOK6yu0rNq+UWyUaWm2FD38PuXw8HouQeGxNAyd+YittE9JiVkO73olTLHU8QrDeGyO20oJQbWo0NFUIW2HVzu3G4sW9CKnH4vm1VHtWbDIQ13hFprDYsiJrUKqGtCSZw9jOcaQdZDxWX8v08KzYugUrZ9S/T69AVQ93CRE7Q/0H/dgYsfkuVD1D4NN05/yiqSOiq7Abrmm/YLGxIajIZAuqswD59nVooqgnMs9X216GTK5ATQZheMFiKwYkUVTSS/pwNNVRaXdreF/+0S2TgGAX94xWmejPH0EjXBe5WWInk/TXBoldk6DZeAz2CH9MXqVJEJsLbHOgpCmojF+tqnAbxEYk94TIhxQhsvF+bo+IaUekvq8AsbFkjbfKY9424JFrPbC6akNVFUVVDVUayAY0znTTfZc2XGw0HjoIOM4FSg6d1OUl6F+g1BChPj4ijp3L4Ui4oQ4kBYnd8pNs0urdXtT8KkkJIMGaCat6E3ZlXXON9YaL3eF6aZFL2xy65NICZyPu8rzndHr4CLBHzmjc69nUhiRIbKxmbRbr1tOQVKiaim7ijYT4CjQHbdX1sDdebOfK6fX7XF8Qzq9GWOzhufu033PsniOeC+kO9X0FdpCqKs2iWpMOkq9asIG3tQY02zxAFsQ23CQO9saLPRadnuM4l0KaiA244V9EbHzk5iolcJ2oxS6R1ltrWLM0bhOUvK67kiq67poww7I094C/AZrHmondT15wdr+HUpyT5uwOJ9icA7h0v5dM230ume6No7PZfAka7hBwpnskBP4efM5r9PjNqmywn520LwEapoUUElOCI9jiUHD6N8mLtDAWL9PCTfIg7URns9EAd3r0iRtUg9Ig3OVrJbZXdCSKxOMTO4KdRGKSuH3uEfchSS+OT2wEm2GZIirtwssmbGxNbCQp0HsefvjFs1Vodf2tyFOgrgXVsLewvmIDMVKt/cTmsYcHoUoDvs76EfZTscZiL8hjg+ObFlNaphScjFEDz0iSWQpfI7W1Yl/0H3mJ/glfXpd9hjQuoAI1EHRS1imM/baK3RlxI/DADoUuZSAh1Ggr/LZW7B7Hcan7jTtAbD6wDzwrQe0s8CyNF7NcsdE/VsU5EZu7P+D0t9mgZczEV2/jrOps7HWKUaqtmc3GA8EVM7pT27eUoUJdyQBhJaSXvfVic3fxbx+x9SaEjSOfpNjTHJFLw2aLl2tGLlKr4sY1I72LOwdwVmy5BGH1jLL8TG/jth3Skiy5g0SrwrXZ6c49Z9unbgTCLr27IVehFPKSbfZGxg887dmo35EXlwa8PEuws8FPp59OsmMh2FaxUUq4eJivDCxlUKo+5WX3Cvkmbp7shV2VrmG0vXh2Kawfvq1iA/Q4NRyYqdH8BuzSXV5Aa5CRuVJqaOSiBjnpGusNz9QslQCxSfq8MlMRXFFh2TMWColVGQp+MYSWggVWS5oXyGZiBxNcymDMeiRnt9n1qmRhp4XHnWlJhW2lCVs6PlnZ/ITvUplTyjBHbNSWzC5UZQV7LpbUJnlLInaJiT2XIDPSltTW0WNaqtSemBHTtdFyhSTVFVIYVTGgRMqlmNjBBHaQDd/BeHOqI18xum6Rn0Gas2Jg0SW3EHAdxUbJZ1jP4G/g5/q5pQxKqznLvVkFvOf6TTbYUayUp6UM6+b6icMeN4z0D1AyO6hpTTK2flHWOYMaWZ4Mahrem/X3WbbY5w4eNqfWoWn7BKIgbNMm17Ho5TUbriNRIPGgm464Iu7lambFVjSoDhSqGY2IVwZq6ERO5GI/mFMzdGNv3EhYFfbcECvxNLRqmYaqRpyTkNpgsQ//l4mSe2In0yuLY094KnlgLJA8COmKeGLHdiIldt9mj9x/WUivinvVav5psbJmUtWNmFqbKi0WOffE7thE7JtOckXMjWcTkKxTJXx1mcLUE5u9GykPxAYdkhlbV29kPnzo2WBPsVSbTUgejLiLSG+ZkoAiHUUP4m0JVt4GnqWpZSBm5DgXIQdY7IfTqTvnC0gUHb5i692G37wDD6jCwHNqoxt+cnAuizvI/QjZicXXc9E/H7ERIFEmOrDnF/4eEjsRd4/xfUq/nUzGQ26XlnQn6Lm7yNt35+klb6fp0eAntgXV0g+qhPKgpUKL4lb2I5V7J0up9XB8M+7c2H0RDW2HPLNTIhD7+JHM2JscJg+UavsUwxvQArRdoAwsCk8bPGWFM/VYLOPt7cVj+cwTr6a0IWjMjcjEsFG6wznCGD9zOOdc6DmcfTXq2ZwNOGd0M+ScdI9uEtOs2D8kOFggNjLwwtqR4a5pkdknYpO9nCv2claCQimuc9VL922uw6Uvz8fcecfpAQ6IN1xnZF+lRwgfxhv8hlxStW2/CUxNN+rn52oHN3h+6ojoRtio31wOsoQ8dp3z3h7uTffd3ejXbyFid3ppx3FEgNt0ivur0+8dcEi8xGI7HXt0dWFzfWGEX0AXsQ1KHgBZM2fR7mScKD8tZaiY5pEXmQ09NW8eud3A1aPi2ajVxmakI2I50/bFKNWzU5yADcj5qNfvpf/q2Z30aIgPOzecY48iMiMTsXX/ZaJuo0wHhkmie1hko+bFrqA3pS98pmYeuXrwUlDRr8N/aSdBpy+kD0QyKW/cSwlOBw/38WPSSSVTjntYvBEEOisSmPCtQrXafkxVhZM1iWQy16OhKE28URVsetTqEXQTlNGKDXIHbwIAS3ClScwIiSLeEbEDwl2Jrhcoeus04J8kiU4jd4YeDXOy6/qMZ6ffK2Uw2xAiXoJtE1ax5l1F90qpIhZ7zvKKEf4RP9CY0ucIJrhupOmzBEbzrpTBKqmqIpO6EamMr9HOzhqUpQy35MCi657lonwHZqrHFibIZg8k2PznY7DRGExe1cCDzBYvlyQSwcYNHTYbXj6MWuxcIrvw6n47+bX+ZqbAUoaKb63f7cw7pfuRhK6V9ke3osFd5KhKt5KOC5E6tuhaivj6tZY7uIq13JqlfK+UwctSIm9JNOVHqws8c16iCMHmcllPqeJCZNdcbr+l5rz6bL+1b+f0wtN16M7MsEvN4T7QVemwmFlw8cQcCSDGyBAztA7Pgk92XYWt0JOQbtFb02UB/zaJIhm4HBZz4GBhEglP7jfU/8Ay8Znm0cUuBh5806CctWDohj3NQS7aO07tNqG+lpbEr5ShAqGlUS3prFlQ0sJ+LPAoMcoAq/u+ree3vPmWMnSD1wJ4CrUb3gTlitmIOV3LItaAxcrl6scKDR+rc9drDWLBftGHaMSJmqC5635zxZ6GSuqXw5p8wcTLYPLVKUzs52Ai9rt1KBjaegq/uGK/Zk37GUCTb4N8DeZ9hy8jGvhXE17P+Q5fRjQUvr16yOx3+DIio/DTI7WZ2Mvkkdo+3+HLiIyJRzKBDXCWS+H6l9vW/dPXVd/N1lMoTKMarF0zGAwGg8FgMBgMBoPBYDAYDAbjpfN/6tnDKXhzEO0AAAAASUVORK5CYII=",Gv="/assets/fullstack-CoYPai_u.jpg",yp="/assets/iot-DqMEWA_d.jpg",bp="/assets/Photoshop-CRwZ8T3a.jpg";function At(a){if(!a)return"";if(a.startsWith("http://")||a.startsWith("https://"))return a;const l="https://stekoratech.com/api",s=a.replace(/^\/+/,"");return`${l}/${s}`}const _f=[],Mf=[Gv,qv,yp,bp],Xv=a=>a.name||a.title||"Untitled Course",Kv=a=>{var l;return((l=a.category)==null?void 0:l.trim())||"Uncategorized"},Jv=(a,l)=>a.image?At(a.image):a.image_url?At(a.image_url):Mf[l%Mf.length];function Zv(){const[a,l]=z.useState([]),[s,d]=z.useState("All"),[u,h]=z.useState(null),[y,b]=z.useState([]),[f,p]=z.useState(!0),[g,x]=z.useState(!1);z.useEffect(()=>{async function R(){try{const M=await wr();l(M.length?M:_f)}catch(M){console.error(M),l(_f)}finally{p(!1)}}R()},[]),z.useEffect(()=>{if(!u)return;const R=M=>{M.key==="Escape"&&_()};return window.addEventListener("keydown",R),()=>window.removeEventListener("keydown",R)},[u]);const v=z.useMemo(()=>a.map((R,M)=>({...R,name:Xv(R),category:Kv(R),image:Jv(R,M)})),[a]),N=z.useMemo(()=>["All",...[...new Set(v.map(M=>M.category))]],[v]),A=v.filter(R=>s==="All"||R.category===s),F=async R=>{h(R),b([]),x(!0);try{const D=(await Fn(R.id)).map(V=>V.title).filter(Boolean);b(D)}catch(M){console.error(M),b([])}finally{x(!1)}},_=()=>{h(null),b([])};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        :root {
          --blue: #3b82f6;
          --richblue: #003366;
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
          background: #003366;
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
          color: #22d3ee;
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
          color: #22d3ee;
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
      `}),r.jsx("div",{className:"courses-page",children:r.jsxs("div",{className:"courses-container",children:[r.jsx("div",{className:"course-tabs",children:N.map(R=>r.jsx("button",{type:"button",className:`course-tab ${s===R?"active":""}`,onClick:()=>d(R),children:R},R))}),r.jsxs("div",{className:"courses-grid",children:[f&&r.jsx("div",{className:"course-empty",children:"Loading courses..."}),!f&&A.map(R=>{const M=R.description||"A practical Stekora Tech course built around real learning units.";return r.jsxs("article",{className:"course-card",children:[r.jsx("img",{className:"course-image",src:R.image,alt:R.name}),r.jsxs("div",{className:"course-body",children:[r.jsx("div",{className:"course-category",children:R.category}),r.jsx("h2",{className:"course-title",children:R.name}),r.jsxs("p",{className:"course-summary",children:[M.slice(0,118),M.length>118?"...":""]}),r.jsxs("div",{className:"course-footer",children:[r.jsxs("span",{className:"course-count",children:[R.modules_count||R.module_count||R.lessons||0," Lessons"]}),r.jsx("button",{type:"button",className:"course-learn",onClick:()=>F(R),children:"Learn More"})]})]})]},R.id||R.name)}),!f&&A.length===0&&r.jsx("div",{className:"course-empty",children:"No courses found in this category."})]}),u&&r.jsx("div",{className:"course-modal-backdrop",onClick:_,children:r.jsxs("section",{className:"course-modal",onClick:R=>R.stopPropagation(),children:[r.jsxs("div",{className:"course-modal-top",children:[r.jsx("div",{className:"course-modal-kicker",children:u.category}),r.jsxs("div",{className:"course-modal-title-row",children:[r.jsx("h2",{children:u.name}),r.jsx("button",{type:"button",className:"course-modal-close",onClick:_,children:"×"})]}),r.jsxs("div",{className:"course-modal-meta",children:[r.jsxs("span",{children:[y.length," Lessons"]}),r.jsx("span",{children:"Free"})]})]}),r.jsxs("div",{className:"course-modal-content",children:[r.jsxs("div",{className:"course-modal-section",children:[r.jsx("h3",{children:"About this course"}),r.jsx("p",{children:u.description||"This course gives students practical skills through guided lessons, project work, and clear learning units."})]}),r.jsxs("div",{className:"course-modal-section",children:[r.jsx("h3",{children:"Curriculum"}),g?r.jsx("p",{children:"Loading curriculum..."}):y.length>0?r.jsx("ul",{className:"curriculum-list",children:y.map((R,M)=>r.jsx("li",{children:R},`${R}-${M}`))}):r.jsx("p",{children:"No module has been uploaded for this course yet."})]})]})]})})]})})]})}function Bl(){return be("/products")}function e3(a){return be("/products",{method:"POST",body:a instanceof FormData?a:JSON.stringify(a)})}function t3(a,l){return be(`/products/${a}`,{method:"PUT",body:l instanceof FormData?l:JSON.stringify(l)})}function n3(a){return be(`/products/${a}`,{method:"DELETE"})}const r3="/assets/mukunzi-OUauzR1J.png",a3="/assets/uzii-BgGMvJWO.png",i3="/assets/freight-BG-vhAl8.png",s3="/assets/camera-CrcSHxgF.png",wp="/assets/iot-DqMEWA_d.jpg",o3=[r3,a3],l3=[i3,s3],If=[yp,wp];function c3({goTo:a}){const[l,s]=z.useState(0),[d,u]=z.useState(typeof window<"u"?window.innerWidth<=600:!1),[h,y]=z.useState([]),[b,f]=z.useState(!0),p=d?l3:o3;z.useEffect(()=>{const v=()=>{u(window.innerWidth<=600),s(0)};return window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)},[]),z.useEffect(()=>{const v=setInterval(()=>{s(N=>(N+1)%p.length)},4e3);return()=>clearInterval(v)},[p.length]),z.useEffect(()=>{async function v(){try{const N=await Bl(),A=Array.isArray(N)?N:N.products||[];y(A.slice(0,3))}catch(N){console.error(N),y([])}finally{f(!1)}}v()},[]);const g=()=>{s(v=>(v-1+p.length)%p.length)},x=()=>{s(v=>(v+1)%p.length)};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        :root {
          --richblue: #003366;
          --palegray: #f5f5f5;
          --lightgray: #9ca3af;
          --cyan: #22d3ee;
          --indigo: #6366f1;
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
          border: none;
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
          border: none;
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
          color: var(--cyan);
          margin-bottom: 0.75rem;
        }

        .hero-title {
          font-size: 2.25rem;
          font-weight: 700;
          line-height: 1.3;
          margin: 0;
          color: var(--richblue);
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
          color: #ffffff;
          font-weight: 500;
          padding: 0.75rem 2rem;
          border-radius: 0.5rem;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.12);
        }

        .home-contact-btn:hover {
          background: var(--richblue);
          transform: translateY(-1px);
        }

        .gradient-text {
          background: linear-gradient(to right, var(--cyan), var(--indigo));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
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

        .featured-header h2 {
          margin: 0 0 0.35rem;
          font-size: 1.15rem;
          font-weight: 500;
          color: var(--richblue);
        }

        .featured-header span {
          color: var(--richblue);
          font-size: 0.95rem;
        }

        .search-input {
          padding: 0.7rem 0.85rem;
          border-radius: 0.5rem;
          border: 1px solid var(--lightgray);
          font-size: 0.85rem;
          outline: none;
          width: 100%;
          max-width: 400px;
          cursor: pointer;
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
          object-fit: cover;
          border-radius: 0.75rem;
          border: 1px solid #dbe3ec;
        }

        .home-product-body {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.6rem;
          flex: 1;
        }

        .home-product-tag {
          display: inline-block;
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
          color: var(--richblue);
        }

        .home-product-description {
          margin: 0;
          color: #64748b;
          line-height: 1.55;
          font-size: 0.9rem;
        }

        .home-product-meta {
          margin: 0;
          color: #57708f;
        }

        .home-product-price {
          font-size: 1.45rem;
          color: var(--richblue);
        }

        .home-product-actions {
          display: flex;
          gap: 8px;
          margin-top: auto;
        }

        .home-product-actions button {
          background: #e7f5f3;
          color: #0f766e;
          border: none;
          border-radius: 8px;
          padding: 10px 12px;
          font-weight: 700;
          cursor: pointer;
        }

        .cart-icon-btn {
          width: 46px;
          height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 !important;
          font-size: 1rem;
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

        @media (min-width: 640px) {
          .ad-slider {
            height: 140px;
          }

          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 768px) {
          .ad-slider {
            height: 130px;
          }

          .hero-section {
            grid-template-columns: repeat(2, 1fr);
          }

          .hero-image {
            height: 320px;
          }
        }

        @media (min-width: 1024px) {
          .ad-slider {
            height: 150px;
          }

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
      `}),r.jsxs("div",{className:"home-page",children:[r.jsxs("div",{className:"ad-slider",children:[p.map((v,N)=>r.jsx("div",{className:`ad-slide ${N===l?"active":""}`,children:r.jsx("img",{src:v,alt:`Advertisement banner ${N+1}`})},`${v}-${N}`)),r.jsx("button",{className:"ad-arrow left",onClick:g,"aria-label":"Previous banner",children:"‹"}),r.jsx("button",{className:"ad-arrow right",onClick:x,"aria-label":"Next banner",children:"›"}),r.jsx("div",{className:"ad-dots",children:p.map((v,N)=>r.jsx("button",{className:`ad-dot ${N===l?"active":""}`,onClick:()=>s(N),"aria-label":`Go to banner ${N+1}`},`${v}-dot-${N}`))})]}),r.jsxs("div",{className:"home-container",children:[r.jsxs("section",{className:"hero-section",children:[r.jsxs("div",{children:[r.jsx("p",{className:"hero-pretitle",children:"Stekora Tech"}),r.jsxs("h1",{className:"hero-title",children:["Where ideas become ",r.jsx("span",{className:"gradient-text",children:"digital solutions"})]}),r.jsx("p",{className:"hero-description",children:"We are an IT services studio delivering web applications, embedded systems and automation. From concept to deployment, we help you design, build and manage reliable digital products."}),r.jsx("button",{className:"home-contact-btn",onClick:()=>a("/contact"),children:"Get in Touch"})]}),r.jsx("img",{src:wp,alt:"Stekora Tech electronics workspace",className:"hero-image"})]}),r.jsxs("section",{children:[r.jsxs("div",{className:"featured-header",children:[r.jsxs("div",{children:[r.jsx("h2",{children:"Featured products & services"}),r.jsx("span",{children:"Good quality and reliability"})]}),r.jsx("input",{type:"text",className:"search-input",placeholder:"Search products...",value:"",readOnly:!0,onClick:()=>a("/shop"),onFocus:()=>a("/shop")})]}),r.jsxs("div",{className:"products-grid",children:[b&&r.jsx("p",{className:"no-products",children:"Loading products..."}),!b&&h.map((v,N)=>{const A=v.name||v.title||"Product",F=v.price?`R${v.price}`:"Contact us",_=v.image||(v.image_url?At(v.image_url):"")||If[N%If.length];return r.jsxs("div",{className:"home-product-card",children:[r.jsx("img",{src:_,alt:A}),r.jsxs("div",{className:"home-product-body",children:[r.jsx("span",{className:"home-product-tag",children:v.category||v.tag||"Product"}),r.jsx("h3",{className:"home-product-title",children:A}),r.jsx("p",{className:"home-product-description",children:v.description||"Quality Stekora Tech product or service package."}),r.jsxs("p",{className:"home-product-meta",children:["Rating ",v.rating||"4.8"]}),r.jsx("strong",{className:"home-product-price",children:F}),r.jsxs("div",{className:"home-product-actions",children:[r.jsx("button",{children:"Details"}),r.jsx("button",{className:"cart-icon-btn","aria-label":`Add ${A} to cart`,children:r.jsx(H,{icon:lp})})]})]})]},v.id||A)}),!b&&h.length===0&&r.jsx("p",{className:"no-products",children:"No product posted yet. Please check the shop again soon."})]})]})]})]})]})}function d3(){return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsx("div",{className:"jobs-page",children:r.jsxs("div",{className:"jobs-container",children:[r.jsx("h1",{className:"jobs-title",children:"Jobs & Opportunities"}),r.jsx("p",{className:"jobs-subtitle",children:"We collaborate with developers, designers and hardware enthusiasts on IT and electronics projects."}),r.jsxs("div",{className:"job-box",children:[r.jsx("h2",{children:"No open positions right now"}),r.jsx("p",{children:"We're always happy to see strong portfolios. You can still send your CV and GitHub/LinkedIn, and we'll keep you in mind for future IT projects."}),r.jsx("p",{className:"email",children:"Email: careers@stekoratech.com"})]})]})})]})}function u3(a){return be("/auth/student/login",{method:"POST",body:JSON.stringify(a)})}function f3(a){return be("/auth/admin/login",{method:"POST",body:JSON.stringify(a)})}function m3(a){return be("/auth/admin/password",{method:"PATCH",headers:{Authorization:`Bearer ${localStorage.getItem("token")||""}`},body:JSON.stringify(a)})}function p3(a){return be("/auth/student/password",{method:"PATCH",headers:{Authorization:`Bearer ${localStorage.getItem("studentToken")||""}`},body:JSON.stringify(a)})}function wn(a,l={}){const s=localStorage.getItem("studentToken");return be(a,{...l,headers:{Authorization:`Bearer ${s}`,...l.headers}})}function h3(a){return be("/students/register",{method:"POST",body:JSON.stringify(a)})}function g3(){return wn("/students/dashboard")}function x3(a){return wn(`/students/courses/${a}/start`,{method:"POST",body:JSON.stringify({})})}function v3(a,l){return wn(`/students/courses/${a}/modules/${l}`)}function y3(a){return wn(`/students/modules/${a}/assessment`)}function b3(a,l){return wn(`/students/modules/${a}/assessment`,{method:"POST",body:JSON.stringify({answers:l})})}function w3(a){return wn(`/students/courses/${a}/final-exam`)}function j3(a,l){return wn(`/students/courses/${a}/final-exam`,{method:"POST",body:JSON.stringify({answers:l})})}function k3(){return wn("/students/certificates")}function S3({goTo:a}){const[l,s]=z.useState("login"),[d,u]=z.useState("student"),[h,y]=z.useState({email:"",password:""}),[b,f]=z.useState({full_name:"",email:"",phone:"",password:""}),[p,g]=z.useState(!1),[x,v]=z.useState(!1),N=R=>{y({...h,[R.target.name]:R.target.value})},A=R=>{f({...b,[R.target.name]:R.target.value})},F=async R=>{var M,D;R.preventDefault(),g(!0);try{if(d==="student"){const V=await u3(h);localStorage.setItem("studentToken",V.token),(M=V.student)!=null&&M.full_name&&localStorage.setItem("studentName",V.student.full_name),alert("Logged in successfully."),a("/student")}else{const V=await f3(h);localStorage.setItem("token",V.token),localStorage.setItem("adminName",((D=V.user)==null?void 0:D.name)||"Admin"),alert("Admin logged in."),a("/admin")}}catch(V){console.error(V),alert(V.message||"Login failed")}finally{g(!1)}},_=async R=>{R.preventDefault(),v(!0);try{await h3(b),alert("Registration successful. Please login."),y({email:b.email,password:""}),f({full_name:"",email:"",phone:"",password:""}),s("login"),u("student")}catch(M){console.error(M),alert(M.message||"Registration failed")}finally{v(!1)}};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"auth-page",children:[r.jsx("button",{type:"button",className:"auth-back",onClick:()=>a("/"),children:"Back"}),r.jsxs("div",{className:`auth-shell ${l==="register"?"show-register":""}`,children:[r.jsx("div",{className:"auth-form-box login",children:r.jsxs("div",{className:"auth-card",children:[r.jsx("h1",{className:"auth-title",children:d==="student"?"Student Login":"Admin Login"}),r.jsx("p",{className:"auth-sub",children:d==="student"?"Access your dashboard, courses, and progress.":"Manage courses, modules, materials, and students."}),r.jsxs("div",{className:"auth-mode-row",children:[r.jsx("button",{type:"button",onClick:()=>u("student"),className:`auth-mode-btn ${d==="student"?"active":""}`,children:"Student"}),r.jsx("button",{type:"button",onClick:()=>u("admin"),className:`auth-mode-btn ${d==="admin"?"active":""}`,children:"Admin"})]}),r.jsxs("form",{onSubmit:F,children:[r.jsxs("div",{className:"auth-form-group",children:[r.jsx("label",{children:d==="student"?"Email":"Username"}),r.jsx("input",{type:d==="student"?"email":"text",name:"email",required:!0,value:h.email,onChange:N}),r.jsx("span",{className:"input-icon",children:r.jsx(H,{icon:wl})})]}),r.jsxs("div",{className:"auth-form-group",style:{marginTop:"0.95rem"},children:[r.jsx("label",{children:"Password"}),r.jsx("input",{type:"password",name:"password",required:!0,value:h.password,onChange:N}),r.jsx("span",{className:"input-icon",children:r.jsx(H,{icon:jl})})]}),r.jsx("button",{className:"auth-btn",type:"submit",children:p?"Logging in...":"Login"})]}),r.jsxs("div",{className:"auth-footer",children:["Do not have an account?"," ",r.jsx("button",{type:"button",className:"auth-link-button",onClick:()=>s("register"),children:"Sign Up"})]})]})}),r.jsx("div",{className:"auth-form-box register",children:r.jsxs("div",{className:"auth-card",children:[r.jsx("h1",{className:"auth-title",children:"Create Account"}),r.jsx("p",{className:"auth-sub",children:"Register once, then you can join and manage multiple courses."}),r.jsxs("form",{onSubmit:_,children:[r.jsxs("div",{className:"auth-form-group",children:[r.jsx("label",{children:"Full Name"}),r.jsx("input",{type:"text",name:"full_name",required:!0,value:b.full_name,onChange:A}),r.jsx("span",{className:"input-icon",children:r.jsx(H,{icon:Yx})})]}),r.jsxs("div",{className:"auth-form-group",style:{marginTop:"0.85rem"},children:[r.jsx("label",{children:"Email"}),r.jsx("input",{type:"email",name:"email",required:!0,value:b.email,onChange:A}),r.jsx("span",{className:"input-icon",children:r.jsx(H,{icon:wl})})]}),r.jsxs("div",{className:"auth-form-group",style:{marginTop:"0.85rem"},children:[r.jsx("label",{children:"Phone"}),r.jsx("input",{type:"text",name:"phone",required:!0,value:b.phone,onChange:A}),r.jsx("span",{className:"input-icon",children:r.jsx(H,{icon:ip})})]}),r.jsxs("div",{className:"auth-form-group",style:{marginTop:"0.85rem"},children:[r.jsx("label",{children:"Password"}),r.jsx("input",{type:"password",name:"password",required:!0,value:b.password,onChange:A}),r.jsx("span",{className:"input-icon",children:r.jsx(H,{icon:jl})})]}),r.jsx("button",{className:"auth-btn",type:"submit",children:x?"Creating account...":"Register"})]}),r.jsxs("div",{className:"auth-footer",children:["Already have an account?"," ",r.jsx("button",{type:"button",className:"auth-link-button",onClick:()=>s("login"),children:"Sign In"})]})]})}),r.jsx("div",{className:"auth-welcome-panel login-side",children:r.jsxs("div",{className:"auth-welcome-content",children:[r.jsx("h2",{children:"WELCOME BACK!"}),r.jsx("p",{children:"We are happy to have you with us again. Continue learning, building, and tracking your progress."})]})}),r.jsx("div",{className:"auth-welcome-panel register-side",children:r.jsxs("div",{className:"auth-welcome-content",children:[r.jsx("h2",{children:"WELCOME!"}),r.jsx("p",{children:"Create your Stekora Tech account and keep your services, courses, and support in one place."})]})})]})]})]})}const N3="/assets/web-CNkSwHlc.jpg",C3="/assets/internet_of_things-DznkTOlq.jpg",E3="/assets/automation-B_NT-eam.jpg",z3="/assets/camera-Bgqatu1H.jpg",P3="/assets/network-7wtnhT_7.jpg",A3=[{icon:Bx,title:"Web & Cloud Development",desc:"Modern web apps, dashboards and APIs with secure admin panels and scalable infrastructure.",image:N3,details:"We design and build responsive websites, business dashboards, booking systems, admin portals, APIs, and cloud-ready applications. Our work includes planning the user flow, developing the frontend and backend, connecting databases, securing accounts, and preparing the system so it can grow with your business."},{icon:ev,title:"Embedded & IoT Prototyping",desc:"From Arduino and microcontrollers to production-ready hardware integrations.",image:C3,details:"We help turn hardware ideas into working prototypes using microcontrollers, sensors, displays, relays, and connected devices. This includes circuit planning, firmware programming, device testing, data collection, and connecting IoT devices to web dashboards or mobile-friendly monitoring tools."},{icon:_x,title:"Automation & Integration",desc:"Connect systems, automate workflows, and build custom internal tools for your team.",image:E3,details:"We automate repetitive business tasks and connect separate systems so information moves faster with fewer mistakes. This can include custom forms, reports, notifications, data sync, stock or client tracking tools, and integrations between websites, databases, spreadsheets, and third-party platforms."},{icon:Ux,title:"CCTV Installation & Smart Surveillance",desc:"Professional camera installation, monitoring setup, access control, and smart security systems for homes and businesses.",image:z3,details:"We plan and install CCTV systems for homes, shops, offices, and business sites. Our service can include camera placement, cabling, DVR/NVR setup, mobile viewing, recording configuration, access control support, troubleshooting, and guidance on keeping your surveillance system reliable."},{icon:Wx,title:"Networking, Computer Maintenance & IT Support",desc:"Network setup, troubleshooting, computer repairs, software support, upgrades, and reliable ongoing technical assistance.",image:P3,details:"We set up and maintain office and home networks, troubleshoot internet and Wi-Fi issues, repair and optimize computers, install software, upgrade systems, remove common technical blockers, and provide ongoing support so your devices and team can keep working smoothly."},{icon:Zx,title:"Graphic Design & Digital Solutions",desc:"Clean brand visuals, promotional designs, digital content, websites, and business tools that help your work look professional.",image:bp,details:"We create clean digital designs for brands, social media, posters, flyers, business profiles, product promotions, and online campaigns. We also support digital business tools like landing pages, simple websites, forms, and branded content that helps your work look professional."}];function L3(){const[a,l]=z.useState(null);return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsx("section",{className:"services-section",children:r.jsxs("div",{className:"services-container",children:[r.jsx("h1",{className:"services-title",children:"IT Services"}),r.jsx("p",{className:"services-subtitle",children:"Stekora Tech delivers end-to-end IT solutions tailored to your projects."}),r.jsx("div",{className:"services-grid",children:A3.map(s=>r.jsxs("div",{className:"service-card",children:[r.jsx(H,{icon:s.icon,className:"service-icon"}),r.jsx("h2",{className:"service-title",children:s.title}),r.jsx("p",{className:"service-desc",children:s.desc}),r.jsx("button",{type:"button",className:"service-learn-btn",onClick:()=>l(s),children:"Learn More"})]},s.title))})]})}),a&&r.jsx("div",{className:"service-modal-backdrop",role:"presentation",onClick:()=>l(null),children:r.jsxs("section",{className:"service-modal",role:"dialog","aria-modal":"true","aria-labelledby":"service-modal-title",onClick:s=>s.stopPropagation(),children:[r.jsxs("div",{className:"service-modal-header",children:[r.jsx("h2",{className:"service-modal-title",id:"service-modal-title",children:a.title}),r.jsx("button",{type:"button",className:"service-modal-close","aria-label":"Close service details",onClick:()=>l(null),children:"×"})]}),r.jsx("img",{className:"service-modal-image",src:a.image,alt:""}),r.jsxs("div",{className:"service-modal-body",children:[r.jsx(H,{icon:a.icon,className:"service-modal-icon"}),r.jsx("p",{className:"service-modal-text",children:a.details})]})]})})]})}function _3(){const[a,l]=z.useState([]),[s,d]=z.useState(!0),[u,h]=z.useState(""),[y,b]=z.useState("");z.useEffect(()=>{async function p(){try{d(!0);const g=await Bl(),x=Array.isArray(g)?g:g.products||[];l(x)}catch(g){console.error(g),h("Failed to load products")}finally{d(!1)}}p()},[]);const f=a.filter(p=>{const g=p.name||p.title||"",x=p.description||"",v=y.toLowerCase();return g.toLowerCase().includes(v)||x.toLowerCase().includes(v)});return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
        }

        .shop-search-input:focus {
          border-color: var(--richblue);
        }

        .products-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        .shop-product-card {
          background: #fff;
          border: 1px solid rgba(0, 51, 102, 0.14);
          border-radius: 0.75rem;
          padding: 1.25rem;
          box-shadow: 0 10px 24px rgba(0, 51, 102, 0.06);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .shop-product-image {
          width: 100%;
          height: 170px;
          object-fit: cover;
          border-radius: 0.75rem;
          border: 1px solid #dbe3ec;
          background: #f1f5f9;
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
        }

        .shop-product-desc {
          margin: 0;
          color: #64748b;
          line-height: 1.6;
          font-size: 0.9rem;
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
        }

        .shop-product-actions .cart-btn {
          width: 42px;
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

        .shop-empty-panel {
          background: #dfe4ea;
          border: 1px dashed var(--richblue);
          border-radius: 0.75rem;
          padding: 2rem;
          color: var(--richblue);
          margin-top: 0.25rem;
        }

        .shop-empty-panel h2 {
          font-size: 1.15rem;
          font-weight: 700;
          margin: 0 0 0.6rem;
        }

        .shop-empty-panel p {
          color: var(--lightgray);
          font-size: 0.95rem;
          margin: 0;
        }

        .shop-empty-contact {
          color: var(--richblue);
          display: inline-block;
          font-size: 0.9rem;
          margin-top: 1.25rem;
        }

        .shop-no-results {
          font-size: 0.9rem;
          color: var(--lightgray);
          margin-top: 1rem;
        }

        @media (min-width: 640px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 768px) {
          .products-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 480px) {
          .shop-empty-panel {
            padding: 1.5rem;
          }

          .shop-search-input {
            max-width: 100%;
          }
        }
      `}),r.jsx("div",{className:"shop-page",children:r.jsxs("div",{className:"shop-container",children:[r.jsx("h1",{className:"shop-title",children:"Shop"}),r.jsx("input",{type:"text",className:"shop-search-input",placeholder:"Search products...",value:y,onChange:p=>b(p.target.value)}),s&&r.jsx("p",{className:"status-text",children:"Loading products..."}),u&&r.jsx("p",{className:"status-text",children:u}),!s&&!u&&f.length>0&&r.jsx("div",{className:"products-grid",children:f.map(p=>{const g=p.name||p.title||"Product",x=p.price?`R${p.price}`:"Contact us",v=p.image_url?At(p.image_url):"";return r.jsxs("article",{className:"shop-product-card",children:[v&&r.jsx("img",{className:"shop-product-image",src:v,alt:g}),r.jsx("span",{className:"shop-product-badge",children:p.category||"Product"}),r.jsx("h2",{className:"shop-product-title",children:g}),r.jsx("p",{className:"shop-product-desc",children:p.description||"Quality Stekora Tech product or service package."}),r.jsx("strong",{className:"shop-product-price",children:x}),r.jsxs("div",{className:"shop-product-actions",children:[r.jsx("button",{children:"Details"}),r.jsx("button",{className:"cart-btn","aria-label":`Add ${g} to cart`,children:r.jsx(H,{icon:lp})})]})]},p.id||g)})}),!s&&!u&&a.length===0&&r.jsxs("div",{className:"shop-empty-panel",children:[r.jsx("h2",{children:"No product posted yet"}),r.jsx("p",{children:"We're preparing products and services for the shop. Please check back soon."}),r.jsx("span",{className:"shop-empty-contact",children:"Email: info@stekoratech.com"})]}),!s&&!u&&a.length>0&&f.length===0&&r.jsxs("p",{className:"shop-no-results",children:["No matching products found for ",r.jsx("span",{style:{color:"#003366"},children:y})]})]})})]})}var M3=Object.defineProperty,Vi=Object.getOwnPropertySymbols,jp=Object.prototype.hasOwnProperty,kp=Object.prototype.propertyIsEnumerable,Tf=(a,l,s)=>l in a?M3(a,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[l]=s,kl=(a,l)=>{for(var s in l||(l={}))jp.call(l,s)&&Tf(a,s,l[s]);if(Vi)for(var s of Vi(l))kp.call(l,s)&&Tf(a,s,l[s]);return a},Sl=(a,l)=>{var s={};for(var d in a)jp.call(a,d)&&l.indexOf(d)<0&&(s[d]=a[d]);if(a!=null&&Vi)for(var d of Vi(a))l.indexOf(d)<0&&kp.call(a,d)&&(s[d]=a[d]);return s};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var Dn;(a=>{const l=class ge{constructor(f,p,g,x){if(this.version=f,this.errorCorrectionLevel=p,this.modules=[],this.isFunction=[],f<ge.MIN_VERSION||f>ge.MAX_VERSION)throw new RangeError("Version value out of range");if(x<-1||x>7)throw new RangeError("Mask value out of range");this.size=f*4+17;let v=[];for(let A=0;A<this.size;A++)v.push(!1);for(let A=0;A<this.size;A++)this.modules.push(v.slice()),this.isFunction.push(v.slice());this.drawFunctionPatterns();const N=this.addEccAndInterleave(g);if(this.drawCodewords(N),x==-1){let A=1e9;for(let F=0;F<8;F++){this.applyMask(F),this.drawFormatBits(F);const _=this.getPenaltyScore();_<A&&(x=F,A=_),this.applyMask(F)}}u(0<=x&&x<=7),this.mask=x,this.applyMask(x),this.drawFormatBits(x),this.isFunction=[]}static encodeText(f,p){const g=a.QrSegment.makeSegments(f);return ge.encodeSegments(g,p)}static encodeBinary(f,p){const g=a.QrSegment.makeBytes(f);return ge.encodeSegments([g],p)}static encodeSegments(f,p,g=1,x=40,v=-1,N=!0){if(!(ge.MIN_VERSION<=g&&g<=x&&x<=ge.MAX_VERSION)||v<-1||v>7)throw new RangeError("Invalid value");let A,F;for(A=g;;A++){const D=ge.getNumDataCodewords(A,p)*8,V=y.getTotalBits(f,A);if(V<=D){F=V;break}if(A>=x)throw new RangeError("Data too long")}for(const D of[ge.Ecc.MEDIUM,ge.Ecc.QUARTILE,ge.Ecc.HIGH])N&&F<=ge.getNumDataCodewords(A,D)*8&&(p=D);let _=[];for(const D of f){s(D.mode.modeBits,4,_),s(D.numChars,D.mode.numCharCountBits(A),_);for(const V of D.getData())_.push(V)}u(_.length==F);const R=ge.getNumDataCodewords(A,p)*8;u(_.length<=R),s(0,Math.min(4,R-_.length),_),s(0,(8-_.length%8)%8,_),u(_.length%8==0);for(let D=236;_.length<R;D^=253)s(D,8,_);let M=[];for(;M.length*8<_.length;)M.push(0);return _.forEach((D,V)=>M[V>>>3]|=D<<7-(V&7)),new ge(A,p,M,v)}getModule(f,p){return 0<=f&&f<this.size&&0<=p&&p<this.size&&this.modules[p][f]}getModules(){return this.modules}drawFunctionPatterns(){for(let g=0;g<this.size;g++)this.setFunctionModule(6,g,g%2==0),this.setFunctionModule(g,6,g%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const f=this.getAlignmentPatternPositions(),p=f.length;for(let g=0;g<p;g++)for(let x=0;x<p;x++)g==0&&x==0||g==0&&x==p-1||g==p-1&&x==0||this.drawAlignmentPattern(f[g],f[x]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(f){const p=this.errorCorrectionLevel.formatBits<<3|f;let g=p;for(let v=0;v<10;v++)g=g<<1^(g>>>9)*1335;const x=(p<<10|g)^21522;u(x>>>15==0);for(let v=0;v<=5;v++)this.setFunctionModule(8,v,d(x,v));this.setFunctionModule(8,7,d(x,6)),this.setFunctionModule(8,8,d(x,7)),this.setFunctionModule(7,8,d(x,8));for(let v=9;v<15;v++)this.setFunctionModule(14-v,8,d(x,v));for(let v=0;v<8;v++)this.setFunctionModule(this.size-1-v,8,d(x,v));for(let v=8;v<15;v++)this.setFunctionModule(8,this.size-15+v,d(x,v));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let f=this.version;for(let g=0;g<12;g++)f=f<<1^(f>>>11)*7973;const p=this.version<<12|f;u(p>>>18==0);for(let g=0;g<18;g++){const x=d(p,g),v=this.size-11+g%3,N=Math.floor(g/3);this.setFunctionModule(v,N,x),this.setFunctionModule(N,v,x)}}drawFinderPattern(f,p){for(let g=-4;g<=4;g++)for(let x=-4;x<=4;x++){const v=Math.max(Math.abs(x),Math.abs(g)),N=f+x,A=p+g;0<=N&&N<this.size&&0<=A&&A<this.size&&this.setFunctionModule(N,A,v!=2&&v!=4)}}drawAlignmentPattern(f,p){for(let g=-2;g<=2;g++)for(let x=-2;x<=2;x++)this.setFunctionModule(f+x,p+g,Math.max(Math.abs(x),Math.abs(g))!=1)}setFunctionModule(f,p,g){this.modules[p][f]=g,this.isFunction[p][f]=!0}addEccAndInterleave(f){const p=this.version,g=this.errorCorrectionLevel;if(f.length!=ge.getNumDataCodewords(p,g))throw new RangeError("Invalid argument");const x=ge.NUM_ERROR_CORRECTION_BLOCKS[g.ordinal][p],v=ge.ECC_CODEWORDS_PER_BLOCK[g.ordinal][p],N=Math.floor(ge.getNumRawDataModules(p)/8),A=x-N%x,F=Math.floor(N/x);let _=[];const R=ge.reedSolomonComputeDivisor(v);for(let D=0,V=0;D<x;D++){let q=f.slice(V,V+F-v+(D<A?0:1));V+=q.length;const G=ge.reedSolomonComputeRemainder(q,R);D<A&&q.push(0),_.push(q.concat(G))}let M=[];for(let D=0;D<_[0].length;D++)_.forEach((V,q)=>{(D!=F-v||q>=A)&&M.push(V[D])});return u(M.length==N),M}drawCodewords(f){if(f.length!=Math.floor(ge.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let p=0;for(let g=this.size-1;g>=1;g-=2){g==6&&(g=5);for(let x=0;x<this.size;x++)for(let v=0;v<2;v++){const N=g-v,F=(g+1&2)==0?this.size-1-x:x;!this.isFunction[F][N]&&p<f.length*8&&(this.modules[F][N]=d(f[p>>>3],7-(p&7)),p++)}}u(p==f.length*8)}applyMask(f){if(f<0||f>7)throw new RangeError("Mask value out of range");for(let p=0;p<this.size;p++)for(let g=0;g<this.size;g++){let x;switch(f){case 0:x=(g+p)%2==0;break;case 1:x=p%2==0;break;case 2:x=g%3==0;break;case 3:x=(g+p)%3==0;break;case 4:x=(Math.floor(g/3)+Math.floor(p/2))%2==0;break;case 5:x=g*p%2+g*p%3==0;break;case 6:x=(g*p%2+g*p%3)%2==0;break;case 7:x=((g+p)%2+g*p%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[p][g]&&x&&(this.modules[p][g]=!this.modules[p][g])}}getPenaltyScore(){let f=0;for(let v=0;v<this.size;v++){let N=!1,A=0,F=[0,0,0,0,0,0,0];for(let _=0;_<this.size;_++)this.modules[v][_]==N?(A++,A==5?f+=ge.PENALTY_N1:A>5&&f++):(this.finderPenaltyAddHistory(A,F),N||(f+=this.finderPenaltyCountPatterns(F)*ge.PENALTY_N3),N=this.modules[v][_],A=1);f+=this.finderPenaltyTerminateAndCount(N,A,F)*ge.PENALTY_N3}for(let v=0;v<this.size;v++){let N=!1,A=0,F=[0,0,0,0,0,0,0];for(let _=0;_<this.size;_++)this.modules[_][v]==N?(A++,A==5?f+=ge.PENALTY_N1:A>5&&f++):(this.finderPenaltyAddHistory(A,F),N||(f+=this.finderPenaltyCountPatterns(F)*ge.PENALTY_N3),N=this.modules[_][v],A=1);f+=this.finderPenaltyTerminateAndCount(N,A,F)*ge.PENALTY_N3}for(let v=0;v<this.size-1;v++)for(let N=0;N<this.size-1;N++){const A=this.modules[v][N];A==this.modules[v][N+1]&&A==this.modules[v+1][N]&&A==this.modules[v+1][N+1]&&(f+=ge.PENALTY_N2)}let p=0;for(const v of this.modules)p=v.reduce((N,A)=>N+(A?1:0),p);const g=this.size*this.size,x=Math.ceil(Math.abs(p*20-g*10)/g)-1;return u(0<=x&&x<=9),f+=x*ge.PENALTY_N4,u(0<=f&&f<=2568888),f}getAlignmentPatternPositions(){if(this.version==1)return[];{const f=Math.floor(this.version/7)+2,p=this.version==32?26:Math.ceil((this.version*4+4)/(f*2-2))*2;let g=[6];for(let x=this.size-7;g.length<f;x-=p)g.splice(1,0,x);return g}}static getNumRawDataModules(f){if(f<ge.MIN_VERSION||f>ge.MAX_VERSION)throw new RangeError("Version number out of range");let p=(16*f+128)*f+64;if(f>=2){const g=Math.floor(f/7)+2;p-=(25*g-10)*g-55,f>=7&&(p-=36)}return u(208<=p&&p<=29648),p}static getNumDataCodewords(f,p){return Math.floor(ge.getNumRawDataModules(f)/8)-ge.ECC_CODEWORDS_PER_BLOCK[p.ordinal][f]*ge.NUM_ERROR_CORRECTION_BLOCKS[p.ordinal][f]}static reedSolomonComputeDivisor(f){if(f<1||f>255)throw new RangeError("Degree out of range");let p=[];for(let x=0;x<f-1;x++)p.push(0);p.push(1);let g=1;for(let x=0;x<f;x++){for(let v=0;v<p.length;v++)p[v]=ge.reedSolomonMultiply(p[v],g),v+1<p.length&&(p[v]^=p[v+1]);g=ge.reedSolomonMultiply(g,2)}return p}static reedSolomonComputeRemainder(f,p){let g=p.map(x=>0);for(const x of f){const v=x^g.shift();g.push(0),p.forEach((N,A)=>g[A]^=ge.reedSolomonMultiply(N,v))}return g}static reedSolomonMultiply(f,p){if(f>>>8||p>>>8)throw new RangeError("Byte out of range");let g=0;for(let x=7;x>=0;x--)g=g<<1^(g>>>7)*285,g^=(p>>>x&1)*f;return u(g>>>8==0),g}finderPenaltyCountPatterns(f){const p=f[1];u(p<=this.size*3);const g=p>0&&f[2]==p&&f[3]==p*3&&f[4]==p&&f[5]==p;return(g&&f[0]>=p*4&&f[6]>=p?1:0)+(g&&f[6]>=p*4&&f[0]>=p?1:0)}finderPenaltyTerminateAndCount(f,p,g){return f&&(this.finderPenaltyAddHistory(p,g),p=0),p+=this.size,this.finderPenaltyAddHistory(p,g),this.finderPenaltyCountPatterns(g)}finderPenaltyAddHistory(f,p){p[0]==0&&(f+=this.size),p.pop(),p.unshift(f)}};l.MIN_VERSION=1,l.MAX_VERSION=40,l.PENALTY_N1=3,l.PENALTY_N2=3,l.PENALTY_N3=40,l.PENALTY_N4=10,l.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],l.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],a.QrCode=l;function s(b,f,p){if(f<0||f>31||b>>>f)throw new RangeError("Value out of range");for(let g=f-1;g>=0;g--)p.push(b>>>g&1)}function d(b,f){return(b>>>f&1)!=0}function u(b){if(!b)throw new Error("Assertion error")}const h=class Re{constructor(f,p,g){if(this.mode=f,this.numChars=p,this.bitData=g,p<0)throw new RangeError("Invalid argument");this.bitData=g.slice()}static makeBytes(f){let p=[];for(const g of f)s(g,8,p);return new Re(Re.Mode.BYTE,f.length,p)}static makeNumeric(f){if(!Re.isNumeric(f))throw new RangeError("String contains non-numeric characters");let p=[];for(let g=0;g<f.length;){const x=Math.min(f.length-g,3);s(parseInt(f.substring(g,g+x),10),x*3+1,p),g+=x}return new Re(Re.Mode.NUMERIC,f.length,p)}static makeAlphanumeric(f){if(!Re.isAlphanumeric(f))throw new RangeError("String contains unencodable characters in alphanumeric mode");let p=[],g;for(g=0;g+2<=f.length;g+=2){let x=Re.ALPHANUMERIC_CHARSET.indexOf(f.charAt(g))*45;x+=Re.ALPHANUMERIC_CHARSET.indexOf(f.charAt(g+1)),s(x,11,p)}return g<f.length&&s(Re.ALPHANUMERIC_CHARSET.indexOf(f.charAt(g)),6,p),new Re(Re.Mode.ALPHANUMERIC,f.length,p)}static makeSegments(f){return f==""?[]:Re.isNumeric(f)?[Re.makeNumeric(f)]:Re.isAlphanumeric(f)?[Re.makeAlphanumeric(f)]:[Re.makeBytes(Re.toUtf8ByteArray(f))]}static makeEci(f){let p=[];if(f<0)throw new RangeError("ECI assignment value out of range");if(f<128)s(f,8,p);else if(f<16384)s(2,2,p),s(f,14,p);else if(f<1e6)s(6,3,p),s(f,21,p);else throw new RangeError("ECI assignment value out of range");return new Re(Re.Mode.ECI,0,p)}static isNumeric(f){return Re.NUMERIC_REGEX.test(f)}static isAlphanumeric(f){return Re.ALPHANUMERIC_REGEX.test(f)}getData(){return this.bitData.slice()}static getTotalBits(f,p){let g=0;for(const x of f){const v=x.mode.numCharCountBits(p);if(x.numChars>=1<<v)return 1/0;g+=4+v+x.bitData.length}return g}static toUtf8ByteArray(f){f=encodeURI(f);let p=[];for(let g=0;g<f.length;g++)f.charAt(g)!="%"?p.push(f.charCodeAt(g)):(p.push(parseInt(f.substring(g+1,g+3),16)),g+=2);return p}};h.NUMERIC_REGEX=/^[0-9]*$/,h.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,h.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let y=h;a.QrSegment=h})(Dn||(Dn={}));(a=>{(l=>{const s=class{constructor(u,h){this.ordinal=u,this.formatBits=h}};s.LOW=new s(0,1),s.MEDIUM=new s(1,0),s.QUARTILE=new s(2,3),s.HIGH=new s(3,2),l.Ecc=s})(a.QrCode||(a.QrCode={}))})(Dn||(Dn={}));(a=>{(l=>{const s=class{constructor(u,h){this.modeBits=u,this.numBitsCharCount=h}numCharCountBits(u){return this.numBitsCharCount[Math.floor((u+7)/17)]}};s.NUMERIC=new s(1,[10,12,14]),s.ALPHANUMERIC=new s(2,[9,11,13]),s.BYTE=new s(4,[8,16,16]),s.KANJI=new s(8,[8,10,12]),s.ECI=new s(7,[0,0,0]),l.Mode=s})(a.QrSegment||(a.QrSegment={}))})(Dn||(Dn={}));var pr=Dn;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var I3={L:pr.QrCode.Ecc.LOW,M:pr.QrCode.Ecc.MEDIUM,Q:pr.QrCode.Ecc.QUARTILE,H:pr.QrCode.Ecc.HIGH},Sp=128,Np="L",Cp="#FFFFFF",Ep="#000000",zp=!1,Pp=1,T3=4,F3=0,O3=.1;function Ap(a,l=0){const s=[];return a.forEach(function(d,u){let h=null;d.forEach(function(y,b){if(!y&&h!==null){s.push(`M${h+l} ${u+l}h${b-h}v1H${h+l}z`),h=null;return}if(b===d.length-1){if(!y)return;h===null?s.push(`M${b+l},${u+l} h1v1H${b+l}z`):s.push(`M${h+l},${u+l} h${b+1-h}v1H${h+l}z`);return}y&&h===null&&(h=b)})}),s.join("")}function Lp(a,l){return a.slice().map((s,d)=>d<l.y||d>=l.y+l.h?s:s.map((u,h)=>h<l.x||h>=l.x+l.w?u:!1))}function R3(a,l,s,d){if(d==null)return null;const u=a.length+s*2,h=Math.floor(l*O3),y=u/l,b=(d.width||h)*y,f=(d.height||h)*y,p=d.x==null?a.length/2-b/2:d.x*y,g=d.y==null?a.length/2-f/2:d.y*y,x=d.opacity==null?1:d.opacity;let v=null;if(d.excavate){let A=Math.floor(p),F=Math.floor(g),_=Math.ceil(b+p-A),R=Math.ceil(f+g-F);v={x:A,y:F,w:_,h:R}}const N=d.crossOrigin;return{x:p,y:g,h:f,w:b,excavation:v,opacity:x,crossOrigin:N}}function D3(a,l){return l!=null?Math.max(Math.floor(l),0):a?T3:F3}function _p({value:a,level:l,minVersion:s,includeMargin:d,marginSize:u,imageSettings:h,size:y,boostLevel:b}){let f=Fe.useMemo(()=>{const A=(Array.isArray(a)?a:[a]).reduce((F,_)=>(F.push(...pr.QrSegment.makeSegments(_)),F),[]);return pr.QrCode.encodeSegments(A,I3[l],s,void 0,void 0,b)},[a,l,s,b]);const{cells:p,margin:g,numCells:x,calculatedImageSettings:v}=Fe.useMemo(()=>{let N=f.getModules();const A=D3(d,u),F=N.length+A*2,_=R3(N,y,A,h);return{cells:N,margin:A,numCells:F,calculatedImageSettings:_}},[f,y,h,d,u]);return{qrcode:f,margin:g,cells:p,numCells:x,calculatedImageSettings:v}}var U3=(function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0})(),$3=Fe.forwardRef(function(l,s){const d=l,{value:u,size:h=Sp,level:y=Np,bgColor:b=Cp,fgColor:f=Ep,includeMargin:p=zp,minVersion:g=Pp,boostLevel:x,marginSize:v,imageSettings:N}=d,F=Sl(d,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:_}=F,R=Sl(F,["style"]),M=N==null?void 0:N.src,D=Fe.useRef(null),V=Fe.useRef(null),q=Fe.useCallback(Se=>{D.current=Se,typeof s=="function"?s(Se):s&&(s.current=Se)},[s]),[G,re]=Fe.useState(!1),{margin:de,cells:X,numCells:fe,calculatedImageSettings:pe}=_p({value:u,level:y,minVersion:g,boostLevel:x,includeMargin:p,marginSize:v,imageSettings:N,size:h});Fe.useEffect(()=>{if(D.current!=null){const Se=D.current,je=Se.getContext("2d");if(!je)return;let Ne=X;const xe=V.current,k=pe!=null&&xe!==null&&xe.complete&&xe.naturalHeight!==0&&xe.naturalWidth!==0;k&&pe.excavation!=null&&(Ne=Lp(X,pe.excavation));const T=window.devicePixelRatio||1;Se.height=Se.width=h*T;const E=h/fe*T;je.scale(E,E),je.fillStyle=b,je.fillRect(0,0,fe,fe),je.fillStyle=f,U3?je.fill(new Path2D(Ap(Ne,de))):X.forEach(function(w,O){w.forEach(function(le,U){le&&je.fillRect(U+de,O+de,1,1)})}),pe&&(je.globalAlpha=pe.opacity),k&&je.drawImage(xe,pe.x+de,pe.y+de,pe.w,pe.h)}}),Fe.useEffect(()=>{re(!1)},[M]);const me=kl({height:h,width:h},_);let ve=null;return M!=null&&(ve=Fe.createElement("img",{src:M,key:M,style:{display:"none"},onLoad:()=>{re(!0)},ref:V,crossOrigin:pe==null?void 0:pe.crossOrigin})),Fe.createElement(Fe.Fragment,null,Fe.createElement("canvas",kl({style:me,height:h,width:h,ref:q,role:"img"},R)),ve)});$3.displayName="QRCodeCanvas";var Mp=Fe.forwardRef(function(l,s){const d=l,{value:u,size:h=Sp,level:y=Np,bgColor:b=Cp,fgColor:f=Ep,includeMargin:p=zp,minVersion:g=Pp,boostLevel:x,title:v,marginSize:N,imageSettings:A}=d,F=Sl(d,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:_,cells:R,numCells:M,calculatedImageSettings:D}=_p({value:u,level:y,minVersion:g,boostLevel:x,includeMargin:p,marginSize:N,imageSettings:A,size:h});let V=R,q=null;A!=null&&D!=null&&(D.excavation!=null&&(V=Lp(R,D.excavation)),q=Fe.createElement("image",{href:A.src,height:D.h,width:D.w,x:D.x+_,y:D.y+_,preserveAspectRatio:"none",opacity:D.opacity,crossOrigin:D.crossOrigin}));const G=Ap(V,_);return Fe.createElement("svg",kl({height:h,width:h,viewBox:`0 0 ${M} ${M}`,ref:s,role:"img"},F),!!v&&Fe.createElement("title",null,v),Fe.createElement("path",{fill:b,d:`M0,0 h${M}v${M}H0z`,shapeRendering:"crispEdges"}),Fe.createElement("path",{fill:f,d:G,shapeRendering:"crispEdges"}),q)});Mp.displayName="QRCodeSVG";const W3="/assets/certificate-template-XksKyxt5.png";function H3(a){return a?new Date(a).toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"}):""}function Ip({studentName:a,courseName:l,certificateCode:s,issuedDate:d,verificationUrl:u}){return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"stekora-certificate stekora-certificate-print",children:[r.jsx("img",{className:"stekora-certificate-template",src:W3,alt:""}),r.jsx("div",{className:"stekora-certificate-name",children:a}),r.jsx("div",{className:"stekora-certificate-course",children:l}),r.jsx("div",{className:"stekora-certificate-date",children:H3(d)}),r.jsx("div",{className:"stekora-certificate-id",children:s}),r.jsx("div",{className:"stekora-certificate-motto",children:`KEEP LEARNING
KEEP BUILDING
THE FUTURE`}),r.jsx("div",{className:"stekora-certificate-qr",children:r.jsx(Mp,{value:u,level:"M",marginSize:0})})]})]})}function B3(a){return be(`/final-exam/questions/${a}`)}function V3(a,l){return be(`/final-exam/questions/${a}`,{method:"POST",body:JSON.stringify(l)})}function Q3(a){return be(`/final-exam/questions/${a}`,{method:"DELETE"})}function Tp(){return be("/final-exam/submissions")}function Fp(a,l){return be(`/final-exam/submissions/${a}/review`,{method:"PATCH",body:JSON.stringify(l)})}function Op(a){return be(`/final-exam/submissions/${a}/certificate`,{method:"POST",body:JSON.stringify({})})}function Y3(a){return be(`/final-exam/certificate/${a}`)}function q3({code:a}){const[l,s]=z.useState(null),[d,u]=z.useState(!0),[h,y]=z.useState("");z.useEffect(()=>{b()},[a]);async function b(){if(!a){y("Certificate code is missing"),u(!1);return}try{u(!0),y("");const f=await Y3(a);s(f)}catch(f){console.error(f),y(f.message||"Certificate not found")}finally{u(!1)}}return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsx("main",{className:"verify-certificate-page",children:r.jsxs("div",{className:"verify-certificate-container",children:[d&&r.jsx("div",{className:"verify-certificate-message",children:"Checking certificate..."}),!d&&h&&r.jsx("div",{className:"verify-certificate-status",children:r.jsxs("div",{className:"verify-certificate-result invalid",children:[r.jsx(H,{icon:$x}),h]})}),!d&&l&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"verify-certificate-status",children:[r.jsxs("div",{className:"verify-certificate-result verified",children:[r.jsx(H,{icon:rp}),"Verified certificate issued by Stekora Tech"]}),r.jsxs("button",{className:"verify-certificate-print-button",type:"button",onClick:()=>window.print(),children:[r.jsx(H,{icon:Ox}),"Print / Download PDF"]})]}),r.jsx(Ip,{studentName:l.studentName,courseName:l.courseName,certificateCode:l.certificateCode,issuedDate:l.issuedDate,verificationUrl:`${window.location.origin}${window.location.pathname}#/certificate/${l.certificateCode}`})]})]})})]})}const Ff=[["Overview","/admin",tp,"Main"],["Courses","/admin/courses",ya,"Learning"],["Modules","/admin/modules",op,"Learning"],["Materials","/admin/materials",np,"Learning"],["Assessments","/admin/assessments",Tx,"Learning"],["Final Exam","/admin/final-exam",Kx,"Learning"],["Submissions","/admin/exam-submissions",Xx,"Management"],["Students","/admin/students",Rx,"Management"],["Products","/admin/products",Km,"Shop"],["Certificates","/admin/certificates",br,"Management"],["Settings","/admin/settings",Ul,"System"]];function G3(){return window.location.hash.replace("#","")||"/admin"}function X3(){const a=G3(),l=d=>{window.location.hash=d},s=()=>{localStorage.removeItem("token"),localStorage.removeItem("adminName"),window.location.hash="/login"};return r.jsxs("aside",{className:"admin-sidebar",children:[r.jsxs("div",{className:"admin-sidebar-brand",children:[r.jsx("span",{className:"admin-sidebar-mark",children:"ST"}),r.jsxs("span",{children:[r.jsx("strong",{children:"Stekora Tech"}),r.jsx("small",{children:"Admin Account"})]})]}),r.jsxs("nav",{className:"admin-sidebar-nav",children:[Ff.map(([d,u,h,y],b)=>{const f=b>0?Ff[b-1][3]:null;return r.jsxs("div",{className:"admin-sidebar-item",children:[y!==f&&r.jsx("span",{className:"admin-sidebar-group",children:y}),r.jsxs("button",{type:"button",className:a===u?"active":"",onClick:()=>l(u),children:[r.jsx("span",{className:"admin-sidebar-icon",children:r.jsx(H,{icon:h})}),r.jsx("span",{children:d})]})]},d)}),r.jsx("div",{className:"admin-sidebar-item admin-sidebar-logout",children:r.jsxs("button",{type:"button",onClick:s,children:[r.jsx("span",{className:"admin-sidebar-icon",children:r.jsx(H,{icon:Zm})}),r.jsx("span",{children:"Logout"})]})})]})]})}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K3=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Rp=(...a)=>a.filter((l,s,d)=>!!l&&l.trim()!==""&&d.indexOf(l)===s).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var J3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z3=z.forwardRef(({color:a="currentColor",size:l=24,strokeWidth:s=2,absoluteStrokeWidth:d,className:u="",children:h,iconNode:y,...b},f)=>z.createElement("svg",{ref:f,...J3,width:l,height:l,stroke:a,strokeWidth:d?Number(s)*24/Number(l):s,className:Rp("lucide",u),...b},[...y.map(([p,g])=>z.createElement(p,g)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=(a,l)=>{const s=z.forwardRef(({className:d,...u},h)=>z.createElement(Z3,{ref:h,iconNode:l,className:Rp(`lucide-${K3(a)}`,d),...u}));return s.displayName=`${a}`,s};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e4=Dp("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t4=Dp("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);function n4({placeholder:a}){return r.jsxs("label",{className:"search",children:[r.jsx(t4,{size:18}),r.jsx("input",{placeholder:a})]})}function r4({title:a}){return r.jsxs("div",{className:"topbar",children:[r.jsx("h1",{children:a}),r.jsx(n4,{placeholder:"Search admin data..."})]})}const pa="stekora-portal-theme-change";function Ki(a){return localStorage.getItem(`stekora-${a}-theme`)||"light"}function Up(a,l){localStorage.setItem(`stekora-${a}-theme`,l),window.dispatchEvent(new CustomEvent(pa,{detail:{accountType:a,theme:l}}))}function Lt({title:a,children:l}){const[s,d]=z.useState(()=>Ki("admin"));return z.useEffect(()=>{const u=h=>{var y;((y=h.detail)==null?void 0:y.accountType)==="admin"&&d(h.detail.theme)};return window.addEventListener(pa,u),()=>window.removeEventListener(pa,u)},[]),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:`portal admin-portal ${s==="dark"?"dark-mode":""}`,children:[r.jsx(X3,{}),r.jsxs("section",{className:"portal-main admin-portal-main",children:[r.jsx(r4,{title:a}),r.jsx("div",{className:"admin-portal-content",children:l})]})]})]})}const Di={question_type:"mcq",question:"",option_a:"",option_b:"",option_c:"",option_d:"",correct_option:"A",marks:1};function a4(a){return a.title||a.name||"Untitled course"}function al(){return[{...Di},{...Di},{...Di}]}function i4(){const[a,l]=z.useState([]),[s,d]=z.useState([]),[u,h]=z.useState([]),[y,b]=z.useState(""),[f,p]=z.useState(""),[g,x]=z.useState(al()),[v,N]=z.useState(!1),[A,F]=z.useState(""),[_,R]=z.useState(!0),[M,D]=z.useState(!1),[V,q]=z.useState("");z.useEffect(()=>{de()},[]),z.useEffect(()=>{y?X(y):(d([]),p(""))},[y]),z.useEffect(()=>{f?fe(f):h([])},[f]);const G=s.find(k=>String(k.id)===String(f)),re=z.useMemo(()=>{const k=A.trim().toLowerCase();return k?u.filter(T=>[T.id,T.question,T.question_type,T.correct_answer,T.marks].some(E=>String(E||"").toLowerCase().includes(k))):u},[u,A]);async function de(){var k;try{R(!0),q("");const T=await wr(),E=Array.isArray(T)?T:[];l(E),b((k=E[0])!=null&&k.id?String(E[0].id):"")}catch(T){console.error(T),q(T.message||"Failed to load courses")}finally{R(!1)}}async function X(k){var T;try{q("");const E=await Fn(k),w=Array.isArray(E)?E:[];d(w),p((T=w[0])!=null&&T.id?String(w[0].id):"")}catch(E){console.error(E),q(E.message||"Failed to load modules")}}async function fe(k){try{q("");const T=await Vv(k);h(Array.isArray(T)?T:[])}catch(T){console.error(T),q(T.message||"Failed to load assessment questions")}}function pe(){x(u.length>0?u.map(k=>({question_type:k.question_type||"mcq",question:k.question||"",option_a:k.option_a||"",option_b:k.option_b||"",option_c:k.option_c||"",option_d:k.option_d||"",correct_option:k.correct_option||k.correct_answer||"A",marks:k.marks||1})):al()),N(!0)}function me(){x(al()),N(!1)}function ve(k,T,E){x(w=>w.map((O,le)=>le===k?{...O,[T]:E}:O))}function Se(){x(k=>[...k,{...Di}])}function je(k){if(g.length<=3){alert("Assessment must have at least 3 questions");return}x(T=>T.filter((E,w)=>w!==k))}async function Ne(k){if(k.preventDefault(),!f){alert("Please choose a module first");return}const T=g.map(w=>({question_type:w.question_type,question:w.question.trim(),option_a:w.option_a.trim(),option_b:w.option_b.trim(),option_c:w.option_c.trim(),option_d:w.option_d.trim(),correct_option:w.correct_option,marks:Number(w.marks||1)}));if(T.length<3){alert("Assessment must have at least 3 questions");return}if(T.some(w=>w.question?w.question_type==="open"?!1:!w.option_a||!w.option_b||!w.correct_option:!0)){alert("Each MCQ needs a question, option A, option B, and correct answer");return}D(!0);try{await Qv(f,{questions:T}),alert("Assessment saved"),me(),await fe(f)}catch(w){console.error(w),alert(w.message||"Failed to save assessment")}finally{D(!1)}}async function xe(k){if(window.confirm("Delete this question?"))try{await Yv(k),await fe(f)}catch(T){console.error(T),alert(T.message||"Failed to delete question")}}return r.jsxs(Lt,{title:"Assessments",children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"admin-assessments-page",children:[r.jsxs("div",{className:"admin-assessments-actions-bar",children:[r.jsxs("button",{className:"admin-assessments-big-btn green",type:"button",onClick:pe,children:[r.jsx(H,{icon:Vx}),"Add Assessment"]}),r.jsxs("button",{className:"admin-assessments-big-btn",type:"button",onClick:()=>window.location.hash="/admin/modules",children:[r.jsx(H,{icon:Xt}),"Add Module"]})]}),r.jsxs("section",{className:"admin-assessments-panel",children:[r.jsxs("div",{className:"admin-assessments-header",children:[r.jsx("h2",{children:"Module Assessments"}),r.jsxs("p",{children:["Choose a course and module, then create at least three questions. Pass mark is 60%.",G?` Current module: ${G.title}.`:""]})]}),r.jsxs("div",{className:"admin-assessments-select-row",children:[r.jsxs("label",{className:"admin-assessments-field",children:["Course",r.jsxs("select",{className:"admin-assessments-select",value:y,onChange:k=>b(k.target.value),disabled:_||a.length===0,children:[a.length===0&&r.jsx("option",{value:"",children:"No courses yet"}),a.map(k=>r.jsx("option",{value:k.id,children:a4(k)},k.id))]})]}),r.jsxs("label",{className:"admin-assessments-field",children:["Module",r.jsxs("select",{className:"admin-assessments-select",value:f,onChange:k=>p(k.target.value),disabled:s.length===0,children:[s.length===0&&r.jsx("option",{value:"",children:"No modules yet"}),s.map(k=>r.jsx("option",{value:k.id,children:k.title},k.id))]})]})]}),r.jsxs("div",{className:"admin-assessments-toolbar",children:[r.jsxs("div",{className:"admin-assessments-count",children:["Showing ",r.jsx("strong",{children:re.length})," of ",r.jsx("strong",{children:u.length})," questions"]}),r.jsxs("label",{className:"admin-assessments-search-wrap",children:["Search questions:",r.jsx("input",{className:"admin-assessments-search",type:"search",value:A,onChange:k=>F(k.target.value)})]})]}),V&&r.jsx("div",{className:"admin-assessments-empty",children:V}),_&&r.jsx("div",{className:"admin-assessments-empty",children:"Loading courses..."}),!_&&a.length===0&&r.jsx("div",{className:"admin-assessments-empty",children:"No courses yet."}),!_&&a.length>0&&s.length===0&&r.jsx("div",{className:"admin-assessments-empty",children:"No modules yet. Create modules first."}),!_&&f&&u.length===0&&r.jsx("div",{className:"admin-assessments-empty",children:"No assessment questions have been saved for this module yet."}),!_&&f&&u.length>0&&r.jsx("div",{className:"admin-assessments-table-wrap",children:r.jsxs("table",{className:"admin-assessments-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"ID"}),r.jsx("th",{children:"Question"}),r.jsx("th",{children:"Type"}),r.jsx("th",{children:"Correct"}),r.jsx("th",{children:"Marks"}),r.jsx("th",{children:"Actions"})]})}),r.jsx("tbody",{children:re.map(k=>r.jsxs("tr",{children:[r.jsx("td",{children:k.id}),r.jsx("td",{children:k.question}),r.jsx("td",{children:k.question_type}),r.jsx("td",{children:k.correct_answer||"Manual"}),r.jsx("td",{children:k.marks}),r.jsxs("td",{children:[r.jsxs("button",{className:"admin-assessment-action edit",type:"button",onClick:pe,children:[r.jsx(H,{icon:va}),"Edit"]}),r.jsxs("button",{className:"admin-assessment-action delete",type:"button",onClick:()=>xe(k.id),children:[r.jsx(H,{icon:yr}),"Delete"]})]})]},k.id))})]})})]}),v&&r.jsx("div",{className:"admin-assessments-modal-backdrop",role:"presentation",onClick:me,children:r.jsxs("section",{className:"admin-assessments-modal",role:"dialog","aria-modal":"true",onClick:k=>k.stopPropagation(),children:[r.jsxs("div",{className:"admin-assessments-modal-head",children:[r.jsxs("div",{className:"admin-assessments-header",children:[r.jsx("h2",{children:"Section Assessment"}),r.jsx("p",{children:"Save all questions for the selected module. This replaces the current assessment for that module."})]}),r.jsx("button",{className:"admin-assessments-close",type:"button",onClick:me,"aria-label":"Close assessment form",children:"x"})]}),r.jsxs("form",{className:"admin-assessments-form",onSubmit:Ne,children:[g.map((k,T)=>r.jsxs("div",{className:"admin-assessment-question-card",children:[r.jsxs("div",{className:"admin-assessment-question-head",children:[r.jsxs("span",{children:["Question ",T+1]}),g.length>3&&r.jsx("button",{className:"admin-assessments-danger",type:"button",onClick:()=>je(T),children:"Remove"})]}),r.jsxs("label",{className:"admin-assessments-field",children:["Question type",r.jsxs("select",{className:"admin-assessments-select",value:k.question_type,onChange:E=>ve(T,"question_type",E.target.value),children:[r.jsx("option",{value:"mcq",children:"Multiple Choice"}),r.jsx("option",{value:"open",children:"Open Answer"})]})]}),r.jsxs("label",{className:"admin-assessments-field",children:["Question",r.jsx("textarea",{className:"admin-assessments-textarea",value:k.question,onChange:E=>ve(T,"question",E.target.value),placeholder:"Write question..."})]}),k.question_type==="mcq"&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"admin-assessment-options-grid",children:["a","b","c","d"].map(E=>r.jsxs("label",{className:"admin-assessments-field",children:["Option ",E.toUpperCase(),r.jsx("input",{className:"admin-assessments-input",value:k[`option_${E}`],onChange:w=>ve(T,`option_${E}`,w.target.value)})]},E))}),r.jsxs("label",{className:"admin-assessments-field",children:["Correct answer",r.jsxs("select",{className:"admin-assessments-select",value:k.correct_option,onChange:E=>ve(T,"correct_option",E.target.value),children:[r.jsx("option",{value:"A",children:"A"}),r.jsx("option",{value:"B",children:"B"}),r.jsx("option",{value:"C",children:"C"}),r.jsx("option",{value:"D",children:"D"})]})]})]}),r.jsxs("label",{className:"admin-assessments-field",children:["Marks",r.jsx("input",{className:"admin-assessments-input",type:"number",min:"1",value:k.marks,onChange:E=>ve(T,"marks",E.target.value)})]})]},`question-${T}`)),r.jsxs("div",{className:"admin-assessments-form-actions",children:[r.jsxs("button",{className:"admin-assessments-secondary",type:"button",onClick:Se,children:[r.jsx(H,{icon:Xt}),"Add Question"]}),r.jsx("button",{className:"admin-assessments-primary",type:"submit",disabled:M,children:M?"Saving...":"Save Assessment"}),r.jsx("button",{className:"admin-assessments-secondary",type:"button",onClick:me,children:"Cancel"})]})]})]})})]})]})}function s4({columns:a,rows:l}){return r.jsxs("table",{className:"table",children:[r.jsx("thead",{children:r.jsx("tr",{children:a.map(s=>r.jsx("th",{children:s},s))})}),r.jsx("tbody",{children:l.map(s=>r.jsx("tr",{children:a.map(d=>r.jsx("td",{children:s[d.toLowerCase()]},d))},s.id))})]})}function o4(){return r.jsxs(Lt,{title:"Certificates",children:[r.jsx(s4,{columns:["Student","Course","Code","Status"],rows:[{id:1,student:"Sample Student",course:"Web Development",code:"STK-2026-001",status:"verified"}]}),r.jsxs("div",{className:"list-panel",children:[r.jsx("button",{className:"primary",children:"Open Verification Link"}),r.jsx("button",{children:"Revoke Certificate"})]})]})}const Of={title:"",category:"Development",description:"",image_url:"",image:null,modules:[""]};function Ii(a){return a.title||a.name||"Untitled course"}function l4(){const[a,l]=z.useState([]),[s,d]=z.useState(Of),[u,h]=z.useState(null),[y,b]=z.useState(!1),[f,p]=z.useState(""),[g,x]=z.useState(!0),[v,N]=z.useState(!1),[A,F]=z.useState(""),[_,R]=z.useState(null),[M,D]=z.useState([]),[V,q]=z.useState(""),[G,re]=z.useState(!1);z.useEffect(()=>{X()},[]);const de=z.useMemo(()=>{const U=f.trim().toLowerCase();return U?a.filter(K=>[K.id,Ii(K),K.category,K.description].some(ie=>String(ie||"").toLowerCase().includes(U))):a},[a,f]);async function X(){try{x(!0),F("");const U=await wr();l(Array.isArray(U)?U:[])}catch(U){console.error(U),F(U.message||"Failed to load courses")}finally{x(!1)}}function fe(){d(Of),h(null)}function pe(){fe(),b(!0)}function me(){fe(),b(!1)}function ve(U){h(U.id),d({title:Ii(U),category:U.category||"Development",description:U.description||"",image_url:U.image_url||"",image:null,modules:[""]}),b(!0)}function Se(U){d({...s,[U.target.name]:U.target.value})}function je(U,K){d({...s,modules:s.modules.map((ie,ke)=>ke===U?K:ie)})}function Ne(){d({...s,modules:[...s.modules,""]})}function xe(U){d({...s,modules:s.modules.filter((K,ie)=>ie!==U)})}async function k(U){if(U.preventDefault(),v)return;const K=s.title.trim();if(!K){alert("Course title is required");return}N(!0);try{const ie=new FormData;ie.append("title",K),ie.append("category",s.category.trim()),ie.append("description",s.description.trim()),ie.append("image_url",s.image_url.trim()),ie.append("modules",JSON.stringify(s.modules.map(ke=>ke.trim()).filter(Boolean))),s.image&&ie.append("image",s.image),u?(await Dv(u,ie),alert("Course updated")):(await Rv(ie),alert("Course created")),me(),await X()}catch(ie){console.error(ie),alert(ie.message||"Failed to save course")}finally{N(!1)}}async function T(U){if(window.confirm("Delete this course?"))try{await Uv(U),u===U&&fe(),await X()}catch(K){console.error(K),alert(K.message||"Failed to delete course")}}async function E(U){R(U),q(""),D([]),re(!0);try{const K=await Fn(U.id);D(Array.isArray(K)?K:[])}catch(K){console.error(K),alert(K.message||"Failed to load curriculum")}finally{re(!1)}}function w(){R(null),D([]),q("")}async function O(U){if(U.preventDefault(),!(!_||!V.trim()))try{await xp(_.id,{title:V.trim()}),q("");const K=await Fn(_.id);D(Array.isArray(K)?K:[]),await X()}catch(K){console.error(K),alert(K.message||"Failed to add module")}}async function le(U){if(window.confirm("Delete this module?"))try{await vp(U);const K=await Fn(_.id);D(Array.isArray(K)?K:[]),await X()}catch(K){console.error(K),alert(K.message||"Failed to delete module")}}return r.jsxs(Lt,{title:"Public Courses",children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"admin-courses-page",children:[r.jsxs("div",{className:"admin-courses-actions-bar",children:[r.jsxs("button",{className:"admin-courses-big-btn green",type:"button",onClick:pe,children:[r.jsx(H,{icon:ya}),"Add public course"]}),r.jsxs("button",{className:"admin-courses-big-btn",type:"button",onClick:pe,children:[r.jsx(H,{icon:Xt}),"New Course"]}),r.jsxs("button",{className:"admin-courses-big-btn",type:"button",onClick:()=>alert("Excel import will be added after upload support."),children:[r.jsx(H,{icon:Xm}),"Import Courses (Excel)"]})]}),r.jsxs("section",{className:"admin-courses-panel",children:[r.jsxs("div",{className:"admin-courses-header",children:[r.jsxs("div",{children:[r.jsx("h2",{children:"Public Courses"}),r.jsx("p",{children:"Manage the courses that appear on the public study page."})]}),r.jsx("button",{className:"admin-courses-primary",type:"button",onClick:pe,children:"Add public course"})]}),r.jsxs("div",{className:"admin-courses-toolbar",children:[r.jsxs("div",{className:"admin-courses-count",children:["Showing ",r.jsx("strong",{children:de.length})," of ",r.jsx("strong",{children:a.length})," public courses"]}),r.jsxs("label",{className:"admin-courses-search-wrap",children:["Search courses:",r.jsx("input",{className:"admin-courses-search",type:"search",value:f,onChange:U=>p(U.target.value)})]})]}),g&&r.jsx("div",{className:"admin-courses-empty",children:"Loading courses..."}),A&&r.jsx("div",{className:"admin-courses-empty",children:A}),!g&&!A&&a.length===0&&r.jsx("div",{className:"admin-courses-empty",children:"No courses in the database yet."}),!g&&!A&&a.length>0&&r.jsx("div",{className:"admin-courses-table-wrap",children:r.jsxs("table",{className:"admin-courses-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"ID"}),r.jsx("th",{children:"Image"}),r.jsx("th",{children:"Name"}),r.jsx("th",{children:"Category"}),r.jsx("th",{children:"Description"}),r.jsx("th",{children:"Lessons"}),r.jsx("th",{children:"Actions"})]})}),r.jsx("tbody",{children:de.map(U=>r.jsxs("tr",{children:[r.jsx("td",{children:U.id}),r.jsx("td",{children:U.image_url?r.jsx("img",{className:"admin-courses-image",src:At(U.image_url),alt:""}):"No image"}),r.jsx("td",{children:Ii(U)}),r.jsx("td",{children:U.category||"Uncategorized"}),r.jsx("td",{children:U.description||"No description"}),r.jsx("td",{children:U.modules_count||U.module_count||0}),r.jsx("td",{children:r.jsxs("div",{className:"admin-courses-row-actions",children:[r.jsxs("button",{className:"admin-course-action edit",type:"button",onClick:()=>ve(U),children:[r.jsx(H,{icon:va}),"Edit"]}),r.jsxs("button",{className:"admin-course-action curriculum",type:"button",onClick:()=>E(U),children:[r.jsx(H,{icon:rv}),"Curriculum"]}),r.jsxs("button",{className:"admin-course-action delete",type:"button",onClick:()=>T(U.id),children:[r.jsx(H,{icon:yr}),"Delete"]})]})})]},U.id))})]})})]}),y&&r.jsx("div",{className:"admin-courses-modal-backdrop",role:"presentation",onClick:me,children:r.jsxs("section",{className:"admin-courses-modal",role:"dialog","aria-modal":"true",onClick:U=>U.stopPropagation(),children:[r.jsxs("div",{className:"admin-courses-modal-head",children:[r.jsx("h2",{children:u?"Edit public course":"Add public course"}),r.jsx("button",{className:"admin-courses-close",type:"button",onClick:me,"aria-label":"Close course form",children:"x"})]}),r.jsxs("form",{className:"admin-courses-form",onSubmit:k,children:[r.jsxs("div",{className:"admin-courses-grid",children:[r.jsxs("label",{children:["Course title",r.jsx("input",{name:"title",value:s.title,onChange:Se,required:!0})]}),r.jsxs("label",{children:["Category",r.jsxs("select",{name:"category",value:s.category,onChange:Se,children:[r.jsx("option",{children:"Development"}),r.jsx("option",{children:"Backend"}),r.jsx("option",{children:"IoT"}),r.jsx("option",{children:"Design"}),r.jsx("option",{children:"Security"}),r.jsx("option",{children:"Infrastructure"})]})]}),r.jsxs("label",{children:["Course image",r.jsx("input",{className:"admin-courses-file-input",type:"file",accept:"image/*",onChange:U=>{var K;return d({...s,image:((K=U.target.files)==null?void 0:K[0])||null})}}),r.jsx("span",{className:"admin-courses-help",children:"Choose an image from your computer."})]})]}),(s.image||s.image_url)&&r.jsx("img",{className:"admin-courses-preview",src:s.image?URL.createObjectURL(s.image):At(s.image_url),alt:"Course preview"}),r.jsxs("label",{children:["Description",r.jsx("textarea",{name:"description",value:s.description,onChange:Se})]}),!u&&r.jsxs("label",{children:["First curriculum modules",r.jsxs("div",{className:"admin-courses-module-drafts",children:[s.modules.map((U,K)=>r.jsxs("div",{className:"admin-courses-module-row",children:[r.jsx("input",{value:U,onChange:ie=>je(K,ie.target.value),placeholder:`Module ${K+1}`}),s.modules.length>1&&r.jsx("button",{className:"admin-courses-small-btn",type:"button",onClick:()=>xe(K),children:"Remove"})]},`module-${K}`)),r.jsx("button",{className:"admin-courses-small-btn",type:"button",onClick:Ne,children:"Add module"})]})]}),r.jsxs("div",{className:"admin-courses-actions",children:[r.jsx("button",{className:"admin-courses-primary",type:"submit",disabled:v,children:v?"Saving...":u?"Update Course":"Save Course"}),r.jsx("button",{className:"admin-courses-secondary",type:"button",onClick:me,children:"Cancel"})]})]})]})}),_&&r.jsx("div",{className:"admin-courses-modal-backdrop",role:"presentation",onClick:w,children:r.jsxs("section",{className:"admin-courses-modal",role:"dialog","aria-modal":"true",onClick:U=>U.stopPropagation(),children:[r.jsxs("div",{className:"admin-courses-modal-head",children:[r.jsxs("h2",{children:["Curriculum: ",Ii(_)]}),r.jsx("button",{className:"admin-courses-close",type:"button",onClick:w,"aria-label":"Close curriculum",children:"x"})]}),r.jsxs("form",{className:"admin-courses-form",onSubmit:O,children:[r.jsxs("label",{children:["Module title",r.jsx("input",{value:V,onChange:U=>q(U.target.value),placeholder:"Introduction"})]}),r.jsxs("div",{className:"admin-courses-actions",children:[r.jsx("button",{className:"admin-courses-primary",type:"submit",children:"Add Module"}),r.jsx("button",{className:"admin-courses-secondary",type:"button",onClick:w,children:"Done"})]})]}),G&&r.jsx("div",{className:"admin-courses-empty",children:"Loading curriculum..."}),!G&&M.length===0&&r.jsx("div",{className:"admin-courses-empty",children:"No modules have been added for this course yet."}),!G&&M.length>0&&r.jsx("ul",{className:"admin-courses-module-list",children:M.map(U=>r.jsxs("li",{children:[r.jsxs("span",{children:[U.order_number,". ",U.title]}),r.jsx("button",{className:"admin-courses-danger",type:"button",onClick:()=>le(U.id),children:"Delete"})]},U.id))})]})})]})]})}function c4(){const[a,l]=z.useState([]),[s,d]=z.useState(""),[u,h]=z.useState(!0),[y,b]=z.useState("");z.useEffect(()=>{p()},[]);const f=z.useMemo(()=>{const v=s.trim().toLowerCase();return v?a.filter(N=>[N.id,N.student_name,N.student_email,N.course_title,N.status,N.score].some(A=>String(A||"").toLowerCase().includes(v))):a},[a,s]);async function p(){try{h(!0),b("");const v=await Tp();l(Array.isArray(v)?v:[])}catch(v){console.error(v),b(v.message||"Failed to load exam submissions")}finally{h(!1)}}async function g(v,N){const A=window.prompt("Enter the student's total score percentage",v.score||0);if(A===null)return;const F=Number(A);if(!Number.isFinite(F)||F<0||F>100){alert("Enter a score between 0 and 100");return}try{await Fp(v.id,{score:F,status:N,allow_reexam:N==="rejected"}),await p()}catch(_){console.error(_),alert(_.message||"Failed to review submission")}}async function x(v){if(Number(v.score||0)<60&&v.status!=="approved"){alert("Approve a competent student before assigning a certificate");return}try{const N=await Op(v.id);alert(`Certificate: ${N.certificateCode}`),await p()}catch(N){console.error(N),alert(N.message||"Failed to assign certificate")}}return r.jsxs(Lt,{title:"Exam Submissions",children:[r.jsx("style",{children:`
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
      `}),r.jsx("div",{className:"admin-submissions-page",children:r.jsxs("section",{className:"admin-data-panel",children:[r.jsxs("div",{className:"admin-data-toolbar",children:[r.jsxs("div",{className:"admin-data-count",children:["Showing ",f.length," of ",a.length," submissions"]}),r.jsxs("div",{className:"admin-data-tools",children:[r.jsxs("label",{className:"admin-data-search",children:["Search:",r.jsx("input",{type:"search",value:s,onChange:v=>d(v.target.value)})]}),r.jsxs("button",{className:"admin-refresh-button",type:"button",onClick:p,children:[r.jsx(H,{icon:Rl}),"Refresh"]})]})]}),u&&r.jsx("div",{className:"admin-data-message",children:"Loading submissions..."}),y&&r.jsx("div",{className:"admin-data-message",children:y}),!u&&!y&&a.length===0&&r.jsx("div",{className:"admin-data-message",children:"No final exam submissions found."}),!u&&!y&&a.length>0&&r.jsx("div",{className:"admin-live-table-wrap",children:r.jsxs("table",{className:"admin-live-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"ID"}),r.jsx("th",{children:"Student"}),r.jsx("th",{children:"Email"}),r.jsx("th",{children:"Course"}),r.jsx("th",{children:"Status"}),r.jsx("th",{children:"Score"}),r.jsx("th",{children:"Certificate"}),r.jsx("th",{children:"Submitted"}),r.jsx("th",{children:"Actions"})]})}),r.jsx("tbody",{children:f.map(v=>r.jsxs("tr",{children:[r.jsx("td",{children:v.id}),r.jsx("td",{children:v.student_name}),r.jsx("td",{children:v.student_email}),r.jsx("td",{children:v.course_title}),r.jsx("td",{children:v.status}),r.jsxs("td",{children:[v.score||0,"%"]}),r.jsx("td",{children:v.certificate_code||"Not assigned"}),r.jsx("td",{children:new Date(v.created_at).toLocaleString()}),r.jsx("td",{children:r.jsxs("div",{className:"admin-row-actions",children:[r.jsxs("button",{className:"admin-row-action approve",type:"button",onClick:()=>g(v,"approved"),children:[r.jsx(H,{icon:ep})," Approve"]}),r.jsxs("button",{className:"admin-row-action reexam",type:"button",onClick:()=>g(v,"rejected"),children:[r.jsx(H,{icon:Jx})," Re-exam"]}),r.jsxs("button",{className:"admin-row-action certificate",type:"button",onClick:()=>x(v),children:[r.jsx(H,{icon:br})," Certificate"]})]})})]},v.id))})]})})]})})]})}const $p={question_type:"mcq",question:"",option_a:"",option_b:"",option_c:"",option_d:"",correct_option:"A",marks:1};function Rf(a){return a.title||a.name||"Untitled course"}function il(){return[{...$p}]}function d4(){const[a,l]=z.useState([]),[s,d]=z.useState(""),[u,h]=z.useState([]),[y,b]=z.useState([]),[f,p]=z.useState(il()),[g,x]=z.useState(!1),[v,N]=z.useState(""),[A,F]=z.useState(!0),[_,R]=z.useState(!1),[M,D]=z.useState("");z.useEffect(()=>{G(),de()},[]),z.useEffect(()=>{s?re(s):h([])},[s]);const V=a.find(k=>String(k.id)===String(s)),q=z.useMemo(()=>{const k=v.trim().toLowerCase();return k?y.filter(T=>[T.id,T.student_name,T.student_email,T.course_title,T.status,T.score,T.certificate_code].some(E=>String(E||"").toLowerCase().includes(k))):y},[y,v]);async function G(){var k;try{F(!0),D("");const T=await wr(),E=Array.isArray(T)?T:[];l(E),d((k=E[0])!=null&&k.id?String(E[0].id):"")}catch(T){console.error(T),D(T.message||"Failed to load courses")}finally{F(!1)}}async function re(k){try{D("");const T=await B3(k);h(Array.isArray(T)?T:[])}catch(T){console.error(T),D(T.message||"Failed to load final exam questions")}}async function de(){try{const k=await Tp();b(Array.isArray(k)?k:[])}catch(k){console.error(k)}}function X(){p(u.length>0?u.map(k=>({question_type:k.question_type||k.type||"mcq",question:k.question||"",option_a:k.option_a||"",option_b:k.option_b||"",option_c:k.option_c||"",option_d:k.option_d||"",correct_option:k.correct_option||k.correct_answer||"A",marks:k.marks||1})):il()),x(!0)}function fe(){p(il()),x(!1)}function pe(k,T,E){p(w=>w.map((O,le)=>le===k?{...O,[T]:E}:O))}function me(){p(k=>[...k,{...$p}])}function ve(k){if(f.length<=1){alert("Final exam needs at least one question");return}p(T=>T.filter((E,w)=>w!==k))}async function Se(k){if(k.preventDefault(),!s){alert("Please select a course first");return}const T=f.map(w=>({question_type:w.question_type,question:w.question.trim(),option_a:w.option_a.trim(),option_b:w.option_b.trim(),option_c:w.option_c.trim(),option_d:w.option_d.trim(),correct_option:w.correct_option,marks:Number(w.marks||1)}));if(T.some(w=>w.question?w.question_type==="open"?!1:!w.option_a||!w.option_b||!w.correct_option:!0)){alert("Each MCQ needs a question, option A, option B, and correct answer");return}R(!0);try{await V3(s,{questions:T}),alert("Final exam questions saved"),fe(),await re(s)}catch(w){console.error(w),alert(w.message||"Failed to save final exam questions")}finally{R(!1)}}async function je(k){if(window.confirm("Delete this final exam question?"))try{await Q3(k),await re(s)}catch(T){console.error(T),alert(T.message||"Failed to delete question")}}async function Ne(k,T){const E=window.prompt("Enter total score percent",k.score||0);if(E!==null)try{await Fp(k.id,{score:Number(E),status:T,allow_reexam:T==="rejected"}),await de()}catch(w){console.error(w),alert(w.message||"Failed to review submission")}}async function xe(k){try{const T=await Op(k);alert(`Certificate assigned: ${T.certificateCode}`),await de()}catch(T){console.error(T),alert(T.message||"Failed to assign certificate")}}return r.jsxs(Lt,{title:"Final Exam & Certificates",children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"admin-exam-page",children:[r.jsxs("div",{className:"admin-exam-actions-bar",children:[r.jsxs("button",{className:"admin-exam-big-btn green",type:"button",onClick:X,children:[r.jsx(H,{icon:Hx}),"Add Final Exam"]}),r.jsxs("button",{className:"admin-exam-big-btn",type:"button",onClick:de,children:[r.jsx(H,{icon:Rl}),"Refresh"]})]}),r.jsxs("section",{className:"admin-exam-panel",children:[r.jsxs("div",{className:"admin-exam-header",children:[r.jsx("h2",{children:"Final Exam Questions"}),r.jsxs("p",{children:["Set final exam questions separately from student grading. Supports MCQ and open questions.",V?` Current course: ${Rf(V)}.`:""]})]}),r.jsxs("div",{className:"admin-exam-controls",children:[r.jsxs("label",{className:"admin-exam-field",children:["Course",r.jsxs("select",{className:"admin-exam-select",value:s,onChange:k=>d(k.target.value),disabled:A||a.length===0,children:[a.length===0&&r.jsx("option",{value:"",children:"No courses yet"}),a.map(k=>r.jsx("option",{value:k.id,children:Rf(k)},k.id))]})]}),r.jsxs("button",{className:"admin-exam-primary",type:"button",onClick:X,children:[r.jsx(H,{icon:Xt}),"Add/Edit Questions"]})]}),M&&r.jsx("div",{className:"admin-exam-empty",children:M}),A&&r.jsx("div",{className:"admin-exam-empty",children:"Loading courses..."}),!A&&s&&u.length===0&&r.jsx("div",{className:"admin-exam-empty",children:"Select a course above to create or edit its final exam questions."}),!A&&s&&u.length>0&&r.jsx("div",{className:"admin-exam-table-wrap",children:r.jsxs("table",{className:"admin-exam-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"ID"}),r.jsx("th",{children:"Question"}),r.jsx("th",{children:"Type"}),r.jsx("th",{children:"Correct"}),r.jsx("th",{children:"Marks"}),r.jsx("th",{children:"Actions"})]})}),r.jsx("tbody",{children:u.map(k=>r.jsxs("tr",{children:[r.jsx("td",{children:k.id}),r.jsx("td",{children:k.question}),r.jsx("td",{children:k.question_type}),r.jsx("td",{children:k.correct_answer||"Manual"}),r.jsx("td",{children:k.marks}),r.jsxs("td",{children:[r.jsxs("button",{className:"admin-exam-action edit",type:"button",onClick:X,children:[r.jsx(H,{icon:va}),"Edit"]}),r.jsxs("button",{className:"admin-exam-action delete",type:"button",onClick:()=>je(k.id),children:[r.jsx(H,{icon:yr}),"Delete"]})]})]},k.id))})]})})]}),r.jsxs("section",{className:"admin-exam-panel",children:[r.jsxs("div",{className:"admin-exam-header",children:[r.jsx("h2",{children:"Final Exam Grading & Submissions"}),r.jsx("p",{children:"Review answers, allow re-exam for failed students, and assign certificates only to competent students."})]}),r.jsxs("div",{className:"admin-exam-toolbar",children:[r.jsxs("div",{className:"admin-exam-count",children:["Showing ",r.jsx("strong",{children:q.length})," of ",r.jsx("strong",{children:y.length})," submissions"]}),r.jsxs("label",{className:"admin-exam-search-wrap",children:["Search submissions:",r.jsx("input",{className:"admin-exam-search",type:"search",value:v,onChange:k=>N(k.target.value)})]}),r.jsx("button",{className:"admin-exam-primary",type:"button",onClick:de,children:"Refresh"})]}),y.length===0?r.jsx("div",{className:"admin-exam-empty",children:"No final exam submissions found."}):r.jsx("div",{className:"admin-exam-table-wrap",children:r.jsxs("table",{className:"admin-exam-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"ID"}),r.jsx("th",{children:"Student"}),r.jsx("th",{children:"Email"}),r.jsx("th",{children:"Course"}),r.jsx("th",{children:"Status"}),r.jsx("th",{children:"Total Score"}),r.jsx("th",{children:"Certificate"}),r.jsx("th",{children:"Re-exam"}),r.jsx("th",{children:"Submitted"}),r.jsx("th",{children:"Actions"})]})}),r.jsx("tbody",{children:q.map(k=>r.jsxs("tr",{children:[r.jsx("td",{children:k.id}),r.jsx("td",{children:k.student_name}),r.jsx("td",{children:k.student_email}),r.jsx("td",{children:k.course_title}),r.jsx("td",{children:k.status}),r.jsxs("td",{children:[k.score||0,"%"]}),r.jsx("td",{children:k.certificate_code||"Not assigned"}),r.jsx("td",{children:k.allow_reexam?"Yes":"No"}),r.jsx("td",{children:k.created_at?new Date(k.created_at).toLocaleDateString():"-"}),r.jsxs("td",{children:[r.jsx("button",{className:"admin-exam-action pass",type:"button",onClick:()=>Ne(k,"approved"),children:"Approve"}),r.jsx("button",{className:"admin-exam-action delete",type:"button",onClick:()=>Ne(k,"rejected"),children:"Re-exam"}),r.jsxs("button",{className:"admin-exam-action cert",type:"button",onClick:()=>xe(k.id),children:[r.jsx(H,{icon:br}),"Certificate"]})]})]},k.id))})]})})]}),g&&r.jsx("div",{className:"admin-exam-modal-backdrop",role:"presentation",onClick:fe,children:r.jsxs("section",{className:"admin-exam-modal",role:"dialog","aria-modal":"true",onClick:k=>k.stopPropagation(),children:[r.jsxs("div",{className:"admin-exam-modal-head",children:[r.jsxs("div",{className:"admin-exam-header",children:[r.jsx("h2",{children:"Final Exam Questions"}),r.jsx("p",{children:"Saving replaces all final exam questions for the selected course."})]}),r.jsx("button",{className:"admin-exam-close",type:"button",onClick:fe,"aria-label":"Close final exam form",children:"x"})]}),r.jsxs("form",{className:"admin-exam-form",onSubmit:Se,children:[f.map((k,T)=>r.jsxs("div",{className:"admin-exam-question-card",children:[r.jsxs("div",{className:"admin-exam-question-head",children:[r.jsxs("span",{children:["Question ",T+1]}),f.length>1&&r.jsx("button",{className:"admin-exam-danger",type:"button",onClick:()=>ve(T),children:"Remove"})]}),r.jsxs("label",{className:"admin-exam-field",children:["Question type",r.jsxs("select",{className:"admin-exam-select",value:k.question_type,onChange:E=>pe(T,"question_type",E.target.value),children:[r.jsx("option",{value:"mcq",children:"Multiple Choice"}),r.jsx("option",{value:"open",children:"Open Answer"})]})]}),r.jsxs("label",{className:"admin-exam-field",children:["Question",r.jsx("textarea",{className:"admin-exam-textarea",value:k.question,onChange:E=>pe(T,"question",E.target.value),placeholder:"Write final exam question..."})]}),k.question_type==="mcq"&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"admin-exam-options-grid",children:["a","b","c","d"].map(E=>r.jsxs("label",{className:"admin-exam-field",children:["Option ",E.toUpperCase(),r.jsx("input",{className:"admin-exam-input",value:k[`option_${E}`],onChange:w=>pe(T,`option_${E}`,w.target.value)})]},E))}),r.jsxs("label",{className:"admin-exam-field",children:["Correct answer",r.jsxs("select",{className:"admin-exam-select",value:k.correct_option,onChange:E=>pe(T,"correct_option",E.target.value),children:[r.jsx("option",{value:"A",children:"A"}),r.jsx("option",{value:"B",children:"B"}),r.jsx("option",{value:"C",children:"C"}),r.jsx("option",{value:"D",children:"D"})]})]})]}),r.jsxs("label",{className:"admin-exam-field",children:["Marks",r.jsx("input",{className:"admin-exam-input",type:"number",min:"1",value:k.marks,onChange:E=>pe(T,"marks",E.target.value)})]})]},`exam-question-${T}`)),r.jsxs("div",{className:"admin-exam-form-actions",children:[r.jsxs("button",{className:"admin-exam-secondary",type:"button",onClick:me,children:[r.jsx(H,{icon:Xt}),"Add Question"]}),r.jsx("button",{className:"admin-exam-primary",type:"submit",disabled:_,children:_?"Saving...":"Save Final Exam"}),r.jsx("button",{className:"admin-exam-secondary",type:"button",onClick:fe,children:"Cancel"})]})]})]})})]})]})}const Df={title:"",type:"section",content:"",youtube_url:"",file_url:"",file:null};function u4(a){return a.title||a.name||"Untitled course"}function Uf(a){return a.youtube_url?"Video":a.file_url?"File":"Section"}function f4(){const[a,l]=z.useState([]),[s,d]=z.useState([]),[u,h]=z.useState([]),[y,b]=z.useState(""),[f,p]=z.useState(""),[g,x]=z.useState(Df),[v,N]=z.useState(null),[A,F]=z.useState(!1),[_,R]=z.useState(""),[M,D]=z.useState(!0),[V,q]=z.useState(!1),[G,re]=z.useState("");z.useEffect(()=>{fe()},[]),z.useEffect(()=>{y?pe(y):(d([]),p(""))},[y]),z.useEffect(()=>{f?me(f):h([])},[f]);const de=s.find(E=>String(E.id)===String(f)),X=z.useMemo(()=>{const E=_.trim().toLowerCase();return E?u.filter(w=>[w.id,w.title,w.content,w.youtube_url,w.file_url,Uf(w)].some(O=>String(O||"").toLowerCase().includes(E))):u},[u,_]);async function fe(){var E;try{D(!0),re("");const w=await wr(),O=Array.isArray(w)?w:[];l(O),b((E=O[0])!=null&&E.id?String(O[0].id):"")}catch(w){console.error(w),re(w.message||"Failed to load courses")}finally{D(!1)}}async function pe(E){var w;try{re("");const O=await Fn(E),le=Array.isArray(O)?O:[];d(le),p((w=le[0])!=null&&w.id?String(le[0].id):"")}catch(O){console.error(O),re(O.message||"Failed to load modules")}}async function me(E){try{re("");const w=await $v(E);h(Array.isArray(w)?w:[])}catch(w){console.error(w),re(w.message||"Failed to load materials")}}function ve(){x(Df),N(null)}function Se(){ve(),F(!0)}function je(){ve(),F(!1)}function Ne(E){x({...g,[E.target.name]:E.target.value})}function xe(E){N(E.id),x({title:E.title||"",type:E.youtube_url?"video":E.file_url?"file":"section",content:E.content||"",youtube_url:E.youtube_url||"",file_url:E.file_url||"",file:null}),F(!0)}async function k(E){if(E.preventDefault(),!f){alert("Please choose a module first");return}if(!g.title.trim()){alert("Section title is required");return}q(!0);try{const w=new FormData;w.append("title",g.title.trim()),w.append("content",g.content.trim()),w.append("youtube_url",g.type==="video"?g.youtube_url.trim():""),w.append("file_url",g.type==="file"?g.file_url.trim():""),g.type==="file"&&g.file&&w.append("file",g.file),v?(await Hv(v,w),alert("Material updated")):(await Wv(f,w),alert("Material saved")),ve(),F(!1),await me(f)}catch(w){console.error(w),alert(w.message||"Failed to save material")}finally{q(!1)}}async function T(E){if(window.confirm("Delete this material?"))try{await Bv(E),v===E&&ve(),await me(f)}catch(w){console.error(w),alert(w.message||"Failed to delete material")}}return r.jsxs(Lt,{title:"Materials",children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"admin-materials-page",children:[r.jsxs("div",{className:"admin-materials-actions-bar",children:[r.jsxs("button",{className:"admin-materials-big-btn green",type:"button",onClick:Se,children:[r.jsx(H,{icon:np}),"Add Material"]}),r.jsxs("button",{className:"admin-materials-big-btn",type:"button",onClick:()=>window.location.hash="/admin/modules",children:[r.jsx(H,{icon:Xt}),"Add Module"]})]}),r.jsxs("section",{className:"admin-materials-list-panel",children:[r.jsxs("div",{className:"admin-materials-toolbar",children:[r.jsxs("div",{className:"admin-materials-count",children:["Showing ",r.jsx("strong",{children:X.length})," of ",r.jsx("strong",{children:u.length})," materials"]}),r.jsxs("label",{className:"admin-materials-search-wrap",children:["Search materials:",r.jsx("input",{className:"admin-materials-search",type:"search",value:_,onChange:E=>R(E.target.value)})]})]}),G&&r.jsx("div",{className:"admin-materials-empty",children:G}),M&&r.jsx("div",{className:"admin-materials-empty",children:"Loading courses..."}),!M&&a.length===0&&r.jsx("div",{className:"admin-materials-empty",children:"No courses yet. Create a public course first."}),!M&&a.length>0&&s.length===0&&r.jsx("div",{className:"admin-materials-empty",children:"No modules yet. Create modules for this course first."}),!M&&f&&u.length===0&&r.jsx("div",{className:"admin-materials-empty",children:"No materials have been saved for this module yet."}),!M&&f&&u.length>0&&r.jsx("div",{className:"admin-materials-table-wrap",children:r.jsxs("table",{className:"admin-materials-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"ID"}),r.jsx("th",{children:"Title"}),r.jsx("th",{children:"Module"}),r.jsx("th",{children:"Type"}),r.jsx("th",{children:"Link/File"}),r.jsx("th",{children:"Actions"})]})}),r.jsx("tbody",{children:X.map(E=>r.jsxs("tr",{children:[r.jsx("td",{children:E.id}),r.jsx("td",{children:E.title}),r.jsx("td",{children:E.module_title||(de==null?void 0:de.title)||"Module"}),r.jsx("td",{children:Uf(E)}),r.jsxs("td",{children:[E.youtube_url&&r.jsx("a",{className:"admin-materials-link",href:E.youtube_url,target:"_blank",rel:"noreferrer",children:"Open video"}),E.file_url&&r.jsx("a",{className:"admin-materials-link",href:At(E.file_url),target:"_blank",rel:"noreferrer",children:"Open file"}),!E.youtube_url&&!E.file_url&&"Paragraph"]}),r.jsx("td",{children:r.jsxs("div",{className:"admin-materials-row-actions",children:[r.jsxs("button",{className:"admin-material-action edit",type:"button",onClick:()=>xe(E),children:[r.jsx(H,{icon:va}),"Edit"]}),r.jsxs("button",{className:"admin-material-action delete",type:"button",onClick:()=>T(E.id),children:[r.jsx(H,{icon:yr}),"Delete"]})]})})]},E.id))})]})})]}),A&&r.jsx("div",{className:"admin-materials-modal-backdrop",role:"presentation",onClick:je,children:r.jsxs("section",{className:"admin-materials-modal",role:"dialog","aria-modal":"true",onClick:E=>E.stopPropagation(),children:[r.jsxs("div",{className:"admin-materials-modal-head",children:[r.jsxs("div",{className:"admin-materials-header",children:[r.jsx("h2",{children:v?"Edit Material":"Sections, Notes & Videos"}),r.jsxs("p",{children:["Choose a course and module, then add student learning content.",de?` Current module: ${de.title}.`:""]})]}),r.jsx("button",{className:"admin-materials-close",type:"button",onClick:je,"aria-label":"Close material form",children:"x"})]}),r.jsxs("form",{className:"admin-materials-form",onSubmit:k,children:[r.jsxs("div",{className:"admin-materials-select-row",children:[r.jsxs("label",{className:"admin-materials-field",children:["Course",r.jsxs("select",{className:"admin-materials-select",value:y,onChange:E=>{b(E.target.value),ve()},disabled:M||a.length===0,children:[a.length===0&&r.jsx("option",{value:"",children:"No courses yet"}),a.map(E=>r.jsx("option",{value:E.id,children:u4(E)},E.id))]})]}),r.jsxs("label",{className:"admin-materials-field",children:["Module",r.jsxs("select",{className:"admin-materials-select",value:f,onChange:E=>{p(E.target.value),ve()},disabled:s.length===0,children:[s.length===0&&r.jsx("option",{value:"",children:"No modules yet"}),s.map(E=>r.jsx("option",{value:E.id,children:E.title},E.id))]})]})]}),r.jsxs("label",{className:"admin-materials-field",children:["Section title",r.jsx("input",{className:"admin-materials-input",name:"title",value:g.title,onChange:Ne,placeholder:"Section title"})]}),r.jsxs("label",{className:"admin-materials-field",children:["Material type",r.jsxs("select",{className:"admin-materials-select",name:"type",value:g.type,onChange:Ne,children:[r.jsx("option",{value:"section",children:"Section / Paragraph"}),r.jsx("option",{value:"video",children:"YouTube Video"}),r.jsx("option",{value:"file",children:"File Upload"})]})]}),g.type==="video"&&r.jsxs("label",{className:"admin-materials-field",children:["YouTube link",r.jsx("input",{className:"admin-materials-input",name:"youtube_url",value:g.youtube_url,onChange:Ne,placeholder:"https://youtube.com/..."})]}),g.type==="file"&&r.jsxs("label",{className:"admin-materials-field",children:["File",r.jsx("input",{className:"admin-materials-input",type:"file",onChange:E=>{var w;return x({...g,file:((w=E.target.files)==null?void 0:w[0])||null})}})]}),r.jsxs("label",{className:"admin-materials-field",children:["Paragraph / notes",r.jsx("textarea",{className:"admin-materials-textarea",name:"content",value:g.content,onChange:Ne,placeholder:"Write section paragraphs here..."})]}),r.jsxs("div",{className:"admin-materials-form-actions",children:[r.jsxs("button",{className:"admin-materials-primary",type:"submit",disabled:V,children:[r.jsx(H,{icon:Xt}),V?"Saving...":v?"Update Material":"Save Material"]}),r.jsx("button",{className:"admin-materials-secondary",type:"button",onClick:je,children:"Cancel"})]})]})]})})]})]})}function $f(a){return a.title||a.name||"Untitled course"}function m4(){const[a,l]=z.useState([]),[s,d]=z.useState(""),[u,h]=z.useState([]),[y,b]=z.useState(""),[f,p]=z.useState(""),[g,x]=z.useState(!0),[v,N]=z.useState(!1),[A,F]=z.useState("");z.useEffect(()=>{M()},[]),z.useEffect(()=>{s?D(s):h([])},[s]);const _=a.find(G=>String(G.id)===String(s)),R=z.useMemo(()=>{const G=f.trim().toLowerCase();return G?u.filter(re=>[re.id,re.title,re.order_number,re.materials_count].some(de=>String(de||"").toLowerCase().includes(G))):u},[u,f]);async function M(){try{x(!0),F("");const G=await wr(),re=Array.isArray(G)?G:[];l(re),d(de=>{var X;return de||((X=re[0])!=null&&X.id?String(re[0].id):"")})}catch(G){console.error(G),F(G.message||"Failed to load courses")}finally{x(!1)}}async function D(G){try{N(!0),F("");const re=await Fn(G);h(Array.isArray(re)?re:[])}catch(re){console.error(re),F(re.message||"Failed to load modules")}finally{N(!1)}}async function V(G){if(G.preventDefault(),!s){alert("Please choose a course first");return}if(!y.trim()){alert("Module title is required");return}try{await xp(s,{title:y.trim()}),b(""),await D(s)}catch(re){console.error(re),alert(re.message||"Failed to add module")}}async function q(G){if(window.confirm("Delete this module?"))try{await vp(G),await D(s)}catch(re){console.error(re),alert(re.message||"Failed to delete module")}}return r.jsxs(Lt,{title:"Curriculum",children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"admin-modules-page",children:[r.jsxs("div",{className:"admin-modules-actions-bar",children:[r.jsxs("button",{className:"admin-modules-big-btn green",type:"button",onClick:()=>{var G;return(G=document.querySelector(".admin-modules-input"))==null?void 0:G.focus()},children:[r.jsx(H,{icon:op}),"Add Module"]}),r.jsxs("button",{className:"admin-modules-big-btn",type:"button",onClick:()=>window.location.hash="/admin/courses",children:[r.jsx(H,{icon:ya}),"Public Courses"]})]}),r.jsxs("section",{className:"admin-modules-panel",children:[r.jsxs("div",{className:"admin-modules-header",children:[r.jsx("h2",{children:"Modules per Course"}),r.jsxs("p",{children:["Choose a public course, add learning modules, and remove old curriculum units.",_?` Current course: ${$f(_)}.`:""]})]}),r.jsxs("form",{className:"admin-modules-form",onSubmit:V,children:[r.jsxs("label",{className:"admin-modules-field",children:["Course",r.jsxs("select",{className:"admin-modules-select",value:s,onChange:G=>d(G.target.value),disabled:g||a.length===0,children:[a.length===0&&r.jsx("option",{value:"",children:"No courses yet"}),a.map(G=>r.jsx("option",{value:G.id,children:$f(G)},G.id))]})]}),r.jsxs("label",{className:"admin-modules-field",children:["Module title",r.jsx("input",{className:"admin-modules-input",value:y,onChange:G=>b(G.target.value),placeholder:"Module title"})]}),r.jsxs("button",{className:"admin-modules-primary",type:"submit",children:[r.jsx(H,{icon:Xt}),"Add module"]})]}),r.jsxs("div",{className:"admin-modules-toolbar",children:[r.jsxs("div",{className:"admin-modules-count",children:["Showing ",r.jsx("strong",{children:R.length})," of ",r.jsx("strong",{children:u.length})," modules"]}),r.jsxs("label",{className:"admin-modules-search-wrap",children:["Search modules:",r.jsx("input",{className:"admin-modules-search",type:"search",value:f,onChange:G=>p(G.target.value)})]})]}),A&&r.jsx("div",{className:"admin-modules-empty",children:A}),g&&r.jsx("div",{className:"admin-modules-empty",children:"Loading courses..."}),!g&&a.length===0&&r.jsx("div",{className:"admin-modules-empty",children:"No public courses yet. Create a course first, then add modules here."}),v&&r.jsx("div",{className:"admin-modules-empty",children:"Loading modules..."}),!g&&!v&&s&&u.length===0&&r.jsx("div",{className:"admin-modules-empty",children:"No modules have been added for this course yet."}),!g&&!v&&s&&u.length>0&&r.jsx("div",{className:"admin-modules-table-wrap",children:r.jsxs("table",{className:"admin-modules-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"ID"}),r.jsx("th",{children:"Title"}),r.jsx("th",{children:"Order"}),r.jsx("th",{children:"Materials"}),r.jsx("th",{children:"Actions"})]})}),r.jsx("tbody",{children:R.map(G=>r.jsxs("tr",{children:[r.jsx("td",{children:G.id}),r.jsx("td",{children:G.title}),r.jsx("td",{children:G.order_number}),r.jsx("td",{children:G.materials_count||0}),r.jsx("td",{children:r.jsxs("button",{className:"admin-module-action delete",type:"button",onClick:()=>q(G.id),children:[r.jsx(H,{icon:yr}),"Delete"]})})]},G.id))})]})})]})]})]})}function p4({children:a}){return r.jsx("div",{className:"card-grid",children:a})}function Ti({label:a,value:l}){return r.jsxs("article",{className:"stat",children:[r.jsx("strong",{children:l}),r.jsx("span",{children:a})]})}const h4=["Courses","Modules","Materials","Assessments","Final Exam","Exam Submissions","Students","Products","Certificates"];function g4(){return r.jsxs(Lt,{title:"Admin Dashboard",children:[r.jsxs("div",{className:"dashboard-grid",children:[r.jsx(Ti,{label:"Students",value:"128"}),r.jsx(Ti,{label:"Courses",value:"4"}),r.jsx(Ti,{label:"Submissions",value:"23"}),r.jsx(Ti,{label:"Certificates",value:"41"})]}),r.jsx(p4,{children:h4.map(a=>r.jsxs("div",{className:"mini-card",children:[r.jsx(e4,{size:20}),r.jsx("strong",{children:a}),r.jsxs("span",{children:["Manage ",a.toLowerCase()]})]},a))})]})}const Wf={title:"",description:"",price:"",discount:"0",image_url:"",image:null};function x4(){const[a,l]=z.useState([]),[s,d]=z.useState(Wf),[u,h]=z.useState(null),[y,b]=z.useState(!1),[f,p]=z.useState(""),[g,x]=z.useState(!0),[v,N]=z.useState(!1),[A,F]=z.useState("");z.useEffect(()=>{R()},[]);const _=z.useMemo(()=>{const X=f.trim().toLowerCase();return X?a.filter(fe=>[fe.title,fe.description,fe.price,fe.discount].some(pe=>String(pe||"").toLowerCase().includes(X))):a},[a,f]);async function R(){try{x(!0),F("");const X=await Bl();l(Array.isArray(X)?X:[])}catch(X){console.error(X),F(X.message||"Failed to load products")}finally{x(!1)}}function M(X){d({...s,[X.target.name]:X.target.value})}function D(){d(Wf),h(null)}function V(){D(),b(!0)}function q(){D(),b(!1)}function G(X){h(X.id),d({title:X.title||"",description:X.description||"",price:X.price||"",discount:X.discount||"0",image_url:X.image_url||"",image:null}),b(!0)}async function re(X){if(X.preventDefault(),v)return;const fe=s.title.trim(),pe=String(s.price??"").trim();if(!fe||!pe){alert("Product title and price are required");return}N(!0);try{const me=new FormData;me.append("title",fe),me.append("description",s.description.trim()),me.append("price",pe),me.append("discount",s.discount||0),me.append("image_url",s.image_url.trim()),s.image&&me.append("image",s.image),u?(await t3(u,me),alert("Product updated")):(await e3(me),alert("Product created")),D(),b(!1),await R()}catch(me){console.error(me),alert(me.message||"Failed to save product")}finally{N(!1)}}async function de(X){if(window.confirm("Delete this product?"))try{await n3(X),u===X&&D(),await R()}catch(fe){console.error(fe),alert(fe.message||"Failed to delete product")}}return r.jsxs(Lt,{title:"Products",children:[r.jsx("style",{children:`
        .admin-products-page {
          display: grid;
          gap: 1.65rem;
          padding: 0.25rem 0;
        }

        .admin-products-actions-bar {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .admin-products-big-btn {
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

        .admin-products-big-btn.green {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          box-shadow: 0 12px 24px rgba(22, 163, 74, 0.16);
        }

        .admin-products-big-btn svg {
          font-size: 1.05rem;
        }

        .admin-products-panel {
          background: #ffffff;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 18px 42px rgba(15, 23, 42, 0.13);
          border: 1px solid #e2e8f0;
        }

        .admin-products-toolbar {
          min-height: 92px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.25rem 1.45rem;
          background: #ffffff;
          flex-wrap: wrap;
        }

        .admin-products-count {
          color: #10243f;
          font-weight: 800;
        }

        .admin-products-search-wrap {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.35rem;
          color: #10243f;
          font-size: 1rem;
          font-weight: 800;
        }

        .admin-products-search {
          width: min(250px, 52vw);
          height: 52px;
          border: 1px solid #aeb7c2;
          border-radius: 8px;
          padding: 0.65rem 0.8rem;
          outline: none;
          font-size: 0.95rem;
          background: #ffffff;
        }

        .admin-products-form {
          display: grid;
          gap: 0.9rem;
        }

        .admin-products-grid {
          display: grid;
          gap: 0.9rem;
        }

        .admin-products-form label {
          display: grid;
          gap: 0.35rem;
          color: #334155;
          font-size: 0.82rem;
          font-weight: 800;
        }

        .admin-products-form input,
        .admin-products-form textarea {
          width: 100%;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 0.75rem 0.85rem;
          font: inherit;
          outline: none;
        }

        .admin-products-file-input {
          background: #f8fafc;
          cursor: pointer;
        }

        .admin-products-preview {
          width: 100%;
          aspect-ratio: 16 / 9;
          object-fit: cover;
          border: 1px solid #dbe3ec;
          border-radius: 8px;
          background: #f1f5f9;
        }

        .admin-products-help {
          color: #64748b;
          font-size: 0.78rem;
          line-height: 1.5;
        }

        .admin-products-form textarea {
          min-height: 92px;
          resize: vertical;
        }

        .admin-products-actions {
          display: flex;
          gap: 0.65rem;
          flex-wrap: wrap;
        }

        .admin-products-primary,
        .admin-products-secondary,
        .admin-products-danger {
          border: 0;
          border-radius: 8px;
          padding: 0.7rem 1rem;
          font-weight: 800;
          cursor: pointer;
        }

        .admin-products-primary {
          background: #003366;
          color: #ffffff;
        }

        .admin-products-secondary {
          background: #e8eef6;
          color: #003366;
        }

        .admin-products-danger {
          background: #fee2e2;
          color: #991b1b;
        }

        .admin-products-table-wrap {
          overflow-x: auto;
        }

        .admin-products-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          background: #fff;
        }

        .admin-products-table th,
        .admin-products-table td {
          text-align: left;
          border-bottom: 1px solid #d7dde5;
          border-right: 1px solid #d7dde5;
          padding: 0.95rem 0.85rem;
          vertical-align: top;
          font-size: 0.98rem;
          color: #0f172a;
        }

        .admin-products-table th {
          position: relative;
          background: #20262c;
          color: #ffffff;
          white-space: nowrap;
          font-weight: 900;
          font-size: 1rem;
          vertical-align: middle;
        }

        .admin-products-table th::after {
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

        .admin-products-table th:last-child,
        .admin-products-table td:last-child {
          border-right: none;
        }

        .admin-products-table tbody tr:nth-child(odd) {
          background: #f1f1f1;
        }

        .admin-products-table tbody tr:nth-child(even) {
          background: #ffffff;
        }

        .admin-products-image {
          width: 64px;
          height: 44px;
          border-radius: 6px;
          object-fit: cover;
          border: 1px solid #dbe3ec;
          background: #f1f5f9;
        }

        .admin-products-row-actions {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.45rem;
        }

        .admin-product-action {
          border: 0;
          border-radius: 6px;
          min-width: 86px;
          min-height: 38px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 700;
        }

        .admin-product-action.edit {
          background: #ffc107;
          color: #0f172a;
        }

        .admin-product-action.delete {
          background: #ff3f4f;
          color: #ffffff;
        }

        .admin-products-empty {
          color: #64748b;
          margin: 1rem;
          padding: 1rem;
          border: 1px dashed #94a3b8;
          border-radius: 8px;
          background: #f8fafc;
        }

        .admin-products-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          background: rgba(15, 23, 42, 0.55);
        }

        .admin-products-modal {
          width: min(620px, 100%);
          max-height: calc(100vh - 2rem);
          overflow-y: auto;
          background: #ffffff;
          border-radius: 10px;
          border: 1px solid #dfe7ef;
          box-shadow: 0 24px 64px rgba(15, 23, 42, 0.22);
          padding: 1.35rem;
        }

        .admin-products-modal-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .admin-products-modal-head h2 {
          margin: 0;
          color: #10243f;
          font-size: 1.1rem;
        }

        .admin-products-close {
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

        @media (min-width: 760px) {
          .admin-products-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .admin-products-search-wrap {
            width: 100%;
            align-items: flex-start;
            flex-direction: column;
          }

          .admin-products-search {
            width: 100%;
          }
        }
      `}),r.jsxs("div",{className:"admin-products-page",children:[r.jsxs("div",{className:"admin-products-actions-bar",children:[r.jsxs("button",{className:"admin-products-big-btn green",type:"button",onClick:V,children:[r.jsx(H,{icon:Km}),"Add Product"]}),r.jsxs("button",{className:"admin-products-big-btn",type:"button",onClick:V,children:[r.jsx(H,{icon:Xt}),"New Item"]}),r.jsxs("button",{className:"admin-products-big-btn",type:"button",onClick:()=>alert("Excel import will be added after upload support."),children:[r.jsx(H,{icon:Xm}),"Import Products (Excel)"]})]}),r.jsxs("section",{className:"admin-products-panel",children:[r.jsxs("div",{className:"admin-products-toolbar",children:[r.jsxs("div",{className:"admin-products-count",children:[r.jsx("strong",{children:_.length})," of ",r.jsx("strong",{children:a.length})," products"]}),r.jsxs("label",{className:"admin-products-search-wrap",children:["Search products:",r.jsx("input",{className:"admin-products-search",type:"search",value:f,onChange:X=>p(X.target.value)})]})]}),g&&r.jsx("div",{className:"admin-products-empty",children:"Loading products..."}),A&&r.jsx("div",{className:"admin-products-empty",children:A}),!g&&!A&&a.length===0&&r.jsx("div",{className:"admin-products-empty",children:"No products in the database yet."}),!g&&!A&&a.length>0&&r.jsx("div",{className:"admin-products-table-wrap",children:r.jsxs("table",{className:"admin-products-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"ID"}),r.jsx("th",{children:"Image"}),r.jsx("th",{children:"Title"}),r.jsx("th",{children:"Price"}),r.jsx("th",{children:"Discount"}),r.jsx("th",{children:"Description"}),r.jsx("th",{children:"Actions"})]})}),r.jsx("tbody",{children:_.map(X=>r.jsxs("tr",{children:[r.jsx("td",{children:X.id}),r.jsx("td",{children:X.image_url?r.jsx("img",{className:"admin-products-image",src:At(X.image_url),alt:""}):"No image"}),r.jsx("td",{children:X.title}),r.jsxs("td",{children:["R",X.price]}),r.jsx("td",{children:X.discount||0}),r.jsx("td",{children:X.description||"No description"}),r.jsx("td",{children:r.jsxs("div",{className:"admin-products-row-actions",children:[r.jsxs("button",{className:"admin-product-action edit",type:"button",onClick:()=>G(X),children:[r.jsx(H,{icon:va}),"Edit"]}),r.jsxs("button",{className:"admin-product-action delete",type:"button",onClick:()=>de(X.id),children:[r.jsx(H,{icon:yr}),"Delete"]})]})})]},X.id))})]})})]}),y&&r.jsx("div",{className:"admin-products-modal-backdrop",role:"presentation",onClick:q,children:r.jsxs("section",{className:"admin-products-modal",role:"dialog","aria-modal":"true",onClick:X=>X.stopPropagation(),children:[r.jsxs("div",{className:"admin-products-modal-head",children:[r.jsx("h2",{children:u?"Edit product":"Add product"}),r.jsx("button",{className:"admin-products-close",type:"button",onClick:q,"aria-label":"Close product form",children:"×"})]}),r.jsxs("form",{className:"admin-products-form",onSubmit:re,children:[r.jsxs("div",{className:"admin-products-grid",children:[r.jsxs("label",{children:["Product title",r.jsx("input",{name:"title",value:s.title,onChange:M,required:!0})]}),r.jsxs("label",{children:["Price",r.jsx("input",{name:"price",type:"number",min:"0",step:"0.01",value:s.price,onChange:M,required:!0})]}),r.jsxs("label",{children:["Discount",r.jsx("input",{name:"discount",type:"number",min:"0",step:"0.01",value:s.discount,onChange:M})]}),r.jsxs("label",{children:["Product image",r.jsx("input",{className:"admin-products-file-input",type:"file",accept:"image/*",onChange:X=>{var fe;return d({...s,image:((fe=X.target.files)==null?void 0:fe[0])||null})}}),r.jsx("span",{className:"admin-products-help",children:"Choose an image from your computer."})]})]}),(s.image||s.image_url)&&r.jsx("img",{className:"admin-products-preview",src:s.image?URL.createObjectURL(s.image):At(s.image_url),alt:"Product preview"}),r.jsxs("label",{children:["Description",r.jsx("textarea",{name:"description",value:s.description,onChange:M})]}),r.jsxs("div",{className:"admin-products-actions",children:[r.jsx("button",{className:"admin-products-primary",type:"submit",disabled:v,children:v?"Saving...":u?"Update Product":"Save Product"}),r.jsx("button",{className:"admin-products-secondary",type:"button",onClick:q,children:"Cancel"})]})]})]})})]})]})}function v4(){const[a,l]=z.useState(()=>Ki("admin")),[s,d]=z.useState({currentPassword:"",newPassword:"",confirmPassword:""}),[u,h]=z.useState(!1),[y,b]=z.useState({type:"",text:""}),[f,p]=z.useState(!1),g=v=>{l(v),Up("admin",v)},x=async v=>{if(v.preventDefault(),b({type:"",text:""}),s.newPassword!==s.confirmPassword){b({type:"error",text:"New passwords do not match."});return}p(!0);try{const N=await m3({currentPassword:s.currentPassword,newPassword:s.newPassword});b({type:"success",text:N.message}),d({currentPassword:"",newPassword:"",confirmPassword:""})}catch(N){b({type:"error",text:N.message})}finally{p(!1)}};return r.jsxs(Lt,{title:"Settings",children:[r.jsx("style",{children:y4}),r.jsxs("div",{className:"account-settings",children:[r.jsxs("section",{className:"settings-section",children:[r.jsxs("div",{className:"settings-heading",children:[r.jsx("span",{className:"settings-heading-icon",children:r.jsx(H,{icon:Bi})}),r.jsxs("div",{children:[r.jsx("h2",{children:"Appearance"}),r.jsx("p",{children:"Choose how your admin account looks on this device."})]})]}),r.jsxs("div",{className:"theme-options",children:[r.jsxs("button",{className:a==="light"?"selected":"",onClick:()=>g("light"),children:[r.jsx(H,{icon:Jm}),r.jsxs("span",{children:[r.jsx("strong",{children:"Light mode"}),r.jsx("small",{children:"Bright and clean interface"})]})]}),r.jsxs("button",{className:a==="dark"?"selected":"",onClick:()=>g("dark"),children:[r.jsx(H,{icon:Bi}),r.jsxs("span",{children:[r.jsx("strong",{children:"Dark mode"}),r.jsx("small",{children:"Comfortable in low light"})]})]})]})]}),r.jsxs("section",{className:"settings-section",children:[r.jsxs("div",{className:"settings-heading",children:[r.jsx("span",{className:"settings-heading-icon",children:r.jsx(H,{icon:$l})}),r.jsxs("div",{children:[r.jsx("h2",{children:"Change password"}),r.jsx("p",{children:"Confirm your current password before setting a new one."})]})]}),r.jsxs("form",{className:"password-form",onSubmit:x,children:[["currentPassword","newPassword","confirmPassword"].map(v=>r.jsxs("label",{children:[v==="currentPassword"?"Current password":v==="newPassword"?"New password":"Confirm new password",r.jsxs("span",{className:"password-field",children:[r.jsx(H,{icon:Hi}),r.jsx("input",{type:u?"text":"password",value:s[v],minLength:v==="currentPassword"?void 0:8,required:!0,onChange:N=>d({...s,[v]:N.target.value})})]})]},v)),r.jsxs("div",{className:"password-actions",children:[r.jsxs("label",{className:"show-passwords",children:[r.jsx("input",{type:"checkbox",checked:u,onChange:v=>h(v.target.checked)}),r.jsx(H,{icon:u?sp:Gm}),"Show passwords"]}),r.jsxs("button",{className:"settings-save",disabled:f,children:[r.jsx(H,{icon:Hi}),f?"Saving...":"Update Password"]})]}),y.text&&r.jsx("p",{className:`settings-message ${y.type}`,children:y.text})]})]}),r.jsxs("section",{className:"settings-section",children:[r.jsxs("div",{className:"settings-heading",children:[r.jsx("span",{className:"settings-heading-icon",children:r.jsx(H,{icon:Ul})}),r.jsxs("div",{children:[r.jsx("h2",{children:"Company profile"}),r.jsx("p",{children:"Public contact information used across Stekora Tech."})]})]}),r.jsxs("form",{className:"company-settings-form",children:[r.jsxs("label",{children:["Company name",r.jsx("input",{defaultValue:"Stekora Tech Academy"})]}),r.jsxs("label",{children:["Public email",r.jsx("input",{type:"email",placeholder:"info@stekora.tech"})]}),r.jsxs("label",{children:["Phone number",r.jsx("input",{type:"tel",placeholder:"+250 ..."})]}),r.jsx("button",{className:"settings-save",type:"button",children:"Save Company Settings"})]})]})]})]})}const y4=`
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
`;function b4(){return be("/admin/students")}function w4(a,l){return be(`/admin/students/${a}/status`,{method:"PATCH",body:JSON.stringify({status:l})})}function j4(){const[a,l]=z.useState([]),[s,d]=z.useState(""),[u,h]=z.useState(!0),[y,b]=z.useState("");z.useEffect(()=>{p()},[]);const f=z.useMemo(()=>{const x=s.trim().toLowerCase();return x?a.filter(v=>[v.id,v.full_name,v.email,v.phone,v.status].some(N=>String(N||"").toLowerCase().includes(x))):a},[a,s]);async function p(){try{h(!0),b("");const x=await b4();l(Array.isArray(x)?x:[])}catch(x){console.error(x),b(x.message||"Failed to load students")}finally{h(!1)}}async function g(x){const v=x.status==="active"?"blocked":"active",N=v==="blocked"?"Block this student account?":"Activate this student account?";if(window.confirm(N))try{await w4(x.id,v),await p()}catch(A){console.error(A),alert(A.message||"Failed to update student")}}return r.jsxs(Lt,{title:"Students",children:[r.jsx("style",{children:`
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
      `}),r.jsxs("section",{className:"admin-students-panel",children:[r.jsxs("div",{className:"admin-students-toolbar",children:[r.jsxs("div",{children:["Showing ",f.length," of ",a.length," students"]}),r.jsxs("div",{className:"admin-students-tools",children:[r.jsxs("label",{className:"admin-students-search",children:["Search:",r.jsx("input",{type:"search",value:s,onChange:x=>d(x.target.value)})]}),r.jsxs("button",{className:"admin-students-refresh",type:"button",onClick:p,children:[r.jsx(H,{icon:Rl}),"Refresh"]})]})]}),u&&r.jsx("div",{className:"admin-students-message",children:"Loading students..."}),y&&r.jsx("div",{className:"admin-students-message",children:y}),!u&&!y&&a.length===0&&r.jsx("div",{className:"admin-students-message",children:"No student accounts have been created yet."}),!u&&!y&&a.length>0&&r.jsx("div",{className:"admin-students-table-wrap",children:r.jsxs("table",{className:"admin-students-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"ID"}),r.jsx("th",{children:"Name"}),r.jsx("th",{children:"Email"}),r.jsx("th",{children:"Phone"}),r.jsx("th",{children:"Started"}),r.jsx("th",{children:"Completed"}),r.jsx("th",{children:"Certificates"}),r.jsx("th",{children:"Status"}),r.jsx("th",{children:"Registered"}),r.jsx("th",{children:"Action"})]})}),r.jsx("tbody",{children:f.map(x=>r.jsxs("tr",{children:[r.jsx("td",{children:x.id}),r.jsx("td",{children:x.full_name}),r.jsx("td",{children:x.email}),r.jsx("td",{children:x.phone||"-"}),r.jsx("td",{children:x.courses_started||0}),r.jsx("td",{children:x.courses_completed||0}),r.jsx("td",{children:x.certificates_count||0}),r.jsx("td",{children:r.jsx("span",{className:`admin-student-status ${x.status}`,children:x.status})}),r.jsx("td",{children:new Date(x.created_at).toLocaleDateString()}),r.jsx("td",{children:r.jsxs("button",{className:`admin-student-action ${x.status==="active"?"block":"activate"}`,type:"button",onClick:()=>g(x),children:[r.jsx(H,{icon:x.status==="active"?Ix:ep}),x.status==="active"?"Block":"Activate"]})})]},x.id))})]})})]})]})}const k4=[["Dashboard","/student",tp],["My Courses","/student",ya],["Certificates","/student/certificates",br],["Settings","/student/settings",Ul]];function S4(){return window.location.hash.replace("#","")||"/student"}function N4(){const a=S4();function l(d){window.location.hash=d}function s(){localStorage.removeItem("studentToken"),localStorage.removeItem("studentName"),localStorage.removeItem("studentCourseName"),window.location.hash="/login"}return r.jsxs("aside",{className:"student-sidebar",children:[r.jsxs("div",{className:"student-sidebar-brand",children:[r.jsx("span",{className:"student-sidebar-mark",children:"ST"}),r.jsxs("span",{children:[r.jsx("strong",{children:"Stekora Tech"}),r.jsx("small",{children:"Student Account"})]})]}),r.jsxs("nav",{className:"student-sidebar-nav",children:[k4.map(([d,u,h])=>r.jsxs("button",{type:"button",className:a===u||u==="/student"&&a.startsWith("/student/course/")?"active":"",onClick:()=>l(u),children:[r.jsx(H,{icon:h}),d]},d)),r.jsxs("button",{type:"button",onClick:s,children:[r.jsx(H,{icon:Zm}),"Logout"]})]})]})}function jr({title:a,children:l}){const[s,d]=z.useState(()=>Ki("student"));return z.useEffect(()=>{const u=h=>{var y;((y=h.detail)==null?void 0:y.accountType)==="student"&&d(h.detail.theme)};return window.addEventListener(pa,u),()=>window.removeEventListener(pa,u)},[]),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:`student-portal ${s==="dark"?"dark-mode":""}`,children:[r.jsx(N4,{}),r.jsxs("main",{className:"student-portal-main",children:[r.jsxs("header",{className:"student-portal-topbar",children:[r.jsx("h1",{children:a}),r.jsx("span",{className:"student-portal-role",children:localStorage.getItem("studentName")||"Student"})]}),r.jsx("div",{className:"student-portal-content",children:l})]})]})]})}function C4({courseId:a}){var F,_,R;const[l,s]=z.useState(null),[d,u]=z.useState({}),[h,y]=z.useState(null),[b,f]=z.useState(!0),[p,g]=z.useState(!1),[x,v]=z.useState("");z.useEffect(()=>{N()},[a]);async function N(){try{f(!0),v("");const M=await w3(a);s(M)}catch(M){console.error(M),v(M.message||"Failed to load final exam")}finally{f(!1)}}async function A(M){if(M.preventDefault(),l.questions.some(V=>!String(d[V.id]||"").trim())){alert("Please answer every final exam question");return}try{g(!0);const V=await j3(a,l.questions.map(q=>({question_id:q.id,answer:d[q.id]})));y(V)}catch(V){console.error(V),alert(V.message||"Failed to submit final exam")}finally{g(!1)}}return r.jsxs(jr,{title:"Final Exam",children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"student-final-shell",children:[b&&r.jsx("div",{className:"student-final-message",children:"Loading final exam..."}),x&&r.jsx("div",{className:"student-final-message",children:x}),l&&!l.unlocked&&r.jsxs("section",{className:"student-final-card",children:[r.jsx("h2",{children:"Final exam locked"}),r.jsxs("p",{children:["Complete every course module first. You completed ",l.completed_modules," of ",l.total_modules," modules."]})]}),l&&l.unlocked&&!l.can_attempt&&r.jsxs("section",{className:"student-final-card",children:[r.jsx("h2",{children:"Final exam already submitted"}),r.jsxs("p",{children:["Status: ",(F=l.latest_attempt)==null?void 0:F.status,". Score: ",((_=l.latest_attempt)==null?void 0:_.score)||0,"%. Wait for admin review or re-exam permission."]})]}),l&&l.can_attempt&&l.questions.length===0&&r.jsx("div",{className:"student-final-message",children:"The admin has not uploaded final exam questions yet."}),l&&l.can_attempt&&l.questions.length>0&&!h&&r.jsxs(r.Fragment,{children:[r.jsxs("section",{className:"student-final-card",children:[r.jsx("h2",{children:(R=l.course)==null?void 0:R.title}),r.jsx("p",{children:"Answer every question. Multiple-choice answers are scored automatically; open answers are reviewed by the admin."})]}),r.jsxs("form",{className:"student-final-form",onSubmit:A,children:[l.questions.map((M,D)=>r.jsxs("section",{className:"student-final-card",children:[r.jsxs("h3",{children:[D+1,". ",M.question," (",M.marks," marks)"]}),M.question_type==="mcq"?r.jsx("div",{className:"student-final-options",children:Object.entries(M.options||{}).filter(([,V])=>V).map(([V,q])=>r.jsxs("label",{className:"student-final-option",children:[r.jsx("input",{type:"radio",name:`exam-${M.id}`,value:V,checked:d[M.id]===V,onChange:G=>u({...d,[M.id]:G.target.value})}),r.jsxs("strong",{children:[V,"."]})," ",q]},V))}):r.jsx("textarea",{className:"student-final-textarea",value:d[M.id]||"",onChange:V=>u({...d,[M.id]:V.target.value}),placeholder:"Write your answer..."})]},M.id)),r.jsxs("div",{className:"student-final-actions",children:[r.jsxs("button",{className:"student-final-button secondary",type:"button",onClick:()=>window.location.hash="/student",children:[r.jsx(H,{icon:Wl}),"Dashboard"]}),r.jsxs("button",{className:"student-final-button",type:"submit",disabled:p,children:[r.jsx(H,{icon:Dl}),p?"Submitting...":"Submit Final Exam"]})]})]})]}),h&&r.jsxs("section",{className:"student-final-card",children:[r.jsx("h2",{children:"Final exam submitted"}),r.jsxs("p",{children:["Automatic score: ",h.auto_score,"%. Your submission is waiting for admin review and certificate approval."]})]})]})]})}function E4({courseId:a,moduleId:l}){const[s,d]=z.useState(null),[u,h]=z.useState({}),[y,b]=z.useState(null),[f,p]=z.useState(!0),[g,x]=z.useState(!1),[v,N]=z.useState("");z.useEffect(()=>{A()},[l]);async function A(){try{p(!0),N("");const _=await y3(l);d(_)}catch(_){console.error(_),N(_.message||"Failed to load assessment")}finally{p(!1)}}async function F(_){if(_.preventDefault(),s.questions.some(M=>!String(u[M.id]||"").trim())){alert("Please answer every question");return}try{x(!0);const M=await b3(l,s.questions.map(D=>({question_id:D.id,answer:u[D.id]})));b(M)}catch(M){console.error(M),alert(M.message||"Failed to submit assessment")}finally{x(!1)}}return r.jsxs(jr,{title:"Module Assessment",children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"student-assessment-shell",children:[f&&r.jsx("div",{className:"student-assessment-message",children:"Loading assessment..."}),v&&r.jsx("div",{className:"student-assessment-message",children:v}),s&&s.questions.length===0&&r.jsx("div",{className:"student-assessment-message",children:"The admin has not added assessment questions yet."}),s&&s.questions.length>0&&!y&&r.jsxs(r.Fragment,{children:[r.jsxs("section",{className:"student-assessment-intro",children:[r.jsx("h2",{children:s.module.title}),r.jsxs("p",{children:[s.questions.length," questions · Pass mark ",s.pass_mark,"%"]})]}),r.jsxs("form",{className:"student-assessment-form",onSubmit:F,children:[s.questions.map((_,R)=>r.jsxs("section",{className:"student-assessment-question",children:[r.jsxs("h3",{children:[R+1,". ",_.question]}),_.question_type==="mcq"?r.jsx("div",{className:"student-assessment-options",children:Object.entries(_.options||{}).filter(([,M])=>M).map(([M,D])=>r.jsxs("label",{className:"student-assessment-option",children:[r.jsx("input",{type:"radio",name:`question-${_.id}`,value:M,checked:u[_.id]===M,onChange:V=>h({...u,[_.id]:V.target.value})}),r.jsxs("strong",{children:[M,"."]})," ",D]},M))}):r.jsx("textarea",{className:"student-assessment-answer",value:u[_.id]||"",onChange:M=>h({...u,[_.id]:M.target.value}),placeholder:"Write your answer..."})]},_.id)),r.jsxs("div",{className:"student-assessment-actions",children:[r.jsxs("button",{className:"student-assessment-button secondary",type:"button",onClick:()=>window.location.hash=`/student/course/${a}/module/${l}`,children:[r.jsx(H,{icon:Wl}),"Back to Module"]}),r.jsxs("button",{className:"student-assessment-button",type:"submit",disabled:g,children:[r.jsx(H,{icon:Dl}),g?"Submitting...":"Submit Assessment"]})]})]})]}),y&&r.jsxs("section",{className:"student-assessment-result",children:[r.jsx(H,{icon:ap,size:"2x"}),r.jsxs("strong",{children:[y.score,"%"]}),r.jsx("p",{children:y.passed?"You passed this module assessment.":"You need 60% to pass. Review the lesson and try again."}),y.passed?r.jsx("button",{className:"student-assessment-button",type:"button",onClick:()=>window.location.hash=`/student/course/${a}/module/${l}`,children:"Return to Module"}):r.jsx("button",{className:"student-assessment-button",type:"button",onClick:()=>{h({}),b(null)},children:"Retry Assessment"})]})]})]})}function z4(){const[a,l]=z.useState([]),[s,d]=z.useState(!0),[u,h]=z.useState(""),[y,b]=z.useState(null);z.useEffect(()=>{f()},[]);async function f(){try{d(!0),h("");const p=await k3();l(Array.isArray(p)?p:[])}catch(p){console.error(p),h(p.message||"Failed to load certificates")}finally{d(!1)}}return r.jsxs(jr,{title:"My Certificates",children:[r.jsx("style",{children:`
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
      `}),s&&r.jsx("div",{className:"student-certificate-message",children:"Loading certificates..."}),u&&r.jsx("div",{className:"student-certificate-message",children:u}),!s&&!u&&a.length===0&&r.jsx("div",{className:"student-certificate-message",children:"No certificate has been assigned yet. Complete the course and wait for final exam approval."}),r.jsx("section",{className:"student-certificates-grid",children:a.map(p=>r.jsxs("article",{className:"student-certificate-card",children:[r.jsx("div",{className:"student-certificate-icon",children:r.jsx(H,{icon:br,size:"lg"})}),r.jsx("h2",{children:p.course_title}),r.jsxs("div",{className:"student-certificate-meta",children:[r.jsx("span",{className:"student-certificate-code",children:p.certificate_code}),r.jsxs("span",{children:[r.jsx(H,{icon:$l})," Status: ",p.status]}),r.jsxs("span",{children:["Issued: ",new Date(p.issued_date).toLocaleDateString()]})]}),r.jsxs("button",{className:"student-certificate-button",type:"button",onClick:()=>b(p),children:[r.jsx(H,{icon:Dx}),"View Certificate"]})]},p.id))}),y&&r.jsx("div",{className:"student-certificate-modal-backdrop",role:"presentation",onClick:()=>b(null),children:r.jsxs("section",{className:"student-certificate-modal",role:"dialog","aria-modal":"true",onClick:p=>p.stopPropagation(),children:[r.jsxs("div",{className:"student-certificate-modal-actions",children:[r.jsx("button",{className:"student-certificate-button",type:"button",onClick:()=>window.print(),children:"Print / Download PDF"}),r.jsx("button",{className:"student-certificate-button",type:"button",onClick:()=>b(null),children:"Close"})]}),r.jsx(Ip,{studentName:y.student_name||localStorage.getItem("studentName")||"Student",courseName:y.course_title,certificateCode:y.certificate_code,issuedDate:y.issued_date,verificationUrl:`${window.location.origin}${window.location.pathname}#/certificate/${y.certificate_code}`})]})})]})}function P4(){const[a,l]=z.useState(null),[s,d]=z.useState(!0),[u,h]=z.useState(""),[y,b]=z.useState(null);z.useEffect(()=>{f()},[]);async function f(){var x;if(!localStorage.getItem("studentToken")){window.location.hash="/login";return}try{d(!0),h("");const v=await g3();l(v),(x=v.student)!=null&&x.full_name&&localStorage.setItem("studentName",v.student.full_name)}catch(v){console.error(v),h(v.message||"Failed to load student dashboard")}finally{d(!1)}}async function p(x){var N;const v=(N=x.modules)==null?void 0:N[0];if(v)try{b(x.id),await x3(x.id),window.location.hash=`/student/course/${x.id}/module/${v.id}`}catch(A){console.error(A),alert(A.message||"Failed to start course")}finally{b(null)}}function g(x){var N,A;const v=((N=x.modules)==null?void 0:N.find(F=>!Number(F.completed)))||((A=x.modules)==null?void 0:A[0]);v&&(window.location.hash=`/student/course/${x.id}/module/${v.id}`)}return r.jsxs(jr,{title:"Student Dashboard",children:[r.jsx("style",{children:`
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
      `}),s&&r.jsx("div",{className:"student-page-message",children:"Loading your courses..."}),u&&r.jsx("div",{className:"student-page-message",children:u}),a&&r.jsxs(r.Fragment,{children:[r.jsxs("section",{className:"student-dashboard-summary",children:[r.jsxs("div",{className:"student-summary-card",children:["Available courses",r.jsx("strong",{children:a.courses.length})]}),r.jsxs("div",{className:"student-summary-card",children:["Courses completed",r.jsx("strong",{children:a.courses.filter(x=>x.status==="completed").length})]}),r.jsxs("div",{className:"student-summary-card",children:["Certificates",r.jsx("strong",{children:a.certificates_count||0})]})]}),a.courses.length===0?r.jsx("div",{className:"student-page-message",children:"No courses have been posted by the admin yet."}):r.jsx("section",{className:"student-course-grid",children:a.courses.map(x=>r.jsxs("article",{className:"student-course-card",children:[x.image_url?r.jsx("img",{className:"student-course-image",src:At(x.image_url),alt:x.name}):r.jsx("div",{className:"student-course-image"}),r.jsxs("div",{className:"student-course-body",children:[r.jsx("div",{className:"student-course-category",children:x.category||"Course"}),r.jsx("h2",{children:x.name}),r.jsx("p",{children:x.description||"Practical learning modules created by Stekora Tech."}),r.jsx("div",{className:"student-course-progress",children:r.jsx("span",{style:{width:`${x.progress}%`}})})]}),r.jsxs("footer",{className:"student-course-footer",children:[r.jsxs("small",{children:[x.completed_modules,"/",x.modules_count," modules · ",x.progress,"%"]}),r.jsx("div",{className:"student-course-actions",children:x.modules_count===0?r.jsx("span",{className:"student-page-message",children:"Waiting for modules"}):x.status==="not_started"?r.jsxs("button",{className:"student-course-button",type:"button",onClick:()=>p(x),children:[r.jsx(H,{icon:Qx}),y===x.id?"Starting...":"Start"]}):x.status==="completed"?r.jsxs(r.Fragment,{children:[r.jsxs("button",{className:"student-course-button green",type:"button",onClick:()=>window.location.hash=`/student/course/${x.id}/final-exam`,children:[r.jsx(H,{icon:ap}),"Final Exam"]}),r.jsxs("button",{className:"student-course-button gold",type:"button",onClick:()=>window.location.hash="/student/certificates",children:[r.jsx(H,{icon:br}),"Certificate"]})]}):r.jsxs("button",{className:"student-course-button green",type:"button",onClick:()=>g(x),children:[r.jsx(H,{icon:ya}),"Continue"]})})]})]},x.id))})]})]})}const A4="https://www.youtube.com/@stekoratech?sub_confirmation=1";function L4(a){if(!a)return"";const l=a.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([^?&/]+)/i);return l?`https://www.youtube.com/embed/${l[1]}`:a}function _4({courseId:a,moduleId:l}){var _,R;const[s,d]=z.useState(null),[u,h]=z.useState(!0),[y,b]=z.useState(""),[f,p]=z.useState(localStorage.getItem("stekoraYoutubeSubscribed")==="yes");z.useEffect(()=>{g()},[a,l]);async function g(){try{h(!0),b("");const M=await v3(a,l);d(M)}catch(M){console.error(M),b(M.message||"Failed to load module")}finally{h(!1)}}function x(){window.open(A4,"_blank","noopener,noreferrer")}function v(){localStorage.setItem("stekoraYoutubeSubscribed","yes"),p(!0)}const N=((_=s==null?void 0:s.modules)==null?void 0:_.findIndex(M=>Number(M.id)===Number(l)))??-1,A=N>0?s.modules[N-1]:null,F=N>=0?s.modules[N+1]:null;return r.jsxs(jr,{title:((R=s==null?void 0:s.module)==null?void 0:R.course_title)||"Course Module",children:[r.jsx("style",{children:`
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
      `}),u&&r.jsx("div",{className:"student-module-message",children:"Loading module..."}),y&&r.jsx("div",{className:"student-module-message",children:y}),s&&r.jsxs("div",{className:"student-module-shell",children:[r.jsxs("section",{className:"student-module-header",children:[r.jsxs("h2",{children:["Module ",s.module.order_number,": ",s.module.title]}),r.jsx("p",{children:s.module.category||"Course learning module"}),r.jsx("span",{className:"student-module-status",children:Number(s.module.completed)?"Completed":s.latest_grade?`Latest score: ${s.latest_grade.score}%`:"In progress"})]}),s.materials.length===0&&r.jsx("div",{className:"student-module-message",children:"The admin has not uploaded learning material for this module yet."}),s.materials.map(M=>r.jsxs("article",{className:"student-material-card",children:[r.jsx("h3",{children:M.title}),M.content&&r.jsx("p",{children:M.content}),M.youtube_url&&f&&r.jsx("iframe",{className:"student-material-video",src:L4(M.youtube_url),title:M.title,allowFullScreen:!0}),M.youtube_url&&!f&&r.jsx("div",{className:"student-video-lock",children:r.jsxs("div",{className:"student-video-lock-content",children:[r.jsx(H,{icon:jl,size:"2x"}),r.jsx("strong",{children:"Subscribe free to watch this video"}),r.jsx("p",{children:"Open the Stekora Tech YouTube channel, subscribe, then confirm below."}),r.jsxs("button",{className:"student-video-subscribe",type:"button",onClick:x,children:[r.jsx(H,{icon:iv}),"Subscribe"]}),r.jsx("button",{className:"student-video-confirm",type:"button",onClick:v,children:"I Have Subscribed"})]})}),M.file_url&&r.jsxs("a",{className:"student-file-link",href:At(M.file_url),target:"_blank",rel:"noreferrer",children:[r.jsx(H,{icon:Mx}),"Open learning file"]})]},M.id)),r.jsxs("section",{className:"student-module-actions",children:[r.jsxs("div",{className:"student-module-action-group",children:[A&&r.jsxs("button",{className:"student-module-button secondary",type:"button",onClick:()=>window.location.hash=`/student/course/${a}/module/${A.id}`,children:[r.jsx(H,{icon:Wl}),"Previous"]}),F&&Number(s.module.completed)===1&&r.jsxs("button",{className:"student-module-button secondary",type:"button",onClick:()=>window.location.hash=`/student/course/${a}/module/${F.id}`,children:["Next",r.jsx(H,{icon:qx})]})]}),s.has_assessment?r.jsxs("button",{className:"student-module-button green",type:"button",onClick:()=>window.location.hash=`/student/course/${a}/module/${l}/assessment`,children:[r.jsx(H,{icon:nv}),"Take Assessment"]}):r.jsx("span",{className:"student-module-message",children:"Waiting for the admin to add this module assessment."})]})]})]})}function M4(){const[a,l]=z.useState(()=>Ki("student")),[s,d]=z.useState({currentPassword:"",newPassword:"",confirmPassword:""}),[u,h]=z.useState(!1),[y,b]=z.useState({type:"",text:""}),[f,p]=z.useState(!1),g=v=>{l(v),Up("student",v)},x=async v=>{if(v.preventDefault(),b({type:"",text:""}),s.newPassword!==s.confirmPassword){b({type:"error",text:"New passwords do not match."});return}p(!0);try{const N=await p3({currentPassword:s.currentPassword,newPassword:s.newPassword});b({type:"success",text:N.message}),d({currentPassword:"",newPassword:"",confirmPassword:""})}catch(N){b({type:"error",text:N.message})}finally{p(!1)}};return r.jsxs(jr,{title:"Settings",children:[r.jsx("style",{children:I4}),r.jsxs("div",{className:"student-account-settings",children:[r.jsxs("section",{className:"student-settings-section",children:[r.jsxs("div",{className:"student-settings-heading",children:[r.jsx("span",{children:r.jsx(H,{icon:Bi})}),r.jsxs("div",{children:[r.jsx("h2",{children:"Appearance"}),r.jsx("p",{children:"Choose how your learning account looks on this device."})]})]}),r.jsxs("div",{className:"student-theme-options",children:[r.jsxs("button",{className:a==="light"?"selected":"",onClick:()=>g("light"),children:[r.jsx(H,{icon:Jm}),r.jsxs("span",{children:[r.jsx("strong",{children:"Light mode"}),r.jsx("small",{children:"Bright and clean interface"})]})]}),r.jsxs("button",{className:a==="dark"?"selected":"",onClick:()=>g("dark"),children:[r.jsx(H,{icon:Bi}),r.jsxs("span",{children:[r.jsx("strong",{children:"Dark mode"}),r.jsx("small",{children:"Comfortable in low light"})]})]})]})]}),r.jsxs("section",{className:"student-settings-section",children:[r.jsxs("div",{className:"student-settings-heading",children:[r.jsx("span",{children:r.jsx(H,{icon:$l})}),r.jsxs("div",{children:[r.jsx("h2",{children:"Change password"}),r.jsx("p",{children:"Use your current password to protect this change."})]})]}),r.jsxs("form",{className:"student-password-form",onSubmit:x,children:[["currentPassword","newPassword","confirmPassword"].map(v=>r.jsxs("label",{children:[v==="currentPassword"?"Current password":v==="newPassword"?"New password":"Confirm new password",r.jsxs("span",{className:"student-password-field",children:[r.jsx(H,{icon:Hi}),r.jsx("input",{type:u?"text":"password",value:s[v],minLength:v==="currentPassword"?void 0:8,required:!0,onChange:N=>d({...s,[v]:N.target.value})})]})]},v)),r.jsxs("div",{className:"student-password-actions",children:[r.jsxs("label",{className:"student-show-passwords",children:[r.jsx("input",{type:"checkbox",checked:u,onChange:v=>h(v.target.checked)}),r.jsx(H,{icon:u?sp:Gm})," Show passwords"]}),r.jsxs("button",{className:"student-settings-save",disabled:f,children:[r.jsx(H,{icon:Hi})," ",f?"Saving...":"Update Password"]})]}),y.text&&r.jsx("p",{className:`student-settings-message ${y.type}`,children:y.text})]})]})]})]})}const I4=`
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
`;function T4(){const[a,l]=z.useState(window.location.hash.replace("#","")||"/"),[s,d]=z.useState(!1);z.useEffect(()=>{const b=()=>{l(window.location.hash.replace("#","")||"/")};return window.addEventListener("hashchange",b),()=>window.removeEventListener("hashchange",b)},[]);const u=b=>{window.location.hash=b,l(b),d(!1),window.scrollTo({top:0,behavior:"smooth"})},h=z.useMemo(()=>{const b=a.match(/^\/student\/course\/(\d+)\/module\/(\d+)$/),f=a.match(/^\/student\/course\/(\d+)\/module\/(\d+)\/assessment$/),p=a.match(/^\/student\/course\/(\d+)\/final-exam$/);return a.startsWith("/certificate/")?r.jsx(q3,{code:a.split("/").pop()}):a==="/services"?r.jsx(L3,{}):a==="/study"?r.jsx(Zv,{}):a==="/jobs"?r.jsx(d3,{}):a==="/about"?r.jsx(wv,{}):a==="/contact"||a==="/apply-services"?r.jsx(Fv,{}):a==="/shop"?r.jsx(_3,{}):a==="/login"?r.jsx(S3,{goTo:u}):a==="/student"?r.jsx(P4,{}):f?r.jsx(E4,{courseId:f[1],moduleId:f[2]}):b?r.jsx(_4,{courseId:b[1],moduleId:b[2]}):p?r.jsx(C4,{courseId:p[1]}):a==="/student/certificates"?r.jsx(z4,{}):a==="/student/settings"?r.jsx(M4,{}):a==="/admin/courses"?r.jsx(l4,{}):a==="/admin/modules"?r.jsx(m4,{}):a==="/admin/materials"?r.jsx(f4,{}):a==="/admin/assessments"?r.jsx(i4,{}):a==="/admin/final-exam"?r.jsx(d4,{}):a==="/admin/exam-submissions"?r.jsx(c4,{}):a==="/admin/students"?r.jsx(j4,{}):a==="/admin/products"?r.jsx(x4,{}):a==="/admin/certificates"?r.jsx(o4,{}):a==="/admin/settings"?r.jsx(v4,{}):a==="/admin"?r.jsx(g4,{}):r.jsx(c3,{goTo:u})},[a]),y=!a.startsWith("/student")&&!a.startsWith("/admin")&&a!=="/login";return r.jsxs(r.Fragment,{children:[r.jsx(G1,{}),y?r.jsx(gv,{route:a,goTo:u,menuOpen:s,setMenuOpen:d,children:r.jsx("main",{children:h})}):r.jsx("main",{children:h})]})}Y1.createRoot(document.getElementById("root")).render(r.jsx(Fe.StrictMode,{children:r.jsx(T4,{})}));
