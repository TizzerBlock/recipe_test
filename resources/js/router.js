import Vue from "vue";
import VueRouter from "vue-router"



Vue.use(VueRouter)


export default new VueRouter({
  mode: 'history',
  routes: [
    //======================================================================Person routes
    {
      path: '/people',
      component: () => import('./components/Person/Index'),
      name: 'person.index'
    },
    {
      path: '/people/create',
      component: () => import('./components/Person/Create'),
      name: 'person.create'
    },
    {
      path: '/people/:id/edit',
      component: () => import('./components/Person/Edit'),
      name: 'person.edit'
    },
    {
      path: '/people/show',
      component: () => import('./components/Person/Show'),
      name: 'person.show'
    },
    //======================================================================Recipe routes
    {
      path: '/recipe',
      component: () => import('./components/Recipe/IndexRecipe'),
      name: 'recipe.index'
    },
    {
      path: '/recipe/create_recipe',
      component: () => import('./components/Recipe/CreateRecipe'),
      name: 'recipe.create'
    },
    {
      path: '/recipe/:id/edit',
      component: () => import('./components/Recipe/EditRecipe'),
      name: 'recipe.edit'
    },
    {
      path: '/recipe/show',
      component: () => import('./components/Recipe/ShowRecipe'),
      name: 'recipe.show'
    }
  ]
})
