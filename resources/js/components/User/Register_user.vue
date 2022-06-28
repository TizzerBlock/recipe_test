<template>
<div class="w-25">
  <form>
    <div class="mb-3">
      <input type="text" class="form-control" v-model="field_user.name" id="name" placeholder="name">
    </div>
    <div class="mb-3">
      <input type="email" class="form-control" v-model="field_user.email" id="email" placeholder="email">
    </div>
    <div class="mb-3">
      <input type="text" class="form-control" v-model="field_user.login" id="login" placeholder="login">
    </div>
    <div class="mb-3">
      <input type="password" class="form-control" v-model="field_user.password" id="password" placeholder="password">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
</template>

<script>
export default {
  name: "Register_user",
  data() {
    return {
      field_user: {
        name: null,
        email: null,
        login: null,
        password: null
      }
    }
  }
}
</script>

<style scoped>

</style>
