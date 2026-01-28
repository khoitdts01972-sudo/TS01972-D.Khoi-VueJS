<template>
  <div class="app-container">
    <div class="card">
      
      <div v-if="!isLoggedIn">
        <h3 class="title">Đăng Nhập</h3>
        <form @submit.prevent="login">
          <div class="form-group">
            <label class="label">Email:</label>
            <input 
              type="email" 
              class="input-field" 
              :class="{ 'is-invalid': emailError }"
              v-model="email" 
              placeholder="Nhập email"
            >
            <p v-if="emailError" class="error-text">{{ emailError }}</p>
          </div>

          <div class="form-group">
            <label class="label">Mật khẩu:</label>
            <input 
              type="password" 
              class="input-field" 
              :class="{ 'is-invalid': passwordError }"
              v-model="password" 
              placeholder="Nhập mật khẩu"
            >
            <p v-if="passwordError" class="error-text">{{ passwordError }}</p>
          </div>
          
          <button type="submit" class="btn btn-primary w-100">Đăng nhập</button>
        </form>
      </div>

      <div v-else class="welcome-screen">
        <h3 class="welcome-title">Chào mừng!</h3>
        <p class="user-email">{{ email }}</p>
        <button @click="logout" class="btn btn-primary">Đăng xuất</button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isLoggedIn = ref(false);
const email = ref('');
const password = ref('');
const emailError = ref('');
const passwordError = ref('');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const login = () => {
  emailError.value = '';
  passwordError.value = '';

  if (!email.value) {
    emailError.value = 'Email là bắt buộc.';
  } else if (!emailRegex.test(email.value)) {
    emailError.value = 'Vui lòng nhập email hợp lệ.';
  }

  if (!password.value) {
    passwordError.value = 'Mật khẩu là bắt buộc.';
  }

  if (!emailError.value && !passwordError.value) {
    isLoggedIn.value = true;
  }
};

const logout = () => {
  isLoggedIn.value = false;
  email.value = '';
  password.value = '';
  emailError.value = '';
  passwordError.value = '';
};
</script>

<style scoped>
/* Container chung: Căn giữa màn hình, nền xám */
.app-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 50px;
  min-height: 100vh;
  background-color: #f0f2f5;
  font-family: Arial, sans-serif;
}

/* Khung Card */
.card {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  width: 400px;
  max-width: 90%;
}

.title {
  text-align: center;
  margin-bottom: 25px;
  color: #333;
  font-weight: bold;
}

/* Form inputs */
.form-group {
  margin-bottom: 15px;
}

.label {
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
  color: #555;
}

.input-field {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-sizing: border-box;
  transition: border-color 0.3s;
}

.input-field:focus {
  outline: none;
  border-color: #0d6efd;
}

.input-field.is-invalid {
  border-color: #dc3545;
}

.error-text {
  color: #dc3545;
  font-size: 13px;
  margin-top: 5px;
}

/* Button */
.btn {
  padding: 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: white;
  transition: background 0.3s;
}

.btn-primary {
  background-color: #0d6efd;
}

.btn-primary:hover {
  background-color: #0b5ed7;
}

.w-100 {
  width: 100%;
}

/* Màn hình chào mừng */
.welcome-screen {
  text-align: center;
}

.welcome-title {
  color: #198754;
  margin-bottom: 10px;
}

.user-email {
  font-size: 18px;
  color: #555;
  margin-bottom: 20px;
}
</style>