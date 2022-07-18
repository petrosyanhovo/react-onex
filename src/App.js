import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { Routes, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SmartServicesMore from "./pages/SmartServicesMore/SmartServicesMore";
import ExportToUSA from "./pages/ExportToUSA/ExportToUSA";
import { Search } from "./pages/Search/Search";
import ExportToRussia from "./pages/ExportToRussia/ExportToRussia";
import ExportDocuments from "./pages/ExportDocuments/ExportDocuments";
import { ContactUs } from "./pages/ContactUs/ContactUs";
import Orders from "./pages/Orders/Orders";
import ShopsPage from "./pages/Shops/ShopsPage";
import SmartWallPage from "./pages/SmartWallPage/SmartWallPage";
import { ProtectedRoute } from "./protectedRoute";
import useAuth from "./useAuth";
import SimpleForm from "./components/ChatBot/ChatBot";

function App() {
  const { isAuth, login, logout } = useAuth();
  return (
    <div className="App">
      <Header isAuth={isAuth} logout={logout} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={<Login isAuth={isAuth} login={login} />}
        />
        {/* <Route path="/login/orders" element={<Orders />} auth={false} /> */}
        <Route
          path="/orders"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Orders logout={logout} />
            </ProtectedRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<Search />} />
        <Route path="/smartservices" element={<SmartServicesMore />} />
        <Route path="/exporttoUSA" element={<ExportToUSA />} />
        <Route path="/exporttorussia" element={<ExportToRussia />} />
        <Route path="/exportdocuments" element={<ExportDocuments />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/shops" element={<ShopsPage />} />
        <Route path="/smartwall" element={<SmartWallPage />} />
      </Routes>
      {/* <CalculatorModal /> */}
      <Footer />
      {/* <SimpleForm /> */}
    </div>
  );
}

export default App;
