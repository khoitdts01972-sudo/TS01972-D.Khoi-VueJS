<script setup>
import { store } from '../store';
</script>
<template>
    <div class="card p-4 mx-auto" style="max-width: 500px">
        <h3 class="text-center">Hồ Sơ Của Bạn</h3>
        <p><strong>Tên:</strong> {{ store.user.name }}</p>
        <p><strong>Email:</strong> {{ store.user.email }}</p>
    </div>
</template>