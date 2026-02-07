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
            <div class="bg-white p-5 rounded-3 shadow-sm border text-center">
                <h3 class="fw-bold text-dark mb-4">Đăng Nhập</h3>
                <form @submit.prevent="handleLogin">
                    <div class="mb-3 text-start">
                        <label class="form-label fw-medium">Email</label>
                        <input v-model="email" type="email" class="form-control" required>
                    </div>
                    <div class="mb-4 text-start">
                        <label class="form-label fw-medium">Mật khẩu</label>
                        <input v-model="password" type="password" class="form-control" required>
                    </div>
                    <button class="btn btn-primary w-100 py-2 fw-medium">Đăng Nhập</button>
                </form>
                <div class="mt-4 pt-3 border-top">
                    <span class="text-secondary small">Chưa có tài khoản? </span>
                    <router-link to="/register" class="fw-medium text-decoration-none">Đăng ký ngay</router-link>
                </div>
            </div>
        </div>
    </div>
</template>