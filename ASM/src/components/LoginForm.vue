<template>
  <div class="row justify-content-center">
    <div class="col-md-5 col-lg-4">
      <div class="card border-0 shadow-lg rounded-4 p-4">
        <div class="card-body">
          <div class="text-center mb-4">
            <div class="bg-primary bg-opacity-10 text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
              <i class="bi bi-person-fill fs-3"></i>
            </div>
            <h3 class="fw-bold">Chào mừng trở lại!</h3>
            <p class="text-muted small">Vui lòng đăng nhập để tiếp tục</p>
          </div>

          <form @submit.prevent="handleLogin">
            <div class="form-floating mb-3">
              <input type="email" class="form-control rounded-3" id="email" placeholder="name@example.com" required>
              <label for="email">Email address</label>
            </div>
            <div class="form-floating mb-4">
              <input type="password" class="form-control rounded-3" id="pass" placeholder="Password" required>
              <label for="pass">Password</label>
            </div>
            
            <button class="btn btn-primary w-100 py-3 rounded-pill fw-bold shadow-sm mb-3">
              Đăng Nhập
            </button>
          </form>

          <div class="text-center">
            <small class="text-muted">Chưa có tài khoản? 
              <a href="#" class="text-primary text-decoration-none fw-bold" @click.prevent="$emit('change-view', 'register')">Đăng ký ngay</a>
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['change-view', 'login-success']);
const handleLogin = () => {
  emit('login-success');
  emit('change-view', 'home');
}
</script>