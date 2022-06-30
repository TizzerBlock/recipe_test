<template>
<div class="w-25">
  <form>
    <div class="mb-3">
      <label>Ім'я</label>
      <input type="text" class="form-control" v-model="field_user.name" id="name" placeholder="Введіть Ім'я">
    </div>
    <div class="mb-3">
      <label>Електронна пошта</label>
      <div v-bind:class="{ active: !emailRegister }">Ця електронна пошта зайнята</div>
      <input type="email" class="form-control" v-model="field_user.email" id="email" placeholder="Введіть електронну пошту">
    </div>
    <div class="mb-3">
      <label>Логін</label>
      <div v-bind:class="{ active: !loginRegister }">Цей логін зайнятий спробуйте: {{this.field_user.login + this.randomNumber}}</div>
      <input type="text" class="form-control" v-model="field_user.login" id="login" placeholder="Введіть логін">
    </div>
    <div class="mb-3">
      <label>Пароль</label>
      <input type="password" class="form-control" v-model="field_user.password" id="password" placeholder="Введіть пароль">
    </div>
    <button @click.prevent="testClick" type="submit" class="btn btn-primary">Регістрація</button>
  </form>
</div>
</template>

<script>
import router from "../../router";

export default {
  name: "Register_user",
  data() {
    return {
      field_user: {
        name: null,
        email: null,
        login: null,
        password: null
      },
      loginRegister: false,
      emailRegister: false,
      randomNumber: null
    }
  },
  methods: {
    testClick() {
      function getRandomInRange() {
        return Math.floor(Math.random() * (10000 - 1 + 1)) + 1;
      }
      this.randomNumber = getRandomInRange()
      axios.get('/api/user')
        .then( res => {
          let checkEmail = res.data.filter((check) => check.email === this.field_user.email);
          if (checkEmail.length === 0) {
            let checkLogin = res.data.filter((check) => check.login === this.field_user.login);
            if (checkLogin.length === 0) {
              axios.post('/api/user', {name: this.field_user.name, email: this.field_user.email, login: this.field_user.login, password: this.field_user.password})
                .then( res => {
                  router.push({name: 'user.log_in'})
                })
            } else {
              this.loginRegister = true
              setTimeout(() =>{
                this.loginRegister = false
              }, 4000)
            }
          } else {
            this.emailRegister = true
            setTimeout(() =>{
              this.emailRegister = false
            }, 4000)
          }
        })
    }
  }
}
</script>

<style scoped>
.active {
  display: none;
}
</style>
