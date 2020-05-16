<template>
  <section class="main">
    <div class="page-title">Origami Pay</div>
  </section>
</template>

<script>
export default {
  name: 'Origamipay',
}
</script>

<style scoped lang="scss">
.main {
  margin: 0;
  height: calc(100vh - 90px);
  position: relative;
  background-color: #FF5B1A;

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