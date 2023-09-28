// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/category/slide1.jpg'
import slide2 from '../../../assets/category/slide2.jpg'
import slide3 from '../../../assets/category/slide3.jpg'
import slide4 from '../../../assets/category/slide4.jpg'
import slide5 from '../../../assets/category/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';



const Category = () => {
  return (
    <section>
        <SectionTitle heading="ORDER ONLINE" subHeading="From 11:00am to 10:00pm">
        </SectionTitle>
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className='text-3xl text-center text-white uppercase -mt-20'>salad</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide2} alt="" />
        <h3 className='text-3xl text-center text-white uppercase -mt-20'>soups</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide3} alt="" />
        <h3 className='text-3xl text-center text-white uppercase -mt-20'>pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide4} alt="" />
        <h3 className='text-3xl text-center text-white uppercase -mt-20'>desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide5} alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Category