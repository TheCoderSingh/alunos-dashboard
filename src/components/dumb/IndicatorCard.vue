<template>
  <div class="indicator">

      <q-avatar :color="color" :text-color="iconColor" size="64px" :icon="icon" />
      <h3 class="indicator__title"><slot></slot></h3>
      <div class="indicator__caption">{{ caption }}</div>
  </div>
</template>

<script>
  export default {
      name: 'IndicatorCard',
      props: {
          icon: {
              type: String,
              required: true,
          },
          color: {
              type: String,
              required: true,
          },
          iconColor: {
              type: String,
              required: true,
          },
          caption: {
              type: String,
              required: true,
          }
      },
  }
</script>

<style lang="scss" scoped>
    .indicator {
        width: 100%;
        background: #FFFFFF;
        box-shadow: $shadow-2;
        border-radius: $generic-border-radius;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 16px;

        &__title {
            margin: 16px 0;
            color: $emphasis-text-color;
        }

        &__caption {
            color: $medium-emphasis-text-color;
            font-weight: 400;
        }
    }
</style>
