import { useEffect, useState } from 'react';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="container mx-auto py-20 px-4">
      <SectionHeading
        subHeading={'what our client says'}
        heading={'testimonials'}
      />
    </div>
  );
};

export default Testimonials;
