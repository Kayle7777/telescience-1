(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{136:function(e,t,n){e.exports=n.p+"static/media/space.d4bd4642.png"},5421:function(e,t,n){e.exports=n(5572)},5570:function(e,t,n){},5572:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(19),i=n.n(o),c=n(15),l=n(2),s=n(38),u=n(24),m=n(18),p=n(17),d=n(20),g=n(136),f=n.n(g),h=function(e){var t=e.selectedMap,n=e.image,a=function(e){var t={cogmap1:"https://goonhub.com/images/maps/cogmap/z1",cogmap2:"https://goonhub.com/images/maps/cogmap2/z1",faintSignal:"https://goonhub.com/images/maps/cogmap2/z3",oshan:"https://goonhub.com/images/maps/oshan/z1",clarion:"https://goonhub.com/images/maps/clarion/z1",destiny:"https://goonhub.com/images/maps/destiny/z1",samedi:"https://goonhub.com/images/maps/samedi/z1",horizon:"https://goonhub.com/images/maps/horizon/z1"};return t[e]?t[e]:t.cogmap1}(t);return r.a.createElement("div",{onDragStart:function(e){return e.preventDefault()}},function(){for(var e=[],t=0;t<8;t++)for(var n=0;n<8;n++)e.push("".concat(t,",").concat(n));return e}().map(function(e){return r.a.createElement("img",{className:n,key:e,alt:e,src:"".concat(a,"/").concat(e,".png")})}))},E=Object(c.withStyles)(function(e){return{main:{marginTop:-48+e.spacing.unit},line:{fontSize:e.typography.caption.fontSize},list:{maxHeight:"297px",overflow:"auto"},arrow:{transition:e.transitions.create(["transform"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},arrowShift:{transform:"rotate(180deg)",transition:e.transitions.create(["transform"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},headerText:{marginLeft:2*e.spacing.unit}}})(function(e){var t=e.classes,n=e.math,o=Object(a.useState)(!1),i=Object(p.a)(o,2),c=i[0],s=i[1];return r.a.createElement(l.k,{className:t.main},r.a.createElement(l.t,{onClick:function(){return s(!c)},align:"center",variant:"overline",className:t.headerText},"expedition locations",r.a.createElement(l.f,{disabled:!0,className:c?t.arrow:t.arrowShift},r.a.createElement(d.d,null))),r.a.createElement(l.b,{in:c},r.a.createElement(l.t,{component:"div",variant:"body2",className:t.list},r.a.createElement("ul",null,[{name:"meat station",location:[209,23]},{name:"solar observatory",location:[99,85]},{name:"lava moon",location:[88,106]},{name:"mars",location:[191,135]},{name:"ice moon",location:[15,150]},{name:"biodome",location:[120,164]},{name:"unknown",location:[131,212]},{name:"unknown",location:[236,223]}].map(function(e){var a=Object(p.a)(n.modifiers,2),o=a[0],i=a[1],c=Object(p.a)(n.divisors,2),l=c[0],s=c[1];return e.location[0]=e.location[0]/l+o,e.location[1]=e.location[1]/s+i,r.a.createElement("li",{key:"".concat(e.name,"_").concat(e.location.toString())},r.a.createElement("p",{className:t.line},e.name.toUpperCase()),"X: ".concat(e.location[0],", Y: ").concat(e.location[1]))})))))}),v=Object(c.withStyles)(function(e){return{paper:{position:"relative",marginTop:e.spacing.unit,marginRight:e.spacing.unit},textField:{margin:e.spacing.unit,width:"calc(100% - ".concat(2*e.spacing.unit,"px)")}}})(function(e){var t=e.classes,n=e.selectMap,a=e.selectedMap;return r.a.createElement(l.k,{className:t.paper},r.a.createElement(l.e,{className:t.textField},r.a.createElement(l.m,{MenuProps:t.menu,native:!0,value:a,onChange:function(e){var t=e.target.value;return n(t)}},r.a.createElement("option",{value:"cogmap1"},"Cogmap 1"),r.a.createElement("option",{value:"cogmap2"},"Cogmap 2"),r.a.createElement("option",{value:"faintSignal"},"Debris Field"),r.a.createElement("option",{value:"oshan"},"Oshan"),r.a.createElement("option",{value:"clarion"},"Clarion"),r.a.createElement("option",{value:"destiny"},"Destiny"),r.a.createElement("option",{value:"samedi"},"Samedi"),r.a.createElement("option",{value:"horizon"},"Horizon"))))}),b=Object(c.withStyles)(function(e){return{paper:{position:"relative",marginTop:2*e.spacing.unit,marginRight:e.spacing.unit},headerText:{marginRight:6*e.spacing.unit},arrow:{transition:e.transitions.create(["transform"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},arrowShift:{transform:"rotate(180deg)",transition:e.transitions.create(["transform"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},listHeight:{maxHeight:442-4*e.spacing.unit,overflowY:"auto"}}})(function(e){var t=e.classes,n=e.centerCoords,o=e.zoom,i=e.favorites,c=e.modFavorites,s=e.math,g=e.selectedMap,f=Object(a.useState)(!1),h=Object(p.a)(f,2),E=h[0],v=h[1],b=Object(a.useState)(!1),O=Object(p.a)(b,2),y=O[0],w=O[1];return Object(a.useEffect)(function(){return i[g].length>=1&&!E&&!y?v(!0):i[g].length<1?v(!1):void 0},[e]),r.a.createElement(l.k,{className:t.paper},r.a.createElement(l.t,{className:t.headerText,"aria-owns":E?"favorites-menu":void 0,"aria-haspopup":"true",variant:"overline",align:"center",onClick:function(){return i[g].length?(w(!0),v(!E)):v(!1)}},r.a.createElement(l.f,{disabled:!0,className:E?t.arrow:t.arrowShift},r.a.createElement(d.d,null)),"Favorites"),r.a.createElement(l.b,{in:E},r.a.createElement(l.h,{id:"favorites-menu",className:t.listHeight},i[g].map(function(e,t){return r.a.createElement(l.i,{key:"".concat(e.location,"_key")},r.a.createElement(l.s,{value:e.name,onChange:function(e){var n=e.target.value;return c(function(e){return e[g][t].name=n,e})},FormHelperTextProps:{style:{textAlign:"center"}},helperText:"Real: [".concat(e.location.toString(),"] ----- Console: [").concat(e.location[0]/s.divisors[0]+s.modifiers[0],",").concat(e.location[1]/s.divisors[1]+s.modifiers[1],"]"),InputProps:{startAdornment:r.a.createElement(l.g,{position:"start"},r.a.createElement(l.f,{onClick:function(){return n(o,[0,0],e.location)},"aria-label":"go to"},r.a.createElement(d.e,null))),endAdornment:r.a.createElement(l.g,{position:"end"},r.a.createElement(l.f,{onClick:function(){return 1===i.length&&v(!1),c(function(t){return Object(m.a)({},t,Object(u.a)({},g,t[g].filter(function(t){return t!==e})))})},"aria-label":"delete"},r.a.createElement(d.a,null)))}}))}))))}),O=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Help, I'm stuck!"),r.a.createElement("hr",null),r.a.createElement("p",null,"Send two Space GPS's through the teleporter at the console coord values, and record their actual position under GPS coord."),r.a.createElement("p",null,'When you\'re done, you can close the math table by clicking the "DO TELESCIENCE MATH" header.'),r.a.createElement("p",null,"ALT + WASD, Arrow Keys, or Numpad to navigate via keyboard."),r.a.createElement("p",null,"Right click anywhere to add favorites."),r.a.createElement("p",null,"Stuck? Check the SS13 wiki on","\t",r.a.createElement(l.a,{color:"secondary",variant:"outlined",size:"small",href:"https://wiki.ss13.co/Telescience#Decoding_the_teleporter",rel:"noopener noreferrer",target:"_blank"},"decoding the teleporter")),r.a.createElement("p",null,"Need more info?","\t",r.a.createElement(l.a,{color:"secondary",variant:"outlined",size:"small",href:"https://github.com/Kayle7777/telescience",rel:"noopener noreferrer",target:"_blank"},"Click here"),"\t","for a detailed readme."),r.a.createElement("hr",null),r.a.createElement("p",null,"Check out the alpha version of my ChemHelper site. Plenty more features are in store!"),r.a.createElement(l.a,{color:"secondary",variant:"outlined",size:"small",href:"https://kayle7777.github.io/chemhelper/",rel:"noopener noreferrer",target:"_blank"},"ChemHelper"))},y=function(e){var t=e.classes,n=e.open,a=e.anchorEl,o=e.onClose,i=e.anchorOrigin;return r.a.createElement(l.l,{className:t.popOver,"aria-label":"Math help",id:"math-tips",open:n,anchorEl:a,onClose:o,anchorOrigin:i},r.a.createElement(l.t,{variant:"caption",className:t.popOverText},r.a.createElement(O,null)))},w=Object(c.withStyles)(function(e){return{textField:{width:75},main:{zIndex:2,position:"fixed",marginLeft:e.spacing.unit,marginTop:e.spacing.unit,width:257},resultsPos:{zIndex:2,position:"relative",marginTop:e.spacing.unit},arrow:{transition:e.transitions.create(["transform"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},arrowShift:{transform:"rotate(180deg)",transition:e.transitions.create(["transform"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},headerText:{marginLeft:2*e.spacing.unit},popOver:{marginLeft:e.spacing.unit},popOverText:{margin:e.spacing.unit,maxWidth:257+30*e.spacing.unit},goto:{zIndex:2,transform:"translate(102px, -127px)"},rightPanel:{position:"absolute",zIndex:2,top:0,right:0,width:300},helpButton:{position:"fixed",bottom:0,right:0,marginBottom:2*e.spacing.unit,marginRight:2*e.spacing.unit}}})(function(e){var t=e.classes,n=e.selectedTile,o=e.centerCoords,i=e.selectMap,c=e.selectedMap,s=e.zoom,g=e.favorites,f=e.modFavorites,h=Object(a.useState)(null),O=Object(p.a)(h,2),w=O[0],k=O[1],j=Object(a.useState)(!0),x=Object(p.a)(j,2),C=x[0],S=x[1],N=Object(a.useState)({input:[100,50],actualX:[6,7],actualY:[49,51]}),T=Object(p.a)(N,2),I=T[0],M=T[1],P=I.actualX[1]-I.actualX[0],F=I.actualY[1]-I.actualY[0],z=I.input[0]-I.actualX[0]/P,A=I.input[1]-I.actualY[0]/F;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.main},r.a.createElement(l.k,null,r.a.createElement(l.t,{className:t.headerText,onClick:function(){return S(!C)},variant:"overline",align:"center",id:"tableTitle"},"Do telescience math",r.a.createElement(l.f,{disabled:!0,className:C?t.arrow:t.arrowShift},r.a.createElement(d.d,null))),r.a.createElement(l.b,{in:C},r.a.createElement(l.n,{padding:"dense"},r.a.createElement(l.q,null,r.a.createElement(l.r,null,r.a.createElement(l.p,{align:"center"},"Console coord"),r.a.createElement(l.p,{align:"center"},"GPS coord"))),r.a.createElement(l.o,{"data-testid":"telescience-gps"},r.a.createElement(l.r,null,r.a.createElement(l.p,null,r.a.createElement(l.s,{className:t.textField,disabled:!C,onChange:function(e){return X(e,"input",0)},value:I.input[0],InputProps:{startAdornment:r.a.createElement(l.g,{position:"start"},"X1"),"data-testid":"input-1-0"}})),r.a.createElement(l.p,null,r.a.createElement(l.s,{className:t.textField,disabled:!C,onChange:function(e){return X(e,"actualX",0)},value:I.actualX[0],InputProps:{"data-testid":"actual-x-0"}}))),r.a.createElement(l.r,null,r.a.createElement(l.p,null,r.a.createElement(l.s,{className:t.textField,disabled:!C,onChange:function(e){return X(e,"input",1)},value:I.input[1],InputProps:{startAdornment:r.a.createElement(l.g,{position:"start"},"Y1"),"data-testid":"input-1-1"}})),r.a.createElement(l.p,null,r.a.createElement(l.s,{className:t.textField,disabled:!C,onChange:function(e){return X(e,"actualY",0)},value:I.actualY[0],InputProps:{"data-testid":"actual-y-0"}}))),r.a.createElement(l.r,null,r.a.createElement(l.p,null,r.a.createElement(l.s,{className:t.textField,value:I.input[0]+1,disabled:!0,InputProps:{startAdornment:r.a.createElement(l.g,{position:"start"},"X2"),"data-testid":"input-2-0"}})),r.a.createElement(l.p,null,r.a.createElement(l.s,{className:t.textField,disabled:!C,onChange:function(e){return X(e,"actualX",1)},value:I.actualX[1],InputProps:{"data-testid":"actual-x-1"}}))),r.a.createElement(l.r,null,r.a.createElement(l.p,null,r.a.createElement(l.s,{className:t.textField,value:I.input[1]+1,disabled:!0,InputProps:{startAdornment:r.a.createElement(l.g,{position:"start"},"Y2"),"data-testid":"input-2-1"}})),r.a.createElement(l.p,null,r.a.createElement(l.s,{className:t.textField,disabled:!C,onChange:function(e){return X(e,"actualY",1)},value:I.actualY[1],InputProps:{"data-testid":"actual-y-1"}}))))))),r.a.createElement(l.k,{className:t.resultsPos},r.a.createElement(l.t,{className:t.headerText,variant:"overline",align:"center",id:"tableTitle"},"Real Coordinates"),r.a.createElement(l.n,{padding:"dense"},r.a.createElement(l.o,null,r.a.createElement(l.r,null,r.a.createElement(l.p,null,r.a.createElement(l.s,{className:t.textField,value:n[0],onChange:function(t){var n=parseInt(t.target.value);return n||(n=0),e.transform(function(e){return Object(m.a)({},e,{selectedTile:[n,e.selectedTile[1]]})})},InputProps:{startAdornment:r.a.createElement(l.g,{position:"start"},"X"),"data-testid":"selected-x"}})),r.a.createElement(l.p,null,r.a.createElement(l.s,{className:t.textField,value:n[1],onChange:function(t){var n=parseInt(t.target.value);return n||(n=0),e.transform(function(e){return Object(m.a)({},e,{selectedTile:[e.selectedTile[0],n]})})},InputProps:{startAdornment:r.a.createElement(l.g,{position:"start"},"Y"),"data-testid":"selected-y"}}))))),r.a.createElement(l.t,{variant:"overline",align:"center"},"Console Coordinates"),r.a.createElement(l.n,{padding:"dense"},r.a.createElement(l.o,null,r.a.createElement(l.r,null,r.a.createElement(l.p,null,r.a.createElement(l.s,{disabled:!0,className:t.textField,value:n[0]/P+z,InputProps:{startAdornment:r.a.createElement(l.g,{position:"start"},"X"),"data-testid":"console-x"}})),r.a.createElement(l.p,null,r.a.createElement(l.s,{disabled:!0,className:t.textField,value:n[1]/F+A,InputProps:{startAdornment:r.a.createElement(l.g,{position:"start"},"Y"),"data-testid":"console-y"}})))))),r.a.createElement(y,{classes:t,open:Boolean(w),anchorEl:w,onClose:function(){return k(null)},anchorOrigin:{vertical:"top",horizontal:"right"}}),r.a.createElement(l.f,{tabIndex:-1,className:t.goto,onClick:function(){return o()}},r.a.createElement(d.f,null)),r.a.createElement(E,{math:{divisors:[P,F],modifiers:[z,A]}})),r.a.createElement("div",{className:t.rightPanel},r.a.createElement(v,{selectMap:i,selectedMap:c}),r.a.createElement(b,{zoom:s,centerCoords:o,favorites:g,selectedMap:c,modFavorites:f,math:{divisors:[P,F],modifiers:[z,A]}}),r.a.createElement(l.d,{className:t.helpButton,onClick:function(e){var t=e.currentTarget;k(t)}},r.a.createElement(d.b,{style:{height:"100%",width:"100%",transform:"scale(1.21, 1.21)"}}))));function X(e,t,n){var a=parseInt(e.target.value);return a||(a=0),M(function(e){var r=e[t];return r[n]=a,Object(m.a)({},e,Object(u.a)({},t,r))})}}),k=Object(c.withStyles)(function(e){return{main:{backgroundImage:"url(".concat(f.a,")"),display:"block",width:9600,height:9600},image:{verticalAlign:"middle",width:1200,height:1200},imageUnclicked:{cursor:"grab"},imageClicked:{cursor:"grabbing"},noClick:{userSelect:"none"}}})(function(e){var t=e.classes,n=Object(a.useState)({initial:[0,0],mouse:[0,0],pos:[-2200,-2e3],selectedTile:[139,192]}),o=Object(p.a)(n,2),i=o[0],c=o[1],g=Object(a.useState)("cogmap1"),f=Object(p.a)(g,2),E=f[0],v=f[1],b=Object(a.useState)({cogmap1:[{name:"Telescience",location:[112,123]},{name:"AI core",location:[137,146]},{name:"Captain's Locker",location:[85,166]}],cogmap2:[{name:"Telescience",location:[104,120]},{name:"AI core",location:[190,220]}],faintSignal:[{name:"RobustTec Implants",location:[266,132]},{name:"Phaser",location:[285,162]}],oshan:[{name:"AI Core",location:[196,160]},{name:"Telescience",location:[181,174]}],clarion:[{name:"AI Core",location:[133,99]},{name:"Telescience",location:[153,107]}],destiny:[],samedi:[],horizon:[]}),O=Object(p.a)(b,2),y=O[0],k=O[1],j=Object(a.useState)(7),x=Object(p.a)(j,2),C=x[0],S=x[1],N=C/10,T=Object(a.useState)(!1),I=Object(p.a)(T,2),M=I[0],P=I[1],F=Object(a.useState)(!1),z=Object(p.a)(F,2),A=z[0],X=z[1],D=Object(a.useState)({mouse:[0,0],target:null}),Y=Object(p.a)(D,2),W=Y[0],H=Y[1];Object(a.useEffect)(function(){var e=function(){var e=localStorage.getItem("telescienceFavorites");if(!e)return!1;e=JSON.parse(e);var t=Object.keys(e),n=Object.keys(y);if(t.length!==n.length||JSON.stringify(t)!==JSON.stringify(n)){var a=n.filter(function(e){return!t.includes(e)}),r=t.filter(function(e){return!n.includes(e)});a.length&&a.forEach(function(t){var n={};n[t]=y[t],e=Object(m.a)({},e,n)}),r.length&&r.forEach(function(n){var a={};t.pop.apply(t,Object(s.a)(r)),t.forEach(function(t){a[t]=e[t]}),e=a})}return e}();e&&k(e)},[]),Object(a.useEffect)(function(){var e;"string"!==typeof(e=y)&&(e=JSON.stringify(e)),localStorage.setItem("telescienceFavorites",e)},[JSON.stringify(y)]);var L={divStyle:{transformOrigin:"0 0",transform:"translate3D(".concat(i.pos[0],"px, ").concat(i.pos[1],"px, 0) scale(").concat(N,")")},selectorStyle:Object(m.a)({zIndex:1,position:"fixed"},_(i.selectedTile))};return r.a.createElement("div",{className:t.noClick,onKeyDown:function(e){return function(e){if(A){var t=e.key;if(e.altKey){if("5"===t||" "===t)return U(C);var n={w:[0,1],a:[-1,0],s:[0,-1],d:[1,0],ArrowUp:[0,1],ArrowLeft:[-1,0],ArrowDown:[0,-1],ArrowRight:[1,0],1:[-1,-1],2:[0,-1],3:[1,-1],4:[-1,0],6:[1,0],7:[-1,1],8:[0,1],9:[1,1],"+":2,"-":-2};if(Object.keys(n).includes(t)){var a=n[t];if("+"===t||"-"===t){if("+"===t&&C>=15)return;if("-"===t&&C<=3)return;return S(C+a),U(C+a)}return U(C,a),c(function(e){return Object(m.a)({},e,{selectedTile:[e.selectedTile[0]+a[0],e.selectedTile[1]+a[1]]})})}}}}(e)},tabIndex:0},"oshan"===E&&function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return r.a.createElement(r.a.Fragment,null,t.map(function(e,t){return e.pos||(e.pos=[150+t,151+t]),e.pos[0]--,e.pos[1]=300-e.pos[1],r.a.createElement("a",{key:"easteregg#".concat(t+1),style:{color:"inherit"},href:e.link,rel:"noopener noreferrer",target:"_blank"},r.a.createElement(d.c,{style:Object(m.a)({},q.apply(void 0,Object(s.a)(e.pos)),{color:e.color})}))}))}({link:0===Math.round(Math.random())?"https://www.youtube.com/watch?v=6E5m_XtCX3c":"https://youtu.be/3PgwDlbdew8?t=10",pos:[150,150]},{link:"https://youtu.be/XqZsoesa55w?t=12",pos:[3,4],color:"#6D7373"}),r.a.createElement(w,{selectedTile:i.selectedTile,centerCoords:U,selectMap:v,selectedMap:E,zoom:C,favorites:y,modFavorites:k,transform:c}),r.a.createElement("div",{onMouseLeave:function(){return P(!1),X(!1)},onMouseEnter:function(){return X(!0)},onContextMenu:G,onClick:function(e){var t=e.clientX,n=e.clientY;if(i.mouse[0]===t&&i.mouse[1]===n)return c(function(e){return Object(m.a)({},e,{selectedTile:R.apply(void 0,Object(s.a)(B(t,n)))})})},onMouseDown:function(e){P(!0);var t=e.clientX,n=e.clientY;return c(function(e){return Object(m.a)({},e,{mouse:[t,n],initial:B(t,n,1)})})},onMouseUp:function(){return P(!1)},onMouseMove:function(e){if(M){var t=e.clientX,n=e.clientY;return c(function(e){return Object(m.a)({},e,{pos:B(t,n,1,e.initial)})})}},onWheel:J},r.a.createElement("div",{className:t.main,style:L.divStyle},r.a.createElement(h,{image:"".concat(t.image," ").concat(t.noClick," ").concat(M?t.imageClicked:t.imageUnclicked),selectedMap:E})),y[E].length>0&&y[E].map(function(e){return r.a.createElement("svg",{key:"".concat(e.location.toString(),"_SVG"),onContextMenu:function(t){return t.stopPropagation(),t.preventDefault(),k(function(t){return Object(m.a)({},t,Object(u.a)({},E,t[E].filter(function(t){return t!==e})))})},style:Object(m.a)({zIndex:1,position:"fixed"},_(e.location)),className:"".concat(t.noClick," ").concat(t.imageUnclicked),width:32*N,height:32*N},r.a.createElement("rect",{width:"".concat(32*N,"px"),height:"".concat(32*N,"px"),stroke:"#39FF14",fill:"transparent",strokeWidth:"4"}))})),r.a.createElement(function(e){return r.a.createElement("svg",{onClick:e.onClick,onWheel:e.onWheel?e.onWheel:J,onMouseDown:e.mouseDown,onMouseEnter:function(){return X(!0)},onContextMenu:e.onContextMenu?e.onContextMenu:function(e){return e.preventDefault()},className:"".concat(t.noClick," ").concat(t.imageUnclicked),width:32*N,height:32*N,style:e.style},r.a.createElement("rect",{width:"".concat(32*N,"px"),height:"".concat(32*N,"px"),stroke:e.color,fill:"transparent",strokeWidth:"4"}))},{color:"white",style:L.selectorStyle,onClick:function(){return c(function(e){return Object(m.a)({},e,{selectedTile:[1,1]})})},onContextMenu:G}),r.a.createElement(l.j,{MenuListProps:{disablePadding:!0},open:Boolean(W.target),anchorEl:W.target,anchorPosition:{top:W.mouse[1],left:W.mouse[0]},anchorReference:"anchorPosition",onContextMenu:function(e){return e.preventDefault(),K()},onClose:function(){return K()}},r.a.createElement(l.a,{size:"small",onClick:function(e){return K(),k(function(e){return e[E].push({name:"Favorite #".concat(e[E].length+1),location:R.apply(void 0,Object(s.a)(B(W.mouse[0],W.mouse[1])))}),e})}},"favorite")));function R(e,t){return[1+(e-e%32)/32,300-(t-t%32)/32]}function _(e,t){if(!t&&"object"===typeof e){var n=e,a=Object(p.a)(n,2);e=a[0],t=a[1]}return{left:32*(e-1)*N+i.pos[0],top:32*-(t-300)*N+i.pos[1]}}function B(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:N,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:i.pos;return[e-a[0],t-a[1]].map(function(e){return e/n})}function J(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!M){var n=e.deltaY,a=e.clientX,r=e.clientY;if(n>0){if(2===C)return;S(C-t)}else{if(15===C)return;S(C+t)}var o=(n>0?C-t:C+t)/10,i=B(a,r),l=Object(p.a)(i,2),s=l[0],u=l[1];return c(function(e){return Object(m.a)({},e,{pos:[-s*o+a,-u*o+r]})})}}function U(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0],n=arguments.length>2?arguments[2]:void 0,a=n||i.selectedTile;S(e);var r=e/10,o=32*(a[0]-1+t[0])*r,l=32*-(a[1]-303+t[1])*r,s=window.screen.width/2,u=window.screen.height/2;return c(function(e){return Object(m.a)({},e,{pos:[-o+s,-l+u]})})}function G(e){e.preventDefault();var t=e.clientX,n=e.clientY,a=e.target;return H(function(e){return Object(m.a)({},e,{target:a,mouse:[t,n]})})}function K(){return H(function(e){return Object(m.a)({},e,{target:null})})}function q(e,t){return{zIndex:2,position:"absolute",left:32*e*N+i.pos[0],top:32*t*N+i.pos[1],width:32*N,height:32*N}}}),j=Object(c.createMuiTheme)({palette:{type:"dark"},typography:{useNextVariants:!0}}),x=function(e){return r.a.createElement(c.MuiThemeProvider,{theme:j},r.a.createElement(l.c,null),r.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(5570);i.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[5421,2,1]]]);
//# sourceMappingURL=main.b94c6d81.chunk.js.map