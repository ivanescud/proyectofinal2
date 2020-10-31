export { default as Logo } from '../../components/Logo.vue'
export { default as Navbar } from '../../components/Navbar.vue'
export { default as Sidebar } from '../../components/sidebar.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyNavbar = import('../../components/Navbar.vue' /* webpackChunkName: "components/Navbar" */).then(c => c.default || c)
export const LazySidebar = import('../../components/sidebar.vue' /* webpackChunkName: "components/sidebar" */).then(c => c.default || c)
