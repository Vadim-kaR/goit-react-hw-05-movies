"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[592],{3524:function(n,t,e){e.d(t,{$h:function(){return r},_n:function(){return a},bV:function(){return c}});var r="e9111f601e940d4d6bd4d7bfd73fa6ea",a="https://api.themoviedb.org/3",c="https://image.tmdb.org/t/p/w500/"},2592:function(n,t,e){e.r(t),e.d(t,{default:function(){return C}});var r,a,c,u,i,o=e(5861),s=e(885),p=e(7757),f=e.n(p),l=e(2791),d=e(1716),h=e(6871),v=e(168),m=e(6031),x=m.ZP.ul(r||(r=(0,v.Z)(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n"]))),g=m.ZP.img(a||(a=(0,v.Z)(["\n  width: 100px;\n"]))),w=m.ZP.li(c||(c=(0,v.Z)(["\n  width: 180px;\n  height: 270px;\n  text-align: center;\n  padding: 5px;\n  border: "," #000;\n  margin-bottom: 10px;\n  border-radius: ",";\n"])),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.radii.min})),b=m.ZP.div(u||(u=(0,v.Z)(["\n  width: 100%;\n"]))),Z=m.ZP.div(i||(i=(0,v.Z)(["\n  width: 100%;\n  height: 100px;\n"]))),j=e(3524),k=e(9481),y=e(4861),_=e(184),P=function(n){var t=n.actors;return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(x,{children:null===t||void 0===t?void 0:t.map((function(n){var t=n.id,e=n.name,r=n.character,a=n.profile_path,c=n.original_name,u=n.gender;return(0,_.jsxs)(w,{children:[(0,_.jsxs)(Z,{children:[(0,_.jsx)("p",{children:e}),r&&(0,_.jsxs)("p",{children:["Character: ",r]})]}),(0,_.jsx)(b,{children:a?(0,_.jsx)(g,{src:"".concat(j.bV).concat(a),alt:c}):(0,_.jsx)(g,{src:2===u?k:y,alt:""})})]},t)}))})})},C=function(){var n=(0,h.UO)().id,t=(0,l.useState)(null),e=(0,s.Z)(t,2),r=e[0],a=e[1];return(0,l.useEffect)((function(){var t=function(){var t=(0,o.Z)(f().mark((function t(){var e,r;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,d.Ku)(n);case 2:e=t.sent,r=e.cast,a(r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[n]),(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(P,{actors:r})})}},1716:function(n,t,e){e.d(t,{Ku:function(){return f},Pg:function(){return l},Pt:function(){return d},W_:function(){return h},JN:function(){return p}});var r=e(5861),a=e(7757),c=e.n(a),u=e(4569),i=e.n(u),o=e(3524),s=i().create({baseURL:o._n,params:{api_key:o.$h,language:"en-US",include_adult:!0}}),p=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.get("/trending/movie/day");case 3:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.get("/movie/".concat(t,"/credits"));case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.get("/movie/".concat(t));case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.get("/search/movie/",{params:{query:t}});case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.get("/movie/".concat(t,"/reviews"));case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}()},9481:function(n,t,e){n.exports=e.p+"static/media/male.8c84566a7ea4355ab04c.jpeg"},4861:function(n,t,e){n.exports=e.p+"static/media/woman.46080aa67aa7713f992f.jpg"}}]);
//# sourceMappingURL=592.7d7db973.chunk.js.map