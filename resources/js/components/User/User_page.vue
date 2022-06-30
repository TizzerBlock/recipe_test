<template>
<div>
  <div>
    Ім'я: {{this.$route.params.name}}
  </div>
  <div>
    Логін: {{this.$route.params.login}}
  </div>
  <div>
    Електронна пошта: {{this.$route.params.email}}
  </div>
  <div>
    <input @click.prevent="userExit" type="button" class="btn btn-outline-danger" value="Вийти">
  </div>
  <div>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">Рецепти</th>
        <th scope="col">Опис страви</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="recipe in recipes">
        <td>
          <router-link :to="{name: 'recipe.show', params: {id: recipe.id}}">{{recipe.recipe_name}}</router-link>
        </td>
        <td>{{recipe.description}}</td>
        <td>
          <router-link :to="{name: 'recipe.edit', params: {id: recipe.id}}">Виправити</router-link>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
import router from "../../router";

export default {
  name: "User_page",
  data() {
    return {
      recipes: null
    }
  },
  mounted() {
    this.getUserRecipe()
  },
  methods: {
    getUserRecipe() {
      axios.get('/api/recipe')
        .then( res => {
          let checkUserRecipe = res.data.filter((check) => check.email === this.$route.params.email);
          this.recipes = checkUserRecipe
        })
    },
    userExit() {
      this.$parent.$data.login = null
      this.$parent.$data.userInfo = null
      router.push({name: 'home'})
    },
  }
}
</script>

<style scoped>

</style>
