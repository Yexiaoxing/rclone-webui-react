(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{733:function(e,n,a){"use strict";a.r(n);var t=a(38),l=a(39),r=a(89),o=a(88),c=a(90),i=a(0),m=a.n(i),u=a(52),s=a(419),p=a(486),d={items:[{name:"Dashboard",url:"/dashboard",icon:"icon-speedometer"},{name:"Configs",url:"/showconfig",icon:"icon-note"},{name:"Explorer",url:"/remoteExplorer",icon:"icon-screen-desktop"},{name:"Backend",url:"/rcloneBackend",icon:"icon-star"},{name:"Log Out",url:"/login",icon:"icon-logout"}]},h=m.a.lazy(function(){return Promise.all([a.e(1),a.e(14)]).then(a.bind(null,732))}),f=m.a.lazy(function(){return Promise.all([a.e(0),a.e(10),a.e(19)]).then(a.bind(null,734))}),E=m.a.lazy(function(){return a.e(18).then(a.bind(null,738))}),b=m.a.lazy(function(){return Promise.all([a.e(0),a.e(1),a.e(3),a.e(8),a.e(21)]).then(a.bind(null,730))}),g=[{path:"/",exact:!0,name:"Home"},{path:"/newdrive/edit/:drivePrefix",name:"New Drive",component:h},{path:"/newdrive",exact:!0,name:"New Drive",component:h},{path:"/login",exact:!0,name:"New Drive",component:m.a.lazy(function(){return Promise.all([a.e(2),a.e(4)]).then(a.bind(null,735))})},{path:"/dashboard",name:"Dashboard",component:f},{path:"/showconfig",name:"Configs",component:E},{path:"/remoteExplorer/:remoteName/:remotePath",exact:!0,name:"Explorer",component:b},{path:"/remoteExplorer",name:"Explorer",component:b},{path:"/rcloneBackend",name:"Rclone Backend",component:m.a.lazy(function(){return a.e(12).then(a.bind(null,729))})}],y=a(139),x=a(40),v=a(140),k=m.a.lazy(function(){return a.e(15).then(a.bind(null,731))}),w=m.a.lazy(function(){return a.e(20).then(a.bind(null,719))}),z=m.a.lazy(function(){return Promise.all([a.e(0),a.e(3),a.e(9)]).then(a.bind(null,736))}),O=function(e){function n(){var e,a;Object(t.a)(this,n);for(var l=arguments.length,c=new Array(l),i=0;i<l;i++)c[i]=arguments[i];return(a=Object(r.a)(this,(e=Object(o.a)(n)).call.apply(e,[this].concat(c)))).loading=function(){return m.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},a}return Object(c.a)(n,e),Object(l.a)(n,[{key:"componentWillMount",value:function(){localStorage.getItem(x.g)&&localStorage.getItem(x.e)||this.props.history.push("/login")}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"app","data-test":"defaultLayout"},m.a.createElement(v.a,null,m.a.createElement(p.e,{fixed:!0},m.a.createElement(i.Suspense,{fallback:this.loading()},m.a.createElement(z,{onLogout:function(n){return e.signOut(n)}}))),m.a.createElement("div",{className:"app-body"},m.a.createElement(p.h,{fixed:!0,display:"lg"},m.a.createElement(p.k,null),m.a.createElement(p.j,null),m.a.createElement(i.Suspense,null,m.a.createElement(p.m,Object.assign({navConfig:d},this.props))),m.a.createElement(p.i,null),m.a.createElement(p.l,null)),m.a.createElement("main",{className:"main"},m.a.createElement(p.c,{appRoutes:g}),m.a.createElement(s.a,{fluid:!0},m.a.createElement(i.Suspense,{fallback:this.loading()},m.a.createElement(u.d,null,g.map(function(e,n){return e.component?m.a.createElement(u.b,{key:n,path:e.path,exact:e.exact,name:e.name,render:function(n){return m.a.createElement(e.component,n)}}):null}),m.a.createElement(u.a,{from:"/",to:"/login"}))))),m.a.createElement(p.a,{fixed:!0},m.a.createElement(i.Suspense,{fallback:this.loading()},m.a.createElement(k,null)))),m.a.createElement(p.d,null,m.a.createElement(i.Suspense,{fallback:this.loading()},m.a.createElement(w,null)))))}}]),n}(i.Component);n.default=Object(y.b)(function(e){return{isConnected:e.status.isConnected}},{})(O)}}]);
//# sourceMappingURL=22.5ee9e4e8.chunk.js.map