<script setup>
import { store } from '../store';
</script>

<template>
    <div class="row justify-content-center align-items-center" style="min-height: 60vh;">
        <div class="col-md-6 col-lg-5">
            <div class="glass-effect p-5 rounded-5 text-center position-relative overflow-hidden">
                <div class="position-absolute top-0 start-0 w-100 h-25 bg-primary opacity-25"></div>

                <div class="position-relative z-1 mt-3">
                    <div class="avatar-profile mx-auto mb-3 shadow-lg">
                        <img :src="`https://ui-avatars.com/api/?name=${store.user?.name}&background=random&size=128`" class="w-100 h-100 object-fit-cover">
                    </div>
                    
                    <h2 class="fw-bold text-dark mb-1">{{ store.user?.name }}</h2>
                    <p class="text-secondary d-flex align-items-center justify-content-center gap-2">
                        <i class="bi bi-envelope"></i> {{ store.user?.email }}
                    </p>
                    
                    <div class="d-flex justify-content-center gap-2 mt-4">
                        <router-link to="/create" class="btn btn-primary rounded-pill px-4 shadow-sm">
                            <i class="bi bi-pencil-fill me-1"></i> Viết bài
                        </router-link>
                        <router-link to="/" class="btn btn-light rounded-pill px-4 shadow-sm">
                            Về trang chủ
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.avatar-profile {
    width: 120px; height: 120px; border-radius: 50%;
    border: 5px solid rgba(255,255,255,0.8);
    overflow: hidden;
}
</style>