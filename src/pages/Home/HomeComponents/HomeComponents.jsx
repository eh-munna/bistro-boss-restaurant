import Slider from './Slider/Slider';
import FeatureProducts from './FeatureProducts/FeatureProducts';
import PopularMenu from './PopularMenu/PopularMenu';
import FeaturedItem from './FeaturedItem/FeaturedItem';
import Testimonials from './Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';
const HomeComponents = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Home</title>
      </Helmet>
      <Slider />
      <FeatureProducts />
      <PopularMenu />
      <FeaturedItem />
      <Testimonials />
    </div>
  );
};

export default HomeComponents;
