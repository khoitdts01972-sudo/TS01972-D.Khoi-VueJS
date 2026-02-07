<script setup>
import { RouterView, useRoute } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'

const route = useRoute();
</script>

<template>
  <div class="app-wrapper d-flex flex-column min-vh-100">
    <NavBar />
    <main class="flex-grow-1 container py-4">
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
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

/* 1. Global Reset */
body {
  font-family: 'Inter', sans-serif !important;
  background-color: #f8f9fa; /* Màu xám rất nhẹ, chuẩn web hiện đại */
  color: #212529;
}

/* 2. Transition nhẹ nhàng */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 3. Button chuẩn */
.btn-primary {
  background-color: #0d6efd !important; /* Xanh dương chuẩn Bootstrap */
  border-color: #0d6efd !important;
  box-shadow: 0 2px 4px rgba(13, 110, 253, 0.15);
}
.btn-primary:hover {
  background-color: #0b5ed7 !important;
  transform: translateY(-1px);
}
</style>