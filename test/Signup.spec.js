import { createLocalVue, mount, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import Signup from '@/pages/SignUp'
import Antd, { FormModel } from 'ant-design-vue/lib'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Antd)
localVue.use(FormModel)
describe('Signup page', () => {
  let actions, store, state, stubs
  beforeEach(() => {
    actions = {
      signUp: jest.fn(),
    }
    state = {
      error: {
        hasError: jest.fn(),
        error: false,
      },
      isSignupLoading: true,
    }
    store = new Vuex.Store(
      {
        modules: {
          signup: { namespaced: 'true', actions, state },
        },
      },
      {}
    )
    stubs = {
      NuxtLink: RouterLinkStub,
    }
  })

  it('Минимальная длинна имени', async () => {
    const wrapper = mount(Signup, { store, localVue, stubs })
    const input = wrapper.find('#login')
    input.element.value = '123'
    await input.trigger('input')
    expect(wrapper.html()).toMatch('Минимум 4 символа')
  })
  it('Валидация почты', async () => {
    const wrapper = mount(Signup, { store, localVue, stubs })
    const input = wrapper.find('#mail')
    input.element.value = '123'
    await input.trigger('input')
    expect(wrapper.html()).toMatch('Введите валидный email')
  })
  it('Длинна пароля', async () => {
    const wrapper = mount(Signup, { store, localVue, stubs })
    const input = wrapper.find('#password')
    input.element.value = '123'
    await input.trigger('input')
    expect(wrapper.html()).toMatch('Минимум 6 символа')
  })
  it('Совпадение паролей', async () => {
    const wrapper = mount(Signup, { store, localVue, stubs })
    const input = wrapper.find('#password')
    input.element.value = '123'
    await input.trigger('input')

    const reinput = wrapper.find('#repassword')
    reinput.element.value = '1231'
    await reinput.trigger('input')

    expect(wrapper.html()).toMatch('Пароли не совпадают')
  })
})
