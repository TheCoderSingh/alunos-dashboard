const routes = [
    {
        path: '/',
        component: () => import('layouts/AuthLayout.vue'),
        children: [
            {
                path: '', component: () => import('pages/auth/Login.vue')
            }
        ]
    },
    {
        path: '/admin',
        component: () => import('layouts/AdminLayout.vue'),
        children: [
            {
                path: 'dashboard', component: () => import('pages/Dashboard.vue'),
                name: 'dashboard',
            }
        ]
    },
    // Fallback
    {
        path: '*',
        component: () => import('pages/Error404.vue')
    }
];

export default routes
