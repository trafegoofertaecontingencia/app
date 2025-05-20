import BuyAndSell from "./components/BuyAndSell";
import Categories from "./components/Categories";
import MostWanted from "./components/MostWanted";
import Services from "./components/Services";

export default function Home() {
  return (
    <div>
      <BuyAndSell />
      <Categories />
      <MostWanted />
      <Services />
    </div>
  );
};
