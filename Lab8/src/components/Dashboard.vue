<template>
  <div class="page-container">
    <h2>Bảng điều khiển (Dashboard)</h2>
    <div class="card secret">
      <p>Chỉ người đã đăng nhập mới thấy dòng này!</p>
      <p>Chào mừng Admin quay lại.</p>
      <button @click="logout" class="btn-logout">Đăng xuất</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const logout = () => {
  // Xóa trạng thái đăng nhập
  localStorage.removeItem('isAuthenticated');
  alert('Đã đăng xuất!');
  router.push({ name: 'Login' });
};
</script>

<style scoped>
.page-container { padding: 20px; color: #333; }
.secret { background: #fffae6; border: 1px solid #f1c40f; padding: 20px; }
.btn-logout { padding: 10px; background: red; color: white; border: none; margin-top: 10px; cursor: pointer;}
</style>