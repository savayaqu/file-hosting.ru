(function(){"use strict";var e={3153:function(e,t,n){var o=n(3751),r=n(641),i=n(953),l=n(5220);function a(e){const t=`; ${document.cookie}`,n=t.split(`; ${e}=`);if(2===n.length){const e=n.pop().split(";").shift();return e}}const s={class:"wrapper"};var u={__name:"App",setup(e){return(e,t)=>((0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("header",null,[(0,r.Lk)("div",s,[(0,r.Lk)("nav",null,[(0,r.bF)((0,i.R1)(l.Wk),{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("Home")])),_:1}),(0,i.R1)(a)("token")?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.Wv)((0,i.R1)(l.Wk),{key:0,to:"/authorization"},{default:(0,r.k6)((()=>[(0,r.eW)("Login")])),_:1})),(0,i.R1)(a)("token")?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.Wv)((0,i.R1)(l.Wk),{key:1,to:"/registration"},{default:(0,r.k6)((()=>[(0,r.eW)("Sign Up")])),_:1})),(0,i.R1)(a)("token")?((0,r.uX)(),(0,r.Wv)((0,i.R1)(l.Wk),{key:2,to:"/logout"},{default:(0,r.k6)((()=>[(0,r.eW)("Logout")])),_:1})):(0,r.Q3)("",!0),(0,i.R1)(a)("token")?((0,r.uX)(),(0,r.Wv)((0,i.R1)(l.Wk),{key:3,to:"/files"},{default:(0,r.k6)((()=>[(0,r.eW)("Files")])),_:1})):(0,r.Q3)("",!0)])])]),(0,r.Lk)("main",null,[(0,r.bF)((0,i.R1)(l.Tp))])],64))}},c=n(6262);const d=(0,c.A)(u,[["__scopeId","data-v-21caa5e9"]]);var f=d;const h=(0,r.Lk)("h1",null,"Я шизофреник",-1),p=(0,r.Lk)("img",{alt:"хахахах",src:"https://psv4.userapi.com/c237331/u151588541/docs/d35/5dd7a1414ed6/khekhe_blya.gif?extra=_GvojgL3mAtddlF6h39FPkEOadXcGfD89DJyYgMAvMNeGwskRAn_bgjZhDhPvE5OIhL73NeDi_73hVkKuFvldnvw85joT-AfYNy4P4i8JX3MUdnQJc81cnwdsCA4AOHIHu7nvld9gxyapBNx6XPEzom45g"},null,-1),k=(0,r.Lk)("p",null,"Кстати это сайт файл-хостинг",-1),m=[h,p,k];function g(e,t){return(0,r.uX)(),(0,r.CE)("main",null,m)}const b={},v=(0,c.A)(b,[["render",g]]);var y=v;const L={class:"container flex"},w=(0,r.Lk)("tr",null,[(0,r.Lk)("td",{colspan:"2"},[(0,r.Lk)("h2",null,"Авторизация")])],-1),C={colspan:"2",class:"flex justify-center"},A=(0,r.Lk)("label",{for:"email"},"Email:",-1),F=(0,r.Lk)("label",{for:"password"},"Пароль:",-1),E={colspan:"2",class:"flex justify-center"};function _(e,t,n,i,l,a){const s=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",L,[(0,r.Lk)("table",null,[(0,r.Lk)("tbody",null,[w,(0,r.Lk)("tr",null,[(0,r.Lk)("td",C,[A,(0,r.bo)((0,r.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":t[0]||(t[0]=e=>l.email=e),required:""},null,512),[[o.Jo,l.email]]),F,(0,r.bo)((0,r.Lk)("input",{type:"password",id:"password","onUpdate:modelValue":t[1]||(t[1]=e=>l.password=e),required:""},null,512),[[o.Jo,l.password]]),(0,r.Lk)("button",{type:"submit",onClick:t[2]||(t[2]=(...e)=>a.login&&a.login(...e)),class:"btn btn-primary"},"Войти")])]),(0,r.Lk)("tr",null,[(0,r.Lk)("td",E,[(0,r.Lk)("button",null,[(0,r.bF)(s,{to:"/registration"},{default:(0,r.k6)((()=>[(0,r.eW)("Не зарегистрированы?")])),_:1})])])])])])])}var O=n(1250),j={data(){return{email:"",password:""}},methods:{async login(){try{const e=await O.A.post("http://file-hosting.ru/api-file/authorization",{email:this.email,password:this.password});document.cookie=`token=${e.data.token}; expires=${new Date(Date.now()+6048e5).toUTCString()}; path=/`,console.log("Успешная авторизация",e.data),window.location.href="/"}catch(e){console.error("Ошибка при авторизации:",e.response.data)}}}};const R=(0,c.A)(j,[["render",_]]);var X=R;const N=(0,r.Lk)("h2",null,"Выход",-1);function T(e,t,n,o,i,l){return(0,r.uX)(),(0,r.CE)("div",null,[N,(0,r.Lk)("button",{class:"btn btn-primary",onClick:t[0]||(t[0]=(...e)=>l.logout&&l.logout(...e))},"Выйти")])}var x={methods:{async logout(){try{await O.A.get("http://file-hosting.ru/api-file/logout",{headers:{Authorization:"Bearer "+a("token")}}),document.cookie="token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",console.log("Вы успешно вышли"),window.location.href="/"}catch(e){console.error("Ошибка:",e)}}}};const B=(0,c.A)(x,[["render",T]]);var U=B,W=n(33);const z={class:"container"},S=(0,r.Lk)("h2",null,"Ваши файлы",-1),P=(0,r.Lk)("thead",null,[(0,r.Lk)("tr",null,[(0,r.Lk)("th",null,"Имя файла"),(0,r.Lk)("th",null,"Ссылка"),(0,r.Lk)("th",null,"Действия"),(0,r.Lk)("th",null,"Права доступа")])],-1),$=["onClick"],D=["onClick"],I=["onClick"],J=["onClick"],K=["onClick"],M={class:"container"},Q=(0,r.Lk)("h2",null,"Файлы, к которым у вас есть доступ",-1),q=(0,r.Lk)("thead",null,[(0,r.Lk)("tr",null,[(0,r.Lk)("th",null,"Имя файла"),(0,r.Lk)("th",null,"Ссылка")])],-1),H=["onClick"];function V(e,t,n,o,i,l){const a=(0,r.g2)("upload-view");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(a),(0,r.Lk)("div",z,[S,(0,r.Lk)("table",null,[P,(0,r.Lk)("tbody",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(i.files,(e=>((0,r.uX)(),(0,r.CE)("tr",{key:e.file_id},[(0,r.Lk)("td",null,(0,W.v_)(e.name),1),(0,r.Lk)("td",null,[(0,r.Lk)("button",{class:"btn btn-primary",onClick:t=>l.downloadFile(e.file_id)},"Скачать",8,$)]),(0,r.Lk)("td",null,[(0,r.Lk)("button",{class:"btn btn-light",onClick:t=>l.editFileName(e.file_id)},"Редактировать",8,D),(0,r.Lk)("button",{class:"btn btn-danger",onClick:t=>l.deleteFile(e.file_id)},"Удалить",8,I)]),(0,r.Lk)("td",null,[(0,r.Lk)("button",{class:"btn btn-success",onClick:t=>l.addRight(e.file_id)},"Добавить",8,J),(0,r.Lk)("button",{class:"btn btn-danger",onClick:t=>l.deleteRight(e.file_id)},"Удалить",8,K)])])))),128))])])]),(0,r.Lk)("div",M,[Q,(0,r.Lk)("table",null,[q,(0,r.Lk)("tbody",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(i.sharedFiles,(e=>((0,r.uX)(),(0,r.CE)("tr",{key:e.file_id},[(0,r.Lk)("td",null,(0,W.v_)(e.name),1),(0,r.Lk)("td",null,[(0,r.Lk)("button",{class:"btn btn-primary",onClick:t=>l.downloadFile(e.file_id)},"Скачать",8,H)])])))),128))])])])],64)}n(4603),n(7566),n(8721);const G=(0,r.Lk)("h2",null,"Загрузка файлов",-1),Y={class:"file-upload"},Z=(0,r.Lk)("span",null,"Выберите файлы",-1);function ee(e,t,n,o,i,l){return(0,r.uX)(),(0,r.CE)("div",null,[G,(0,r.Lk)("div",Y,[(0,r.Lk)("input",{type:"file",ref:"fileInput",multiple:"",onChange:t[0]||(t[0]=(...e)=>l.handleFileUpload&&l.handleFileUpload(...e))},null,544),Z])])}var te={methods:{async handleFileUpload(){const e=new FormData,t=this.$refs.fileInput.files;for(let o=0;o<t.length;o++)e.append("files[]",t[o]);try{const t=await O.A.post("http://file-hosting.ru/api-file/files",e,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+a("token")}});console.log("Файлы успешно загружены:",t.data)}catch(n){console.error("Ошибка загрузки файлов:",n.response.data)}}}};const ne=(0,c.A)(te,[["render",ee]]);var oe=ne,re={components:{UploadView:oe},data(){return{files:[],sharedFiles:[],newName:"",email:""}},mounted(){this.fetchFiles(),this.fetchSharedFiles()},methods:{async fetchFiles(){try{const e=await O.A.get("http://file-hosting.ru/api-file/disk",{headers:{Authorization:"Bearer "+a("token")}});this.files=e.data}catch(e){console.error("Ошибка при получении списка файлов:",e)}},async fetchSharedFiles(){try{const e=await O.A.get("http://file-hosting.ru/api-file/shared",{headers:{Authorization:"Bearer "+a("token")}});this.sharedFiles=e.data}catch(e){console.error("Ошибка при получении списка файлов:",e)}},async downloadFile(e){try{const t=await O.A.get(`http://file-hosting.ru/api-file/files/${e}`,{responseType:"blob",headers:{Authorization:"Bearer "+a("token")}}),n=window.URL.createObjectURL(new Blob([t.data])),o=document.createElement("a");o.href=n,o.setAttribute("download",t.headers["content-disposition"].split("filename=")[1]),document.body.appendChild(o),o.click(),URL.revokeObjectURL(n)}catch(t){console.error("Ошибка при скачивании файла:",t)}},async editFileName(e){const t=prompt("Введите новое имя файла:");if(null!==t)try{await O.A.patch(`http://file-hosting.ru/api-file/files/${e}`,{name:t},{headers:{Authorization:"Bearer "+a("token")}}),alert("Имя файла успешно изменено!"),this.fetchFiles()}catch(n){console.error("Ошибка при редактировании имени файла:",n)}},async deleteFile(e){if(confirm("Вы уверены, что хотите удалить этот файл?"))try{await O.A.delete(`http://file-hosting.ru/api-file/files/${e}`,{headers:{Authorization:"Bearer "+a("token")}}),alert("Файл успешно удален!"),this.fetchFiles()}catch(t){console.error("Ошибка при удалении файла:",t)}},async addRight(e){const t=prompt("Введите email пользователя, которому будет предоставлен доступ: :");if(null!==t)try{await O.A.post(`http://file-hosting.ru/api-file/files/${e}/accesses`,{email:t},{headers:{Authorization:"Bearer "+a("token")}}),alert("Доступ добавлен!"),this.fetchFiles()}catch(n){console.error("Ошибка при добавлении права:",n)}},async deleteRight(e){const t=prompt("Введите email пользователя, у которого забрать доступ: :");if(confirm("Вы уверены, что хотите забрать доступ у пользователя: "+t+" ?"))try{await O.A.delete(`http://file-hosting.ru/api-file/files/${e}/accesses?email=${t}`,{headers:{Authorization:"Bearer "+a("token")}}),alert("Доступ забран!"),this.fetchFiles()}catch(n){console.error("Ошибка:",n)}}}};const ie=(0,c.A)(re,[["render",V]]);var le=ie;const ae=(0,l.aE)({history:(0,l.LA)("/"),routes:[{path:"/",name:"home",component:y},{path:"/registration",name:"registration",component:()=>n.e(327).then(n.bind(n,2327))},{path:"/authorization",name:"authorization",component:X},{path:"/logout",name:"logout",component:U},{path:"/files",name:"files",component:le}]});var se=ae;const ue=(0,o.Ef)(f);ue.use(se),ue.mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var l=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],i=e[c][2];for(var a=!0,s=0;s<o.length;s++)(!1&i||l>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(a=!1,i<l&&(l=i));if(a){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,r,i]}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".c59c5f3a.js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".95e28bb3.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="client:";n.l=function(o,r,i,l){if(e[o])e[o].push(r);else{var a,s;if(void 0!==i)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){a=d;break}}a||(s=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=o),e[o]=[r];var f=function(t,n){a.onerror=a.onload=null,clearTimeout(h);var r=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),s&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/client/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,o,r,i){var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",n.nc&&(l.nonce=n.nc);var a=function(n){if(l.onerror=l.onload=null,"load"===n.type)r();else{var o=n&&n.type,a=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+a+")");s.name="ChunkLoadError",s.code="CSS_CHUNK_LOAD_FAILED",s.type=o,s.request=a,l.parentNode&&l.parentNode.removeChild(l),i(s)}};return l.onerror=l.onload=a,l.href=t,o?o.parentNode.insertBefore(l,o.nextSibling):document.head.appendChild(l),l},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){r=l[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var l=n.miniCssF(o),a=n.p+l;if(t(l,a))return r();e(o,a,null,r,i)}))},r={524:0};n.f.miniCss=function(e,t){var n={327:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var l=n.p+n.u(t),a=new Error,s=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+l+")",a.name="ChunkLoadError",a.type=i,a.request=l,r[1](a)}};n.l(l,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,l=o[0],a=o[1],s=o[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(s)var c=s(n)}for(t&&t(o);u<l.length;u++)i=l[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},o=self["webpackChunkclient"]=self["webpackChunkclient"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(3153)}));o=n.O(o)})();
//# sourceMappingURL=app.50952f31.js.map