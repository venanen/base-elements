<template>
  <div>
    <div id="form-image-bg" :class="{ 'more-blur': moreBlur }"></div>
    <div class="container-fluid form-container">
      <div class="row h100 middle-xs center-xs">
        <div class="col" @mouseenter="setMoreBlur" @mouseleave="setLessBlur">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BgContainer',
  data: () => ({
    moreBlur: false,
  }),
  methods: {
    setMoreBlur() {
      this.moreBlur = true
    },
    setLessBlur() {
      this.moreBlur = false
    },
  },
}
</script>

<style scoped>
.form-container {
  height: 100vh;
  width: 100vw;
}

#form-image-bg {
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
  transition: 0.2s;
}
#form-image-bg.more-blur {
  filter: blur(3px);
}
input {
  text-align: start !important;
}

.ant-card {
  box-shadow: 4px 3px 15px 0 black;
  border-radius: 10px;
  transition: 0.2s;
}
.ant-card:hover {
  box-shadow: 8px 8px 17px 0 black;
  /*transform: scale(1.01);*/
}
</style>
