<template>
    <centered-content :vertical="true">
        <q-avatar class="q-my-lg" size="120px">
            <q-img src="https://pbs.twimg.com/profile_images/1103732968474828801/HFTx87eX_400x400.png"></q-img>
        </q-avatar>

        <q-card class="container">
            <q-card-section>
                <q-form
                    @submit="onSubmit"
                    class="q-gutter-md"
                >
                    <q-input
                        filled
                        v-model="form.email"
                        label="Email"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type your email']"
                    />

                    <q-input
                        filled
                        type="password"
                        v-model="form.password"
                        label="Password"
                        autocomplete="current-password"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type your password']"
                    />

                    <q-card-actions align="between">
<!--                        <router-link class="text-link" :to="{ name: 'dashboard' }">Forgot my password</router-link>-->
                        <q-space></q-space>
                        <q-btn label="Login" type="submit" unelevated color="primary"/>
                    </q-card-actions>
                </q-form>

            </q-card-section>
        </q-card>
    </centered-content>
</template>

<script>
    import CenteredContent from "../../components/dumb/CenteredContent";
    import {displayError, displaySuccess} from "../../utils/notify";
    import {LOGIN_ACTION} from "../../constants";

    export default {
        name: 'Login',
        components: {CenteredContent},
        data: () => ({
            form: {
                email: 'admin@langara.ca',
                password: '123456',
            }
        }),
        methods: {
            async onSubmit() {
                try {
                    await this.$store.dispatch(LOGIN_ACTION, this.form);

                    displaySuccess('Access granted.', {
                        position: 'top'
                    });

                    this.$router.push({name: 'dashboard'});
                } catch (error) {
                    displayError('Invalid credentials, please try again.', {
                        position: 'top'
                    });
                }
            },
        }
    }
</script>

<style scoped>
    .container {
        width: 400px;
        max-width: 100%;
    }
</style>
