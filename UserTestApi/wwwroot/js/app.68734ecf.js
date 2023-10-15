(function(){"use strict";var t={9268:function(t,n,s){var o=s(9242),i=s(3396);const r={class:"navbar-fixed"},l={class:"nav-wrapper container"},u=(0,i._)("div",{class:"brand-logo s right center"},"Tests",-1),a={class:"left"};function c(t,e,n,s,o,c){const d=(0,i.up)("router-link"),p=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",r,[(0,i._)("nav",null,[(0,i._)("div",l,[u,(0,i._)("ul",a,[(0,i._)("li",null,[(0,i.Wm)(d,{to:"/login"},{default:(0,i.w5)((()=>[(0,i.Uk)("Login")])),_:1})]),(0,i._)("li",null,[(0,i.Wm)(d,{to:"/tests"},{default:(0,i.w5)((()=>[(0,i.Uk)("Test List")])),_:1})])])])])]),(0,i.Wm)(p)],64)}var d=s(5797),p=s.n(d),f={name:"App",mounted(){p().AutoInit()}},h=s(89);const m=(0,h.Z)(f,[["render",c]]);var g=m,v=s(2483);const b=t=>((0,i.dD)("data-v-3666b2ea"),t=t(),(0,i.Cn)(),t),_={id:"login-form",class:"row"},w={class:"col s12 offset-m3 m6 offset-l4 l4"},T=b((()=>(0,i._)("h1",null,"Login",-1))),k=b((()=>(0,i._)("br",null,null,-1))),y=b((()=>(0,i._)("br",null,null,-1))),U=["disabled"],D={class:"red-text"},C=b((()=>(0,i._)("br",null,null,-1))),O=["disabled"];function P(t,e,n,s,r,l){return(0,i.wg)(),(0,i.iD)("div",_,[(0,i._)("div",w,[T,k,y,(0,i._)("p",null,[(0,i.wy)((0,i._)("input",{placeholder:"User Name","onUpdate:modelValue":e[0]||(e[0]=e=>t.userName=e),disabled:t.processing},null,8,U),[[o.nr,t.userName]])]),(0,i.wy)((0,i._)("h6",D,"Failed to login",512),[[o.F8,t.loginFailed]]),C,(0,i._)("button",{class:"btn-large",onClick:e[1]||(e[1]=(...t)=>l.onSubmit&&l.onSubmit(...t)),disabled:t.processing}," Submit ",8,O)])])}s(7658);var N=s(4161),R=s(65),q=(0,R.MT)({state(){return{token:null}},mutations:{setToken(t,e){t.token=e}}}),E={baseURL:{NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_WEB_API??"/api/",makeRequest:async function(t,n,s=null){try{const e=await(0,N.Z)({method:t,url:n,data:s,headers:{Authorization:q.state.token?"Bearer "+q.state.token:void 0,"Content-Type":"application/json"}});return console.log(`${t} ${n}`,e.data),e.data}catch(o){throw console.error(`${t} ${n}`,e),o}},loginUser:async function(t){const e=this.baseURL+"account",n={userName:t};return await this.makeRequest("POST",e,n)},getTests:async function(){const t=this.baseURL+"test";return await this.makeRequest("GET",t)},getTest:async function(t){const e=this.baseURL+"test/"+t;return await this.makeRequest("GET",e)},postAnswers:async function(t,e){const n=this.baseURL+"test/complete",s={testId:t,answers:e};return await this.makeRequest("POST",n,s)}},F={data:function(){return{userName:"User1",processing:!1,loginFailed:!1}},methods:{onSubmit:function(){this.userName?.trim()?(this.processing=!0,E.loginUser(this.userName).then((t=>{console.log("Login completed",this.userName),this.loginFailed=!1,this.$store.commit("setToken",t),this.$router.push("/tests")})).catch((()=>{console.error("Login failed"),this.loginFailed=!0})).finally((()=>this.processing=!1))):console.error("Empty input on submit")}}};const L=(0,h.Z)(F,[["render",P],["__scopeId","data-v-3666b2ea"]]);var I=L,z=s(7139);const S=t=>((0,i.dD)("data-v-08c2f224"),t=t(),(0,i.Cn)(),t),V={class:"container"},$={class:"section"},A={key:0},j={key:0},x=["onClick"],B=S((()=>(0,i._)("div",{class:"divider"},null,-1)));function Z(t,e,n,s,o,r){return(0,i.wg)(),(0,i.iD)("div",V,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.tests,(t=>((0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",$,[(0,i._)("div",null,[(0,i._)("h4",null,(0,z.zw)(t.testName),1),t.isCompleted?((0,i.wg)(),(0,i.iD)("h6",A,"Completed "+(0,z.zw)(t.userPoints)+"/"+(0,z.zw)(t.totalPoints),1)):(0,i.kq)("",!0)]),t.isCompleted?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",j,[(0,i._)("button",{class:"btn-small",onClick:e=>r.startTest(t.testId)}," Start ",8,x)]))]),B])))),256))])}var G={setup:function(){console.log("Tests component setup")},beforeRouteEnter(t,e,n){console.log("Before route rnter user tests"),n((t=>t.getTests()))},data:function(){return{tests:null}},methods:{getTests:function(){E.getTests().then((t=>{this.tests=t})).catch((()=>console.error("Failed to fetch tests")))},startTest:function(t){this.$router.push("/test/"+t)}}};const H=(0,h.Z)(G,[["render",Z],["__scopeId","data-v-08c2f224"]]);var W=H;const Y=t=>((0,i.dD)("data-v-545d6184"),t=t(),(0,i.Cn)(),t),K={class:"container"},M={class:"section"},J=Y((()=>(0,i._)("div",{class:"divider"},null,-1))),Q=["value","onUpdate:modelValue"],X=Y((()=>(0,i._)("br",null,null,-1))),tt=["disabled"],et=Y((()=>(0,i._)("div",{id:"blur-screen"},null,-1))),nt={id:"result-form"},st=Y((()=>(0,i._)("br",null,null,-1)));function ot(t,e,n,s,r,l){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",K,[(0,i._)("h3",null,(0,z.zw)(t.testName),1),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.questions,(t=>((0,i.wg)(),(0,i.iD)("div",M,[(0,i._)("h5",null,(0,z.zw)(t.number)+") "+(0,z.zw)(t.description),1),J,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.options,(e=>((0,i.wg)(),(0,i.iD)("p",null,[(0,i._)("label",null,[(0,i.wy)((0,i._)("input",{type:"radio",class:"with-gap",value:e.number,"onUpdate:modelValue":e=>t.answer=e},null,8,Q),[[o.G2,t.answer]]),(0,i._)("span",null,(0,z.zw)(e.name),1)])])))),256))])))),256)),X,(0,i._)("button",{class:"btn-large",onClick:e[0]||(e[0]=(...t)=>l.completeTest&&l.completeTest(...t)),disabled:t.processing}," Complete ",8,tt)]),(0,i.wy)((0,i._)("div",null,[et,(0,i._)("div",nt,[(0,i._)("h2",null,"Score: "+(0,z.zw)(t.points),1),st,(0,i._)("button",{class:"btn",onClick:e[1]||(e[1]=(...t)=>l.cancelTest&&l.cancelTest(...t))},"Go back")])],512),[[o.F8,t.resultPopupVisible]])])}var it={setup(){},data:function(){return{testId:null,testName:null,questions:null,resultPopupVisible:!1,points:null,processing:!1}},beforeRouteEnter(t,e,n){console.log("Before route enter test form"),n((t=>t.loadTest()))},beforeRouteUpdate(t,e){console.log("Before route update test form"),this.loadTest()},methods:{loadTest:function(){E.getTest(this.$route.params.id).then((t=>{this.testId=t.id,this.testName=t.name,this.questions=t.questions})).catch((()=>console.error("Failed to load test")))},completeTest:function(){const t=this.questions.reduce(((t,e)=>(t[e.number]=e.answer,t)),{});this.processing=!0,E.postAnswers(this.testId,t).then((t=>{console.log("Test completed with the score",t),this.points=t,this.resultPopupVisible=!0})).catch((()=>console.error("Failed to complete test"))).finally((()=>{this.processing=!1}))},cancelTest:function(){this.resultPopupVisible=!1,this.$router.push("/tests")}}};const rt=(0,h.Z)(it,[["render",ot],["__scopeId","data-v-545d6184"]]);var lt=rt;const ut=[{path:"/login",component:I},{path:"/tests",component:W},{path:"/test/:id",component:lt}],at=(0,v.p7)({history:(0,v.PO)(),routes:ut});at.beforeEach(((t,e)=>{if(!q.state.token&&"/login"!=t.fullPath)return"/login"}));var ct=at;const dt=(0,o.ri)(g);dt.use(ct),dt.use(q),dt.mount("#app")}},n={};function s(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(e,n,o,i){if(!n){var r=1/0;for(c=0;c<t.length;c++){n=t[c][0],o=t[c][1],i=t[c][2];for(var l=!0,u=0;u<n.length;u++)(!1&i||r>=i)&&Object.keys(s.O).every((function(t){return s.O[t](n[u])}))?n.splice(u--,1):(l=!1,i<r&&(r=i));if(l){t.splice(c--,1);var a=o();void 0!==a&&(e=a)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[n,o,i]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,i,r=n[0],l=n[1],u=n[2],a=0;if(r.some((function(e){return 0!==t[e]}))){for(o in l)s.o(l,o)&&(s.m[o]=l[o]);if(u)var c=u(s)}for(e&&e(n);a<r.length;a++)i=r[a],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(c)},n=self["webpackChunkusertest_client"]=self["webpackChunkusertest_client"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var o=s.O(void 0,[998],(function(){return s(9268)}));o=s.O(o)})();
//# sourceMappingURL=app.68734ecf.js.map