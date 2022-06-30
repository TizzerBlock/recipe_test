<template>
  <div class="header">
      <p></p>
      <img @click="homePage" class="header_img" src="../assets/header.png" alt="food">
      <router-link :to="{name: 'home'}">Ї-дака</router-link>
<!--      <router-link :to="{name: 'person.index'}">person</router-link>-->
<!--      <router-link :to="{name: 'person.create'}">Add</router-link>-->
      <router-link v-if="!login" :to="{name: 'user.register'}">Регістрація</router-link>
      <router-link v-if="!login" :to="{name: 'user.log_in'}">Увійти</router-link>
      <router-link :to="{name: 'recipe.index'}">Рецепти</router-link>
      <router-link :to="{name: 'recipe.create'}">Додай свій рецепт</router-link>
      <router-link v-if="login" :to="{name: 'user.page', params: {id: userInfo.id, name: userInfo.name, email: userInfo.email, login: userInfo.login}}">Кабінет:{{ login }}</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      login: null,
      userInfo: null
    }
  },

  methods: {
    homePage () {
      this.$router.push('/home_page')
    },
  },
}

</script>

<style scoped>
.header {
  position: relative;
}
p {
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 80px;
  background-color: rgba(218, 102, 5, 0.96);
}

.header_img {
  z-index: 2;
  position: inherit;
  height: 65px;
  width: 100px;
  border-radius: 50%;
  -webkit-transition: -webkit-transform .8s ease-in-out;
  transition:         transform .8s ease-in-out;
  cursor: pointer;
}
.header_img:hover {
  transform: rotate(360deg);
}
a {
  z-index: 3;
  position: inherit;
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 15px 25px;
  padding: 15px 20px;
  font-size: 15px;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  transition: 0.4s ease-in-out;
}
a {
  border-radius: 10px;
  color: #75020a;
  box-shadow: inset 0 -5px 0 #7c0707;
}
 a:hover {
  box-shadow: inset 0 -60px 0 #ff0000, 2px 2px 3px rgb(124, 7, 7);
  color: white;
}

</style>
