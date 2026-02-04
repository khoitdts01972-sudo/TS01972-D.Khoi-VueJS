<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { store } from '../store';

const form = ref({ name: '', email: '', password: '' });
const router = useRouter();

const handleRegister = () => {
    if(store.register(form.value)) { 
        alert("Đăng ký thành công! Hãy đăng nhập ngay."); 
        router.push('/login'); 
    } 
    else { alert("Email này đã được sử dụng!"); }
}
</script>

<template>
    <div class="row justify-content-center align-items-center" style="min-height: 80vh;">
        <div class="col-md-5 col-lg-4">
            <div class="glass-effect p-5 rounded-5 text-center position-relative">
                <div class="mb-4">
                    <div class="icon-box mx-auto mb-3">
                        <i class="bi bi-rocket-takeoff-fill fs-2 text-white"></i>
                    </div>
                    <h3 class="fw-bold text-dark">Tạo Tài Khoản</h3>
                    <p class="text-secondary small">Tham gia cộng đồng FPoly Blog ngay</p>
                </div>

                <form @submit.prevent="handleRegister">
                    <div class="mb-3 text-start">
                        <label class="fw-bold small ms-2 mb-1">Họ Tên</label>
                        <input v-model="form.name" type="text" class="form-control rounded-4 py-2 px-3 border-0 bg-white bg-opacity-50" placeholder="Tên tài khoản" required>
                    </div>
                    <div class="mb-3 text-start">
                        <label class="fw-bold small ms-2 mb-1">Email</label>
                        <input v-model="form.email" type="email" class="form-control rounded-4 py-2 px-3 border-0 bg-white bg-opacity-50" placeholder="name@email.com" required>
                    </div>
                    <div class="mb-4 text-start">
                        <label class="fw-bold small ms-2 mb-1">Mật khẩu</label>
                        <input v-model="form.password" type="password" class="form-control rounded-4 py-2 px-3 border-0 bg-white bg-opacity-50" placeholder="••••••••" required>
                    </div>
                    <button class="btn btn-primary w-100 rounded-pill py-3 fw-bold shadow-lg">Đăng Ký Ngay</button>
                </form>

                <div class="mt-4 pt-3 border-top border-secondary border-opacity-10">
                    <span class="text-secondary small">Đã có tài khoản? </span>
                    <router-link to="/login" class="fw-bold text-primary text-decoration-none">Đăng nhập</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.icon-box {
    width: 70px; height: 70px;
    background: linear-gradient(135deg, #00b894, #00cec9); /* Màu xanh ngọc */
    border-radius: 20px; display: flex; align-items: center; justify-content: center;
    box-shadow: 0 10px 20px rgba(0, 184, 148, 0.3);
    transform: rotate(5deg);
}
.form-control:focus {
    box-shadow: 0 0 0 3px rgba(0, 184, 148, 0.2);
    background: white;
}
.btn-primary {
    background: linear-gradient(135deg, #00b894, #00cec9) !important; /* Đổi màu nút cho khác trang login */
    box-shadow: 0 4px 15px rgba(0, 184, 148, 0.4) !important;
}
.btn-primary:hover {
    box-shadow: 0 8px 25px rgba(0, 184, 148, 0.6) !important;
}
</style>