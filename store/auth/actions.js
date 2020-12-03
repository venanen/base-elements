import {
  RESET_ERROR,
  HANDLE_ERROR,
  START_LOGIN_LOADING,
  STOP_LOGIN_LOADING,
} from '@/store/auth/types'

export default {
  login({ commit }, { login, password }) {
    commit(START_LOGIN_LOADING)
    this.$fire.auth
      .signInWithEmailAndPassword(login, password)
      .then((user) => {
        commit(RESET_ERROR)
        commit(STOP_LOGIN_LOADING)
        commit('user/LOGIN', { user }, { root: true })
      })
      .catch((err) => {
        commit(HANDLE_ERROR, { err })
        commit(STOP_LOGIN_LOADING)
      })
  },
  onAuthStateChanged({ commit }, { authUser }) {
    if (!authUser) {
      commit('user/LOGOUT', null, { root: true })
    }
    // commit('user/LOGIN', { user: authUser }, { root: true })
  },
}
