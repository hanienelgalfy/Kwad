(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"9f09e37c73d2824e0b6c":function(e,t,o){"use strict";o.r(t);var n,r=o("8af190b70a6bc55c6f1b"),i=o.n(r),a=o("0d7f0986bcd2f33d8a2a"),c=o("1037a6e0d5914309f74c"),s=o.n(c),f=(o("8a2d1b95e05b6a321e74"),o("6938d226fd372a75cbf9")),l=o("435859b6b76fb67a754a"),u=o.n(l),d=o("ab039aecd4a1d4fedc0e"),p=o("4dd2a92e69dcbe1bab10"),m=o("45339e737f61657b53bc"),b=o("d1c56869180901f6ae86");function y(e){return(y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t,o,r){n||(n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=r;else if(a>1){for(var c=new Array(a),s=0;s<a;s++)c[s]=arguments[s+3];t.children=c}if(t&&i)for(var f in i)void 0===t[f]&&(t[f]=i[f]);else t||(t=i||{});return{$$typeof:n,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function g(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var o,n=S(e);if(t){var r=S(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return function(e,t){if(t&&("object"===y(t)||"function"===typeof t))return t;return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,o)}}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=v(b.k,{}),O=v(b.b,{}),_=v(b.y,{}),T=v(b.s,{}),M=v(b.r,{}),k=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(c,i.a.Component);var t,o,n,r=w(c);function c(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),r.apply(this,arguments)}return t=c,(o=[{key:"render",value:function(){var e=this.props,t=e.classes,o=e.intl,n=s.a.name+" - Form",r=s.a.desc,i="containers/Forms/demos/";return v("div",{},void 0,v(a.Helmet,{},void 0,v("title",{},void 0,n),v("meta",{name:"description",content:r}),v("meta",{property:"og:title",content:n}),v("meta",{property:"og:description",content:r}),v("meta",{property:"twitter:title",content:n}),v("meta",{property:"twitter:description",content:r})),v("div",{className:t.root},void 0,v(u.a,{container:!0,spacing:3},void 0,v(u.a,{item:!0,md:12},void 0,v(p.Y,{title:o.formatMessage(m.a.hightlightTitle),icon:"horizontal_split",desc:o.formatMessage(m.a.hightlightDesc)},void 0,v("div",{},void 0,j,v(p.yb,{componentName:i+"HighlightSuggest.js"})))),v(u.a,{item:!0,md:6},void 0,v(p.Y,{title:o.formatMessage(m.a.autoTitle),icon:"spellcheck",desc:o.formatMessage(m.a.autoDesc)},void 0,v("div",{},void 0,O,v(p.yb,{componentName:i+"AutoSuggest.js"})))),v(u.a,{item:!0,md:6},void 0,v(p.Y,{title:o.formatMessage(m.a.tagTitle),icon:"label",desc:o.formatMessage(m.a.tagDesc)},void 0,v("div",{},void 0,_,v(p.yb,{componentName:i+"TagSuggestions.js"})))),v(u.a,{item:!0,md:6},void 0,v(p.Y,{title:o.formatMessage(m.a.selectTitle),icon:"calendar_view_day",desc:o.formatMessage(m.a.selectDesc)},void 0,v("div",{},void 0,T,v(p.yb,{componentName:i+"SelectSuggestions.js"})))),v(u.a,{item:!0,md:6},void 0,v(p.Y,{title:o.formatMessage(m.a.selectTagTitle),icon:"label",desc:o.formatMessage(m.a.selectTagDesc)},void 0,v("div",{},void 0,M,v(p.yb,{componentName:i+"SelectSuggestionTags.js"})))))))}}])&&g(t.prototype,o),n&&g(t,n),c}();t.default=Object(f.withStyles)({root:{flexGrow:1}})(Object(d.injectIntl)(k))}}]);