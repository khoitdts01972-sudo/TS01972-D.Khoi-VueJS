<template>
  <div class="app-container">
    <div class="content-wrapper">
      <h2 class="main-title">Hồ Sơ Đăng Ký</h2>

      <div class="row-container">
        
        <div class="card form-card">
          <h3 class="card-header">Thông tin cá nhân</h3>
          <form @submit.prevent="register">
            
            <div class="form-group">
              <label>Họ và tên:</label>
              <input type="text" v-model="form.name" class="input-field" placeholder="Nhập họ tên..." required>
            </div>

            <div class="form-group">
              <label>Email:</label>
              <input type="email" v-model="form.email" class="input-field" placeholder="Nhập email..." required>
            </div>

            <div class="form-group">
              <label>Mật khẩu:</label>
              <input type="password" v-model="form.password" class="input-field" placeholder="Nhập mật khẩu..." required>
            </div>

            <div class="form-group">
              <label>Ngày sinh:</label>
              <input type="date" v-model="form.dob" class="input-field">
            </div>

            <div class="form-group">
              <label>Giới tính:</label>
              <div class="radio-group">
                <label class="radio-item">
                  <input type="radio" value="Nam" v-model="form.gender"> Nam
                </label>
                <label class="radio-item">
                  <input type="radio" value="Nữ" v-model="form.gender"> Nữ
                </label>
                <label class="radio-item">
                  <input type="radio" value="Khác" v-model="form.gender"> Khác
                </label>
              </div>
            </div>

            <div class="form-group">
              <label>Ngôn ngữ:</label>
              <div class="checkbox-group">
                <label class="check-item">
                  <input type="checkbox" value="Tiếng Việt" v-model="form.languages"> Tiếng Việt
                </label>
                <label class="check-item">
                  <input type="checkbox" value="Tiếng Anh" v-model="form.languages"> Tiếng Anh
                </label>
                <label class="check-item">
                  <input type="checkbox" value="Tiếng Nhật" v-model="form.languages"> Tiếng Nhật
                </label>
              </div>
            </div>

            <button type="submit" class="btn-submit">Đăng Ký</button>
          </form>
        </div>

        <div class="card result-card" v-if="submitted">
          <h3 class="card-header success-header">Kết quả đăng ký</h3>
          <div class="info-list">
            <div class="info-item">
              <strong>Họ tên:</strong> <span>{{ info.name }}</span>
            </div>
            <div class="info-item">
              <strong>Email:</strong> <span>{{ info.email }}</span>
            </div>
            <div class="info-item">
              <strong>Ngày sinh:</strong> <span>{{ info.dob }}</span>
            </div>
            <div class="info-item">
              <strong>Giới tính:</strong> <span>{{ info.gender }}</span>
            </div>
            <div class="info-item">
              <strong>Ngôn ngữ:</strong> <span>{{ info.languages.join(', ') }}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

// Biến kiểm soát việc hiển thị cột kết quả
const submitted = ref(false);

// Dữ liệu form (Binding với inputs)
const form = reactive({
  name: '',
  email: '',
  password: '',
  dob: '',
  gender: 'Nam',
  languages: [] // Mảng chứa các ngôn ngữ được chọn
});

// Dữ liệu hiển thị (Binding với cột kết quả)
const info = reactive({});

// Hàm xử lý khi bấm nút Đăng ký
const register = () => {
  // Sao chép dữ liệu từ form sang info
  Object.assign(info, form);
  
  // Bật cờ hiển thị kết quả
  submitted.value = true;
};
</script>

<style scoped>
/* 1. Cấu trúc trang tổng thể */
.app-container {
  min-height: 100vh;
  background-color: #f3f4f6; /* Nền xám nhạt dễ nhìn */
  padding: 40px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333; /* QUAN TRỌNG: Ép màu chữ mặc định là đen */
}

.content-wrapper {
  max-width: 1000px;
  margin: 0 auto;
}

.main-title {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* 2. Chia cột (Flexbox) */
.row-container {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap; /* Tự xuống dòng trên màn hình nhỏ */
}

/* 3. Style chung cho Card */
.card {
  background: #ffffff; /* Nền trắng tuyệt đối */
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex: 1;
  min-width: 320px; /* Chiều rộng tối thiểu */
  border: 1px solid #e5e7eb;
}

.card-header {
  margin-top: 0;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #eee;
  font-size: 1.25rem;
  color: #333; /* Màu chữ tiêu đề */
}

/* 4. Style Form */
.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-weight: 600;
  margin-bottom: 6px;
  color: #4b5563;
}

.input-field {
  width: 100%;
  padding: 10px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  box-sizing: border-box;
  color: #000; /* Chữ khi nhập vào màu đen */
  background-color: #fff;
}

.input-field:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Radio & Checkbox */
.radio-group, .checkbox-group {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.radio-item, .check-item {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  color: #333;
}

/* Nút bấm */
.btn-submit {
  width: 100%;
  padding: 12px;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.2s;
}

.btn-submit:hover {
  background-color: #1d4ed8;
}

/* 5. Style Cột Kết quả */
.result-card {
  border-top: 4px solid #10b981; /* Viền xanh lá trên cùng */
  animation: fadeIn 0.5s ease-in-out;
}

.success-header {
  color: #059669;
  border-bottom-color: #10b981;
}

.info-item {
  padding: 10px 0;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  justify-content: space-between;
  color: #000; /* Ép màu chữ hiển thị kết quả là đen */
}

.info-item:last-child {
  border-bottom: none;
}

/* Animation hiện dần */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>