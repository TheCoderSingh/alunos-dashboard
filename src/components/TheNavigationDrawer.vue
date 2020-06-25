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
            <q-list class="drawer__list">
                <q-item class="drawer__item" v-ripple clickable :to="{name: 'dashboard'}" tag="div">
                    <q-item-section avatar>
                        <q-icon name="la la-tachometer-alt"/>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Dashboard</q-item-label>
                    </q-item-section>
                </q-item>


                <q-expansion-item
                    icon="las la-address-card"
                    label="Applications"
                    header-class="drawer__item"
                    :content-inset-level="1"
                >
                    <q-list>
                        <q-item class="drawer__item--sub" v-ripple clickable>
                            <q-item-section>
                                <q-item-label>Homestays</q-item-label>
                            </q-item-section>
                        </q-item>

                        <q-item class="drawer__item--sub" v-ripple clickable>
                            <q-item-section>
                                <q-item-label>Students</q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-list>
                </q-expansion-item>

                <q-item class="drawer__item" v-ripple clickable>
                    <q-item-section avatar>
                        <q-icon name="las la-graduation-cap"/>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Students</q-item-label>
                    </q-item-section>
                </q-item>

                <q-item class="drawer__item" v-ripple clickable>
                    <q-item-section avatar>
                        <q-icon name="las la-home"/>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Households</q-item-label>
                    </q-item-section>
                </q-item>

                <q-item-label class="drawer__header" header>Manage</q-item-label>

                <q-item class="drawer__item " v-ripple clickable>
                    <q-item-section avatar>
                        <q-icon name="la la-user"/>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Admins</q-item-label>
                    </q-item-section>
                </q-item>

                <q-item class="drawer__item " v-ripple clickable>
                    <q-item-section avatar>
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
    export default {
        name: 'TheNavigationDrawer',
        data: () => ({
           isOpen: false,
        }),
        methods: {
            toggle() {
                this.isOpen = !this.isOpen;
            }
        }
    }
</script>

<style lang="scss">
    .q-drawer--bordered {
        border-right-color: rgba(0,0,0,0.05) !important;
    }

    .drawer {
        background: $navigation-drawer-bg;

        &__list {
            margin-top: 48px;
        }

        &__header {
            margin-top: 48px;
        }

        &__item:hover {
            color: $primary;

            .q-focus-helper {
                background: none !important;
            }

            .q-icon:not(.q-expansion-item__toggle-icon) {
                color: $primary !important;
            }
        }

        &__item {
            color: $grey-7;
            font-weight: 400;
            font-size: 1rem;
            letter-spacing: .01785714em;
        }

        &__item--sub {
            color: $grey-7;
            font-size: 0.9rem !important;

            &:hover {

            }
        }

        .q-router-link--active {
            .q-icon {
                color: $primary;
            }
        }

        .q-icon {
            color: $grey-5;
            font-size: 28px;
        }
    }
</style>
