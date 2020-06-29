import { Cookies } from 'quasar'
import {apolloClient} from "boot/apollo";
import {GET_TENANT_ACTION, MUTATE_TENANT} from "src/constants";
import GET_TENANT from "src/graphql/queries/GetTenant.graphql";
import {subdomain} from "src/utils/domain";

export default {
    [GET_TENANT_ACTION]: async ({ commit }) => {
        const response = await apolloClient.query({
            query: GET_TENANT,
            variables: {
                subdomain: subdomain()
            }
        });

        commit(MUTATE_TENANT, response.data.tenant);
    },
}


