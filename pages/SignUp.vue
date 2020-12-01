<template>
  <bg-container>
    <a-card title="Регистрация">
      <NuxtLink slot="extra" to="auth">Авторизация</NuxtLink>
      <a-form-model
        label-align="left"
        :model="form"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-model-item label="Логин:">
          <a-input
            v-model="form.login"
            size="large"
            placeholder="Введите логин"
          />
        </a-form-model-item>

        <a-form-model-item label="Почта:">
          <a-input
            v-model="form.mail"
            size="large"
            placeholder="Введите логин"
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

        <a-form-model-item label="Еще раз:">
          <a-input-password
            v-model="form.repassword"
            size="large"
            placeholder="Введите пароль"
            class="auth-password"
            style="text-align: start"
          />
        </a-form-model-item>

        <a-form-model-item style="margin-bottom: 0" :wrapper-col="{ span: 24 }">
          <a-button size="large" block type="primary"> Регистрация</a-button>
        </a-form-model-item>
      </a-form-model>
    </a-card>
  </bg-container>
</template>

<script>
import BgContainer from '@/components/BgContainer'

export default {
  name: 'SignUp',
  components: { BgContainer },
  data: () => ({
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
    form: {
      login: '',
      password: '',
      mail: '',
      repassword: '',
    },
  }),
}
</script>

<style scoped></style>
