<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

defineProps({
    post: Object
});
</script>

<template>
    <div class="card h-100 border-0 shadow-sm card-hover rounded-4 overflow-hidden">
        <div class="position-relative">
            <img :src="post.image || 'https://via.placeholder.com/600x400?text=No+Image'" class="card-img-top" style="height: 220px; object-fit: cover;">
            <div class="overlay d-flex align-items-center justify-content-center">
                <RouterLink :to="'/post/' + post.id" class="btn btn-light rounded-circle shadow btn-lg">
                    <i class="bi bi-arrow-right text-primary"></i>
                </RouterLink>
            </div>
        </div>
        
        <div class="card-body d-flex flex-column p-4">
            <div class="d-flex align-items-center mb-2">
                <span class="badge bg-light text-primary border border-primary-subtle rounded-pill me-2">Tech</span>
                <small class="text-muted"><i class="bi bi-clock"></i> 2 giờ trước</small>
            </div>
            
            <h5 class="card-title fw-bold text-dark mb-2">{{ post.title }}</h5>
            
            <p class="card-text text-muted small flex-grow-1 line-clamp-2">
                {{ post.content.substring(0, 100) }}...
            </p>
            
            <div class="d-flex align-items-center justify-content-between mt-3 pt-3 border-top">
                <div class="d-flex align-items-center">
                    <div class="avatar-circle bg-primary text-white d-flex align-items-center justify-content-center fw-bold me-2">
                        {{ post.author.charAt(0).toUpperCase() }}
                    </div>
                    <small class="fw-bold text-secondary">{{ post.author }}</small>
                </div>
                <div class="text-muted small">
                    <i class="bi bi-chat-dots me-1"></i> {{ post.comments.length }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-hover {
    transition: all 0.3s ease;
}
.card-hover:hover {
    transform: translateY(-8px);
    box-shadow: 0 1rem 3rem rgba(0,0,0,.1) !important;
}
.avatar-circle {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    font-size: 14px;
}
/* Hiệu ứng overlay khi hover ảnh */
.overlay {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.3);
    opacity: 0;
    transition: 0.3s;
}
.card-hover:hover .overlay {
    opacity: 1;
}
/* Cắt chữ nếu quá dài */
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>