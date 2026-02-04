<script setup>
import { RouterView, useRoute } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'

const route = useRoute();
</script>

<template>
  <div class="app-wrapper">
    <div class="aurora-bg"></div>
    
    <div class="content-wrapper d-flex flex-column min-vh-100 position-relative z-1">
      <NavBar />
      
      <main class="flex-grow-1 container mt-4">
        <router-view v-slot="{ Component }">
          <transition name="fade-slide" mode="out-in">
            <component :is="Component" :key="route.fullPath" />
          </transition>
        </router-view>
      </main>
      
      <FooterBar />
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap');

/* 1. Global Reset */
body {
  font-family: 'Outfit', sans-serif !important;
  color: #2d3436;
  overflow-x: hidden;
}

/* 2. Animated Aurora Background */
.aurora-bg {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
  z-index: -1;
}

@keyframes gradientBG {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* 3. Glassmorphism Utilities (Dùng chung cho Card, Navbar) */
.glass-effect {
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
}

/* 4. Button Styles */
.btn-primary {
  background: linear-gradient(90deg, #6c5ce7, #a29bfe) !important;
  border: none !important;
  box-shadow: 0 4px 15px rgba(108, 92, 231, 0.4);
  font-weight: 600;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(108, 92, 231, 0.6);
}

/* 5. Transitions */
.fade-slide-enter-active, .fade-slide-leave-active { transition: all 0.4s ease; }
.fade-slide-enter-from { opacity: 0; transform: translateY(20px); filter: blur(5px); }
.fade-slide-leave-to { opacity: 0; transform: translateY(-20px); filter: blur(5px); }
</style>