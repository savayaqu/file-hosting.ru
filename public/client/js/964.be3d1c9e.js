"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[964],{964:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var r=a(641),l=a(751);const s=(0,r.Lk)("h2",null,"Регистрация",-1),i=(0,r.Lk)("label",{for:"first_name"},"Имя:",-1),o=(0,r.Lk)("label",{for:"last_name"},"Фамилия:",-1),n=(0,r.Lk)("label",{for:"email"},"Email:",-1),u=(0,r.Lk)("label",{for:"password"},"Пароль:",-1),d=(0,r.Lk)("button",{type:"submit"},"Зарегистрироваться",-1);function m(e,t,a,m,p,f){const c=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",null,[s,(0,r.Lk)("form",{onSubmit:t[4]||(t[4]=(0,l.D$)(((...e)=>f.register&&f.register(...e)),["prevent"]))},[i,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"first_name","onUpdate:modelValue":t[0]||(t[0]=e=>p.firstName=e),required:""},null,512),[[l.Jo,p.firstName]]),o,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"last_name","onUpdate:modelValue":t[1]||(t[1]=e=>p.lastName=e),required:""},null,512),[[l.Jo,p.lastName]]),n,(0,r.bo)((0,r.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":t[2]||(t[2]=e=>p.email=e),required:""},null,512),[[l.Jo,p.email]]),u,(0,r.bo)((0,r.Lk)("input",{type:"password",id:"password","onUpdate:modelValue":t[3]||(t[3]=e=>p.password=e),required:""},null,512),[[l.Jo,p.password]]),d],32),(0,r.bF)(c,{to:"/authorization"},{default:(0,r.k6)((()=>[(0,r.eW)("Уже зареган? Войди!")])),_:1})])}var p=a(250),f={data(){return{firstName:"",lastName:"",email:"",password:""}},methods:{async register(){try{const e=await p.A.post("http://file-hosting.ru/api-file/registration",{first_name:this.firstName,last_name:this.lastName,email:this.email,password:this.password});console.log("Успешная регистрация",e.data)}catch(e){console.error("Ошибка при регистрации:",e.response.data)}}}},c=a(262);const k=(0,c.A)(f,[["render",m]]);var b=k}}]);
//# sourceMappingURL=964.be3d1c9e.js.map