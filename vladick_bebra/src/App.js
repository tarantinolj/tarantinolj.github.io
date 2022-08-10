import React from "react";
import "../src/css/style.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from './components/Footer';



export default function App() {
  return (
    <div className="container">
        <div className="wrapper">
          <Header/>
          <MainContent/>
          <Footer/>
        </div>
    </div>
  );
}


