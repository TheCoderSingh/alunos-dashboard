import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import {store} from "src/store";
import {HIDE_RIGHT_DRAWER, SHOW_RIGHT_DRAWER} from "src/constants";

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

router.beforeEach(async (to, from, next) => {
    const route = to.matched[to.matched.length - 1];

    if (route && route.components && route.components.drawer) {
        await store.dispatch(SHOW_RIGHT_DRAWER);
    } else {
        await store.dispatch(HIDE_RIGHT_DRAWER);
    }

    next();
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
