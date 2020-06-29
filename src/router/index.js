import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

export const router = new VueRouter({
    scrollBehavior: () => ({x: 0, y: 0}),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
});

export default function (/* { store, ssrContext } */) {
    return router
}


// Go through all the children (most specific first) and return the first found meta key
// Meaning that child overwrites the parents meta
export const getMostSpecificRouteMeta = (matchedRoutes, metaKey) => {
    const routes = [...matchedRoutes].reverse();

    for (let i = 0; i < routes.length; i++) {
        if (typeof routes[i].meta[metaKey] !== 'undefined') {
            return routes[i].meta[metaKey];
        }
    }
};
