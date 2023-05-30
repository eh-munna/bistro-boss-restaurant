import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../../../assets/home/slide1.jpg';
import slide2 from '../../../../assets/home/slide2.jpg';
import slide3 from '../../../../assets/home/slide3.jpg';
import slide4 from '../../../../assets/home/slide4.jpg';
import slide5 from '../../../../assets/home/slide5.jpg';

// import required modules
import { Pagination } from 'swiper';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';

const FeatureProducts = () => {
  return (
    <div className="container px-4 py-20 mx-auto">
      <SectionHeading
        subHeading={'From 11:00am to 10:00pm'}
        heading={'order online'}
      ></SectionHeading>
      <div>
        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide1} alt="" />
            <h4 className="-mt-20 text-white font-[inter] text-2xl text-center uppercase">
              salad
            </h4>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
            <h4 className="-mt-20 text-white font-[inter] text-2xl text-center uppercase">
              pizza
            </h4>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
            <h4 className="-mt-20 text-white font-[inter] text-2xl text-center uppercase">
              soup
            </h4>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
            <h4 className="-mt-20 text-white font-[inter] text-2xl text-center uppercase">
              dessert
            </h4>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="" />
            <h4 className="-mt-20 text-white font-[inter] text-2xl text-center uppercase">
              salad
            </h4>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default FeatureProducts;
