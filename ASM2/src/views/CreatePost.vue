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
        id: Date.now(), // Tạo ID ngẫu nhiên
        title: title.value,
        content: content.value,
        image: image.value || 'https://via.placeholder.com/600x300',
        author: store.user ? store.user.name : 'Ẩn danh',
        comments: []
    };

    store.posts.unshift(newPost); // Thêm bài mới vào đầu danh sách
    store.savePosts(); // Lưu vào localStorage
    
    alert("Đăng bài thành công!");
    router.push('/'); // Chuyển về trang chủ
}
</script>

<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card shadow p-4">
                <h3 class="text-center text-primary mb-4">Viết Bài Mới</h3>
                <form @submit.prevent="submitPost">
                    <div class="mb-3">
                        <label class="form-label fw-bold">Tiêu đề bài viết</label>
                        <input v-model="title" type="text" class="form-control" placeholder="Nhập tiêu đề..." required>
                    </div>
                    
                    <div class="mb-3">
                        <label class="form-label fw-bold">Link hình ảnh (URL)</label>
                        <input v-model="image" type="text" class="form-control" placeholder="https://...">
                        <div class="form-text">Để trống sẽ dùng ảnh mặc định.</div>
                    </div>

                    <div class="mb-3">
                        <label class="form-label fw-bold">Nội dung</label>
                        <textarea v-model="content" class="form-control" rows="6" placeholder="Nội dung bài viết..." required></textarea>
                    </div>

                    <div class="d-flex gap-2">
                        <button type="submit" class="btn btn-primary flex-grow-1">Đăng bài</button>
                        <router-link to="/" class="btn btn-secondary">Hủy</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>