import { Cookies } from 'quasar'
import {GET_LOGGED_ADMIN_ACTION, TOKEN_COOKIE} from "src/constants";
import {displayWarning} from "src/utils/notify";
import {getMostSpecificRouteMeta} from "src/router";

// @TODO Add middleware and afterware for Apollo Client


export default async ({ app, router, store, Vue }) => {
    router.beforeEach(async (to, from, next) => {
        if (!to.matched) {
            next();
        }

        if (getMostSpecificRouteMeta(to.matched, 'isAuthOnly')) {
            if (Cookies.has(TOKEN_COOKIE) === false) {
                displayWarning("Please provide your credentials.", {position: 'top'});
                return next({name: 'auth.login'});
            }

            await store.dispatch(GET_LOGGED_ADMIN_ACTION);
        }

        if (getMostSpecificRouteMeta(to.matched, 'isPublicOnly')) {
            if (Cookies.has(TOKEN_COOKIE)) {
                return next({name: 'dashboard'});
            }
        }

        next();
    })
}
