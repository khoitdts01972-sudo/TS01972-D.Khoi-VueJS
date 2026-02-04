<script setup>
import { useRoute, useRouter } from 'vue-router'; // Import thêm useRouter
import { computed, ref } from 'vue';
import { store } from '../store';

const route = useRoute();
const router = useRouter(); // Khai báo router để chuyển trang
const postId = parseInt(route.params.id);
const commentText = ref('');

// Tìm bài viết trong store
const post = computed(() => store.posts.find(p => p.id === postId));

// Logic kiểm tra xem người dùng hiện tại có phải tác giả không
const isAuthor = computed(() => {
    return store.user && post.value && store.user.name === post.value.author;
});

const addComment = () => {
    if(!store.user) return alert("Vui lòng đăng nhập để bình luận!");
    if(!commentText.value) return;
    post.value.comments.push({ user: store.user.name, text: commentText.value });
    commentText.value = ''; 
    store.savePosts();
}

// Hàm xử lý xóa bài
const handleDelete = () => {
    if(confirm("Bạn có chắc chắn muốn xóa bài viết này không? Hành động này không thể hoàn tác.")) {
        store.deletePost(postId); // Gọi hàm xóa trong store
        alert("Đã xóa bài viết!");
        router.push('/'); // Quay về trang chủ
    }
}
</script>

<template>
    <div v-if="post" class="row justify-content-center pb-5">
        <div class="col-lg-10">
            <div class="glass-effect p-0 rounded-5 overflow-hidden mb-5 position-relative">
                
                <div v-if="isAuthor" class="position-absolute top-0 end-0 p-4 z-3">
                    <button @click="handleDelete" class="btn btn-danger-gradient rounded-pill px-4 py-2 shadow-lg fw-bold d-flex align-items-center gap-2">
                        <i class="bi bi-trash-fill"></i> Xóa bài
                    </button>
                </div>

                <div class="position-relative">
                    <img :src="post.image" class="w-100 object-fit-cover" style="height: 400px;">
                    <div class="overlay-gradient"></div>
                    <div class="position-absolute bottom-0 start-0 p-4 p-md-5 text-white z-2">
                        <span class="badge bg-white bg-opacity-25 backdrop-blur border border-white border-opacity-25 rounded-pill px-3 py-2 mb-3">Technology</span>
                        <h1 class="fw-black display-5 mb-2">{{ post.title }}</h1>
                        <div class="d-flex align-items-center gap-2 opacity-75">
                            <i class="bi bi-person-circle"></i> {{ post.author }}
                            <span>•</span>
                            <i class="bi bi-calendar-event"></i> Hôm nay
                        </div>
                    </div>
                </div>

                <div class="p-4 p-md-5">
                    <div class="content-text lead text-secondary lh-lg">
                        {{ post.content }}
                    </div>
                </div>
            </div>

            <div class="glass-effect p-4 p-md-5 rounded-5">
                <h3 class="fw-bold mb-4 d-flex align-items-center">
                    <i class="bi bi-chat-left-heart-fill text-primary me-2"></i> 
                    Bình luận <span class="badge bg-light text-dark ms-2 rounded-pill">{{ post.comments.length }}</span>
                </h3>

                <div class="input-group mb-4 gap-2">
                    <input v-model="commentText" class="form-control rounded-pill border-0 bg-white bg-opacity-50 py-3 px-4 shadow-sm" placeholder="Viết suy nghĩ của bạn...">
                    <button @click="addComment" class="btn btn-primary rounded-circle shadow d-flex align-items-center justify-content-center" style="width: 55px; height: 55px;">
                        <i class="bi bi-send-fill fs-5"></i>
                    </button>
                </div>

                <div class="d-flex flex-column gap-3">
                    <div v-if="post.comments.length === 0" class="text-center text-muted py-3">
                        Chưa có bình luận nào. Hãy là người đầu tiên!
                    </div>
                    
                    <div v-for="(c, i) in post.comments" :key="i" class="comment-item p-3 rounded-4 bg-white bg-opacity-40 d-flex gap-3">
                        <div class="avatar-comment rounded-circle flex-shrink-0">
                            {{ c.user.charAt(0) }}
                        </div>
                        <div>
                            <div class="fw-bold text-dark">{{ c.user }}</div>
                            <div class="text-secondary">{{ c.text }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div v-else class="text-center py-5 glass-effect rounded-5 mt-5">
        <h2 class="fw-bold text-secondary">Oops! Bài viết không tồn tại.</h2>
        <router-link to="/" class="btn btn-primary rounded-pill px-4 mt-3">Về trang chủ</router-link>
    </div>
</template>

<style scoped>
.fw-black { font-weight: 800; }
.overlay-gradient {
    position: absolute; bottom: 0; left: 0; width: 100%; height: 80%;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
}
.backdrop-blur { backdrop-filter: blur(5px); }
.content-text { white-space: pre-line; text-align: justify; }

.avatar-comment {
    width: 45px; height: 45px;
    background: linear-gradient(135deg, #a29bfe, #6c5ce7);
    color: white; font-weight: bold;
    display: flex; align-items: center; justify-content: center;
}
.comment-item { transition: 0.2s; }
.comment-item:hover { background: rgba(255,255,255,0.7); }

/* Thêm style cho nút xóa màu đỏ gradient */
.btn-danger-gradient {
    background: linear-gradient(135deg, #ff7675, #d63031);
    color: white; border: none;
    transition: 0.3s;
}
.btn-danger-gradient:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(214, 48, 49, 0.4);
}
</style>