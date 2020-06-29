import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
import tenant from './tenant';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        auth,
        tenant
    },
    strict: process.env.DEV
});

export default function (/* { ssrContext } */) {
    return store;
}
