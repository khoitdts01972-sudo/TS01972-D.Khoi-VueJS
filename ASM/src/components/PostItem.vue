<template>
  <div class="card mb-4 shadow-sm border-0">
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-start">
        <h4 class="card-title text-primary">{{ post.title }}</h4>
        <div class="btn-group">
          <button @click="$emit('edit')" class="btn btn-outline-warning btn-sm">Sửa</button>
          <button @click="$emit('delete')" class="btn btn-outline-danger btn-sm">Xóa</button>
        </div>
      </div>
      <p class="card-text text-secondary">{{ post.content }}</p>
      
      <hr>
      <h6>Bình luận ({{ post.comments.length }})</h6>
      <div v-for="(comment, index) in post.comments" :key="index" class="small mb-2 p-2 bg-light rounded">
        <strong>{{ comment.user }}:</strong> {{ comment.text }}
        <div class="text-muted" style="font-size: 0.75rem;">{{ comment.time }}</div>
      </div>

      <div class="input-group mt-3">
        <input v-model="commentText" class="form-control form-control-sm" placeholder="Viết bình luận...">
        <button @click="submitComment" class="btn btn-dark btn-sm">Gửi</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps(['post']);
const emit = defineEmits(['edit', 'delete', 'add-comment']);
const commentText = ref('');

const submitComment = () => {
  if (commentText.value.trim()) {
    emit('add-comment', commentText.value);
    commentText.value = '';
  }
};
</script>