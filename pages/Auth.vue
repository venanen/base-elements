<template>
  <div>
    <div id="auth-image-bg"></div>
    <div class="container-fluid auth_container">
      <div class="row h100 middle-xs center-xs">
        <div class="col">
          <a-card title="Авторизация">
            <NuxtLink slot="extra" to="signup">Регистрация</NuxtLink>
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

              <a-form-model-item label="Пароль:">
                <a-input-password
                  v-model="form.password"
                  size="large"
                  placeholder="Введите пароль"
                  class="auth-password"
                  style="text-align: start"
                />
              </a-form-model-item>

              <a-form-model-item
                style="margin-bottom: 0"
                :wrapper-col="{ span: 24 }"
              >
                <a-button size="large" block type="primary"> Войти </a-button>
              </a-form-model-item>
            </a-form-model>
          </a-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Auth',
  components: {},
  data: () => ({
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
    form: {
      login: '',
      password: '',
    },
  }),
}
</script>

<style scoped>
.auth_container {
  height: 100vh;
  width: 100vw;
}

#auth-image-bg {
  position: fixed;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url('~assets/images/auth_bg.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  filter: blur(2px);
}
input {
  text-align: start !important;
}
.ant-card {
  box-shadow: 4px 3px 15px 0px black;
  border-radius: 10px;
}
</style>
