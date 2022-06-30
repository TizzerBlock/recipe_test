<template>
<div class="w-25">
  <form>
    <div class="mb-3">
      <label>Електронна пошта</label>
      <div v-bind:class="{ active: !emailNotRegister }">Ця електронна пошта не зареєстрована</div>
      <input type="email" class="form-control" v-model="email" id="email" placeholder="Введіть електронну пошту">
    </div>
    <div class="mb-3">
      <label>Пароль</label>
      <div v-bind:class="{ active: !differentPassword }">Пароль вказанно не вірно</div>
      <input type="password" class="form-control" v-model="password" id="password" placeholder="Введіть пароль">
    </div>
    <button @click.prevent="checkedUsers" type="submit" class="btn btn-primary">Увійти</button>
  </form>
</div>
</template>

<script>
import router from "../../router";

export default {
  name: "Log_in_user",
  data() {
    return {
      differentPassword: false,
      emailNotRegister: false,
      email: null,
      password: null
    }
  },
  methods: {
    checkedUsers() {
      axios.get('/api/user')
        .then( res => {
          let check = res.data.filter((check) => check.email === this.email);
          if (check.length === 0) {
            this.emailNotRegister = true
            setTimeout(() =>{
              this.emailNotRegister = false
            }, 4000)
          } else if  (check[0].email === this.email) {
            if (check[0].password === this.password) {
              this.$parent.$data.login = check[0].name
              this.$parent.$data.userInfo = {id: check[0].id, name: check[0].name, email: check[0].email, login: check[0].login}
              router.push({name: 'user.page', params: {id: check[0].id, name: check[0].name, email: check[0].email, login: check[0].login}})
            }  else {
              this.differentPassword = true
              setTimeout(() =>{
                this.differentPassword = false
              }, 4000)
            }
          } else {
            console.log('no')
          }
        })
    },
  }
}
</script>

<style scoped>
.active {
  display: none;
}
</style>
