// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.0-esm/index.mjs";function r(t,e){return n(e)||n(t)||e<0||e>1||t<0||t>1?NaN:t<=1-e?0:1}function s(t){return n(t)||t<0||t>1?e(NaN):function(e){if(n(e)||e<0||e>1)return NaN;if(e<=1-t)return 0;return 1}}t(r,"factory",s);export{r as default,s as factory};
//# sourceMappingURL=index.mjs.map
