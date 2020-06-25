<script>
  import QCard from "quasar/src/components/card/QCard";

  export default {
      name: 'Card',
      extends: QCard,
      props: {
          bordered: {
              type: Boolean,
              default: true
          },
          flat: {
              type: Boolean,
              default: true,
          }
      }
  }
</script>
