<template>
    <q-drawer
        v-model="isOpen"
        show-if-above
        content-class="drawer"
        @change="$emit('toggled')"
        elevated
        bordered
        :width="260"
    >
        <q-scroll-area class="fit">


            <div class="user">
                <div class="column items-center q-col-gutter-sm q-my-lg">
                    <div class="col">
                        <user-avatar
                            size="100px"
                            class="shadow-6 q-mr-sm "
                            :name="user.display_name"
                            :image="user.avatar ? user.avatar.url : null"></user-avatar>
                    </div>
                    <div class="col text-center">
                        <div>
                            <span class="user__greeting">Hello,</span>
                            <h6 class="user__name">{{ user.display_name }}</h6>
                        </div>
                    </div>
                </div>
            </div>

            <q-list class="drawer__list">
                <q-item-label class="drawer__header" header>Main</q-item-label>

                <q-item class="drawer__item" v-ripple clickable :to="{name: 'dashboard'}" tag="div">
                    <q-item-section avatar class="drawer__icon">
                        <q-icon name="la la-tachometer-alt"/>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Dashboard</q-item-label>
                    </q-item-section>
                </q-item>


<!--                <q-expansion-item-->
<!--                    icon="las la-address-card"-->
<!--                    label="Applications"-->
<!--                    header-class="drawer__item"-->
<!--                    :content-inset-level="1"-->
<!--                >-->
<!--                    <q-list>-->
<!--                        <q-item class="drawer__item&#45;&#45;sub" v-ripple clickable>-->
<!--                            <q-item-section>-->
<!--                                <q-item-label>Homestays</q-item-label>-->
<!--                            </q-item-section>-->
<!--                        </q-item>-->

<!--                        <q-item class="drawer__item&#45;&#45;sub" v-ripple clickable>-->
<!--                            <q-item-section>-->
<!--                                <q-item-label>Students</q-item-label>-->
<!--                            </q-item-section>-->
<!--                        </q-item>-->
<!--                    </q-list>-->
<!--                </q-expansion-item>-->

                <q-item class="drawer__item" v-ripple clickable :to="{ name: 'students' }">
                    <q-item-section avatar class="drawer__icon">
                        <q-icon name="las la-graduation-cap"/>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Students</q-item-label>
                    </q-item-section>
                </q-item>

                <q-item class="drawer__item" v-ripple clickable :to="{ name: 'households' }">
                    <q-item-section avatar class="drawer__icon">
                        <q-icon name="las la-home"/>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Households</q-item-label>
                    </q-item-section>
                </q-item>

                <q-item-label class="drawer__header" header>Manage</q-item-label>

                <q-item class="drawer__item " v-ripple clickable :to="{ name: 'admins' }">
                    <q-item-section avatar class="drawer__icon">
                        <q-icon name="la la-user"/>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Admins</q-item-label>
                    </q-item-section>
                </q-item>

                <q-item class="drawer__item " v-ripple clickable>
                    <q-item-section avatar class="drawer__icon">
                        <q-icon name="la la-cog"/>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Settings</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-scroll-area>
    </q-drawer>
</template>

<script>
    import {mapGetters} from "vuex";
    import UserAvatar from "./UserAvatar";

    export default {
        name: 'TheNavigationDrawer',
        components: {UserAvatar},
        data: () => ({
           isOpen: false,
        }),
        methods: {
            toggle() {
                this.isOpen = !this.isOpen;
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
    .q-drawer--bordered {
        border-right-color: rgba(0,0,0,0.05) !important;
    }

    .user {
        &__greeting {
            color: $medium-emphasis-text-color;
        }

        &__name {
            color: $emphasis-text-color;
            font-weight: 600;
            line-height: 20px;
            margin: 0;
        }
    }

    .drawer {
        background: $navigation-drawer-bg;

        &__list {
            margin: 0 10px 0 10px;
        }

        &__header {
            &:first-child {
                margin-top: 0;
            }

            margin-top: 48px;
            font-weight: 400;
            color: $low-emphasis-text-color;
        }


        &__item {
            color: $medium-emphasis-text-color;
            border-radius: $generic-border-radius;
            padding: 0 32px;
            font-weight: 400;
            letter-spacing: .01785714em;
            font-size: $body-font-size;
        }

        &__item:hover:not(.q-router-link--active) {
            color: $primary;

            .q-focus-helper {
                background: none !important;
            }

            .q-icon:not(.q-expansion-item__toggle-icon) {
                color: $primary !important;
            }
        }

        &__icon {
            padding: 0;
            margin-right: 24px;
            min-width: unset;

            .q-icon {
                color: $low-emphasis-text-color;
                font-size: 26px;
            }
        }

        &__item--sub {
            color: $grey-7;
            font-size: 0.9rem !important;

            &:hover {

            }
        }

        .q-router-link--active {
            background-color: $primary;
            color: #fff;

            .q-icon {
                color: #fff;
            }
        }
    }
</style>
