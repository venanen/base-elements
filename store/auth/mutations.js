export default {
  startLoginLoading: (state) => {
    state.isLoginLoading = true
  },
  stopLoginLoading: (state) => {
    state.isLoginLoading = false
  },
  HANDLE_ERROR: (state, { err }) => {
    console.log(err)
    switch (err.code) {
      case 'auth/user-not-found':
        state.error.hasError = true
        state.error.text = 'Такого пользователя нет'
        break
      case 'auth/wrong-password':
        state.error.hasError = true
        state.error.text = 'Неправильный пароль'
        break
      default:
        break
    }
  },
  RESET_ERROR: (state) => {
    state.error.hasError = false
  },
  OK: (state, payload) => {},
}
