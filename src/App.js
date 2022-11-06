import React from "react";
import "./App.css";

import About from "../src/component/About";
import Footer from "../src/component/Footer";
import Info from "../src/component/Info";
import Interest from "../src/component/Interest";

function App() {
  return (
    <main className="container">
      <div className="box-card">
        <div className="details">
          <Info />
          <About />
          <Interest />
          <Footer />
        </div>
      </div>
      <div className="box-card">
        <div className="details">
          <Info />
          <About />
          <Interest />
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default App;
