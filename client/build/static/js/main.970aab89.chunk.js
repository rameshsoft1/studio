(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){e.exports=t(49)},23:function(e,a,t){},25:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},26:function(e,a,t){},28:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(15),i=t.n(o),s=(t(23),t(2)),m=t(3),c=t(5),r=t(4),d=t(6),u=(t(25),t(26),t(16)),f=(t(28),t(8)),p=t.n(f),h=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(c.a)(this,Object(r.a)(a).call(this))).onChange=function(a){e.setState(Object(u.a)({},a.target.name,a.target.value))},e.onSubmit=function(a){a.preventDefault(),e.frontValidation(a);var t={name:e.state.name,phone:e.state.phone,email:e.state.email,password:e.state.password,file:e.state.file};console.log(t),p.a.post("/api/users/register",t).then(function(e){console.log(e)}).catch(function(e){console.log("err : "+e),console.log("Email already exist..!!!!")})},e.onChangeFile=function(a){console.log(a.target.files.length);for(var t=a.target.files.length,n=[],l=0;l<t;l++)n.push(a.target.files[l].name);console.log(n),e.setState({files:n})},e.onUploadSubmit=function(a){var t={email:e.state.email,files:e.state.files};console.log(t.files),p.a.post("/api/users/filesmiddle",t).then(function(e){console.log(e)}).catch(function(e){console.log("err : "+e)})},e.state={name:"",phone:"",email:"",password:"",file:"",files:""},e}return Object(d.a)(a,e),Object(m.a)(a,[{key:"frontValidation",value:function(e){var a=document.getElementsByClassName("myform")[0];!1===a.checkValidity()&&(e.preventDefault(),e.stopPropagation()),a.classList.add("was-validated")}},{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("form",{className:"needs-validation myform",onSubmit:this.onSubmit,noValidate:!0},l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"col-md-12 mb-3"},l.a.createElement("label",{htmlFor:"validationCustom01"},"Name"),l.a.createElement("input",{type:"text",className:"form-control",id:"validationCustom01",placeholder:"First name",name:"name",value:this.state.name,onChange:this.onChange,required:!0}),l.a.createElement("div",{className:"invalid-feedback"},"please enter name")),l.a.createElement("div",{className:"col-md-12 mb-3"},l.a.createElement("label",{htmlFor:"validationCustom02"},"Contact Number"),l.a.createElement("input",{type:"number",className:"form-control",id:"validationCustom02",name:"phone",value:this.state.phone,onChange:this.onChange,placeholder:"9876543210",required:!0}),l.a.createElement("div",{className:"invalid-feedback"},"Enter number!")),l.a.createElement("div",{className:"col-md-12 mb-3"},l.a.createElement("label",{htmlFor:"validationCustom03"},"Email "),l.a.createElement("input",{type:"email",className:"form-control",name:"email",id:"validationCustom03",value:this.state.email,onChange:this.onChange,placeholder:"someone@gmail.com",required:!0}),l.a.createElement("div",{className:"invalid-feedback"},"Enter mail id!")),l.a.createElement("div",{className:"col-md-12 mb-3"},l.a.createElement("label",{htmlFor:"validationCustom04"},"Password "),l.a.createElement("input",{type:"password",className:"form-control",id:"validationCustom04",placeholder:"**********",name:"password",value:this.state.password,onChange:this.onChange,required:!0}),l.a.createElement("div",{className:"invalid-feedback"},"Enter password")),l.a.createElement("div",{className:"custom-file col-md-12 mb-3"},l.a.createElement("input",{type:"file",className:"custom-file-input",multiple:!0,id:"validatedCustomFile",name:"file",value:this.state.file,onChange:this.onChange,required:!0}),l.a.createElement("label",{className:"custom-file-label",htmlFor:"validatedCustomFile"},"Choose file..."),l.a.createElement("div",{className:"invalid-feedback"},"Example invalid custom file feedback")),l.a.createElement("div",{className:"col-md-12 mb-3"},l.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Submit form")))),l.a.createElement("form",{action:"/files",method:"post",onSubmit:this.onUploadSubmit,className:"uploadform",encType:"multipart/form-data"},l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"col-md-6 mb-3 mt-3"},l.a.createElement("input",{type:"file",className:"form-control",name:"file",multiple:!0,onChange:this.onChangeFile})),l.a.createElement("div",{className:"col-md-2 mb-3 mt-3"},l.a.createElement("input",{type:"submit",className:"btn btn-primary",value:"Upload"})),l.a.createElement("div",{className:"col-md-4 mb-3 mt-3"},l.a.createElement("div",{className:"display_status upload_status"})))))}}]),a}(n.Component),v=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("header",{className:"App-header row"},l.a.createElement("div",{className:"col"},"Header")),l.a.createElement(h,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.970aab89.chunk.js.map