(this["webpackJsonpcalculator-app"]=this["webpackJsonpcalculator-app"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(1),r=n.n(a),s=n(8),i=n.n(s),u=(n(14),n(2)),l=n(3),o=n(6),b=n(5),d=n(4),p=(n(15),function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"result",children:[0!=this.props.calc&&Object(c.jsx)("em",{className:"calc",children:this.props.calc}),Object(c.jsx)("span",{id:"display",children:this.props.result})]})}}]),n}(a.Component)),h=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this;var e,n=(e="type",[{btn:"=",id:"equals",type:"total"},{btn:".",id:"decimal",type:"number"},{btn:"0",id:"zero",type:"number"},{btn:"1",id:"one",type:"number"},{btn:"2",id:"two",type:"number"},{btn:"3",id:"three",type:"number"},{btn:"4",id:"four",type:"number"},{btn:"5",id:"five",type:"number"},{btn:"6",id:"six",type:"number"},{btn:"7",id:"seven",type:"number"},{btn:"8",id:"eight",type:"number"},{btn:"9",id:"nine",type:"number"},{btn:"+",id:"add",type:"op"},{btn:"-",id:"subtract",type:"op"},{btn:"*",id:"multiply",type:"op"},{btn:"/",id:"divide",type:"op"},{btn:"AC",id:"clear",type:"other"},{btn:"\u2190",id:"delete",type:"other"}].reduce((function(t,n){return(t[n[e]]=t[n[e]]||[]).push(n),t}),{})),a=Object.keys(n).map((function(e,a){return Object(c.jsx)("div",{className:e,children:n[e].map((function(n){var a=n.btn,r=n.id;return Object(c.jsx)("button",{className:"btn btn-".concat(e),value:a,onClick:t.props.handleButton,children:a},r)}))},a)}));return Object(c.jsx)("div",{className:"buttons",children:a})}}]),n}(a.Component),j=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(u.a)(this,n),(t=e.call(this)).handleButtons=function(e){var n=e.target.value;"="===e.target.value?t.calcResult():"AC"===n?t.reset():"\u2190"===n?t.delAction():t.checkOpConditions(n)},t.checkOpConditions=function(e){var n=t.state.calc,c=n.toString(),a=n+e;a.substr(-2).match(/[-][-]/g)?(n=a.replace("--","+"),t.setState({calc:n})):((a.substr(-2).match(/[%,/,+,*]{2,}/g)||a.match(/^[0]{1,}/g))&&(n=n.slice(0,-1)),a.substr(-2).match(/[-][%,/,+,*]/g)&&(n=n.slice(0,-2)),(c.match(/[.]{2,}/g)||c.match(/[.]{1,}[-,/,+,*,%]/g)||c.match(/[0-9]+[.]{1,}[0-9]+[.]{1,}/g))&&(n=n.slice(0,-1)),t.setState({calc:n+e}))},t.delAction=function(){var e=t.state.calc,n=e.toString();n=e.slice(0,-1),t.setState({calc:n})},t.calcResult=function(){if(t.state.calc.match(/[-,%,/,+,*,.]$/g))t.setState({result:"Erreur"});else{var e="";n=t.state.calc,e=Function("'use strict'; return (".concat(n,")"))(),e=Math.round(100*e)/100,t.setState({result:e})}var n},t.reset=function(){t.setState({calc:"0",result:"0"})},t.state={calc:"0",result:"0"},t.handleButtons=t.handleButtons.bind(Object(o.a)(t)),t}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"calculator",children:Object(c.jsxs)("div",{className:"calculator-ctn",children:[Object(c.jsx)(p,{result:this.state.result,calc:this.state.calc}),Object(c.jsx)(h,{handleButton:this.handleButtons})]})})}}]),n}(a.Component),m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),c(t),a(t),r(t),s(t)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(j,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.ef2df67c.chunk.js.map