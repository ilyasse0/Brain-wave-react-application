import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Button from "./components/Button";
import Header from "./components/Header";
import Hero from "./components/hero";
import Collabotation from "./components/Collabotation";
import Services from "./components/Services";
import Priicing from "./components/Pricing";
import Footer from "./components/Footer";

const App = () =>{
  return (
    <>
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden" >
      <Header></Header>
      <Hero></Hero>
      <Benefits></Benefits>
      <Collabotation></Collabotation>
      <Services></Services>
      <Priicing></Priicing>
      <Footer></Footer>

      
    </div>
    <ButtonGradient/>

 
    </>
  );

  
};
export default App;