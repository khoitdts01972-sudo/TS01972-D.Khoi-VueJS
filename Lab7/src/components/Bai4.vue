<template>
  <div>
    <LoginComponent 
      v-if="!isLoggedIn" 
      @loggedIn="handleLoginSuccess" 
    />

    <CommentComponent 
      v-else 
      :username="loggedInUser" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
// Import 2 component con
import LoginComponent from './LoginComponent.vue';
import CommentComponent from './CommentComponent.vue';

const isLoggedIn = ref(false);
const loggedInUser = ref('');

// Xử lý khi nhận sự kiện loggedIn từ con
function handleLoginSuccess(user) {
  loggedInUser.value = user;
  isLoggedIn.value = true;
}
</script>