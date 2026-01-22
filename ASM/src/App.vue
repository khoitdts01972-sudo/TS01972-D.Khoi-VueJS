<template>
  <div class="app-container d-flex flex-column min-vh-100">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4 shadow-sm">
      <div class="container">
        <router-link class="navbar-brand fw-bold" to="/">FPT Blog</router-link>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Trang chủ</router-link>
            </li>
            <li class="nav-item" v-if="isLoggedIn">
              <router-link class="nav-link" to="/create-post">Đăng bài</router-link>
            </li>
          </ul>
          
          <ul class="navbar-nav">
            <template v-if="!isLoggedIn">
              <li class="nav-item">
                <router-link class="nav-link" to="/register">Đăng ký</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link text-info" to="/login">Đăng nhập</router-link>
              </li>
            </template>

            <template v-else>
              <li class="nav-item">
                <router-link class="nav-link fw-bold text-light" to="/profile">
                  Chào, {{ userName }}
                </router-link>
              </li>
              <li class="nav-item">
                <a @click.prevent="handleLogout" class="nav-link text-danger" href="#" style="cursor: pointer;">Đăng xuất</a>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </nav>

    <main class="container flex-grow-1">
      <router-view @login-success="checkLoginStatus"></router-view>
    </main>

    <footer class="text-center py-4 border-top bg-light mt-auto">
      <div class="container">
        <p class="mb-0 text-muted">© 2024 - Assignment Vue.js - FPT Polytechnic</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const isLoggedIn = ref(false);
const userName = ref('');

// Hàm kiểm tra trạng thái đăng nhập từ LocalStorage
const checkLoginStatus = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    isLoggedIn.value = true;
    userName.value = user.name;
  } else {
    isLoggedIn.value = false;
    userName.value = '';
  }
};

// Kiểm tra ngay khi vừa tải trang
onMounted(() => {
  checkLoginStatus();
});

// Theo dõi sự thay đổi của route để cập nhật lại menu (đề phòng login xong chưa load lại)
watch(() => route.path, () => {
  checkLoginStatus();
});

const handleLogout = () => {
  if (confirm("Bạn có muốn đăng xuất không?")) {
    localStorage.removeItem('user');
    checkLoginStatus();
    router.push('/login');
  }
};
</script>

<style>
/* ... giữ nguyên phần style cũ của bạn ... */
.nav-link.router-link-active {
  color: #00d2ff !important;
}
</style>