<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Kiến thức sức khỏe cộng đồng</h1>
    
    <div class="row">
      <div v-for="(item, index) in items" :key="index" class="col-sm-4 mb-4">
        <div class="card h-100 border-light-subtle">
          
          <img :src="item.image" class="card-img-top" alt="Hình ảnh bài viết" />
          
          <div class="card-body text-start d-flex flex-column">
            <h3 class="card-title fw-bold">{{ item.title }}</h3>
            <p class="card-text text-secondary">{{ item.content }}</p>
            
            <div class="mt-auto">
              <button class="btn btn-info text-white px-3">Xem chi tiết</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';

const items = ref([
  { 
    title: '8 loại rau củ quả giàu canxi', 
    content: 'Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi, trong đó bổ sung qua đường ăn uống là cách tốt nhất...',
    image: img1 
  },
  { 
    title: 'Các loại gia vị tốt cho sức khỏe', 
    content: 'Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa cao hơn các loại gia vị quen thuộc khác. Với một lượng nhỏ các món ăn...',
    image: img2 
  },
  { 
    title: '9 loại đậu bổ dưỡng nên dùng nhiều', 
    content: 'Đậu lăng, đậu nành, đậu phộng, đậu Hà Lan giàu chất xơ, protein và nhiều vitamin và khoáng chất giúp giảm lượng đường trong máu...',
    image: img3 
  },
]);
</script>

<style>
/* Dòng này giúp tải Bootstrap về để chia cột và làm đẹp mà không cần sửa index.html */
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css');

/* CSS tùy chỉnh thêm */
.card-img-top {
  height: 200px;
  object-fit: cover;
}

.card {
  transition: transform 0.2s;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.card:hover {
  transform: translateY(-5px);
}

.card-title {
  font-size: 1.1rem;
  margin-bottom: 10px;
}
</style>