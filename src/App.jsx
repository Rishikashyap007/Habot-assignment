import BuyerSupplierInfo from "./Components/Buyerinfo";
import Footer from "./Components/Footer";
import HabotSignup from "./Components/HabotSignup";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import HowItWorks from "./Components/Works";

export default function App() {
  return (
    <>
     <Navbar />
     <HeroSection        />
     <HabotSignup />
     <BuyerSupplierInfo />
     <HowItWorks />
     <Footer />
    </>
  )
}