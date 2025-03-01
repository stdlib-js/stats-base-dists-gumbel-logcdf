"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=c(function(F,o){
var t=require('@stdlib/math-base-assert-is-nan/dist'),N=require('@stdlib/math-base-special-exp/dist');function p(e,r,n){var i;return t(e)||t(r)||t(n)||n<=0?NaN:(i=(e-r)/n,-N(-i))}o.exports=p
});var v=c(function(O,f){
var y=require('@stdlib/utils-constant-function/dist'),u=require('@stdlib/math-base-assert-is-nan/dist'),d=require('@stdlib/math-base-special-exp/dist');function l(e,r){if(u(e)||u(r)||r<=0)return y(NaN);return n;function n(i){var a;return u(i)?NaN:(a=(i-e)/r,-d(-a))}}f.exports=l
});var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=s(),g=v();x(q,"factory",g);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
