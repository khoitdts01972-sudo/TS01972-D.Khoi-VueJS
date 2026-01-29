<script setup>
import { useRoute } from 'vue-router';
import { computed, ref } from 'vue';
import { store } from '../store';

const route = useRoute();
const postId = parseInt(route.params.id);
const commentText = ref('');

const post = computed(() => store.posts.find(p => p.id === postId));

const addComment = () => {
    if(!store.user) return alert("Vui lòng đăng nhập!");
    post.value.comments.push({ user: store.user.name, text: commentText.value });
    commentText.value = '';
    store.savePosts();
}
</script>

<template>
    <div v-if="post" class="card p-4 shadow">
        <h2>{{ post.title }}</h2>
        <p class="text-muted">Đăng bởi: {{ post.author }}</p>
        <img :src="post.image" class="img-fluid mb-3 rounded">
        <p>{{ post.content }}</p>

        <hr>
        <h5>Bình luận ({{ post.comments.length }})</h5>
        <div class="input-group mb-3">
            <input v-model="commentText" class="form-control" placeholder="Viết bình luận...">
            <button @click="addComment" class="btn btn-primary">Gửi</button>
        </div>
        <ul class="list-group">
            <li v-for="(c, i) in post.comments" :key="i" class="list-group-item">
                <strong>{{ c.user }}:</strong> {{ c.text }}
            </li>
        </ul>
    </div>
    <div v-else>Bài viết không tồn tại.</div>
</template>