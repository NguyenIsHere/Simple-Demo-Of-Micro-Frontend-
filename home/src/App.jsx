import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./index.scss";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="my-10">
      Home page Content
    </div>
    <Footer />
  </div>
);
const root = document.getElementById('app');
ReactDOM.createRoot(root).render(<App />);

