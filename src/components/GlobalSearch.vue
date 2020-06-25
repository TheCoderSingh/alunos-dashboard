<template>
  <q-input
    class="search"
    dark
    borderless
    v-model="search"
    placeholder="Search"
  >
    <template v-slot:prepend>
      <q-icon v-if="search === ''" name="search"/>
      <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''"/>
    </template>
  </q-input>
</template>

<script>
    export default {
        name: 'GlobalSearch',
        data: () => ({
            search: ''
        })
    }
</script>

<style lang="scss" scoped>
  .search {
    color: white;
  }
</style>
