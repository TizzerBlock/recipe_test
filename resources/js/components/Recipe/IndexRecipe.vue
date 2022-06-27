<template>
<div>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">recipe_name</th>
      <th scope="col">description</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="recipe in recipes">
      <td>{{recipe.recipe_name}}</td>
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
