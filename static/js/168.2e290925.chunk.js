"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{830:function(n,t,e){e.d(t,{IQ:function(){return u},Jh:function(){return a},Ry:function(){return f},XT:function(){return o},wn:function(){return i}});var c="https://api.themoviedb.org/3",r="bfdc528b073fc191dd19703e3d01019a",o=function(){return fetch("".concat(c,"/trending/movie/day?api_key=").concat(r))},i=function(n){return fetch("".concat(c,"/movie/").concat(n,"?api_key=").concat(r))},u=function(n){return fetch("".concat(c,"/movie/").concat(n,"/credits?api_key=").concat(r))},a=function(n){return fetch("".concat(c,"/movie/").concat(n,"/reviews?api_key=").concat(r))},f=function(n){return fetch("".concat(c,"/search/movie?api_key=").concat(r,"&query=").concat(n))}},168:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var c=e(439),r=e(830),o=e(791),i=e(689),u="Reviews_author__CqYAZ",a=e(184),f=function(){var n=(0,o.useState)([]),t=(0,c.Z)(n,2),e=t[0],f=t[1],h=(0,i.UO)().movieId;return(0,o.useEffect)((function(){(0,r.Jh)(h).then((function(n){return n.json()})).then((function(n){return f(n.results)}))}),[h]),(0,a.jsx)(a.Fragment,{children:0!==e.length?e.map((function(n){return(0,a.jsxs)("div",{children:[(0,a.jsxs)("li",{className:u,children:["Author: ",n.author]}),(0,a.jsx)("p",{children:n.content})]},n.id)})):(0,a.jsx)("p",{children:"Sorry, we can't find any reviews"})})}}}]);
//# sourceMappingURL=168.2e290925.chunk.js.map