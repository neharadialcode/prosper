import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Predict from "./components/Predict";
import Advantages from "./components/Advantages";
import Architecture from "./components/Architecture";
import Liquidity from "./components/Liquidity";
import Token from "./components/Token";
import Prediction from "./components/Prediction";
import CustomPool from "./components/CustomPool";
import OurBackers from "./components/OurBackers";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Predict />
      <Advantages />
      <Architecture />
      <Liquidity />
      <Token />
      <Prediction />
      <CustomPool />
      <OurBackers />
      <Footer />
    </div>
  );
}

export default App;
