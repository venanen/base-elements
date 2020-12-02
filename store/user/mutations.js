export default {
  LOGOUT: (state) => {
    state.isAuth = false
    state.user = {}
  },
  LOGIN: (state, { user }) => {
    state.isAuth = true
    state.user = user
    console.log(user)
  },
}
