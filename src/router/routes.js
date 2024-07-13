const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'catalog', component: () => import('pages/catalog/CatalogPage.vue') },
      { path: 'history', component: () => import('pages/history/HistoryPage.vue') },
      { path: 'orders', component: () => import('pages/orders/OrdersPage.vue') },
      { path: 'profile', component: () => import('pages/profile/ProfilePage.vue') },
      { path: 'auto', component: () => import('pages/auto/AutoPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
