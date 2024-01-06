import CallUs from "../../CallUs";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefService from "../ChefService/ChefService";
import FromOurMenu from "../FromOurMenu/FromOurMenu";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Category></Category>
        <ChefService></ChefService>
        <PopularMenu></PopularMenu>
        <CallUs></CallUs>
        <FromOurMenu></FromOurMenu>
        <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
