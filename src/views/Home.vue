<!--
 * @Descripttion: 
 * @Author: wmq
 * @Date: 2021-08-01 22:14:58
 * @LastEditTime: 2021-09-29 14:43:25
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <van-button type="primary">ceshi</van-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
