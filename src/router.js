import Vue from 'vue'
import Router from 'vue-router'
import TelephoneDirectory from './views/TelephoneDirectory.vue'
import Simple from './views/Simple';
import MoveTo from './views/MoveTo';
import HelloName from './views/HelloName';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'telephoneDirectory',
      component: TelephoneDirectory
    },
    {
      path: '/simple',
      name: 'simple',
      component: Simple
    },
    {
      path: '/move-to',
      name: 'move-to',
      component: MoveTo
    },
    {
      path: '/hello/:name',
      name: 'hello-name',
      component: HelloName
    },
  ]
})
