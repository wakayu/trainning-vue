<template>
  <header>
    <h1>
      <a href="">
        <img src="" alt="">
      </a>
    </h1>
    <ul class="header">
      <li>ニュース</li>
      <li>スケジュール</li>
      <li>メンバー</li>
      <li>ブログ</li>
      <li>ディスコグラフィー</li>
      <li>動画</li>
      <li>TV</li>
      <li>握手会</li>
      <li>日向坂46とは？</li>
      <li>グッズ</li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    hoge: String,
  }
}
</script>

<style scoped>
header {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
ul {
  margin: 0;
  padding: 0;
  display: flex;
}
li {
  list-style: none;
  padding: 0 0 0 24px;
}
</style>
