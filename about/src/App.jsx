import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Header from "home/Header";
import Footer from "home/Footer";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div class="text-center">
      <img
        src="https://www.gstatic.com/webp/gallery/4.sm.webp"
        class="rounded-full w-32 mb-4 mx-auto"
        alt="Avatar"
      />
      <h5 class="text-xl font-medium leading-tight mb-2">Nhóm 18 - Micro-frontend</h5>
      <p class="text-gray-500">Phương pháp mô hình hóa - Thầy Hoan</p>
    </div>
    <Footer />
  </div>
);
const root = document.getElementById('app');
ReactDOM.createRoot(root).render(<App />);
