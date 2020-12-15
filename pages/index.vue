<template>
  <div class="search-layout">
    <center-container>
      <a-input-search
        placeholder="input search text"
        enter-button=""
        size="large"
        class="col-xs-8"
        @search="search"
      />
      <div class="table-container">
        <base-table
          :loading="loading"
          :columns="columns"
          :data="data"
        ></base-table>
      </div>
      <!--      <button @click="testRun">1</button>-->
      <!--      <button @click="add">2</button>-->
    </center-container>
  </div>
</template>

<script>
import CenterContainer from '@/components/CenterContainer'
import BaseTable from '@/layouts/BaseTable'
import { mapState } from 'vuex'
export default {
  components: { BaseTable, CenterContainer },
  // TODO убрать комментарий
  // middleware: 'auth',
  data() {
    return {
      columns: [
        {
          title: 'Название',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Количество',
          dataIndex: 'count',
          key: 'count',
        },
        {
          title: 'Номинал',
          dataIndex: 'quanity',
          key: 'quanity',
          sorter: (a, b) => a.quanity - b.quanity,
        },
        {
          title: 'Ссылка',
          dataIndex: 'reference',
          key: 'reference',
          scopedSlots: { customRender: 'reference' },
        },
        {
          title: 'Группа',
          dataIndex: 'group',
          key: 'group',
          filters: [
            { text: '1', value: 1 },
            { text: 0, value: 0 },
          ], // this.$store.state.base.groups.array,
          onFilter: (value, record) => record.group === value,
        },
      ],
    }
  },
  computed: {
    ...mapState({
      loading: (state) => state.base.isTableLoading,
      data: (state) => state.base.dataTable,
    }),
  },
  mounted() {
    this.$store.dispatch('base/loadingDataTable')
  },
  methods: {
    search(value) {},
    testRun() {
      const ref = this.$fire.firestore.collection('base')

      ref.get().then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.id, '=>', doc.data())
        })
      })
    },
    add() {
      this.$fire.firestore
        .collection('base')
        .doc(new Date().toDateString())
        .set({
          count: 124,
          group: 0,
          name: 'ddf',
          quanity: 10,
          reference: '',
        })
    },
  },
}
</script>

<style>
.search-layout {
  padding: 5em 2em 1em;
}
.table-container {
  padding: 2em;
}
</style>
