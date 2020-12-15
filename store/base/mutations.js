export default {
  SET_LOADING(state, isLoading) {
    state.isTableLoading = isLoading
  },
  SET_GROUPS(state, { groupArr, groupsList }) {
    state.groups.objects = groupsList
    state.groups.array = groupArr
  },
  SET_DATA(state, { data }) {
    state.dataTable = data
  },
}
