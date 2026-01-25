<template>
  <div class="lab-item">
    <h3>Bài 1: Cập nhật thông điệp</h3>
    <p>{{ message }}</p>
    <button @click="updateMessage" class="btn btn-primary">Thay đổi thông điệp</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('Thông điệp ban đầu');

function updateMessage() {
  message.value = 'Thông điệp đã được thay đổi!';
}
</script>

<style scoped>
.lab-item { padding: 20px; border: 1px solid #ddd; margin-bottom: 20px; }
.btn-primary { background-color: #007bff; color: white; padding: 5px 10px; border: none; border-radius: 4px; }
</style>