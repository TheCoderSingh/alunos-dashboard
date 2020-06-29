import {MUTATE_TENANT} from "src/constants";

export default {
    [MUTATE_TENANT]: (state, tenant) => {
        state.data = tenant;
    },
}
