import CallUs from "../../CallUs";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefService from "../ChefService/ChefService";
import FromOurMenu from "../FromOurMenu/FromOurMenu";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Category></Category>
        <ChefService></ChefService>
        <PopularMenu></PopularMenu>
        <CallUs></CallUs>
        <FromOurMenu></FromOurMenu>
    </div>
  );
};

export default Home;
