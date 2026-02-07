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
  <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm py-3">
    <div class="container">
      <RouterLink class="navbar-brand fw-bold text-primary d-flex align-items-center gap-2" to="/">
        <i class="bi bi-newspaper"></i> FPoly Blog
      </RouterLink>
      
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <RouterLink class="nav-link fw-medium px-3" to="/">Trang chủ</RouterLink>
          </li>
          <li class="nav-item" v-if="store.user">
             <RouterLink class="nav-link fw-medium px-3" to="/create">Viết bài</RouterLink>
          </li>
        </ul>
        
        <div class="d-flex align-items-center gap-3">
          <template v-if="!store.user">
            <RouterLink to="/login" class="text-decoration-none text-secondary fw-medium">Đăng nhập</RouterLink>
            <RouterLink to="/register" class="btn btn-primary px-4 rounded-3 fw-medium">Đăng ký</RouterLink>
          </template>
          
          <template v-else>
            <div class="dropdown">
              <button class="btn btn-light dropdown-toggle d-flex align-items-center gap-2 px-3 py-2 rounded-3" type="button" data-bs-toggle="dropdown">
                <div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style="width: 30px; height: 30px; font-size: 14px;">
                  {{ store.user.name.charAt(0).toUpperCase() }}
                </div>
                <span class="fw-medium small">{{ store.user.name }}</span>
              </button>
              <ul class="dropdown-menu dropdown-menu-end border-0 shadow mt-2 rounded-3">
                <li><RouterLink to="/profile" class="dropdown-item py-2">Hồ sơ cá nhân</RouterLink></li>
                <li><hr class="dropdown-divider"></li>
                <li><button @click="handleLogout" class="dropdown-item py-2 text-danger">Đăng xuất</button></li>
              </ul>
            </div>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-link { color: #555; transition: 0.2s; }
.nav-link:hover, .router-link-active { color: #0d6efd !important; }
</style>