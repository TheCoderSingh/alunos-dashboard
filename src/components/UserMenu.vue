<template>
    <div class="menu">
        <q-avatar size="48px" color="white" text-color="grey-10">
            W
        </q-avatar>
        <q-menu :offset="[0, 4]" fit transition-show="jump-down" transition-hide="jump-up">
            <q-list>
                <q-item clickable class="menu__item">

                    <q-item-section class="text-subtitle2">Change password</q-item-section>
                    <q-item-section avatar>
                        <q-icon name="lock" class="menu__icon"/>
                    </q-item-section>
                </q-item>
                <q-separator></q-separator>
                <q-item clickable class="menu__item" :to="{ name: 'auth.login' }" exact>
                    <q-item-section class="text-subtitle2" @click="logout">Sign out</q-item-section>
                    <q-item-section avatar>
                        <q-icon name="login" class="menu__icon"/>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-menu>
    </div>
</template>

<script>
    import {LOGOUT_ACTION} from "../constants";
    import {displaySuccess} from "../utils/notify";

    export default {
        name: 'UserMenu',
        methods: {
            async logout() {
                await this.$store.dispatch(LOGOUT_ACTION);
                displaySuccess("You have been succesfully signed out.", {
                    position: 'top'
                });
            }
        }
    }
</script>

<style lang="scss">
    .menu {
        cursor: pointer;

        &__item {
            width: auto;
            color: $grey-8;
        }

        &__icon {
            color: $grey-6;
        }
    }
</style>
