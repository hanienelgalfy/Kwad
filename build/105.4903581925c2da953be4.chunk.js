(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{"9d9297e412edb1dc03e2":function(t,e,o){"use strict";o.r(e);var n,r=o("8af190b70a6bc55c6f1b"),i=o.n(r),c=o("0d7f0986bcd2f33d8a2a"),a=o("1037a6e0d5914309f74c"),f=o.n(a),u=o("4dd2a92e69dcbe1bab10"),s=o("ab039aecd4a1d4fedc0e"),l=o("f261506e87c8cd72cdf5"),p=o("4ea858b185a90695ee5c");function d(t){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e,o,r){n||(n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=t&&t.defaultProps,c=arguments.length-3;if(e||0===c||(e={children:void 0}),1===c)e.children=r;else if(c>1){for(var a=new Array(c),f=0;f<c;f++)a[f]=arguments[f+3];e.children=a}if(e&&i)for(var u in i)void 0===e[u]&&(e[u]=i[u]);else e||(e=i||{});return{$$typeof:n,type:t,key:void 0===o?null:""+o,ref:null,props:e,_owner:null}}function b(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var o,n=h(t);if(e){var r=h(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return function(t,e){if(e&&("object"===d(e)||"function"===typeof e))return e;return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,o)}}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var w=y(p.e,{}),g=y(p.q,{}),_=y(p.r,{}),j=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(a,i.a.Component);var e,o,n,r=v(a);function a(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),r.apply(this,arguments)}return e=a,(o=[{key:"render",value:function(){var t=f.a.name+" - Widgets",e=f.a.desc,o="containers/Widgets/demos/",n=this.props.intl;return y("div",{},void 0,y(c.Helmet,{},void 0,y("title",{},void 0,t),y("meta",{name:"description",content:e}),y("meta",{property:"og:title",content:t}),y("meta",{property:"og:description",content:e}),y("meta",{property:"twitter:title",content:t}),y("meta",{property:"twitter:description",content:e})),y(u.Y,{title:n.formatMessage(l.a.contactTitle),whiteBg:!0,icon:"contact_phone",desc:n.formatMessage(l.a.contactDesc)},void 0,y("div",{},void 0,w,y(u.yb,{componentName:o+"ContactsMini.js"}))),y(u.Y,{title:n.formatMessage(l.a.todoTitle),whiteBg:!0,icon:"playlist_add_check",desc:n.formatMessage(l.a.contactDesc)},void 0,y("div",{},void 0,g,y(u.yb,{componentName:o+"TodoListMini.js"}))),y(u.Y,{title:n.formatMessage(l.a.todoTitle),icon:"compare_arrows",desc:n.formatMessage(l.a.todoDesc)},void 0,y("div",{},void 0,_,y(u.yb,{componentName:o+"TradeMini.js"}))))}}])&&b(e.prototype,o),n&&b(e,n),a}();e.default=Object(s.injectIntl)(j)}}]);