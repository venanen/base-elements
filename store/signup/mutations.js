export default {
  START_SIGNUP_LOADING(state) {
    state.isSignupLoading = true
  },
  STOP_SIGNUP_LOADING(state) {
    state.isSignupLoading = false
  },
  HANDLE_ERROR(state, { err }) {
    console.log(err)
    switch (err.code) {
      case 'auth/email-already-in-use':
        state.error.hasError = true
        state.error.text = 'Такая почта уже используется '
        break
      default:
        state.error.hasError = true
        state.error.text = err.message
        break
    }
  },
  RESET_ERROR(state) {
    state.error.hasError = false
  },
}
