import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';
import useCart from '../../hooks/useCart';

const FoodCard = ({ item }) => {
  const { _id, name, price, recipe, image } = item;
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const addToCart = (item) => {
    if (user && user.email) {
      const foodItem = {
        itemId: _id,
        name,
        price,
        recipe,
        image,
        email: user.email,
      };
      fetch(`http://localhost:5000/carts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(foodItem),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your product has been added',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      alert('Please login first');
      navigate('/sign-in', { state: { from: location } });
    }
  };

  return (
    <div className="card rounded-none shadow-xl">
      <img className="max-w-full" src={image} alt="Shoes" />

      <div className="card-body ">
        <p className="bg-slate-900 text-white absolute right-0 mr-4 top-3 px-3 py-2 font-semibold font-[inter]">
          €{price}
        </p>
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={() => addToCart(item)}
            className="rounded-md btn  bg-[#E8E8E8] text-[#BB8506] border-0 border-b-2 border-[#BB8506] hover:bg-[#111827] hover:border-[#BB8506]"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
