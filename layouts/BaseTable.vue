<template>
  <a-table :columns="columns" :data-source="data" :loading="loading">
    <a slot="reference" slot-scope="text" :href="text">{{ text }}</a>
  </a-table>
</template>

<script>
export default {
  name: 'BaseTable',
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: () => false,
    },
  },
  mounted() {
    console.log(this.$props, 'mounted')
  },
  updated() {
    console.log(this.$props, 'updated')
  },
}
</script>

<style scoped></style>
