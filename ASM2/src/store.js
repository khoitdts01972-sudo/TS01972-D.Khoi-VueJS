import { reactive } from 'vue';

const getSafeData = (key, defaultValue) => {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : defaultValue;
    } catch (e) {
        return defaultValue;
    }
}

const defaultPosts = [
    { 
        id: 1, 
        title: "Chào mừng đến với VueJS", 
        content: "Đây là bài viết mẫu. Admin có thể xóa bài này.", 
        author: "System", 
        image: "https://via.placeholder.com/600x300", 
        comments: [] 
    }
];

export const store = reactive({
    user: getSafeData('currentUser', null),
    posts: getSafeData('posts', defaultPosts),

    login(email, password) {
        const users = getSafeData('users', []);
        
        // --- LOGIC ADMIN ---
        // Tài khoản Admin cứng: admin@gmail.com / 123
        if(email === "admin@gmail.com" && password === "123") {
             const adminUser = { 
                 name: "Admin Vip", 
                 email: email, 
                 role: 'admin' // <--- Gắn thẻ Admin ở đây
             };
             this.user = adminUser;
             localStorage.setItem('currentUser', JSON.stringify(adminUser));
             return true;
        }

        const found = users.find(u => u.email === email && u.password === password);
        if (found) {
            // User thường thì role là 'user'
            this.user = { ...found, role: 'user' };
            localStorage.setItem('currentUser', JSON.stringify(this.user));
            return true;
        }
        return false;
    },

    register(userData) {
        const users = getSafeData('users', []);
        if(users.find(u => u.email === userData.email)) return false;
        
        // Mặc định đăng ký mới là User thường
        users.push({ ...userData, role: 'user' });
        localStorage.setItem('users', JSON.stringify(users));
        return true;
    },

    logout() {
        this.user = null;
        localStorage.removeItem('currentUser');
    },

    savePosts() {
        localStorage.setItem('posts', JSON.stringify(this.posts));
    },

    deletePost(id) {
        this.posts = this.posts.filter(post => post.id !== id);
        this.savePosts();
    },

    // --- MỚI THÊM: HÀM CẬP NHẬT THÔNG TIN CÁ NHÂN ---
    updateUser(newInfo) {
        if (!this.user) return;

        // 1. Cập nhật thông tin user hiện tại trong Session (RAM + LocalStorage)
        // Dùng spread operator (...) để giữ lại email và role, chỉ ghi đè name, avatar, password
        this.user = { ...this.user, ...newInfo };
        localStorage.setItem('currentUser', JSON.stringify(this.user));

        // 2. Cập nhật trong danh sách tổng 'users' (Database giả)
        // Để lần sau đăng nhập lại thì thông tin mới vẫn còn
        const users = getSafeData('users', []);
        const index = users.findIndex(u => u.email === this.user.email);
        
        if (index !== -1) {
            // Nếu tìm thấy user trong danh sách, cập nhật thông tin mới
            users[index] = { ...users[index], ...newInfo };
            localStorage.setItem('users', JSON.stringify(users));
        }
    }
});