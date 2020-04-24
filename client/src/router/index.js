import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import Exercise from '../views/Exercise.vue'
import Food from '../views/Food.vue'
import Settings from '../views/Settings.vue'
import ExHistory from '../views/ExHistory.vue'
import FoodHistory from '../views/FoodHistory.vue'
import Admin from '../views/Admin.vue'
import User from '../models/Users'
import Updates from '../views/Updates.vue'
import Friends from '../views/Friends.vue'
import Search from '../views/Search.vue'
import UserPage from '../views/UserPage.vue'
import PendRequest from '../views/PendRequests.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile, meta: { IsSecret: true}
  },
  {
    path: '/exercise',
    name: 'Exercise',
    component: Exercise, meta: { IsSecret: true}
  },
  {
    path: '/exhistory',
    name: 'ExHistory',
    component: ExHistory, meta: { IsSecret: true}
  },
  {
    path: '/food',
    name: 'Food',
    component: Food, meta: { IsSecret: true}
  },
  {
    path: '/foodhistory',
    name: 'FoodHistory',
    component: FoodHistory, meta: { IsSecret: true}
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings, meta: { IsSecret: true}
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin, meta: { IsSecret: true}
  },
  {
    path: '/updates',
    name: 'Updates',
    component: Updates, meta: { IsSecret: true }
  },
  {
    path: '/friends',
    name: 'Friends',
    component: Friends, meta: { IsSecret: true }
  },
  {
    path: '/search',
    name: 'Search',
    component: Search//, meta: { IsSecret: true }
  },
  {
    path: '/userpage',
    name: 'UserPage',
    component: UserPage//, meta: { IsSecret: true }
  },
  {
    path: '/pendingrequests',
    name: 'PendRequest',
    component: PendRequest, meta: { IsSecret: true }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach( (to, from, next) => {
    if( to.meta.IsSecret && !User.CurrentUser) next('/login');
    else next();
});

export default router
