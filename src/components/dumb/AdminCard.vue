<template>
    <q-card class="q-pt-md text-center">
        <q-item-label caption>{{ role }}</q-item-label>
        <q-card-section >
            <q-avatar size="120px">
                <img :src="avatar">
            </q-avatar>
        </q-card-section>
        <q-card-section>
            <div class="text-h5">{{ name }}</div>
            <div>{{ email }}</div>
<!--            <q-btn class="q-mt-lg full-width" flat color="primary" :to="to">Manage</q-btn>-->
        </q-card-section>
    </q-card>
</template>

<script>
  export default {
      name: 'AdminCard',
      props: {
          name: {
              type: String,
              required: true,
          },
          avatar: {
              type: String,
              required: true,
          },
          email: {
              type: String,
              required: true,
          },
          role: {
              type: String,
              required: true,
          },
          to: {
              type: Object,
              required: true,
          }
      }
  }
</script>
