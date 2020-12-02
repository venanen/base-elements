<template>
  <bg-container>
    <a-card title="Авторизация">
      <NuxtLink slot="extra" to="signup">Регистрация</NuxtLink>
      <a-alert
        v-if="error.hasError"
        type="error"
        :message="error.text"
        banner
      />
      <br />
      <a-form-model
        label-align="left"
        :model="form"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-model-item label="Почта:">
          <a-input
            v-model="form.email"
            size="large"
            placeholder="Введите почта"
          />
        </a-form-model-item>

        <a-form-model-item label="Пароль:">
          <a-input-password
            v-model="form.password"
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
            :loading="isLoginLoading"
            :disabled="!isButtonEnable"
            @click="login"
          >
            Войти</a-button
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
  name: 'Auth',
  components: { BgContainer },
  data: () => ({
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
    form: {
      email: 'm@m.ru',
      password: '123456',
    },
  }),
  computed: {
    isButtonEnable() {
      return (
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          this.form.email
        ) && this.form.password.length > 0
      )
    },
    ...mapState({
      isLoginLoading: (state) => state.auth.isLoginLoading,
      error: (state) => state.auth.error,
    }),
  },
  methods: {
    login() {
      this.$store.dispatch('auth/login', {
        login: this.form.email,
        password: this.form.password,
      })
    },
  },
}
</script>

<style scoped></style>
