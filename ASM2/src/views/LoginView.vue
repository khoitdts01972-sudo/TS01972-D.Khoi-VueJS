<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { store } from '../store';

const email = ref('');
const password = ref('');
const router = useRouter();

const handleLogin = () => {
    if(store.login(email.value, password.value)) { router.push('/'); } 
    else { alert('Thông tin không chính xác!'); }
}
</script>

<template>
    <div class="row justify-content-center align-items-center" style="min-height: 80vh;">
        <div class="col-md-5 col-lg-4">
            <div class="glass-effect p-5 rounded-5 text-center position-relative">
                <div class="mb-4">
                    <div class="icon-box mx-auto mb-3">
                        <i class="bi bi-person-heart fs-1 text-white"></i>
                    </div>
                    <h3 class="fw-bold text-dark">Welcome Back!</h3>
                    <p class="text-secondary small">Vui lòng nhập thông tin để tiếp tục</p>
                </div>

                <form @submit.prevent="handleLogin">
                    <div class="mb-3 text-start">
                        <label class="fw-bold small ms-1 mb-1">Email</label>
                        <input v-model="email" type="email" class="form-control rounded-4 py-2 px-3 border-0 bg-white bg-opacity-50" placeholder="name@email.com" required>
                    </div>
                    <div class="mb-4 text-start">
                        <label class="fw-bold small ms-1 mb-1">Password</label>
                        <input v-model="password" type="password" class="form-control rounded-4 py-2 px-3 border-0 bg-white bg-opacity-50" placeholder="••••••••" required>
                    </div>
                    <button class="btn btn-primary w-100 rounded-pill py-3 fw-bold shadow-lg">Đăng Nhập</button>
                </form>

                <div class="mt-4 pt-3 border-top border-secondary border-opacity-10">
                    <span class="text-secondary small">Chưa có tài khoản? </span>
                    <router-link to="/register" class="fw-bold text-primary text-decoration-none">Tạo mới ngay</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.icon-box {
    width: 80px; height: 80px;
    background: linear-gradient(135deg, #6c5ce7, #a29bfe);
    border-radius: 24px; display: flex; align-items: center; justify-content: center;
    box-shadow: 0 10px 20px rgba(108, 92, 231, 0.3);
    transform: rotate(-5deg);
}
.form-control:focus {
    box-shadow: 0 0 0 3px rgba(108, 92, 231, 0.2);
    background: white;
}
</style>