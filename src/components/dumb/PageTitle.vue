<template>
  <h3 class="page-title text-h5">
      <slot></slot>
      <slot name="subtitle">
          <p v-if="subtitle" class="text-body2 page-title__sub">{{ subtitle }}</p>
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
        font-weight: 600;
        color: $emphasis-text-color;
        margin: 0;

        &__sub {
            color: $medium-emphasis-text-color;
        }
    }
    .page-title::first-letter {
        margin-left: -0.05em;
    }
</style>
