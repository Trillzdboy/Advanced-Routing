/*! For license information please see 2.08b97d23.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[2],{20:function(t,e,n){"use strict";function r(t,e,n,r,o,c,a){try{var i=t[c](a),s=i.value}catch(u){return void n(u)}i.done?e(s):Promise.resolve(s).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,c){var a=t.apply(e,n);function i(t){r(a,o,c,i,s,"next",t)}function s(t){r(a,o,c,i,s,"throw",t)}i(void 0)}))}}n.d(e,"a",(function(){return o}))},21:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n.d(e,"a",(function(){return c}))},22:function(t,e,n){"use strict";function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(){o=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,c="function"==typeof Symbol?Symbol:{},a=c.iterator||"@@iterator",i=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(L){u=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof p?e:p,c=Object.create(o.prototype),a=new E(r||[]);return c._invoke=function(t,e,n){var r="suspendedStart";return function(o,c){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw c;return k()}for(n.method=o,n.arg=c;;){var a=n.delegate;if(a){var i=x(a,n);if(i){if(i===h)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=l(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(t,n,a),c}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(L){return{type:"throw",arg:L}}}t.wrap=f;var h={};function p(){}function d(){}function m(){}var b={};u(b,a,(function(){return this}));var j=Object.getPrototypeOf,y=j&&j(j(N([])));y&&y!==e&&n.call(y,a)&&(b=y);var v=m.prototype=p.prototype=Object.create(b);function O(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function g(t,e){function o(c,a,i,s){var u=l(t[c],t,a);if("throw"!==u.type){var f=u.arg,h=f.value;return h&&"object"==r(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,i,s)}),(function(t){o("throw",t,i,s)})):e.resolve(h).then((function(t){f.value=t,i(f)}),(function(t){return o("throw",t,i,s)}))}s(u.arg)}var c;this._invoke=function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return c=c?c.then(r,r):r()}}function x(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,h;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=m,u(v,"constructor",m),u(m,"constructor",d),d.displayName=u(m,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,s,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},O(g.prototype),u(g.prototype,i,(function(){return this})),t.AsyncIterator=g,t.async=function(e,n,r,o,c){void 0===c&&(c=Promise);var a=new g(f(e,n,r,o),c);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(v),u(v,s,"Generator"),u(v,a,(function(){return this})),u(v,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=N,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],a=c.completion;if("root"===c.tryLoc)return r("end");if(c.tryLoc<=this.prev){var i=n.call(c,"catchLoc"),s=n.call(c,"finallyLoc");if(i&&s){if(this.prev<c.catchLoc)return r(c.catchLoc,!0);if(this.prev<c.finallyLoc)return r(c.finallyLoc)}else if(i){if(this.prev<c.catchLoc)return r(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return r(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var c=o;break}}c&&("break"===t||"continue"===t)&&c.tryLoc<=e&&e<=c.finallyLoc&&(c=null);var a=c?c.completion:{};return a.type=t,a.arg=e,c?(this.method="next",this.next=c.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;_(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}n.d(e,"a",(function(){return o}))},23:function(t,e,n){"use strict";var r=n(21),o=n(22),c=n(20),a=n(4),i=n(0);function s(t,e){return"SEND"===e.type?{data:null,error:null,status:"pending"}:"SUCCESS"===e.type?{data:e.responseData,error:null,status:"completed"}:"ERROR"===e.type?{data:null,error:e.errorMessage,status:"completed"}:t}e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(i.useReducer)(s,{status:e?"pending":null,data:null,error:null}),u=Object(a.a)(n,2),f=u[0],l=u[1],h=Object(i.useCallback)(function(){var e=Object(c.a)(Object(o.a)().mark((function e(n){var r;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l({type:"SEND"}),e.prev=1,e.next=4,t(n);case 4:r=e.sent,l({type:"SUCCESS",responseData:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),l({type:"ERROR",errorMessage:e.t0.message||"Something went wrong!"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(r.a)({sendRequest:h},f)}},24:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"e",(function(){return u})),n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return p})),n.d(e,"c",(function(){return m}));var r=n(22),o=n(21),c=n(20),a="https://routing-test-9a276-default-rtdb.firebaseio.com";function i(){return s.apply(this,arguments)}function s(){return(s=Object(c.a)(Object(r.a)().mark((function t(){var e,n,c,i,s;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a,"/quotes.json"));case 2:return e=t.sent,t.next=5,e.json();case 5:if(n=t.sent,e.ok){t.next=8;break}throw new Error(n.message||"Could not fetch quotes.");case 8:for(i in c=[],n)s=Object(o.a)({id:i},n[i]),c.push(s);return t.abrupt("return",c);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function u(t){return f.apply(this,arguments)}function f(){return(f=Object(c.a)(Object(r.a)().mark((function t(e){var n,c,i;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a,"/quotes/").concat(e,".json"));case 2:return n=t.sent,t.next=5,n.json();case 5:if(c=t.sent,n.ok){t.next=8;break}throw new Error(c.message||"Could not fetch quote.");case 8:return i=Object(o.a)({id:e},c),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=Object(c.a)(Object(r.a)().mark((function t(e){var n,o;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a,"/quotes.json"),{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 2:return n=t.sent,t.next=5,n.json();case 5:if(o=t.sent,n.ok){t.next=8;break}throw new Error(o.message||"Could not create quote.");case 8:return t.abrupt("return",null);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return d.apply(this,arguments)}function d(){return(d=Object(c.a)(Object(r.a)().mark((function t(e){var n,o;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a,"/comments/").concat(e.quoteId,".json"),{method:"POST",body:JSON.stringify(e.commentData),headers:{"Content-Type":"application/json"}});case 2:return n=t.sent,t.next=5,n.json();case 5:if(o=t.sent,n.ok){t.next=8;break}throw new Error(o.message||"Could not add comment.");case 8:return t.abrupt("return",{commentId:o.name});case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return b.apply(this,arguments)}function b(){return(b=Object(c.a)(Object(r.a)().mark((function t(e){var n,c,i,s,u;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(a,"/comments/").concat(e,".json"));case 2:return n=t.sent,t.next=5,n.json();case 5:if(c=t.sent,n.ok){t.next=8;break}throw new Error(c.message||"Could not get comments.");case 8:for(s in i=[],c)u=Object(o.a)({id:s},c[s]),i.push(u);return t.abrupt("return",i);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},27:function(t,e,n){t.exports={comments:"Comments_comments__3mUQl"}},28:function(t,e,n){t.exports={form:"NewCommentForm_form__2eLCi",loading:"NewCommentForm_loading__1U0Z4",control:"NewCommentForm_control__3ggna",actions:"NewCommentForm_actions__19mzh"}},29:function(t,e,n){t.exports={item:"CommentItem_item__2Hl4t"}},30:function(t,e,n){t.exports={comments:"CommentsList_comments__a7lwF"}},31:function(t,e,n){t.exports={quote:"HighlightedQuote_quote__14_bZ"}},36:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(2),c=n(5),a=n(4),i=n(27),s=n.n(i),u=n(23),f=n(24),l=n(9),h=n(28),p=n.n(h),d=n(1),m=function(t){var e=Object(r.useRef)(),n=Object(u.a)(f.a),o=n.sendRequest,c=n.status,a=n.error,i=t.onAddedComment;Object(r.useEffect)((function(){"completed"!==c||a||i()}),[c,a,i]);var s=function(n){n.preventDefault();var r=e.current.value;o({commentData:{text:r},quoteId:t.quoteId})};return Object(d.jsxs)("form",{className:p.a.form,onSubmit:s,children:["pending"===c&&Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(l.a,{})}),Object(d.jsxs)("div",{className:p.a.control,onSubmit:s,children:[Object(d.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(d.jsx)("textarea",{id:"comment",rows:"5",ref:e})]}),Object(d.jsx)("div",{className:p.a.actions,children:Object(d.jsx)("button",{className:"btn",children:"Add Comment"})})]})},b=n(29),j=n.n(b),y=function(t){return Object(d.jsx)("li",{className:j.a.item,children:Object(d.jsx)("p",{children:t.text})})},v=n(30),O=n.n(v),g=function(t){return Object(d.jsx)("ul",{className:O.a.comments,children:t.comments.map((function(t){return Object(d.jsx)(y,{text:t.text},t.id)}))})},x=function(){var t=Object(r.useState)(!1),e=Object(a.a)(t,2),n=e[0],c=e[1],i=Object(o.g)().quoteId,h=Object(u.a)(f.c),p=h.sendRequest,b=h.status,j=h.data;Object(r.useEffect)((function(){p(i)}),[p,i]);var y,v=Object(r.useCallback)((function(){p(i)}),[p,i]);return"pending"===b?y=Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(l.a,{})}):"completed"===b&&j&&j.length>0?y=Object(d.jsx)(g,{comments:j}):"completed"!==b||j&&0!==j.length||(y=Object(d.jsx)("p",{className:"centered",children:"No comments were added yet."})),Object(d.jsxs)("section",{className:s.a.comments,children:[Object(d.jsx)("h2",{children:"User Comments"}),!n&&Object(d.jsx)("button",{className:"btn",onClick:function(){c(!0)},children:"Add a Comment"}),n&&Object(d.jsx)(m,{quoteId:i,onAddedComment:v}),y]})},w=n(31),_=n.n(w),E=function(t){return Object(d.jsxs)("figure",{className:_.a.quote,children:[Object(d.jsx)("p",{children:t.text}),Object(d.jsx)("figcaption",{children:t.author})]})};e.default=function(){var t=Object(o.g)().quoteId,e=Object(u.a)(f.e,!0),n=e.sendRequest,a=e.status,i=e.data,s=e.error;if(Object(r.useEffect)((function(){n(t)}),[n,t]),"pending"===a)return Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(l.a,{})});if(s)return Object(d.jsx)("p",{className:"centered",children:s});if(!i.text)return Object(d.jsx)("p",{children:"No quote found!"});var h=Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(c.b,{className:"btn--flat",to:"comments",children:"Load Comments"})});return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(E,{text:i.text,author:i.author}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/",element:h}),Object(d.jsx)(o.a,{path:"comments",element:Object(d.jsx)(x,{})})]})]})}}}]);
//# sourceMappingURL=2.08b97d23.chunk.js.map