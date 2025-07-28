# Font Files

Thư mục này dành cho các file font tùy chỉnh.

## Hướng dẫn:

1. Tải font từ Google Fonts hoặc nguồn khác
2. Đặt các file .woff, .woff2, .ttf vào đây
3. Cập nhật CSS để sử dụng font

## Ví dụ CSS:

```css
@font-face {
  font-family: "CustomFont";
  src: url("../fonts/customfont.woff2") format("woff2"), url("../fonts/customfont.woff")
      format("woff");
  font-weight: normal;
  font-style: normal;
}
```
