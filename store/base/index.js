import mutations from '@/store/base/mutations'
import actions from '@/store/base/actions'
export default {
  state: () => ({
    isTableLoading: true,
    dataTable: [],
    groups: {
      objects: {},
      array: [],
    },
  }),
  mutations,
  actions,
}
