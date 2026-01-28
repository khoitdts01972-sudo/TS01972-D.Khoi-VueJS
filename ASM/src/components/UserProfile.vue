<template>
  <div class="row g-4">
    <div class="col-md-4">
      <div class="card border-0 shadow-sm rounded-4 text-center p-5 h-100">
        <div class="position-relative d-inline-block mx-auto mb-3">
          <div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fs-1 fw-bold shadow-sm" style="width: 100px; height: 100px;">
            K
          </div>
          <span class="position-absolute bottom-0 end-0 p-2 bg-success border border-white rounded-circle"></span>
        </div>
        <h4 class="fw-bold mb-1">Đăng Khôi</h4>
        <p class="text-muted small mb-4">Web Developer | VueJS Lover</p>
        <button class="btn btn-outline-danger w-100 rounded-pill" @click="$emit('logout')">
          <i class="bi bi-box-arrow-right me-2"></i> Đăng xuất
        </button>
      </div>
    </div>

    <div class="col-md-8">
      <div class="card border-0 shadow-sm rounded-4 h-100">
        <div class="card-header bg-white py-3 border-bottom-0">
          <h5 class="fw-bold m-0"><i class="bi bi-gear-fill me-2 text-primary"></i> Thông tin cá nhân</h5>
        </div>
        <div class="card-body p-4">
          <div class="row g-3">
            <div class="col-md-6">
              <label class="form-label text-muted small">Họ và tên</label>
              <input type="text" class="form-control" value="Đăng Khôi" disabled>
            </div>
            <div class="col-md-6">
              <label class="form-label text-muted small">Số điện thoại</label>
              <input type="text" class="form-control" value="0909 123 456">
            </div>
            <div class="col-12">
              <label class="form-label text-muted small">Email</label>
              <input type="email" class="form-control bg-light" value="khoi@poly.edu.vn" disabled>
            </div>
            <div class="col-12 mt-4">
              <button class="btn btn-primary px-4 rounded-pill">Lưu thay đổi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineEmits(['logout']);
</script>