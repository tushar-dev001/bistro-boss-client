
import Banner from "../Banner/Banner"
import BistroBoss from "../BistroBoss/BistroBoss"
import Category from "../Category/Category"
import ChefRecommends from "../ChefRecommendes/ChefRecommends"
import PopularMenu from "../PopularMenu/PopularMenu"
import Featured from '../Featured/Featured'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Category></Category>
        <BistroBoss></BistroBoss>
        <PopularMenu></PopularMenu>
        <ChefRecommends></ChefRecommends>
        <Featured></Featured>
    </div>
  )
}

export default Home