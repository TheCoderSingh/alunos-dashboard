import {MUTATE_HOUSEHOLD, MUTATE_HOUSEHOLD_PAGINATION} from "src/constants";

export default {
    [MUTATE_HOUSEHOLD]: (state, household) => {
        state.household = household;
    },
    [MUTATE_HOUSEHOLD_PAGINATION]: (state, pagination) => {
        state.householdPagination = pagination;
    },
}
