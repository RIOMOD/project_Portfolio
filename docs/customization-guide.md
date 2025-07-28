# Hướng dẫn tùy chỉnh Portfolio

## 🎨 Thay đổi màu sắc

### Primary Colors

```css
:root {
  --primary-color: #0a0a0a; /* Màu nền chính */
  --secondary-color: #1a1a1a; /* Màu nền phụ */
  --accent-color: #00d4ff; /* Màu nhấn chính */
  --accent-secondary: #ff6b6b; /* Màu nhấn phụ */
  --accent-tertiary: #4ecdc4; /* Màu nhấn thứ 3 */
}
```

### Gradient Presets

```css
--gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
--gradient-tertiary: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
```

## ✍️ Thay đổi nội dung

### Hero Section

1. Mở `index.html`
2. Tìm section với `id="home"`
3. Chỉnh sửa:
   - `.hero-title` - Tiêu đề chính
   - `.hero-subtitle` - Mô tả ngắn
   - `.hero-description` - Mô tả chi tiết

### About Section

1. Cập nhật `.about-text` với thông tin cá nhân
2. Thay đổi `.about-stats` với số liệu thật
3. Thêm ảnh profile vào `assets/images/profile.jpg`

### Skills Section

1. Mở file `index.html`
2. Tìm `.skill-category`
3. Thêm/sửa/xóa skills trong `<ul>`

### Projects Section

1. Duplicate `.project-card` để thêm dự án mới
2. Cập nhật:
   - `data-category` cho filter
   - Hình ảnh project
   - Tên và mô tả dự án
   - Tech stack
   - Links demo/code

## 📱 Thêm tính năng mới

### Analytics Integration

```html
<!-- Thêm vào <head> -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_MEASUREMENT_ID");
</script>
```

### Contact Form Backend

```javascript
// Trong initContactForm(), thay thế phần simulate
const response = await fetch("/api/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name,
    email,
    subject,
    message,
  }),
});
```

## 🚀 Performance Optimization

### Image Optimization

1. Sử dụng WebP format
2. Resize ảnh theo breakpoints
3. Lazy loading cho images

### CSS/JS Minification

```bash
# Using npm packages
npm install -g clean-css-cli uglify-js
cleancss -o style.min.css style.css
uglifyjs script.js -o script.min.js
```

### CDN Integration

```html
<!-- Thay thế local files bằng CDN -->
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
/>
```

## 🔧 Development Tips

### Local Development Server

```bash
# Python
python -m http.server 8000

# Node.js
npx http-server

# VS Code Live Server extension
```

### Git Workflow

```bash
git add .
git commit -m "feat: add new project section"
git push origin main
```

### Browser Testing

- Chrome DevTools - Performance tab
- Lighthouse audit
- Cross-browser testing (BrowserStack)

---

💡 **Pro Tips:**

- Giữ code clean và có comment
- Test trên mobile devices thật
- Optimize cho Core Web Vitals
- Regular backup và version control
