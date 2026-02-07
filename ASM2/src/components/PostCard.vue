<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';
defineProps({ post: Object });
</script>

<template>
    <div class="card h-100 border-0 shadow-sm custom-card">
        <div class="position-relative">
            <img :src="post.image || 'https://via.placeholder.com/600x400'" class="card-img-top" style="height: 200px; object-fit: cover;">
            <span class="badge bg-primary position-absolute top-0 end-0 m-3 shadow-sm">Tin tức</span>
        </div>
        
        <div class="card-body d-flex flex-column p-4">
            <h5 class="card-title fw-bold mb-3">
                <RouterLink :to="'/post/' + post.id" class="text-decoration-none text-dark stretched-link">
                    {{ post.title }}
                </RouterLink>
            </h5>
            
            <p class="card-text text-secondary small line-clamp-3 mb-4 flex-grow-1">
                {{ post.content }}
            </p>
            
            <div class="d-flex align-items-center border-top pt-3 mt-auto">
                <div class="d-flex align-items-center gap-2">
                    <div class="bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center" style="width: 32px; height: 32px; font-size: 12px;">
                        {{ post.author.charAt(0).toUpperCase() }}
                    </div>
                    <div>
                        <small class="fw-bold d-block text-dark">{{ post.author }}</small>
                        <small class="text-muted" style="font-size: 11px;">Vừa xong</small>
                    </div>
                </div>
                <div class="ms-auto text-muted small">
                    <i class="bi bi-chat-left-text me-1"></i> {{ post.comments.length }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.custom-card {
    border-radius: 12px;
    background: white;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.custom-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.08) !important;
}
.line-clamp-3 {
    display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
}
</style>