import {MUTATE_ADMIN, MUTATE_TOKEN, MUTATE_USER} from "src/constants";

export default {
    [MUTATE_TOKEN]: (state, token) => {
        state.token = token;
    },
    [MUTATE_USER]: (state, user) => {
        state.admin.user = user;
    },
    [MUTATE_ADMIN]: (state, user) => {
        state.admin = user;
    }
}
