<template>
<div>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">recipe_name</th>
      <th scope="col">recipe_position</th>
      <th scope="col">description</th>
      <th scope="col">message</th>
      <th scope="col">edit</th>
      <th scope="col">delete</th>
    </tr>
    </thead>
    <tbody>
    <template v-for="recipe in recipes">
    <tr :class="isEdit(recipe.id) ? 'd-none' : ''">
      <th scope="row">{{recipe.id}}</th>
      <td>{{recipe.name}}</td>
      <td>{{recipe.email}}</td>
      <td>{{recipe.recipe_name}}</td>
      <td>{{recipe.recipe_position}}</td>
      <td>{{recipe.description}}</td>
      <td>{{recipe.message}}</td>
      <td><a href="#" @click.prevent="changeEditRecipeId(recipe.id, recipe.name, recipe.email, recipe.recipe_name, recipe.recipe_position, recipe.description, recipe.message)" class="btn btn-success">edit</a></td>
      <td><a href="#" @click.prevent="deleteRecipe(recipe.id)" class="btn btn-danger">Delete</a></td>
    </tr>
      <tr :class="isEdit(recipe.id) ? '' : 'd-none'">
        <th scope="row">{{recipe.id}}</th>
        <td><input type="text" v-model="name" class="form-control"></td>
        <td><input type="text" v-model="email" class="form-control"></td>
        <td><input type="text" v-model="recipe_name" class="form-control"></td>
        <td><input type="number" v-model="recipe_position" class="form-control"></td>
        <td><input type="text" v-model="description" class="form-control"></td>
        <td><input type="text" v-model="message" class="form-control"></td>
        <td><a href="#" @click.prevent="updateRecipe(recipe.id)" class="btn btn-success">Update</a></td>
      </tr>
    </template>
    </tbody>
  </table></div>
</template>

<script>
export default {
  name: "IndexRecipeComponent.vue",
  data() {
    return {
     recipes: null,
      editRecipeId: null,
      name: null,
      email: null,
      recipe_name: null,
      recipe_position: null,
      description: null,
      message: null
    }
  },
  mounted() {
    this.getRecipes()
  },
  methods: {
    getRecipes() {
      axios.get('/api/recipe')
        .then( res =>{
          this.recipes = res.data
          console.log(res);
        })
    },
    updateRecipe(id) {
      this.editRecipeId = null
      axios.patch('/api/recipe/' + id, {name: this.name, email: this.email, recipe_name: this.recipe_name, recipe_position: this.recipe_position, description: this.description, message: this.message})
        .then( res =>{
          this.getRecipes()
        })
    },
    deleteRecipe(id) {
      axios.delete('/api/recipe/' + id)
        .then( res =>{
          this.getRecipes()
        })
    },
    changeEditRecipeId(id, name, email, recipe_name, recipe_position, description, message) {
      this.name = name
      this.email = email
      this.recipe_name = recipe_name
      this.recipe_position = recipe_position
      this.description = description
      this.message = message
      this.editRecipeId = id
    },
    isEdit(id) {
      return this.editRecipeId === id
    }
  },
}
</script>

<style scoped>

</style>
