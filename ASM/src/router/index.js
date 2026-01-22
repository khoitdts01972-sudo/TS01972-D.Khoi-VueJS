import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  { 
    path: '/', 
    name: 'Home',
    component: HomeView 
  },
  { 
    path: '/login', 
    name: 'Login',
    component: () => import('../views/Login.vue') 
  },
  { 
    path: '/register', 
    name: 'Register',
    component: () => import('../views/Register.vue') 
  },
  { 
    path: '/profile', 
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    meta: { requiresAuth: true } // Yêu cầu đăng nhập mới được xem
  },
  { 
    path: '/create-post', 
    name: 'CreatePost',
    component: () => import('../views/CreatePost.vue'),
    meta: { requiresAuth: true } // Chỉ người dùng đã đăng nhập mới được đăng bài
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Kiểm tra quyền truy cập (Authentication Guard)
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('user'); // Giả lập kiểm tra đăng nhập
  
  if (to.meta.requiresAuth && !isLoggedIn) {
    // Nếu trang yêu cầu đăng nhập mà chưa có user thì chuyển về trang Login
    alert('Vui lòng đăng nhập để sử dụng tính năng này!');
    next('/login');
  } else {
    next();
  }
});

export default router;