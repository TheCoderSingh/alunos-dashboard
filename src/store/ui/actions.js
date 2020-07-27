import {HIDE_RIGHT_DRAWER, MUTATE_RIGHT_DRAWER, SHOW_RIGHT_DRAWER} from "src/constants";

export default {
    [SHOW_RIGHT_DRAWER]: async ({commit}) => {
        commit(MUTATE_RIGHT_DRAWER, true);
    },
    [HIDE_RIGHT_DRAWER]: async ({commit}) => {
        commit(MUTATE_RIGHT_DRAWER, false);
    },
}


