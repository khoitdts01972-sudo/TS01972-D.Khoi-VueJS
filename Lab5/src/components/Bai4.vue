<template>
  <div class="lab-item">
    <h3>Bài 4: Ứng dụng Blog</h3>
    
    <CreatePost @add-post="addPost" />
    <PostList :posts="posts" />
    
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CreatePost from './CreatePost.vue'; // Nhớ phải tạo file này
import PostList from './PostList.vue';     // Nhớ phải tạo file này

const posts = ref([
  {
    title: 'Bài viết mẫu (Bài 4)',
    content: 'Nội dung bài viết mẫu của bài 4...',
    author: 'Tên tác giả',
    backgroundColor: '#f0f8ff',
    textColor: '#333'
  }
]);

function addPost(post) {
  posts.value.push(post);
}
</script>

<style scoped>
.lab-item { padding: 20px; border: 1px solid #ddd; margin-bottom: 20px; }
</style>