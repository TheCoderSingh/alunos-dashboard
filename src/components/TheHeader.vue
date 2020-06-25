<template>
  <q-header height-hint="64">
    <q-toolbar class="toolbar">
      <div class="row justify-between items-center" style="width: 100%;">
        <div class="col-auto">
          <div class="toolbar__brand" :style="{ 'width': $q.screen.gt.sm ? '260px' : 'auto'}">
            <img
              src="../assets/images/logos/alunos_logo_white.png"
              class="toolbar__logo"
              v-if="$q.screen.gt.sm">

            <q-btn
              flat
              dense
              class="q-px-sm"
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
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  &__brand {
     height: $header-height;
     background: $toolbar-brand-bg;
     display: flex;
     justify-content: center;
     align-items: center;
     padding: 0 12px;
     margin-right: 12px;
   }

  &__logo {
     max-height: 48px;
   }
  }
</style>
