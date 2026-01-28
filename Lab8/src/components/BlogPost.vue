<template>
  <div class="page-container">
    <h2>Chi tiết bài viết</h2>
    <div class="card">
      <p>Bạn đang xem bài viết có ID là: <strong style="color: red">{{ route.params.id }}</strong></p>
      <p>Nội dung bài viết sẽ hiển thị ở đây...</p>
      <button @click="$router.push('/blog')">Quay lại danh sách</button>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute(); // Hook để lấy thông tin route hiện tại
</script>

<style scoped>
.page-container { padding: 20px; color: #333; }
.card { border: 1px solid #ddd; padding: 15px; border-radius: 8px; background: white; }
</style>