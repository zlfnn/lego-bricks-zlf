<template>
  <h1>慕课乐高标准模版11111</h1>
  <l-text text="sdfsdfd f s f d f"/>
  <!-- <ul>
    <li>开箱即用</li>
    <li>typescript</li>
    <li>Vue3</li>
    <li>支持 tsx</li>
    <li>eslint</li>
    <li>简单易用可扩展</li>
  </ul> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import  LText  from './components/LText/LText.vue'
export default defineComponent({
  name: 'App',
  components: {
    LText
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
