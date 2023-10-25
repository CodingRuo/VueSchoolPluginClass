<script setup lang="ts">
import { ref } from 'vue';

const tooltipText = ref("Hello World")
</script>

<template>
  <h3>Custom Vue.js 3 Plugins</h3>
  <input type="text" v-model="tooltipText">
  <span>Hover Over Me <ToolTip :text="tooltipText" :options="{ placement: 'top' }"/></span>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
