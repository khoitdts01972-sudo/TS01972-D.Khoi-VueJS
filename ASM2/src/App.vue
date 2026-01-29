<script setup>
import { RouterView, useRoute } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'

// Khai báo route để lấy đường dẫn hiện tại làm key
const route = useRoute();
</script>

<template>
  <div class="app-container d-flex flex-column min-vh-100">
    <NavBar />
    
    <main class="container my-5 flex-grow-1">
      
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </transition>
      </router-view>

    </main>
    
    <FooterBar />
  </div>
</template>

<style>
/* Import Font chữ đẹp (Inter) từ Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');

/* Thiết lập style chung cho toàn trang */
body {
  font-family: 'Inter', sans-serif;
  background-color: #f0f2f5; /* Màu nền xám nhẹ hiện đại */
  color: #333;
}

/* Hiệu ứng chuyển cảnh mượt mà (Fade) */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Tùy chỉnh thanh cuộn (Scrollbar) cho đẹp */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #bbb;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #888;
}
</style>