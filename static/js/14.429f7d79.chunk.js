(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{427:function(e,t,a){"use strict";var n=a(4),r=a(11),i=a(138),o=a(18),s=a(0),c=a.n(s),l=a(1),u=a.n(l),d=a(28),p=a.n(d),f=a(37),m={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:f.m,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(i.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],i=e.block,o=e.className,s=e.close,l=e.cssModule,u=e.color,d=e.outline,m=e.size,h=e.tag,v=e.innerRef,g=Object(r.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);s&&"undefined"===typeof g.children&&(g.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var b="btn"+(d?"-outline":"")+"-"+u,E=Object(f.i)(p()(o,{close:s},s||"btn",s||b,!!m&&"btn-"+m,!!i&&"btn-block",{active:t,disabled:this.props.disabled}),l);g.href&&"button"===h&&(h="a");var O=s?"Close":null;return c.a.createElement(h,Object(n.a)({type:"button"===h&&g.onClick?"button":void 0},g,{className:E,ref:v,onClick:this.onClick,"aria-label":a||O}))},t}(c.a.Component);h.propTypes=m,h.defaultProps={color:"secondary",tag:"button"},t.a=h},440:function(e,t,a){"use strict";var n=a(4),r=a(11),i=a(0),o=a.n(i),s=a(1),c=a.n(s),l=a(28),u=a.n(l),d=a(37),p={tag:d.m,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},f=function(e){var t=e.className,a=e.cssModule,i=e.color,s=e.body,c=e.inverse,l=e.outline,p=e.tag,f=e.innerRef,m=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),h=Object(d.i)(u()(t,"card",!!c&&"text-white",!!s&&"card-body",!!i&&(l?"border":"bg")+"-"+i),a);return o.a.createElement(p,Object(n.a)({},m,{className:h,ref:f}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},441:function(e,t,a){"use strict";var n=a(4),r=a(11),i=a(0),o=a.n(i),s=a(1),c=a.n(s),l=a(28),u=a.n(l),d=a(37),p={tag:d.m,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},f=function(e){var t=e.className,a=e.cssModule,i=e.innerRef,s=e.tag,c=Object(r.a)(e,["className","cssModule","innerRef","tag"]),l=Object(d.i)(u()(t,"card-body"),a);return o.a.createElement(s,Object(n.a)({},c,{className:l,ref:i}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},481:function(e,t,a){"use strict";a.d(t,"b",function(){return i}),a.d(t,"a",function(){return o});var n=a(103),r=a(2),i=function(){return function(e){n.a.post("/config/providers").then(function(t){return e({type:r.t,payload:t.data.providers})})}},o=function(){return function(e){n.a.post("/config/dump").then(function(t){return e({type:r.q,status:r.C,payload:t.data})},function(t){return e({type:r.q,status:r.A,payload:t})})}}},509:function(e,t,a){"use strict";var n=a(4),r=a(11),i=a(0),o=a.n(i),s=a(1),c=a.n(s),l=a(28),u=a.n(l),d=a(37),p={tag:d.m,className:c.a.string,cssModule:c.a.object},f=function(e){var t=e.className,a=e.cssModule,i=e.tag,s=Object(r.a)(e,["className","cssModule","tag"]),c=Object(d.i)(u()(t,"card-header"),a);return o.a.createElement(i,Object(n.a)({},s,{className:c}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},652:function(e,t,a){"use strict";var n=a(4),r=a(11),i=a(0),o=a.n(i),s=a(1),c=a.n(s),l=a(28),u=a.n(l),d=a(37),p={children:c.a.node,tag:d.m,className:c.a.string,cssModule:c.a.object,valid:c.a.bool,tooltip:c.a.bool},f={tag:"div",valid:void 0},m=function(e){var t=e.className,a=e.cssModule,i=e.valid,s=e.tooltip,c=e.tag,l=Object(r.a)(e,["className","cssModule","valid","tooltip","tag"]),p=s?"tooltip":"feedback",f=Object(d.i)(u()(t,i?"valid-"+p:"invalid-"+p),a);return o.a.createElement(c,Object(n.a)({},l,{className:f}))};m.propTypes=p,m.defaultProps=f,t.a=m},732:function(e,t,a){"use strict";a.r(t);var n,r=a(426),i=a(105),o=a.n(i),s=a(143),c=a(5),l=a(21),u=a(38),d=a(39),p=a(89),f=a(88),m=a(141),h=a(90),v=a(0),g=a.n(v),b=a(511),E=a(512),O=a(87),y=a(432),j=a(652),k=a(442),N=a(440),S=a(509),C=a(427),x=a(4),V=a(11),M=a(138),T=a(18),I=a(421),w=a(1),A=a.n(w),D=a(28),R=a.n(D),P=a(444),q=a(37),F=Object(I.a)({},P.Transition.propTypes,{isOpen:A.a.bool,children:A.a.oneOfType([A.a.arrayOf(A.a.node),A.a.node]),tag:q.m,className:A.a.node,navbar:A.a.bool,cssModule:A.a.object,innerRef:A.a.oneOfType([A.a.func,A.a.string,A.a.object])}),H=Object(I.a)({},P.Transition.defaultProps,{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:q.c.Collapse}),z=((n={})[q.b.ENTERING]="collapsing",n[q.b.ENTERED]="collapse show",n[q.b.EXITING]="collapsing",n[q.b.EXITED]="collapse",n);function B(e){return e.scrollHeight}var G=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach(function(e){a[e]=a[e].bind(Object(M.a)(a))}),a}Object(T.a)(t,e);var a=t.prototype;return a.onEntering=function(e,t){this.setState({height:B(e)}),this.props.onEntering(e,t)},a.onEntered=function(e,t){this.setState({height:null}),this.props.onEntered(e,t)},a.onExit=function(e){this.setState({height:B(e)}),this.props.onExit(e)},a.onExiting=function(e){e.offsetHeight;this.setState({height:0}),this.props.onExiting(e)},a.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},a.render=function(){var e=this,t=this.props,a=t.tag,n=t.isOpen,r=t.className,i=t.navbar,o=t.cssModule,s=t.children,c=(t.innerRef,Object(V.a)(t,["tag","isOpen","className","navbar","cssModule","children","innerRef"])),l=this.state.height,u=Object(q.k)(c,q.a),d=Object(q.j)(c,q.a);return g.a.createElement(P.Transition,Object(x.a)({},u,{in:n,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),function(t){var n=function(e){return z[e]||"collapse"}(t),c=Object(q.i)(R()(r,n,i&&"navbar-collapse"),o),u=null===l?null:{height:l};return g.a.createElement(a,Object(x.a)({},d,{style:Object(I.a)({},d.style,u),className:c,ref:e.props.innerRef}),s)})},t}(v.Component);G.propTypes=F,G.defaultProps=H;var J=G,L=a(441),U=a(537),X=a(737),W=a(723),Y=a(724),_=a(725),K=a(140),Q=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).toggle=a.toggle.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"toggle",value:function(){this.props.closeModal()}},{key:"render",value:function(){var e=this.props.isVisible;return g.a.createElement("div",null,g.a.createElement(K.a,null,g.a.createElement(X.a,{isOpen:e,toggle:this.toggle},g.a.createElement(W.a,{toggle:this.toggle,"data-test":"modalHeader"},"Configuring your drive."),g.a.createElement(Y.a,{"data-test":"modalBody"},"A page will open for you with the authentication for your drive. This modal will automatically dismiss upon successful creation"),g.a.createElement(_.a,{"data-test":"modalFooter"},g.a.createElement(C.a,{color:"primary",onClick:this.toggle},"Done")," "))))}}]),t}(g.a.Component);Q.defaultProps={isVisible:!0};var Z=Q,$=a(103),ee=a(104),te=a(510),ae=a.n(te),ne=function(e,t){var a=t.trim().toLowerCase(),n=a.length;return 0===n?e:0===n?[]:e.filter(function(e){return e.Description.toLowerCase().slice(0,n)===a})},re=function(e){return e.Prefix},ie=function(e){return g.a.createElement("div",null,e.Description)},oe=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).onSuggestionsFetchRequested=function(e){var t=e.value;a.setState({suggestions:ne(a.props.suggestions,t)})},a.onSuggestionsClearRequested=function(){a.setState({suggestions:[]})},a.state={suggestions:[]},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.onChange,n=e.suggestions,r=Object(ee.f)(n,t),i={placeholder:"Type a provider type",value:void 0===r?t:r.Description,onChange:a};return g.a.createElement(ae.a,{suggestions:this.state.suggestions,onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,getSuggestionValue:re,renderSuggestion:ie,alwaysRenderSuggestions:!0,highlightFirstSuggestion:!0,inputProps:i})}}]),t}(g.a.Component),se=a(142),ce=a(481),le=a(139),ue=a(40);function de(e){var t=e.drivePrefix,a=e.loadAdvanced,n=e.changeHandler,r=e.currentValues,i=e.isValidMap,o=e.errorsMap,s=e.config;if(void 0!==t&&""!==t){var c=Object(ee.f)(s,t),l=[];if(void 0!==c)l=c.Options.map(function(e,t){if(0===e.Hide&&(a&&e.Advanced||!a&&!e.Advanced)){var s="".concat(e.Help),c=e.Required?g.a.createElement("i",{className:"text-red"},"*"):null,l=!Object(ee.h)(e.Examples),u=null,d="";return e.IsPassword?d="password":l?d="string":"bool"===e.Type?(d="select",u=[g.a.createElement("option",{key:1,value:!0},"Yes"),g.a.createElement("option",{key:2,value:!1},"No")]):d="int"===e.Type?"number":(e.Type,"text"),g.a.createElement(b.a,{key:t,row:!0},g.a.createElement(E.a,{for:e.Name,sm:5},s,c),g.a.createElement(O.a,{sm:7},g.a.createElement(y.a,{type:d,value:r[e.Name],name:e.Name,valid:i[e.Name],invalid:!i[e.Name],id:e.Name,onChange:n,required:e.Required},u),g.a.createElement(j.a,null,o[e.Name])))}return null});return l}return g.a.createElement("div",null,"Select a drive type to continue")}function pe(e){var t=e.key,a=e.id,n=e.label,r=e.changeHandler,i=e.type,o=e.value,s=e.name,c=e.placeholder,l=e.isValid,u=void 0!==l&&l;return g.a.createElement(b.a,{key:t,row:!0},g.a.createElement(E.a,{for:a,sm:5},n),g.a.createElement(O.a,{sm:7},g.a.createElement(y.a,{type:i,value:o,name:s,placeholder:c,id:a,onChange:r,valid:u,invalid:!u,required:!0}),g.a.createElement(j.a,{valid:!0},"Sweet! that name is available"),g.a.createElement(j.a,null,"Sad! That name is already assigned or empty")))}var fe=function(e){function t(e,a){var n;return Object(u.a)(this,t),(n=Object(p.a)(this,Object(f.a)(t).call(this,e,a))).toggle=function(e){var t=e.target.name;n.setState(Object(l.a)({},t,!n.state[t]))},n.handleInputChange=function(e){var t=e.target.name,a=e.target.value,r=n.state.optionTypes[t];n.setState({formValues:Object(c.a)({},n.state.formValues,Object(l.a)({},t,a))});var i=!0,o="";"SizeSuffix"===r?(i=Object(ee.m)(a))||(o="The valid input is size( off | {unit}{metric} eg: 10G, 100M, 10G100M etc.)"):"Duration"===r?(i=Object(ee.k)(a))||(o="The valid input is time ({unit}{metric} eg: 10ms, 100m, 10h15ms etc.)"):"int"===r&&((i=Object(ee.l)(a))||(o="The valid input is int (100,200,300 etc)")),!n.state.required[t]||a&&""!==a||(i=!1)||(o+=" This field is required"),n.setState(function(e){return{isValid:Object(c.a)({},e.isValid,Object(l.a)({},t,i)),formErrors:Object(c.a)({},e.formErrors,Object(l.a)({},t,o))}})},n.changeDriveType=function(e,t){var a=t.newValue,r=n.props.providers,i=a,o={},s={},c={},l={},u={};if(void 0!==i&&""!==i){var d=Object(ee.f)(r,i);void 0!==d&&d.Options.forEach(function(e){var t=e.DefaultStr,a=e.Type,n=e.Name,r=e.Required;0===e.Hide&&(o[n]=t,s[n]=a,u[n]=r,c[n]=!(r&&(!t||""===t)),l[n]="")}),n.setState({drivePrefix:i,formValues:o,optionTypes:s,isValid:c,formErrors:l,required:u})}else n.setState({drivePrefix:i})},n.openSetupDrive=function(e){e&&e.preventDefault(),n.setState({colSetup:!0}),n.setupDriveDiv.scrollIntoView({behavior:"smooth"})},n.editAdvancedOptions=function(e){n.setState({advancedOptions:!n.state.advancedOptions})},n.clearForm=function(e){n.setState({driveName:"",drivePrefix:""})},n.changeName=function(e){var t=n.state.driveNameIsEditable;if(console.log("changeName"),t){var a=e.target.value;n.setState({driveName:a},function(){void 0===a||""===a?n.setState({driveNameIsValid:!1}):$.a.post("/config/get",{name:a}).then(function(e){var t=n.state.formErrors,a=Object(ee.h)(e.data);t.driveName=a?"":"Duplicate",n.setState({formErrors:t,driveNameIsValid:a})})})}else n.setState(function(e){return{formErrors:Object(c.a)({},e.formErrors,{driveName:"Cannot edit name"})}})},n.openAdvancedSettings=function(e){n.state.advancedOptions?n.setState({colAdvanced:!0}):n.configEndDiv.scrollIntoView({behavior:"smooth"})},n.state={colRconfig:!0,colSetup:!1,colAdvanced:!1,driveName:"",driveNameIsEditable:!0,advancedOptions:!1,formValues:{},formValuesValid:{},required:{},authModalIsVisible:!1,drivePrefix:"",driveNameIsValid:!1,formErrors:{driveName:""},optionTypes:{},isValid:{}},n.configCheckInterval=null,n.handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n.toggleAuthModal=n.toggleAuthModal.bind(Object(m.a)(n)),n.startAuthentication=n.startAuthentication.bind(Object(m.a)(n)),n.checkConfigStatus=n.checkConfigStatus.bind(Object(m.a)(n)),n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"checkConfigStatus",value:function(){var e=Object(s.a)(o.a.mark(function e(){var t,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.driveName,e.prev=1,e.next=4,$.a.post("/config/get",{name:t});case 4:a=e.sent,Object(ee.h)(a.data)||(clearInterval(this.configCheckInterval),this.configCheckInterval=null,this.toggleAuthModal(),this.props.history.push("/dashboard")),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),se.b.error("Error creating config. ".concat(e.t0),{autoClose:!1});case 11:case"end":return e.stop()}},e,this,[[1,8]])}));return function(){return e.apply(this,arguments)}}()},{key:"validateForm",value:function(){var e=this.state,t=e.driveNameIsValid,a=e.drivePrefix,n=e.isValid,i=!0;t||(i=!1),""===a&&(i=!1);for(var o=0,s=Object.entries(n);o<s.length;o++){var c=s[o],l=Object(r.a)(c,2),u=l[0],d=l[1];if(!u||!d){i=!1;break}}return i}},{key:"toggleAuthModal",value:function(){this.setState(function(e,t){return{authModalIsVisible:!e.authModalIsVisible}})}},{key:"startAuthentication",value:function(){this.toggleAuthModal(),null===this.configCheckInterval?this.configCheckInterval=setInterval(this.checkConfigStatus,ue.d):console.error("Interval already running. Should not start a new one")}},{key:"stopAuthentication",value:function(){this.setState(function(e,t){return{authModalIsVisible:!1}}),clearInterval(this.configCheckInterval)}},{key:"handleSubmit",value:function(){var e=Object(s.a)(o.a.mark(function e(t){var a,n,i,s,c,l,u,d,p,f,m,h;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=this.state,n=a.formValues,i=a.drivePrefix,s=this.props.providers,!this.validateForm()){e.next=39;break}if(void 0===i||""===i){e.next=37;break}if(void 0===(c=Object(ee.f)(s,i))){e.next=37;break}l=c.Options,u={},d=function(){var e=f[p],t=(m=Object(r.a)(e,2))[0],a=m[1];if("token"===t)return u[t]=a,"continue";var n=l.find(function(e,a,n){return t===e.Name});n&&(a!==n.DefaultStr&&(u[t]=a))},p=0,f=Object.entries(n);case 11:if(!(p<f.length)){e.next=18;break}if("continue"!==d()){e.next=15;break}return e.abrupt("continue",15);case 15:p++,e.next=11;break;case 18:if(h={parameters:u,name:this.state.driveName,type:this.state.drivePrefix},this.startAuthentication(),e.prev=20,this.props.match.params.drivePrefix){e.next=28;break}return e.next=25,$.a.post("/config/create",h);case 25:se.b.info("Config created"),e.next=31;break;case 28:return e.next=30,$.a.post("config/update",h);case 30:se.b.info("Config Updated");case 31:e.next=37;break;case 33:e.prev=33,e.t0=e.catch(20),se.b.error("Error creating config. ".concat(e.t0),{autoClose:!1}),this.stopAuthentication();case 37:e.next=42;break;case 39:this.state.colSetup||this.openSetupDrive(),this.state.advancedOptions&&!this.state.colAdvanced&&this.openAdvancedSettings(),se.b.warn("Check for errors before submitting.",{autoClose:!1});case 42:case"end":return e.stop()}},e,this,[[20,33]])}));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.drivePrefix;(!this.props.providers||this.props.providers.length<1)&&this.props.getProviders(),t&&(this.setState({driveName:t,driveNameIsValid:!0,driveNameIsEditable:!1}),$.a.post("config/get",{name:t}).then(function(t){console.log(t),e.changeDriveType(void 0,{newValue:t.data.type}),e.setState(function(e){return{formValues:Object(c.a)({},e.formValues,t.data)}})}))}},{key:"componentWillUnmount",value:function(){clearInterval(this.configCheckInterval),this.configCheckInterval=null}},{key:"render",value:function(){var e=this,t=this.state,a=t.colRconfig,n=t.colSetup,r=t.colAdvanced,i=t.drivePrefix,o=t.advancedOptions,s=t.driveName,c=t.driveNameIsValid,l=this.props.providers;return g.a.createElement("div",{"data-test":"newDriveComponent"},g.a.createElement(K.a,null,g.a.createElement("p",null,"This 3 step process will guide you through creating a new config. For auto config, leave the parameters as is."),g.a.createElement(k.a,{onSubmit:this.handleSubmit},g.a.createElement(N.a,null,g.a.createElement(S.a,null,g.a.createElement("h5",null,g.a.createElement(C.a,{color:"link",name:"colRconfig",onClick:this.toggle,style:{marginBottom:"1rem"}},g.a.createElement("strong",null,"Step 1:")," Remote Config"))),g.a.createElement(J,{isOpen:a},g.a.createElement(L.a,null,g.a.createElement(pe,{label:"Name of this drive (For your reference)",changeHandler:this.changeName,value:s,placeholder:"Enter a name",name:"name",id:"driveName",isValid:c}),g.a.createElement(b.a,{row:!0},g.a.createElement(E.a,{for:"driveType",sm:5},"Select"),g.a.createElement(O.a,{sm:7},g.a.createElement(oe,{suggestions:l,value:i,onChange:this.changeDriveType}))),g.a.createElement(b.a,{row:!0},g.a.createElement(O.a,{sm:3},g.a.createElement(E.a,{for:"inputDriveName"},"Docs are available at ")," ",g.a.createElement("a",{href:"https://rclone.org/commands/rclone_config/"},"Rclone Config")))),g.a.createElement(U.a,null,g.a.createElement("div",{className:"clearfix"},g.a.createElement(C.a,{color:"success",className:"float-right",onClick:this.openSetupDrive},g.a.createElement("i",{className:"fa fa-check fa-lg "})))))),g.a.createElement(N.a,null,g.a.createElement("div",{ref:function(t){return e.setupDriveDiv=t}}),g.a.createElement(S.a,null,g.a.createElement("h5",null,g.a.createElement(C.a,{color:"link",name:"colSetup",onClick:this.toggle,style:{marginBottom:"1rem"}},g.a.createElement("strong",null,"Step 2:")," Setup Drive"))),g.a.createElement(J,{isOpen:n},g.a.createElement(L.a,null,g.a.createElement(de,{drivePrefix:i,loadAdvanced:!1,changeHandler:this.handleInputChange,errorsMap:this.state.formErrors,isValidMap:this.state.isValid,currentValues:this.state.formValues,config:l})),g.a.createElement(U.a,null,g.a.createElement("div",{className:"clearfix"},g.a.createElement("div",{className:"float-right"},g.a.createElement(y.a,{type:"checkbox",value:o,onChange:this.editAdvancedOptions}),g.a.createElement("span",{className:"mr-3"},"Edit Advanced Options"),g.a.createElement(C.a,{color:"success",onClick:this.openAdvancedSettings},g.a.createElement("i",{className:"fa fa-check fa-lg "}))))))),g.a.createElement(N.a,null,g.a.createElement(S.a,null,g.a.createElement("h5",null,g.a.createElement(C.a,{color:"link",name:"colAdvanced",onClick:this.toggle,style:{marginBottom:"1rem"}},g.a.createElement("strong",null,"Step 3:")," Advanced (optional)"))),g.a.createElement(J,{isOpen:r},g.a.createElement(L.a,null,g.a.createElement(de,{drivePrefix:i,loadAdvanced:!0,changeHandler:this.handleInputChange,errorsMap:this.state.formErrors,isValidMap:this.state.isValid,currentValues:this.state.formValues,config:l})))),g.a.createElement("div",{className:"clearfix",ref:function(t){e.configEndDiv=t}},g.a.createElement("div",{className:"float-right mb-3"},g.a.createElement(C.a,{color:"info",type:"reset",onClick:function(){return e.clearForm()}},"Clear"),g.a.createElement(C.a,{color:"success",type:"submit"},"Create Config")))),g.a.createElement(Z,{isVisible:this.state.authModalIsVisible,closeModal:this.toggleAuthModal})))}}]),t}(g.a.Component);fe.defaultProps={isEdit:!1};t.default=Object(le.b)(function(e){return{providers:e.config.providers}},{getProviders:ce.b})(fe)}}]);
//# sourceMappingURL=14.429f7d79.chunk.js.map