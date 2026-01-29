<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { store } from '../store';

const form = ref({ name: '', email: '', password: '' });
const router = useRouter();

const handleRegister = () => {
    if(store.register(form.value)) {
        alert("Đăng ký thành công!");
        router.push('/login');
    } else {
        alert("Email đã tồn tại!");
    }
}
</script>

<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <div class="card p-4 shadow">
                <h3 class="text-center text-success">Đăng Ký</h3>
                <form @submit.prevent="handleRegister">
                    <div class="mb-3"><label>Họ Tên</label><input v-model="form.name" class="form-control" required></div>
                    <div class="mb-3"><label>Email</label><input v-model="form.email" type="email" class="form-control" required></div>
                    <div class="mb-3"><label>Mật khẩu</label><input v-model="form.password" type="password" class="form-control" required></div>
                    <button class="btn btn-success w-100">Đăng Ký</button>
                </form>
            </div>
        </div>
    </div>
</template>