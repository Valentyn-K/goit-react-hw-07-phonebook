(this["webpackJsonphw7-async-redux-phonebook"]=this["webpackJsonphw7-async-redux-phonebook"]||[]).push([[4],{119:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},120:function(e,t,n){"use strict";var a=n(119);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=r.default.memo(r.default.forwardRef((function(t,n){return r.default.createElement(c.default,(0,o.default)({ref:n},t),e)})));0;return n.muiName=c.default.muiName,n};var o=a(n(121)),r=a(n(0)),c=a(n(123))},121:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},122:function(e,t,n){"use strict";var a=n(119);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),r=(0,a(n(120)).default)(o.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");t.default=r},123:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(1),o=n(4),r=n(0),c=(n(3),n(11)),i=n(17),l=n(18),s=r.forwardRef((function(e,t){var n=e.children,i=e.classes,s=e.className,u=e.color,f=void 0===u?"inherit":u,m=e.component,d=void 0===m?"svg":m,p=e.fontSize,v=void 0===p?"default":p,_=e.htmlColor,h=e.titleAccess,b=e.viewBox,g=void 0===b?"0 0 24 24":b,x=Object(o.a)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return r.createElement(d,Object(a.a)({className:Object(c.a)(i.root,s,"inherit"!==f&&i["color".concat(Object(l.a)(f))],"default"!==v&&i["fontSize".concat(Object(l.a)(v))]),focusable:"false",viewBox:g,color:_,"aria-hidden":!h||void 0,role:h?"img":void 0,ref:t},x),n,h?r.createElement("title",null,h):null)}));s.muiName="SvgIcon";var u=Object(i.a)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(s)},128:function(e,t,n){e.exports={contactCard:"Contact_contactCard__240Y-",imgcontainer:"Contact_imgcontainer__3PbyF",contactImage:"Contact_contactImage__1LS6g",deleteIcon:"Contact_deleteIcon__2zk6-"}},129:function(e,t,n){e.exports={contactList:"ContactList_contactList__VQ7B4"}},130:function(e,t,n){e.exports={enter:"translate_enter__1mtOx",enterActive:"translate_enterActive__34n3O",exit:"translate_exit__WK0Iy",exitActive:"translate_exitActive__1r0_B"}},132:function(e,t,n){"use strict";n.r(t);var a=n(26),o=n(0),r=n.n(o),c=n(118),i=n(117),l=n(122),s=n.n(l),u=n(128),f=n.n(u),m=function(e){var t=e.name,n=e.number,a=e.id,o=e.deleteContact;return r.a.createElement("li",{className:f.a.contactCard},r.a.createElement("div",{className:f.a.imgcontainer},r.a.createElement("img",{className:f.a.contactImage,src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/768px-Google_Contacts_icon.svg.png",alt:"contact-avatar"}),r.a.createElement("p",null,t)),r.a.createElement("p",null,n),r.a.createElement(s.a,{className:f.a.deleteIcon,onClick:function(){return o(a)}}))},d={deleteContact:n(38).b},p=Object(a.b)(null,d)(m),v=n(129),_=n.n(v),h=n(130),b=n.n(h),g=function(e){var t=e.filteredContacts;return t.length>0&&r.a.createElement(c.a,{component:"ul",className:_.a.contactList},t.map((function(e){return r.a.createElement(i.a,{key:e.id,timeout:250,unmountOnExit:!0,classNames:b.a},r.a.createElement(p,e))})))},x=n(27);t.default=Object(a.b)((function(e){return{filteredContacts:Object(x.a)(e)}}),null)(g)}}]);
//# sourceMappingURL=4.5f443726.chunk.js.map