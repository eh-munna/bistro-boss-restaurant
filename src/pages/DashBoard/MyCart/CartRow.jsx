import Swal from 'sweetalert2';
import useCart from '../../../hooks/useCart';

const CartRow = ({ cartItem, refetch }) => {
  // const [, refetch] = useCart();
  const { _id, name, price, image } = cartItem;

  const deleteItem = (_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${_id}`, {
          method: 'DELETE',
        })
          .then((result) => result.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch();
              alert('deleted');
            }
          });
      }
    });
  };

  return (
    <div className="grid grid-cols-4 pt-6 justify-center items-center">
      <div>
        <img
          src={image}
          alt=""
          className="max-w-full w-16 h-16 rounded-md shadow-2xl"
        />
      </div>
      <div>{name}</div>
      <div>{price}</div>
      <div>
        <button
          onClick={() => deleteItem(_id)}
          className="px-3 py-1 bg-sky-500"
        >
          x
        </button>
      </div>
    </div>
  );
};

export default CartRow;
