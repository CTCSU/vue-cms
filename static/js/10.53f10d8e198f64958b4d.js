webpackJsonp([10],{"H2h+":function(e,t){
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const i=document.createElement("link");i.rel="stylesheet",i.href="https://fonts.googleapis.com/icon?family=Material+Icons",document.head.appendChild(i)},H5fL:function(e,t){},TQvf:function(e,t,i){
/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT © Zeno Rocha
 */
var s;s=function(){return function(e){var t={};function i(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=6)}([function(e,t){e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var i=e.hasAttribute("readonly");i||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),i||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var s=window.getSelection(),n=document.createRange();n.selectNodeContents(e),s.removeAllRanges(),s.addRange(n),t=s.toString()}return t}},function(e,t){function i(){}i.prototype={on:function(e,t,i){var s=this.e||(this.e={});return(s[e]||(s[e]=[])).push({fn:t,ctx:i}),this},once:function(e,t,i){var s=this;function n(){s.off(e,n),t.apply(i,arguments)}return n._=t,this.on(e,n,i)},emit:function(e){for(var t=[].slice.call(arguments,1),i=((this.e||(this.e={}))[e]||[]).slice(),s=0,n=i.length;s<n;s++)i[s].fn.apply(i[s].ctx,t);return this},off:function(e,t){var i=this.e||(this.e={}),s=i[e],n=[];if(s&&t)for(var o=0,r=s.length;o<r;o++)s[o].fn!==t&&s[o].fn._!==t&&n.push(s[o]);return n.length?i[e]=n:delete i[e],this}},e.exports=i,e.exports.TinyEmitter=i},function(e,t,i){var s=i(3),n=i(4);e.exports=function(e,t,i){if(!e&&!t&&!i)throw new Error("Missing required arguments");if(!s.string(t))throw new TypeError("Second argument must be a String");if(!s.fn(i))throw new TypeError("Third argument must be a Function");if(s.node(e))return function(e,t,i){return e.addEventListener(t,i),{destroy:function(){e.removeEventListener(t,i)}}}(e,t,i);if(s.nodeList(e))return function(e,t,i){return Array.prototype.forEach.call(e,function(e){e.addEventListener(t,i)}),{destroy:function(){Array.prototype.forEach.call(e,function(e){e.removeEventListener(t,i)})}}}(e,t,i);if(s.string(e))return function(e,t,i){return n(document.body,e,t,i)}(e,t,i);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var i=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===i||"[object HTMLCollection]"===i)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},function(e,t,i){var s=i(5);function n(e,t,i,n,o){var r=function(e,t,i,n){return function(i){i.delegateTarget=s(i.target,t),i.delegateTarget&&n.call(e,i)}}.apply(this,arguments);return e.addEventListener(i,r,o),{destroy:function(){e.removeEventListener(i,r,o)}}}e.exports=function(e,t,i,s,o){return"function"==typeof e.addEventListener?n.apply(null,arguments):"function"==typeof i?n.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,function(e){return n(e,t,i,s,o)}))}},function(e,t){var i=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var s=Element.prototype;s.matches=s.matchesSelector||s.mozMatchesSelector||s.msMatchesSelector||s.oMatchesSelector||s.webkitMatchesSelector}e.exports=function(e,t){for(;e&&e.nodeType!==i;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},function(e,t,i){"use strict";i.r(t);var s=i(0),n=i.n(s),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}();var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.resolveOptions(t),this.initSelection()}return r(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var i=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=i+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=n()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=n()(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":o(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}(),l=i(1),h=i.n(l),c=i(2),d=i.n(c),u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}();var f=function(e){function t(e,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return s.resolveOptions(i),s.listenClick(e),s}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,h.a),p(t,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===u(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=d()(e,"click",function(e){return t.onClick(e)})}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new a({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return g("action",e)}},{key:"defaultTarget",value:function(e){var t=g("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return g("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,i=!!document.queryCommandSupported;return t.forEach(function(e){i=i&&!!document.queryCommandSupported(e)}),i}}]),t}();function g(e,t){var i="data-clipboard-"+e;if(t.hasAttribute(i))return t.getAttribute(i)}t.default=f}]).default},e.exports=s()},"Va4+":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("/5sW"),n=i("TQvf"),o=i.n(n);function r(e,t){var i=new o.a(t.target,{text:function(){return e}});i.on("success",function(){s.default.prototype.$notify({title:"success",message:"copy成功",type:"success"}),i.off("error"),i.off("success"),i.destroy()}),i.on("error",function(){s.default.prototype.$notify.error({title:"error",message:"copy失败"}),i.off("error"),i.off("success"),i.destroy()}),i.onClick(t)}var a=i("TQvf");if(!a)throw new Error("you should npm install `clipboard` --save at first");var l={bind:function(e,t){if("success"===t.arg)e._v_clipboard_success=t.value;else if("error"===t.arg)e._v_clipboard_error=t.value;else{var i=new a(e,{text:function(){return t.value},action:function(){return"cut"===t.arg?"cut":"copy"}});i.on("success",function(t){var i=e._v_clipboard_success;i&&i(t)}),i.on("error",function(t){var i=e._v_clipboard_error;i&&i(t)}),e._v_clipboard=i}},update:function(e,t){"success"===t.arg?e._v_clipboard_success=t.value:"error"===t.arg?e._v_clipboard_error=t.value:(e._v_clipboard.text=function(){return t.value},e._v_clipboard_action=function(){return"cut"===t.arg?"cut":"copy"})},unbind:function(e,t){"success"===t.arg?delete e._v_clipboard_success:"error"===t.arg?delete e._v_clipboard_error:(e._v_clipboard.destroy(),delete e._v_clipboard)}},h=function(e){e.directive("Clipboard",l)};window.Vue&&(window.clipboard=l,Vue.use(h)),l.install=h;var c=l;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(e,t){return e};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let d=0;function u(){}u.prototype.__mixinApplications,u.prototype.__mixinSet;const p=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let i=d++;return function(s){let n=s.__mixinSet;if(n&&n[i])return s;let o=t,r=o.get(s);if(!r){r=e(s),o.set(s,r);let t=Object.create(r.__mixinSet||n||null);t[i]=!0,r.__mixinSet=t}return r}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const f=[];
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let g=0,m=0,_=[],v=0,b=!1,y=document.createTextNode("");new window.MutationObserver(function(){b=!1;const e=_.length;for(let t=0;t<e;t++){let e=_[t];if(e)try{e()}catch(e){setTimeout(()=>{throw e})}}_.splice(0,e),m+=e}).observe(y,{characterData:!0});const w={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},k={run:e=>(b||(b=!0,y.textContent=v++),_.push(e),g++),cancel(e){const t=e-m;if(t>=0){if(!_[t])throw new Error("invalid async handle: "+e);_[t]=null}}},x=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e,C=k,E=p(e=>{return class extends e{static createProperties(e){const t=this.prototype;for(let i in e)i in t||t._createPropertyAccessor(i)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let t=this.__dataAttributes[e];return t||(t=this.constructor.attributeNameForProperty(e),this.__dataAttributes[t]=e),t}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this.__data[e]},set:t?function(){}:function(t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,i){let s=this.__data[e],n=this._shouldPropertyChange(e,t,s);return n&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),!this.__dataOld||e in this.__dataOld||(this.__dataOld[e]=s),this.__data[e]=t,this.__dataPending[e]=t),n}_isPropertyPending(e){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(e))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,C.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const e=this.__data,t=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(e,t,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,i)),this.__dataCounter--}_shouldPropertiesChange(e,t,i){return Boolean(t)}_propertiesChanged(e,t,i){}_shouldPropertyChange(e,t,i){return i!==t&&(i==i||t==t)}attributeChangedCallback(e,t,i,s){t!==i&&this._attributeToProperty(e,i),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,i,s)}_attributeToProperty(e,t,i){if(!this.__serializing){const s=this.__dataAttributes,n=s&&s[e]||e;this[n]=this._deserializeValue(t,i||this.constructor.typeForProperty(n))}}_propertyToAttribute(e,t,i){this.__serializing=!0,i=arguments.length<3?this[e]:i,this._valueToNodeAttribute(this,i,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,i){const s=this._serializeValue(t);"class"!==i&&"name"!==i&&"slot"!==i||(e=x(e)),void 0===s?e.removeAttribute(i):e.setAttribute(i,s)}_serializeValue(e){switch(typeof e){case"boolean":return e?"":void 0;default:return null!=e?e.toString():void 0}}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}}});const S=p(e=>{const t=E(e);function i(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof n?t:null}function s(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){const i=e.properties;i&&(t=
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function(e){const t={};for(let i in e){const s=e[i];t[i]="function"==typeof s?{type:s}:s}return t}(i))}e.__ownProperties=t}return e.__ownProperties}class n extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){e=this.prototype,f.push(e);const t=this._properties;this.__observedAttributes=t?Object.keys(t).map(e=>this.prototype._addPropertyToAttributeMap(e)):[]}var e;return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=i(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const e=s(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=i(this);this.__properties=Object.assign({},e&&e._properties,s(this))}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){0,this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return n});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const N=new Map;class P{constructor(e,t,i,s=F){this.strings=e,this.values=t,this.type=i,this.partCallback=s}getHTML(){const e=this.strings.length-1;let t="",i=!0;for(let s=0;s<e;s++){const e=this.strings[s];t+=e;const n=A(e);t+=(i=n>-1?n<e.length:i)?O:T}return t+=this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}const T=`{{lit-${String(Math.random()).slice(2)}}}`,O=`\x3c!--${T}--\x3e`,L=new RegExp(`${T}|${O}`),R=/[ \x09\x0a\x0c\x0d]([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)[ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*)$/;function A(e){const t=e.lastIndexOf(">");return e.indexOf("<",t+1)>-1?e.length:t}class M{constructor(e,t,i,s,n){this.type=e,this.index=t,this.name=i,this.rawName=s,this.strings=n}}const I=e=>-1!==e.index;class ${constructor(e,t){this.parts=[],this.element=t;const i=this.element.content,s=document.createTreeWalker(i,133,null,!1);let n=-1,o=0;const r=[];let a,l;for(;s.nextNode();){n++,a=l;const t=l=s.currentNode;if(1===t.nodeType){if(!t.hasAttributes())continue;const i=t.attributes;let s=0;for(let e=0;e<i.length;e++)i[e].value.indexOf(T)>=0&&s++;for(;s-- >0;){const s=e.strings[o],r=R.exec(s)[1],a=i.getNamedItem(r),l=a.value.split(L);this.parts.push(new M("attribute",n,a.name,r,l)),t.removeAttribute(a.name),o+=l.length-1}}else if(3===t.nodeType){const e=t.nodeValue;if(e.indexOf(T)<0)continue;const i=t.parentNode,s=e.split(L),a=s.length-1;o+=a;for(let e=0;e<a;e++)i.insertBefore(""===s[e]?document.createComment(""):document.createTextNode(s[e]),t),this.parts.push(new M("node",n++));i.insertBefore(""===s[a]?document.createComment(""):document.createTextNode(s[a]),t),r.push(t)}else if(8===t.nodeType&&t.nodeValue===T){const e=t.parentNode,i=t.previousSibling;null===i||i!==a||i.nodeType!==Node.TEXT_NODE?e.insertBefore(document.createComment(""),t):n--,this.parts.push(new M("node",n++)),r.push(t),null===t.nextSibling?e.insertBefore(document.createComment(""),t):n--,l=a,o++}}for(const e of r)e.parentNode.removeChild(e)}}const B=(e,t)=>D(t)?(t=t(e),z):null===t?void 0:t,D=e=>"function"==typeof e&&!0===e.__litDirective,z={},H=e=>null===e||!("object"==typeof e||"function"==typeof e);class V{constructor(e,t,i,s){this.instance=e,this.element=t,this.name=i,this.strings=s,this.size=s.length-1,this._previousValues=[]}_interpolate(e,t){const i=this.strings,s=i.length-1;let n="";for(let o=0;o<s;o++){n+=i[o];const s=B(this,e[t+o]);if(s&&s!==z&&(Array.isArray(s)||"string"!=typeof s&&s[Symbol.iterator]))for(const e of s)n+=e;else n+=s}return n+i[s]}_equalToPreviousValues(e,t){for(let i=t;i<t+this.size;i++)if(this._previousValues[i]!==e[i]||!H(e[i]))return!1;return!0}setValue(e,t){if(this._equalToPreviousValues(e,t))return;const i=this.strings;let s;2===i.length&&""===i[0]&&""===i[1]?(s=B(this,e[t]),Array.isArray(s)&&(s=s.join(""))):s=this._interpolate(e,t),s!==z&&this.element.setAttribute(this.name,s),this._previousValues=e}}class j{constructor(e,t,i){this.instance=e,this.startNode=t,this.endNode=i,this._previousValue=void 0}setValue(e){if((e=B(this,e))!==z)if(H(e)){if(e===this._previousValue)return;this._setText(e)}else e instanceof P?this._setTemplateResult(e):Array.isArray(e)||e[Symbol.iterator]?this._setIterable(e):e instanceof Node?this._setNode(e):void 0!==e.then?this._setPromise(e):this._setText(e)}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_setNode(e){this._previousValue!==e&&(this.clear(),this._insert(e),this._previousValue=e)}_setText(e){const t=this.startNode.nextSibling;e=void 0===e?"":e,t===this.endNode.previousSibling&&t.nodeType===Node.TEXT_NODE?t.textContent=e:this._setNode(document.createTextNode(e)),this._previousValue=e}_setTemplateResult(e){const t=this.instance._getTemplate(e);let i;this._previousValue&&this._previousValue.template===t?i=this._previousValue:(i=new q(t,this.instance._partCallback,this.instance._getTemplate),this._setNode(i._clone()),this._previousValue=i),i.update(e.values)}_setIterable(e){Array.isArray(this._previousValue)||(this.clear(),this._previousValue=[]);const t=this._previousValue;let i=0;for(const s of e){let e=t[i];if(void 0===e){let s=this.startNode;if(i>0){s=t[i-1].endNode=document.createTextNode(""),this._insert(s)}e=new j(this.instance,s,this.endNode),t.push(e)}e.setValue(s),i++}if(0===i)this.clear(),this._previousValue=void 0;else if(i<t.length){const e=t[i-1];t.length=i,this.clear(e.endNode.previousSibling),e.endNode=this.endNode}}_setPromise(e){this._previousValue=e,e.then(t=>{this._previousValue===e&&this.setValue(t)})}clear(e=this.startNode){X(this.startNode.parentNode,e.nextSibling,this.endNode)}}const F=(e,t,i)=>{if("attribute"===t.type)return new V(e,i,t.name,t.strings);if("node"===t.type)return new j(e,i,i.nextSibling);throw new Error(`Unknown part type ${t.type}`)};class q{constructor(e,t,i){this._parts=[],this.template=e,this._partCallback=t,this._getTemplate=i}update(e){let t=0;for(const i of this._parts)i?void 0===i.size?(i.setValue(e[t]),t++):(i.setValue(e,t),t+=i.size):t++}_clone(){const e=this.template.element.content.cloneNode(!0),t=this.template.parts;if(t.length>0){const i=document.createTreeWalker(e,133,null,!1);let s=-1;for(let e=0;e<t.length;e++){const n=t[e],o=I(n);if(o)for(;s<n.index;)s++,i.nextNode();this._parts.push(o?this._partCallback(this,n,i.currentNode):void 0)}}return e}}const X=(e,t,i=null)=>{let s=t;for(;s!==i;){const t=s.nextSibling;e.removeChild(s),s=t}},W=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT;const Y=e=>{let t=1;const i=document.createTreeWalker(e,W,null,!1);for(;i.nextNode();)t++;return t},J=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(I(t))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const G=(e,t)=>`${e}--${t}`,U=e=>t=>{const i=G(t.type,e);let s=N.get(i);void 0===s&&(s=new Map,N.set(i,s));let n=s.get(t.strings);if(void 0===n){const i=t.getTemplateElement();"object"==typeof window.ShadyCSS&&window.ShadyCSS.prepareTemplateDom(i,e),n=new $(t,i),s.set(t.strings,n)}return n},K=["html","svg"];function Q(e){K.forEach(t=>{const i=N.get(G(t,e));void 0!==i&&i.forEach(e=>{const{element:{content:t}}=e,i=t.querySelectorAll("style");!function(e,t){const{element:{content:i},parts:s}=e,n=document.createTreeWalker(i,W,null,!1);let o=0,r=s[0],a=-1,l=0;const h=[];let c=null;for(;n.nextNode();){a++;const e=n.currentNode;for(e.previousSibling===c&&(c=null),t.has(e)&&(h.push(e),null===c&&(c=e)),null!==c&&l++;void 0!==r&&r.index===a;)r.index=null!==c?-1:r.index-l,r=s[++o]}h.forEach(e=>e.parentNode.removeChild(e))}(e,new Set(Array.from(i)))})})}const Z=new Set,ee=(e,t,i)=>{if(!Z.has(i)){Z.add(i);const s=document.createElement("template");if(Array.from(e.querySelectorAll("style")).forEach(e=>{s.content.appendChild(e)}),window.ShadyCSS.prepareTemplateStyles(s,i),Q(i),window.ShadyCSS.nativeShadow){const i=s.content.querySelector("style");null!==i&&(e.insertBefore(i,e.firstChild),function(e,t,i=null){const{element:{content:s},parts:n}=e;if(null===i||void 0===i)return void s.appendChild(t);const o=document.createTreeWalker(s,W,null,!1);let r=J(n),a=0,l=-1;for(;o.nextNode();)for(l++,o.currentNode===i&&(i.parentNode.insertBefore(t,i),a=Y(t));-1!==r&&n[r].index===l;){if(a>0){for(;-1!==r;)n[r].index+=a,r=J(n,r);return}r=J(n,r)}}(t,i.cloneNode(!0),t.element.content.firstChild))}}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const te=(e,...t)=>new P(e,t,"html",ie),ie=(e,t,i)=>{if("attribute"===t.type){if("on-"===t.rawName.substr(0,3)){return new class{constructor(e,t,i){this.instance=e,this.element=t,this.eventName=i}setValue(e){const t=B(this,e);t!==this._listener&&(null==t?this.element.removeEventListener(this.eventName,this):null==this._listener&&this.element.addEventListener(this.eventName,this),this._listener=t)}handleEvent(e){"function"==typeof this._listener?this._listener.call(this.element,e):"function"==typeof this._listener.handleEvent&&this._listener.handleEvent(e)}}(e,i,t.rawName.slice(3))}const s=t.name.substr(t.name.length-1);if("$"===s){const s=t.name.slice(0,-1);return new V(e,i,s,t.strings)}if("?"===s){return new class extends V{setValue(e,t){const i=this.strings;if(2!==i.length||""!==i[0]||""!==i[1])throw new Error("boolean attributes can only contain a single expression");{const i=B(this,e[t]);if(i===z)return;i?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}}(e,i,t.name.slice(0,-1),t.strings)}return new class extends V{setValue(e,t){const i=this.strings;let s;this._equalToPreviousValues(e,t)||((s=2===i.length&&""===i[0]&&""===i[1]?B(this,e[t]):this._interpolate(e,t))!==z&&(this.element[this.name]=s),this._previousValues=e)}}(e,i,t.rawName,t.strings)}return F(e,t,i)};class se extends(S(HTMLElement)){constructor(){super(...arguments),this.__renderComplete=null,this.__resolveRenderComplete=null,this.__isInvalid=!1,this.__isChanging=!1}ready(){this._root=this._createRoot(),super.ready(),this._firstRendered()}connectedCallback(){window.ShadyCSS&&this._root&&window.ShadyCSS.styleElement(this),super.connectedCallback()}_firstRendered(){}_createRoot(){return this.attachShadow({mode:"open"})}_shouldPropertiesChange(e,t,i){const s=this._shouldRender(e,t,i);return!s&&this.__resolveRenderComplete&&this.__resolveRenderComplete(!1),s}_shouldRender(e,t,i){return!0}_propertiesChanged(e,t,i){super._propertiesChanged(e,t,i);const s=this._render(e);s&&void 0!==this._root&&this._applyRender(s,this._root),this._didRender(e,t,i),this.__resolveRenderComplete&&this.__resolveRenderComplete(!0)}_flushProperties(){this.__isChanging=!0,this.__isInvalid=!1,super._flushProperties(),this.__isChanging=!1}_shouldPropertyChange(e,t,i){const s=super._shouldPropertyChange(e,t,i);return s&&this.__isChanging&&console.trace("Setting properties in response to other properties changing "+`considered harmful. Setting '${e}' from `+`'${this._getProperty(e)}' to '${t}'.`),s}_render(e){throw new Error("_render() not implemented")}_applyRender(e,t){!function(e,t,i){const s=U(i),n=s(e);let o=t.__templateInstance;if(void 0!==o&&o.template===n&&o._partCallback===e.partCallback)return void o.update(e.values);o=new q(n,e.partCallback,s),t.__templateInstance=o;const r=o._clone();o.update(e.values);const a=t instanceof ShadowRoot?t.host:void 0;void 0!==a&&"object"==typeof window.ShadyCSS&&(ee(r,n,i),window.ShadyCSS.styleElement(a)),X(t,t.firstChild),t.appendChild(r)}(e,t,this.localName)}_didRender(e,t,i){}requestRender(){this._invalidateProperties()}_invalidateProperties(){this.__isInvalid=!0,super._invalidateProperties()}get renderComplete(){return this.__renderComplete||(this.__renderComplete=new Promise(e=>{this.__resolveRenderComplete=(t=>{this.__resolveRenderComplete=this.__renderComplete=null,e(t)})}),!this.__isInvalid&&this.__resolveRenderComplete&&Promise.resolve().then(()=>this.__resolveRenderComplete(!1))),this.__renderComplete}}const ne=2,oe=1,re=.85,ae=0,le=9;class he{constructor(){this.p=""}get value(){return this.p.trim()}moveTo(e,t){this.p+="M "+e+" "+t+" "}bcurveTo(e,t,i,s,n,o){this.p+="C "+e+" "+t+", "+i+" "+s+", "+n+" "+o+" "}}const ce=new class{_svgNode(e,t){const i=document.createElementNS("http://www.w3.org/2000/svg",e);if(t)for(const e in t)t.hasOwnProperty(e)&&i.setAttributeNS(null,e,t[e]);return i}line(e,t,i,s,n){const o=this._line(t,i,s,n),r=this._svgNode("path",{d:o.value});return e.appendChild(r),r}rectangle(e,t,i,s,n){t+=2,i+=2,s-=4,n-=4;let o=this._line(t,i,t+s,i);o=this._line(t+s,i,t+s,i+n,o),o=this._line(t+s,i+n,t,i+n,o),o=this._line(t,i+n,t,i,o);const r=this._svgNode("path",{d:o.value});return e.appendChild(r),r}polygon(e,t){let i=null;const s=t.length;if(s>2)for(let e=0;e<2;e++){let n=!0;for(let e=1;e<s;e++)i=this._continuousLine(t[e-1][0],t[e-1][1],t[e][0],t[e][1],n,e>0,i),n=!1;i=this._continuousLine(t[s-1][0],t[s-1][1],t[0][0],t[0][1],n,e>0,i)}else i=2==s?this._line(t[0][0],t[0][1],t[1][0],t[1][1]):new he;const n=this._svgNode("path",{d:i.value});return e.appendChild(n),n}ellipse(e,t,i,s,n){s=Math.max(s>10?s-4:s-1,1),n=Math.max(n>10?n-4:n-1,1);const o=2*Math.PI/le;let r=Math.abs(s/2),a=Math.abs(n/2);r+=this._getOffset(.05*-r,.05*r),a+=this._getOffset(.05*-a,.05*a);let l=this._ellipse(o,t,i,r,a,1,o*this._getOffset(.1,this._getOffset(.4,1)));l=this._ellipse(o,t,i,r,a,1.5,0,l);const h=this._svgNode("path",{d:l.value});return e.appendChild(h),h}_ellipse(e,t,i,s,n,o,r,a){const l=this._getOffset(-.5,.5)-Math.PI/2,h=[];h.push([this._getOffset(-o,o)+t+.9*s*Math.cos(l-e),this._getOffset(-o,o)+i+.9*n*Math.sin(l-e)]);for(let r=l;r<2*Math.PI+l-.01;r+=e)h.push([this._getOffset(-o,o)+t+s*Math.cos(r),this._getOffset(-o,o)+i+n*Math.sin(r)]);return h.push([this._getOffset(-o,o)+t+s*Math.cos(l+2*Math.PI+.5*r),this._getOffset(-o,o)+i+n*Math.sin(l+2*Math.PI+.5*r)]),h.push([this._getOffset(-o,o)+t+.98*s*Math.cos(l+r),this._getOffset(-o,o)+i+.98*n*Math.sin(l+r)]),h.push([this._getOffset(-o,o)+t+.9*s*Math.cos(l+.5*r),this._getOffset(-o,o)+i+.9*n*Math.sin(l+.5*r)]),this._curve(h,a)}_getOffset(e,t){return oe*(Math.random()*(t-e)+e)}_line(e,t,i,s,n){const o=Math.pow(e-i,2)+Math.pow(t-s,2);let r=ne||0;r*r*100>o&&(r=Math.sqrt(o)/10);const a=r/2,l=.2+.2*Math.random();let h=re*ne*(s-t)/200,c=re*ne*(e-i)/200;h=this._getOffset(-h,h),c=this._getOffset(-c,c);let d=n||new he;return d.moveTo(e+this._getOffset(-r,r),t+this._getOffset(-r,r)),d.bcurveTo(h+e+(i-e)*l+this._getOffset(-r,r),c+t+(s-t)*l+this._getOffset(-r,r),h+e+2*(i-e)*l+this._getOffset(-r,r),c+t+2*(s-t)*l+this._getOffset(-r,r),i+this._getOffset(-r,r),s+this._getOffset(-r,r)),d.moveTo(e+this._getOffset(-a,a),t+this._getOffset(-a,a)),d.bcurveTo(h+e+(i-e)*l+this._getOffset(-a,a),c+t+(s-t)*l+this._getOffset(-a,a),h+e+2*(i-e)*l+this._getOffset(-a,a),c+t+2*(s-t)*l+this._getOffset(-a,a),i+this._getOffset(-a,a),s+this._getOffset(-a,a)),d}_continuousLine(e,t,i,s,n,o,r){r=r||new he;const a=Math.pow(e-i,2)+Math.pow(t-s,2);let l=ne||0;l*l*100>a&&(l=Math.sqrt(a)/10);const h=l/2,c=.2+.2*Math.random();let d=re*ne*(s-t)/200,u=re*ne*i/200;return d=this._getOffset(-d,d),u=this._getOffset(-u,u),n&&r.moveTo(e+this._getOffset(-l,l),t+this._getOffset(-l,l)),o?r.bcurveTo(d+e+(i-e)*c+this._getOffset(-h,h),u+t+(s-t)*c+this._getOffset(-h,h),d+e+2*(i-e)*c+this._getOffset(-h,h),u+t+2*(s-t)*c+this._getOffset(-h,h),i+this._getOffset(-h,h),s+this._getOffset(-h,h)):r.bcurveTo(d+e+(i-e)*c+this._getOffset(-l,l),u+t+(s-t)*c+this._getOffset(-l,l),d+e+2*(i-e)*c+this._getOffset(-l,l),u+t+2*(s-t)*c+this._getOffset(-l,l),i+this._getOffset(-l,l),s+this._getOffset(-l,l)),r}_curve(e,t){const i=e.length;let s=t||new he;if(i>3){const t=[],n=1-ae;s.moveTo(e[1][0],e[1][1]);for(let o=1;o+2<i;o++){const i=e[o];t[0]=[i[0],i[1]],t[1]=[i[0]+(n*e[o+1][0]-n*e[o-1][0])/6,i[1]+(n*e[o+1][1]-n*e[o-1][1])/6],t[2]=[e[o+1][0]+(n*e[o][0]-n*e[o+2][0])/6,e[o+1][1]+(n*e[o][1]-n*e[o+2][1])/6],t[3]=[e[o+1][0],e[o+1][1]],s.bcurveTo(t[1][0],t[1][1],t[2][0],t[2][1],t[3][0],t[3][1])}}else 3===i?(s.moveTo(e[0][0],e[0][1]),s.bcurveTo(e[1][0],e[1][1],e[2][0],e[2][1],e[2][0],e[2][1])):2==i&&(s=this._line(e[0][0],e[0][1],e[1][0],e[1][1],s));return s}};customElements.define("wired-button",class extends se{static get properties(){return{elevation:Number,disabled:Boolean}}constructor(){super(),this.elevation=1,this.disabled=!1}_createRoot(){const e=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),e}_render({text:e,elevation:t,disabled:i}){return this._onDisableChange(),te`
    <style>
      :host {
        display: inline-block;
        font-family: inherit;
        cursor: pointer;
        padding: 8px 10px;
        position: relative;
        text-align: center;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        display: inline-flex;
        outline: none;
      }
    
      :host(.pending) {
        opacity: 0;
      }
    
      :host(:active) path {
        transform: scale(0.97) translate(1.5%, 1.5%);
      }
    
      :host(.disabled) {
        opacity: 0.6 !important;
        background: rgba(0, 0, 0, 0.07);
        cursor: default;
        pointer-events: none;
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
        transition: transform 0.05s ease;
      }
    </style>
    <slot></slot>
    <div class="overlay">
      <svg id="svg"></svg>
    </div>
    `}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_clearNode(e){for(;e.hasChildNodes();)e.removeChild(e.lastChild)}connectedCallback(){super.connectedCallback(),setTimeout(()=>this._didRender())}_didRender(){const e=this.shadowRoot.getElementById("svg");this._clearNode(e);const t=this.getBoundingClientRect(),i=Math.min(Math.max(1,this.elevation),5),s=t.width+2*(i-1),n=t.height+2*(i-1);e.setAttribute("width",s),e.setAttribute("height",n),ce.rectangle(e,0,0,t.width,t.height);for(var o=1;o<i;o++)ce.line(e,2*o,t.height+2*o,t.width+2*o,t.height+2*o).style.opacity=(75-10*o)/100,ce.line(e,t.width+2*o,t.height+2*o,t.width+2*o,2*o).style.opacity=(75-10*o)/100,ce.line(e,2*o,t.height+2*o,t.width+2*o,t.height+2*o).style.opacity=(75-10*o)/100,ce.line(e,t.width+2*o,t.height+2*o,t.width+2*o,2*o).style.opacity=(75-10*o)/100;this.classList.remove("pending")}});customElements.define("wired-card",class extends se{static get properties(){return{elevation:Number}}constructor(){super(),this.elevation=1}_createRoot(){const e=this.attachShadow({mode:"open"});return this.classList.add("pending"),e}_render(){return te`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 5px;
      }
    
      :host(.pending) {
        opacity: 0;
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
      }
    </style>
    <div>
      <slot on-slotchange="${()=>this._requestRender()}"></slot>
    </div>
    <div class="overlay">
      <svg id="svg"></svg>
    </div>
    `}_clearNode(e){for(;e.hasChildNodes();)e.removeChild(e.lastChild)}connectedCallback(){super.connectedCallback(),setTimeout(()=>this._didRender())}_didRender(){const e=this.shadowRoot.getElementById("svg");this._clearNode(e);var t=this.getBoundingClientRect(),i=Math.min(Math.max(1,this.elevation),5),s=t.width+2*(i-1),n=t.height+2*(i-1);e.setAttribute("width",s),e.setAttribute("height",n),ce.rectangle(e,0,0,t.width,t.height);for(var o=1;o<i;o++)ce.line(e,2*o,t.height+2*o,t.width+2*o,t.height+2*o).style.opacity=(85-10*o)/100,ce.line(e,t.width+2*o,t.height+2*o,t.width+2*o,2*o).style.opacity=(85-10*o)/100,ce.line(e,2*o,t.height+2*o,t.width+2*o,t.height+2*o).style.opacity=(85-10*o)/100,ce.line(e,t.width+2*o,t.height+2*o,t.width+2*o,2*o).style.opacity=(85-10*o)/100;this.classList.remove("pending")}});customElements.define("wired-checkbox",class extends se{static get properties(){return{checked:Boolean,text:String,disabled:Boolean}}constructor(){super(),this.disabled=!1,this.checked=!1}_createRoot(){const e=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),e}_render({text:e,iconsize:t}){return this._onDisableChange(),te`
    <style>
      :host {
        display: block;
        font-family: inherit;
        outline: none;
      }
    
      :host(.disabled) {
        opacity: 0.6 !important;
        cursor: default;
        pointer-events: none;
      }
    
      :host(.disabled) svg {
        background: rgba(0, 0, 0, 0.07);
      }
    
      :host(.pending) {
        opacity: 0;
      }
    
      #container {
        display: inline-block;
        white-space: nowrap;
      }
    
      .inline {
        display: inline-block;
        vertical-align: middle;
      }
    
      #checkPanel {
        cursor: pointer;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: var(--wired-checkbox-icon-color, currentColor);
        stroke-width: 0.7;
      }
    </style>
    <div id="container" on-click="${()=>this._toggleCheck()}">
      <div id="checkPanel" class="inline">
        <svg id="svg" width="0" height="0"></svg>
      </div>
      <div class="inline">${e}</div>
    </div>
    `}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_toggleCheck(){this.checked=!this.checked;const e=new CustomEvent("change",{bubbles:!0,composed:!0,checked:this.checked,detail:{checked:this.checked}});this.dispatchEvent(e)}_clearNode(e){for(;e.hasChildNodes();)e.removeChild(e.lastChild)}_didRender(){const e=this.shadowRoot.getElementById("svg");this._clearNode(e);const t=24,i=24;e.setAttribute("width",t),e.setAttribute("height",i),ce.rectangle(e,0,0,t,i);const s=[];s.push(ce.line(e,.3*t,.4*i,.5*t,.7*i)),s.push(ce.line(e,.5*t,.7*i,t+5,-5)),s.forEach(e=>{e.style.strokeWidth=2.5}),this.checked?s.forEach(e=>{e.style.display=""}):s.forEach(e=>{e.style.display="none"}),this.classList.remove("pending")}});customElements.define("wired-item",class extends se{static get properties(){return{text:String,value:String}}_render({text:e}){return te`
    <style>
      :host {
        display: block;
        padding: 8px;
        font-family: inherit;
      }
    </style>
    <span>${e}</span>
    `}connectedCallback(){super.connectedCallback(),this._itemClickHandler=(e=>{this._onClick(e)}),this.addEventListener("click",this._itemClickHandler)}disconnectedCallback(){super.disconnectedCallback(),this._itemClickHandler&&(this.removeEventListener("click",this._itemClickHandler),this._itemClickHandler=null)}_onClick(e){const t=new CustomEvent("item-click",{bubbles:!0,composed:!0,detail:{text:this.text,value:this.value}});this.dispatchEvent(t)}});customElements.define("wired-combo",class extends se{static get properties(){return{value:Object,selected:String,disabled:Boolean}}constructor(){super(),this.disabled=!1,this._cardShowing=!1}_createRoot(){const e=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),e}_render({value:e}){return this._onDisableChange(),te`
    <style>
      :host {
        display: inline-block;
        font-family: inherit;
        position: relative;
        outline: none;
      }
    
      :host(.disabled) {
        opacity: 0.5 !important;
        cursor: default;
        pointer-events: none;
        background: rgba(0, 0, 0, 0.02);
      }
    
      :host(.pending) {
        opacity: 0;
      }
    
      #container {
        white-space: nowrap;
        position: relative;
      }
    
      .inline {
        display: inline-block;
        vertical-align: top
      }
    
      #textPanel {
        min-width: 90px;
        min-height: 18px;
        padding: 8px;
      }
    
      #dropPanel {
        width: 34px;
        cursor: pointer;
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
      }
    
      #card {
        position: absolute;
        background: var(--wired-combo-popup-bg, white);
        z-index: 1;
        box-shadow: 1px 5px 15px -6px rgba(0, 0, 0, 0.8);
      }
    
      ::slotted(wired-item) {
        cursor: pointer;
        white-space: nowrap;
      }
    
      ::slotted(wired-item:hover) {
        background: var(--wired-combo-item-hover-bg, rgba(0, 0, 0, 0.1));
      }
    </style>
    <div id="container" on-click="${e=>this._onCombo(e)}">
      <div id="textPanel" class="inline">
        <span>${e&&e.text}</span>
      </div>
      <div id="dropPanel" class="inline"></div>
      <div class="overlay">
        <svg id="svg"></svg>
      </div>
    </div>
    <wired-card id="card" on-item-click="${e=>this._onItemClick(e)}" style="display: none;">
      <slot id="slot"></slot>
    </wired-card>
    `}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_clearNode(e){for(;e.hasChildNodes();)e.removeChild(e.lastChild)}_firstRendered(){this._refreshSelection()}_didRender(){const e=this.shadowRoot.getElementById("svg");this._clearNode(e);const t=this.shadowRoot.getElementById("container").getBoundingClientRect();e.setAttribute("width",t.width),e.setAttribute("height",t.height);const i=this.shadowRoot.getElementById("textPanel").getBoundingClientRect();this.shadowRoot.getElementById("dropPanel").style.minHeight=i.height+"px",ce.rectangle(e,0,0,i.width,i.height);const s=i.width-4;ce.rectangle(e,s,0,34,i.height);const n=Math.max(0,Math.abs((i.height-24)/2)),o=ce.polygon(e,[[s+8,5+n],[s+26,5+n],[s+17,n+Math.min(i.height,18)]]);o.style.fill="currentColor",o.style.pointerEvents=this.disabled?"none":"auto",o.style.cursor="pointer",this.classList.remove("pending")}_refreshSelection(){const e=this.shadowRoot.getElementById("slot").assignedNodes();if(e){let t=null;for(let i=0;i<e.length;i++)if("WIRED-ITEM"===e[i].tagName){const s=e[i].value||"";if(this.selected&&s===this.selected){t=e[i];break}}this.value=t?{value:t.value,text:t.text}:null}}_onCombo(e){e.stopPropagation(),this._setCardShowing(!this._cardShowing)}_setCardShowing(e){this._cardShowing=e;const t=this.shadowRoot.getElementById("card");t.style.display=e?"":"none",e&&setTimeout(()=>{t._requestRender()},10)}_onItemClick(e){e.stopPropagation(),this._setCardShowing(!1),this.selected=e.detail.value,this._refreshSelection();const t=new CustomEvent("selected",{bubbles:!0,composed:!0,checked:this.checked,detail:{selected:this.selected}});this.dispatchEvent(t)}});
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const de=te`<style>:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased}
</style>`;i("H2h+");customElements.define("mwc-icon",
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class extends se{_renderStyle(){return de}_render(){return te`${this._renderStyle()}<slot></slot>`}});customElements.define("wired-icon-button",class extends se{static get properties(){return{disabled:Boolean}}constructor(){super(),this.disabled=!1}_createRoot(){const e=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),e}_render(){return this._onDisableChange(),te`
    <style>
      :host {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        position: relative;
        vertical-align: middle;
        padding: 8px;
        outline: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        z-index: 0;
        line-height: 1;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;
        box-sizing: border-box !important;
      }
    
      :host(.pending) {
        opacity: 0;
      }
    
      :host(.disabled) {
        opacity: 0.45 !important;
        cursor: default;
        background: rgba(0, 0, 0, 0.07);
        border-radius: 50%;
        pointer-events: none;
      }
    
      :host(:active) path {
        transform: scale(0.96) translate(2%, 2%);
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: var(--wired-icon-bg-color, transparent);
        transition: transform 0.05s ease;
      }
    
      mwc-icon {
        position: relative;
        font-size: var(--wired-icon-size, 24px);
      }
    </style>
    <div class="overlay">
      <svg id="svg"></svg>
    </div>
    <mwc-icon>
      <slot></slot>
    </mwc-icon>
    `}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_clearNode(e){for(;e.hasChildNodes();)e.removeChild(e.lastChild)}_didRender(){const e=this.shadowRoot.getElementById("svg");this._clearNode(e);const t=this.getBoundingClientRect(),i=Math.min(t.width,t.height);e.setAttribute("width",i),e.setAttribute("height",i),ce.ellipse(e,i/2,i/2,i,i),this.classList.remove("pending")}connectedCallback(){super.connectedCallback(),setTimeout(()=>this._didRender())}});customElements.define("wired-input",class extends se{static get properties(){return{placeholder:String,disabled:Boolean,type:String,required:Boolean,autocomplete:String,autofocus:Boolean,minlength:Number,maxlength:Number,min:String,max:String,step:String,readonly:Boolean,size:Number,autocapitalize:String,autocorrect:String}}constructor(){super(),this.disabled=!1}_createRoot(){const e=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),e}_render({type:e,placeholder:t,disabled:i,required:s,autocomplete:n,autofocus:o,minlength:r,maxlength:a,min:l,max:h,step:c,readonly:d,size:u,autocapitalize:p,autocorrect:f}){return this._onDisableChange(),te`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 5px;
        font-family: sans-serif;
        width: 150px;
        outline: none;
      }
    
      :host(.pending) {
        opacity: 0;
      }
    
      :host(.disabled) {
        opacity: 0.6 !important;
        cursor: default;
        pointer-events: none;
      }
    
      :host(.disabled) svg {
        background: rgba(0, 0, 0, 0.07);
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
      }
    
      input {
        display: block;
        width: 100%;
        box-sizing: border-box;
        outline: none;
        border: none;
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
        color: inherit;
      }
    </style>
    <input id="txt" type$="${e}" placeholder$="${t}" disabled?="${i}" required?="${s}" autocomplete$="${n}"
      autofocus?="${o}" minlength$="${r}" maxlength$="${a}" min$="${l}" max$="${h}" step$="${c}"
      readonly?="${d}" size$="${u}" autocapitalize$="${p}" autocorrect$="${f}" on-change="${e=>this._onChange(e)}">
    <div class="overlay">
      <svg id="svg"></svg>
    </div>
    `}get input(){return this.shadowRoot.getElementById("txt")}get value(){const e=this.input;return e&&e.value||""}set value(e){const t=this.input;t&&(t.value=e)}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_onChange(e){e.stopPropagation();const t=new CustomEvent(e.type,{bubbles:!0,composed:!0,cancelable:e.cancelable,detail:{sourceEvent:e}});this.dispatchEvent(t)}_clearNode(e){for(;e.hasChildNodes();)e.removeChild(e.lastChild)}_didRender(){const e=this.shadowRoot.getElementById("svg");this._clearNode(e);const t=this.getBoundingClientRect();e.setAttribute("width",t.width),e.setAttribute("height",t.height),ce.rectangle(e,0,0,t.width,t.height),this.classList.remove("pending")}});customElements.define("wired-listbox",class extends se{static get properties(){return{value:Object,selected:String,horizontal:Boolean}}constructor(){super(),this.horizontal=!1}_createRoot(){const e=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),e}_render({horizontal:e}){return e?this.classList.add("horizontal"):this.classList.remove("horizontal"),this._onDisableChange(),te`
      <style>
        :host {
          display: inline-block;
          font-family: inherit;
          position: relative;
          padding: 5px;
          outline: none;
        }
      
        :host(.pending) {
          opacity: 0;
        }
      
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }
      
        svg {
          display: block;
        }
      
        path {
          stroke: currentColor;
          stroke-width: 0.7;
          fill: transparent;
        }
      
        ::slotted(.selected-item) {
          background: var(--wired-combo-item-selected-bg, rgba(0, 0, 200, 0.1));
        }
      
        ::slotted(wired-item) {
          cursor: pointer;
          white-space: nowrap;
          display: block;
        }
      
        :host(.horizontal) ::slotted(wired-item) {
          display: inline-block;
        }
      
        ::slotted(wired-item:hover) {
          background: var(--wired-combo-item-hover-bg, rgba(0, 0, 0, 0.1));
        }
      </style>
      <slot id="slot"></slot>
      <div class="overlay">
        <svg id="svg"></svg>
      </div>`}connectedCallback(){super.connectedCallback(),this._itemClickHandler=(e=>{this._onItemClick(e)}),this.addEventListener("item-click",this._itemClickHandler)}disconnectedCallback(){super.disconnectedCallback(),this._itemClickHandler&&(this.removeEventListener("item-click",this._itemClickHandler),this._itemClickHandler=null)}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_clearNode(e){for(;e.hasChildNodes();)e.removeChild(e.lastChild)}_firstRendered(){this._refreshSelection()}_didRender(){const e=this.shadowRoot.getElementById("svg");this._clearNode(e);const t=this.getBoundingClientRect();e.setAttribute("width",t.width),e.setAttribute("height",t.height),ce.rectangle(e,0,0,t.width,t.height),this.classList.remove("pending")}_refreshSelection(){this.lastSelectedItem&&this.lastSelectedItem.classList.remove("selected-item");const e=this.shadowRoot.getElementById("slot").assignedNodes();if(e){let t=null;for(let i=0;i<e.length;i++)if("WIRED-ITEM"===e[i].tagName){const s=e[i].value||"";if(this.selected&&s===this.selected){t=e[i];break}}this.lastSelectedItem=t,t?(this.lastSelectedItem.classList.add("selected-item"),this.value={value:t.value,text:t.text}):this.value=null}}_onItemClick(e){e.stopPropagation(),this.selected=e.detail.value,this._refreshSelection();const t=new CustomEvent("selected",{bubbles:!0,composed:!0,checked:this.checked,detail:{selected:this.selected}});this.dispatchEvent(t)}});customElements.define("wired-progress",class extends se{static get properties(){return{value:Number,min:Number,max:Number,percentage:Boolean}}constructor(){super(),this.percentage=!1,this.max=100,this.min=0,this.value=0}_createRoot(){const e=this.attachShadow({mode:"open"});return this.classList.add("pending"),e}_render(){return te`
    <style>
      :host {
        display: inline-block;
        position: relative;
        width: 400px;
        height: 42px;
        font-family: sans-serif;
      }
    
      :host(.pending) {
        opacity: 0;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      .labelContainer {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    
      .progressLabel {
        color: var(--wired-progress-label-color, #000);
        font-size: var(--wired-progress-font-size, 18px);
      }
    
      .progbox {
        fill: var(--wired-progress-color, rgba(0, 0, 200, 0.1));
        stroke-opacity: 0.6;
        stroke-width: 0.4;
      }
    </style>
    <div class="overlay">
      <svg id="svg"></svg>
    </div>
    <div class="overlay labelContainer">
      <div class="progressLabel">${this._getProgressLabel()}</div>
    </div>
    `}_getProgressLabel(){return this.percentage?this.max==this.min?"%":Math.floor((this.value-this.min)/(this.max-this.min)*100)+"%":""+this.value}_clearNode(e){for(;e.hasChildNodes();)e.removeChild(e.lastChild)}_didRender(){const e=this.shadowRoot.getElementById("svg");this._clearNode(e);var t=this.getBoundingClientRect();e.setAttribute("width",t.width),e.setAttribute("height",t.height),ce.rectangle(e,0,0,t.width,t.height);let i=0;if(this.max>this.min){i=(this.value-this.min)/(this.max-this.min);const s=t.width*Math.max(0,Math.min(i,100));ce.polygon(e,[[0,0],[s,0],[s,t.height],[0,t.height]]).classList.add("progbox")}this.classList.remove("pending")}});customElements.define("wired-radio",class extends se{static get properties(){return{checked:Boolean,name:String,text:String,iconsize:Number,disabled:Boolean}}constructor(){super(),this.disabled=!1,this.checked=!1,this.iconsize=24}_createRoot(){const e=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),e}_render({text:e,iconsize:t}){return this._onDisableChange(),te`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 5px;
        font-family: inherit;
        width: 150px;
        outline: none;
      }
    
      :host(.pending) {
        opacity: 0;
      }
    
      :host(.disabled) {
        opacity: 0.45 !important;
        cursor: default;
        pointer-events: none;
      }
    
      #container {
        display: inline-block;
        white-space: nowrap;
      }
    
      .inline {
        display: inline-block;
        vertical-align: middle;
      }
    
      #checkPanel {
        cursor: pointer;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: var(--wired-radio-icon-color, currentColor);
        stroke-width: 0.7;
        fill: transparent;
      }
    
      .filledPath {
        fill: var(--wired-radio-icon-color, currentColor);
      }
    </style>
    <div id="container" on-click="${()=>this._toggleCheck()}">
      <div id="checkPanel" class="inline">
        <svg id="svg" width="0" height="0"></svg>
      </div>
      <div class="inline">${e}</div>
    </div>
    `}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_toggleCheck(){this.checked=!this.checked;const e=new CustomEvent("change",{bubbles:!0,composed:!0,checked:this.checked,detail:{checked:this.checked}});this.dispatchEvent(e)}_clearNode(e){for(;e.hasChildNodes();)e.removeChild(e.lastChild)}_didRender(){const e=this.shadowRoot.getElementById("svg");this._clearNode(e),this._dot=null;const t={width:this.iconsize||24,height:this.iconsize||24};e.setAttribute("width",t.width),e.setAttribute("height",t.height),ce.ellipse(e,t.width/2,t.height/2,t.width,t.height);const i=Math.max(.6*t.width,5),s=Math.max(.6*t.height,5);this._dot=ce.ellipse(e,t.width/2,t.height/2,i,s),this._dot.classList.add("filledPath"),this._dot.style.display=this.checked?"":"none",this.classList.remove("pending")}});customElements.define("wired-radio-group",class extends se{static get properties(){return{selected:String}}_render({selected:e}){return te`
    <style>
      :host {
        display: inline-block;
      }
    
      :host ::slotted(*) {
        padding: var(--wired-radio-group-item-padding, 5px);
      }
    </style>
    <slot id="slot" on-slotchange="${()=>this.slotChange()}"></slot>
    `}constructor(){super(),this._checkListener=this._handleChecked.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",this._checkListener)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("checked",this._checkListener)}_handleChecked(e){const t=e.detail.checked,i=e.target.name;this.selected=t&&i||"";const s=new CustomEvent("selected",{bubbles:!0,composed:!0,checked:this.checked,detail:{selected:this.selected}});this.dispatchEvent(s)}slotChange(){this._requestRender()}_didRender(){const e=this.shadowRoot.getElementById("slot").assignedNodes();if(e&&e.length)for(let t=0;t<e.length;t++)if("WIRED-RADIO"===e[t].tagName){const i=e[t].name||"";this.selected&&i===this.selected?e[t].checked=!0:e[t].checked=!1}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class ue{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,pe.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),pe.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,i){return e instanceof ue?e._cancelAsync():e=new ue,e.setConfig(t,i),e}}let pe=new Set;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const fe=!window.ShadyDOM||!window.ShadyDOM.inUse;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback,fe&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const e=new CSSStyleSheet;e.replaceSync("");const t=document.createElement("div");t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]}catch(e){return!1}})();window.Polymer&&window.Polymer.rootPath||(ge=document.baseURI||window.location.href).substring(0,ge.lastIndexOf("/")+1);var ge;window.Polymer&&window.Polymer.sanitizeDOMValue;let me=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1;window.Polymer&&window.Polymer.strictTemplatePolicy;window.Polymer&&window.Polymer.allowTemplateFromDomModule;window.Polymer&&window.Polymer.legacyOptimizations;window.Polymer&&window.Polymer.legacyWarnings;window.Polymer&&window.Polymer.syncInitialRender;window.Polymer&&window.Polymer.legacyUndefined;window.Polymer&&window.Polymer.orderedComputed;let _e=!0;window.Polymer&&window.Polymer.removeNestedTemplates;window.Polymer&&window.Polymer.fastDomIf;window.Polymer&&window.Polymer.suppressTemplateNotifications;window.Polymer&&window.Polymer.legacyNoObservedAttributes;window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let ve="string"==typeof document.head.style.touchAction,be="__polymerGestures",ye="__polymerGesturesHandled",we="__polymerGesturesTouchAction",ke=25,xe=5,Ce=2500,Ee=["mousedown","mousemove","mouseup","click"],Se=[0,1,4,2],Ne=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function Pe(e){return Ee.indexOf(e)>-1}let Te=!1;function Oe(e){if(!Pe(e)&&"touchend"!==e)return ve&&Te&&me?{passive:!0}:void 0}!function(){try{let e=Object.defineProperty({},"passive",{get(){Te=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();let Le=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const Re=[],Ae={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},Me={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Ie(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];let i=e.getRootNode();if(e.id){let s=i.querySelectorAll(`label[for = ${e.id}]`);for(let e=0;e<s.length;e++)t.push(s[e])}}return t}let $e=function(e){let t=e.sourceCapabilities;var i;if((!t||t.firesTouchEvents)&&(e[ye]={skip:!0},"click"===e.type)){let t=!1,s=je(e);for(let e=0;e<s.length;e++){if(s[e].nodeType===Node.ELEMENT_NODE)if("label"===s[e].localName)Re.push(s[e]);else if(i=s[e],Ae[i.localName]){let i=Ie(s[e]);for(let e=0;e<i.length;e++)t=t||Re.indexOf(i[e])>-1}if(s[e]===ze.mouse.target)return}if(t)return;e.preventDefault(),e.stopPropagation()}};function Be(e){let t=Le?["click"]:Ee;for(let i,s=0;s<t.length;s++)i=t[s],e?(Re.length=0,document.addEventListener(i,$e,!0)):document.removeEventListener(i,$e,!0)}function De(e){let t=e.type;if(!Pe(t))return!1;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!Ne&&(t=Se[e.which]||0),Boolean(1&t)}return 0===(void 0===e.button?0:e.button)}let ze={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function He(e,t,i){e.movefn=t,e.upfn=i,document.addEventListener("mousemove",t),document.addEventListener("mouseup",i)}function Ve(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}_e&&document.addEventListener("touchend",function(e){if(!_e)return;ze.mouse.mouseIgnoreJob||Be(!0),ze.mouse.target=je(e)[0],ze.mouse.mouseIgnoreJob=ue.debounce(ze.mouse.mouseIgnoreJob,w.after(Ce),function(){Be(),ze.mouse.target=null,ze.mouse.mouseIgnoreJob=null})},!!Te&&{passive:!0});const je=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],Fe={},qe=[];function Xe(e){const t=je(e);return t.length>0?t[0]:e.target}function We(e){let t,i=e.type,s=e.currentTarget[be];if(!s)return;let n=s[i];if(n){if(!e[ye]&&(e[ye]={},"touch"===i.slice(0,5))){let t=(e=e).changedTouches[0];if("touchstart"===i&&1===e.touches.length&&(ze.touch.id=t.identifier),ze.touch.id!==t.identifier)return;ve||"touchstart"!==i&&"touchmove"!==i||function(e){let t=e.changedTouches[0],i=e.type;if("touchstart"===i)ze.touch.x=t.clientX,ze.touch.y=t.clientY,ze.touch.scrollDecided=!1;else if("touchmove"===i){if(ze.touch.scrollDecided)return;ze.touch.scrollDecided=!0;let i=function(e){let t="auto",i=je(e);for(let e,s=0;s<i.length;s++)if((e=i[s])[we]){t=e[we];break}return t}(e),s=!1,n=Math.abs(ze.touch.x-t.clientX),o=Math.abs(ze.touch.y-t.clientY);e.cancelable&&("none"===i?s=!0:"pan-x"===i?s=o>n:"pan-y"===i&&(s=n>o)),s?e.preventDefault():Ue("track")}}(e)}if(!(t=e[ye]).skip){for(let i,s=0;s<qe.length;s++)n[(i=qe[s]).name]&&!t[i.name]&&i.flow&&i.flow.start.indexOf(e.type)>-1&&i.reset&&i.reset();for(let s,o=0;o<qe.length;o++)n[(s=qe[o]).name]&&!t[s.name]&&(t[s.name]=!0,s[i](e))}}}function Ye(e,t,i){return!!Fe[t]&&(function(e,t,i){let s=Fe[t],n=s.deps,o=s.name,r=e[be];r||(e[be]=r={});for(let t,i,s=0;s<n.length;s++)t=n[s],Le&&Pe(t)&&"click"!==t||((i=r[t])||(r[t]=i={_count:0}),0===i._count&&e.addEventListener(t,We,Oe(t)),i[o]=(i[o]||0)+1,i._count=(i._count||0)+1);e.addEventListener(t,i),s.touchAction&&function(e,t){ve&&e instanceof HTMLElement&&k.run(()=>{e.style.touchAction=t});e[we]=t}(e,s.touchAction)}(e,t,i),!0)}function Je(e){qe.push(e);for(let t=0;t<e.emits.length;t++)Fe[e.emits[t]]=e}function Ge(e,t,i){let s=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(s.detail=i,x(e).dispatchEvent(s),s.defaultPrevented){let e=i.preventer||i.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function Ue(e){let t=function(e){for(let t,i=0;i<qe.length;i++){t=qe[i];for(let i,s=0;s<t.emits.length;s++)if((i=t.emits[s])===e)return t}return null}(e);t.info&&(t.info.prevent=!0)}function Ke(e,t,i,s){t&&Ge(t,e,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:s,prevent:function(e){return Ue(e)}})}function Qe(e,t,i){if(e.prevent)return!1;if(e.started)return!0;let s=Math.abs(e.x-t),n=Math.abs(e.y-i);return s>=xe||n>=xe}function Ze(e,t,i){if(!t)return;let s,n=e.moves[e.moves.length-2],o=e.moves[e.moves.length-1],r=o.x-e.x,a=o.y-e.y,l=0;n&&(s=o.x-n.x,l=o.y-n.y),Ge(t,"track",{state:e.state,x:i.clientX,y:i.clientY,dx:r,dy:a,ddx:s,ddy:l,sourceEvent:i,hover:function(){return function(e,t){let i=document.elementFromPoint(e,t),s=i;for(;s&&s.shadowRoot&&!window.ShadyDOM&&s!==(s=s.shadowRoot.elementFromPoint(e,t));)s&&(i=s);return i}(i.clientX,i.clientY)}})}function et(e,t,i){let s=Math.abs(t.clientX-e.x),n=Math.abs(t.clientY-e.y),o=Xe(i||t);!o||Me[o.localName]&&o.hasAttribute("disabled")||(isNaN(s)||isNaN(n)||s<=ke&&n<=ke||function(e){if("click"===e.type){if(0===e.detail)return!0;let t=Xe(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let i=t.getBoundingClientRect(),s=e.pageX,n=e.pageY;return!(s>=i.left&&s<=i.right&&n>=i.top&&n<=i.bottom)}return!1}(t))&&(e.prevent||Ge(o,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:i}))}Je({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){Ve(this.info)},mousedown:function(e){if(!De(e))return;let t=Xe(e),i=this;He(this.info,function(e){De(e)||(Ke("up",t,e),Ve(i.info))},function(e){De(e)&&Ke("up",t,e),Ve(i.info)}),Ke("down",t,e)},touchstart:function(e){Ke("down",Xe(e),e.changedTouches[0],e)},touchend:function(e){Ke("up",Xe(e),e.changedTouches[0],e)}}),Je({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Ve(this.info)},mousedown:function(e){if(!De(e))return;let t=Xe(e),i=this,s=function(e){let s=e.clientX,n=e.clientY;Qe(i.info,s,n)&&(i.info.state=i.info.started?"mouseup"===e.type?"end":"track":"start","start"===i.info.state&&Ue("tap"),i.info.addMove({x:s,y:n}),De(e)||(i.info.state="end",Ve(i.info)),t&&Ze(i.info,t,e),i.info.started=!0)};He(this.info,s,function(e){i.info.started&&s(e),Ve(i.info)}),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=Xe(e),i=e.changedTouches[0],s=i.clientX,n=i.clientY;Qe(this.info,s,n)&&("start"===this.info.state&&Ue("tap"),this.info.addMove({x:s,y:n}),Ze(this.info,t,i),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=Xe(e),i=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),Ze(this.info,t,i))}}),Je({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){De(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){De(e)&&et(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){et(this.info,e.changedTouches[0],e)}});customElements.define("wired-slider",class extends se{static get properties(){return{value:Number,min:Number,max:Number,knobradius:Number,disabled:Boolean}}constructor(){super(),this.disabled=!1,this.value=0,this.min=0,this.max=100,this.knobradius=10}_createRoot(){const e=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),e}_render(){return this._onDisableChange(),te`
    <style>
      :host {
        display: inline-block;
        position: relative;
        width: 300px;
        height: 40px;
        outline: none;
        box-sizing: border-box;
      }
    
      :host(.disabled) {
        opacity: 0.45 !important;
        cursor: default;
        pointer-events: none;
        background: rgba(0, 0, 0, 0.07);
        border-radius: 5px;
      }
    
      :host(.disabled) .knob {
        pointer-events: none !important;
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke-width: 0.7;
        fill: transparent;
      }
    
      .knob {
        pointer-events: auto;
        fill: var(--wired-slider-knob-zero-color, gray);
        stroke: var(--wired-slider-knob-zero-color, gray);
        transition: transform 0.15s ease;
        cursor: pointer;
      }
    
      .hasValue {
        fill: var(--wired-slider-knob-color, rgb(51, 103, 214));
        stroke: var(--wired-slider-knob-color, rgb(51, 103, 214));
      }
    
      .bar {
        stroke: var(--wired-slider-bar-color, rgb(0, 0, 0));
      }
    
      :host(.pending) {
        opacity: 0;
      }
    </style>
    <div class="overlay">
      <svg id="svg"></svg>
    </div>
    `}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_clearNode(e){for(;e.hasChildNodes();)e.removeChild(e.lastChild)}connectedCallback(){super.connectedCallback(),setTimeout(()=>this._firstRendered(),100)}_firstRendered(){const e=this.shadowRoot.getElementById("svg");this._clearNode(e);const t=this.getBoundingClientRect();e.setAttribute("width",t.width),e.setAttribute("height",t.height);let i=this.knobradius||10;this._barWidth=t.width-2*i,this._bar=ce.line(e,i,t.height/2,t.width-i,t.height/2),this._bar.classList.add("bar"),this._knobGroup=ce._svgNode("g"),e.appendChild(this._knobGroup),this._knob=ce.ellipse(this._knobGroup,i,t.height/2,2*i,2*i),this._knob.classList.add("knob"),this._onValueChange(),this.classList.remove("pending"),Ye(this._knob,"down",e=>{this.disabled||this._knobdown(e)}),Ye(this._knob,"up",e=>{this.disabled||this._resetKnob(e)}),Ye(this._knob,"track",e=>{this.disabled||this._onTrack(e)})}_onValueChange(){if(!this._knob)return;let e=0;this.max>this.min&&(e=Math.min(1,Math.max((this.value-this.min)/(this.max-this.min),0))),this._pct=e,e?this._knob.classList.add("hasValue"):this._knob.classList.remove("hasValue");let t=e*this._barWidth;this._knobGroup.style.transform="translateX("+Math.round(t)+"px)"}_knobdown(e){this._knobExpand(!0),e.preventDefault(),this.focus()}_resetKnob(e){this._knobExpand(!1)}_knobExpand(e){this._knob&&(e?this._knob.classList.add("expanded"):this._knob.classList.remove("expanded"))}_onTrack(e){switch(e.stopPropagation(),e.detail.state){case"start":this._trackStart(e);break;case"track":this._trackX(e);break;case"end":this._trackEnd()}}_trackStart(e){this._intermediateValue=this.value,this._startx=this._pct*this._barWidth,this._knobstartx=this._startx,this._minx=-this._startx,this._maxx=this._barWidth-this._startx,this._dragging=!0}_trackX(e){this._dragging||this._trackStart(e);var t=e.detail.dx||0,i=Math.max(Math.min(this._startx+t,this._barWidth),0);this._knobGroup.style.transform="translateX("+Math.round(i)+"px)";var s=i/this._barWidth;this._intermediateValue=this.min+s*(this.max-this.min)}_trackEnd(){this._dragging=!1,this._resetKnob(),this.value=this._intermediateValue,this._pct=(this.value-this.min)/(this.max-this.min);const e=new CustomEvent("change",{bubbles:!0,composed:!0,detail:{value:this._intermediateValue}});this.dispatchEvent(e)}});customElements.define("wired-textarea",class extends se{static get properties(){return{rows:Number,maxrows:Number,autocomplete:String,autofocus:Boolean,inputmode:String,placeholder:String,readonly:Boolean,required:Boolean,minlength:Number,maxlength:Number,disabled:Boolean}}constructor(){super(),this.disabled=!1,this.rows=1,this.maxrows=0}_createRoot(){const e=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),e}_render({rows:e,maxrows:t,autocomplete:i,autofocus:s,inputmode:n,placeholder:o,readonly:r,required:a,minlength:l,maxlength:h,disabled:c}){return this._onDisableChange(),te`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 5px;
        font-family: sans-serif;
        width: 400px;
        -moz-appearance: textarea;
        -webkit-appearance: textarea;
        outline: none;
      }
    
      :host(.pending) {
        opacity: 0;
      }
    
      :host(.disabled) {
        opacity: 0.6 !important;
        cursor: default;
        pointer-events: none;
      }
    
      :host(.disabled) svg {
        background: rgba(0, 0, 0, 0.07);
      }
    
      .fit {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
    
      .overlay {
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
      }
    
      .mirror-text {
        visibility: hidden;
        word-wrap: break-word;
      }
    
      textarea {
        position: relative;
        outline: none;
        border: none;
        resize: none;
        background: inherit;
        color: inherit;
        width: 100%;
        height: 100%;
        font-size: inherit;
        font-family: inherit;
        line-height: inherit;
        text-align: inherit;
        padding: 5px;
        box-sizing: border-box;
      }
    </style>
    <div id="mirror" class="mirror-text">&#160;</div>
    <div class="fit">
      <textarea id="textarea" autocomplete$="${i}" autofocus?="${s}" inputmode$="${n}" placeholder$="${o}"
        readonly?="${r}" required?="${a}" disabled?="${c}" rows$="${e}" minlength$="${l}" maxlength$="${h}"
        on-input="${()=>this._onInput()}"></textarea>
    </div>
    <div class="fit overlay">
      <svg id="svg"></svg>
    </div>
    `}connectedCallback(){super.connectedCallback(),this.value=this.value||""}get textarea(){return this.shadowRoot.getElementById("textarea")}get mirror(){return this.shadowRoot.getElementById("mirror")}get value(){const e=this.textarea;return e&&e.value||""}set value(e){const t=this.textarea;t&&(t.value!==e&&(t.value=e||0===e?e:""),this.mirror.innerHTML=this._valueForMirror(),this._requestRender())}_constrain(e){var t;for(e=e||[""],t=this.maxRows>0&&e.length>this.maxRows?e.slice(0,this.maxRows):e.slice(0);this.rows>0&&t.length<this.rows;)t.push("");return t.join("<br/>")+"&#160;"}_valueForMirror(){var e=this.textarea;if(e)return this.tokens=e&&e.value?e.value.replace(/&/gm,"&amp;").replace(/"/gm,"&quot;").replace(/'/gm,"&#39;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").split("\n"):[""],this._constrain(this.tokens)}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_updateCached(){this.mirror.innerHTML=this._constrain(this.tokens)}_onInput(e){this.value=this.textarea.value}_clearNode(e){for(;e.hasChildNodes();)e.removeChild(e.lastChild)}_needsLayout(){this.getBoundingClientRect().height!=this._prevHeight&&this._requestRender()}_didRender(){const e=this.getBoundingClientRect(),t=this.shadowRoot.getElementById("svg");this._prevHeight!==e.height&&(this._clearNode(t),t.setAttribute("width",e.width),t.setAttribute("height",e.height),ce.rectangle(t,2,2,e.width-2,e.height-2),this._prevHeight=e.height),this.classList.remove("pending"),this._updateCached()}});customElements.define("wired-toggle",class extends se{static get properties(){return{checked:Boolean,disabled:Boolean}}constructor(){super(),this.disabled=!1,this.checked=!1}_createRoot(){const e=this.attachShadow({mode:"open",delegatesFocus:!0});return this.classList.add("pending"),e}_render(){return this._onDisableChange(),te`
    <style>
      :host {
        display: inline-block;
        cursor: pointer;
        position: relative;
      }
    
      :host(.pending) {
        opacity: 0;
      }
    
      :host(.disabled) {
        opacity: 0.4 !important;
        cursor: default;
        pointer-events: none;
      }
    
      :host(.disabled) svg {
        background: rgba(0, 0, 0, 0.07);
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
      }
    
      .unchecked {
        fill: var(--wired-toggle-off-color, gray);
      }
    
      .checked {
        fill: var(--wired-toggle-on-color, rgb(63, 81, 181));
      }
    </style>
    <div on-click="${()=>this._toggleCheck()}">
      <svg id="svg"></svg>
    </div>
    `}_clearNode(e){for(;e.hasChildNodes();)e.removeChild(e.lastChild)}_toggleCheck(){this.checked=!this.checked;const e=new CustomEvent("change",{bubbles:!0,composed:!0,checked:this.checked,detail:{checked:this.checked}});this.dispatchEvent(e)}_onDisableChange(){this.disabled?this.classList.add("disabled"):this.classList.remove("disabled")}_didRender(){const e=this.shadowRoot.getElementById("svg");this._clearNode(e);const t={width:2.5*(this.height||32),height:this.height||32};e.setAttribute("width",t.width),e.setAttribute("height",t.height),ce.rectangle(e,0,0,t.width,t.height),this.knob=ce.ellipse(e,t.height/2,t.height/2,t.height,t.height),this.knobOffset=t.width-t.height,this.knob.style.transition="all 0.3s ease",this.knob.style.transform=this.checked?"translateX("+this.knobOffset+"px)":"";const i=this.knob.classList;this.checked?(i.remove("unchecked"),i.add("checked")):(i.remove("checked"),i.add("unchecked")),this.classList.remove("pending")}});customElements.define("wired-tooltip",class extends se{static get properties(){return{for:String,position:String,text:String,offset:Number}}constructor(){super(),this._dirty=!1,this._showing=!1,this._target=null,this.offset=14,this.position="bottom"}_render({text:e},t){return t&&(t.position||t.text)&&(this._dirty=!0),(!this._target||t&&t.for)&&this._refreshTarget(),te`
    <style>
      :host {
        display: block;
        position: absolute;
        outline: none;
        z-index: 1002;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        cursor: default;
        font-family: inherit;
        font-size: 9pt;
        line-height: 1;
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke-width: 0.7;
        stroke: var(--wired-tooltip-border-color, currentColor);
        fill: var(--wired-tooltip-background, rgba(255, 255, 255, 0.9));
      }
    
      #container {
        position: relative;
        padding: 8px;
      }
    </style>
    <div id="container" style="display: none;">
      <div class="overlay">
        <svg id="svg"></svg>
      </div>
      <span style="position: relative;">${e}</span>
    </div>
    `}get target(){if(this._target)return this._target;var e=this.parentNode,t=(this.getRootNode?this.getRootNode():null)||this.getOwnerDocument();return this.for?t.querySelector("#"+this.for):e.nodeType==Node.DOCUMENT_FRAGMENT_NODE?t.host:e}_detachListeners(){this._showHandler&&this._hideHandler&&(this._target&&(this._target.removeEventListener("mouseenter",this._showHandler),this._target.removeEventListener("focus",this._showHandler),this._target.removeEventListener("mouseleave",this._hideHandler),this._target.removeEventListener("blur",this._hideHandler),this._target.removeEventListener("click",this._hideHandler)),this.removeEventListener("mouseenter",this._hideHandler))}_attachListeners(){this._showHandler=(()=>{this.show()}),this._hideHandler=(()=>{this.hide()}),this._target&&(this._target.addEventListener("mouseenter",this._showHandler),this._target.addEventListener("focus",this._showHandler),this._target.addEventListener("mouseleave",this._hideHandler),this._target.addEventListener("blur",this._hideHandler),this._target.addEventListener("click",this._hideHandler)),this.addEventListener("mouseenter",this._hideHandler)}_refreshTarget(){this._detachListeners(),this._target=null,this._target=this.target,this._attachListeners(),this._dirty=!0}_clearNode(e){for(;e.hasChildNodes();)e.removeChild(e.lastChild)}_layout(){const e=this.shadowRoot.getElementById("svg");this._clearNode(e);var t=this.getBoundingClientRect(),i=t.width,s=t.height;switch(this.position){case"left":case"right":i+=this.offset;break;default:s+=this.offset}e.setAttribute("width",i),e.setAttribute("height",s);var n=[];switch(this.position){case"top":n=[[2,2],[i-2,2],[i-2,s-this.offset],[i/2+8,s-this.offset],[i/2,s-this.offset+8],[i/2-8,s-this.offset],[0,s-this.offset]];break;case"left":n=[[2,2],[i-this.offset,2],[i-this.offset,s/2-8],[i-this.offset+8,s/2],[i-this.offset,s/2+8],[i-this.offset,s],[2,s-2]];break;case"right":n=[[this.offset,2],[i-2,2],[i-2,s-2],[this.offset,s-2],[this.offset,s/2+8],[this.offset-8,s/2],[this.offset,s/2-8]],e.style.transform="translateX("+-this.offset+"px)";break;default:n=[[2,this.offset],[0,s-2],[i-2,s-2],[i-2,this.offset],[i/2+8,this.offset],[i/2,this.offset-8],[i/2-8,this.offset]],e.style.transform="translateY("+-this.offset+"px)"}ce.polygon(e,n),this._dirty=!1}_firstRendered(){this._layout()}_didRender(){this._dirty&&this._layout()}show(){this._showing||(this._showing=!0,this.shadowRoot.getElementById("container").style.display="",this.updatePosition(),setTimeout(()=>{this._layout()},1))}hide(){this._showing&&(this._showing=!1,this.shadowRoot.getElementById("container").style.display="none")}updatePosition(){if(this._target&&this.offsetParent){var e,t,i=this.offset,s=this.offsetParent.getBoundingClientRect(),n=this._target.getBoundingClientRect(),o=this.getBoundingClientRect(),r=(n.width-o.width)/2,a=(n.height-o.height)/2,l=n.left-s.left,h=n.top-s.top;switch(this.position){case"top":e=l+r,t=h-o.height-i;break;case"bottom":e=l+r,t=h+n.height+i;break;case"left":e=l-o.width-i,t=h+a;break;case"right":e=l+n.width+i,t=h+a}this.style.left=e+"px",this.style.top=t+"px"}}});var tt={directives:{clipboard:c},data:function(){return{activeName:"js",inputData:"https://github.com/Neveryu/vue-cms"}},methods:{handleCopy1:function(){this.$refs.input1.$refs.input.select(),document.execCommand("Copy"),this.$notify({title:"success",message:"copy成功",type:"success"})},handleCopy2:function(e,t){r(e,t)},clipboardSuccess:function(){this.$notify({title:"success",message:"copy成功",type:"success"})}}},it={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[i("el-tab-pane",{attrs:{label:"原生js方式",name:"js"}},[i("el-input",{ref:"input1",staticStyle:{width:"400px"},attrs:{placeholder:"Please input"},model:{value:e.inputData,callback:function(t){e.inputData=t},expression:"inputData"}}),e._v(" "),i("wired-button",{attrs:{elevation:"3"},on:{click:e.handleCopy1}},[e._v("copy")]),e._v(" "),i("p",{staticClass:"title"},[e._v("粘贴一下：")]),e._v(" "),i("el-input",{staticStyle:{width:"400px"},attrs:{type:"textarea",rows:10}})],1),e._v(" "),i("el-tab-pane",{attrs:{label:"用clipboard插件",name:"directly"},on:{click:function(t){return e.console.log("s")}}},[i("el-input",{ref:"input2",staticStyle:{width:"400px"},attrs:{placeholder:"Please input"},model:{value:e.inputData,callback:function(t){e.inputData=t},expression:"inputData"}}),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleCopy2(e.inputData,t)}}},[e._v("copy")]),e._v(" "),i("p",{staticClass:"title"},[e._v("粘贴一下：")]),e._v(" "),i("el-input",{staticStyle:{width:"400px"},attrs:{type:"textarea",rows:10}})],1),e._v(" "),i("el-tab-pane",{attrs:{label:"通过指令的方式调用clipboard",name:"v-directive"}},[i("el-input",{staticStyle:{width:"400px"},attrs:{placeholder:"please input"},model:{value:e.inputData,callback:function(t){e.inputData=t},expression:"inputData"}}),e._v(" "),i("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.inputData,expression:"inputData",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.clipboardSuccess,expression:"clipboardSuccess",arg:"success"}],attrs:{type:"primary"}},[e._v("copy")]),e._v(" "),i("p",{staticClass:"title"},[e._v("粘贴一下：")]),e._v(" "),i("el-input",{staticStyle:{width:"400px"},attrs:{type:"textarea",rows:10}})],1)],1)],1)},staticRenderFns:[]};var st=i("VU/8")(tt,it,!1,function(e){i("H5fL")},"data-v-ca0160b6",null);t.default=st.exports}});
//# sourceMappingURL=10.53f10d8e198f64958b4d.js.map