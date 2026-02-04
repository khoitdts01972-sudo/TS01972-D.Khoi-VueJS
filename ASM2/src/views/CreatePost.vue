<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { store } from '../store';

const title = ref('');
const content = ref('');
const image = ref('');
const router = useRouter();

const submitPost = () => {
    if (!title.value || !content.value) {
        alert("Vui lòng nhập tiêu đề và nội dung!");
        return;
    }
    const newPost = {
        id: Date.now(),
        title: title.value,
        content: content.value,
        image: image.value || 'https://via.placeholder.com/600x300',
        author: store.user ? store.user.name : 'Ẩn danh',
        comments: []
    };
    store.posts.unshift(newPost);
    store.savePosts();
    router.push('/');
}
</script>

<template>
    <div class="row justify-content-center">
        <div class="col-lg-8">
            <div class="glass-effect p-4 p-md-5 rounded-5 position-relative">
                <div class="d-flex align-items-center justify-content-between mb-4">
                    <h2 class="fw-bold m-0 text-dark"><i class="bi bi-pencil-square text-primary me-2"></i>Viết Bài Mới</h2>
                    <router-link to="/" class="btn btn-sm btn-light rounded-circle shadow-sm" style="width: 40px; height: 40px; display:grid; place-items:center;">
                        <i class="bi bi-x-lg"></i>
                    </router-link>
                </div>

                <form @submit.prevent="submitPost">
                    <div class="mb-4">
                        <label class="fw-bold small ms-2 mb-1 text-secondary">Tiêu đề bài viết</label>
                        <input v-model="title" class="form-control form-control-lg rounded-4 border-0 bg-white bg-opacity-60 shadow-sm" placeholder="Nhập tiêu đề thật ấn tượng..." required>
                    </div>
                    
                    <div class="mb-4">
                        <label class="fw-bold small ms-2 mb-1 text-secondary">Link hình ảnh (URL)</label>
                        <input v-model="image" class="form-control rounded-4 border-0 bg-white bg-opacity-60 shadow-sm" placeholder="https://example.com/image.jpg">
                        <div class="form-text ms-2 text-white text-opacity-75 small">Để trống sẽ dùng ảnh mặc định.</div>
                    </div>

                    <div class="mb-4">
                        <label class="fw-bold small ms-2 mb-1 text-secondary">Nội dung</label>
                        <textarea v-model="content" class="form-control rounded-4 border-0 bg-white bg-opacity-60 shadow-sm" rows="8" placeholder="Chia sẻ câu chuyện của bạn tại đây..." required></textarea>
                    </div>

                    <div class="d-flex gap-3">
                        <button type="submit" class="btn btn-primary px-5 rounded-pill py-3 fw-bold flex-grow-1 shadow-lg">Đăng Bài Viết</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>