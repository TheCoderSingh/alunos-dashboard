<template>
    <centered-content :vertical="true">
        <q-avatar class="q-my-lg" size="120px">
            <q-img src="https://pbs.twimg.com/profile_images/1103732968474828801/HFTx87eX_400x400.png"></q-img>
        </q-avatar>

        <card class="container">
            <q-card-section>
                <q-form
                    @submit="onSubmit"
                    @reset="onReset"
                    class="q-gutter-md"
                >
                    <q-input
                        filled
                        v-model="email"
                        label="Email"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type your email']"
                    />

                    <q-input
                        filled
                        type="password"
                        v-model="password"
                        label="Password"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type your password']"
                    />

                    <q-card-actions align="between">
                        <router-link :to="{ name: 'dashboard' }">Forgot my password</router-link>
                        <q-btn label="Login" type="submit" unelevated color="primary"/>
                    </q-card-actions>
                </q-form>

            </q-card-section>
        </card>
    </centered-content>
</template>

<script>
    import CenteredContent from "../../components/dumb/CenteredContent";
    import Card from "../../components/dumb/Card";

    export default {
        name: 'Login',
        components: {Card, CenteredContent},
        data: () => ({
            email: '',
            password: '',
            remember: false,
        })
    }
</script>

<style scoped>
    .container {
        width: 400px;
        max-width: 100%;
    }
</style>
