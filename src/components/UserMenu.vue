<template>
    <div class="menu">
        <user-avatar
            size="48px"
            class="user__avatar q-mr-sm "
            :name="user.display_name"
            :image="user.avatar ? user.avatar.url : null"></user-avatar>
        <q-menu :offset="[0, 4]" fit transition-show="jump-down" transition-hide="jump-up">
            <q-list>
                <q-item clickable class="menu__item" :to="{ name: 'me' }">
                    <q-item-section class="text-subtitle2">My Profile</q-item-section>
                    <q-item-section avatar>
                        <q-icon name="las la-user-circle" class="menu__icon"/>
                    </q-item-section>
                </q-item>
                <q-item clickable class="menu__item">
                    <q-item-section class="text-subtitle2">Change password</q-item-section>
                    <q-item-section avatar>
                        <q-icon name="las la-key" class="menu__icon"/>
                    </q-item-section>
                </q-item>
                <q-separator></q-separator>
                <q-item clickable class="menu__item" :to="{ name: 'auth.login' }" exact>
                    <q-item-section class="text-subtitle2" @click="logout">Sign out</q-item-section>
                    <q-item-section avatar>
                        <q-icon name="las la-sign-out-alt" class="menu__icon"/>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-menu>
    </div>
</template>

<script>
    import {LOGOUT_ACTION} from "../constants";
    import {displaySuccess} from "../utils/notify";
    import {mapGetters} from "vuex";
    import UserAvatar from "./UserAvatar";

    export default {
        name: 'UserMenu',
        components: {UserAvatar},
        methods: {
            async logout() {
                await this.$store.dispatch(LOGOUT_ACTION);
                displaySuccess("You have been succesfully signed out.", {
                    position: 'top'
                });
            }
        },
        computed: {
            ...mapGetters({
                user: 'getCurrentUser',
            })
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
