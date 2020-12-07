<template>
  <bg-container>
    <a-card title="Регистрация">
      <NuxtLink slot="extra" to="auth">Авторизация</NuxtLink>
      <a-alert
        v-if="error.hasError"
        type="error"
        :message="error.text"
        banner
      />
      <a-form-model
        ref="form"
        label-align="left"
        :rules="rules"
        :model="form"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-model-item :has-feedback="true" label="Логин:" prop="login">
          <a-input
            v-model="form.login"
            size="large"
            placeholder="Введите логин"
          />
        </a-form-model-item>

        <a-form-model-item :has-feedback="true" label="Почта:" prop="mail">
          <a-input
            v-model="form.mail"
            size="large"
            placeholder="Введите почту"
          />
        </a-form-model-item>

        <a-form-model-item :has-feedback="true" label="Пароль:" prop="password">
          <a-input-password
            v-model="form.password"
            size="large"
            placeholder="Введите пароль"
            class="auth-password"
            style="text-align: start"
          />
        </a-form-model-item>

        <a-form-model-item
          label="Еще раз:"
          :has-feedback="true"
          prop="repassword"
        >
          <a-input-password
            v-model="form.repassword"
            size="large"
            placeholder="Введите пароль"
            class="auth-password"
            style="text-align: start"
          />
        </a-form-model-item>

        <a-form-model-item style="margin-bottom: 0" :wrapper-col="{ span: 24 }">
          <a-button
            size="large"
            block
            type="primary"
            :loading="isSignupLoading"
            @click="register"
          >
            Регистрация</a-button
          >
        </a-form-model-item>
      </a-form-model>
    </a-card>
  </bg-container>
</template>

<script>
import BgContainer from '@/components/BgContainer'
import { mapState } from 'vuex'
export default {
  name: 'SignUp',
  components: { BgContainer },
  data() {
    return {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
      form: {
        name: '',
        password: '',
        mail: '',
        repassword: '',
      },
      rules: {
        login: [
          {
            required: true,
            message: 'Заполните это поле',
            trigger: 'change',
          },
          {
            min: 4,
            message: 'Минимум 4 символа',
          },
        ],
        mail: [
          {
            type: 'email',
            message: 'Введите валидный email',
          },
          {
            required: true,
            message: 'Заполните это поле',
          },
        ],
        password: [
          {
            required: true,
            message: 'Заполните это поле',
          },
          {
            min: 6,
            message: 'Минимум 6 символа',
          },
        ],
        repassword: [
          {
            required: true,
            message: 'Заполните это поле',
          },
          {
            validator: this.validateRepassword,
          },
        ],
      },
    }
  },
  computed: mapState({
    isSignupLoading: (state) => state.signup.isSignupLoading,
    error: (state) => state.signup.error,
  }),
  methods: {
    validateRepassword(rule, value, callback) {
      // console.log(this.form)
      if (value !== this.form.password) {
        callback(new Error('Пароли не совпадают'))
      } else {
        callback()
      }
    },
    register() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$store.dispatch('signup/signUp', {
            email: this.form.mail,
            password: this.form.password,
          })
        }
      })
    },
  },
}
</script>

<style scoped></style>
