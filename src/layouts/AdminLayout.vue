<template>
    <q-layout view="hHh lpR fFf" class="content">
        <the-header @toggleDrawer="toggleDrawer"></the-header>

        <the-navigation-drawer ref="drawer"></the-navigation-drawer>
        <the-right-drawer></the-right-drawer>

        <q-page-container class="">
            <router-view/>
        </q-page-container>
    </q-layout>
</template>

<script>
    import TheHeader from "../components/TheHeader";
    import TheNavigationDrawer from "../components/TheNavigationDrawer";
    import TheRightDrawer from "../components/TheRightDrawer";

    export default {
        name: 'AdminLayout',
        methods: {
            toggleDrawer() {
                this.$refs.drawer.toggle();
            }
        },
        components: {TheRightDrawer, TheNavigationDrawer, TheHeader},
    }
</script>
