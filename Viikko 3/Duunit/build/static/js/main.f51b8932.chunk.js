(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(37)},37:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(11),c=n.n(l),r=n(3),u=n(2),i=n.n(u),s=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(""),u=Object(r.a)(c,2),s=u[0],m=u[1],p=Object(a.useState)(""),f=Object(r.a)(p,2),g=f[0],v=f[1],b=Object(a.useState)(""),d=Object(r.a)(b,2),h=d[0],E=d[1],j=Object(a.useState)(!0),O=Object(r.a)(j,2),w=O[0],C=O[1];Object(a.useEffect)(function(){console.log("effect"),i.a.get("http://localhost:3001/api/persons").then(function(e){console.log("promise fulfilled"),l(e.data)})},[]),console.log("render",n.length,"persons");var S=n.filter(function(e){return e.name.toUpperCase().indexOf(g.toUpperCase())>-1}),k=function(e){return i.a.delete("http://localhost:3001/api/persons/".concat(e)).then(function(e){console.log("Mission accomplished!")})};return o.a.createElement("div",null,o.a.createElement("form",null,"rajaa n\xe4ytett\xe4vi\xe4:"," ",o.a.createElement("input",{value:g,onChange:function(e){C(!w),console.log(e.target.value),v(e.target.value)}})),o.a.createElement("h2",null,"Puhelinluettelo"),o.a.createElement("div",null,"debug: ",s),o.a.createElement("form",{onSubmit:function(e){e.preventDefault();for(var t=0;t<n.length;t++){if(n[t].content===s)return void alert("".concat(s," on jo listassa!"));if(n[t].number===h)return void alert("".concat(h," on jo listassa!"))}var a={name:s,number:h};i.a.post("http://localhost:3001/api/persons",a).then(function(e){l(n.concat(e.data)),m("")})}},"nimi: ",o.a.createElement("input",{value:s,onChange:function(e){console.log(e.target.value),m(e.target.value)}}),"numero: ",o.a.createElement("input",{value:h,onChange:function(e){console.log(e.target.value),E(e.target.value)}}),o.a.createElement("button",{type:"submit"},"lis\xe4\xe4")),o.a.createElement("h2",null,"Numerot"),o.a.createElement("ul",null,S.map(function(e){return o.a.createElement("div",{key:e.id},o.a.createElement("p",null,e.name," ",e.number," ")," ",o.a.createElement("button",{onClick:function(){return k(e.id)}}," poista "))})))};i.a.get("/persons").then(function(e){var t=e.data;console.log(t)}),c.a.render(o.a.createElement(s,null),document.getElementById("root"))}},[[12,2,1]]]);
//# sourceMappingURL=main.f51b8932.chunk.js.map