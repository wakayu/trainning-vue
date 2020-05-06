<template>
  <section class="main">
    <div class="news-container"></div>
    <Calendar />
  </section>
</template>

<script>
import Calendar from './Calendar.vue'
export default {
  name: 'Maincontent',
  conponents: {
    Calendar
  },
  props: {
    huga: String,
  }
}
</script>

<style scoped>
.main {
  margin: 60px 0 0 0;
  padding: 50px 40px;
  height: 300px;
  display: flex;
  background-color: #BAE6F3;
}
.news-container {
  width: 810px;
  border-radius: 48px;
  box-shadow: 0px 30px 40px 3px rgba(0,0,0,0.1);
  background-color: #fff;
}
</style>