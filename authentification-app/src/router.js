import Vue from 'vue'
import VueRouter from "vue-router";
import Home from './components/marketing/Home'
import About from './components/marketing/About'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import TodoCount from './components/auth/TodoCount'

Vue.use(VueRouter);


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/todoCount',
        name: 'todoCount',
        component: TodoCount
    }


]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router