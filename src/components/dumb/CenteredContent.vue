<template>
  <q-page :class="['q-mx-auto', {'q-px-md': $q.screen.lt.lg}, {'flex flex-center column': this.vertical}]" :style="styles">
    <slot></slot>
  </q-page>
</template>

<script>
  export default {
      name: 'CenteredContent',
      props: {
          maxWidth: {
              type: Number,
              default: 1000
          },
          vertical: {
              type: Boolean,
              default: false,
          },
      },
      computed: {
          styles() {
              return {
                  'max-width': `${this.maxWidth}px`,
                  'padding-bottom': '24px'
              };
          }
      }
  }
</script>
