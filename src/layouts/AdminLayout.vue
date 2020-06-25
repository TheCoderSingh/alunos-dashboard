<template>
  <q-layout view="hHh lpR fFf" class="content">
    <the-header @toggleDrawer="leftDrawerOpen = !leftDrawerOpen"></the-header>

    <the-navigation-drawer></the-navigation-drawer>
    <q-page-container class="">
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
    import TheHeader from "../components/TheHeader";
    import TheNavigationDrawer from "../components/TheNavigationDrawer";

    export default {
        name: 'AdminLayout',
        components: {TheNavigationDrawer, TheHeader},
    }
</script>
