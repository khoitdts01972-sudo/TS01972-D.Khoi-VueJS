<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { store } from '../store';

const email = ref('');
const password = ref('');
const router = useRouter();

const handleLogin = () => {
    if(store.login(email.value, password.value)) {
        router.push('/');
    } else {
        alert('Sai thông tin đăng nhập!');
    }
}
</script>

<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <div class="card p-4 shadow">
                <h3 class="text-center text-primary">Đăng Nhập</h3>
                <form @submit.prevent="handleLogin">
                    <div class="mb-3">
                        <label>Email</label>
                        <input v-model="email" type="email" class="form-control" required>
                    </div>
                    <div class="mb-3">
                        <label>Mật khẩu</label>
                        <input v-model="password" type="password" class="form-control" required>
                    </div>
                    <button class="btn btn-primary w-100">Đăng Nhập</button>
                </form>
            </div>
        </div>
    </div>
</template>