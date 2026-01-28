<template>
  <div class="row justify-content-center">
    <div class="col-md-6 col-lg-5">
      <div class="card border-0 shadow-lg rounded-4 p-4">
        <div class="card-body">
          <h3 class="fw-bold text-center text-primary mb-4">Tạo tài khoản mới</h3>
          
          <form @submit.prevent="$emit('change-view', 'login')">
            <div class="mb-3">
              <label class="form-label fw-semibold">Họ và tên</label>
              <div class="input-group">
                <span class="input-group-text bg-light border-end-0"><i class="bi bi-person"></i></span>
                <input type="text" class="form-control bg-light border-start-0" placeholder="Nhập tên của bạn" required>
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label fw-semibold">Email</label>
              <div class="input-group">
                <span class="input-group-text bg-light border-end-0"><i class="bi bi-envelope"></i></span>
                <input type="email" class="form-control bg-light border-start-0" placeholder="name@example.com" required>
              </div>
            </div>

            <div class="mb-4">
              <label class="form-label fw-semibold">Mật khẩu</label>
              <div class="input-group">
                <span class="input-group-text bg-light border-end-0"><i class="bi bi-lock"></i></span>
                <input type="password" class="form-control bg-light border-start-0" placeholder="••••••••" required>
              </div>
            </div>

            <button class="btn btn-success w-100 py-3 rounded-pill fw-bold shadow-sm">
              <i class="bi bi-person-plus-fill me-2"></i> Đăng Ký
            </button>
          </form>
          
          <div class="text-center mt-4 pt-3 border-top">
            <small class="text-muted">Đã có tài khoản? <a href="#" class="fw-bold text-decoration-none" @click.prevent="$emit('change-view', 'login')">Đăng nhập</a></small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineEmits(['change-view']);
</script>