<template>
  <div class="container mt-4">
    <h2 class="mb-4 text-center">Bảng tin bài viết</h2>
    <div v-if="posts.length === 0" class="text-center mt-5">
      <p>Chưa có bài viết nào. Hãy là người đầu tiên <router-link to="/create-post">đăng bài</router-link>!</p>
    </div>

    <div v-for="(item, index) in posts" :key="item.id" class="card mb-4 shadow-sm border-0">
      <div class="card-body">
        <h4 class="card-title text-primary">{{ item.title }}</h4>
        <p class="text-muted small">Đăng bởi: {{ item.author }} - {{ item.date }}</p>
        <p class="card-text">{{ item.content }}</p>
        <img v-if="item.image" :src="item.image" class="img-fluid rounded mb-3" style="max-height: 300px;">
        
        <div class="d-flex gap-2">
          <button @click="deletePost(index)" class="btn btn-outline-danger btn-sm">Xóa bài</button>
        </div>
        <hr>
        <h6>Bình luận ({{ item.comments.length }})</h6>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const posts = ref([]);

onMounted(() => {
  posts.value = JSON.parse(localStorage.getItem('posts') || '[]');
});

const deletePost = (index) => {
  if (confirm('Bạn muốn xóa bài này?')) {
    posts.value.splice(index, 1);
    localStorage.setItem('posts', JSON.stringify(posts.value));
  }
};
</script>