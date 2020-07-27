<template>
    <q-drawer
        side="right"
        :value="isVisible"
        persistent
        overlay
        bordered
        elevated
        :width="this.$route.meta.width"
        no-swipe-open
        no-swipe-close
        no-swipe-backdrop
    >
        <q-scroll-area class="fit">
            <div class="q-pa-md">
                <q-btn round unelevated icon="las la-times" :to="backRoute"/>
                <router-view name="drawer"></router-view>
            </div>
        </q-scroll-area>
    </q-drawer>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import {HIDE_RIGHT_DRAWER} from "../constants";

    export default {
        name: 'TheRightDrawer',
        data: () => ({
           isOpen: false,
        }),
        methods: {
            ...mapActions({
                hide: HIDE_RIGHT_DRAWER
            })
        },
        computed: {
            ...mapGetters({
                isVisible: 'getRightDrawerVisibility',
            }),
            backRoute() {
                return {
                    name: this.$route.meta.back,
                    query: this.$route.query,
                }
            }
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
