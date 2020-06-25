<template>
  <q-header  class="bg-primary text-white" height-hint="64">
    <q-toolbar class="toolbar">
      <div class="row justify-between items-center" style="width: 100%;">
        <div class="col-auto">
          <div class="toolbar__brand" :style="{ 'width': $q.screen.gt.sm ? '280px' : 'auto'}">
            <img
              src="https://www.monarchballroomdance.com/wp-content/uploads/2017/02/logo-placeholder.png"
              class="toolbar__logo"
              v-if="$q.screen.gt.sm">

            <q-btn
              flat
              class="q-card--bordered"
              dense
              v-if="!$q.screen.gt.sm"
              @click="$emit('toggleDrawer')"
              aria-label="Menu"
              icon="menu"
            />
          </div>
        </div>
        <div class="col">
          <global-search></global-search>
        </div>
        <div class="col-auto">
          <div class="row q-gutter-md items-center no-wrap">
            <user-menu></user-menu>
          </div>
        </div>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script>
import GlobalSearch from "./GlobalSearch";
import UserMenu from "./UserMenu";
export default {
  name: 'TheHeader',
    components: {UserMenu, GlobalSearch},
}
</script>

<style lang="scss">
  .toolbar {
    padding-left: 0;
    background: $toolbar-bg;

  &__brand {
     height: $header-height;
     background: $toolbar-brand-bg;
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 0 12px;
     margin-right: 12px;
   }

  &__logo {
     max-width: 100px;
   }
  }
</style>
