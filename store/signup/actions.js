import {
  START_SIGNUP_LOADING,
  STOP_SIGNUP_LOADING,
  HANDLE_ERROR,
  RESET_ERROR,
} from '@/store/signup/types'
export default {
  signUp({ commit }, { email, password }) {
    commit(START_SIGNUP_LOADING)
    this.$fire.auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        commit(STOP_SIGNUP_LOADING)
        commit('user/LOGIN', { user }, { root: true })
        commit(RESET_ERROR)
      })
      .catch((e) => {
        commit(STOP_SIGNUP_LOADING)
        commit(HANDLE_ERROR, { err: e })
      })
  },
}
