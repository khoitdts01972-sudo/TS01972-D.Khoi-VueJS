<template>
  <div class="page-container">
    <h2>Danh sách bài viết</h2>
    <div class="list-group">
      <router-link to="/blog/1" class="list-item">Bài viết số 1: Học VueJS</router-link>
      <router-link to="/blog/2" class="list-item">Bài viết số 2: Vue Router cơ bản</router-link>
      <router-link to="/blog/100" class="list-item">Bài viết số 100: Mẹo vặt Code</router-link>
    </div>
  </div>
</template>

<style scoped>
.page-container { padding: 20px; color: #333; }
.list-item { 
  display: block; padding: 10px; margin: 5px 0; 
  background: #f0f0f0; text-decoration: none; color: #2c3e50; border-radius: 5px;
}
.list-item:hover { background: #e0e0e0; }
</style>