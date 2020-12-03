export default {
  LOGOUT(state) {
    state.isAuth = false
    Object.assign(state.user, {})
  },
  LOGIN(state, { user }) {
    state.isAuth = true
    Object.assign(state.user, user)
  },
}
