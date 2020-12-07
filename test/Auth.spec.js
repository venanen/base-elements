import { createLocalVue, mount, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import Auth from '@/pages/Auth'
import Antd, { FormModel } from 'ant-design-vue/lib'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Antd)
localVue.use(FormModel)

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
    store = new Vuex.Store(
      {
        modules: {
          auth: { namespaced: 'true', actions, state },
        },
      },
      {}
    )
    stubs = {
      NuxtLink: RouterLinkStub,
    }
  })

  it('Ошибка валидации почты', async () => {
    const wrapper = mount(Auth, { store, localVue, stubs })
    const mailInput = wrapper.find('#mail')
    mailInput.element.value = '123123'
    await mailInput.trigger('input')
    expect(wrapper.html()).toMatch('некорректна')
  })
  it('Пустое поле почты', async () => {
    const wrapper = mount(Auth, { store, localVue, stubs })
    const mailInput = wrapper.find('#mail')
    mailInput.element.value = ''
    await mailInput.trigger('input')
    expect(wrapper.html()).toMatch('Введите почту')
  })
  it('Пустое поле пароля', async () => {
    const wrapper = mount(Auth, { store, localVue, stubs })
    const mailInput = wrapper.find('#password')
    mailInput.element.value = ''
    await mailInput.trigger('input')
    expect(wrapper.html()).toMatch('Введите пароль')
  })
  it('Проверка валидации формы при неверных данных', () => {
    const wrapper = mount(Auth, { store, localVue, stubs })
    const mailInput = wrapper.find('#password')
    mailInput.element.value = '123'
    const passwordInput = wrapper.find('#password')
    passwordInput.element.value = '23'
    expect(wrapper.vm.login()).toBeFalsy()
  })
  it('Проверка валидации формы при верных данных', async () => {
    const wrapper = mount(Auth, { store, localVue, stubs })

    const mailInput = wrapper.find('#mail')
    mailInput.element.value = 'm@m.ru'
    await mailInput.trigger('input')

    const passwordInput = wrapper.find('#password')
    passwordInput.element.value = '231231'
    await passwordInput.trigger('input')
    wrapper.vm.login()
    expect(actions.login).toHaveBeenCalled()
  })
})
