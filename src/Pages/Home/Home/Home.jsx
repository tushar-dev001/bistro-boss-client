
import Banner from "../Banner/Banner"
import BistroBoss from "../BistroBoss/BistroBoss"
import Category from "../Category/Category"
import ChefRecommends from "../ChefRecommendes/ChefRecommends"
import PopularMenu from "../PopularMenu/PopularMenu"
import Featured from '../Featured/Featured'
import Testmonials from "../Testmonials/Testmonials"
import CallUs from "../CallUs/CallUs"

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Category></Category>
        <BistroBoss></BistroBoss>
        <PopularMenu></PopularMenu>
        <CallUs></CallUs>
        <ChefRecommends></ChefRecommends>
        <Featured></Featured>
        <Testmonials></Testmonials>
    </div>
  )
}

export default Home