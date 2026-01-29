<script setup>
import { store } from '../store'
import PostCard from '../components/PostCard.vue'
</script>

<template>
  <div class="p-5 mb-5 bg-white rounded-3 shadow-sm hero-section text-center position-relative overflow-hidden">
    <div class="position-relative z-1">
      <h1 class="display-4 fw-bold text-gradient">Chào mừng đến với FPoly Blog</h1>
      <p class="lead text-muted mb-4">Nơi chia sẻ kiến thức, kinh nghiệm và đam mê lập trình của sinh viên FPT Polytechnic.</p>
      <div v-if="!store.user" class="d-flex justify-content-center gap-3">
        <router-link to="/register" class="btn btn-primary btn-lg rounded-pill px-5 shadow">Tham gia ngay</router-link>
        <router-link to="/login" class="btn btn-outline-secondary btn-lg rounded-pill px-5">Đăng nhập</router-link>
      </div>
      <div v-else>
         <router-link to="/create" class="btn btn-success btn-lg rounded-pill px-5 shadow"><i class="bi bi-pencil-fill me-2"></i>Viết bài ngay</router-link>
      </div>
    </div>
    <div class="circle-deco"></div>
  </div>

  <div class="row">
    <div class="col-12 mb-4 d-flex align-items-center justify-content-between">
      <h3 class="fw-bold text-dark border-start border-4 border-primary ps-3">Bài viết mới nhất</h3>
      <div class="text-muted fst-italic">Tổng số: {{ store.posts.length }} bài viết</div>
    </div>

    <div class="col-md-6 col-lg-4 mb-4" v-for="post in store.posts" :key="post.id">
      <PostCard :post="post" />
    </div>
  </div>
</template>

<style scoped>
.text-gradient {
  background: linear-gradient(to right, #2563eb, #9333ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hero-section {
    background-image: url('https://img.freepik.com/free-vector/white-abstract-background-design_23-2148825582.jpg');
    background-size: cover;
}
/* Hiệu ứng vòng tròn trang trí mờ */
.circle-deco {
    position: absolute;
    top: -50%;
    right: -10%;
    width: 400px;
    height: 400px;
    background: rgba(118, 75, 162, 0.1);
    border-radius: 50%;
    z-index: 0;
}
</style>