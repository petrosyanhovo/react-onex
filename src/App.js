import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import Heading from "./components/home/Heading/Heading";
import HowToStart from "./components/home/HowToStart/HowToStart";
import Slider from "./components/home/Slider/Slider";
import Tracking from "./components/home/Tracking/Tracking";
import ShippingPriceList from "./components/home/ShippingPriceList/ShippingPriceList";
import SmartServices from "./components/home/SmartServices/SmartServices";
import Export from "./components/home/Export/Export";
import SmartWall from "./components/home/SmartWall/SmartWall";
import SmartLocker from "./components/home/SmartLocker/SmartLocker";
import FamousShops from "./components/home/FamousShops/FamousShops";
import { CalculatorModal } from "./pages/CalculatorModal/CalculatorModal";
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <CalculatorModal /> */}
      <Slider />
      <Tracking />
      <HowToStart />
      <ShippingPriceList />
      <SmartServices />
      <Export />
      <SmartWall />
      <SmartLocker />
      <FamousShops />
      <Footer />
    </div>
  );
}

export default App;
