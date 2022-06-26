<template>
    <div>
        <CreateComponent></CreateComponent>
      <IndexComponent></IndexComponent>
      <AddRecipeForm></AddRecipeForm>
      <IndexRecipeComponent></IndexRecipeComponent>
<!--        <table class="table">-->
<!--            <thead>-->
<!--            <tr>-->
<!--                <th scope="col">id</th>-->
<!--                <th scope="col">name</th>-->
<!--                <th scope="col">age</th>-->
<!--                <th scope="col">job</th>-->
<!--            </tr>-->
<!--            </thead>-->
<!--            <tbody>-->
<!--            <tr v-for="person in persons">-->
<!--                <th scope="row">{{person.id}}</th>-->
<!--                <td>{{ person.name }}</td>-->
<!--                <td>{{person.age}}</td>-->
<!--                <td>{{person.job}}</td>-->
<!--            </tr>-->
<!--            </tbody>-->
<!--        </table>-->

</div>
</template>

<script>
import CreateComponent from "./CreateComponent";
import AddRecipeForm from "./AddRecipeForm";
import IndexComponent from "./IndexComponent";
import IndexRecipeComponent from "./IndexRecipeComponent";
export default {
    name: "PostComponent.vue",
    data() {
      return {
       persons: null
      }
    },
    mounted() {
        // this.getPersons()
    },
    components: {
      CreateComponent,
      AddRecipeForm,
      IndexComponent,
      IndexRecipeComponent
    },
    methods: {
     // getPersons() {
     //     axios.get('/persons')
     //         .then( res => {
     //             this.persons = res.data
     //         })
     // }
    },
    computed: {

    }
}
</script>

<style scoped>

</style>
