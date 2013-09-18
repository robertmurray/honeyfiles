/**
 * @license
 * Lo-Dash 1.3.1 (Custom Build) lodash.com/license | Underscore.js 1.5.1 underscorejs.org/LICENSE
 * Build: `lodash underscore exports="amd,commonjs,global,node" -o ./dist/lodash.underscore.js`
 */
;!function(n){function t(n,t,r){r=(r||0)-1;for(var e=n.length;++r<e;)if(n[r]===t)return r;return-1}function r(n,t){var r=n.m,e=t.m;if(n=n.l,t=t.l,n!==t){if(n>t||typeof n=="undefined")return 1;if(n<t||typeof t=="undefined")return-1}return r<e?-1:1}function e(n){return"\\"+lt[n]}function u(){}function i(n){return n instanceof i?n:new o(n)}function o(n){this.__wrapped__=n}function a(n,t,r,e){function u(){var e=arguments,c=o?this:t;return i||(n=t[a]),r.length&&(e=e.length?(e=Rt.call(e),l?e.concat(r):r.concat(e)):r),this instanceof u?(c=f(n.prototype),e=n.apply(c,e),b(e)?e:c):n.apply(c,e)
}var i=d(n),o=!r,a=t;if(o){var l=e;r=t}else if(!i){if(!e)throw new TypeError;t=n}return u}function f(n){return b(n)?xt(n):{}}function l(n){return Mt[n]}function c(){var n=(n=i.indexOf)===I?t:n;return n}function p(n){return $t[n]}function s(n){return n&&typeof n=="object"?jt.call(n)==nt:!1}function v(n){if(!n)return n;for(var t=1,r=arguments.length;t<r;t++){var e=arguments[t];if(e)for(var u in e)n[u]=e[u]}return n}function g(n){if(!n)return n;for(var t=1,r=arguments.length;t<r;t++){var e=arguments[t];
if(e)for(var u in e)"undefined"==typeof n[u]&&(n[u]=e[u])}return n}function h(n){var t=[];return Wt(n,function(n,r){d(n)&&t.push(r)}),t.sort()}function y(n){for(var t=-1,r=qt(n),e=r.length,u={};++t<e;){var i=r[t];u[n[i]]=i}return u}function m(n){if(!n)return!0;if(Dt(n)||w(n))return!n.length;for(var t in n)if(dt.call(n,t))return!1;return!0}function _(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;var u=typeof n,o=typeof t;if(n===n&&(!n||"function"!=u&&"object"!=u)&&(!t||"function"!=o&&"object"!=o))return!1;
if(null==n||null==t)return n===t;if(o=jt.call(n),u=jt.call(t),o!=u)return!1;switch(o){case rt:case et:return+n==+t;case ut:return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case ot:case at:return n==t+""}if(u=o==tt,!u){if(n instanceof i||t instanceof i)return _(n.__wrapped__||n,t.__wrapped__||t,r,e);if(o!=it)return!1;var o=n.constructor,a=t.constructor;if(o!=a&&(!d(o)||!(o instanceof o&&d(a)&&a instanceof a)))return!1}for(r||(r=[]),e||(e=[]),o=r.length;o--;)if(r[o]==n)return e[o]==t;var f=!0,l=0;if(r.push(n),e.push(t),u){if(l=t.length,f=l==n.length)for(;l--&&(f=_(n[l],t[l],r,e)););return f
}return Wt(t,function(t,u,i){return dt.call(i,u)?(l++,!(f=dt.call(n,u)&&_(n[u],t,r,e))&&Q):void 0}),f&&Wt(n,function(n,t,r){return dt.call(r,t)?!(f=-1<--l)&&Q:void 0}),f}function d(n){return typeof n=="function"}function b(n){return!(!n||!ft[typeof n])}function j(n){return typeof n=="number"||jt.call(n)==ut}function w(n){return typeof n=="string"||jt.call(n)==at}function x(n){for(var t=-1,r=qt(n),e=r.length,u=Array(e);++t<e;)u[t]=n[r[t]];return u}function A(n,t){var r=c(),e=n?n.length:0,u=!1;return e&&typeof e=="number"?u=-1<r(n,t):Ct(n,function(n){return(u=n===t)&&Q
}),u}function O(n,t,r){var e=!0;t=G(t,r),r=-1;var u=n?n.length:0;if(typeof u=="number")for(;++r<u&&(e=!!t(n[r],r,n)););else Ct(n,function(n,r,u){return!(e=!!t(n,r,u))&&Q});return e}function E(n,t,r){var e=[];t=G(t,r),r=-1;var u=n?n.length:0;if(typeof u=="number")for(;++r<u;){var i=n[r];t(i,r,n)&&e.push(i)}else Ct(n,function(n,r,u){t(n,r,u)&&e.push(n)});return e}function T(n,t,r){t=G(t,r),r=-1;var e=n?n.length:0;if(typeof e!="number"){var u;return Ct(n,function(n,r,e){return t(n,r,e)?(u=n,Q):void 0
}),u}for(;++r<e;){var i=n[r];if(t(i,r,n))return i}}function S(n,t,r){var e=-1,u=n?n.length:0;if(t=t&&typeof r=="undefined"?t:G(t,r),typeof u=="number")for(;++e<u&&t(n[e],e,n)!==Q;);else Ct(n,t)}function F(n,t,r){var e=-1,u=n?n.length:0;if(t=G(t,r),typeof u=="number")for(var i=Array(u);++e<u;)i[e]=t(n[e],e,n);else i=[],Ct(n,function(n,r,u){i[++e]=t(n,r,u)});return i}function N(n,t,r){var e=-1/0,u=e,i=-1,o=n?n.length:0;if(t||typeof o!="number")t=G(t,r),S(n,function(n,r,i){r=t(n,r,i),r>e&&(e=r,u=n)});
else for(;++i<o;)r=n[i],r>u&&(u=r);return u}function R(n,t){var r=-1,e=n?n.length:0;if(typeof e=="number")for(var u=Array(e);++r<e;)u[r]=n[r][t];return u||F(n,t)}function B(n,t,r,e){if(!n)return r;var u=3>arguments.length;t=G(t,e,4);var i=-1,o=n.length;if(typeof o=="number")for(u&&(r=n[++i]);++i<o;)r=t(r,n[i],i,n);else Ct(n,function(n,e,i){r=u?(u=!1,n):t(r,n,e,i)});return r}function k(n,t,r,e){var u=n?n.length:0,i=3>arguments.length;if(typeof u!="number")var o=qt(n),u=o.length;return t=G(t,e,4),S(n,function(e,a,f){a=o?o[--u]:--u,r=i?(i=!1,n[a]):t(r,n[a],a,f)
}),r}function D(n,t,r){var e;t=G(t,r),r=-1;var u=n?n.length:0;if(typeof u=="number")for(;++r<u&&!(e=t(n[r],r,n)););else Ct(n,function(n,r,u){return(e=t(n,r,u))&&Q});return!!e}function q(n,t,r){return r&&m(t)?null:(r?T:E)(n,t)}function M(n){for(var t=-1,r=c(),e=n.length,u=mt.apply(vt,Rt.call(arguments,1)),i=[];++t<e;){var o=n[t];0>r(u,o)&&i.push(o)}return i}function $(n,t,r){if(n){var e=0,u=n.length;if(typeof t!="number"&&null!=t){var i=-1;for(t=G(t,r);++i<u&&t(n[i],i,n);)e++}else if(e=t,null==e||r)return n[0];
return Rt.call(n,0,Ft(St(0,e),u))}}function z(n,t){for(var r=-1,e=n?n.length:0,u=[];++r<e;){var i=n[r];i&&typeof i=="object"&&(Dt(i)||s(i))?bt.apply(u,t?i:z(i)):u.push(i)}return u}function I(n,r,e){if(typeof e=="number"){var u=n?n.length:0;e=0>e?St(0,u+e):e||0}else if(e)return e=C(n,r),n[e]===r?e:-1;return n?t(n,r,e):-1}function W(n,t,r){if(typeof t!="number"&&null!=t){var e=0,u=-1,i=n?n.length:0;for(t=G(t,r);++u<i&&t(n[u],u,n);)e++}else e=null==t||r?1:St(0,t);return Rt.call(n,e)}function C(n,t,r,e){var u=0,i=n?n.length:u;
for(r=r?G(r,e,1):J,t=r(t);u<i;)e=u+i>>>1,r(n[e])<t?u=e+1:i=e;return u}function P(n,t,r,e){var u=-1,i=c(),o=n?n.length:0,a=[],f=a;for(typeof t!="boolean"&&null!=t&&(e=r,r=t,t=!1),null!=r&&(f=[],r=G(r,e));++u<o;){e=n[u];var l=r?r(e,u,n):e;(t?!u||f[f.length-1]!==l:0>i(f,l))&&(r&&f.push(l),a.push(e))}return a}function U(){for(var n=-1,t=N(R(arguments,"length")),r=Array(0>t?0:t);++n<t;)r[n]=R(arguments,n);return r}function V(n,t){return kt.fastBind||wt&&2<arguments.length?wt.call.apply(wt,arguments):a(n,t,Rt.call(arguments,2))
}function G(n,t,r){if(null==n)return J;var e=typeof n;if("function"!=e){if("object"!=e)return function(t){return t[n]};var u=qt(n);return function(t){for(var r=u.length,e=!1;r--&&(e=t[u[r]]===n[u[r]]););return e}}return typeof t=="undefined"?n:1===r?function(r){return n.call(t,r)}:2===r?function(r,e){return n.call(t,r,e)}:4===r?function(r,e,u,i){return n.call(t,r,e,u,i)}:function(r,e,u){return n.call(t,r,e,u)}}function H(n,t,r){function e(){clearTimeout(s),clearTimeout(v),l=0,s=v=null}function u(){var t=g&&(!h||1<l);
e(),t&&(false!==p&&(c=new Date),a=n.apply(f,o))}function i(){e(),(g||p!==t)&&(c=new Date,a=n.apply(f,o))}var o,a,f,l=0,c=0,p=!1,s=null,v=null,g=!0;if(t=St(0,t||0),true===r)var h=!0,g=!1;else b(r)&&(h=r.leading,p="maxWait"in r&&St(t,r.maxWait||0),g="trailing"in r?r.trailing:g);return function(){if(o=arguments,f=this,l++,clearTimeout(v),false===p)h&&2>l&&(a=n.apply(f,o));else{var r=new Date;!s&&!h&&(c=r);var e=p-(r-c);0<e?s||(s=setTimeout(i,e)):(clearTimeout(s),s=null,c=r,a=n.apply(f,o))}return t!==p&&(v=setTimeout(u,t)),a
}}function J(n){return n}function K(n){S(h(n),function(t){var r=i[t]=n[t];i.prototype[t]=function(){var n=[this.__wrapped__];return bt.apply(n,arguments),n=r.apply(i,n),this.__chain__&&(n=new o(n),n.__chain__=!0),n}})}var L=0,Q={},X=+new Date+"",Y=/($^)/,Z=/['\n\r\t\u2028\u2029\\]/g,nt="[object Arguments]",tt="[object Array]",rt="[object Boolean]",et="[object Date]",ut="[object Number]",it="[object Object]",ot="[object RegExp]",at="[object String]",ft={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1},lt={"\\":"\\","'":"'","\n":"n","\r":"r","\t":"t","\u2028":"u2028","\u2029":"u2029"},ct=ft[typeof exports]&&exports,pt=ft[typeof module]&&module&&module.exports==ct&&module,st=ft[typeof global]&&global;
!st||st.global!==st&&st.window!==st||(n=st);var vt=[],st=Object.prototype,gt=n._,ht=RegExp("^"+(st.valueOf+"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/valueOf|for [^\]]+/g,".+?")+"$"),yt=Math.ceil,mt=vt.concat,_t=Math.floor,dt=st.hasOwnProperty,bt=vt.push,jt=st.toString,wt=ht.test(wt=jt.bind)&&wt,xt=ht.test(xt=Object.create)&&xt,At=ht.test(At=Array.isArray)&&At,Ot=n.isFinite,Et=n.isNaN,Tt=ht.test(Tt=Object.keys)&&Tt,St=Math.max,Ft=Math.min,Nt=Math.random,Rt=vt.slice,st=ht.test(n.attachEvent),Bt=wt&&!/\n|true/.test(wt+st);
o.prototype=i.prototype;var kt={};!function(){var n={0:1,length:1};kt.fastBind=wt&&!Bt,kt.spliceObjects=(vt.splice.call(n,0,1),!n[0])}(1),i.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,variable:""},xt||(f=function(n){if(b(n)){u.prototype=n;var t=new u;u.prototype=null}return t||{}}),s(arguments)||(s=function(n){return n&&typeof n=="object"?dt.call(n,"callee"):!1});var Dt=At||function(n){return n&&typeof n=="object"?jt.call(n)==tt:!1},At=function(n){var t,r=[];
if(!n||!ft[typeof n])return r;for(t in n)dt.call(n,t)&&r.push(t);return r},qt={}.o=Tt?function(n){return b(n)?Tt(n):[]}:At,Mt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"},$t=y(Mt),zt=RegExp("("+qt($t).join("|")+")","g"),It=RegExp("["+qt(Mt).join("")+"]","g"),Wt=function(n,t){var r;if(!n||!ft[typeof n])return n;for(r in n)if(t(n[r],r,n)===Q)break;return n},Ct=function(n,t){var r;if(!n||!ft[typeof n])return n;for(r in n)if(dt.call(n,r)&&t(n[r],r,n)===Q)break;return n};
d(/x/)&&(d=function(n){return typeof n=="function"&&"[object Function]"==jt.call(n)}),i.after=function(n,t){return function(){return 1>--n?t.apply(this,arguments):void 0}},i.bind=V,i.bindAll=function(n){for(var t=1<arguments.length?mt.apply(vt,Rt.call(arguments,1)):h(n),r=-1,e=t.length;++r<e;){var u=t[r];n[u]=V(n[u],n)}return n},i.compact=function(n){for(var t=-1,r=n?n.length:0,e=[];++t<r;){var u=n[t];u&&e.push(u)}return e},i.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length;r--;)t=[n[r].apply(this,t)];
return t[0]}},i.countBy=function(n,t,r){var e={};return t=G(t,r),S(n,function(n,r,u){r=t(n,r,u)+"",dt.call(e,r)?e[r]++:e[r]=1}),e},i.debounce=H,i.defaults=g,i.defer=function(n){var t=Rt.call(arguments,1);return setTimeout(function(){n.apply(void 0,t)},1)},i.delay=function(n,t){var r=Rt.call(arguments,2);return setTimeout(function(){n.apply(void 0,r)},t)},i.difference=M,i.filter=E,i.flatten=z,i.forEach=S,i.functions=h,i.groupBy=function(n,t,r){var e={};return t=G(t,r),S(n,function(n,r,u){r=t(n,r,u)+"",(dt.call(e,r)?e[r]:e[r]=[]).push(n)
}),e},i.initial=function(n,t,r){if(!n)return[];var e=0,u=n.length;if(typeof t!="number"&&null!=t){var i=u;for(t=G(t,r);i--&&t(n[i],i,n);)e++}else e=null==t||r?1:t||e;return Rt.call(n,0,Ft(St(0,u-e),u))},i.intersection=function(n){var t=arguments,r=t.length,e=-1,u=c(),i=n?n.length:0,o=[];n:for(;++e<i;){var a=n[e];if(0>u(o,a)){for(var f=r;--f;)if(0>u(t[f],a))continue n;o.push(a)}}return o},i.invert=y,i.invoke=function(n,t){var r=Rt.call(arguments,2),e=-1,u=typeof t=="function",i=n?n.length:0,o=Array(typeof i=="number"?i:0);
return S(n,function(n){o[++e]=(u?t:n[t]).apply(n,r)}),o},i.keys=qt,i.map=F,i.max=N,i.memoize=function(n,t){var r={};return function(){var e=X+(t?t.apply(this,arguments):arguments[0]);return dt.call(r,e)?r[e]:r[e]=n.apply(this,arguments)}},i.min=function(n,t,r){var e=1/0,u=e,i=-1,o=n?n.length:0;if(t||typeof o!="number")t=G(t,r),S(n,function(n,r,i){r=t(n,r,i),r<e&&(e=r,u=n)});else for(;++i<o;)r=n[i],r<u&&(u=r);return u},i.omit=function(n){var t=c(),r=mt.apply(vt,Rt.call(arguments,1)),e={};return Wt(n,function(n,u){0>t(r,u)&&(e[u]=n)
}),e},i.once=function(n){var t,r;return function(){return t?r:(t=!0,r=n.apply(this,arguments),n=null,r)}},i.pairs=function(n){for(var t=-1,r=qt(n),e=r.length,u=Array(e);++t<e;){var i=r[t];u[t]=[i,n[i]]}return u},i.partial=function(n){return a(n,Rt.call(arguments,1))},i.pick=function(n){for(var t=-1,r=mt.apply(vt,Rt.call(arguments,1)),e=r.length,u={};++t<e;){var i=r[t];i in n&&(u[i]=n[i])}return u},i.pluck=R,i.range=function(n,t,r){n=+n||0,r=+r||1,null==t&&(t=n,n=0);var e=-1;t=St(0,yt((t-n)/r));for(var u=Array(t);++e<t;)u[e]=n,n+=r;
return u},i.reject=function(n,t,r){return t=G(t,r),E(n,function(n,r,e){return!t(n,r,e)})},i.rest=W,i.shuffle=function(n){var t=-1,r=n?n.length:0,e=Array(typeof r=="number"?r:0);return S(n,function(n){var r=_t(Nt()*(++t+1));e[t]=e[r],e[r]=n}),e},i.sortBy=function(n,t,e){var u=-1,i=n?n.length:0,o=Array(typeof i=="number"?i:0);for(t=G(t,e),S(n,function(n,r,e){o[++u]={l:t(n,r,e),m:u,n:n}}),i=o.length,o.sort(r);i--;)o[i]=o[i].n;return o},i.tap=function(n,t){return t(n),n},i.throttle=function(n,t,r){var e=!0,u=!0;
return false===r?e=!1:b(r)&&(e="leading"in r?r.leading:e,u="trailing"in r?r.trailing:u),r={},r.leading=e,r.maxWait=t,r.trailing=u,H(n,t,r)},i.times=function(n,t,r){for(var e=-1,u=Array(-1<n?n:0);++e<n;)u[e]=t.call(r,e);return u},i.toArray=function(n){return Dt(n)?Rt.call(n):n&&typeof n.length=="number"?F(n):x(n)},i.union=function(n){return n||(arguments[0]=vt),P(z(arguments,!0))},i.uniq=P,i.values=x,i.where=q,i.without=function(n){return M(n,Rt.call(arguments,1))},i.wrap=function(n,t){return function(){var r=[n];
return bt.apply(r,arguments),t.apply(this,r)}},i.zip=U,i.collect=F,i.drop=W,i.each=S,i.extend=v,i.methods=h,i.object=function(n,t){for(var r=-1,e=n?n.length:0,u={};++r<e;){var i=n[r];t?u[i]=t[r]:u[i[0]]=i[1]}return u},i.select=E,i.tail=W,i.unique=P,i.unzip=U,i.chain=function(n){return n=new o(n),n.__chain__=!0,n},i.clone=function(n){return b(n)?Dt(n)?Rt.call(n):v({},n):n},i.contains=A,i.escape=function(n){return null==n?"":(n+"").replace(It,l)},i.every=O,i.find=T,i.has=function(n,t){return n?dt.call(n,t):!1
},i.identity=J,i.indexOf=I,i.isArguments=s,i.isArray=Dt,i.isBoolean=function(n){return true===n||false===n||jt.call(n)==rt},i.isDate=function(n){return n?typeof n=="object"&&jt.call(n)==et:!1},i.isElement=function(n){return n?1===n.nodeType:!1},i.isEmpty=m,i.isEqual=_,i.isFinite=function(n){return Ot(n)&&!Et(parseFloat(n))},i.isFunction=d,i.isNaN=function(n){return j(n)&&n!=+n},i.isNull=function(n){return null===n},i.isNumber=j,i.isObject=b,i.isRegExp=function(n){return n&&ft[typeof n]?jt.call(n)==ot:!1
},i.isString=w,i.isUndefined=function(n){return typeof n=="undefined"},i.lastIndexOf=function(n,t,r){var e=n?n.length:0;for(typeof r=="number"&&(e=(0>r?St(0,e+r):Ft(r,e-1))+1);e--;)if(n[e]===t)return e;return-1},i.mixin=K,i.noConflict=function(){return n._=gt,this},i.random=function(n,t){null==n&&null==t&&(t=1),n=+n||0,null==t?(t=n,n=0):t=+t||0;var r=Nt();return n%1||t%1?n+Ft(r*(t-n+parseFloat("1e-"+((r+"").length-1))),t):n+_t(r*(t-n+1))},i.reduce=B,i.reduceRight=k,i.result=function(n,t){var r=n?n[t]:void 0;
return d(r)?n[t]():r},i.size=function(n){var t=n?n.length:0;return typeof t=="number"?t:qt(n).length},i.some=D,i.sortedIndex=C,i.template=function(n,t,r){var u=i.templateSettings;n||(n=""),r=g({},r,u);var o=0,a="__p+='",u=r.variable;n.replace(RegExp((r.escape||Y).source+"|"+(r.interpolate||Y).source+"|"+(r.evaluate||Y).source+"|$","g"),function(t,r,u,i,f){return a+=n.slice(o,f).replace(Z,e),r&&(a+="'+_['escape']("+r+")+'"),i&&(a+="';"+i+";__p+='"),u&&(a+="'+((__t=("+u+"))==null?'':__t)+'"),o=f+t.length,t
}),a+="';\n",u||(u="obj",a="with("+u+"||{}){"+a+"}"),a="function("+u+"){var __t,__p='',__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}"+a+"return __p}";try{var f=Function("_","return "+a)(i)}catch(l){throw l.source=a,l}return t?f(t):(f.source=a,f)},i.unescape=function(n){return null==n?"":(n+"").replace(zt,p)},i.uniqueId=function(n){var t=++L+"";return n?n+t:t},i.all=O,i.any=D,i.detect=T,i.findWhere=function(n,t){return q(n,t,!0)},i.foldl=B,i.foldr=k,i.include=A,i.inject=B,i.first=$,i.last=function(n,t,r){if(n){var e=0,u=n.length;
if(typeof t!="number"&&null!=t){var i=u;for(t=G(t,r);i--&&t(n[i],i,n);)e++}else if(e=t,null==e||r)return n[u-1];return Rt.call(n,St(0,u-e))}},i.take=$,i.head=$,i.VERSION="1.3.1",K(i),i.prototype.chain=function(){return this.__chain__=!0,this},i.prototype.value=function(){return this.__wrapped__},S("pop push reverse shift sort splice unshift".split(" "),function(n){var t=vt[n];i.prototype[n]=function(){var n=this.__wrapped__;return t.apply(n,arguments),!kt.spliceObjects&&0===n.length&&delete n[0],this
}}),S(["concat","join","slice"],function(n){var t=vt[n];i.prototype[n]=function(){var n=t.apply(this.__wrapped__,arguments);return this.__chain__&&(n=new o(n),n.__chain__=!0),n}}),typeof define=="function"&&typeof define.amd=="object"&&define.amd?(n._=i, define(function(){return i})):ct&&!ct.nodeType?pt?(pt.exports=i)._=i:ct._=i:n._=i}(this);

var __ = _.noConflict();