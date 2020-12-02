import mutations from '@/store/auth/mutations'
import actions from '@/store/auth/actions'
export default {
  state: () => ({
    isAuth: false,
    user: {},
  }),
  mutations,
  actions,
}
