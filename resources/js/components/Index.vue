<template>
<div>
  <router-link :to="{name: 'person.index'}">person</router-link>
  <router-link :to="{name: 'person.create'}">Add</router-link>
  <router-link :to="{name: 'recipe.index'}">recipe</router-link>
  <router-link :to="{name: 'recipe.create'}">Add_recipe</router-link>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: "Index"
}
</script>

<style scoped>

</style>
