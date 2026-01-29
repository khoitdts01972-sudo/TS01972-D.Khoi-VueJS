<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { store } from '../store'

const router = useRouter();
const handleLogout = () => {
    store.logout();
    router.push('/login');
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-gradient-primary sticky-top shadow-lg">
    <div class="container">
      <RouterLink class="navbar-brand fw-bold d-flex align-items-center gap-2" to="/">
        <i class="bi bi-code-slash fs-4"></i> FPoly Blog
      </RouterLink>
      
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto ms-3">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/"><i class="bi bi-house-door-fill me-1"></i> Trang chủ</RouterLink>
          </li>
        </ul>
        
        <div class="d-flex gap-2 align-items-center">
          <template v-if="!store.user">
            <RouterLink to="/login" class="btn btn-light text-primary fw-bold rounded-pill px-4 shadow-sm">
              <i class="bi bi-box-arrow-in-right"></i> Đăng nhập
            </RouterLink>
            <RouterLink to="/register" class="btn btn-outline-light rounded-pill px-4">Đăng ký</RouterLink>
          </template>
          
          <template v-else>
            <div class="dropdown">
              <button class="btn btn-light rounded-pill dropdown-toggle d-flex align-items-center gap-2" type="button" data-bs-toggle="dropdown">
                <i class="bi bi-person-circle fs-5 text-primary"></i> 
                <span class="fw-bold text-primary">{{ store.user.name }}</span>
              </button>
              <ul class="dropdown-menu dropdown-menu-end shadow border-0 mt-2">
                <li><RouterLink to="/create" class="dropdown-item"><i class="bi bi-pencil-square me-2"></i>Viết bài mới</RouterLink></li>
                <li><RouterLink to="/profile" class="dropdown-item"><i class="bi bi-person-gear me-2"></i>Hồ sơ</RouterLink></li>
                <li><hr class="dropdown-divider"></li>
                <li><button @click="handleLogout" class="dropdown-item text-danger"><i class="bi bi-box-arrow-right me-2"></i>Đăng xuất</button></li>
              </ul>
            </div>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.bg-gradient-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); /* Màu tím xanh hiện đại */
}
.navbar-brand {
    font-size: 1.5rem;
    letter-spacing: 1px;
}
.nav-link {
    transition: color 0.3s;
}
.nav-link:hover {
    color: #ffd700 !important; /* Màu vàng khi hover */
}
</style>