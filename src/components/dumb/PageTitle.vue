<template>
  <h3 class="page-title text-h5">
      <slot></slot>
      <slot name="subtitle">
          <p v-if="subtitle" class="text-body2 text-weight-light">{{ subtitle }}</p>
      </slot>
  </h3>
</template>

<script>
  export default {
      name: 'PageTitle',
      props: {
          subtitle: {
              type: String,
              required: false,
              default: null
          }
      }
  }
</script>

<style lang="scss">
    .page-title {
        padding: 48px 0 32px 0;
        margin: 0;
    }
    .page-title::first-letter {
        margin-left: -0.05em;
    }
</style>
