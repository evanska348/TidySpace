(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,a){e.exports=a(242)},119:function(e,t,a){},242:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(16),l=a.n(o),s=(a(119),a(243)),c=a(106),i=a(6),u="/evanzhao/uw/TidySpace",m="/home",d=r.a.createContext(null),p=function(e){return function(t){return r.a.createElement(d.Consumer,null,function(a){return r.a.createElement(e,Object.assign({},t,{firebase:a}))})}},h=d,f=a(9),b=a(61),E=a.n(b),g=(a(226),a(228),{apiKey:"AIzaSyBObXMfhpLNUOPl05rMhkj0YRNJdjIEoWA",authDomain:"tidyspace.firebaseapp.com",databaseURL:"https://tidyspace.firebaseio.com",projectId:"tidyspace",storageBucket:"tidyspace.appspot.com",messagingSenderId:"367121613358"}),v=function e(){var t=this;Object(f.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,a){return t.auth.createUserWithEmailAndPassword(e,a)},this.doSignInWithEmailAndPassword=function(e,a){return t.auth.signInWithEmailAndPassword(e,a)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.user=function(e){return t.db.ref("users/".concat(e))},this.users=function(){return t.db.ref("users")},this.todo=function(e){return t.db.ref("todos/".concat(e))},this.todos=function(){return t.db.ref("todos")},this.area=function(e){return t.db.ref("area/".concat(e))},this.areas=function(){return t.db.ref("areas")},E.a.initializeApp(g),this.auth=E.a.auth(),this.db=E.a.database()},O=p(function(e){var t=e.firebase;return r.a.createElement(i.f,{className:"nav-link waves-effect waves-light",to:u,onClick:t.doSignOut},"Sign Out")}),j=r.a.createContext(null),y=a(11),w=a(14),C=a(12),S=a(13),k=function(e){var t=function(t){function a(e){var t;return Object(f.a)(this,a),(t=Object(w.a)(this,Object(C.a)(a).call(this,e))).state={authUser:null},t}return Object(S.a)(a,t),Object(y.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.auth.onAuthStateChanged(function(t){t?e.setState({authUser:t}):e.setState({authUser:null})})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement(j.Provider,{value:this.state.authUser},r.a.createElement(e,this.props))}}]),a}(r.a.Component);return p(t)},x=a(244),N=a(22),A=function(e){return function(t){var a=function(a){function n(){return Object(f.a)(this,n),Object(w.a)(this,Object(C.a)(n).apply(this,arguments))}return Object(S.a)(n,a),Object(y.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.listener=this.props.firebase.auth.onAuthStateChanged(function(a){e(a)||t.props.history.push(u)})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var a=this;return r.a.createElement(j.Consumer,null,function(n){return e(n)?r.a.createElement(t,a.props):null})}}]),n}(r.a.Component);return Object(N.a)(x.a,p)(a)}},P=(a(232),a(101),a(233),function(){return r.a.createElement(i.g,{color:"teal",dark:!0,expand:"md",scrolling:!0},r.a.createElement(i.h,{href:"/home"},r.a.createElement("strong",null,"TidySpace")),r.a.createElement(i.i,{left:!0},r.a.createElement(i.e,null,r.a.createElement(i.f,{className:"nav-link waves-effect waves-light",to:m},"Spaces")),r.a.createElement(i.e,null,r.a.createElement(i.f,{className:"nav-link waves-effect waves-light",to:"/todos"},"Item Inventory")),r.a.createElement(i.e,null,r.a.createElement(i.f,{className:"nav-link waves-effect waves-light",to:"/account"},"Account")),r.a.createElement(i.i,{right:!0},r.a.createElement(i.e,null,r.a.createElement(O,null)))))}),M=function(){return r.a.createElement(i.g,{color:"teal",dark:!0,expand:"md",scrolling:!0},r.a.createElement(i.h,null,r.a.createElement("strong",null,"TidySpace")))},L=function(){return r.a.createElement("div",null,r.a.createElement(j.Consumer,null,function(e){return e?r.a.createElement(P,null):r.a.createElement(M,null)}))},I=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"App"))},R=a(8),W=a(10),F=a(81),U={username:"",email:"",passwordOne:"",passwordTwo:"",error:null},D=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(w.a)(this,Object(C.a)(t).call(this,e))).onSubmit=function(e){var t=a.state,n=t.username,r=t.email,o=t.passwordOne;a.props.firebase.doCreateUserWithEmailAndPassword(r,o).then(function(e){return a.props.firebase.user(e.user.uid).set({username:n,email:r})}).then(function(e){a.setState(Object(W.a)({},U)),a.props.history.push(m)}).catch(function(e){a.setState({error:e})}),e.preventDefault()},a.onChange=function(e){a.setState(Object(R.a)({},e.target.name,e.target.value))},a.state=Object(W.a)({},U),a}return Object(S.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e,t,a,n=this.state,o=n.username,l=n.email,s=n.passwordOne,c=n.passwordTwo,m=n.error;return r.a.createElement(i.c,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{md:"6"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("p",{className:"h4 text-center mb-4"},"Sign up"),r.a.createElement("label",{htmlFor:"defaultFormRegisterNameEx",className:"grey-text"},"Your name"),r.a.createElement("input",{name:"username",value:o,onChange:this.onChange,type:"text",placeholder:"Full Name",className:"form-control"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"defaultFormRegisterEmailEx",className:"grey-text"},"Your email"),r.a.createElement("input",(e={name:"email",value:l,onChange:this.onChange,type:"text",placeholder:"Email Address"},Object(R.a)(e,"type","email"),Object(R.a)(e,"className","form-control"),e)),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"defaultFormRegisterPasswordEx",className:"grey-text"},"Your password"),r.a.createElement("input",(t={name:"passwordOne",value:s,onChange:this.onChange,type:"password",placeholder:"Password"},Object(R.a)(t,"type","password"),Object(R.a)(t,"className","form-control"),t)),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"defaultFormRegisterPasswordEx",className:"grey-text"},"Confirm password"),r.a.createElement("input",(a={name:"passwordTwo",value:c,onChange:this.onChange,type:"password",placeholder:"Confirm Password"},Object(R.a)(a,"type","password"),Object(R.a)(a,"className","form-control"),a)),r.a.createElement("div",{className:"text-center mt-4"},r.a.createElement(i.a,{color:"indigo",type:"submit"},"Register"),r.a.createElement(F.a,{style:{color:"white"},to:u},r.a.createElement(i.a,{color:"unique"},"Back to log in"))),m&&r.a.createElement("p",null,m.message)))))}}]),t}(n.Component),T=function(){return r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(F.a,{to:"/signup"},"Sign Up"))},B=Object(N.a)(x.a,p)(D),Y=function(){return r.a.createElement("div",null,r.a.createElement(B,null))},q={email:"",error:null},z=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(w.a)(this,Object(C.a)(t).call(this,e))).onSubmit=function(e){var t=a.state.email;a.props.firebase.doPasswordReset(t).then(function(){a.setState(Object(W.a)({},q))}).catch(function(e){a.setState({error:e})}),e.preventDefault()},a.onChange=function(e){a.setState(Object(R.a)({},e.target.name,e.target.value))},a.state=Object(W.a)({},q),a}return Object(S.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e,t=this.state;t.email,t.error;return r.a.createElement(i.c,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{md:"6"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("p",{className:"h4 text-center mb-4"},"Password Reset Request"),r.a.createElement("label",{htmlFor:"defaultFormLoginEmailEx",className:"grey-text"},"Your email"),r.a.createElement("input",(e={name:"email",value:this.state.email,onChange:this.onChange,type:"text",placeholder:"Email Address"},Object(R.a)(e,"type","email"),Object(R.a)(e,"className","form-control"),e)),r.a.createElement("div",{className:"text-center mt-4"},r.a.createElement(i.a,{color:"indigo",type:"submit"},"Email Reset"),r.a.createElement(F.a,{to:u},r.a.createElement(i.a,{color:"unique",type:"submit"},"Back to Login")))))))}}]),t}(n.Component),J=function(){return r.a.createElement("p",null,r.a.createElement(F.a,{to:"/pw-forget"},"Forgot Password?"))},K=function(){return r.a.createElement("div",null,r.a.createElement(X,null))},X=p(z),Z={email:"",password:"",error:null},$=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(w.a)(this,Object(C.a)(t).call(this,e))).onSubmit=function(e){var t=a.state,n=t.email,r=t.password;a.props.firebase.doSignInWithEmailAndPassword(n,r).then(function(){a.setState(Object(W.a)({},Z)),a.props.history.push(m)}).catch(function(e){a.setState({error:e})}),e.preventDefault()},a.onChange=function(e){a.setState(Object(R.a)({},e.target.name,e.target.value))},a.state=Object(W.a)({},Z),a}return Object(S.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e,t,a=this.state,n=a.email,o=a.password,l=a.error;return r.a.createElement(i.c,{className:"text-center mt-4"},r.a.createElement(i.d,null,r.a.createElement(i.b,{md:"9"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("p",{className:"h4 text-center mb-4"},"Sign in"),r.a.createElement("label",{htmlFor:"defaultFormLoginEmailEx",className:"grey-text"},"Your email"),r.a.createElement("input",(e={name:"email",value:n,onChange:this.onChange,type:"text",placeholder:"Email Address"},Object(R.a)(e,"type","email"),Object(R.a)(e,"className","form-control"),e)),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"defaultFormLoginPasswordEx",className:"grey-text"},"Your password"),r.a.createElement("input",(t={name:"password",value:o,onChange:this.onChange,type:"password",placeholder:"Password"},Object(R.a)(t,"type","password"),Object(R.a)(t,"className","form-control"),t)),r.a.createElement("div",{className:"text-center mt-4"},r.a.createElement(i.a,{color:"indigo",type:"submit"},"Login")),l&&r.a.createElement("p",null,l.message)),r.a.createElement("div",{className:"text-center mt-4"},r.a.createElement(J,null),r.a.createElement(T,null)))))}}]),t}(n.Component),G=Object(N.a)(x.a,p)($),H=function(){return r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",width:"60vw"}},r.a.createElement(G,null))},Q=a(19),V=a(83),_=a.n(V),ee=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(w.a)(this,Object(C.a)(t).call(this,e))).state={loading:!1,areas:[],toos:[]},a}return Object(S.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.todos().on("value",function(t){var a=t.val(),n=Object.keys(a||{}).map(function(e){return Object(W.a)({},a[e],{todoid:e})});e.setState({todos:n,loading:!1})}),this.props.firebase.areas().on("value",function(t){var a=t.val(),n=Object.keys(a||{}).map(function(e){return Object(W.a)({},a[e],{areaid:e})});e.setState({areas:n,loading:!1})})}},{key:"componentWillUnmount",value:function(){this.props.firebase.areas().off()}},{key:"render",value:function(){return r.a.createElement("div",{style:{marginLeft:"10vw"}},r.a.createElement("h1",null,"Area List"),r.a.createElement(te,{areas:this.state.areas,todos:this.state.todos}))}}]),t}(n.Component);_.a.setAppElement(document.getElementById("root"));var te=function(e){var t=e.areas,a=e.todos;return r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},t.map(function(e){return r.a.createElement("div",{key:e.value,style:{border:"1px solid #99d5cf",padding:"1rem",borderRadius:"2rem",marginRight:"2rem",marginBottom:"2rem",marginTop:"2rem",backgroundColor:"#99d5cf"}},r.a.createElement("h4",{style:{fontWeight:"400"}},e.value),r.a.createElement(ne,{items:a,area:e}))}))},ae={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},ne=function(e){function t(){var e;return Object(f.a)(this,t),(e=Object(w.a)(this,Object(C.a)(t).call(this))).state={modalIsOpen:!1,items:[],area:[]},e.openModal=e.openModal.bind(Object(Q.a)(Object(Q.a)(e))),e.afterOpenModal=e.afterOpenModal.bind(Object(Q.a)(Object(Q.a)(e))),e.closeModal=e.closeModal.bind(Object(Q.a)(Object(Q.a)(e))),e}return Object(S.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){this.setState({items:this.props.items,area:this.props.area})}},{key:"openModal",value:function(){this.setState({modalIsOpen:!0})}},{key:"afterOpenModal",value:function(){this.subtitle.style.color="black"}},{key:"closeModal",value:function(){this.setState({modalIsOpen:!1})}},{key:"render",value:function(){for(var e=this,t=this.state.items,a=[],n=this.state.area,o=0;o<t.length;o++)t[o].area.value===n.value&&a.push(t[o]);return r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-primary",onClick:this.openModal},"Items - (",a.length,")"),r.a.createElement(_.a,{isOpen:this.state.modalIsOpen,onAfterOpen:this.afterOpenModal,onRequestClose:this.closeModal,style:ae,contentLabel:"Example Modal"},r.a.createElement("h2",{ref:function(t){return e.subtitle=t}},this.props.area.value),r.a.createElement(re,{todos:a,area:this.props.area}),r.a.createElement("button",{className:"btn btn-warning",onClick:this.closeModal},"close")))}}]),t}(n.Component),re=function(e){var t=e.todos;e.area;return r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},t.map(function(e){return r.a.createElement("div",{key:e.todoid,style:{padding:".4rem",marginRight:"2rem"}},r.a.createElement("p",null,"Name: ",e.todo," ","\n"),r.a.createElement("p",null,"Area: ",e.area.value),r.a.createElement("p",null,"Location: ",e.location))}))},oe=A(function(e){return!!e})(ee),le={passwordOne:"",passwordTwo:"",error:null},se=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(w.a)(this,Object(C.a)(t).call(this,e))).onSubmit=function(e){var t=a.state.passwordOne;a.props.firebase.doPasswordUpdate(t).then(function(){a.setState(Object(W.a)({},le))}).catch(function(e){a.setState({error:e})}),e.preventDefault()},a.onChange=function(e){a.setState(Object(R.a)({},e.target.name,e.target.value))},a.state=Object(W.a)({},le),a}return Object(S.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e,t,a=this.state,n=a.passwordOne,o=a.passwordTwo;a.error;return r.a.createElement(i.c,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{md:"6"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("p",{className:"h4 mb-4"},"Account Username: ",this.props.username),r.a.createElement("p",{className:"h4 mb-4"},"Account Email: ",this.props.email),r.a.createElement("p",{className:"h4 mb-4"},"Change your password"),r.a.createElement("label",{htmlFor:"defaultFormLoginPasswordEx",className:"grey-text"},"Your password"),r.a.createElement("input",(e={name:"passwordOne",value:n,onChange:this.onChange,type:"password",placeholder:"New Password"},Object(R.a)(e,"type","password"),Object(R.a)(e,"className","form-control"),e)),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"defaultFormLoginPasswordEx",className:"grey-text"},"Your password"),r.a.createElement("input",(t={name:"passwordTwo",value:o,onChange:this.onChange,type:"password",placeholder:"Confirm New Password"},Object(R.a)(t,"type","password"),Object(R.a)(t,"className","form-control"),t)),r.a.createElement("div",{className:"mt-4"},r.a.createElement(i.a,{color:"indigo",type:"submit"},"Change Password"))))))}}]),t}(n.Component),ce=p(se),ie=A(function(e){return!!e})(function(){return r.a.createElement(j.Consumer,null,function(e){return r.a.createElement("div",null,r.a.createElement(ce,{email:e.email,username:e.username}))})}),ue=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(w.a)(this,Object(C.a)(t).call(this,e))).state={loading:!1,users:[]},a}return Object(S.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.users().on("value",function(t){var a=t.val(),n=Object.keys(a).map(function(e){return Object(W.a)({},a[e],{uid:e})});e.setState({users:n,loading:!1})})}},{key:"componentWillUnmount",value:function(){this.props.firebase.users().off()}},{key:"render",value:function(){var e=this.state,t=e.users,a=e.loading;return r.a.createElement("div",null,r.a.createElement("h1",null,"Admin"),a&&r.a.createElement("div",null,"Loading ..."),r.a.createElement(me,{users:t}))}}]),t}(n.Component),me=function(e){var t=e.users;return r.a.createElement("ul",null,t.map(function(e){return r.a.createElement("li",{key:e.uid},r.a.createElement("span",null,r.a.createElement("strong",null,"ID:")," ",e.uid),r.a.createElement("span",null,r.a.createElement("strong",null,"E-Mail:")," ",e.email),r.a.createElement("span",null,r.a.createElement("strong",null,"Username:")," ",e.username))}))},de=p(ue),pe=a(113),he={todo:"",location:"",area:null,areaCreate:""},fe=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(w.a)(this,Object(C.a)(t).call(this,e))).deleteTodo=function(e){a.props.firebase.todo(e).remove()},a.state={loading:!1,todos:[],filtered:[],areas:[]},a.handleChange=a.handleChange.bind(Object(Q.a)(Object(Q.a)(a))),a}return Object(S.a)(t,e),Object(y.a)(t,[{key:"handleChange",value:function(e){var t=[];t=""!==e.target.value?this.state.todos.filter(function(t){var a=t.todo.toLowerCase(),n=e.target.value.toLowerCase();return a.includes(n)}):this.state.todos,this.setState({filtered:t})}},{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.todos().on("value",function(t){var a=t.val(),n=Object.keys(a||{}).map(function(e){return Object(W.a)({},a[e],{todoid:e})});e.setState({todos:n,filtered:n,loading:!1})}),this.props.firebase.areas().on("value",function(t){var a=t.val(),n=Object.keys(a||{}).map(function(e){return Object(W.a)({},a[e],{areaid:e})});e.setState({areas:n,loading:!1})})}},{key:"componentWillUnmount",value:function(){this.props.firebase.todos().off(),this.props.firebase.areas().off()}},{key:"render",value:function(){this.state.todos;return r.a.createElement("div",{style:{marginLeft:"10vw"}},r.a.createElement(ge,{areas:this.state.areas}),r.a.createElement("hr",null),r.a.createElement("h1",null,"Item List"),r.a.createElement("input",{type:"text",className:"input",onChange:this.handleChange,placeholder:"Search..."}),r.a.createElement("br",null),r.a.createElement(be,{todos:this.state.filtered,deleteTodo:this.deleteTodo}))}}]),t}(n.Component),be=function(e){var t=e.todos,a=e.deleteTodo;return r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},t.map(function(e){return r.a.createElement("div",{key:e.todoid,style:{border:"1px solid #99d5cf",padding:"1rem",borderRadius:"2rem",marginRight:"2rem",marginBottom:"2rem",marginTop:"2rem",backgroundColor:"#99d5cf"}},r.a.createElement("button",{onClick:function(){return a(e.todoid)},style:{background:"none",border:"none",float:"right"}},r.a.createElement("i",{className:"fa fa-close"})),r.a.createElement("p",{style:{fontWeight:"500"}},"Name: ",e.todo," ","\n"),r.a.createElement("p",{style:{fontWeight:"500"}},"Area: ",e.area.value),r.a.createElement("p",{style:{fontWeight:"500"}},"Location: ",e.location))}))},Ee=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(w.a)(this,Object(C.a)(t).call(this,e))).onSubmit=function(e){a.props.firebase.todos().push({created:(new Date).toISOString().replace("T"," ").replace("Z",""),todo:a.state.todo,location:a.state.location,area:a.state.area});a.setState(Object(W.a)({},he)),e.preventDefault()},a.onChange=function(e){a.setState({todo:e.target.value})},a.onChangeLocation=function(e){a.setState({location:e.target.value})},a.onChangeAreaCreate=function(e){a.setState({areaCreate:e.target.value})},a.onSubmitAreaCreate=function(e){a.props.firebase.areas().push({value:a.state.areaCreate,label:a.state.areaCreate});a.setState({areaCreate:""}),e.preventDefault()},a.handleAreaChange=function(e){a.setState({area:e}),console.log("Option selected:",e)},a.state=Object(W.a)({},he),a}return Object(S.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=""===this.state.todo.trim(),t=""===this.state.areaCreate.trim();return r.a.createElement("div",null,r.a.createElement("h3",null,"Add Item"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"todo",value:this.state.todo,onChange:this.onChange,type:"text",placeholder:"Enter item name"}),r.a.createElement(pe.a,{value:this.state.area,onChange:this.handleAreaChange,options:this.props.areas,placeholder:"Select item area",isSearchable:"true"}),r.a.createElement("input",{name:"todo",value:this.state.location,onChange:this.onChangeLocation,type:"text",placeholder:"Enter location"}),r.a.createElement("button",{variant:"contained",color:"primary",disabled:e,type:"submit"},"Add Item")),r.a.createElement("br",null),r.a.createElement("h3",null,"Add Area"),r.a.createElement("form",{onSubmit:this.onSubmitAreaCreate},r.a.createElement("input",{name:"todo",value:this.state.areaCreate,onChange:this.onChangeAreaCreate,type:"text",placeholder:"Enter Area"}),r.a.createElement("button",{variant:"contained",color:"primary",disabled:t,type:"submit"},"Add Area")))}}]),t}(n.Component),ge=Object(N.a)(p)(Ee),ve=Object(N.a)(p)(fe),Oe=k(function(){return r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(L,null),r.a.createElement("hr",null),r.a.createElement(c.a,{exact:!0,path:"/",component:I}),r.a.createElement(c.a,{path:"/signup",component:Y}),r.a.createElement(c.a,{path:u,component:H}),r.a.createElement(c.a,{path:"/pw-forget",component:K}),r.a.createElement(c.a,{path:m,component:oe}),r.a.createElement(c.a,{path:"/account",component:ie}),r.a.createElement(c.a,{path:"/admin",component:de}),r.a.createElement(c.a,{path:"/todos",component:ve})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(h.Provider,{value:new v},r.a.createElement(Oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[114,1,2]]]);
//# sourceMappingURL=main.caa7220a.chunk.js.map