<template>
<div v-if="fields">
  <div>

    name: {{this.fields.name}}
  </div>
  <div>
    email: {{this.fields.email}}
  </div>
  <div>
    <h1>{{this.fields.recipe_name}}</h1>
  </div>
  <div>
    recipe_position: {{this.recipeType}}
  </div>
  <div>
    <h2>description: {{this.fields.description}}</h2>
  </div>
  <div>
    <p> {{this.fields.message}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: "ShowRecipe",
  data() {
    return {
      fields: '',
      recipeType: ''
    }
  },
  mounted() {
    this.getRecipe()
  },
  methods: {
    getRecipe() {
      axios.get('/api/recipe/' + this.$route.params.id)
        .then( res => {
          this.fields = res.data
          if (this.fields.recipe_position === 1) {
            this.recipeType = 'Сніданок'
          } else if (this.fields.recipe_position === 2) {
            this.recipeType = 'Обід'
          } else if (this.fields.recipe_position === 3) {
            this.recipeType = 'Вечеря'
          }
        })
    },
  }
}
</script>

<style scoped>

</style>
