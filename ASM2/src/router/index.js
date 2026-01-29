import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import PostDetail from '../views/PostDetail.vue'
import ProfileView from '../views/ProfileView.vue'
import CreatePost from '../views/CreatePost.vue' // <--- Dòng này hết lỗi
import { store } from '../store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/login', name: 'login', component: LoginView },
    { path: '/register', name: 'register', component: RegisterView },
    { path: '/post/:id', name: 'post-detail', component: PostDetail },
    { path: '/profile', name: 'profile', component: ProfileView, meta: { requiresAuth: true } },
    
    // Thêm dòng này để map đường dẫn /create vào file vừa tạo
    { path: '/create', name: 'create', component: CreatePost, meta: { requiresAuth: true } },
  ]
})

// ... (phần beforeEach giữ nguyên)

export default router