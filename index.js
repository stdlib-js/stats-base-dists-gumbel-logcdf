// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(t){"use strict";var r,n="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,o=Object.prototype,i=o.toString,a=o.__defineGetter__,u=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;r=function(){try{return n({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,n){var e,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===i.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(t,r)||c.call(t,r)?(e=t.__proto__,t.__proto__=o,delete t[r],t[r]=n.value,t.__proto__=e):t[r]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(t,r,n.get),p&&u&&u.call(t,r,n.set),t};var l=r;function y(t){return t!=t}var p=Math.floor,v=Math.ceil;function b(t){return t<0?v(t):p(t)}var d=Number.NEGATIVE_INFINITY,_=Number.POSITIVE_INFINITY;function A(t){return t===_||t===d}var s,w="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),m=Object.prototype.toString,h=Object.prototype.hasOwnProperty,U="function"==typeof Symbol?Symbol.toStringTag:"";s=w&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e,o,i;if(null==t)return m.call(t);n=t[U],i=U,r=null!=(o=t)&&h.call(o,i);try{t[U]=void 0}catch(r){return m.call(t)}return e=m.call(t),r?t[U]=n:delete t[U],e}:function(t){return m.call(t)};var g,j=s,N="function"==typeof Uint32Array,I="function"==typeof Uint32Array?Uint32Array:null,O="function"==typeof Uint32Array?Uint32Array:void 0;g=function(){var t,r,n;if("function"!=typeof I)return!1;try{r=new I(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(N&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?O:function(){throw new Error("not implemented")};var S,E=g,F="function"==typeof Float64Array,T="function"==typeof Float64Array?Float64Array:null,H="function"==typeof Float64Array?Float64Array:void 0;S=function(){var t,r,n;if("function"!=typeof T)return!1;try{r=new T([1,3.14,-3.14,NaN]),n=r,t=(F&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?H:function(){throw new Error("not implemented")};var G,P=S,x="function"==typeof Uint8Array,L="function"==typeof Uint8Array?Uint8Array:null,M="function"==typeof Uint8Array?Uint8Array:void 0;G=function(){var t,r,n;if("function"!=typeof L)return!1;try{r=new L(r=[1,3.14,-3.14,256,257]),n=r,t=(x&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?M:function(){throw new Error("not implemented")};var V,W=G,k="function"==typeof Uint16Array,Y="function"==typeof Uint16Array?Uint16Array:null,C="function"==typeof Uint16Array?Uint16Array:void 0;V=function(){var t,r,n;if("function"!=typeof Y)return!1;try{r=new Y(r=[1,3.14,-3.14,65536,65537]),n=r,t=(k&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?C:function(){throw new Error("not implemented")};var q,z={uint16:V,uint8:W};(q=new z.uint16(1))[0]=4660;var B,D,J=52===new z.uint8(q.buffer)[0];!0===J?(B=1,D=0):(B=0,D=1);var K={HIGH:B,LOW:D},Q=new P(1),R=new E(Q.buffer),X=K.HIGH,Z=K.LOW;function $(t,r){return Q[0]=r,t[0]=R[X],t[1]=R[Z],t}function tt(t,r){return 1===arguments.length?$([0,0],t):$(t,r)}var rt,nt,et=!0===J?1:0,ot=new P(1),it=new E(ot.buffer);function at(t){return ot[0]=t,it[et]}!0===J?(rt=1,nt=0):(rt=0,nt=1);var ut={HIGH:rt,LOW:nt},ft=new P(1),ct=new E(ft.buffer),lt=ut.HIGH,yt=ut.LOW;function pt(t,r){return ct[lt]=t,ct[yt]=r,ft[0]}var vt=[0,0];function bt(t,r){return y(r)||A(r)?(t[0]=r,t[1]=0,t):0!==r&&function(t){return Math.abs(t)}(r)<22250738585072014e-324?(t[0]=4503599627370496*r,t[1]=-52,t):(t[0]=r,t[1]=0,t)}var dt=[0,0],_t=[0,0];function At(t,r){var n,e,o,i,a;return 0===r||0===t||y(t)||A(t)?t:(function(t,r){1===arguments.length?bt([0,0],t):bt(t,r)}(dt,t),r+=dt[1],r+=function(t){var r=at(t);return(r=(2146435072&r)>>>20)-1023|0}(t=dt[0]),r<-1074?(o=t,tt(vt,0),i=vt[0],i&=2147483647,a=at(o),pt(i|=a&=2147483648,vt[1])):r>1023?t<0?d:_:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,tt(_t,t),n=_t[0],n&=2148532223,e*pt(n|=r+1023<<20,_t[1])))}var st=1.4426950408889634,wt=1/(1<<28);function mt(t){var r;return y(t)||t===_?t:t===d?0:t>709.782712893384?_:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<wt?1+t:function(t,r,n){var e,o,i,a;return At(1-(r-(e=t-r)*(i=e-(o=e*e)*(0===(a=o)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-i)-t),n)}(t-.6931471803691238*(r=b(t<0?st*t-.5:st*t+.5)),1.9082149292705877e-10*r,r)}function ht(t,r,n){return y(t)||y(r)||y(n)||n<=0?NaN:-mt(-(t-r)/n)}function Ut(t,r){return y(t)||y(r)||r<=0?(n=NaN,function(){return n}):function(n){return y(n)?NaN:-mt(-(n-t)/r)};var n}l(ht,"factory",{configurable:!1,enumerable:!1,writable:!1,value:Ut}),t.default=ht,t.factory=Ut,Object.defineProperty(t,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((t="undefined"!=typeof globalThis?globalThis:t||self).logcdf={});
//# sourceMappingURL=index.js.map
