(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))d(u);new MutationObserver(u=>{for(const h of u)if(h.type==="childList")for(const v of h.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&d(v)}).observe(document,{childList:!0,subtree:!0});function s(u){const h={};return u.integrity&&(h.integrity=u.integrity),u.referrerPolicy&&(h.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?h.credentials="include":u.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function d(u){if(u.ep)return;u.ep=!0;const h=s(u);fetch(u.href,h)}})();function $1(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Yo={exports:{}},ca={},qo={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bu;function W1(){if(Bu)return he;Bu=1;var i=Symbol.for("react.element"),l=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),v=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function y(w){return w===null||typeof w!="object"?null:(w=x&&w[x]||w["@@iterator"],typeof w=="function"?w:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,T={};function _(w,O,le){this.props=w,this.context=O,this.refs=T,this.updater=le||C}_.prototype.isReactComponent={},_.prototype.setState=function(w,O){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,O,"setState")},_.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function R(){}R.prototype=_.prototype;function M(w,O,le){this.props=w,this.context=O,this.refs=T,this.updater=le||C}var D=M.prototype=new R;D.constructor=M,L(D,_.prototype),D.isPureReactComponent=!0;var V=Array.isArray,q=Object.prototype.hasOwnProperty,G={current:null},re={key:!0,ref:!0,__self:!0,__source:!0};function de(w,O,le){var U,K={},ie=null,ke=null;if(O!=null)for(U in O.ref!==void 0&&(ke=O.ref),O.key!==void 0&&(ie=""+O.key),O)q.call(O,U)&&!re.hasOwnProperty(U)&&(K[U]=O[U]);var Ce=arguments.length-2;if(Ce===1)K.children=le;else if(1<Ce){for(var _e=Array(Ce),ct=0;ct<Ce;ct++)_e[ct]=arguments[ct+2];K.children=_e}if(w&&w.defaultProps)for(U in Ce=w.defaultProps,Ce)K[U]===void 0&&(K[U]=Ce[U]);return{$$typeof:i,type:w,key:ie,ref:ke,props:K,_owner:G.current}}function X(w,O){return{$$typeof:i,type:w.type,key:O,ref:w.ref,props:w.props,_owner:w._owner}}function fe(w){return typeof w=="object"&&w!==null&&w.$$typeof===i}function pe(w){var O={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(le){return O[le]})}var me=/\/+/g;function ve(w,O){return typeof w=="object"&&w!==null&&w.key!=null?pe(""+w.key):O.toString(36)}function Se(w,O,le,U,K){var ie=typeof w;(ie==="undefined"||ie==="boolean")&&(w=null);var ke=!1;if(w===null)ke=!0;else switch(ie){case"string":case"number":ke=!0;break;case"object":switch(w.$$typeof){case i:case l:ke=!0}}if(ke)return ke=w,K=K(ke),w=U===""?"."+ve(ke,0):U,V(K)?(le="",w!=null&&(le=w.replace(me,"$&/")+"/"),Se(K,O,le,"",function(ct){return ct})):K!=null&&(fe(K)&&(K=X(K,le+(!K.key||ke&&ke.key===K.key?"":(""+K.key).replace(me,"$&/")+"/")+w)),O.push(K)),1;if(ke=0,U=U===""?".":U+":",V(w))for(var Ce=0;Ce<w.length;Ce++){ie=w[Ce];var _e=U+ve(ie,Ce);ke+=Se(ie,O,le,_e,K)}else if(_e=y(w),typeof _e=="function")for(w=_e.call(w),Ce=0;!(ie=w.next()).done;)ie=ie.value,_e=U+ve(ie,Ce++),ke+=Se(ie,O,le,_e,K);else if(ie==="object")throw O=String(w),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.");return ke}function je(w,O,le){if(w==null)return w;var U=[],K=0;return Se(w,U,"","",function(ie){return O.call(le,ie,K++)}),U}function Ne(w){if(w._status===-1){var O=w._result;O=O(),O.then(function(le){(w._status===0||w._status===-1)&&(w._status=1,w._result=le)},function(le){(w._status===0||w._status===-1)&&(w._status=2,w._result=le)}),w._status===-1&&(w._status=0,w._result=O)}if(w._status===1)return w._result.default;throw w._result}var xe={current:null},k={transition:null},F={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:k,ReactCurrentOwner:G};function E(){throw Error("act(...) is not supported in production builds of React.")}return he.Children={map:je,forEach:function(w,O,le){je(w,function(){O.apply(this,arguments)},le)},count:function(w){var O=0;return je(w,function(){O++}),O},toArray:function(w){return je(w,function(O){return O})||[]},only:function(w){if(!fe(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},he.Component=_,he.Fragment=s,he.Profiler=u,he.PureComponent=M,he.StrictMode=d,he.Suspense=f,he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,he.act=E,he.cloneElement=function(w,O,le){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var U=L({},w.props),K=w.key,ie=w.ref,ke=w._owner;if(O!=null){if(O.ref!==void 0&&(ie=O.ref,ke=G.current),O.key!==void 0&&(K=""+O.key),w.type&&w.type.defaultProps)var Ce=w.type.defaultProps;for(_e in O)q.call(O,_e)&&!re.hasOwnProperty(_e)&&(U[_e]=O[_e]===void 0&&Ce!==void 0?Ce[_e]:O[_e])}var _e=arguments.length-2;if(_e===1)U.children=le;else if(1<_e){Ce=Array(_e);for(var ct=0;ct<_e;ct++)Ce[ct]=arguments[ct+2];U.children=Ce}return{$$typeof:i,type:w.type,key:K,ref:ie,props:U,_owner:ke}},he.createContext=function(w){return w={$$typeof:v,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:h,_context:w},w.Consumer=w},he.createElement=de,he.createFactory=function(w){var O=de.bind(null,w);return O.type=w,O},he.createRef=function(){return{current:null}},he.forwardRef=function(w){return{$$typeof:b,render:w}},he.isValidElement=fe,he.lazy=function(w){return{$$typeof:g,_payload:{_status:-1,_result:w},_init:Ne}},he.memo=function(w,O){return{$$typeof:p,type:w,compare:O===void 0?null:O}},he.startTransition=function(w){var O=k.transition;k.transition={};try{w()}finally{k.transition=O}},he.unstable_act=E,he.useCallback=function(w,O){return xe.current.useCallback(w,O)},he.useContext=function(w){return xe.current.useContext(w)},he.useDebugValue=function(){},he.useDeferredValue=function(w){return xe.current.useDeferredValue(w)},he.useEffect=function(w,O){return xe.current.useEffect(w,O)},he.useId=function(){return xe.current.useId()},he.useImperativeHandle=function(w,O,le){return xe.current.useImperativeHandle(w,O,le)},he.useInsertionEffect=function(w,O){return xe.current.useInsertionEffect(w,O)},he.useLayoutEffect=function(w,O){return xe.current.useLayoutEffect(w,O)},he.useMemo=function(w,O){return xe.current.useMemo(w,O)},he.useReducer=function(w,O,le){return xe.current.useReducer(w,O,le)},he.useRef=function(w){return xe.current.useRef(w)},he.useState=function(w){return xe.current.useState(w)},he.useSyncExternalStore=function(w,O,le){return xe.current.useSyncExternalStore(w,O,le)},he.useTransition=function(){return xe.current.useTransition()},he.version="18.3.1",he}var Vu;function El(){return Vu||(Vu=1,qo.exports=W1()),qo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qu;function H1(){if(Qu)return ca;Qu=1;var i=El(),l=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,u=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function v(b,f,p){var g,x={},y=null,C=null;p!==void 0&&(y=""+p),f.key!==void 0&&(y=""+f.key),f.ref!==void 0&&(C=f.ref);for(g in f)d.call(f,g)&&!h.hasOwnProperty(g)&&(x[g]=f[g]);if(b&&b.defaultProps)for(g in f=b.defaultProps,f)x[g]===void 0&&(x[g]=f[g]);return{$$typeof:l,type:b,key:y,ref:C,props:x,_owner:u.current}}return ca.Fragment=s,ca.jsx=v,ca.jsxs=v,ca}var Yu;function B1(){return Yu||(Yu=1,Yo.exports=H1()),Yo.exports}var r=B1(),z=El();const Te=$1(z);var _i={},Go={exports:{}},lt={},Xo={exports:{}},Ko={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qu;function V1(){return qu||(qu=1,(function(i){function l(k,F){var E=k.length;k.push(F);e:for(;0<E;){var w=E-1>>>1,O=k[w];if(0<u(O,F))k[w]=F,k[E]=O,E=w;else break e}}function s(k){return k.length===0?null:k[0]}function d(k){if(k.length===0)return null;var F=k[0],E=k.pop();if(E!==F){k[0]=E;e:for(var w=0,O=k.length,le=O>>>1;w<le;){var U=2*(w+1)-1,K=k[U],ie=U+1,ke=k[ie];if(0>u(K,E))ie<O&&0>u(ke,K)?(k[w]=ke,k[ie]=E,w=ie):(k[w]=K,k[U]=E,w=U);else if(ie<O&&0>u(ke,E))k[w]=ke,k[ie]=E,w=ie;else break e}}return F}function u(k,F){var E=k.sortIndex-F.sortIndex;return E!==0?E:k.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;i.unstable_now=function(){return h.now()}}else{var v=Date,b=v.now();i.unstable_now=function(){return v.now()-b}}var f=[],p=[],g=1,x=null,y=3,C=!1,L=!1,T=!1,_=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(k){for(var F=s(p);F!==null;){if(F.callback===null)d(p);else if(F.startTime<=k)d(p),F.sortIndex=F.expirationTime,l(f,F);else break;F=s(p)}}function V(k){if(T=!1,D(k),!L)if(s(f)!==null)L=!0,Ne(q);else{var F=s(p);F!==null&&xe(V,F.startTime-k)}}function q(k,F){L=!1,T&&(T=!1,R(de),de=-1),C=!0;var E=y;try{for(D(F),x=s(f);x!==null&&(!(x.expirationTime>F)||k&&!pe());){var w=x.callback;if(typeof w=="function"){x.callback=null,y=x.priorityLevel;var O=w(x.expirationTime<=F);F=i.unstable_now(),typeof O=="function"?x.callback=O:x===s(f)&&d(f),D(F)}else d(f);x=s(f)}if(x!==null)var le=!0;else{var U=s(p);U!==null&&xe(V,U.startTime-F),le=!1}return le}finally{x=null,y=E,C=!1}}var G=!1,re=null,de=-1,X=5,fe=-1;function pe(){return!(i.unstable_now()-fe<X)}function me(){if(re!==null){var k=i.unstable_now();fe=k;var F=!0;try{F=re(!0,k)}finally{F?ve():(G=!1,re=null)}}else G=!1}var ve;if(typeof M=="function")ve=function(){M(me)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,je=Se.port2;Se.port1.onmessage=me,ve=function(){je.postMessage(null)}}else ve=function(){_(me,0)};function Ne(k){re=k,G||(G=!0,ve())}function xe(k,F){de=_(function(){k(i.unstable_now())},F)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(k){k.callback=null},i.unstable_continueExecution=function(){L||C||(L=!0,Ne(q))},i.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<k?Math.floor(1e3/k):5},i.unstable_getCurrentPriorityLevel=function(){return y},i.unstable_getFirstCallbackNode=function(){return s(f)},i.unstable_next=function(k){switch(y){case 1:case 2:case 3:var F=3;break;default:F=y}var E=y;y=F;try{return k()}finally{y=E}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(k,F){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var E=y;y=k;try{return F()}finally{y=E}},i.unstable_scheduleCallback=function(k,F,E){var w=i.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?w+E:w):E=w,k){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=E+O,k={id:g++,callback:F,priorityLevel:k,startTime:E,expirationTime:O,sortIndex:-1},E>w?(k.sortIndex=E,l(p,k),s(f)===null&&k===s(p)&&(T?(R(de),de=-1):T=!0,xe(V,E-w))):(k.sortIndex=O,l(f,k),L||C||(L=!0,Ne(q))),k},i.unstable_shouldYield=pe,i.unstable_wrapCallback=function(k){var F=y;return function(){var E=y;y=F;try{return k.apply(this,arguments)}finally{y=E}}}})(Ko)),Ko}var Gu;function Q1(){return Gu||(Gu=1,Xo.exports=V1()),Xo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xu;function Y1(){if(Xu)return lt;Xu=1;var i=El(),l=Q1();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,u={};function h(e,t){v(e,t),v(e+"Capture",t)}function v(e,t){for(u[e]=t,e=0;e<t.length;e++)d.add(t[e])}var b=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},x={};function y(e){return f.call(x,e)?!0:f.call(g,e)?!1:p.test(e)?x[e]=!0:(g[e]=!0,!1)}function C(e,t,n,a){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function L(e,t,n,a){if(t===null||typeof t>"u"||C(e,t,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function T(e,t,n,a,o,c,m){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=c,this.removeEmptyString=m}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_[e]=new T(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];_[t]=new T(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){_[e]=new T(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_[e]=new T(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_[e]=new T(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){_[e]=new T(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){_[e]=new T(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){_[e]=new T(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){_[e]=new T(e,5,!1,e.toLowerCase(),null,!1,!1)});var R=/[\-:]([a-z])/g;function M(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(R,M);_[t]=new T(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(R,M);_[t]=new T(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(R,M);_[t]=new T(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){_[e]=new T(e,1,!1,e.toLowerCase(),null,!1,!1)}),_.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){_[e]=new T(e,1,!1,e.toLowerCase(),null,!0,!0)});function D(e,t,n,a){var o=_.hasOwnProperty(t)?_[t]:null;(o!==null?o.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(L(t,n,o,a)&&(n=null),a||o===null?y(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,a=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,a?e.setAttributeNS(a,t,n):e.setAttribute(t,n))))}var V=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,q=Symbol.for("react.element"),G=Symbol.for("react.portal"),re=Symbol.for("react.fragment"),de=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),fe=Symbol.for("react.provider"),pe=Symbol.for("react.context"),me=Symbol.for("react.forward_ref"),ve=Symbol.for("react.suspense"),Se=Symbol.for("react.suspense_list"),je=Symbol.for("react.memo"),Ne=Symbol.for("react.lazy"),xe=Symbol.for("react.offscreen"),k=Symbol.iterator;function F(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var E=Object.assign,w;function O(e){if(w===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);w=t&&t[1]||""}return`
`+w+e}var le=!1;function U(e,t){if(!e||le)return"";le=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(I){var a=I}Reflect.construct(e,[],t)}else{try{t.call()}catch(I){a=I}e.call(t.prototype)}else{try{throw Error()}catch(I){a=I}e()}}catch(I){if(I&&a&&typeof I.stack=="string"){for(var o=I.stack.split(`
`),c=a.stack.split(`
`),m=o.length-1,j=c.length-1;1<=m&&0<=j&&o[m]!==c[j];)j--;for(;1<=m&&0<=j;m--,j--)if(o[m]!==c[j]){if(m!==1||j!==1)do if(m--,j--,0>j||o[m]!==c[j]){var S=`
`+o[m].replace(" at new "," at ");return e.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",e.displayName)),S}while(1<=m&&0<=j);break}}}finally{le=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?O(e):""}function K(e){switch(e.tag){case 5:return O(e.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return e=U(e.type,!1),e;case 11:return e=U(e.type.render,!1),e;case 1:return e=U(e.type,!0),e;default:return""}}function ie(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case re:return"Fragment";case G:return"Portal";case X:return"Profiler";case de:return"StrictMode";case ve:return"Suspense";case Se:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pe:return(e.displayName||"Context")+".Consumer";case fe:return(e._context.displayName||"Context")+".Provider";case me:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case je:return t=e.displayName||null,t!==null?t:ie(e.type)||"Memo";case Ne:t=e._payload,e=e._init;try{return ie(e(t))}catch{}}return null}function ke(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(t);case 8:return t===de?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ce(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _e(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ct(e){var t=_e(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,c=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(m){a=""+m,c.call(this,m)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ja(e){e._valueTracker||(e._valueTracker=ct(e))}function Xl(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=_e(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function ka(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zi(e,t){var n=t.checked;return E({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Kl(e,t){var n=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;n=Ce(t.value!=null?t.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Jl(e,t){t=t.checked,t!=null&&D(e,"checked",t,!1)}function es(e,t){Jl(e,t);var n=Ce(t.value),a=t.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ts(e,t.type,n):t.hasOwnProperty("defaultValue")&&ts(e,t.type,Ce(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Zl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ts(e,t,n){(t!=="number"||ka(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Sr=Array.isArray;function Un(e,t,n,a){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Ce(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,a&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ns(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return E({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ec(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(s(92));if(Sr(n)){if(1<n.length)throw Error(s(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ce(n)}}function tc(e,t){var n=Ce(t.value),a=Ce(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function nc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function rc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?rc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Sa,ac=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,a,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,a,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Sa=Sa||document.createElement("div"),Sa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Sa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Nr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Cr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vp=["Webkit","ms","Moz","O"];Object.keys(Cr).forEach(function(e){Vp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Cr[t]=Cr[e]})});function ic(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Cr.hasOwnProperty(e)&&Cr[e]?(""+t).trim():t+"px"}function sc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var a=n.indexOf("--")===0,o=ic(n,t[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,o):e[n]=o}}var Qp=E({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function as(e,t){if(t){if(Qp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function is(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ss=null;function os(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ls=null,$n=null,Wn=null;function oc(e){if(e=qr(e)){if(typeof ls!="function")throw Error(s(280));var t=e.stateNode;t&&(t=Ya(t),ls(e.stateNode,e.type,t))}}function lc(e){$n?Wn?Wn.push(e):Wn=[e]:$n=e}function cc(){if($n){var e=$n,t=Wn;if(Wn=$n=null,oc(e),t)for(e=0;e<t.length;e++)oc(t[e])}}function dc(e,t){return e(t)}function uc(){}var cs=!1;function fc(e,t,n){if(cs)return e(t,n);cs=!0;try{return dc(e,t,n)}finally{cs=!1,($n!==null||Wn!==null)&&(uc(),cc())}}function Er(e,t){var n=e.stateNode;if(n===null)return null;var a=Ya(n);if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var ds=!1;if(b)try{var zr={};Object.defineProperty(zr,"passive",{get:function(){ds=!0}}),window.addEventListener("test",zr,zr),window.removeEventListener("test",zr,zr)}catch{ds=!1}function Yp(e,t,n,a,o,c,m,j,S){var I=Array.prototype.slice.call(arguments,3);try{t.apply(n,I)}catch(W){this.onError(W)}}var Pr=!1,Na=null,Ca=!1,us=null,qp={onError:function(e){Pr=!0,Na=e}};function Gp(e,t,n,a,o,c,m,j,S){Pr=!1,Na=null,Yp.apply(qp,arguments)}function Xp(e,t,n,a,o,c,m,j,S){if(Gp.apply(this,arguments),Pr){if(Pr){var I=Na;Pr=!1,Na=null}else throw Error(s(198));Ca||(Ca=!0,us=I)}}function jn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function mc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function pc(e){if(jn(e)!==e)throw Error(s(188))}function Kp(e){var t=e.alternate;if(!t){if(t=jn(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,a=t;;){var o=n.return;if(o===null)break;var c=o.alternate;if(c===null){if(a=o.return,a!==null){n=a;continue}break}if(o.child===c.child){for(c=o.child;c;){if(c===n)return pc(o),e;if(c===a)return pc(o),t;c=c.sibling}throw Error(s(188))}if(n.return!==a.return)n=o,a=c;else{for(var m=!1,j=o.child;j;){if(j===n){m=!0,n=o,a=c;break}if(j===a){m=!0,a=o,n=c;break}j=j.sibling}if(!m){for(j=c.child;j;){if(j===n){m=!0,n=c,a=o;break}if(j===a){m=!0,a=c,n=o;break}j=j.sibling}if(!m)throw Error(s(189))}}if(n.alternate!==a)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function hc(e){return e=Kp(e),e!==null?gc(e):null}function gc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=gc(e);if(t!==null)return t;e=e.sibling}return null}var xc=l.unstable_scheduleCallback,vc=l.unstable_cancelCallback,Jp=l.unstable_shouldYield,Zp=l.unstable_requestPaint,De=l.unstable_now,eh=l.unstable_getCurrentPriorityLevel,fs=l.unstable_ImmediatePriority,yc=l.unstable_UserBlockingPriority,Ea=l.unstable_NormalPriority,th=l.unstable_LowPriority,bc=l.unstable_IdlePriority,za=null,_t=null;function nh(e){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(za,e,void 0,(e.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:ih,rh=Math.log,ah=Math.LN2;function ih(e){return e>>>=0,e===0?32:31-(rh(e)/ah|0)|0}var Pa=64,Aa=4194304;function Ar(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function La(e,t){var n=e.pendingLanes;if(n===0)return 0;var a=0,o=e.suspendedLanes,c=e.pingedLanes,m=n&268435455;if(m!==0){var j=m&~o;j!==0?a=Ar(j):(c&=m,c!==0&&(a=Ar(c)))}else m=n&~o,m!==0?a=Ar(m):c!==0&&(a=Ar(c));if(a===0)return 0;if(t!==0&&t!==a&&(t&o)===0&&(o=a&-a,c=t&-t,o>=c||o===16&&(c&4194240)!==0))return t;if((a&4)!==0&&(a|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)n=31-wt(t),o=1<<n,a|=e[n],t&=~o;return a}function sh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function oh(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,o=e.expirationTimes,c=e.pendingLanes;0<c;){var m=31-wt(c),j=1<<m,S=o[m];S===-1?((j&n)===0||(j&a)!==0)&&(o[m]=sh(j,t)):S<=t&&(e.expiredLanes|=j),c&=~j}}function ms(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function wc(){var e=Pa;return Pa<<=1,(Pa&4194240)===0&&(Pa=64),e}function ps(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Lr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-wt(t),e[t]=n}function lh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-wt(n),c=1<<o;t[o]=0,a[o]=-1,e[o]=-1,n&=~c}}function hs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-wt(n),o=1<<a;o&t|e[a]&t&&(e[a]|=t),n&=~o}}var Ee=0;function jc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var kc,gs,Sc,Nc,Cc,xs=!1,_a=[],Jt=null,Zt=null,en=null,_r=new Map,Mr=new Map,tn=[],ch="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ec(e,t){switch(e){case"focusin":case"focusout":Jt=null;break;case"dragenter":case"dragleave":Zt=null;break;case"mouseover":case"mouseout":en=null;break;case"pointerover":case"pointerout":_r.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mr.delete(t.pointerId)}}function Ir(e,t,n,a,o,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:c,targetContainers:[o]},t!==null&&(t=qr(t),t!==null&&gs(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function dh(e,t,n,a,o){switch(t){case"focusin":return Jt=Ir(Jt,e,t,n,a,o),!0;case"dragenter":return Zt=Ir(Zt,e,t,n,a,o),!0;case"mouseover":return en=Ir(en,e,t,n,a,o),!0;case"pointerover":var c=o.pointerId;return _r.set(c,Ir(_r.get(c)||null,e,t,n,a,o)),!0;case"gotpointercapture":return c=o.pointerId,Mr.set(c,Ir(Mr.get(c)||null,e,t,n,a,o)),!0}return!1}function zc(e){var t=kn(e.target);if(t!==null){var n=jn(t);if(n!==null){if(t=n.tag,t===13){if(t=mc(n),t!==null){e.blockedOn=t,Cc(e.priority,function(){Sc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ma(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ys(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);ss=a,n.target.dispatchEvent(a),ss=null}else return t=qr(n),t!==null&&gs(t),e.blockedOn=n,!1;t.shift()}return!0}function Pc(e,t,n){Ma(e)&&n.delete(t)}function uh(){xs=!1,Jt!==null&&Ma(Jt)&&(Jt=null),Zt!==null&&Ma(Zt)&&(Zt=null),en!==null&&Ma(en)&&(en=null),_r.forEach(Pc),Mr.forEach(Pc)}function Fr(e,t){e.blockedOn===t&&(e.blockedOn=null,xs||(xs=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,uh)))}function Tr(e){function t(o){return Fr(o,e)}if(0<_a.length){Fr(_a[0],e);for(var n=1;n<_a.length;n++){var a=_a[n];a.blockedOn===e&&(a.blockedOn=null)}}for(Jt!==null&&Fr(Jt,e),Zt!==null&&Fr(Zt,e),en!==null&&Fr(en,e),_r.forEach(t),Mr.forEach(t),n=0;n<tn.length;n++)a=tn[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<tn.length&&(n=tn[0],n.blockedOn===null);)zc(n),n.blockedOn===null&&tn.shift()}var Hn=V.ReactCurrentBatchConfig,Ia=!0;function fh(e,t,n,a){var o=Ee,c=Hn.transition;Hn.transition=null;try{Ee=1,vs(e,t,n,a)}finally{Ee=o,Hn.transition=c}}function mh(e,t,n,a){var o=Ee,c=Hn.transition;Hn.transition=null;try{Ee=4,vs(e,t,n,a)}finally{Ee=o,Hn.transition=c}}function vs(e,t,n,a){if(Ia){var o=ys(e,t,n,a);if(o===null)Ts(e,t,a,Fa,n),Ec(e,a);else if(dh(o,e,t,n,a))a.stopPropagation();else if(Ec(e,a),t&4&&-1<ch.indexOf(e)){for(;o!==null;){var c=qr(o);if(c!==null&&kc(c),c=ys(e,t,n,a),c===null&&Ts(e,t,a,Fa,n),c===o)break;o=c}o!==null&&a.stopPropagation()}else Ts(e,t,a,null,n)}}var Fa=null;function ys(e,t,n,a){if(Fa=null,e=os(a),e=kn(e),e!==null)if(t=jn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=mc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fa=e,null}function Ac(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(eh()){case fs:return 1;case yc:return 4;case Ea:case th:return 16;case bc:return 536870912;default:return 16}default:return 16}}var nn=null,bs=null,Ta=null;function Lc(){if(Ta)return Ta;var e,t=bs,n=t.length,a,o="value"in nn?nn.value:nn.textContent,c=o.length;for(e=0;e<n&&t[e]===o[e];e++);var m=n-e;for(a=1;a<=m&&t[n-a]===o[c-a];a++);return Ta=o.slice(e,1<a?1-a:void 0)}function Oa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ra(){return!0}function _c(){return!1}function dt(e){function t(n,a,o,c,m){this._reactName=n,this._targetInst=o,this.type=a,this.nativeEvent=c,this.target=m,this.currentTarget=null;for(var j in e)e.hasOwnProperty(j)&&(n=e[j],this[j]=n?n(c):c[j]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Ra:_c,this.isPropagationStopped=_c,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ra)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ra)},persist:function(){},isPersistent:Ra}),t}var Bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ws=dt(Bn),Or=E({},Bn,{view:0,detail:0}),ph=dt(Or),js,ks,Rr,Da=E({},Or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ns,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Rr&&(Rr&&e.type==="mousemove"?(js=e.screenX-Rr.screenX,ks=e.screenY-Rr.screenY):ks=js=0,Rr=e),js)},movementY:function(e){return"movementY"in e?e.movementY:ks}}),Mc=dt(Da),hh=E({},Da,{dataTransfer:0}),gh=dt(hh),xh=E({},Or,{relatedTarget:0}),Ss=dt(xh),vh=E({},Bn,{animationName:0,elapsedTime:0,pseudoElement:0}),yh=dt(vh),bh=E({},Bn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wh=dt(bh),jh=E({},Bn,{data:0}),Ic=dt(jh),kh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ch(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Nh[e])?!!t[e]:!1}function Ns(){return Ch}var Eh=E({},Or,{key:function(e){if(e.key){var t=kh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Oa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ns,charCode:function(e){return e.type==="keypress"?Oa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Oa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zh=dt(Eh),Ph=E({},Da,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fc=dt(Ph),Ah=E({},Or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ns}),Lh=dt(Ah),_h=E({},Bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mh=dt(_h),Ih=E({},Da,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fh=dt(Ih),Th=[9,13,27,32],Cs=b&&"CompositionEvent"in window,Dr=null;b&&"documentMode"in document&&(Dr=document.documentMode);var Oh=b&&"TextEvent"in window&&!Dr,Tc=b&&(!Cs||Dr&&8<Dr&&11>=Dr),Oc=" ",Rc=!1;function Dc(e,t){switch(e){case"keyup":return Th.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vn=!1;function Rh(e,t){switch(e){case"compositionend":return Uc(t);case"keypress":return t.which!==32?null:(Rc=!0,Oc);case"textInput":return e=t.data,e===Oc&&Rc?null:e;default:return null}}function Dh(e,t){if(Vn)return e==="compositionend"||!Cs&&Dc(e,t)?(e=Lc(),Ta=bs=nn=null,Vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tc&&t.locale!=="ko"?null:t.data;default:return null}}var Uh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $c(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Uh[e.type]:t==="textarea"}function Wc(e,t,n,a){lc(a),t=Ba(t,"onChange"),0<t.length&&(n=new ws("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Ur=null,$r=null;function $h(e){sd(e,0)}function Ua(e){var t=Xn(e);if(Xl(t))return e}function Wh(e,t){if(e==="change")return t}var Hc=!1;if(b){var Es;if(b){var zs="oninput"in document;if(!zs){var Bc=document.createElement("div");Bc.setAttribute("oninput","return;"),zs=typeof Bc.oninput=="function"}Es=zs}else Es=!1;Hc=Es&&(!document.documentMode||9<document.documentMode)}function Vc(){Ur&&(Ur.detachEvent("onpropertychange",Qc),$r=Ur=null)}function Qc(e){if(e.propertyName==="value"&&Ua($r)){var t=[];Wc(t,$r,e,os(e)),fc($h,t)}}function Hh(e,t,n){e==="focusin"?(Vc(),Ur=t,$r=n,Ur.attachEvent("onpropertychange",Qc)):e==="focusout"&&Vc()}function Bh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ua($r)}function Vh(e,t){if(e==="click")return Ua(t)}function Qh(e,t){if(e==="input"||e==="change")return Ua(t)}function Yh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jt=typeof Object.is=="function"?Object.is:Yh;function Wr(e,t){if(jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var o=n[a];if(!f.call(t,o)||!jt(e[o],t[o]))return!1}return!0}function Yc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qc(e,t){var n=Yc(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yc(n)}}function Gc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xc(){for(var e=window,t=ka();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ka(e.document)}return t}function Ps(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function qh(e){var t=Xc(),n=e.focusedElem,a=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Gc(n.ownerDocument.documentElement,n)){if(a!==null&&Ps(n)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,c=Math.min(a.start,o);a=a.end===void 0?c:Math.min(a.end,o),!e.extend&&c>a&&(o=a,a=c,c=o),o=qc(n,c);var m=qc(n,a);o&&m&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==m.node||e.focusOffset!==m.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),c>a?(e.addRange(t),e.extend(m.node,m.offset)):(t.setEnd(m.node,m.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gh=b&&"documentMode"in document&&11>=document.documentMode,Qn=null,As=null,Hr=null,Ls=!1;function Kc(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ls||Qn==null||Qn!==ka(a)||(a=Qn,"selectionStart"in a&&Ps(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Hr&&Wr(Hr,a)||(Hr=a,a=Ba(As,"onSelect"),0<a.length&&(t=new ws("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Qn)))}function $a(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Yn={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionend:$a("Transition","TransitionEnd")},_s={},Jc={};b&&(Jc=document.createElement("div").style,"AnimationEvent"in window||(delete Yn.animationend.animation,delete Yn.animationiteration.animation,delete Yn.animationstart.animation),"TransitionEvent"in window||delete Yn.transitionend.transition);function Wa(e){if(_s[e])return _s[e];if(!Yn[e])return e;var t=Yn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jc)return _s[e]=t[n];return e}var Zc=Wa("animationend"),ed=Wa("animationiteration"),td=Wa("animationstart"),nd=Wa("transitionend"),rd=new Map,ad="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rn(e,t){rd.set(e,t),h(t,[e])}for(var Ms=0;Ms<ad.length;Ms++){var Is=ad[Ms],Xh=Is.toLowerCase(),Kh=Is[0].toUpperCase()+Is.slice(1);rn(Xh,"on"+Kh)}rn(Zc,"onAnimationEnd"),rn(ed,"onAnimationIteration"),rn(td,"onAnimationStart"),rn("dblclick","onDoubleClick"),rn("focusin","onFocus"),rn("focusout","onBlur"),rn(nd,"onTransitionEnd"),v("onMouseEnter",["mouseout","mouseover"]),v("onMouseLeave",["mouseout","mouseover"]),v("onPointerEnter",["pointerout","pointerover"]),v("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));function id(e,t,n){var a=e.type||"unknown-event";e.currentTarget=n,Xp(a,t,void 0,e),e.currentTarget=null}function sd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],o=a.event;a=a.listeners;e:{var c=void 0;if(t)for(var m=a.length-1;0<=m;m--){var j=a[m],S=j.instance,I=j.currentTarget;if(j=j.listener,S!==c&&o.isPropagationStopped())break e;id(o,j,I),c=S}else for(m=0;m<a.length;m++){if(j=a[m],S=j.instance,I=j.currentTarget,j=j.listener,S!==c&&o.isPropagationStopped())break e;id(o,j,I),c=S}}}if(Ca)throw e=us,Ca=!1,us=null,e}function Pe(e,t){var n=t[Ws];n===void 0&&(n=t[Ws]=new Set);var a=e+"__bubble";n.has(a)||(od(t,e,2,!1),n.add(a))}function Fs(e,t,n){var a=0;t&&(a|=4),od(n,e,a,t)}var Ha="_reactListening"+Math.random().toString(36).slice(2);function Vr(e){if(!e[Ha]){e[Ha]=!0,d.forEach(function(n){n!=="selectionchange"&&(Jh.has(n)||Fs(n,!1,e),Fs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ha]||(t[Ha]=!0,Fs("selectionchange",!1,t))}}function od(e,t,n,a){switch(Ac(t)){case 1:var o=fh;break;case 4:o=mh;break;default:o=vs}n=o.bind(null,t,n,e),o=void 0,!ds||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),a?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ts(e,t,n,a,o){var c=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var m=a.tag;if(m===3||m===4){var j=a.stateNode.containerInfo;if(j===o||j.nodeType===8&&j.parentNode===o)break;if(m===4)for(m=a.return;m!==null;){var S=m.tag;if((S===3||S===4)&&(S=m.stateNode.containerInfo,S===o||S.nodeType===8&&S.parentNode===o))return;m=m.return}for(;j!==null;){if(m=kn(j),m===null)return;if(S=m.tag,S===5||S===6){a=c=m;continue e}j=j.parentNode}}a=a.return}fc(function(){var I=c,W=os(n),B=[];e:{var $=rd.get(e);if($!==void 0){var J=ws,ee=e;switch(e){case"keypress":if(Oa(n)===0)break e;case"keydown":case"keyup":J=zh;break;case"focusin":ee="focus",J=Ss;break;case"focusout":ee="blur",J=Ss;break;case"beforeblur":case"afterblur":J=Ss;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=Mc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=gh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=Lh;break;case Zc:case ed:case td:J=yh;break;case nd:J=Mh;break;case"scroll":J=ph;break;case"wheel":J=Fh;break;case"copy":case"cut":case"paste":J=wh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=Fc}var te=(t&4)!==0,Ue=!te&&e==="scroll",P=te?$!==null?$+"Capture":null:$;te=[];for(var N=I,A;N!==null;){A=N;var Y=A.stateNode;if(A.tag===5&&Y!==null&&(A=Y,P!==null&&(Y=Er(N,P),Y!=null&&te.push(Qr(N,Y,A)))),Ue)break;N=N.return}0<te.length&&($=new J($,ee,null,n,W),B.push({event:$,listeners:te}))}}if((t&7)===0){e:{if($=e==="mouseover"||e==="pointerover",J=e==="mouseout"||e==="pointerout",$&&n!==ss&&(ee=n.relatedTarget||n.fromElement)&&(kn(ee)||ee[Rt]))break e;if((J||$)&&($=W.window===W?W:($=W.ownerDocument)?$.defaultView||$.parentWindow:window,J?(ee=n.relatedTarget||n.toElement,J=I,ee=ee?kn(ee):null,ee!==null&&(Ue=jn(ee),ee!==Ue||ee.tag!==5&&ee.tag!==6)&&(ee=null)):(J=null,ee=I),J!==ee)){if(te=Mc,Y="onMouseLeave",P="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(te=Fc,Y="onPointerLeave",P="onPointerEnter",N="pointer"),Ue=J==null?$:Xn(J),A=ee==null?$:Xn(ee),$=new te(Y,N+"leave",J,n,W),$.target=Ue,$.relatedTarget=A,Y=null,kn(W)===I&&(te=new te(P,N+"enter",ee,n,W),te.target=A,te.relatedTarget=Ue,Y=te),Ue=Y,J&&ee)t:{for(te=J,P=ee,N=0,A=te;A;A=qn(A))N++;for(A=0,Y=P;Y;Y=qn(Y))A++;for(;0<N-A;)te=qn(te),N--;for(;0<A-N;)P=qn(P),A--;for(;N--;){if(te===P||P!==null&&te===P.alternate)break t;te=qn(te),P=qn(P)}te=null}else te=null;J!==null&&ld(B,$,J,te,!1),ee!==null&&Ue!==null&&ld(B,Ue,ee,te,!0)}}e:{if($=I?Xn(I):window,J=$.nodeName&&$.nodeName.toLowerCase(),J==="select"||J==="input"&&$.type==="file")var ne=Wh;else if($c($))if(Hc)ne=Qh;else{ne=Bh;var se=Hh}else(J=$.nodeName)&&J.toLowerCase()==="input"&&($.type==="checkbox"||$.type==="radio")&&(ne=Vh);if(ne&&(ne=ne(e,I))){Wc(B,ne,n,W);break e}se&&se(e,$,I),e==="focusout"&&(se=$._wrapperState)&&se.controlled&&$.type==="number"&&ts($,"number",$.value)}switch(se=I?Xn(I):window,e){case"focusin":($c(se)||se.contentEditable==="true")&&(Qn=se,As=I,Hr=null);break;case"focusout":Hr=As=Qn=null;break;case"mousedown":Ls=!0;break;case"contextmenu":case"mouseup":case"dragend":Ls=!1,Kc(B,n,W);break;case"selectionchange":if(Gh)break;case"keydown":case"keyup":Kc(B,n,W)}var oe;if(Cs)e:{switch(e){case"compositionstart":var ce="onCompositionStart";break e;case"compositionend":ce="onCompositionEnd";break e;case"compositionupdate":ce="onCompositionUpdate";break e}ce=void 0}else Vn?Dc(e,n)&&(ce="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ce="onCompositionStart");ce&&(Tc&&n.locale!=="ko"&&(Vn||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&Vn&&(oe=Lc()):(nn=W,bs="value"in nn?nn.value:nn.textContent,Vn=!0)),se=Ba(I,ce),0<se.length&&(ce=new Ic(ce,e,null,n,W),B.push({event:ce,listeners:se}),oe?ce.data=oe:(oe=Uc(n),oe!==null&&(ce.data=oe)))),(oe=Oh?Rh(e,n):Dh(e,n))&&(I=Ba(I,"onBeforeInput"),0<I.length&&(W=new Ic("onBeforeInput","beforeinput",null,n,W),B.push({event:W,listeners:I}),W.data=oe))}sd(B,t)})}function Qr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ba(e,t){for(var n=t+"Capture",a=[];e!==null;){var o=e,c=o.stateNode;o.tag===5&&c!==null&&(o=c,c=Er(e,n),c!=null&&a.unshift(Qr(e,c,o)),c=Er(e,t),c!=null&&a.push(Qr(e,c,o))),e=e.return}return a}function qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ld(e,t,n,a,o){for(var c=t._reactName,m=[];n!==null&&n!==a;){var j=n,S=j.alternate,I=j.stateNode;if(S!==null&&S===a)break;j.tag===5&&I!==null&&(j=I,o?(S=Er(n,c),S!=null&&m.unshift(Qr(n,S,j))):o||(S=Er(n,c),S!=null&&m.push(Qr(n,S,j)))),n=n.return}m.length!==0&&e.push({event:t,listeners:m})}var Zh=/\r\n?/g,e1=/\u0000|\uFFFD/g;function cd(e){return(typeof e=="string"?e:""+e).replace(Zh,`
`).replace(e1,"")}function Va(e,t,n){if(t=cd(t),cd(e)!==t&&n)throw Error(s(425))}function Qa(){}var Os=null,Rs=null;function Ds(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Us=typeof setTimeout=="function"?setTimeout:void 0,t1=typeof clearTimeout=="function"?clearTimeout:void 0,dd=typeof Promise=="function"?Promise:void 0,n1=typeof queueMicrotask=="function"?queueMicrotask:typeof dd<"u"?function(e){return dd.resolve(null).then(e).catch(r1)}:Us;function r1(e){setTimeout(function(){throw e})}function $s(e,t){var n=t,a=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(a===0){e.removeChild(o),Tr(t);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=o}while(n);Tr(t)}function an(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ud(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Gn=Math.random().toString(36).slice(2),Mt="__reactFiber$"+Gn,Yr="__reactProps$"+Gn,Rt="__reactContainer$"+Gn,Ws="__reactEvents$"+Gn,a1="__reactListeners$"+Gn,i1="__reactHandles$"+Gn;function kn(e){var t=e[Mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Rt]||n[Mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ud(e);e!==null;){if(n=e[Mt])return n;e=ud(e)}return t}e=n,n=e.parentNode}return null}function qr(e){return e=e[Mt]||e[Rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function Ya(e){return e[Yr]||null}var Hs=[],Kn=-1;function sn(e){return{current:e}}function Ae(e){0>Kn||(e.current=Hs[Kn],Hs[Kn]=null,Kn--)}function ze(e,t){Kn++,Hs[Kn]=e.current,e.current=t}var on={},Ke=sn(on),rt=sn(!1),Sn=on;function Jn(e,t){var n=e.type.contextTypes;if(!n)return on;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var o={},c;for(c in n)o[c]=t[c];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function at(e){return e=e.childContextTypes,e!=null}function qa(){Ae(rt),Ae(Ke)}function fd(e,t,n){if(Ke.current!==on)throw Error(s(168));ze(Ke,t),ze(rt,n)}function md(e,t,n){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var o in a)if(!(o in t))throw Error(s(108,ke(e)||"Unknown",o));return E({},n,a)}function Ga(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||on,Sn=Ke.current,ze(Ke,e),ze(rt,rt.current),!0}function pd(e,t,n){var a=e.stateNode;if(!a)throw Error(s(169));n?(e=md(e,t,Sn),a.__reactInternalMemoizedMergedChildContext=e,Ae(rt),Ae(Ke),ze(Ke,e)):Ae(rt),ze(rt,n)}var Dt=null,Xa=!1,Bs=!1;function hd(e){Dt===null?Dt=[e]:Dt.push(e)}function s1(e){Xa=!0,hd(e)}function ln(){if(!Bs&&Dt!==null){Bs=!0;var e=0,t=Ee;try{var n=Dt;for(Ee=1;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}Dt=null,Xa=!1}catch(o){throw Dt!==null&&(Dt=Dt.slice(e+1)),xc(fs,ln),o}finally{Ee=t,Bs=!1}}return null}var Zn=[],er=0,Ka=null,Ja=0,ht=[],gt=0,Nn=null,Ut=1,$t="";function Cn(e,t){Zn[er++]=Ja,Zn[er++]=Ka,Ka=e,Ja=t}function gd(e,t,n){ht[gt++]=Ut,ht[gt++]=$t,ht[gt++]=Nn,Nn=e;var a=Ut;e=$t;var o=32-wt(a)-1;a&=~(1<<o),n+=1;var c=32-wt(t)+o;if(30<c){var m=o-o%5;c=(a&(1<<m)-1).toString(32),a>>=m,o-=m,Ut=1<<32-wt(t)+o|n<<o|a,$t=c+e}else Ut=1<<c|n<<o|a,$t=e}function Vs(e){e.return!==null&&(Cn(e,1),gd(e,1,0))}function Qs(e){for(;e===Ka;)Ka=Zn[--er],Zn[er]=null,Ja=Zn[--er],Zn[er]=null;for(;e===Nn;)Nn=ht[--gt],ht[gt]=null,$t=ht[--gt],ht[gt]=null,Ut=ht[--gt],ht[gt]=null}var ut=null,ft=null,Me=!1,kt=null;function xd(e,t){var n=bt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function vd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ut=e,ft=an(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ut=e,ft=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Nn!==null?{id:Ut,overflow:$t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=bt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ut=e,ft=null,!0):!1;default:return!1}}function Ys(e){return(e.mode&1)!==0&&(e.flags&128)===0}function qs(e){if(Me){var t=ft;if(t){var n=t;if(!vd(e,t)){if(Ys(e))throw Error(s(418));t=an(n.nextSibling);var a=ut;t&&vd(e,t)?xd(a,n):(e.flags=e.flags&-4097|2,Me=!1,ut=e)}}else{if(Ys(e))throw Error(s(418));e.flags=e.flags&-4097|2,Me=!1,ut=e}}}function yd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ut=e}function Za(e){if(e!==ut)return!1;if(!Me)return yd(e),Me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ds(e.type,e.memoizedProps)),t&&(t=ft)){if(Ys(e))throw bd(),Error(s(418));for(;t;)xd(e,t),t=an(t.nextSibling)}if(yd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ft=an(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ft=null}}else ft=ut?an(e.stateNode.nextSibling):null;return!0}function bd(){for(var e=ft;e;)e=an(e.nextSibling)}function tr(){ft=ut=null,Me=!1}function Gs(e){kt===null?kt=[e]:kt.push(e)}var o1=V.ReactCurrentBatchConfig;function Gr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(s(309));var a=n.stateNode}if(!a)throw Error(s(147,e));var o=a,c=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===c?t.ref:(t=function(m){var j=o.refs;m===null?delete j[c]:j[c]=m},t._stringRef=c,t)}if(typeof e!="string")throw Error(s(284));if(!n._owner)throw Error(s(290,e))}return e}function ei(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function wd(e){var t=e._init;return t(e._payload)}function jd(e){function t(P,N){if(e){var A=P.deletions;A===null?(P.deletions=[N],P.flags|=16):A.push(N)}}function n(P,N){if(!e)return null;for(;N!==null;)t(P,N),N=N.sibling;return null}function a(P,N){for(P=new Map;N!==null;)N.key!==null?P.set(N.key,N):P.set(N.index,N),N=N.sibling;return P}function o(P,N){return P=gn(P,N),P.index=0,P.sibling=null,P}function c(P,N,A){return P.index=A,e?(A=P.alternate,A!==null?(A=A.index,A<N?(P.flags|=2,N):A):(P.flags|=2,N)):(P.flags|=1048576,N)}function m(P){return e&&P.alternate===null&&(P.flags|=2),P}function j(P,N,A,Y){return N===null||N.tag!==6?(N=$o(A,P.mode,Y),N.return=P,N):(N=o(N,A),N.return=P,N)}function S(P,N,A,Y){var ne=A.type;return ne===re?W(P,N,A.props.children,Y,A.key):N!==null&&(N.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===Ne&&wd(ne)===N.type)?(Y=o(N,A.props),Y.ref=Gr(P,N,A),Y.return=P,Y):(Y=Si(A.type,A.key,A.props,null,P.mode,Y),Y.ref=Gr(P,N,A),Y.return=P,Y)}function I(P,N,A,Y){return N===null||N.tag!==4||N.stateNode.containerInfo!==A.containerInfo||N.stateNode.implementation!==A.implementation?(N=Wo(A,P.mode,Y),N.return=P,N):(N=o(N,A.children||[]),N.return=P,N)}function W(P,N,A,Y,ne){return N===null||N.tag!==7?(N=In(A,P.mode,Y,ne),N.return=P,N):(N=o(N,A),N.return=P,N)}function B(P,N,A){if(typeof N=="string"&&N!==""||typeof N=="number")return N=$o(""+N,P.mode,A),N.return=P,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case q:return A=Si(N.type,N.key,N.props,null,P.mode,A),A.ref=Gr(P,null,N),A.return=P,A;case G:return N=Wo(N,P.mode,A),N.return=P,N;case Ne:var Y=N._init;return B(P,Y(N._payload),A)}if(Sr(N)||F(N))return N=In(N,P.mode,A,null),N.return=P,N;ei(P,N)}return null}function $(P,N,A,Y){var ne=N!==null?N.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return ne!==null?null:j(P,N,""+A,Y);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case q:return A.key===ne?S(P,N,A,Y):null;case G:return A.key===ne?I(P,N,A,Y):null;case Ne:return ne=A._init,$(P,N,ne(A._payload),Y)}if(Sr(A)||F(A))return ne!==null?null:W(P,N,A,Y,null);ei(P,A)}return null}function J(P,N,A,Y,ne){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return P=P.get(A)||null,j(N,P,""+Y,ne);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case q:return P=P.get(Y.key===null?A:Y.key)||null,S(N,P,Y,ne);case G:return P=P.get(Y.key===null?A:Y.key)||null,I(N,P,Y,ne);case Ne:var se=Y._init;return J(P,N,A,se(Y._payload),ne)}if(Sr(Y)||F(Y))return P=P.get(A)||null,W(N,P,Y,ne,null);ei(N,Y)}return null}function ee(P,N,A,Y){for(var ne=null,se=null,oe=N,ce=N=0,Qe=null;oe!==null&&ce<A.length;ce++){oe.index>ce?(Qe=oe,oe=null):Qe=oe.sibling;var we=$(P,oe,A[ce],Y);if(we===null){oe===null&&(oe=Qe);break}e&&oe&&we.alternate===null&&t(P,oe),N=c(we,N,ce),se===null?ne=we:se.sibling=we,se=we,oe=Qe}if(ce===A.length)return n(P,oe),Me&&Cn(P,ce),ne;if(oe===null){for(;ce<A.length;ce++)oe=B(P,A[ce],Y),oe!==null&&(N=c(oe,N,ce),se===null?ne=oe:se.sibling=oe,se=oe);return Me&&Cn(P,ce),ne}for(oe=a(P,oe);ce<A.length;ce++)Qe=J(oe,P,ce,A[ce],Y),Qe!==null&&(e&&Qe.alternate!==null&&oe.delete(Qe.key===null?ce:Qe.key),N=c(Qe,N,ce),se===null?ne=Qe:se.sibling=Qe,se=Qe);return e&&oe.forEach(function(xn){return t(P,xn)}),Me&&Cn(P,ce),ne}function te(P,N,A,Y){var ne=F(A);if(typeof ne!="function")throw Error(s(150));if(A=ne.call(A),A==null)throw Error(s(151));for(var se=ne=null,oe=N,ce=N=0,Qe=null,we=A.next();oe!==null&&!we.done;ce++,we=A.next()){oe.index>ce?(Qe=oe,oe=null):Qe=oe.sibling;var xn=$(P,oe,we.value,Y);if(xn===null){oe===null&&(oe=Qe);break}e&&oe&&xn.alternate===null&&t(P,oe),N=c(xn,N,ce),se===null?ne=xn:se.sibling=xn,se=xn,oe=Qe}if(we.done)return n(P,oe),Me&&Cn(P,ce),ne;if(oe===null){for(;!we.done;ce++,we=A.next())we=B(P,we.value,Y),we!==null&&(N=c(we,N,ce),se===null?ne=we:se.sibling=we,se=we);return Me&&Cn(P,ce),ne}for(oe=a(P,oe);!we.done;ce++,we=A.next())we=J(oe,P,ce,we.value,Y),we!==null&&(e&&we.alternate!==null&&oe.delete(we.key===null?ce:we.key),N=c(we,N,ce),se===null?ne=we:se.sibling=we,se=we);return e&&oe.forEach(function(U1){return t(P,U1)}),Me&&Cn(P,ce),ne}function Ue(P,N,A,Y){if(typeof A=="object"&&A!==null&&A.type===re&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case q:e:{for(var ne=A.key,se=N;se!==null;){if(se.key===ne){if(ne=A.type,ne===re){if(se.tag===7){n(P,se.sibling),N=o(se,A.props.children),N.return=P,P=N;break e}}else if(se.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===Ne&&wd(ne)===se.type){n(P,se.sibling),N=o(se,A.props),N.ref=Gr(P,se,A),N.return=P,P=N;break e}n(P,se);break}else t(P,se);se=se.sibling}A.type===re?(N=In(A.props.children,P.mode,Y,A.key),N.return=P,P=N):(Y=Si(A.type,A.key,A.props,null,P.mode,Y),Y.ref=Gr(P,N,A),Y.return=P,P=Y)}return m(P);case G:e:{for(se=A.key;N!==null;){if(N.key===se)if(N.tag===4&&N.stateNode.containerInfo===A.containerInfo&&N.stateNode.implementation===A.implementation){n(P,N.sibling),N=o(N,A.children||[]),N.return=P,P=N;break e}else{n(P,N);break}else t(P,N);N=N.sibling}N=Wo(A,P.mode,Y),N.return=P,P=N}return m(P);case Ne:return se=A._init,Ue(P,N,se(A._payload),Y)}if(Sr(A))return ee(P,N,A,Y);if(F(A))return te(P,N,A,Y);ei(P,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,N!==null&&N.tag===6?(n(P,N.sibling),N=o(N,A),N.return=P,P=N):(n(P,N),N=$o(A,P.mode,Y),N.return=P,P=N),m(P)):n(P,N)}return Ue}var nr=jd(!0),kd=jd(!1),ti=sn(null),ni=null,rr=null,Xs=null;function Ks(){Xs=rr=ni=null}function Js(e){var t=ti.current;Ae(ti),e._currentValue=t}function Zs(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function ar(e,t){ni=e,Xs=rr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(it=!0),e.firstContext=null)}function xt(e){var t=e._currentValue;if(Xs!==e)if(e={context:e,memoizedValue:t,next:null},rr===null){if(ni===null)throw Error(s(308));rr=e,ni.dependencies={lanes:0,firstContext:e}}else rr=rr.next=e;return t}var En=null;function eo(e){En===null?En=[e]:En.push(e)}function Sd(e,t,n,a){var o=t.interleaved;return o===null?(n.next=n,eo(t)):(n.next=o.next,o.next=n),t.interleaved=n,Wt(e,a)}function Wt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var cn=!1;function to(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ye&2)!==0){var o=a.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),a.pending=t,Wt(e,n)}return o=a.interleaved,o===null?(t.next=t,eo(a)):(t.next=o.next,o.next=t),a.interleaved=t,Wt(e,n)}function ri(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,hs(e,n)}}function Cd(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var o=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var m={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};c===null?o=c=m:c=c.next=m,n=n.next}while(n!==null);c===null?o=c=t:c=c.next=t}else o=c=t;n={baseState:a.baseState,firstBaseUpdate:o,lastBaseUpdate:c,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ai(e,t,n,a){var o=e.updateQueue;cn=!1;var c=o.firstBaseUpdate,m=o.lastBaseUpdate,j=o.shared.pending;if(j!==null){o.shared.pending=null;var S=j,I=S.next;S.next=null,m===null?c=I:m.next=I,m=S;var W=e.alternate;W!==null&&(W=W.updateQueue,j=W.lastBaseUpdate,j!==m&&(j===null?W.firstBaseUpdate=I:j.next=I,W.lastBaseUpdate=S))}if(c!==null){var B=o.baseState;m=0,W=I=S=null,j=c;do{var $=j.lane,J=j.eventTime;if((a&$)===$){W!==null&&(W=W.next={eventTime:J,lane:0,tag:j.tag,payload:j.payload,callback:j.callback,next:null});e:{var ee=e,te=j;switch($=t,J=n,te.tag){case 1:if(ee=te.payload,typeof ee=="function"){B=ee.call(J,B,$);break e}B=ee;break e;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=te.payload,$=typeof ee=="function"?ee.call(J,B,$):ee,$==null)break e;B=E({},B,$);break e;case 2:cn=!0}}j.callback!==null&&j.lane!==0&&(e.flags|=64,$=o.effects,$===null?o.effects=[j]:$.push(j))}else J={eventTime:J,lane:$,tag:j.tag,payload:j.payload,callback:j.callback,next:null},W===null?(I=W=J,S=B):W=W.next=J,m|=$;if(j=j.next,j===null){if(j=o.shared.pending,j===null)break;$=j,j=$.next,$.next=null,o.lastBaseUpdate=$,o.shared.pending=null}}while(!0);if(W===null&&(S=B),o.baseState=S,o.firstBaseUpdate=I,o.lastBaseUpdate=W,t=o.shared.interleaved,t!==null){o=t;do m|=o.lane,o=o.next;while(o!==t)}else c===null&&(o.shared.lanes=0);An|=m,e.lanes=m,e.memoizedState=B}}function Ed(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],o=a.callback;if(o!==null){if(a.callback=null,a=n,typeof o!="function")throw Error(s(191,o));o.call(a)}}}var Xr={},It=sn(Xr),Kr=sn(Xr),Jr=sn(Xr);function zn(e){if(e===Xr)throw Error(s(174));return e}function no(e,t){switch(ze(Jr,t),ze(Kr,e),ze(It,Xr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:rs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=rs(t,e)}Ae(It),ze(It,t)}function ir(){Ae(It),Ae(Kr),Ae(Jr)}function zd(e){zn(Jr.current);var t=zn(It.current),n=rs(t,e.type);t!==n&&(ze(Kr,e),ze(It,n))}function ro(e){Kr.current===e&&(Ae(It),Ae(Kr))}var Ie=sn(0);function ii(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ao=[];function io(){for(var e=0;e<ao.length;e++)ao[e]._workInProgressVersionPrimary=null;ao.length=0}var si=V.ReactCurrentDispatcher,so=V.ReactCurrentBatchConfig,Pn=0,Fe=null,We=null,Be=null,oi=!1,Zr=!1,ea=0,l1=0;function Je(){throw Error(s(321))}function oo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jt(e[n],t[n]))return!1;return!0}function lo(e,t,n,a,o,c){if(Pn=c,Fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,si.current=e===null||e.memoizedState===null?f1:m1,e=n(a,o),Zr){c=0;do{if(Zr=!1,ea=0,25<=c)throw Error(s(301));c+=1,Be=We=null,t.updateQueue=null,si.current=p1,e=n(a,o)}while(Zr)}if(si.current=di,t=We!==null&&We.next!==null,Pn=0,Be=We=Fe=null,oi=!1,t)throw Error(s(300));return e}function co(){var e=ea!==0;return ea=0,e}function Ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Fe.memoizedState=Be=e:Be=Be.next=e,Be}function vt(){if(We===null){var e=Fe.alternate;e=e!==null?e.memoizedState:null}else e=We.next;var t=Be===null?Fe.memoizedState:Be.next;if(t!==null)Be=t,We=e;else{if(e===null)throw Error(s(310));We=e,e={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},Be===null?Fe.memoizedState=Be=e:Be=Be.next=e}return Be}function ta(e,t){return typeof t=="function"?t(e):t}function uo(e){var t=vt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var a=We,o=a.baseQueue,c=n.pending;if(c!==null){if(o!==null){var m=o.next;o.next=c.next,c.next=m}a.baseQueue=o=c,n.pending=null}if(o!==null){c=o.next,a=a.baseState;var j=m=null,S=null,I=c;do{var W=I.lane;if((Pn&W)===W)S!==null&&(S=S.next={lane:0,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null}),a=I.hasEagerState?I.eagerState:e(a,I.action);else{var B={lane:W,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null};S===null?(j=S=B,m=a):S=S.next=B,Fe.lanes|=W,An|=W}I=I.next}while(I!==null&&I!==c);S===null?m=a:S.next=j,jt(a,t.memoizedState)||(it=!0),t.memoizedState=a,t.baseState=m,t.baseQueue=S,n.lastRenderedState=a}if(e=n.interleaved,e!==null){o=e;do c=o.lane,Fe.lanes|=c,An|=c,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function fo(e){var t=vt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var a=n.dispatch,o=n.pending,c=t.memoizedState;if(o!==null){n.pending=null;var m=o=o.next;do c=e(c,m.action),m=m.next;while(m!==o);jt(c,t.memoizedState)||(it=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,a]}function Pd(){}function Ad(e,t){var n=Fe,a=vt(),o=t(),c=!jt(a.memoizedState,o);if(c&&(a.memoizedState=o,it=!0),a=a.queue,mo(Md.bind(null,n,a,e),[e]),a.getSnapshot!==t||c||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,na(9,_d.bind(null,n,a,o,t),void 0,null),Ve===null)throw Error(s(349));(Pn&30)!==0||Ld(n,t,o)}return o}function Ld(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Fe.updateQueue,t===null?(t={lastEffect:null,stores:null},Fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _d(e,t,n,a){t.value=n,t.getSnapshot=a,Id(t)&&Fd(e)}function Md(e,t,n){return n(function(){Id(t)&&Fd(e)})}function Id(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jt(e,n)}catch{return!0}}function Fd(e){var t=Wt(e,1);t!==null&&Et(t,e,1,-1)}function Td(e){var t=Ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:e},t.queue=e,e=e.dispatch=u1.bind(null,Fe,e),[t.memoizedState,e]}function na(e,t,n,a){return e={tag:e,create:t,destroy:n,deps:a,next:null},t=Fe.updateQueue,t===null?(t={lastEffect:null,stores:null},Fe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e)),e}function Od(){return vt().memoizedState}function li(e,t,n,a){var o=Ft();Fe.flags|=e,o.memoizedState=na(1|t,n,void 0,a===void 0?null:a)}function ci(e,t,n,a){var o=vt();a=a===void 0?null:a;var c=void 0;if(We!==null){var m=We.memoizedState;if(c=m.destroy,a!==null&&oo(a,m.deps)){o.memoizedState=na(t,n,c,a);return}}Fe.flags|=e,o.memoizedState=na(1|t,n,c,a)}function Rd(e,t){return li(8390656,8,e,t)}function mo(e,t){return ci(2048,8,e,t)}function Dd(e,t){return ci(4,2,e,t)}function Ud(e,t){return ci(4,4,e,t)}function $d(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Wd(e,t,n){return n=n!=null?n.concat([e]):null,ci(4,4,$d.bind(null,t,e),n)}function po(){}function Hd(e,t){var n=vt();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&oo(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Bd(e,t){var n=vt();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&oo(t,a[1])?a[0]:(e=e(),n.memoizedState=[e,t],e)}function Vd(e,t,n){return(Pn&21)===0?(e.baseState&&(e.baseState=!1,it=!0),e.memoizedState=n):(jt(n,t)||(n=wc(),Fe.lanes|=n,An|=n,e.baseState=!0),t)}function c1(e,t){var n=Ee;Ee=n!==0&&4>n?n:4,e(!0);var a=so.transition;so.transition={};try{e(!1),t()}finally{Ee=n,so.transition=a}}function Qd(){return vt().memoizedState}function d1(e,t,n){var a=pn(e);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},Yd(e))qd(t,n);else if(n=Sd(e,t,n,a),n!==null){var o=nt();Et(n,e,a,o),Gd(n,t,a)}}function u1(e,t,n){var a=pn(e),o={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yd(e))qd(t,o);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var m=t.lastRenderedState,j=c(m,n);if(o.hasEagerState=!0,o.eagerState=j,jt(j,m)){var S=t.interleaved;S===null?(o.next=o,eo(t)):(o.next=S.next,S.next=o),t.interleaved=o;return}}catch{}finally{}n=Sd(e,t,o,a),n!==null&&(o=nt(),Et(n,e,a,o),Gd(n,t,a))}}function Yd(e){var t=e.alternate;return e===Fe||t!==null&&t===Fe}function qd(e,t){Zr=oi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gd(e,t,n){if((n&4194240)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,hs(e,n)}}var di={readContext:xt,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},f1={readContext:xt,useCallback:function(e,t){return Ft().memoizedState=[e,t===void 0?null:t],e},useContext:xt,useEffect:Rd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,li(4194308,4,$d.bind(null,t,e),n)},useLayoutEffect:function(e,t){return li(4194308,4,e,t)},useInsertionEffect:function(e,t){return li(4,2,e,t)},useMemo:function(e,t){var n=Ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var a=Ft();return t=n!==void 0?n(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=d1.bind(null,Fe,e),[a.memoizedState,e]},useRef:function(e){var t=Ft();return e={current:e},t.memoizedState=e},useState:Td,useDebugValue:po,useDeferredValue:function(e){return Ft().memoizedState=e},useTransition:function(){var e=Td(!1),t=e[0];return e=c1.bind(null,e[1]),Ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var a=Fe,o=Ft();if(Me){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),Ve===null)throw Error(s(349));(Pn&30)!==0||Ld(a,t,n)}o.memoizedState=n;var c={value:n,getSnapshot:t};return o.queue=c,Rd(Md.bind(null,a,c,e),[e]),a.flags|=2048,na(9,_d.bind(null,a,c,n,t),void 0,null),n},useId:function(){var e=Ft(),t=Ve.identifierPrefix;if(Me){var n=$t,a=Ut;n=(a&~(1<<32-wt(a)-1)).toString(32)+n,t=":"+t+"R"+n,n=ea++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=l1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},m1={readContext:xt,useCallback:Hd,useContext:xt,useEffect:mo,useImperativeHandle:Wd,useInsertionEffect:Dd,useLayoutEffect:Ud,useMemo:Bd,useReducer:uo,useRef:Od,useState:function(){return uo(ta)},useDebugValue:po,useDeferredValue:function(e){var t=vt();return Vd(t,We.memoizedState,e)},useTransition:function(){var e=uo(ta)[0],t=vt().memoizedState;return[e,t]},useMutableSource:Pd,useSyncExternalStore:Ad,useId:Qd,unstable_isNewReconciler:!1},p1={readContext:xt,useCallback:Hd,useContext:xt,useEffect:mo,useImperativeHandle:Wd,useInsertionEffect:Dd,useLayoutEffect:Ud,useMemo:Bd,useReducer:fo,useRef:Od,useState:function(){return fo(ta)},useDebugValue:po,useDeferredValue:function(e){var t=vt();return We===null?t.memoizedState=e:Vd(t,We.memoizedState,e)},useTransition:function(){var e=fo(ta)[0],t=vt().memoizedState;return[e,t]},useMutableSource:Pd,useSyncExternalStore:Ad,useId:Qd,unstable_isNewReconciler:!1};function St(e,t){if(e&&e.defaultProps){t=E({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ho(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:E({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ui={isMounted:function(e){return(e=e._reactInternals)?jn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var a=nt(),o=pn(e),c=Ht(a,o);c.payload=t,n!=null&&(c.callback=n),t=dn(e,c,o),t!==null&&(Et(t,e,o,a),ri(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=nt(),o=pn(e),c=Ht(a,o);c.tag=1,c.payload=t,n!=null&&(c.callback=n),t=dn(e,c,o),t!==null&&(Et(t,e,o,a),ri(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=nt(),a=pn(e),o=Ht(n,a);o.tag=2,t!=null&&(o.callback=t),t=dn(e,o,a),t!==null&&(Et(t,e,a,n),ri(t,e,a))}};function Xd(e,t,n,a,o,c,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,c,m):t.prototype&&t.prototype.isPureReactComponent?!Wr(n,a)||!Wr(o,c):!0}function Kd(e,t,n){var a=!1,o=on,c=t.contextType;return typeof c=="object"&&c!==null?c=xt(c):(o=at(t)?Sn:Ke.current,a=t.contextTypes,c=(a=a!=null)?Jn(e,o):on),t=new t(n,c),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ui,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=c),t}function Jd(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&ui.enqueueReplaceState(t,t.state,null)}function go(e,t,n,a){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},to(e);var c=t.contextType;typeof c=="object"&&c!==null?o.context=xt(c):(c=at(t)?Sn:Ke.current,o.context=Jn(e,c)),o.state=e.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(ho(e,t,c,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ui.enqueueReplaceState(o,o.state,null),ai(e,n,o,a),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function sr(e,t){try{var n="",a=t;do n+=K(a),a=a.return;while(a);var o=n}catch(c){o=`
Error generating stack: `+c.message+`
`+c.stack}return{value:e,source:t,stack:o,digest:null}}function xo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function vo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var h1=typeof WeakMap=="function"?WeakMap:Map;function Zd(e,t,n){n=Ht(-1,n),n.tag=3,n.payload={element:null};var a=t.value;return n.callback=function(){vi||(vi=!0,Mo=a),vo(e,t)},n}function eu(e,t,n){n=Ht(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var o=t.value;n.payload=function(){return a(o)},n.callback=function(){vo(e,t)}}var c=e.stateNode;return c!==null&&typeof c.componentDidCatch=="function"&&(n.callback=function(){vo(e,t),typeof a!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var m=t.stack;this.componentDidCatch(t.value,{componentStack:m!==null?m:""})}),n}function tu(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new h1;var o=new Set;a.set(t,o)}else o=a.get(t),o===void 0&&(o=new Set,a.set(t,o));o.has(n)||(o.add(n),e=P1.bind(null,e,t,n),t.then(e,e))}function nu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ru(e,t,n,a,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ht(-1,1),t.tag=2,dn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var g1=V.ReactCurrentOwner,it=!1;function tt(e,t,n,a){t.child=e===null?kd(t,null,n,a):nr(t,e.child,n,a)}function au(e,t,n,a,o){n=n.render;var c=t.ref;return ar(t,o),a=lo(e,t,n,a,c,o),n=co(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Bt(e,t,o)):(Me&&n&&Vs(t),t.flags|=1,tt(e,t,a,o),t.child)}function iu(e,t,n,a,o){if(e===null){var c=n.type;return typeof c=="function"&&!Uo(c)&&c.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=c,su(e,t,c,a,o)):(e=Si(n.type,null,a,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,(e.lanes&o)===0){var m=c.memoizedProps;if(n=n.compare,n=n!==null?n:Wr,n(m,a)&&e.ref===t.ref)return Bt(e,t,o)}return t.flags|=1,e=gn(c,a),e.ref=t.ref,e.return=t,t.child=e}function su(e,t,n,a,o){if(e!==null){var c=e.memoizedProps;if(Wr(c,a)&&e.ref===t.ref)if(it=!1,t.pendingProps=a=c,(e.lanes&o)!==0)(e.flags&131072)!==0&&(it=!0);else return t.lanes=e.lanes,Bt(e,t,o)}return yo(e,t,n,a,o)}function ou(e,t,n){var a=t.pendingProps,o=a.children,c=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ze(lr,mt),mt|=n;else{if((n&1073741824)===0)return e=c!==null?c.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ze(lr,mt),mt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=c!==null?c.baseLanes:n,ze(lr,mt),mt|=a}else c!==null?(a=c.baseLanes|n,t.memoizedState=null):a=n,ze(lr,mt),mt|=a;return tt(e,t,o,n),t.child}function lu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function yo(e,t,n,a,o){var c=at(n)?Sn:Ke.current;return c=Jn(t,c),ar(t,o),n=lo(e,t,n,a,c,o),a=co(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Bt(e,t,o)):(Me&&a&&Vs(t),t.flags|=1,tt(e,t,n,o),t.child)}function cu(e,t,n,a,o){if(at(n)){var c=!0;Ga(t)}else c=!1;if(ar(t,o),t.stateNode===null)mi(e,t),Kd(t,n,a),go(t,n,a,o),a=!0;else if(e===null){var m=t.stateNode,j=t.memoizedProps;m.props=j;var S=m.context,I=n.contextType;typeof I=="object"&&I!==null?I=xt(I):(I=at(n)?Sn:Ke.current,I=Jn(t,I));var W=n.getDerivedStateFromProps,B=typeof W=="function"||typeof m.getSnapshotBeforeUpdate=="function";B||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(j!==a||S!==I)&&Jd(t,m,a,I),cn=!1;var $=t.memoizedState;m.state=$,ai(t,a,m,o),S=t.memoizedState,j!==a||$!==S||rt.current||cn?(typeof W=="function"&&(ho(t,n,W,a),S=t.memoizedState),(j=cn||Xd(t,n,j,a,$,S,I))?(B||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(t.flags|=4194308)):(typeof m.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=S),m.props=a,m.state=S,m.context=I,a=j):(typeof m.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{m=t.stateNode,Nd(e,t),j=t.memoizedProps,I=t.type===t.elementType?j:St(t.type,j),m.props=I,B=t.pendingProps,$=m.context,S=n.contextType,typeof S=="object"&&S!==null?S=xt(S):(S=at(n)?Sn:Ke.current,S=Jn(t,S));var J=n.getDerivedStateFromProps;(W=typeof J=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(j!==B||$!==S)&&Jd(t,m,a,S),cn=!1,$=t.memoizedState,m.state=$,ai(t,a,m,o);var ee=t.memoizedState;j!==B||$!==ee||rt.current||cn?(typeof J=="function"&&(ho(t,n,J,a),ee=t.memoizedState),(I=cn||Xd(t,n,I,a,$,ee,S)||!1)?(W||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(a,ee,S),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(a,ee,S)),typeof m.componentDidUpdate=="function"&&(t.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof m.componentDidUpdate!="function"||j===e.memoizedProps&&$===e.memoizedState||(t.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||j===e.memoizedProps&&$===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=ee),m.props=a,m.state=ee,m.context=S,a=I):(typeof m.componentDidUpdate!="function"||j===e.memoizedProps&&$===e.memoizedState||(t.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||j===e.memoizedProps&&$===e.memoizedState||(t.flags|=1024),a=!1)}return bo(e,t,n,a,c,o)}function bo(e,t,n,a,o,c){lu(e,t);var m=(t.flags&128)!==0;if(!a&&!m)return o&&pd(t,n,!1),Bt(e,t,c);a=t.stateNode,g1.current=t;var j=m&&typeof n.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&m?(t.child=nr(t,e.child,null,c),t.child=nr(t,null,j,c)):tt(e,t,j,c),t.memoizedState=a.state,o&&pd(t,n,!0),t.child}function du(e){var t=e.stateNode;t.pendingContext?fd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&fd(e,t.context,!1),no(e,t.containerInfo)}function uu(e,t,n,a,o){return tr(),Gs(o),t.flags|=256,tt(e,t,n,a),t.child}var wo={dehydrated:null,treeContext:null,retryLane:0};function jo(e){return{baseLanes:e,cachePool:null,transitions:null}}function fu(e,t,n){var a=t.pendingProps,o=Ie.current,c=!1,m=(t.flags&128)!==0,j;if((j=m)||(j=e!==null&&e.memoizedState===null?!1:(o&2)!==0),j?(c=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ze(Ie,o&1),e===null)return qs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(m=a.children,e=a.fallback,c?(a=t.mode,c=t.child,m={mode:"hidden",children:m},(a&1)===0&&c!==null?(c.childLanes=0,c.pendingProps=m):c=Ni(m,a,0,null),e=In(e,a,n,null),c.return=t,e.return=t,c.sibling=e,t.child=c,t.child.memoizedState=jo(n),t.memoizedState=wo,e):ko(t,m));if(o=e.memoizedState,o!==null&&(j=o.dehydrated,j!==null))return x1(e,t,m,a,j,o,n);if(c){c=a.fallback,m=t.mode,o=e.child,j=o.sibling;var S={mode:"hidden",children:a.children};return(m&1)===0&&t.child!==o?(a=t.child,a.childLanes=0,a.pendingProps=S,t.deletions=null):(a=gn(o,S),a.subtreeFlags=o.subtreeFlags&14680064),j!==null?c=gn(j,c):(c=In(c,m,n,null),c.flags|=2),c.return=t,a.return=t,a.sibling=c,t.child=a,a=c,c=t.child,m=e.child.memoizedState,m=m===null?jo(n):{baseLanes:m.baseLanes|n,cachePool:null,transitions:m.transitions},c.memoizedState=m,c.childLanes=e.childLanes&~n,t.memoizedState=wo,a}return c=e.child,e=c.sibling,a=gn(c,{mode:"visible",children:a.children}),(t.mode&1)===0&&(a.lanes=n),a.return=t,a.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function ko(e,t){return t=Ni({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fi(e,t,n,a){return a!==null&&Gs(a),nr(t,e.child,null,n),e=ko(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function x1(e,t,n,a,o,c,m){if(n)return t.flags&256?(t.flags&=-257,a=xo(Error(s(422))),fi(e,t,m,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(c=a.fallback,o=t.mode,a=Ni({mode:"visible",children:a.children},o,0,null),c=In(c,o,m,null),c.flags|=2,a.return=t,c.return=t,a.sibling=c,t.child=a,(t.mode&1)!==0&&nr(t,e.child,null,m),t.child.memoizedState=jo(m),t.memoizedState=wo,c);if((t.mode&1)===0)return fi(e,t,m,null);if(o.data==="$!"){if(a=o.nextSibling&&o.nextSibling.dataset,a)var j=a.dgst;return a=j,c=Error(s(419)),a=xo(c,a,void 0),fi(e,t,m,a)}if(j=(m&e.childLanes)!==0,it||j){if(a=Ve,a!==null){switch(m&-m){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(a.suspendedLanes|m))!==0?0:o,o!==0&&o!==c.retryLane&&(c.retryLane=o,Wt(e,o),Et(a,e,o,-1))}return Do(),a=xo(Error(s(421))),fi(e,t,m,a)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=A1.bind(null,e),o._reactRetry=t,null):(e=c.treeContext,ft=an(o.nextSibling),ut=t,Me=!0,kt=null,e!==null&&(ht[gt++]=Ut,ht[gt++]=$t,ht[gt++]=Nn,Ut=e.id,$t=e.overflow,Nn=t),t=ko(t,a.children),t.flags|=4096,t)}function mu(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Zs(e.return,t,n)}function So(e,t,n,a,o){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:o}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=n,c.tailMode=o)}function pu(e,t,n){var a=t.pendingProps,o=a.revealOrder,c=a.tail;if(tt(e,t,a.children,n),a=Ie.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mu(e,n,t);else if(e.tag===19)mu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(ze(Ie,a),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ii(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),So(t,!1,o,n,c);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ii(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}So(t,!0,n,null,c);break;case"together":So(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function mi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Bt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),An|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=gn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function v1(e,t,n){switch(t.tag){case 3:du(t),tr();break;case 5:zd(t);break;case 1:at(t.type)&&Ga(t);break;case 4:no(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,o=t.memoizedProps.value;ze(ti,a._currentValue),a._currentValue=o;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(ze(Ie,Ie.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?fu(e,t,n):(ze(Ie,Ie.current&1),e=Bt(e,t,n),e!==null?e.sibling:null);ze(Ie,Ie.current&1);break;case 19:if(a=(n&t.childLanes)!==0,(e.flags&128)!==0){if(a)return pu(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ze(Ie,Ie.current),a)break;return null;case 22:case 23:return t.lanes=0,ou(e,t,n)}return Bt(e,t,n)}var hu,No,gu,xu;hu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},No=function(){},gu=function(e,t,n,a){var o=e.memoizedProps;if(o!==a){e=t.stateNode,zn(It.current);var c=null;switch(n){case"input":o=Zi(e,o),a=Zi(e,a),c=[];break;case"select":o=E({},o,{value:void 0}),a=E({},a,{value:void 0}),c=[];break;case"textarea":o=ns(e,o),a=ns(e,a),c=[];break;default:typeof o.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Qa)}as(n,a);var m;n=null;for(I in o)if(!a.hasOwnProperty(I)&&o.hasOwnProperty(I)&&o[I]!=null)if(I==="style"){var j=o[I];for(m in j)j.hasOwnProperty(m)&&(n||(n={}),n[m]="")}else I!=="dangerouslySetInnerHTML"&&I!=="children"&&I!=="suppressContentEditableWarning"&&I!=="suppressHydrationWarning"&&I!=="autoFocus"&&(u.hasOwnProperty(I)?c||(c=[]):(c=c||[]).push(I,null));for(I in a){var S=a[I];if(j=o!=null?o[I]:void 0,a.hasOwnProperty(I)&&S!==j&&(S!=null||j!=null))if(I==="style")if(j){for(m in j)!j.hasOwnProperty(m)||S&&S.hasOwnProperty(m)||(n||(n={}),n[m]="");for(m in S)S.hasOwnProperty(m)&&j[m]!==S[m]&&(n||(n={}),n[m]=S[m])}else n||(c||(c=[]),c.push(I,n)),n=S;else I==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,j=j?j.__html:void 0,S!=null&&j!==S&&(c=c||[]).push(I,S)):I==="children"?typeof S!="string"&&typeof S!="number"||(c=c||[]).push(I,""+S):I!=="suppressContentEditableWarning"&&I!=="suppressHydrationWarning"&&(u.hasOwnProperty(I)?(S!=null&&I==="onScroll"&&Pe("scroll",e),c||j===S||(c=[])):(c=c||[]).push(I,S))}n&&(c=c||[]).push("style",n);var I=c;(t.updateQueue=I)&&(t.flags|=4)}},xu=function(e,t,n,a){n!==a&&(t.flags|=4)};function ra(e,t){if(!Me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags&14680064,a|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags,a|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function y1(e,t,n){var a=t.pendingProps;switch(Qs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return at(t.type)&&qa(),Ze(t),null;case 3:return a=t.stateNode,ir(),Ae(rt),Ae(Ke),io(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Za(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,kt!==null&&(To(kt),kt=null))),No(e,t),Ze(t),null;case 5:ro(t);var o=zn(Jr.current);if(n=t.type,e!==null&&t.stateNode!=null)gu(e,t,n,a,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(s(166));return Ze(t),null}if(e=zn(It.current),Za(t)){a=t.stateNode,n=t.type;var c=t.memoizedProps;switch(a[Mt]=t,a[Yr]=c,e=(t.mode&1)!==0,n){case"dialog":Pe("cancel",a),Pe("close",a);break;case"iframe":case"object":case"embed":Pe("load",a);break;case"video":case"audio":for(o=0;o<Br.length;o++)Pe(Br[o],a);break;case"source":Pe("error",a);break;case"img":case"image":case"link":Pe("error",a),Pe("load",a);break;case"details":Pe("toggle",a);break;case"input":Kl(a,c),Pe("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!c.multiple},Pe("invalid",a);break;case"textarea":ec(a,c),Pe("invalid",a)}as(n,c),o=null;for(var m in c)if(c.hasOwnProperty(m)){var j=c[m];m==="children"?typeof j=="string"?a.textContent!==j&&(c.suppressHydrationWarning!==!0&&Va(a.textContent,j,e),o=["children",j]):typeof j=="number"&&a.textContent!==""+j&&(c.suppressHydrationWarning!==!0&&Va(a.textContent,j,e),o=["children",""+j]):u.hasOwnProperty(m)&&j!=null&&m==="onScroll"&&Pe("scroll",a)}switch(n){case"input":ja(a),Zl(a,c,!0);break;case"textarea":ja(a),nc(a);break;case"select":case"option":break;default:typeof c.onClick=="function"&&(a.onclick=Qa)}a=o,t.updateQueue=a,a!==null&&(t.flags|=4)}else{m=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=rc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=m.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=m.createElement(n,{is:a.is}):(e=m.createElement(n),n==="select"&&(m=e,a.multiple?m.multiple=!0:a.size&&(m.size=a.size))):e=m.createElementNS(e,n),e[Mt]=t,e[Yr]=a,hu(e,t,!1,!1),t.stateNode=e;e:{switch(m=is(n,a),n){case"dialog":Pe("cancel",e),Pe("close",e),o=a;break;case"iframe":case"object":case"embed":Pe("load",e),o=a;break;case"video":case"audio":for(o=0;o<Br.length;o++)Pe(Br[o],e);o=a;break;case"source":Pe("error",e),o=a;break;case"img":case"image":case"link":Pe("error",e),Pe("load",e),o=a;break;case"details":Pe("toggle",e),o=a;break;case"input":Kl(e,a),o=Zi(e,a),Pe("invalid",e);break;case"option":o=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},o=E({},a,{value:void 0}),Pe("invalid",e);break;case"textarea":ec(e,a),o=ns(e,a),Pe("invalid",e);break;default:o=a}as(n,o),j=o;for(c in j)if(j.hasOwnProperty(c)){var S=j[c];c==="style"?sc(e,S):c==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,S!=null&&ac(e,S)):c==="children"?typeof S=="string"?(n!=="textarea"||S!=="")&&Nr(e,S):typeof S=="number"&&Nr(e,""+S):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(u.hasOwnProperty(c)?S!=null&&c==="onScroll"&&Pe("scroll",e):S!=null&&D(e,c,S,m))}switch(n){case"input":ja(e),Zl(e,a,!1);break;case"textarea":ja(e),nc(e);break;case"option":a.value!=null&&e.setAttribute("value",""+Ce(a.value));break;case"select":e.multiple=!!a.multiple,c=a.value,c!=null?Un(e,!!a.multiple,c,!1):a.defaultValue!=null&&Un(e,!!a.multiple,a.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Qa)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ze(t),null;case 6:if(e&&t.stateNode!=null)xu(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(s(166));if(n=zn(Jr.current),zn(It.current),Za(t)){if(a=t.stateNode,n=t.memoizedProps,a[Mt]=t,(c=a.nodeValue!==n)&&(e=ut,e!==null))switch(e.tag){case 3:Va(a.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Va(a.nodeValue,n,(e.mode&1)!==0)}c&&(t.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[Mt]=t,t.stateNode=a}return Ze(t),null;case 13:if(Ae(Ie),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Me&&ft!==null&&(t.mode&1)!==0&&(t.flags&128)===0)bd(),tr(),t.flags|=98560,c=!1;else if(c=Za(t),a!==null&&a.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[Mt]=t}else tr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ze(t),c=!1}else kt!==null&&(To(kt),kt=null),c=!0;if(!c)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ie.current&1)!==0?He===0&&(He=3):Do())),t.updateQueue!==null&&(t.flags|=4),Ze(t),null);case 4:return ir(),No(e,t),e===null&&Vr(t.stateNode.containerInfo),Ze(t),null;case 10:return Js(t.type._context),Ze(t),null;case 17:return at(t.type)&&qa(),Ze(t),null;case 19:if(Ae(Ie),c=t.memoizedState,c===null)return Ze(t),null;if(a=(t.flags&128)!==0,m=c.rendering,m===null)if(a)ra(c,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(m=ii(e),m!==null){for(t.flags|=128,ra(c,!1),a=m.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=n,n=t.child;n!==null;)c=n,e=a,c.flags&=14680066,m=c.alternate,m===null?(c.childLanes=0,c.lanes=e,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=m.childLanes,c.lanes=m.lanes,c.child=m.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=m.memoizedProps,c.memoizedState=m.memoizedState,c.updateQueue=m.updateQueue,c.type=m.type,e=m.dependencies,c.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ze(Ie,Ie.current&1|2),t.child}e=e.sibling}c.tail!==null&&De()>cr&&(t.flags|=128,a=!0,ra(c,!1),t.lanes=4194304)}else{if(!a)if(e=ii(m),e!==null){if(t.flags|=128,a=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ra(c,!0),c.tail===null&&c.tailMode==="hidden"&&!m.alternate&&!Me)return Ze(t),null}else 2*De()-c.renderingStartTime>cr&&n!==1073741824&&(t.flags|=128,a=!0,ra(c,!1),t.lanes=4194304);c.isBackwards?(m.sibling=t.child,t.child=m):(n=c.last,n!==null?n.sibling=m:t.child=m,c.last=m)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=De(),t.sibling=null,n=Ie.current,ze(Ie,a?n&1|2:n&1),t):(Ze(t),null);case 22:case 23:return Ro(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&(t.mode&1)!==0?(mt&1073741824)!==0&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function b1(e,t){switch(Qs(t),t.tag){case 1:return at(t.type)&&qa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ir(),Ae(rt),Ae(Ke),io(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ro(t),null;case 13:if(Ae(Ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));tr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ae(Ie),null;case 4:return ir(),null;case 10:return Js(t.type._context),null;case 22:case 23:return Ro(),null;case 24:return null;default:return null}}var pi=!1,et=!1,w1=typeof WeakSet=="function"?WeakSet:Set,Z=null;function or(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){Oe(e,t,a)}else n.current=null}function Co(e,t,n){try{n()}catch(a){Oe(e,t,a)}}var vu=!1;function j1(e,t){if(Os=Ia,e=Xc(),Ps(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var o=a.anchorOffset,c=a.focusNode;a=a.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var m=0,j=-1,S=-1,I=0,W=0,B=e,$=null;t:for(;;){for(var J;B!==n||o!==0&&B.nodeType!==3||(j=m+o),B!==c||a!==0&&B.nodeType!==3||(S=m+a),B.nodeType===3&&(m+=B.nodeValue.length),(J=B.firstChild)!==null;)$=B,B=J;for(;;){if(B===e)break t;if($===n&&++I===o&&(j=m),$===c&&++W===a&&(S=m),(J=B.nextSibling)!==null)break;B=$,$=B.parentNode}B=J}n=j===-1||S===-1?null:{start:j,end:S}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rs={focusedElem:e,selectionRange:n},Ia=!1,Z=t;Z!==null;)if(t=Z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Z=e;else for(;Z!==null;){t=Z;try{var ee=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ee!==null){var te=ee.memoizedProps,Ue=ee.memoizedState,P=t.stateNode,N=P.getSnapshotBeforeUpdate(t.elementType===t.type?te:St(t.type,te),Ue);P.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var A=t.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(Y){Oe(t,t.return,Y)}if(e=t.sibling,e!==null){e.return=t.return,Z=e;break}Z=t.return}return ee=vu,vu=!1,ee}function aa(e,t,n){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var o=a=a.next;do{if((o.tag&e)===e){var c=o.destroy;o.destroy=void 0,c!==void 0&&Co(t,n,c)}o=o.next}while(o!==a)}}function hi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var a=n.create;n.destroy=a()}n=n.next}while(n!==t)}}function Eo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function yu(e){var t=e.alternate;t!==null&&(e.alternate=null,yu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Mt],delete t[Yr],delete t[Ws],delete t[a1],delete t[i1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bu(e){return e.tag===5||e.tag===3||e.tag===4}function wu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zo(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qa));else if(a!==4&&(e=e.child,e!==null))for(zo(e,t,n),e=e.sibling;e!==null;)zo(e,t,n),e=e.sibling}function Po(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Po(e,t,n),e=e.sibling;e!==null;)Po(e,t,n),e=e.sibling}var Ye=null,Nt=!1;function un(e,t,n){for(n=n.child;n!==null;)ju(e,t,n),n=n.sibling}function ju(e,t,n){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(za,n)}catch{}switch(n.tag){case 5:et||or(n,t);case 6:var a=Ye,o=Nt;Ye=null,un(e,t,n),Ye=a,Nt=o,Ye!==null&&(Nt?(e=Ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ye.removeChild(n.stateNode));break;case 18:Ye!==null&&(Nt?(e=Ye,n=n.stateNode,e.nodeType===8?$s(e.parentNode,n):e.nodeType===1&&$s(e,n),Tr(e)):$s(Ye,n.stateNode));break;case 4:a=Ye,o=Nt,Ye=n.stateNode.containerInfo,Nt=!0,un(e,t,n),Ye=a,Nt=o;break;case 0:case 11:case 14:case 15:if(!et&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){o=a=a.next;do{var c=o,m=c.destroy;c=c.tag,m!==void 0&&((c&2)!==0||(c&4)!==0)&&Co(n,t,m),o=o.next}while(o!==a)}un(e,t,n);break;case 1:if(!et&&(or(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(j){Oe(n,t,j)}un(e,t,n);break;case 21:un(e,t,n);break;case 22:n.mode&1?(et=(a=et)||n.memoizedState!==null,un(e,t,n),et=a):un(e,t,n);break;default:un(e,t,n)}}function ku(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new w1),t.forEach(function(a){var o=L1.bind(null,e,a);n.has(a)||(n.add(a),a.then(o,o))})}}function Ct(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];try{var c=e,m=t,j=m;e:for(;j!==null;){switch(j.tag){case 5:Ye=j.stateNode,Nt=!1;break e;case 3:Ye=j.stateNode.containerInfo,Nt=!0;break e;case 4:Ye=j.stateNode.containerInfo,Nt=!0;break e}j=j.return}if(Ye===null)throw Error(s(160));ju(c,m,o),Ye=null,Nt=!1;var S=o.alternate;S!==null&&(S.return=null),o.return=null}catch(I){Oe(o,t,I)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Su(t,e),t=t.sibling}function Su(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ct(t,e),Tt(e),a&4){try{aa(3,e,e.return),hi(3,e)}catch(te){Oe(e,e.return,te)}try{aa(5,e,e.return)}catch(te){Oe(e,e.return,te)}}break;case 1:Ct(t,e),Tt(e),a&512&&n!==null&&or(n,n.return);break;case 5:if(Ct(t,e),Tt(e),a&512&&n!==null&&or(n,n.return),e.flags&32){var o=e.stateNode;try{Nr(o,"")}catch(te){Oe(e,e.return,te)}}if(a&4&&(o=e.stateNode,o!=null)){var c=e.memoizedProps,m=n!==null?n.memoizedProps:c,j=e.type,S=e.updateQueue;if(e.updateQueue=null,S!==null)try{j==="input"&&c.type==="radio"&&c.name!=null&&Jl(o,c),is(j,m);var I=is(j,c);for(m=0;m<S.length;m+=2){var W=S[m],B=S[m+1];W==="style"?sc(o,B):W==="dangerouslySetInnerHTML"?ac(o,B):W==="children"?Nr(o,B):D(o,W,B,I)}switch(j){case"input":es(o,c);break;case"textarea":tc(o,c);break;case"select":var $=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!c.multiple;var J=c.value;J!=null?Un(o,!!c.multiple,J,!1):$!==!!c.multiple&&(c.defaultValue!=null?Un(o,!!c.multiple,c.defaultValue,!0):Un(o,!!c.multiple,c.multiple?[]:"",!1))}o[Yr]=c}catch(te){Oe(e,e.return,te)}}break;case 6:if(Ct(t,e),Tt(e),a&4){if(e.stateNode===null)throw Error(s(162));o=e.stateNode,c=e.memoizedProps;try{o.nodeValue=c}catch(te){Oe(e,e.return,te)}}break;case 3:if(Ct(t,e),Tt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Tr(t.containerInfo)}catch(te){Oe(e,e.return,te)}break;case 4:Ct(t,e),Tt(e);break;case 13:Ct(t,e),Tt(e),o=e.child,o.flags&8192&&(c=o.memoizedState!==null,o.stateNode.isHidden=c,!c||o.alternate!==null&&o.alternate.memoizedState!==null||(_o=De())),a&4&&ku(e);break;case 22:if(W=n!==null&&n.memoizedState!==null,e.mode&1?(et=(I=et)||W,Ct(t,e),et=I):Ct(t,e),Tt(e),a&8192){if(I=e.memoizedState!==null,(e.stateNode.isHidden=I)&&!W&&(e.mode&1)!==0)for(Z=e,W=e.child;W!==null;){for(B=Z=W;Z!==null;){switch($=Z,J=$.child,$.tag){case 0:case 11:case 14:case 15:aa(4,$,$.return);break;case 1:or($,$.return);var ee=$.stateNode;if(typeof ee.componentWillUnmount=="function"){a=$,n=$.return;try{t=a,ee.props=t.memoizedProps,ee.state=t.memoizedState,ee.componentWillUnmount()}catch(te){Oe(a,n,te)}}break;case 5:or($,$.return);break;case 22:if($.memoizedState!==null){Eu(B);continue}}J!==null?(J.return=$,Z=J):Eu(B)}W=W.sibling}e:for(W=null,B=e;;){if(B.tag===5){if(W===null){W=B;try{o=B.stateNode,I?(c=o.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"):(j=B.stateNode,S=B.memoizedProps.style,m=S!=null&&S.hasOwnProperty("display")?S.display:null,j.style.display=ic("display",m))}catch(te){Oe(e,e.return,te)}}}else if(B.tag===6){if(W===null)try{B.stateNode.nodeValue=I?"":B.memoizedProps}catch(te){Oe(e,e.return,te)}}else if((B.tag!==22&&B.tag!==23||B.memoizedState===null||B===e)&&B.child!==null){B.child.return=B,B=B.child;continue}if(B===e)break e;for(;B.sibling===null;){if(B.return===null||B.return===e)break e;W===B&&(W=null),B=B.return}W===B&&(W=null),B.sibling.return=B.return,B=B.sibling}}break;case 19:Ct(t,e),Tt(e),a&4&&ku(e);break;case 21:break;default:Ct(t,e),Tt(e)}}function Tt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(bu(n)){var a=n;break e}n=n.return}throw Error(s(160))}switch(a.tag){case 5:var o=a.stateNode;a.flags&32&&(Nr(o,""),a.flags&=-33);var c=wu(e);Po(e,c,o);break;case 3:case 4:var m=a.stateNode.containerInfo,j=wu(e);zo(e,j,m);break;default:throw Error(s(161))}}catch(S){Oe(e,e.return,S)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function k1(e,t,n){Z=e,Nu(e)}function Nu(e,t,n){for(var a=(e.mode&1)!==0;Z!==null;){var o=Z,c=o.child;if(o.tag===22&&a){var m=o.memoizedState!==null||pi;if(!m){var j=o.alternate,S=j!==null&&j.memoizedState!==null||et;j=pi;var I=et;if(pi=m,(et=S)&&!I)for(Z=o;Z!==null;)m=Z,S=m.child,m.tag===22&&m.memoizedState!==null?zu(o):S!==null?(S.return=m,Z=S):zu(o);for(;c!==null;)Z=c,Nu(c),c=c.sibling;Z=o,pi=j,et=I}Cu(e)}else(o.subtreeFlags&8772)!==0&&c!==null?(c.return=o,Z=c):Cu(e)}}function Cu(e){for(;Z!==null;){var t=Z;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:et||hi(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!et)if(n===null)a.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:St(t.type,n.memoizedProps);a.componentDidUpdate(o,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var c=t.updateQueue;c!==null&&Ed(t,c,a);break;case 3:var m=t.updateQueue;if(m!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ed(t,m,n)}break;case 5:var j=t.stateNode;if(n===null&&t.flags&4){n=j;var S=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":S.autoFocus&&n.focus();break;case"img":S.src&&(n.src=S.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var I=t.alternate;if(I!==null){var W=I.memoizedState;if(W!==null){var B=W.dehydrated;B!==null&&Tr(B)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}et||t.flags&512&&Eo(t)}catch($){Oe(t,t.return,$)}}if(t===e){Z=null;break}if(n=t.sibling,n!==null){n.return=t.return,Z=n;break}Z=t.return}}function Eu(e){for(;Z!==null;){var t=Z;if(t===e){Z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Z=n;break}Z=t.return}}function zu(e){for(;Z!==null;){var t=Z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{hi(4,t)}catch(S){Oe(t,n,S)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var o=t.return;try{a.componentDidMount()}catch(S){Oe(t,o,S)}}var c=t.return;try{Eo(t)}catch(S){Oe(t,c,S)}break;case 5:var m=t.return;try{Eo(t)}catch(S){Oe(t,m,S)}}}catch(S){Oe(t,t.return,S)}if(t===e){Z=null;break}var j=t.sibling;if(j!==null){j.return=t.return,Z=j;break}Z=t.return}}var S1=Math.ceil,gi=V.ReactCurrentDispatcher,Ao=V.ReactCurrentOwner,yt=V.ReactCurrentBatchConfig,ye=0,Ve=null,$e=null,qe=0,mt=0,lr=sn(0),He=0,ia=null,An=0,xi=0,Lo=0,sa=null,st=null,_o=0,cr=1/0,Vt=null,vi=!1,Mo=null,fn=null,yi=!1,mn=null,bi=0,oa=0,Io=null,wi=-1,ji=0;function nt(){return(ye&6)!==0?De():wi!==-1?wi:wi=De()}function pn(e){return(e.mode&1)===0?1:(ye&2)!==0&&qe!==0?qe&-qe:o1.transition!==null?(ji===0&&(ji=wc()),ji):(e=Ee,e!==0||(e=window.event,e=e===void 0?16:Ac(e.type)),e)}function Et(e,t,n,a){if(50<oa)throw oa=0,Io=null,Error(s(185));Lr(e,n,a),((ye&2)===0||e!==Ve)&&(e===Ve&&((ye&2)===0&&(xi|=n),He===4&&hn(e,qe)),ot(e,a),n===1&&ye===0&&(t.mode&1)===0&&(cr=De()+500,Xa&&ln()))}function ot(e,t){var n=e.callbackNode;oh(e,t);var a=La(e,e===Ve?qe:0);if(a===0)n!==null&&vc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(n!=null&&vc(n),t===1)e.tag===0?s1(Au.bind(null,e)):hd(Au.bind(null,e)),n1(function(){(ye&6)===0&&ln()}),n=null;else{switch(jc(a)){case 1:n=fs;break;case 4:n=yc;break;case 16:n=Ea;break;case 536870912:n=bc;break;default:n=Ea}n=Ru(n,Pu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Pu(e,t){if(wi=-1,ji=0,(ye&6)!==0)throw Error(s(327));var n=e.callbackNode;if(dr()&&e.callbackNode!==n)return null;var a=La(e,e===Ve?qe:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||t)t=ki(e,a);else{t=a;var o=ye;ye|=2;var c=_u();(Ve!==e||qe!==t)&&(Vt=null,cr=De()+500,_n(e,t));do try{E1();break}catch(j){Lu(e,j)}while(!0);Ks(),gi.current=c,ye=o,$e!==null?t=0:(Ve=null,qe=0,t=He)}if(t!==0){if(t===2&&(o=ms(e),o!==0&&(a=o,t=Fo(e,o))),t===1)throw n=ia,_n(e,0),hn(e,a),ot(e,De()),n;if(t===6)hn(e,a);else{if(o=e.current.alternate,(a&30)===0&&!N1(o)&&(t=ki(e,a),t===2&&(c=ms(e),c!==0&&(a=c,t=Fo(e,c))),t===1))throw n=ia,_n(e,0),hn(e,a),ot(e,De()),n;switch(e.finishedWork=o,e.finishedLanes=a,t){case 0:case 1:throw Error(s(345));case 2:Mn(e,st,Vt);break;case 3:if(hn(e,a),(a&130023424)===a&&(t=_o+500-De(),10<t)){if(La(e,0)!==0)break;if(o=e.suspendedLanes,(o&a)!==a){nt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Us(Mn.bind(null,e,st,Vt),t);break}Mn(e,st,Vt);break;case 4:if(hn(e,a),(a&4194240)===a)break;for(t=e.eventTimes,o=-1;0<a;){var m=31-wt(a);c=1<<m,m=t[m],m>o&&(o=m),a&=~c}if(a=o,a=De()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*S1(a/1960))-a,10<a){e.timeoutHandle=Us(Mn.bind(null,e,st,Vt),a);break}Mn(e,st,Vt);break;case 5:Mn(e,st,Vt);break;default:throw Error(s(329))}}}return ot(e,De()),e.callbackNode===n?Pu.bind(null,e):null}function Fo(e,t){var n=sa;return e.current.memoizedState.isDehydrated&&(_n(e,t).flags|=256),e=ki(e,t),e!==2&&(t=st,st=n,t!==null&&To(t)),e}function To(e){st===null?st=e:st.push.apply(st,e)}function N1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var o=n[a],c=o.getSnapshot;o=o.value;try{if(!jt(c(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function hn(e,t){for(t&=~Lo,t&=~xi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-wt(t),a=1<<n;e[n]=-1,t&=~a}}function Au(e){if((ye&6)!==0)throw Error(s(327));dr();var t=La(e,0);if((t&1)===0)return ot(e,De()),null;var n=ki(e,t);if(e.tag!==0&&n===2){var a=ms(e);a!==0&&(t=a,n=Fo(e,a))}if(n===1)throw n=ia,_n(e,0),hn(e,t),ot(e,De()),n;if(n===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mn(e,st,Vt),ot(e,De()),null}function Oo(e,t){var n=ye;ye|=1;try{return e(t)}finally{ye=n,ye===0&&(cr=De()+500,Xa&&ln())}}function Ln(e){mn!==null&&mn.tag===0&&(ye&6)===0&&dr();var t=ye;ye|=1;var n=yt.transition,a=Ee;try{if(yt.transition=null,Ee=1,e)return e()}finally{Ee=a,yt.transition=n,ye=t,(ye&6)===0&&ln()}}function Ro(){mt=lr.current,Ae(lr)}function _n(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,t1(n)),$e!==null)for(n=$e.return;n!==null;){var a=n;switch(Qs(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&qa();break;case 3:ir(),Ae(rt),Ae(Ke),io();break;case 5:ro(a);break;case 4:ir();break;case 13:Ae(Ie);break;case 19:Ae(Ie);break;case 10:Js(a.type._context);break;case 22:case 23:Ro()}n=n.return}if(Ve=e,$e=e=gn(e.current,null),qe=mt=t,He=0,ia=null,Lo=xi=An=0,st=sa=null,En!==null){for(t=0;t<En.length;t++)if(n=En[t],a=n.interleaved,a!==null){n.interleaved=null;var o=a.next,c=n.pending;if(c!==null){var m=c.next;c.next=o,a.next=m}n.pending=a}En=null}return e}function Lu(e,t){do{var n=$e;try{if(Ks(),si.current=di,oi){for(var a=Fe.memoizedState;a!==null;){var o=a.queue;o!==null&&(o.pending=null),a=a.next}oi=!1}if(Pn=0,Be=We=Fe=null,Zr=!1,ea=0,Ao.current=null,n===null||n.return===null){He=1,ia=t,$e=null;break}e:{var c=e,m=n.return,j=n,S=t;if(t=qe,j.flags|=32768,S!==null&&typeof S=="object"&&typeof S.then=="function"){var I=S,W=j,B=W.tag;if((W.mode&1)===0&&(B===0||B===11||B===15)){var $=W.alternate;$?(W.updateQueue=$.updateQueue,W.memoizedState=$.memoizedState,W.lanes=$.lanes):(W.updateQueue=null,W.memoizedState=null)}var J=nu(m);if(J!==null){J.flags&=-257,ru(J,m,j,c,t),J.mode&1&&tu(c,I,t),t=J,S=I;var ee=t.updateQueue;if(ee===null){var te=new Set;te.add(S),t.updateQueue=te}else ee.add(S);break e}else{if((t&1)===0){tu(c,I,t),Do();break e}S=Error(s(426))}}else if(Me&&j.mode&1){var Ue=nu(m);if(Ue!==null){(Ue.flags&65536)===0&&(Ue.flags|=256),ru(Ue,m,j,c,t),Gs(sr(S,j));break e}}c=S=sr(S,j),He!==4&&(He=2),sa===null?sa=[c]:sa.push(c),c=m;do{switch(c.tag){case 3:c.flags|=65536,t&=-t,c.lanes|=t;var P=Zd(c,S,t);Cd(c,P);break e;case 1:j=S;var N=c.type,A=c.stateNode;if((c.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(fn===null||!fn.has(A)))){c.flags|=65536,t&=-t,c.lanes|=t;var Y=eu(c,j,t);Cd(c,Y);break e}}c=c.return}while(c!==null)}Iu(n)}catch(ne){t=ne,$e===n&&n!==null&&($e=n=n.return);continue}break}while(!0)}function _u(){var e=gi.current;return gi.current=di,e===null?di:e}function Do(){(He===0||He===3||He===2)&&(He=4),Ve===null||(An&268435455)===0&&(xi&268435455)===0||hn(Ve,qe)}function ki(e,t){var n=ye;ye|=2;var a=_u();(Ve!==e||qe!==t)&&(Vt=null,_n(e,t));do try{C1();break}catch(o){Lu(e,o)}while(!0);if(Ks(),ye=n,gi.current=a,$e!==null)throw Error(s(261));return Ve=null,qe=0,He}function C1(){for(;$e!==null;)Mu($e)}function E1(){for(;$e!==null&&!Jp();)Mu($e)}function Mu(e){var t=Ou(e.alternate,e,mt);e.memoizedProps=e.pendingProps,t===null?Iu(e):$e=t,Ao.current=null}function Iu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=y1(n,t,mt),n!==null){$e=n;return}}else{if(n=b1(n,t),n!==null){n.flags&=32767,$e=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{He=6,$e=null;return}}if(t=t.sibling,t!==null){$e=t;return}$e=t=e}while(t!==null);He===0&&(He=5)}function Mn(e,t,n){var a=Ee,o=yt.transition;try{yt.transition=null,Ee=1,z1(e,t,n,a)}finally{yt.transition=o,Ee=a}return null}function z1(e,t,n,a){do dr();while(mn!==null);if((ye&6)!==0)throw Error(s(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var c=n.lanes|n.childLanes;if(lh(e,c),e===Ve&&($e=Ve=null,qe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||yi||(yi=!0,Ru(Ea,function(){return dr(),null})),c=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||c){c=yt.transition,yt.transition=null;var m=Ee;Ee=1;var j=ye;ye|=4,Ao.current=null,j1(e,n),Su(n,e),qh(Rs),Ia=!!Os,Rs=Os=null,e.current=n,k1(n),Zp(),ye=j,Ee=m,yt.transition=c}else e.current=n;if(yi&&(yi=!1,mn=e,bi=o),c=e.pendingLanes,c===0&&(fn=null),nh(n.stateNode),ot(e,De()),t!==null)for(a=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],a(o.value,{componentStack:o.stack,digest:o.digest});if(vi)throw vi=!1,e=Mo,Mo=null,e;return(bi&1)!==0&&e.tag!==0&&dr(),c=e.pendingLanes,(c&1)!==0?e===Io?oa++:(oa=0,Io=e):oa=0,ln(),null}function dr(){if(mn!==null){var e=jc(bi),t=yt.transition,n=Ee;try{if(yt.transition=null,Ee=16>e?16:e,mn===null)var a=!1;else{if(e=mn,mn=null,bi=0,(ye&6)!==0)throw Error(s(331));var o=ye;for(ye|=4,Z=e.current;Z!==null;){var c=Z,m=c.child;if((Z.flags&16)!==0){var j=c.deletions;if(j!==null){for(var S=0;S<j.length;S++){var I=j[S];for(Z=I;Z!==null;){var W=Z;switch(W.tag){case 0:case 11:case 15:aa(8,W,c)}var B=W.child;if(B!==null)B.return=W,Z=B;else for(;Z!==null;){W=Z;var $=W.sibling,J=W.return;if(yu(W),W===I){Z=null;break}if($!==null){$.return=J,Z=$;break}Z=J}}}var ee=c.alternate;if(ee!==null){var te=ee.child;if(te!==null){ee.child=null;do{var Ue=te.sibling;te.sibling=null,te=Ue}while(te!==null)}}Z=c}}if((c.subtreeFlags&2064)!==0&&m!==null)m.return=c,Z=m;else e:for(;Z!==null;){if(c=Z,(c.flags&2048)!==0)switch(c.tag){case 0:case 11:case 15:aa(9,c,c.return)}var P=c.sibling;if(P!==null){P.return=c.return,Z=P;break e}Z=c.return}}var N=e.current;for(Z=N;Z!==null;){m=Z;var A=m.child;if((m.subtreeFlags&2064)!==0&&A!==null)A.return=m,Z=A;else e:for(m=N;Z!==null;){if(j=Z,(j.flags&2048)!==0)try{switch(j.tag){case 0:case 11:case 15:hi(9,j)}}catch(ne){Oe(j,j.return,ne)}if(j===m){Z=null;break e}var Y=j.sibling;if(Y!==null){Y.return=j.return,Z=Y;break e}Z=j.return}}if(ye=o,ln(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(za,e)}catch{}a=!0}return a}finally{Ee=n,yt.transition=t}}return!1}function Fu(e,t,n){t=sr(n,t),t=Zd(e,t,1),e=dn(e,t,1),t=nt(),e!==null&&(Lr(e,1,t),ot(e,t))}function Oe(e,t,n){if(e.tag===3)Fu(e,e,n);else for(;t!==null;){if(t.tag===3){Fu(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(fn===null||!fn.has(a))){e=sr(n,e),e=eu(t,e,1),t=dn(t,e,1),e=nt(),t!==null&&(Lr(t,1,e),ot(t,e));break}}t=t.return}}function P1(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),t=nt(),e.pingedLanes|=e.suspendedLanes&n,Ve===e&&(qe&n)===n&&(He===4||He===3&&(qe&130023424)===qe&&500>De()-_o?_n(e,0):Lo|=n),ot(e,t)}function Tu(e,t){t===0&&((e.mode&1)===0?t=1:(t=Aa,Aa<<=1,(Aa&130023424)===0&&(Aa=4194304)));var n=nt();e=Wt(e,t),e!==null&&(Lr(e,t,n),ot(e,n))}function A1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Tu(e,n)}function L1(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(s(314))}a!==null&&a.delete(t),Tu(e,n)}var Ou;Ou=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||rt.current)it=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return it=!1,v1(e,t,n);it=(e.flags&131072)!==0}else it=!1,Me&&(t.flags&1048576)!==0&&gd(t,Ja,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;mi(e,t),e=t.pendingProps;var o=Jn(t,Ke.current);ar(t,n),o=lo(null,t,a,e,o,n);var c=co();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,at(a)?(c=!0,Ga(t)):c=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,to(t),o.updater=ui,t.stateNode=o,o._reactInternals=t,go(t,a,e,n),t=bo(null,t,a,!0,c,n)):(t.tag=0,Me&&c&&Vs(t),tt(null,t,o,n),t=t.child),t;case 16:a=t.elementType;e:{switch(mi(e,t),e=t.pendingProps,o=a._init,a=o(a._payload),t.type=a,o=t.tag=M1(a),e=St(a,e),o){case 0:t=yo(null,t,a,e,n);break e;case 1:t=cu(null,t,a,e,n);break e;case 11:t=au(null,t,a,e,n);break e;case 14:t=iu(null,t,a,St(a.type,e),n);break e}throw Error(s(306,a,""))}return t;case 0:return a=t.type,o=t.pendingProps,o=t.elementType===a?o:St(a,o),yo(e,t,a,o,n);case 1:return a=t.type,o=t.pendingProps,o=t.elementType===a?o:St(a,o),cu(e,t,a,o,n);case 3:e:{if(du(t),e===null)throw Error(s(387));a=t.pendingProps,c=t.memoizedState,o=c.element,Nd(e,t),ai(t,a,null,n);var m=t.memoizedState;if(a=m.element,c.isDehydrated)if(c={element:a,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){o=sr(Error(s(423)),t),t=uu(e,t,a,n,o);break e}else if(a!==o){o=sr(Error(s(424)),t),t=uu(e,t,a,n,o);break e}else for(ft=an(t.stateNode.containerInfo.firstChild),ut=t,Me=!0,kt=null,n=kd(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(tr(),a===o){t=Bt(e,t,n);break e}tt(e,t,a,n)}t=t.child}return t;case 5:return zd(t),e===null&&qs(t),a=t.type,o=t.pendingProps,c=e!==null?e.memoizedProps:null,m=o.children,Ds(a,o)?m=null:c!==null&&Ds(a,c)&&(t.flags|=32),lu(e,t),tt(e,t,m,n),t.child;case 6:return e===null&&qs(t),null;case 13:return fu(e,t,n);case 4:return no(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=nr(t,null,a,n):tt(e,t,a,n),t.child;case 11:return a=t.type,o=t.pendingProps,o=t.elementType===a?o:St(a,o),au(e,t,a,o,n);case 7:return tt(e,t,t.pendingProps,n),t.child;case 8:return tt(e,t,t.pendingProps.children,n),t.child;case 12:return tt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(a=t.type._context,o=t.pendingProps,c=t.memoizedProps,m=o.value,ze(ti,a._currentValue),a._currentValue=m,c!==null)if(jt(c.value,m)){if(c.children===o.children&&!rt.current){t=Bt(e,t,n);break e}}else for(c=t.child,c!==null&&(c.return=t);c!==null;){var j=c.dependencies;if(j!==null){m=c.child;for(var S=j.firstContext;S!==null;){if(S.context===a){if(c.tag===1){S=Ht(-1,n&-n),S.tag=2;var I=c.updateQueue;if(I!==null){I=I.shared;var W=I.pending;W===null?S.next=S:(S.next=W.next,W.next=S),I.pending=S}}c.lanes|=n,S=c.alternate,S!==null&&(S.lanes|=n),Zs(c.return,n,t),j.lanes|=n;break}S=S.next}}else if(c.tag===10)m=c.type===t.type?null:c.child;else if(c.tag===18){if(m=c.return,m===null)throw Error(s(341));m.lanes|=n,j=m.alternate,j!==null&&(j.lanes|=n),Zs(m,n,t),m=c.sibling}else m=c.child;if(m!==null)m.return=c;else for(m=c;m!==null;){if(m===t){m=null;break}if(c=m.sibling,c!==null){c.return=m.return,m=c;break}m=m.return}c=m}tt(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,a=t.pendingProps.children,ar(t,n),o=xt(o),a=a(o),t.flags|=1,tt(e,t,a,n),t.child;case 14:return a=t.type,o=St(a,t.pendingProps),o=St(a.type,o),iu(e,t,a,o,n);case 15:return su(e,t,t.type,t.pendingProps,n);case 17:return a=t.type,o=t.pendingProps,o=t.elementType===a?o:St(a,o),mi(e,t),t.tag=1,at(a)?(e=!0,Ga(t)):e=!1,ar(t,n),Kd(t,a,o),go(t,a,o,n),bo(null,t,a,!0,e,n);case 19:return pu(e,t,n);case 22:return ou(e,t,n)}throw Error(s(156,t.tag))};function Ru(e,t){return xc(e,t)}function _1(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(e,t,n,a){return new _1(e,t,n,a)}function Uo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function M1(e){if(typeof e=="function")return Uo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===me)return 11;if(e===je)return 14}return 2}function gn(e,t){var n=e.alternate;return n===null?(n=bt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Si(e,t,n,a,o,c){var m=2;if(a=e,typeof e=="function")Uo(e)&&(m=1);else if(typeof e=="string")m=5;else e:switch(e){case re:return In(n.children,o,c,t);case de:m=8,o|=8;break;case X:return e=bt(12,n,t,o|2),e.elementType=X,e.lanes=c,e;case ve:return e=bt(13,n,t,o),e.elementType=ve,e.lanes=c,e;case Se:return e=bt(19,n,t,o),e.elementType=Se,e.lanes=c,e;case xe:return Ni(n,o,c,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fe:m=10;break e;case pe:m=9;break e;case me:m=11;break e;case je:m=14;break e;case Ne:m=16,a=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=bt(m,n,t,o),t.elementType=e,t.type=a,t.lanes=c,t}function In(e,t,n,a){return e=bt(7,e,a,t),e.lanes=n,e}function Ni(e,t,n,a){return e=bt(22,e,a,t),e.elementType=xe,e.lanes=n,e.stateNode={isHidden:!1},e}function $o(e,t,n){return e=bt(6,e,null,t),e.lanes=n,e}function Wo(e,t,n){return t=bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function I1(e,t,n,a,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ps(0),this.expirationTimes=ps(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ps(0),this.identifierPrefix=a,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ho(e,t,n,a,o,c,m,j,S){return e=new I1(e,t,n,j,S),t===1?(t=1,c===!0&&(t|=8)):t=0,c=bt(3,null,null,t),e.current=c,c.stateNode=e,c.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},to(c),e}function F1(e,t,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:G,key:a==null?null:""+a,children:e,containerInfo:t,implementation:n}}function Du(e){if(!e)return on;e=e._reactInternals;e:{if(jn(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(at(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var n=e.type;if(at(n))return md(e,n,t)}return t}function Uu(e,t,n,a,o,c,m,j,S){return e=Ho(n,a,!0,e,o,c,m,j,S),e.context=Du(null),n=e.current,a=nt(),o=pn(n),c=Ht(a,o),c.callback=t??null,dn(n,c,o),e.current.lanes=o,Lr(e,o,a),ot(e,a),e}function Ci(e,t,n,a){var o=t.current,c=nt(),m=pn(o);return n=Du(n),t.context===null?t.context=n:t.pendingContext=n,t=Ht(c,m),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=dn(o,t,m),e!==null&&(Et(e,o,m,c),ri(e,o,m)),m}function Ei(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $u(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Bo(e,t){$u(e,t),(e=e.alternate)&&$u(e,t)}function T1(){return null}var Wu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vo(e){this._internalRoot=e}zi.prototype.render=Vo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));Ci(e,t,null,null)},zi.prototype.unmount=Vo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ln(function(){Ci(null,e,null,null)}),t[Rt]=null}};function zi(e){this._internalRoot=e}zi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Nc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tn.length&&t!==0&&t<tn[n].priority;n++);tn.splice(n,0,e),n===0&&zc(e)}};function Qo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Pi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Hu(){}function O1(e,t,n,a,o){if(o){if(typeof a=="function"){var c=a;a=function(){var I=Ei(m);c.call(I)}}var m=Uu(t,a,e,0,null,!1,!1,"",Hu);return e._reactRootContainer=m,e[Rt]=m.current,Vr(e.nodeType===8?e.parentNode:e),Ln(),m}for(;o=e.lastChild;)e.removeChild(o);if(typeof a=="function"){var j=a;a=function(){var I=Ei(S);j.call(I)}}var S=Ho(e,0,!1,null,null,!1,!1,"",Hu);return e._reactRootContainer=S,e[Rt]=S.current,Vr(e.nodeType===8?e.parentNode:e),Ln(function(){Ci(t,S,n,a)}),S}function Ai(e,t,n,a,o){var c=n._reactRootContainer;if(c){var m=c;if(typeof o=="function"){var j=o;o=function(){var S=Ei(m);j.call(S)}}Ci(t,m,e,o)}else m=O1(n,t,e,o,a);return Ei(m)}kc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ar(t.pendingLanes);n!==0&&(hs(t,n|1),ot(t,De()),(ye&6)===0&&(cr=De()+500,ln()))}break;case 13:Ln(function(){var a=Wt(e,1);if(a!==null){var o=nt();Et(a,e,1,o)}}),Bo(e,1)}},gs=function(e){if(e.tag===13){var t=Wt(e,134217728);if(t!==null){var n=nt();Et(t,e,134217728,n)}Bo(e,134217728)}},Sc=function(e){if(e.tag===13){var t=pn(e),n=Wt(e,t);if(n!==null){var a=nt();Et(n,e,t,a)}Bo(e,t)}},Nc=function(){return Ee},Cc=function(e,t){var n=Ee;try{return Ee=e,t()}finally{Ee=n}},ls=function(e,t,n){switch(t){case"input":if(es(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var o=Ya(a);if(!o)throw Error(s(90));Xl(a),es(a,o)}}}break;case"textarea":tc(e,n);break;case"select":t=n.value,t!=null&&Un(e,!!n.multiple,t,!1)}},dc=Oo,uc=Ln;var R1={usingClientEntryPoint:!1,Events:[qr,Xn,Ya,lc,cc,Oo]},la={findFiberByHostInstance:kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},D1={bundleType:la.bundleType,version:la.version,rendererPackageName:la.rendererPackageName,rendererConfig:la.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:V.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=hc(e),e===null?null:e.stateNode},findFiberByHostInstance:la.findFiberByHostInstance||T1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Li=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Li.isDisabled&&Li.supportsFiber)try{za=Li.inject(D1),_t=Li}catch{}}return lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R1,lt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qo(t))throw Error(s(200));return F1(e,t,null,n)},lt.createRoot=function(e,t){if(!Qo(e))throw Error(s(299));var n=!1,a="",o=Wu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ho(e,1,!1,null,null,n,!1,a,o),e[Rt]=t.current,Vr(e.nodeType===8?e.parentNode:e),new Vo(t)},lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=hc(t),e=e===null?null:e.stateNode,e},lt.flushSync=function(e){return Ln(e)},lt.hydrate=function(e,t,n){if(!Pi(t))throw Error(s(200));return Ai(null,e,t,!0,n)},lt.hydrateRoot=function(e,t,n){if(!Qo(e))throw Error(s(405));var a=n!=null&&n.hydratedSources||null,o=!1,c="",m=Wu;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onRecoverableError!==void 0&&(m=n.onRecoverableError)),t=Uu(t,null,e,1,n??null,o,!1,c,m),e[Rt]=t.current,Vr(e),a)for(e=0;e<a.length;e++)n=a[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new zi(t)},lt.render=function(e,t,n){if(!Pi(t))throw Error(s(200));return Ai(null,e,t,!1,n)},lt.unmountComponentAtNode=function(e){if(!Pi(e))throw Error(s(40));return e._reactRootContainer?(Ln(function(){Ai(null,null,e,!1,function(){e._reactRootContainer=null,e[Rt]=null})}),!0):!1},lt.unstable_batchedUpdates=Oo,lt.unstable_renderSubtreeIntoContainer=function(e,t,n,a){if(!Pi(n))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return Ai(e,t,n,!1,a)},lt.version="18.3.1-next-f1338f8080-20240426",lt}var Ku;function q1(){if(Ku)return Go.exports;Ku=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(l){console.error(l)}}return i(),Go.exports=Y1(),Go.exports}var Ju;function G1(){if(Ju)return _i;Ju=1;var i=q1();return _i.createRoot=i.createRoot,_i.hydrateRoot=i.hydrateRoot,_i}var X1=G1();const K1=`
*{box-sizing:border-box}body{margin:0;font-family:Inter,Arial,sans-serif;background:#f6f8fb;color:#14213d}button,input,select,textarea{font:inherit}button{cursor:pointer;border:0}.nav{position:sticky;top:0;z-index:10;display:flex;align-items:center;justify-content:space-between;padding:14px clamp(18px,4vw,56px);background:rgba(255,255,255,.94);backdrop-filter:blur(14px);border-bottom:1px solid #dfe7ef}.brand{display:flex;align-items:center;gap:10px;background:transparent;color:#14213d;text-align:left}.brand strong{display:block}.brand small{display:block;color:#64748b}.brand-mark{display:grid;place-items:center;width:42px;height:42px;border-radius:8px;background:#0f766e;color:#fff;font-weight:800}.nav-links{display:flex;align-items:center;gap:6px}.nav-links button,.section-head button,.text-btn{background:transparent;color:#334155;padding:10px 12px;border-radius:8px}.nav-links .active,.filters button:first-child,.segmented .active{background:#e7f5f3;color:#0f766e}.pill,.primary,.secondary{display:inline-flex;align-items:center;justify-content:center;gap:8px;border-radius:8px;padding:12px 16px;font-weight:700}.pill,.primary{background:#0f766e;color:#fff}.secondary{background:#f59e0b;color:#111827}.hero{padding:72px clamp(18px,5vw,72px) 34px;background:linear-gradient(120deg,#e7f5f3 0%,#fff 54%,#fff4dc 100%)}.hero-content{max-width:820px}.eyebrow{color:#0f766e;font-weight:800;text-transform:uppercase;font-size:.78rem;letter-spacing:0}.hero h1,.page h1,.portal-main h1{font-size:clamp(2.2rem,5vw,4.8rem);line-height:1.02;margin:10px 0 18px}.hero-text,.page-head p{font-size:1.08rem;line-height:1.75;color:#475569;max-width:780px}.hero-actions{display:flex;gap:12px;flex-wrap:wrap;margin:24px 0}.hero-panel{margin-top:34px;display:grid;gap:18px;max-width:880px}.search{display:flex;align-items:center;gap:10px;background:#fff;border:1px solid #dce6ee;border-radius:8px;padding:13px 14px;box-shadow:0 12px 26px rgba(15,23,42,.08)}.search input{border:0;outline:0;width:100%;background:transparent}.stat-grid,.dashboard-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:14px}.stat,.info-block,.verify-card,.list-panel{background:#fff;border:1px solid #dfe7ef;border-radius:8px;padding:20px;box-shadow:0 12px 26px rgba(15,23,42,.06)}.stat strong{display:block;font-size:2rem;color:#0f766e}.stat span,.card p,.info-block p,.mini-card span{color:#64748b;line-height:1.6}.section,.page{padding:42px clamp(18px,5vw,72px)}.section-head{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:18px}.section h2{font-size:1.6rem;margin:0}.card-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:18px}.card,.mini-card{background:#fff;border:1px solid #dfe7ef;border-radius:8px;padding:20px;min-height:190px;display:flex;flex-direction:column;align-items:flex-start;gap:10px;box-shadow:0 12px 26px rgba(15,23,42,.06)}.card svg,.mini-card svg{color:#0f766e}.card h3,.info-block h3{margin:4px 0;font-size:1.15rem}.card button,.list-row button{margin-top:auto;background:#e7f5f3;color:#0f766e;border-radius:8px;padding:10px 12px;font-weight:700}.course span,.product span,.verified{display:inline-block;background:#fff4dc;color:#92400e;border-radius:8px;padding:6px 9px;font-size:.82rem;font-weight:800}.product strong{font-size:1.45rem}.product div{display:flex;gap:8px;margin-top:auto}.icon-btn{display:grid;place-items:center;width:42px;height:42px;border-radius:8px;background:#0f766e;color:#fff}.page{min-height:70vh}.page-head{margin-bottom:28px}.filters{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:18px}.filters button{padding:10px 13px;border-radius:8px;background:#fff;color:#334155;border:1px solid #dfe7ef}.two-col{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:16px}.form{display:grid;gap:12px;max-width:660px}.form input,.form select,.form textarea,.auth-box input{width:100%;padding:13px 14px;border:1px solid #d7e2ea;border-radius:8px;background:#fff;outline:0}.list-row{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid #e5edf3}.portal-bg{min-height:100vh;display:grid;place-items:center;background:linear-gradient(135deg,#e7f5f3,#fff4dc)}.auth-box{width:min(430px,92vw);background:#fff;border:1px solid #dfe7ef;border-radius:8px;padding:28px;box-shadow:0 18px 42px rgba(15,23,42,.12)}.center{justify-content:center;margin:0 auto 18px}.segmented{display:grid;grid-template-columns:1fr 1fr;gap:6px;background:#eef4f7;padding:5px;border-radius:8px;margin-bottom:14px}.segmented button{border-radius:8px;padding:10px;background:transparent}.auth-box .primary{width:100%;margin-top:10px}.text-btn{width:100%;margin-top:8px}.portal{min-height:100vh;display:grid;grid-template-columns:260px 1fr;background:#f6f8fb}.portal aside{background:#10243f;color:#fff;padding:18px;display:flex;flex-direction:column;gap:8px}.portal aside .brand{color:#fff;margin-bottom:16px}.portal aside button{text-align:left;background:rgba(255,255,255,.08);color:#fff;border-radius:8px;padding:12px}.portal-main{padding:30px clamp(18px,4vw,54px)}.portal-main h1{font-size:2rem}.topbar{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:20px}.rules{line-height:1.9;color:#475569}.verify-card{max-width:560px;text-align:center}.verify-card svg{color:#0f766e}.floating{position:fixed;right:18px;bottom:18px;display:grid;gap:8px}.floating button{width:46px;height:46px;border-radius:8px;background:#0f766e;color:#fff;display:grid;place-items:center;box-shadow:0 12px 24px rgba(15,118,110,.28)}footer{display:flex;justify-content:space-between;gap:18px;flex-wrap:wrap;padding:32px clamp(18px,5vw,72px);background:#10243f;color:#fff}footer p{color:#cbd5e1}footer button{background:rgba(255,255,255,.1);color:#fff;border-radius:8px;padding:10px 12px;margin-left:8px}.table{width:100%;border-collapse:collapse;background:#fff;border:1px solid #dfe7ef;border-radius:8px;overflow:hidden}.table th,.table td{text-align:left;padding:13px;border-bottom:1px solid #edf2f7}.modal{background:#fff;border:1px solid #dfe7ef;border-radius:8px;padding:20px}.mobile-only{display:none}@media(max-width:760px){.mobile-only{display:grid}.nav-links{display:none;position:absolute;top:70px;left:14px;right:14px;flex-direction:column;align-items:stretch;background:#fff;border:1px solid #dfe7ef;border-radius:8px;padding:10px}.nav-links.open{display:flex}.nav-links button{width:100%;justify-content:center}.hero{padding-top:44px}.portal{grid-template-columns:1fr}.portal aside{position:static}.list-row{grid-template-columns:1fr}.hero h1,.page h1{font-size:2.35rem}}
`;function J1(){return r.jsx("style",{children:K1})}/*!
 * Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */function ol(i,l){(l==null||l>i.length)&&(l=i.length);for(var s=0,d=Array(l);s<l;s++)d[s]=i[s];return d}function Z1(i){if(Array.isArray(i))return i}function e0(i){if(Array.isArray(i))return ol(i)}function t0(i,l){if(!(i instanceof l))throw new TypeError("Cannot call a class as a function")}function n0(i,l){for(var s=0;s<l.length;s++){var d=l[s];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(i,qf(d.key),d)}}function r0(i,l,s){return l&&n0(i.prototype,l),Object.defineProperty(i,"prototype",{writable:!1}),i}function Oi(i,l){var s=typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(!s){if(Array.isArray(i)||(s=zl(i))||l){s&&(i=s);var d=0,u=function(){};return{s:u,n:function(){return d>=i.length?{done:!0}:{done:!1,value:i[d++]}},e:function(f){throw f},f:u}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var h,v=!0,b=!1;return{s:function(){s=s.call(i)},n:function(){var f=s.next();return v=f.done,f},e:function(f){b=!0,h=f},f:function(){try{v||s.return==null||s.return()}finally{if(b)throw h}}}}function ue(i,l,s){return(l=qf(l))in i?Object.defineProperty(i,l,{value:s,enumerable:!0,configurable:!0,writable:!0}):i[l]=s,i}function a0(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function i0(i,l){var s=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(s!=null){var d,u,h,v,b=[],f=!0,p=!1;try{if(h=(s=s.call(i)).next,l===0){if(Object(s)!==s)return;f=!1}else for(;!(f=(d=h.call(s)).done)&&(b.push(d.value),b.length!==l);f=!0);}catch(g){p=!0,u=g}finally{try{if(!f&&s.return!=null&&(v=s.return(),Object(v)!==v))return}finally{if(p)throw u}}return b}}function s0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function o0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zu(i,l){var s=Object.keys(i);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(i);l&&(d=d.filter(function(u){return Object.getOwnPropertyDescriptor(i,u).enumerable})),s.push.apply(s,d)}return s}function Q(i){for(var l=1;l<arguments.length;l++){var s=arguments[l]!=null?arguments[l]:{};l%2?Zu(Object(s),!0).forEach(function(d){ue(i,d,s[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(s)):Zu(Object(s)).forEach(function(d){Object.defineProperty(i,d,Object.getOwnPropertyDescriptor(s,d))})}return i}function Yi(i,l){return Z1(i)||i0(i,l)||zl(i,l)||s0()}function Pt(i){return e0(i)||a0(i)||zl(i)||o0()}function l0(i,l){if(typeof i!="object"||!i)return i;var s=i[Symbol.toPrimitive];if(s!==void 0){var d=s.call(i,l);if(typeof d!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(i)}function qf(i){var l=l0(i,"string");return typeof l=="symbol"?l:l+""}function $i(i){"@babel/helpers - typeof";return $i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},$i(i)}function zl(i,l){if(i){if(typeof i=="string")return ol(i,l);var s={}.toString.call(i).slice(8,-1);return s==="Object"&&i.constructor&&(s=i.constructor.name),s==="Map"||s==="Set"?Array.from(i):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?ol(i,l):void 0}}var ef=function(){},Pl={},Gf={},Xf=null,Kf={mark:ef,measure:ef};try{typeof window<"u"&&(Pl=window),typeof document<"u"&&(Gf=document),typeof MutationObserver<"u"&&(Xf=MutationObserver),typeof performance<"u"&&(Kf=performance)}catch{}var c0=Pl.navigator||{},tf=c0.userAgent,nf=tf===void 0?"":tf,vn=Pl,Le=Gf,rf=Xf,Mi=Kf;vn.document;var Kt=!!Le.documentElement&&!!Le.head&&typeof Le.addEventListener=="function"&&typeof Le.createElement=="function",Jf=~nf.indexOf("MSIE")||~nf.indexOf("Trident/"),Jo,d0=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,u0=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,Zf={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},f0={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},em=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],Xe="classic",ga="duotone",tm="sharp",nm="sharp-duotone",rm="chisel",am="etch",im="graphite",sm="jelly",om="jelly-duo",lm="jelly-fill",cm="notdog",dm="notdog-duo",um="slab",fm="slab-press",mm="thumbprint",pm="utility",hm="utility-duo",gm="utility-fill",xm="whiteboard",m0="Classic",p0="Duotone",h0="Sharp",g0="Sharp Duotone",x0="Chisel",v0="Etch",y0="Graphite",b0="Jelly",w0="Jelly Duo",j0="Jelly Fill",k0="Notdog",S0="Notdog Duo",N0="Slab",C0="Slab Press",E0="Thumbprint",z0="Utility",P0="Utility Duo",A0="Utility Fill",L0="Whiteboard",vm=[Xe,ga,tm,nm,rm,am,im,sm,om,lm,cm,dm,um,fm,mm,pm,hm,gm,xm];Jo={},ue(ue(ue(ue(ue(ue(ue(ue(ue(ue(Jo,Xe,m0),ga,p0),tm,h0),nm,g0),rm,x0),am,v0),im,y0),sm,b0),om,w0),lm,j0),ue(ue(ue(ue(ue(ue(ue(ue(ue(Jo,cm,k0),dm,S0),um,N0),fm,C0),mm,E0),pm,z0),hm,P0),gm,A0),xm,L0);var _0={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},M0={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},I0=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),F0={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},ym=["fak","fa-kit","fakd","fa-kit-duotone"],af={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},T0=["kit"],O0="kit",R0="kit-duotone",D0="Kit",U0="Kit Duotone";ue(ue({},O0,D0),R0,U0);var $0={kit:{"fa-kit":"fak"}},W0={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},H0={kit:{fak:"fa-kit"}},sf={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Zo,Ii={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},B0=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],V0="classic",Q0="duotone",Y0="sharp",q0="sharp-duotone",G0="chisel",X0="etch",K0="graphite",J0="jelly",Z0="jelly-duo",eg="jelly-fill",tg="notdog",ng="notdog-duo",rg="slab",ag="slab-press",ig="thumbprint",sg="utility",og="utility-duo",lg="utility-fill",cg="whiteboard",dg="Classic",ug="Duotone",fg="Sharp",mg="Sharp Duotone",pg="Chisel",hg="Etch",gg="Graphite",xg="Jelly",vg="Jelly Duo",yg="Jelly Fill",bg="Notdog",wg="Notdog Duo",jg="Slab",kg="Slab Press",Sg="Thumbprint",Ng="Utility",Cg="Utility Duo",Eg="Utility Fill",zg="Whiteboard";Zo={},ue(ue(ue(ue(ue(ue(ue(ue(ue(ue(Zo,V0,dg),Q0,ug),Y0,fg),q0,mg),G0,pg),X0,hg),K0,gg),J0,xg),Z0,vg),eg,yg),ue(ue(ue(ue(ue(ue(ue(ue(ue(Zo,tg,bg),ng,wg),rg,jg),ag,kg),ig,Sg),sg,Ng),og,Cg),lg,Eg),cg,zg);var Pg="kit",Ag="kit-duotone",Lg="Kit",_g="Kit Duotone";ue(ue({},Pg,Lg),Ag,_g);var Mg={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},Ig={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},ll={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},Fg=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],bm=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(B0,Fg),Tg=["solid","regular","light","thin","duotone","brands","semibold"],wm=[1,2,3,4,5,6,7,8,9,10],Og=wm.concat([11,12,13,14,15,16,17,18,19,20]),Rg=["aw","fw","pull-left","pull-right"],Dg=[].concat(Pt(Object.keys(Ig)),Tg,Rg,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",Ii.GROUP,Ii.SWAP_OPACITY,Ii.PRIMARY,Ii.SECONDARY]).concat(wm.map(function(i){return"".concat(i,"x")})).concat(Og.map(function(i){return"w-".concat(i)})),Ug={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},qt="___FONT_AWESOME___",cl=16,jm="fa",km="svg-inline--fa",On="data-fa-i2svg",dl="data-fa-pseudo-element",$g="data-fa-pseudo-element-pending",Al="data-prefix",Ll="data-icon",of="fontawesome-i2svg",Wg="async",Hg=["HTML","HEAD","STYLE","SCRIPT"],Sm=["::before","::after",":before",":after"],Nm=(function(){try{return!0}catch{return!1}})();function xa(i){return new Proxy(i,{get:function(s,d){return d in s?s[d]:s[Xe]}})}var Cm=Q({},Zf);Cm[Xe]=Q(Q(Q(Q({},{"fa-duotone":"duotone"}),Zf[Xe]),af.kit),af["kit-duotone"]);var Bg=xa(Cm),ul=Q({},F0);ul[Xe]=Q(Q(Q(Q({},{duotone:"fad"}),ul[Xe]),sf.kit),sf["kit-duotone"]);var lf=xa(ul),fl=Q({},ll);fl[Xe]=Q(Q({},fl[Xe]),H0.kit);var _l=xa(fl),ml=Q({},Mg);ml[Xe]=Q(Q({},ml[Xe]),$0.kit);xa(ml);var Vg=d0,Em="fa-layers-text",Qg=u0,Yg=Q({},_0);xa(Yg);var qg=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],el=f0,Gg=[].concat(Pt(T0),Pt(Dg)),ua=vn.FontAwesomeConfig||{};function Xg(i){var l=Le.querySelector("script["+i+"]");if(l)return l.getAttribute(i)}function Kg(i){return i===""?!0:i==="false"?!1:i==="true"?!0:i}if(Le&&typeof Le.querySelector=="function"){var Jg=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Jg.forEach(function(i){var l=Yi(i,2),s=l[0],d=l[1],u=Kg(Xg(s));u!=null&&(ua[d]=u)})}var zm={styleDefault:"solid",familyDefault:Xe,cssPrefix:jm,replacementClass:km,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ua.familyPrefix&&(ua.cssPrefix=ua.familyPrefix);var xr=Q(Q({},zm),ua);xr.autoReplaceSvg||(xr.observeMutations=!1);var ae={};Object.keys(zm).forEach(function(i){Object.defineProperty(ae,i,{enumerable:!0,set:function(s){xr[i]=s,fa.forEach(function(d){return d(ae)})},get:function(){return xr[i]}})});Object.defineProperty(ae,"familyPrefix",{enumerable:!0,set:function(l){xr.cssPrefix=l,fa.forEach(function(s){return s(ae)})},get:function(){return xr.cssPrefix}});vn.FontAwesomeConfig=ae;var fa=[];function Zg(i){return fa.push(i),function(){fa.splice(fa.indexOf(i),1)}}var ur=cl,Ot={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function e2(i){if(!(!i||!Kt)){var l=Le.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=i;for(var s=Le.head.childNodes,d=null,u=s.length-1;u>-1;u--){var h=s[u],v=(h.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(v)>-1&&(d=h)}return Le.head.insertBefore(l,d),i}}var t2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function cf(){for(var i=12,l="";i-- >0;)l+=t2[Math.random()*62|0];return l}function yr(i){for(var l=[],s=(i||[]).length>>>0;s--;)l[s]=i[s];return l}function Ml(i){return i.classList?yr(i.classList):(i.getAttribute("class")||"").split(" ").filter(function(l){return l})}function Pm(i){return"".concat(i).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function n2(i){return Object.keys(i||{}).reduce(function(l,s){return l+"".concat(s,'="').concat(Pm(i[s]),'" ')},"").trim()}function qi(i){return Object.keys(i||{}).reduce(function(l,s){return l+"".concat(s,": ").concat(i[s].trim(),";")},"")}function Il(i){return i.size!==Ot.size||i.x!==Ot.x||i.y!==Ot.y||i.rotate!==Ot.rotate||i.flipX||i.flipY}function r2(i){var l=i.transform,s=i.containerWidth,d=i.iconWidth,u={transform:"translate(".concat(s/2," 256)")},h="translate(".concat(l.x*32,", ").concat(l.y*32,") "),v="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),b="rotate(".concat(l.rotate," 0 0)"),f={transform:"".concat(h," ").concat(v," ").concat(b)},p={transform:"translate(".concat(d/2*-1," -256)")};return{outer:u,inner:f,path:p}}function a2(i){var l=i.transform,s=i.width,d=s===void 0?cl:s,u=i.height,h=u===void 0?cl:u,v="";return Jf?v+="translate(".concat(l.x/ur-d/2,"em, ").concat(l.y/ur-h/2,"em) "):v+="translate(calc(-50% + ".concat(l.x/ur,"em), calc(-50% + ").concat(l.y/ur,"em)) "),v+="scale(".concat(l.size/ur*(l.flipX?-1:1),", ").concat(l.size/ur*(l.flipY?-1:1),") "),v+="rotate(".concat(l.rotate,"deg) "),v}var i2=`:root, :host {
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
}`;function Am(){var i=jm,l=km,s=ae.cssPrefix,d=ae.replacementClass,u=i2;if(s!==i||d!==l){var h=new RegExp("\\.".concat(i,"\\-"),"g"),v=new RegExp("\\--".concat(i,"\\-"),"g"),b=new RegExp("\\.".concat(l),"g");u=u.replace(h,".".concat(s,"-")).replace(v,"--".concat(s,"-")).replace(b,".".concat(d))}return u}var df=!1;function tl(){ae.autoAddCss&&!df&&(e2(Am()),df=!0)}var s2={mixout:function(){return{dom:{css:Am,insertCss:tl}}},hooks:function(){return{beforeDOMElementCreation:function(){tl()},beforeI2svg:function(){tl()}}}},Gt=vn||{};Gt[qt]||(Gt[qt]={});Gt[qt].styles||(Gt[qt].styles={});Gt[qt].hooks||(Gt[qt].hooks={});Gt[qt].shims||(Gt[qt].shims=[]);var zt=Gt[qt],Lm=[],_m=function(){Le.removeEventListener("DOMContentLoaded",_m),Wi=1,Lm.map(function(l){return l()})},Wi=!1;Kt&&(Wi=(Le.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Le.readyState),Wi||Le.addEventListener("DOMContentLoaded",_m));function o2(i){Kt&&(Wi?setTimeout(i,0):Lm.push(i))}function va(i){var l=i.tag,s=i.attributes,d=s===void 0?{}:s,u=i.children,h=u===void 0?[]:u;return typeof i=="string"?Pm(i):"<".concat(l," ").concat(n2(d),">").concat(h.map(va).join(""),"</").concat(l,">")}function uf(i,l,s){if(i&&i[l]&&i[l][s])return{prefix:l,iconName:s,icon:i[l][s]}}var nl=function(l,s,d,u){var h=Object.keys(l),v=h.length,b=s,f,p,g;for(d===void 0?(f=1,g=l[h[0]]):(f=0,g=d);f<v;f++)p=h[f],g=b(g,l[p],p,l);return g};function Mm(i){return Pt(i).length!==1?null:i.codePointAt(0).toString(16)}function ff(i){return Object.keys(i).reduce(function(l,s){var d=i[s],u=!!d.icon;return u?l[d.iconName]=d.icon:l[s]=d,l},{})}function pl(i,l){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},d=s.skipHooks,u=d===void 0?!1:d,h=ff(l);typeof zt.hooks.addPack=="function"&&!u?zt.hooks.addPack(i,ff(l)):zt.styles[i]=Q(Q({},zt.styles[i]||{}),h),i==="fas"&&pl("fa",l)}var pa=zt.styles,l2=zt.shims,Im=Object.keys(_l),c2=Im.reduce(function(i,l){return i[l]=Object.keys(_l[l]),i},{}),Fl=null,Fm={},Tm={},Om={},Rm={},Dm={};function d2(i){return~Gg.indexOf(i)}function u2(i,l){var s=l.split("-"),d=s[0],u=s.slice(1).join("-");return d===i&&u!==""&&!d2(u)?u:null}var Um=function(){var l=function(h){return nl(pa,function(v,b,f){return v[f]=nl(b,h,{}),v},{})};Fm=l(function(u,h,v){if(h[3]&&(u[h[3]]=v),h[2]){var b=h[2].filter(function(f){return typeof f=="number"});b.forEach(function(f){u[f.toString(16)]=v})}return u}),Tm=l(function(u,h,v){if(u[v]=v,h[2]){var b=h[2].filter(function(f){return typeof f=="string"});b.forEach(function(f){u[f]=v})}return u}),Dm=l(function(u,h,v){var b=h[2];return u[v]=v,b.forEach(function(f){u[f]=v}),u});var s="far"in pa||ae.autoFetchSvg,d=nl(l2,function(u,h){var v=h[0],b=h[1],f=h[2];return b==="far"&&!s&&(b="fas"),typeof v=="string"&&(u.names[v]={prefix:b,iconName:f}),typeof v=="number"&&(u.unicodes[v.toString(16)]={prefix:b,iconName:f}),u},{names:{},unicodes:{}});Om=d.names,Rm=d.unicodes,Fl=Gi(ae.styleDefault,{family:ae.familyDefault})};Zg(function(i){Fl=Gi(i.styleDefault,{family:ae.familyDefault})});Um();function Tl(i,l){return(Fm[i]||{})[l]}function f2(i,l){return(Tm[i]||{})[l]}function Fn(i,l){return(Dm[i]||{})[l]}function $m(i){return Om[i]||{prefix:null,iconName:null}}function m2(i){var l=Rm[i],s=Tl("fas",i);return l||(s?{prefix:"fas",iconName:s}:null)||{prefix:null,iconName:null}}function yn(){return Fl}var Wm=function(){return{prefix:null,iconName:null,rest:[]}};function p2(i){var l=Xe,s=Im.reduce(function(d,u){return d[u]="".concat(ae.cssPrefix,"-").concat(u),d},{});return vm.forEach(function(d){(i.includes(s[d])||i.some(function(u){return c2[d].includes(u)}))&&(l=d)}),l}function Gi(i){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=l.family,d=s===void 0?Xe:s,u=Bg[d][i];if(d===ga&&!i)return"fad";var h=lf[d][i]||lf[d][u],v=i in zt.styles?i:null,b=h||v||null;return b}function h2(i){var l=[],s=null;return i.forEach(function(d){var u=u2(ae.cssPrefix,d);u?s=u:d&&l.push(d)}),{iconName:s,rest:l}}function mf(i){return i.sort().filter(function(l,s,d){return d.indexOf(l)===s})}var pf=bm.concat(ym);function Xi(i){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=l.skipLookups,d=s===void 0?!1:s,u=null,h=mf(i.filter(function(C){return pf.includes(C)})),v=mf(i.filter(function(C){return!pf.includes(C)})),b=h.filter(function(C){return u=C,!em.includes(C)}),f=Yi(b,1),p=f[0],g=p===void 0?null:p,x=p2(h),y=Q(Q({},h2(v)),{},{prefix:Gi(g,{family:x})});return Q(Q(Q({},y),y2({values:i,family:x,styles:pa,config:ae,canonical:y,givenPrefix:u})),g2(d,u,y))}function g2(i,l,s){var d=s.prefix,u=s.iconName;if(i||!d||!u)return{prefix:d,iconName:u};var h=l==="fa"?$m(u):{},v=Fn(d,u);return u=h.iconName||v||u,d=h.prefix||d,d==="far"&&!pa.far&&pa.fas&&!ae.autoFetchSvg&&(d="fas"),{prefix:d,iconName:u}}var x2=vm.filter(function(i){return i!==Xe||i!==ga}),v2=Object.keys(ll).filter(function(i){return i!==Xe}).map(function(i){return Object.keys(ll[i])}).flat();function y2(i){var l=i.values,s=i.family,d=i.canonical,u=i.givenPrefix,h=u===void 0?"":u,v=i.styles,b=v===void 0?{}:v,f=i.config,p=f===void 0?{}:f,g=s===ga,x=l.includes("fa-duotone")||l.includes("fad"),y=p.familyDefault==="duotone",C=d.prefix==="fad"||d.prefix==="fa-duotone";if(!g&&(x||y||C)&&(d.prefix="fad"),(l.includes("fa-brands")||l.includes("fab"))&&(d.prefix="fab"),!d.prefix&&x2.includes(s)){var L=Object.keys(b).find(function(_){return v2.includes(_)});if(L||p.autoFetchSvg){var T=I0.get(s).defaultShortPrefixId;d.prefix=T,d.iconName=Fn(d.prefix,d.iconName)||d.iconName}}return(d.prefix==="fa"||h==="fa")&&(d.prefix=yn()||"fas"),d}var b2=(function(){function i(){t0(this,i),this.definitions={}}return r0(i,[{key:"add",value:function(){for(var s=this,d=arguments.length,u=new Array(d),h=0;h<d;h++)u[h]=arguments[h];var v=u.reduce(this._pullDefinitions,{});Object.keys(v).forEach(function(b){s.definitions[b]=Q(Q({},s.definitions[b]||{}),v[b]),pl(b,v[b]);var f=_l[Xe][b];f&&pl(f,v[b]),Um()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(s,d){var u=d.prefix&&d.iconName&&d.icon?{0:d}:d;return Object.keys(u).map(function(h){var v=u[h],b=v.prefix,f=v.iconName,p=v.icon,g=p[2];s[b]||(s[b]={}),g.length>0&&g.forEach(function(x){typeof x=="string"&&(s[b][x]=p)}),s[b][f]=p}),s}}])})(),hf=[],pr={},gr={},w2=Object.keys(gr);function j2(i,l){var s=l.mixoutsTo;return hf=i,pr={},Object.keys(gr).forEach(function(d){w2.indexOf(d)===-1&&delete gr[d]}),hf.forEach(function(d){var u=d.mixout?d.mixout():{};if(Object.keys(u).forEach(function(v){typeof u[v]=="function"&&(s[v]=u[v]),$i(u[v])==="object"&&Object.keys(u[v]).forEach(function(b){s[v]||(s[v]={}),s[v][b]=u[v][b]})}),d.hooks){var h=d.hooks();Object.keys(h).forEach(function(v){pr[v]||(pr[v]=[]),pr[v].push(h[v])})}d.provides&&d.provides(gr)}),s}function hl(i,l){for(var s=arguments.length,d=new Array(s>2?s-2:0),u=2;u<s;u++)d[u-2]=arguments[u];var h=pr[i]||[];return h.forEach(function(v){l=v.apply(null,[l].concat(d))}),l}function Rn(i){for(var l=arguments.length,s=new Array(l>1?l-1:0),d=1;d<l;d++)s[d-1]=arguments[d];var u=pr[i]||[];u.forEach(function(h){h.apply(null,s)})}function bn(){var i=arguments[0],l=Array.prototype.slice.call(arguments,1);return gr[i]?gr[i].apply(null,l):void 0}function gl(i){i.prefix==="fa"&&(i.prefix="fas");var l=i.iconName,s=i.prefix||yn();if(l)return l=Fn(s,l)||l,uf(Hm.definitions,s,l)||uf(zt.styles,s,l)}var Hm=new b2,k2=function(){ae.autoReplaceSvg=!1,ae.observeMutations=!1,Rn("noAuto")},S2={i2svg:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Kt?(Rn("beforeI2svg",l),bn("pseudoElements2svg",l),bn("i2svg",l)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=l.autoReplaceSvgRoot;ae.autoReplaceSvg===!1&&(ae.autoReplaceSvg=!0),ae.observeMutations=!0,o2(function(){C2({autoReplaceSvgRoot:s}),Rn("watch",l)})}},N2={icon:function(l){if(l===null)return null;if($i(l)==="object"&&l.prefix&&l.iconName)return{prefix:l.prefix,iconName:Fn(l.prefix,l.iconName)||l.iconName};if(Array.isArray(l)&&l.length===2){var s=l[1].indexOf("fa-")===0?l[1].slice(3):l[1],d=Gi(l[0]);return{prefix:d,iconName:Fn(d,s)||s}}if(typeof l=="string"&&(l.indexOf("".concat(ae.cssPrefix,"-"))>-1||l.match(Vg))){var u=Xi(l.split(" "),{skipLookups:!0});return{prefix:u.prefix||yn(),iconName:Fn(u.prefix,u.iconName)||u.iconName}}if(typeof l=="string"){var h=yn();return{prefix:h,iconName:Fn(h,l)||l}}}},pt={noAuto:k2,config:ae,dom:S2,parse:N2,library:Hm,findIconDefinition:gl,toHtml:va},C2=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=l.autoReplaceSvgRoot,d=s===void 0?Le:s;(Object.keys(zt.styles).length>0||ae.autoFetchSvg)&&Kt&&ae.autoReplaceSvg&&pt.dom.i2svg({node:d})};function Ki(i,l){return Object.defineProperty(i,"abstract",{get:l}),Object.defineProperty(i,"html",{get:function(){return i.abstract.map(function(d){return va(d)})}}),Object.defineProperty(i,"node",{get:function(){if(Kt){var d=Le.createElement("div");return d.innerHTML=i.html,d.children}}}),i}function E2(i){var l=i.children,s=i.main,d=i.mask,u=i.attributes,h=i.styles,v=i.transform;if(Il(v)&&s.found&&!d.found){var b=s.width,f=s.height,p={x:b/f/2,y:.5};u.style=qi(Q(Q({},h),{},{"transform-origin":"".concat(p.x+v.x/16,"em ").concat(p.y+v.y/16,"em")}))}return[{tag:"svg",attributes:u,children:l}]}function z2(i){var l=i.prefix,s=i.iconName,d=i.children,u=i.attributes,h=i.symbol,v=h===!0?"".concat(l,"-").concat(ae.cssPrefix,"-").concat(s):h;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Q(Q({},u),{},{id:v}),children:d}]}]}function P2(i){var l=["aria-label","aria-labelledby","title","role"];return l.some(function(s){return s in i})}function Ol(i){var l=i.icons,s=l.main,d=l.mask,u=i.prefix,h=i.iconName,v=i.transform,b=i.symbol,f=i.maskId,p=i.extra,g=i.watchable,x=g===void 0?!1:g,y=d.found?d:s,C=y.width,L=y.height,T=[ae.replacementClass,h?"".concat(ae.cssPrefix,"-").concat(h):""].filter(function(q){return p.classes.indexOf(q)===-1}).filter(function(q){return q!==""||!!q}).concat(p.classes).join(" "),_={children:[],attributes:Q(Q({},p.attributes),{},{"data-prefix":u,"data-icon":h,class:T,role:p.attributes.role||"img",viewBox:"0 0 ".concat(C," ").concat(L)})};!P2(p.attributes)&&!p.attributes["aria-hidden"]&&(_.attributes["aria-hidden"]="true"),x&&(_.attributes[On]="");var R=Q(Q({},_),{},{prefix:u,iconName:h,main:s,mask:d,maskId:f,transform:v,symbol:b,styles:Q({},p.styles)}),M=d.found&&s.found?bn("generateAbstractMask",R)||{children:[],attributes:{}}:bn("generateAbstractIcon",R)||{children:[],attributes:{}},D=M.children,V=M.attributes;return R.children=D,R.attributes=V,b?z2(R):E2(R)}function gf(i){var l=i.content,s=i.width,d=i.height,u=i.transform,h=i.extra,v=i.watchable,b=v===void 0?!1:v,f=Q(Q({},h.attributes),{},{class:h.classes.join(" ")});b&&(f[On]="");var p=Q({},h.styles);Il(u)&&(p.transform=a2({transform:u,width:s,height:d}),p["-webkit-transform"]=p.transform);var g=qi(p);g.length>0&&(f.style=g);var x=[];return x.push({tag:"span",attributes:f,children:[l]}),x}function A2(i){var l=i.content,s=i.extra,d=Q(Q({},s.attributes),{},{class:s.classes.join(" ")}),u=qi(s.styles);u.length>0&&(d.style=u);var h=[];return h.push({tag:"span",attributes:d,children:[l]}),h}var rl=zt.styles;function xl(i){var l=i[0],s=i[1],d=i.slice(4),u=Yi(d,1),h=u[0],v=null;return Array.isArray(h)?v={tag:"g",attributes:{class:"".concat(ae.cssPrefix,"-").concat(el.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ae.cssPrefix,"-").concat(el.SECONDARY),fill:"currentColor",d:h[0]}},{tag:"path",attributes:{class:"".concat(ae.cssPrefix,"-").concat(el.PRIMARY),fill:"currentColor",d:h[1]}}]}:v={tag:"path",attributes:{fill:"currentColor",d:h}},{found:!0,width:l,height:s,icon:v}}var L2={found:!1,width:512,height:512};function _2(i,l){!Nm&&!ae.showMissingIcons&&i&&console.error('Icon with name "'.concat(i,'" and prefix "').concat(l,'" is missing.'))}function vl(i,l){var s=l;return l==="fa"&&ae.styleDefault!==null&&(l=yn()),new Promise(function(d,u){if(s==="fa"){var h=$m(i)||{};i=h.iconName||i,l=h.prefix||l}if(i&&l&&rl[l]&&rl[l][i]){var v=rl[l][i];return d(xl(v))}_2(i,l),d(Q(Q({},L2),{},{icon:ae.showMissingIcons&&i?bn("missingIconAbstract")||{}:{}}))})}var xf=function(){},yl=ae.measurePerformance&&Mi&&Mi.mark&&Mi.measure?Mi:{mark:xf,measure:xf},da='FA "7.2.0"',M2=function(l){return yl.mark("".concat(da," ").concat(l," begins")),function(){return Bm(l)}},Bm=function(l){yl.mark("".concat(da," ").concat(l," ends")),yl.measure("".concat(da," ").concat(l),"".concat(da," ").concat(l," begins"),"".concat(da," ").concat(l," ends"))},Rl={begin:M2,end:Bm},Ri=function(){};function vf(i){var l=i.getAttribute?i.getAttribute(On):null;return typeof l=="string"}function I2(i){var l=i.getAttribute?i.getAttribute(Al):null,s=i.getAttribute?i.getAttribute(Ll):null;return l&&s}function F2(i){return i&&i.classList&&i.classList.contains&&i.classList.contains(ae.replacementClass)}function T2(){if(ae.autoReplaceSvg===!0)return Di.replace;var i=Di[ae.autoReplaceSvg];return i||Di.replace}function O2(i){return Le.createElementNS("http://www.w3.org/2000/svg",i)}function R2(i){return Le.createElement(i)}function Vm(i){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=l.ceFn,d=s===void 0?i.tag==="svg"?O2:R2:s;if(typeof i=="string")return Le.createTextNode(i);var u=d(i.tag);Object.keys(i.attributes||[]).forEach(function(v){u.setAttribute(v,i.attributes[v])});var h=i.children||[];return h.forEach(function(v){u.appendChild(Vm(v,{ceFn:d}))}),u}function D2(i){var l=" ".concat(i.outerHTML," ");return l="".concat(l,"Font Awesome fontawesome.com "),l}var Di={replace:function(l){var s=l[0];if(s.parentNode)if(l[1].forEach(function(u){s.parentNode.insertBefore(Vm(u),s)}),s.getAttribute(On)===null&&ae.keepOriginalSource){var d=Le.createComment(D2(s));s.parentNode.replaceChild(d,s)}else s.remove()},nest:function(l){var s=l[0],d=l[1];if(~Ml(s).indexOf(ae.replacementClass))return Di.replace(l);var u=new RegExp("".concat(ae.cssPrefix,"-.*"));if(delete d[0].attributes.id,d[0].attributes.class){var h=d[0].attributes.class.split(" ").reduce(function(b,f){return f===ae.replacementClass||f.match(u)?b.toSvg.push(f):b.toNode.push(f),b},{toNode:[],toSvg:[]});d[0].attributes.class=h.toSvg.join(" "),h.toNode.length===0?s.removeAttribute("class"):s.setAttribute("class",h.toNode.join(" "))}var v=d.map(function(b){return va(b)}).join(`
`);s.setAttribute(On,""),s.innerHTML=v}};function yf(i){i()}function Qm(i,l){var s=typeof l=="function"?l:Ri;if(i.length===0)s();else{var d=yf;ae.mutateApproach===Wg&&(d=vn.requestAnimationFrame||yf),d(function(){var u=T2(),h=Rl.begin("mutate");i.map(u),h(),s()})}}var Dl=!1;function Ym(){Dl=!0}function bl(){Dl=!1}var Hi=null;function bf(i){if(rf&&ae.observeMutations){var l=i.treeCallback,s=l===void 0?Ri:l,d=i.nodeCallback,u=d===void 0?Ri:d,h=i.pseudoElementsCallback,v=h===void 0?Ri:h,b=i.observeMutationsRoot,f=b===void 0?Le:b;Hi=new rf(function(p){if(!Dl){var g=yn();yr(p).forEach(function(x){if(x.type==="childList"&&x.addedNodes.length>0&&!vf(x.addedNodes[0])&&(ae.searchPseudoElements&&v(x.target),s(x.target)),x.type==="attributes"&&x.target.parentNode&&ae.searchPseudoElements&&v([x.target],!0),x.type==="attributes"&&vf(x.target)&&~qg.indexOf(x.attributeName))if(x.attributeName==="class"&&I2(x.target)){var y=Xi(Ml(x.target)),C=y.prefix,L=y.iconName;x.target.setAttribute(Al,C||g),L&&x.target.setAttribute(Ll,L)}else F2(x.target)&&u(x.target)})}}),Kt&&Hi.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function U2(){Hi&&Hi.disconnect()}function $2(i){var l=i.getAttribute("style"),s=[];return l&&(s=l.split(";").reduce(function(d,u){var h=u.split(":"),v=h[0],b=h.slice(1);return v&&b.length>0&&(d[v]=b.join(":").trim()),d},{})),s}function W2(i){var l=i.getAttribute("data-prefix"),s=i.getAttribute("data-icon"),d=i.innerText!==void 0?i.innerText.trim():"",u=Xi(Ml(i));return u.prefix||(u.prefix=yn()),l&&s&&(u.prefix=l,u.iconName=s),u.iconName&&u.prefix||(u.prefix&&d.length>0&&(u.iconName=f2(u.prefix,i.innerText)||Tl(u.prefix,Mm(i.innerText))),!u.iconName&&ae.autoFetchSvg&&i.firstChild&&i.firstChild.nodeType===Node.TEXT_NODE&&(u.iconName=i.firstChild.data)),u}function H2(i){var l=yr(i.attributes).reduce(function(s,d){return s.name!=="class"&&s.name!=="style"&&(s[d.name]=d.value),s},{});return l}function B2(){return{iconName:null,prefix:null,transform:Ot,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function wf(i){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},s=W2(i),d=s.iconName,u=s.prefix,h=s.rest,v=H2(i),b=hl("parseNodeAttributes",{},i),f=l.styleParser?$2(i):[];return Q({iconName:d,prefix:u,transform:Ot,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:h,styles:f,attributes:v}},b)}var V2=zt.styles;function qm(i){var l=ae.autoReplaceSvg==="nest"?wf(i,{styleParser:!1}):wf(i);return~l.extra.classes.indexOf(Em)?bn("generateLayersText",i,l):bn("generateSvgReplacementMutation",i,l)}function Q2(){return[].concat(Pt(ym),Pt(bm))}function jf(i){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Kt)return Promise.resolve();var s=Le.documentElement.classList,d=function(x){return s.add("".concat(of,"-").concat(x))},u=function(x){return s.remove("".concat(of,"-").concat(x))},h=ae.autoFetchSvg?Q2():em.concat(Object.keys(V2));h.includes("fa")||h.push("fa");var v=[".".concat(Em,":not([").concat(On,"])")].concat(h.map(function(g){return".".concat(g,":not([").concat(On,"])")})).join(", ");if(v.length===0)return Promise.resolve();var b=[];try{b=yr(i.querySelectorAll(v))}catch{}if(b.length>0)d("pending"),u("complete");else return Promise.resolve();var f=Rl.begin("onTree"),p=b.reduce(function(g,x){try{var y=qm(x);y&&g.push(y)}catch(C){Nm||C.name==="MissingIcon"&&console.error(C)}return g},[]);return new Promise(function(g,x){Promise.all(p).then(function(y){Qm(y,function(){d("active"),d("complete"),u("pending"),typeof l=="function"&&l(),f(),g()})}).catch(function(y){f(),x(y)})})}function Y2(i){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;qm(i).then(function(s){s&&Qm([s],l)})}function q2(i){return function(l){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},d=(l||{}).icon?l:gl(l||{}),u=s.mask;return u&&(u=(u||{}).icon?u:gl(u||{})),i(d,Q(Q({},s),{},{mask:u}))}}var G2=function(l){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},d=s.transform,u=d===void 0?Ot:d,h=s.symbol,v=h===void 0?!1:h,b=s.mask,f=b===void 0?null:b,p=s.maskId,g=p===void 0?null:p,x=s.classes,y=x===void 0?[]:x,C=s.attributes,L=C===void 0?{}:C,T=s.styles,_=T===void 0?{}:T;if(l){var R=l.prefix,M=l.iconName,D=l.icon;return Ki(Q({type:"icon"},l),function(){return Rn("beforeDOMElementCreation",{iconDefinition:l,params:s}),Ol({icons:{main:xl(D),mask:f?xl(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:R,iconName:M,transform:Q(Q({},Ot),u),symbol:v,maskId:g,extra:{attributes:L,styles:_,classes:y}})})}},X2={mixout:function(){return{icon:q2(G2)}},hooks:function(){return{mutationObserverCallbacks:function(s){return s.treeCallback=jf,s.nodeCallback=Y2,s}}},provides:function(l){l.i2svg=function(s){var d=s.node,u=d===void 0?Le:d,h=s.callback,v=h===void 0?function(){}:h;return jf(u,v)},l.generateSvgReplacementMutation=function(s,d){var u=d.iconName,h=d.prefix,v=d.transform,b=d.symbol,f=d.mask,p=d.maskId,g=d.extra;return new Promise(function(x,y){Promise.all([vl(u,h),f.iconName?vl(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var L=Yi(C,2),T=L[0],_=L[1];x([s,Ol({icons:{main:T,mask:_},prefix:h,iconName:u,transform:v,symbol:b,maskId:p,extra:g,watchable:!0})])}).catch(y)})},l.generateAbstractIcon=function(s){var d=s.children,u=s.attributes,h=s.main,v=s.transform,b=s.styles,f=qi(b);f.length>0&&(u.style=f);var p;return Il(v)&&(p=bn("generateAbstractTransformGrouping",{main:h,transform:v,containerWidth:h.width,iconWidth:h.width})),d.push(p||h.icon),{children:d,attributes:u}}}},K2={mixout:function(){return{layer:function(s){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=d.classes,h=u===void 0?[]:u;return Ki({type:"layer"},function(){Rn("beforeDOMElementCreation",{assembler:s,params:d});var v=[];return s(function(b){Array.isArray(b)?b.map(function(f){v=v.concat(f.abstract)}):v=v.concat(b.abstract)}),[{tag:"span",attributes:{class:["".concat(ae.cssPrefix,"-layers")].concat(Pt(h)).join(" ")},children:v}]})}}}},J2={mixout:function(){return{counter:function(s){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};d.title;var u=d.classes,h=u===void 0?[]:u,v=d.attributes,b=v===void 0?{}:v,f=d.styles,p=f===void 0?{}:f;return Ki({type:"counter",content:s},function(){return Rn("beforeDOMElementCreation",{content:s,params:d}),A2({content:s.toString(),extra:{attributes:b,styles:p,classes:["".concat(ae.cssPrefix,"-layers-counter")].concat(Pt(h))}})})}}}},Z2={mixout:function(){return{text:function(s){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=d.transform,h=u===void 0?Ot:u,v=d.classes,b=v===void 0?[]:v,f=d.attributes,p=f===void 0?{}:f,g=d.styles,x=g===void 0?{}:g;return Ki({type:"text",content:s},function(){return Rn("beforeDOMElementCreation",{content:s,params:d}),gf({content:s,transform:Q(Q({},Ot),h),extra:{attributes:p,styles:x,classes:["".concat(ae.cssPrefix,"-layers-text")].concat(Pt(b))}})})}}},provides:function(l){l.generateLayersText=function(s,d){var u=d.transform,h=d.extra,v=null,b=null;if(Jf){var f=parseInt(getComputedStyle(s).fontSize,10),p=s.getBoundingClientRect();v=p.width/f,b=p.height/f}return Promise.resolve([s,gf({content:s.innerHTML,width:v,height:b,transform:u,extra:h,watchable:!0})])}}},Gm=new RegExp('"',"ug"),kf=[1105920,1112319],Sf=Q(Q(Q(Q({},{FontAwesome:{normal:"fas",400:"fas"}}),M0),Ug),W0),wl=Object.keys(Sf).reduce(function(i,l){return i[l.toLowerCase()]=Sf[l],i},{}),ex=Object.keys(wl).reduce(function(i,l){var s=wl[l];return i[l]=s[900]||Pt(Object.entries(s))[0][1],i},{});function tx(i){var l=i.replace(Gm,"");return Mm(Pt(l)[0]||"")}function nx(i){var l=i.getPropertyValue("font-feature-settings").includes("ss01"),s=i.getPropertyValue("content"),d=s.replace(Gm,""),u=d.codePointAt(0),h=u>=kf[0]&&u<=kf[1],v=d.length===2?d[0]===d[1]:!1;return h||v||l}function rx(i,l){var s=i.replace(/^['"]|['"]$/g,"").toLowerCase(),d=parseInt(l),u=isNaN(d)?"normal":d;return(wl[s]||{})[u]||ex[s]}function Nf(i,l){var s="".concat($g).concat(l.replace(":","-"));return new Promise(function(d,u){if(i.getAttribute(s)!==null)return d();var h=yr(i.children),v=h.filter(function(G){return G.getAttribute(dl)===l})[0],b=vn.getComputedStyle(i,l),f=b.getPropertyValue("font-family"),p=f.match(Qg),g=b.getPropertyValue("font-weight"),x=b.getPropertyValue("content");if(v&&!p)return i.removeChild(v),d();if(p&&x!=="none"&&x!==""){var y=b.getPropertyValue("content"),C=rx(f,g),L=tx(y),T=p[0].startsWith("FontAwesome"),_=nx(b),R=Tl(C,L),M=R;if(T){var D=m2(L);D.iconName&&D.prefix&&(R=D.iconName,C=D.prefix)}if(R&&!_&&(!v||v.getAttribute(Al)!==C||v.getAttribute(Ll)!==M)){i.setAttribute(s,M),v&&i.removeChild(v);var V=B2(),q=V.extra;q.attributes[dl]=l,vl(R,C).then(function(G){var re=Ol(Q(Q({},V),{},{icons:{main:G,mask:Wm()},prefix:C,iconName:M,extra:q,watchable:!0})),de=Le.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?i.insertBefore(de,i.firstChild):i.appendChild(de),de.outerHTML=re.map(function(X){return va(X)}).join(`
`),i.removeAttribute(s),d()}).catch(u)}else d()}else d()})}function ax(i){return Promise.all([Nf(i,"::before"),Nf(i,"::after")])}function ix(i){return i.parentNode!==document.head&&!~Hg.indexOf(i.tagName.toUpperCase())&&!i.getAttribute(dl)&&(!i.parentNode||i.parentNode.tagName!=="svg")}var sx=function(l){return!!l&&Sm.some(function(s){return l.includes(s)})},ox=function(l){if(!l)return[];var s=new Set,d=l.split(/,(?![^()]*\))/).map(function(f){return f.trim()});d=d.flatMap(function(f){return f.includes("(")?f:f.split(",").map(function(p){return p.trim()})});var u=Oi(d),h;try{for(u.s();!(h=u.n()).done;){var v=h.value;if(sx(v)){var b=Sm.reduce(function(f,p){return f.replace(p,"")},v);b!==""&&b!=="*"&&s.add(b)}}}catch(f){u.e(f)}finally{u.f()}return s};function Cf(i){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Kt){var s;if(l)s=i;else if(ae.searchPseudoElementsFullScan)s=i.querySelectorAll("*");else{var d=new Set,u=Oi(document.styleSheets),h;try{for(u.s();!(h=u.n()).done;){var v=h.value;try{var b=Oi(v.cssRules),f;try{for(b.s();!(f=b.n()).done;){var p=f.value,g=ox(p.selectorText),x=Oi(g),y;try{for(x.s();!(y=x.n()).done;){var C=y.value;d.add(C)}}catch(T){x.e(T)}finally{x.f()}}}catch(T){b.e(T)}finally{b.f()}}catch(T){ae.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(v.href," (").concat(T.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(T){u.e(T)}finally{u.f()}if(!d.size)return;var L=Array.from(d).join(", ");try{s=i.querySelectorAll(L)}catch{}}return new Promise(function(T,_){var R=yr(s).filter(ix).map(ax),M=Rl.begin("searchPseudoElements");Ym(),Promise.all(R).then(function(){M(),bl(),T()}).catch(function(){M(),bl(),_()})})}}var lx={hooks:function(){return{mutationObserverCallbacks:function(s){return s.pseudoElementsCallback=Cf,s}}},provides:function(l){l.pseudoElements2svg=function(s){var d=s.node,u=d===void 0?Le:d;ae.searchPseudoElements&&Cf(u)}}},Ef=!1,cx={mixout:function(){return{dom:{unwatch:function(){Ym(),Ef=!0}}}},hooks:function(){return{bootstrap:function(){bf(hl("mutationObserverCallbacks",{}))},noAuto:function(){U2()},watch:function(s){var d=s.observeMutationsRoot;Ef?bl():bf(hl("mutationObserverCallbacks",{observeMutationsRoot:d}))}}}},zf=function(l){var s={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return l.toLowerCase().split(" ").reduce(function(d,u){var h=u.toLowerCase().split("-"),v=h[0],b=h.slice(1).join("-");if(v&&b==="h")return d.flipX=!0,d;if(v&&b==="v")return d.flipY=!0,d;if(b=parseFloat(b),isNaN(b))return d;switch(v){case"grow":d.size=d.size+b;break;case"shrink":d.size=d.size-b;break;case"left":d.x=d.x-b;break;case"right":d.x=d.x+b;break;case"up":d.y=d.y-b;break;case"down":d.y=d.y+b;break;case"rotate":d.rotate=d.rotate+b;break}return d},s)},dx={mixout:function(){return{parse:{transform:function(s){return zf(s)}}}},hooks:function(){return{parseNodeAttributes:function(s,d){var u=d.getAttribute("data-fa-transform");return u&&(s.transform=zf(u)),s}}},provides:function(l){l.generateAbstractTransformGrouping=function(s){var d=s.main,u=s.transform,h=s.containerWidth,v=s.iconWidth,b={transform:"translate(".concat(h/2," 256)")},f="translate(".concat(u.x*32,", ").concat(u.y*32,") "),p="scale(".concat(u.size/16*(u.flipX?-1:1),", ").concat(u.size/16*(u.flipY?-1:1),") "),g="rotate(".concat(u.rotate," 0 0)"),x={transform:"".concat(f," ").concat(p," ").concat(g)},y={transform:"translate(".concat(v/2*-1," -256)")},C={outer:b,inner:x,path:y};return{tag:"g",attributes:Q({},C.outer),children:[{tag:"g",attributes:Q({},C.inner),children:[{tag:d.icon.tag,children:d.icon.children,attributes:Q(Q({},d.icon.attributes),C.path)}]}]}}}},al={x:0,y:0,width:"100%",height:"100%"};function Pf(i){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return i.attributes&&(i.attributes.fill||l)&&(i.attributes.fill="black"),i}function ux(i){return i.tag==="g"?i.children:[i]}var fx={hooks:function(){return{parseNodeAttributes:function(s,d){var u=d.getAttribute("data-fa-mask"),h=u?Xi(u.split(" ").map(function(v){return v.trim()})):Wm();return h.prefix||(h.prefix=yn()),s.mask=h,s.maskId=d.getAttribute("data-fa-mask-id"),s}}},provides:function(l){l.generateAbstractMask=function(s){var d=s.children,u=s.attributes,h=s.main,v=s.mask,b=s.maskId,f=s.transform,p=h.width,g=h.icon,x=v.width,y=v.icon,C=r2({transform:f,containerWidth:x,iconWidth:p}),L={tag:"rect",attributes:Q(Q({},al),{},{fill:"white"})},T=g.children?{children:g.children.map(Pf)}:{},_={tag:"g",attributes:Q({},C.inner),children:[Pf(Q({tag:g.tag,attributes:Q(Q({},g.attributes),C.path)},T))]},R={tag:"g",attributes:Q({},C.outer),children:[_]},M="mask-".concat(b||cf()),D="clip-".concat(b||cf()),V={tag:"mask",attributes:Q(Q({},al),{},{id:M,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[L,R]},q={tag:"defs",children:[{tag:"clipPath",attributes:{id:D},children:ux(y)},V]};return d.push(q,{tag:"rect",attributes:Q({fill:"currentColor","clip-path":"url(#".concat(D,")"),mask:"url(#".concat(M,")")},al)}),{children:d,attributes:u}}}},mx={provides:function(l){var s=!1;vn.matchMedia&&(s=vn.matchMedia("(prefers-reduced-motion: reduce)").matches),l.missingIconAbstract=function(){var d=[],u={fill:"currentColor"},h={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};d.push({tag:"path",attributes:Q(Q({},u),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var v=Q(Q({},h),{},{attributeName:"opacity"}),b={tag:"circle",attributes:Q(Q({},u),{},{cx:"256",cy:"364",r:"28"}),children:[]};return s||b.children.push({tag:"animate",attributes:Q(Q({},h),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Q(Q({},v),{},{values:"1;0;1;1;0;1;"})}),d.push(b),d.push({tag:"path",attributes:Q(Q({},u),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:s?[]:[{tag:"animate",attributes:Q(Q({},v),{},{values:"1;0;0;0;0;1;"})}]}),s||d.push({tag:"path",attributes:Q(Q({},u),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Q(Q({},v),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:d}}}},px={hooks:function(){return{parseNodeAttributes:function(s,d){var u=d.getAttribute("data-fa-symbol"),h=u===null?!1:u===""?!0:u;return s.symbol=h,s}}}},hx=[s2,X2,K2,J2,Z2,lx,cx,dx,fx,mx,px];j2(hx,{mixoutsTo:pt});pt.noAuto;var vr=pt.config;pt.library;pt.dom;var Xm=pt.parse;pt.findIconDefinition;pt.toHtml;var gx=pt.icon;pt.layer;pt.text;pt.counter;function xx(i){return i=i-0,i===i}function Km(i){return xx(i)?i:(i=i.replace(/[_-]+(.)?/g,(l,s)=>s?s.toUpperCase():""),i.charAt(0).toLowerCase()+i.slice(1))}var vx=(i,l)=>Te.createElement("stop",{key:`${l}-${i.offset}`,offset:i.offset,stopColor:i.color,...i.opacity!==void 0&&{stopOpacity:i.opacity}});function yx(i){return i.charAt(0).toUpperCase()+i.slice(1)}var fr=new Map,bx=1e3;function wx(i){if(fr.has(i))return fr.get(i);const l={};let s=0;const d=i.length;for(;s<d;){const u=i.indexOf(";",s),h=u===-1?d:u,v=i.slice(s,h).trim();if(v){const b=v.indexOf(":");if(b>0){const f=v.slice(0,b).trim(),p=v.slice(b+1).trim();if(f&&p){const g=Km(f);l[g.startsWith("webkit")?yx(g):g]=p}}}s=h+1}if(fr.size===bx){const u=fr.keys().next().value;u&&fr.delete(u)}return fr.set(i,l),l}function Jm(i,l,s={}){if(typeof l=="string")return l;const d=(l.children||[]).map(x=>{let y=x;return("fill"in s||s.gradientFill)&&x.tag==="path"&&"fill"in x.attributes&&(y={...x,attributes:{...x.attributes,fill:void 0}}),Jm(i,y)}),u=l.attributes||{},h={};for(const[x,y]of Object.entries(u))switch(!0){case x==="class":{h.className=y;break}case x==="style":{h.style=wx(String(y));break}case x.startsWith("aria-"):case x.startsWith("data-"):{h[x.toLowerCase()]=y;break}default:h[Km(x)]=y}const{style:v,role:b,"aria-label":f,gradientFill:p,...g}=s;if(v&&(h.style=h.style?{...h.style,...v}:v),b&&(h.role=b),f&&(h["aria-label"]=f,h["aria-hidden"]="false"),p){h.fill=`url(#${p.id})`;const{type:x,stops:y=[],...C}=p;d.unshift(i(x==="linear"?"linearGradient":"radialGradient",{...C,id:p.id},y.map(vx)))}return i(l.tag,{...h,...g},...d)}var jx=Jm.bind(null,Te.createElement),Af=(i,l)=>{const s=z.useId();return i||(l?s:void 0)},kx=class{constructor(i="react-fontawesome"){this.enabled=!1;let l=!1;try{l=typeof process<"u"&&!1}catch{}this.scope=i,this.enabled=l}log(...i){this.enabled&&console.log(`[${this.scope}]`,...i)}warn(...i){this.enabled&&console.warn(`[${this.scope}]`,...i)}error(...i){this.enabled&&console.error(`[${this.scope}]`,...i)}},Sx="searchPseudoElementsFullScan"in vr&&typeof vr.searchPseudoElementsFullScan=="boolean"?"7.0.0":"6.0.0",Nx=Number.parseInt(Sx)>=7,Cx=()=>Nx,ma="fa",Qt={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},Ex={left:"fa-pull-left",right:"fa-pull-right"},zx={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},Px={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},Yt={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function Ax(i){const l=vr.cssPrefix||vr.familyPrefix||ma;return l===ma?i:i.replace(new RegExp(String.raw`(?<=^|\s)${ma}-`,"g"),`${l}-`)}function Lx(i){const{beat:l,fade:s,beatFade:d,bounce:u,shake:h,spin:v,spinPulse:b,spinReverse:f,pulse:p,fixedWidth:g,inverse:x,border:y,flip:C,size:L,rotation:T,pull:_,swapOpacity:R,rotateBy:M,widthAuto:D,className:V}=i,q=[];return V&&q.push(...V.split(" ")),l&&q.push(Qt.beat),s&&q.push(Qt.fade),d&&q.push(Qt.beatFade),u&&q.push(Qt.bounce),h&&q.push(Qt.shake),v&&q.push(Qt.spin),f&&q.push(Qt.spinReverse),b&&q.push(Qt.spinPulse),p&&q.push(Qt.pulse),g&&q.push(Yt.fixedWidth),x&&q.push(Yt.inverse),y&&q.push(Yt.border),C===!0&&q.push(Yt.flip),(C==="horizontal"||C==="both")&&q.push(Yt.flipHorizontal),(C==="vertical"||C==="both")&&q.push(Yt.flipVertical),L!=null&&q.push(Px[L]),T!=null&&T!==0&&q.push(zx[T]),_!=null&&q.push(Ex[_]),R&&q.push(Yt.swapOpacity),Cx()?(M&&q.push(Yt.rotateBy),D&&q.push(Yt.widthAuto),(vr.cssPrefix||vr.familyPrefix||ma)===ma?q:q.map(Ax)):q}var _x=i=>typeof i=="object"&&"icon"in i&&!!i.icon;function Lf(i){if(i)return _x(i)?i:Xm.icon(i)}function Mx(i){return Object.keys(i)}var _f=new kx("FontAwesomeIcon"),Zm={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},Ix=new Set(Object.keys(Zm)),H=Te.forwardRef((i,l)=>{const s={...Zm,...i},{icon:d,mask:u,symbol:h,title:v,titleId:b,maskId:f,transform:p}=s,g=Af(f,!!u),x=Af(b,!!v),y=Lf(d);if(!y)return _f.error("Icon lookup is undefined",d),null;const C=Lx(s),L=typeof p=="string"?Xm.transform(p):p,T=Lf(u),_=gx(y,{...C.length>0&&{classes:C},...L&&{transform:L},...T&&{mask:T},symbol:h,title:v,titleId:x,maskId:g});if(!_)return _f.error("Could not find icon",y),null;const{abstract:R}=_,M={ref:l};for(const D of Mx(s))Ix.has(D)||(M[D]=s[D]);return jx(R[0],M)});H.displayName="FontAwesomeIcon";/*!
 * Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */var Ul={prefix:"fas",iconName:"rotate",icon:[512,512,[128260,"sync-alt"],"f2f1","M480.1 192l7.9 0c13.3 0 24-10.7 24-24l0-144c0-9.7-5.8-18.5-14.8-22.2S477.9 .2 471 7L419.3 58.8C375 22.1 318 0 256 0 127 0 20.3 95.4 2.6 219.5 .1 237 12.2 253.2 29.7 255.7s33.7-9.7 36.2-27.1C79.2 135.5 159.3 64 256 64 300.4 64 341.2 79 373.7 104.3L327 151c-6.9 6.9-8.9 17.2-5.2 26.2S334.3 192 344 192l136.1 0zm29.4 100.5c2.5-17.5-9.7-33.7-27.1-36.2s-33.7 9.7-36.2 27.1c-13.3 93-93.4 164.5-190.1 164.5-44.4 0-85.2-15-117.7-40.3L185 361c6.9-6.9 8.9-17.2 5.2-26.2S177.7 320 168 320L24 320c-13.3 0-24 10.7-24 24L0 488c0 9.7 5.8 18.5 14.8 22.2S34.1 511.8 41 505l51.8-51.8C137 489.9 194 512 256 512 385 512 491.7 416.6 509.4 292.5z"]},Fx={prefix:"fas",iconName:"gears",icon:[640,512,["cogs"],"f085","M415.9 210.5c12.2-3.3 25 2.5 30.5 13.8L465 261.9c10.3 1.4 20.4 4.2 29.9 8.1l35-23.3c10.5-7 24.4-5.6 33.3 3.3l19.2 19.2c8.9 8.9 10.3 22.9 3.3 33.3l-23.3 34.9c1.9 4.7 3.6 9.6 5 14.7 1.4 5.1 2.3 10.1 3 15.2l37.7 18.6c11.3 5.6 17.1 18.4 13.8 30.5l-7 26.2c-3.3 12.1-14.6 20.3-27.2 19.5l-42-2.7c-6.3 8.1-13.6 15.6-21.9 22l2.7 41.9c.8 12.6-7.4 24-19.5 27.2l-26.2 7c-12.2 3.3-24.9-2.5-30.5-13.8l-18.6-37.6c-10.3-1.4-20.4-4.2-29.9-8.1l-35 23.3c-10.5 7-24.4 5.6-33.3-3.3l-19.2-19.2c-8.9-8.9-10.3-22.8-3.3-33.3l23.3-35c-1.9-4.7-3.6-9.6-5-14.7s-2.3-10.2-3-15.2l-37.7-18.6c-11.3-5.6-17-18.4-13.8-30.5l7-26.2c3.3-12.1 14.6-20.3 27.2-19.5l41.9 2.7c6.3-8.1 13.6-15.6 21.9-22l-2.7-41.8c-.8-12.6 7.4-24 19.5-27.2l26.2-7zM448.4 340a44 44 0 1 0 .1 88 44 44 0 1 0 -.1-88zM224.9-45.5l26.2 7c12.1 3.3 20.3 14.7 19.5 27.2l-2.7 41.8c8.3 6.4 15.6 13.8 21.9 22l42-2.7c12.5-.8 23.9 7.4 27.2 19.5l7 26.2c3.2 12.1-2.5 24.9-13.8 30.5l-37.7 18.6c-.7 5.1-1.7 10.2-3 15.2s-3.1 10-5 14.7l23.3 35c7 10.5 5.6 24.4-3.3 33.3L307.3 262c-8.9 8.9-22.8 10.3-33.3 3.3L239 242c-9.5 3.9-19.6 6.7-29.9 8.1l-18.6 37.6c-5.6 11.3-18.4 17-30.5 13.8l-26.2-7c-12.2-3.3-20.3-14.7-19.5-27.2l2.7-41.9c-8.3-6.4-15.6-13.8-21.9-22l-42 2.7c-12.5 .8-23.9-7.4-27.2-19.5l-7-26.2c-3.2-12.1 2.5-24.9 13.8-30.5l37.7-18.6c.7-5.1 1.7-10.1 3-15.2 1.4-5.1 3-10 5-14.7L55.1 46.5c-7-10.5-5.6-24.4 3.3-33.3L77.6-6c8.9-8.9 22.8-10.3 33.3-3.3l35 23.3c9.5-3.9 19.6-6.7 29.9-8.1l18.6-37.6c5.6-11.3 18.3-17 30.5-13.8zM192.4 84a44 44 0 1 0 0 88 44 44 0 1 0 0-88z"]},Tx={prefix:"fas",iconName:"file-arrow-down",icon:[384,512,["file-download"],"f56d","M0 64C0 28.7 28.7 0 64 0L213.5 0c17 0 33.3 6.7 45.3 18.7L365.3 125.3c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm208-5.5l0 93.5c0 13.3 10.7 24 24 24L325.5 176 208 58.5zM175 441c9.4 9.4 24.6 9.4 33.9 0l64-64c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-23 23 0-86.1c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 86.1-23-23c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64z"]},jl={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"]},Ox={prefix:"fas",iconName:"ban",icon:[512,512,[128683,"cancel"],"f05e","M367.2 412.5L99.5 144.8c-22.4 31.4-35.5 69.8-35.5 111.2 0 106 86 192 192 192 41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3c22.4-31.4 35.5-69.8 35.5-111.2 0-106-86-192-192-192-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"]},Bi={prefix:"fas",iconName:"key",icon:[512,512,[128273],"f084","M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0 160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"]},ep={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6-46.8 43.5-78.1 95.4-93 131.1-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.7-8.4-1 10.9-.1 22.1 2.9 33.2 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-12.2-45.7-55.5-74.8-101.1-70.8 5.3 9.3 8.4 20.1 8.4 31.7z"]},br={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"]},Rx={prefix:"fas",iconName:"clipboard-check",icon:[384,512,[],"f46c","M256 0c23.7 0 44.4 12.9 55.4 32l8.6 0c35.3 0 64 28.7 64 64l0 352c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l8.6 0C83.6 12.9 104.3 0 128 0L256 0zm26.9 212.6c-10.7-7.8-25.7-5.4-33.5 5.3l-85.6 117.7-26.5-27.4c-9.2-9.5-24.4-9.8-33.9-.6s-9.8 24.4-.6 33.9l46.4 48c4.9 5.1 11.8 7.8 18.9 7.3s13.6-4.1 17.8-9.8L288.2 246.1c7.8-10.7 5.4-25.7-5.3-33.5zM136 64c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L136 64z"]},ya={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},Dx={prefix:"fas",iconName:"book",icon:[448,512,[128212],"f02d","M384 512L96 512c-53 0-96-43-96-96L0 96C0 43 43 0 96 0L400 0c26.5 0 48 21.5 48 48l0 288c0 20.9-13.4 38.7-32 45.3l0 66.7c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0zM96 384c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0 0-64-256 0zm32-232c0 13.3 10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0c-13.3 0-24 10.7-24 24zm24 72c-13.3 0-24 10.7-24 24s10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0z"]},$l={prefix:"fas",iconName:"paper-plane",icon:[576,512,[61913],"f1d8","M536.4-26.3c9.8-3.5 20.6-1 28 6.3s9.8 18.2 6.3 28l-178 496.9c-5 13.9-18.1 23.1-32.8 23.1-14.2 0-27-8.6-32.3-21.7l-64.2-158c-4.5-11-2.5-23.6 5.2-32.6l94.5-112.4c5.1-6.1 4.7-15-.9-20.6s-14.6-6-20.6-.9L229.2 276.1c-9.1 7.6-21.6 9.6-32.6 5.2L38.1 216.8c-13.1-5.3-21.7-18.1-21.7-32.3 0-14.7 9.2-27.8 23.1-32.8l496.9-178z"]},Ux={prefix:"fas",iconName:"print",icon:[512,512,[128424,128438,9113],"f02f","M64 64C64 28.7 92.7 0 128 0L341.5 0c17 0 33.3 6.7 45.3 18.7l42.5 42.5c12 12 18.7 28.3 18.7 45.3l0 37.5-384 0 0-80zM0 256c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 96c0 17.7-14.3 32-32 32l-32 0 0 64c0 35.3-28.7 64-64 64l-256 0c-35.3 0-64-28.7-64-64l0-64-32 0c-17.7 0-32-14.3-32-32l0-96zM128 416l0 32 256 0 0-96-256 0 0 64zM456 272a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"]},$x={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M320 16a104 104 0 1 1 0 208 104 104 0 1 1 0-208zM96 88a72 72 0 1 1 0 144 72 72 0 1 1 0-144zM0 416c0-70.7 57.3-128 128-128 12.8 0 25.2 1.9 36.9 5.4-32.9 36.8-52.9 85.4-52.9 138.6l0 16c0 11.4 2.4 22.2 6.7 32L32 480c-17.7 0-32-14.3-32-32l0-32zm521.3 64c4.3-9.8 6.7-20.6 6.7-32l0-16c0-53.2-20-101.8-52.9-138.6 11.7-3.5 24.1-5.4 36.9-5.4 70.7 0 128 57.3 128 128l0 32c0 17.7-14.3 32-32 32l-86.7 0zM472 160a72 72 0 1 1 144 0 72 72 0 1 1 -144 0zM160 432c0-88.4 71.6-160 160-160s160 71.6 160 160l0 16c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-16z"]},Wx={prefix:"fas",iconName:"certificate",icon:[576,512,[],"f0a3","M239.2-8c-6.1-6.2-15-8.7-23.4-6.4S200.9-5.6 198.8 2.8L183.5 63c-1.1 4.4-5.6 7-9.9 5.7L113.8 51.9c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l16.9 59.8c1.2 4.3-1.4 8.8-5.7 9.9L35.1 166.5c-8.4 2.1-15 8.7-17.3 17.1s.2 17.3 6.4 23.4l44.5 43.3c3.2 3.1 3.2 8.3 0 11.5L24.3 305.1c-6.2 6.1-8.7 15-6.4 23.4s8.9 14.9 17.3 17.1l60.2 15.3c4.4 1.1 7 5.6 5.7 9.9L84.2 430.5c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l59.8-16.9c4.3-1.2 8.8 1.4 9.9 5.7l15.3 60.2c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l43.3-44.5c3.1-3.2 8.3-3.2 11.5 0L337.3 520c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3L393.1 449c1.1-4.4 5.6-7 9.9-5.7l59.8 16.9c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-16.9-59.8c-1.2-4.3 1.4-8.8 5.7-9.9l60.2-15.3c8.4-2.1 15-8.7 17.3-17.1s-.2-17.4-6.4-23.4l-44.5-43.3c-3.2-3.1-3.2-8.3 0-11.5l44.5-43.3c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-60.2-15.3c-4.4-1.1-7-5.6-5.7-9.9l16.9-59.8c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1L403 68.8c-4.3 1.2-8.8-1.4-9.9-5.7L377.8 2.8c-2.1-8.4-8.7-15-17.1-17.3s-17.3 .2-23.4 6.4L294 36.5c-3.1 3.2-8.3 3.2-11.5 0L239.2-8z"]},Hx={prefix:"fas",iconName:"video",icon:[576,512,["video-camera"],"f03d","M96 64c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L96 64zM464 336l73.5 58.8c4.2 3.4 9.4 5.2 14.8 5.2 13.1 0 23.7-10.6 23.7-23.7l0-240.6c0-13.1-10.6-23.7-23.7-23.7-5.4 0-10.6 1.8-14.8 5.2L464 176 464 336z"]},tp={prefix:"fas",iconName:"file-import",icon:[384,512,["arrow-right-to-file"],"f56f","M64 0C28.7 0 0 28.7 0 64l0 240 182.1 0-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l72 72c9.4 9.4 9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-182.1 0 0 96c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-277.5c0-17-6.7-33.3-18.7-45.3L258.7 18.7C246.7 6.7 230.5 0 213.5 0L64 0zM325.5 176L232 176c-13.3 0-24-10.7-24-24L208 58.5 325.5 176z"]},Bx={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c9.4-9.4 24.6-9.4 33.9 0l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9z"]},np={prefix:"fas",iconName:"box-open",icon:[640,512,[],"f49e","M560.3 237.2c10.4 11.8 28.3 14.4 41.8 5.5 14.7-9.8 18.7-29.7 8.9-44.4l-48-72c-2.8-4.2-6.6-7.7-11.1-10.2L351.4 4.7c-19.3-10.7-42.8-10.7-62.2 0L88.8 116c-5.4 3-9.7 7.4-12.6 12.8L27.7 218.7c-12.6 23.4-3.8 52.5 19.6 65.1l33 17.7 0 53.3c0 23 12.4 44.3 32.4 55.7l176 99.7c19.6 11.1 43.5 11.1 63.1 0l176-99.7c20.1-11.4 32.4-32.6 32.4-55.7l0-117.5zm-240-9.8L170.2 144 320.3 60.6 470.4 144 320.3 227.4zm-41.5 50.2l-21.3 46.2-165.8-88.8 25.4-47.2 161.7 89.8z"]},rp={prefix:"fas",iconName:"sun",icon:[576,512,[9728],"f185","M288-32c8.4 0 16.3 4.4 20.6 11.7L364.1 72.3 468.9 46c8.2-2 16.9 .4 22.8 6.3S500 67 498 75.1l-26.3 104.7 92.7 55.5c7.2 4.3 11.7 12.2 11.7 20.6s-4.4 16.3-11.7 20.6L471.7 332.1 498 436.8c2 8.2-.4 16.9-6.3 22.8S477 468 468.9 466l-104.7-26.3-55.5 92.7c-4.3 7.2-12.2 11.7-20.6 11.7s-16.3-4.4-20.6-11.7L211.9 439.7 107.2 466c-8.2 2-16.8-.4-22.8-6.3S76 445 78 436.8l26.2-104.7-92.6-55.5C4.4 272.2 0 264.4 0 256s4.4-16.3 11.7-20.6L104.3 179.9 78 75.1c-2-8.2 .3-16.8 6.3-22.8S99 44 107.2 46l104.7 26.2 55.5-92.6 1.8-2.6c4.5-5.7 11.4-9.1 18.8-9.1zm0 144a144 144 0 1 0 0 288 144 144 0 1 0 0-288zm0 240a96 96 0 1 1 0-192 96 96 0 1 1 0 192z"]},Vx={prefix:"fas",iconName:"network-wired",icon:[576,512,[],"f6ff","M248 88l80 0 0 48-80 0 0-48zm-8-56c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l16 0 0 32-224 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0 0 32-16 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-16 0 0-32 192 0 0 32-16 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-16 0 0-32 96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-224 0 0-32 16 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-96 0zM448 376l8 0 0 48-80 0 0-48 72 0zm-256 0l8 0 0 48-80 0 0-48 72 0z"]},Qx={prefix:"fas",iconName:"file-circle-question",icon:[576,512,[],"e4ef","M96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l180 0c-22.7-31.5-36-70.2-36-112 0-100.6 77.4-183.2 176-191.3l0-38.1c0-17-6.7-33.3-18.7-45.3L290.7 18.7C278.7 6.7 262.5 0 245.5 0L96 0zM357.5 176L264 176c-13.3 0-24-10.7-24-24L240 58.5 357.5 176zM432 544a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm0-100a20 20 0 1 1 0 40 20 20 0 1 1 0-40zm0-100c-11.6 0-21.3 8.2-23.5 19.2-1.8 8.7-10.2 14.3-18.9 12.5s-14.3-10.2-12.5-18.9c5.2-25.6 27.8-44.8 54.9-44.8 30.9 0 56 25.1 56 56 0 19.8-11.7 37.8-29.8 45.9l-10.4 4.6c-1.2 7.7-7.8 13.5-15.8 13.5-8.8 0-16-7.2-16-16 0-11.2 6.6-21.3 16.8-25.9l12.4-5.5c6.6-2.9 10.8-9.4 10.8-16.6 0-13.3-10.7-24-24-24z"]},Yx={prefix:"fas",iconName:"cloud",icon:[576,512,[9729],"f0c2","M0 336c0 79.5 64.5 144 144 144l304 0c70.7 0 128-57.3 128-128 0-51.6-30.5-96.1-74.5-116.3 6.7-13.1 10.5-28 10.5-43.7 0-53-43-96-96-96-17.7 0-34.2 4.8-48.4 13.1-24.1-45.8-72.2-77.1-127.6-77.1-79.5 0-144 64.5-144 144 0 8 .7 15.9 1.9 23.5-56.9 19.2-97.9 73.1-97.9 136.5z"]},Wl={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"]},qx={prefix:"fas",iconName:"circle-question",icon:[512,512,[62108,"question-circle"],"f059","M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm0-336c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},ap={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M505 273c9.4-9.4 9.4-24.6 0-33.9L361 95c-6.9-6.9-17.2-8.9-26.2-5.2S320 102.3 320 112l0 80-112 0c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48l112 0 0 80c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2L505 273zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"]},Gx={prefix:"fas",iconName:"play",icon:[448,512,[9654],"f04b","M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"]},ip={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"]},Xx={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144,62470,"user-alt","user-large"],"f007","M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"]},sp={prefix:"fas",iconName:"gauge-high",icon:[512,512,[62461,"tachometer-alt","tachometer-alt-fast"],"f625","M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 416c35.3 0 64-28.7 64-64 0-16.2-6-31.1-16-42.3l69.5-138.9c5.9-11.9 1.1-26.3-10.7-32.2s-26.3-1.1-32.2 10.7L261.1 288.2c-1.7-.1-3.4-.2-5.1-.2-35.3 0-64 28.7-64 64s28.7 64 64 64zM176 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm352-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},Kx={prefix:"fas",iconName:"arrow-right",icon:[512,512,[8594],"f061","M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},op={prefix:"fas",iconName:"file-lines",icon:[384,512,[128441,128462,61686,"file-alt","file-text"],"f15c","M0 64C0 28.7 28.7 0 64 0L213.5 0c17 0 33.3 6.7 45.3 18.7L365.3 125.3c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm208-5.5l0 93.5c0 13.3 10.7 24 24 24L325.5 176 208 58.5zM120 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"]},Jx={prefix:"fas",iconName:"file-invoice",icon:[384,512,[],"f570","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-277.5c0-17-6.7-33.3-18.7-45.3L258.7 18.7C246.7 6.7 230.5 0 213.5 0L64 0zM325.5 176L232 176c-13.3 0-24-10.7-24-24L208 58.5 325.5 176zM64 384l0-64c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 416c-17.7 0-32-14.3-32-32zM88 64l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24S74.7 64 88 64zm0 96l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]},lp={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zM374 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L221.1 315.2 169 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.8 7.5 18.8 7s13.4-4.1 17.5-9.8L379.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z"]},cp=lp,Vi={prefix:"fas",iconName:"moon",icon:[512,512,[127769,9214],"f186","M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z"]},dp={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"]},Zx={prefix:"fas",iconName:"inbox",icon:[512,512,[],"f01c","M91.8 32C59.9 32 32.9 55.4 28.4 86.9L.6 281.2c-.4 3-.6 6-.6 9.1L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-125.7c0-3-.2-6.1-.6-9.1L483.6 86.9C479.1 55.4 452.1 32 420.2 32L91.8 32zm0 64l328.5 0 27.4 192-59.9 0c-12.1 0-23.2 6.8-28.6 17.7l-14.3 28.6c-5.4 10.8-16.5 17.7-28.6 17.7l-120.4 0c-12.1 0-23.2-6.8-28.6-17.7l-14.3-28.6c-5.4-10.8-16.5-17.7-28.6-17.7L64.3 288 91.8 96z"]},ev={prefix:"fas",iconName:"graduation-cap",icon:[576,512,[127891,"mortar-board"],"f19d","M48 195.8l209.2 86.1c9.8 4 20.2 6.1 30.8 6.1s21-2.1 30.8-6.1l242.4-99.8c9-3.7 14.8-12.4 14.8-22.1s-5.8-18.4-14.8-22.1L318.8 38.1C309 34.1 298.6 32 288 32s-21 2.1-30.8 6.1L14.8 137.9C5.8 141.6 0 150.3 0 160L0 456c0 13.3 10.7 24 24 24s24-10.7 24-24l0-260.2zm48 71.7L96 384c0 53 86 96 192 96s192-43 192-96l0-116.6-142.9 58.9c-15.6 6.4-32.2 9.7-49.1 9.7s-33.5-3.3-49.1-9.7L96 267.4z"]},kl={prefix:"fas",iconName:"lock",icon:[384,512,[128274],"f023","M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z"]},tv={prefix:"fas",iconName:"rotate-left",icon:[512,512,["rotate-back","rotate-backward","undo-alt"],"f2ea","M24 192l144 0c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-46.7-46.7c75.3-58.6 184.3-53.3 253.5 15.9 75 75 75 196.5 0 271.5s-196.5 75-271.5 0c-10.2-10.2-19-21.3-26.4-33-9.5-14.9-29.3-19.3-44.2-9.8s-19.3 29.3-9.8 44.2C49.7 408.7 61.4 423.5 75 437 175 537 337 537 437 437S537 175 437 75C342.8-19.3 193.3-24.7 92.7 58.8L41 7C34.1 .2 23.8-1.9 14.8 1.8S0 14.3 0 24L0 168c0 13.3 10.7 24 24 24z"]},wr={prefix:"fas",iconName:"award",icon:[448,512,[],"f559","M245.9-25.9c-13.4-8.2-30.3-8.2-43.7 0-24.4 14.9-39.5 18.9-68.1 18.3-15.7-.4-30.3 8.1-37.9 21.9-13.7 25.1-24.8 36.2-49.9 49.9-13.8 7.5-22.2 22.2-21.9 37.9 .7 28.6-3.4 43.7-18.3 68.1-8.2 13.4-8.2 30.3 0 43.7 14.9 24.4 18.9 39.5 18.3 68.1-.4 15.7 8.1 30.3 21.9 37.9 22.1 12.1 33.3 22.1 45.1 41.5L42.7 458.5c-5.9 11.9-1.1 26.3 10.7 32.2l86 43c11.5 5.7 25.5 1.4 31.7-9.8l52.8-95.1 52.8 95.1c6.2 11.2 20.2 15.6 31.7 9.8l86-43c11.9-5.9 16.7-20.3 10.7-32.2l-48.6-97.2c11.7-19.4 23-29.4 45.1-41.5 13.8-7.5 22.2-22.2 21.9-37.9-.7-28.6 3.4-43.7 18.3-68.1 8.2-13.4 8.2-30.3 0-43.7-14.9-24.4-18.9-39.5-18.3-68.1 .4-15.7-8.1-30.3-21.9-37.9-25.1-13.7-36.2-24.8-49.9-49.9-7.5-13.8-22.2-22.2-37.9-21.9-28.6 .7-43.7-3.4-68.1-18.3zM224 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"]},Hl={prefix:"fas",iconName:"shield-halved",icon:[512,512,["shield-alt"],"f3ed","M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z"]},Bl={prefix:"fas",iconName:"arrow-left",icon:[512,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},Xt={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"]},up={prefix:"fas",iconName:"eye-slash",icon:[576,512,[],"f070","M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM204.5 138.7c23.5-16.8 52.4-26.7 83.5-26.7 79.5 0 144 64.5 144 144 0 31.1-9.9 59.9-26.7 83.5l-34.7-34.7c12.7-21.4 17-47.7 10.1-73.7-13.7-51.2-66.4-81.6-117.6-67.9-8.6 2.3-16.7 5.7-24 10l-34.7-34.7zM325.3 395.1c-11.9 3.2-24.4 4.9-37.3 4.9-79.5 0-144-64.5-144-144 0-12.9 1.7-25.4 4.9-37.3L69.4 139.2c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6l-64.2-64.2z"]},nv={prefix:"fas",iconName:"pen-nib",icon:[512,512,[10001],"f5ad","M368.5 18.3l-50.1 50.1 125.3 125.3 50.1-50.1c21.9-21.9 21.9-57.3 0-79.2L447.7 18.3c-21.9-21.9-57.3-21.9-79.2 0zM279.3 97.2l-.5 .1-144.1 43.2c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-2.9 8.7-1.9 18.2 2.5 26L161.7 316.4c-1.1-4-1.6-8.1-1.6-12.4 0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48c-4.3 0-8.5-.6-12.4-1.6L40.3 505.7c7.8 4.4 17.2 5.4 26 2.5l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1 .1-.5-135.5-135.5z"]},rv={prefix:"fas",iconName:"microchip",icon:[512,512,[],"f2db","M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c-35.3 0-64 28.7-64 64l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0c0 35.3 28.7 64 64 64l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40c35.3 0 64-28.7 64-64l40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0c0-35.3-28.7-64-64-64l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40zM160 128l192 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-192c0-17.7 14.3-32 32-32zm16 48l0 160 160 0 0-160-160 0z"]},av={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"]},iv={prefix:"fas",iconName:"list-check",icon:[512,512,["tasks"],"f0ae","M133.8 36.3c10.9 7.6 13.5 22.6 5.9 33.4l-56 80c-4.1 5.8-10.5 9.5-17.6 10.1S52 158 47 153L7 113C-2.3 103.6-2.3 88.4 7 79S31.6 69.7 41 79l19.8 19.8 39.6-56.6c7.6-10.9 22.6-13.5 33.4-5.9zm0 160c10.9 7.6 13.5 22.6 5.9 33.4l-56 80c-4.1 5.8-10.5 9.5-17.6 10.1S52 318 47 313L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l19.8 19.8 39.6-56.6c7.6-10.9 22.6-13.5 33.4-5.9zM224 96c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32zM64 376a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"]},ba={prefix:"fas",iconName:"book-open",icon:[512,512,[128214,128366],"f518","M256 141.3l0 309.3 .5-.2C311.1 427.7 369.7 416 428.8 416l19.2 0 0-320-19.2 0c-42.2 0-84.1 8.4-123.1 24.6-16.8 7-33.4 13.9-49.7 20.7zM230.9 61.5L256 72 281.1 61.5C327.9 42 378.1 32 428.8 32L464 32c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-35.2 0c-50.7 0-100.9 10-147.7 29.5l-12.8 5.3c-7.9 3.3-16.7 3.3-24.6 0l-12.8-5.3C184.1 490 133.9 480 83.2 480L48 480c-26.5 0-48-21.5-48-48L0 80C0 53.5 21.5 32 48 32l35.2 0c50.7 0 100.9 10 147.7 29.5z"]},sv={prefix:"fas",iconName:"list-ul",icon:[512,512,["list-dots"],"f0ca","M48 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM48 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM96 256a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]},fp={prefix:"fas",iconName:"layer-group",icon:[512,512,[],"f5fd","M232.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 149.8C5.4 145.8 0 137.3 0 128s5.4-17.9 13.9-21.8L232.5 5.2zM48.1 218.4l164.3 75.9c27.7 12.8 59.6 12.8 87.3 0l164.3-75.9 34.1 15.8c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 277.8C5.4 273.8 0 265.3 0 256s5.4-17.9 13.9-21.8l34.1-15.8zM13.9 362.2l34.1-15.8 164.3 75.9c27.7 12.8 59.6 12.8 87.3 0l164.3-75.9 34.1 15.8c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 405.8C5.4 401.8 0 393.3 0 384s5.4-17.9 13.9-21.8z"]},mp={prefix:"fas",iconName:"cart-shopping",icon:[640,512,[128722,"shopping-cart"],"f07a","M24-16C10.7-16 0-5.3 0 8S10.7 32 24 32l45.3 0c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1L456 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-255.9 0c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3 303.6 0c30.8 0 57.2-21.9 62.9-52.2L568.9 69.9C572.6 50.2 557.5 32 537.4 32l-412.7 0-.4-2c-4.8-26.6-28-46-55.1-46L24-16zM208 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm224 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]};/*!
 * Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */var ov={prefix:"fab",iconName:"facebook-f",icon:[320,512,[],"f39e","M80 299.3l0 212.7 116 0 0-212.7 86.5 0 18-97.8-104.5 0 0-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2l0-88.7C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4l0 42.1-66 0 0 97.8 66 0z"]},lv={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z"]},cv={prefix:"fab",iconName:"tiktok",icon:[448,512,[],"e07b","M448.5 209.9c-44 .1-87-13.6-122.8-39.2l0 178.7c0 33.1-10.1 65.4-29 92.6s-45.6 48-76.6 59.6-64.8 13.5-96.9 5.3-60.9-25.9-82.7-50.8-35.3-56-39-88.9 2.9-66.1 18.6-95.2 40-52.7 69.6-67.7 62.9-20.5 95.7-16l0 89.9c-15-4.7-31.1-4.6-46 .4s-27.9 14.6-37 27.3-14 28.1-13.9 43.9 5.2 31 14.5 43.7 22.4 22.1 37.4 26.9 31.1 4.8 46-.1 28-14.4 37.2-27.1 14.2-28.1 14.2-43.8l0-349.4 88 0c-.1 7.4 .6 14.9 1.9 22.2 3.1 16.3 9.4 31.9 18.7 45.7s21.3 25.6 35.2 34.6c19.9 13.1 43.2 20.1 67 20.1l0 87.4z"]},dv={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},uv={prefix:"fab",iconName:"whatsapp",icon:[448,512,[],"f232","M380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480 117.7 449.1c32.4 17.7 68.9 27 106.1 27l.1 0c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zM325.1 300.5c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z"]},fv={prefix:"fab",iconName:"linkedin-in",icon:[448,512,[],"f0e1","M100.3 448l-92.9 0 0-299.1 92.9 0 0 299.1zM53.8 108.1C24.1 108.1 0 83.5 0 53.8 0 39.5 5.7 25.9 15.8 15.8s23.8-15.8 38-15.8 27.9 5.7 38 15.8 15.8 23.8 15.8 38c0 29.7-24.1 54.3-53.8 54.3zM447.9 448l-92.7 0 0-145.6c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7l0 148.1-92.8 0 0-299.1 89.1 0 0 40.8 1.3 0c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3l0 164.3-.1 0z"]},mv={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103l0-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"]};function pv({goTo:i}){const l=()=>{window.open("https://wa.me/250780959065?text=Hello%20Stekora%20Tech","_blank")};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"floating-actions",children:[r.jsxs("button",{className:"fab-button",onClick:()=>i("/apply-services"),children:[r.jsx("span",{className:"icon",children:r.jsx(H,{icon:Jx})}),r.jsx("span",{children:"Apply for Services"})]}),r.jsxs("button",{className:"fab-button secondary",onClick:()=>i("/study"),children:[r.jsx("span",{className:"icon",children:r.jsx(H,{icon:Dx})}),r.jsx("span",{children:"Apply for Study"})]}),r.jsx("button",{className:"fab-button whatsapp",onClick:l,"aria-label":"WhatsApp",children:r.jsx("span",{className:"icon",children:r.jsx(H,{icon:uv})})})]})]})}const hv="/assets/logoo-CbfLrW-F.png";function gv(){return r.jsxs(r.Fragment,{children:[r.jsxs("footer",{className:"footer",children:[r.jsxs("div",{className:"footer-container",children:[r.jsxs("div",{className:"footer-col",children:[r.jsxs("div",{className:"logo-area",children:[r.jsx("img",{src:hv,alt:"Stekora Tech logo",className:"footer-logo"}),r.jsxs("div",{children:[r.jsx("div",{className:"footer-brand",children:"Stekora Tech"}),r.jsx("div",{className:"tag",children:"where ideas become digital solutions"})]})]}),r.jsx("p",{className:"desc",children:"Stekora Tech provides modern IT services from custom web applications to automation and embedded systems helping businesses turn technical ideas into reliable digital products."}),r.jsxs("div",{className:"social",children:[r.jsx("span",{children:r.jsx(H,{icon:ov})}),r.jsx("span",{children:r.jsx(H,{icon:mv})}),r.jsx("a",{href:"https://instagram.com/stekoratech",target:"_blank",rel:"noreferrer",children:r.jsx(H,{icon:dv})}),r.jsx("a",{href:"https://www.tiktok.com/stekoratech",target:"_blank",rel:"noreferrer",children:r.jsx(H,{icon:cv})}),r.jsx("span",{children:r.jsx(H,{icon:fv})})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h3",{children:"Contact Us"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx(H,{icon:dp})," Phone: ",r.jsx("span",{children:"+250 780 959 065"})]}),r.jsxs("li",{children:[r.jsx(H,{icon:jl})," Email: ",r.jsx("span",{children:"stekoratech@gmail.com"})]}),r.jsxs("li",{children:[r.jsx(H,{icon:av})," Location: ",r.jsx("span",{children:"Musanze, Rwanda"})]}),r.jsxs("li",{className:"social-text",children:["Social: ",r.jsx("span",{children:"LinkedIn, GitHub, Instagram"})]})]})]}),r.jsxs("div",{className:"footer-col",children:[r.jsx("h3",{children:"Support"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Help & FAQs"}),r.jsx("li",{children:"Project Support"}),r.jsx("li",{children:"Service Level & Maintenance"}),r.jsx("li",{children:"Contact Support: support@stekoratech.com"})]})]})]}),r.jsxs("div",{className:"copyright",children:["© ",new Date().getFullYear()," Stekora Tech. All rights reserved."]})]}),r.jsx("style",{children:`
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
      `})]})}const xv="/assets/logo-Cwf0LtIx.png";function vv({route:i,goTo:l,menuOpen:s,setMenuOpen:d}){const[u,h]=z.useState(!!(localStorage.getItem("studentToken")||localStorage.getItem("token"))),v=()=>d(!1),b=g=>{l(g),v()},f=()=>{localStorage.removeItem("studentToken"),localStorage.removeItem("studentName"),localStorage.removeItem("studentCourseName"),localStorage.removeItem("token"),h(!1),b("/")},p=[["/","Home"],["/services","Services"],["/study","Courses"],["/jobs","Jobs"],["/about","About"],["/contact","Contact"]];return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsx("header",{className:"header",children:r.jsxs("div",{className:"header-container",children:[r.jsxs("button",{className:"logo-button",onClick:()=>b("/"),children:[r.jsx("img",{src:xv,alt:"Stekora Tech logo"}),r.jsxs("div",{children:[r.jsx("div",{className:"brand-name",children:"Stekora Tech"}),r.jsx("div",{className:"brand-tagline",children:"where ideas become digital solutions"})]})]}),r.jsx("button",{className:"mobile-menu-button",onClick:()=>d(!s),children:s?"✕":"☰"}),r.jsxs("nav",{className:"header-links",children:[p.map(([g,x])=>r.jsx("button",{className:i===g?"active":"",onClick:()=>b(g),children:x},g)),r.jsx("button",{className:`shop-link ${i==="/shop"?"active":""}`,onClick:()=>b("/shop"),children:"Shop"}),u?r.jsx("button",{className:"shop-link",onClick:f,children:"Logout"}):r.jsx("button",{className:`shop-link ${i==="/login"?"active":""}`,onClick:()=>b("/login"),children:"Login"})]})]})})]})}function yv({route:i,goTo:l,menuOpen:s,setMenuOpen:d,children:u}){return r.jsxs(r.Fragment,{children:[r.jsx(vv,{route:i,goTo:l,menuOpen:s,setMenuOpen:d}),u,r.jsx(gv,{goTo:l}),r.jsx(pv,{goTo:l})]})}function bv(){return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
          width: 70px;
          height: 70px;
          border-radius: 50%;
          border: 3px solid #22c55e;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: #9ca3af;
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
          gap: 2.5rem;
          align-items: center;
          font-size: 1.1rem;
          color: #4b5563;
        }

        .partners-logos span {
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-weight: 600;
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
        }
      `}),r.jsx("div",{className:"about-page",children:r.jsxs("div",{className:"about-container",children:[r.jsxs("div",{className:"about-top",children:[r.jsxs("div",{className:"about-box",children:[r.jsx("h3",{children:"Our Vision"}),r.jsx("p",{children:"To be a reliable technology partner to our clients, delivering modern digital solutions for both local and international needs."})]}),r.jsxs("div",{className:"about-box",children:[r.jsx("h3",{children:"Our Mission"}),r.jsx("p",{children:"To solve business challenges with innovative software, embedded systems and research while empowering young talent through practical innovation and mentorship."})]}),r.jsxs("div",{className:"about-box",children:[r.jsx("h3",{children:"Strategic Driving Lines"}),r.jsx("p",{children:"Continuous quality improvement, strong customer support and partnerships that help us deliver reliable products and services to every client we serve."})]})]}),r.jsxs("section",{className:"team-section",children:[r.jsx("h2",{className:"team-title",children:"Our Awesome Team Of Engineers & Staff"}),r.jsx("p",{className:"team-sub",children:"Stekora Tech works with skilled professionals and partners to deliver software and electronics solutions in Rwanda and beyond."}),r.jsxs("div",{className:"team-grid",children:[r.jsxs("div",{className:"team-card",children:[r.jsx("div",{className:"team-avatar",children:"👤"}),r.jsx("div",{className:"team-name",children:"Steven"}),r.jsx("div",{className:"team-role",children:"CEO & Founder"}),r.jsx("div",{className:"team-bio",children:"Leads overall vision, projects and partnerships."})]}),r.jsxs("div",{className:"team-card",children:[r.jsx("div",{className:"team-avatar",children:"👤"}),r.jsx("div",{className:"team-name",children:"Tabitha"}),r.jsx("div",{className:"team-role",children:"Chief Technology Officer"}),r.jsx("div",{className:"team-bio",children:"Oversees technology choices and engineering quality."})]}),r.jsxs("div",{className:"team-card",children:[r.jsx("div",{className:"team-avatar",children:"👤"}),r.jsx("div",{className:"team-name",children:"Stekora Team"}),r.jsx("div",{className:"team-role",children:"Developers & Mentors"}),r.jsx("div",{className:"team-bio",children:"Collaborate on client work and student projects."})]})]}),r.jsxs("div",{className:"partners-strip",children:[r.jsx("div",{className:"partners-label",children:"Our Partners"}),r.jsxs("div",{className:"partners-logos",children:[r.jsx("span",{children:"Nadev Solution"}),r.jsx("span",{children:"Code Rwanda Tech"})]})]})]})]})})]})}class wa{constructor(l=0,s="Network Error"){this.status=l,this.text=s}}const wv=()=>{if(!(typeof localStorage>"u"))return{get:i=>Promise.resolve(localStorage.getItem(i)),set:(i,l)=>Promise.resolve(localStorage.setItem(i,l)),remove:i=>Promise.resolve(localStorage.removeItem(i))}},Ge={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:wv()},Vl=i=>i?typeof i=="string"?{publicKey:i}:i.toString()==="[object Object]"?i:{}:{},jv=(i,l="https://api.emailjs.com")=>{if(!i)return;const s=Vl(i);Ge.publicKey=s.publicKey,Ge.blockHeadless=s.blockHeadless,Ge.storageProvider=s.storageProvider,Ge.blockList=s.blockList,Ge.limitRate=s.limitRate,Ge.origin=s.origin||l},pp=async(i,l,s={})=>{const d=await fetch(Ge.origin+i,{method:"POST",headers:s,body:l}),u=await d.text(),h=new wa(d.status,u);if(d.ok)return h;throw h},hp=(i,l,s)=>{if(!i||typeof i!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!l||typeof l!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s||typeof s!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},kv=i=>{if(i&&i.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},gp=i=>i.webdriver||!i.languages||i.languages.length===0,xp=()=>new wa(451,"Unavailable For Headless Browser"),Sv=(i,l)=>{if(!Array.isArray(i))throw"The BlockList list has to be an array";if(typeof l!="string")throw"The BlockList watchVariable has to be a string"},Nv=i=>{var l;return!((l=i.list)!=null&&l.length)||!i.watchVariable},Cv=(i,l)=>i instanceof FormData?i.get(l):i[l],vp=(i,l)=>{if(Nv(i))return!1;Sv(i.list,i.watchVariable);const s=Cv(l,i.watchVariable);return typeof s!="string"?!1:i.list.includes(s)},yp=()=>new wa(403,"Forbidden"),Ev=(i,l)=>{if(typeof i!="number"||i<0)throw"The LimitRate throttle has to be a positive number";if(l&&typeof l!="string")throw"The LimitRate ID has to be a non-empty string"},zv=async(i,l,s)=>{const d=Number(await s.get(i)||0);return l-Date.now()+d},bp=async(i,l,s)=>{if(!l.throttle||!s)return!1;Ev(l.throttle,l.id);const d=l.id||i;return await zv(d,l.throttle,s)>0?!0:(await s.set(d,Date.now().toString()),!1)},wp=()=>new wa(429,"Too Many Requests"),Pv=async(i,l,s,d)=>{const u=Vl(d),h=u.publicKey||Ge.publicKey,v=u.blockHeadless||Ge.blockHeadless,b=u.storageProvider||Ge.storageProvider,f={...Ge.blockList,...u.blockList},p={...Ge.limitRate,...u.limitRate};return v&&gp(navigator)?Promise.reject(xp()):(hp(h,i,l),kv(s),s&&vp(f,s)?Promise.reject(yp()):await bp(location.pathname,p,b)?Promise.reject(wp()):pp("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:h,service_id:i,template_id:l,template_params:s}),{"Content-type":"application/json"}))},Av=i=>{if(!i||i.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},Lv=i=>typeof i=="string"?document.querySelector(i):i,_v=async(i,l,s,d)=>{const u=Vl(d),h=u.publicKey||Ge.publicKey,v=u.blockHeadless||Ge.blockHeadless,b=Ge.storageProvider||u.storageProvider,f={...Ge.blockList,...u.blockList},p={...Ge.limitRate,...u.limitRate};if(v&&gp(navigator))return Promise.reject(xp());const g=Lv(s);hp(h,i,l),Av(g);const x=new FormData(g);return vp(f,x)?Promise.reject(yp()):await bp(location.pathname,p,b)?Promise.reject(wp()):(x.append("lib_version","4.4.1"),x.append("service_id",i),x.append("template_id",l),x.append("user_id",h),pp("/api/v1.0/email/send-form",x))},Mf={init:jv,send:Pv,sendForm:_v,EmailJSResponseStatus:wa},If="service_40ls3zr",Mv="template_mjsypr9",Ff="template_1hlec3t",Tf="3fp8yStyqLutAt-J9",Iv=i=>new Promise(l=>window.setTimeout(l,i));function Fv(){const[i,l]=z.useState({name:"",email:"",phone:"",service:"",message:""}),[s,d]=z.useState(!1),[u,h]=z.useState({type:"",message:""}),v=f=>{l({...i,[f.target.name]:f.target.value})},b=async f=>{f.preventDefault(),h({type:"",message:""}),d(!0);try{const p=`ST-${Date.now().toString(36).toUpperCase()}`,g=new Date().toLocaleString("en-RW",{dateStyle:"medium",timeStyle:"short"}),x={name:i.name.trim(),email:i.email.trim(),to_email:i.email.trim(),customer_email:i.email.trim(),customer_name:i.name.trim(),phone:i.phone.trim()||"Not provided",service:i.service,message:i.message.trim(),reply_to:i.email.trim(),request_id:p,submitted_date:g};await Mf.send(If,Mv,x,{publicKey:Tf});let y=null;try{await Iv(2e3),await Mf.send(If,Ff,x,{publicKey:Tf})}catch(C){y=C,console.error("EmailJS customer confirmation failed",C)}if(y){const C=(y==null?void 0:y.text)||(y==null?void 0:y.message)||"the confirmation template was rejected";h({type:"warning",message:`Your request reached Stekora Tech, but customer template ${Ff} failed: ${C}`})}else h({type:"success",message:"Thank you! Your request was sent and a confirmation email is on its way."});l({name:"",email:"",phone:"",service:"",message:""})}catch(p){console.error("EmailJS contact request failed",p);const g=(p==null?void 0:p.text)||(p==null?void 0:p.message)||"EmailJS rejected the request. Check the service and template settings.";h({type:"error",message:`We could not send your request: ${g}`})}finally{d(!1)}};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsx("div",{className:"contact-page",children:r.jsxs("div",{className:"contact-container",children:[r.jsxs("div",{className:"contact-header",children:[r.jsx("span",{className:"badge",children:"Contact Us"}),r.jsx("h1",{children:"Request a Project / Job"}),r.jsx("p",{children:"Need a website, mobile app, IoT system or custom IT solution? Fill in the form below and our team will get back to you."})]}),r.jsx("div",{className:"contact-card",children:r.jsxs("form",{onSubmit:b,children:[r.jsxs("div",{className:"form-grid two",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Full Name"}),r.jsx("input",{type:"text",name:"name",required:!0,value:i.name,onChange:v,placeholder:"enter your full name"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Email Address"}),r.jsx("input",{type:"email",name:"email",required:!0,value:i.email,onChange:v,placeholder:"enter your email address"})]})]}),r.jsxs("div",{className:"form-grid two",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Phone"}),r.jsx("input",{type:"text",name:"phone",value:i.phone,onChange:v,placeholder:"enter your phone number"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Service Needed"}),r.jsxs("select",{name:"service",required:!0,value:i.service,onChange:v,children:[r.jsx("option",{value:"",children:"Select a service"}),r.jsx("option",{children:"Website Development"}),r.jsx("option",{children:"Mobile App Development"}),r.jsx("option",{children:"IoT / Embedded Systems"}),r.jsx("option",{children:"Automation & Integration"}),r.jsx("option",{children:"Networking / CCTV"}),r.jsx("option",{children:"Graphic Design"}),r.jsx("option",{children:"Other services"})]})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Write a message"}),r.jsx("textarea",{name:"message",placeholder:"write us a message...",required:!0,value:i.message,onChange:v})]}),r.jsxs("button",{className:"submit-btn",type:"submit",disabled:s,children:[r.jsx(H,{icon:$l}),s?"Sending...":"Submit Request"]}),u.message&&r.jsx("p",{className:`contact-status ${u.type}`,role:"status",children:u.message})]})})]})})]})}const Tv="https://stekoratech.com/api";async function be(i,l={}){const s=l.body instanceof FormData,d=await fetch(`${Tv}${i}`,{...l,headers:s?{...l.headers}:{"Content-Type":"application/json",...l.headers}});if(!d.ok){const u=await d.json().catch(()=>({}));throw new Error(u.message||`API request failed: ${d.status}`)}return d.json()}function jr(){return be("/courses")}function Tn(i){return be(`/courses/${i}/modules`)}function Ov(i){return be("/courses",{method:"POST",body:i instanceof FormData?i:JSON.stringify(i)})}function Rv(i,l){return be(`/courses/${i}`,{method:"PUT",body:l instanceof FormData?l:JSON.stringify(l)})}function Dv(i){return be(`/courses/${i}`,{method:"DELETE"})}function jp(i,l){return be(`/courses/${i}/modules`,{method:"POST",body:JSON.stringify(l)})}function kp(i){return be(`/courses/modules/${i}`,{method:"DELETE"})}function Uv(i){return be(`/courses/modules/${i}/materials`)}function $v(i,l){return be(`/courses/modules/${i}/materials`,{method:"POST",body:l instanceof FormData?l:JSON.stringify(l)})}function Wv(i,l){return be(`/courses/materials/${i}`,{method:"PUT",body:l instanceof FormData?l:JSON.stringify(l)})}function Hv(i){return be(`/courses/materials/${i}`,{method:"DELETE"})}function Bv(i){return be(`/courses/modules/${i}/quiz`)}function Vv(i,l){return be(`/courses/modules/${i}/quiz`,{method:"POST",body:JSON.stringify(l)})}function Qv(i){return be(`/courses/quiz/${i}`,{method:"DELETE"})}const Sl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWwAAACKCAMAAAC5K4CgAAABIFBMVEUzR1v////5h1oAwKcAw6k0Qlj/ymwmQVoqQFYiPFIrO096g43U1de7vMAgOVD/y2w1OVMiiYI0PlcmfnsKtqARqJcWQVsvXmgZnpAjP1rVelrsg1oxSl0qcHIePVqfimJbXF2qk2TzwWpzbl+0lmNDT1wWNlkfkogRr5vRrmgwUGDBoGXktmntwWvJqWeXg2G6o2ZsZl2Jf2E1LU8A07P/gFjMbFkrZ22+cFoAM1kTMUoALlmFd2CssrgAKUTy8/SJkZtuUlrqdFlRWFz/1G2cpK1FVmdibnxOXW3b3uAAIT+cjmNVTVt+VVpnUFrZcVmkYlmzZFrDalmNYlp+XVpLTFuvbFoAIlgAGVcAH1ecZlqCiZIAETVrdoJEU1w4J0sEAsoeAAAM70lEQVR4nO2dDXuayBbHh6rDeEXwJTGhG1ERMRbQa7K52ViJtpZE07Tb3b3t9l43vd//W9wZ0LwJZhkxvmR+Tx5BkIT8Hc+cOefMCACDwWAwGAwGg8FgMBgMBoPBYDAYi3JwsOo7eAmgd9dY6nefPl0XwOfPq76bbefk1wIovD95j7f/+ldh1Xez1fBffj25xmJ/KYCTayb2cimcvPv190Lh/W9fv5wAJvZSQZ9OlM8nxIycvP/EzMhyISqfnHwhZqRwwMReLp9P3n2+/u0Ei81j5ZnYy6TwO3ZFUA3b7S+IPPudib1ECq66BVTg754xXjJ7iURu1ffwUnjz83F+/4HamcSq7mW7SSQSROx6guzhp3gDMjt7TO0lkMjW97DYe6eJXLFezCXye/ViphjP7q36xraQXGy3vnvw83H9EP8UY/lM/LAeP83Gdoub27RRYQLyO6sgxX3ggaLwsoz3Ae8dU3xfHx2JfDyTy+GWnd3NxLP5/Z3j+OnxbvY4vrlmpAD++GXCv/18P1NVBwg/tPWGJhmGAmC5rKomANCwlKXeWSIfyyQ8sXNY7HwxEz/N7GYzGys2//X1qzu+zajNH6l/DvSm8b2qvjVN0JaUlvWn1P5uaPyHyrJvLhHfze5jM5I9PN7fyR+6Yh/Wj2P7pxupduGPVw/wadqND03FtCwLKmZLPlOr5lHtg2WpDeUDWLIZwdT3T0E9d5pP5PL72UQi+yaRP03s1TdS7Mdav/LJjtX+A7sN7TsY6GaL50smRMqH9veyDD7Uln+DxOHLAdfr81y/yf7y/3L0fH6k9U+zZqQrqRaoWVAqnWGxAZAMha9CCNvPIvYWUXj9UOvXPvLxfI14HjUkA5lEULBXgr2RGnFOnv1+N5ppw/527T1ngajlwX/ztP7MRF4+EyvyX6b1MzARe/kOHGMq9qwH8swkImXF/0wgAWIjng66T0juoJiPkOK6yu0rNq+UWyUaWm2FD38PuXw8HouQeGxNAyd+YittE9JiVkO73olTLHU8QrDeGyO20oJQbWo0NFUIW2HVzu3G4sW9CKnH4vm1VHtWbDIQ13hFprDYsiJrUKqGtCSZw9jOcaQdZDxWX8v08KzYugUrZ9S/T69AVQ93CRE7Q/0H/dgYsfkuVD1D4NN05/yiqSOiq7Abrmm/YLGxIajIZAuqswD59nVooqgnMs9X216GTK5ATQZheMFiKwYkUVTSS/pwNNVRaXdreF/+0S2TgGAX94xWmejPH0EjXBe5WWInk/TXBoldk6DZeAz2CH9MXqVJEJsLbHOgpCmojF+tqnAbxEYk94TIhxQhsvF+bo+IaUekvq8AsbFkjbfKY9424JFrPbC6akNVFUVVDVUayAY0znTTfZc2XGw0HjoIOM4FSg6d1OUl6F+g1BChPj4ijp3L4Ui4oQ4kBYnd8pNs0urdXtT8KkkJIMGaCat6E3ZlXXON9YaL3eF6aZFL2xy65NICZyPu8rzndHr4CLBHzmjc69nUhiRIbKxmbRbr1tOQVKiaim7ijYT4CjQHbdX1sDdebOfK6fX7XF8Qzq9GWOzhufu033PsniOeC+kO9X0FdpCqKs2iWpMOkq9asIG3tQY02zxAFsQ23CQO9saLPRadnuM4l0KaiA244V9EbHzk5iolcJ2oxS6R1ltrWLM0bhOUvK67kiq67poww7I094C/AZrHmondT15wdr+HUpyT5uwOJ9icA7h0v5dM230ume6No7PZfAka7hBwpnskBP4efM5r9PjNqmywn520LwEapoUUElOCI9jiUHD6N8mLtDAWL9PCTfIg7URns9EAd3r0iRtUg9Ig3OVrJbZXdCSKxOMTO4KdRGKSuH3uEfchSS+OT2wEm2GZIirtwssmbGxNbCQp0HsefvjFs1Vodf2tyFOgrgXVsLewvmIDMVKt/cTmsYcHoUoDvs76EfZTscZiL8hjg+ObFlNaphScjFEDz0iSWQpfI7W1Yl/0H3mJ/glfXpd9hjQuoAI1EHRS1imM/baK3RlxI/DADoUuZSAh1Ggr/LZW7B7Hcan7jTtAbD6wDzwrQe0s8CyNF7NcsdE/VsU5EZu7P+D0t9mgZczEV2/jrOps7HWKUaqtmc3GA8EVM7pT27eUoUJdyQBhJaSXvfVic3fxbx+x9SaEjSOfpNjTHJFLw2aLl2tGLlKr4sY1I72LOwdwVmy5BGH1jLL8TG/jth3Skiy5g0SrwrXZ6c49Z9unbgTCLr27IVehFPKSbfZGxg887dmo35EXlwa8PEuws8FPp59OsmMh2FaxUUq4eJivDCxlUKo+5WX3Cvkmbp7shV2VrmG0vXh2Kawfvq1iA/Q4NRyYqdH8BuzSXV5Aa5CRuVJqaOSiBjnpGusNz9QslQCxSfq8MlMRXFFh2TMWColVGQp+MYSWggVWS5oXyGZiBxNcymDMeiRnt9n1qmRhp4XHnWlJhW2lCVs6PlnZ/ITvUplTyjBHbNSWzC5UZQV7LpbUJnlLInaJiT2XIDPSltTW0WNaqtSemBHTtdFyhSTVFVIYVTGgRMqlmNjBBHaQDd/BeHOqI18xum6Rn0Gas2Jg0SW3EHAdxUbJZ1jP4G/g5/q5pQxKqznLvVkFvOf6TTbYUayUp6UM6+b6icMeN4z0D1AyO6hpTTK2flHWOYMaWZ4Mahrem/X3WbbY5w4eNqfWoWn7BKIgbNMm17Ho5TUbriNRIPGgm464Iu7lambFVjSoDhSqGY2IVwZq6ERO5GI/mFMzdGNv3EhYFfbcECvxNLRqmYaqRpyTkNpgsQ//l4mSe2In0yuLY094KnlgLJA8COmKeGLHdiIldt9mj9x/WUivinvVav5psbJmUtWNmFqbKi0WOffE7thE7JtOckXMjWcTkKxTJXx1mcLUE5u9GykPxAYdkhlbV29kPnzo2WBPsVSbTUgejLiLSG+ZkoAiHUUP4m0JVt4GnqWpZSBm5DgXIQdY7IfTqTvnC0gUHb5i692G37wDD6jCwHNqoxt+cnAuizvI/QjZicXXc9E/H7ERIFEmOrDnF/4eEjsRd4/xfUq/nUzGQ26XlnQn6Lm7yNt35+klb6fp0eAntgXV0g+qhPKgpUKL4lb2I5V7J0up9XB8M+7c2H0RDW2HPLNTIhD7+JHM2JscJg+UavsUwxvQArRdoAwsCk8bPGWFM/VYLOPt7cVj+cwTr6a0IWjMjcjEsFG6wznCGD9zOOdc6DmcfTXq2ZwNOGd0M+ScdI9uEtOs2D8kOFggNjLwwtqR4a5pkdknYpO9nCv2claCQimuc9VL922uw6Uvz8fcecfpAQ6IN1xnZF+lRwgfxhv8hlxStW2/CUxNN+rn52oHN3h+6ojoRtio31wOsoQ8dp3z3h7uTffd3ejXbyFid3ppx3FEgNt0ivur0+8dcEi8xGI7HXt0dWFzfWGEX0AXsQ1KHgBZM2fR7mScKD8tZaiY5pEXmQ09NW8eud3A1aPi2ajVxmakI2I50/bFKNWzU5yADcj5qNfvpf/q2Z30aIgPOzecY48iMiMTsXX/ZaJuo0wHhkmie1hko+bFrqA3pS98pmYeuXrwUlDRr8N/aSdBpy+kD0QyKW/cSwlOBw/38WPSSSVTjntYvBEEOisSmPCtQrXafkxVhZM1iWQy16OhKE28URVsetTqEXQTlNGKDXIHbwIAS3ClScwIiSLeEbEDwl2Jrhcoeus04J8kiU4jd4YeDXOy6/qMZ6ffK2Uw2xAiXoJtE1ax5l1F90qpIhZ7zvKKEf4RP9CY0ucIJrhupOmzBEbzrpTBKqmqIpO6EamMr9HOzhqUpQy35MCi657lonwHZqrHFibIZg8k2PznY7DRGExe1cCDzBYvlyQSwcYNHTYbXj6MWuxcIrvw6n47+bX+ZqbAUoaKb63f7cw7pfuRhK6V9ke3osFd5KhKt5KOC5E6tuhaivj6tZY7uIq13JqlfK+UwctSIm9JNOVHqws8c16iCMHmcllPqeJCZNdcbr+l5rz6bL+1b+f0wtN16M7MsEvN4T7QVemwmFlw8cQcCSDGyBAztA7Pgk92XYWt0JOQbtFb02UB/zaJIhm4HBZz4GBhEglP7jfU/8Ay8Znm0cUuBh5806CctWDohj3NQS7aO07tNqG+lpbEr5ShAqGlUS3prFlQ0sJ+LPAoMcoAq/u+ree3vPmWMnSD1wJ4CrUb3gTlitmIOV3LItaAxcrl6scKDR+rc9drDWLBftGHaMSJmqC5635zxZ6GSuqXw5p8wcTLYPLVKUzs52Ai9rt1KBjaegq/uGK/Zk37GUCTb4N8DeZ9hy8jGvhXE17P+Q5fRjQUvr16yOx3+DIio/DTI7WZ2Mvkkdo+3+HLiIyJRzKBDXCWS+H6l9vW/dPXVd/N1lMoTKMarF0zGAwGg8FgMBgMBoPBYDAYDAbjpfN/6tnDKXhzEO0AAAAASUVORK5CYII=",Ql="/assets/fullstack-CoYPai_u.jpg",Yl="/assets/iot-DqMEWA_d.jpg",Sp="/assets/photoshop-zHNeb2q1.jpg";function At(i){return i?i.startsWith("http")?i:`https://stekoratech.com/api/${i.replace(/^\/+/,"")}`:""}const Of=[],Rf=[Ql,Sl,Yl,Sp],Yv=i=>i.name||i.title||"Untitled Course",qv=i=>{var l;return((l=i.category)==null?void 0:l.trim())||"Uncategorized"},Gv=(i,l)=>i.image?At(i.image):i.image_url?At(i.image_url):Rf[l%Rf.length];function Xv(){const[i,l]=z.useState([]),[s,d]=z.useState("All"),[u,h]=z.useState(null),[v,b]=z.useState([]),[f,p]=z.useState(!0),[g,x]=z.useState(!1);z.useEffect(()=>{async function R(){try{const M=await jr();l(M.length?M:Of)}catch(M){console.error(M),l(Of)}finally{p(!1)}}R()},[]),z.useEffect(()=>{if(!u)return;const R=M=>{M.key==="Escape"&&_()};return window.addEventListener("keydown",R),()=>window.removeEventListener("keydown",R)},[u]);const y=z.useMemo(()=>i.map((R,M)=>({...R,name:Yv(R),category:qv(R),image:Gv(R,M)})),[i]),C=z.useMemo(()=>["All",...[...new Set(y.map(M=>M.category))]],[y]),L=y.filter(R=>s==="All"||R.category===s),T=async R=>{h(R),b([]),x(!0);try{const D=(await Tn(R.id)).map(V=>V.title).filter(Boolean);b(D)}catch(M){console.error(M),b([])}finally{x(!1)}},_=()=>{h(null),b([])};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsx("div",{className:"courses-page",children:r.jsxs("div",{className:"courses-container",children:[r.jsx("div",{className:"course-tabs",children:C.map(R=>r.jsx("button",{type:"button",className:`course-tab ${s===R?"active":""}`,onClick:()=>d(R),children:R},R))}),r.jsxs("div",{className:"courses-grid",children:[f&&r.jsx("div",{className:"course-empty",children:"Loading courses..."}),!f&&L.map(R=>{const M=R.description||"A practical Stekora Tech course built around real learning units.";return r.jsxs("article",{className:"course-card",children:[r.jsx("img",{className:"course-image",src:R.image,alt:R.name}),r.jsxs("div",{className:"course-body",children:[r.jsx("div",{className:"course-category",children:R.category}),r.jsx("h2",{className:"course-title",children:R.name}),r.jsxs("p",{className:"course-summary",children:[M.slice(0,118),M.length>118?"...":""]}),r.jsxs("div",{className:"course-footer",children:[r.jsxs("span",{className:"course-count",children:[R.modules_count||R.module_count||R.lessons||0," Lessons"]}),r.jsx("button",{type:"button",className:"course-learn",onClick:()=>T(R),children:"Learn More"})]})]})]},R.id||R.name)}),!f&&L.length===0&&r.jsx("div",{className:"course-empty",children:"No courses found in this category."})]}),u&&r.jsx("div",{className:"course-modal-backdrop",onClick:_,children:r.jsxs("section",{className:"course-modal",onClick:R=>R.stopPropagation(),children:[r.jsxs("div",{className:"course-modal-top",children:[r.jsx("div",{className:"course-modal-kicker",children:u.category}),r.jsxs("div",{className:"course-modal-title-row",children:[r.jsx("h2",{children:u.name}),r.jsx("button",{type:"button",className:"course-modal-close",onClick:_,children:"×"})]}),r.jsxs("div",{className:"course-modal-meta",children:[r.jsxs("span",{children:[v.length," Lessons"]}),r.jsx("span",{children:"Free"})]})]}),r.jsxs("div",{className:"course-modal-content",children:[r.jsxs("div",{className:"course-modal-section",children:[r.jsx("h3",{children:"About this course"}),r.jsx("p",{children:u.description||"This course gives students practical skills through guided lessons, project work, and clear learning units."})]}),r.jsxs("div",{className:"course-modal-section",children:[r.jsx("h3",{children:"Curriculum"}),g?r.jsx("p",{children:"Loading curriculum..."}):v.length>0?r.jsx("ul",{className:"curriculum-list",children:v.map((R,M)=>r.jsx("li",{children:R},`${R}-${M}`))}):r.jsx("p",{children:"No module has been uploaded for this course yet."})]})]})]})})]})})]})}function ql(){return be("/products")}function Kv(i){return be("/products",{method:"POST",body:i instanceof FormData?i:JSON.stringify(i)})}function Jv(i,l){return be(`/products/${i}`,{method:"PUT",body:l instanceof FormData?l:JSON.stringify(l)})}function Zv(i){return be(`/products/${i}`,{method:"DELETE"})}const e4="/assets/bunner1-C98AKxCM.png",t4="/assets/banner3-D_sI8hT7.png",Gl="/assets/iot-DqMEWA_d.jpg",mr=[e4,t4],Df=[Yl,Ql,Gl];function n4({goTo:i}){const[l,s]=z.useState(0),[d,u]=z.useState([]),[h,v]=z.useState(!0);z.useEffect(()=>{const p=setInterval(()=>{s(g=>(g+1)%mr.length)},4e3);return()=>clearInterval(p)},[]),z.useEffect(()=>{async function p(){try{const g=await ql(),x=Array.isArray(g)?g:g.products||[];u(x.slice(0,3))}catch(g){console.error(g),u([])}finally{v(!1)}}p()},[]);const b=()=>{s((l-1+mr.length)%mr.length)},f=()=>{s((l+1)%mr.length)};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
        }

        .ad-slider {
          position: relative;
          width: 100vw;
          height: 140px;
          overflow: hidden;
          margin-left: calc(50% - 50vw);
          background: #dbeafe;
        }

        .ad-slide {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: none;
        }

        .ad-slide.active {
          display: block;
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
        }

        .ad-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          cursor: pointer;
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
          text-decoration: none;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.12);
          transition: background 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
        }

        .home-contact-btn:hover {
          background: var(--richblue);
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.14);
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

        .search-input:focus {
          border-color: var(--richblue);
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
          border-radius: 8px;
          padding: 10px 12px;
          font-weight: 700;
        }

        .home-product-actions .cart-icon-btn {
          width: 46px;
          height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0;
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
            height: 150px;
            width: 100%;
          }

          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 768px) {
          .ad-slider {
            height: 110px;
            width: 100%;
          }

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

        @media (max-width: 480px) {
          .home-container {
            padding-top: 1.5rem;
          }

          .hero-section {
            text-align: center;
            padding: 0 25px;
            margin-top: -0.5rem;
          }

          .hero-pretitle {
            font-size: 1.35rem;
          }

          .hero-title {
            font-size: 1.6rem;
          }

          .hero-description {
            font-size: 0.9rem;
          }

          .hero-image {
            display: none;
          }

          .ad-slider {
            height: 110px;
            width: 100%;
          }

          .ad-arrow {
            font-size: 1.1rem;
            padding: 0.2rem 0.4rem;
          }

          .ad-dots {
            bottom: 0.4rem;
          }

          .ad-dot {
            width: 6px;
            height: 6px;
          }

          .featured-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .search-input {
            max-width: 100%;
          }
        }
      `}),r.jsxs("div",{className:"home-page",children:[r.jsxs("div",{className:"ad-slider",children:[mr.map((p,g)=>r.jsx("img",{src:p,className:`ad-slide ${g===l?"active":""}`,alt:"Advertisement"},p)),r.jsx("button",{className:"ad-arrow left",onClick:b,"aria-label":"Previous banner",children:"‹"}),r.jsx("button",{className:"ad-arrow right",onClick:f,"aria-label":"Next banner",children:"›"}),r.jsx("div",{className:"ad-dots",children:mr.map((p,g)=>r.jsx("button",{className:`ad-dot ${g===l?"active":""}`,onClick:()=>s(g),"aria-label":`Go to banner ${g+1}`},p))})]}),r.jsxs("div",{className:"home-container",children:[r.jsxs("section",{className:"hero-section",children:[r.jsxs("div",{children:[r.jsx("p",{className:"hero-pretitle",children:"Stekora Tech"}),r.jsxs("h1",{className:"hero-title",children:["Where ideas become ",r.jsx("span",{className:"gradient-text",children:"digital solutions"})]}),r.jsx("p",{className:"hero-description",children:"We are an IT services studio delivering web applications, embedded systems and automation. From concept to deployment, we help you design, build and manage reliable digital products."}),r.jsx("button",{className:"home-contact-btn",onClick:()=>i("/contact"),children:"Get in Touch"})]}),r.jsx("img",{src:Gl,alt:"Stekora Tech electronics workspace",className:"hero-image"})]}),r.jsxs("section",{children:[r.jsxs("div",{className:"featured-header",children:[r.jsxs("div",{children:[r.jsx("h2",{children:"Featured products & services"}),r.jsx("span",{children:"Good quality and reliability"})]}),r.jsx("input",{type:"text",className:"search-input",placeholder:"Search products...",value:"",readOnly:!0,onClick:()=>i("/shop"),onFocus:()=>i("/shop")})]}),r.jsxs("div",{className:"products-grid",children:[h&&r.jsx("p",{className:"no-products",children:"Loading products..."}),!h&&d.map((p,g)=>{const x=p.name||p.title||"Product",y=p.price?`R${p.price}`:"Contact us",C=p.image||(p.image_url?At(p.image_url):"")||Df[g%Df.length];return r.jsxs("div",{className:"home-product-card",children:[r.jsx("img",{src:C,alt:x}),r.jsxs("div",{className:"home-product-body",children:[r.jsx("span",{className:"home-product-tag",children:p.category||p.tag||"Product"}),r.jsx("h3",{className:"home-product-title",children:x}),r.jsx("p",{className:"home-product-description",children:p.description||"Quality Stekora Tech product or service package."}),r.jsxs("p",{className:"home-product-meta",children:["Rating ",p.rating||"4.8"]}),r.jsx("strong",{className:"home-product-price",children:y}),r.jsxs("div",{className:"home-product-actions",children:[r.jsx("button",{children:"Details"}),r.jsx("button",{className:"cart-icon-btn","aria-label":`Add ${x} to cart`,children:r.jsx(H,{icon:mp})})]})]})]},p.id||x)}),!h&&d.length===0&&r.jsx("p",{className:"no-products",children:"No product posted yet. Please check the shop again soon."})]})]})]})]})]})}function r4(){return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsx("div",{className:"jobs-page",children:r.jsxs("div",{className:"jobs-container",children:[r.jsx("h1",{className:"jobs-title",children:"Jobs & Opportunities"}),r.jsx("p",{className:"jobs-subtitle",children:"We collaborate with developers, designers and hardware enthusiasts on IT and electronics projects."}),r.jsxs("div",{className:"job-box",children:[r.jsx("h2",{children:"No open positions right now"}),r.jsx("p",{children:"We're always happy to see strong portfolios. You can still send your CV and GitHub/LinkedIn, and we'll keep you in mind for future IT projects."}),r.jsx("p",{className:"email",children:"Email: careers@stekoratech.com"})]})]})})]})}function a4(i){return be("/auth/student/login",{method:"POST",body:JSON.stringify(i)})}function i4(i){return be("/auth/admin/login",{method:"POST",body:JSON.stringify(i)})}function s4(i){return be("/auth/admin/password",{method:"PATCH",headers:{Authorization:`Bearer ${localStorage.getItem("token")||""}`},body:JSON.stringify(i)})}function o4(i){return be("/auth/student/password",{method:"PATCH",headers:{Authorization:`Bearer ${localStorage.getItem("studentToken")||""}`},body:JSON.stringify(i)})}function wn(i,l={}){const s=localStorage.getItem("studentToken");return be(i,{...l,headers:{Authorization:`Bearer ${s}`,...l.headers}})}function l4(i){return be("/students/register",{method:"POST",body:JSON.stringify(i)})}function c4(){return wn("/students/dashboard")}function d4(i){return wn(`/students/courses/${i}/start`,{method:"POST",body:JSON.stringify({})})}function u4(i,l){return wn(`/students/courses/${i}/modules/${l}`)}function f4(i){return wn(`/students/modules/${i}/assessment`)}function m4(i,l){return wn(`/students/modules/${i}/assessment`,{method:"POST",body:JSON.stringify({answers:l})})}function p4(i){return wn(`/students/courses/${i}/final-exam`)}function h4(i,l){return wn(`/students/courses/${i}/final-exam`,{method:"POST",body:JSON.stringify({answers:l})})}function g4(){return wn("/students/certificates")}function x4({goTo:i}){const[l,s]=z.useState("login"),[d,u]=z.useState("student"),[h,v]=z.useState({email:"",password:""}),[b,f]=z.useState({full_name:"",email:"",phone:"",password:""}),[p,g]=z.useState(!1),[x,y]=z.useState(!1),C=R=>{v({...h,[R.target.name]:R.target.value})},L=R=>{f({...b,[R.target.name]:R.target.value})},T=async R=>{var M,D;R.preventDefault(),g(!0);try{if(d==="student"){const V=await a4(h);localStorage.setItem("studentToken",V.token),(M=V.student)!=null&&M.full_name&&localStorage.setItem("studentName",V.student.full_name),alert("Logged in successfully."),i("/student")}else{const V=await i4(h);localStorage.setItem("token",V.token),localStorage.setItem("adminName",((D=V.user)==null?void 0:D.name)||"Admin"),alert("Admin logged in."),i("/admin")}}catch(V){console.error(V),alert(V.message||"Login failed")}finally{g(!1)}},_=async R=>{R.preventDefault(),y(!0);try{await l4(b),alert("Registration successful. Please login."),v({email:b.email,password:""}),f({full_name:"",email:"",phone:"",password:""}),s("login"),u("student")}catch(M){console.error(M),alert(M.message||"Registration failed")}finally{y(!1)}};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"auth-page",children:[r.jsx("button",{type:"button",className:"auth-back",onClick:()=>i("/"),children:"Back"}),r.jsxs("div",{className:`auth-shell ${l==="register"?"show-register":""}`,children:[r.jsx("div",{className:"auth-form-box login",children:r.jsxs("div",{className:"auth-card",children:[r.jsx("h1",{className:"auth-title",children:d==="student"?"Student Login":"Admin Login"}),r.jsx("p",{className:"auth-sub",children:d==="student"?"Access your dashboard, courses, and progress.":"Manage courses, modules, materials, and students."}),r.jsxs("div",{className:"auth-mode-row",children:[r.jsx("button",{type:"button",onClick:()=>u("student"),className:`auth-mode-btn ${d==="student"?"active":""}`,children:"Student"}),r.jsx("button",{type:"button",onClick:()=>u("admin"),className:`auth-mode-btn ${d==="admin"?"active":""}`,children:"Admin"})]}),r.jsxs("form",{onSubmit:T,children:[r.jsxs("div",{className:"auth-form-group",children:[r.jsx("label",{children:d==="student"?"Email":"Username"}),r.jsx("input",{type:d==="student"?"email":"text",name:"email",required:!0,value:h.email,onChange:C}),r.jsx("span",{className:"input-icon",children:r.jsx(H,{icon:jl})})]}),r.jsxs("div",{className:"auth-form-group",style:{marginTop:"0.95rem"},children:[r.jsx("label",{children:"Password"}),r.jsx("input",{type:"password",name:"password",required:!0,value:h.password,onChange:C}),r.jsx("span",{className:"input-icon",children:r.jsx(H,{icon:kl})})]}),r.jsx("button",{className:"auth-btn",type:"submit",children:p?"Logging in...":"Login"})]}),r.jsxs("div",{className:"auth-footer",children:["Do not have an account?"," ",r.jsx("button",{type:"button",className:"auth-link-button",onClick:()=>s("register"),children:"Sign Up"})]})]})}),r.jsx("div",{className:"auth-form-box register",children:r.jsxs("div",{className:"auth-card",children:[r.jsx("h1",{className:"auth-title",children:"Create Account"}),r.jsx("p",{className:"auth-sub",children:"Register once, then you can join and manage multiple courses."}),r.jsxs("form",{onSubmit:_,children:[r.jsxs("div",{className:"auth-form-group",children:[r.jsx("label",{children:"Full Name"}),r.jsx("input",{type:"text",name:"full_name",required:!0,value:b.full_name,onChange:L}),r.jsx("span",{className:"input-icon",children:r.jsx(H,{icon:Xx})})]}),r.jsxs("div",{className:"auth-form-group",style:{marginTop:"0.85rem"},children:[r.jsx("label",{children:"Email"}),r.jsx("input",{type:"email",name:"email",required:!0,value:b.email,onChange:L}),r.jsx("span",{className:"input-icon",children:r.jsx(H,{icon:jl})})]}),r.jsxs("div",{className:"auth-form-group",style:{marginTop:"0.85rem"},children:[r.jsx("label",{children:"Phone"}),r.jsx("input",{type:"text",name:"phone",required:!0,value:b.phone,onChange:L}),r.jsx("span",{className:"input-icon",children:r.jsx(H,{icon:dp})})]}),r.jsxs("div",{className:"auth-form-group",style:{marginTop:"0.85rem"},children:[r.jsx("label",{children:"Password"}),r.jsx("input",{type:"password",name:"password",required:!0,value:b.password,onChange:L}),r.jsx("span",{className:"input-icon",children:r.jsx(H,{icon:kl})})]}),r.jsx("button",{className:"auth-btn",type:"submit",children:x?"Creating account...":"Register"})]}),r.jsxs("div",{className:"auth-footer",children:["Already have an account?"," ",r.jsx("button",{type:"button",className:"auth-link-button",onClick:()=>s("login"),children:"Sign In"})]})]})}),r.jsx("div",{className:"auth-welcome-panel login-side",children:r.jsxs("div",{className:"auth-welcome-content",children:[r.jsx("h2",{children:"WELCOME BACK!"}),r.jsx("p",{children:"We are happy to have you with us again. Continue learning, building, and tracking your progress."})]})}),r.jsx("div",{className:"auth-welcome-panel register-side",children:r.jsxs("div",{className:"auth-welcome-content",children:[r.jsx("h2",{children:"WELCOME!"}),r.jsx("p",{children:"Create your Stekora Tech account and keep your services, courses, and support in one place."})]})})]})]})]})}const v4=[{icon:Yx,title:"Web & Cloud Development",desc:"Modern web apps, dashboards and APIs with secure admin panels and scalable infrastructure.",image:Ql,details:"We design and build responsive websites, business dashboards, booking systems, admin portals, APIs, and cloud-ready applications. Our work includes planning the user flow, developing the frontend and backend, connecting databases, securing accounts, and preparing the system so it can grow with your business."},{icon:rv,title:"Embedded & IoT Prototyping",desc:"From Arduino and microcontrollers to production-ready hardware integrations.",image:Yl,details:"We help turn hardware ideas into working prototypes using microcontrollers, sensors, displays, relays, and connected devices. This includes circuit planning, firmware programming, device testing, data collection, and connecting IoT devices to web dashboards or mobile-friendly monitoring tools."},{icon:Fx,title:"Automation & Integration",desc:"Connect systems, automate workflows, and build custom internal tools for your team.",image:Sl,details:"We automate repetitive business tasks and connect separate systems so information moves faster with fewer mistakes. This can include custom forms, reports, notifications, data sync, stock or client tracking tools, and integrations between websites, databases, spreadsheets, and third-party platforms."},{icon:Hx,title:"CCTV Installation & Smart Surveillance",desc:"Professional camera installation, monitoring setup, access control, and smart security systems for homes and businesses.",image:Gl,details:"We plan and install CCTV systems for homes, shops, offices, and business sites. Our service can include camera placement, cabling, DVR/NVR setup, mobile viewing, recording configuration, access control support, troubleshooting, and guidance on keeping your surveillance system reliable."},{icon:Vx,title:"Networking, Computer Maintenance & IT Support",desc:"Network setup, troubleshooting, computer repairs, software support, upgrades, and reliable ongoing technical assistance.",image:Sl,details:"We set up and maintain office and home networks, troubleshoot internet and Wi-Fi issues, repair and optimize computers, install software, upgrade systems, remove common technical blockers, and provide ongoing support so your devices and team can keep working smoothly."},{icon:nv,title:"Graphic Design & Digital Solutions",desc:"Clean brand visuals, promotional designs, digital content, websites, and business tools that help your work look professional.",image:Sp,details:"We create clean digital designs for brands, social media, posters, flyers, business profiles, product promotions, and online campaigns. We also support digital business tools like landing pages, simple websites, forms, and branded content that helps your work look professional."}];function y4(){const[i,l]=z.useState(null);return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsx("section",{className:"services-section",children:r.jsxs("div",{className:"services-container",children:[r.jsx("h1",{className:"services-title",children:"IT Services"}),r.jsx("p",{className:"services-subtitle",children:"Stekora Tech delivers end-to-end IT solutions tailored to your projects."}),r.jsx("div",{className:"services-grid",children:v4.map(s=>r.jsxs("div",{className:"service-card",children:[r.jsx(H,{icon:s.icon,className:"service-icon"}),r.jsx("h2",{className:"service-title",children:s.title}),r.jsx("p",{className:"service-desc",children:s.desc}),r.jsx("button",{type:"button",className:"service-learn-btn",onClick:()=>l(s),children:"Learn More"})]},s.title))})]})}),i&&r.jsx("div",{className:"service-modal-backdrop",role:"presentation",onClick:()=>l(null),children:r.jsxs("section",{className:"service-modal",role:"dialog","aria-modal":"true","aria-labelledby":"service-modal-title",onClick:s=>s.stopPropagation(),children:[r.jsxs("div",{className:"service-modal-header",children:[r.jsx("h2",{className:"service-modal-title",id:"service-modal-title",children:i.title}),r.jsx("button",{type:"button",className:"service-modal-close","aria-label":"Close service details",onClick:()=>l(null),children:"×"})]}),r.jsx("img",{className:"service-modal-image",src:i.image,alt:""}),r.jsxs("div",{className:"service-modal-body",children:[r.jsx(H,{icon:i.icon,className:"service-modal-icon"}),r.jsx("p",{className:"service-modal-text",children:i.details})]})]})})]})}function b4(){const[i,l]=z.useState([]),[s,d]=z.useState(!0),[u,h]=z.useState(""),[v,b]=z.useState("");z.useEffect(()=>{async function p(){try{d(!0);const g=await ql(),x=Array.isArray(g)?g:g.products||[];l(x)}catch(g){console.error(g),h("Failed to load products")}finally{d(!1)}}p()},[]);const f=i.filter(p=>{const g=p.name||p.title||"",x=p.description||"",y=v.toLowerCase();return g.toLowerCase().includes(y)||x.toLowerCase().includes(y)});return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsx("div",{className:"shop-page",children:r.jsxs("div",{className:"shop-container",children:[r.jsx("h1",{className:"shop-title",children:"Shop"}),r.jsx("input",{type:"text",className:"shop-search-input",placeholder:"Search products...",value:v,onChange:p=>b(p.target.value)}),s&&r.jsx("p",{className:"status-text",children:"Loading products..."}),u&&r.jsx("p",{className:"status-text",children:u}),!s&&!u&&f.length>0&&r.jsx("div",{className:"products-grid",children:f.map(p=>{const g=p.name||p.title||"Product",x=p.price?`R${p.price}`:"Contact us",y=p.image_url?At(p.image_url):"";return r.jsxs("article",{className:"shop-product-card",children:[y&&r.jsx("img",{className:"shop-product-image",src:y,alt:g}),r.jsx("span",{className:"shop-product-badge",children:p.category||"Product"}),r.jsx("h2",{className:"shop-product-title",children:g}),r.jsx("p",{className:"shop-product-desc",children:p.description||"Quality Stekora Tech product or service package."}),r.jsx("strong",{className:"shop-product-price",children:x}),r.jsxs("div",{className:"shop-product-actions",children:[r.jsx("button",{children:"Details"}),r.jsx("button",{className:"cart-btn","aria-label":`Add ${g} to cart`,children:r.jsx(H,{icon:mp})})]})]},p.id||g)})}),!s&&!u&&i.length===0&&r.jsxs("div",{className:"shop-empty-panel",children:[r.jsx("h2",{children:"No product posted yet"}),r.jsx("p",{children:"We're preparing products and services for the shop. Please check back soon."}),r.jsx("span",{className:"shop-empty-contact",children:"Email: info@stekoratech.com"})]}),!s&&!u&&i.length>0&&f.length===0&&r.jsxs("p",{className:"shop-no-results",children:["No matching products found for ",r.jsx("span",{style:{color:"#003366"},children:v})]})]})})]})}var w4=Object.defineProperty,Qi=Object.getOwnPropertySymbols,Np=Object.prototype.hasOwnProperty,Cp=Object.prototype.propertyIsEnumerable,Uf=(i,l,s)=>l in i?w4(i,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[l]=s,Nl=(i,l)=>{for(var s in l||(l={}))Np.call(l,s)&&Uf(i,s,l[s]);if(Qi)for(var s of Qi(l))Cp.call(l,s)&&Uf(i,s,l[s]);return i},Cl=(i,l)=>{var s={};for(var d in i)Np.call(i,d)&&l.indexOf(d)<0&&(s[d]=i[d]);if(i!=null&&Qi)for(var d of Qi(i))l.indexOf(d)<0&&Cp.call(i,d)&&(s[d]=i[d]);return s};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var Dn;(i=>{const l=class ge{constructor(f,p,g,x){if(this.version=f,this.errorCorrectionLevel=p,this.modules=[],this.isFunction=[],f<ge.MIN_VERSION||f>ge.MAX_VERSION)throw new RangeError("Version value out of range");if(x<-1||x>7)throw new RangeError("Mask value out of range");this.size=f*4+17;let y=[];for(let L=0;L<this.size;L++)y.push(!1);for(let L=0;L<this.size;L++)this.modules.push(y.slice()),this.isFunction.push(y.slice());this.drawFunctionPatterns();const C=this.addEccAndInterleave(g);if(this.drawCodewords(C),x==-1){let L=1e9;for(let T=0;T<8;T++){this.applyMask(T),this.drawFormatBits(T);const _=this.getPenaltyScore();_<L&&(x=T,L=_),this.applyMask(T)}}u(0<=x&&x<=7),this.mask=x,this.applyMask(x),this.drawFormatBits(x),this.isFunction=[]}static encodeText(f,p){const g=i.QrSegment.makeSegments(f);return ge.encodeSegments(g,p)}static encodeBinary(f,p){const g=i.QrSegment.makeBytes(f);return ge.encodeSegments([g],p)}static encodeSegments(f,p,g=1,x=40,y=-1,C=!0){if(!(ge.MIN_VERSION<=g&&g<=x&&x<=ge.MAX_VERSION)||y<-1||y>7)throw new RangeError("Invalid value");let L,T;for(L=g;;L++){const D=ge.getNumDataCodewords(L,p)*8,V=v.getTotalBits(f,L);if(V<=D){T=V;break}if(L>=x)throw new RangeError("Data too long")}for(const D of[ge.Ecc.MEDIUM,ge.Ecc.QUARTILE,ge.Ecc.HIGH])C&&T<=ge.getNumDataCodewords(L,D)*8&&(p=D);let _=[];for(const D of f){s(D.mode.modeBits,4,_),s(D.numChars,D.mode.numCharCountBits(L),_);for(const V of D.getData())_.push(V)}u(_.length==T);const R=ge.getNumDataCodewords(L,p)*8;u(_.length<=R),s(0,Math.min(4,R-_.length),_),s(0,(8-_.length%8)%8,_),u(_.length%8==0);for(let D=236;_.length<R;D^=253)s(D,8,_);let M=[];for(;M.length*8<_.length;)M.push(0);return _.forEach((D,V)=>M[V>>>3]|=D<<7-(V&7)),new ge(L,p,M,y)}getModule(f,p){return 0<=f&&f<this.size&&0<=p&&p<this.size&&this.modules[p][f]}getModules(){return this.modules}drawFunctionPatterns(){for(let g=0;g<this.size;g++)this.setFunctionModule(6,g,g%2==0),this.setFunctionModule(g,6,g%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const f=this.getAlignmentPatternPositions(),p=f.length;for(let g=0;g<p;g++)for(let x=0;x<p;x++)g==0&&x==0||g==0&&x==p-1||g==p-1&&x==0||this.drawAlignmentPattern(f[g],f[x]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(f){const p=this.errorCorrectionLevel.formatBits<<3|f;let g=p;for(let y=0;y<10;y++)g=g<<1^(g>>>9)*1335;const x=(p<<10|g)^21522;u(x>>>15==0);for(let y=0;y<=5;y++)this.setFunctionModule(8,y,d(x,y));this.setFunctionModule(8,7,d(x,6)),this.setFunctionModule(8,8,d(x,7)),this.setFunctionModule(7,8,d(x,8));for(let y=9;y<15;y++)this.setFunctionModule(14-y,8,d(x,y));for(let y=0;y<8;y++)this.setFunctionModule(this.size-1-y,8,d(x,y));for(let y=8;y<15;y++)this.setFunctionModule(8,this.size-15+y,d(x,y));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let f=this.version;for(let g=0;g<12;g++)f=f<<1^(f>>>11)*7973;const p=this.version<<12|f;u(p>>>18==0);for(let g=0;g<18;g++){const x=d(p,g),y=this.size-11+g%3,C=Math.floor(g/3);this.setFunctionModule(y,C,x),this.setFunctionModule(C,y,x)}}drawFinderPattern(f,p){for(let g=-4;g<=4;g++)for(let x=-4;x<=4;x++){const y=Math.max(Math.abs(x),Math.abs(g)),C=f+x,L=p+g;0<=C&&C<this.size&&0<=L&&L<this.size&&this.setFunctionModule(C,L,y!=2&&y!=4)}}drawAlignmentPattern(f,p){for(let g=-2;g<=2;g++)for(let x=-2;x<=2;x++)this.setFunctionModule(f+x,p+g,Math.max(Math.abs(x),Math.abs(g))!=1)}setFunctionModule(f,p,g){this.modules[p][f]=g,this.isFunction[p][f]=!0}addEccAndInterleave(f){const p=this.version,g=this.errorCorrectionLevel;if(f.length!=ge.getNumDataCodewords(p,g))throw new RangeError("Invalid argument");const x=ge.NUM_ERROR_CORRECTION_BLOCKS[g.ordinal][p],y=ge.ECC_CODEWORDS_PER_BLOCK[g.ordinal][p],C=Math.floor(ge.getNumRawDataModules(p)/8),L=x-C%x,T=Math.floor(C/x);let _=[];const R=ge.reedSolomonComputeDivisor(y);for(let D=0,V=0;D<x;D++){let q=f.slice(V,V+T-y+(D<L?0:1));V+=q.length;const G=ge.reedSolomonComputeRemainder(q,R);D<L&&q.push(0),_.push(q.concat(G))}let M=[];for(let D=0;D<_[0].length;D++)_.forEach((V,q)=>{(D!=T-y||q>=L)&&M.push(V[D])});return u(M.length==C),M}drawCodewords(f){if(f.length!=Math.floor(ge.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let p=0;for(let g=this.size-1;g>=1;g-=2){g==6&&(g=5);for(let x=0;x<this.size;x++)for(let y=0;y<2;y++){const C=g-y,T=(g+1&2)==0?this.size-1-x:x;!this.isFunction[T][C]&&p<f.length*8&&(this.modules[T][C]=d(f[p>>>3],7-(p&7)),p++)}}u(p==f.length*8)}applyMask(f){if(f<0||f>7)throw new RangeError("Mask value out of range");for(let p=0;p<this.size;p++)for(let g=0;g<this.size;g++){let x;switch(f){case 0:x=(g+p)%2==0;break;case 1:x=p%2==0;break;case 2:x=g%3==0;break;case 3:x=(g+p)%3==0;break;case 4:x=(Math.floor(g/3)+Math.floor(p/2))%2==0;break;case 5:x=g*p%2+g*p%3==0;break;case 6:x=(g*p%2+g*p%3)%2==0;break;case 7:x=((g+p)%2+g*p%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[p][g]&&x&&(this.modules[p][g]=!this.modules[p][g])}}getPenaltyScore(){let f=0;for(let y=0;y<this.size;y++){let C=!1,L=0,T=[0,0,0,0,0,0,0];for(let _=0;_<this.size;_++)this.modules[y][_]==C?(L++,L==5?f+=ge.PENALTY_N1:L>5&&f++):(this.finderPenaltyAddHistory(L,T),C||(f+=this.finderPenaltyCountPatterns(T)*ge.PENALTY_N3),C=this.modules[y][_],L=1);f+=this.finderPenaltyTerminateAndCount(C,L,T)*ge.PENALTY_N3}for(let y=0;y<this.size;y++){let C=!1,L=0,T=[0,0,0,0,0,0,0];for(let _=0;_<this.size;_++)this.modules[_][y]==C?(L++,L==5?f+=ge.PENALTY_N1:L>5&&f++):(this.finderPenaltyAddHistory(L,T),C||(f+=this.finderPenaltyCountPatterns(T)*ge.PENALTY_N3),C=this.modules[_][y],L=1);f+=this.finderPenaltyTerminateAndCount(C,L,T)*ge.PENALTY_N3}for(let y=0;y<this.size-1;y++)for(let C=0;C<this.size-1;C++){const L=this.modules[y][C];L==this.modules[y][C+1]&&L==this.modules[y+1][C]&&L==this.modules[y+1][C+1]&&(f+=ge.PENALTY_N2)}let p=0;for(const y of this.modules)p=y.reduce((C,L)=>C+(L?1:0),p);const g=this.size*this.size,x=Math.ceil(Math.abs(p*20-g*10)/g)-1;return u(0<=x&&x<=9),f+=x*ge.PENALTY_N4,u(0<=f&&f<=2568888),f}getAlignmentPatternPositions(){if(this.version==1)return[];{const f=Math.floor(this.version/7)+2,p=this.version==32?26:Math.ceil((this.version*4+4)/(f*2-2))*2;let g=[6];for(let x=this.size-7;g.length<f;x-=p)g.splice(1,0,x);return g}}static getNumRawDataModules(f){if(f<ge.MIN_VERSION||f>ge.MAX_VERSION)throw new RangeError("Version number out of range");let p=(16*f+128)*f+64;if(f>=2){const g=Math.floor(f/7)+2;p-=(25*g-10)*g-55,f>=7&&(p-=36)}return u(208<=p&&p<=29648),p}static getNumDataCodewords(f,p){return Math.floor(ge.getNumRawDataModules(f)/8)-ge.ECC_CODEWORDS_PER_BLOCK[p.ordinal][f]*ge.NUM_ERROR_CORRECTION_BLOCKS[p.ordinal][f]}static reedSolomonComputeDivisor(f){if(f<1||f>255)throw new RangeError("Degree out of range");let p=[];for(let x=0;x<f-1;x++)p.push(0);p.push(1);let g=1;for(let x=0;x<f;x++){for(let y=0;y<p.length;y++)p[y]=ge.reedSolomonMultiply(p[y],g),y+1<p.length&&(p[y]^=p[y+1]);g=ge.reedSolomonMultiply(g,2)}return p}static reedSolomonComputeRemainder(f,p){let g=p.map(x=>0);for(const x of f){const y=x^g.shift();g.push(0),p.forEach((C,L)=>g[L]^=ge.reedSolomonMultiply(C,y))}return g}static reedSolomonMultiply(f,p){if(f>>>8||p>>>8)throw new RangeError("Byte out of range");let g=0;for(let x=7;x>=0;x--)g=g<<1^(g>>>7)*285,g^=(p>>>x&1)*f;return u(g>>>8==0),g}finderPenaltyCountPatterns(f){const p=f[1];u(p<=this.size*3);const g=p>0&&f[2]==p&&f[3]==p*3&&f[4]==p&&f[5]==p;return(g&&f[0]>=p*4&&f[6]>=p?1:0)+(g&&f[6]>=p*4&&f[0]>=p?1:0)}finderPenaltyTerminateAndCount(f,p,g){return f&&(this.finderPenaltyAddHistory(p,g),p=0),p+=this.size,this.finderPenaltyAddHistory(p,g),this.finderPenaltyCountPatterns(g)}finderPenaltyAddHistory(f,p){p[0]==0&&(f+=this.size),p.pop(),p.unshift(f)}};l.MIN_VERSION=1,l.MAX_VERSION=40,l.PENALTY_N1=3,l.PENALTY_N2=3,l.PENALTY_N3=40,l.PENALTY_N4=10,l.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],l.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],i.QrCode=l;function s(b,f,p){if(f<0||f>31||b>>>f)throw new RangeError("Value out of range");for(let g=f-1;g>=0;g--)p.push(b>>>g&1)}function d(b,f){return(b>>>f&1)!=0}function u(b){if(!b)throw new Error("Assertion error")}const h=class Re{constructor(f,p,g){if(this.mode=f,this.numChars=p,this.bitData=g,p<0)throw new RangeError("Invalid argument");this.bitData=g.slice()}static makeBytes(f){let p=[];for(const g of f)s(g,8,p);return new Re(Re.Mode.BYTE,f.length,p)}static makeNumeric(f){if(!Re.isNumeric(f))throw new RangeError("String contains non-numeric characters");let p=[];for(let g=0;g<f.length;){const x=Math.min(f.length-g,3);s(parseInt(f.substring(g,g+x),10),x*3+1,p),g+=x}return new Re(Re.Mode.NUMERIC,f.length,p)}static makeAlphanumeric(f){if(!Re.isAlphanumeric(f))throw new RangeError("String contains unencodable characters in alphanumeric mode");let p=[],g;for(g=0;g+2<=f.length;g+=2){let x=Re.ALPHANUMERIC_CHARSET.indexOf(f.charAt(g))*45;x+=Re.ALPHANUMERIC_CHARSET.indexOf(f.charAt(g+1)),s(x,11,p)}return g<f.length&&s(Re.ALPHANUMERIC_CHARSET.indexOf(f.charAt(g)),6,p),new Re(Re.Mode.ALPHANUMERIC,f.length,p)}static makeSegments(f){return f==""?[]:Re.isNumeric(f)?[Re.makeNumeric(f)]:Re.isAlphanumeric(f)?[Re.makeAlphanumeric(f)]:[Re.makeBytes(Re.toUtf8ByteArray(f))]}static makeEci(f){let p=[];if(f<0)throw new RangeError("ECI assignment value out of range");if(f<128)s(f,8,p);else if(f<16384)s(2,2,p),s(f,14,p);else if(f<1e6)s(6,3,p),s(f,21,p);else throw new RangeError("ECI assignment value out of range");return new Re(Re.Mode.ECI,0,p)}static isNumeric(f){return Re.NUMERIC_REGEX.test(f)}static isAlphanumeric(f){return Re.ALPHANUMERIC_REGEX.test(f)}getData(){return this.bitData.slice()}static getTotalBits(f,p){let g=0;for(const x of f){const y=x.mode.numCharCountBits(p);if(x.numChars>=1<<y)return 1/0;g+=4+y+x.bitData.length}return g}static toUtf8ByteArray(f){f=encodeURI(f);let p=[];for(let g=0;g<f.length;g++)f.charAt(g)!="%"?p.push(f.charCodeAt(g)):(p.push(parseInt(f.substring(g+1,g+3),16)),g+=2);return p}};h.NUMERIC_REGEX=/^[0-9]*$/,h.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,h.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let v=h;i.QrSegment=h})(Dn||(Dn={}));(i=>{(l=>{const s=class{constructor(u,h){this.ordinal=u,this.formatBits=h}};s.LOW=new s(0,1),s.MEDIUM=new s(1,0),s.QUARTILE=new s(2,3),s.HIGH=new s(3,2),l.Ecc=s})(i.QrCode||(i.QrCode={}))})(Dn||(Dn={}));(i=>{(l=>{const s=class{constructor(u,h){this.modeBits=u,this.numBitsCharCount=h}numCharCountBits(u){return this.numBitsCharCount[Math.floor((u+7)/17)]}};s.NUMERIC=new s(1,[10,12,14]),s.ALPHANUMERIC=new s(2,[9,11,13]),s.BYTE=new s(4,[8,16,16]),s.KANJI=new s(8,[8,10,12]),s.ECI=new s(7,[0,0,0]),l.Mode=s})(i.QrSegment||(i.QrSegment={}))})(Dn||(Dn={}));var hr=Dn;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var j4={L:hr.QrCode.Ecc.LOW,M:hr.QrCode.Ecc.MEDIUM,Q:hr.QrCode.Ecc.QUARTILE,H:hr.QrCode.Ecc.HIGH},Ep=128,zp="L",Pp="#FFFFFF",Ap="#000000",Lp=!1,_p=1,k4=4,S4=0,N4=.1;function Mp(i,l=0){const s=[];return i.forEach(function(d,u){let h=null;d.forEach(function(v,b){if(!v&&h!==null){s.push(`M${h+l} ${u+l}h${b-h}v1H${h+l}z`),h=null;return}if(b===d.length-1){if(!v)return;h===null?s.push(`M${b+l},${u+l} h1v1H${b+l}z`):s.push(`M${h+l},${u+l} h${b+1-h}v1H${h+l}z`);return}v&&h===null&&(h=b)})}),s.join("")}function Ip(i,l){return i.slice().map((s,d)=>d<l.y||d>=l.y+l.h?s:s.map((u,h)=>h<l.x||h>=l.x+l.w?u:!1))}function C4(i,l,s,d){if(d==null)return null;const u=i.length+s*2,h=Math.floor(l*N4),v=u/l,b=(d.width||h)*v,f=(d.height||h)*v,p=d.x==null?i.length/2-b/2:d.x*v,g=d.y==null?i.length/2-f/2:d.y*v,x=d.opacity==null?1:d.opacity;let y=null;if(d.excavate){let L=Math.floor(p),T=Math.floor(g),_=Math.ceil(b+p-L),R=Math.ceil(f+g-T);y={x:L,y:T,w:_,h:R}}const C=d.crossOrigin;return{x:p,y:g,h:f,w:b,excavation:y,opacity:x,crossOrigin:C}}function E4(i,l){return l!=null?Math.max(Math.floor(l),0):i?k4:S4}function Fp({value:i,level:l,minVersion:s,includeMargin:d,marginSize:u,imageSettings:h,size:v,boostLevel:b}){let f=Te.useMemo(()=>{const L=(Array.isArray(i)?i:[i]).reduce((T,_)=>(T.push(...hr.QrSegment.makeSegments(_)),T),[]);return hr.QrCode.encodeSegments(L,j4[l],s,void 0,void 0,b)},[i,l,s,b]);const{cells:p,margin:g,numCells:x,calculatedImageSettings:y}=Te.useMemo(()=>{let C=f.getModules();const L=E4(d,u),T=C.length+L*2,_=C4(C,v,L,h);return{cells:C,margin:L,numCells:T,calculatedImageSettings:_}},[f,v,h,d,u]);return{qrcode:f,margin:g,cells:p,numCells:x,calculatedImageSettings:y}}var z4=(function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0})(),P4=Te.forwardRef(function(l,s){const d=l,{value:u,size:h=Ep,level:v=zp,bgColor:b=Pp,fgColor:f=Ap,includeMargin:p=Lp,minVersion:g=_p,boostLevel:x,marginSize:y,imageSettings:C}=d,T=Cl(d,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:_}=T,R=Cl(T,["style"]),M=C==null?void 0:C.src,D=Te.useRef(null),V=Te.useRef(null),q=Te.useCallback(Se=>{D.current=Se,typeof s=="function"?s(Se):s&&(s.current=Se)},[s]),[G,re]=Te.useState(!1),{margin:de,cells:X,numCells:fe,calculatedImageSettings:pe}=Fp({value:u,level:v,minVersion:g,boostLevel:x,includeMargin:p,marginSize:y,imageSettings:C,size:h});Te.useEffect(()=>{if(D.current!=null){const Se=D.current,je=Se.getContext("2d");if(!je)return;let Ne=X;const xe=V.current,k=pe!=null&&xe!==null&&xe.complete&&xe.naturalHeight!==0&&xe.naturalWidth!==0;k&&pe.excavation!=null&&(Ne=Ip(X,pe.excavation));const F=window.devicePixelRatio||1;Se.height=Se.width=h*F;const E=h/fe*F;je.scale(E,E),je.fillStyle=b,je.fillRect(0,0,fe,fe),je.fillStyle=f,z4?je.fill(new Path2D(Mp(Ne,de))):X.forEach(function(w,O){w.forEach(function(le,U){le&&je.fillRect(U+de,O+de,1,1)})}),pe&&(je.globalAlpha=pe.opacity),k&&je.drawImage(xe,pe.x+de,pe.y+de,pe.w,pe.h)}}),Te.useEffect(()=>{re(!1)},[M]);const me=Nl({height:h,width:h},_);let ve=null;return M!=null&&(ve=Te.createElement("img",{src:M,key:M,style:{display:"none"},onLoad:()=>{re(!0)},ref:V,crossOrigin:pe==null?void 0:pe.crossOrigin})),Te.createElement(Te.Fragment,null,Te.createElement("canvas",Nl({style:me,height:h,width:h,ref:q,role:"img"},R)),ve)});P4.displayName="QRCodeCanvas";var Tp=Te.forwardRef(function(l,s){const d=l,{value:u,size:h=Ep,level:v=zp,bgColor:b=Pp,fgColor:f=Ap,includeMargin:p=Lp,minVersion:g=_p,boostLevel:x,title:y,marginSize:C,imageSettings:L}=d,T=Cl(d,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:_,cells:R,numCells:M,calculatedImageSettings:D}=Fp({value:u,level:v,minVersion:g,boostLevel:x,includeMargin:p,marginSize:C,imageSettings:L,size:h});let V=R,q=null;L!=null&&D!=null&&(D.excavation!=null&&(V=Ip(R,D.excavation)),q=Te.createElement("image",{href:L.src,height:D.h,width:D.w,x:D.x+_,y:D.y+_,preserveAspectRatio:"none",opacity:D.opacity,crossOrigin:D.crossOrigin}));const G=Mp(V,_);return Te.createElement("svg",Nl({height:h,width:h,viewBox:`0 0 ${M} ${M}`,ref:s,role:"img"},T),!!y&&Te.createElement("title",null,y),Te.createElement("path",{fill:b,d:`M0,0 h${M}v${M}H0z`,shapeRendering:"crispEdges"}),Te.createElement("path",{fill:f,d:G,shapeRendering:"crispEdges"}),q)});Tp.displayName="QRCodeSVG";const A4="/assets/certificate-template-XksKyxt5.png";function L4(i){return i?new Date(i).toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"}):""}function Op({studentName:i,courseName:l,certificateCode:s,issuedDate:d,verificationUrl:u}){return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"stekora-certificate stekora-certificate-print",children:[r.jsx("img",{className:"stekora-certificate-template",src:A4,alt:""}),r.jsx("div",{className:"stekora-certificate-name",children:i}),r.jsx("div",{className:"stekora-certificate-course",children:l}),r.jsx("div",{className:"stekora-certificate-date",children:L4(d)}),r.jsx("div",{className:"stekora-certificate-id",children:s}),r.jsx("div",{className:"stekora-certificate-motto",children:`KEEP LEARNING
KEEP BUILDING
THE FUTURE`}),r.jsx("div",{className:"stekora-certificate-qr",children:r.jsx(Tp,{value:u,level:"M",marginSize:0})})]})]})}function _4(i){return be(`/final-exam/questions/${i}`)}function M4(i,l){return be(`/final-exam/questions/${i}`,{method:"POST",body:JSON.stringify(l)})}function I4(i){return be(`/final-exam/questions/${i}`,{method:"DELETE"})}function Rp(){return be("/final-exam/submissions")}function Dp(i,l){return be(`/final-exam/submissions/${i}/review`,{method:"PATCH",body:JSON.stringify(l)})}function Up(i){return be(`/final-exam/submissions/${i}/certificate`,{method:"POST",body:JSON.stringify({})})}function F4(i){return be(`/final-exam/certificate/${i}`)}function T4({code:i}){const[l,s]=z.useState(null),[d,u]=z.useState(!0),[h,v]=z.useState("");z.useEffect(()=>{b()},[i]);async function b(){if(!i){v("Certificate code is missing"),u(!1);return}try{u(!0),v("");const f=await F4(i);s(f)}catch(f){console.error(f),v(f.message||"Certificate not found")}finally{u(!1)}}return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsx("main",{className:"verify-certificate-page",children:r.jsxs("div",{className:"verify-certificate-container",children:[d&&r.jsx("div",{className:"verify-certificate-message",children:"Checking certificate..."}),!d&&h&&r.jsx("div",{className:"verify-certificate-status",children:r.jsxs("div",{className:"verify-certificate-result invalid",children:[r.jsx(H,{icon:Bx}),h]})}),!d&&l&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"verify-certificate-status",children:[r.jsxs("div",{className:"verify-certificate-result verified",children:[r.jsx(H,{icon:lp}),"Verified certificate issued by Stekora Tech"]}),r.jsxs("button",{className:"verify-certificate-print-button",type:"button",onClick:()=>window.print(),children:[r.jsx(H,{icon:Ux}),"Print / Download PDF"]})]}),r.jsx(Op,{studentName:l.studentName,courseName:l.courseName,certificateCode:l.certificateCode,issuedDate:l.issuedDate,verificationUrl:`${window.location.origin}${window.location.pathname}#/certificate/${l.certificateCode}`})]})]})})]})}const $f=[["Overview","/admin",sp,"Main"],["Courses","/admin/courses",ba,"Learning"],["Modules","/admin/modules",fp,"Learning"],["Materials","/admin/materials",op,"Learning"],["Assessments","/admin/assessments",Rx,"Learning"],["Final Exam","/admin/final-exam",ev,"Learning"],["Submissions","/admin/exam-submissions",Zx,"Management"],["Students","/admin/students",$x,"Management"],["Products","/admin/products",np,"Shop"],["Certificates","/admin/certificates",wr,"Management"],["Settings","/admin/settings",Wl,"System"]];function O4(){return window.location.hash.replace("#","")||"/admin"}function R4(){const i=O4(),l=d=>{window.location.hash=d},s=()=>{localStorage.removeItem("token"),localStorage.removeItem("adminName"),window.location.hash="/login"};return r.jsxs("aside",{className:"admin-sidebar",children:[r.jsxs("div",{className:"admin-sidebar-brand",children:[r.jsx("span",{className:"admin-sidebar-mark",children:"ST"}),r.jsxs("span",{children:[r.jsx("strong",{children:"Stekora Tech"}),r.jsx("small",{children:"Admin Account"})]})]}),r.jsxs("nav",{className:"admin-sidebar-nav",children:[$f.map(([d,u,h,v],b)=>{const f=b>0?$f[b-1][3]:null;return r.jsxs("div",{className:"admin-sidebar-item",children:[v!==f&&r.jsx("span",{className:"admin-sidebar-group",children:v}),r.jsxs("button",{type:"button",className:i===u?"active":"",onClick:()=>l(u),children:[r.jsx("span",{className:"admin-sidebar-icon",children:r.jsx(H,{icon:h})}),r.jsx("span",{children:d})]})]},d)}),r.jsx("div",{className:"admin-sidebar-item admin-sidebar-logout",children:r.jsxs("button",{type:"button",onClick:s,children:[r.jsx("span",{className:"admin-sidebar-icon",children:r.jsx(H,{icon:ap})}),r.jsx("span",{children:"Logout"})]})})]})]})}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D4=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),$p=(...i)=>i.filter((l,s,d)=>!!l&&l.trim()!==""&&d.indexOf(l)===s).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var U4={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $4=z.forwardRef(({color:i="currentColor",size:l=24,strokeWidth:s=2,absoluteStrokeWidth:d,className:u="",children:h,iconNode:v,...b},f)=>z.createElement("svg",{ref:f,...U4,width:l,height:l,stroke:i,strokeWidth:d?Number(s)*24/Number(l):s,className:$p("lucide",u),...b},[...v.map(([p,g])=>z.createElement(p,g)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=(i,l)=>{const s=z.forwardRef(({className:d,...u},h)=>z.createElement($4,{ref:h,iconNode:l,className:$p(`lucide-${D4(i)}`,d),...u}));return s.displayName=`${i}`,s};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W4=Wp("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H4=Wp("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);function B4({placeholder:i}){return r.jsxs("label",{className:"search",children:[r.jsx(H4,{size:18}),r.jsx("input",{placeholder:i})]})}function V4({title:i}){return r.jsxs("div",{className:"topbar",children:[r.jsx("h1",{children:i}),r.jsx(B4,{placeholder:"Search admin data..."})]})}const ha="stekora-portal-theme-change";function Ji(i){return localStorage.getItem(`stekora-${i}-theme`)||"light"}function Hp(i,l){localStorage.setItem(`stekora-${i}-theme`,l),window.dispatchEvent(new CustomEvent(ha,{detail:{accountType:i,theme:l}}))}function Lt({title:i,children:l}){const[s,d]=z.useState(()=>Ji("admin"));return z.useEffect(()=>{const u=h=>{var v;((v=h.detail)==null?void 0:v.accountType)==="admin"&&d(h.detail.theme)};return window.addEventListener(ha,u),()=>window.removeEventListener(ha,u)},[]),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:`portal admin-portal ${s==="dark"?"dark-mode":""}`,children:[r.jsx(R4,{}),r.jsxs("section",{className:"portal-main admin-portal-main",children:[r.jsx(V4,{title:i}),r.jsx("div",{className:"admin-portal-content",children:l})]})]})]})}const Ui={question_type:"mcq",question:"",option_a:"",option_b:"",option_c:"",option_d:"",correct_option:"A",marks:1};function Q4(i){return i.title||i.name||"Untitled course"}function il(){return[{...Ui},{...Ui},{...Ui}]}function Y4(){const[i,l]=z.useState([]),[s,d]=z.useState([]),[u,h]=z.useState([]),[v,b]=z.useState(""),[f,p]=z.useState(""),[g,x]=z.useState(il()),[y,C]=z.useState(!1),[L,T]=z.useState(""),[_,R]=z.useState(!0),[M,D]=z.useState(!1),[V,q]=z.useState("");z.useEffect(()=>{de()},[]),z.useEffect(()=>{v?X(v):(d([]),p(""))},[v]),z.useEffect(()=>{f?fe(f):h([])},[f]);const G=s.find(k=>String(k.id)===String(f)),re=z.useMemo(()=>{const k=L.trim().toLowerCase();return k?u.filter(F=>[F.id,F.question,F.question_type,F.correct_answer,F.marks].some(E=>String(E||"").toLowerCase().includes(k))):u},[u,L]);async function de(){var k;try{R(!0),q("");const F=await jr(),E=Array.isArray(F)?F:[];l(E),b((k=E[0])!=null&&k.id?String(E[0].id):"")}catch(F){console.error(F),q(F.message||"Failed to load courses")}finally{R(!1)}}async function X(k){var F;try{q("");const E=await Tn(k),w=Array.isArray(E)?E:[];d(w),p((F=w[0])!=null&&F.id?String(w[0].id):"")}catch(E){console.error(E),q(E.message||"Failed to load modules")}}async function fe(k){try{q("");const F=await Bv(k);h(Array.isArray(F)?F:[])}catch(F){console.error(F),q(F.message||"Failed to load assessment questions")}}function pe(){x(u.length>0?u.map(k=>({question_type:k.question_type||"mcq",question:k.question||"",option_a:k.option_a||"",option_b:k.option_b||"",option_c:k.option_c||"",option_d:k.option_d||"",correct_option:k.correct_option||k.correct_answer||"A",marks:k.marks||1})):il()),C(!0)}function me(){x(il()),C(!1)}function ve(k,F,E){x(w=>w.map((O,le)=>le===k?{...O,[F]:E}:O))}function Se(){x(k=>[...k,{...Ui}])}function je(k){if(g.length<=3){alert("Assessment must have at least 3 questions");return}x(F=>F.filter((E,w)=>w!==k))}async function Ne(k){if(k.preventDefault(),!f){alert("Please choose a module first");return}const F=g.map(w=>({question_type:w.question_type,question:w.question.trim(),option_a:w.option_a.trim(),option_b:w.option_b.trim(),option_c:w.option_c.trim(),option_d:w.option_d.trim(),correct_option:w.correct_option,marks:Number(w.marks||1)}));if(F.length<3){alert("Assessment must have at least 3 questions");return}if(F.some(w=>w.question?w.question_type==="open"?!1:!w.option_a||!w.option_b||!w.correct_option:!0)){alert("Each MCQ needs a question, option A, option B, and correct answer");return}D(!0);try{await Vv(f,{questions:F}),alert("Assessment saved"),me(),await fe(f)}catch(w){console.error(w),alert(w.message||"Failed to save assessment")}finally{D(!1)}}async function xe(k){if(window.confirm("Delete this question?"))try{await Qv(k),await fe(f)}catch(F){console.error(F),alert(F.message||"Failed to delete question")}}return r.jsxs(Lt,{title:"Assessments",children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"admin-assessments-page",children:[r.jsxs("div",{className:"admin-assessments-actions-bar",children:[r.jsxs("button",{className:"admin-assessments-big-btn green",type:"button",onClick:pe,children:[r.jsx(H,{icon:qx}),"Add Assessment"]}),r.jsxs("button",{className:"admin-assessments-big-btn",type:"button",onClick:()=>window.location.hash="/admin/modules",children:[r.jsx(H,{icon:Xt}),"Add Module"]})]}),r.jsxs("section",{className:"admin-assessments-panel",children:[r.jsxs("div",{className:"admin-assessments-header",children:[r.jsx("h2",{children:"Module Assessments"}),r.jsxs("p",{children:["Choose a course and module, then create at least three questions. Pass mark is 60%.",G?` Current module: ${G.title}.`:""]})]}),r.jsxs("div",{className:"admin-assessments-select-row",children:[r.jsxs("label",{className:"admin-assessments-field",children:["Course",r.jsxs("select",{className:"admin-assessments-select",value:v,onChange:k=>b(k.target.value),disabled:_||i.length===0,children:[i.length===0&&r.jsx("option",{value:"",children:"No courses yet"}),i.map(k=>r.jsx("option",{value:k.id,children:Q4(k)},k.id))]})]}),r.jsxs("label",{className:"admin-assessments-field",children:["Module",r.jsxs("select",{className:"admin-assessments-select",value:f,onChange:k=>p(k.target.value),disabled:s.length===0,children:[s.length===0&&r.jsx("option",{value:"",children:"No modules yet"}),s.map(k=>r.jsx("option",{value:k.id,children:k.title},k.id))]})]})]}),r.jsxs("div",{className:"admin-assessments-toolbar",children:[r.jsxs("div",{className:"admin-assessments-count",children:["Showing ",r.jsx("strong",{children:re.length})," of ",r.jsx("strong",{children:u.length})," questions"]}),r.jsxs("label",{className:"admin-assessments-search-wrap",children:["Search questions:",r.jsx("input",{className:"admin-assessments-search",type:"search",value:L,onChange:k=>T(k.target.value)})]})]}),V&&r.jsx("div",{className:"admin-assessments-empty",children:V}),_&&r.jsx("div",{className:"admin-assessments-empty",children:"Loading courses..."}),!_&&i.length===0&&r.jsx("div",{className:"admin-assessments-empty",children:"No courses yet."}),!_&&i.length>0&&s.length===0&&r.jsx("div",{className:"admin-assessments-empty",children:"No modules yet. Create modules first."}),!_&&f&&u.length===0&&r.jsx("div",{className:"admin-assessments-empty",children:"No assessment questions have been saved for this module yet."}),!_&&f&&u.length>0&&r.jsx("div",{className:"admin-assessments-table-wrap",children:r.jsxs("table",{className:"admin-assessments-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"ID"}),r.jsx("th",{children:"Question"}),r.jsx("th",{children:"Type"}),r.jsx("th",{children:"Correct"}),r.jsx("th",{children:"Marks"}),r.jsx("th",{children:"Actions"})]})}),r.jsx("tbody",{children:re.map(k=>r.jsxs("tr",{children:[r.jsx("td",{children:k.id}),r.jsx("td",{children:k.question}),r.jsx("td",{children:k.question_type}),r.jsx("td",{children:k.correct_answer||"Manual"}),r.jsx("td",{children:k.marks}),r.jsxs("td",{children:[r.jsxs("button",{className:"admin-assessment-action edit",type:"button",onClick:pe,children:[r.jsx(H,{icon:ya}),"Edit"]}),r.jsxs("button",{className:"admin-assessment-action delete",type:"button",onClick:()=>xe(k.id),children:[r.jsx(H,{icon:br}),"Delete"]})]})]},k.id))})]})})]}),y&&r.jsx("div",{className:"admin-assessments-modal-backdrop",role:"presentation",onClick:me,children:r.jsxs("section",{className:"admin-assessments-modal",role:"dialog","aria-modal":"true",onClick:k=>k.stopPropagation(),children:[r.jsxs("div",{className:"admin-assessments-modal-head",children:[r.jsxs("div",{className:"admin-assessments-header",children:[r.jsx("h2",{children:"Section Assessment"}),r.jsx("p",{children:"Save all questions for the selected module. This replaces the current assessment for that module."})]}),r.jsx("button",{className:"admin-assessments-close",type:"button",onClick:me,"aria-label":"Close assessment form",children:"x"})]}),r.jsxs("form",{className:"admin-assessments-form",onSubmit:Ne,children:[g.map((k,F)=>r.jsxs("div",{className:"admin-assessment-question-card",children:[r.jsxs("div",{className:"admin-assessment-question-head",children:[r.jsxs("span",{children:["Question ",F+1]}),g.length>3&&r.jsx("button",{className:"admin-assessments-danger",type:"button",onClick:()=>je(F),children:"Remove"})]}),r.jsxs("label",{className:"admin-assessments-field",children:["Question type",r.jsxs("select",{className:"admin-assessments-select",value:k.question_type,onChange:E=>ve(F,"question_type",E.target.value),children:[r.jsx("option",{value:"mcq",children:"Multiple Choice"}),r.jsx("option",{value:"open",children:"Open Answer"})]})]}),r.jsxs("label",{className:"admin-assessments-field",children:["Question",r.jsx("textarea",{className:"admin-assessments-textarea",value:k.question,onChange:E=>ve(F,"question",E.target.value),placeholder:"Write question..."})]}),k.question_type==="mcq"&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"admin-assessment-options-grid",children:["a","b","c","d"].map(E=>r.jsxs("label",{className:"admin-assessments-field",children:["Option ",E.toUpperCase(),r.jsx("input",{className:"admin-assessments-input",value:k[`option_${E}`],onChange:w=>ve(F,`option_${E}`,w.target.value)})]},E))}),r.jsxs("label",{className:"admin-assessments-field",children:["Correct answer",r.jsxs("select",{className:"admin-assessments-select",value:k.correct_option,onChange:E=>ve(F,"correct_option",E.target.value),children:[r.jsx("option",{value:"A",children:"A"}),r.jsx("option",{value:"B",children:"B"}),r.jsx("option",{value:"C",children:"C"}),r.jsx("option",{value:"D",children:"D"})]})]})]}),r.jsxs("label",{className:"admin-assessments-field",children:["Marks",r.jsx("input",{className:"admin-assessments-input",type:"number",min:"1",value:k.marks,onChange:E=>ve(F,"marks",E.target.value)})]})]},`question-${F}`)),r.jsxs("div",{className:"admin-assessments-form-actions",children:[r.jsxs("button",{className:"admin-assessments-secondary",type:"button",onClick:Se,children:[r.jsx(H,{icon:Xt}),"Add Question"]}),r.jsx("button",{className:"admin-assessments-primary",type:"submit",disabled:M,children:M?"Saving...":"Save Assessment"}),r.jsx("button",{className:"admin-assessments-secondary",type:"button",onClick:me,children:"Cancel"})]})]})]})})]})]})}function q4({columns:i,rows:l}){return r.jsxs("table",{className:"table",children:[r.jsx("thead",{children:r.jsx("tr",{children:i.map(s=>r.jsx("th",{children:s},s))})}),r.jsx("tbody",{children:l.map(s=>r.jsx("tr",{children:i.map(d=>r.jsx("td",{children:s[d.toLowerCase()]},d))},s.id))})]})}function G4(){return r.jsxs(Lt,{title:"Certificates",children:[r.jsx(q4,{columns:["Student","Course","Code","Status"],rows:[{id:1,student:"Sample Student",course:"Web Development",code:"STK-2026-001",status:"verified"}]}),r.jsxs("div",{className:"list-panel",children:[r.jsx("button",{className:"primary",children:"Open Verification Link"}),r.jsx("button",{children:"Revoke Certificate"})]})]})}const Wf={title:"",category:"Development",description:"",image_url:"",image:null,modules:[""]};function Fi(i){return i.title||i.name||"Untitled course"}function X4(){const[i,l]=z.useState([]),[s,d]=z.useState(Wf),[u,h]=z.useState(null),[v,b]=z.useState(!1),[f,p]=z.useState(""),[g,x]=z.useState(!0),[y,C]=z.useState(!1),[L,T]=z.useState(""),[_,R]=z.useState(null),[M,D]=z.useState([]),[V,q]=z.useState(""),[G,re]=z.useState(!1);z.useEffect(()=>{X()},[]);const de=z.useMemo(()=>{const U=f.trim().toLowerCase();return U?i.filter(K=>[K.id,Fi(K),K.category,K.description].some(ie=>String(ie||"").toLowerCase().includes(U))):i},[i,f]);async function X(){try{x(!0),T("");const U=await jr();l(Array.isArray(U)?U:[])}catch(U){console.error(U),T(U.message||"Failed to load courses")}finally{x(!1)}}function fe(){d(Wf),h(null)}function pe(){fe(),b(!0)}function me(){fe(),b(!1)}function ve(U){h(U.id),d({title:Fi(U),category:U.category||"Development",description:U.description||"",image_url:U.image_url||"",image:null,modules:[""]}),b(!0)}function Se(U){d({...s,[U.target.name]:U.target.value})}function je(U,K){d({...s,modules:s.modules.map((ie,ke)=>ke===U?K:ie)})}function Ne(){d({...s,modules:[...s.modules,""]})}function xe(U){d({...s,modules:s.modules.filter((K,ie)=>ie!==U)})}async function k(U){if(U.preventDefault(),y)return;const K=s.title.trim();if(!K){alert("Course title is required");return}C(!0);try{const ie=new FormData;ie.append("title",K),ie.append("category",s.category.trim()),ie.append("description",s.description.trim()),ie.append("image_url",s.image_url.trim()),ie.append("modules",JSON.stringify(s.modules.map(ke=>ke.trim()).filter(Boolean))),s.image&&ie.append("image",s.image),u?(await Rv(u,ie),alert("Course updated")):(await Ov(ie),alert("Course created")),me(),await X()}catch(ie){console.error(ie),alert(ie.message||"Failed to save course")}finally{C(!1)}}async function F(U){if(window.confirm("Delete this course?"))try{await Dv(U),u===U&&fe(),await X()}catch(K){console.error(K),alert(K.message||"Failed to delete course")}}async function E(U){R(U),q(""),D([]),re(!0);try{const K=await Tn(U.id);D(Array.isArray(K)?K:[])}catch(K){console.error(K),alert(K.message||"Failed to load curriculum")}finally{re(!1)}}function w(){R(null),D([]),q("")}async function O(U){if(U.preventDefault(),!(!_||!V.trim()))try{await jp(_.id,{title:V.trim()}),q("");const K=await Tn(_.id);D(Array.isArray(K)?K:[]),await X()}catch(K){console.error(K),alert(K.message||"Failed to add module")}}async function le(U){if(window.confirm("Delete this module?"))try{await kp(U);const K=await Tn(_.id);D(Array.isArray(K)?K:[]),await X()}catch(K){console.error(K),alert(K.message||"Failed to delete module")}}return r.jsxs(Lt,{title:"Public Courses",children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"admin-courses-page",children:[r.jsxs("div",{className:"admin-courses-actions-bar",children:[r.jsxs("button",{className:"admin-courses-big-btn green",type:"button",onClick:pe,children:[r.jsx(H,{icon:ba}),"Add public course"]}),r.jsxs("button",{className:"admin-courses-big-btn",type:"button",onClick:pe,children:[r.jsx(H,{icon:Xt}),"New Course"]}),r.jsxs("button",{className:"admin-courses-big-btn",type:"button",onClick:()=>alert("Excel import will be added after upload support."),children:[r.jsx(H,{icon:tp}),"Import Courses (Excel)"]})]}),r.jsxs("section",{className:"admin-courses-panel",children:[r.jsxs("div",{className:"admin-courses-header",children:[r.jsxs("div",{children:[r.jsx("h2",{children:"Public Courses"}),r.jsx("p",{children:"Manage the courses that appear on the public study page."})]}),r.jsx("button",{className:"admin-courses-primary",type:"button",onClick:pe,children:"Add public course"})]}),r.jsxs("div",{className:"admin-courses-toolbar",children:[r.jsxs("div",{className:"admin-courses-count",children:["Showing ",r.jsx("strong",{children:de.length})," of ",r.jsx("strong",{children:i.length})," public courses"]}),r.jsxs("label",{className:"admin-courses-search-wrap",children:["Search courses:",r.jsx("input",{className:"admin-courses-search",type:"search",value:f,onChange:U=>p(U.target.value)})]})]}),g&&r.jsx("div",{className:"admin-courses-empty",children:"Loading courses..."}),L&&r.jsx("div",{className:"admin-courses-empty",children:L}),!g&&!L&&i.length===0&&r.jsx("div",{className:"admin-courses-empty",children:"No courses in the database yet."}),!g&&!L&&i.length>0&&r.jsx("div",{className:"admin-courses-table-wrap",children:r.jsxs("table",{className:"admin-courses-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"ID"}),r.jsx("th",{children:"Image"}),r.jsx("th",{children:"Name"}),r.jsx("th",{children:"Category"}),r.jsx("th",{children:"Description"}),r.jsx("th",{children:"Lessons"}),r.jsx("th",{children:"Actions"})]})}),r.jsx("tbody",{children:de.map(U=>r.jsxs("tr",{children:[r.jsx("td",{children:U.id}),r.jsx("td",{children:U.image_url?r.jsx("img",{className:"admin-courses-image",src:At(U.image_url),alt:""}):"No image"}),r.jsx("td",{children:Fi(U)}),r.jsx("td",{children:U.category||"Uncategorized"}),r.jsx("td",{children:U.description||"No description"}),r.jsx("td",{children:U.modules_count||U.module_count||0}),r.jsx("td",{children:r.jsxs("div",{className:"admin-courses-row-actions",children:[r.jsxs("button",{className:"admin-course-action edit",type:"button",onClick:()=>ve(U),children:[r.jsx(H,{icon:ya}),"Edit"]}),r.jsxs("button",{className:"admin-course-action curriculum",type:"button",onClick:()=>E(U),children:[r.jsx(H,{icon:sv}),"Curriculum"]}),r.jsxs("button",{className:"admin-course-action delete",type:"button",onClick:()=>F(U.id),children:[r.jsx(H,{icon:br}),"Delete"]})]})})]},U.id))})]})})]}),v&&r.jsx("div",{className:"admin-courses-modal-backdrop",role:"presentation",onClick:me,children:r.jsxs("section",{className:"admin-courses-modal",role:"dialog","aria-modal":"true",onClick:U=>U.stopPropagation(),children:[r.jsxs("div",{className:"admin-courses-modal-head",children:[r.jsx("h2",{children:u?"Edit public course":"Add public course"}),r.jsx("button",{className:"admin-courses-close",type:"button",onClick:me,"aria-label":"Close course form",children:"x"})]}),r.jsxs("form",{className:"admin-courses-form",onSubmit:k,children:[r.jsxs("div",{className:"admin-courses-grid",children:[r.jsxs("label",{children:["Course title",r.jsx("input",{name:"title",value:s.title,onChange:Se,required:!0})]}),r.jsxs("label",{children:["Category",r.jsxs("select",{name:"category",value:s.category,onChange:Se,children:[r.jsx("option",{children:"Development"}),r.jsx("option",{children:"Backend"}),r.jsx("option",{children:"IoT"}),r.jsx("option",{children:"Design"}),r.jsx("option",{children:"Security"}),r.jsx("option",{children:"Infrastructure"})]})]}),r.jsxs("label",{children:["Course image",r.jsx("input",{className:"admin-courses-file-input",type:"file",accept:"image/*",onChange:U=>{var K;return d({...s,image:((K=U.target.files)==null?void 0:K[0])||null})}}),r.jsx("span",{className:"admin-courses-help",children:"Choose an image from your computer."})]})]}),(s.image||s.image_url)&&r.jsx("img",{className:"admin-courses-preview",src:s.image?URL.createObjectURL(s.image):At(s.image_url),alt:"Course preview"}),r.jsxs("label",{children:["Description",r.jsx("textarea",{name:"description",value:s.description,onChange:Se})]}),!u&&r.jsxs("label",{children:["First curriculum modules",r.jsxs("div",{className:"admin-courses-module-drafts",children:[s.modules.map((U,K)=>r.jsxs("div",{className:"admin-courses-module-row",children:[r.jsx("input",{value:U,onChange:ie=>je(K,ie.target.value),placeholder:`Module ${K+1}`}),s.modules.length>1&&r.jsx("button",{className:"admin-courses-small-btn",type:"button",onClick:()=>xe(K),children:"Remove"})]},`module-${K}`)),r.jsx("button",{className:"admin-courses-small-btn",type:"button",onClick:Ne,children:"Add module"})]})]}),r.jsxs("div",{className:"admin-courses-actions",children:[r.jsx("button",{className:"admin-courses-primary",type:"submit",disabled:y,children:y?"Saving...":u?"Update Course":"Save Course"}),r.jsx("button",{className:"admin-courses-secondary",type:"button",onClick:me,children:"Cancel"})]})]})]})}),_&&r.jsx("div",{className:"admin-courses-modal-backdrop",role:"presentation",onClick:w,children:r.jsxs("section",{className:"admin-courses-modal",role:"dialog","aria-modal":"true",onClick:U=>U.stopPropagation(),children:[r.jsxs("div",{className:"admin-courses-modal-head",children:[r.jsxs("h2",{children:["Curriculum: ",Fi(_)]}),r.jsx("button",{className:"admin-courses-close",type:"button",onClick:w,"aria-label":"Close curriculum",children:"x"})]}),r.jsxs("form",{className:"admin-courses-form",onSubmit:O,children:[r.jsxs("label",{children:["Module title",r.jsx("input",{value:V,onChange:U=>q(U.target.value),placeholder:"Introduction"})]}),r.jsxs("div",{className:"admin-courses-actions",children:[r.jsx("button",{className:"admin-courses-primary",type:"submit",children:"Add Module"}),r.jsx("button",{className:"admin-courses-secondary",type:"button",onClick:w,children:"Done"})]})]}),G&&r.jsx("div",{className:"admin-courses-empty",children:"Loading curriculum..."}),!G&&M.length===0&&r.jsx("div",{className:"admin-courses-empty",children:"No modules have been added for this course yet."}),!G&&M.length>0&&r.jsx("ul",{className:"admin-courses-module-list",children:M.map(U=>r.jsxs("li",{children:[r.jsxs("span",{children:[U.order_number,". ",U.title]}),r.jsx("button",{className:"admin-courses-danger",type:"button",onClick:()=>le(U.id),children:"Delete"})]},U.id))})]})})]})]})}function K4(){const[i,l]=z.useState([]),[s,d]=z.useState(""),[u,h]=z.useState(!0),[v,b]=z.useState("");z.useEffect(()=>{p()},[]);const f=z.useMemo(()=>{const y=s.trim().toLowerCase();return y?i.filter(C=>[C.id,C.student_name,C.student_email,C.course_title,C.status,C.score].some(L=>String(L||"").toLowerCase().includes(y))):i},[i,s]);async function p(){try{h(!0),b("");const y=await Rp();l(Array.isArray(y)?y:[])}catch(y){console.error(y),b(y.message||"Failed to load exam submissions")}finally{h(!1)}}async function g(y,C){const L=window.prompt("Enter the student's total score percentage",y.score||0);if(L===null)return;const T=Number(L);if(!Number.isFinite(T)||T<0||T>100){alert("Enter a score between 0 and 100");return}try{await Dp(y.id,{score:T,status:C,allow_reexam:C==="rejected"}),await p()}catch(_){console.error(_),alert(_.message||"Failed to review submission")}}async function x(y){if(Number(y.score||0)<60&&y.status!=="approved"){alert("Approve a competent student before assigning a certificate");return}try{const C=await Up(y.id);alert(`Certificate: ${C.certificateCode}`),await p()}catch(C){console.error(C),alert(C.message||"Failed to assign certificate")}}return r.jsxs(Lt,{title:"Exam Submissions",children:[r.jsx("style",{children:`
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
      `}),r.jsx("div",{className:"admin-submissions-page",children:r.jsxs("section",{className:"admin-data-panel",children:[r.jsxs("div",{className:"admin-data-toolbar",children:[r.jsxs("div",{className:"admin-data-count",children:["Showing ",f.length," of ",i.length," submissions"]}),r.jsxs("div",{className:"admin-data-tools",children:[r.jsxs("label",{className:"admin-data-search",children:["Search:",r.jsx("input",{type:"search",value:s,onChange:y=>d(y.target.value)})]}),r.jsxs("button",{className:"admin-refresh-button",type:"button",onClick:p,children:[r.jsx(H,{icon:Ul}),"Refresh"]})]})]}),u&&r.jsx("div",{className:"admin-data-message",children:"Loading submissions..."}),v&&r.jsx("div",{className:"admin-data-message",children:v}),!u&&!v&&i.length===0&&r.jsx("div",{className:"admin-data-message",children:"No final exam submissions found."}),!u&&!v&&i.length>0&&r.jsx("div",{className:"admin-live-table-wrap",children:r.jsxs("table",{className:"admin-live-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"ID"}),r.jsx("th",{children:"Student"}),r.jsx("th",{children:"Email"}),r.jsx("th",{children:"Course"}),r.jsx("th",{children:"Status"}),r.jsx("th",{children:"Score"}),r.jsx("th",{children:"Certificate"}),r.jsx("th",{children:"Submitted"}),r.jsx("th",{children:"Actions"})]})}),r.jsx("tbody",{children:f.map(y=>r.jsxs("tr",{children:[r.jsx("td",{children:y.id}),r.jsx("td",{children:y.student_name}),r.jsx("td",{children:y.student_email}),r.jsx("td",{children:y.course_title}),r.jsx("td",{children:y.status}),r.jsxs("td",{children:[y.score||0,"%"]}),r.jsx("td",{children:y.certificate_code||"Not assigned"}),r.jsx("td",{children:new Date(y.created_at).toLocaleString()}),r.jsx("td",{children:r.jsxs("div",{className:"admin-row-actions",children:[r.jsxs("button",{className:"admin-row-action approve",type:"button",onClick:()=>g(y,"approved"),children:[r.jsx(H,{icon:ip})," Approve"]}),r.jsxs("button",{className:"admin-row-action reexam",type:"button",onClick:()=>g(y,"rejected"),children:[r.jsx(H,{icon:tv})," Re-exam"]}),r.jsxs("button",{className:"admin-row-action certificate",type:"button",onClick:()=>x(y),children:[r.jsx(H,{icon:wr})," Certificate"]})]})})]},y.id))})]})})]})})]})}const Bp={question_type:"mcq",question:"",option_a:"",option_b:"",option_c:"",option_d:"",correct_option:"A",marks:1};function Hf(i){return i.title||i.name||"Untitled course"}function sl(){return[{...Bp}]}function J4(){const[i,l]=z.useState([]),[s,d]=z.useState(""),[u,h]=z.useState([]),[v,b]=z.useState([]),[f,p]=z.useState(sl()),[g,x]=z.useState(!1),[y,C]=z.useState(""),[L,T]=z.useState(!0),[_,R]=z.useState(!1),[M,D]=z.useState("");z.useEffect(()=>{G(),de()},[]),z.useEffect(()=>{s?re(s):h([])},[s]);const V=i.find(k=>String(k.id)===String(s)),q=z.useMemo(()=>{const k=y.trim().toLowerCase();return k?v.filter(F=>[F.id,F.student_name,F.student_email,F.course_title,F.status,F.score,F.certificate_code].some(E=>String(E||"").toLowerCase().includes(k))):v},[v,y]);async function G(){var k;try{T(!0),D("");const F=await jr(),E=Array.isArray(F)?F:[];l(E),d((k=E[0])!=null&&k.id?String(E[0].id):"")}catch(F){console.error(F),D(F.message||"Failed to load courses")}finally{T(!1)}}async function re(k){try{D("");const F=await _4(k);h(Array.isArray(F)?F:[])}catch(F){console.error(F),D(F.message||"Failed to load final exam questions")}}async function de(){try{const k=await Rp();b(Array.isArray(k)?k:[])}catch(k){console.error(k)}}function X(){p(u.length>0?u.map(k=>({question_type:k.question_type||k.type||"mcq",question:k.question||"",option_a:k.option_a||"",option_b:k.option_b||"",option_c:k.option_c||"",option_d:k.option_d||"",correct_option:k.correct_option||k.correct_answer||"A",marks:k.marks||1})):sl()),x(!0)}function fe(){p(sl()),x(!1)}function pe(k,F,E){p(w=>w.map((O,le)=>le===k?{...O,[F]:E}:O))}function me(){p(k=>[...k,{...Bp}])}function ve(k){if(f.length<=1){alert("Final exam needs at least one question");return}p(F=>F.filter((E,w)=>w!==k))}async function Se(k){if(k.preventDefault(),!s){alert("Please select a course first");return}const F=f.map(w=>({question_type:w.question_type,question:w.question.trim(),option_a:w.option_a.trim(),option_b:w.option_b.trim(),option_c:w.option_c.trim(),option_d:w.option_d.trim(),correct_option:w.correct_option,marks:Number(w.marks||1)}));if(F.some(w=>w.question?w.question_type==="open"?!1:!w.option_a||!w.option_b||!w.correct_option:!0)){alert("Each MCQ needs a question, option A, option B, and correct answer");return}R(!0);try{await M4(s,{questions:F}),alert("Final exam questions saved"),fe(),await re(s)}catch(w){console.error(w),alert(w.message||"Failed to save final exam questions")}finally{R(!1)}}async function je(k){if(window.confirm("Delete this final exam question?"))try{await I4(k),await re(s)}catch(F){console.error(F),alert(F.message||"Failed to delete question")}}async function Ne(k,F){const E=window.prompt("Enter total score percent",k.score||0);if(E!==null)try{await Dp(k.id,{score:Number(E),status:F,allow_reexam:F==="rejected"}),await de()}catch(w){console.error(w),alert(w.message||"Failed to review submission")}}async function xe(k){try{const F=await Up(k);alert(`Certificate assigned: ${F.certificateCode}`),await de()}catch(F){console.error(F),alert(F.message||"Failed to assign certificate")}}return r.jsxs(Lt,{title:"Final Exam & Certificates",children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"admin-exam-page",children:[r.jsxs("div",{className:"admin-exam-actions-bar",children:[r.jsxs("button",{className:"admin-exam-big-btn green",type:"button",onClick:X,children:[r.jsx(H,{icon:Qx}),"Add Final Exam"]}),r.jsxs("button",{className:"admin-exam-big-btn",type:"button",onClick:de,children:[r.jsx(H,{icon:Ul}),"Refresh"]})]}),r.jsxs("section",{className:"admin-exam-panel",children:[r.jsxs("div",{className:"admin-exam-header",children:[r.jsx("h2",{children:"Final Exam Questions"}),r.jsxs("p",{children:["Set final exam questions separately from student grading. Supports MCQ and open questions.",V?` Current course: ${Hf(V)}.`:""]})]}),r.jsxs("div",{className:"admin-exam-controls",children:[r.jsxs("label",{className:"admin-exam-field",children:["Course",r.jsxs("select",{className:"admin-exam-select",value:s,onChange:k=>d(k.target.value),disabled:L||i.length===0,children:[i.length===0&&r.jsx("option",{value:"",children:"No courses yet"}),i.map(k=>r.jsx("option",{value:k.id,children:Hf(k)},k.id))]})]}),r.jsxs("button",{className:"admin-exam-primary",type:"button",onClick:X,children:[r.jsx(H,{icon:Xt}),"Add/Edit Questions"]})]}),M&&r.jsx("div",{className:"admin-exam-empty",children:M}),L&&r.jsx("div",{className:"admin-exam-empty",children:"Loading courses..."}),!L&&s&&u.length===0&&r.jsx("div",{className:"admin-exam-empty",children:"Select a course above to create or edit its final exam questions."}),!L&&s&&u.length>0&&r.jsx("div",{className:"admin-exam-table-wrap",children:r.jsxs("table",{className:"admin-exam-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"ID"}),r.jsx("th",{children:"Question"}),r.jsx("th",{children:"Type"}),r.jsx("th",{children:"Correct"}),r.jsx("th",{children:"Marks"}),r.jsx("th",{children:"Actions"})]})}),r.jsx("tbody",{children:u.map(k=>r.jsxs("tr",{children:[r.jsx("td",{children:k.id}),r.jsx("td",{children:k.question}),r.jsx("td",{children:k.question_type}),r.jsx("td",{children:k.correct_answer||"Manual"}),r.jsx("td",{children:k.marks}),r.jsxs("td",{children:[r.jsxs("button",{className:"admin-exam-action edit",type:"button",onClick:X,children:[r.jsx(H,{icon:ya}),"Edit"]}),r.jsxs("button",{className:"admin-exam-action delete",type:"button",onClick:()=>je(k.id),children:[r.jsx(H,{icon:br}),"Delete"]})]})]},k.id))})]})})]}),r.jsxs("section",{className:"admin-exam-panel",children:[r.jsxs("div",{className:"admin-exam-header",children:[r.jsx("h2",{children:"Final Exam Grading & Submissions"}),r.jsx("p",{children:"Review answers, allow re-exam for failed students, and assign certificates only to competent students."})]}),r.jsxs("div",{className:"admin-exam-toolbar",children:[r.jsxs("div",{className:"admin-exam-count",children:["Showing ",r.jsx("strong",{children:q.length})," of ",r.jsx("strong",{children:v.length})," submissions"]}),r.jsxs("label",{className:"admin-exam-search-wrap",children:["Search submissions:",r.jsx("input",{className:"admin-exam-search",type:"search",value:y,onChange:k=>C(k.target.value)})]}),r.jsx("button",{className:"admin-exam-primary",type:"button",onClick:de,children:"Refresh"})]}),v.length===0?r.jsx("div",{className:"admin-exam-empty",children:"No final exam submissions found."}):r.jsx("div",{className:"admin-exam-table-wrap",children:r.jsxs("table",{className:"admin-exam-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"ID"}),r.jsx("th",{children:"Student"}),r.jsx("th",{children:"Email"}),r.jsx("th",{children:"Course"}),r.jsx("th",{children:"Status"}),r.jsx("th",{children:"Total Score"}),r.jsx("th",{children:"Certificate"}),r.jsx("th",{children:"Re-exam"}),r.jsx("th",{children:"Submitted"}),r.jsx("th",{children:"Actions"})]})}),r.jsx("tbody",{children:q.map(k=>r.jsxs("tr",{children:[r.jsx("td",{children:k.id}),r.jsx("td",{children:k.student_name}),r.jsx("td",{children:k.student_email}),r.jsx("td",{children:k.course_title}),r.jsx("td",{children:k.status}),r.jsxs("td",{children:[k.score||0,"%"]}),r.jsx("td",{children:k.certificate_code||"Not assigned"}),r.jsx("td",{children:k.allow_reexam?"Yes":"No"}),r.jsx("td",{children:k.created_at?new Date(k.created_at).toLocaleDateString():"-"}),r.jsxs("td",{children:[r.jsx("button",{className:"admin-exam-action pass",type:"button",onClick:()=>Ne(k,"approved"),children:"Approve"}),r.jsx("button",{className:"admin-exam-action delete",type:"button",onClick:()=>Ne(k,"rejected"),children:"Re-exam"}),r.jsxs("button",{className:"admin-exam-action cert",type:"button",onClick:()=>xe(k.id),children:[r.jsx(H,{icon:wr}),"Certificate"]})]})]},k.id))})]})})]}),g&&r.jsx("div",{className:"admin-exam-modal-backdrop",role:"presentation",onClick:fe,children:r.jsxs("section",{className:"admin-exam-modal",role:"dialog","aria-modal":"true",onClick:k=>k.stopPropagation(),children:[r.jsxs("div",{className:"admin-exam-modal-head",children:[r.jsxs("div",{className:"admin-exam-header",children:[r.jsx("h2",{children:"Final Exam Questions"}),r.jsx("p",{children:"Saving replaces all final exam questions for the selected course."})]}),r.jsx("button",{className:"admin-exam-close",type:"button",onClick:fe,"aria-label":"Close final exam form",children:"x"})]}),r.jsxs("form",{className:"admin-exam-form",onSubmit:Se,children:[f.map((k,F)=>r.jsxs("div",{className:"admin-exam-question-card",children:[r.jsxs("div",{className:"admin-exam-question-head",children:[r.jsxs("span",{children:["Question ",F+1]}),f.length>1&&r.jsx("button",{className:"admin-exam-danger",type:"button",onClick:()=>ve(F),children:"Remove"})]}),r.jsxs("label",{className:"admin-exam-field",children:["Question type",r.jsxs("select",{className:"admin-exam-select",value:k.question_type,onChange:E=>pe(F,"question_type",E.target.value),children:[r.jsx("option",{value:"mcq",children:"Multiple Choice"}),r.jsx("option",{value:"open",children:"Open Answer"})]})]}),r.jsxs("label",{className:"admin-exam-field",children:["Question",r.jsx("textarea",{className:"admin-exam-textarea",value:k.question,onChange:E=>pe(F,"question",E.target.value),placeholder:"Write final exam question..."})]}),k.question_type==="mcq"&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"admin-exam-options-grid",children:["a","b","c","d"].map(E=>r.jsxs("label",{className:"admin-exam-field",children:["Option ",E.toUpperCase(),r.jsx("input",{className:"admin-exam-input",value:k[`option_${E}`],onChange:w=>pe(F,`option_${E}`,w.target.value)})]},E))}),r.jsxs("label",{className:"admin-exam-field",children:["Correct answer",r.jsxs("select",{className:"admin-exam-select",value:k.correct_option,onChange:E=>pe(F,"correct_option",E.target.value),children:[r.jsx("option",{value:"A",children:"A"}),r.jsx("option",{value:"B",children:"B"}),r.jsx("option",{value:"C",children:"C"}),r.jsx("option",{value:"D",children:"D"})]})]})]}),r.jsxs("label",{className:"admin-exam-field",children:["Marks",r.jsx("input",{className:"admin-exam-input",type:"number",min:"1",value:k.marks,onChange:E=>pe(F,"marks",E.target.value)})]})]},`exam-question-${F}`)),r.jsxs("div",{className:"admin-exam-form-actions",children:[r.jsxs("button",{className:"admin-exam-secondary",type:"button",onClick:me,children:[r.jsx(H,{icon:Xt}),"Add Question"]}),r.jsx("button",{className:"admin-exam-primary",type:"submit",disabled:_,children:_?"Saving...":"Save Final Exam"}),r.jsx("button",{className:"admin-exam-secondary",type:"button",onClick:fe,children:"Cancel"})]})]})]})})]})]})}const Bf={title:"",type:"section",content:"",youtube_url:"",file_url:"",file:null};function Z4(i){return i.title||i.name||"Untitled course"}function Vf(i){return i.youtube_url?"Video":i.file_url?"File":"Section"}function e3(){const[i,l]=z.useState([]),[s,d]=z.useState([]),[u,h]=z.useState([]),[v,b]=z.useState(""),[f,p]=z.useState(""),[g,x]=z.useState(Bf),[y,C]=z.useState(null),[L,T]=z.useState(!1),[_,R]=z.useState(""),[M,D]=z.useState(!0),[V,q]=z.useState(!1),[G,re]=z.useState("");z.useEffect(()=>{fe()},[]),z.useEffect(()=>{v?pe(v):(d([]),p(""))},[v]),z.useEffect(()=>{f?me(f):h([])},[f]);const de=s.find(E=>String(E.id)===String(f)),X=z.useMemo(()=>{const E=_.trim().toLowerCase();return E?u.filter(w=>[w.id,w.title,w.content,w.youtube_url,w.file_url,Vf(w)].some(O=>String(O||"").toLowerCase().includes(E))):u},[u,_]);async function fe(){var E;try{D(!0),re("");const w=await jr(),O=Array.isArray(w)?w:[];l(O),b((E=O[0])!=null&&E.id?String(O[0].id):"")}catch(w){console.error(w),re(w.message||"Failed to load courses")}finally{D(!1)}}async function pe(E){var w;try{re("");const O=await Tn(E),le=Array.isArray(O)?O:[];d(le),p((w=le[0])!=null&&w.id?String(le[0].id):"")}catch(O){console.error(O),re(O.message||"Failed to load modules")}}async function me(E){try{re("");const w=await Uv(E);h(Array.isArray(w)?w:[])}catch(w){console.error(w),re(w.message||"Failed to load materials")}}function ve(){x(Bf),C(null)}function Se(){ve(),T(!0)}function je(){ve(),T(!1)}function Ne(E){x({...g,[E.target.name]:E.target.value})}function xe(E){C(E.id),x({title:E.title||"",type:E.youtube_url?"video":E.file_url?"file":"section",content:E.content||"",youtube_url:E.youtube_url||"",file_url:E.file_url||"",file:null}),T(!0)}async function k(E){if(E.preventDefault(),!f){alert("Please choose a module first");return}if(!g.title.trim()){alert("Section title is required");return}q(!0);try{const w=new FormData;w.append("title",g.title.trim()),w.append("content",g.content.trim()),w.append("youtube_url",g.type==="video"?g.youtube_url.trim():""),w.append("file_url",g.type==="file"?g.file_url.trim():""),g.type==="file"&&g.file&&w.append("file",g.file),y?(await Wv(y,w),alert("Material updated")):(await $v(f,w),alert("Material saved")),ve(),T(!1),await me(f)}catch(w){console.error(w),alert(w.message||"Failed to save material")}finally{q(!1)}}async function F(E){if(window.confirm("Delete this material?"))try{await Hv(E),y===E&&ve(),await me(f)}catch(w){console.error(w),alert(w.message||"Failed to delete material")}}return r.jsxs(Lt,{title:"Materials",children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"admin-materials-page",children:[r.jsxs("div",{className:"admin-materials-actions-bar",children:[r.jsxs("button",{className:"admin-materials-big-btn green",type:"button",onClick:Se,children:[r.jsx(H,{icon:op}),"Add Material"]}),r.jsxs("button",{className:"admin-materials-big-btn",type:"button",onClick:()=>window.location.hash="/admin/modules",children:[r.jsx(H,{icon:Xt}),"Add Module"]})]}),r.jsxs("section",{className:"admin-materials-list-panel",children:[r.jsxs("div",{className:"admin-materials-toolbar",children:[r.jsxs("div",{className:"admin-materials-count",children:["Showing ",r.jsx("strong",{children:X.length})," of ",r.jsx("strong",{children:u.length})," materials"]}),r.jsxs("label",{className:"admin-materials-search-wrap",children:["Search materials:",r.jsx("input",{className:"admin-materials-search",type:"search",value:_,onChange:E=>R(E.target.value)})]})]}),G&&r.jsx("div",{className:"admin-materials-empty",children:G}),M&&r.jsx("div",{className:"admin-materials-empty",children:"Loading courses..."}),!M&&i.length===0&&r.jsx("div",{className:"admin-materials-empty",children:"No courses yet. Create a public course first."}),!M&&i.length>0&&s.length===0&&r.jsx("div",{className:"admin-materials-empty",children:"No modules yet. Create modules for this course first."}),!M&&f&&u.length===0&&r.jsx("div",{className:"admin-materials-empty",children:"No materials have been saved for this module yet."}),!M&&f&&u.length>0&&r.jsx("div",{className:"admin-materials-table-wrap",children:r.jsxs("table",{className:"admin-materials-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"ID"}),r.jsx("th",{children:"Title"}),r.jsx("th",{children:"Module"}),r.jsx("th",{children:"Type"}),r.jsx("th",{children:"Link/File"}),r.jsx("th",{children:"Actions"})]})}),r.jsx("tbody",{children:X.map(E=>r.jsxs("tr",{children:[r.jsx("td",{children:E.id}),r.jsx("td",{children:E.title}),r.jsx("td",{children:E.module_title||(de==null?void 0:de.title)||"Module"}),r.jsx("td",{children:Vf(E)}),r.jsxs("td",{children:[E.youtube_url&&r.jsx("a",{className:"admin-materials-link",href:E.youtube_url,target:"_blank",rel:"noreferrer",children:"Open video"}),E.file_url&&r.jsx("a",{className:"admin-materials-link",href:At(E.file_url),target:"_blank",rel:"noreferrer",children:"Open file"}),!E.youtube_url&&!E.file_url&&"Paragraph"]}),r.jsx("td",{children:r.jsxs("div",{className:"admin-materials-row-actions",children:[r.jsxs("button",{className:"admin-material-action edit",type:"button",onClick:()=>xe(E),children:[r.jsx(H,{icon:ya}),"Edit"]}),r.jsxs("button",{className:"admin-material-action delete",type:"button",onClick:()=>F(E.id),children:[r.jsx(H,{icon:br}),"Delete"]})]})})]},E.id))})]})})]}),L&&r.jsx("div",{className:"admin-materials-modal-backdrop",role:"presentation",onClick:je,children:r.jsxs("section",{className:"admin-materials-modal",role:"dialog","aria-modal":"true",onClick:E=>E.stopPropagation(),children:[r.jsxs("div",{className:"admin-materials-modal-head",children:[r.jsxs("div",{className:"admin-materials-header",children:[r.jsx("h2",{children:y?"Edit Material":"Sections, Notes & Videos"}),r.jsxs("p",{children:["Choose a course and module, then add student learning content.",de?` Current module: ${de.title}.`:""]})]}),r.jsx("button",{className:"admin-materials-close",type:"button",onClick:je,"aria-label":"Close material form",children:"x"})]}),r.jsxs("form",{className:"admin-materials-form",onSubmit:k,children:[r.jsxs("div",{className:"admin-materials-select-row",children:[r.jsxs("label",{className:"admin-materials-field",children:["Course",r.jsxs("select",{className:"admin-materials-select",value:v,onChange:E=>{b(E.target.value),ve()},disabled:M||i.length===0,children:[i.length===0&&r.jsx("option",{value:"",children:"No courses yet"}),i.map(E=>r.jsx("option",{value:E.id,children:Z4(E)},E.id))]})]}),r.jsxs("label",{className:"admin-materials-field",children:["Module",r.jsxs("select",{className:"admin-materials-select",value:f,onChange:E=>{p(E.target.value),ve()},disabled:s.length===0,children:[s.length===0&&r.jsx("option",{value:"",children:"No modules yet"}),s.map(E=>r.jsx("option",{value:E.id,children:E.title},E.id))]})]})]}),r.jsxs("label",{className:"admin-materials-field",children:["Section title",r.jsx("input",{className:"admin-materials-input",name:"title",value:g.title,onChange:Ne,placeholder:"Section title"})]}),r.jsxs("label",{className:"admin-materials-field",children:["Material type",r.jsxs("select",{className:"admin-materials-select",name:"type",value:g.type,onChange:Ne,children:[r.jsx("option",{value:"section",children:"Section / Paragraph"}),r.jsx("option",{value:"video",children:"YouTube Video"}),r.jsx("option",{value:"file",children:"File Upload"})]})]}),g.type==="video"&&r.jsxs("label",{className:"admin-materials-field",children:["YouTube link",r.jsx("input",{className:"admin-materials-input",name:"youtube_url",value:g.youtube_url,onChange:Ne,placeholder:"https://youtube.com/..."})]}),g.type==="file"&&r.jsxs("label",{className:"admin-materials-field",children:["File",r.jsx("input",{className:"admin-materials-input",type:"file",onChange:E=>{var w;return x({...g,file:((w=E.target.files)==null?void 0:w[0])||null})}})]}),r.jsxs("label",{className:"admin-materials-field",children:["Paragraph / notes",r.jsx("textarea",{className:"admin-materials-textarea",name:"content",value:g.content,onChange:Ne,placeholder:"Write section paragraphs here..."})]}),r.jsxs("div",{className:"admin-materials-form-actions",children:[r.jsxs("button",{className:"admin-materials-primary",type:"submit",disabled:V,children:[r.jsx(H,{icon:Xt}),V?"Saving...":y?"Update Material":"Save Material"]}),r.jsx("button",{className:"admin-materials-secondary",type:"button",onClick:je,children:"Cancel"})]})]})]})})]})]})}function Qf(i){return i.title||i.name||"Untitled course"}function t3(){const[i,l]=z.useState([]),[s,d]=z.useState(""),[u,h]=z.useState([]),[v,b]=z.useState(""),[f,p]=z.useState(""),[g,x]=z.useState(!0),[y,C]=z.useState(!1),[L,T]=z.useState("");z.useEffect(()=>{M()},[]),z.useEffect(()=>{s?D(s):h([])},[s]);const _=i.find(G=>String(G.id)===String(s)),R=z.useMemo(()=>{const G=f.trim().toLowerCase();return G?u.filter(re=>[re.id,re.title,re.order_number,re.materials_count].some(de=>String(de||"").toLowerCase().includes(G))):u},[u,f]);async function M(){try{x(!0),T("");const G=await jr(),re=Array.isArray(G)?G:[];l(re),d(de=>{var X;return de||((X=re[0])!=null&&X.id?String(re[0].id):"")})}catch(G){console.error(G),T(G.message||"Failed to load courses")}finally{x(!1)}}async function D(G){try{C(!0),T("");const re=await Tn(G);h(Array.isArray(re)?re:[])}catch(re){console.error(re),T(re.message||"Failed to load modules")}finally{C(!1)}}async function V(G){if(G.preventDefault(),!s){alert("Please choose a course first");return}if(!v.trim()){alert("Module title is required");return}try{await jp(s,{title:v.trim()}),b(""),await D(s)}catch(re){console.error(re),alert(re.message||"Failed to add module")}}async function q(G){if(window.confirm("Delete this module?"))try{await kp(G),await D(s)}catch(re){console.error(re),alert(re.message||"Failed to delete module")}}return r.jsxs(Lt,{title:"Curriculum",children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"admin-modules-page",children:[r.jsxs("div",{className:"admin-modules-actions-bar",children:[r.jsxs("button",{className:"admin-modules-big-btn green",type:"button",onClick:()=>{var G;return(G=document.querySelector(".admin-modules-input"))==null?void 0:G.focus()},children:[r.jsx(H,{icon:fp}),"Add Module"]}),r.jsxs("button",{className:"admin-modules-big-btn",type:"button",onClick:()=>window.location.hash="/admin/courses",children:[r.jsx(H,{icon:ba}),"Public Courses"]})]}),r.jsxs("section",{className:"admin-modules-panel",children:[r.jsxs("div",{className:"admin-modules-header",children:[r.jsx("h2",{children:"Modules per Course"}),r.jsxs("p",{children:["Choose a public course, add learning modules, and remove old curriculum units.",_?` Current course: ${Qf(_)}.`:""]})]}),r.jsxs("form",{className:"admin-modules-form",onSubmit:V,children:[r.jsxs("label",{className:"admin-modules-field",children:["Course",r.jsxs("select",{className:"admin-modules-select",value:s,onChange:G=>d(G.target.value),disabled:g||i.length===0,children:[i.length===0&&r.jsx("option",{value:"",children:"No courses yet"}),i.map(G=>r.jsx("option",{value:G.id,children:Qf(G)},G.id))]})]}),r.jsxs("label",{className:"admin-modules-field",children:["Module title",r.jsx("input",{className:"admin-modules-input",value:v,onChange:G=>b(G.target.value),placeholder:"Module title"})]}),r.jsxs("button",{className:"admin-modules-primary",type:"submit",children:[r.jsx(H,{icon:Xt}),"Add module"]})]}),r.jsxs("div",{className:"admin-modules-toolbar",children:[r.jsxs("div",{className:"admin-modules-count",children:["Showing ",r.jsx("strong",{children:R.length})," of ",r.jsx("strong",{children:u.length})," modules"]}),r.jsxs("label",{className:"admin-modules-search-wrap",children:["Search modules:",r.jsx("input",{className:"admin-modules-search",type:"search",value:f,onChange:G=>p(G.target.value)})]})]}),L&&r.jsx("div",{className:"admin-modules-empty",children:L}),g&&r.jsx("div",{className:"admin-modules-empty",children:"Loading courses..."}),!g&&i.length===0&&r.jsx("div",{className:"admin-modules-empty",children:"No public courses yet. Create a course first, then add modules here."}),y&&r.jsx("div",{className:"admin-modules-empty",children:"Loading modules..."}),!g&&!y&&s&&u.length===0&&r.jsx("div",{className:"admin-modules-empty",children:"No modules have been added for this course yet."}),!g&&!y&&s&&u.length>0&&r.jsx("div",{className:"admin-modules-table-wrap",children:r.jsxs("table",{className:"admin-modules-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"ID"}),r.jsx("th",{children:"Title"}),r.jsx("th",{children:"Order"}),r.jsx("th",{children:"Materials"}),r.jsx("th",{children:"Actions"})]})}),r.jsx("tbody",{children:R.map(G=>r.jsxs("tr",{children:[r.jsx("td",{children:G.id}),r.jsx("td",{children:G.title}),r.jsx("td",{children:G.order_number}),r.jsx("td",{children:G.materials_count||0}),r.jsx("td",{children:r.jsxs("button",{className:"admin-module-action delete",type:"button",onClick:()=>q(G.id),children:[r.jsx(H,{icon:br}),"Delete"]})})]},G.id))})]})})]})]})]})}function n3({children:i}){return r.jsx("div",{className:"card-grid",children:i})}function Ti({label:i,value:l}){return r.jsxs("article",{className:"stat",children:[r.jsx("strong",{children:l}),r.jsx("span",{children:i})]})}const r3=["Courses","Modules","Materials","Assessments","Final Exam","Exam Submissions","Students","Products","Certificates"];function a3(){return r.jsxs(Lt,{title:"Admin Dashboard",children:[r.jsxs("div",{className:"dashboard-grid",children:[r.jsx(Ti,{label:"Students",value:"128"}),r.jsx(Ti,{label:"Courses",value:"4"}),r.jsx(Ti,{label:"Submissions",value:"23"}),r.jsx(Ti,{label:"Certificates",value:"41"})]}),r.jsx(n3,{children:r3.map(i=>r.jsxs("div",{className:"mini-card",children:[r.jsx(W4,{size:20}),r.jsx("strong",{children:i}),r.jsxs("span",{children:["Manage ",i.toLowerCase()]})]},i))})]})}const Yf={title:"",description:"",price:"",discount:"0",image_url:"",image:null};function i3(){const[i,l]=z.useState([]),[s,d]=z.useState(Yf),[u,h]=z.useState(null),[v,b]=z.useState(!1),[f,p]=z.useState(""),[g,x]=z.useState(!0),[y,C]=z.useState(!1),[L,T]=z.useState("");z.useEffect(()=>{R()},[]);const _=z.useMemo(()=>{const X=f.trim().toLowerCase();return X?i.filter(fe=>[fe.title,fe.description,fe.price,fe.discount].some(pe=>String(pe||"").toLowerCase().includes(X))):i},[i,f]);async function R(){try{x(!0),T("");const X=await ql();l(Array.isArray(X)?X:[])}catch(X){console.error(X),T(X.message||"Failed to load products")}finally{x(!1)}}function M(X){d({...s,[X.target.name]:X.target.value})}function D(){d(Yf),h(null)}function V(){D(),b(!0)}function q(){D(),b(!1)}function G(X){h(X.id),d({title:X.title||"",description:X.description||"",price:X.price||"",discount:X.discount||"0",image_url:X.image_url||"",image:null}),b(!0)}async function re(X){if(X.preventDefault(),y)return;const fe=s.title.trim(),pe=String(s.price??"").trim();if(!fe||!pe){alert("Product title and price are required");return}C(!0);try{const me=new FormData;me.append("title",fe),me.append("description",s.description.trim()),me.append("price",pe),me.append("discount",s.discount||0),me.append("image_url",s.image_url.trim()),s.image&&me.append("image",s.image),u?(await Jv(u,me),alert("Product updated")):(await Kv(me),alert("Product created")),D(),b(!1),await R()}catch(me){console.error(me),alert(me.message||"Failed to save product")}finally{C(!1)}}async function de(X){if(window.confirm("Delete this product?"))try{await Zv(X),u===X&&D(),await R()}catch(fe){console.error(fe),alert(fe.message||"Failed to delete product")}}return r.jsxs(Lt,{title:"Products",children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"admin-products-page",children:[r.jsxs("div",{className:"admin-products-actions-bar",children:[r.jsxs("button",{className:"admin-products-big-btn green",type:"button",onClick:V,children:[r.jsx(H,{icon:np}),"Add Product"]}),r.jsxs("button",{className:"admin-products-big-btn",type:"button",onClick:V,children:[r.jsx(H,{icon:Xt}),"New Item"]}),r.jsxs("button",{className:"admin-products-big-btn",type:"button",onClick:()=>alert("Excel import will be added after upload support."),children:[r.jsx(H,{icon:tp}),"Import Products (Excel)"]})]}),r.jsxs("section",{className:"admin-products-panel",children:[r.jsxs("div",{className:"admin-products-toolbar",children:[r.jsxs("div",{className:"admin-products-count",children:[r.jsx("strong",{children:_.length})," of ",r.jsx("strong",{children:i.length})," products"]}),r.jsxs("label",{className:"admin-products-search-wrap",children:["Search products:",r.jsx("input",{className:"admin-products-search",type:"search",value:f,onChange:X=>p(X.target.value)})]})]}),g&&r.jsx("div",{className:"admin-products-empty",children:"Loading products..."}),L&&r.jsx("div",{className:"admin-products-empty",children:L}),!g&&!L&&i.length===0&&r.jsx("div",{className:"admin-products-empty",children:"No products in the database yet."}),!g&&!L&&i.length>0&&r.jsx("div",{className:"admin-products-table-wrap",children:r.jsxs("table",{className:"admin-products-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"ID"}),r.jsx("th",{children:"Image"}),r.jsx("th",{children:"Title"}),r.jsx("th",{children:"Price"}),r.jsx("th",{children:"Discount"}),r.jsx("th",{children:"Description"}),r.jsx("th",{children:"Actions"})]})}),r.jsx("tbody",{children:_.map(X=>r.jsxs("tr",{children:[r.jsx("td",{children:X.id}),r.jsx("td",{children:X.image_url?r.jsx("img",{className:"admin-products-image",src:At(X.image_url),alt:""}):"No image"}),r.jsx("td",{children:X.title}),r.jsxs("td",{children:["R",X.price]}),r.jsx("td",{children:X.discount||0}),r.jsx("td",{children:X.description||"No description"}),r.jsx("td",{children:r.jsxs("div",{className:"admin-products-row-actions",children:[r.jsxs("button",{className:"admin-product-action edit",type:"button",onClick:()=>G(X),children:[r.jsx(H,{icon:ya}),"Edit"]}),r.jsxs("button",{className:"admin-product-action delete",type:"button",onClick:()=>de(X.id),children:[r.jsx(H,{icon:br}),"Delete"]})]})})]},X.id))})]})})]}),v&&r.jsx("div",{className:"admin-products-modal-backdrop",role:"presentation",onClick:q,children:r.jsxs("section",{className:"admin-products-modal",role:"dialog","aria-modal":"true",onClick:X=>X.stopPropagation(),children:[r.jsxs("div",{className:"admin-products-modal-head",children:[r.jsx("h2",{children:u?"Edit product":"Add product"}),r.jsx("button",{className:"admin-products-close",type:"button",onClick:q,"aria-label":"Close product form",children:"×"})]}),r.jsxs("form",{className:"admin-products-form",onSubmit:re,children:[r.jsxs("div",{className:"admin-products-grid",children:[r.jsxs("label",{children:["Product title",r.jsx("input",{name:"title",value:s.title,onChange:M,required:!0})]}),r.jsxs("label",{children:["Price",r.jsx("input",{name:"price",type:"number",min:"0",step:"0.01",value:s.price,onChange:M,required:!0})]}),r.jsxs("label",{children:["Discount",r.jsx("input",{name:"discount",type:"number",min:"0",step:"0.01",value:s.discount,onChange:M})]}),r.jsxs("label",{children:["Product image",r.jsx("input",{className:"admin-products-file-input",type:"file",accept:"image/*",onChange:X=>{var fe;return d({...s,image:((fe=X.target.files)==null?void 0:fe[0])||null})}}),r.jsx("span",{className:"admin-products-help",children:"Choose an image from your computer."})]})]}),(s.image||s.image_url)&&r.jsx("img",{className:"admin-products-preview",src:s.image?URL.createObjectURL(s.image):At(s.image_url),alt:"Product preview"}),r.jsxs("label",{children:["Description",r.jsx("textarea",{name:"description",value:s.description,onChange:M})]}),r.jsxs("div",{className:"admin-products-actions",children:[r.jsx("button",{className:"admin-products-primary",type:"submit",disabled:y,children:y?"Saving...":u?"Update Product":"Save Product"}),r.jsx("button",{className:"admin-products-secondary",type:"button",onClick:q,children:"Cancel"})]})]})]})})]})]})}function s3(){const[i,l]=z.useState(()=>Ji("admin")),[s,d]=z.useState({currentPassword:"",newPassword:"",confirmPassword:""}),[u,h]=z.useState(!1),[v,b]=z.useState({type:"",text:""}),[f,p]=z.useState(!1),g=y=>{l(y),Hp("admin",y)},x=async y=>{if(y.preventDefault(),b({type:"",text:""}),s.newPassword!==s.confirmPassword){b({type:"error",text:"New passwords do not match."});return}p(!0);try{const C=await s4({currentPassword:s.currentPassword,newPassword:s.newPassword});b({type:"success",text:C.message}),d({currentPassword:"",newPassword:"",confirmPassword:""})}catch(C){b({type:"error",text:C.message})}finally{p(!1)}};return r.jsxs(Lt,{title:"Settings",children:[r.jsx("style",{children:o3}),r.jsxs("div",{className:"account-settings",children:[r.jsxs("section",{className:"settings-section",children:[r.jsxs("div",{className:"settings-heading",children:[r.jsx("span",{className:"settings-heading-icon",children:r.jsx(H,{icon:Vi})}),r.jsxs("div",{children:[r.jsx("h2",{children:"Appearance"}),r.jsx("p",{children:"Choose how your admin account looks on this device."})]})]}),r.jsxs("div",{className:"theme-options",children:[r.jsxs("button",{className:i==="light"?"selected":"",onClick:()=>g("light"),children:[r.jsx(H,{icon:rp}),r.jsxs("span",{children:[r.jsx("strong",{children:"Light mode"}),r.jsx("small",{children:"Bright and clean interface"})]})]}),r.jsxs("button",{className:i==="dark"?"selected":"",onClick:()=>g("dark"),children:[r.jsx(H,{icon:Vi}),r.jsxs("span",{children:[r.jsx("strong",{children:"Dark mode"}),r.jsx("small",{children:"Comfortable in low light"})]})]})]})]}),r.jsxs("section",{className:"settings-section",children:[r.jsxs("div",{className:"settings-heading",children:[r.jsx("span",{className:"settings-heading-icon",children:r.jsx(H,{icon:Hl})}),r.jsxs("div",{children:[r.jsx("h2",{children:"Change password"}),r.jsx("p",{children:"Confirm your current password before setting a new one."})]})]}),r.jsxs("form",{className:"password-form",onSubmit:x,children:[["currentPassword","newPassword","confirmPassword"].map(y=>r.jsxs("label",{children:[y==="currentPassword"?"Current password":y==="newPassword"?"New password":"Confirm new password",r.jsxs("span",{className:"password-field",children:[r.jsx(H,{icon:Bi}),r.jsx("input",{type:u?"text":"password",value:s[y],minLength:y==="currentPassword"?void 0:8,required:!0,onChange:C=>d({...s,[y]:C.target.value})})]})]},y)),r.jsxs("div",{className:"password-actions",children:[r.jsxs("label",{className:"show-passwords",children:[r.jsx("input",{type:"checkbox",checked:u,onChange:y=>h(y.target.checked)}),r.jsx(H,{icon:u?up:ep}),"Show passwords"]}),r.jsxs("button",{className:"settings-save",disabled:f,children:[r.jsx(H,{icon:Bi}),f?"Saving...":"Update Password"]})]}),v.text&&r.jsx("p",{className:`settings-message ${v.type}`,children:v.text})]})]}),r.jsxs("section",{className:"settings-section",children:[r.jsxs("div",{className:"settings-heading",children:[r.jsx("span",{className:"settings-heading-icon",children:r.jsx(H,{icon:Wl})}),r.jsxs("div",{children:[r.jsx("h2",{children:"Company profile"}),r.jsx("p",{children:"Public contact information used across Stekora Tech."})]})]}),r.jsxs("form",{className:"company-settings-form",children:[r.jsxs("label",{children:["Company name",r.jsx("input",{defaultValue:"Stekora Tech Academy"})]}),r.jsxs("label",{children:["Public email",r.jsx("input",{type:"email",placeholder:"info@stekora.tech"})]}),r.jsxs("label",{children:["Phone number",r.jsx("input",{type:"tel",placeholder:"+250 ..."})]}),r.jsx("button",{className:"settings-save",type:"button",children:"Save Company Settings"})]})]})]})]})}const o3=`
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
`;function l3(){return be("/admin/students")}function c3(i,l){return be(`/admin/students/${i}/status`,{method:"PATCH",body:JSON.stringify({status:l})})}function d3(){const[i,l]=z.useState([]),[s,d]=z.useState(""),[u,h]=z.useState(!0),[v,b]=z.useState("");z.useEffect(()=>{p()},[]);const f=z.useMemo(()=>{const x=s.trim().toLowerCase();return x?i.filter(y=>[y.id,y.full_name,y.email,y.phone,y.status].some(C=>String(C||"").toLowerCase().includes(x))):i},[i,s]);async function p(){try{h(!0),b("");const x=await l3();l(Array.isArray(x)?x:[])}catch(x){console.error(x),b(x.message||"Failed to load students")}finally{h(!1)}}async function g(x){const y=x.status==="active"?"blocked":"active",C=y==="blocked"?"Block this student account?":"Activate this student account?";if(window.confirm(C))try{await c3(x.id,y),await p()}catch(L){console.error(L),alert(L.message||"Failed to update student")}}return r.jsxs(Lt,{title:"Students",children:[r.jsx("style",{children:`
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
      `}),r.jsxs("section",{className:"admin-students-panel",children:[r.jsxs("div",{className:"admin-students-toolbar",children:[r.jsxs("div",{children:["Showing ",f.length," of ",i.length," students"]}),r.jsxs("div",{className:"admin-students-tools",children:[r.jsxs("label",{className:"admin-students-search",children:["Search:",r.jsx("input",{type:"search",value:s,onChange:x=>d(x.target.value)})]}),r.jsxs("button",{className:"admin-students-refresh",type:"button",onClick:p,children:[r.jsx(H,{icon:Ul}),"Refresh"]})]})]}),u&&r.jsx("div",{className:"admin-students-message",children:"Loading students..."}),v&&r.jsx("div",{className:"admin-students-message",children:v}),!u&&!v&&i.length===0&&r.jsx("div",{className:"admin-students-message",children:"No student accounts have been created yet."}),!u&&!v&&i.length>0&&r.jsx("div",{className:"admin-students-table-wrap",children:r.jsxs("table",{className:"admin-students-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"ID"}),r.jsx("th",{children:"Name"}),r.jsx("th",{children:"Email"}),r.jsx("th",{children:"Phone"}),r.jsx("th",{children:"Started"}),r.jsx("th",{children:"Completed"}),r.jsx("th",{children:"Certificates"}),r.jsx("th",{children:"Status"}),r.jsx("th",{children:"Registered"}),r.jsx("th",{children:"Action"})]})}),r.jsx("tbody",{children:f.map(x=>r.jsxs("tr",{children:[r.jsx("td",{children:x.id}),r.jsx("td",{children:x.full_name}),r.jsx("td",{children:x.email}),r.jsx("td",{children:x.phone||"-"}),r.jsx("td",{children:x.courses_started||0}),r.jsx("td",{children:x.courses_completed||0}),r.jsx("td",{children:x.certificates_count||0}),r.jsx("td",{children:r.jsx("span",{className:`admin-student-status ${x.status}`,children:x.status})}),r.jsx("td",{children:new Date(x.created_at).toLocaleDateString()}),r.jsx("td",{children:r.jsxs("button",{className:`admin-student-action ${x.status==="active"?"block":"activate"}`,type:"button",onClick:()=>g(x),children:[r.jsx(H,{icon:x.status==="active"?Ox:ip}),x.status==="active"?"Block":"Activate"]})})]},x.id))})]})})]})]})}const u3=[["Dashboard","/student",sp],["My Courses","/student",ba],["Certificates","/student/certificates",wr],["Settings","/student/settings",Wl]];function f3(){return window.location.hash.replace("#","")||"/student"}function m3(){const i=f3();function l(d){window.location.hash=d}function s(){localStorage.removeItem("studentToken"),localStorage.removeItem("studentName"),localStorage.removeItem("studentCourseName"),window.location.hash="/login"}return r.jsxs("aside",{className:"student-sidebar",children:[r.jsxs("div",{className:"student-sidebar-brand",children:[r.jsx("span",{className:"student-sidebar-mark",children:"ST"}),r.jsxs("span",{children:[r.jsx("strong",{children:"Stekora Tech"}),r.jsx("small",{children:"Student Account"})]})]}),r.jsxs("nav",{className:"student-sidebar-nav",children:[u3.map(([d,u,h])=>r.jsxs("button",{type:"button",className:i===u||u==="/student"&&i.startsWith("/student/course/")?"active":"",onClick:()=>l(u),children:[r.jsx(H,{icon:h}),d]},d)),r.jsxs("button",{type:"button",onClick:s,children:[r.jsx(H,{icon:ap}),"Logout"]})]})]})}function kr({title:i,children:l}){const[s,d]=z.useState(()=>Ji("student"));return z.useEffect(()=>{const u=h=>{var v;((v=h.detail)==null?void 0:v.accountType)==="student"&&d(h.detail.theme)};return window.addEventListener(ha,u),()=>window.removeEventListener(ha,u)},[]),r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:`student-portal ${s==="dark"?"dark-mode":""}`,children:[r.jsx(m3,{}),r.jsxs("main",{className:"student-portal-main",children:[r.jsxs("header",{className:"student-portal-topbar",children:[r.jsx("h1",{children:i}),r.jsx("span",{className:"student-portal-role",children:localStorage.getItem("studentName")||"Student"})]}),r.jsx("div",{className:"student-portal-content",children:l})]})]})]})}function p3({courseId:i}){var T,_,R;const[l,s]=z.useState(null),[d,u]=z.useState({}),[h,v]=z.useState(null),[b,f]=z.useState(!0),[p,g]=z.useState(!1),[x,y]=z.useState("");z.useEffect(()=>{C()},[i]);async function C(){try{f(!0),y("");const M=await p4(i);s(M)}catch(M){console.error(M),y(M.message||"Failed to load final exam")}finally{f(!1)}}async function L(M){if(M.preventDefault(),l.questions.some(V=>!String(d[V.id]||"").trim())){alert("Please answer every final exam question");return}try{g(!0);const V=await h4(i,l.questions.map(q=>({question_id:q.id,answer:d[q.id]})));v(V)}catch(V){console.error(V),alert(V.message||"Failed to submit final exam")}finally{g(!1)}}return r.jsxs(kr,{title:"Final Exam",children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"student-final-shell",children:[b&&r.jsx("div",{className:"student-final-message",children:"Loading final exam..."}),x&&r.jsx("div",{className:"student-final-message",children:x}),l&&!l.unlocked&&r.jsxs("section",{className:"student-final-card",children:[r.jsx("h2",{children:"Final exam locked"}),r.jsxs("p",{children:["Complete every course module first. You completed ",l.completed_modules," of ",l.total_modules," modules."]})]}),l&&l.unlocked&&!l.can_attempt&&r.jsxs("section",{className:"student-final-card",children:[r.jsx("h2",{children:"Final exam already submitted"}),r.jsxs("p",{children:["Status: ",(T=l.latest_attempt)==null?void 0:T.status,". Score: ",((_=l.latest_attempt)==null?void 0:_.score)||0,"%. Wait for admin review or re-exam permission."]})]}),l&&l.can_attempt&&l.questions.length===0&&r.jsx("div",{className:"student-final-message",children:"The admin has not uploaded final exam questions yet."}),l&&l.can_attempt&&l.questions.length>0&&!h&&r.jsxs(r.Fragment,{children:[r.jsxs("section",{className:"student-final-card",children:[r.jsx("h2",{children:(R=l.course)==null?void 0:R.title}),r.jsx("p",{children:"Answer every question. Multiple-choice answers are scored automatically; open answers are reviewed by the admin."})]}),r.jsxs("form",{className:"student-final-form",onSubmit:L,children:[l.questions.map((M,D)=>r.jsxs("section",{className:"student-final-card",children:[r.jsxs("h3",{children:[D+1,". ",M.question," (",M.marks," marks)"]}),M.question_type==="mcq"?r.jsx("div",{className:"student-final-options",children:Object.entries(M.options||{}).filter(([,V])=>V).map(([V,q])=>r.jsxs("label",{className:"student-final-option",children:[r.jsx("input",{type:"radio",name:`exam-${M.id}`,value:V,checked:d[M.id]===V,onChange:G=>u({...d,[M.id]:G.target.value})}),r.jsxs("strong",{children:[V,"."]})," ",q]},V))}):r.jsx("textarea",{className:"student-final-textarea",value:d[M.id]||"",onChange:V=>u({...d,[M.id]:V.target.value}),placeholder:"Write your answer..."})]},M.id)),r.jsxs("div",{className:"student-final-actions",children:[r.jsxs("button",{className:"student-final-button secondary",type:"button",onClick:()=>window.location.hash="/student",children:[r.jsx(H,{icon:Bl}),"Dashboard"]}),r.jsxs("button",{className:"student-final-button",type:"submit",disabled:p,children:[r.jsx(H,{icon:$l}),p?"Submitting...":"Submit Final Exam"]})]})]})]}),h&&r.jsxs("section",{className:"student-final-card",children:[r.jsx("h2",{children:"Final exam submitted"}),r.jsxs("p",{children:["Automatic score: ",h.auto_score,"%. Your submission is waiting for admin review and certificate approval."]})]})]})]})}function h3({courseId:i,moduleId:l}){const[s,d]=z.useState(null),[u,h]=z.useState({}),[v,b]=z.useState(null),[f,p]=z.useState(!0),[g,x]=z.useState(!1),[y,C]=z.useState("");z.useEffect(()=>{L()},[l]);async function L(){try{p(!0),C("");const _=await f4(l);d(_)}catch(_){console.error(_),C(_.message||"Failed to load assessment")}finally{p(!1)}}async function T(_){if(_.preventDefault(),s.questions.some(M=>!String(u[M.id]||"").trim())){alert("Please answer every question");return}try{x(!0);const M=await m4(l,s.questions.map(D=>({question_id:D.id,answer:u[D.id]})));b(M)}catch(M){console.error(M),alert(M.message||"Failed to submit assessment")}finally{x(!1)}}return r.jsxs(kr,{title:"Module Assessment",children:[r.jsx("style",{children:`
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
      `}),r.jsxs("div",{className:"student-assessment-shell",children:[f&&r.jsx("div",{className:"student-assessment-message",children:"Loading assessment..."}),y&&r.jsx("div",{className:"student-assessment-message",children:y}),s&&s.questions.length===0&&r.jsx("div",{className:"student-assessment-message",children:"The admin has not added assessment questions yet."}),s&&s.questions.length>0&&!v&&r.jsxs(r.Fragment,{children:[r.jsxs("section",{className:"student-assessment-intro",children:[r.jsx("h2",{children:s.module.title}),r.jsxs("p",{children:[s.questions.length," questions · Pass mark ",s.pass_mark,"%"]})]}),r.jsxs("form",{className:"student-assessment-form",onSubmit:T,children:[s.questions.map((_,R)=>r.jsxs("section",{className:"student-assessment-question",children:[r.jsxs("h3",{children:[R+1,". ",_.question]}),_.question_type==="mcq"?r.jsx("div",{className:"student-assessment-options",children:Object.entries(_.options||{}).filter(([,M])=>M).map(([M,D])=>r.jsxs("label",{className:"student-assessment-option",children:[r.jsx("input",{type:"radio",name:`question-${_.id}`,value:M,checked:u[_.id]===M,onChange:V=>h({...u,[_.id]:V.target.value})}),r.jsxs("strong",{children:[M,"."]})," ",D]},M))}):r.jsx("textarea",{className:"student-assessment-answer",value:u[_.id]||"",onChange:M=>h({...u,[_.id]:M.target.value}),placeholder:"Write your answer..."})]},_.id)),r.jsxs("div",{className:"student-assessment-actions",children:[r.jsxs("button",{className:"student-assessment-button secondary",type:"button",onClick:()=>window.location.hash=`/student/course/${i}/module/${l}`,children:[r.jsx(H,{icon:Bl}),"Back to Module"]}),r.jsxs("button",{className:"student-assessment-button",type:"submit",disabled:g,children:[r.jsx(H,{icon:$l}),g?"Submitting...":"Submit Assessment"]})]})]})]}),v&&r.jsxs("section",{className:"student-assessment-result",children:[r.jsx(H,{icon:cp,size:"2x"}),r.jsxs("strong",{children:[v.score,"%"]}),r.jsx("p",{children:v.passed?"You passed this module assessment.":"You need 60% to pass. Review the lesson and try again."}),v.passed?r.jsx("button",{className:"student-assessment-button",type:"button",onClick:()=>window.location.hash=`/student/course/${i}/module/${l}`,children:"Return to Module"}):r.jsx("button",{className:"student-assessment-button",type:"button",onClick:()=>{h({}),b(null)},children:"Retry Assessment"})]})]})]})}function g3(){const[i,l]=z.useState([]),[s,d]=z.useState(!0),[u,h]=z.useState(""),[v,b]=z.useState(null);z.useEffect(()=>{f()},[]);async function f(){try{d(!0),h("");const p=await g4();l(Array.isArray(p)?p:[])}catch(p){console.error(p),h(p.message||"Failed to load certificates")}finally{d(!1)}}return r.jsxs(kr,{title:"My Certificates",children:[r.jsx("style",{children:`
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
      `}),s&&r.jsx("div",{className:"student-certificate-message",children:"Loading certificates..."}),u&&r.jsx("div",{className:"student-certificate-message",children:u}),!s&&!u&&i.length===0&&r.jsx("div",{className:"student-certificate-message",children:"No certificate has been assigned yet. Complete the course and wait for final exam approval."}),r.jsx("section",{className:"student-certificates-grid",children:i.map(p=>r.jsxs("article",{className:"student-certificate-card",children:[r.jsx("div",{className:"student-certificate-icon",children:r.jsx(H,{icon:wr,size:"lg"})}),r.jsx("h2",{children:p.course_title}),r.jsxs("div",{className:"student-certificate-meta",children:[r.jsx("span",{className:"student-certificate-code",children:p.certificate_code}),r.jsxs("span",{children:[r.jsx(H,{icon:Hl})," Status: ",p.status]}),r.jsxs("span",{children:["Issued: ",new Date(p.issued_date).toLocaleDateString()]})]}),r.jsxs("button",{className:"student-certificate-button",type:"button",onClick:()=>b(p),children:[r.jsx(H,{icon:Wx}),"View Certificate"]})]},p.id))}),v&&r.jsx("div",{className:"student-certificate-modal-backdrop",role:"presentation",onClick:()=>b(null),children:r.jsxs("section",{className:"student-certificate-modal",role:"dialog","aria-modal":"true",onClick:p=>p.stopPropagation(),children:[r.jsxs("div",{className:"student-certificate-modal-actions",children:[r.jsx("button",{className:"student-certificate-button",type:"button",onClick:()=>window.print(),children:"Print / Download PDF"}),r.jsx("button",{className:"student-certificate-button",type:"button",onClick:()=>b(null),children:"Close"})]}),r.jsx(Op,{studentName:v.student_name||localStorage.getItem("studentName")||"Student",courseName:v.course_title,certificateCode:v.certificate_code,issuedDate:v.issued_date,verificationUrl:`${window.location.origin}${window.location.pathname}#/certificate/${v.certificate_code}`})]})})]})}function x3(){const[i,l]=z.useState(null),[s,d]=z.useState(!0),[u,h]=z.useState(""),[v,b]=z.useState(null);z.useEffect(()=>{f()},[]);async function f(){var x;if(!localStorage.getItem("studentToken")){window.location.hash="/login";return}try{d(!0),h("");const y=await c4();l(y),(x=y.student)!=null&&x.full_name&&localStorage.setItem("studentName",y.student.full_name)}catch(y){console.error(y),h(y.message||"Failed to load student dashboard")}finally{d(!1)}}async function p(x){var C;const y=(C=x.modules)==null?void 0:C[0];if(y)try{b(x.id),await d4(x.id),window.location.hash=`/student/course/${x.id}/module/${y.id}`}catch(L){console.error(L),alert(L.message||"Failed to start course")}finally{b(null)}}function g(x){var C,L;const y=((C=x.modules)==null?void 0:C.find(T=>!Number(T.completed)))||((L=x.modules)==null?void 0:L[0]);y&&(window.location.hash=`/student/course/${x.id}/module/${y.id}`)}return r.jsxs(kr,{title:"Student Dashboard",children:[r.jsx("style",{children:`
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
      `}),s&&r.jsx("div",{className:"student-page-message",children:"Loading your courses..."}),u&&r.jsx("div",{className:"student-page-message",children:u}),i&&r.jsxs(r.Fragment,{children:[r.jsxs("section",{className:"student-dashboard-summary",children:[r.jsxs("div",{className:"student-summary-card",children:["Available courses",r.jsx("strong",{children:i.courses.length})]}),r.jsxs("div",{className:"student-summary-card",children:["Courses completed",r.jsx("strong",{children:i.courses.filter(x=>x.status==="completed").length})]}),r.jsxs("div",{className:"student-summary-card",children:["Certificates",r.jsx("strong",{children:i.certificates_count||0})]})]}),i.courses.length===0?r.jsx("div",{className:"student-page-message",children:"No courses have been posted by the admin yet."}):r.jsx("section",{className:"student-course-grid",children:i.courses.map(x=>r.jsxs("article",{className:"student-course-card",children:[x.image_url?r.jsx("img",{className:"student-course-image",src:At(x.image_url),alt:x.name}):r.jsx("div",{className:"student-course-image"}),r.jsxs("div",{className:"student-course-body",children:[r.jsx("div",{className:"student-course-category",children:x.category||"Course"}),r.jsx("h2",{children:x.name}),r.jsx("p",{children:x.description||"Practical learning modules created by Stekora Tech."}),r.jsx("div",{className:"student-course-progress",children:r.jsx("span",{style:{width:`${x.progress}%`}})})]}),r.jsxs("footer",{className:"student-course-footer",children:[r.jsxs("small",{children:[x.completed_modules,"/",x.modules_count," modules · ",x.progress,"%"]}),r.jsx("div",{className:"student-course-actions",children:x.modules_count===0?r.jsx("span",{className:"student-page-message",children:"Waiting for modules"}):x.status==="not_started"?r.jsxs("button",{className:"student-course-button",type:"button",onClick:()=>p(x),children:[r.jsx(H,{icon:Gx}),v===x.id?"Starting...":"Start"]}):x.status==="completed"?r.jsxs(r.Fragment,{children:[r.jsxs("button",{className:"student-course-button green",type:"button",onClick:()=>window.location.hash=`/student/course/${x.id}/final-exam`,children:[r.jsx(H,{icon:cp}),"Final Exam"]}),r.jsxs("button",{className:"student-course-button gold",type:"button",onClick:()=>window.location.hash="/student/certificates",children:[r.jsx(H,{icon:wr}),"Certificate"]})]}):r.jsxs("button",{className:"student-course-button green",type:"button",onClick:()=>g(x),children:[r.jsx(H,{icon:ba}),"Continue"]})})]})]},x.id))})]})]})}const v3="https://www.youtube.com/@stekoratech?sub_confirmation=1";function y3(i){if(!i)return"";const l=i.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([^?&/]+)/i);return l?`https://www.youtube.com/embed/${l[1]}`:i}function b3({courseId:i,moduleId:l}){var _,R;const[s,d]=z.useState(null),[u,h]=z.useState(!0),[v,b]=z.useState(""),[f,p]=z.useState(localStorage.getItem("stekoraYoutubeSubscribed")==="yes");z.useEffect(()=>{g()},[i,l]);async function g(){try{h(!0),b("");const M=await u4(i,l);d(M)}catch(M){console.error(M),b(M.message||"Failed to load module")}finally{h(!1)}}function x(){window.open(v3,"_blank","noopener,noreferrer")}function y(){localStorage.setItem("stekoraYoutubeSubscribed","yes"),p(!0)}const C=((_=s==null?void 0:s.modules)==null?void 0:_.findIndex(M=>Number(M.id)===Number(l)))??-1,L=C>0?s.modules[C-1]:null,T=C>=0?s.modules[C+1]:null;return r.jsxs(kr,{title:((R=s==null?void 0:s.module)==null?void 0:R.course_title)||"Course Module",children:[r.jsx("style",{children:`
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
      `}),u&&r.jsx("div",{className:"student-module-message",children:"Loading module..."}),v&&r.jsx("div",{className:"student-module-message",children:v}),s&&r.jsxs("div",{className:"student-module-shell",children:[r.jsxs("section",{className:"student-module-header",children:[r.jsxs("h2",{children:["Module ",s.module.order_number,": ",s.module.title]}),r.jsx("p",{children:s.module.category||"Course learning module"}),r.jsx("span",{className:"student-module-status",children:Number(s.module.completed)?"Completed":s.latest_grade?`Latest score: ${s.latest_grade.score}%`:"In progress"})]}),s.materials.length===0&&r.jsx("div",{className:"student-module-message",children:"The admin has not uploaded learning material for this module yet."}),s.materials.map(M=>r.jsxs("article",{className:"student-material-card",children:[r.jsx("h3",{children:M.title}),M.content&&r.jsx("p",{children:M.content}),M.youtube_url&&f&&r.jsx("iframe",{className:"student-material-video",src:y3(M.youtube_url),title:M.title,allowFullScreen:!0}),M.youtube_url&&!f&&r.jsx("div",{className:"student-video-lock",children:r.jsxs("div",{className:"student-video-lock-content",children:[r.jsx(H,{icon:kl,size:"2x"}),r.jsx("strong",{children:"Subscribe free to watch this video"}),r.jsx("p",{children:"Open the Stekora Tech YouTube channel, subscribe, then confirm below."}),r.jsxs("button",{className:"student-video-subscribe",type:"button",onClick:x,children:[r.jsx(H,{icon:lv}),"Subscribe"]}),r.jsx("button",{className:"student-video-confirm",type:"button",onClick:y,children:"I Have Subscribed"})]})}),M.file_url&&r.jsxs("a",{className:"student-file-link",href:At(M.file_url),target:"_blank",rel:"noreferrer",children:[r.jsx(H,{icon:Tx}),"Open learning file"]})]},M.id)),r.jsxs("section",{className:"student-module-actions",children:[r.jsxs("div",{className:"student-module-action-group",children:[L&&r.jsxs("button",{className:"student-module-button secondary",type:"button",onClick:()=>window.location.hash=`/student/course/${i}/module/${L.id}`,children:[r.jsx(H,{icon:Bl}),"Previous"]}),T&&Number(s.module.completed)===1&&r.jsxs("button",{className:"student-module-button secondary",type:"button",onClick:()=>window.location.hash=`/student/course/${i}/module/${T.id}`,children:["Next",r.jsx(H,{icon:Kx})]})]}),s.has_assessment?r.jsxs("button",{className:"student-module-button green",type:"button",onClick:()=>window.location.hash=`/student/course/${i}/module/${l}/assessment`,children:[r.jsx(H,{icon:iv}),"Take Assessment"]}):r.jsx("span",{className:"student-module-message",children:"Waiting for the admin to add this module assessment."})]})]})]})}function w3(){const[i,l]=z.useState(()=>Ji("student")),[s,d]=z.useState({currentPassword:"",newPassword:"",confirmPassword:""}),[u,h]=z.useState(!1),[v,b]=z.useState({type:"",text:""}),[f,p]=z.useState(!1),g=y=>{l(y),Hp("student",y)},x=async y=>{if(y.preventDefault(),b({type:"",text:""}),s.newPassword!==s.confirmPassword){b({type:"error",text:"New passwords do not match."});return}p(!0);try{const C=await o4({currentPassword:s.currentPassword,newPassword:s.newPassword});b({type:"success",text:C.message}),d({currentPassword:"",newPassword:"",confirmPassword:""})}catch(C){b({type:"error",text:C.message})}finally{p(!1)}};return r.jsxs(kr,{title:"Settings",children:[r.jsx("style",{children:j3}),r.jsxs("div",{className:"student-account-settings",children:[r.jsxs("section",{className:"student-settings-section",children:[r.jsxs("div",{className:"student-settings-heading",children:[r.jsx("span",{children:r.jsx(H,{icon:Vi})}),r.jsxs("div",{children:[r.jsx("h2",{children:"Appearance"}),r.jsx("p",{children:"Choose how your learning account looks on this device."})]})]}),r.jsxs("div",{className:"student-theme-options",children:[r.jsxs("button",{className:i==="light"?"selected":"",onClick:()=>g("light"),children:[r.jsx(H,{icon:rp}),r.jsxs("span",{children:[r.jsx("strong",{children:"Light mode"}),r.jsx("small",{children:"Bright and clean interface"})]})]}),r.jsxs("button",{className:i==="dark"?"selected":"",onClick:()=>g("dark"),children:[r.jsx(H,{icon:Vi}),r.jsxs("span",{children:[r.jsx("strong",{children:"Dark mode"}),r.jsx("small",{children:"Comfortable in low light"})]})]})]})]}),r.jsxs("section",{className:"student-settings-section",children:[r.jsxs("div",{className:"student-settings-heading",children:[r.jsx("span",{children:r.jsx(H,{icon:Hl})}),r.jsxs("div",{children:[r.jsx("h2",{children:"Change password"}),r.jsx("p",{children:"Use your current password to protect this change."})]})]}),r.jsxs("form",{className:"student-password-form",onSubmit:x,children:[["currentPassword","newPassword","confirmPassword"].map(y=>r.jsxs("label",{children:[y==="currentPassword"?"Current password":y==="newPassword"?"New password":"Confirm new password",r.jsxs("span",{className:"student-password-field",children:[r.jsx(H,{icon:Bi}),r.jsx("input",{type:u?"text":"password",value:s[y],minLength:y==="currentPassword"?void 0:8,required:!0,onChange:C=>d({...s,[y]:C.target.value})})]})]},y)),r.jsxs("div",{className:"student-password-actions",children:[r.jsxs("label",{className:"student-show-passwords",children:[r.jsx("input",{type:"checkbox",checked:u,onChange:y=>h(y.target.checked)}),r.jsx(H,{icon:u?up:ep})," Show passwords"]}),r.jsxs("button",{className:"student-settings-save",disabled:f,children:[r.jsx(H,{icon:Bi})," ",f?"Saving...":"Update Password"]})]}),v.text&&r.jsx("p",{className:`student-settings-message ${v.type}`,children:v.text})]})]})]})]})}const j3=`
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
`;function k3(){const[i,l]=z.useState(window.location.hash.replace("#","")||"/"),[s,d]=z.useState(!1);z.useEffect(()=>{const b=()=>{l(window.location.hash.replace("#","")||"/")};return window.addEventListener("hashchange",b),()=>window.removeEventListener("hashchange",b)},[]);const u=b=>{window.location.hash=b,l(b),d(!1),window.scrollTo({top:0,behavior:"smooth"})},h=z.useMemo(()=>{const b=i.match(/^\/student\/course\/(\d+)\/module\/(\d+)$/),f=i.match(/^\/student\/course\/(\d+)\/module\/(\d+)\/assessment$/),p=i.match(/^\/student\/course\/(\d+)\/final-exam$/);return i.startsWith("/certificate/")?r.jsx(T4,{code:i.split("/").pop()}):i==="/services"?r.jsx(y4,{}):i==="/study"?r.jsx(Xv,{}):i==="/jobs"?r.jsx(r4,{}):i==="/about"?r.jsx(bv,{}):i==="/contact"||i==="/apply-services"?r.jsx(Fv,{}):i==="/shop"?r.jsx(b4,{}):i==="/login"?r.jsx(x4,{goTo:u}):i==="/student"?r.jsx(x3,{}):f?r.jsx(h3,{courseId:f[1],moduleId:f[2]}):b?r.jsx(b3,{courseId:b[1],moduleId:b[2]}):p?r.jsx(p3,{courseId:p[1]}):i==="/student/certificates"?r.jsx(g3,{}):i==="/student/settings"?r.jsx(w3,{}):i==="/admin/courses"?r.jsx(X4,{}):i==="/admin/modules"?r.jsx(t3,{}):i==="/admin/materials"?r.jsx(e3,{}):i==="/admin/assessments"?r.jsx(Y4,{}):i==="/admin/final-exam"?r.jsx(J4,{}):i==="/admin/exam-submissions"?r.jsx(K4,{}):i==="/admin/students"?r.jsx(d3,{}):i==="/admin/products"?r.jsx(i3,{}):i==="/admin/certificates"?r.jsx(G4,{}):i==="/admin/settings"?r.jsx(s3,{}):i==="/admin"?r.jsx(a3,{}):r.jsx(n4,{goTo:u})},[i]),v=!i.startsWith("/student")&&!i.startsWith("/admin")&&i!=="/login";return r.jsxs(r.Fragment,{children:[r.jsx(J1,{}),v?r.jsx(yv,{route:i,goTo:u,menuOpen:s,setMenuOpen:d,children:r.jsx("main",{children:h})}):r.jsx("main",{children:h})]})}X1.createRoot(document.getElementById("root")).render(r.jsx(Te.StrictMode,{children:r.jsx(k3,{})}));
