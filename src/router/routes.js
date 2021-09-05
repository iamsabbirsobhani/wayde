import { projectAuth } from "../firebase/config";

const requiredAuth = async (to, from, next) => {
  let user = projectAuth.currentUser;
  if (!user) {
    next({ name: "AdminLogin" });
  } else {
    next();
  }
};

const routes = [
  {
    path: '/',
    name: "MainLayout",
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/admin',
    name: 'AdminLogin',
    component: () => import('../admin/components/AdminLogin.vue'),
  },
  {
    path: '/admin/dashboard',
    name: 'AdminHome',
    beforeEnter: requiredAuth,
    component: () => import('../admin/components/AdminHome.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
