<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';
defineProps({ post: Object });
</script>

<template>
    <div class="glass-card h-100 d-flex flex-column">
        <div class="img-container position-relative">
            <img :src="post.image || 'https://via.placeholder.com/600x400'" class="card-img">
            <div class="hover-overlay">
                <RouterLink :to="'/post/' + post.id" class="btn btn-light rounded-pill px-4 fw-bold shadow">
                    Đọc tiếp
                </RouterLink>
            </div>
            <div class="category-tag">Tin tức mới nhất</div>
        </div>
        
        <div class="card-body p-4 d-flex flex-column flex-grow-1">
            <h5 class="fw-bold mb-2 text-truncate-2">{{ post.title }}</h5>
            <p class="text-secondary small text-truncate-3 mb-4">{{ post.content }}</p>
            
            <div class="mt-auto d-flex align-items-center justify-content-between pt-3 border-top border-light">
                <div class="d-flex align-items-center gap-2">
                    <img :src="`https://ui-avatars.com/api/?name=${post.author}&background=random`" class="rounded-circle" width="30">
                    <span class="fw-bold small text-dark">{{ post.author }}</span>
                </div>
                <div class="text-muted small">
                    <i class="bi bi-chat-fill text-primary opacity-50 me-1"></i> {{ post.comments.length }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.glass-card {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 24px;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.glass-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.95);
}

.img-container { height: 200px; overflow: hidden; position: relative; }
.card-img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; }
.glass-card:hover .card-img { transform: scale(1.1); }

.hover-overlay {
    position: absolute; inset: 0; background: rgba(0,0,0,0.3);
    display: flex; align-items: center; justify-content: center;
    opacity: 0; transition: 0.3s;
}
.glass-card:hover .hover-overlay { opacity: 1; }

.category-tag {
    position: absolute; top: 15px; left: 15px;
    background: rgba(255, 255, 255, 0.9); padding: 5px 12px;
    border-radius: 12px; font-size: 11px; font-weight: 800; text-transform: uppercase; color: #6c5ce7;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}
.text-truncate-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.text-truncate-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
</style>