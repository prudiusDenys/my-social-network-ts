(this["webpackJsonpmy-social-network-app"]=this["webpackJsonpmy-social-network-app"]||[]).push([[3],{145:function(e,t,a){"use strict";var n=a(13),o=a.n(n),r=a(23),l=a.n(r),i=a(0),s=a.n(i),c=a(2),m=a.n(c),u=a(35),p=function(e){function t(t){var a;if(a=e.call(this,t)||this,!t._reduxForm)throw new Error("Form must be inside a component decorated with reduxForm()");return a}l()(t,e);var a=t.prototype;return a.UNSAFE_componentWillMount=function(){this.props._reduxForm.registerInnerOnSubmit(this.props.onSubmit)},a.render=function(){var e=this.props,t=(e._reduxForm,o()(e,["_reduxForm"]));return s.a.createElement("form",t)},t}(i.Component);p.propTypes={onSubmit:m.a.func.isRequired,_reduxForm:m.a.object},t.a=Object(u.b)(p)},310:function(e,t,a){e.exports={mainPhoto:"ProfileInfo_mainPhoto__e4Kzo",contact:"ProfileInfo_contact__33Iux",profileInfo:"ProfileInfo_profileInfo__1BWwm",profileInfoBox:"ProfileInfo_profileInfoBox__T42sf",profileInfoItem:"ProfileInfo_profileInfoItem__JKMYb",choosePhoto:"ProfileInfo_choosePhoto__18tko",profileData:"ProfileInfo_profileData__5_wpM",wrapper:"ProfileInfo_wrapper__1sBvZ",profileDataItem:"ProfileInfo_profileDataItem__EmqDj",profileDataBtn:"ProfileInfo_profileDataBtn__6_IRq",itemSpam:"ProfileInfo_itemSpam__YD5Mi"}},316:function(e,t,a){},317:function(e,t,a){e.exports={newPost:"NewPost_newPost__1q2Co",input:"NewPost_input__2UK05"}},318:function(e,t,a){e.exports={avatar:"Avatar_avatar__1IUmW"}},319:function(e,t,a){e.exports={postsWrapper:"Posts_postsWrapper__1zSif"}},320:function(e,t,a){e.exports={post:"Post_post__399nF",userInfo:"Post_userInfo__3N5Bi",nameAndDate:"Post_nameAndDate__NousX",text:"Post_text__3a6W4"}},321:function(e,t,a){"use strict";a.r(t);var n=a(39),o=a(40),r=a(43),l=a(42),i=a(0),s=a.n(i),c=a(316),m=a.n(c),u=a(97),p=a(317),f=a.n(p),d=a(318),E=a.n(d),h=a(68),b=a.n(h),v=a(12),_=a(41),P=function(){var e=Object(v.d)((function(e){return e.profile}));return e.profile?s.a.createElement("div",{className:E.a.avatar},s.a.createElement("img",{src:e.profile.photos.small?e.profile.photos.small:b.a,alt:""})):s.a.createElement(_.a,null)},I=a(130),w=a(131),g=a(71),N=a(52),S=a(37),y=Object(g.a)(10),j=Object(w.a)({form:"profileAddNewPostForm"})((function(e){return s.a.createElement("form",{style:{display:"flex"},onSubmit:e.handleSubmit},s.a.createElement(I.a,{component:N.a,name:"newPost",placeholder:"Say something",validate:[g.b,y]}),s.a.createElement("button",null,"SHARE"))})),O=function(e){var t=Object(v.c)();return s.a.createElement("div",{className:f.a.newPost},s.a.createElement(P,null),s.a.createElement("div",{className:f.a.input},s.a.createElement(j,{onSubmit:function(a){e.addPost(a.newPost),t(Object(S.a)("profileAddNewPostForm"))}})))},A=Object(v.b)((function(e){return{}}),(function(e){return{addPost:function(t){e(Object(u.a)(t))}}}))(O),k=a(319),x=a.n(k),F=a(320),D=a.n(F),M=function(e){return s.a.createElement("div",{className:D.a.post},s.a.createElement("div",{className:D.a.userInfo},s.a.createElement(P,null),s.a.createElement("div",{className:D.a.nameAndDate},s.a.createElement("div",{className:D.a.name},e.name),s.a.createElement("div",{className:D.a.date},e.time))),s.a.createElement("div",{className:D.a.text},e.text))},U=s.a.memo((function(e){var t=e.postData.map((function(e){return s.a.createElement(M,{key:e.id,name:e.name,time:e.time,text:e.text})}));return s.a.createElement("div",{className:x.a.postsWrapper},t)})),C=Object(v.b)((function(e){return{postData:e.profile.postData}}))(U),J=a(98),B=a(310),q=a.n(B),T=function(e){var t=Object(i.useState)(!1),a=Object(J.a)(t,2),n=a[0],o=a[1],r=Object(i.useState)(e.status),l=Object(J.a)(r,2),c=l[0],m=l[1];Object(i.useEffect)((function(){m(e.status)}),[e.status]);return s.a.createElement("div",null,!n&&s.a.createElement("div",null,s.a.createElement("span",{style:{color:"#e04533"}},"Status:")," ",s.a.createElement("span",{style:{color:"#12b286",fontSize:"24px"},onDoubleClick:function(){o(!0)}},e.status||"----")),n&&s.a.createElement("div",null,s.a.createElement("input",{autoFocus:!0,onBlur:function(){o(!1),e.updateStatus(c)},onChange:function(e){m(e.currentTarget.value)},value:c})))},W=a(145),K=a(53),Q=a.n(K),z=Object(w.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,a=e.error,n=e.initialValues;return s.a.createElement(W.a,{onSubmit:t},s.a.createElement("div",null,s.a.createElement("button",null,"Save")),a&&s.a.createElement("div",{className:Q.a.formSummaryError},a),s.a.createElement("div",null,s.a.createElement("b",null,"Full name"),": ",s.a.createElement(I.a,{type:"text",placeholder:"Full name",name:"fullName",component:N.a})),s.a.createElement("div",null,s.a.createElement("b",null,"Looking for a job"),": ",s.a.createElement(I.a,{type:"checkbox",name:"lookingForAJob",component:N.a})),s.a.createElement("div",null,s.a.createElement("b",null,"My professional skills"),": ",s.a.createElement(I.a,{type:"text",placeholder:"My professional skills",name:"lookingForAJobDescription",component:N.b})),s.a.createElement("div",null,s.a.createElement("b",null,"About me"),": ",s.a.createElement(I.a,{type:"text",placeholder:"About me",name:"aboutMe",component:N.b})),s.a.createElement("div",null,s.a.createElement("b",null,"Contacts"),": ",Object.keys(n.contacts).map((function(e){return s.a.createElement("div",{key:e,className:q.a.contact},s.a.createElement("b",null,e,": ",s.a.createElement(I.a,{type:"text",placeholder:e,name:"contacts."+e,component:N.a})))}))))})),R=function(e){var t=Object(i.useState)(!1),a=Object(J.a)(t,2),n=a[0],o=a[1];if(!e.profile)return s.a.createElement(_.a,null);return s.a.createElement("div",{className:q.a.profileInfo},s.a.createElement("div",{className:q.a.profileInfoBox},s.a.createElement("div",null,s.a.createElement("img",{src:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fp7.hiclipart.com%2Fpreview%2F703%2F593%2F258%2Fpac-man-collection-3d-computer-graphics-clip-art-packman.jpg&imgrefurl=https%3A%2F%2Fwww.hiclipart.com%2Ffree-transparent-background-png-clipart-xdjca&tbnid=aZtdgwW0aIpYJM&vet=12ahUKEwjysqP3wrbrAhXItqQKHU70ATwQMygJegUIARCuAQ..i&docid=CpQPntaovCNugM&w=800&h=1186&q=packman&ved=2ahUKEwjysqP3wrbrAhXItqQKHU70ATwQMygJegUIARCuAQ",alt:""})),s.a.createElement("div",{style:{flex:"0 0 33%"},className:q.a.profileInfoItem},s.a.createElement("img",{src:e.profile.photos.large||b.a,className:q.a.mainPhoto,alt:""}),e.isOwner&&s.a.createElement("input",{className:q.a.choosePhoto,type:"file",onChange:function(t){t.target.files&&e.savePhoto(t.target.files[0])}}),s.a.createElement(T,{status:e.status,updateStatus:e.updateStatus})),s.a.createElement("div",{className:q.a.profileInfoItem},n?s.a.createElement(z,{onSubmit:function(t){e.saveProfile(t).then((function(){o(!1)}))},initialValues:e.profile}):s.a.createElement(V,{profile:e.profile,isOwner:e.isOwner,goToEditMode:function(){return o(!0)}}))))},V=function(e){return s.a.createElement("div",{className:q.a.profileData},s.a.createElement("div",{className:q.a.wrapper},s.a.createElement("div",{className:q.a.profileDataItem},s.a.createElement("b",null,"Full name"),":",s.a.createElement("span",{className:q.a.itemSpam},e.profile.fullName)),s.a.createElement("div",{className:q.a.profileDataItem},s.a.createElement("b",null,"Looking for a job"),":",s.a.createElement("span",{className:q.a.itemSpam},e.profile.lookingForAJob?"Yes":"no")),e.profile.lookingForAJob&&s.a.createElement("div",{className:q.a.profileDataItem},s.a.createElement("b",null,"My professional skills"),":",s.a.createElement("span",{className:q.a.itemSpam},e.profile.lookingForAJobDescription)),s.a.createElement("div",{className:q.a.profileDataItem},s.a.createElement("b",null,"About me"),":",s.a.createElement("span",{className:q.a.itemSpam},e.profile.aboutMe))),s.a.createElement("div",{className:q.a.profileDataItem+""+q.a.wrapper},s.a.createElement("b",null,"Contacts"),": ",Object.keys(e.profile.contacts).map((function(t){return s.a.createElement(Y,{key:t,contactTitle:t,contactValue:e.profile.contacts[t]})})),e.isOwner&&s.a.createElement("div",null,s.a.createElement("button",{className:q.a.profileDataBtn,onClick:e.goToEditMode},"edit"))))},Y=function(e){var t=e.contactTitle,a=e.contactValue;return s.a.createElement("div",{className:q.a.contact},s.a.createElement("b",null,t),": ",a)},H=a(10),X=function(e){return e.isAuth?s.a.createElement("div",{className:m.a.profile},s.a.createElement(A,null),s.a.createElement(R,{profile:e.profile,status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),s.a.createElement(C,null)):s.a.createElement(H.a,{to:"/login"})},L=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!==this.props.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return s.a.createElement(X,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,isOwner:!this.props.match.params.userId,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile,isAuth:this.props.isAuth})}}]),a}(s.a.Component),Z=Object(H.g)(L);t.default=Object(v.b)((function(e){return{profile:e.profile.profile,status:e.profile.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:u.c,getStatus:u.b,updateStatus:u.g,savePhoto:u.e,saveProfile:u.f})(Z)}}]);
//# sourceMappingURL=3.48b8795a.chunk.js.map