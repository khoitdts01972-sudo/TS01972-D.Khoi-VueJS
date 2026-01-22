<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-5">
        <div class="card shadow border-0">
          <div class="card-header bg-primary text-white text-center py-3">
            <h4 class="mb-0">ĐĂNG NHẬP HỆ THỐNG</h4>
          </div>
          <div class="card-body p-4">
            <form @submit.prevent="handleLogin">
              <div class="mb-3">
                <label class="form-label fw-bold">Email</label>
                <input 
                  v-model="email" 
                  type="email" 
                  class="form-control" 
                  placeholder="name@example.com" 
                  required
                >
              </div>
              <div class="mb-4">
                <label class="form-label fw-bold">Mật khẩu</label>
                <input 
                  v-model="password" 
                  type="password" 
                  class="form-control" 
                  placeholder="Nhập mật khẩu..." 
                  required
                >
              </div>
              
              <button type="submit" class="btn btn-primary w-100 mb-3">
                Đăng nhập
              </button>
              
              <div class="text-center">
                <p class="small mb-0">Chưa có tài khoản? 
                  <router-link to="/register" class="text-decoration-none">Đăng ký ngay</router-link>
                </p>
              </div>
            </form>
          </div>
        </div>
        
        <div class="alert alert-info mt-3 small">
          <strong>Gợi ý:</strong> Bạn hãy qua trang <b>Đăng ký</b> tạo tài khoản trước, hoặc dùng: <br>
          Email: <code>admin@gmail.com</code> | Pass: <code>123</code>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

const handleLogin = () => {
  // 1. Lấy dữ liệu người dùng đã đăng ký từ LocalStorage (Giả lập database)
  const savedUser = JSON.parse(localStorage.getItem('registeredUser'));

  // 2. Kiểm tra tài khoản (Authentication cơ bản)
  // Ưu tiên kiểm tra tài khoản vừa đăng ký, nếu không có thì dùng tài khoản admin mặc định
  if (savedUser && email.value === savedUser.email && password.value === savedUser.password) {
    loginSuccess(savedUser);
  } else if (email.value === 'admin@gmail.com' && password.value === '123') {
    loginSuccess({ name: 'Quản trị viên', email: 'admin@gmail.com' });
  } else {
    alert('Email hoặc mật khẩu không chính xác!');
  }
};

// Trong file Login.vue
const loginSuccess = (userData) => {
  localStorage.setItem('user', JSON.stringify(userData));
  alert('Đăng nhập thành công!');
  
  // Cách đơn giản nhất để menu cập nhật lại là load lại trang một chút
  // Hoặc router sẽ tự nhận biết nhờ cái 'watch' mình viết ở trên
  router.push('/').then(() => {
    window.location.reload(); // Dòng này đảm bảo menu đổi ngay lập tức
  });
};
</script>