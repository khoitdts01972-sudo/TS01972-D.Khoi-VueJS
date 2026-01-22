<template>
  <div class="container mt-4">
    <div class="card p-4 shadow-sm mx-auto" style="max-width: 600px;">
      <h3 class="mb-4">Đăng bài viết mới</h3>
      <form @submit.prevent="handlePublish">
        <div class="mb-3">
          <label class="form-label fw-bold">Tiêu đề</label>
          <input v-model="post.title" type="text" class="form-control" placeholder="Tiêu đề bài viết..." required>
        </div>
        
        <div class="mb-3">
          <label class="form-label fw-bold">Link hình ảnh minh họa</label>
          <input v-model="post.image" type="text" class="form-control" placeholder="https://example.com/anh.jpg">
          <div v-if="post.image" class="mt-2">
            <p class="small text-muted">Xem trước ảnh:</p>
            <img :src="post.image" class="img-thumbnail" style="max-height: 150px;">
          </div>
        </div>

        <div class="mb-3">
          <label class="form-label fw-bold">Nội dung</label>
          <textarea v-model="post.content" class="form-control" rows="5" placeholder="Nội dung chi tiết..." required></textarea>
        </div>
        
        <button type="submit" class="btn btn-primary w-100">Đăng bài</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
// Khởi tạo thêm trường image
const post = ref({ title: '', content: '', image: '', comments: [] });

const handlePublish = () => {
  const existingPosts = JSON.parse(localStorage.getItem('posts') || '[]');
  
  existingPosts.unshift({
    ...post.value,
    id: Date.now(),
    author: JSON.parse(localStorage.getItem('user'))?.name || 'Thành viên',
    date: new Date().toLocaleString('vi-VN')
  });

  localStorage.setItem('posts', JSON.stringify(existingPosts));
  alert('Đăng bài thành công!');
  router.push('/');
};
</script>