<template>
  <q-btn round flat class="menu">
    <q-avatar size="42px">
      <img src="https://cdn.quasar.dev/img/boy-avatar.png">
    </q-avatar>
    <q-menu>
      <q-list>
        <q-item clickable class="menu__item">
          <q-item-section avatar class="">
            <q-icon name="login" />
          </q-item-section>

          <q-item-section>Logout</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script>
export default {
  name: 'UserMenu',
}
</script>

<style lang="scss">
  .menu {
    &__item {
      width: auto;
    }
  }
</style>
