import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1c4e181e = () => interopDefault(import('../pages/nuevo_proyecto/index.vue' /* webpackChunkName: "pages/nuevo_proyecto/index" */))
const _60a6bf00 = () => interopDefault(import('../pages/proyectos/index.vue' /* webpackChunkName: "pages/proyectos/index" */))
const _ab9a39d4 = () => interopDefault(import('../pages/vuex/index.vue' /* webpackChunkName: "pages/vuex/index" */))
const _922e7a30 = () => interopDefault(import('../pages/proyectos/_id.vue' /* webpackChunkName: "pages/proyectos/_id" */))
const _30bebe01 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/nuevo_proyecto",
    component: _1c4e181e,
    name: "nuevo_proyecto"
  }, {
    path: "/proyectos",
    component: _60a6bf00,
    name: "proyectos"
  }, {
    path: "/vuex",
    component: _ab9a39d4,
    name: "vuex"
  }, {
    path: "/proyectos/:id",
    component: _922e7a30,
    name: "proyectos-id"
  }, {
    path: "/",
    component: _30bebe01,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
