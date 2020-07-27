import {MUTATE_RIGHT_DRAWER} from "src/constants";

export default {
    [MUTATE_RIGHT_DRAWER]: (state, isVisible) => {
        state.isVisible = isVisible;
    },
}
