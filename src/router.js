import Vue from 'vue'
import Router from 'vue-router'
import $store from '@/store';
import Home from '@/views/Home.vue'
import Users from '@/views/Users.vue'
import User from '@/views/User.vue'
import Login from '@/views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: (to, from, next) => {
        $store.dispatch("auth/setTokenFromLocalStorage");
        if (!$store.getters["auth/isAuthenticated"]) {
          next('/login');
        } else {
          next()
        }
      },
      meta: { 
        icon: 'home',
        visible: () => $store.getters["auth/isAuthenticated"],
        title: 'Home'
      }
    },
    {
      path: '/users',
      name: 'users',
      component: Users,
      beforeEnter: (to, from, next) => {
        $store.dispatch("auth/setTokenFromLocalStorage");
        if (!$store.getters["auth/isAuthenticated"]) {
          next('/login');
        } else {
          next()
        }
      },
      meta: { 
        icon: 'people',
        visible: () => $store.getters["auth/isAuthenticated"],
        title: 'Users'
      }
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User,
      beforeEnter: (to, from, next) => {
        $store.dispatch("auth/setTokenFromLocalStorage");
        if (!$store.getters["auth/isAuthenticated"]) {
          next('/login');
        } else {
          next()
        }
      }
    },    
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { 
        icon: 'mdi-login',
        visible: () => !$store.getters["auth/isAuthenticated"],
        title: 'Login'
      }
    },
    {
      path: '/logout',
      name: 'logout',
      beforeEnter: (to, from, next) => {
        $store.dispatch("auth/logout")
        next('/login');
      },
      meta: { 
        icon: 'mdi-logout',
        visible: () => $store.getters["auth/isAuthenticated"],
        title: 'Logout'
      }
    },
    {
      path: '*', // otherwise redirect to home
      redirect: '/'
    }
  ]
})
