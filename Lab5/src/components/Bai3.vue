<template>
  <div class="lab-item">
    <h3>Bài 3: Form thông tin cá nhân</h3>
    <div class="form-group">
      <label>Họ và Tên:</label>
      <input v-model="userInfo.name" type="text" placeholder="Nhập họ tên" />
    </div>
    <div class="form-group">
      <label>Tuổi:</label>
      <input v-model="userInfo.age" type="number" placeholder="Nhập tuổi" />
    </div>
    <div class="form-group">
      <label>Email:</label>
      <input v-model="userInfo.email" type="email" placeholder="Nhập email" />
    </div>

    <div class="result-box">
      <h4>Thông tin đã nhập:</h4>
      <p>Họ tên: {{ userInfo.name }}</p>
      <p>Tuổi: {{ userInfo.age }}</p>
      <p>Email: {{ userInfo.email }}</p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const userInfo = reactive({
  name: '',
  age: null,
  email: ''
});
</script>

<style scoped>
.lab-item { padding: 20px; border: 1px solid #ddd; margin-bottom: 20px; }
.form-group { margin-bottom: 10px; }
.result-box { background: #333; color: white; padding: 15px; margin-top: 15px; border-radius: 5px; }
input { width: 100%; padding: 5px; margin-top: 5px; }
</style>