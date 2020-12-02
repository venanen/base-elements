import mutations from '@/store/auth/mutations'
import actions from '@/store/auth/actions'
export default {
  state: () => ({
    isLoginLoading: false,
    error: {
      hasError: false,
      text: 'test error',
    },
  }),
  mutations,
  actions,
}
