import { SET_LOADING, SET_GROUPS, SET_DATA } from '@/store/base/types'

export default {
  async loadingDataTable({ commit, dispatch }) {
    commit(SET_LOADING, true)
    await dispatch('getTableGroups')
    await dispatch('getTableData')
    commit(SET_LOADING, false)
  },
  async getTableGroups({ commit }) {
    const groups = await this.$fire.firestore.collection('groups').get()
    const groupsList = {}
    const groupArr = []
    groups.forEach((doc) => {
      groupsList[doc.id] = doc.data()
      groupArr.push({ text: doc.data().name, value: doc.data().name })
    })
    // console.log(groupArr)
    commit(SET_GROUPS, { groupArr, groupsList })
  },
  async getTableData({ commit }) {
    const data = await this.$fire.firestore.collection('base').get()
    const elementsList = []
    let index = 0
    data.forEach((doc) => {
      elementsList.push({ key: index++, ...doc.data() })
    })
    console.log(elementsList)
    commit(SET_DATA, { data: elementsList })
  },
}
