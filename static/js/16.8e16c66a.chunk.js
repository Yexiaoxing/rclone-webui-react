(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{382:function(e,t,r){"use strict";r.d(t,"c",function(){return l}),r.d(t,"b",function(){return i});var n=r(389),a=r.n(n),o=r(390),s=r(400),c=r.n(s).a.create({baseURL:localStorage.getItem("ipAddress"),headers:{"Content-Type":"application/json"},responseType:"json"});function l(e,t,r,n,a,o){return u(e,t,r,n,a,o,"move")}function i(e,t,r,n,a,o){return u(e,t,r,n,a,o,"copy")}function u(e,t,r,n,a,o,s){return p.apply(this,arguments)}function p(){return(p=Object(o.a)(a.a.mark(function e(t,r,n,o,s,l,i){var u,p,d,f;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(u="",u="move"===i?l?"/sync/move":"/operations/movefile":l?"/sync/copy":"/operations/copyfile",!l){e.next=10;break}return p=r.split("/"),d={srcFs:t+r,dstFs:n+o+"/"+p[p.length-1]},e.next=7,c.post(u,d);case 7:return e.abrupt("return",e.sent);case 10:return""===o?o=s:o+="/"+s,f={srcFs:t,srcRemote:r,dstFs:n,dstRemote:o},e.next=14,c.post(u,f);case 14:return e.abrupt("return",e.sent);case 15:case"end":return e.stop()}},e)}))).apply(this,arguments)}c.interceptors.request.use(function(e){return e.headers.Authorization="Basic "+btoa(localStorage.getItem("username")+":"+localStorage.getItem("password")),e},function(e){return Promise.reject(e)}),t.a=c},386:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var s,c=e[Symbol.iterator]();!(n=(s=c.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(l){a=!0,o=l}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}r.d(t,"a",function(){return n})},391:function(e,t,r){"use strict";var n=r(3),a=r(17),o=r(0),s=r.n(o),c=r(1),l=r.n(c),i=r(63),u=r.n(i),p=r(380),d={tag:p.l,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool},f=function(e){var t=e.className,r=e.cssModule,o=e.noGutters,c=e.tag,l=e.form,i=Object(a.a)(e,["className","cssModule","noGutters","tag","form"]),d=Object(p.h)(u()(t,o?"no-gutters":null,l?"form-row":"row"),r);return s.a.createElement(c,Object(n.a)({},i,{className:d}))};f.propTypes=d,f.defaultProps={tag:"div"},t.a=f},413:function(e,t,r){"use strict";r.d(t,"b",function(){return o}),r.d(t,"a",function(){return s});var n=r(382),a=r(7),o=function(){return function(e){n.a.post("/config/providers").then(function(t){return e({type:a.k,payload:t.data.providers})})}},s=function(){return function(e){n.a.post("/config/dump").then(function(t){return e({type:a.h,status:a.q,payload:t.data})},function(t){return e({type:a.h,status:a.p,payload:t})})}}},483:function(e,t,r){"use strict";var n=r(3),a=r(17),o=r(0),s=r.n(o),c=r(1),l=r.n(c),i=r(63),u=r.n(i),p=r(380),d={className:l.a.string,cssModule:l.a.object,size:l.a.string,bordered:l.a.bool,borderless:l.a.bool,striped:l.a.bool,dark:l.a.bool,hover:l.a.bool,responsive:l.a.oneOfType([l.a.bool,l.a.string]),tag:p.l,responsiveTag:p.l,innerRef:l.a.oneOfType([l.a.func,l.a.string,l.a.object])},f=function(e){var t=e.className,r=e.cssModule,o=e.size,c=e.bordered,l=e.borderless,i=e.striped,d=e.dark,f=e.hover,m=e.responsive,b=e.tag,h=e.responsiveTag,v=e.innerRef,g=Object(a.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),y=Object(p.h)(u()(t,"table",!!o&&"table-"+o,!!c&&"table-bordered",!!l&&"table-borderless",!!i&&"table-striped",!!d&&"table-dark",!!f&&"table-hover"),r),E=s.a.createElement(b,Object(n.a)({},g,{ref:v,className:y}));if(m){var j=Object(p.h)(!0===m?"table-responsive":"table-responsive-"+m,r);return s.a.createElement(h,{className:j},E)}return E};f.propTypes=d,f.defaultProps={tag:"table",responsiveTag:"div"},t.a=f},508:function(e,t,r){"use strict";r.r(t);var n=r(42),a=r(43),o=r(128),s=r(127),c=r(129),l=r(386),i=r(0),u=r.n(i),p=r(391),d=r(395),f=r(393),m=r(483),b=r(132),h=r(382),v=function(e){function t(e,r){var a;Object(n.a)(this,t);var c=(a=Object(o.a)(this,Object(s.a)(t).call(this,e,r))).props,l=c.remote,i=c.remoteName;return l.name=i,a.state={remote:l},a.onDeleteClicked=a.onDeleteClicked.bind(Object(b.a)(a)),a.onUpdateClicked=a.onUpdateClicked.bind(Object(b.a)(a)),a}return Object(c.a)(t,e),Object(a.a)(t,[{key:"onUpdateClicked",value:function(){console.log("Update Clicked")}},{key:"onDeleteClicked",value:function(){var e=this.state.remote.name,t=this.props.refreshHandle;window.confirm("Are you sure you wish to delete ".concat(e,"? You cannot restore it once it is deleted."))&&h.a.post("/config/delete",{name:e}).then(function(e){console.log(e),t()},function(e){console.log("Error occurred: ".concat(e))})}},{key:"render",value:function(){var e=this.state.remote,t=e.name,r=e.type,n=this.props.sequenceNumber;return u.a.createElement("tr",null,u.a.createElement("th",{scope:"row"},n),u.a.createElement("td",null,t),u.a.createElement("td",null,r),u.a.createElement("td",null,u.a.createElement(f.a,{className:"bg-info",onClick:this.onUpdateClicked},"Update")),u.a.createElement("td",null,u.a.createElement(f.a,{className:"bg-danger",onClick:this.onDeleteClicked},"Delete")))}}]),t}(u.a.Component),g=r(131),y=r(413);function E(e){for(var t=e.remotes,r=e.refreshHandle,n=[],a=1,o=0,s=Object.entries(t);o<s.length;o++){var c=s[o],i=Object(l.a)(c,2),p=i[0],d=i[1];n.push(u.a.createElement(v,{sequenceNumber:a,key:p,remoteName:p,remote:d,refreshHandle:r})),a++}return n}var j=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){this.props.getConfigDump()}},{key:"render",value:function(){var e=this;return u.a.createElement("div",null,u.a.createElement(p.a,null,u.a.createElement(d.a,{lg:8}),u.a.createElement(d.a,{lg:4,className:"mb-3"},u.a.createElement(f.a,{color:"primary",className:"float-right",onClick:function(){return e.props.history.push("/newdrive")}},"New Config"))),u.a.createElement(m.a,{responsive:!0},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"No."),u.a.createElement("th",null,"Name"),u.a.createElement("th",null,"Type"),u.a.createElement("th",null,"Update"),u.a.createElement("th",null,"Delete"))),u.a.createElement("tbody",null,u.a.createElement(E,{remotes:this.props.remotes,refreshHandle:this.props.getConfigDump}))))}}]),t}(u.a.PureComponent);t.default=Object(g.b)(function(e){return{remotes:e.config.configDump,hasError:e.config.hasError,error:e.config.error}},{getConfigDump:y.a})(j)}}]);
//# sourceMappingURL=16.8e16c66a.chunk.js.map