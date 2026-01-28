<template>
  <div class="app-wrapper">
    <nav class="navbar navbar-expand-lg navbar-dark bg-gradient-primary shadow-sm sticky-top">
      <div class="container">
        <a class="navbar-brand fw-bold fs-3 d-flex align-items-center gap-2" href="#" @click.prevent="currentView = 'home'">
          <i class="bi bi-journal-code"></i> ĐĂNG KHÔI BLOG
        </a>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" :class="{active: currentView === 'home'}" href="#" @click.prevent="currentView = 'home'">Trang chủ</a>
            </li>
            
            <li class="nav-item" v-if="!isLoggedIn">
              <a class="nav-link" :class="{active: currentView === 'login'}" href="#" @click.prevent="currentView = 'login'">Đăng nhập</a>
            </li>
            
            <li class="nav-item ms-lg-2" v-if="!isLoggedIn">
              <a class="nav-link btn btn-light text-primary fw-bold px-4 rounded-pill" href="#" @click.prevent="currentView = 'register'">Đăng Ký</a>
            </li>
            
            <li class="nav-item" v-if="isLoggedIn">
              <a class="nav-link d-flex align-items-center gap-2" :class="{active: currentView === 'profile'}" href="#" @click.prevent="currentView = 'profile'">
                <div class="avatar-sm">SV</div> Chào, User
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="main-content py-5">
      <div class="container">
        <Transition name="fade" mode="out-in">
          <component 
            :is="activeComponent" 
            @change-view="handleViewChange"
            @login-success="handleLogin"
            @logout="handleLogout"
          ></component>
        </Transition>
      </div>
    </div>
    
    <footer class="bg-white py-4 text-center text-muted border-top mt-auto">
      <small>&copy; 2026 FPT Polytechnic - VueJS Assignment</small>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import PostList from './components/PostList.vue';
import LoginForm from './components/LoginForm.vue';
import RegisterForm from './components/RegisterForm.vue';
import CreatePost from './components/CreatePost.vue';
import UserProfile from './components/UserProfile.vue';

const currentView = ref('home');
const isLoggedIn = ref(false);

// Map tên view sang component tương ứng
const activeComponent = computed(() => {
  switch (currentView.value) {
    case 'home': return PostList;
    case 'login': return LoginForm;
    case 'register': return RegisterForm;
    case 'create': return CreatePost;
    case 'profile': return UserProfile;
    default: return PostList;
  }
});

const handleViewChange = (viewName) => currentView.value = viewName;
const handleLogin = () => isLoggedIn.value = true;
const handleLogout = () => {
  isLoggedIn.value = false;
  currentView.value = 'login';
};
</script>

<style>
/* CSS Toàn cục đẹp mắt */
body {
  background-color: #f0f2f5;
  font-family: 'Segoe UI', sans-serif;
}
.bg-gradient-primary {
  background: linear-gradient(135deg, #4f46e5 0%, #2563eb 100%);
}
.avatar-sm {
  width: 24px; height: 24px; background: rgba(255,255,255,0.2); 
  border-radius: 50%; font-size: 10px; display: flex; 
  align-items: center; justify-content: center;
}
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>