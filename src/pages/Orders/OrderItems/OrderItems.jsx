import FoodCard from '../../../components/FoodCard/FoodCard';

const OrderItems = ({ items }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 pt-10`}>
      {items.map((item) => (
        <FoodCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default OrderItems;
