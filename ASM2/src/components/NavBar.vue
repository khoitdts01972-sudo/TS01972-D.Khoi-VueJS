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
  <div style="height: 90px;"></div> <nav class="navbar navbar-expand-lg fixed-top px-4 py-3 my-navbar">
    <div class="container-fluid glass-effect rounded-pill px-4 py-2">
      <RouterLink class="navbar-brand fw-bold d-flex align-items-center gap-2" to="/">
        <span class="logo-icon"><i class="bi bi-stars"></i></span>
        <span class="logo-text">FPoly Blog</span>
      </RouterLink>
      
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <i class="bi bi-list fs-2 text-dark"></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Khám Phá</RouterLink>
          </li>
          <li class="nav-item" v-if="store.user">
             <RouterLink class="nav-link" to="/create">Viết Bài</RouterLink>
          </li>
        </ul>
        
        <div class="d-flex align-items-center gap-3">
          <template v-if="!store.user">
            <RouterLink to="/login" class="fw-bold text-dark text-decoration-none">Đăng nhập</RouterLink>
            <RouterLink to="/register" class="btn btn-dark rounded-pill px-4 shadow-sm">Đăng ký</RouterLink>
          </template>
          
          <template v-else>
            <div class="dropdown">
              <button class="btn btn-white border rounded-pill dropdown-toggle d-flex align-items-center gap-2 px-3" type="button" data-bs-toggle="dropdown">
                <img :src="`https://ui-avatars.com/api/?name=${store.user.name}&background=random`" class="rounded-circle" width="28">
                <span class="fw-bold small">{{ store.user.name }}</span>
              </button>
              <ul class="dropdown-menu dropdown-menu-end glass-effect border-0 mt-3 rounded-4 p-2 shadow-lg">
                <li><RouterLink to="/profile" class="dropdown-item rounded-3">Hồ sơ cá nhân</RouterLink></li>
                <li><hr class="dropdown-divider"></li>
                <li><button @click="handleLogout" class="dropdown-item rounded-3 text-danger fw-bold">Đăng xuất</button></li>
              </ul>
            </div>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.my-navbar { pointer-events: none; } /* Để click xuyên qua vùng trống */
.my-navbar .container-fluid { pointer-events: auto; } /* Chỉ bắt sự kiện ở thanh nav */

.logo-icon {
  background: linear-gradient(135deg, #6c5ce7, #a29bfe);
  color: white; width: 36px; height: 36px; border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
}
.logo-text { font-family: 'Outfit', sans-serif; font-weight: 800; letter-spacing: -0.5px; }

.nav-link {
  font-weight: 600; color: #636e72; padding: 8px 16px !important; border-radius: 20px; transition: 0.3s;
}
.nav-link:hover, .router-link-active {
  background: rgba(108, 92, 231, 0.1); color: #6c5ce7 !important;
}
</style>