import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SmartServicesMore from "./pages/SmartServicesMore/SmartServicesMore";
import ExportToUSA from "./pages/ExportToUSA/ExportToUSA";
import { Search } from "./pages/Search/Search";
import ExportToRussia from "./pages/ExportToRussia/ExportToRussia";

function App() {
  return (
    <div className="App">
      <Header />
      <ExportToRussia />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<Search />} />
        <Route path="/smartservices" element={<SmartServicesMore />} />
        <Route path="/exporttoUSA" element={<ExportToUSA />} />
      </Routes>
      {/* <CalculatorModal /> */}
      <Footer />
    </div>
  );
}

export default App;
