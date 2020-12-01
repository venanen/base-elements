<template>
  <div>
    <div id="auth-image-bg"></div>
    <div class="container-fluid auth_container">
      <div class="row h100 middle-xs center-xs">
        <div class="col">
          <a-card title="Авторизация" style="width: 300px">
            <a slot="extra" href="#">Регистрация</a>
            <div class="row"></div>
            <p>card content</p>
            <p>card content</p>
          </a-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Auth',
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
.ant-card {
  box-shadow: 4px 3px 15px 0px black;
  border-radius: 10px;
}
</style>
