(function(){"use strict";var e={3309:function(e,t,n){var o=n(3751),i=n(641),r=n(953),l=n(5220);function a(e){const t=`; ${document.cookie}`,n=t.split(`; ${e}=`);if(2===n.length){const e=n.pop().split(";").shift();return e}}const u={class:"wrapper"};var s={__name:"App",setup(e){return(e,t)=>((0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.Lk)("header",null,[(0,i.Lk)("div",u,[(0,i.Lk)("nav",null,[(0,i.bF)((0,r.R1)(l.Wk),{to:"/"},{default:(0,i.k6)((()=>[(0,i.eW)("Home")])),_:1}),(0,r.R1)(a)("token")?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.Wv)((0,r.R1)(l.Wk),{key:0,to:"/authorization"},{default:(0,i.k6)((()=>[(0,i.eW)("Login")])),_:1})),(0,r.R1)(a)("token")?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.Wv)((0,r.R1)(l.Wk),{key:1,to:"/registration"},{default:(0,i.k6)((()=>[(0,i.eW)("Sign Up")])),_:1})),(0,i.bF)((0,r.R1)(l.Wk),{to:"/logout"},{default:(0,i.k6)((()=>[(0,i.eW)("Logout")])),_:1}),(0,r.R1)(a)("token")?((0,i.uX)(),(0,i.Wv)((0,r.R1)(l.Wk),{key:2,to:"/files"},{default:(0,i.k6)((()=>[(0,i.eW)("Files")])),_:1})):(0,i.Q3)("",!0)])])]),(0,i.Lk)("main",null,[(0,i.bF)((0,r.R1)(l.Tp))])],64))}},c=n(6262);const d=(0,c.A)(s,[["__scopeId","data-v-672cecf8"]]);var f=d;const h=e=>((0,i.Qi)("data-v-efb5c9d0"),e=e(),(0,i.jt)(),e),p=h((()=>(0,i.Lk)("h1",null,"Я шизофреник",-1))),k=h((()=>(0,i.Lk)("img",{alt:"хахахах",src:"https://psv4.userapi.com/c237331/u151588541/docs/d35/5dd7a1414ed6/khekhe_blya.gif?extra=_GvojgL3mAtddlF6h39FPkEOadXcGfD89DJyYgMAvMNeGwskRAn_bgjZhDhPvE5OIhL73NeDi_73hVkKuFvldnvw85joT-AfYNy4P4i8JX3MUdnQJc81cnwdsCA4AOHIHu7nvld9gxyapBNx6XPEzom45g"},null,-1))),m=[p,k];function g(e,t){return(0,i.uX)(),(0,i.CE)("main",null,m)}const v={},b=(0,c.A)(v,[["render",g],["__scopeId","data-v-efb5c9d0"]]);var y=b;const L=(0,i.Lk)("h2",null,"Авторизация",-1),w=(0,i.Lk)("label",{for:"email"},"Email:",-1),A=(0,i.Lk)("label",{for:"password"},"Пароль:",-1),F=(0,i.Lk)("button",{type:"submit"},"Войти",-1);function C(e,t,n,r,l,a){const u=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)("div",null,[L,(0,i.Lk)("form",{onSubmit:t[2]||(t[2]=(0,o.D$)(((...e)=>a.login&&a.login(...e)),["prevent"]))},[w,(0,i.bo)((0,i.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":t[0]||(t[0]=e=>l.email=e),required:""},null,512),[[o.Jo,l.email]]),A,(0,i.bo)((0,i.Lk)("input",{type:"password",id:"password","onUpdate:modelValue":t[1]||(t[1]=e=>l.password=e),required:""},null,512),[[o.Jo,l.password]]),F],32),(0,i.bF)(u,{to:"/registration"},{default:(0,i.k6)((()=>[(0,i.eW)("Не зареган?")])),_:1})])}var _=n(1250),E={data(){return{email:"",password:""}},methods:{async login(){try{const e=await _.A.post("http://file-hosting.ru/api-file/authorization",{email:this.email,password:this.password});document.cookie=`token=${e.data.token}; expires=${new Date(Date.now()+6048e5).toUTCString()}; path=/`,console.log("Успешная авторизация",e.data)}catch(e){console.error("Ошибка при авторизации:",e.response.data)}}}};const O=(0,c.A)(E,[["render",C]]);var j=O;const R=(0,i.Lk)("h2",null,"Выход",-1);function X(e,t,n,o,r,l){return(0,i.uX)(),(0,i.CE)("div",null,[R,(0,i.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>l.logout&&l.logout(...e))},"Выйти")])}var z={methods:{async logout(){try{await _.A.get("http://file-hosting.ru/api-file/logout",{headers:{Authorization:"Bearer "+a("token")}}),document.cookie="token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",console.log("Вы успешно вышли")}catch(e){console.error("Ошибка:",e)}}}};const T=(0,c.A)(z,[["render",X]]);var U=T,W=n(33);const B=(0,i.Lk)("h2",null,"Ваши файлы",-1),$=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th",null,"Имя файла"),(0,i.Lk)("th",null,"Ссылка"),(0,i.Lk)("th",null,"Действия"),(0,i.Lk)("th",null,"Права доступа")])],-1),x=["onClick"],N=["onClick"],P=["onClick"],S=["onClick"],D=["onClick"],I=(0,i.Lk)("h2",null,"Файлы, к которым у вас есть доступ",-1),J=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th",null,"Имя файла"),(0,i.Lk)("th",null,"Ссылка")])],-1),K=["onClick"];function M(e,t,n,o,r,l){const a=(0,i.g2)("upload-view");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(a),(0,i.Lk)("div",null,[B,(0,i.Lk)("table",null,[$,(0,i.Lk)("tbody",null,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(r.files,(e=>((0,i.uX)(),(0,i.CE)("tr",{key:e.file_id},[(0,i.Lk)("td",null,(0,W.v_)(e.name),1),(0,i.Lk)("td",null,[(0,i.Lk)("button",{onClick:t=>l.downloadFile(e.file_id)},"Скачать",8,x)]),(0,i.Lk)("td",null,[(0,i.Lk)("button",{onClick:t=>l.editFileName(e.file_id)},"Редактировать",8,N),(0,i.Lk)("button",{onClick:t=>l.deleteFile(e.file_id)},"Удалить",8,P)]),(0,i.Lk)("td",null,[(0,i.Lk)("button",{onClick:t=>l.addRight(e.file_id)},"Добавить",8,S),(0,i.Lk)("button",{onClick:t=>l.deleteRight(e.file_id)},"Удалить",8,D)])])))),128))])])]),(0,i.Lk)("div",null,[I,(0,i.Lk)("table",null,[J,(0,i.Lk)("tbody",null,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(r.sharedFiles,(e=>((0,i.uX)(),(0,i.CE)("tr",{key:e.file_id},[(0,i.Lk)("td",null,(0,W.v_)(e.name),1),(0,i.Lk)("td",null,[(0,i.Lk)("button",{onClick:t=>l.downloadFile(e.file_id)},"Скачать",8,K)])])))),128))])])])],64)}n(4603),n(7566),n(8721);const Q=(0,i.Lk)("h2",null,"Загрузка файлов",-1);function V(e,t,n,o,r,l){return(0,i.uX)(),(0,i.CE)("div",null,[Q,(0,i.Lk)("input",{type:"file",ref:"fileInput",multiple:"",onChange:t[0]||(t[0]=(...e)=>l.handleFileUpload&&l.handleFileUpload(...e))},null,544)])}var q={methods:{async handleFileUpload(){const e=new FormData,t=this.$refs.fileInput.files;for(let o=0;o<t.length;o++)e.append("files[]",t[o]);try{const t=await _.A.post("http://file-hosting.ru/api-file/files",e,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+a("token")}});console.log("Файлы успешно загружены:",t.data)}catch(n){console.error("Ошибка загрузки файлов:",n.response.data)}}}};const G=(0,c.A)(q,[["render",V]]);var H=G,Y={components:{UploadView:H},data(){return{files:[],sharedFiles:[],newName:"",email:""}},mounted(){this.fetchFiles(),this.fetchSharedFiles()},methods:{async fetchFiles(){try{const e=await _.A.get("http://file-hosting.ru/api-file/disk",{headers:{Authorization:"Bearer "+a("token")}});this.files=e.data}catch(e){console.error("Ошибка при получении списка файлов:",e)}},async fetchSharedFiles(){try{const e=await _.A.get("http://file-hosting.ru/api-file/shared",{headers:{Authorization:"Bearer "+a("token")}});this.sharedFiles=e.data}catch(e){console.error("Ошибка при получении списка файлов:",e)}},async downloadFile(e){try{const t=await _.A.get(`http://file-hosting.ru/api-file/files/${e}`,{responseType:"blob",headers:{Authorization:"Bearer "+a("token")}}),n=window.URL.createObjectURL(new Blob([t.data])),o=document.createElement("a");o.href=n,o.setAttribute("download",t.headers["content-disposition"].split("filename=")[1]),document.body.appendChild(o),o.click(),URL.revokeObjectURL(n)}catch(t){console.error("Ошибка при скачивании файла:",t)}},async editFileName(e){const t=prompt("Введите новое имя файла:");if(null!==t)try{await _.A.patch(`http://file-hosting.ru/api-file/files/${e}`,{name:t},{headers:{Authorization:"Bearer "+a("token")}}),alert("Имя файла успешно изменено!"),this.fetchFiles()}catch(n){console.error("Ошибка при редактировании имени файла:",n)}},async deleteFile(e){if(confirm("Вы уверены, что хотите удалить этот файл?"))try{await _.A.delete(`http://file-hosting.ru/api-file/files/${e}`,{headers:{Authorization:"Bearer "+a("token")}}),alert("Файл успешно удален!"),this.fetchFiles()}catch(t){console.error("Ошибка при удалении файла:",t)}},async addRight(e){const t=prompt("Введите email пользователя, которому будет предоставлен доступ: :");if(null!==t)try{await _.A.post(`http://file-hosting.ru/api-file/files/${e}/accesses`,{email:t},{headers:{Authorization:"Bearer "+a("token")}}),alert("Доступ добавлен!"),this.fetchFiles()}catch(n){console.error("Ошибка при добавлении права:",n)}},async deleteRight(e){const t=prompt("Введите email пользователя, у которого забрать доступ: :");if(confirm("Вы уверены, что хотите забрать доступ у пользователя: "+t+" ?"))try{await _.A.delete(`http://file-hosting.ru/api-file/files/${e}/accesses?email=${t}`,{headers:{Authorization:"Bearer "+a("token")}}),alert("Доступ забран!"),this.fetchFiles()}catch(n){console.error("Ошибка:",n)}}}};const Z=(0,c.A)(Y,[["render",M]]);var ee=Z;const te=(0,l.aE)({history:(0,l.LA)("/"),routes:[{path:"/",name:"home",component:y},{path:"/registration",name:"registration",component:()=>n.e(964).then(n.bind(n,1964))},{path:"/authorization",name:"authorization",component:j},{path:"/logout",name:"logout",component:U},{path:"/files",name:"files",component:ee}]});var ne=te;const oe=(0,o.Ef)(f);oe.use(ne),oe.mount("#app")}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,r){if(!o){var l=1/0;for(c=0;c<e.length;c++){o=e[c][0],i=e[c][1],r=e[c][2];for(var a=!0,u=0;u<o.length;u++)(!1&r||l>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(a=!1,r<l&&(l=r));if(a){e.splice(c--,1);var s=i();void 0!==s&&(t=s)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,i,r]}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".3593ac5f.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="client:";n.l=function(o,i,r,l){if(e[o])e[o].push(i);else{var a,u;if(void 0!==r)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+r){a=d;break}}a||(u=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+r),a.src=o),e[o]=[i];var f=function(t,n){a.onerror=a.onload=null,clearTimeout(h);var i=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),u&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/client/"}(),function(){var e={524:0};n.f.j=function(t,o){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)o.push(i[2]);else{var r=new Promise((function(n,o){i=e[t]=[n,o]}));o.push(i[2]=r);var l=n.p+n.u(t),a=new Error,u=function(o){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var r=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+r+": "+l+")",a.name="ChunkLoadError",a.type=r,a.request=l,i[1](a)}};n.l(l,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,r,l=o[0],a=o[1],u=o[2],s=0;if(l.some((function(t){return 0!==e[t]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(u)var c=u(n)}for(t&&t(o);s<l.length;s++)r=l[s],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},o=self["webpackChunkclient"]=self["webpackChunkclient"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(3309)}));o=n.O(o)})();
//# sourceMappingURL=app.b3e489be.js.map