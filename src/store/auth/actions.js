import {LOGIN_ACTION, LOGOUT_ACTION, MUTATE_TOKEN, MUTATE_USER, TOKEN_COOKIE} from "src/constants";
import LOGIN from '../../graphql/mutations/Login.graphql';
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
        const [token, user] = [data.token, data.admin.user];

        Cookies.set(TOKEN_COOKIE, token, { path: '/' });
        commit(MUTATE_TOKEN, token);
        commit(MUTATE_USER, user);
    },
    [LOGOUT_ACTION]: ({ commit }) => {
        Cookies.remove(TOKEN_COOKIE, { path: '/' });
        commit(MUTATE_TOKEN, null);
        commit(MUTATE_USER, null);
        router.push({name: 'auth.login'});
    }
}


