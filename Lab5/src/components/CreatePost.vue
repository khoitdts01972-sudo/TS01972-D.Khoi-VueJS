<template>
  <div class="create-post">
    <h2>Tạo bài viết mới</h2>
    
    <label>Tiêu đề bài viết</label>
    <input v-model="title" type="text" placeholder="Nhập tiêu đề..." />

    <label>Tên tác giả</label>
    <input v-model="author" type="text" placeholder="Nhập tên tác giả..." />

    <label>Nội dung bài viết</label>
    <textarea v-model="content" placeholder="Nhập nội dung..."></textarea>

    <button @click="submitPost">Đăng bài</button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['add-post']);

const title = ref('');
const content = ref('');
const author = ref('');

function submitPost() {
  if (title.value && content.value && author.value) {
    const newPost = {
      title: title.value,
      content: content.value,
      author: author.value,
      // Tạo màu ngẫu nhiên để test phần style binding ở bài sau
      backgroundColor: '#f9f9f9', 
      textColor: '#333' 
    };

    // Gửi sự kiện ra component cha
    emit('add-post', newPost);

    // Reset form
    title.value = '';
    content.value = '';
    author.value = '';
  } else {
    alert('Vui lòng nhập đầy đủ thông tin!');
  }
}
</script>

<style scoped>
.create-post {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}
input, textarea {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  box-sizing: border-box;
}
button {
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #2980b9;
}
</style>