import BuyAndSell from "./components/BuyAndSell";
import Categories from "./components/Categories";
import MostWanted from "./components/MostWanted";
import Services from "./components/Services";


import Slider from "./components/Slider";



export default function Home() {
  return (
    <div>
      <Slider />
      <BuyAndSell />
      <Categories />
      <MostWanted />
      <Services />
    </div>
  );
}
