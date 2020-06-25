<template>
    <q-drawer
        v-model="isOpen"
        show-if-above
        content-class="drawer"
        bordered
        :width="280"
    >
        <q-scroll-area class="fit">
            <q-list class="drawer__list">
                <q-item class="drawer__item" v-ripple clickable>
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
                    class="drawer__item"
                >
                    <q-list>
                        <q-item class="drawer__item--sub" :inset-level="1" v-ripple clickable>
                            <q-item-section>
                                <q-item-label>Homestays</q-item-label>
                            </q-item-section>
                        </q-item>

                        <q-item class="drawer__item--sub" :inset-level="1" v-ripple clickable>
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
        })
    }
</script>

<style lang="scss">
    .drawer {
        background: $navigation-drawer-bg;

        &__list {
            margin-top: 48px;
        }

        &__header {
            margin-top: 48px;
        }

        .drawer__item:hover {
            color: $primary;

            .q-focus-helper {
                background: none !important;
            }

            .q-item__section--avatar .q-icon {
                color: $primary !important;
            }
        }

        &__item {
            color: rgba(0, 0, 0, 0.72);
            font-weight: 400;
            font-size: 1rem;
            letter-spacing: .01785714em;

        }

        &__item--sub {
            font-size: 0.9rem !important;
        }

        .q-item__section--avatar .q-icon {
            color: rgba(0, 0, 0, 0.32) !important;
            font-size: 28px;
        }
    }
</style>
