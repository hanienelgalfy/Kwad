(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"64601d0a7a703d0d0fd9":function(t,e,n){"use strict";n.r(e);var r,o=n("8af190b70a6bc55c6f1b"),i=n.n(o),c=n("0d7f0986bcd2f33d8a2a"),a=(n("8a2d1b95e05b6a321e74"),n("6938d226fd372a75cbf9")),f=n("1037a6e0d5914309f74c"),u=n.n(f),l=n("4dd2a92e69dcbe1bab10"),p=n("ab039aecd4a1d4fedc0e"),s=n("59884ad74beea5402e61");function d(t){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e,n,o){r||(r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=t&&t.defaultProps,c=arguments.length-3;if(e||0===c||(e={children:void 0}),1===c)e.children=o;else if(c>1){for(var a=new Array(c),f=0;f<c;f++)a[f]=arguments[f+3];e.children=a}if(e&&i)for(var u in i)void 0===e[u]&&(e[u]=i[u]);else e||(e=i||{});return{$$typeof:r,type:t,key:void 0===n?null:""+n,ref:null,props:e,_owner:null}}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,r=h(t);if(e){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(t,e){if(e&&("object"===d(e)||"function"===typeof e))return e;return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,n)}}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var w=y(l.y,{}),g=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(a,i.a.Component);var e,n,r,o=v(a);function a(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),o.apply(this,arguments)}return e=a,(n=[{key:"render",value:function(){var t=this.props,e=t.classes,n=t.intl,r=u.a.name+" - Dynamic Invoice",o=u.a.desc;return y("div",{},void 0,y(c.Helmet,{},void 0,y("title",{},void 0,r),y("meta",{name:"description",content:o}),y("meta",{property:"og:title",content:r}),y("meta",{property:"og:description",content:o}),y("meta",{property:"twitter:title",content:r}),y("meta",{property:"twitter:description",content:o})),y(l.Y,{title:n.formatMessage(s.a.invoice_title),icon:"note",desc:n.formatMessage(s.a.invoice_desc)},void 0,y("section",{className:e.wrapper},void 0,w)))}}])&&b(e.prototype,n),r&&b(e,r),a}();e.default=Object(a.withStyles)(function(t){return{button:{margin:t.spacing(1),marginBottom:t.spacing(3)},extendedIcon:{marginRight:t.spacing(1)},btnArea:{textAlign:"center"},wrapper:{width:"100%",overflow:"auto"}}})(Object(p.injectIntl)(g))}}]);