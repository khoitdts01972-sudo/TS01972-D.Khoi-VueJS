<template>
  <div class="container mt-4">
    <h1 class="text-center">Quản lý học sinh</h1>
    
    <div class="row">
      <div class="col-md-4">
        <div class="card">
          <div class="card-header">
             <h5>{{ isEditing ? 'Cập nhật học sinh' : 'Thêm học sinh' }}</h5>
          </div>
          <div class="card-body">
            <form @submit.prevent="submitForm">
              <div class="mb-3">
                <label for="name" class="form-label">Họ tên:</label>
                <input type="text" id="name" class="form-control" v-model="student.name" required>
              </div>

              <div class="mb-3">
                <label for="score" class="form-label">Điểm:</label>
                <input type="number" id="score" class="form-control" v-model="student.score" min="0" max="10" required>
              </div>

              <div class="mb-3">
                <label for="dob" class="form-label">Ngày sinh:</label>
                <input type="date" id="dob" class="form-control" v-model="student.dob" required>
              </div>

              <button type="submit" class="btn" :class="isEditing ? 'btn-warning' : 'btn-success'">
                {{ isEditing ? 'Cập nhật' : 'Thêm' }}
              </button>
              <button type="button" class="btn btn-secondary ms-2" v-if="isEditing" @click="resetForm">Hủy</button>
            </form>
          </div>
        </div>
      </div>

      <div class="col-md-8">
        <h3>Danh sách học sinh</h3>
        <table class="table table-hover table-bordered">
          <thead class="table-light">
            <tr>
              <th>Họ và tên</th>
              <th>Điểm</th>
              <th>Ngày sinh</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(stu, index) in students" :key="index">
              <td>{{ stu.name }}</td>
              <td>{{ stu.score }}</td>
              <td>{{ stu.dob }}</td>
              <td>
                <button class="btn btn-warning btn-sm me-2" @click="editStudent(index)">Sửa</button>
                <button class="btn btn-danger btn-sm" @click="deleteStudent(index)">Xóa</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Dữ liệu mẫu ban đầu
const students = ref([
  { name: 'Nguyễn Chí Hùng', score: 8, dob: '2006-01-01' },
  { name: 'Phạm Thị Lan', score: 9, dob: '2006-05-15' }
]);

// Biến quản lý trạng thái form
const student = ref({
  name: '',
  score: null,
  dob: ''
});

// Các biến cờ để kiểm soát trạng thái sửa
const isEditing = ref(false);
const editingIndex = ref(null);

// Hàm xử lý khi submit form
function submitForm() {
  if (isEditing.value) {
    // Cập nhật thông tin học sinh
    // Sử dụng spread operator (...) để sao chép dữ liệu mới vào mảng
    students.value[editingIndex.value] = { ...student.value };
    
    // Reset lại trạng thái
    isEditing.value = false;
    editingIndex.value = null;
  } else {
    // Thêm học sinh mới
    students.value.push({ ...student.value });
  }
  // Xóa trắng form sau khi thực hiện xong
  resetForm();
}

// Hàm chuẩn bị dữ liệu để sửa
function editStudent(index) {
  // Sao chép dữ liệu từ dòng được chọn lên form
  student.value = { ...students.value[index] };
  isEditing.value = true;
  editingIndex.value = index;
}

// Hàm xóa học sinh
function deleteStudent(index) {
  if(confirm('Bạn có chắc chắn muốn xóa không?')) {
    students.value.splice(index, 1);
  }
}

// Hàm reset form về ban đầu
function resetForm() {
  student.value = {
    name: '',
    score: null,
    dob: ''
  };
  // Nếu đang sửa mà bấm Hủy thì cũng reset trạng thái sửa
  if(isEditing.value) {
      isEditing.value = false;
      editingIndex.value = null;
  }
}
</script>