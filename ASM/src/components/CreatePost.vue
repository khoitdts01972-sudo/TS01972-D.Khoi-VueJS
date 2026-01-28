<template>
  <div class="row justify-content-center">
    <div class="col-lg-8">
      <div class="card border-0 shadow-lg rounded-4">
        <div class="card-body p-5">
          <div class="d-flex align-items-center justify-content-between mb-4 pb-3 border-bottom">
            <h3 class="fw-bold m-0">Viết bài mới</h3>
            <button class="btn btn-light rounded-circle" @click="$emit('change-view', 'home')">
              <i class="bi bi-x-lg"></i>
            </button>
          </div>
          
          <form @submit.prevent="$emit('change-view', 'home')">
            <div class="mb-4">
              <label class="form-label fw-bold text-muted">Tiêu đề bài viết</label>
              <input type="text" class="form-control form-control-lg bg-light border-0" placeholder="Tiêu đề thật hấp dẫn..." required>
            </div>
            
            <div class="mb-4">
              <label class="form-label fw-bold text-muted">Nội dung</label>
              <textarea class="form-control bg-light border-0" rows="8" placeholder="Chia sẻ câu chuyện của bạn..." required></textarea>
            </div>
            
            <div class="d-flex justify-content-end gap-2">
              <button type="button" class="btn btn-light rounded-pill px-4" @click="$emit('change-view', 'home')">Hủy bỏ</button>
              <button type="submit" class="btn btn-primary rounded-pill px-5 shadow-sm fw-bold">Đăng bài</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineEmits(['change-view']);
</script>