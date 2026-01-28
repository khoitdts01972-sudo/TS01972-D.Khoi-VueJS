<template>
  <div class="login-wrapper">
    <div class="card login-card shadow-lg">
      <div class="card-body p-5">
        <div class="text-center mb-4">
          <div class="avatar-icon">🔐</div>
          <h3 class="fw-bold mt-2">Đăng Nhập</h3>
          <p class="text-muted small">Truy cập vào khu vực quản trị</p>
        </div>
        
        <div class="mb-3">
          <label class="form-label fw-bold">Email</label>
          <input type="email" class="form-control form-control-lg" placeholder="admin@example.com">
        </div>
        
        <div class="mb-4">
          <label class="form-label fw-bold">Mật khẩu</label>
          <input type="password" class="form-control form-control-lg" placeholder="••••••">
        </div>

        <button @click="login" class="btn btn-primary w-100 py-2 fw-bold btn-lg gradient-btn">
          Đăng nhập ngay
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const login = () => {
  localStorage.setItem('isAuthenticated', 'true');
  router.push({ name: 'Dashboard' });
};
</script>

<style scoped>
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
}

.login-card {
  width: 400px;
  border: none;
  border-radius: 20px;
  overflow: hidden;
}

.avatar-icon {
  font-size: 3rem;
  background: #f0f2f5;
  width: 80px;
  height: 80px;
  line-height: 80px;
  border-radius: 50%;
  margin: 0 auto;
}

.gradient-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
}

.gradient-btn:hover {
  opacity: 0.9;
  transform: scale(1.02);
  transition: all 0.2s;
}
</style>