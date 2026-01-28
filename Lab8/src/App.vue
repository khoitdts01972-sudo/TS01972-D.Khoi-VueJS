<template>
  <div class="app-container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-gradient-primary shadow-sm sticky-top">
      <div class="container">
        <router-link class="navbar-brand fw-bold text-uppercase" to="/">
          🚀 MyBlog
        </router-link>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto gap-2">
            <li class="nav-item">
              <router-link to="/" class="nav-link">🏠 Trang chủ</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/blog" class="nav-link">📰 Bài viết</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/profile" class="nav-link">👤 Hồ sơ</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/dashboard" class="nav-link btn-dashboard">
                🔒 Dashboard
              </router-link>
            </li>
            <li class="nav-item">
               <router-link to="/login" class="nav-link">🔑 Đăng nhập</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container mt-4 main-wrapper">
      <router-view v-slot="{ Component }">
        <transition name="slide-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>

    <footer class="text-center py-4 mt-5 text-secondary border-top bg-white">
      <small>© 2024 MyBlog - Vue Router Lab 8</small>
    </footer>
  </div>
</template>

<style>
/* CSS Tùy chỉnh để giao diện đẹp hơn Bootstrap mặc định */
body {
  background-color: #f8f9fa; /* Màu nền xám nhẹ dịu mắt */
  font-family: 'Segoe UI', sans-serif;
}

.bg-gradient-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); /* Màu tím xanh gradient */
}

/* Link Menu */
.navbar-nav .nav-link {
  color: rgba(255,255,255,0.85) !important;
  font-weight: 500;
  transition: all 0.3s;
}

.navbar-nav .nav-link:hover,
.navbar-nav .router-link-active {
  color: #fff !important;
  transform: translateY(-2px);
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

/* Nút Dashboard nổi bật */
.btn-dashboard {
  background: rgba(255,255,255,0.2);
  border-radius: 20px;
  padding: 8px 15px !important;
}

/* Hiệu ứng chuyển trang Slide Fade */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.main-wrapper {
  min-height: 80vh;
}
</style>