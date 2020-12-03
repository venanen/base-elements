export default {
  login({ commit }, { login, password }) {
    commit('startLoginLoading')
    this.$fire.auth
      .signInWithEmailAndPassword(login, password)
      .then((user) => {
        commit('RESET_ERROR')
        commit('stopLoginLoading')
        commit('user/LOGIN', { user }, { root: true })
        // this.$router.push('/')
      })
      .catch((err) => {
        commit('HANDLE_ERROR', { err })
        commit('stopLoginLoading')
      })
  },
  onAuthStateChanged({ commit }, { authUser }) {
    if (!authUser) {
      commit('user/LOGOUT', null, { root: true })
      return
    }
    commit('user/LOGIN', { user: authUser }, { root: true })
  },
}
