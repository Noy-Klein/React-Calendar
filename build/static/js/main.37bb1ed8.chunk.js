(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(e,t,n){"use strict";n.r(t);var a,r,i,o,l,s,c,u,p,d,b,h,m,v,y,f,E,g,O,j,w,k,D,C,M,z,N=n(0),T=n.n(N),x=n(18),Y=n.n(x),A=(n(53),n(8)),S=n(9),F=n(11),_=n(10),B=n(12),W=(n(22),n(58),function(e){function t(){return Object(A.a)(this,t),Object(F.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(B.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return T.a.createElement("div",{className:"spinner"},T.a.createElement("div",{className:"bounce1"}),T.a.createElement("div",{className:"bounce2"}),T.a.createElement("div",{className:"bounce3"}))}}]),t}(N.Component)),I=(n(60),n(7)),L=n(13),P=n(14),H=n(19),J=Object(I.b)("store")(a=Object(I.c)(a=function(e){function t(){var e,n;Object(A.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(F.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){window.addEventListener("keyup",n.keyHandling),n.renderToday(),n.props.store.getEvents(),n.props.store.getHolidays()},n.keyHandling=function(e){n.props.store.daysEventsModal||n.props.store.addEventBtn||(39===e.keyCode&&n.next(),37===e.keyCode&&n.prev())},n.getMonthAxios=function(){n.props.store.getMonthDetails()},n.renderToday=function(){13===n.props.store.todaysMonth?(n.props.store.ifMonthIs13(),n.props.store.getMonthDetails()):0===n.props.store.todaysMonth?(n.props.store.ifMonthIs0(),n.props.store.getMonthDetails()):n.props.store.getMonthDetails()},n.renderMonth=function(){for(var e=[],t=[],a=1;a<=n.props.store.monthDetails[1];a++){var r=!0,i=!1,o=void 0;try{for(var l,s=n.props.store.events[Symbol.iterator]();!(r=(l=s.next()).done);r=!0){var c=l.value;c.day===a&&c.month===n.props.store.todaysMonth&&c.year===n.props.store.thisYear&&t.push({title:c.title,color:c.color,id:c._id})}}catch(d){i=!0,o=d}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}t.length>1?(new Date).getDate()===a&&(new Date).getMonth()+1===n.props.store.todaysMonth&&(new Date).getFullYear()===n.props.store.thisYear?e.push(T.a.createElement("div",{style:{position:"relative"},id:a,onClick:n.clickDay,key:a,className:"row"},T.a.createElement("span",{style:{backgroundColor:"blue",color:"white",borderRadius:"50%",padding:"5px"}},a)," ",T.a.createElement("div",{onClick:n.openEvent,id:t[0].id,style:{backgroundColor:t[0].color},className:"event",key:t[0].title},t[0].title)," ",T.a.createElement("div",{id:t[0].id,onClick:n.clickDay,style:{fontSize:"15px",color:"blue",margin:"0",cursor:"pointer"}},"...")," ")):e.push(T.a.createElement("div",{style:{position:"relative"},id:a,onClick:n.clickDay,key:a,className:"row"},a," ",T.a.createElement("div",{onClick:n.openEvent,id:t[0].id,style:{backgroundColor:t[0].color},className:"event",key:t[0].title},t[0].title)," ",T.a.createElement("div",{id:t[0].id,onClick:n.clickDay,style:{fontSize:"15px",color:"blue",margin:"0",cursor:"pointer"}},"...")," ")):(new Date).getDate()===a&&(new Date).getMonth()+1===n.props.store.todaysMonth&&(new Date).getFullYear()===n.props.store.thisYear?e.push(T.a.createElement("div",{style:{position:"relative"},id:a,onClick:n.clickDay,key:a,className:"row"},T.a.createElement("span",{style:{backgroundColor:"blue",color:"white",borderRadius:"50%",padding:"5px"}},a)," ",t.map(function(e){return T.a.createElement("div",{onClick:n.openEvent,id:e.id,style:{backgroundColor:e.color},className:"event",key:e.title},e.title)}))):e.push(T.a.createElement("div",{style:{position:"relative"},id:a,onClick:n.clickDay,key:a,className:"row"},a," ",t.map(function(e){return T.a.createElement("div",{onClick:n.openEvent,id:e.id,style:{backgroundColor:e.color},className:"event",key:e.title},e.title)}))),t=[]}if(8===n.props.store.monthDetails[0])return e;for(var u=n.props.store.monthDetails[0]-1,p=0;p<u;p++)e.unshift(T.a.createElement("div",{style:{backgroundColor:"rgba(172, 172, 172, 0.432)"},key:"emptydate".concat(p),className:"row"}));return e},n.prev=function(){n.props.store.prevMonth(),n.renderToday(),n.props.store.getEvents()},n.next=function(){n.props.store.nextMonth(),n.renderToday(),n.props.store.getEvents()},n.openEvent=function(e){n.props.store.openCurrModal(),n.props.store.clickOnEvent(e.target.id)},n.today=function(){n.props.store.returnToToday(),n.renderToday(),n.props.store.getEvents()},n.clickDay=function(e){n.props.store.getEventsOfDay(e.target.id),n.props.store.openDaysEvents()},n}return Object(B.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){if(this.props.store.events){var e=this.renderMonth();return T.a.createElement("div",null,T.a.createElement("div",{className:"header"},T.a.createElement("div",{className:"prev"},T.a.createElement(H.a,{className:"tooltip",arrow:6,fontSize:"10px",placement:"right",content:"Try Your Left Key!"},T.a.createElement("span",{style:{cursor:"pointer"},onClick:this.prev},T.a.createElement(L.a,{size:"2x",icon:P.a})))),T.a.createElement("h1",{className:"monthName"},this.props.store.monthNames[this.props.store.todaysMonth]," ",this.props.store.thisYear,this.props.store.todaysMonth!==(new Date).getMonth()+1||this.props.store.thisYear!==(new Date).getFullYear()?T.a.createElement("span",{className:"backToToday"},T.a.createElement(H.a,{arrow:6,fontSize:"10px",placement:"right",content:"Back To Today"},T.a.createElement(L.a,{onClick:this.today,icon:P.c}))):null),T.a.createElement("div",{className:"next"},T.a.createElement(H.a,{className:"tooltip",arrow:6,fontSize:"10px",placement:"left",content:"Try Your Right Key!"},T.a.createElement("span",{style:{cursor:"pointer"},onClick:this.next},T.a.createElement(L.a,{size:"2x",icon:P.b}))))),T.a.createElement("div",{className:"container"},T.a.createElement("div",{className:"row dayinweek"},this.props.store.screen>1019?"Sunday":"Sun"),T.a.createElement("div",{className:"row dayinweek"},this.props.store.screen>1019?"Monday":"Mon"),T.a.createElement("div",{className:"row dayinweek"},this.props.store.screen>1019?"Tuesday":"Tue"),T.a.createElement("div",{className:"row dayinweek"},this.props.store.screen>1019?"Wednesday":"Wed"),T.a.createElement("div",{className:"row dayinweek"},this.props.store.screen>1019?"Thursday":"Thu"),T.a.createElement("div",{className:"row dayinweek"},this.props.store.screen>1019?"Friday":"Fri"),T.a.createElement("div",{className:"row dayinweek"},this.props.store.screen>1019?"Saturday":"Sat"),e))}return T.a.createElement(W,null)}}]),t}(N.Component))||a)||a,R=n(21),U=n(3),K=n(5),X=n(4),$=(n(25),n(2)),q=(n(68),n(70),n(47)),G=Object(I.b)("store")(r=Object(I.c)((i=function(e){function t(){var e,n;Object(A.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return n=Object(F.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r))),Object(U.a)(n,"editDate",o,Object(K.a)(Object(K.a)(n))),Object(U.a)(n,"title",l,Object(K.a)(Object(K.a)(n))),Object(U.a)(n,"location",s,Object(K.a)(Object(K.a)(n))),Object(U.a)(n,"time",c,Object(K.a)(Object(K.a)(n))),Object(U.a)(n,"color",u,Object(K.a)(Object(K.a)(n))),Object(U.a)(n,"date",p,Object(K.a)(Object(K.a)(n))),Object(U.a)(n,"until",d,Object(K.a)(Object(K.a)(n))),Object(U.a)(n,"colors",b,Object(K.a)(Object(K.a)(n))),n.componentDidMount=function(){var e,t,a,r;n.props.currentEvent&&(n.props.store.color=n.props.currentEvent.color,n.color=n.props.currentEvent.color,n.location=n.props.currentEvent.location,n.title=n.props.currentEvent.title,n.time=n.props.currentEvent.time,e=1===n.props.currentEvent.day.toString().split("").length?"0"+n.props.currentEvent.day:n.props.currentEvent.day,t=1===n.props.currentEvent.month.toString().split("").length?"0"+n.props.currentEvent.month:n.props.currentEvent.month,a=1===n.props.currentEvent.tilDay.toString().split("").length?"0"+n.props.currentEvent.tilDay:n.props.currentEvent.tilDay,r=1===n.props.currentEvent.tilMonth.toString().split("").length?"0"+n.props.currentEvent.tilMonth:n.props.currentEvent.tilMonth,n.until="".concat(n.props.currentEvent.tilYear,"-").concat(r,"-").concat(a),n.date="".concat(n.props.currentEvent.year,"-").concat(t,"-").concat(e))},n.editStart=function(){n.editDate=!0},n.createColors=function(){var e=[],t=!0,a=!1,r=void 0;try{for(var i,o=n.colors[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var l=i.value;e.push(T.a.createElement("div",{key:l,className:"colorOption",id:l,onClick:n.pickColor,style:{backgroundColor:l}}))}}catch(s){a=!0,r=s}finally{try{t||null==o.return||o.return()}finally{if(a)throw r}}return e},Object(U.a)(n,"pickColor",h,Object(K.a)(Object(K.a)(n))),Object(U.a)(n,"change",m,Object(K.a)(Object(K.a)(n))),n.validation=function(){return n.date&&n.title&&n.location&&n.time&&n.color?1:n.date?n.title?n.location?n.time?n.color?void 0:(alert("You Forgot To Enter A Background Color..."),0):(alert("You Forgot To Enter A Time..."),0):(alert("You Forgot To Enter A Location..."),0):(alert("You Forgot To Enter A Title"),0):(alert("You Forgot To Enter A Date..."),0)},n.saveEvent=function(){if(0!==n.validation()){var e=n.date.split("-")[2];"0"===e.split("")[0]&&(e=e.split("")[1]);var t=n.date.split("-")[1];"0"===t.split("")[0]&&(t=t.split("")[1]);var a,r,i,o=n.date.split("-")[0];n.until?("0"===(a=n.until.split("-")[2]).split("")[0]&&(a=a.split("")[1]),"0"===(r=n.until.split("-")[1]).split("")[0]&&(r=r.split("")[1]),i=n.until.split("-")[0]):(a=e,r=t,i=o),a<e&&r<=t&&(a=e,r=t);var l={title:n.title,day:e,month:t,year:o,time:n.time,tilDay:a,tilMonth:r,tilYear:i,location:n.location,color:n.color};n.props.currentEvent?(l._id=n.props.currentEvent._id,n.props.store.saveEventChanges(l),n.props.store.closeAddForm(),n.props.store.closeCurrModal(),n.props.store.closeDaysEvents(),n.props.store.eventEdited()):(n.props.store.addEvent(l),n.props.store.closeAddForm(),n.props.store.eventSaved())}},n.openkb=function(){n.props.store.openkeyboard()},Object(U.a)(n,"addEmoji",v,Object(K.a)(Object(K.a)(n))),Object(U.a)(n,"changeDate",y,Object(K.a)(Object(K.a)(n))),n}return Object(B.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e,t=this,n=this.props.store.todaysMonth.toString();1===n.split("").length&&(n="0"+n);var a=this.createColors();return e=this.props.store.wantedDay&&1===this.props.store.wantedDay.split("").length?"0"+this.props.store.wantedDay:this.props.store.wantedDay,1===this.props.store.wherePlusWasClicked&&this.changeDate(this.props.store.thisYear+"-"+n+"-"+e),T.a.createElement("div",{style:{textAlign:"center",backgroundImage:"linear-gradient(-90deg, ".concat(this.color,", ").concat(this.color,", blue)")},className:"formContainer"},this.props.currentEvent?T.a.createElement("div",{style:{float:"left"},className:"x",onClick:this.props.store.goBack},T.a.createElement(L.a,{icon:P.a,size:"1x"})):T.a.createElement("div",{className:"x",style:{float:"right",marginRight:"5px"},onClick:this.props.store.closeAddForm},T.a.createElement(L.a,{icon:P.e,size:"1x"})),T.a.createElement("h2",{className:"title addTitle"},"Add An Event"),T.a.createElement("span",null,T.a.createElement("div",{className:"category"},"Start: "),T.a.createElement("input",{className:"input",type:"date",min:this.props.store.thisYear+"-"+n+"-01",name:"date",value:this.date,onChange:this.change})),T.a.createElement("br",null),0===this.props.store.wherePlusWasClicked?T.a.createElement("span",null,T.a.createElement("div",{className:"category"},"End: "),T.a.createElement("input",{className:"input",type:"date",min:this.props.store.thisYear+"-"+n+"-01",name:"until",value:this.until,onChange:this.change})):T.a.createElement("span",null,T.a.createElement("span",{className:"category"},"End: "),T.a.createElement("input",{className:"input",type:"date",min:this.props.store.thisYear+"-"+n+"-"+e,name:"until",value:this.until,onChange:this.change})),T.a.createElement("br",null),T.a.createElement("div",{className:"category"},"Title: "),T.a.createElement("input",{className:"input shorter",type:"text",placeholder:"Title",name:"title",value:this.title,onChange:this.change}),T.a.createElement("button",{className:"emoji",type:"button",onClick:this.openkb},this.props.store.openkb?T.a.createElement("img",{src:"https://png.pngtree.com/svg/20160826/keyboard_486414.png",alt:"keyboard",height:"15px",width:"15px"}):T.a.createElement("img",{height:"15px",width:"15px",src:"https://png.pngtree.com/svg/20170620/emoji_happy_1159202.png",alt:"emoji"})),T.a.createElement("br",null),this.props.store.openkb?T.a.createElement("div",null,T.a.createElement(q.a,{showPreview:!1,onSelect:this.addEmoji,set:"emojione"})):null,T.a.createElement("div",{className:"category"},"Location :"),T.a.createElement("input",{className:"input",type:"text",placeholder:"Location",name:"location",value:this.location,onChange:this.change}),T.a.createElement("br",null),T.a.createElement("div",{className:"category"},"Time: "),T.a.createElement("input",{className:"input",type:"time",placeholder:"From",name:"time",value:this.time,onChange:this.change}),T.a.createElement("div",{className:"title addTitle"},"Pick A Background Color:"),T.a.createElement("div",{className:"colorContainer"},a.map(function(e){return e.props.style.backgroundColor===t.color?(e.props.style.border="2px solid black",e.props.style.height="36px",e.props.style.width="36px",e):e})),T.a.createElement("button",{type:"button",className:"btn addTitle",onClick:this.saveEvent},"Save"))}}]),t}(N.Component),o=Object(X.a)(i.prototype,"editDate",[$.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),l=Object(X.a)(i.prototype,"title",[$.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),s=Object(X.a)(i.prototype,"location",[$.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),c=Object(X.a)(i.prototype,"time",[$.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),u=Object(X.a)(i.prototype,"color",[$.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),p=Object(X.a)(i.prototype,"date",[$.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),d=Object(X.a)(i.prototype,"until",[$.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),b=Object(X.a)(i.prototype,"colors",[$.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return["#bebebe","#ff4500","#20b2aa","#87cefa","#dda0dd","#f4a460","#db7093"]}}),h=Object(X.a)(i.prototype,"pickColor",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.props.store.color=t.target.id,e.color=t.target.id}}}),m=Object(X.a)(i.prototype,"change",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e[t.target.name]=t.target.value}}}),v=Object(X.a)(i.prototype,"addEmoji",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.title+=t.native}}}),y=Object(X.a)(i.prototype,"changeDate",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.date=t}}}),r=i))||r)||r,Q=Object(I.b)("store")(f=Object(I.c)(f=function(e){function t(){var e,n;Object(A.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(F.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).open=function(){n.props.store.color=null,n.props.store.openFromWhere(0),n.props.store.openAddForm()},n}return Object(B.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return T.a.createElement("div",null,T.a.createElement("div",null,T.a.createElement(H.a,{arrow:6,fontSize:"12px",placement:"top",content:"Add A New Event"},T.a.createElement("div",{className:"addEvent",onClick:this.open},T.a.createElement(L.a,{size:"3x",icon:P.d})),T.a.createElement(R.a,{contentStyle:{backgroundImage:"linear-gradient(-90deg, ".concat(this.props.store.color,", ").concat(this.props.store.color,", blue)"),border:"none"},open:this.props.store.addEventBtn,closeOnDocumentClick:!0,onClose:this.props.store.closeAddForm},T.a.createElement(G,null)))),this.props.store.saved?T.a.createElement("div",{className:"savedMessage"},"Your Event Was Saved Successfully!"):null,this.props.store.deleted?T.a.createElement("div",{className:"savedMessage"},"Your Event Was Deleted"):null,this.props.store.edited?T.a.createElement("div",{className:"savedMessage"},"Your Changes Were Saved"):null)}}]),t}(N.Component))||f)||f,V=Object(I.b)("store")(E=Object(I.c)(E=function(e){function t(){return Object(A.a)(this,t),Object(F.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(B.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return this.props.store.currentEvent?T.a.createElement("div",{className:"formContainer"},T.a.createElement("span",{className:"x",style:{float:"right",marginRight:"5px"},onClick:this.props.store.closeCurrModal},"X"),T.a.createElement("div",null,this.props.store.currentEvent.title)):null}}]),t}(N.Component))||E)||E,Z=Object(I.b)("store")(g=Object(I.c)((O=function(e){function t(){var e,n;Object(A.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return n=Object(F.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r))),Object(U.a)(n,"wantToDelete",j,Object(K.a)(Object(K.a)(n))),Object(U.a)(n,"okDelete",w,Object(K.a)(Object(K.a)(n))),Object(U.a)(n,"titleToDelete",k,Object(K.a)(Object(K.a)(n))),Object(U.a)(n,"currentEvent",D,Object(K.a)(Object(K.a)(n))),Object(U.a)(n,"close",C,Object(K.a)(Object(K.a)(n))),Object(U.a)(n,"findEvent",M,Object(K.a)(Object(K.a)(n))),n.deleteEvent=function(e){n.findEvent(e.target.id),n.wantToDelete=!0,n.okDelete=window.confirm('Are You Sure You Want To Delete "'.concat(n.titleToDelete.title,'" ?')),n.okDelete?(n.props.store.deleteEvent(e.target.id),n.props.store.eventDeleted(),n.close(),n.props.store.closeDaysEvents()):n.wantToDelete=!1,n.findEvent(null)},n.addEventInDay=function(){n.props.store.openFromWhere(1),n.props.store.openAddForm()},n.edit=function(e){n.props.store.wantToEdit(),n.currentEvent=n.props.store.events.find(function(t){return t._id===e.target.id})},n.saveChanges=function(){n.props.store.saveChanges()},n}return Object(B.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this;return this.props.store.daysEvents&&this.props.store.daysEvents.length>0?T.a.createElement(R.a,{open:this.props.store.daysEventsModal,closeOnDocumentClick:!0,onClose:this.props.store.closeDaysEvents},T.a.createElement("div",{className:"scroll"},this.props.store.editMode?null:T.a.createElement("div",{style:{float:"right"},className:"x",onClick:this.props.store.closeDaysEvents},T.a.createElement(L.a,{icon:P.e,size:"1x"})),this.props.store.editMode?T.a.createElement(G,{currentEvent:this.currentEvent}):T.a.createElement("div",null,T.a.createElement("h3",{className:"title"},"Events On ",this.props.store.wantedDay,"/",this.props.store.todaysMonth,"/",this.props.store.thisYear),T.a.createElement("div",null,this.props.store.daysEvents.map(function(t){return T.a.createElement("div",{className:"eventInPopup",style:{backgroundImage:"linear-gradient(-90deg, ".concat(t.color,", ").concat(t.color,", blue)")},key:t._id},T.a.createElement("div",{className:"title"},T.a.createElement("h4",null,t.title)),T.a.createElement("div",null,"From : ",t.day,"/",t.month,"/",t.year),t.day===t.tilDay&&t.month===t.tilMonth&&t.year===t.tilYear||!t.tilDay?T.a.createElement("div",null,"Until : ",t.day,"/",t.month,"/",t.year):T.a.createElement("div",null,"Until : ",t.tilDay,"/",t.tilMonth,"/",t.tilYear),T.a.createElement("div",null,"Location: ",t.location),T.a.createElement("div",null,"Time: ",t.time),T.a.createElement("div",{className:"trash clickable"},T.a.createElement("img",{id:t._id,onClick:e.deleteEvent,height:"20px",width:"20px",src:"http://freevector.co/wp-content/uploads/2012/02/65186-trash-can.png",alt:"trash"})),T.a.createElement("div",{className:"editbtn clickable"},T.a.createElement("img",{id:t._id,onClick:e.edit,alt:"edit",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Edit_font_awesome.svg/512px-Edit_font_awesome.svg.png",height:"20px",width:"20px"})))})),T.a.createElement("br",null),T.a.createElement("br",null),T.a.createElement("div",{className:"addOnDay"},T.a.createElement(H.a,{arrow:6,fontSize:"15px",placement:"top",content:"Add An Event For This Day"},T.a.createElement("div",{onClick:this.addEventInDay},T.a.createElement(L.a,{size:"2x",icon:P.d}))))))):this.props.store.daysEvents&&0===this.props.store.daysEvents.length?T.a.createElement(R.a,{className:"modal",open:this.props.store.daysEventsModal,closeOnDocumentClick:!0,onClose:this.props.store.closeDaysEvents},T.a.createElement("div",null,T.a.createElement("div",{style:{float:"right"},className:"x",onClick:this.props.store.closeDaysEvents},"X"),T.a.createElement("div",{className:"noEvents"},T.a.createElement("p",null,"No Events For This Day Yet...")),T.a.createElement("div",{className:"addOnDay"},T.a.createElement(H.a,{arrow:6,fontSize:"15px",placement:"left",content:"Add An Event For This Day"},T.a.createElement("div",{onClick:this.addEventInDay},T.a.createElement(L.a,{size:"2x",icon:P.d})))))):T.a.createElement(R.a,{open:this.props.store.daysEventsModal,closeOnDocumentClick:!0,onClose:this.props.store.closeDaysEvents},T.a.createElement(W,null))}}]),t}(N.Component),j=Object(X.a)(O.prototype,"wantToDelete",[$.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),w=Object(X.a)(O.prototype,"okDelete",[$.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),k=Object(X.a)(O.prototype,"titleToDelete",[$.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=Object(X.a)(O.prototype,"currentEvent",[$.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=Object(X.a)(O.prototype,"close",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.wantToDelete=!1}}}),M=Object(X.a)(O.prototype,"findEvent",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.titleToDelete=null===t?null:e.props.store.daysEvents.find(function(e){return e._id===t})}}}),g=O))||g)||g,ee=Object(I.b)("store")(z=Object(I.c)(z=function(e){function t(){return Object(A.a)(this,t),Object(F.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(B.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return T.a.createElement("div",{className:"App"},T.a.createElement(J,null),this.props.store.modal?T.a.createElement(V,null):null,T.a.createElement(Z,null),T.a.createElement(Q,null))}}]),t}(N.Component))||z)||z;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te,ne,ae,re,ie,oe,le,se,ce,ue,pe,de,be,he,me,ve,ye,fe,Ee,ge,Oe,je,we,ke,De,Ce,Me,ze,Ne,Te,xe,Ye,Ae,Se,Fe,_e,Be,We,Ie,Le,Pe,He,Je,Re,Ue,Ke,Xe,$e,qe,Ge,Qe=n(16),Ve=n.n(Qe),Ze=new(te=function e(){var t=this;Object(A.a)(this,e),Object(U.a)(this,"color",ne,this),Object(U.a)(this,"eventToEdit",ae,this),Object(U.a)(this,"editMode",re,this),Object(U.a)(this,"edited",ie,this),Object(U.a)(this,"deleted",oe,this),Object(U.a)(this,"saved",le,this),Object(U.a)(this,"letters",se,this),Object(U.a)(this,"wherePlusWasClicked",ce,this),Object(U.a)(this,"wantedDay",ue,this),Object(U.a)(this,"screen",pe,this),Object(U.a)(this,"customColor",de,this),Object(U.a)(this,"openkb",be,this),Object(U.a)(this,"daysEventsModal",he,this),Object(U.a)(this,"modal",me,this),Object(U.a)(this,"currentEvent",ve,this),Object(U.a)(this,"daysEvents",ye,this),Object(U.a)(this,"addEventBtn",fe,this),Object(U.a)(this,"events",Ee,this),Object(U.a)(this,"monthDetails",ge,this),Object(U.a)(this,"thisYear",Oe,this),Object(U.a)(this,"todaysMonth",je,this),Object(U.a)(this,"monthNames",we,this),Object(U.a)(this,"holidays",ke,this),Object(U.a)(this,"wantToEdit",De,this),Object(U.a)(this,"saveChanges",Ce,this),Object(U.a)(this,"goBack",Me,this),Object(U.a)(this,"eventEdited",ze,this),Object(U.a)(this,"eventSaved",Ne,this),Object(U.a)(this,"eventDeleted",Te,this),Object(U.a)(this,"openFromWhere",xe,this),Object(U.a)(this,"openkeyboard",Ye,this),Object(U.a)(this,"closekeyboard",Ae,this),Object(U.a)(this,"openDaysEvents",Se,this),Object(U.a)(this,"closeDaysEvents",Fe,this),Object(U.a)(this,"openCurrModal",_e,this),Object(U.a)(this,"closeCurrModal",Be,this),Object(U.a)(this,"returnToToday",We,this),Object(U.a)(this,"openAddForm",Ie,this),Object(U.a)(this,"closeAddForm",Le,this),Object(U.a)(this,"getEvents",Pe,this),Object(U.a)(this,"getMonthDetails",He,this),Object(U.a)(this,"nextMonth",Je,this),Object(U.a)(this,"prevMonth",Re,this),Object(U.a)(this,"ifMonthIs13",Ue,this),Object(U.a)(this,"ifMonthIs0",Ke,this),Object(U.a)(this,"addEvent",Xe,this),Object(U.a)(this,"saveEventChanges",$e,this),this.clickOnEvent=function(e){Ve.a.get("/findEvent/"+e).then(function(e){t.currentEvent=e.data})},this.getEventsOfDay=function(e){var n;e.split("").length>2?Ve.a.get("/findEvent/"+e).then(function(e){n=e.data.day.toString(),t.wantedDay=n}).then(function(){Ve.a.get("/findByDate/".concat(n,"/").concat(t.todaysMonth,"/").concat(t.thisYear)).then(function(e){t.daysEvents=e.data})}):(n=e,t.wantedDay=n,Ve.a.get("/findByDate/".concat(n,"/").concat(t.todaysMonth,"/").concat(t.thisYear)).then(function(e){t.daysEvents=e.data}))},this.deleteEvent=function(e){Ve.a.delete("/deleteevent/"+e).then(function(n){var a=t.events.find(function(t){return t._id===e}),r=t.events.indexOf(a);t.events.splice(r,1);var i=t.daysEvents.indexOf(a);t.daysEvents.splice(i,1)})},Object(U.a)(this,"getHolidays",qe,this),this.bigLetters=function(){t.letters=!1},this.smallLetters=function(){t.letters=!0},Object(U.a)(this,"goToTheEventsDay",Ge,this)},ne=Object(X.a)(te.prototype,"color",[$.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ae=Object(X.a)(te.prototype,"eventToEdit",[$.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),re=Object(X.a)(te.prototype,"editMode",[$.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),ie=Object(X.a)(te.prototype,"edited",[$.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),oe=Object(X.a)(te.prototype,"deleted",[$.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),le=Object(X.a)(te.prototype,"saved",[$.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),se=Object(X.a)(te.prototype,"letters",[$.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),ce=Object(X.a)(te.prototype,"wherePlusWasClicked",[$.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),ue=Object(X.a)(te.prototype,"wantedDay",[$.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),pe=Object(X.a)(te.prototype,"screen",[$.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return document.documentElement.clientWidth}}),de=Object(X.a)(te.prototype,"customColor",[$.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),be=Object(X.a)(te.prototype,"openkb",[$.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),he=Object(X.a)(te.prototype,"daysEventsModal",[$.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),me=Object(X.a)(te.prototype,"modal",[$.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),ve=Object(X.a)(te.prototype,"currentEvent",[$.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ye=Object(X.a)(te.prototype,"daysEvents",[$.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),fe=Object(X.a)(te.prototype,"addEventBtn",[$.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Ee=Object(X.a)(te.prototype,"events",[$.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),ge=Object(X.a)(te.prototype,"monthDetails",[$.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Oe=Object(X.a)(te.prototype,"thisYear",[$.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return(new Date).getFullYear()}}),je=Object(X.a)(te.prototype,"todaysMonth",[$.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return(new Date).getMonth()+1}}),we=Object(X.a)(te.prototype,"monthNames",[$.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return["none","January","February","March","April","May","June","July","August","September","October","November","December"]}}),ke=Object(X.a)(te.prototype,"holidays",[$.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),De=Object(X.a)(te.prototype,"wantToEdit",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.editMode=!0}}}),Ce=Object(X.a)(te.prototype,"saveChanges",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.editMode=!1}}}),Me=Object(X.a)(te.prototype,"goBack",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.editMode=!1}}}),ze=Object(X.a)(te.prototype,"eventEdited",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.edited=!0,setTimeout(function(){e.edited=!1},2e3)}}}),Ne=Object(X.a)(te.prototype,"eventSaved",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.saved=!0,setTimeout(function(){e.saved=!1},2e3)}}}),Te=Object(X.a)(te.prototype,"eventDeleted",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.deleted=!0,setTimeout(function(){e.deleted=!1},2e3)}}}),xe=Object(X.a)(te.prototype,"openFromWhere",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.color=null,e.wherePlusWasClicked=t}}}),Ye=Object(X.a)(te.prototype,"openkeyboard",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.openkb=!e.openkb}}}),Ae=Object(X.a)(te.prototype,"closekeyboard",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.openkb=!1}}}),Se=Object(X.a)(te.prototype,"openDaysEvents",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.modal=!1,e.addEventBtn=!1,e.daysEventsModal=!0}}}),Fe=Object(X.a)(te.prototype,"closeDaysEvents",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.daysEventsModal=!1,e.editMode=!1}}}),_e=Object(X.a)(te.prototype,"openCurrModal",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.daysEventsModal=!1,e.addEventBtn=!1,e.modal=!0}}}),Be=Object(X.a)(te.prototype,"closeCurrModal",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.modal=!1}}}),We=Object(X.a)(te.prototype,"returnToToday",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.thisYear=(new Date).getFullYear(),e.todaysMonth=(new Date).getMonth()+1}}}),Ie=Object(X.a)(te.prototype,"openAddForm",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.daysEventsModal=!1,e.modal=!1,e.addEventBtn=!0}}}),Le=Object(X.a)(te.prototype,"closeAddForm",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.addEventBtn=!1}}}),Pe=Object(X.a)(te.prototype,"getEvents",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){Ve.a.get("/allevents").then(function(t){e.events=t.data})}}}),He=Object(X.a)(te.prototype,"getMonthDetails",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){Ve.a.get("/getdays/".concat(e.thisYear,"/").concat(e.todaysMonth)).then(function(t){e.monthDetails=t.data,e.monthDetails[0]+=2})}}}),Je=Object(X.a)(te.prototype,"nextMonth",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.todaysMonth+=1}}}),Re=Object(X.a)(te.prototype,"prevMonth",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.todaysMonth-=1}}}),Ue=Object(X.a)(te.prototype,"ifMonthIs13",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.thisYear=e.thisYear+1,e.todaysMonth=1}}}),Ke=Object(X.a)(te.prototype,"ifMonthIs0",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.thisYear=e.thisYear-1,e.todaysMonth=12}}}),Xe=Object(X.a)(te.prototype,"addEvent",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){Ve.a.post("/addevent",t).then(function(t){e.events.push(t.data)})}}}),$e=Object(X.a)(te.prototype,"saveEventChanges",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){Ve.a.post("/editEvent",t).then(function(n){var a=e.events.find(function(e){return e._id===t._id}),r=e.events.indexOf(a);e.events.splice(r,1,t),e.getEvents()})}}}),qe=Object(X.a)(te.prototype,"getHolidays",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){Ve.a.get("https://www.calendarindex.com/api/v1/holidays?country=US&year=2018&api_key=fb7b2b3d41fbfcdb55e4d92d781187fe203caea3").then(function(t){t.data.response.holidays.map(function(t){var n=t.date.split("-"),a=n[0],r=n[1],i=n[2].split(" ")[0];"0"===i.split("")[0]&&(i=i.split("")[1]),"0"===r.split("")[0]&&(r=r.split("")[1]);var o=t.end.split("-"),l=o[0],s=o[1],c=o[2][0]+""+o[2][1];e.holidays.push({_id:t.name,title:t.name,day:i,month:r,year:a,time:"00:00",tilDay:c,tilmonth:s,tilYear:l,location:"",image:void 0,color:"#66cdaa"})})})}}}),Ge=Object(X.a)(te.prototype,"goToTheEventsDay",[$.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,n){e.todaysMonth=t,e.thisYear=n}}}),te);window.store=Ze,Y.a.render(T.a.createElement(I.a,{store:Ze},T.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},22:function(e,t,n){},48:function(e,t,n){e.exports=n(117)},53:function(e,t,n){},58:function(e,t,n){},60:function(e,t,n){},70:function(e,t,n){}},[[48,2,1]]]);
//# sourceMappingURL=main.37bb1ed8.chunk.js.map