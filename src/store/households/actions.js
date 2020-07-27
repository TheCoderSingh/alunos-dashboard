import {
    GET_HOUSEHOLD_DETAILS_ACTION,
    MUTATE_HOUSEHOLD,
    MUTATE_HOUSEHOLD_PAGINATION,
    PAGINATE_HOUSEHOLDS_ACTION
} from "src/constants";
import {apolloClient} from "boot/apollo";
import PAGINATE_HOUSEHOLDS from "src/graphql/queries/PaginateHouseholds.graphql";
import GET_HOUSEHOLD from "src/graphql/queries/GetHousehold.graphql";

export default {
    [PAGINATE_HOUSEHOLDS_ACTION]: async ({commit}) => {
        const response = await apolloClient.query({
            query: PAGINATE_HOUSEHOLDS,
        });

        commit(MUTATE_HOUSEHOLD_PAGINATION, response.data.households);
    },
    [GET_HOUSEHOLD_DETAILS_ACTION]: async ({commit}, householdId) => {
        const response = await apolloClient.query({
            query: GET_HOUSEHOLD,
            variables: {
                householdId
            }
        });

        commit(MUTATE_HOUSEHOLD, response.data.household);
    },
}


