(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{382:function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"b",function(){return u});var a=n(389),r=n.n(a),l=n(390),c=n(400),s=n.n(c).a.create({baseURL:localStorage.getItem("ipAddress"),headers:{"Content-Type":"application/json"},responseType:"json"});function o(e,t,n,a,r,l){return i(e,t,n,a,r,l,"move")}function u(e,t,n,a,r,l){return i(e,t,n,a,r,l,"copy")}function i(e,t,n,a,r,l,c){return m.apply(this,arguments)}function m(){return(m=Object(l.a)(r.a.mark(function e(t,n,a,l,c,o,u){var i,m,d,f;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i="",i="move"===u?o?"/sync/move":"/operations/movefile":o?"/sync/copy":"/operations/copyfile",!o){e.next=10;break}return m=n.split("/"),d={srcFs:t+n,dstFs:a+l+"/"+m[m.length-1]},e.next=7,s.post(i,d);case 7:return e.abrupt("return",e.sent);case 10:return""===l?l=c:l+="/"+c,f={srcFs:t,srcRemote:n,dstFs:a,dstRemote:l},e.next=14,s.post(i,f);case 14:return e.abrupt("return",e.sent);case 15:case"end":return e.stop()}},e)}))).apply(this,arguments)}s.interceptors.request.use(function(e){return e.headers.Authorization="Basic "+btoa(localStorage.getItem("username")+":"+localStorage.getItem("password")),e},function(e){return Promise.reject(e)}),t.a=s},385:function(e,t,n){"use strict";function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(e<1)return"0 B";var n=t<0?0:t,a=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,a)).toFixed(n))+" "+["B","KB","MB","GB","TB","PB","EB","ZB","YB"][a]}function r(e){function t(e){return e>1?"s":""}var n=Math.floor(e/31536e3);if(n)return n+" year"+t(n);var a=Math.floor((e%=31536e3)/86400);if(a)return a+" day"+t(a);var r=Math.floor((e%=86400)/3600);if(r)return r+" hour"+t(r);var l=Math.floor((e%=3600)/60);return l?l+" minute"+t(l):(e%=60)?e.toFixed(2)+" second"+t(e):"less than a second"}function l(e,t){return e.test(t)}function c(e){return l(/^off|([0-9]+([KMGTP]))$/g,e)}function s(e){return l(/^([0-9]+)$/,e)}function o(e){return l(/^(\d+[h])?(\d+[m])?(\d+[s])?(\d+ms)??$/i,e)}function u(e,t){return e.find(function(e,n,a){return t===e.Prefix})}function i(e){return-1===e.indexOf(":")&&":"!==e[e.length-1]&&(e+=":"),e}n.d(t,"e",function(){return a}),n.d(t,"f",function(){return r}),n.d(t,"i",function(){return c}),n.d(t,"h",function(){return s}),n.d(t,"g",function(){return o}),n.d(t,"d",function(){return u}),n.d(t,"a",function(){return i}),n.d(t,"b",function(){return d}),t.c=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0};var m={Images:"image/jpeg",Pdf:"application/pdf"};function d(e,t){var n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:m)[t];return n?e.filter(function(e){return e.IsDir||e.MimeType===n}):e}},391:function(e,t,n){"use strict";var a=n(3),r=n(17),l=n(0),c=n.n(l),s=n(1),o=n.n(s),u=n(63),i=n.n(u),m=n(380),d={tag:m.l,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool},f=function(e){var t=e.className,n=e.cssModule,l=e.noGutters,s=e.tag,o=e.form,u=Object(r.a)(e,["className","cssModule","noGutters","tag","form"]),d=Object(m.h)(i()(t,l?"no-gutters":null,o?"form-row":"row"),n);return c.a.createElement(s,Object(a.a)({},u,{className:d}))};f.propTypes=d,f.defaultProps={tag:"div"},t.a=f},396:function(e,t,n){"use strict";var a=n(3),r=n(17),l=n(0),c=n.n(l),s=n(1),o=n.n(s),u=n(63),i=n.n(u),m=n(380),d={tag:m.l,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},f=function(e){var t=e.className,n=e.cssModule,l=e.color,s=e.body,o=e.inverse,u=e.outline,d=e.tag,f=e.innerRef,p=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(m.h)(i()(t,"card",!!o&&"text-white",!!s&&"card-body",!!l&&(u?"border":"bg")+"-"+l),n);return c.a.createElement(d,Object(a.a)({},p,{className:b,ref:f}))};f.propTypes=d,f.defaultProps={tag:"div"},t.a=f},397:function(e,t,n){"use strict";var a=n(3),r=n(17),l=n(0),c=n.n(l),s=n(1),o=n.n(s),u=n(63),i=n.n(u),m=n(380),d={tag:m.l,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},f=function(e){var t=e.className,n=e.cssModule,l=e.innerRef,s=e.tag,o=Object(r.a)(e,["className","cssModule","innerRef","tag"]),u=Object(m.h)(i()(t,"card-body"),n);return c.a.createElement(s,Object(a.a)({},o,{className:u,ref:l}))};f.propTypes=d,f.defaultProps={tag:"div"},t.a=f},399:function(e,t){var n=NaN,a="[object Symbol]",r=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,o=parseInt,u=Object.prototype.toString;function i(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}e.exports=function(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&u.call(e)==a}(e))return n;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var m=c.test(e);return m||s.test(e)?o(e.slice(2),m?2:8):l.test(e)?n:+e}},406:function(e,t,n){"use strict";var a=n(42),r=n(43),l=n(128),c=n(127),s=n(129),o=n(0),u=n.n(o),i=n(396),m=n(421),d=n(397),f=n(420),p=n(391),b=n(395),g=n(385),v=n(131);function E(e){var t=e.job,n=t.name,a=t.eta,r=t.percentage,l=t.speed,c=t.speedAvg,s=t.size,o=t.bytes;return u.a.createElement(i.a,null,u.a.createElement(m.a,null,"Running Jobs"),u.a.createElement(d.a,null,u.a.createElement("p",null,n)," ",u.a.createElement(f.a,{value:r,className:"mb-2"},r," %")," ",u.a.createElement("p",null,u.a.createElement("strong",null,"Speed: "),Object(g.e)(l),"PS")," ",u.a.createElement("p",null,u.a.createElement("strong",null,"Average Speed: "),Object(g.e)(c),"PS")," ",u.a.createElement("p",null,u.a.createElement("strong",null,"Total transferred: "),Object(g.e)(o))," ",u.a.createElement("p",null,u.a.createElement("strong",null,"Size: "),Object(g.e)(s)),u.a.createElement("p",null,u.a.createElement("strong",null,"ETA: "),Object(g.f)(a)," seconds")))}function h(e){var t=e.job,n=t.name,a=t.percentage,r=t.speed,l=t.size;return u.a.createElement(u.a.Fragment,null,u.a.createElement(p.a,null,l&&r?u.a.createElement(b.a,{lg:12},n,"(",Object(g.e)(l),") - ",Object(g.e)(r),"PS "):u.a.createElement(b.a,{lg:12},"Calculating")),u.a.createElement(p.a,null,u.a.createElement(b.a,{lg:12},u.a.createElement(f.a,{value:a,className:"mb-2"},a," %"))))}function j(e){var t=e.stats,n=t.speed,a=t.bytes,r=t.checks,l=t.elapsedTime,c=t.deletes,s=t.errors,o=t.transfers;return u.a.createElement(i.a,null,u.a.createElement(m.a,null,u.a.createElement("strong",null,"Global Stats")),u.a.createElement(d.a,null,u.a.createElement("p",null,u.a.createElement("strong",null,"Bytes Transferred: "),Object(g.e)(a)),u.a.createElement("p",null,u.a.createElement("strong",null,"Average Speed: "),Object(g.e)(n),"PS"),u.a.createElement("p",null,u.a.createElement("strong",null,"Checks: "),r),u.a.createElement("p",null,u.a.createElement("strong",null,"Deletes: "),c),u.a.createElement("p",null,u.a.createElement("strong",null,"Running since: "),Object(g.f)(l)),u.a.createElement("p",null,u.a.createElement("strong",null,"Errors: "),s),u.a.createElement("p",null,u.a.createElement("strong",null,"Transfers: "),o)))}function y(e){var t=e.transferring;return void 0!==t?t.map(function(e,t){return u.a.createElement(E,{key:t,job:e})}):null}function O(e){var t=e.transferring;return void 0!==t?t.map(function(e,t){return u.a.createElement(h,{key:t,job:e})}):null}var N=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={jobs:{},isConnected:!1},n}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.jobs,n=e.isConnected,a=t.transferring,r=this.props.mode;return"full-status"===r?n?u.a.createElement(p.a,null,u.a.createElement(b.a,{sm:12,lg:4},u.a.createElement(j,{stats:t})),u.a.createElement(b.a,{sm:12,lg:4},u.a.createElement(y,{transferring:a}))):u.a.createElement("div",null,"Not connected to rclone."):"card"===r?n?u.a.createElement(O,{transferring:a}):u.a.createElement("div",null,"Not connected to rclone."):"modal"===r?a&&a.length>0?u.a.createElement(i.a,{className:"progress-modal"},u.a.createElement(m.a,null,"Progress"),u.a.createElement(d.a,null,u.a.createElement(O,{transferring:a}))):null:void 0}}]),t}(u.a.Component);t.a=Object(v.b)(function(e){return{jobs:e.status.jobs,isConnected:e.status.isConnected,error:e.status.error}},{})(N)},416:function(e,t,n){"use strict";var a=n(42),r=n(43),l=n(128),c=n(127),s=n(129),o=n(0),u=n.n(o),i=n(396),m=n(421),d=n(397),f=n(393),p=n(49),b=n.n(p),g=n(406),v=n(131),E=n(382),h=n(7);function j(){return b.a.createPortal(u.a.createElement(g.a,{mode:"modal"}),document.getElementById("modal-root"))}var y=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.refreshInterval=setInterval(function(){return e.props.getStatus()},5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.refreshInterval)}},{key:"render",value:function(){var e=this.props.isConnected,t=localStorage.getItem("ipAddress");return"card"===this.props.mode?u.a.createElement(i.a,{"data-test":"card",className:"text-center "+(e?"card-accent-info":"card-accent-warning")},u.a.createElement(m.a,null,"rclone status"),u.a.createElement(d.a,null,u.a.createElement(O,{connectivityStatus:e,ipAddress:t}))):u.a.createElement(u.a.Fragment,null,u.a.createElement(f.a,{type:"primary","data-test":"card",className:e?"bg-info":"bg-warning"},e?"CONNECTED":"DISCONNECTED"),u.a.createElement(j,null))}}]),t}(u.a.Component);function O(e){var t=e.connectivityStatus,n=e.ipAddress;return t?u.a.createElement("p",null,"The rclone backend is connected and working as expected.",u.a.createElement("br",null),"Current IP address is ",n,"."):u.a.createElement("p",null,"Cannot connect to rclone backend. There is a problem with connecting to ",n,".")}y.defaultProps={mode:"card"};t.a=Object(v.b)(function(e){return{isConnected:e.status.isConnected}},{getStatus:function(){return function(e){E.a.post("/core/stats").then(function(t){return e({type:h.g,status:h.q,payload:t.data})},function(t){return e({type:h.g,status:h.p,payload:t})})}}})(y)},420:function(e,t,n){"use strict";var a=n(3),r=n(17),l=n(0),c=n.n(l),s=n(1),o=n.n(s),u=n(63),i=n.n(u),m=n(399),d=n.n(m),f=n(380),p={children:o.a.node,bar:o.a.bool,multi:o.a.bool,tag:f.l,value:o.a.oneOfType([o.a.string,o.a.number]),max:o.a.oneOfType([o.a.string,o.a.number]),animated:o.a.bool,striped:o.a.bool,color:o.a.string,className:o.a.string,barClassName:o.a.string,cssModule:o.a.object},b=function(e){var t=e.children,n=e.className,l=e.barClassName,s=e.cssModule,o=e.value,u=e.max,m=e.animated,p=e.striped,b=e.color,g=e.bar,v=e.multi,E=e.tag,h=Object(r.a)(e,["children","className","barClassName","cssModule","value","max","animated","striped","color","bar","multi","tag"]),j=d()(o)/d()(u)*100,y=Object(f.h)(i()(n,"progress"),s),O=Object(f.h)(i()("progress-bar",g&&n||l,m?"progress-bar-animated":null,b?"bg-"+b:null,p||m?"progress-bar-striped":null),s),N=v?t:c.a.createElement("div",{className:O,style:{width:j+"%"},role:"progressbar","aria-valuenow":o,"aria-valuemin":"0","aria-valuemax":u,children:t});return g?N:c.a.createElement(E,Object(a.a)({},h,{className:y,children:N}))};b.propTypes=p,b.defaultProps={tag:"div",value:0,max:100},t.a=b},421:function(e,t,n){"use strict";var a=n(3),r=n(17),l=n(0),c=n.n(l),s=n(1),o=n.n(s),u=n(63),i=n.n(u),m=n(380),d={tag:m.l,className:o.a.string,cssModule:o.a.object},f=function(e){var t=e.className,n=e.cssModule,l=e.tag,s=Object(r.a)(e,["className","cssModule","tag"]),o=Object(m.h)(i()(t,"card-header"),n);return c.a.createElement(l,Object(a.a)({},s,{className:o}))};f.propTypes=d,f.defaultProps={tag:"div"},t.a=f},501:function(e,t,n){"use strict";n.r(t),function(e){var a=n(42),r=n(43),l=n(128),c=n(127),s=n(129),o=n(0),u=n.n(o),i=n(391),m=n(395),d=n(416),f=n(406),p=function(t){function n(){return Object(a.a)(this,n),Object(l.a)(this,Object(c.a)(n).apply(this,arguments))}return Object(s.a)(n,t),Object(r.a)(n,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("h2",null,"Welcome to Rclone dashboard. "),u.a.createElement("p",null,"Begin by creating a new remote config from the left sidebar."),u.a.createElement(i.a,null,u.a.createElement(m.a,{lg:4,sm:12},u.a.createElement(d.a,{ipAddress:e.ipAddress,mode:"card"}))),u.a.createElement("h2",null,"Jobs"),u.a.createElement(f.a,{mode:"full-status"}))}}]),n}(u.a.Component);t.default=p}.call(this,n(53))}}]);
//# sourceMappingURL=12.36e81687.chunk.js.map