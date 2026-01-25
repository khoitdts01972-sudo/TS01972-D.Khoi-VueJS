<template>
  <div class="lab-item">
    <h3>Bài 2: Two-way Binding (v-model)</h3>
    <input v-model="userInput" placeholder="Nhập dữ liệu vào đây" />
    <p>Giá trị bạn nhập: <strong>{{ userInput }}</strong></p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const userInput = ref('FPL');
</script>

<style scoped>
.lab-item { padding: 20px; border: 1px solid #ddd; margin-bottom: 20px; }
input { padding: 8px; width: 100%; max-width: 300px; }
</style>