<template>
  <header>
    <h1 v-on:click="getData">キャッシュレス還元情報</h1>
    <ul>
      <li v-for="user in userDatas" :key="user.name">
        {{ user.name }}
      </li>
    </ul>
    <ul class="header">
      <li>
        <router-link to="/" class="link">HOME</router-link>
      </li>
      <li>
        <router-link to="/paypay" class="link paypay">PayPay</router-link>
      </li>
      <li>
        <router-link to="/line" class="link line">LINE Pay</router-link>
      </li>
      <li>
        <router-link to="/origami" class="link origami">Origami Pay</router-link>
      </li>
      <li>
        <router-link to="/merpay" class="link merpay">メルペイ</router-link>
      </li>
      <li>
        <router-link to="/docomo" class="link docomo">d払い</router-link>
      </li>
      <li>
        <router-link to="/au" class="link au">auPAY</router-link>
      </li>
      <li>
        <router-link to="/kyash" class="link kyash">Kyash</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Header',
  props: {
    hoge: String,
  },
  data: function() {
    return {
      userDatas: [],
    };
  },
  methods: {
    // getData() {
    //   const testApi = "https://jsonplaceholder.typicode.com/users";
    //   const users = fetch(testApi).json();
    //   this.userDatas = users;
    // }
    getData(){
      axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        this.userDatas = response.data
      })
    }
  }
}
</script>

<style scoped lang="scss">
header {
  height: 90px;
  display: flex;
  align-items: center;
  justify-content:space-between;
  // shodow
  position: relative;
  z-index: 1;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);

  h1 {
    margin: 0;
    padding: 0 0 0 32px;
    color: #555;
  }

  ul {
    margin: 0;
    padding: 0 32px 0 0;
    display: flex;

    li {
      padding: 12px 16px;
      list-style: none;

      .link {
        font-size: 1.5rem;
        font-weight: bold;
        color: #5CBEE4;
        text-decoration: none;
      }
      
      .paypay {
        color: #FF0034;
      }

      .line {
        color: #00C34D;
      }

      .origami {
        color: #FF5B1A;
      }

      .merpay {
        color: #FF0111;
      }

      .docomo {
        color: #CC0133;
      }

      .au {
        color: #EB5505;
      }

      .kyash {
        color: #2BD1FF;
      }
    }
  }
}
</style>
