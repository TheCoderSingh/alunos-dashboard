import Vue from 'vue';
import {ApolloClient} from 'apollo-client'
import {createUploadLink} from 'apollo-upload-client'
import {InMemoryCache} from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo';
import {onError} from "apollo-link-error";
import {ApolloLink, from} from "apollo-link";
import {store} from '../store'
import {LOGOUT_ACTION, TENANT_HEADER, TOKEN_COOKIE} from "src/constants";
import {displayWarning} from "src/utils/notify";
import {hasAuthError} from "src/utils/errorHandler";
import {Cookies} from "quasar";
import {subdomain} from "src/utils/domain";

Vue.use(VueApollo);

const httpLink = createUploadLink({
    uri: process.env.GRAPHQL_URI,
});

const authMiddleware = new ApolloLink((operation, forward) => {
    const headers = {
        [TENANT_HEADER]: subdomain()
    };

    const token = Cookies.get(TOKEN_COOKIE);

    if (token) {
        headers['Authorization'] = `Bearer ${token.access_token}`;
    }

    operation.setContext({ headers });

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
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'network-only',
        },
        query: {
            fetchPolicy: 'network-only',
        },
        $query: {
            fetchPolicy: 'network-only',
        }
    },
});

export default ({app}) => {
    app.apolloProvider = new VueApollo({
        defaultClient: apolloClient,
    })

}
