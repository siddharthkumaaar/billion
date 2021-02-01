import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import Home from './components/Home'
import About from './components/About'
import MyTask from './components/MyTask'
import Projects from './components/Projects'

Vue.use(VueRouter);
const routes = [
  {path:'/',component:MyTask},
  {path:'/home',component:Home},
  {path:'/projects',component:Projects},
  {path:'/about',component:About}
]

const router = new VueRouter({
  routes
})
Vue.config.productionTip = false

new Vue({
  router:router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
