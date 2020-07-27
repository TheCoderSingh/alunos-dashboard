import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
import tenant from './tenant';
import ui from './ui';
//import students from './students';
import households from './households';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        auth,
        tenant,
        ui,
        //students,
        households,
    },
    strict: process.env.DEV
});

export default function (/* { ssrContext } */) {
    return store;
}
