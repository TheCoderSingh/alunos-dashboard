const routes = [
    {
        path: '/',
        redirect: { name: 'auth.login' }
    },
    {
        path: '/auth',
        component: () => import('layouts/AuthLayout.vue'),
        meta: {
            isPublicOnly: true,
        },
        redirect: {name:'auth.login'},
        children: [
            {
                path: 'login',
                component: () => import('pages/auth/Login.vue'),
                name: 'auth.login',
            }
        ]
    },
    {
        path: '/admin',
        component: () => import('layouts/AdminLayout.vue'),
        meta: {
            isAuthOnly: true,
        },
        redirect: { name: 'dashboard' },
        children: [
            {
                path: 'dashboard', component: () => import('pages/Dashboard.vue'),
                name: 'dashboard',
            }
        ]
    },
    // Fallback
    {
        path: 'not-found',
        component: () => import('pages/Error404.vue'),
        name: '404',
    },
    {
        path: '*',
        component: () => import('pages/Error404.vue'),
    }
];

export default routes
