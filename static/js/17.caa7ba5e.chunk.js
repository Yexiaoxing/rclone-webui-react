(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{382:function(e,t,a){"use strict";a.d(t,"c",function(){return i}),a.d(t,"b",function(){return s});var n=a(388),r=a.n(n),o=a(389),c=a(404),l=a.n(c).a.create({baseURL:localStorage.getItem("ipAddress"),headers:{"Content-Type":"application/json"},responseType:"json"});function i(e,t,a,n,r,o){return u(e,t,a,n,r,o,"move")}function s(e,t,a,n,r,o){return u(e,t,a,n,r,o,"copy")}function u(e,t,a,n,r,o,c){return m.apply(this,arguments)}function m(){return(m=Object(o.a)(r.a.mark(function e(t,a,n,o,c,i,s){var u,m,d,p;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(u="",u="move"===s?i?"/sync/move":"/operations/movefile":i?"/sync/copy":"/operations/copyfile",!i){e.next=10;break}return m=a.split("/"),d={srcFs:t+a,dstFs:n+o+"/"+m[m.length-1],_async:!0},e.next=7,l.post(u,d);case 7:return e.abrupt("return",e.sent);case 10:return""===o?o=c:o+="/"+c,p={srcFs:t,srcRemote:a,dstFs:n,dstRemote:o},e.next=14,l.post(u,p);case 14:return e.abrupt("return",e.sent);case 15:case"end":return e.stop()}},e)}))).apply(this,arguments)}l.interceptors.request.use(function(e){return e.headers.Authorization="Basic "+btoa(localStorage.getItem("username")+":"+localStorage.getItem("password")),e},function(e){return Promise.reject(e)}),t.a=l},383:function(e,t,a){"use strict";function n(e){return 0===e?0:e/1024/1024/1024}function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(e<1)return"0 B";var a=t<0?0:t,n=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,n)).toFixed(a))+" "+["B","KB","MB","GB","TB","PB","EB","ZB","YB"][n]}function o(e){function t(e){return e>1?"s":""}var a=Math.floor(e/31536e3);if(a)return a+" year"+t(a);var n=Math.floor((e%=31536e3)/86400);if(n)return n+" day"+t(n);var r=Math.floor((e%=86400)/3600);if(r)return r+" hour"+t(r);var o=Math.floor((e%=3600)/60);return o?o+" minute"+t(o):(e%=60)?e.toFixed(2)+" second"+t(e):"Just now"}function c(e,t){return e.test(t)}function l(e){return c(/^(off|(([0-9]+[.][0-9]+|[0-9]+)([KMGTP])))$/i,e)}function i(e){return c(/^([0-9]+)$/,e)}function s(e){return c(/^(\d+[h])?(\d+[m])?(\d+[s])?(\d+ms)??$/i,e)}function u(e,t){return e.find(function(e,a,n){return t===e.Prefix})}function m(e){return-1===e.indexOf(":")&&":"!==e[e.length-1]&&(e+=":"),e}a.d(t,"b",function(){return n}),a.d(t,"g",function(){return r}),a.d(t,"i",function(){return o}),a.d(t,"l",function(){return l}),a.d(t,"k",function(){return i}),a.d(t,"j",function(){return s}),a.d(t,"f",function(){return u}),a.d(t,"a",function(){return m}),a.d(t,"c",function(){return p}),a.d(t,"d",function(){return f}),a.d(t,"h",function(){return h}),t.e=function(e){if(Array.isArray(e))return 0===e.length;for(var t in e)if(e.hasOwnProperty(t))return!1;return!0};var d={Images:"image/jpeg",Pdf:"application/pdf"};function p(e,t){var a=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:d)[t];return a?e.filter(function(e){return e.IsDir||e.MimeType===a}):e}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return(t=t.toLowerCase())?e.filter(function(e){return e.Name.toLowerCase().startsWith(t)}):e}function h(e){return e&&""!==e&&"/"===e[0]}},627:function(e,t,a){"use strict";a.r(t);var n=a(42),r=a(43),o=a(128),c=a(127),l=a(132),i=a(129),s=a(0),u=a.n(s),m=a(397),d=a(393),p=a(398),f=a(436),h=a(399),g=a(394),b=a(447),E=a.n(b),v=function(e,t){var a=t.trim().toLowerCase(),n=a.length;return 0===n?e:0===n?[]:e.filter(function(e){return e.toLowerCase().slice(0,n)===a})},y=function(e){return e},N=function(e){return u.a.createElement("div",null,e)},O=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).onSuggestionsFetchRequested=function(e){var t=e.value;a.setState({suggestions:v(a.props.suggestions,t)})},a.onSuggestionsClearRequested=function(){a.setState({suggestions:[]})},a.state={suggestions:[]},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t={placeholder:"Type the name of remote you want to open",value:e.value,onChange:e.onChange};return u.a.createElement(E.a,{suggestions:this.state.suggestions,onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,getSuggestionValue:y,renderSuggestion:N,highlightFirstSuggestion:!0,inputProps:t})}}]),t}(u.a.Component),k=a(131),j=a(25),w=a(382),F=a(7),D=a(383),P=function(e,t){return function(a){if(""!==e){var n={fs:0!==e.indexOf("/")?Object(D.a)(e):e,remote:t},r="".concat(e,"-").concat(t);w.a.post("operations/list",n).then(function(e){return a({type:F.k,status:F.s,payload:{path:r,filesList:e.data.list}})},function(e){return a({type:F.k,status:F.r,payload:{path:r,error:e}})})}}},I=function(e,t,a){return function(n){n({type:F.b,remoteName:t,id:e,remotePath:a}),n(x(e))}},C=function(e,t){return function(a){a({type:F.c,remoteName:t,id:e,remotePath:""}),a(x(e))}},x=function(e){return function(t,a){var n=a().explorer.currentPaths[e],r=n.remoteName,o=n.remotePath;r&&""!==r&&t(P(r,o))}},S=function(e){return function(t){t({type:F.g,id:e})}},M=function(e){return function(t){t({type:F.o,id:e}),t(x(e))}},R=function(e){return function(t){t({type:F.p,id:e}),t(x(e))}},B=function(e){return function(t){t({type:F.o,id:e}),t(x(e))}},H=a(418),T=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).shouldUpdateRemoteName=function(e,t){var n=t.newValue;0===n.indexOf("/")?a.setState({remoteName:n,openButtonText:"Open local path"}):a.setState({remoteName:n,openButtonText:"Open"})},a.openRemote=function(){var e=a.props,t=e.changeRemoteName,n=e.containerID,r=a.state.remoteName;t(n,r),a.props.getFsInfo(r)},a.state={isEmpty:!1,remoteName:e.remoteName,openEnabled:!1,openButtonText:"Open"},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.getRemoteNames()}},{key:"render",value:function(){var e=this,t=this.state,a=t.isEmpty,n=t.remoteName,r=this.props.remotes;return this.props.hasError?u.a.createElement("div",null,"Error loading remotes. Please try again."):a?u.a.createElement("div",null,"Add some remotes to see them here ",u.a.createElement("span",{role:"img","aria-label":"sheep"},"\ud83d\udc11"),"."):u.a.createElement(H.a,{onSubmit:function(){return e.openRemote()}},u.a.createElement(d.a,null,u.a.createElement(m.a,{xs:12,sm:10,lg:8},u.a.createElement(O,{value:n,onChange:this.shouldUpdateRemoteName,suggestions:r})),u.a.createElement(m.a,{xs:12,sm:2,lg:2},u.a.createElement(g.a,{className:"btn-lg",color:"success",type:"submit"},this.state.openButtonText))))}}]),t}(u.a.Component);T.defaultProps={};var L=Object(k.b)(function(e,t){return{remotes:e.remote.remotes,hasError:!1,error:e.remote.error,currentPath:e.explorer.currentPaths[t.containerID]}},{getRemoteNames:function(){return function(e,t){var a=t();(!a.remote.remotes||a.remote.remotes.length<1)&&w.a.post("config/listremotes").then(function(t){return e({type:F.n,status:F.s,payload:t.data.remotes})},function(t){return e({type:F.n,status:F.r,payload:t})})}},getFsInfo:function(e){return function(t){var a="/",n="";Object(D.h)(e)?(a="/",n="/"):(a=Object(D.a)(e),n=e),w.a.post("operations/fsinfo",{fs:a}).then(function(e){t({type:F.j,status:F.s,payload:Object(j.a)({},n,e.data)})},function(e){return t({type:F.j,status:F.r,payload:e})})}},changeRemoteName:C})(T),A=a(388),U=a.n(A),V=a(389),G=a(410),q=a(510),Q=a(624),z=a(430),J=a(470),$="FileComponent",K=a(133),W=a(47),Y={beginDrag:function(e){var t=e.item;return{Name:t.Name,Path:t.Path,IsDir:t.IsDir,remoteName:e.remoteName}},endDrag:function(){var e=Object(V.a)(U.a.mark(function e(t,a,n){var r,o,c,l,i,s,u,m,d,p;return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!a.getDropResult()){e.next=22;break}if(r=a.getDropResult(),o=r.srcRemoteName,c=r.srcRemotePath,l=r.destRemoteName,i=r.destRemotePath,s=r.Name,u=r.IsDir,m=r.dropEffect,d=r.updateHandler,"move"!==m){e.next=14;break}if(!n.props.canCopy){e.next=11;break}return e.next=7,Object(w.b)(o,c,l,i,s,u);case 7:d(),u?K.b.info("Directory copying started in background: ".concat(s)):K.b.info("File copying started in background: ".concat(s)),e.next=12;break;case 11:K.b.error("This remote does not support copying");case 12:e.next=22;break;case 14:if(!n.props.canMove){e.next=21;break}return e.next=17,Object(w.c)(o,c,l,i,s,u);case 17:d(),K.b.info("Directory moving started in background: ".concat(s)),e.next=22;break;case 21:K.b.error("This remote does not support moving");case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(0),p=e.t0.response?e.t0.response:e.t0,K.b.error("Error copying file(s). ".concat(p),{autoClose:!1});case 28:case"end":return e.stop()}},e,null,[[0,24]])}));return function(t,a,n){return e.apply(this,arguments)}}()};function Z(e){var t=e.IsDir,a=e.MimeType,n="fa-file";return t?n="fa-folder":"application/pdf"===a?n="fa-file-pdf-o":"image/jpeg"===a?n="fa-file-image-o":"application/rar"===a||"application/x-rar-compressed"===a||" application/zip"===a?n="fa-file-archive-o":"text/plain"===a?n="fa-file-text-o":"text/x-vcard"===a&&(n="fa-address-card-o"),u.a.createElement("i",{className:n+" fa fa-lg"})}function _(e,t){window.confirm("Are you sure you want to delete ".concat(t.Name))&&e(t)}function X(e){var t=e.downloadHandle,a=e.deleteHandle,n=e.item;return n.IsDir?u.a.createElement(g.a,{color:"link",className:"text-danger",onClick:function(){return _(a,n)}},u.a.createElement("i",{className:"fa fa-remove fa-lg d-inline"})):u.a.createElement(u.a.Fragment,null,u.a.createElement(g.a,{color:"link",onClick:function(){return t(n)}},u.a.createElement("i",{className:"fa fa-cloud-download fa-lg d-inline"})),u.a.createElement(g.a,{color:"link",className:"text-danger",onClick:function(){return _(a,n)}},u.a.createElement("i",{className:"fa fa-remove fa-lg d-inline"})))}var ee=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.item,a=e.clickHandler,n=e.downloadHandle,r=e.deleteHandle,o=e.connectDragSource,c=e.gridMode,l=t.IsDir,i=t.MimeType,s=t.ModTime,m=t.Name,d=t.Size,f=new Date(Date.parse(s));return o("card"===c?u.a.createElement("div",{className:"col-lg-3"},u.a.createElement(p.a,null,u.a.createElement(h.a,{onClick:function(e){return a(e,t)}},u.a.createElement(Z,{IsDir:l,MimeType:i})," ",m),u.a.createElement(J.a,null,u.a.createElement(X,{downloadHandle:n,deleteHandle:r,item:t})))):u.a.createElement("tr",{className:"pointer-cursor"},u.a.createElement("td",null,u.a.createElement("input",{type:"checkbox"})),u.a.createElement("td",{onClick:function(e){return a(e,t)}},u.a.createElement(Z,{IsDir:l,MimeType:i})," ",m),u.a.createElement("td",null,-1===d?"-":Object(D.g)(d,2)),u.a.createElement("td",null,f.toLocaleDateString()),u.a.createElement("td",null,u.a.createElement(X,{downloadHandle:n,deleteHandle:r,item:t}))))}}]),t}(u.a.Component),te=Object(W.d)(Object(z.b)($,Y,function(e,t){return{connectDragSource:e.dragSource(),connectDragPreview:e.dragPreview(),isDragging:t.isDragging()}}))(ee),ae={drop:function(e,t,a){if(!t.didDrop()){console.log("drop",e,t,t.getItem(),a);var n=t.getItem(),r=n.Name,o=n.Path,c=n.IsDir,l=n.remoteName;return{srcRemoteName:Object(D.a)(l),srcRemotePath:o,destRemoteName:Object(D.a)(e.currentPath.remoteName),destRemotePath:e.currentPath.remotePath,Name:r,IsDir:c,updateHandler:a.updateHandler}}}};function ne(e){var t=e.upButtonHandle;return"card"===e.gridMode?u.a.createElement(m.a,{lg:12},u.a.createElement(g.a,{onClick:function(){return t()}},"Go Up")):u.a.createElement("tr",{onClick:function(){return t()},className:"pointer-cursor"},u.a.createElement("td",null),u.a.createElement("td",null,u.a.createElement("i",{className:"fa fa-file-o"})," Go Up..."),u.a.createElement("td",null),u.a.createElement("td",null),u.a.createElement("td",null))}var re=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).updateHandler=function(){var e=a.props.currentPath,t=e.remoteName,n=e.remotePath;a.getFilesList(t,n)},a.dismissAlert=function(e){a.setState({isDownloadProgress:!1})},a.getFileComponents=function(e){var t=a.props,n=t.files,r=t.containerID,o=t.gridMode,c=t.fsInfo,l=a.props.currentPath.remoteName;if(c&&!Object(D.e)(c))return n.map(function(t,n){var i=t.ID,s=t.Name;return void 0===i&&(i=s),t.IsDir===e?u.a.createElement(u.a.Fragment,{key:i},u.a.createElement(te,{item:t,clickHandler:a.handleFileClick,downloadHandle:a.downloadHandle,deleteHandle:a.deleteHandle,remoteName:l,gridMode:o,containerID:r,canCopy:c.Features.Copy,canMove:c.Features.Move})):null})},a.state={isLoading:!1,isDownloadProgress:!1,downloadingItems:0,shouldUpdate:!0},a.handleFileClick=a.handleFileClick.bind(Object(l.a)(a)),a.downloadHandle=a.downloadHandle.bind(Object(l.a)(a)),a.deleteHandle=a.deleteHandle.bind(Object(l.a)(a)),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"handleFileClick",value:function(e,t){var a=t.Path,n=t.IsDir,r=t.IsBucket;n||r?this.updateRemotePath(a,n,r):this.downloadHandle(t)}},{key:"updateRemotePath",value:function(e,t,a){var n=this.props.currentPath.remoteName,r="",o="";a?(r=Object(D.a)(n)+e,o=""):t&&(r=n,o=e),this.props.changePath(this.props.containerID,r,o)}},{key:"getFilesList",value:function(){!(arguments.length>0&&void 0!==arguments[0])||arguments[0];var e=this.props.currentPath,t=e.remoteName,a=e.remotePath;this.props.getFiles(t,a)}},{key:"downloadHandle",value:function(){var e=Object(V.a)(U.a.mark(function e(t){var a,n,r,o,c,l,i,s,u=this;return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.currentPath,n=a.remoteName,r=a.remotePath,o=this.props.fsInfo,c="",c=o.Features.BucketBased?"/[".concat(n,"]/").concat(r,"/").concat(t.Name):"/[".concat(n,":").concat(r,"]/").concat(t.Name),this.setState(function(e){return{downloadingItems:e.downloadingItems+1,isDownloadProgress:!0}}),e.next=7,Object(w.a)({url:c,method:"GET",responseType:"blob"});case 7:l=e.sent,i=window.URL.createObjectURL(new Blob([l.data])),(s=document.createElement("a")).href=i,s.setAttribute("download",t.Name),document.body.appendChild(s),s.click(),this.setState(function(e){return{downloadingItems:e.downloadingItems-1}},function(){0===u.state.downloadingItems&&u.setState({isDownloadProgress:!1})});case 15:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"deleteHandle",value:function(){var e=Object(V.a)(U.a.mark(function e(t){var a,n;return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.props.currentPath.remoteName,n={fs:Object(D.a)(a),remote:t.Path},e.prev=2,!t.IsDir){e.next=10;break}return e.next=6,w.a.post("/operations/purge",n);case 6:this.updateHandler(),K.b.info("".concat(t.Name," deleted.")),e.next=14;break;case 10:return e.next=12,w.a.post("/operations/deletefile",n);case 12:this.updateHandler(),K.b.info("".concat(t.Name," deleted."),{autoClose:!1});case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),K.b.error("Error deleting file. ".concat(e.t0),{autoClose:!1});case 19:case"end":return e.stop()}},e,this,[[2,16]])}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.isDownloadProgress,n=e.downloadingItems,r=this.props,o=r.connectDropTarget,c=r.isOver,l=r.files,i=r.navigateUp,s=r.containerID,m=r.gridMode,p=this.props.currentPath.remoteName;if(t||!l)return u.a.createElement("div",null,u.a.createElement("i",{className:"fa fa-circle-o-notch fa-lg"})," Loading");if(""===p)return u.a.createElement("div",null,"No remote is selected. Select a remote from above to show files.");var f=this.getFileComponents(!0),h=this.getFileComponents(!1),g="";return g="card"===m?u.a.createElement(G.a,{fluid:!0},u.a.createElement(d.a,null,u.a.createElement(ne,{upButtonHandle:function(){return i(s)},gridMode:m})),u.a.createElement(d.a,null,u.a.createElement("h3",null,"Directories")),u.a.createElement(d.a,null,f),u.a.createElement(d.a,null,u.a.createElement("h3",null,"Files")),u.a.createElement(d.a,null,h)):u.a.createElement(G.a,{fluid:!0,className:"pd-0"},u.a.createElement(q.a,null,u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null),u.a.createElement("th",null,"Name"),u.a.createElement("th",null,"Size"),u.a.createElement("th",null,"Modified"),u.a.createElement("th",null,"Actions"))),u.a.createElement("tbody",null,u.a.createElement(ne,{upButtonHandle:function(){return i(s)},gridMode:m}),l.length>0?u.a.createElement(u.a.Fragment,null,u.a.createElement("tr",null,u.a.createElement("td",null),u.a.createElement("th",null,"Directories"),u.a.createElement("td",null),u.a.createElement("td",null),u.a.createElement("td",null)),f,u.a.createElement("tr",null,u.a.createElement("td",null),u.a.createElement("th",null,"Files"),u.a.createElement("td",null),u.a.createElement("td",null),u.a.createElement("td",null)),h):u.a.createElement("tr",null,u.a.createElement("td",null),u.a.createElement("td",null,"No files"),u.a.createElement("td",null),u.a.createElement("td",null),u.a.createElement("td",null))))),o(u.a.createElement("div",{className:"row"},c&&u.a.createElement("div",{style:{position:"absolute",top:0,left:0,height:"100%",width:"100%",zIndex:1,opacity:.5,backgroundColor:"gray"}}),u.a.createElement(Q.a,{color:"info",isOpen:a,toggle:this.dismissAlert,sm:12,lg:12},"Downloading ",n," file(s). Please wait."),g))}}]),t}(u.a.PureComponent);re.defaultProps={};var oe=Object(W.d)(Object(k.b)(function(e,t){var a=e.explorer.currentPaths[t.containerID],n=e.explorer.visibilityFilters[t.containerID],r=e.explorer.gridMode[t.containerID],o=e.explorer.searchQueries[t.containerID],c={},l=a.remoteName,i=a.remotePath;a&&e.remote.configs&&e.remote.configs[a.remoteName]&&(c=e.remote.configs[a.remoteName]);var s="".concat(l,"-").concat(i),u=e.remote.files[s];return u&&(u=u.files,n&&(u=Object(D.c)(u,n)),o&&(u=Object(D.d)(u,o))),{files:u,currentPath:a,fsInfo:c,gridMode:r,searchQuery:o}},{getFiles:P,navigateUp:M,changePath:I}),Object(z.c)($,ae,function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver()}}))(re);var ce=function(e){var t=e.height,a=e.children;return u.a.createElement("div",{style:{overflow:"auto",height:t}},a)},le=a(385),ie=a(625),se=a(400),ue=a(401),me=a(402),de=a(626),pe=a(490),fe=a(491),he=a(492),ge=a(631),be=a(618),Ee=a(619),ve=a(620),ye=a(621),Ne=a(622),Oe=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).disableForm=function(e){a.setState({disableForm:e})},a.changeName=function(e){var t=e.target.value;a.setState({name:t})},a.state={name:"",disableForm:!1},a.createNewFolder=a.createNewFolder.bind(Object(l.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(l.a)(a)),a.toggle=a.toggle.bind(Object(l.a)(a)),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"createNewFolder",value:function(){var e=Object(V.a)(U.a.mark(function e(){var t,a,n,r,o,c;return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.name,a=this.props.currentPath,n=a.remoteName,r=a.remotePath,o=this.props.fsInfo,n=Object(D.a)(n),e.prev=4,o.Features.BucketBased&&""===r?n+=t:""===r?r=t:r+="/"+t,c={fs:n,remote:r},this.disableForm(!0),e.next=10,w.a.post("operations/mkdir",c);case 10:this.disableForm(!1),this.toggle(),K.b.info("Folder created: ".concat(r)),this.props.getFilesForContainerID(this.props.containerID),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(4),this.disableForm(!1),e.t0.response?K.b.error("Error creating folder: ".concat(e.t0.response.data.error)):K.b.error("Error creating folder: ".concat(e.t0));case 20:case"end":return e.stop()}},e,this,[[4,16]])}));return function(){return e.apply(this,arguments)}}()},{key:"handleSubmit",value:function(e){e.preventDefault(),this.createNewFolder()}},{key:"toggle",value:function(){this.props.closeModal()}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.disableForm,n=this.props,r=n.isVisible,o=n.currentPath;return u.a.createElement(ge.a,{isOpen:r,toggle:this.toggle,"data-test":"newFolderComponent"},u.a.createElement(H.a,{onSubmit:this.handleSubmit},u.a.createElement(be.a,{toggle:this.toggle},"Create New folder at ",o.remoteName,": ",o.remotePath),u.a.createElement(Ee.a,null,u.a.createElement(ye.a,{row:!0},u.a.createElement(Ne.a,{for:"folderName",sm:5},"Enter the name"),u.a.createElement(m.a,{sm:7},u.a.createElement(me.a,{type:"text",name:"folderName",id:"folderName",value:t,onChange:this.changeName,required:!0,autoFocus:!0}))),u.a.createElement("div",{className:"clearfix"},u.a.createElement(g.a,{type:"submit",color:"success",className:"float-right",disabled:a},u.a.createElement("i",{className:"fa fa-check fa-lg"}),"Create folder")))))}}]),t}(u.a.Component),ke=Object(k.b)(function(e,t){var a=e.explorer.currentPaths[t.containerID],n={};return a&&e.remote.configs&&e.remote.configs[a.remoteName]&&(n=e.remote.configs[a.remoteName]),{currentPath:a,fsInfo:n}},{getFilesForContainerID:x})(Oe),je=["Images","Pdf","Videos"],we=a(513),Fe=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).openNewFolderModal=function(){a.setState({newFolderModalIsVisible:!0})},a.closeNewFolderModal=function(){a.setState({newFolderModalIsVisible:!1})},a.handleChangeFilter=function(e){var t=e.target.value;(0,a.props.changeVisibilityFilter)(a.props.containerID,t),a.toggleDropDown()},a.handleChangeGridMode=function(e){var t=e.target.value;(0,a.props.changeGridMode)(a.props.containerID,t),a.toggleDropDown()},a.changeSearch=function(e){e.preventDefault();var t=a.props.containerID;a.props.setSearchQuery(t,e.target.value)},a.toggleDropDown=function(){a.setState(function(e){return{dropdownOpen:!e.dropdownOpen}})},a.toggleAboutModal=function(){a.setState(function(e){return{isAboutModalOpen:!e.isAboutModalOpen}},function(){if(a.state.isAboutModalOpen){var e=a.props.containerID;a.props.getAbout(e)}})},a.handleCleanTrash=function(){var e=a.props,t=e.currentPath,n=e.containerID,r=e.fsInfo,o=t.remoteName;r&&r.Features&&r.Features.CleanUp?(Object(D.h)(o)||(o=Object(D.a)(o)),w.a.post("operations/cleanup",{fs:o}).then(function(e){200===e.status&&(Object(K.b)("Trash Cleaned"),a.props.getAbout(n))},function(e){K.b.error("Error clearing trash")})):K.b.error("Clearing trash is not allowed on this drive")},a.state={newFolderModalIsVisible:!1,isAboutModalOpen:!1,dropdownOpen:!1},a.filterOptions=je,a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.containerID,a=e.getFilesForContainerID,n=e.visibilityFilter,r=e.gridMode,o=e.navigateFwd,c=e.navigateBack,l=e.searchQuery,i=e.currentPath,s=e.doughnutData,p=this.state,f=p.newFolderModalIsVisible,h=p.dropdownOpen,b=p.isAboutModalOpen,E=i.remoteName,v=i.remotePath;return u.a.createElement("nav",{"aria-label":"breadcrumb"},u.a.createElement("ol",{className:"breadcrumb"},u.a.createElement("li",{className:"breadcrumb-item active"},E,":/"),v,u.a.createElement("li",{className:"breadcrumb-menu"},u.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Button group with nested dropdown"},u.a.createElement(g.a,{onClick:this.toggleAboutModal,className:"btn"},u.a.createElement("i",{className:"cui-settings"})," Settings")))),u.a.createElement("div",null,u.a.createElement(g.a,{color:"light",className:"mr-1 btn-outline-dark",onClick:function(){return c(t)}},u.a.createElement("i",{className:"fa fa-lg fa-angle-left"})),u.a.createElement(g.a,{color:"light",className:"mr-1 btn-outline-dark",onClick:function(){return o(t)}},u.a.createElement("i",{className:"fa fa-lg fa-angle-right"})),u.a.createElement("div",{className:"float-right mb-3 mt-1 form-inline"},u.a.createElement(ie.a,null,u.a.createElement(g.a,{className:"mr-1 btn-outline-dark",onClick:this.openNewFolderModal},u.a.createElement("i",{className:"fa fa-lg fa-plus"})," "),u.a.createElement(g.a,{className:"mr-1 btn-outline-dark",onClick:function(){return a(t)}},u.a.createElement("i",{className:"fa fa-lg fa-repeat"})),u.a.createElement(se.a,null,u.a.createElement(ue.a,{addonType:"prepend"},u.a.createElement(g.a,{type:"button",color:"primary"},u.a.createElement("i",{className:"fa fa-search"})," Search")),u.a.createElement(me.a,{type:"text",id:"input1-group2",placeholder:"Search",value:l,onChange:this.changeSearch})),u.a.createElement(de.a,{isOpen:h,toggle:this.toggleDropDown},u.a.createElement(pe.a,{caret:!0},"More"),u.a.createElement(fe.a,null,u.a.createElement(he.a,null,"View Type"," ",u.a.createElement(me.a,{type:"select",onClick:function(e){return e.stopPropagation()},onChange:this.handleChangeGridMode,value:r},u.a.createElement("option",{value:"grid"},"Grid"),u.a.createElement("option",{value:"card"},"Card"))),u.a.createElement(he.a,null,"File Filter"," ",u.a.createElement(me.a,{type:"select",onClick:function(e){return e.stopPropagation()},onChange:this.handleChangeFilter,value:n,className:"ml-1 mr-1"},u.a.createElement("option",{key:0},"None"),this.filterOptions.map(function(e,t){return u.a.createElement("option",{key:e,value:e},e)})))))),u.a.createElement(ke,{containerID:t,isVisible:f,closeModal:this.closeNewFolderModal}),u.a.createElement(ge.a,{isOpen:b,toggle:this.toggleAboutModal},u.a.createElement(be.a,null,"Status for ",E),u.a.createElement(Ee.a,null,u.a.createElement(d.a,null,u.a.createElement(m.a,{sm:12},u.a.createElement("p",null,"Space Usage (in GB)"),s?u.a.createElement(we.a,{data:s}):u.a.createElement("p",null,"Loading"))),u.a.createElement(d.a,null,u.a.createElement(m.a,{sm:12},u.a.createElement(g.a,{color:"danger",onClick:this.handleCleanTrash},"Clean Trash ",u.a.createElement("i",{className:"fa fa-lg fa-trash"}))))),u.a.createElement(ve.a,null)))))}}]),t}(u.a.Component),De=Object(k.b)(function(e,t){var a=e.providerStatus.about[t.containerID],n={},r=e.explorer.currentPaths[t.containerID],o={};if(r&&e.remote.configs&&e.remote.configs[r.remoteName]&&(o=e.remote.configs[r.remoteName]),a){for(var c=[],l=[],i=0,s=Object.entries(a);i<s.length;i++){var u=s[i],m=Object(le.a)(u,2),d=m[0],p=m[1];"total"!==d&&(c.push(d),l.push(Object(D.b)(p).toFixed(2)))}n={labels:c,datasets:[{data:l,backgroundColor:["#FF6384","#36A2EB","#FFCE56","#ff7459"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56","#ff7459"]}]}}return{visibilityFilter:e.explorer.visibilityFilters[t.containerID],currentPath:e.explorer.currentPaths[t.containerID],gridMode:e.explorer.gridMode[t.containerID],searchQuery:e.explorer.searchQueries[t.containerID],fsInfo:o,doughnutData:n}},{changeVisibilityFilter:function(e,t){return function(a){a({type:F.f,id:e,filter:t})}},changeGridMode:function(e,t){return function(a){a({type:F.a,id:e,mode:t})}},navigateBack:B,navigateFwd:R,getFilesForContainerID:x,setSearchQuery:function(e,t){return function(a){a({type:F.e,id:e,searchQuery:t})}},getAbout:function(e){return function(t,a){var n=a().explorer.currentPaths[e].remoteName;n&&(Object(D.h)(n)||(n=Object(D.a)(n)),t({type:F.m,status:F.s,id:e,payload:{}}),w.a.post("operations/about",{fs:n}).then(function(a){t({type:F.m,status:F.s,id:e,payload:a.data})},function(a){t({type:F.m,status:F.r,id:e,error:a})}))}}})(Fe),Pe=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).state={remoteNameTemp:""},a.updateRemoteName=a.updateRemoteName.bind(Object(l.a)(a)),a.updateRemotePath=a.updateRemotePath.bind(Object(l.a)(a)),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"updateRemoteName",value:function(e){this.setState({remoteNameTemp:e})}},{key:"updateRemotePath",value:function(e,t,a){var n=this.props.currentPath.remoteName,r="",o="";a?(r=Object(D.a)(n)+e,o=""):t&&(r=n,o=e),this.props.changePath(this.props.containerID,r,o)}},{key:"render",value:function(){var e=this.props.currentPath.remoteName,t=this.props.containerID,a=e&&""!==e;return u.a.createElement(u.a.Fragment,null,u.a.createElement(p.a,null,u.a.createElement(f.a,null,"Remotes"),u.a.createElement(h.a,null,u.a.createElement(L,{remoteName:e,containerID:t}))),a&&u.a.createElement(p.a,null,u.a.createElement(f.a,null,u.a.createElement(De,{containerID:t})),u.a.createElement(h.a,null,u.a.createElement(ce,{height:"700px"},u.a.createElement(oe,{containerID:t})))))}}]),t}(u.a.Component);Pe.defaultProps={};var Ie=Object(k.b)(function(e,t){var a=e.explorer.currentPaths[t.containerID],n={};return a&&e.remote.configs&&e.remote.configs[a.remoteName]&&(n=e.remote.configs[a.remoteName]),{configs:e.remote.configs,hasError:e.remote.hasError,error:e.remote.error,currentPath:e.explorer.currentPaths[t.containerID],fsInfo:n}},{createPath:S,changePath:I,changeRemoteName:C,changeRemotePath:function(e,t){return function(a){a({type:F.d,id:e,remotePath:t}),a(x(e))}},navigateUp:M,navigateBack:B,navigateFwd:R})(Pe),Ce=a(607);function xe(e){for(var t=e.cols,a=[],n=12/t,r=0;r<t;r++)a.push(u.a.createElement(m.a,{xs:12,sm:12,md:n,lg:n,key:r},u.a.createElement(Ie,{containerID:r.toString()})));return a}var Se=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).state={cols:1},a.props.createPath("0"),a.changeLayout=a.changeLayout.bind(Object(l.a)(a)),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"changeLayout",value:function(e,t){var a=this.props,n=a.backStacks,r=a.createPath;if("side"===t){for(var o=0;o<e;o++)n[o.toString()]||r(o.toString());this.setState({cols:e})}}},{key:"render",value:function(){var e=this,t=this.state.cols,a=this.props.backStacks;return u.a.createElement(u.a.Fragment,null,u.a.createElement(d.a,{className:"d-none d-md-block","data-test":"remoteExplorerLayout"},u.a.createElement(m.a,{sm:12,lg:12},u.a.createElement(p.a,null,u.a.createElement(f.a,null,"Choose Layout"),u.a.createElement(h.a,null,u.a.createElement(g.a,{color:"primary",className:"ml-2",onClick:function(){return e.changeLayout(1,"side")}},"1 - side by side"),u.a.createElement(g.a,{color:"primary",className:"ml-2",onClick:function(){return e.changeLayout(2,"side")}},"2 - side by side"),u.a.createElement(g.a,{color:"primary",className:"ml-2",onClick:function(){return e.changeLayout(3,"side")}},"3 - side by side"),u.a.createElement(g.a,{color:"primary",className:"ml-2",onClick:function(){return e.changeLayout(4,"side")}},"4 - side by side"))))),u.a.createElement(d.a,null,u.a.createElement(xe,{cols:t,backStacks:a})))}}]),t}(u.a.Component);t.default=Object(W.d)(Object(k.b)(function(e){return{backStacks:e.explorer.backStacks}},{createPath:S}),Object(z.a)(Ce.a))(Se)}}]);
//# sourceMappingURL=17.caa7ba5e.chunk.js.map