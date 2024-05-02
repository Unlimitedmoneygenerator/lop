(function(){"use strict";var t={4028:function(t,e,i){var n=i(9242),r=(i(560),i(3396)),o=i(7718),s=i(6572),a=i(1332),d=i(9271);const l={id:"top"},u={id:"foreground"},f={key:0},c={key:0},m={id:"topup"},g=(0,r._)("button",{id:"topupce"},"Vox",-1);function p(t,e,i,n,p,h){const _=(0,r.up)("NavBar"),w=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(o.q,null,{default:(0,r.w5)((()=>[(0,r.Wm)(d.O,null,{default:(0,r.w5)((()=>[(0,r._)("div",l,[(0,r._)("div",u,[(0,r.Wm)(s.E,null,{default:(0,r.w5)((()=>[(0,r.Uk)("UNLIMITED MONEY GROUP")])),_:1})]),this.$store.state.isAuthenticated?((0,r.wg)(),(0,r.iD)("div",f,[p.showprofiledata?((0,r.wg)(),(0,r.iD)("div",c)):(0,r.kq)("",!0)])):(0,r.kq)("",!0)]),(0,r._)("div",m,[(0,r._)("button",{id:"topups",onClick:e[0]||(e[0]=e=>t.$router.push("/profile"))},"Profile"),(0,r._)("button",{id:"topupsx",onClick:e[1]||(e[1]=e=>t.$router.push("/item/none"))},"Store"),(0,r._)("button",{id:"topupsxs",onClick:e[2]||(e[2]=e=>t.$router.push("/home"))},"Home")]),(0,r.Wm)(a.Q,{id:"topupc"},{default:(0,r.w5)((()=>[g,(0,r.Uk)("22,220.00")])),_:1}),(0,r.Wm)(_),(0,r.Wm)(w)])),_:1})])),_:1})}var h=i(1076);function _(t,e){return null}var w=i(89);const k={},v=(0,w.Z)(k,[["render",_]]);var y=v,b=i(4239),W={name:"App",components:{NavBar:y},beforeCreate(){this.$store.commit("initializeStore"),this.$store.state.token?(h.Z.defaults.headers.common["Authorization"]="Token "+this.$store.state.token,this.$store.state.isAuthenticated=!0):(h.Z.defaults.headers.common["Authorization"]="",this.$store.state.isAuthenticated=!1)},data(){return{MONEY:0,showprofiledata:!0}},async mounted(){setInterval(this.twin,200),"profile"==this.$route.name?this.showprofiledata=!1:this.showprofiledata=!0},methods:{twin(){"profile"==this.$route.name?this.showprofiledata=!1:this.showprofiledata=!0},async Logout(){h.Z.post("/api/v1/token/logout/").then((t=>{})).catch((t=>{t.response})),h.Z.defaults.headers.common["Authorization"]="",localStorage.removeItem("token"),this.$store.commit("removeToken"),localStorage.removeItem("username"),localStorage.removeItem("id"),localStorage.removeItem("linked"),localStorage.removeItem("apitoken"),localStorage.removeItem("linkapiu"),localStorage.removeItem("linkapip"),localStorage.removeItem("money"),this.$router.push({path:"/login/user/sign-in"})}}};const U=(0,w.Z)(W,[["render",p]]);var C=U,E=i(2483);function S(t,e,i,n,o,s){const a=(0,r.up)("HelloWorld");return(0,r.wg)(),(0,r.j4)(a)}var x=i(6302),P=(0,r.aZ)({name:"Home",components:{HelloWorld:x["default"]}});const A=(0,w.Z)(P,[["render",S]]);var T=A;const $=[{path:"/",name:"home",component:T},{path:"/about",name:"about",component:()=>i.e(443).then(i.bind(i,6589))},{path:"/profile",name:"profile",component:()=>i.e(443).then(i.bind(i,2163))},{path:"/login/:type/:id",component:()=>i.e(973).then(i.bind(i,5973))},{path:"/item/:id/",component:()=>i.e(113).then(i.bind(i,7113))},{path:"/Home",name:"Home",component:()=>i.e(443).then(i.bind(i,6302))},{path:"/Reset/:id/:token",component:()=>i.e(593).then(i.bind(i,8593))}],I=(0,E.p7)({history:(0,E.PO)("/"),routes:$});var j=I,M=(i(9773),i(3628)),O=(0,M.Rd)({$reset:!1,theme:!1});async function Q(){const t=await i.e(461).then(i.t.bind(i,3657,23));t.load({google:{families:["Roboto:100,300,,500,700,900&display=swap"]}})}h.Z.defaults.baseURL="https://api.unlimitedmoneygroup.com",Q(),(0,n.ri)(C).use(j,h.Z).use(b.Z).use(O).mount("#app")},4239:function(t,e,i){var n=i(65);i(7387);e.Z=(0,n.MT)({state:{isLoading:!1,isAuthenticated:!1,token:"",cooldown:0,logged:!1,linkedtoken:!1,money:0,linkapip:"",linkapiu:"",linked:!1,apitoken:"",hideuser:"",hidetoken:"",depositaddress:"",user:{id:0,username:""},newtransaction:{id:0,orderamount:0,torecieve:0,amountrecieved:0,totalamount:0}},getters:{},mutations:{initializeStore(t){localStorage.getItem("token")?(t.token=localStorage.getItem("token"),t.isAuthenticated=!0,t.user.username=localStorage.getItem("username"),t.user.id=localStorage.getItem("id")):(t.token="",t.isAuthenticated=!1,t.user.id=0,t.user.username="")},ClearTrans(t){console.log("0000000"),t.newtransaction.id=0,t.newtransaction.amountrecieved=0,t.newtransaction.totalamount=0,t.newtransaction.torecieve=0,t.newtransaction.orderamount=0},Setisloading(t,e){t.isLoading=e},setToken(t,e){t.token=e,t.isAuthenticated=!0},setTimer(t){t.cooldown=t.cooldown-5},setUser(t,e){t.user=e},removeToken(t,e){t.token="",t.isAuthenticated=!1}},actions:{},modules:{}})},6302:function(t,e,i){i.r(e),i.d(e,{default:function(){return _t}});i(560);var n=i(3396),r=i(7139),o=i(2817),s=i(6572),a=i(1332),d=i(7236);const l=t=>((0,n.dD)("data-v-56d88b6f"),t=t(),(0,n.Cn)(),t),u=l((()=>(0,n._)("head",null,null,-1))),f=l((()=>(0,n._)("div",{id:"background"},null,-1))),c=l((()=>(0,n._)("div",{id:"backgroundtwo"},null,-1))),m={id:"firstcontent"},g=l((()=>(0,n._)("div",{id:"firstdrag"},null,-1))),p=["src"],h=l((()=>(0,n._)("div",{id:"firstdragss"},null,-1))),_=["src"],w=l((()=>(0,n._)("div",{id:"firstdragss"},null,-1))),k=["src"],v=["src"],y=["src"],b=["src"],W=["src"],U=["src"],C=["src"],E=["src"],S=["src"],x=["src"],P=["src"],A=["src"],T=["src"],$=["src"],I=["src"],j=["src"],M=["src"],O=["src"],Q=["src"],L=["src"],R=["src"],F=["src"],N=["src"],Z=["src"],D={id:"thirdcontent"},G=l((()=>(0,n._)("div",{id:"thirdcontentbg"},null,-1))),q=["src"],z={id:"fourthcontent"},H=l((()=>(0,n._)("div",{id:"titlecx"},null,-1))),Y=["src"],B=["src"],X={id:"secondcontent"},K=["src"],V=l((()=>(0,n._)("label",{id:"captiontext"},"Solve your money problem and help get what you want within the world with the occasional purchase of cash packs for Unlimited Money Glitch.",-1))),J={id:"contentblockdiv"},tt={id:"contentsecondlistul",class:"d-flex flex-wrap ga-10"},et=l((()=>(0,n._)("label",{id:"cardetails"},"Cash cards cannot be redeemed for real money. To activate visit unlimitedmoneyglitch.com",-1))),it={id:"purchasecard"},nt=l((()=>(0,n._)("div",{id:"purchasecardbg"},null,-1))),rt=["src"],ot=l((()=>(0,n._)("label",{id:"cashcardtitle"},null,-1))),st={id:"purchaseamount"},at=["src"],dt=["onClick"],lt=l((()=>(0,n._)("div",{id:"cards"},null,-1))),ut=l((()=>(0,n._)("div",{id:"seccards"},null,-1)));function ft(t,e,l,ft,ct,mt){return(0,n.wg)(),(0,n.iD)("html",null,[u,(0,n._)("body",null,[f,c,(0,n._)("div",m,[g,this.$store.state.isAuthenticated?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(o._,{key:0,id:"firstdrags",onClick:e[0]||(e[0]=e=>t.$router.push("/login/user/id"))},{default:(0,n.w5)((()=>[(0,n._)("img",{id:"firstdragse",src:i(1928)},null,8,p),(0,n.Wm)(s.E,{id:"firstoff"},{default:(0,n.w5)((()=>[(0,n.Uk)("Login")])),_:1}),h])),_:1})),this.$store.state.isAuthenticated?((0,n.wg)(),(0,n.j4)(o._,{key:1,id:"firstdrags",onClick:mt.Logouts},{default:(0,n.w5)((()=>[(0,n._)("img",{id:"firstdragse",src:i(1928)},null,8,_),this.$store.state.isAuthenticated?((0,n.wg)(),(0,n.j4)(s.E,{key:0,id:"firstoff"},{default:(0,n.w5)((()=>[(0,n.Uk)("Logout")])),_:1})):(0,n.kq)("",!0),w])),_:1},8,["onClick"])):(0,n.kq)("",!0),(0,n.Wm)(o._,{id:"firstdragsexs"},{default:(0,n.w5)((()=>[(0,n.Wm)(s.E,{id:"firstdragsexc"},{default:(0,n.w5)((()=>[(0,n.Uk)("Deposits")])),_:1}),(0,n.Wm)(o._,{id:"firstdragsinfo",onClick:e[1]||(e[1]=t=>ct.needdep=!ct.needdep)},{default:(0,n.w5)((()=>[(0,n.Wm)(o._,{id:"firstdragsinfots"},{default:(0,n.w5)((()=>[(0,n.Uk)("Close")])),_:1}),(0,n.Wm)(s.E,{id:"firstdragsinfot"},{default:(0,n.w5)((()=>[(0,n.Uk)("Deposits to Unlimited Money Group")])),_:1}),(0,n.Wm)(o._,{id:"firstdragsinfos"},{default:(0,n.w5)((()=>[(0,n.Wm)(d.Pv,{id:"loveyou",height:"550",color:"grey"},{default:(0,n.w5)((()=>[(0,n.Wm)(a.Q,{id:"firstdragsinfoss"},{default:(0,n.w5)((()=>[(0,n.Uk)("Press Deposit")])),_:1}),(0,n._)("img",{id:"firstdragsinfosss",src:i(4230)},null,8,k),(0,n.Wm)(a.Q,{id:"firstdragsinfoss"},{default:(0,n.w5)((()=>[(0,n.Uk)("Wait for an address if you have not already received one (May take a few moments)")])),_:1}),(0,n._)("img",{id:"firstdragsinfosss",src:i(2014)},null,8,v),(0,n.Wm)(a.Q,{id:"firstdragsinfoss"},{default:(0,n.w5)((()=>[(0,n.Uk)("Funds will automatically appear once the transaction has been confirmed")])),_:1}),(0,n._)("img",{id:"firstdragsinfosss",src:i(335)},null,8,y)])),_:1})])),_:1})])),_:1})])),_:1}),(0,n.Wm)(o._,{id:"firstdragsexse"},{default:(0,n.w5)((()=>[(0,n.Wm)(o._,{id:"firstdragsinfo",onClick:e[2]||(e[2]=t=>ct.wantwith=!ct.wantwith)},{default:(0,n.w5)((()=>[(0,n.Wm)(o._,{id:"firstdragsinfots"},{default:(0,n.w5)((()=>[(0,n.Uk)("Close")])),_:1}),(0,n.Wm)(s.E,{id:"firstdragsinfot"},{default:(0,n.w5)((()=>[(0,n.Uk)("Withdrawals from Unlimited Money Group")])),_:1}),(0,n.Wm)(o._,{id:"firstdragsinfos"},{default:(0,n.w5)((()=>[(0,n.Wm)(d.Pv,{id:"loveyou",height:"550",color:"grey"},{default:(0,n.w5)((()=>[(0,n.Wm)(a.Q,{id:"firstdragsinfoss"},{default:(0,n.w5)((()=>[(0,n.Uk)("Press Withdraw")])),_:1}),(0,n._)("img",{id:"firstdragsinfosss",src:i(1722)},null,8,b),(0,n.Wm)(a.Q,{id:"firstdragsinfoss"},{default:(0,n.w5)((()=>[(0,n.Uk)("Enter an address and the desired withdrawal amount (Must have enough currency)")])),_:1}),(0,n._)("img",{id:"firstdragsinfosss",src:i(4943)},null,8,W),(0,n.Wm)(a.Q,{id:"firstdragsinfoss"},{default:(0,n.w5)((()=>[(0,n.Uk)("Funds will be sent instantly if the transaction is successful (Please Refresh)")])),_:1}),(0,n._)("img",{id:"firstdragsinfosss",src:i(1514)},null,8,U)])),_:1})])),_:1})])),_:1}),(0,n.Wm)(s.E,{id:"firstdragsexc"},{default:(0,n.w5)((()=>[(0,n.Uk)("Withdrawals")])),_:1})])),_:1}),(0,n.Wm)(o._,{id:"firstdragsex"},{default:(0,n.w5)((()=>[(0,n.Wm)(s.E,{id:"firstdragsexc"},{default:(0,n.w5)((()=>[(0,n.Uk)("Transfers")])),_:1}),(0,n.Wm)(o._,{id:"firstdragsinfo",onClick:e[3]||(e[3]=t=>ct.needtrans=!ct.needtrans)},{default:(0,n.w5)((()=>[(0,n.Wm)(o._,{id:"firstdragsinfots"},{default:(0,n.w5)((()=>[(0,n.Uk)("Close")])),_:1}),(0,n.Wm)(s.E,{id:"firstdragsinfot"},{default:(0,n.w5)((()=>[(0,n.Uk)("Transfers to Unlimited Money Glitch")])),_:1}),(0,n.Wm)(o._,{id:"firstdragsinfos"},{default:(0,n.w5)((()=>[(0,n.Wm)(d.Pv,{id:"loveyou",height:"550",color:"grey"},{default:(0,n.w5)((()=>[(0,n.Wm)(a.Q,{id:"firstdragsinfoss"},{default:(0,n.w5)((()=>[(0,n.Uk)("Connect Your Account (Press 'Apps/Accounts' or 'X' in the top left)")])),_:1}),(0,n._)("img",{id:"firstdragsinfosss",src:i(335)},null,8,C),(0,n.Wm)(a.Q,{id:"firstdragsinfoss"},{default:(0,n.w5)((()=>[(0,n.Uk)("Link Your Account (Press Link)")])),_:1}),(0,n._)("img",{id:"firstdragsinfosss",src:i(4164)},null,8,E),(0,n.Wm)(a.Q,{id:"firstdragsinfoss"},{default:(0,n.w5)((()=>[(0,n.Uk)("Authenticate (Sign In)")])),_:1}),(0,n._)("img",{id:"firstdragsinfosss",src:i(5218)},null,8,S),(0,n.Wm)(a.Q,{id:"firstdragsinfoss"},{default:(0,n.w5)((()=>[(0,n.Uk)("Press Transfer (Authenticated)")])),_:1}),(0,n._)("img",{id:"firstdragsinfosss",src:i(8394)},null,8,x),(0,n.Wm)(a.Q,{id:"firstdragsinfoss"},{default:(0,n.w5)((()=>[(0,n.Uk)("Enter Transfer Amount (To Unlimited Money Glitch) (Press Enter)")])),_:1}),(0,n._)("img",{id:"firstdragsinfosss",src:i(4612)},null,8,P),(0,n.Wm)(a.Q,{id:"firstdragsinfoss"},{default:(0,n.w5)((()=>[(0,n.Uk)("Confirm Transfer with Password (Press Enter)")])),_:1}),(0,n._)("img",{id:"firstdragsinfosss",src:i(786)},null,8,A)])),_:1})])),_:1})])),_:1})])),_:1}),(0,n.Wm)(o._,{id:"firstdragsexe"},{default:(0,n.w5)((()=>[(0,n.Wm)(s.E,{id:"torr"},{default:(0,n.w5)((()=>[(0,n.Uk)("Support@unlimitedmoneygroup.com")])),_:1})])),_:1}),ct.needtrans?((0,n.wg)(),(0,n.j4)(o._,{key:2,id:"firstdragsinfo",onClick:e[4]||(e[4]=t=>ct.needtrans=!ct.needtrans)},{default:(0,n.w5)((()=>[(0,n.Wm)(o._,{id:"firstdragsinfots"},{default:(0,n.w5)((()=>[(0,n.Uk)("Close")])),_:1}),(0,n.Wm)(s.E,{id:"firstdragsinfot"},{default:(0,n.w5)((()=>[(0,n.Uk)("Transfers to Unlimited Money Glitch")])),_:1}),(0,n.Wm)(o._,{id:"firstdragsinfos"},{default:(0,n.w5)((()=>[(0,n.Wm)(d.Pv,{id:"loveyou",height:"550",color:"grey"},{default:(0,n.w5)((()=>[(0,n.Wm)(a.Q,{id:"firstdragsinfoss"},{default:(0,n.w5)((()=>[(0,n.Uk)("Connect Your Account (Press 'Apps/Accounts' or 'X' in the top left)")])),_:1}),(0,n._)("img",{id:"firstdragsinfosss",src:i(335)},null,8,T),(0,n.Wm)(a.Q,{id:"firstdragsinfoss"},{default:(0,n.w5)((()=>[(0,n.Uk)("Link Your Account (Press Link)")])),_:1}),(0,n._)("img",{id:"firstdragsinfosss",src:i(4164)},null,8,$),(0,n.Wm)(a.Q,{id:"firstdragsinfoss"},{default:(0,n.w5)((()=>[(0,n.Uk)("Authenticate (Sign In)")])),_:1}),(0,n._)("img",{id:"firstdragsinfosss",src:i(5218)},null,8,I),(0,n.Wm)(a.Q,{id:"firstdragsinfoss"},{default:(0,n.w5)((()=>[(0,n.Uk)("Press Transfer (Authenticated)")])),_:1}),(0,n._)("img",{id:"firstdragsinfosss",src:i(8394)},null,8,j),(0,n.Wm)(a.Q,{id:"firstdragsinfoss"},{default:(0,n.w5)((()=>[(0,n.Uk)("Enter Transfer Amount (To Unlimited Money Glitch) (Press Transfer)")])),_:1}),(0,n._)("img",{id:"firstdragsinfosss",src:i(4612)},null,8,M),(0,n.Wm)(a.Q,{id:"firstdragsinfoss"},{default:(0,n.w5)((()=>[(0,n.Uk)("Confirm Transfer with Password (Press Enter)")])),_:1}),(0,n._)("img",{id:"firstdragsinfosss",src:i(786)},null,8,O)])),_:1})])),_:1})])),_:1})):(0,n.kq)("",!0),ct.wantwith?((0,n.wg)(),(0,n.j4)(o._,{key:3,id:"firstdragsinfo",onClick:e[5]||(e[5]=t=>ct.wantwith=!ct.wantwith)},{default:(0,n.w5)((()=>[(0,n.Wm)(o._,{id:"firstdragsinfots"},{default:(0,n.w5)((()=>[(0,n.Uk)("Close")])),_:1}),(0,n.Wm)(s.E,{id:"firstdragsinfot"},{default:(0,n.w5)((()=>[(0,n.Uk)("Withdrawals from Unlimited Money Group")])),_:1}),(0,n.Wm)(o._,{id:"firstdragsinfos"},{default:(0,n.w5)((()=>[(0,n.Wm)(d.Pv,{id:"loveyou",height:"550",color:"grey"},{default:(0,n.w5)((()=>[(0,n.Wm)(a.Q,{id:"firstdragsinfoss"},{default:(0,n.w5)((()=>[(0,n.Uk)("Press Withdraw")])),_:1}),(0,n._)("img",{id:"firstdragsinfosss",src:i(1722)},null,8,Q),(0,n.Wm)(a.Q,{id:"firstdragsinfoss"},{default:(0,n.w5)((()=>[(0,n.Uk)("Enter an address and the desired withdrawal amount (Must have enough currency)")])),_:1}),(0,n._)("img",{id:"firstdragsinfosss",src:i(4943)},null,8,L),(0,n.Wm)(a.Q,{id:"firstdragsinfoss"},{default:(0,n.w5)((()=>[(0,n.Uk)("Funds will be sent instantly if the transaction is successful (Please Refresh)")])),_:1}),(0,n._)("img",{id:"firstdragsinfosss",src:i(1514)},null,8,R)])),_:1})])),_:1})])),_:1})):(0,n.kq)("",!0),ct.needdep?((0,n.wg)(),(0,n.j4)(o._,{key:4,id:"firstdragsinfo",onClick:e[6]||(e[6]=t=>ct.needdep=!ct.needdep)},{default:(0,n.w5)((()=>[(0,n.Wm)(o._,{id:"firstdragsinfots"},{default:(0,n.w5)((()=>[(0,n.Uk)("Close")])),_:1}),(0,n.Wm)(s.E,{id:"firstdragsinfot"},{default:(0,n.w5)((()=>[(0,n.Uk)("Deposits to Unlimited Money Group")])),_:1}),(0,n.Wm)(o._,{id:"firstdragsinfos"},{default:(0,n.w5)((()=>[(0,n.Wm)(d.Pv,{id:"loveyou",height:"550",color:"grey"},{default:(0,n.w5)((()=>[(0,n.Wm)(a.Q,{id:"firstdragsinfoss"},{default:(0,n.w5)((()=>[(0,n.Uk)("Press Deposit")])),_:1}),(0,n._)("img",{id:"firstdragsinfosss",src:i(4230)},null,8,F),(0,n.Wm)(a.Q,{id:"firstdragsinfoss"},{default:(0,n.w5)((()=>[(0,n.Uk)("Wait for an address if you have not already received one (May take a few moments)")])),_:1}),(0,n._)("img",{id:"firstdragsinfosss",src:i(2014)},null,8,N),(0,n.Wm)(a.Q,{id:"firstdragsinfoss"},{default:(0,n.w5)((()=>[(0,n.Uk)("Funds will automatically appear once the transaction has been confirmed")])),_:1}),(0,n._)("img",{id:"firstdragsinfosss",src:i(335)},null,8,Z)])),_:1})])),_:1})])),_:1})):(0,n.kq)("",!0)]),(0,n._)("div",D,[G,(0,n.Wm)(o._,{id:"firstdragsgh",onClick:e[7]||(e[7]=e=>t.$router.push("/profile"))},{default:(0,n.w5)((()=>[(0,n._)("img",{id:"firstdragses",src:i(7368)},null,8,q)])),_:1}),(0,n.Wm)(s.E,{id:"titlecs"},{default:(0,n.w5)((()=>[(0,n.Uk)("Profile")])),_:1})]),(0,n._)("div",z,[H,(0,n.Wm)(s.E,{id:"titlec"},{default:(0,n.w5)((()=>[(0,n.Uk)("Technology")])),_:1}),(0,n.Wm)(o._,{id:"fourthcontents",onClick:mt.glitchredir},{default:(0,n.w5)((()=>[(0,n._)("img",{id:"firstdragses",src:i(7699)},null,8,Y),(0,n.Wm)(a.Q,{id:"firstdragsess"},{default:(0,n.w5)((()=>[(0,n.Uk)("Unlimited Money Generator")])),_:1})])),_:1},8,["onClick"]),(0,n.Wm)(o._,{id:"fourthcontentss",onClick:mt.glitchredir},{default:(0,n.w5)((()=>[(0,n._)("img",{id:"firstdragsesd",src:i(1096)},null,8,B),(0,n.Wm)(a.Q,{id:"firstdragsess"},{default:(0,n.w5)((()=>[(0,n.Uk)("Unlimited Money Glitch")])),_:1})])),_:1},8,["onClick"])]),(0,n._)("div",X,[(0,n.Wm)(o._,{id:"bglayer"},{default:(0,n.w5)((()=>[(0,n._)("img",{id:"pxfuel",src:i(3)},null,8,K)])),_:1}),(0,n.Wm)(o._,{id:"bglayercontent"},{default:(0,n.w5)((()=>[(0,n.Wm)(s.E,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Buy Cash Cards")])),_:1})])),_:1}),(0,n.Wm)(o._,{id:"backdropcashcard"}),(0,n.Wm)(o._,{id:"backdropcashcardline"}),(0,n.Wm)(o._,{id:"caption"},{default:(0,n.w5)((()=>[V])),_:1}),(0,n._)("div",J,[(0,n._)("div",tt,[(0,n.Wm)(o._,{id:"cardbgbg"}),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(ct.purchaseoptions,((e,a)=>((0,n.wg)(),(0,n.j4)(o._,{id:"card",style:{height:"65vh"},key:t.n,width:"22.5%"},{default:(0,n.w5)((()=>[(0,n.Wm)(o._,{id:"cardbg"}),et,(0,n._)("div",it,[nt,(0,n.Wm)(o._,{id:"moneyfuelbg"},{default:(0,n.w5)((()=>[(0,n._)("img",{id:"moneyfuel",src:i(9766)},null,8,rt)])),_:1})]),(0,n.Wm)(o._,{id:"purchasebgtop"},{default:(0,n.w5)((()=>[(0,n.Wm)(s.E,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Cash Card")])),_:1}),ot])),_:1}),(0,n.Wm)(o._,{id:"purchasebg"},{default:(0,n.w5)((()=>[(0,n.Wm)(s.E,{id:"purchasetitle"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,r.zw)(e.title),1)])),_:2},1024),(0,n._)("label",st,"$"+(0,r.zw)(Intl.NumberFormat().format(e.amount))+".00",1)])),_:2},1024),(0,n.Wm)(o._,{id:"fuelbg"}),(0,n.Wm)(o._,{id:"fuel"},{default:(0,n.w5)((()=>[(0,n._)("img",{id:"fuelgod",src:i(4770)},null,8,at),(0,n.Wm)(o._,{id:"cardetailslines"}),(0,n.Wm)(s.E,{ID:"FUELGD"},{default:(0,n.w5)((()=>[(0,n.Uk)("$"+(0,r.zw)(Intl.NumberFormat().format(e.amount))+".00",1)])),_:2},1024)])),_:2},1024),(0,n.Wm)(o._,{id:"fuelborder"}),(0,n.Wm)(o._,{id:"purchase"},{default:(0,n.w5)((()=>[(0,n.Uk)("Purchase")])),_:1}),(0,n.Wm)(o._,{id:"cardetailsline"}),(0,n._)("button",{id:"ordinary",onClick:t=>mt.PUSHROUTERITEM(a)},null,8,dt)])),_:2},1024)))),128))])])]),lt,ut])])}i(4239);var ct=i(1076);document.body.addEventListener("keydown",(t=>{}));var mt="";document.onmousemove=t=>{"aboutusopt"==t.target.id&&(mt=t.target.innerText,console.log(mt))};var gt={data(){return{homeoptions:["L","P","S","X"],purchaseoptions:[{amount:"10000",title:"Unlimited Money Cash Card"},{amount:"100",title:"Unlimited Money Cash Card"},{amount:"50",title:"Unlimited Money Cash Card"}],itemid:["5FZAeFz9QFRNGxt","lodt1w6RY9RlLIF","gZ3o7byRRdMwctM"],paths:["/home","/profile","/item/none","unlimitedmoneyglitch.com"],needtrans:!1,needdep:!1,wantwith:!1}},async mounted(){this.$store.state.isAuthenticated&&this.profile()},methods:{glitchredir(){window.location.replace("https://unlimitedmoneyglitch.com")},generedir(){window.location.replace("https://unlimitedmoneygenerator.com")},profile(){const t={token:localStorage.token};ct.Z.post("/api/v1/GETPROFILE/",t).then((t=>{localStorage.setItem("money",t.data.Money.toFixed(2)),this.$store.state.money=t.data.Money,this.$store.state.money=this.$store.state.money.toFixed(2),this.$store.state.hideuser=t.data.username,this.$store.state.hidetoken=localStorage.token})).catch((t=>{t.response}))},async Logouts(){ct.Z.post("/api/v1/token/logout/").then((t=>{})).catch((t=>{t.response})),ct.Z.defaults.headers.common["Authorization"]="",localStorage.removeItem("token"),this.$store.commit("removeToken"),localStorage.removeItem("username"),localStorage.removeItem("id"),localStorage.removeItem("linked"),localStorage.removeItem("apitoken"),localStorage.removeItem("linkapiu"),localStorage.removeItem("linkapip"),localStorage.removeItem("money"),this.$router.push({path:"/login/user/sign-in"})},alias(){window.location.replace("https://unlimitedmoneyglitch.com")},nav(t){1==t?this.$store.state.token?this.$router.push({path:this.paths[t]}):this.$router.push({path:"/login/user/id"}):3==t?window.location.replace("https://unlimitedmoneyglitch.com"):this.$router.push({path:this.paths[t]})},PUSHROUTERITEM(t){this.$store.state.isAuthenticated?this.$router.push({path:`/item/${this.itemid[t]}`}):this.$router.push({path:`/login/item/${this.itemid[t]}`})}}},pt=i(89);const ht=(0,pt.Z)(gt,[["render",ft],["__scopeId","data-v-56d88b6f"]]);var _t=ht},4943:function(t,e,i){t.exports=i.p+"img/EXTREME.b70142b8.png"},335:function(t,e,i){t.exports=i.p+"img/PRESS.703f227b.png"},4230:function(t,e,i){t.exports=i.p+"img/PRESSA.d2ff68ac.png"},1722:function(t,e,i){t.exports=i.p+"img/PRESSAS.3f997e3c.png"},4164:function(t,e,i){t.exports=i.p+"img/XD.9894b042.png"},5218:function(t,e,i){t.exports=i.p+"img/ana.4426aa60.png"},4770:function(t,e,i){t.exports=i.p+"img/capsule.5a321948.jpg"},786:function(t,e,i){t.exports=i.p+"img/confi.620b3923.png"},7368:function(t,e,i){t.exports=i.p+"img/francisco-segovia.a6bb54d3.jpg"},1096:function(t,e,i){t.exports=i.p+"img/francisco.b5cd4ab7.jpg"},7699:function(t,e,i){t.exports=i.p+"img/goku-house.d25282dc.jpg"},2014:function(t,e,i){t.exports=i.p+"img/makesure.b4d8fbb2.png"},4612:function(t,e,i){t.exports=i.p+"img/man.7af8c1bc.png"},9766:function(t,e,i){t.exports=i.p+"img/money.75bf87a0.png"},1928:function(t,e,i){t.exports=i.p+"img/power-firma.4f282a4e.jpg"},3:function(t,e,i){t.exports=i.p+"img/pxfuel.bc43fc80.jpg"},1514:function(t,e,i){t.exports=i.p+"img/spare.d99d10c4.png"},8394:function(t,e,i){t.exports=i.p+"img/trans.bfd20972.png"}},e={};function i(n){var r=e[n];if(void 0!==r)return r.exports;var o=e[n]={exports:{}};return t[n].call(o.exports,o,o.exports,i),o.exports}i.m=t,function(){var t=[];i.O=function(e,n,r,o){if(!n){var s=1/0;for(u=0;u<t.length;u++){n=t[u][0],r=t[u][1],o=t[u][2];for(var a=!0,d=0;d<n.length;d++)(!1&o||s>=o)&&Object.keys(i.O).every((function(t){return i.O[t](n[d])}))?n.splice(d--,1):(a=!1,o<s&&(s=o));if(a){t.splice(u--,1);var l=r();void 0!==l&&(e=l)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[n,r,o]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){var t,e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__};i.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"===typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"===typeof n.then)return n}var o=Object.create(null);i.r(o);var s={};t=t||[null,e({}),e([]),e(e)];for(var a=2&r&&n;"object"==typeof a&&!~t.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach((function(t){s[t]=function(){return n[t]}}));return s["default"]=function(){return n},i.d(o,s),o}}(),function(){i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){i.f={},i.e=function(t){return Promise.all(Object.keys(i.f).reduce((function(e,n){return i.f[n](t,e),e}),[]))}}(),function(){i.u=function(t){return"js/"+({443:"about",461:"webfontloader"}[t]||t)+"."+{113:"cb1be867",443:"5b45f75f",461:"0deb4d98",593:"054bb704",973:"74909b9e"}[t]+".js"}}(),function(){i.miniCssF=function(t){return"css/"+(443===t?"about":t)+"."+{113:"964cbf21",443:"470b657e",593:"d9c175a7",973:"7f635635"}[t]+".css"}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="unlimitedmoneyglitch_vue:";i.l=function(n,r,o,s){if(t[n])t[n].push(r);else{var a,d;if(void 0!==o)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var f=l[u];if(f.getAttribute("src")==n||f.getAttribute("data-webpack")==e+o){a=f;break}}a||(d=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.setAttribute("data-webpack",e+o),a.src=n),t[n]=[r];var c=function(e,i){a.onerror=a.onload=null,clearTimeout(m);var r=t[n];if(delete t[n],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(t){return t(i)})),e)return e(i)},m=setTimeout(c.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=c.bind(null,a.onerror),a.onload=c.bind(null,a.onload),d&&document.head.appendChild(a)}}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){i.p="/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,i,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var s=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var s=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||e,d=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=s,d.request=a,o.parentNode&&o.parentNode.removeChild(o),r(d)}};return o.onerror=o.onload=s,o.href=e,i?i.parentNode.insertBefore(o,i.nextSibling):document.head.appendChild(o),o},e=function(t,e){for(var i=document.getElementsByTagName("link"),n=0;n<i.length;n++){var r=i[n],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===t||o===e))return r}var s=document.getElementsByTagName("style");for(n=0;n<s.length;n++){r=s[n],o=r.getAttribute("data-href");if(o===t||o===e)return r}},n=function(n){return new Promise((function(r,o){var s=i.miniCssF(n),a=i.p+s;if(e(s,a))return r();t(n,a,null,r,o)}))},r={143:0};i.f.miniCss=function(t,e){var i={113:1,443:1,593:1,973:1};r[t]?e.push(r[t]):0!==r[t]&&i[t]&&e.push(r[t]=n(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}}(),function(){var t={143:0};i.f.j=function(e,n){var r=i.o(t,e)?t[e]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(i,n){r=t[e]=[i,n]}));n.push(r[2]=o);var s=i.p+i.u(e),a=new Error,d=function(n){if(i.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;a.message="Loading chunk "+e+" failed.\n("+o+": "+s+")",a.name="ChunkLoadError",a.type=o,a.request=s,r[1](a)}};i.l(s,d,"chunk-"+e,e)}},i.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,o,s=n[0],a=n[1],d=n[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(r in a)i.o(a,r)&&(i.m[r]=a[r]);if(d)var u=d(i)}for(e&&e(n);l<s.length;l++)o=s[l],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return i.O(u)},n=self["webpackChunkunlimitedmoneyglitch_vue"]=self["webpackChunkunlimitedmoneyglitch_vue"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(4028)}));n=i.O(n)})();
//# sourceMappingURL=app.91b7ef98.js.map