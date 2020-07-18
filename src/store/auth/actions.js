import {
    LOGIN_ACTION,
    LOGOUT_ACTION,
    GET_LOGGED_ADMIN_ACTION,
    MUTATE_TOKEN,
    MUTATE_USER,
    TOKEN_COOKIE,
    MUTATE_ADMIN, UPDATE_ME_ACTION
} from "src/constants";
import LOGIN from '../../graphql/mutations/Login.graphql';
import UPDATE_ME from '../../graphql/mutations/UpdateMe.graphql';
import GET_ADMIN_FROM_TOKEN from '../../graphql/queries/GetAdminFromToken.graphql';
import { Cookies } from 'quasar'
import {apolloClient} from "boot/apollo";
import {router} from "src/router";

export default {
    [LOGIN_ACTION]: async ({ commit }, payload) => {
        const response = await apolloClient.mutate({
            mutation: LOGIN,
            variables: payload
        });

        const data = response.data.loginAsAdmin;
        const [token, admin] = [data.token, data.admin];

        Cookies.set(TOKEN_COOKIE, token, { path: '/' });
        commit(MUTATE_TOKEN, token);
        commit(MUTATE_ADMIN, admin);
    },
    [GET_LOGGED_ADMIN_ACTION]: async ({ commit, dispatch }, payload) => {
        const response = await apolloClient.query({
            query: GET_ADMIN_FROM_TOKEN,
        });

        const data = response.data.adminFromToken;

        if (data === null) {
            dispatch(LOGOUT_ACTION);
            return;
        }

        commit(MUTATE_ADMIN, data);
    },
    [LOGOUT_ACTION]: ({ commit }) => {
        Cookies.remove(TOKEN_COOKIE, { path: '/' });
        commit(MUTATE_TOKEN, null);
        commit(MUTATE_ADMIN, null);
        router.push({name: 'auth.login'});
    },
    [UPDATE_ME_ACTION]: async ({ commit }, payload) => {
        const response = await apolloClient.mutate({
            mutation: UPDATE_ME,
            variables: payload
        });

        commit(MUTATE_USER, response.data.updateMe);
    },
}


