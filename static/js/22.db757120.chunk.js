(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{638:function(e,n,a){"use strict";a.r(n);var t=a(44),l=a(45),o=a(133),r=a(132),c=a(134),i=a(0),m=a.n(i),u=a(50),s=a(435),p=a(465),d={items:[{name:"Dashboard",url:"/dashboard",icon:"icon-speedometer"},{name:"Configs",url:"/showconfig",icon:"icon-note"},{name:"Explorer",url:"/remoteExplorer",icon:"icon-screen-desktop"},{name:"Backend",url:"/rcloneBackend",icon:"icon-star"},{name:"Log Out",url:"/login",icon:"icon-logout"}]},h=m.a.lazy(function(){return Promise.all([a.e(0),a.e(2),a.e(18)]).then(a.bind(null,637))}),f=m.a.lazy(function(){return Promise.all([a.e(1),a.e(9),a.e(19)]).then(a.bind(null,639))}),E=m.a.lazy(function(){return a.e(15).then(a.bind(null,641))}),b=m.a.lazy(function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(7),a.e(23)]).then(a.bind(null,635))}),g=[{path:"/",exact:!0,name:"Home"},{path:"/newdrive",exact:!0,name:"New Drive",component:h},{path:"/login",exact:!0,name:"New Drive",component:m.a.lazy(function(){return Promise.all([a.e(0),a.e(17)]).then(a.bind(null,618))})},{path:"/dashboard",name:"Dashboard",component:f},{path:"/showconfig",name:"Configs",component:E},{path:"/remoteExplorer/:remoteName/:remotePath",exact:!0,name:"Explorer",component:b},{path:"/remoteExplorer",name:"Explorer",component:b},{path:"/rcloneBackend",name:"Rclone Backend",component:m.a.lazy(function(){return a.e(13).then(a.bind(null,634))})}],y=a(135),x=a(36),k=m.a.lazy(function(){return a.e(20).then(a.bind(null,636))}),v=m.a.lazy(function(){return a.e(21).then(a.bind(null,626))}),w=m.a.lazy(function(){return Promise.all([a.e(1),a.e(10),a.e(16)]).then(a.bind(null,627))}),z=function(e){function n(){var e,a;Object(t.a)(this,n);for(var l=arguments.length,c=new Array(l),i=0;i<l;i++)c[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(r.a)(n)).call.apply(e,[this].concat(c)))).loading=function(){return m.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},a}return Object(c.a)(n,e),Object(l.a)(n,[{key:"componentWillMount",value:function(){localStorage.getItem(x.f)&&localStorage.getItem(x.d)||this.props.history.push("/login")}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"app"},m.a.createElement(p.e,{fixed:!0},m.a.createElement(i.Suspense,{fallback:this.loading()},m.a.createElement(w,{onLogout:function(n){return e.signOut(n)}}))),m.a.createElement("div",{className:"app-body"},m.a.createElement(p.h,{fixed:!0,display:"lg"},m.a.createElement(p.k,null),m.a.createElement(p.j,null),m.a.createElement(i.Suspense,null,m.a.createElement(p.m,Object.assign({navConfig:d},this.props))),m.a.createElement(p.i,null),m.a.createElement(p.l,null)),m.a.createElement("main",{className:"main"},m.a.createElement(p.c,{appRoutes:g}),m.a.createElement(s.a,{fluid:!0},m.a.createElement(i.Suspense,{fallback:this.loading()},m.a.createElement(u.d,null,g.map(function(e,n){return e.component?m.a.createElement(u.b,{key:n,path:e.path,exact:e.exact,name:e.name,render:function(n){return m.a.createElement(e.component,n)}}):null}),m.a.createElement(u.a,{from:"/",to:"/login"}))))),m.a.createElement(p.a,{fixed:!0},m.a.createElement(i.Suspense,{fallback:this.loading()},m.a.createElement(k,null)))),m.a.createElement(p.d,null,m.a.createElement(i.Suspense,{fallback:this.loading()},m.a.createElement(v,null))))}}]),n}(i.Component);n.default=Object(y.b)(function(e){return{isConnected:e.status.isConnected}},{})(z)}}]);
//# sourceMappingURL=22.db757120.chunk.js.map