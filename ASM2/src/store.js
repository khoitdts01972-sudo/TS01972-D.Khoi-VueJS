import { reactive } from 'vue';

// Hàm an toàn để lấy dữ liệu, nếu lỗi thì trả về mảng rỗng
const getSafeData = (key, defaultValue) => {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : defaultValue;
    } catch (e) {
        console.error("Dữ liệu lỗi, đang reset lại...", e);
        return defaultValue;
    }
}

// Dữ liệu mẫu để web không bị trống trơn
const defaultPosts = [
    { 
        id: 1, 
        title: "Chào mừng đến với VueJS", 
        content: "Đây là bài viết mẫu đầu tiên. Bạn có thể xóa nó hoặc thêm bài mới.", 
        author: "Admin", 
        image: "https://via.placeholder.com/600x300", 
        comments: [] 
    }
];

export const store = reactive({
    // Sử dụng hàm an toàn để lấy User và Posts
    user: getSafeData('currentUser', null),
    posts: getSafeData('posts', defaultPosts),

    login(email, password) {
        const users = getSafeData('users', []);
        // Admin mặc định để test cho nhanh
        if(email === "admin@gmail.com" && password === "123") {
             const adminUser = { name: "Admin Vip", email: email };
             this.user = adminUser;
             localStorage.setItem('currentUser', JSON.stringify(adminUser));
             return true;
        }

        const found = users.find(u => u.email === email && u.password === password);
        if (found) {
            this.user = found;
            localStorage.setItem('currentUser', JSON.stringify(found));
            return true;
        }
        return false;
    },

    register(userData) {
        const users = getSafeData('users', []);
        if(users.find(u => u.email === userData.email)) return false;
        
        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));
        return true;
    },

    logout() {
        this.user = null;
        localStorage.removeItem('currentUser');
    },

    savePosts() {
        localStorage.setItem('posts', JSON.stringify(this.posts));
    }
});