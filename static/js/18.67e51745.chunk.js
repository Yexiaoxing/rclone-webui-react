(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{427:function(e,t,n){"use strict";function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(s){r=!0,o=s}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",function(){return a})},428:function(e,t,n){"use strict";var a=n(4),r=n(11),o=n(139),i=n(18),l=n(0),s=n.n(l),c=n(1),u=n.n(c),d=n(28),p=n.n(d),b=n(37),f={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:b.m,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},m=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(o.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},n.render=function(){var e=this.props,t=e.active,n=e["aria-label"],o=e.block,i=e.className,l=e.close,c=e.cssModule,u=e.color,d=e.outline,f=e.size,m=e.tag,h=e.innerRef,v=Object(r.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);l&&"undefined"===typeof v.children&&(v.children=s.a.createElement("span",{"aria-hidden":!0},"\xd7"));var g="btn"+(d?"-outline":"")+"-"+u,y=Object(b.i)(p()(i,{close:l},l||"btn",l||g,!!f&&"btn-"+f,!!o&&"btn-block",{active:t,disabled:this.props.disabled}),c);v.href&&"button"===m&&(m="a");var k=l?"Close":null;return s.a.createElement(m,Object(a.a)({type:"button"===m&&v.onClick?"button":void 0},v,{className:y,ref:h,onClick:this.onClick,"aria-label":n||k}))},t}(s.a.Component);m.propTypes=f,m.defaultProps={color:"secondary",tag:"button"},t.a=m},482:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return l});var a=n(104),r=n(2),o=n(67),i=function(){return function(e){a.a.post(o.a.getProviders).then(function(t){return e({type:r.t,payload:t.data.providers})})}},l=function(){return function(e){a.a.post(o.a.getConfigDump).then(function(t){return e({type:r.q,status:r.C,payload:t.data})},function(t){return e({type:r.q,status:r.A,payload:t})})}}},655:function(e,t,n){"use strict";var a=n(4),r=n(11),o=n(0),i=n.n(o),l=n(1),s=n.n(l),c=n(28),u=n.n(c),d=n(37),p={className:s.a.string,cssModule:s.a.object,size:s.a.string,bordered:s.a.bool,borderless:s.a.bool,striped:s.a.bool,dark:s.a.bool,hover:s.a.bool,responsive:s.a.oneOfType([s.a.bool,s.a.string]),tag:d.m,responsiveTag:d.m,innerRef:s.a.oneOfType([s.a.func,s.a.string,s.a.object])},b=function(e){var t=e.className,n=e.cssModule,o=e.size,l=e.bordered,s=e.borderless,c=e.striped,p=e.dark,b=e.hover,f=e.responsive,m=e.tag,h=e.responsiveTag,v=e.innerRef,g=Object(r.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),y=Object(d.i)(u()(t,"table",!!o&&"table-"+o,!!l&&"table-bordered",!!s&&"table-borderless",!!c&&"table-striped",!!p&&"table-dark",!!b&&"table-hover"),n),k=i.a.createElement(m,Object(a.a)({},g,{ref:v,className:y}));if(f){var C=Object(d.i)(!0===f?"table-responsive":"table-responsive-"+f,n);return i.a.createElement(h,{className:C},k)}return k};b.propTypes=p,b.defaultProps={tag:"table",responsiveTag:"div"},t.a=b},739:function(e,t,n){"use strict";n.r(t);var a=n(38),r=n(39),o=n(90),i=n(89),l=n(91),s=n(427),c=n(0),u=n.n(c),d=n(138),p=n(88),b=n(428),f=n(655),m=n(142),h=n(104),v=n(143),g=n(52),y=n(67),k=function(e){function t(e,n){var r;Object(a.a)(this,t),(r=Object(o.a)(this,Object(i.a)(t).call(this,e,n))).onUpdateClicked=function(){var e=r.state.remote.name;r.props.history.push("/newdrive/edit/"+e)};var l=r.props,s=l.remote,c=l.remoteName;return s.name=c,r.state={remote:s},r.onDeleteClicked=r.onDeleteClicked.bind(Object(m.a)(r)),r.onUpdateClicked=r.onUpdateClicked.bind(Object(m.a)(r)),r}return Object(l.a)(t,e),Object(r.a)(t,[{key:"onDeleteClicked",value:function(){var e=this.state.remote.name,t=this.props.refreshHandle;window.confirm("Are you sure you wish to delete ".concat(e,"? You cannot restore it once it is deleted."))&&h.a.post(y.a.deleteConfig,{name:e}).then(function(e){t(),v.b.info("Config deleted")},function(e){v.b.error("Error deleting config")})}},{key:"render",value:function(){var e=this.state.remote,t=e.name,n=e.type,a=this.props.sequenceNumber;return u.a.createElement("tr",{"data-test":"configRowComponent"},u.a.createElement("th",{scope:"row"},a),u.a.createElement("td",null,t),u.a.createElement("td",null,n),u.a.createElement("td",null,u.a.createElement(b.a,{className:"bg-info",onClick:this.onUpdateClicked},"Update")),u.a.createElement("td",null,u.a.createElement(b.a,{className:"bg-danger",onClick:this.onDeleteClicked},"Delete")))}}]),t}(u.a.Component),C=Object(g.g)(k),E=n(140),j=n(482);function O(e){for(var t=e.remotes,n=e.refreshHandle,a=[],r=1,o=0,i=Object.entries(t);o<i.length;o++){var l=i[o],c=Object(s.a)(l,2),d=c[0],p=c[1];a.push(u.a.createElement(C,{sequenceNumber:r,key:d,remoteName:d,remote:p,refreshHandle:n})),r++}return a}var N=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.getConfigDump()}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{"data-test":"showConfigComponent"},u.a.createElement(d.a,null,u.a.createElement(p.a,{lg:8}),u.a.createElement(p.a,{lg:4,className:"mb-3"},u.a.createElement(b.a,{color:"primary",className:"float-right",onClick:function(){return e.props.history.push("/newdrive")}},"New Config"))),u.a.createElement(f.a,{responsive:!0},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"No."),u.a.createElement("th",null,"Name"),u.a.createElement("th",null,"Type"),u.a.createElement("th",null,"Update"),u.a.createElement("th",null,"Delete"))),u.a.createElement("tbody",null,u.a.createElement(O,{remotes:this.props.remotes,refreshHandle:this.props.getConfigDump}))))}}]),t}(u.a.PureComponent);t.default=Object(E.b)(function(e){return{remotes:e.config.configDump,hasError:e.config.hasError,error:e.config.error}},{getConfigDump:j.a})(N)}}]);
//# sourceMappingURL=18.67e51745.chunk.js.map