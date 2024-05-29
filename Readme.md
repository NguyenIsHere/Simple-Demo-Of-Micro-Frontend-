Xây dựng một website đơn giản theo kiến trúc micro-frontend
Làm theo hướng Client-side composition bằng cách sử Module Federation được hỗ trợ bởi Webpack5
Website bao gồm hai trang được triển khai trên 2 port khác nhau (giả sử như 2 team làm việc riêng biệt) bao gồm page home và page about
Trong đó team home xây dựng các components Header và Footer, team about xây dựng phần giới thiệu. Nhiệm vụ là team about sẽ lấy các component (hay các modules) được cung cấp bởi team home và sử dụng chúng ở page about

Tech Stack

Frontend Framework: React.js
Module Federation: Webpack5
CSS: Tailwind
Kiểm tra các module bằng cách truy cập vào phần webpack config,
kiểm tra ở phần exposes ở home là các module được đưa ra public để sử dụng
kiểm tra ở phần remote ở about là phần import về để sử dụng vào frontend

Step 1: Clone repo -> open folder VSCode 
Step 2: Open New Terminal -> cd home -> yarn start
Step 2: Open New Terminal -> cd about -> yarn start