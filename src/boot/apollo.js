import Vue from 'vue';
import {ApolloClient} from 'apollo-client'
import {createHttpLink} from 'apollo-link-http'
import {InMemoryCache} from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo';
import {onError} from "apollo-link-error";
import {ApolloLink, from} from "apollo-link";
import {store} from '../store'
import {LOGOUT_ACTION, TOKEN_COOKIE} from "src/constants";
import {displayWarning} from "src/utils/notify";
import {hasAuthError} from "src/utils/errorHandler";
import {Cookies} from "quasar";

Vue.use(VueApollo);

const httpLink = createHttpLink({
    uri: `${window.location.protocol}//${window.location.host}/graphql`,
});

const authMiddleware = new ApolloLink((operation, forward) => {
    const token = Cookies.get(TOKEN_COOKIE);

    if (token) {
        operation.setContext({
            headers: {
                Authorization: `Bearer ${token.access_token}`,
            }
        });
    }

    return forward(operation);
});

const logoutLink = onError(({graphQLErrors}) => {
    if (hasAuthError(graphQLErrors)) {
        store.dispatch(LOGOUT_ACTION);
        displayWarning("Please provide your credentials again.", {position: 'top'});
    }
});

const cache = new InMemoryCache({
    addTypename: false,
});

export const apolloClient = new ApolloClient({
    link: from([
        authMiddleware,
        logoutLink,
        httpLink
    ]),
    cache,
});

export default ({app}) => {
    app.apolloProvider = new VueApollo({
        defaultClient: apolloClient,
        defaultOptions: {
            $query: {
                loadingKey: 'loading',
                fetchPolicy: 'no-cache',
            }
        },
    })
}
