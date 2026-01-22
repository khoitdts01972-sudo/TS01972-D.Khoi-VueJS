<template>
  <div class="container mt-5">
    <div class="card mx-auto shadow" style="max-width: 500px;">
      <div class="card-body text-center">
        <img src="https://via.placeholder.com/150" class="rounded-circle mb-3 border">
        <h3>Hồ sơ của tôi</h3>
        <div class="text-start mt-4">
          <label>Tên hiển thị:</label>
          <input v-model="profile.name" class="form-control mb-2">
          <label>Email:</label>
          <input v-model="profile.email" class="form-control mb-2">
          <button @click="updateProfile" class="btn btn-warning w-100 mt-2">Cập nhật thông tin</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';

const profile = reactive({ name: '', email: '' });

onMounted(() => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    profile.name = user.name;
    profile.email = user.email;
  }
});

const updateProfile = () => {
  localStorage.setItem('user', JSON.stringify(profile));
  alert('Đã cập nhật thông tin!');
};
</script>