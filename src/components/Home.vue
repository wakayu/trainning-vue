<template>
  <section class="main">
    <div class="page-title">HOME</div>
  </section>
</template>

<script>
// import Calendar from './Calendar.vue'
export default {
  name: 'Home',
  // components: {
  //   Calendar
  // },
  props: {
    huga: String,
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.main {
  margin: 0;
  height: calc(100vh - 90px);
  position: relative;
  background-color: #BAE6F3;

  .page-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 80px;
    font-weight: bold;
    color: #fff;
  }
  // .news-container {
  //   width: 810px;
  //   border-radius: 48px;
  //   box-shadow: 0px 30px 40px 3px rgba(0,0,0,0.1);
  //   background-color: #fff;
  // }
}
</style>