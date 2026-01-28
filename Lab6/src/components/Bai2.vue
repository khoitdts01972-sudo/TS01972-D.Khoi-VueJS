<template>
  <div class="container mt-4">
    <h3>Bài 2: Xác định mùa</h3>
    <div class="mb-3">
      <label>Nhập tháng của bạn:</label>
      <input type="number" v-model.number="month" class="form-control">
    </div>

    <h4 v-if="month < 1 || month > 12" style="color: red;">
      Vui lòng nhập tháng từ 1 đến 12!
    </h4>
    <h4 v-else-if="month >= 1 && month <= 3">Mùa Xuân</h4>
    <h4 v-else-if="month >= 4 && month <= 6">Mùa Hè</h4>
    <h4 v-else-if="month >= 7 && month <= 9">Mùa Thu</h4>
    <h4 v-else>Mùa Đông</h4>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const month = ref(1);
</script>