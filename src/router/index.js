import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'


/* layout */
import Layout from '../views/layout/Layout';

/* login */
import Login from '../views/login/';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
