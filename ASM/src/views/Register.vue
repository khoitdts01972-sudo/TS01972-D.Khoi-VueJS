<template>
  <div class="container mt-5">
    <div class="card mx-auto shadow" style="max-width: 500px;">
      <div class="card-header bg-primary text-white text-center"><h3>Đăng ký</h3></div>
      <div class="card-body">
        <form @submit.prevent="handleRegister">
          <div class="mb-3">
            <label class="form-label">Họ và tên</label>
            <input v-model="user.name" type="text" class="form-control" placeholder="Nhập tên..." required>
          </div>
          <div class="mb-3">
            <label class="form-label">Email</label>
            <input v-model="user.email" type="email" class="form-control" placeholder="name@example.com" required>
          </div>
          <div class="mb-3">
            <label class="form-label">Mật khẩu</label>
            <input v-model="user.password" type="password" class="form-control" required>
          </div>
          <button type="submit" class="btn btn-primary w-100">Đăng ký ngay</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const user = ref({ name: '', email: '', password: '' });

const handleRegister = () => {
  // Lưu thông tin người dùng vào localStorage để giả lập database
  localStorage.setItem('registeredUser', JSON.stringify(user.value));
  alert('Đăng ký thành công! Hãy đăng nhập.');
  router.push('/login');
};
</script>