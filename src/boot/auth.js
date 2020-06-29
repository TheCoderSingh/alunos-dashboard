import { Cookies } from 'quasar'
import {TOKEN_COOKIE} from "src/constants";
import {displayWarning} from "src/utils/notify";
import {getMostSpecificRouteMeta} from "src/router";

// @TODO Add middleware and afterware for Apollo Client


export default async ({ app, router, store, Vue }) => {
    console.log(Cookies.getAll());
    router.beforeEach((to, from, next) => {
        if (!to.matched) {
            next();
        }

        if (getMostSpecificRouteMeta(to.matched, 'isAuthOnly')) {
            if (Cookies.has(TOKEN_COOKIE) === false) {
                displayWarning("Please provide your credentials.", {position: 'top'});
                return next({name: 'auth.login'});
            }
        }

        if (getMostSpecificRouteMeta(to.matched, 'isPublicOnly')) {
            if (Cookies.has(TOKEN_COOKIE)) {
                return next({name: 'dashboard'});
            }
        }

        next();
    })
}
