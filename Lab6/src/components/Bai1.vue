<template>
  <div style="padding: 20px;">
    <div style="border: 1px solid #ccc; padding: 20px; width: 300px; border-radius: 5px;">
      
      <h3 style="margin: 0 0 10px 0;">Nhập điểm của bạn:</h3>
      
      <input 
        type="number" 
        v-model.number="score" 
        style="width: 100%; padding: 8px; font-size: 16px; margin-bottom: 10px;"
        placeholder="Nhập số..."
      >

      <div v-if="score !== null && score !== ''" style="font-weight: bold; font-size: 18px;">
        <span v-if="score < 5">Yếu</span>
        <span v-else-if="score >= 5 && score < 6.5">Trung bình</span>
        <span v-else-if="score >= 6.5 && score < 8">Khá</span>
        <span v-else-if="score >= 8 && score < 9">Giỏi</span>
        <span v-else-if="score >= 9">Xuất sắc</span>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const score = ref(9); 
</script>