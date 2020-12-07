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
        ref="form"
        label-align="left"
        :model="form"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-model-item
          id="item-mail"
          label="Почта:"
          prop="email"
          :has-feedback="true"
        >
          <a-input
            id="mail"
            v-model="form.email"
            size="large"
            placeholder="Введите почту"
          />
        </a-form-model-item>

        <a-form-model-item
          id="item-password"
          label="Пароль:"
          prop="password"
          :has-feedback="true"
        >
          <a-input-password
            id="password"
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
            :disabled="isLoginLoading"
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
      email: '',
      password: '',
    },
    rules: {
      email: [
        {
          required: true,
          message: 'Введите почту',
        },
        {
          type: 'email',
          message: 'Почта некорректна',
        },
      ],
      password: [
        {
          required: true,
          message: 'Введите пароль',
        },
      ],
    },
  }),
  computed: {
    ...mapState({
      isLoginLoading: (state) => state.auth.isLoginLoading,
      error: (state) => state.auth.error,
    }),
  },
  methods: {
    login() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$store.dispatch('auth/login', {
            login: this.form.email,
            password: this.form.password,
          })
        } else {
          return false
        }
      })
    },
  },
}
</script>

<style scoped></style>
