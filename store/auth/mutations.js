export default {
  START_LOGIN_LOADING: (state) => {
    state.isLoginLoading = true
  },
  STOP_LOGIN_LOADING: (state) => {
    state.isLoginLoading = false
  },
  HANDLE_ERROR: (state, { err }) => {
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
        state.error.hasError = true
        state.error.text = err.message
        break
    }
  },
  RESET_ERROR: (state) => {
    state.error.hasError = false
  },
  OK: (state, payload) => {},
}
