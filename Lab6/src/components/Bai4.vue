<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-4">
        
        <form @submit.prevent="submitForm" class="mb-4 fw-bold">
          <h2 >Thêm học sinh</h2>
          <div class="mb-4">
            <label for="name" class="form-label fs-5">Họ tên:</label>
            <input type="text" id="name" class="form-control form-control-lg custom-input" v-model="student.name" required>
          </div>

          <div class="mb-4">
            <label for="score" class="form-label fs-5">Điểm:</label>
            <input type="number" id="score" class="form-control form-control-lg custom-input" v-model="student.score" min="0" max="10" required>
          </div>

         

          <div class="mb-4">
            <label for="dob" class="form-label fs-5">Ngày sinh:</label>
            <input type="date" id="dob" class="form-control form-control-lg custom-input" v-model="student.dob" required>
          </div>

          <button type="submit" class="btn btn-lg px-4 py-2 text-white" 
            :style="{ backgroundColor: isEditing ? '#ffc107' : '#198754' }">
            {{ isEditing ? 'Cập nhật' : 'Thêm' }}
          </button>
          <button type="button" class="btn btn-secondary btn-lg ms-2 px-4 py-2" v-if="isEditing" @click="resetForm">Hủy</button>
        </form>
      </div>

      <div class="col-md-8">
        <h2 class="mb-4 fw-bold">Danh sách học sinh</h2>
        <table class="table table-borderless align-middle custom-table">
          <thead>
            <tr class="border-bottom">
              <th class="py-3">Họ và tên</th>
              <th class="py-3">Điểm</th>
              <th class="py-3">Ngày sinh</th>
              <th class="py-3 text-center">Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(stu, index) in students" :key="index" class="border-bottom">
              <td class="py-3 fs-5">{{ stu.name }}</td>
              <td class="py-3 fs-5">{{ stu.score }}</td>
              <td class="py-3 fs-5">{{ stu.dob }}</td>
              <td class="py-3 text-center">
                <button class="btn btn-warning btn-sm px-3 me-2 text-dark fw-bold" @click="editStudent(index)">Sửa</button>
                <button class="btn btn-danger btn-sm px-3 fw-bold" @click="deleteStudent(index)">Xóa</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Phóng to các ô input */
.custom-input {
  border-radius: 10px;
  border: 1px solid #ced4da;
  padding: 0.75rem 1rem;
}

/* Tinh chỉnh bảng cho giống mẫu */
.custom-table th {
  font-weight: 800;
  font-size: 1.1rem;
}

.custom-table td {
  color: #333;
}

/* Tăng khoảng cách hàng trong bảng */
.table > :not(caption) > * > * {
  border-bottom-width: 1px;
  border-color: #eee;
}

/* Nút bấm bo góc giống mẫu */
.btn {
  border-radius: 8px;
}
</style>

<script setup>
import { ref } from 'vue';

const students = ref([
  { name: 'Nguyễn Chí Hùng', score: 8, dob: '2006-01-01' },
  { name: 'Phạm Thị Lan', score: 9, dob: '2006-05-15' }
]);

const student = ref({ name: '', score: null, dob: '' });
const isEditing = ref(false);
const editingIndex = ref(null);

function submitForm() {
  if (isEditing.value) {
    students.value[editingIndex.value] = { ...student.value };
    isEditing.value = false;
    editingIndex.value = null;
  } else {
    students.value.push({ ...student.value });
  }
  resetForm();
}

function editStudent(index) {
  student.value = { ...students.value[index] };
  isEditing.value = true;
  editingIndex.value = index;
}

function deleteStudent(index) {
  if(confirm('Bạn có chắc chắn muốn xóa không?')) {
    students.value.splice(index, 1);
  }
}

function resetForm() {
  student.value = { name: '', score: null, dob: '' };
  isEditing.value = false;
  editingIndex.value = null;
}
</script>