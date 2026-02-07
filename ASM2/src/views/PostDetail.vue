<script setup>
import { useRoute, useRouter } from 'vue-router';
import { computed, ref } from 'vue';
import { store } from '../store';

const route = useRoute();
const router = useRouter();
const postId = parseInt(route.params.id);

const commentText = ref('');
const guestName = ref(''); 
const post = computed(() => store.posts.find(p => p.id === postId));

const canDelete = computed(() => {
    if (!store.user || !post.value) return false;
    if (store.user.role === 'admin') return true;
    return store.user.name === post.value.author;
});

const addComment = () => {
    if(!commentText.value.trim()) return;
    const authorName = store.user ? store.user.name : (guestName.value.trim() || 'Khách');
    post.value.comments.push({ user: authorName, text: commentText.value });
    commentText.value = ''; guestName.value = ''; 
    store.savePosts();
}

const handleDelete = () => {
    if(confirm("Xác nhận xóa bài viết?")) {
        store.deletePost(postId);
        router.push('/');
    }
}
</script>

<template>
    <div v-if="post" class="row justify-content-center pb-5">
        <div class="col-lg-9">
            <div class="bg-white p-5 rounded-3 shadow-sm border mb-4 position-relative">
                
                <div v-if="canDelete" class="position-absolute top-0 end-0 p-4">
                    <button @click="handleDelete" class="btn btn-outline-danger btn-sm">
                        <i class="bi bi-trash"></i> Xóa bài
                    </button>
                </div>

                <span class="badge bg-light text-primary border mb-3">Tin tức</span>
                <h1 class="fw-bold text-dark mb-3">{{ post.title }}</h1>
                
                <div class="d-flex align-items-center text-muted mb-4 small">
                    <span class="fw-bold text-dark me-2">{{ post.author }}</span>
                    <span class="me-2">•</span>
                    <span>Hôm nay</span>
                </div>

                <img :src="post.image" class="w-100 rounded-3 mb-4" style="height: 400px; object-fit: cover;">
                
                <div class="content-text text-dark lh-lg fs-5">
                    {{ post.content }}
                </div>
            </div>

            <div class="bg-white p-5 rounded-3 shadow-sm border">
                <h4 class="fw-bold mb-4">Bình luận ({{ post.comments.length }})</h4>

                <div class="mb-4">
                    <div v-if="!store.user" class="mb-2 w-50">
                        <input v-model="guestName" class="form-control" placeholder="Tên của bạn...">
                    </div>
                    <div class="d-flex gap-2">
                        <input v-model="commentText" class="form-control" placeholder="Viết bình luận...">
                        <button @click="addComment" class="btn btn-primary px-4">Gửi</button>
                    </div>
                </div>

                <div class="d-flex flex-column gap-3">
                    <div v-for="(c, i) in post.comments" :key="i" class="border-bottom pb-3">
                        <div class="fw-bold text-dark d-flex align-items-center gap-2">
                            {{ c.user }}
                            <span v-if="!store.user && c.user === 'Khách'" class="badge bg-secondary" style="font-size: 10px;">Guest</span>
                        </div>
                        <div class="text-secondary mt-1">{{ c.text }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.content-text { white-space: pre-line; text-align: justify; }
</style>