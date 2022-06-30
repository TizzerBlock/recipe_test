<template>
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
    </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  name: "IndexRecipe",
  data() {
    return {
      recipes: null
    }
  },
  mounted() {
    this.getRecipes()
  },
  methods: {
    getRecipes() {
      axios.get('/api/recipe')
        .then( res => {
          this.recipes = res.data
        })
    }
  }
}
</script>

<style scoped>

</style>
