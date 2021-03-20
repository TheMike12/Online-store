import React from "react";
import Header from "./components/Header";
import Displays from "./components/Displays";
import Footer from "./components/Footer";
import './styles/index.css';
import './styles/Displays.css';

const App = () => {
  
  return (
    <div>
      <Header />
      <Displays />
      <Footer />       
    </div>
  )
}

export default App