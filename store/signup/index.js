import mutations from '@/store/signup/mutations'
import actions from '@/store/signup/actions'
export default {
  state: () => ({
    isSignupLoading: false,
    error: {
      hasError: false,
      text: '',
    },
  }),
  mutations,
  actions,
}
