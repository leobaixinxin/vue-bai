// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router/index'

// 导入element-ui及样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// Vue.config.productionTip = false

// register globally
Vue.use(ElementUI);
Vue.use(VueRouter);


const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  //NProgress.start();
  if (to.path == '/login') {
    sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
  if (!user && to.path != '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})


/* eslint-disable no-new */
new Vue({
  //el: '#app',
  //template: '<App/>',
  router,
  //components: { App },
  render: h => h(App)
}).$mount('#app');
