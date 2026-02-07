<script setup>
import { ref, reactive } from 'vue';
import { store } from '../store';

// Biến trạng thái: Đang xem hay Đang sửa
const isEditing = ref(false);

// Form dữ liệu tạm thời (để sửa mà không ảnh hưởng ngay lập tức)
const form = reactive({
    name: '',
    avatar: '',
    password: '' // (Tùy chọn) cho phép đổi pass
});

// Khi bấm nút "Chỉnh sửa"
const startEdit = () => {
    form.name = store.user.name;
    form.avatar = store.user.avatar || ''; // Nếu chưa có avatar thì để trống
    form.password = store.user.password;
    isEditing.value = true;
}

// Khi bấm nút "Hủy"
const cancelEdit = () => {
    isEditing.value = false;
}

// Khi bấm nút "Lưu"
const saveProfile = () => {
    if (!form.name.trim()) return alert("Tên không được để trống!");
    
    // Gọi hàm update trong store
    store.updateUser({
        name: form.name,
        avatar: form.avatar,
        password: form.password
    });

    isEditing.value = false;
    alert("Cập nhật hồ sơ thành công!");
}
</script>

<template>
    <div class="row justify-content-center align-items-center" style="min-height: 80vh;">
        <div class="col-md-6 col-lg-5">
            <div class="bg-white p-5 rounded-3 shadow-sm border text-center position-relative">
                
                <div class="mb-4 d-flex justify-content-center">
                    <div v-if="store.user?.avatar" class="avatar-img rounded-circle border p-1">
                        <img :src="store.user.avatar" class="rounded-circle w-100 h-100 object-fit-cover">
                    </div>
                    <div v-else class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center display-4 fw-bold shadow-sm" 
                         style="width: 100px; height: 100px;">
                        {{ store.user?.name.charAt(0).toUpperCase() }}
                    </div>
                </div>

                <div v-if="!isEditing">
                    <h2 class="fw-bold text-dark mb-1">{{ store.user?.name }}</h2>
                    <p class="text-secondary mb-4">{{ store.user?.email }}</p>
                    
                    <div class="d-flex justify-content-center gap-2">
                        <button @click="startEdit" class="btn btn-outline-primary px-4 rounded-3 fw-medium">
                            <i class="bi bi-pencil-square me-2"></i>Chỉnh sửa hồ sơ
                        </button>
                        <router-link to="/" class="btn btn-light px-4 rounded-3 fw-medium border">
                            Về trang chủ
                        </router-link>
                    </div>
                </div>

                <form v-else @submit.prevent="saveProfile" class="text-start">
                    <div class="mb-3">
                        <label class="form-label fw-medium small text-secondary">Họ và Tên</label>
                        <input v-model="form.name" type="text" class="form-control" required>
                    </div>

                    <div class="mb-3">
                        <label class="form-label fw-medium small text-secondary">Link Ảnh đại diện (URL)</label>
                        <input v-model="form.avatar" type="text" class="form-control" placeholder="https://...">
                        <div class="form-text text-muted small">Dán link ảnh từ mạng vào đây.</div>
                    </div>
                    
                    <div class="mb-4">
                        <label class="form-label fw-medium small text-secondary">Mật khẩu mới</label>
                        <input v-model="form.password" type="text" class="form-control">
                    </div>

                    <div class="d-flex gap-2">
                        <button type="submit" class="btn btn-primary flex-grow-1 fw-medium">Lưu thay đổi</button>
                        <button type="button" @click="cancelEdit" class="btn btn-light flex-grow-1 fw-medium border">Hủy</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>

<style scoped>
.avatar-img {
    width: 120px; height: 120px;
}
</style>