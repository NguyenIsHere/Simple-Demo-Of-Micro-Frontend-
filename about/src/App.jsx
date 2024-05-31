import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import "./index.scss";
import Header from "home/Header";
import Footer from "home/Footer";
import Button from "home/Button";

const App = () => {
  const [color, setColor] = useState('black');

  useEffect(() =>
  {
    const handleButtonClicked = (event) => {
      console.log(event.detail); // Logs: 'Button was clicked!'
      setColor(color === 'red' ? 'black' : 'red'); // Toggle the text color
    };

    window.addEventListener('buttonClicked', handleButtonClicked);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('buttonClicked', handleButtonClicked);
    };
  }, [color]); 

  return (
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      <Button />
      <div class="text-center">
        <img
          src="https://www.gstatic.com/webp/gallery/4.sm.webp"
          class="rounded-full w-32 mb-4 mx-auto"
          alt="Avatar"
        />
        <h5 style={{ color: color }}>Nhóm 18 - Micro-frontend</h5>
        <p style={{ color: color }}>Phương pháp mô hình hóa - Thầy Hoan</p>
      </div>
      <Footer />
    </div>
  );
};
const root = document.getElementById('app');
ReactDOM.createRoot(root).render(<App />);
