import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import {Navigate, Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage";
import SmartServicesMore from "./pages/SmartServicesMore/SmartServicesMore";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <SmartServicesMore /> */}
      <Routes>
        <Route path = '/' element = {<HomePage />} />
        <Route path = '/login' element = {< Login />} />
        <Route path = '/register' element = {< Register />} />
        <Route path = '/smartservices' element = {< SmartServicesMore />} />
      </Routes>
      {/* <CalculatorModal /> */}
      <Footer />
    </div>
  );
}

export default App;
