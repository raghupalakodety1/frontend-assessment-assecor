import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Film from '@/components/Film.vue'
import People from '@/components/People.vue'
import Vehicle from '@/components/Vehicle.vue'
import Planet from '@/components/Planet.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/film',
      name: 'Film',
      component: Film
    },
    {
      path: '/people',
      name: 'People',
      component: People
    },
    {
      path: '/vehicle',
      name: 'Vehicle',
      component: Vehicle
    },
    {
      path: '/planet',
      name: 'Planet',
      component: Planet
    }
  ]
})
