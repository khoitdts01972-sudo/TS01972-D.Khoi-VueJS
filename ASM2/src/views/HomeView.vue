<script setup>
import { store } from '../store'
import PostCard from '../components/PostCard.vue'
</script>

<template>
  <div class="hero-box glass-effect p-5 mb-5 rounded-5 text-center position-relative overflow-hidden">
    <div class="position-relative z-2">
      <span class="badge bg-white text-primary px-3 py-2 rounded-pill shadow-sm mb-3">#Trending 2026</span>
      <h1 class="display-3 fw-black mb-3 gradient-text">Chia Sẻ Đam Mê<br>Kết Nối Tri Thức</h1>
      <p class="lead text-secondary mb-4 mx-auto" style="max-width: 600px;">
        Không gian mở dành cho sinh viên FPoly. Nơi những dòng code trở thành câu chuyện đầy cảm hứng.
      </p>
      
      <div class="d-flex justify-content-center gap-3">
         <template v-if="!store.user">
             <router-link to="/register" class="btn btn-primary btn-lg rounded-pill px-5">Tham gia ngay</router-link>
         </template>
         <template v-else>
             <router-link to="/create" class="btn btn-primary btn-lg rounded-pill px-5"><i class="bi bi-pen-fill me-2"></i>Viết bài mới</router-link>
         </template>
      </div>
    </div>
    
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
  </div>

  <div class="row g-4 mb-5">
    <div class="col-12 mb-2 d-flex align-items-center justify-content-between">
       <h3 class="fw-bold m-0 text-dark"><i class="bi bi-fire text-danger me-2"></i>Mới nhất</h3>
       <button class="btn btn-sm btn-light rounded-pill px-3 fw-bold">Xem tất cả</button>
    </div>

    <div class="col-md-6 col-lg-4" v-for="post in store.posts" :key="post.id">
      <PostCard :post="post" />
    </div>
  </div>
</template>

<style scoped>
.fw-black { font-weight: 800; letter-spacing: -1px; }

.gradient-text {
  background: linear-gradient(135deg, #2d3436 0%, #6c5ce7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Hiệu ứng bong bóng mờ trang trí */
.blob {
  position: absolute; border-radius: 50%; filter: blur(50px); z-index: 1;
}
.blob-1 { width: 200px; height: 200px; background: rgba(108, 92, 231, 0.3); top: -50px; left: -50px; }
.blob-2 { width: 250px; height: 250px; background: rgba(253, 121, 168, 0.3); bottom: -50px; right: -50px; }
</style>