<template>
  <section class="main">
    <div class="page-title">d払い</div>
  </section>
</template>

<script>
export default {
  name: 'Docomo',
}
</script>

<style scoped lang="scss">
.main {
  margin: 0;
  height: calc(100vh - 90px);
  position: relative;
  background-color: #CC0133;

  .page-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 80px;
    font-weight: bold;
    color: #fff;
  }
}
</style>