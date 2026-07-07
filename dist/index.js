"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var a=n(function(d,u){
var i=require('@stdlib/math-base-assert-is-nan/dist');function q(e,r){return i(r)||i(e)||r<0||r>1||e<0||e>1?NaN:e<=1-r?0:1}u.exports=q
});var f=n(function(m,c){
var v=require('@stdlib/utils-constant-function/dist'),s=require('@stdlib/math-base-assert-is-nan/dist');function N(e){if(s(e)||e<0||e>1)return v(NaN);return r;function r(t){return s(t)||t<0||t>1?NaN:t<=1-e?0:1}}c.exports=N
});var y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=a(),l=f();y(o,"factory",l);module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
