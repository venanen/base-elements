<template>
  <bg-container>
    <a-card title="Регистрация">
      <NuxtLink slot="extra" to="auth">Авторизация</NuxtLink>
      <a-form-model
        ref="ruleForm"
        label-align="left"
        :rules="rules"
        :model="form"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-model-item has-feedback label="Логин:" prop="login">
          <a-input
            v-model="form.login"
            size="large"
            placeholder="Введите логин"
          />
        </a-form-model-item>

        <a-form-model-item has-feedback label="Почта:" prop="mail">
          <a-input
            v-model="form.mail"
            size="large"
            placeholder="Введите логин"
          />
        </a-form-model-item>

        <a-form-model-item has-feedback label="Пароль:" prop="password">
          <a-input-password
            v-model="form.password"
            size="large"
            placeholder="Введите пароль"
            class="auth-password"
            style="text-align: start"
          />
        </a-form-model-item>

        <a-form-model-item label="Еще раз:" has-feedback prop="repassword">
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
  data: () => {
    const validateRepassword = (rule, value, callback) => {
      if (value === '') {
        console.log(value, this.form.password)
        callback(new Error('Please input the password again'))
      } else if (value !== this.form.password) {
        callback(new Error('Пароли не совпадают'))
      } else {
        return true
      }
    }
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
            min: 4,
            message: 'Минимум 4 символа',
          },
        ],
        repassword: [
          {
            validator: validateRepassword,
          },
        ],
      },
    }
  },
}
</script>

<style scoped></style>
