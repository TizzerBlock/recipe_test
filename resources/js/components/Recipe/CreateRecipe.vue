<template>
  <div class="add_form" style="
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url(https://naurok-test2.nyc3.digitaloceanspaces.com/433397/images/202691_1605727182.jpg)">
  <form  class="postcard">
    <div class="form-row">
      <label for="name">Введіть ім'я</label><input v-model="fields.name" type="text" id="name" required>
    </div>
    <div class="form-row">
      <label for="email">Введіть Email</label><input v-model="fields.email" type="email" id="email" required>
    </div>
    <div class="form-row">
      <label for="recipe_name">Введіть назву страви</label><input v-model="fields.recipe_name" type="text" id="recipe_name" required>
    </div>
    <div class="form-row">
      <label for="description">Введіть опис страви</label><input v-model="fields.description" type="text" id="description" required>
    </div>
    <div class="form-row">
      <input  v-model="fields.recipe_position" type="radio" id="contactChoice1"
              name="contact" value="1">
      <label for="contactChoice1">Сніданок</label>
      <input v-model="fields.recipe_position" type="radio" id="contactChoice2"
             name="contact" value="2">
      <label for="contactChoice2">Обід</label>
      <input v-model="fields.recipe_position" type="radio" id="contactChoice3"
             name="contact" value="3">
      <label for="contactChoice3">Вечеря</label>
    </div>
    <div class="form-row">
      <label for="message">Ваш рецепт</label><textarea v-model="fields.message" rows="9" name="message" id="message" required></textarea>
    </div>
    <div class="form-row">
      <input  v-on:click.prevent="addRecipeToDb"
              type="submit" value="Поділитися">
    </div>
  </form>
  </div>
</template>

<script>
import router from "../../router";
export default {
  name: "CreateRecipe",
  data: function() {
    return {
      fields: {
        name: '',
        email: '',
        recipe_name: '',
        recipe_position: '',
        description: '',
        message: ''
      },
    };
  },
  methods: {
    addRecipeToDb: function () {
      axios.post('/api/recipe', {name: this.fields.name, email: this.fields.email, recipe_name: this.fields.recipe_name, recipe_position: this.fields.recipe_position, description: this.fields.description, message: this.fields.message})
        .then( res => {
          router.push({name: 'recipe.index'})
        })
    },
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
body {
  background: #F5E9D9;
}
.postcard {
  background-color: rgba(239, 228, 228, 0.6);
  max-width: 1000px;
  margin: -5px auto 0;
  padding: 20px;
  /*background: #fffdee;*/
  border: 10px solid transparent;
  border-image: 10 repeating-linear-gradient(135deg, #C42061, #C42061 10px, transparent 10px, transparent 20px, #FBCFDF 20px, #FBCFDF 30px, transparent 30px, transparent 40px);
  color: rgba(24, 16, 16, 0.76);
}
.form-row {
  margin-bottom: 15px;
}
.form-row input[type="text"], .form-row input[type="email"], .form-row textarea {
  width: 100%;
  padding: 0 10px;
  line-height: 35px;
  border-width: 0;
  outline: none;
  background: transparent url(https://html5book.ru/wp-content/uploads/2016/12/bg-form.png) bottom left repeat-x;
  background-size: 8px 35px;
}
.form-row textarea {
  background-attachment: local;
  background-repeat: repeat;
  resize: none;
}
.form-row input[type="submit"] {
  padding: 10px 20px;
  margin-top: 10px;
  background: #F67CA5;
  border-width: 0;
  cursor: pointer;
  outline: none;
  font-size: 13px;
  letter-spacing: 1px;
  color: #fffdee;
  text-transform: uppercase;
  transition: 1s cubic-bezier(.165, .84, .44, 1);
}
.form-row input[type=submit]:hover {
  background: #C42061;
}
#contactChoice1 {
  margin: 10px;
}
#contactChoice2 {
  margin: 10px;
}
#contactChoice3 {
  margin: 10px;
}
</style>
