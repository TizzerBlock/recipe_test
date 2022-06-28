<template>
<div v-if="fields">
  <div>
    name: {{this.fields.name}}
  </div>
  <div>
    email: {{this.fields.email}}
  </div>
  <div>
    recipe_name: {{this.fields.recipe_name}}
  </div>
  <div>
    recipe_position: {{this.fields.recipe_position}}
  </div>
  <div>
    description: {{this.fields.description}}
  </div>
  <div>
    message: {{this.fields.message}}
  </div>
</div>
</template>

<script>
export default {
  name: "ShowRecipe",
  data() {
    return {
      fields: ''
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
        })
    },
  }
}
</script>

<style scoped>

</style>
