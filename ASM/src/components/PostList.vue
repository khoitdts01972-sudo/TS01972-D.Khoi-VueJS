<template>
  <div>
    <div class="d-flex justify-content-between align-items-center mb-5">
      <div>
        <h2 class="fw-bold text-dark mb-1">Khám phá bài viết</h2>
        <p class="text-muted">Những kiến thức lập trình mới nhất dành cho bạn</p>
      </div>
      <button class="btn btn-primary rounded-pill px-4 shadow-sm py-2 d-flex align-items-center gap-2 hover-up" @click="$emit('change-view', 'create')">
        <i class="bi bi-plus-lg"></i> <span>Viết bài mới</span>
      </button>
    </div>
    
    <div class="row g-4">
      <div class="col-md-6 col-lg-4" v-for="post in posts" :key="post.id">
        <div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
          
          <img :src="post.image" class="card-img-top" alt="Thumbnail" style="height: 200px; object-fit: cover;">

          <div class="card-body p-4 d-flex flex-column">
            <span class="badge bg-light text-primary mb-2 w-auto align-self-start">{{ post.tag }}</span>
            <h5 class="card-title fw-bold text-dark">{{ post.title }}</h5>
            <p class="card-text text-muted small flex-grow-1 line-clamp-3">
              {{ post.desc }}
            </p>
            
            <div class="d-flex align-items-center justify-content-between mt-3 pt-3 border-top">
              <div class="d-flex align-items-center gap-2">
                <img :src="post.avatar" class="rounded-circle" width="30" height="30" alt="Avatar">
                <small class="fw-bold text-dark">{{ post.author }}</small>
              </div>
              <small class="text-muted">{{ post.time }}</small>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineEmits(['change-view']);

// Dữ liệu giả lập đã thêm trường 'image' và 'avatar'
const posts = ref([
  {
    id: 1,
    title: 'Làm quen với VueJS 3 Composition API',
    desc: 'Hướng dẫn chi tiết cách sử dụng Composition API để quản lý state tốt hơn trong dự án lớn.',
    author: 'Admin',
    avatar: 'https://ui-avatars.com/api/?name=Admin&background=0D8ABC&color=fff',
    tag: 'VueJS',
    time: '2 giờ trước',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    title: 'Top 5 thư viện UI tốt nhất cho React & Vue',
    desc: 'So sánh chi tiết giữa Bootstrap 5, Tailwind CSS, Ant Design và Vuetify.',
    author: 'TuanDev',
    avatar: 'https://ui-avatars.com/api/?name=Tuan+Dev&background=random',
    tag: 'Frontend',
    time: '1 ngày trước',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    title: 'Lộ trình trở thành Fullstack Developer',
    desc: 'Cần học những gì để có mức lương nghìn đô? Đi từ HTML/CSS đến Node.js.',
    author: 'HoangCode',
    avatar: 'https://ui-avatars.com/api/?name=Hoang+Code&background=random',
    tag: 'Career',
    time: '3 ngày trước',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    title: 'Sử dụng AI để code nhanh hơn gấp đôi',
    desc: 'Tận dụng sức mạnh của ChatGPT và GitHub Copilot để tối ưu quy trình làm việc.',
    author: 'LyLy',
    avatar: 'https://ui-avatars.com/api/?name=Ly+Ly&background=random',
    tag: 'AI Tools',
    time: '5 ngày trước',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    title: 'Bảo mật ứng dụng Web: Những lỗi phổ biến',
    desc: 'Tìm hiểu về XSS, CSRF và SQL Injection. Cách phòng chống hacker.',
    author: 'SecurityPro',
    avatar: 'https://ui-avatars.com/api/?name=Sec+Pro&background=random',
    tag: 'Security',
    time: '1 tuần trước',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80'
  }
  
]);
</script>

<style scoped>
.card-hover { transition: all 0.3s ease; }
.card-hover:hover { transform: translateY(-10px); box-shadow: 0 1rem 3rem rgba(0,0,0,.1) !important; }
.hover-up:hover { transform: translateY(-2px); }
.line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
</style>