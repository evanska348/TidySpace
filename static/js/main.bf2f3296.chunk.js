(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{199:function(e,t,a){e.exports=a(453)},204:function(e,t,a){},453:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(27),l=a.n(o),s=(a(204),a(457)),i=a(456),c=a(18),m=a(22),u=a(25),d=a(23),h=a(24),p=a(9),f="/evanzhao/uw/TidySpace",b="/home",g=r.a.createContext(null),E=function(e){return function(t){return r.a.createElement(g.Consumer,null,function(a){return r.a.createElement(e,Object.assign({},t,{firebase:a}))})}},v=g,O=a(92),w=a.n(O),j=(a(300),a(302),{apiKey:"AIzaSyBObXMfhpLNUOPl05rMhkj0YRNJdjIEoWA",authDomain:"tidyspace.firebaseapp.com",databaseURL:"https://tidyspace.firebaseio.com",projectId:"tidyspace",storageBucket:"tidyspace.appspot.com",messagingSenderId:"367121613358"}),y=function e(){var t=this;Object(c.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,a){return t.auth.createUserWithEmailAndPassword(e,a)},this.doSignInWithEmailAndPassword=function(e,a){return t.auth.signInWithEmailAndPassword(e,a)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.user=function(e){return t.db.ref("users/".concat(e))},this.users=function(){return t.db.ref("users")},this.todo=function(e){return t.db.ref("todos/".concat(e))},this.todos=function(){return t.db.ref("todos")},this.area=function(e){return t.db.ref("area/".concat(e))},this.areas=function(){return t.db.ref("areas")},w.a.initializeApp(j),this.auth=w.a.auth(),this.db=w.a.database()},C=E(function(e){var t=e.firebase;return r.a.createElement(p.g,{className:"nav-link waves-effect waves-light",to:f,onClick:t.doSignOut},"Sign Out",r.a.createElement("i",{style:{paddingLeft:"5px"},class:"fa fa-sign-out","aria-hidden":"true"}))}),S=r.a.createContext(null),k=function(e){var t=function(t){function a(e){var t;return Object(c.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).state={authUser:null},t}return Object(h.a)(a,t),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.auth.onAuthStateChanged(function(t){t?e.setState({authUser:t}):e.setState({authUser:null})})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement(S.Provider,{value:this.state.authUser},r.a.createElement(e,this.props))}}]),a}(r.a.Component);return E(t)},x=a(458),N=a(36),L=function(e){return function(t){var a=function(a){function n(){return Object(c.a)(this,n),Object(u.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(h.a)(n,a),Object(m.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.listener=this.props.firebase.auth.onAuthStateChanged(function(a){e(a)||t.props.history.push(f)})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var a=this;return r.a.createElement(S.Consumer,null,function(n){return e(n)?r.a.createElement(t,a.props):null})}}]),n}(r.a.Component);return Object(N.a)(x.a,E)(a)}},A=(a(306),a(150),a(307),function(){return r.a.createElement(M,null)}),M=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).toggleCollapse=function(t){return function(){e.setState(function(e){return{collapseID:e.collapseID!==t?t:""}})}},e.state={dropdownOpen:!1},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(p.h,{color:"teal",dark:!0,expand:"md",scrolling:!0},r.a.createElement(p.i,{href:"/home"},r.a.createElement("strong",null,"TidySpace")),!this.state.isWideEnough&&r.a.createElement(p.k,{onClick:this.toggleCollapse("navbarCollapse1")}),r.a.createElement(p.c,{id:"navbarCollapse1",isOpen:this.state.collapseID,navbar:!0},r.a.createElement(p.j,{left:!0},r.a.createElement(p.f,null,r.a.createElement(p.g,{className:"nav-link waves-effect waves-light",to:b},"Spaces")),r.a.createElement(p.f,null,r.a.createElement(p.g,{className:"nav-link waves-effect waves-light",to:"/todos"},"Item")),r.a.createElement(p.f,null,r.a.createElement(p.g,{className:"nav-link waves-effect waves-light",to:"/account"},"Account")),r.a.createElement(p.j,{right:!0},r.a.createElement(p.f,null,r.a.createElement(C,null))))))}}]),t}(n.Component),I=function(){return r.a.createElement(p.h,{color:"teal",dark:!0,expand:"md",scrolling:!0},r.a.createElement(p.i,null,r.a.createElement("strong",null,"TidySpace")))},P=function(){return r.a.createElement("div",null,r.a.createElement(S.Consumer,null,function(e){return e?r.a.createElement(A,null):r.a.createElement(I,null)}))},F=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"App"))},U=a(8),D=a(26),W=a(455),R={username:"",email:"",passwordOne:"",passwordTwo:"",error:null},T=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).onSubmit=function(e){var t=a.state,n=t.username,r=t.email,o=t.passwordOne;a.props.firebase.doCreateUserWithEmailAndPassword(r,o).then(function(e){return a.props.firebase.user(e.user.uid).set({username:n,email:r})}).then(function(e){a.setState(Object(D.a)({},R)),a.props.history.push(b)}).catch(function(e){a.setState({error:e})}),e.preventDefault()},a.onChange=function(e){a.setState(Object(U.a)({},e.target.name,e.target.value))},a.state=Object(D.a)({},R),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t,a,n=this.state,o=n.username,l=n.email,s=n.passwordOne,i=n.passwordTwo,c=n.error;return r.a.createElement(p.d,null,r.a.createElement(p.e,null,r.a.createElement(p.b,{md:"6"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("p",{className:"h4 text-center mb-4"},"Sign up"),r.a.createElement("label",{htmlFor:"defaultFormRegisterNameEx",className:"grey-text"},"Your name"),r.a.createElement("input",{name:"username",value:o,onChange:this.onChange,type:"text",placeholder:"Full Name",className:"form-control"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"defaultFormRegisterEmailEx",className:"grey-text"},"Your email"),r.a.createElement("input",(e={name:"email",value:l,onChange:this.onChange,type:"text",placeholder:"Email Address"},Object(U.a)(e,"type","email"),Object(U.a)(e,"className","form-control"),e)),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"defaultFormRegisterPasswordEx",className:"grey-text"},"Your password"),r.a.createElement("input",(t={name:"passwordOne",value:s,onChange:this.onChange,type:"password",placeholder:"Password"},Object(U.a)(t,"type","password"),Object(U.a)(t,"className","form-control"),t)),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"defaultFormRegisterPasswordEx",className:"grey-text"},"Confirm password"),r.a.createElement("input",(a={name:"passwordTwo",value:i,onChange:this.onChange,type:"password",placeholder:"Confirm Password"},Object(U.a)(a,"type","password"),Object(U.a)(a,"className","form-control"),a)),r.a.createElement("div",{className:"text-center mt-4"},r.a.createElement(p.a,{color:"indigo",type:"submit"},"Register"),r.a.createElement(W.a,{style:{color:"white"},to:f},r.a.createElement(p.a,{color:"unique"},"Back to log in"))),c&&r.a.createElement("p",null,c.message)))))}}]),t}(n.Component),B=function(){return r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(W.a,{to:"/signup"},"Sign Up"))},z=Object(N.a)(x.a,E)(T),Y=function(){return r.a.createElement("div",null,r.a.createElement(z,null))},q={email:"",error:null},J=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).onSubmit=function(e){var t=a.state.email;a.props.firebase.doPasswordReset(t).then(function(){a.setState(Object(D.a)({},q))}).catch(function(e){a.setState({error:e})}),e.preventDefault()},a.onChange=function(e){a.setState(Object(U.a)({},e.target.name,e.target.value))},a.state=Object(D.a)({},q),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t=this.state;t.email,t.error;return r.a.createElement(p.d,null,r.a.createElement(p.e,null,r.a.createElement(p.b,{md:"6"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("p",{className:"h4 text-center mb-4"},"Password Reset Request"),r.a.createElement("label",{htmlFor:"defaultFormLoginEmailEx",className:"grey-text"},"Your email"),r.a.createElement("input",(e={name:"email",value:this.state.email,onChange:this.onChange,type:"text",placeholder:"Email Address"},Object(U.a)(e,"type","email"),Object(U.a)(e,"className","form-control"),e)),r.a.createElement("div",{className:"text-center mt-4"},r.a.createElement(p.a,{color:"indigo",type:"submit"},"Email Reset"),r.a.createElement(W.a,{to:f},r.a.createElement(p.a,{color:"unique",type:"submit"},"Back to Login")))))))}}]),t}(n.Component),Z=function(){return r.a.createElement("p",null,r.a.createElement(W.a,{to:"/pw-forget"},"Forgot Password?"))},K=function(){return r.a.createElement("div",null,r.a.createElement(X,null))},X=E(J),$={email:"",password:"",error:null},G=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).onSubmit=function(e){var t=a.state,n=t.email,r=t.password;a.props.firebase.doSignInWithEmailAndPassword(n,r).then(function(){a.setState(Object(D.a)({},$)),a.props.history.push(b)}).catch(function(e){a.setState({error:e})}),e.preventDefault()},a.onChange=function(e){a.setState(Object(U.a)({},e.target.name,e.target.value))},a.state=Object(D.a)({},$),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t,a=this.state,n=a.email,o=a.password,l=a.error;return r.a.createElement(p.d,{className:"text-center mt-4"},r.a.createElement(p.e,null,r.a.createElement(p.b,{md:"9"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("p",{className:"h4 text-center mb-4"},"Sign in"),r.a.createElement("label",{htmlFor:"defaultFormLoginEmailEx",className:"grey-text"},"Your email"),r.a.createElement("input",(e={name:"email",value:n,onChange:this.onChange,type:"text",placeholder:"Email Address"},Object(U.a)(e,"type","email"),Object(U.a)(e,"className","form-control"),e)),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"defaultFormLoginPasswordEx",className:"grey-text"},"Your password"),r.a.createElement("input",(t={name:"password",value:o,onChange:this.onChange,type:"password",placeholder:"Password"},Object(U.a)(t,"type","password"),Object(U.a)(t,"className","form-control"),t)),r.a.createElement("div",{className:"text-center mt-4"},r.a.createElement(p.a,{color:"indigo",type:"submit"},"Login")),l&&r.a.createElement("p",null,l.message)),r.a.createElement("div",{className:"text-center mt-4"},r.a.createElement(Z,null),r.a.createElement(B,null)))))}}]),t}(n.Component),H=Object(N.a)(x.a,E)(G),Q=function(){return r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",width:"60vw"}},r.a.createElement(H,null))},V=a(33),_=a(125),ee=a.n(_),te=a(75),ae=a.n(te),ne=a(91),re=a.n(ne),oe=a(76),le=a.n(oe),se=a(58),ie=a.n(se),ce=a(30),me=a.n(ce),ue=a(62),de=a.n(ue),he=a(63),pe=a.n(he),fe=a(61),be=a.n(fe),ge=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={loading:!1,areas:[],toos:[]},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.todos().on("value",function(t){var a=t.val(),n=Object.keys(a||{}).map(function(e){return Object(D.a)({},a[e],{todoid:e})});e.setState({todos:n,loading:!1})}),this.props.firebase.areas().on("value",function(t){var a=t.val(),n=Object.keys(a||{}).map(function(e){return Object(D.a)({},a[e],{areaid:e})});e.setState({areas:n,loading:!1})})}},{key:"changeLow",value:function(e,t){for(var a=this.state.todos,n=0;n<a.length;n++)a[n].todoid===e&&(a[n].low=t);this.setState({todos:a})}},{key:"componentWillUnmount",value:function(){this.props.firebase.areas().off()}},{key:"changeMissing",value:function(e,t){for(var a=this.state.todos,n=0;n<a.length;n++)a[n].todoid===e&&(a[n].missing=t);this.setState({todos:a})}},{key:"componentWillUnmount",value:function(){this.props.firebase.areas().off()}},{key:"render",value:function(){return console.log(this.state.todos),r.a.createElement("div",{style:{marginLeft:"10vw"}},r.a.createElement("h1",null,"Area List"),r.a.createElement(Ee,{low:this.changeLow.bind(this),missing:this.changeMissing.bind(this),areas:this.state.areas,todos:this.state.todos,firebase:this.props.firebase}))}}]),t}(n.Component);ee.a.setAppElement(document.getElementById("root"));var Ee=function(e){var t=e.missing,a=e.low,n=e.areas,o=e.todos,l=e.firebase;return r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},n.map(function(e){return r.a.createElement("div",{key:e.value,style:{border:"1px solid #99d5cf",padding:"1rem",borderRadius:"5px",marginRight:"2rem",marginBottom:"2rem",marginTop:"2rem",backgroundColor:"#99d5cf"}},r.a.createElement("h4",{style:{fontWeight:"400"}},e.value),r.a.createElement(Oe,{missing:t,items:o,low:a,area:e,firebase:l}))}))},ve={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},Oe=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={modalIsOpen:!1,items:[],area:[],firebase:""},a.openModal=a.openModal.bind(Object(V.a)(Object(V.a)(a))),a.afterOpenModal=a.afterOpenModal.bind(Object(V.a)(Object(V.a)(a))),a.closeModal=a.closeModal.bind(Object(V.a)(Object(V.a)(a))),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.setState({items:this.props.items,area:this.props.area,firebase:this.props.firebase})}},{key:"openModal",value:function(){this.setState({modalIsOpen:!0})}},{key:"afterOpenModal",value:function(){this.subtitle.style.color="black"}},{key:"closeModal",value:function(){this.setState({modalIsOpen:!1})}},{key:"render",value:function(){for(var e=this,t=this.state.items,a=[],n=this.state.area,o=0;o<t.length;o++)t[o].area.value===n.value&&a.push(t[o]);return r.a.createElement("div",null,r.a.createElement(ae.a,null,r.a.createElement(le.a,null,0===a.length?r.a.createElement(me.a,{component:"p"},"No Items"):r.a.createElement(we,{todos:a,area:this.props.area})),r.a.createElement(re.a,null,r.a.createElement(ie.a,{onClick:this.openModal,size:"small"},"Full List - (",a.length,")"))),r.a.createElement(ee.a,{isOpen:this.state.modalIsOpen,onAfterOpen:this.afterOpenModal,onRequestClose:this.closeModal,style:ve,contentLabel:"Example Modal"},r.a.createElement("h2",{ref:function(t){return e.subtitle=t}},this.props.area.value),r.a.createElement(je,{missing:this.props.missing,low:this.props.low,todos:a,area:this.props.area,handleLowChange:this.handleLowChange,firebase:this.state.firebase}),r.a.createElement("button",{className:"btn btn-warning",onClick:this.closeModal},"close")))}}]),t}(n.Component),we=function(e){var t=e.todos;e.area;return r.a.createElement("div",null,t.map(function(e){return r.a.createElement("div",{key:e.todoid,style:{position:"relative"}},r.a.createElement(me.a,{component:"p"},e.todo,r.a.createElement("span",{style:{fontSize:"1.5rem",color:"red",display:"inline-block",position:"absolute",right:0}},e.missing&&r.a.createElement(be.a,{title:"Item Missing"},r.a.createElement("i",{className:"fa fa-exclamation-circle"}))),r.a.createElement("span",{style:{fontSize:"1.5rem",color:"orange",display:"inline-block",position:"absolute",right:0}},e.low&&r.a.createElement(be.a,{title:"Item Low"},r.a.createElement("i",{className:"fa fa-exclamation-circle"})))),r.a.createElement(me.a,{color:"textSecondary"},e.location))}))},je=function(e){var t=e.missing,a=e.low,n=e.todos,o=(e.area,e.firebase);return r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},n.map(function(e){return r.a.createElement(ae.a,{key:e.todoid,style:{margin:"5px"}},r.a.createElement(le.a,{style:{paddingBottom:0}},r.a.createElement(me.a,{gutterBottom:!0,variant:"h5",component:"h5"},e.todo," ","\n"),r.a.createElement(me.a,{component:"p"},"Area: ",e.area.value),r.a.createElement(me.a,{component:"p"},"Location: ",e.location),r.a.createElement(re.a,null,r.a.createElement(ye,{missing:t,low:a,todo:e,firebase:o}))))}))},ye=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).changeLow=function(e){return function(t){!0===a.state.missing&&t.target.checked?(a.state.firebase.todos().child(e.todoid).set({created:e.created,todo:e.todo,area:e.area,location:e.location,missing:!1,low:t.target.checked}),a.props.missing(e.todoid,!1),a.setState({missing:!1})):a.state.firebase.todos().child(e.todoid).set({created:e.created,todo:e.todo,area:e.area,location:e.location,missing:e.missing,low:t.target.checked}),a.setState({low:t.target.checked}),a.props.low(e.todoid,t.target.checked)}},a.changeMissing=function(e){return function(t){!0===a.state.low&&t.target.checked?(a.state.firebase.todos().child(e.todoid).set({created:e.created,todo:e.todo,area:e.area,location:e.location,missing:t.target.checked,low:!1}),a.props.low(e.todoid,!1),a.setState({low:!1})):a.state.firebase.todos().child(e.todoid).set({created:e.created,todo:e.todo,area:e.area,location:e.location,missing:t.target.checked,low:e.low}),a.setState({missing:t.target.checked}),a.props.missing(e.todoid,t.target.checked)}},a.state={low:a.props.todo.low,missing:a.props.todo.missing,todo:a.props.todo,firebase:a.props.firebase},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(de.a,{control:r.a.createElement(pe.a,{checked:this.state.low,onChange:this.changeLow(this.state.todo)}),label:"Item Low"}),r.a.createElement(de.a,{control:r.a.createElement(pe.a,{checked:this.state.missing,onChange:this.changeMissing(this.state.todo)}),label:"Item Missing"}))}}]),t}(n.Component),Ce=L(function(e){return!!e})(ge),Se={passwordOne:"",passwordTwo:"",error:null},ke=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).onSubmit=function(e){var t=a.state.passwordOne;a.props.firebase.doPasswordUpdate(t).then(function(){a.setState(Object(D.a)({},Se))}).catch(function(e){a.setState({error:e})}),e.preventDefault()},a.onChange=function(e){a.setState(Object(U.a)({},e.target.name,e.target.value))},a.state=Object(D.a)({},Se),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t,a=this.state,n=a.passwordOne,o=a.passwordTwo;a.error;return r.a.createElement(p.d,null,r.a.createElement(p.e,null,r.a.createElement(p.b,{md:"6"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("p",{className:"h4 mb-4"},"Account Username: ",this.props.username),r.a.createElement("p",{className:"h4 mb-4"},"Account Email: ",this.props.email),r.a.createElement("p",{className:"h4 mb-4"},"Change your password"),r.a.createElement("label",{htmlFor:"defaultFormLoginPasswordEx",className:"grey-text"},"Your password"),r.a.createElement("input",(e={name:"passwordOne",value:n,onChange:this.onChange,type:"password",placeholder:"New Password"},Object(U.a)(e,"type","password"),Object(U.a)(e,"className","form-control"),e)),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"defaultFormLoginPasswordEx",className:"grey-text"},"Your password"),r.a.createElement("input",(t={name:"passwordTwo",value:o,onChange:this.onChange,type:"password",placeholder:"Confirm New Password"},Object(U.a)(t,"type","password"),Object(U.a)(t,"className","form-control"),t)),r.a.createElement("div",{className:"mt-4"},r.a.createElement(p.a,{color:"indigo",type:"submit"},"Change Password"))))))}}]),t}(n.Component),xe=E(ke),Ne=L(function(e){return!!e})(function(){return r.a.createElement(S.Consumer,null,function(e){return r.a.createElement("div",null,r.a.createElement(xe,{email:e.email,username:e.username}))})}),Le=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={loading:!1,users:[]},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.users().on("value",function(t){var a=t.val(),n=Object.keys(a).map(function(e){return Object(D.a)({},a[e],{uid:e})});e.setState({users:n,loading:!1})})}},{key:"componentWillUnmount",value:function(){this.props.firebase.users().off()}},{key:"render",value:function(){var e=this.state,t=e.users,a=e.loading;return r.a.createElement("div",null,r.a.createElement("h1",null,"Admin"),a&&r.a.createElement("div",null,"Loading ..."),r.a.createElement(Ae,{users:t}))}}]),t}(n.Component),Ae=function(e){var t=e.users;return r.a.createElement("ul",null,t.map(function(e){return r.a.createElement("li",{key:e.uid},r.a.createElement("span",null,r.a.createElement("strong",null,"ID:")," ",e.uid),r.a.createElement("span",null,r.a.createElement("strong",null,"E-Mail:")," ",e.email),r.a.createElement("span",null,r.a.createElement("strong",null,"Username:")," ",e.username))}))},Me=E(Le),Ie=a(198),Pe=a(93),Fe=a.n(Pe),Ue={todo:"",location:"",area:"null",areaCreate:""},De=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).changeLowFilter=function(e){a.setState({lowfil:e.target.checked}),!0===a.state.missingfil&&a.setState({missingfil:!1});var t=a.state.todos,n=[];n=e.target.checked?t.filter(function(e){if(!0===e.low)return!0}):a.state.todos,a.setState({filtered:n})},a.changeMissingFilter=function(e){a.setState({missingfil:e.target.checked}),!0===a.state.lowfil&&a.setState({lowfil:!1});var t=a.state.todos,n=[];n=e.target.checked?t.filter(function(e){if(!0===e.missing)return!0}):a.state.todos,a.setState({filtered:n})},a.deleteTodo=function(e){a.props.firebase.todo(e).remove()},a.state={loading:!1,todos:[],filtered:[],areas:[],lowfil:!1,missingfil:!1},a.handleChange=a.handleChange.bind(Object(V.a)(Object(V.a)(a))),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){var t=[];t=""!==e.target.value?this.state.todos.filter(function(t){var a=t.todo.toLowerCase(),n=e.target.value.toLowerCase();return a.includes(n)}):this.state.todos,this.setState({filtered:t})}},{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.todos().on("value",function(t){var a=t.val(),n=Object.keys(a||{}).map(function(e){return Object(D.a)({},a[e],{todoid:e})});e.setState({todos:n,filtered:n,loading:!1})}),this.props.firebase.areas().on("value",function(t){var a=t.val(),n=Object.keys(a||{}).map(function(e){return Object(D.a)({},a[e],{areaid:e})});e.setState({areas:n,loading:!1})})}},{key:"componentWillUnmount",value:function(){this.props.firebase.todos().off(),this.props.firebase.areas().off()}},{key:"render",value:function(){this.state.todos;return r.a.createElement("div",{style:{marginLeft:"10vw"}},r.a.createElement(Te,{areas:this.state.areas}),r.a.createElement("hr",null),r.a.createElement("h1",null,"Item List"),r.a.createElement("input",{type:"text",className:"input",onChange:this.handleChange,placeholder:"Search..."}),r.a.createElement(de.a,{style:{padding:"3vw"},control:r.a.createElement(pe.a,{checked:this.state.lowfil,onChange:this.changeLowFilter}),label:"Filter Low"}),r.a.createElement(de.a,{control:r.a.createElement(pe.a,{checked:this.state.missingfil,onChange:this.changeMissingFilter}),label:"Filter Missing"}),r.a.createElement("br",null),r.a.createElement(We,{todos:this.state.filtered,deleteTodo:this.deleteTodo}))}}]),t}(n.Component),We=function(e){var t=e.todos,a=e.deleteTodo;return r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},t.map(function(e){return r.a.createElement(ae.a,{key:e.todoid,style:{margin:"5px"}},r.a.createElement(le.a,{style:{paddingBottom:0}},r.a.createElement("button",{onClick:function(){return a(e.todoid)},style:{background:"none",border:"none",float:"right"}},r.a.createElement("i",{className:"fa fa-close"})),e.missing&&r.a.createElement(me.a,null,r.a.createElement("span",{style:{fontSize:"1.5rem",color:"red",display:"inline-block"}},r.a.createElement(be.a,{title:"Item Missing"},r.a.createElement("i",{className:"fa fa-exclamation-circle"})))),e.low&&r.a.createElement(me.a,null,r.a.createElement("span",{style:{fontSize:"1.5rem",color:"orange",display:"inline-block"}},r.a.createElement(be.a,{title:"Item Low"},r.a.createElement("i",{className:"fa fa-exclamation-circle"})))),r.a.createElement(me.a,{gutterBottom:!0,variant:"h5",component:"h5"},e.todo," ","\n"),r.a.createElement(me.a,{component:"p"},"Area: ",e.area.value),r.a.createElement(me.a,{component:"p"},"Location: ",e.location)))}))},Re=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).onSubmit=function(e){if(void 0===a.state.area)a.props.firebase.todos().push({created:(new Date).toISOString().replace("T"," ").replace("Z",""),todo:a.state.todo,location:a.state.location,area:"Uncategorized",missing:!1,low:!1});else a.props.firebase.todos().push({created:(new Date).toISOString().replace("T"," ").replace("Z",""),todo:a.state.todo,location:a.state.location,area:a.state.area,missing:!1,low:!1});a.setState(Object(D.a)({},Ue)),e.preventDefault()},a.onChange=function(e){a.setState({todo:e.target.value})},a.onChangeLocation=function(e){a.setState({location:e.target.value})},a.onChangeAreaCreate=function(e){a.setState({areaCreate:e.target.value})},a.onSubmitAreaCreate=function(e){a.props.firebase.areas().push({value:a.state.areaCreate,label:a.state.areaCreate});a.setState({areaCreate:""}),e.preventDefault()},a.handleAreaChange=function(e){a.setState({area:e}),console.log("Option selected:",e)},a.state=Object(D.a)({},Ue),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t,a,n=""===this.state.todo.trim(),o=""===this.state.areaCreate.trim();return r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{style:{display:"inline-block"}},r.a.createElement("h3",null,"Add Item"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement(Fe.a,{className:"form-group col-md6",style:{margin:"10px",marginLeft:0},id:"outlined-with-placeholder",label:"Item Name",placeholder:"Item Name",margin:"normal",variant:"outlined",name:"todo",value:this.state.todo,onChange:this.onChange}),r.a.createElement(Fe.a,(e={style:{margin:"10px",marginRight:0},className:"form-group col-md6",name:"todo",id:"outlined-with-placeholder",label:"Enter Location",placeholder:"Enter Location",margin:"normal",variant:"outlined"},Object(U.a)(e,"name","todo"),Object(U.a)(e,"value",this.state.location),Object(U.a)(e,"onChange",this.onChangeLocation),e)),r.a.createElement(Ie.a,(t={style:{margin:"10px"},className:"form-group"},Object(U.a)(t,"style",{width:"20vw"}),Object(U.a)(t,"value",this.state.area),Object(U.a)(t,"onChange",this.handleAreaChange),Object(U.a)(t,"options",this.props.areas),Object(U.a)(t,"placeholder","Select item area"),Object(U.a)(t,"isSearchable","true"),Object(U.a)(t,"name","todo"),Object(U.a)(t,"id","outlined-with-placeholder"),t)),r.a.createElement(ie.a,{variant:"contained",color:"primary",disabled:n,type:"submit"},"Add Item",r.a.createElement("i",{style:{paddingLeft:"5px"},className:"fa fa-save"})))),r.a.createElement("div",{style:{display:"inline-block",paddingLeft:"5vw"}},r.a.createElement("h3",null,"Add Area"),r.a.createElement("form",{onSubmit:this.onSubmitAreaCreate},r.a.createElement(Fe.a,(a={style:{marginTop:"10px",marginBottom:"10px"},className:"form-group col-md6",name:"todo",id:"outlined-with-placeholder",label:"Enter Area",placeholder:"Enter Area",variant:"outlined"},Object(U.a)(a,"name","todo"),Object(U.a)(a,"value",this.state.areaCreate),Object(U.a)(a,"onChange",this.onChangeAreaCreate),a)),r.a.createElement(ie.a,{style:{display:"block"},variant:"contained",color:"primary",disabled:o,type:"submit"},"Add Area",r.a.createElement("i",{style:{paddingLeft:"5px"},className:"fa fa-save"})))))}}]),t}(n.Component),Te=Object(N.a)(E)(Re),Be=Object(N.a)(E)(De),ze=k(function(){return r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(P,null),r.a.createElement("hr",null),r.a.createElement(i.a,{exact:!0,path:"/",component:F}),r.a.createElement(i.a,{path:"/signup",component:Y}),r.a.createElement(i.a,{path:f,component:Q}),r.a.createElement(i.a,{path:"/pw-forget",component:K}),r.a.createElement(i.a,{path:b,component:Ce}),r.a.createElement(i.a,{path:"/account",component:Ne}),r.a.createElement(i.a,{path:"/admin",component:Me}),r.a.createElement(i.a,{path:"/todos",component:Be})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(v.Provider,{value:new y},r.a.createElement(ze,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[199,1,2]]]);
//# sourceMappingURL=main.bf2f3296.chunk.js.map