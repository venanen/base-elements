export default {
  login({ commit }, { login, password }) {
    commit('startLoginLoading')
    this.$fire.auth
      .signInWithEmailAndPassword(login, password)
      .then((user) => {
        // console.log(user)

        commit('RESET_ERROR')

        commit('stopLoginLoading')
        // TODO здесь косяк, не работает херовина
        commit('user/LOGIN', { user }, { root: true })
      })
      .catch((err) => {
        commit('HANDLE_ERROR', { err })
        commit('stopLoginLoading')
      })
  },
  onAuthStateChanged({ commit }, { authUser }) {
    if (!authUser) {
      // commit('user/LOGOUT', null, { root: true })
    }
  },
}
