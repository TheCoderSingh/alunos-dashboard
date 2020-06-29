import {GET_TENANT_ACTION} from "src/constants";

export default async ({ app, router, store, Vue }) => {
    try {
        await store.dispatch(GET_TENANT_ACTION);

        if (Object.keys(store.state.tenant).length === 0) {
            return await router.push({ name: '404' });
        }
    } catch (error) {
        await router.push({ name: '404' });
    }
}
