import useCart from '../../../hooks/useCart';
import CartRow from './CartRow';

const MyCart = () => {
  const [cart, refetch] = useCart();

  const productTotal = cart.reduce((sum, item) => item.price + sum, 0);

  return (
    <div className="">
      <h2 className="text-xl text-center">My Cart</h2>
      <div className="flex justify-center items-center gap-3 pt-4">
        <h3 className="text-lg">Total orders : {cart.length}</h3>
        <h3 className="text-lg">Total price : €{productTotal}</h3>
        <button className="bg-yellow-500 text-black px-4 py-1 rounded-lg">
          pay
        </button>
      </div>
      <div className="grid grid-cols-4 pt-6 justify-center items-center">
        <div>Image</div>
        <div>Name</div>
        <div>Price</div>
        <div>Action</div>
      </div>
      <div>
        {cart.map((cartItem) => (
          <CartRow key={cartItem._id} cartItem={cartItem} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default MyCart;
