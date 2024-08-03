"use strict";var n=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var a=n(function(d,u){
var i=require('@stdlib/math-base-assert-is-nan/dist');function q(r,e){return i(e)||i(r)||e<0||e>1||r<0||r>1?NaN:r<=1-e?0:1}u.exports=q
});var f=n(function(m,c){
var v=require('@stdlib/utils-constant-function/dist'),s=require('@stdlib/math-base-assert-is-nan/dist');function N(r){if(s(r)||r<0||r>1)return v(NaN);return e;function e(t){return s(t)||t<0||t>1?NaN:t<=1-r?0:1}}c.exports=N
});var y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=a(),l=f();y(o,"factory",l);module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
