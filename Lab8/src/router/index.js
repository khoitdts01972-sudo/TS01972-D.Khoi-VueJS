import { createRouter, createWebHistory } from 'vue-router';

// Import các component (Chúng ta sẽ tạo ở Bước 3)
import Home from '../components/Home.vue';
import BlogList from '../components/BlogList.vue';
import BlogPost from '../components/BlogPost.vue';
import UserProfile from '../components/UserProfile.vue';
import Login from '../components/Login.vue';
import Dashboard from '../components/Dashboard.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/blog', name: 'BlogList', component: BlogList },
  
  // Route động (Dynamic Route) lấy ID bài viết
  { path: '/blog/:id', name: 'BlogPost', component: BlogPost },

  // Route lồng nhau (Nested Route) & Alias
  { 
    path: '/profile', 
    name: 'UserProfile', 
    component: UserProfile,
    alias: '/me', // Alias: truy cập /me cũng ra profile
    children: [
      {
        path: 'info', // -> /profile/info
        name: 'UserInfo',
        component: { template: '<h3>Thông tin cá nhân: Nguyễn Văn A (Admin)</h3>' } 
      },
      {
        path: 'settings', // -> /profile/settings
        name: 'UserSettings',
        component: { template: '<h3>Cài đặt: Đổi mật khẩu, Giao diện...</h3>' }
      }
    ]
  },

  { path: '/login', name: 'Login', component: Login },
  
  // Route được bảo vệ (Protected Route)
  { 
    path: '/dashboard', 
    name: 'Dashboard', 
    component: Dashboard,
    meta: { requiresAuth: true } // Đánh dấu cần đăng nhập
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Route Guard: Kiểm tra đăng nhập trước khi vào Dashboard
router.beforeEach((to, from, next) => {
  // Kiểm tra xem route có cần đăng nhập không
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Kiểm tra trạng thái đăng nhập từ localStorage (giả lập)
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    
    if (!isAuthenticated) {
      next({ name: 'Login' }); // Chưa đăng nhập -> đá về trang Login
    } else {
      next(); // Đã đăng nhập -> cho qua
    }
  } else {
    next(); // Route bình thường -> cho qua luôn
  }
});

export default router;