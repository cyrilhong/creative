(self.webpackChunkaja_creative=self.webpackChunkaja_creative||[]).push([[626],{87757:function(e,t,n){e.exports=n(68937)},14696:function(e,t,n){!function(e,t){"use strict";function n(e,t){return e(t={exports:{}},t.exports),t.exports}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function o(){}function a(){}a.resetWarningCache=o;var i=function(){function e(e,t,n,o,a,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n},c=n((function(e){e.exports=i()}));function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e){return l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){return d(e)||m(e,t)||y(e,t)||v()}function d(e){if(Array.isArray(e))return e}function m(e,t){var n=e&&("undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(s){c=!0,o=s}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}function y(e,t){if(e){if("string"===typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var b=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),n.current},g=function(e){return null!==e&&"object"===l(e)},w=function(e){return g(e)&&"function"===typeof e.then},E=function(e){return g(e)&&"function"===typeof e.elements&&"function"===typeof e.createToken&&"function"===typeof e.createPaymentMethod&&"function"===typeof e.confirmCardPayment},S="[object Object]",O=function e(t,n){if(!g(t)||!g(n))return t===n;var r=Array.isArray(t);if(r!==Array.isArray(n))return!1;var o=Object.prototype.toString.call(t)===S;if(o!==(Object.prototype.toString.call(n)===S))return!1;if(!o&&!r)return t===n;var a=Object.keys(t),i=Object.keys(n);if(a.length!==i.length)return!1;for(var c={},s=0;s<a.length;s+=1)c[a[s]]=!0;for(var u=0;u<i.length;u+=1)c[i[u]]=!0;var l=Object.keys(c);if(l.length!==a.length)return!1;var f=t,p=n,d=function(t){return e(f[t],p[t])};return l.every(d)},j=function(e,t,n){return g(e)?Object.keys(e).reduce((function(r,o){var a=!g(t)||!O(e[o],t[o]);return n.includes(o)?(a&&console.warn("Unsupported prop change: options.".concat(o," is not a mutable property.")),r):a?u(u({},r||{}),{},f({},o,e[o])):r}),null):null},x="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",P=function(e){if(null===e||E(e))return e;throw new Error(x)},k=function(e){if(w(e))return{tag:"async",stripePromise:Promise.resolve(e).then(P)};var t=P(e);return null===t?{tag:"empty"}:{tag:"sync",stripe:t}},_=t.createContext(null);_.displayName="ElementsContext";var C=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},A=function(e){var n=e.stripe,r=e.options,o=e.children,a=t.useMemo((function(){return k(n)}),[n]),i=p(t.useState((function(){return{stripe:"sync"===a.tag?a.stripe:null,elements:"sync"===a.tag?a.stripe.elements(r):null}})),2),c=i[0],s=i[1];t.useEffect((function(){var e=!0,t=function(e){s((function(t){return t.stripe?t:{stripe:e,elements:e.elements(r)}}))};return"async"!==a.tag||c.stripe?"sync"!==a.tag||c.stripe||t(a.stripe):a.stripePromise.then((function(n){n&&e&&t(n)})),function(){e=!1}}),[a,c,r]);var u=b(n);t.useEffect((function(){null!==u&&u!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")}),[u,n]);var l=b(r);return t.useEffect((function(){if(c.elements){var e=j(r,l,["clientSecret","fonts"]);e&&c.elements.update(e)}}),[r,l,c.elements]),t.useEffect((function(){var e=c.stripe;e&&e._registerWrapper&&e.registerAppInfo&&(e._registerWrapper({name:"react-stripe-js",version:"1.11.0"}),e.registerAppInfo({name:"react-stripe-js",version:"1.11.0",url:"https://stripe.com/docs/stripe-js/react"}))}),[c.stripe]),t.createElement(_.Provider,{value:c},o)};A.propTypes={stripe:c.any,options:c.object};var I=function(e){var n=t.useContext(_);return C(n,e)},T=function(){return I("calls useElements()").elements},R=function(){return I("calls useStripe()").stripe},F=function(e){return(0,e.children)(I("mounts <ElementsConsumer>"))};F.propTypes={children:c.func.isRequired};var Z=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),function(){n.current&&n.current.apply(n,arguments)}},D=function(){},M=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},N=function(e,n){var r="".concat(M(e),"Element"),o=n?function(e){I("mounts <".concat(r,">"));var n=e.id,o=e.className;return t.createElement("div",{id:n,className:o})}:function(n){var o=n.id,a=n.className,i=n.options,c=void 0===i?{}:i,s=n.onBlur,u=void 0===s?D:s,l=n.onFocus,f=void 0===l?D:l,p=n.onReady,d=void 0===p?D:p,m=n.onChange,y=void 0===m?D:m,h=n.onEscape,v=void 0===h?D:h,g=n.onClick,w=void 0===g?D:g,E=n.onLoadError,S=void 0===E?D:E,O=n.onLoaderStart,x=void 0===O?D:O,P=n.onNetworksChange,k=void 0===P?D:P,_=I("mounts <".concat(r,">")).elements,C=t.useRef(null),A=t.useRef(null),T=Z(d),R=Z(u),F=Z(f),M=Z(w),N=Z(y),L=Z(v),B=Z(S),U=Z(x),Y=Z(k);t.useLayoutEffect((function(){if(null==C.current&&_&&null!=A.current){var t=_.create(e,c);C.current=t,t.mount(A.current),t.on("ready",(function(){return T(t)})),t.on("change",N),t.on("blur",R),t.on("focus",F),t.on("escape",L),t.on("loaderror",B),t.on("loaderstart",U),t.on("networkschange",Y),t.on("click",M)}}));var q=b(c);return t.useEffect((function(){if(C.current){var e=j(c,q,["paymentRequest"]);e&&C.current.update(e)}}),[c,q]),t.useLayoutEffect((function(){return function(){C.current&&(C.current.destroy(),C.current=null)}}),[]),t.createElement("div",{id:o,className:a,ref:A})};return o.propTypes={id:c.string,className:c.string,onChange:c.func,onBlur:c.func,onFocus:c.func,onReady:c.func,onClick:c.func,onLoadError:c.func,onLoaderStart:c.func,onNetworksChange:c.func,options:c.object},o.displayName=r,o.__elementType=e,o},L="undefined"===typeof window,B=N("auBankAccount",L),U=N("card",L),Y=N("cardNumber",L),q=N("cardExpiry",L),W=N("cardCvc",L),z=N("fpxBank",L),J=N("iban",L),K=N("idealBank",L),Q=N("p24Bank",L),V=N("epsBank",L),G=N("payment",L),H=N("paymentRequestButton",L),X=N("linkAuthentication",L),$=N("address",L),ee=N("shippingAddress",L),te=N("affirmMessage",L),ne=N("afterpayClearpayMessage",L);e.AddressElement=$,e.AffirmMessageElement=te,e.AfterpayClearpayMessageElement=ne,e.AuBankAccountElement=B,e.CardCvcElement=W,e.CardElement=U,e.CardExpiryElement=q,e.CardNumberElement=Y,e.Elements=A,e.ElementsConsumer=F,e.EpsBankElement=V,e.FpxBankElement=z,e.IbanElement=J,e.IdealBankElement=K,e.LinkAuthenticationElement=X,e.P24BankElement=Q,e.PaymentElement=G,e.PaymentRequestButtonElement=H,e.ShippingAddressElement=ee,e.useElements=T,e.useStripe=R,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(47313))},46138:function(e,t){"use strict";function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}var r,o="https://js.stripe.com/v3",a=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,i="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",c=null,s=function(e){return null!==c||(c=new Promise((function(t,n){if("undefined"!==typeof window)if(window.Stripe&&e&&console.warn(i),window.Stripe)t(window.Stripe);else try{var r=function(){for(var e=document.querySelectorAll('script[src^="'.concat(o,'"]')),t=0;t<e.length;t++){var n=e[t];if(a.test(n.src))return n}return null}();r&&e?console.warn(i):r||(r=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(o).concat(t);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n}(e)),r.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),r.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(c){return void n(c)}else t(null)}))),c},u=function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.37.0",startTime:t})}(r,n),r},l=!1,f=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];l=!0;var o=Date.now();return s(r).then((function(e){return u(e,t,o)}))};f.setLoadParameters=function(e){if(l)throw new Error("You cannot change load parameters after calling loadStripe");r=function(e){var t="invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(e),"\n");if(null===e||"object"!==n(e))throw new Error(t);if(1===Object.keys(e).length&&"boolean"===typeof e.advancedFraudSignals)return e;throw new Error(t)}(e)}},60298:function(e,t,n){n(46138)},77626:function(e,t,n){"use strict";n.d(t,{p8:function(){return R},cI:function(){return T}});var r=n(63366);var o=n(29439),a=n(15671),i=n(43144),c=n(1413);function s(e,t,n,r,o,a,i){try{var c=e[a](i),s=c.value}catch(u){return void n(u)}c.done?t(s):Promise.resolve(s).then(r,o)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){s(a,r,o,i,c,"next",e)}function c(e){s(a,r,o,i,c,"throw",e)}i(void 0)}))}}var l=n(4942),f=n(40181);function p(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=(0,f.Z)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw a}}}}var d,m,y=n(87757),h=n(47313),v=(n(60298),n(14696)),b=["prefix","field","errors"],g=Object.create,w=Object.defineProperty,E=Object.getOwnPropertyDescriptor,S=Object.getOwnPropertyNames,O=Object.getPrototypeOf,j=Object.prototype.hasOwnProperty,x=function(e,t,n){return n=null!=e?g(O(e)):{},function(e,t,n,r){if(t&&"object"==typeof t||"function"==typeof t){var o,a=p(S(t));try{var i=function(){var a=o.value;!j.call(e,a)&&a!==n&&w(e,a,{get:function(){return t[a]},enumerable:!(r=E(t,a))||r.enumerable})};for(a.s();!(o=a.n()).done;)i()}catch(c){a.e(c)}finally{a.f()}}return e}(!t&&e&&e.__esModule?n:w(n,"default",{value:e,enumerable:!0}),e)},P=(d=function(e,t){var n,r=Object.defineProperty,o=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,f=Object.prototype.hasOwnProperty,d={};!function(e,t){for(var n in t)r(e,n,{get:t[n],enumerable:!0})}(d,{Client:function(){return j},createClient:function(){return x},getDefaultClient:function(){return P},isFieldError:function(){return _}}),t.exports=(n=d,function(e,t,n,a){if(t&&"object"==typeof t||"function"==typeof t){var i,c=p(s(t));try{var u=function(){var c=i.value;!f.call(e,c)&&c!==n&&r(e,c,{get:function(){return t[c]},enumerable:!(a=o(t,c))||a.enumerable})};for(c.s();!(i=c.n()).done;)u()}catch(l){c.e(l)}finally{c.f()}}return e}(r({},"__esModule",{value:!0}),n));var m,h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",v=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,b=function(e){return function(e){for(var t,n,r,o,a="",i=0,c=(e=String(e)).length%3;i<e.length;){if((n=e.charCodeAt(i++))>255||(r=e.charCodeAt(i++))>255||(o=e.charCodeAt(i++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");a+=h.charAt((t=n<<16|r<<8|o)>>18&63)+h.charAt(t>>12&63)+h.charAt(t>>6&63)+h.charAt(63&t)}return c?a.slice(0,c-3)+"===".substring(c):a}(JSON.stringify(e))},g=function(e){var t="@formspree/core@".concat("2.8.0");return e?"".concat(e," ").concat(t):t},w=function(e,t,n){e instanceof FormData?e.append(t,n):e=Object.assign(e,(0,l.Z)({},t,n))},E=function(){var e=u(y.mark((function e(t){var n,r,o,a,i,s,u,l,f,p,d;return y.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.stripePromise,r=t.response,o=t.responseData,a=t.payload,i=t.data,s=t.fetchImpl,u=t.request,l=t.url,e.next=3,n.handleCardAction(o.stripe.paymentIntentClientSecret);case 3:if(!(f=e.sent).error){e.next=6;break}return e.abrupt("return",{response:r,body:{errors:[{code:"STRIPE_CLIENT_ERROR",message:"Stripe SCA error",field:"paymentMethod"}]}});case 6:return a.paymentMethod.id||w(i,"paymentMethod",a.paymentMethod.id),w(i,"paymentIntent",f.paymentIntent.id),w(i,"resubmitKey",o.resubmitKey),e.next=9,s(l,(0,c.Z)((0,c.Z)({},u),{},{body:JSON.stringify({paymentIntent:f.paymentIntent.id,resubmitKey:o.resubmitKey})}));case 9:return p=e.sent,e.next=12,p.json();case 12:return d=e.sent,e.abrupt("return",{response:p,body:d});case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){return navigator.webdriver||!!document.documentElement.getAttribute(function(e){if(e=String(e).replace(/[\t\n\f\r ]+/g,""),!v.test(e))throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");e+="==".slice(2-(3&e.length));for(var t,n,r,o="",a=0;a<e.length;)t=h.indexOf(e.charAt(a++))<<18|h.indexOf(e.charAt(a++))<<12|(n=h.indexOf(e.charAt(a++)))<<6|(r=h.indexOf(e.charAt(a++))),o+=64===n?String.fromCharCode(t>>16&255):64===r?String.fromCharCode(t>>16&255,t>>8&255):String.fromCharCode(t>>16&255,t>>8&255,255&t);return o}("d2ViZHJpdmVy"))||!!window.callPhantom||!!window._phantom},O=function(){function e(){(0,a.Z)(this,e),this.loadedAt=1*new Date,this.webdriver=S()}return(0,i.Z)(e,[{key:"teardown",value:function(){}},{key:"data",value:function(){return{loadedAt:this.loadedAt,webdriver:this.webdriver}}}]),e}(),j=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,a.Z)(this,e),this.project=t.project,this.stripePromise=t.stripePromise,typeof window<"u"&&this.startBrowserSession()}return(0,i.Z)(e,[{key:"startBrowserSession",value:function(){this.session||(this.session=new O)}},{key:"teardown",value:function(){this.session&&this.session.teardown()}},{key:"submitForm",value:function(){var e=u(y.mark((function e(t,n){var r,o,a,i,s,u,l,f,p,d,m=arguments;return y.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=m.length>2&&void 0!==m[2]?m[2]:{},o=r.endpoint||"https://formspree.io",a=r.fetchImpl||fetch,i=this.project?"".concat(o,"/p/").concat(this.project,"/f/").concat(t):"".concat(o,"/f/").concat(t),s=function(e){return e instanceof FormData?e:JSON.stringify(e)},u={Accept:"application/json","Formspree-Client":g(r.clientName)},this.session&&(u["Formspree-Session-Data"]=b(this.session.data())),n instanceof FormData||(u["Content-Type"]="application/json"),l={method:"POST",mode:"cors",body:s(n),headers:u},!this.stripePromise||!r.createPaymentMethod){e.next=27;break}return e.next=7,r.createPaymentMethod();case 7:if(!(f=e.sent).error){e.next=10;break}return e.abrupt("return",{response:null,body:{errors:[{code:"STRIPE_CLIENT_ERROR",message:"Error creating payment method",field:"paymentMethod"}]}});case 10:return w(n,"paymentMethod",f.paymentMethod.id),e.next=13,a(i,(0,c.Z)((0,c.Z)({},l),{},{body:n}));case 13:return p=e.sent,e.next=16,p.json();case 16:if(!((d=e.sent)&&d.stripe&&d.stripe.requiresAction&&d.resubmitKey)){e.next=23;break}return e.next=20,E({stripePromise:this.stripePromise,responseData:d,response:p,payload:f,data:n,fetchImpl:a,request:l,url:i});case 20:e.t0=e.sent,e.next=24;break;case 23:e.t0={response:p,body:d};case 24:return e.abrupt("return",e.t0);case 27:return e.abrupt("return",a(i,l).then((function(e){return e.json().then((function(t){return{body:t,response:e}}))})));case 28:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),x=function(e){return new j(e)},P=function(){return m||(m=x()),m},k=function(e){return e.REQUIRED_FIELD_MISSING="REQUIRED_FIELD_MISSING",e.REQUIRED_FIELD_EMPTY="REQUIRED_FIELD_EMPTY",e.TYPE_EMAIL="TYPE_EMAIL",e.TYPE_NUMERIC="TYPE_NUMERIC",e.TYPE_TEXT="TYPE_TEXT",e}(k||{});function _(e){return e.code in k&&void 0!==e.field}},function(){return m||d((m={exports:{}}).exports,m),m.exports}),k=x(P()),_=((0,h.lazy)((function(){return Promise.resolve().then(n.t.bind(n,14696,19)).then((function(e){return{default:e.Elements}}))})),h.createContext({client:void 0}));_.displayName="Formspree";function C(){var e=(0,h.useContext)(_);return e.client?e:{client:(0,k.getDefaultClient)()}}var A="2.4.0",I=function(e){return void 0!==e.preventDefault},T=function(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=(0,h.useState)(null),i=(0,o.Z)(a,2),s=i[0],f=i[1],p=(0,h.useState)(!1),d=(0,o.Z)(p,2),m=d[0],b=d[1],g=(0,h.useState)(!1),w=(0,o.Z)(g,2),E=w[0],S=w[1],O=(0,h.useState)([]),j=(0,o.Z)(O,2),x=j[0],P=j[1],k=C(),_=r.client||k;if(!_)throw new Error("You must provide a Formspree client");if(!e)throw new Error('You must provide a form key or hashid (e.g. useForm("myForm") or useForm("123xyz")');k.client&&k.client.stripePromise&&(t=(0,v.useStripe)(),n=(0,v.useElements)());var T=!!r.debug,R=r.data;return[{result:s,submitting:m,succeeded:E,errors:x},function(){var o=u(y.mark((function o(a){var i,s,p,d,m,h;return y.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(i=function(){var e=u(y.mark((function e(t){var n;return y.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),"FORM"==(n=t.target).tagName){e.next=4;break}throw new Error("submit was triggered for a non-form element");case 4:return e.abrupt("return",new FormData(n));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),!I(a)){o.next=7;break}return o.next=4,i(a);case 4:o.t0=o.sent,o.next=8;break;case 7:o.t0=a;case 8:if(s=o.t0,p=function(e,t){s instanceof FormData?s.append(e,t):s=Object.assign(s,(0,l.Z)({},e,t))},"object"!=typeof R){o.next=27;break}o.t1=y.keys(R);case 12:if((o.t2=o.t1()).done){o.next=27;break}if(d=o.t2.value,"function"!=typeof R[d]){o.next=24;break}if(m=R[d].call(null),o.t3=m instanceof Promise,!o.t3){o.next=21;break}return o.next=20,m;case 20:m=o.sent;case 21:void 0!==m&&p(d,m),o.next=25;break;case 24:p(d,R[d]);case 25:o.next=12;break;case 27:return h=function(){var e=u(y.mark((function e(){var r;return y.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,c.Z)((0,c.Z)((0,c.Z)((0,c.Z)((0,c.Z)((0,c.Z)({},s.address_line1&&{line1:s.address_line1}),s.address_line2&&{line2:s.address_line2}),s.address_city&&{city:s.address_city}),s.address_country&&{country:s.address_country}),s.address_state&&{state:s.address_state}),s.address_postal_code&&{postal_code:s.address_postal_code}),e.next=3,t.createPaymentMethod({type:"card",card:n.getElement(v.CardElement),billing_details:(0,c.Z)((0,c.Z)((0,c.Z)((0,c.Z)({},s.name&&{name:s.name}),s.email&&{email:s.email}),s.phone&&{phone:s.phone}),r&&{address:r})});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o.abrupt("return",(b(!0),k.client.submitForm(e,s,{endpoint:r.endpoint,clientName:"@formspree/react@".concat(A),createPaymentMethod:k.client&&k.client.stripePromise?h:void 0}).then((function(e){var t,n=e.response.status;return 200===n?(T&&console.log("Form submitted",e),S(!0),f(e),P([])):n>=400&&n<500?((t=e.body).errors&&P(t.errors),T&&console.log("Validation error",e),S(!1)):(T&&console.log("Unexpected error",e),S(!1)),e})).catch((function(e){throw T&&console.log("Unexpected error",e),S(!1),e})).finally((function(){b(!1)}))));case 29:case"end":return o.stop()}}),o)})));return function(e){return o.apply(this,arguments)}}(),function(){b(!1),S(!1),P([])}]},R=function(e){var t=e.prefix,n=e.field,o=e.errors,a=function(e,t){if(null==e)return{};var n,o,a=(0,r.Z)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,b),i=(o||[]).find((function(e){return e.field===n}));return i?h.createElement("div",(0,c.Z)({},a),t," ",i.message):null};x(P()).isFieldError}}]);