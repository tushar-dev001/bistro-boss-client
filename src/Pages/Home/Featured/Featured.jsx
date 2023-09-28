import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import featured from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
  return (
    <section className="featured-items py-8 my-10">
        <SectionTitle heading="FROM OUR MENU" subHeading="Check it out"></SectionTitle>

        <div className="md:flex px-20 py-10 justify-center items-center text-white bg-slate-300 bg-opacity-40" >
        <div className="">
            <img src={featured} alt="" />
        </div>
        <div className="md:ml-16">
            <h5 className="text-lg">Mearch 20, 2023</h5>
            <h3 className="text-2xl my-2">WHERE CAN I GET SOME?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus adipisci aliquid iure nulla, nemo perferendis consectetur soluta quas dicta ipsa, earum magni non provident eligendi, est ab dolorem ex dolores nostrum perspiciatis sunt repellendus officia. Incidunt explicabo repellendus dolorem nobis reiciendis corporis, minima aliquam itaque earum dolores non fuga excepturi?</p>
            <button className="uppercase btn btn-outline mt-5 text-white border-0 border-b-4 border-b-black hover:bg-black hover:text-white">Read more</button>
        </div>
        </div>
        
    </section>
  )
}

export default Featured