(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,n,t){e.exports=t(21)},17:function(e,n,t){},21:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),r=t(9),o=t.n(r),c=(t(17),t(22)),u=function(){return l.a.createElement("header",null,l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(c.a,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(c.a,{to:"/roster"},"Roster")),l.a.createElement("li",null,l.a.createElement(c.a,{to:"/schedule"},"Schedule")))))},m=t(25),i=t(24),s=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Welcome to the Tornadoes Website!"))},E={players:[{number:1,name:"Ben Blocker",position:"G"},{number:2,name:"Dave Defender",position:"D"},{number:3,name:"Sam Sweeper",position:"D"},{number:4,name:"Matt Midfielder",position:"M"},{number:5,name:"William Winger",position:"M"},{number:6,name:"Fillipe Forward",position:"F"}],all:function(){return this.players},get:function(e){return this.players.find(function(n){return n.number===e})}},p=function(){return l.a.createElement("div",null,l.a.createElement("ul",null,E.all().map(function(e){return l.a.createElement("li",{key:e.number},l.a.createElement(c.a,{to:"/roster/".concat(e.number)},e.name))})))},d=function(e){var n=E.get(parseInt(e.match.params.number,10));return n?l.a.createElement("div",null,l.a.createElement("h1",null,n.name," (#",n.number,")"),l.a.createElement("h2",null,"Position: ",n.position),l.a.createElement(c.a,{to:"/roster"},"Back")):l.a.createElement("div",null,"Sorry, but the player was not found")},h=function(){return l.a.createElement(m.a,null,l.a.createElement(i.a,{exact:!0,path:"/roster",component:p}),l.a.createElement(i.a,{path:"/roster/:number",component:d}))},f=function(){return l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,"6/5 @ Evergreens"),l.a.createElement("li",null,"6/8 vs Kickers"),l.a.createElement("li",null,"6/14 @ United")))},v=function(){return l.a.createElement("main",null,l.a.createElement(m.a,null,l.a.createElement(i.a,{exact:!0,path:"/",component:s}),l.a.createElement(i.a,{path:"/roster",component:h}),l.a.createElement(i.a,{path:"/schedule",component:f})))},b=function(){return l.a.createElement("div",null,l.a.createElement(u,null),l.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=t(23);o.a.render(l.a.createElement(w.a,null,l.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.7acfa737.chunk.js.map