<template>
  <div class="app-container">
    <div class="card">
      <h3 class="title">Quản lý công việc</h3>

      <form @submit.prevent="addJob" class="form-group">
        <label class="label">Tên công việc:</label>
        <input 
          type="text" 
          class="input-field" 
          v-model="newTodo" 
          placeholder="Nhập tên công việc"
        >
        <button type="submit" class="btn btn-primary">Thêm công việc</button>
      </form>

      <ul class="job-list">
        <li v-for="(job, index) in jobs" :key="index" class="job-item">
          <span class="job-text">{{ job }}</span>
          <button class="btn btn-danger" @click="removeJob(index)">Xóa</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const newTodo = ref('');
const jobs = ref(['Ăn sáng', 'Đi học', 'Chơi bóng rổ']);

const addJob = () => {
  if (newTodo.value.trim()) {
    jobs.value.push(newTodo.value.trim());
    newTodo.value = ''; 
  }
};

const removeJob = (index) => {
  jobs.value.splice(index, 1);
};
</script>

<style scoped>
/* 1. Tạo khung bao ngoài và reset nền */
.app-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 50px;
  min-height: 100vh;
  background-color: #f8f9fa; /* Màu nền xám nhẹ cho toàn trang */
  font-family: Arial, sans-serif;
}

/* 2. Tạo khung Card trắng đổ bóng giống hình */
.card {
  background-color: white;
  width: 400px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
}

.title {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

/* 3. Style cho Form */
.form-group {
  margin-bottom: 20px;
}

.label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #555;
}

.input-field {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  box-sizing: border-box; /* Để padding không làm vỡ khung */
}

/* 4. Style cho các nút bấm (Chung) */
.btn {
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  color: white;
  transition: opacity 0.2s;
}

.btn:hover {
  opacity: 0.9;
}

/* Nút thêm màu xanh */
.btn-primary {
  background-color: #0d6efd;
  width: auto; /* Hoặc để 100% nếu muốn nút dài hết cỡ */
}

/* Nút xóa màu đỏ */
.btn-danger {
  background-color: #dc3545;
}

/* 5. Style cho danh sách */
.job-list {
  list-style: none;
  padding: 0;
  margin: 0;
  border-top: 1px solid #eee;
}

.job-item {
  display: flex;
  justify-content: space-between; /* Đẩy chữ sang trái, nút sang phải */
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.job-text {
  font-size: 16px;
  color: #333;
}
</style>