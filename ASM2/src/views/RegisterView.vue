<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { store } from '../store';

const form = ref({ name: '', email: '', password: '' });
const router = useRouter();

const handleRegister = () => {
    // Gọi hàm đăng ký từ store
    if(store.register(form.value)) {
        alert("Đăng ký thành công! Vui lòng đăng nhập.");
        router.push('/login');
    } else {
        alert("Email này đã được sử dụng!");
    }
}
</script>

<template>
    <div class="row justify-content-center align-items-center" style="min-height: 80vh;">
        <div class="col-md-5 col-lg-4">
            <div class="bg-white p-5 rounded-3 shadow-sm border text-center">
                
                <h3 class="fw-bold text-dark mb-4">Tạo Tài Khoản</h3>
                <p class="text-secondary small mb-4">Tham gia cộng đồng FPoly Blog ngay hôm nay.</p>

                <form @submit.prevent="handleRegister">
                    <div class="mb-3 text-start">
                        <label class="form-label fw-medium text-dark">Họ và Tên</label>
                        <input v-model="form.name" type="text" class="form-control" placeholder="Ví dụ: Nguyễn Văn A" required>
                    </div>

                    <div class="mb-3 text-start">
                        <label class="form-label fw-medium text-dark">Địa chỉ Email</label>
                        <input v-model="form.email" type="email" class="form-control" placeholder="name@example.com" required>
                    </div>

                    <div class="mb-4 text-start">
                        <label class="form-label fw-medium text-dark">Mật khẩu</label>
                        <input v-model="form.password" type="password" class="form-control" placeholder="••••••••" required>
                    </div>

                    <button class="btn btn-primary w-100 py-2 fw-medium">Đăng Ký Tài Khoản</button>
                </form>

                <div class="mt-4 pt-3 border-top">
                    <span class="text-secondary small">Đã có tài khoản? </span>
                    <router-link to="/login" class="fw-medium text-decoration-none text-primary">Đăng nhập ngay</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Các class Bootstrap đã lo phần giao diện, chỉ thêm chút chỉnh sửa nhỏ nếu cần */
.form-control:focus {
    box-shadow: 0 0 0 3px rgba(13, 110, 253, 0.15); /* Hiệu ứng focus nhẹ nhàng */
    border-color: #0d6efd;
}
</style>