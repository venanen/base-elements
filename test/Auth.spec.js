import {
  shallowMount,
  createLocalVue,
  mount,
  RouterLinkStub,
} from '@vue/test-utils'
import Vuex from 'vuex'
import Auth from '@/pages/Auth'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Auth page', () => {
  let actions, store, state, stubs
  beforeEach(() => {
    actions = {
      login: jest.fn(),
    }
    state = {
      error: {
        hasError: jest.fn(),
        error: false,
      },
      isLoginLoading: true,
    }
    store = new Vuex.Store({
      modules: {
        auth: { actions, state },
      },
    })
    stubs = {
      NuxtLink: RouterLinkStub,
    }
  })

  test('Ошибка валидации почты', () => {
    const wrapper = mount(Auth, { store, localVue, stubs })
    const mail = wrapper.find('mail')
    mail
      // TODO добавить тесты
      .expect(wrapper.html())
      .toMatch('Авторизация')
  })
})
