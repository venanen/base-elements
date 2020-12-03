import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth/index'
import user from './user/index'
import signup from './signup/index'
Vue.use(Vuex)
// eslint-disable-next-line no-unused-vars
const store = new Vuex.Store({
  modules: {
    auth,
    user,
    signup,
  },
})
