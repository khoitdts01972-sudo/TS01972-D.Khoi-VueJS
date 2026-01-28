<template>
  <div class="login-container">
    <div class="login-card">
      <h2 class="login-title">Đăng Nhập</h2>
      <p class="login-subtitle">Chào mừng bạn quay trở lại!</p>
      
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label>Tên đăng nhập</label>
          <input 
            type="text" 
            class="form-input" 
            v-model="username" 
            placeholder="Nhập tên của bạn..." 
            required
          >
        </div>
        
        <div class="form-group">
          <label>Mật khẩu</label>
          <input 
            type="password" 
            class="form-input" 
            placeholder="••••••" 
          >
        </div>
        
        <button type="submit" class="btn-login">Truy cập ngay</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['loggedIn']);
const username = ref('');

const handleLogin = () => {
  if (username.value.trim()) {
    emit('loggedIn', username.value);
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh; /* Căn giữa theo chiều dọc */
}

.login-card {
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.login-title {
  margin-bottom: 5px;
  color: #333;
  font-weight: 700;
}

.login-subtitle {
  color: #666;
  margin-bottom: 30px;
  font-size: 14px;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

.form-group label {
  display: block;
  font-weight: 600;
  margin-bottom: 8px;
  color: #444;
  font-size: 14px;
}

.form-input {
  width: 100%;
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 15px;
  transition: all 0.3s;
  box-sizing: border-box;
}

.form-input:focus {
  border-color: #4f46e5;
  outline: none;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.btn-login {
  width: 100%;
  padding: 14px;
  background-color: #4f46e5; /* Màu tím xanh hiện đại */
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-login:hover {
  background-color: #4338ca;
}
</style>