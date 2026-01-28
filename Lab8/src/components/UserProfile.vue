<template>
  <div class="page-container">
    <h2>Hồ sơ người dùng</h2>
    <div class="nav-tabs">
      <router-link to="/profile/info" class="tab">Thông tin</router-link>
      <router-link to="/profile/settings" class="tab">Cài đặt</router-link>
    </div>
    
    <div class="nested-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.page-container { padding: 20px; color: #333; }
.nav-tabs { display: flex; gap: 10px; margin-bottom: 20px; }
.tab { 
  padding: 8px 16px; background: #3498db; color: white; 
  text-decoration: none; border-radius: 4px; 
}
.nested-view { border: 2px dashed #ccc; padding: 20px; margin-top: 10px; }
</style>