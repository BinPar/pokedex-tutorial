_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=u,t.useAmp=function(){return u(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery;return n||a&&(void 0!==o&&o)}},"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return g}));var r=n("a3WO");var a=n("BsWD");function o(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u,i=n("q1tI"),c=n.n(i),s=n("8Kt/"),f=n.n(s),l=n("YFqc"),d=n.n(l),p=c.a.createElement,m=function(e){var t=e.pokemonCard;return p(d.a,{href:"/pokemon/[name]",as:"/pokemon/".concat(t.name)},p("a",null,p("div",{className:"card"},p("span",{className:"card--id"},"#".concat(t.id)),p("img",{className:"card--image",src:t.imageURL,alt:t.name}),p("h2",{className:"card--name"},t.name),t.types.map((function(e){return p("span",{key:e,className:"card--details"},e)})))))},h=function(e){u=e},v=function(){return u},y=c.a.createElement,g=!0;t.default=function(e){var t=e.pokemonCards,n=e.pokemonTypes;v()||h(n);var r=Object(i.useState)(v()),a=r[0],u=r[1];h(a);var s=t.filter((function(e){return e.types.some((function(e){return a.includes(e)}))}));return y(c.a.Fragment,null,y(f.a,null,y("title",null,"BinPar Pokedex")),y("main",null,y("h1",null,"BinPar Pokedex"),y("p",{className:"pokemonTypes"},n.map((function(e){return y("button",{onClick:function(t){return function(e,t){t.ctrlKey||t.shiftKey?a.includes(e)?u((function(t){return o(t).filter((function(t){return t!==e}))})):u((function(t){var n=o(t);return n.push(e),n})):u((function(){return[e]}))}(e,t)},className:a.includes(e)?"on":"off",type:"button",key:e},e)})),y("button",{onClick:function(){u(o(n))},type:"button",className:"special"},"All"),y("button",{onClick:function(){u([])},type:"button",className:"special"},"None")),y("div",{id:"app"},s.map((function(e){return y(m,{key:e.id,pokemonCard:e})})))))}},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},u=n("lwAK"),i=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var u=a.key.slice(a.key.indexOf("$")+1);e.has(u)?o=!1:e.add(u)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var i=0,c=d.length;i<c;i++){var s=d[i];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var f=a.props[s],l=r[s]||new Set;l.has(f)?o=!1:(l.add(f),r[s]=l)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,a.useContext)(u.AmpStateContext),r=(0,a.useContext)(i.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}m.rewind=function(){};var h=m;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},BsWD:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("a3WO");function a(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),u=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||u()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),u=n("PJYZ"),i=n("7W2i"),c=n("a1gu"),s=n("Nsbk");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),d=!1,p=function(e){i(n,e);var t=f(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,d&&o._hasHeadManager&&(o.props.headManager.mountedInstances.add(u(o)),o.emitChange()),o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=p},YFqc:function(e,t,n){e.exports=n("cTJO")},a3WO:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o,u=a(n("q1tI")),i=n("g/15"),c=n("nOHt"),s=n("elyg");var f=new Map,l=window.IntersectionObserver,d={};var p=function(e,t){var n=o||(l?o=new l((function(e){e.forEach((function(e){if(f.has(e.target)){var t=f.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),f.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),f.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}f.delete(e)}):function(){}};function m(e,t,n,r){e.prefetch(t,n,r).catch((function(e){0})),d[t+"%"+n]=!0}function h(e,t,n,r,a,o,u){var c=e.currentTarget,s=c.nodeName,f=c.target;"A"===s&&(f&&"_self"!==f||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)||function(e){var t=(0,i.getLocationOrigin)();return new URL(e,t).origin===t}(n)&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())})))}var v=function(e){var t=!1!==e.prefetch,n=u.default.useState(),a=r(n,2),o=a[0],i=a[1],f=(0,c.useRouter)(),v=u.default.useMemo((function(){var t=(0,s.resolveHref)(f.pathname,e.href);return{href:t,as:e.as?(0,s.resolveHref)(f.pathname,e.as):t}}),[f.pathname,e.href,e.as]),y=v.href,g=v.as;u.default.useEffect((function(){if(t&&l&&o&&o.tagName&&!d[y+"%"+g])return p(o,(function(){m(f,y,g)}))}),[t,o,y,g,f]);var b=e.children,w=e.replace,_=e.shallow,M=e.scroll;"string"===typeof b&&(b=u.default.createElement("a",null,b));var k=u.Children.only(b),C={ref:function(e){e&&i(e),k&&"object"===typeof k&&k.ref&&("function"===typeof k.ref?k.ref(e):"object"===typeof k.ref&&(k.ref.current=e))},onClick:function(e){k.props&&"function"===typeof k.props.onClick&&k.props.onClick(e),e.defaultPrevented||h(e,f,y,g,w,_,M)}};return t&&(C.onMouseEnter=function(e){k.props&&"function"===typeof k.props.onMouseEnter&&k.props.onMouseEnter(e),m(f,y,g,{priority:!0})}),!e.passHref&&("a"!==k.type||"href"in k.props)||(C.href=(0,s.addBasePath)(g)),u.default.cloneElement(k,C)};t.default=v},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a}},[["/EDR",0,2,1]]]);