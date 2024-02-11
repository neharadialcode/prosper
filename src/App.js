import "./App.css";
import Advantages from "./components/Advantages";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Liquidity from "./components/Liquidity";
import OurBackers from "./components/OurBackers";
import Predict from "./components/Predict";
import Prediction from "./components/Prediction";
import Token from "./components/Token";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Predict />
      <Advantages />
      {/* <Architecture /> */}
      <Liquidity />
      <Token />
      <Prediction />
      {/* <CustomPool /> */}
      <OurBackers />
      <Footer />
    </div>
  );
}

export default App;
