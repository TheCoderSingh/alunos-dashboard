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
            },
            {
                path: 'households', component: () => import('pages/households/HouseholdList.vue'),
                name: 'households',
            },
            {
                path: 'households/details/:id', component: () => import('pages/households/HouseholdDetails.vue'),
                name: 'households.details',
            },
            {
                path: 'students', component: () => import('pages/students/StudentList.vue'),
                name: 'students',
            },
            {
                path: 'admins', component: () => import('pages/admins/AdminList.vue'),
                name: 'admins',
            },
            {
                path: 'me', component: () => import('pages/me/UpdateMe.vue'),
                name: 'me',
            },
        ]
    },
    {
        path: 'not-found',
        component: () => import('pages/Error404.vue'),
        name: '404',
    },
    // Fallback
    {
        path: '*',
        component: () => import('pages/Error404.vue'),
    }
];

export default routes
