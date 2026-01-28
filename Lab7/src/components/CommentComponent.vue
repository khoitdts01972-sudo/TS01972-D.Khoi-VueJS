<template>
  <div class="post-container">
    <div class="post-card">
      <div class="post-image-wrapper">
        <img 
          :src="imgSource" 
          alt="Hình ảnh bài viết" 
          class="post-image"
        >
      </div>
      
      <div class="post-content">
        <span class="post-category">Sức khỏe & Đời sống</span>
        <h2 class="post-title">8 loại rau củ quả giàu canxi bạn nên biết</h2>
        <p class="post-desc">
          Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi...
        </p>
      </div>
    </div>

    <div class="comment-section">
      <h3 class="section-title">Bình luận ({{ comments.length }})</h3>

      <form @submit.prevent="submitComment" class="comment-form">
        <div class="input-wrapper">
          <textarea 
            v-model="commentText" 
            placeholder="Viết bình luận của bạn..." 
            rows="2"
            class="comment-input"
          ></textarea>
        </div>
        <button type="submit" class="btn-send">Gửi</button>
      </form>

      <div class="comment-list">
        <div v-for="(comment, index) in comments" :key="index" class="comment-item">
          <div class="avatar-circle">{{ comment.name.charAt(0).toUpperCase() }}</div>
          <div class="comment-bubble">
            <div class="comment-header">
              <span class="user-name">{{ comment.name }}</span>
              <span class="time-text">Vừa xong</span>
            </div>
            <p class="comment-text">{{ comment.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// --- SỬA LỖI 2: IMPORT ẢNH TỪ ĐÚNG FILE ---
// Bạn hãy đảm bảo file ảnh tên là 'raucu.jpg' nằm ngay trong thư mục 'src/assets/'
// Nếu file bạn tên khác, hãy sửa 'raucu.jpg' thành tên file của bạn.
import imgSource from '../assets/images/img2.jpg'; 

const props = defineProps(['username']);
const commentText = ref('');

const comments = ref([
  { name: 'Nguyễn Văn A', text: 'Bài viết rất hữu ích!' },
  { name: 'Trần Thị B', text: 'Cảm ơn ad đã chia sẻ.' }
]);

const submitComment = () => {
  if (commentText.value.trim()) {
    comments.value.unshift({ 
      name: props.username,
      text: commentText.value
    });
    commentText.value = '';
  }
};
</script>

<style scoped>
.post-container {
  max-width: 700px;
  margin: 0 auto;
  padding-bottom: 50px;
  color: #333; /* QUAN TRỌNG: Đặt màu chữ gốc là màu đen */
}

/* Bài viết */
.post-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  margin-bottom: 25px;
}

.post-image {
  width: 100%;
  height: 350px;
  object-fit: cover;
  display: block;
}

.post-content {
  padding: 25px;
}

.post-category {
  color: #4f46e5;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
}

.post-title {
  margin: 10px 0;
  font-size: 24px;
  color: #1f2937; /* Màu chữ tiêu đề đen đậm */
}

.post-desc {
  color: #4b5563; /* Màu chữ nội dung xám đậm */
  line-height: 1.6;
}

/* Khu vực bình luận */
.comment-section {
  background: white;
  padding: 25px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  color: #333; /* Đảm bảo chữ trong khu vực này luôn đen */
}

.section-title {
  font-size: 18px;
  margin-bottom: 20px;
  color: #111;
}

/* Form */
.comment-form {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
}

.comment-input {
  width: 100%;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 12px;
  background: #f9fafb;
  
  /* --- FIX LỖI KHÔNG THẤY CHỮ KHI NHẬP --- */
  color: #333 !important; 
  font-size: 15px;
}

.comment-input::placeholder {
  color: #9ca3af; /* Màu chữ gợi ý xám nhạt */
}

.comment-input:focus {
  outline: none;
  background: white;
  border-color: #4f46e5;
  color: #000; /* Khi focus chữ đậm hơn */
}

.input-wrapper { flex-grow: 1; }

.btn-send {
  height: 50px;
  padding: 0 25px;
  background: #10b981; 
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
}

/* Danh sách comment */
.comment-item {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.avatar-circle {
  width: 40px;
  height: 40px;
  background-color: #e0e7ff;
  color: #4f46e5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.comment-bubble {
  background-color: #f3f4f6;
  padding: 12px 15px;
  border-radius: 12px;
  border-top-left-radius: 2px;
  flex-grow: 1;
}

.comment-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.user-name {
  font-weight: 700;
  font-size: 14px;
  color: #111; /* Tên người dùng màu đen */
}

.time-text {
  font-size: 11px;
  color: #9ca3af;
}

.comment-text {
  margin: 0;
  font-size: 14px;
  color: #374151; /* Nội dung bình luận màu xám đen dễ đọc */
}
</style>